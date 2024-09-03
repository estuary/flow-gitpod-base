# You can find the latest tags here: https://github.com/estuary/flow/pkgs/container/flow
FROM ghcr.io/estuary/flow:v0.5.0-2-g5fa7e6bcc as flow_base

# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2024-08-20-00-26-31

COPY --from=flow_base /usr/local/bin/* /usr/local/bin
