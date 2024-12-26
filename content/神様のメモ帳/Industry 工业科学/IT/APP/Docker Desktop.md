---
tags:
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Layer
  - flag/APP/Network
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
  - flag/APP/Layer/k8s/ClusterCreater
winget: Docker.DockerDesktop
hosts:
  - host.docker.internal
wsl-distros:
  - docker-desktop
  - docker-desktop-data
---

- Test
    - k8s
        - [[Docker Desktop]] 勾选 k8s 选项，貌似只是在 WSL 中下载了几个 [[k8s]] 相关的 docker images，并在 [[Docker Desktop]] 启动时顺便启动了 k8s cluster 容器

- API
    - `npipe:////./pipe/docker_engine` for [[Windows]]
    - `unix:///var/run/docker.sock` for Unix

- Pro
    - Support integration to [[WSL]]
        - [[Docker Desktop]] mounts [[Docker]] socket, overlay volumes, command-line etc to [[WSL]]2 distro, which means multiple distros share the same [[Docker]] daemon but it works like a local [[Docker]] engine
    - Lightweight
        - IDLE(no running containers) does not consume CPU
    - Support auto port mapping

- Con
    - [[k8s]]
        - [[Docker Desktop]] comes with the feature that creates a [[k8s]] cluster
        - But it's more recommended to use [[Rancher Desktop]]/[[k3d]]/[[kind]]

- Description
    - Docker Desktop == 单服务器版 [[portainer]]
    - Docker Desktop 是一个 Docker 可视化管理工具
    - Docker Desktop 是一个 Docker Client
    - Docker Desktop 是 [[docker command|docker 命令]] 的前端，就像 [[docker-compose]] 是 docker 命令的前端一样
    - Docker Desktop 支持 WSL 2 作为 Docker Server，目测是使用 sockets 进行通信
    - Docker Desktop 的 Image 分析功能非常强大且易用，完爆 [[dive]]，胜过 [[portainer]]
