---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/Database/Backup
  - flag/Feature/snapshot
  - flag/Feature/hook
  - flag/Feature/object-level
version-k8s:
  - "1.18"
namespaces:
  - velero
CRD:
  - BackupStorageLocation
  - VolumeSnapshotLocation
  - BackupRepository
  - Schedule
  - Backup
  - PodVolumeBackup
  - Restore
  - PodVolumeRestore
  - DeleteBackupRequest
commands:
  - velero
labels:
  - velero.io/exclude-from-backup
  - velero.io/storage-location
  - velero.io/plugin-config
  - velero.io/resource-timeout
  - velero.io/source-cluster-k8s-gitversion
  - velero.io/source-cluster-k8s-major-version
  - velero.io/source-cluster-k8s-minor-version
  - velero.io/csi-volumesnapshot-class_<csi-river>
  - velero.io/csi-volumesnapshot-class
  - velero.io/repository-type
  - velero.io/volume-namespace
annotations:
  - velero.io/csi-volumesnapshot-class
  - pre.hook.backup.velero.io/container
  - pre.hook.backup.velero.io/command
  - pre.hook.backup.velero.io/on-error
  - pre.hook.backup.velero.io/timeout
  - post.hook.backup.velero.io/container
  - post.hook.backup.velero.io/command
  - post.hook.backup.velero.io/on-error
  - post.hook.backup.velero.io/timeout
  - init.hook.restore.velero.io/container-image
  - init.hook.restore.velero.io/container-name
  - init.hook.restore.velero.io/command
  - post.hook.restore.velero.io/container
  - post.hook.restore.velero.io/command
  - post.hook.restore.velero.io/on-error
  - post.hook.restore.velero.io/exec-timeout
  - post.hook.restore.velero.io/wait-timeout
  - post.hook.restore.velero.io/wait-for-ready
  - backup.velero.io/backup-volumes-excludes
envvars:
  - LD_LIBRARY_PATH
---

