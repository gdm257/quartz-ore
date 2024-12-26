---
aliases:
- cmd.cat
- commando
tags:
- Label/Industry-工业科学/IT/APP/DockerBuilder
- flag/APP/Layer
- flag/APP/Download
- Label/Industry-工业科学/IT/APP/Plugin/Docker
---

[lukaszlach/commando: Container registry which provides you all the commands you need in a lightweight Alpine image. DevOps and SysOps best friend. https://command-not-found.com](https://github.com/lukaszlach/commando)


- Installation
    - `docker pull cmd.cat/<cmd01>/<cmd02>/...`

- Idea
    - `cmd.cat/<cmd01>/<cmd02>/<cmd03>/...` == 安装了 cmd01 cmd02 cmd03 命令的 Docker 镜像
    - Docker 镜像实在太精简了，想要安装一些常用命令，就得手写 Dockerfile，但很麻烦、镜像体积增大、频繁修改 Dockerfile、潜在的安装错误……缺点一大堆，有没有由雅地在 Docker 镜像里安装命令的方法呢？答案就是 `cmd.cat`

- Fundamentals
    - 非常神奇，简直黑魔法，反正我没搞懂
    - 目测只支持 `pkg` 软件包，毕竟基于 [[alpinejs persist]]

- Usage
    - 作为多阶段构建的中间镜像，免去手动安装软件包的麻烦
    - 作为多阶段构建的最终镜像（aka 基础镜像）

- Description
    - 
