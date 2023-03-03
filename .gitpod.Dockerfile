FROM ghcr.io/estuary/flow as flow_base

# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2023-02-27-14-14-03

COPY --from=flow_base /usr/local/bin/* /usr/local/bin