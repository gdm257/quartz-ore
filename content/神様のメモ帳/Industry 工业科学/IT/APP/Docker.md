---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
  - flag/APP/Layer
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CD
aliases:
  - dockerd
frontmatter-as-page:
  - docker
  - docker-constraints
  - docker-labels
  - docker-mounts
  - docker-network-drivers
  - docker-networks
  - docker-plugins
  - docker-service-labels
  - docker-storage-drivers
  - docker-volume-drivers
winget: Docker.DockerDesktop
docker-labels:
  - com.docker.volume.anonymous
docker-volume-drivers:
  - local
docker-mounts:
  - bind
  - tmpfs
docker-network-drivers:
  - bridge
  - host
  - overlay
  - maclan
  - none
docker-networks:
  - docker0
  - bridge
  - host
  - none
hosts:
  - host-gateway
ports:
  - "2375"
communications:
  - socket
  - tcp
docker-storage-drivers:
  - overlay2
  - zfs
  - vfs
  - fuse-overlayfs
  - btrfs
directives:
  - ADD
  - ARG
  - CMD
  - COPY
  - ENTRYPOINT
  - ENV
  - EXPOSE
  - FROM
  - HEALTHCHECK
  - LABEL
  - MAINTAINER
  - ONBUILD
  - RUN
  - SHELL
  - STOPSIGNAL
  - USER
  - VOLUME
  - WORKDIR
services:
  - docker.service
  - docker.socket
  - containerd.service
---

## Installation

