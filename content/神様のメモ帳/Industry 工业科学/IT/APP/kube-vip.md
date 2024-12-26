---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/Implement__/VIP
github: kube-vip/kube-vip
---

- Idea
    - HA VIP
        - 最开始 [[kube-vip]] 只是一个 [[k8s]] control plane 的 HA Solution
        - 如今 [[kube-vip]] 还支持所有 `LoadBalancer` 的 `Service`
        - kube-vip has the capability to **provide a high availability address** for both the Kubernetes control plane and for a Kubernetes Service

- Fundamentals
    - [kube-vip | LeoHsiao's Notes](https://leohsiao.com/Container/k8s/network/kube-vip.html)
    - [Architecture](https://kube-vip.io/docs/about/architecture/#load-balancing)
