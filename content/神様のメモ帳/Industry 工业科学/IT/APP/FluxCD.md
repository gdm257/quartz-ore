---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CI
  - flag/Feature/yaml-manifests
  - flag/Feature/kustomization-repo
  - flag/Feature/helm-remote-chart
  - flag/Feature/patch-manifest
brew: fluxcd/tap/flux
scoop: main/flux
choco: flux
yay: flux-bin
nix-env: fluxcd
namespaces:
  - flux-system
CRD:
  - OCIRepository
  - HelmRepository
  - HelmChart
  - HelmRelease
  - GitRepository
  - ImageRepository
  - ImageRepositorySpec
  - ImageRepositoryStatus
  - ImagePolicy
  - ImagePolicySpec
  - ImagePolicyStatus
  - ImagePolicyChoice
  - NumericalPolicy
  - SemVerPolicy
  - ScanResult
  - TagFilter
  - Alert
  - Provider
  - Receiver
  - ReceiverSpec
  - ReceiverStatus
  - CrossNamespaceObjectReference
---

- Idea
    - GitOps for [[k8s]]

- Installation
    - Install `flux` command
    - Install Flux CD controllers
        1. `flux bootstrap [command] [flags]`
            - deploy controllers 到 cluster
            - store controllers' manifests in the Git repository
            - git hooks to auto deploy resources to cluster
            - add the git repo as source
        1. Manually by [[FluxCD]]
            - `flux install`
            - install the Flux controllers without storing their manifests in a Git repository.
        1. Manually by [[helm]]
            - `helm repo add fluxcd-community https://fluxcd-community.github.io/helm-charts`
            - `helm install --namespace flux-system flux fluxcd-community/flux2` or `helm install --namespace flux-system flux oci://ghcr.io/fluxcd-community/charts/flux2`
            - [fluxcd-community/helm-charts](https://github.com/fluxcd-community/helm-charts)
        2. Manually by [[kubectl]]
            - `kubectl apply -f https://github.com/fluxcd/flux2/releases/latest/download/install.yaml`
        - [Flux installation | Flux](https://fluxcd.io/flux/installation/)
    - Initial [[git]] repo
        - `flux bootstrap [command] [flags]`

- Ecosystem
    - [ahgraber/homelab-gitops-k3s](https://github.com/ahgraber/homelab-gitops-k3s)
