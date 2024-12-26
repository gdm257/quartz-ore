---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/CD
aliases:
  - Kubernetes
frontmatter-as-page:
  - CRD
  - apiVersions
  - k8s-acces-modes
  - k8s-csi-drivers
  - k8s-gateway-sectionNames
  - k8s-gatewayClasses
  - k8s-gatewayControllers
  - k8s-gateways
  - k8s-ingressControllers
  - k8s-ingressClassNames
  - k8s-rbac-verbs
  - k8s-storageClasses
  - k8s-volume-modes
  - k8s-volumetypes
  - namespaces
  - k8s-node-labels
  - k8s-provisioners
communications:
  - http
commands:
  - kube-apiserver
  - kube-controller-manager
  - kube-scheduler
  - kubectl
  - kube-proxy
  - kubelet
apiVersions:
  - v1
  - apps/v1
  - batch/v1
  - networking.k8s.io/v1
  - gateway.networking.k8s.io/v1
  - storage.k8s.io/v1
  - snapshot.storage.k8s.io/v1
hosts:
  - cluster.local
  - <service>.<namespace>.svc.cluster.local
  - <statefulsetname>-<0-based-pod-index>.<statefulset-serviceName>.<namespace>.svc.cluster.local
k8s-rbac-verbs:
  - get
  - list
  - watch
  - create
  - patch
  - update
  - delete
k8s-access-modes:
  - RWX
  - ROX
  - RWO
  - RWOP
labels:
  - app.kubernetes.io/name
  - app.kubernetes.io/instance
  - app.kubernetes.io/version
  - app.kubernetes.io/component
  - app.kubernetes.io/part-of
  - app.kubernetes.io/managed-by
  - app.kubernetes.io/pod-index
  - kubernetes.io/os
  - kubernetes.io/arch
  - kubernetes.io/hostname
  - node.kubernetes.io/instance-type
  - node-role.kubernetes.io/control-plane
  - node-role.kubernetes.io/etcd
  - node-role.kubernetes.io/master
  - topology.kubernetes.io/region
  - topology.kubernetes.io/zone
annotations:
  - kubernetes.io/description
  - kubernetes.io/ingress-bandwidth
  - kubernetes.io/egress-bandwidth
  - storageclass.kubernetes.io/is-default-class
version-k8s:
  - "1.29"
  - "1.31"
CRD:
  - VolumeSnapshotClass
---

## Brief

- Version
    - 1.27 (recommended in 2024.10)

