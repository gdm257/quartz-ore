---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/KubeVela
vela-addon: fluxcd
OAM-ComponentDefinition:
  - config-helm-repository
  - helm
  - kustomize
OAM-TraitDefinition:
  - kustomize-json-patch
  - kustomize-patch
  - kustomize-strategy-merge
---

- References
    - [catalog/addons/fluxcd at master · kubevela/catalog](https://github.com/kubevela/catalog/tree/master/addons/fluxcd)

- Fundamentals
    - Addon
        - [[FluxCD]] [[helm]] chart
        - [[kubevela]] OAM CRDs (`ComponentDefinition`, `TraitDefinition`)

- Installation
    - [Prompt not friendly when executing `vela addon enable fluxcd` · Issue #2344 · kubevela/kubevela](https://github.com/kubevela/kubevela/issues/2344)
    - [Failed to enable FluxCD due to invalid DNS name for `vela-core-webhook` service · Issue #763 · kubevela/catalog](https://github.com/kubevela/catalog/issues/763)
    - [When use helm install vela in local occurred Error: failed calling webhook "validating.core.oam.dev.v1alpha2.traitdefinitions" · Issue #1173 · kubevela/kubevela](https://github.com/kubevela/kubevela/issues/1173)
    - [Error occurred when installing the kruise-rollout addon in vela1.8 · Issue #5887 · kubevela/kubevela](https://github.com/kubevela/kubevela/issues/5887)
