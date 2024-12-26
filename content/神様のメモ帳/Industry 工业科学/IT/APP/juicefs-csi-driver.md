---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
github: 
k8s-csi-drivers:
  - csi.juicefs.com
---

- Configuration
    - StorageClass for PVC
        - `StorageClass` -> `parameters`
            - `csi.storage.k8s.io/provisioner-secret-name`
            - `csi.storage.k8s.io/provisioner-secret-namespace`
            - `csi.storage.k8s.io/node-publish-secret-name`
            - `csi.storage.k8s.io/node-publish-secret-namespace`

- Data
    - `/var/lib/juicefs/config`
        - JuiceFS config directory
        - 可能不用备份
    - `/var/lib/juicefs/volume`
        - JuiceFS mount directory
        - 无需备份，类似于 [[rclone|rclone mount]]
