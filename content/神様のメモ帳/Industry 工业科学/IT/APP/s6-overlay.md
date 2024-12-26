---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/DockerBuilder
- Label/Industry-工业科学/IT/APP/Plugin/Docker
- flag/APP/Process/Implement__/Service
---

[just-containers/s6-overlay: s6 overlay for containers (includes execline, s6-linux-utils & a custom init)](https://github.com/just-containers/s6-overlay)

[docker s6-overlay + containerpilot 对比 - 荣锋亮 - 博客园](https://www.cnblogs.com/rongfengliang/p/15943669.html)

[理解 docker 容器中的 uid 和 gid - sparkdev - 博客园](https://www.cnblogs.com/sparkdev/p/9614164.html)


- Installation
    - 

- Configuration
    - 

- Idea
    - 在一个 Docker 容器里运行多个独立进程，并统一管理，对外的 pid=1 为 s6-overlay

- Fundamentals
    - 可理解为 fork + exec + supervised

- Usage
    1. 在 Dockerfile 里下载并安装 s6-overlay，或者直接基于 s6-overlay 镜像
    2. 安装、配置你要运行的 App
    3. 配置容器入口
        - Using CMD
            - `ENTRYPOINT ["/init"]` + 启动时指定 `CMD` (Default)
            - `ENTRYPOINT ["/init", your_command, args]` + custom `CMD`
        - Using service script
            - 首先 `ENTRYPOINT ["/init"]` 和 `CMD` 不修改保持默认，然后配置 service script
            - 旧版配置方法 `/etc/services.d/<custom_name>/run`
            - 新版配置方法 `/etc/s6-overlay/s6-rc.d/`
                - 常见入口为 `/etc/s6-overlay/s6-rc.d/svc-<custom_name>/run`
                - 灵活但复杂，会看即可，自己写的话 `ENTRYPOINT` `CMD` 足够了，有运行不同进程的需求才用 s6-rc service script

- Description
    - s6-overlay 是 s6 进程管理器在 Docker 容器的实现
    - s6-overlay 理论上可作为任何 Dockerfile 的基础镜像
    - [[linuxserver.io]] 的所有镜像都基于 [[s6-overlay]]，并且清一色采用 s6-rc service sript 来启动容器
