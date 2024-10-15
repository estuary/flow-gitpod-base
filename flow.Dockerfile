# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2024-08-20-00-26-31

# This version number is here in order to invalidate the Gitpod image cache whenever it changes.
# Otherwise, Gitpod will not know to re-build the image after we release a new flowctl version.
# From: https://github.com/gitpod-io/gitpod/issues/4126#issuecomment-830593427
ENV FLOW_VERSION=v0.5.6

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list \
    && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg \
    && sudo apt-get update -y \
    && DEBIAN_FRONTEND=noninteractive sudo apt-get install --no-install-recommends -y \
    docker.io \
    google-cloud-cli \
    slirp4netns \
    uidmap \
    && sudo rm -rf /var/lib/apt/lists/*


RUN sudo curl -o /usr/local/bin/flowctl -L "https://github.com/estuary/flow/releases/download/${FLOW_VERSION}/flowctl-x86_64-linux" \
    && sudo chmod +x /usr/local/bin/flowctl \
    && sudo curl -o /usr/local/bin/sops -L https://github.com/getsops/sops/releases/download/v3.9.0/sops-v3.9.0.linux.amd64 \
    && sudo chmod +x /usr/local/bin/sops \
    && curl -L -o /tmp/deno.zip https://github.com/denoland/deno/releases/download/v1.46.2/deno-x86_64-unknown-linux-gnu.zip \
		&& unzip /tmp/deno.zip -d /tmp \
		&& rm /tmp/deno.zip \
		&& sudo mv /tmp/deno /usr/local/bin/


