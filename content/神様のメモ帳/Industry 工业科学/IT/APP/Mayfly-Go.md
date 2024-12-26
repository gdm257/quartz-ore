---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/License/Apache
- flag/APP/Network
---

[Mayfly-GO Docs](https://objs.gitee.io/mayfly-go-docs/)

[mayfly-go Release - Gitee.com](https://gitee.com/objs/mayfly-go/releases)

[may-fly/mayfly-go: web版linux(终端 文件 脚本 进程)、数据库(mysql pgsql)、redis(单机 哨兵 集群)、mongo统一管理操作平台。](https://github.com/may-fly/mayfly-go)


- Installation
    - `scoop install mayfly-go`

- Configuration
    - `config.yml`

- Test
    - 不知为何，SSH 报错 `获取客户端错误: ssh: no key found`，没法用

- Idea
    - 用 Web 管理多台 Linux
    - 用 Web 管理多个 Databases
    - 解决日常开发人员需要安装各种相应客户端的烦恼（可满足前端，测试等人员100%不安装各类客户端如: xshell，navicat，redis desktop等即可完成对应的资源数据操作。后端开发人员80%的操作也可以不依赖以上各类客户端）

- Description
    - Mayfly-Go 是一个集 linux 垒机、mysql/postgresql/mongodb/redis 管理于一身的开源自建 web 平台

```bash
mayfly-go command
Usage:
    mayfly-go [-e "./config.yml"]

```
