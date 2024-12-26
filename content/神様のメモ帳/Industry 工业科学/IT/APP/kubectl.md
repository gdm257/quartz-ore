---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/k8s/Manager
  - flag/Feature/yaml-manifests
  - flag/Feature/kustomization-repo
  - flag/Feature/patch-manifest
scoop: kubectl
envvars:
  - KUBECONFIG
---

## Brief

- Idea
    - A CLI implements API client of [[k8s]] apiserver

- Fundamentals
    - manifests 本质是 [[kubectl]] cli 的封装
    - [[kubectl]] 本质是 api client

- References
    - [The guide to kubectl I never had. | by Jake Page | May, 2024 | Medium](https://medium.com/@jake.page91/the-guide-to-kubectl-i-never-had-3874cc6074ff)

- Ecosystem
    - [Kubectl plugins available · Krew](https://krew.sigs.k8s.io/plugins/)

## Configuration

- Philosophy
    - [配置最佳实践 | Kubernetes](https://kubernetes.io/zh-cn/docs/concepts/configuration/overview/)

- API
    - `apiVersion`
    - `kind`
    - `metadata`
    - `spec`

- Objects
    - Cluster Level Resources
        - `NameSpace`
        - `Node`
        - `Role`
        - `ClusterRole`
        - `RoleBinding`
        - `ClusterRoleBinding`
    - Metadata
        - `HPA`
        - `PodTemplate`
        - `LimitRange`
    - Workloads
        - `Pod`
        - `ReplicaSet`
        - `Deployment`
        - `StatefulSet`
        - `DaemonSet`
        - `Job`
        - `CronJob`
        - `ReplicationController` deprecated from [[k8s]] v1.11
        - `Service`
        - `Ingress`
        - `StorageClass`
        - `ConfigMap`
        - `Secret`
        - `DownwardAPI`
