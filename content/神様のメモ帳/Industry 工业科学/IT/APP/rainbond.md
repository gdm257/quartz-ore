---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/PaaS
  - flag/APP/Layer/k8s/Manager
  - flag/APP/Layer/k8s/Multi-Tenancy/Multi-Teams
github: goodrain/rainbond
version-k8s:
  - "1.19"
  - "1.27"
apiVersions:
  - rainbond.io/v1alpha1
CRD:
  - RainbondCluster
  - RainbondPackage
  - RainbondVolume
  - HelmApp
  - ComponentDefinition
  - ThirdComponent
  - ServiceMesh
  - ServiceMeshClass
  - RBDPlugin
  - RbdComponent
  - RBDAbility
namespaces:
  - rbd-system
---

- Con
    - Require 80, 443
        - Gateway can not be disable
        - If 80/443 are not free, checking will be failed
    - NOT Support latest major [[k8s]] version
        - [[k8s]] latest 1.31
        - [[k8s]] major 1.29, 1.30, 1.31
        - [[rainbond]] supports 1.19-1.27
    - NOT Support [[ArgoCD]]/[[FluxCD]]
        - [[rainbond]] uses custom structure for repo

- Pro
    - PaaS
        - [[rainbond]] 的 PaaS 做的比 [[kubevela]] 要好，不仅整体设计满足 OAM，实现与使用还更加简单，功能还丰富
        - [kubernetes - toB应用私有化交付发展历程、技术对比和选型 - Rainbond云原生 - SegmentFault 思否](https://segmentfault.com/a/1190000042855314)
    - 集成度高
        - CD
        - Template
        - Storage
        - Gateway
        - Service Mesh
        - Tracking
        - Analysis
        - Monitoring
        - Alert
        - 上述功能不仅全都有，而且都带 Web UI
    - Support multiple-cluster
    - Support [[KubeVirt]]
    - Support multiple-teams/customers tenancy
        - 主要是 teams，但由于有应用市场以及「应用」这个非常 PaaS 的概念存在，也可以面向 customers
        - 用户可以不用懂 [[k8s]]/[[Docker]]，只需要创建 [[PostgreSQL|postgres]] etc 应用依赖的服务，并在「应用」中关联，即可完成部署

- Architecture
    - Controller
        - Rainbond主要有两部分组成，一个是提供Web界面的Rainbond控制台，另一个是安装在K8s集群内部的Rainbond集群管理端
        - Rainbond集群管理端通过控制台或Helm方式安装到一个或多个K8s集群内
    - Web UI (Control Plane)

- Objects
    - 组件
        - [[rainbond]] 应用 == [[kubevela]] OAM Application
        - [[rainbond]] 组件 == [[kubevela]] OAM Component
        - [[rainbond]] 插件 == [[kubevela]] OAM Trait

- Philosophy
    - [[kubevela|OAM]]
    - Isolation
        - 企业级
        - 集群级
            - a [[rainbond]] cluster & a [[k8s]] cluster 一对一
        - 应用级
        - 团队级
            - 团队是最小颗粒度，用户只能继承 team 的权限，而不会拥有任何私有权限
