---
tags:
  - Label/Article/APP
title: Home
publish: "true"
---

- [神様のメモ帳](/神様のメモ帳/)
- [Tags](/tags/)

```d2
grid-gap: 0
grid-columns: 1

L2: "" {
    grid-rows: 1
    grid-gap: 0

    Resources: {
        grid-rows: 2
        Videos
        Pictures
        Music
        Documents
    }
    Applications: {
        grid-columns: 1
        grid-gap: 10
    
        Persists: "" {
            Configuration
            AppData
        }
        APP: "" {
            grid-gap: 0
            grid-rows: 1
            Windows APP: {
                grid-rows: 2
                scoop
                winget
                chocolatey
                wsl
            }
            Linux APP: {
                grid-rows: 2
                homebrew
                flatpak
                apt
                yum
                dnf
            }
            Pakcage Manager: {
                grid-rows: 3
                vfox
                volta
                micromamba
                rye
                pipx
                npm
                go
                cargo
                dotnet
                cpan
                gem
            }
        }
    }
}
"OS": {
    grid-rows: 1
    Windows
    Linux
}
```

```d2
grid-gap: 0
grid-columns: 1

Applications: "APP" {
    grid-rows: 2
    BitWarden
    Stalwart
}
CD: {
    grid-gap: 18
    grid-rows: 1
}
Data: {
    grid-rows: 3

    Auth: {
        grid-rows: 1
        Casdoor
    }
    S3: {
        grid-rows: 2
        JuiceFS
        lakeFS
        AList
        MinIO
        Duplicati
    }
    DB: {
        grid-rows: 2
        PostgreSQL
        CockroachDB
        Redis
        pgBackWeb
        pgWeb
    }
}
Gateway: "Warpgate" {
    grid-rows: 1
}
Traefik: "Traefik" {
    grid-rows: 1
}
Docker Swarm: "Docker Swarm" {
    grid-rows: 1
}
Linux: "Linux" {
    grid-rows: 1
    Linux Machine 1
    Linux Machine 2
    Linux Machine N
}
```

- Deps
    - Internal Deps
        - Performance
            - SSH
            - CapRover
            - Docker Swarm
                - Warpgate
                - Dragonfly
                - pgautoupgrade
                    - Casdoor
                    - Alist
                        - lakeFS
                            - JuiceFS
    - Public Deps
        - Performance
            - Network
                - SSH
                - Traefik
                    - Warpgate
                    - Casdoor
                    - Alist

- Persist
    - *DB* -> Files -> *Duplicati* -> Cloud
    - DB -> *Dump* -> Encrypt -> Files -> Cloud
    - Storage (*AList*) -> Rclone Crypt -> Cloud
    - Storage (*AList*) -> JuiceFS -...-> Cloud
    - Storage (*JuiceFS*) -> AList -> Cloud
    - Storage (JuiceFS) -> GlusterFS -> Files -> Duplicati -> Cloud
    - Storage (*GlusterFS*) -> Files -> Duplicati -> Cloud
    - Files (*Linux*) -> *Duplicati* -> Cloud
    - Files (Linux) -> *Restic* -> Cloud
    - Files (*Windows*) -> Restic -> *Cloud*

- Cloud
    - *115* -> Disaster Recovery
    - Aliyundrive -> Disaster Recovery
    - OneDrive E5 -> Disaster Recovery
    - Google Drive -> Disaster Recovery

- *Disaster Recovery*
    - *rclone copy* -> Other cloud
    - rclone copy -> *HDD*
    - rclone copy -> *SSD*
    - rclone sync -> HDD
    - ~~rclone sync -> SSD~~

