---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
github: rancher/local-path-provisioner
k8s-volume-types:
  - hostPath
  - local
version-k8s:
  - "1.12"
namespaces:
  - local-path-storage
k8s-provisioners:
  - rancher.io/local-path
k8s-access-modes:
  - RWO
---

- Con
    - NOT Support [[velero]]
        - [[velero]] does not support `hostPath`
        - So you should use `local`([local persistent volume](https://kubernetes.io/docs/concepts/storage/volumes/#local)) as `defaultVolumeType` for [[local-path-provisioner]]
        - [k3d default storage-class can't backup · Issue #8123 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/8123)
