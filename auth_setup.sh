#!/bin/bash

REFRESH_TOEN=$(echo "$FLOW_REFRESH_TOKEN" | base64 -d)
ACCESS_TOKEN_REQUEST=${REFRESH_TOEN/\"id\"/\"refresh_token_id\"}
ACCESS_TOKEN=$(
    curl \
        -XPOST \
        -H "apikey: $FLOW_SUPABASE_ANON_TOKEN" \
        -H "Content-Type: application/json" \
        "https://$FLOW_SUPABASE_HOST/rest/v1/rpc/generate_access_token" \
        -d "$ACCESS_TOKEN_REQUEST" | jq -r '.access_token'
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
export FLOW_AUTH_TOKEN=$NEW_REFRESH_TOKEN