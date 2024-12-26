---
tags:
- flag/APP/DevOps/PackageManagement
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Download
- flag/Platform/Linux独占
---

- References
    - [Flathub](https://flathub.org/apps)

- Installation
    * `sudo apt install -y flatpak`
    * `sudo yum install -y flatpak`
    * flathub 仓库 `sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo`
    * flathub 换源 `sudo flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub`

- Idea
    - Distroless App
    - Container App
    - [[apt]] [[yum]] like management

- Test
    * flatpak 不支持 [[WSL|WSL 1]]
    * flatpak 不支持 WSL 2 without WSLg
    * flatpak 支持 WSL 2 with WSLg

- Fundamentals
    - 每个 App 独享一个虚拟环境，类似于 [[pipx]]
    - 共享同版本 Runtime，类似于 [[Docker|Docker]]
    - flatpak App 之所以能在不同发行版、不同桌面环境下运行，是因为 flatpak 提供了所有 App 所需要的运行时（runtime），这是其技术上的最大亮点
    - 例如 `org.kde.Platform` 是 KDE 桌面环境运行时，能运行基于 KDE 环境的 flatpak App，即便 Linux 发行版根本就没安装 KDE 桌面环境
    - 桌面环境运行时体积较大，因此不同 flatpak App 共用一份 runtime，就像 [[rpm]] [[deb]] 那样
    - flatpak 主要是为 GUI App 服务的，因为 CLI App 一般不依赖桌面环境，静态链接库版本的可执行文件本来就能在所有 Linux 发行版运行（这也是 [[Docker|Docker]] 的原理之一）。只有 CLI 依赖于某桌面环境，才需要使用 flatpak 进行打包

- Pro
    - Distroless
    - Come with dependencies (runtime)

- Con
    - Large size for runtime
    - More RAM usage

- Description
    * flatpak 跟 [[AppImage]] 一样是发行版无关的（Distroless）
    * flatpak 跟 [[Docker|Docker]] 一样是容器化的（Containerization）
    * flatpak 是目前最佳的容器化 GUI App 方案
    - FlatHub 是官方维护的软件仓库，对标 DockerHub

```bash
flatpak command
Usage:
    flatpak <command> [args]

Examples:
    sudo flatpak install -y flathub org.telegram.desktop
    sudo flatpak uninstall org.telegram.desktop
    flatpak install --user flathub org.gnome.Platform//3.34
    flatpak update org.telegram.desktop
    flatpak update
    flatpak remotes
    flatpak remote-ls --app  #列出非运行时的应用程序
    flatpak remote-ls gnome-apps  #列出特定的存储库应用程序

Commands:
    install [options] [bucket] <app>[//<version>]
        -y
        --user
        * E.g. install flathub org.telegram.desktop
    update [app]
    uninstall <app>
    list
    run <app>
    info <app>
    search <keyword>

Global Options:
    -h --help
    --version

```
