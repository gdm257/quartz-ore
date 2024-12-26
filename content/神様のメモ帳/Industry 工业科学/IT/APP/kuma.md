---
tags:
  - flag/APP/Layer/k8s/AddOns/ServiceMeshInterface
  - flag/APP/Layer/k8s/AddOns/IngressController
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
apiVersions:
  - kuma.io/v1alpha1
CRD:
  - TrafficRoute
  - Mesh
  - MeshTrafficPermission
routers:
  - HTTPRoute
github: kumahq/kuma
k8s-gatewayClasses:
  - kuma
---

- Web
    - `:5681/gui`

- Ecosystem
    - Envoy
        - combined with native support for Envoy as its data plane proxy technology
        - [[kuma]] 可集成进 Envoy
        - [[kuma]] 可单独使用，更为简单
    - Discovery
        - 为了让 [[kuma]] 自动向 `Pod` 注入 sidecar，支持多种启用方式
        - Labeling `Namespace` by `kuma.io/sidecar-injection: enabled`
        - Labeling `Pod` by `kuma.io/sidecar-injection: enabled`
        - `disabled` to disable auto sidecar injection
