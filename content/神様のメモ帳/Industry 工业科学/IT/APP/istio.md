---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/_Theme/ReverseProxy
  - flag/APP/Layer/k8s/AddOns/ServiceMeshInterface
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - flag/APP/Layer/k8s/AddOns/IngressController
---

- Alternatives
    - [[kmesh]]

- References
    - [Istio 的前世今生](https://morven.life/posts/istio-history/)
    - [Istio / 入口网关](https://istio.io/latest/zh/docs/tasks/traffic-management/ingress/ingress-control/)
    - [Istio / 安装配置文件](https://istio.io/latest/zh/docs/setup/additional-setup/config-profiles/)

- Philosophy
    - [服务网格架构：Sidecar vs. Sidecarless，谁才是未来？ - Jimmy Song](https://jimmysong.io/blog/service-mesh-sidecar-vs-sidecarless-debate/)
    - Network Layer
        - 假设一个 Service 专注于提供 [[HTTP]] API
        - 开发者只需要关注 [[HTTP]] 业务，无需关注 [[HTTP]] 底层传输机制
        - 传统思维中，[[HTTP]] 下面一层是 [[TCP]]/[[UDP]]
        - Service Mesh 思维中，[[HTTP]] 下面一层是 Mesh Network
        - Mesh Network 是由 Sidecars 组成的网络
        - 为什么要搞出一个 Mesh Network，[[TCP]]/[[UDP]] Network 有什么问题吗？
        - 问题巨大。
        - [[TCP]]/[[UDP]] 很契合 C/S 架构，每个节点都是*功能完整*的服务
        - *微服务* 将一个功能完整的节点拆分成了多个不同功能的节点，多个节点再反过来组合形成一个功能完整的 Service。这种架构下，微服务之间的交互形成了了许多 [[TCP]]/[[UDP]] 连接，而**这些 [[TCP]]/[[UDP]] 连接需要「开发者」主动处理**
        - 但废弃 [[TCP]]/[[UDP]] 然后另起炉灶是不现实的，而 *侵入式代码* 是丑陋的，怎么办呢？
        - 那就在 [[TCP]]/[[UDP]] 之上再加一层 Network Layer 就行了，这层网络专为微服务架构而设计，怎么「无感」怎么来
        - 于是「开发者」可以回归 [[HTTP]] 业务逻辑，而无需关注 [[HTTP]] 下面一层是如何传输数据的
        - [[HTTP]] 可换成其他任何 Protocol，如 gRPC
        - Service Mesh 概念于 2016 年问世，伴随微服务的爆火，经过 8 年发展，虽然没有 [[TCP]]/[[UDP]] 的普遍性，但本身已成熟，不出意外成为微服务的*标配*也只是时间问题
    - Sidecar
        - 改造 [[TCP]]/[[UDP]] 不现实
        - 「代理」是个不错的选择，每个 Service 都有一个 Sidecar 作为反代，即做到基于 [[TCP]]/[[UDP]]，又能让 Service 无感
        - 除了简单的代理，Sidecar 更重要的职责是继承 Service Mesh 的理念，提供实现 Mesh Network 该有的功能，毕竟 Mesh Network 就是由许多 Sidecars 组成的
    - [一份好吃的 Istio 入门餐](https://morven.life/posts/getting-started-with-istio/)
        - 文中 Control Plane 架构已过时，看 Mesh Network 思想即可

- Architecture
    - Data Plane
        - 所有 Sidecars 一起形成了一个 Mesh Network，在 [[istio]] 称为 Data Plane（数据平面）
        - Data Plane 完全 Stateless
        - Data Plane 本身可视作静态的，Control Plane 才有动态更新能力
    - Control Plane
        - Control Plane（控制平面）由几个组件（微服务）构成
        - Control Plane 负责管理整个 Data Plane，即「定义了 Mesh Network 应该长什么样、采用什么配置，并动态更新 Data Plane」
