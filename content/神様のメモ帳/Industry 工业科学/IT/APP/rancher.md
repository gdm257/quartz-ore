---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/k8s/Manager
  - flag/APP/Layer/k8s/ClusterCreater
  - flag/APP/DevOps/CD
  - flag/APP/Layer/k8s/Multi-Tenancy/Multi-Teams
github: rancher/rancher
docker: rancher/rancher
apiVersions:
  - catalog.cattle.io/v1
  - management.cattle.io/v3
CRD:
  - ClusterRepo
  - PodSecurityAdmissionConfigurationTemplate
  - FleetWorkspace
---

- Deps
    - [[cert-manager]]
        - 必须先部署，否则 [[rancher]] helm chart 会安装失败

- Con
    - 安装麻烦
        - 以 [[Docker Desktop]] + [[k3d]] 本地集群安装 [[rancher]] 为例
        - 需要使用 [[sslip.io]]
            - 例如 `127.0.0.1.sslip.io` 作为 `hostname`，这个公网域名的 [[DNS]] A record 会解析到 `127.0.0.1`
            - [[Docker Desktop]] 基于 [[WSL]]，而 [[WSL]] 会自动映射 distro 端口到宿主机端口，因此 `127.0.0.1:<集群开放端口>` 可以直接访问到集群。如果你不用 [[WSL]]，那可能需要换成集群 Node 的 IP 地址（一般是个局域网 IP，具体方法看看 [[Docker]] 网络教程吧）
            - 因为 [[rancher]] 要求 Web UI 访问域名必须是 `hostname`，所以需要 [[sslip.io]]
            - 当然你也可以 [[Clash for Windows]] 全局代理 + 手动添加 DNS/hosts。但 [[sslip.io]] 更方便些，什么都不用配置，你只需要知道集群 Node 的 IP 地址就可以了
        - 获取 Web UI 地址
            - `echo https://127.0.0.1.sslip.io/dashboard/?setup=$(kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{.data.bootstrapPassword|base64decode}}')`
            - `echo https://127.0.0.1.sslip.io:<转发端口>/dashboard/?setup=$(kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{.data.bootstrapPassword|base64decode}}')`
            - 如果本地用不了 443，可用 [[kubectl]] 对 `rancher` service 443 端口进行 port forward，访问地址加个端口号就行
    - ONLY Support creating [[RKE]] cluster
        - [[rancher]] 可以用来创建集群，支持 [[SSH]] 以及各种云提供商
        - [[rancher]] 只支持创建 [[RKE]] 发行版，而且还是 RKE1

- Pro
    - Support "Related Resources" feature
        - 查看某个 resource「引用了（refers to）哪些资源」「被哪些资源引用（referred to by）」
        - 我不用 [[Lens]] 的最大原因
    - Support auto folding
        - 自动折叠 `status` `managedFields`，配置清爽许多
