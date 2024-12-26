---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
namespaces:
  - rook-ceph
apiVersions:
  - ceph.rook.io/v1
CRD:
  - CephCluster
version-k8s:
  - "1.22"
---

- References
    - [Ceph万字总结|如何改善存储性能以及提升存储稳定性 - 墨天轮](https://www.modb.pro/db/135109)
    - [Rook带你玩转云原生存储 – My X Files](https://davidlovezoe.club/wordpress/archives/891)

- Con
    - Require high CPU/Memory
        - [[helm]] chart default resources consume a lot of CPU/Memory. Even 2C4G is no enough for one ceph cluster
        - [第 6 章 容器化 Ceph 的最低硬件建议 | Red Hat Product Documentation](https://docs.redhat.com/zh_hans/documentation/red_hat_ceph_storage/4/html/hardware_guide/minimum-hardware-recommendations-for-containerized-ceph_hw#minimum-hardware-recommendations-for-containerized-ceph_hw)
        - [SES 7.1 | 部署指南 | 硬件要求和建议](https://documentation.suse.com/zh-cn/ses/7.1/html/ses-all/storage-bp-hwreq.html)
