---
tags:
- Label/Industry-工业科学/IT/APP/Plugin/Docker
- Label/Industry-工业科学/IT/APP/Command/CLI
---

[mviereck/x11docker: Run GUI applications and desktops in docker and podman containers. Focus on security.](https://github.com/mviereck/x11docker)

[X server and Wayland Options · mviereck/x11docker Wiki](https://github.com/mviereck/x11docker/wiki/X-server-and-Wayland-Options)

- Installation
    - Linux (include WSL/MSYS2/Cygwin) 安装 x11docker 命令: `curl -fsSL https://raw.githubusercontent.com/mviereck/x11docker/master/x11docker | sudo bash -s -- --update`

- Configuration
    - 

- Idea
    - 

- Fundamentals
    - X Window: X Client + X Server

- Usage
    - CLI 运行 GUI App 容器
    - CLI 运行 GUI App on host
    - CLI 构建 GUI App 镜像

- Description
    - x11docker 命令只是个 bash 脚本，用来启动容器 App（x11 client），可理解为 docker 命令的前端。至于 x server 则需要自己额外安装，我们可以使用自己喜欢的 x server，然后在运行 x11docker 命令的时候指定一下就好。也就是说，x11docker 与 x server 是完全解耦的
    - 除了常规的 x server，我们还可以下载 `x11docker/xserver` 镜像作为 x server

- Test
    - 太难用了，放弃
