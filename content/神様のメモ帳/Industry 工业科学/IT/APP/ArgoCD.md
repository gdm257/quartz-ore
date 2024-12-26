---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CI
  - flag/Feature/yaml-manifests
  - flag/Feature/kustomization-repo
  - flag/Feature/helm-remote-chart
commands:
  - argocd
scoop: argocd
brew: argocd
namespaces:
  - argocd
CRD:
  - Application
  - ApplicationSet
  - AppProject
apiVersions:
  - argoproj.io/v1alpha1
---

- References
    - [Application Specification Reference - Argo CD - Declarative GitOps CD for Kubernetes](https://argo-cd.readthedocs.io/en/latest/user-guide/application-specification/)
    - [Project Specification Reference - Argo CD - Declarative GitOps CD for Kubernetes](https://argo-cd.readthedocs.io/en/latest/operator-manual/project-specification/)

- Con
    - Heavy
        - Requires large CPU/Memory, otherwise crashed
        - Especially `argocd-repo-server`
        - [Argocd repo server error "rpc error: code = Canceled desc = context canceled" · Issue #6106 · argoproj/argo-cd](https://github.com/argoproj/argo-cd/issues/6106)
        - [Repo server keeps crashing · Issue #7484 · argoproj/argo-cd](https://github.com/argoproj/argo-cd/issues/7484)

- Idea
    - GitOps for [[k8s]]

- Dependencies
    - [[kubectl]]
    - [[k8s]] cluster with CoreDNS
    - `~/.kube/config`

- Installation
    - CLI
        - `brew install argocd`
        - `scoop install argocd`
    - Deploy controllers
        - `kubectl create namespace argocd`
        - `kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`

- Configuration
    - Auto create namespace
        - `spec.syncPolicy.syncOptions[0]='CreateNamespace=true'`
        - Similar to [[helm]] `--create-namespace`
        - [Automatically create namespace with application · Issue #1809 · argoproj/argo-cd](https://github.com/argoproj/argo-cd/issues/1809)
    - Secret
        - [Secret Management - Argo CD - Declarative GitOps CD for Kubernetes](https://argo-cd.readthedocs.io/en/stable/operator-manual/secret-management/)
