---
tags:
  - flag/License/AGPL
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Download
homepage: https://alist.nn.ci
github: alist-org/alist
scoop: alist
---

## Brief

- Test
    - alist 性能真不错，512 内存的 VPS，copy 时还能正常播放视频

- Fundamentals
    - 我意识到，alist 其实就是 tachiyomi，alist 的 storage type 就是 tachiyomi 的 extension。如此一来，我能能通过编写 alist 的 storage，将任何网站，抽象成 webdav（由 alist 提供）

- Description
    * alist 是支持多种存储，支持网页浏览和 WebDAV 的文件列表程序.
    * alist 支持 web.
    * alist 支持 WebDAV.
    * alist 支持 API.
    * alist 最新版 V3 不兼容 V2，本笔记描述的是 V3，也推荐 V3.
    * alist 实现了前后端分离，后端基于 gin，前端基于 Solidjs.
    * alist 是将「多种存储」挂载到一个 VFS，然后将 VFS 映射为一种存储.
    * rclone 是将「一种存储」映射为「另一种存储」.
    * 如果遇到没设置 metas 却要求输密码，请到全局设置关闭「sign all」
    * sign all 要求必须登录才能访问文件，哪怕是 matas 没有限制
    * sign all 是 alist 3.6.0 新增功能，默认开启（低版本默认相当于没开）
    * 「索引深度」为 2，能匹配 /ACG/comic，但不能匹配 /ACG/comic/C76
    * 「更新索引」里面的最大深度是绝对深度，而非相对深度
    * alist copy 转存 gd share，出错率不到 3%，后期再 rclone 补全

- Task Status
    * Succeeded
    * Errored

AList 不知道用的是哪个 client_id，反正 rclone 那种用不了，必须用 [GoIndex Drive Code Builder](https://install.kenci.workers.dev/) 来获取。

1. webdav guest 能直接访问加密路径，且可以下载，所以改密码且千万不要泄露。这个问题已经有人提了 [Visitor WebDAV问题 · Issue #1143 · alist-org/alist](https://github.com/alist-org/alist/issues/1143)，但开发者还没修。

2. 禁用 webdav_direct 的话 webdav 文件下载会 302，但支持重定向（301 302）的 webdav client 非常少，ios 有 nplayer；Android 有 CX文件管理器。

## Configuration

- References
    - [alist/internal/conf/config.go](https://github.com/alist-org/alist/blob/main/internal/conf/config.go)

- Architecture
    - config file
    - env powered by [caarlos0/env](https://github.com/caarlos0/env)
        - enable by default
        - `force` with `true` value to disable
    - cli

- Examples
    - env
        - `ALIST_FORCE=false`
        - `ALIST_CORS_0="*"`
        - `ALIST_DATABASE_TYPE=sqlite3`
        - 使用官方 [[Docker]] 镜像，请去掉 `ALIST_` 前缀

## Web

### Metas

- Con
    - `Hide` 用好很难
        - [元信息 | AList文档](https://alist.nn.ci/zh/guide/advanced/meta.html#tips)
        - ❌错误示范：`Hide` 匹配子文件（夹）名称，例如 `隐私文件夹007`
            - 虽然 web/webdav 根目录下看不见 `隐私文件夹007` 这个文件夹
            - 但路径 `/隐私文件夹007/文件` 是可以直接访问的，无论有没有启用 `Apply to sub folder`，极度危险！
        - ✅正确示范
            - 第一个 `Meta`
                - `Path` 为 `隐私文件夹007` 的父目录
                - `Hide` 匹配 `隐私文件夹007`
                -  web/webdav，无法在父目录看见 `隐私文件夹007`
            - 第二个 `Meta`
                - `Path` 为 `隐私文件夹007`
                - `Hide` 匹配 `.*`，并启用 `Apply to sub folder`
                - `Password` 别动，为空即可
                - web 直接访问正确路径 `/隐私文件夹007/文件` 会提示输入密码（`Password` 为空表示禁止访问，输入什么都无法访问），隐藏成功
                - WebDAV 直接访问正确路径 `/隐私文件夹007/文件` 虽然不报错，但返回的是空文件夹，隐藏成功
            - 特定用户访问隐藏文件夹
                - 如需让特定 User 访问 `Hide` 隐藏起来的 `隐私文件夹007`，请为该 User 启用 `Can see hides` 与 `Access without password` 权限
                - `Can see hides` 是高危权限，会使上面设置的第二个 `Meta` 的 `Hide` `.*` 失效
                - `Access without password` 是高危权限，会使上面设置的第二个 `Meta` 的 `Password` 失效，让 web 下的正确路径可被访问
