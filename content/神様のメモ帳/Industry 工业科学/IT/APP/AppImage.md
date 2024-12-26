---
aliases:
  - AppImage 分发包
  - AppImage 软件包
tags:
  - flag/APP/DevOps/PackageManagement
  - flag/APP/Download
  - flag/Platform/Linux独占
  - Label/Industry-工业科学/IT/File
---

[AppImages](https://appimage.github.io/apps/)

[AppImageCommunity/AppImageUpdate: AppImageUpdate lets you update AppImages in a decentral way using information embedded in the AppImage itself.](https://github.com/AppImageCommunity/AppImageUpdate)

[从deb包或ppa构建AppImage - AppImage中文文档](https://doc.appimage.cn/docs/pkg2appimage/)

[初探AppImage打包（Qt程序为例） | Gary W 的中文博客(站2)](https://garywill.github.io/chiblog/post/appimage%E6%89%93%E5%8C%85/)

- Idea
    - 一个软件 == 一个文件
    - Distroless App
    - Container App

- Description:
    * AppImage 的核心思想是「一个软件 == 一个文件」，即单文件便携软件
    * AppImage 可理解为 Linux 的 PortableApps
    * AppImage 与 [[flatpak]] 最大的不同是，AppImage 是单文件可执行文件，而 flatpak 是共用运行时依赖
    * AppImage 分发包 自带所有依赖，不需要任何外部依赖
    * AppImage 属于容器化
    * AppImage 原理和 Docker 差不多，基本上就是个微型版 Docker，致力于解决跨发行版的软件分发，AppImage 软件在大多数 Linux 发行版中都能直接运行，跟 Docker 一样，AppImage 提供一个中间层来解决兼容性问题，但 AppImage 毕竟不是 Docker，容器不能做的太重，因此功能有限，换句话说，如果软件要求的功能 AppImage 没有，那该软件很可能无法打包为 AppImage，即便打包了可能也没法用
    * AppImage 基于 FUSE，因此不支持 [[WSL|WSL 1]]
    * AppImage 文件可直接执行，但一般还是会加上 `.AppImage` 扩展名
    * AppImages 是官方的 AppImage 软件仓库
    * AppImages 目前（2023-02）有 1366 个 Apps

```bash
appimage file command
Usage:
    <app.appimage> [options]

Options:
    --help
    --version
    --appimage-extract

Examples:
    

```
