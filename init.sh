#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

# TODO(johnny): We should update `flowctl` to accept a refresh token via `flowctl auth token --token $REFRESH_TOKEN`
# It should take ownership of the provided refresh token rather than create a new one, as it does today.
# It also must handle secret rotation for non-multi-use refresh tokens, as this one is.

# The --body below maps {id, secret} into {refresh_token_id, secret},
# which are the parameters expected by `generate_access_token`.
# As this is a single-use token, we can only do this one time.
ACCESS_TOKEN=$(
    flowctl raw rpc \
    --function generate_access_token \
    --body $(echo "$FLOW_REFRESH_TOKEN" | base64 -d | jq -c -r '{"refresh_token_id": .id, "secret": .secret}') \
    | jq -r -c '.access_token'
)

# Ask flowctl to create a persistent refresh token, which will be available
# in subsequent starts of the development container.
flowctl auth token --token ${ACCESS_TOKEN}

# Select and fetch the user's draft.
flowctl draft select --id "$FLOW_DRAFT_ID" > /dev/null
flowctl draft develop --target /workspace/flow/flow.yaml