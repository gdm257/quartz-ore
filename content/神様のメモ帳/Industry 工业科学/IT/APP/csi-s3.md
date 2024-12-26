---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
github: yandex-cloud/k8s-csi-s3
k8s-volume-modes:
  - Filesystem
k8s-storageClasses:
  - csi-s3
k8s-access-modes:
  - RWX
  - RWO
k8s-csi-drivers:
  - ru.yandex.s3.csi
---

- Idea
    - A [[k8s]] CSI driver that saves data to any S3 storage

- Test
        - `Transport endpoint is not connected`
        - `attacher.MountDevice`
        - Scale all pods attached PVC to 0
        - Manually [[umount]] PV mount point in node
        - Kill old mounter process(geesefs)

- Deps
    - [[k8s]] 1.17+
    - [[k8s]] has to allow privileged containers
        - Generally, it does not require modify any file by default, which seems default behavior
    - [[Docker]] daemon with `MountFlags=shared`
        - Generally, it does not require modify any file by default, which seems default behavior

- Pro
    - Support binding PV without Pod
    - Support [[helm]] chart installation
    - Support RWX

- Fundamentals
    - Watcher
        - Watch PVC with `spec.storageClassName` of `csi-s3`(defalut storage class)
        - Create PV with storage class
        - Bind PV to PVC immediately
    - Mounter
        - Use GeeseFS by default, [[rclone]]/s3fs is optional
        - Runs GeeseFS **outside** of the csi-s3 container using [[systemd]]
