---
tags:
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
k8s-gatewayControllers:
  - gateway.envoyproxy.io/gatewayclass-controller
routers:
  - HTTPRoute
  - GRPCRoute
  - TLSRoute
  - TCPRoute
  - UDPRoute
apiVersions:
  - gateway.envoyproxy.io/v1alpha1
CRD:
  - EnvoyProxy
  - EnvoyPatchPolicy
  - Backend
  - ClientTrafficPolicy
  - SecurityPolicy
  - BackendTrafficPolicy
  - EnvoyExtensionPolicy
version-gatewayapi:
  - 1.1.0
version-k8s:
  - "1.27"
  - "1.30"
---

- Configuration
    - Service Type
        - Each `Gateway` resource will be expose as a `LoadBalancer`
        - Use `EnvoyProxy` to set service type to `NodePort`/`ClusterIP` which expose as `NodePort`/`ClusterIP`
            - `spec.provider.kubernetes.envoyService.type`
                - ClusterIP, LoadBalancer and NodePort
                - Defaults to LoadBalancer
            - `spec.provider.kubernetes.envoyService.loadBalancerClass`
        - [Derive nodePort from Listener port when Service is of type NodePort · Issue #2220 · envoyproxy/gateway](https://github.com/envoyproxy/gateway/issues/2220)
        - [Customize EnvoyProxy | Envoy Gateway](https://gateway.envoyproxy.io/latest/tasks/operations/customize-envoyproxy/)
        - [How to deploy Envoy Gateway using the host network mode instead of the load balancer mode · Issue #1427 · envoyproxy/gateway](https://github.com/envoyproxy/gateway/issues/1427)

- Ecosystem
    - [超越 Gateway API：深入探索 Envoy Gateway 的扩展功能-赵化冰的博客 | Zhaohuabing Blog](https://www.zhaohuabing.com/post/2024-08-31-introducing-envoy-gateways-gateway-api-extensions/)
    - [Envoy 基础教程：扩展 Envoy 的管理界面 · 云原生实验室](https://icloudnative.io/posts/extending-the-envoy-admin-interface/)

- Alternatives
    - [Envoy Gateway 概述——使用 Gateway API 的现代 Kubernetes 入口 - Jimmy Song](https://jimmysong.io/blog/envoy-gateway-introduction/)
