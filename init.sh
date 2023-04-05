#!/bin/bash
set -e # Tells bash to immediately exit on failure off a command

REFRESH_TOKEN=$(echo "$FLOW_REFRESH_TOKEN" | base64 -d)

# Replace "id" with "refresh_token_id" because `create_refresh_token` returns
# {"id" : "...", "secret" : "..."}
# But `generate_access_token` expects
# {"refresh_token_id" : "...", "secret" : "..."}
ACCESS_TOKEN_REQUEST=$(echo "$REFRESH_TOKEN" | jq -c -r '{"refresh_token_id": .id, "secret": .secret}')

ACCESS_TOKEN=$(
    curl \
        -XPOST \
        -H "apikey: $FLOW_SUPABASE_ANON_TOKEN" \
        -H "Content-Type: application/json" \
        "https://$FLOW_SUPABASE_HOST/rest/v1/rpc/generate_access_token" \
        -d "$ACCESS_TOKEN_REQUEST" | jq -r -c '.access_token'
)
MULTI_USE_REFRESH_TOKEN=$(
    curl \
        -XPOST \
        -H "apikey: $FLOW_SUPABASE_ANON_TOKEN" \
        -H "Authorization: Bearer $ACCESS_TOKEN" \
        -H 'Content-Type: application/json' \
        "https://$FLOW_SUPABASE_HOST/rest/v1/rpc/create_refresh_token" \
        -d '{"multi_use": true, "valid_for": "1 day"}'
) 
NEW_REFRESH_TOKEN=$(echo "$MULTI_USE_REFRESH_TOKEN" | tr -d '[:space:]' | base64 -w0)

# flowctl uses `FLOW_AUTH_TOKEN` if it exists, so this effectively logs us in
export FLOW_AUTH_TOKEN=$NEW_REFRESH_TOKEN

flowctl draft select --id "$FLOW_DRAFT_ID"
flowctl draft develop --output-dir flow_specs