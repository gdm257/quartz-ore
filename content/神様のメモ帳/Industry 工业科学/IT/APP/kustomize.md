---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CD
  - flag/Feature/yaml-manifests
  - flag/Feature/kustomization-repo
  - flag/Feature/helm-remote-chart
  - flag/Feature/patch-manifest
  - flag/Feature/kustomization-local
homepage: https://kustomize.io
commands:
  - kustomize
  - kubectl
  - kubectl kustomize
files:
  - kustomization.yaml
apiVersions:
  - kustomize.config.k8s.io/v1beta1
CRD:
  - Kustomization
version-k8s:
  - "1.14"
---

- Idea
    - Enhance [[kubectl]] manifest file
        - [[kubectl]] manifest 完全等价于**物理**集群的期望状态（desired state），二者是耦合的。如果物理集群的规模发生改变、部署需求发生变化，那么 Manifest 也要跟着变化（增删）。而 Manifest 本身难以复用，无法直接迁移到另一个物理集群，也无法在部署需求改变时一键修改，对这样的 Manifest files 进行 Version Control 还会产生很多不必要的 commits
        - [[kustomize]] 相当于对 Manifest 进行了挑选，而不是一股脑部署全部 resources
        - [[kustomize]] 强化了复用性、灵活性，以适应不同环境的部署需求（如开发环境、生成环境、测试环境），与特定环境解耦。最终的 Manifest 通过临时生成的方式获得，里边并不会包含所有 resources，而只包含所需的 resources
        - [[kustomize]] 并没有重新造轮子，而是直接使用 [[kubectl]] manifest file，作为可复用对象
        - [[kustomize]] 通过 overlays patch 补丁的方式灵活组合 resource 以满足特定场景的需求，具有很强的正交性
        - [ArgoCD + Kustomize + Sops，以更安全的方式实践 GitOps - 小马哥的博客](https://majinghe.github.io/cloud-native/argocd-kustomize-sops/)

- Pro
    - Support patch
        - 杀手锏功能
        - [[helm]] 适合发布
        - [[kustomize]] 适合 GitOps

- Con
    - 不如 [[helm]] 强大
        - [[kustomize]] 只是补全了 manifest 缺失的功能：让资源文件与特定环境解耦，但缺乏「模板化」的更多高级功能
        - [[helm]] 模板化功能更加强大，可以想象一下 [[ansible]]
        - [Kubernetes 进阶使用之 Helm，Kustomize](https://e7868a.com/helm-and-kustomize)

- Ecosystem
    - Plugin Framework
        - Transformer
            - Transformer makes `kustomize build ./ | kubectl apply -f -` to `kustomize build ./ | transformer args | kubectl apply -f -`
            - The cli is not true, but "transformer" is very similar to pipeline
            - Transormers accept results of `resources` and `generators` as input, and read `kustomization.yaml` fields as arguments, then pipe final results
            - e.g. Built-in `AnnotationTransformer` adds annotations to all resources according to `commonAnnotations` in `kustomization.yaml`
        - Generator
            - Generate new [[k8s]] objects
            - Seem like lightweight template?

- CLI
    - `kustomize <subcommand>`
        - [Commands | SIG CLI](https://kubectl.docs.kubernetes.io/references/kustomize/cmd/)

- Fundamentals
    - kustomization(.yaml)
        - all fields are transformers' parameters (ie. Everything is a transformer)
        - [The Kustomization File | SIG CLI](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/)
    - Building process
        1. `resources`
        2. `generators`
        3. `transformers`
        4. `validators`

- Configuration
    - [Kubernetes Kustomize 学习指南 | 熊鑫伟（cubxxw）的简体中文博客 🇨🇳](https://nsddd.top/zh/posts/kubernetes-for-kustomize-learning/)
    - [The Kustomization File | SIG CLI](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/)
    - `kustomization.yaml: map[string]Any`
        - [[k8s]] style
            - `apiVersion`
            - `kind`
        - Everything is a transformer. All fields are params of builtin transformers/generators
        - `resources: []string`
            - [[k8s]] manifest file path
            - kustomization directory (path)
                - `../../commonbase`
            - kustomization directory ([[HTTP|HTTPS]] or [[SSH]] [[git]] clone [[URL]])
                - `https://github.com/kubernetes-sigs/kustomize//examples/multibases/?timeout=120&ref=v3.3.1`
                - `github.com/kubernets-sigs/kustomize/examples/helloWorld?ref=test-branch` Legacy hashicorp/go-getter format
            - depth-first order
            - LIFO (later override earlier for duplicate objects with same `apiVersion`, `kind`, `namespace` and `name`)
        - `generators`
        - `transformers`
        - `validators`
        - ~~`base`~~ (deprecated in v2.1.0)
        - `buildMetadata`
        - `commonAnnotations`
            - 为所有资源加上 `annotations` 如果对应的 key 已经存在值，这个值将会被覆盖
        - `commonLabels`
            - 为所有资源的加上 label 和 label selector
        - `components`
            - idea: reuse
        - `configMapGenerator`
            - 列表中的每一条都会生成一个 configmap
        - `crds`
            - 和 `resources` 类似，`crds` 专门用于 CRD
            - `resources` 貌似本来就支持 CRD，不懂分出来干嘛
        - `generatorOptions`
            - 控制 `configMapGenerator` 和 `secretGenerator` 的行为
        - `helmCharts`
            - alternatives: [[helm-controller]], [[ArgoCD]], [[FluxCD]]
            - deps: `kustomize build --enable-helm`
            - pro: PATCH [[helm]] release!
            - con: NOT Support local [[helm]] chart
            - [Kustomize Built-Ins | SIG CLI](https://kubectl.docs.kubernetes.io/references/kustomize/builtins/#_helmchartinflationgenerator_)
        - `images`
            - 修改镜像的名称、tag 或 image digest ，而无需使用 patches
        - `labels`
        - `namePrefix`
            - 为所有资源和引用的名称添加前缀
        - `nameSuffix`
            - 为所有资源和引用的名称添加后缀
        - `namespace`
            - override namespace whether or not namespace is set
        - `openapi`
            - provide merge key and patch strategy information about custom resource types
        - `patches`
            - 在资源上添加或覆盖字段（合并）
        - ~~`patchesJson6902`~~ (deprecated in v5.0.0)
            - legal in `kustomize.config.k8s.io/v1beta1`
            - removed from `kustomize.config.k8s.io/v1`
        - ~~`patchesStrategicMerge`~~ (deprecated in v5.0.0)
        - `replacements`
            - copy fields from one source into any number of specified targets
        - `replicas`
            - 修改资源副本数
        - `secretGenerator`
            - 生成 secret 资源
        - `sortOptions`
            - `order: "legacy" | "fifo"`
        - ~~`vars`~~ (deprecated in v5.0.0)
            - alternatives: `replacements`