- References
    - [Install Docker Engine on CentOS | Docker Documentation](https://docs.docker.com/engine/install/centos/)
    - [Format command and log output | Docker Docs](https://docs.docker.com/engine/cli/formatting/)

- Fundamentals
    - [用下载deb的方式来安装docker · 零壹軒·笔记](https://note.qidong.name/2018/07/install-docker-with-deb/)

- Installation
    * 一键安装脚本
        - `curl -fsSL get.docker.com -o get-docker.sh`
        - `sudo sh get-docker.sh --mirror AzureChinaCloud`
        - 镜像可选 `AzureChinaCloud` 或 `Aliyun`，推荐前者
        - 可用作 dockerd / docker stack / docker swarm，其实你可以理解为它们分别是 docker server 的不同运行模式
    * 允许用户执行 docker
        - sudo usermod -aG docker $USER
            - docker 命令会使用 Unix socket 与 Docker 引擎通讯，
            - root 用户和 docker 用户组才能访问 Docker 引擎的 Unix socket
    * 安装后的启用
        - sudo systemctl start docker
        - sudo systemctl enable docker    开机自启
        - sudo service docker start    CentOS
    * 测试 Docker 能否运行
        - docker run hello-world
            - 输出 'Hello from Docker!' 等一堆信息，说明正常
    - CentOS-WSL 对 docker 的支持很差
    - [[WSL]] 1 和旧版 WSL 2 没有 Systemd，因此 Docker 官方安装脚本不会生成 service unit，要么手动运行 dockerd，要么用 [[Docker Desktop]] 来启动 dockerd

## Architecture

* Docker 是 C/S 架构，[[docker command]] 是 Client，[[Docker|dockerd]] 是 Server.
* Docker 属于容器化，不是虚拟化.

### Networks

- References
    - [在Docker Swarm Mode中获得真实的客户IP – 目光博客](https://eyehere.net/2019/%E5%9C%A8docker-swarm-mode%E4%B8%AD%E8%8E%B7%E5%BE%97%E7%9C%9F%E5%AE%9E%E7%9A%84%E5%AE%A2%E6%88%B7ip/)
    - [Traefik Proxy with HTTPS - Docker Swarm Rocks](https://dockerswarm.rocks/traefik/#getting-the-client-ip)
    - [Docker 端口规划与动态扩容 - 王江雨的博客 | jiangydev's Blog](https://jiangydev.github.io/2018/04/25/docker-port/)

- Built-in Networks
    - `docker0`
        - `docker0` 支持 containers 之间通信
        - `docker0` 支持 host 与 container 之间通信
        - 安装 [[Docker]] 时会自动创建名为 `docker0` 的网卡
    - `bridge`
    - `host`
    - `none`

- Network Types
    - `bridge`
    - `host`
        - 直接用 host 的网卡
    - `overlay`
        - 必须加入 [[Docker Swarm|swarm]] 集群才能创建 overlay network
    - `maclan`
    - `none`
        - 无网络

同一物理机の容器互联，有 2 种基本方法：

1. docker 默认的 bridge 网络，容器间不能通信，除非用 --link
2. docker 自定义网络，容器间无需任何设置相互访问，--net-alias 可以设置别名，因此无需使用 --link
3. 容器在同一个网络才能通信。--link 有两个作用，一是让两个容器变得像是一个容器，二是可以设置别名，通过容器名即可相互连接，ip 映射交给 docker 弄，我们不需要知道具体 ip，有很强的复用性、泛用性。但这命令的缺点是只能单向连接，也就是 A 和 B 两个容器，只能 A 访问 B 或者 B 访问 A，做不到 AB 之间直接同时互访
4. 与默认的网络 docker0 不同的是，指定了自定义 network 的容器可以使用容器名称相互通信，实际上这也是 docker 官方推荐使用 —network 参数运行容器的原因之一。在用户定义的桥接网络上，容器可以通过容器名称 (--name 指定的名称) 或别名来解析对方
5. 容器能够互相连接的前提是两者同处于一个网络中。网络这个概念可以理解为Docker所虚拟的子网，而容器网络沙盒可以看做是虚拟的主机，只有当多个主机在同一子网里时，才能相互通信。在同一网络中的所有容器网络都是互通的
6. 每次创建一个新容器的时候，Docker 从可用的地址段中选择一个空闲的 IP 地址分配给容器的 eth0 端口。使用本地主机上 docker0 接口的 IP 作为所有容器的默认网关。

### Volumes

- Test
    - 挂载目录 `/host:/container` 时，目录 host 是否会完全取代目录 container，还是二者合并？
        - 为前者，即**挂载时把目录当作文件**，宿主机文件替换掉容器文件（外部的目录覆盖容器内部目录）！请记住，只要是挂载，都是偷梁换柱，宿主机文件取代容器内文件（好像宿主机最后的路径为空目录，不会替换，反而是容器覆盖宿主机。即，哪边空，那边被覆盖；都不空，保留宿主机的）。
        - docker volume 其实可以理解为「宿主机文件」与「容器文件」之间的中间层——我们不直接映射「宿主机文件」到容器内部，而是将「宿主机文件」映射为「volume」，再将「volume」挂载到容器内部。「计算机领域的所有问题都可以通过增加中间层解决」，万能的中间层再次带来了兼容性、灵活性。

### Containers

* Container 的本质是进程，而不是一个完整操作系统.
* Container 是 Image 的实例.
* 一个 Image 可以同时开启多个实例.
* 一个容器原则上只有一个进程，PID=1.
* Alpine 只包含 busybox apk 及几个可执行文件.

### Images

* Image 本质是 Container 的快照.
* Image 可以由 docker commit 命令固化 Container 而成.

## Configuration

- Configuration
    - `~/.docker/config.json`

- Container gateway
    - `proxies.default.httpProxy: str`
    - `proxies.default.httpProxy: str`

### daemon

- Configuration
    - `/etc/docker/daemon.json`
    - `C:/ProgramData/docker/config/daemon.json`

### `Dockerfile`

* Dockerfile 本质是自动化了修改 Container 的过程.

### `.dockerignore`

## Data

- Clean cache
    - `docker container prune`
    - `docker image prune`
    - `docker network prune`
    - `docker volume prune`
    - `docker system prune` 四合一（无法清除 overlay2 占用的磁盘空间）
    - 我看了下，overlay2 里很多东西其实都是没用的，于是直接 `rm -rf /var/lib/docker/overlay2/*`（最好停止、删除 **所有**容器再进行此操作），之后必须重启 docker 才能正常使用 `sudo systemctl restart docker`。经过暴力清理，docker 占用空间变为了刚安装的水平了。

## Ecosystem

- Ecosystem
    - [veggiemonk/awesome-docker](https://github.com/veggiemonk/awesome-docker)
    - [docker/awesome-compose](https://github.com/docker/awesome-compose)
    - [bitnami/containers](https://github.com/bitnami/containers)

## References

[标签: Docker | Escape](https://www.escapelife.site/tags/Docker/)

[Relocating the Docker root directory - IBM Documentation](https://www.ibm.com/docs/en/z-logdata-analytics/5.1.0?topic=compose-relocating-docker-root-directory)

[修改镜像默认的存储位置 | Escape](https://www.escapelife.site/posts/174531eb.html)

[配置Docker守护程序并对其进行故障排除_Docker中文网](https://dockerdocs.cn/config/daemon/)

[小知识: docker(包括WSL2)如何配置Proxy - 知乎](https://zhuanlan.zhihu.com/p/427589367)

[Use a Docker container as a development environment with Visual Studio Code - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/use-docker-container-dev-env-vs-code/)

[ipsec\_vpn&docker | Hughes'Blog](https://hughlhz.github.io/2020/12/28/docker_vpn/)

[Understanding PUID and PGID - LinuxServer.io](https://docs.linuxserver.io/general/understanding-puid-and-pgid)

[docker的overlay2中存的都是什么and如何清理/var/lib/docker/overlay2 - 掘金](https://juejin.cn/post/7016872244408221732)

[awesome-selfhosted/awesome-selfhosted: A list of Free Software network services and web applications which can be hosted on your own servers](https://github.com/awesome-selfhosted/awesome-selfhosted)

【综合】

[veggiemonk/awesome-docker: A curated list of Docker resources and projects](https://github.com/veggiemonk/awesome-docker)

[Play with Docker](https://labs.play-with-docker.com/)

[docker-compose.yml 参考文档 | Deepzz's Blog](https://deepzz.com/post/docker-compose-file.html)

[Docker-Compose file reference](https://docs.docker.com/compose/compose-file/)

[Docker —— 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/)

[Docker入门基础篇 | Poetry's Blog](http://blog.poetries.top/2018/11/20/docker-base/)

[Docker「中级篇」 – IT人故事会](https://idig8.com/category/docker/docker-middle/)

[Docker Nginx 容器教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2018/02/nginx-docker.html)

[在生产环境使用K8s一年后，我们总结了这些经验和教训 - 精华区 / 文档搬运 - Rainbond社区-企业应用云操作系统](https://t.goodrain.com/t/topic/269)


【网络】
[容器内执行docker命令 - 歪麦博客](https://www.awaimai.com/2703.html)

[docker网络模型学习 | wangqi的blog](https://blog.wangqi.love/articles/docker/docker%E7%BD%91%E7%BB%9C%E6%A8%A1%E5%9E%8B%E5%AD%A6%E4%B9%A0.html)

[「Docker」 - 容器网络 - 知乎](https://zhuanlan.zhihu.com/p/57203485)

[柴少鹏的官方网站-Docker(四)网络管理](http://www.51niux.com/?id=191)

[docker容器的网络配置，允许docker可以被宿主机以外的其它主机访问以及局域网内可以直接访问docker容器ip_运维_Guo Sir的博客-CSDN博客](https://blog.csdn.net/ithaibiantingsong/article/details/81386307)

[Win7中使用Docker(Boot2Docker)并配置HTTP网络代理 | well's blog](https://hweih.github.io/2018/03/02/Win7%E4%B8%AD%E4%BD%BF%E7%94%A8Docker(Boot2Docker)%E5%B9%B6%E9%85%8D%E7%BD%AEHTTP%E7%BD%91%E7%BB%9C%E4%BB%A3%E7%90%86/)


【数据】
[快速清理Docker垃圾文件，释放硬盘空间 - Rat's Blog](https://www.moerats.com/archives/161/)

[Docker Volume - 目录挂载以及文件共享 | Zach Ke's Notes](https://kebingzao.com/2019/02/25/docker-volume/)

[关于Docker目录挂载的总结](https://www.cnblogs.com/ivictor/p/4834864.html)

【容器】
[Docker之为何不能停止容器 | 诗与远方](https://sjt157.top/2019/03/22/Docker%E4%B9%8B%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%83%BD%E5%81%9C%E6%AD%A2%E5%AE%B9%E5%99%A8/)

[Dockerfile多阶段构建原理和使用场景 - SegmentFault 思否](https://segmentfault.com/a/1190000016137548)

[加速Docker多阶段构建的方法 - jingsam](https://jingsam.github.io/2020/08/07/speed-up-docker-multi-stage-builds.html)

[如何构建多架构 Docker 镜像？-InfoQ](https://www.infoq.cn/article/v9qj0fjj6hsgyq0lphxg)

[使用 Docker Buildx 构建多种系统架构镜像 | 秋水逸冰](https://teddysun.com/581.html)

[多平台容器镜像构建就看这一篇 - 腾讯云原生 - 博客园](https://www.cnblogs.com/tencent-cloud-native/p/14190655.html)

[Docker中的ENTRYPOINT与CMD · 零壹軒·笔记](https://note.qidong.name/2017/11/docker-entrypoint-cmd/)

[Docker run 命令参数及使用 - 简书](https://www.jianshu.com/p/ea4a00c6c21c)

[Docker(三)：Dockerfile 命令详解 - 纯洁的微笑 - 博客园](https://www.cnblogs.com/ityouknow/p/8595384.html)

【实践】
[解决docker容器不支持中文的问题 | Polar Snow Documentation](https://docs.lvrui.io/2017/02/19/%E8%A7%A3%E5%86%B3docker%E5%AE%B9%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%E4%B8%AD%E6%96%87%E7%9A%84%E9%97%AE%E9%A2%98/)

[yeszao/dnmp: Docker LNMP (Nginx, PHP7/PHP5, MySQL, Redis)](https://github.com/yeszao/dnmp)

[Netdata Documentation - Netdata Documentation](https://docs.netdata.cloud/)

[Netdata部署与服务器集群监控_PHANTOM-CSDN博客](https://blog.csdn.net/a1323933782/article/details/89190641)

[Jrohy/multi-v2ray: v2ray easy delpoy & manage tool， support multiple user & protocol manage](https://github.com/Jrohy/multi-v2ray)

[deploy to docker containers · acmesh-official/acme.sh Wiki](https://github.com/acmesh-official/acme.sh/wiki/deploy-to-docker-containers)

[秋水逸冰 v2ray](https://hub.docker.com/r/teddysun/v2ray)

[Docker疑难杂症汇总 | Escape](https://www.escapelife.site/posts/43a2bb9b.html)

[24 个常见的 Docker 疑难杂症处理技巧](https://mp.weixin.qq.com/s/R58f7fac2F3MP0TLV36vyQ)


【安全】

[不用禁用 iptables 来解决 UFW 和 Docker 的安全问题 | 三分热度://柴锋](https://chaifeng.com/to-fix-ufw-and-docker-security-flaw-without-disabling-iptables/)

[无视系统防火墙的docker - 博客 - binsite](https://www.binss.me/blog/docker-pass-through-system-firewall/)

[Docker 容器安全的“终极武器”——AIM - InfoQ](https://www.infoq.cn/article/Wzx9JsLff7Q5vHqSakmH)

[Docker学习与实践 - 安全篇 - Waterstrong](https://blog.waterstrong.me/docker-security/)

[4-控制docker exec访问权限 - 简书](https://www.jianshu.com/p/87975db53eed)