- References
    - [Kubernetes API | Kubernetes](https://kubernetes.io/docs/reference/kubernetes-api/)
    - [Kubernetes 文档 | Kubernetes](https://kubernetes.io/zh-cn/docs/home/)
    - [Kubernetes教程 | Kuboard](https://kuboard.cn/learning/)
    - [techiescamp/kubernetes-learning-path](https://github.com/techiescamp/kubernetes-learning-path)
    - [ben1234560/k8s_PaaS](https://github.com/ben1234560/k8s_PaaS)
    - [Kubernetes 资源与学习路径总结 | 熊鑫伟（cubxxw）的简体中文博客 🇨🇳](https://nsddd.top/zh/posts/kubernetes-learning/)

- Ecosystem
    - [CNCF Landscape](https://landscape.cncf.io/)
    - [Graduated and Incubating Projects | CNCF](https://www.cncf.io/projects/)
    - [Sandbox Projects | CNCF](https://www.cncf.io/sandbox-projects/)
    - [OperatorHub.io](https://operatorhub.io/)
    - [Installing Addons | Kubernetes](https://kubernetes.io/docs/concepts/cluster-administration/addons/)
    - [collabnix/kubetools](https://github.com/collabnix/kubetools)
    - [operator-framework/awesome-operators](https://github.com/operator-framework/awesome-operators)
    - [GPU 环境搭建指南：如何在裸机、Docker、K8s 等环境中使用 GPU -](https://www.lixueduan.com/posts/ai/01-how-to-use-gpu/)
    - CKA 证书

- Alternatives
    - [[nomad]]
    - [[Docker Swarm]]
    - [[CapRover]]
    - [[terraform]]

- Philosophy
    - [Configuration Best Practices | Kubernetes](https://kubernetes.io/docs/concepts/configuration/overview/)
    - Eventual Consistency（最终一致性）
        - [[k8s]] config == 大型 State Machine == 对象（资源）的集合
        - [[k8s]] == 状态机物理机同步装置
        - 每个 k8s对象（资源）可看作一个 特定状态的状态机
        - [[k8s]] 就是不同 `kind` 对象所组成的大型状态机
        - k8s daemon 的工作就是「操作物理服务器使其状态与大型状态机保持一致」
        - 一句话，让实际状态达到期望状态（desired state）
    - Resources(Declarative Configuration)
        - [[k8s]] 的 `kind` 多大几十上百种，看似很复杂，但代入 [[OOP]] 就合理了
        - [[OOP]] 告诉我们，编程就是不同对象之间的交互，同理
        - [[k8s]] 就是不同 `kind` 对象所组成的大型状态机
        - `kind` 对标编程语言里的 `type`（例如 [[Python]] 的 `class`）
        - `kind` 详细配置对标编程语言里的 instance
        - Kubernetes stores the serialized state of objects by writing them into etcd.
        - [Objects In Kubernetes | Kubernetes](https://kubernetes.io/docs/concepts/overview/working-with-objects/)
        - [从 Kubernetes 中的对象谈起 - 面向信仰编程](https://draveness.me/kubernetes-object-intro/)
        - `kubectl api-resources`
        - `kubectl explain <resource>`
        - [Kubernetes API | Kubernetes](https://kubernetes.io/docs/reference/kubernetes-api/)
    - Namespace(Isolation)
    - Infrastructure as Code
    - Out of tree Interface (Scalability)
        - Network: CNI/LoadBalancer/Ingress/Gateway/DNS
            - [[k8s]] 不自带具体实现，而是手动安装并配置第三方实现
        - Storage
            - [[k8s]] 不自带具体实现，而是手动安装并配置第三方实现
        - CRD
    - Operator pattern (Controller)
        - Watch (event) & Hook
        - Operator is based on Controller
        - Operator 是一种 Controller，一种以特定方式使用的 Controller
        - Operator 通用性强
        - Operator 解决了无法自动化的痛点，解放了运维
        - Operator 让开发者无需学习特定 application 的配置格式，只需使用 CRD
        - [Operator pattern | Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
        - [Operator 模式 | Kubernetes](https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/operator/)
    - Selector
        - Unlike names and UIDs, labels do not provide uniqueness.
        - 匹配到多个对象不能跑，则必须用 ID，即需要唯一性才用 ID
        - 匹配到多个对象也能跑，则用 labels，推荐作为默认方式
        - [Recommended Labels | Kubernetes](https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/)
        - [Node Labels Populated By The Kubelet | Kubernetes](https://kubernetes.io/docs/reference/node/node-labels/)
        - [Well-Known Labels, Annotations and Taints | Kubernetes](https://kubernetes.io/docs/reference/labels-annotations-taints/)
    - Cloud Native
        - [后 Serverless 时代的云计算趋势分析 | 云原生社区（中国）](https://cloudnative.to/blog/cloud-computing-post-serverless-trends/)
    - PaaS
        - PVC 能自动创建 PV
        - Gateway API 能自动路由
        - 这里的逻辑跟 PaaS 是一样的，或许在未来，连 DB/MQ 都会有原生支持，目前只能靠 Operator + CRD 的方式实现（例如 cnpg）
    - Deployment
        - ~~源码运行~~
        - ~~手动运行~~
        - 脚本运行
        - 服务运行
        - CD
        - ~~docker container~~
        - docker compose
        - docker swarm
        - container cluster
        - container PaaS
        - k8s
        - k8s CD
        - k8s PaaS
        - terraform

- Architecture
    - C/S
        - `apiserver` 理应成为与 `cluster` 交互的唯一方式
        - `apiserver` 控制下的 `cluster` 能做哪些事情，取决于有什么 `components`
        - k8s 是 C/S 架构
        - Client 类比 [[docker command]]，例如 [[kubectl]]/[[helm]]
        - Server 类比 [[Docker|dockerd]]，对外表现为单一整体（k8s 集群）
        - Server 内部直接面对 Client 的部分是 Master（`kube-apiserver`）
        - Master 负责管理和调用 Node
        - `kube-apiserver`
            - [[kubectl]] 访问的就是 `kube-apiserver`
        - `kube-scheduler`
        - `kube-controller-manager`
        - etcd
        - 集群
            - `Pod`、`Service`、`Volume` 和 `Namespace`
        - [最佳实践概览 · Kubernetes 中文指南——云原生应用架构实战手册](https://jimmysong.io/kubernetes-handbook/practice/)
        - [Kubernetes组件 | Kuboard](https://kuboard.cn/learning/k8s-bg/component.html)
        - [Kubernetes-Learning/k8s架构及系统组件.md at master · MinPurple/Kubernetes-Learning](https://github.com/MinPurple/Kubernetes-Learning/blob/master/k8s%E6%9E%B6%E6%9E%84%E5%8F%8A%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6.md)
        - [谈 Kubernetes 的架构设计与实现原理 - 面向信仰编程](https://draveness.me/understanding-kubernetes/)
        - [为什么 Kubernetes 要替换 Docker - 面向信仰编程](https://draveness.me/whys-the-design-kubernetes-deprecate-docker/)
        - [谈谈 Kubernetes 的问题和局限性 - 面向信仰编程](https://draveness.me/kuberentes-limitations/)
        - [你该如何为 Kubernetes 定制特性 - 面向信仰编程](https://draveness.me/cloud-native-kubernetes-extension/)
    - [10 张图，说透 Kubernetes 架构和数据流，这回算是真懂了 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000045077354?utm_source=sf-similar-article)

- Con
    - 南北流量很乱
        - 互联网 -> 外部 LB -> Port -> NodePort -> Ingress/Gateway -> Service Proxy -> Pod
            - 因为南北流量（端口）是「集群级」，而不是 namespace level
            - 端口转发仅用于 debug，不算在里面
        - 优先级
            - `LoadBalancer` 优先于 `NodePort`，如果占用同一个端口，k8s 不会报错，但实际上 `NodePort` 是用不了的
            - `Ingress` 与 `Gateway` 二者优先级未知
            - 外部 LoadBalancer 可以多个共存（e.g. AWS LB、MetalLB、kube-vip），但 *一个端口* 同时只允许一个 `LoadBalancer` resource 占用，其他同端口 `LoadBalancer` resources 将处于 `Pending` 状态
        - 安装
            - 除了 `NodePort` 和端口转发是 [[k8s]] 自带功能，其余都需要集群管理员手动安装第三方实现
            - CNI 只能装一个
            - DNS 只装一个
            - 外部 LoadBalancer 可以多个共存（包括 MetalLB、kube-vip），但 *一个端口* 同时只能被一个 `LoadBalancer` resource 占用，其他 `LoadBalancer` resource 将处于 `Pending` 状态
            - 其他 Controller 随便装，允许多个共存，例如 CSIs/Ingress Controllers/Gateway Class Controllers
        - 配合
            - 难以链式化 SSO/WAF/Firewall/Service Mesh，要么给 Controller 装插件，要么用 CRD
            - 但如此一来 Gateway API 又没有意义了
    - 东西流量 Service 不够成熟
        - 虽然目前有 kube-proxy，但随着 service mesh 的发展，指不定哪天 service proxy 也跟 CNI 一样变成了接口
        - 整个 k8s，目前 2024.10 来看，也就 Service 可能发生*巨大*变化
    - `apiVersion`
        - 虽然用多了就能记住，但那么多值实在是操蛋
    - ~~NOT Support running container in master~~
        - ~~主节点主节点一般不干重活，只负责管理，也无法运行容器~~
        - ~~一般是在工作节点运行 ingress 作为流量入口~~
        - ~~也就是说，白白浪费一台服务器，对个人站长不友好~~
        - 实际上 Master 也能跑 Pods，[[k3s]] 实测
        - AI 误我

## Test

- Crush
    - Please limit the `resources`!
    - 100% CPU will braek down cluster

- Fail to delete node
    - `kubectl cordon <node-name>`
    - `kubectl drain <node-name> --ignore-daemonsets`
    - `kubectl get node -o yaml <node-name>`
        - `metadata.finalizers` should be empty!
    - `kubectl delete node <node-name>`
    - `kubectl delete node --force --grace-period=0 <node-name>`

## Ecosystem

### Controller

- Fundamentals
    - [Kubernetes Controller 机制详解（一）-赵化冰的博客 | Zhaohuabing Blog](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

### Operator

- Ecosystem
    - [OperatorHub.io](https://operatorhub.io/)
    - [operator-framework/awesome-operators](https://github.com/operator-framework/awesome-operators)
    - [[cert-manager]]
    - CloudNative-pg
    - Prometheus Operator
    - [kube-logging/logging-operator](https://github.com/kube-logging/logging-operator)

## CLI (Workload)

### `Pod`

- Idea
    - Pod 之于 [[k8s]]
    - Container 之于 [[Docker]]
        - 别看 Pod 是 Containers 的集合，但对 k8s 来说，Pod 就是 Container 之于 Docker
        - 对 Docker 来说，Container 是不稳定的，尤其是 IP
        - 对 k8s 来说，Pod 是不稳定的，IP/Node etc

- Pro
    - Single Node
        - All containers in a pod are running in the same node
    - Support Privileged
        - 特权模式 `privileged` + `DaemonSet` + `initContainers` + `nsenter` 实现「在所有宿主机执行命令」
        - [[cilium]] 就提供了在宿主机安装 `open-iscsi` 的 manifest
        - [k8s中如何用DaemonSet在大量节点上执行脚本 // Shell's Home](https://blog.shell909090.org/blog/archives/2888/)

- Con
    - IP
        - Support communication by `localhost` between containers
        - All containers in a pod shares the same IP and ports

- Philospophy
    - Managed by other kinds
        - 一般不手动创建 Pod，而是用 Controller 来自动管理 Pods
        - Controller 可以根据集群状态，自动将当前状态转变为目标状态

- Test
    - Labels
        - If you remove the labels of an existing Pod, its controller will create a new Pod to take its place. This is a useful way to debug a previously "live" Pod in a "quarantine" environment

- Lifecycle
    - `Pending`
    - `Running`
    - `Successful`
    - `Failed`
    - `Unknown`

### `Deployment`

### `ReplicaSet`

- Idea
    - Pod 目标状态的数量

- Philosophy
    - 不直接使用 `ReplicaSet`，而是通过 `Deployment` 来自动创建

- Pro
    - 支持 自愈
    - 支持 滚动升级
    - 支持 回滚

### `Service`

- References
    - [什么是 Kubernetes Service？](https://www.zhihu.com/question/526869937/answer/2849346472)

- Idea
    - 将一组 Pods 抽象为一个 Service
    - Access service  == Access corresponding pod == Access container

- Fundamentals
    - DNS service name
    - Port forwarding

- Objects
    - ClusterIP
        - Cluster internal DNS for service name
        - Cluster internal IP for service
    - NodePort
        - 对外提供服务
        - 任意节点
        - 全局端口
        - Services 之间不能有端口冲突
    - LoadBalancer
        - 对外提供服务
        - 灵活反代
    - ExternalName
        - 将集群外部的网络引入集群内部

- Examples
    - Use [headless Services](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services) (which have a `ClusterIP` of `None`) for service discovery when you don't need `kube-proxy` load balancing

### `Namespace`

- Idea
    - 集群内部的资源隔离机制

- Con
    - NOT Support `StorageClass`
    - NOT Support `Node`
    - NOT Support `PersistentVolume`

- Examples
    - `default`
    - `kube-system` k8s 系统对象所使用的命名空间
    - `kube-public` 公共空间，类似 `/usr`
    - `kube-node-lease` lease（租约）对象所使用的命名空间

## Configuration

### kubeconfig

- Fundamentals
    - Security
        - `clusters.cluster.certificate-authority-data` 包含自签名证书信息，有效期 1 年，每次 [[k8s]] 重启自动续期，保证通信安全

### Metadata

- `metadata: map[str]Any`
    - `ownerReferences: []map`
        - `apiVersion`
        - `kind`
        - `name`
        - `uid: string`
        - `controller: boolean`
        - 所有者，类似 [[SQL]] 外键
    - `uid: string`
    - `selfLink: string`

### Network

- Objects
    - 路由
        - 东西流量
            - `Service` with `ClusterIP`
            - `<service>.<namespace>.svc.cluster.local` cross namespace
        - 南北流量
            - `Service` with `NodePort`
            - `Service` with `LoadBalancer`
            - `Ingress`
            - `Gateway`
                - [[istio]]
                - [[Traefik]]
                - [[Nginx]]
                - HAProxy
                - KONG
                - APISIX
                - [Kubernetes Gateway API 深入解读和落地指南 | 云原生社区（中国）](https://cloudnative.to/blog/kubernetes-gateway-api-explained/)
            - P.S. port-forward 不是资源对象，没有对应 kind，只能在 [[kubectl]] cli 使用

- Deps
    - CRI
        - `localhost`
    - CNI Plugin
        - `NodePort`
        - `clientIP`
        - `LoadBalancer`
        - `Ingress`
        - `gateway api`
    - DNS
        - ？
    - Service Proxy
        - `ClientIP`
    - Service Load Balancer
        - `LoadBalancer`
    - Ingress Controller
        - `Ingress`
    - Gateway API Controller
        - `gateway api`
    - Network Policy Controller

- Fundamentals
    - [追踪 Kubernetes 中的网络流量](https://atbug.com/tracing-path-of-kubernetes-network-packets/)

- References
    - [深入探索 Kubernetes 网络模型和网络通信](https://atbug.com/deep-dive-k8s-network-mode-and-communication/)

### Network - CNI

- Idea
    - 负责网络层（Layer 3）的一切，如网络创建、IP 分配、数据传输

- Examples
    - Flannel
    - Cilium

- Container Network Interface
    - [[Docker]] 自带网络的实现，该实现只支持 5 种网络模型，功能有限
    - [[k8s]] 为了可扩展性，并没有自带任何网络实现，而是规定了一套网络的接口即 CNI。于是第三方 CNI 就能定制许多 [[Docker]] 网络实现不了的额外功能、更好的性能
    - [[k8s]] 不自带 CNI 具体实现，需要第三方实现即 CNI Plugin
    - [[k8s]] 发行版一般默认安装有一个 CNI Plugin（一般是 Flannel）。例如 [[k3s]] 就自带 Flannel，开箱即用。否则 service name 根本没法路由，pods 之间也无法互相访问（东西流量），更无法处理南北流量

- References
    - [Network Plugins | Kubernetes](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/#network-plugin-requirements)
    - [使用 Cilium 增强 Kubernetes 网络安全](https://atbug.com/enhance-kubernetes-network-security-with-cilium/)
    - [后端 - Kubernetes CNI 网络模型概览：VETH & Bridge / Overlay / BGP - 凌虚的专栏 - SegmentFault 思否](https://segmentfault.com/a/1190000045271137?utm_source=sf-similar-article)

### Network - DNS

- Examples
    - ~~kube-dns~~
    - CoreDNS

- Fundamentals
    - CNI Plugin 与 DNS 是解耦的
        - [[ChatGPT]] 说的，无论你用什么 CNI Plugin，对于 CoreDNS 来说都**没区别**
        - 但是你不能没有 CNI，没有 CNI 会导致 DNS 没法用
        - 也就是说，DNS 依赖于 Container Network **Interface**，但是不依赖于具体的 CNI Plugin *实现*
    - [CoreDNS系列1：Kubernetes内部域名解析原理、弊端及优化方式 | 国南之境](https://hansedong.github.io/2018/11/20/9/)
    - [Kubernetes（k8s）DNS（CoreDNS）介绍 - 大数据老司机 - 博客园](https://www.cnblogs.com/liugp/p/16387457.html)
    - [浅析 CoreDNS 的工作机制](https://atbug.com/analysis-of-the-working-mechanism-of-coredns/)

### Network - Service Proxy

- Examples
    - kube-proxy
        - [[k8s]] 自带

### Network - NodePort

- Idea
    - `Service` port mapping
    - Similar to [[Docker]] port mapping, but `NodePort` is only allowed to use `30000` to `32767` of host

- Alternatives
    - `hostPort` of `Pod`
        - Map ANY host port to `Pod`

### Network - LoadBalancer

- Idea
    - `LoadBanlancer Service` == 绑定IP版 `NodePort Service`
        - 设计意图
            - `NodePort Service` 占用 Node 端口
            - `NodePort Service` 端口冲突无法工作
            - Client 只要能访问到集群 Port，就能访问到 `NodePort Service`
            - `LoadBanlancer` 类型的 `Service`，本文简称 `LB Service`
            - `LB Service` 占用 Node 端口
            - `LB Service` 端口冲突无法工作
            - Client 只有访问「白名单IP:Port」，才能访问到 `LB Service`
            - 「白名单」是形象叫法，正确叫法是 `External-IPs`
            - 「目的 IP」不是 `External-IP` 的流量会被丢弃
            - 「目的 IP」从 L4/L7 数据帧/包中提取，例如 [[TCP]]/[[UDP]]/[[HTTP]] Header
            - `External-IP` 可以是公网或局域网的 [[IPv4]]/[[IPv6]]/**Domain**
            - `External-IP` 由 Cloud Provider 生成并提供
        - **Cloud Provider**（AWS ELB 为例）
            1. AWS ELB 接收到 `CCM` 的 API 调用。于是创建 ELB，随机生成一个 Domain，这个域名是 AWS 官方域名的子域名，能直接在公网访问。
            2. AWS ELB 返回 Domain 给 `CCM` 作为 `LB Service` 的 `External-IP`
            3. Client 访问 `External-IP:<specific_port>`
            4. AWS ELB 监听 `LB Service` 的*指定端口*
            5. AWS ELB 作为集群的 `LB Service` 的*流量入口*
            6. AWS ELB 将流量转发到 [[k8s]] 集群节点的 `LB Service` 的*指定端口*
            7. kube-proxy（`service proxy`）提前配置好了 [[iptables]]/IPVS（其他方案中，可能是运行了 [[Nginx]] 之类的反代），捕获*指定端口*的流量
            8. kube-proxy 转发流量给正确的 `Pod`
            9. Pod *直接响应*给 AWS ELB
            10. AWS ELB 返回响应给 Client
            11. 可以看到，AWS ELB 事实上就是个 *Reverse Proxy*
        - **Self-hosted Cloud Provider**
            - e.g. [[ServiceLB]]/[[MetalLB]]/[[kube-router]]/[[kube-vip-cloud-provider]]
            - L4/L7 实现，原理和流程都跟 AWS ELB 的方案一模一样，你把 AWS ELB 换成 [[MetalLB]] 就好。[[MetalLB]] 会在集群节点的*宿主机*环境中运行而不是 Pod，可简单理解为宿主机跑 [[Nginx]]
            - L2/L3 实现，例如 BGP，可简单理解为宿主机创建虚拟设备劫持流量

- Fundamentals
    - Cloud Controller Manager(CCM)
        - [[k8s]] cluster 需要*获取* Cloud Provider 提供的 Domain(s)，将 Domain(s) *设置*为 具体的 `LB Service` 的 `External-IPs`。负责获取与设置 `External-IP` 的进程被称为 *Cloud Controller Manager(CCM)*
        - `CCM` 仅负责 `External-IP` 的更新工作，完全不负责流量的处理
        - `CCM` watches [[k8s]] resources for `LB Service`
        - `CCM` calls cloud provider's API (AWS API by SDK) to create LB in cloud, which returns a domain(`External-IP`)
        - `CCM` updates status of resource with `External-IP`
        - `CCM` 在某些 LB 方案如 [[kube-router]]/[[ServiceLB]]/[[MetalLB]] *可能*是多余的。很可能方案自己的 Controller 就完成 `External-IP` 的更新工作了
        - `kube-proxy`（service proxy）并不直接监听 `LB Service` 指定的端口，而是通过 [[iptables]] 或 IPVS 对流量进行转发
        - 某些方案可能则是直接创建 Pod 运行进程来监听端口

- Installation
    - 云提供商（AWS/GCP etc）的 LB（反代）
    - 自建
        - k3s + traefik-helm-chart
            - k3s 自带 `svclb-traefik`，但你需要部署一个 traefik-helm-chart 才能激活
        - [[MetalLB]]
        - [[OpenELB]]
        - klipper-lb
            - [[k3s]] 默认自带，缺少文档，不建议单独安装
        - [[kube-vip]]
            - 虽然 [[kube-vip]] 只是 Control Planes 的 HA（高可用）方案
            - 但是 [[kube-vip]] 自带了 `LoadBalancer` 实现

- Con
    - NOT Support class
        - `Ingress` 有 Ingress Class，不同 Ingress 可使用不同 Ingress Controller，允许多个 Ingress Controllers 共存
        - Storage 有 Storage Class，不同 PVC 可使用不同 CSI，允许多个 CSI 共存
        - `Gateway` 有 Gateway Class，不同 Gateway 可使用不同 Gateway API implementation，允许多个 gateway class controllers 共存
        - `LoadBalancer` 却没有 Class，因为跟 `NodePort` 一样是独占端口，允许一个 Controller 管理多个同端口的 `LoadBalancer`，但不允许多个 Controllers 占用同一个端口，一个端口同时只能有一个 Controller。究其根本，LB 就是 L7 反代，你说 [[Nginx]] 和 [[Traefik]] 共用端口可能吗

- References
    - [Kubernetes LoadBalancer Service 与负载均衡器](https://atbug.com/k8s-service-and-load-balancer/)
    - [在 Kubernetes 集群中使用 MetalLB 作为 LoadBalancer（上）- Layer2](https://atbug.com/load-balancer-service-with-metallb/)
    - [在 Kubernetes 集群中使用 MetalLB 作为 LoadBalancer（下）- BGP](https://atbug.com/load-balancer-service-with-metallb-bgp-mode/)

### Network - Ingress

- Con
    - 半吊子
        - Ingress 既不像 Gateway 那样跨反代，又不能把 Pod 直接暴露出去
        - Ingress 更像是 Reverse Proxy 的 CRD，用于修改反代的配置，反代本身通过 `NodePort`/`LoadBalancer`/HostNetwork 的方式暴露出去，于是通过配置间接将 Pod 暴露出去
        - 单独使用 Ingress 不能直接将 Pod 暴露给外部网络。Ingress 本身需要依赖某种形式的入口控制器（Ingress Controller）来处理外部流量。Ingress Controller 通常会与以 `LoadBalancer`/`NodePort`/HostNetwork 的方式部署
        - [ingress在物理机上的nodePort和hostNetwork两种部署方式解析及比较 - xinkun的博客 | Xinkun Blog](https://xuxinkun.github.io/2019/06/11/ingress/)

- Examples
    - [[Traefik]]
    - [[Nginx]]
    - [[istio]]
        - Ingress 是 istio 的可选组件
    - [[MetalLB]]
    - [《做一个不背锅运维：一篇搞定K8s Ingress》Ingress的出现 Ingress是一种Kubernetes资源， - 掘金](https://juejin.cn/post/7216293600483655739)

### Network - Gateway API

- Pro
    - Support cross reverse proxy
    - Support cross-namespace
        - `GatewayClass` is cluster level
        - `Secret` `Gateway` `*Route` `Service` can live in different namespaces each other

- Con
    - 单独使用 Gateway 不能直接将 Pod 暴露给外部网络。Gateway 本身需要依赖某种形式的入口控制器（Gateway Controller）来处理外部流量。Gateway Controller 通常会与以 `LoadBalancer`/`NodePort`/HostNetwork 的方式部署

- Idea
    - L4([[TCP]]/[[UDP]]) routing
    - [[4.04 安全套接层|TLS]] SNI routing
    - L7([[HTTP]]/gRPC) routing

- Version
    - **1.1.0** (recommended in 2024.10)
    - 1.0.0
    - ~~v1alpha2~~
    - [Kubernetes Gateway API v1.1 解读](https://atbug.com/kubernetes-gateway-api-v1-1-overview/)

- Installation
    1. Gateway API CRDs
        - `kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.1.0/standard-install.yaml`
        - 有些 Gateway 的 [[helm]] chart 自带特定版本的 Gateway API CRDs，，无需手动安装，例如 2024.10 最新的 traefik-helm-chart、Envoy Gateway

- Ecosystem
    - [[cert-manager]]
        - [[4.04 安全套接层|TLS]] for Gateway API routing
        - [[cert-manager]] creates cert as `Secret` resource
        - Support any gwapi implementaion. To use [[cert-manager]], `Gateway` should specify `tls` settings

- Philosophy
    - Selector
        - 考虑到多个 Ingress Controllers 共存
        - `annotations` 或 `spec.ingressClassName`（推荐）关联要使用的 Ingress Controller

- Objects
    - `GatewayClass`
        - Similar to `StorageClass`, `IngressClass`
        - Support multiple Gateway controllers in cluster
        - Controller responsible for managing and handling the traffic
        - `GatewayClass` is a cluster-scoped resource
    - `Gateway`
        - 相当于 [[Traefik]] 的 `entrypoint`
        - It should be linked to a `GatewayClass`
    - `*Route`
        - 相当于 [[Traefik]] 的 `router` + `service`
        - `HTTPRoute`
        - `GRPCRoute`
        - `TLSRoute`
        - `TCPRoute`
        - `UDPRoute`
        - Gateways and Routes can be deployed into different Namespaces and Routes can attach to Gateways across Namespace boundaries
        - attachment can only succeed if the Gateway owner and Route owner both agree to the relationship
            - Gateways support _attachment constraints_ which are fields on Gateway listeners that restrict which Routes can be attached. Gateways support *Namespaces* and *Route types* as attachment constraints
            - Routes explicitly reference Gateways that they want to attach to through the Route's `parentRef` field
            - Together these create a *handshake* between the infra owners and application owners that enables them to *independently define* how applications are exposed through Gateways
            - [Cross-Namespace routing - Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/guides/multiple-ns/)

- References
    - [API specification - Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/reference/spec/)
    - [Introduction - Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

### Network - Service Mesh

- References
    - [SMI 与 Gateway API 的 GAMMA 倡议意味着什么？](https://atbug.com/why-smi-collaborating-in-gateway-api-gamma/)

## Data (Storage)

- Data
    1. Configuraion
        - [[git]]([[GitHub]]/[[gitea]]) + GitOps([[FluxCD]]/[[ArgoCD]]) + [[kubectl]]/[[kustomize]]/[[helm]]
        - [如何跨命名空间共享Secret和ConfigMap？ - mdnice 墨滴](https://mdnice.com/writing/14cdef70b0d0470982acdf7296c4e810)
    2. Etcd
    3. Storage

- Pro
    - Cluster level
        - `StorageClass` is  cluster level resource which can be used in any namespace

- Objects
    - PV
        - PV 的分类同 Volume
        - PV 有独立的生命周期，只要 PV 本身没被删除，其数据不会丢失
        - PV 资源被删除时，其数据受策略的影响，默认策略 `Delete` 会删除数据，可选策略 `Retain` 保留数据
    - Volume
        - `Volume` 无法单独创建，它是 Pod 的一部分，生命周期跟随 Pod
        - configMap
        - secret
        - emptyDir
        - hostPath
            - node FS directory/file
        - local
            - local storage device
        - PVC
            - 对接 CSI
        - nfs
            - 居然没从 in-tree 移除
        - iscsi
            - 居然没从 in-tree 移除
        - fc
            - Fibre Channel 貌似是二层协议
        - downwardAPI
            - 反射 ✖️ Volume
            - 将 Pod 的元数据（如 Pod 名称、命名空间、注解、标签等）以及资源限制信息（如 CPU、内存等）传递给运行在 Pod 内的容器
            - 适合需要了解自身部署环境的应用场景
        - subPath
            - 套娃
        - protected
            - 套娃
            - maps several existing volume sources into the same directory

- Configuration
    - `volumeMode: str`
        - `Filesystem` mount to VFS
        - `Block` mount as raw block device
    - `accessModes`
        - `ReadOnlyMany` ROX
            - Write lock
            - Many nodes、只读
        - `ReadWriteOncePod` RWO
            - Pod lock
            - Single pod、读写
            - 不兼容其他 modes，`accessModes` 只能声明一个 RWO
        - `ReadWriteOnce` RWOP
            - Node lock
            - Single node、读写
        - `ReadWriteMany` RWX
            - No lock
            - Many pods、读写
    - Phase（阶段）
        - `Bound`
        - `Available`
        - `Released`
        - `Failed`
    - Status
        - `Bound`
        - `Pending`
        - `Released`
        - `Lost`

- Installation
    - CSI
        - HA
            - [rook/rook](https://github.com/rook/rook)
            - longhorn
            - [openebs/openebs](https://github.com/openebs/openebs)
            - kadalu
                - Support storage from device (bare disk)
                - Support storage from node path
                - Support storage from another PVC
                - Support storage from external GlusterFS
                - NOT Support encryption
                - [docs.kadalu.tech/k8s-storage/devel/storage-config-options/](https://docs.kadalu.tech/k8s-storage/devel/storage-config-options/)
                - [docs.kadalu.tech/k8s-storage/devel/quick-start-yaml/](https://docs.kadalu.tech/k8s-storage/devel/quick-start-yaml/)
        - Local
            - [[local-path-provisioner]]
            - [local-static-provisioner](https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner)
    - CSI
    - ~~Flex~~
        - 过时，请用 CSI

- Ecosystem
    - [velero](https://github.com/vmware-tanzu/velero)
    - [kadalu/kadalu](https://github.com/kadalu/kadalu)
    - [Drivers - Kubernetes CSI Developer Documentation](https://kubernetes-csi.github.io/docs/drivers.html)

- References
    - [Kubernetes 存储设计 | 凤凰架构](https://icyfenix.cn/immutable-infrastructure/storage/storage-evolution.html)
    - [容器存储与生态 | 凤凰架构](https://icyfenix.cn/immutable-infrastructure/storage/csi.html)

- Philosophy
    - Copy-On-Write（写时复制）
    - OverlayFS（叠加式文件系统）
