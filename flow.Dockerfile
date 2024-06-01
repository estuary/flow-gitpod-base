# You can find the latest tags here: https://github.com/estuary/flow/pkgs/container/flow
FROM ghcr.io/estuary/flow:v0.3.12-156-g57e1216a8 as flow_base

# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2023-09-18-16-44-58

COPY --from=flow_base /usr/local/bin/* /usr/local/bin