- Idea
    - disaster recovery
    - snapshotting
        - If the two clusters couldn’t share the snapshots generated by backup, for example migration from EKS to AKS, then please consider using [the file system backup](https://velero.io/docs/v1.15/file-system-backup/) or [the snapshot data mover](https://velero.io/docs/v1.15/csi-snapshot-data-movement/).  
        - 如果两个集群无法共享备份生成的快照，例如从 EKS 迁移到 AKS，请考虑使用[文件系统备份](https://velero.io/docs/v1.15/file-system-backup/)或[快照数据移动器](https://velero.io/docs/v1.15/csi-snapshot-data-movement/)。
        - [Velero Docs - 集群迁移 --- Velero Docs - Cluster migration](https://velero.io/docs/v1.15/migration-case/)

- Fundamentals
    - Restore FSB data
        - **NOT Restore PV** (skipped)
        - Restore PVC
            - Generally, CSI driver will auto create a new PV bound with PVC
        - Hook Pod!
            - [[velero]] modifies `Pod` objects before sending to [[k8s]]
            - [[velero]] injects image `velero/velero-restore-helper` with container name `restore-wait` to `initContainers`, which prevents running `containers` until finishing PVC data restoration from FSB repositories(`BackupRepository`)
            - `restore-wait` mounts volumes to `/restore/<vol-name>/`, watches whether the filesystem restore done file `/restore/<vol-name>/.velero/<restore-uid>` exists. Util finding this file, `restore-wait` holds running

- Examples
    - [kubernetes进阶-集群备份-velro - 可乐去冰](https://isekiro.com/kubernetes%E7%BB%84%E4%BB%B6-%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6etcd%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8/)

- Objects
    - Location
        - Each Velero backup has one `BackupStorageLocation`, and one `VolumeSnapshotLocation` per volume provider
            - *File System Backup data* is *stored* under a prefix/subdirectory of the main Velero bucket, and will go into the *bucket* corresponding to the `BackupStorageLocation` *selected* by the user at backup creation time.
            - 如果一个提供程序只有一个 `VolumeSnapshotLocation`，则 Velero 将自动使用该位置作为默认位置
            - 如果您为提供程序配置了[多个](https://velero.io/docs/v1.15/customize-installation/#configure-more-than-one-storage-location-for-backups-or-volume-snapshots)`VolumeSnapshotLocations`，则在创建备份时必须始终指定有效的 `VolumeSnapshotLocation`，即使您正在使用 [File System Backup](https://velero.io/docs/v1.15/file-system-backup/) 进行卷备份也是如此。您可以选择决定使用 `velero server` [`--default-volume-snapshot-locations`](https://velero.io/docs/v1.15/locations/customize-locations.md#set-default-backup-storage-location-or-volume-snapshot-locations) 标志，该服务器列出了在创建备份时未指定 `VolumeSnapshotLocation` 时 Velero 应使用的默认 `VolumeSnapshotLocation`
        - If you have a cluster with more than one type of volume, like EBS and Portworx, but you only have a `VolumeSnapshotLocation` configured for EBS, then Velero will **only** snapshot the EBS volumes
            - `VolumeSnapshotLocation` 完全由特定于提供商的字段（AWS 区域、Azure 资源组、Portworx 快照类型等）定义
        - [Velero Docs - Providers](https://velero.io/docs/v1.15/supported-providers/)
        - [Velero Docs - Velero Backup Storage Locations](https://velero.io/docs/v1.15/api-types/backupstoragelocation/)
        - [Velero Docs - Velero Volume Snapshot Location](https://velero.io/docs/v1.15/api-types/volumesnapshotlocation/)
        - [velero-plugin-for-aws/backupstoragelocation.md at main · vmware-tanzu/velero-plugin-for-aws](https://github.com/vmware-tanzu/velero-plugin-for-aws/blob/main/backupstoragelocation.md)
        - [velero-plugin-for-aws/volumesnapshotlocation.md at main · vmware-tanzu/velero-plugin-for-aws](https://github.com/vmware-tanzu/velero-plugin-for-aws/blob/main/volumesnapshotlocation.md)
        - [vmware-tanzu/velero-plugin-for-aws: Plugins to support Velero on AWS](https://github.com/vmware-tanzu/velero-plugin-for-aws?tab=readme-ov-file#prerequisites)
        - [unable to locate ObjectStore plugin named velero.io/aws vmware-tanzu/velero:7.1.4 fresh install · Issue #8101 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/8101)
    - PV Backup
        - By default, `velero backup create` makes disk snapshots of any persistent volumes `--snapshot-volumes=true`
        - Velero 的备份分为 2 个部分 - 存储在对象存储中的元数据和持久卷数据的快照/备份。目前，Velero 本身并不加密它们中的任何一个，而是依赖于对象和快照系统中的本机机制。一种特殊情况是 File System Backup，它在文件系统级别备份持久卷数据并将其发送到 Velero 的对象存储。
        - [Velero Docs - How Velero Works](https://velero.io/docs/v1.15/how-velero-works/)
    - Volume Backup
    - Resources Backup
        - Backup Methods
            - Normal Backup
            - `VolumeSnapshot` - FSB
                - Deps
                    - node agent
                    - `BackupStorageLocation` of S3
                - Configuration
                    - `--default-volumes-to-fs-backup=true`
                    - `--use-volume-snapshots=false` 阻止在安装时创建未使用的 `VolumeSnapshotLocation`
                - Con
                    - NOT Support consistent
                        - 为了保证一致性，必须禁止 Pods 写入 PV
                        - 常见做法是 Replicas 设为 0，但该操作目前只能手动执行，不适合自动备份
                        - 另一种做法是给对应 Pods 添加 [[velero]] hook `annotations`，本质是在备份前后 exec Pod containers 执行命令，通过命令来暂停进程对 PV 的写入。但这种做法兼容性不好，而且门槛较高
                        - 一致性，随缘吧
                    - NOT Support `hostPath`
                        - FSB 支持绝大多数 [[k8s]] `Volume` 类型，除了 `hostPath`
                    - NOT Support volumes unmounted in Pod
                        - Velero 的文件系统备份通过访问运行 Pod 的节点文件系统来从卷中读取/写入数据。因此，FSB 只能备份由 Pod 挂载的卷，而不能直接从孤立的 PVC/PV 对备份
                - Data
                    - 目前，Velero FSB 仅支持将对象存储作为备份存储。Velero 从 [BackupStorageLocation `配置`](https://velero.io/docs/v1.15/api-types/backupstoragelocation/)中获取参数，以编写备份存储的 URL。Velero 为其*预定义*了端点
                    - 目前，Velero 在 velero install 命名空间中创建一个名为 `velero-repo-credentials` 的密钥，其中包含默认备份存储库密码。在将备份存储库作为第一个备份（即 FS Backup、数据移动器）之前，您可以使用自己的密码编码为 base64 来更新密钥。要 update 的 key 为 `repository-password`。如果您在创建备份存储库的第一次备份后更新密钥密码，则 Velero 将无法连接较旧的备份
                    - 备份存储库是在使用 Node Agent 安装 Velero 后首次执行备份目标期间创建的。Velero 为每个命名空间创建一个备份存储库
                    - [Support only restore volume data for filesystem backup · Issue #7345 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/7345)
                - Test
                    - `Failure Reason: found a backup with status "InProgress" during the server starting`
                        - uninstall and deploy [[velero]] again
                        - [Failure Reason: found a backup with status "InProgress" during the server starting · Issue #7568 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/7568)
                - [S3 client-side encryption support · Issue #3218 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/3218)
                - [Configurable repo password · Issue #5443 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/5443)
            - `VolumeSnapshot` - Velero CSI Plugin
                - **Deps**
                    - *CSI driver* capable of support volume snapshots at the [v1 API level](https://kubernetes.io/blog/2020/12/10/kubernetes-1.20-volume-snapshot-moves-to-ga/)
                    - `VolumeSnapshotLocation`(s)
                - 由 Velero CSI 插件创建的 VolumeSnapshots
                - CSI Snapshot Data Movement takes CSI snapshots through the CSI plugin
                - 非常乱！
                - [CSI Snapshot Support in Velero](https://velero.io/docs/v1.15/csi/) 说的是用 Velero CSI Plugin 通过 [[k8s]] CSI Snapshot API，来调用支持 CSI Snapshot API 的 CSI Driver 进行 Snapshot 的创建
                - [CSI Snapshot Data Movement](https://velero.io/docs/v1.15/csi-snapshot-data-movement/) 则是利用 Velero CSI Plugin 通过 [[k8s]] CSI Snapshot API，读取 CSI Driver 生成的 Snapshot，上传到 Cloud Location；上传完成后，通过 [[k8s]] CSI Snapshot API 删除 CSI Driver 创建的 Snapshot
                - 注意！
                - **CSI Snapshot != Volume Snapshot**
                - 这是两个完全两个不同的概念
                - *CSI Snapshot* 完全由 [[k8s]] CSI Driver 控制，是 [[k8s]] 原生的概念。[[velero]] 本身不提供任何 CSI Driver，[[velero]] CSI plugin 只是通过标准的 [[k8s]] CSI Snapshot API 来间接调用 CSI Driver，以此操作 CSI Snapshot。因此，你选择存储方案的时候，最好选支持 CSI Snapshot API 的 CSI Driver
                - *VolumeSnapshot* 完全由 [[velero]] 控制，是 [[velero]] 专有概念。`Movement` 相当于把 CSI Snapshot 转换为 `VolumeSnapshot`
        - Installation
            - Created by [[kubectl]]
            - Created by schedule backup CRD
            - Created by `velero backup create` command
        - Idea
            - *Uploads* a tarball of copied *Kubernetes objects* into cloud object storage
            - Calls the cloud provider API to *make disk snapshots of persistent volumes*, if specified
        - Test
            - CloudFlare R2
                - CloudFlare R2 that does not supports AWS S3 `checksumAlgorithm`
                - Method 1: use `velero/velero-plugin-for-aws:v1.9.0`
                - Method 2: use `velero/velero-plugin-for-aws:v1.9.2` or above, and you must set `--config checksumAlgorithm="",...` for storage location
                - [Cloudflare R2 backup fails · Issue #7940 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/7940)
                - [Backup finalizer hangs with "gzip: invalid header" error · Issue #7839 · vmware-tanzu/velero](https://github.com/vmware-tanzu/velero/issues/7839)
                - [Authenticating Requests: Using the Authorization Header (AWS Signature Version 4) - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html#:~:text=When%20you%20send%20a%20request%2C%20you%20must%20tell%20Amazon%20S3%20which%20of%20the%20preceding%20options%20you%20have%20chosen%20in%20your%20signature%20calculation%2C%20by%20adding%20the%20x%2Damz%2Dcontent%2Dsha256%20header%20with%20one%20of%20the%20following%20values%3A)
    - Restore
        - Installation
            - Created by [[kubectl]]
            - Created by `velero restore create` command
        - Idea
            - restore all of the objects and persistent volumes from a previously created backup
        - Configuration
            - Conflict (Policy)
                - If a resource in the backup already exists in the target cluster, Velero will skip that resource.
            - Resources
                - `--include-resources <kind>[.<group>],...`
                - Examples
                    - `--include-resources Namespace`
                    - `--include-resources namespace`
                    - `--include-resources ns`
        - [Velero Docs - How Velero Works](https://velero.io/docs/v1.14/how-velero-works/)

- Examples
    - [Velero Docs - Examples](https://velero.io/docs/v1.14/examples/)

- Version
    - ~~1.15~~
        - deprecate [[restic]]

- API
    - [Velero Docs - Overview](https://velero.io/docs/v1.14/api-types/)

- Ecosystem
    - Plugin
        - Types
            - Object Store
            - Volume Snapshotter
            - Backup Item Action
            - Restore Item Action
            - Delete Item Action
            - Item Block Action
    - [Velero Docs - Plugins](https://velero.io/docs/v1.15/custom-plugins/)
    - [Velero Plugins](https://velero.io/plugins/)

- Data
    - `/`
        - `backups/`
            - `<backup-name>/`
                - `*.gz`
                - `velero-backup.json`
                - [[k8s]] resources
                - A backup is a gzip-compressed tar file whose name matches the Backup API resource’s `metadata.name`
                - [Velero Docs - Output file format](https://velero.io/docs/v1.14/output-file-format/)
        - `kopia/`
            - volume snashots by [[Kopia]]
            - `<namespace>/`
                - a [[Kopia]] repo
        - `restic/`
            - volume snashots by [[restic]]
    - Restore Order
        - Custom Resource Definitions
        - Namespaces
        - StorageClasses
        - VolumeSnapshotClass
        - VolumeSnapshotContents
        - VolumeSnapshots
        - PersistentVolumes
        - PersistentVolumeClaims
        - Secrets
        - ConfigMaps
        - ServiceAccounts
        - LimitRanges
        - Pods
        - ReplicaSets
        - Clusters
        - ClusterResourceSets

- Philosophy
    - Scoped Resources
        - Cluster-scoped resources
        - Namespace-scoped resources
        - Kind-scoped resources
            - format as `resourceKind.apiGroup`
            - use `*` for all resources
        - Label-scoped resources
            - `velero.io/exclude-from-backup: true` are not included in backup
            - You can use other labels
        - [Velero Docs - Resource filtering](https://velero.io/docs/v1.15/resource-filtering/)
    - FSB
        - Idea
            1. [[velero]] calls *CSI that supports CSI snapshots* to take snapshots, and optionally *move*(not copy) snapshot data to a [[velero]] storage location
            2. Use FSB as a volume snapshot plugin for any CSI that does not natively support snapshotting
        - Deps
            - [[velero]] requires integration implementation of the CSI driver
            - [[velero]] maintains some integrations of CSI
            - You can write one youself
        - Velero supports backing up and restoring Kubernetes volumes attached to pods from the file system of the volumes, called File System Backup (FSB shortly) or Pod Volume Backup
        - Velero's File System Backup is an addition to the aforementioned snapshot approaches
        - [[velero]] 备份并不是原生的 CSI Snapshot，而是相当于自己实现的一套 Snapshot
        - [Velero Docs - File System Backup](https://velero.io/docs/v1.14/file-system-backup/)

- Pro
    - Support any type of [[k8s]] volume (including any CSI driver)

- Con
    - NOT Support consistent
        - It backs up data from the live file system, in which way the data is not captured at the same point in time, so is less consistent than the snapshot approaches.
        - not strictly atomic. If Kubernetes objects are being created or edited at the time of backup, they might not be included in the backup
        - 备份过程中 Volumes 写入会导致不一致，要么不可写、要么不一致
