---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/k8s/Manager
  - flag/Feature/yaml-manifests
  - flag/Feature/helm-remote-chart
  - flag/Feature/helm-local-chart
frontmatter-as-page:
  - helm-repos
commands:
  - helm
protocol-scheme:
  - oci
envvars:
  - KUBECONFIG
scoop: helm
vars:
  - "{{.Values}}"
---

- References
    - [helm 简明实用指南 | mbox.dev](https://mbox.dev/dev/k8s/helm/)
    - [Kubernetes 应用包管理器 Helm 保姆级中文简明教程 - 奇妙的 Linux 世界](https://www.hi-linux.com/posts/23277.html)

- Ecosystem
    - Chart
        - `<chart>/`
            - `.helmignore`
            - `templates/`
            - `Chart.yaml`
            - `README.md`
            - `values.yaml`
            - `values.schema.json`
    - [bitnami/charts](https://github.com/bitnami/charts)
    - [Artifact Hub](https://artifacthub.io/)

- Users
    - [[cilium]]
        - 最大规模的 chart
        - 光是 `values.yaml` 就有 3500+ 行

- Philosophy
    - 模板化
        - [[helm]] ~= [[Dependency Inject|DI]] Framwork
        - [[helm]] 能够自动化对象（资源）的创建。所谓创建资源，就是传统运维「配置网络」「挂载文件」「安装依赖」「生成配置」「运行程序」等操作。
        - helm 将这些繁琐的操作模板化、模块化，使模板可复用。这些模板文件就是所谓的 `Chart`
        - 随着 charts 文件增加，这些文件本身的管理成为了问题。于是把 charts 上传到第三方公共 `repo`，这样大家都能用。就如同把 compose file 上传到 GitHub 一样
        - type & instance 之于 [[OOP]]
        - Chart & `Release` 之于 [[helm]]
        - Release 可以实现回滚。本质就是使用旧的 release 对象。由于状态机特性，回滚能保证幂等

- Alternatives
    - [[kustomize]]
        - 算是 compose file 的升级版，即模板化工具
        - Helm 基本是 Kustomize 的上位替代品，少数情况下不得不使用 Kustomize 的 patch
