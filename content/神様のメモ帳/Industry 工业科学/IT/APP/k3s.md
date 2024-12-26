---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/CD
  - flag/APP/Layer/k8s/Distibution
  - flag/Platform/Linux独占
frontmatter-as-page:
  - k3s-addons
github: k3s-io/k3s
ports:
  - "6443"
  - "2379"
  - "2380"
commands:
  - k3s
namespaces:
  - default
  - kube-node-lease
  - kube-public
  - kub-system
k8s-storageClasses:
  - local-path
envvars:
  - K3S_*
  - K3S_NODE_NAME
  - INSTALL_K3S_VERSION
  - K3S_DEBUG
  - K3S_DATA_DIR
components:
  - traefik
  - servicelb
hosts:
  - cluster.local
  - <service>.<namespace>.svc.cluster.local
apiVersions:
  - k3s.cattle.io/v1
CRD:
  - Addon
  - ETCDSnapshotFile
k3s-addons:
  - aggregated-metric-reader
  - auth-delegator
  - auth-reader
  - ccm
  - coredns
  - metrics-apiservice
  - metrics-server-deployment
  - metrics-server-service
  - resource-reader
  - rolebindings
  - runtimes
---

- Alternatives
    - [kubernetes-sigs/kubespray](https://github.com/kubernetes-sigs/kubespray)
    - RKE

- References
    - [K3s - 轻量级 Kubernetes | Rancher文档](https://docs.rancher.cn/docs/k3s/_index)
    - [K3S工具进阶完全指南 | Escape](https://www.escapelife.site/posts/754ba85c.html)
    - [k3d-io/k3d: Little helper to run CNCF's k3s in Docker](https://github.com/k3d-io/k3d)

- Users
    - [[vcluster]]
    - [[k3d]]
    - Rancher Desktop

- Pro
    - Lightweight
        - My Cluster
            - Empty server: `0.04` CU, `500` Mi
            - Empty cluster: `0.29` CU, `900` Mi
            - Some Infrastructure Controllers: `0.88` CU, `2400` Mi
        - Minimal 1C512MB
        - Recommend 2C1G
        - 50+ pod, 1.1G RAM
        - [安装要求介绍 | Rancher文档](https://docs.rancher.cn/docs/k3s/installation/installation-requirements/_index)
        - [K3s资源分析 | Rancher文档](https://docs.rancher.cn/docs/k3s/installation/installation-requirements/resource-profiling/_index)
        - [有人对比过 k3s 和 docker swarm 的内存消耗吗？ - V2EX](https://v2ex.com/t/741912)
    - Comes with Metrics Server
    - Comes with [[Traefik]] ingress
        - 如果你需要安装 [[istio]]，请禁用该功能 `--no-deploy traefik`（本质是 CNI 冲突）

- Fundamentals
    - Startup
        - 集群的启动只需要一行 `k3s server ...` 命令
        - `--data-dir` 能够复用已有数据，加上每次启动的命令行参数保持一致，因此启动的集群得以恢复到上次的状态
        - 启动命令封装为 [[systemd]] service，路径为 `/etc/systemd/system/k3s.service`，可手动修改，但请做好备份
        - 集群的启动和关闭建议用 [[systemd]] 完成
    - CNI
        - [[k3s]] 默认使用 Flannel，可通过 `--flannel-backend=none` `--disable-network-policy` 禁用 Flannel，然后使用自定义 CNI
        - [Basic Network Options | K3s](https://docs.k3s.io/networking/basic-network-options)
    - Ingress
        - [[k3s]] 默认会运行 [[Traefik]] helm chart
        - `--disable=traefik` to disable traefik, which also disables `servicelb`
        - `/var/lib/rancher/k3s/server/manifests/traefik.yaml` default config (do not edit)
        - `HelmChartConfig` manifest in `/var/lib/rancher/k3s/server/manifests/traefik-config.yaml` to customize [[Traefik]]
        - [Networking Services | K3s](https://docs.k3s.io/zh/networking/networking-services)
        - [Helm | K3s](https://docs.k3s.io/zh/helm#customizing-packaged-components-with-helmchartconfig)
        - [traefik-helm-chart/traefik at master · traefik/traefik-helm-chart](https://github.com/traefik/traefik-helm-chart/tree/master/traefik)
    - LoadBalancer
        - `ServiceLB` as default LoadBalancer
        - `--disable=servicelb` to disable
        - ServiceLB controller watches Kubernetes [Services](https://kubernetes.io/docs/concepts/services-networking/service/) with the `spec.type` field set to `LoadBalancer`
        - For each LoadBalancer Service, a [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/) is created in the `kube-system` namespace. This DaemonSet in turn creates Pods with a `svc-` prefix, on each node
        - Disabling `servicelb` is necessary if you wish to run a different LB, such as MetalLB
        - [Networking Services | K3s](https://docs.k3s.io/networking/networking-services)
        - [What does ServiceLB (Klipper LB) actually do ? · k3s-io/k3s · Discussion #9927](https://github.com/k3s-io/k3s/discussions/9927)
    - DNS
        - [[k3s]] 默认会部署 CoreDNS manifests 来处理集群内 DNS 请求
    - Storage
        - [[k3s]] 默认会部署 local-path-provisioner，`storageClass` 名称为 `local-path`
    - apiserver
        - `k3s server` listens `6443` by default
        - cluster has a `kubernetes` service that forwards to k3s server's IP:6443
            - [[k3s]] 自带该功能，貌似不再需要 [[kube-vip]]。因为 kube-vip 的目的就是创建一个稳定的 Service（ClientIP）或外部 IP（Ingress）作为 Control Panels 的高可用入口
            - 接下来用 [[Traefik]] 来反代该 Service，就能暴露给外部网络
    - [k3s-io/helm-controller](https://github.com/k3s-io/helm-controller/)
        - [[k3s]] 自带，
        - 支持 单独安装到任意 [[k8s]] 集群，适用于其他 [[k8s]] 发行版
        - `HelmChart` of `helm.cattle.io/v1` CRD in `kube-system` namespace
        - `%{KUBERNETES_API}%` in `spec.chart` 指向 `/var/lib/rancher/k3s/server/static/`，可在这个文件夹放入 chart `.tgz` 文件
        - `HelmChartConfig` of `helm.cattle.io/v1` 可以 override config of [[k3s]] 自带的 `HelmChart`，例如 traefik ingress/servicelb
        - 一定程度能取代 [[FluxCD]]/[[ArgoCD]] 的 CRD
        - [Helm | K3s](https://docs.k3s.io/helm)

- Installation
    - Fundamentals - Installation Script
        - Install `k3s` commands
        - Create `k3s` service for [[systemd]] in `/etc/systemd/system/k3s.service`
        - Start `k3s` service which runs `k3s server`
    1. [[SQLite]]
        - NOT Support multiple server nodes (master nodes)
        - [快速入门指南 | Rancher文档](https://docs.rancher.cn/docs/k3s/quick-start/_index)
        - [安装选项介绍 | Rancher文档](https://docs.rancher.cn/docs/k3s/installation/install-options/_index)
    2. embedded etcd
        - Support multiple server nodes (master nodes)
        - [高可用嵌入式 etcd | K3s](https://docs.k3s.io/zh/datastore/ha-embedded)
        - [安装选项介绍 | Rancher文档](https://docs.rancher.cn/docs/k3s/installation/install-options/_index)
        - [server | K3s](https://docs.k3s.io/zh/cli/server)
    3. external etcd/SQL database
        - Support multiple server nodes (master nodes)
        - [高可用外部数据库 | K3s](https://docs.k3s.io/zh/datastore/ha)
        - [环境变量 | K3s](https://docs.k3s.io/zh/reference/env-variables)
    4. Run in [[Docker]]
        - 本质就是把以上 3 种中的 1 种放在 [[Docker]] 容器里运行
        - 请自行通过 docker volume 来持久化 [[k3s]] 的 config/data
        - [高级选项和配置 | K3s](https://docs.k3s.io/zh/advanced#%E5%9C%A8-docker-%E4%B8%AD%E8%BF%90%E8%A1%8C-k3s)
        - [环境变量 | K3s](https://docs.k3s.io/zh/reference/env-variables)

- CLI
    - `k3s server`
        - `--disable <name1>[,<name2>,...]`
            - `/var/lib/rancher/k3s/server/manifests/*.yaml`
            - 与 YAML 文件名同名
                - `ccm`
                - `coredns`
                - `local-storage`
                - `metrics-server`
                - `rolebindingd`
                - `runtimes`
                - `servicelb`
                - `traefik`
                - e.g. `servicelb,traefik,coredns`

- Configuration
    - [[k3s]] config
        - `/etc/rancher/k3s/config.yaml`
        - `/etc/rancher/k3s/config.yaml.d/*.yaml`
        - [Configuration Options | K3s](https://docs.k3s.io/installation/configuration#configuration-file)
        - [环境变量 | K3s](https://docs.k3s.io/zh/reference/env-variables)
    - Syntax
        - `etcd-s3-endpoint`: no `http(s)://` prefix or `/` suffix

- Data
    - `/etc/rancher/k3s/k3s.yaml`
        - [[k8s]] kubeconfig for [[k3s]]
        - 将 `/etc/rancher/k3s/k3s.yaml` 复制到位于集群外部的主机上的 `~/.kube/config`。然后，将 `server` 字段的值替换为你 K3s Server 的 IP 或名称。现在，你可以使用 `kubectl` 来管理 K3s 集群
        - [集群访问 | K3s](https://docs.k3s.io/zh/cluster-access)
    - `/var/lib/rancher/k3s/server/db/`
        - if database is [[SQLite]] (default)
        - [备份和恢复 | K3s](https://docs.k3s.io/zh/datastore/backup-restore)
        - [高可用嵌入式 etcd | K3s](https://docs.k3s.io/zh/datastore/ha-embedded#%E7%8E%B0%E6%9C%89%E7%9A%84%E5%8D%95%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4)
    - `/var/lib/rancher/k3s/server/token`
        - Default token to secure the node join process
        - [备份和恢复 | K3s](https://docs.k3s.io/zh/datastore/backup-restore)
    - `/var/lib/rancher/k3s/storage`
        - [local-path-provisioner](https://github.com/rancher/local-path-provisioner) node data path
        - Stateful data
        - [卷和存储 | K3s](https://docs.k3s.io/zh/storage)
    - `/var/log/syslog`
        - `/var/log/syslog` & `journalctl -u k3s` & `journalctl -u k3s-agent` for [[systemd]]
        - `/var/log/k3s.log` for openrc
        - [k3s 日志在哪里 | K3s](https://docs.k3s.io/zh/faq#k3s-%E6%97%A5%E5%BF%97%E5%9C%A8%E5%93%AA%E9%87%8C)
    - `/var/lib/rancher/k3s/server/tls`
        - [certificate | K3s](https://docs.k3s.io/zh/cli/certificate)