- Storage
    - by Storage
        - lakeFS
            - 不支持加密
            - 不支持 splitting large file
            - 性能一般
            - Git
                - lakeFS 设计其实很常规，就是 metadata 与 data 分离，然后 CRUD
                - Git repo 只不过是额外维护了一层 indexes，本质上来说是独立的，或者说 Git repo 只不过是 metadata 与 data 的高层级封装
                - JuiceFS 以 `filesystem` 为单位，对接一个 storage backend（S3）
                - lakeFS 以 `repo` 为单位，对接一个 storage backend（S3）。产品设计感更强，并且更友好，毕竟是个开发者都用过 [[GitHub]]，看到那 GitHub Style 的 repo 页面，秒懂。与 filesystem 并无本质区别
            - Support mirror
                - 相当于主从复制
                - [Mirroring | lakeFS Documentation](https://docs.lakefs.io/howto/mirroring.html)
        - JuiceFS
            - `filesystem` 为单位，一个容器一个 filesytem
                - 折磨死了，s3/webdav 怎么都失败
            - s3 gateway
                - `--storage=file` 干嘛用的？
                - 我懂了，说是 gateway，其实就是在 1 个 bucket（filesystem）创建多个子目录当不同 buckets
                - 创建 buckets（子目录）的操作在 web ui 9000 完成
                - 也就是说，gateway 及其 Users/Groups 是绑定在 filesystem db 里的
                - `--metrics=127.0.0.1:9567`
                - `--consul=127.0.0.1:8500`
            - webdav gateway
                - subcommand 把 `s3` 换成 `webdav`
            - Support migration between db engines
                - [Metadata Backup & Recovery | JuiceFS Document Center](https://juicefs.com/docs/community/metadata_dump_load)
            - Support encryption before uploading
                - User only needs to provide a private key with a password while creating the file system
                - private key can be provided by setting the environment variable `JFS_RSA_PASSPHRASE`
                - Data Encryption At Rest must be enabled when creating file system
                - [Data Encryption | JuiceFS Document Center](https://juicefs.com/docs/community/security/encryption/#at-rest)
    - by Cloud
        - *AList*
    - by Disk
        - MinIO
            - MinIO 将数据和元数据作为对象一起写入，从而消除了对元数据数据库的需求
            - Support encryption
        - ~~SeaweedFS~~
            - 除了支持 file splitting，实在找不出什么理由
            - 非常散装，非常硬
            - 纯配置/cli
        - ~~GlusterFS~~
            - 感觉没必要，设计不是很喜欢
            - NOT Support splitting large file

- Repo
    - restic
    - duplicati
    - kopia
    - pgbackrest
    - juicefs
    - rclone
        - migrate to JuiceFS
    - privatebin
        - migrate to JuiceFS

- Password (_**BitWarden**_)
    - Files -> Duplicati -> Cloud
    - Export -> Encrypt -> *file.io* -> *pastebin.com* -> *lolink*

- *Application*
    - APP Manager -> *List* -> Files -> *Restic* -> Cloud
    - Package Manager -> List -> Files -> Restic -> *Cloud*

- DR
    - Type
        - csi-s3
        - k3s
        - velero objects
        - velero volumes
        - cnpg
    - Storage
        - r2
            - csi-s3
            - k3s
        - c2
        - b2
            - velero objects
            - velero volumes

- 一切皆 Component
    - JS
        - **最终一致性**
            - 事件驱动
            - 目标状态
                - 每一次 JS 的执行都应该描述一个目标
                - 每一次 JS 的执行完全独立隔离
                - 不同执行的联系，靠的是上下文、全局变量（浏览器状态）
    - HTML
        - 首屏加载结构**方块图**（原型图）
            - 任意一种可渲染元素 == box
            - CSS == 摆布、拉扯 box
    - CSS
        - **隔离性**
            - 组件之间（包括嵌套关系）CSS 完全隔离
            - 除了必要的 CSS 继承

- Pages
    - `/index`
        - `/congress`
        - `/presidential-dinner`
        - `/gala-dinner`
    - `/committees`
    - programs
        - `/scientific-program`
        - `/week-agenda`
        - `/educational-workshop`
        - `/accreditation`
        - `/ifcc-forum-for-young-scientists`
    - `/posters`
    - registration
        - `/registration`
        - `/ifcc-distinguished-awards`
        - `/scholarships`
        - `/visitors`
    - `/sponsors`
    - `/hotol-accommodation`
        - `book-your-hotel-for-dubai`
    - info
        - `/invitations`
        - `/congress-veneu`
        - `/general-info`
        - `/official-carrier`
        - `/media-kit`

- Components
    - common
        - `html`
        - `header`
        - `footer`
        - `top-button`
    - layout
        - `center-content`
        - `two-col`
        - `two-col-one-flex`
    - fragment
        - `page-title`
        - `background`
        - `image`
        - `link-button`
        - `markdown`
            - `list`
        - `collapse`

- list
    - type -> component
    - config path -> config
    - data path -> data

- component
    - component
    - config
    - data

- Data Driven
    - From Database
        - [[ToolJet]]
        - [[kestra]]
        - [[NocoBase]]
        - [[appsmith]]
        - [[refine]]
    - From Collection
        - [[directus]]
        - [[AITable]]
        - [[focalboard]]
    - From Properties
        - [[anytype]]
        - [[AFFiNE]]
        - [[Obsidian]]
- Content Driven
    - [[AppFlowy]]
    - [[AFFiNE]]
    - [[Notion]]
    - [[Obsidian]]
