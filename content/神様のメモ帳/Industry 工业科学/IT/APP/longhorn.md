---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
k8s-storageClasses:
  - longhorn
  - longhorn-static
k8s-access-modes:
  - RWX
  - RWO
---

- Installation
    - [longhorn · longhorn/longhorn](https://artifacthub.io/packages/helm/longhorn/longhorn)

- Data
    - `/var/lib/longhorn/`
        - default data path

- Architecture
    - [Longhorn 浅析 | x³u³](https://xxxuuu.me/post/longhorn)
    - [Longhorn 云原生分布式块存储解决方案设计架构和概念 - 为少 - 博客园](https://www.cnblogs.com/hacker-linner/p/15151778.html)

- Philosophy
    - [kubernetes - Longhorn 的正确使用姿势：如何处理增量 replica 与其中的 snapshot/backup - Rancher - SegmentFault 思否](https://segmentfault.com/a/1190000042559014)
