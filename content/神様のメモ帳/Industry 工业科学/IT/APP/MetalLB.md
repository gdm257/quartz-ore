---
tags:
  - flag/APP/Layer/k8s/AddOns/LB
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
apiVersions:
  - metallb.io/v1beta1
CRD:
  - IPAddressPool
  - L2Advertisement
---

- Fundamentals
    - `External-IP`
        - 对于 [[k8s]] 来说，CNI（IPAM）管理的 IP 都是 Internal IP
        - Internal IP 不能作为 `LoadBalancer Service` 的 IP，因此称为 External IP
        - External IP 传统上是 Cloud Provider 提供 Load Balance 服务的时候，由 Cloud Provider（AWS/GCP/Azure）分配的
        - 所谓 External IP，就是「集群外」的网络也能访问的 IP，例如公网 IP、公网域名
        - [[MetalLB]] 模拟了这么个 Cloud Provider，自己占用了一个（私有）网段作为 `External-IP` 的来源，利用 [[iptables]]/IPVS/BGP 之类的技术处理流量（这个网段不应该与 [[k8s]] CNI/IPAM 内部的 CIDR 相冲突）
