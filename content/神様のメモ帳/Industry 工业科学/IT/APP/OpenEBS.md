---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/k8s/CSI
annotations:
  - openebs.io/cas-type
  - cas.openebs.io/config
version-k8s:
  - "1.23"
k8s-csi-drivers:
  - local.csi.openebs.io
  - zfs.csi.openebs.io
k8s-storageClasses:
  - openebs-hostpath
k8s-access-modes:
  - RWO
---

- References
    - [OpenEBS · 工作笔记](https://weiliang-ms.github.io/wl-awesome/2.%E5%AE%B9%E5%99%A8/k8s/storage/OpenEBS.html)

- Architecture
    - Container Attached Storage (CAS)
        - Each volume has a controller pod and a set of replicas pods
        - 不是像传统分布式块存储或者 RAID 那样「多个 nodes 组成一个 large volume」「将数据分布在多个节点」，而是「一个 volume 可以运行在单个节点」「多节点复制卷提供高可用」
    - Data Plane
        - Storage Engine
            - Jiva
                - Fundamentals
                    - 内部使用 [[longhorn]] 和`gotgt`
                    - 完全在用户空间中运行
                - Pro
                    - 使用起来非常简单
                    - 当节点上没有空闲磁盘时。`Jiva`可以在主机目录上使用，并且仍然可以实现复制
                - Con
                    - 不支持动态扩展本地磁盘上的存储。将更多磁盘添加到`Jiva`池是不可能的
                    - 
            - cStor
                - Pro
                    - 有快照和克隆功能的需求的场景，优先考虑使用`cStor`而不是`Jiva`
                    - Support 动态扩容。类似 ZFS
            - LocalPV
                - Pro
                    - node path 原生性能，比 `Jiva` `cStor` 快
                - Con
                    - NOT Support replicas 不支持在*存储层*进行复制
                    - NOT Support snapshots
                    - NOT Support clone
                - Alternatives
                    - [[local-path-provisioner]]
        - Configuration
            - Each `StorageClass` should select and configure a storage engine
        - Node Dist Manger (NDM)

- Data
    - `/var/openebs/local/`
        - Local PV HostPath default location
