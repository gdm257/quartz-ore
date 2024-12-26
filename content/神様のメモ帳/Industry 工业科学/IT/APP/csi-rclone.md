---
tags:
  - flag/APP/Layer/k8s/CSI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
github: wunderio/csi-rclone
namespaces:
  - csi-rclone
k8s-csi-drivers:
  - csi-rclone
k8s-storageClasses:
  - rclone
k8s-access-modes:
  - RWX
---

- Configuration
    - `Secret`: `rclone-secret`
        - Optional but recommended
        - default remote to create PV
        - if not set, you should specify info in PV

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: rclone-secret
type: Opaque
stringData:
  remote: "my-s3"
  remotePath: "projectname"
  configData: |
    [my-s3]
    type = s3
    provider = Minio
    access_key_id = ACCESS_KEY_ID
    secret_access_key = SECRET_ACCESS_KEY
    endpoint = http://minio-release.default:9000
```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: rclone-secret
type: Opaque
stringData:
  remote: "s3"
  remotePath: "projectname"
  s3-provider: "Minio"
  s3-endpoint: "http://minio.minio:9000"
  s3-access-key-id: "ACCESS_KEY_ID"
  s3-secret-access-key: "SECRET_ACCESS_KEY"
```

- Data
    - PVC annotations
        - `csi-rclone/umask: str`
            - [[umask]] value for [[rclone|rclone mount]]
            - e.g. `"022"`
        - `csi-rclone/storage-path: str`
            - it requires a `StorageClass` with `parameters.pathPattern` of `"${.PVC.namespace}/${.PVC.annotations.csi-rclone/storage-path}"`
