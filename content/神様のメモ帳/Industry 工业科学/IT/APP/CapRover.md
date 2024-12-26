---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/CD
github: caprover/caprover
homepage: https://caprover.com
npm: caprover
---

- Idea
    - PaaS based on [[Docker Swarm]]

- Fundamentals
    - [[Docker Swarm]]
        - [[CapRover]] 启动后会自动创建一个 [[Docker Swarm]] 集群
            - `/captain/data/config-override.json` - `{"useExistingSwarm": true}` 使用已有集群
        - [[CapRover]] 需要一个 DNS 泛域名 A/CNAME 记录 e.g. `*.paas.domain.com`
        - [[CapRover]] 通过上传配置文件向 swarm cluster 部署 services（app），每个 app 有一个 unique name 用于 DNS。例如 app 名为 `blog`，则访问域名为 `blog.paas.domain.com`
        - [[CapRover]] 不能在 [[Docker Swarm]] 集群中运行，因为每台服务器只能加入一个 swarm cluster

- Pro
    - Web UI
        - 用于管理应用
        - 类似 swarmpit，只不过 [[CapRover]] 不使用 [[docker-compose|compose file]]，而是使用自创的 Captain Definition File
    - Compatible with [[Docker Swarm]]
        - It is allowed to use both `docker swarm` command and web ui to manage cluster nodes
    - Lightweight
        - [[Docker Swarm]] can run in machine with 1C1G

- Con
    - NOT Support running in existing cluster
        - CapRover 根本无法集成进一个「正在运行的」「已经占用了 80 443 端口的」Docker Swarm 集群
        - 终于搞懂 CapRover 的安装逻辑了，官方文档、博客文章是一点都不写：
        1. 运行官方脚本或官方 compose file
        2. 启动一个临时容器
        3. 临时容器「在 /captain 目录生成配置文件」，包括 Nginx 配置、自签名证书、CapRover 的 json 配置
        4. 临时容器「调用 /var/run/docker.sock 创建 2 个 docker service： captain-captain 和 captain-nginx 两个服务都挂在了配置目录 /captain 」
        5. 临时容器退出返回状态码 0
        6. captain-nginx 运行 Ningx 作为网关，监听 80 和 443 端口。根据域名的不同，转发给 captain-captain (Web UI)或是实际部署的 apps
        7. captain-captain 即 Web UI，修改设置或部署应用后，利用挂载的 socket 文件调用 Docker 来启动容器、修改 Nginx 配置、重启 Nginx 进程
        - docker service name 不能修改，必须是 captain-captain 和 captain-nginx ，否则无法启动
        - 理论上 captain-nginx 可以不占用宿主机的 80/443 端口，但我懒得折腾了，不值得
    - NOT Support [[docker-compose|compose file]]
        - [Docker Compose · CapRover](https://caprover.com/docs/docker-compose.html)
    - NOT Support dynamic mounting volume
        - 因为基于 [[Docker Swarm]]，做不到 [[k8s]] PVC，只能退而求其次使用 [[Docker]] volume plugin
        - 官方给出了一种基于 [[rclone]] 的 stateless with persistent data 方案，其实和手动 rclone mount 没区别
        - [Persistent Apps · CapRover](https://caprover.com/docs/persistent-apps.html)
        - [Stateless with Persistent data · CapRover](https://caprover.com/docs/stateless-with-persistent-data.html)
