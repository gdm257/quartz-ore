---
tags:
- Label/Industry-工业科学/IT/APP/Plugin/Docker
---

[Dockerfile reference | Docker Documentation](https://docs.docker.com/engine/reference/builder/)

[Docker构建相关问题集锦 | Escape](https://www.escapelife.site/posts/b5c93058.html)

[hadolint/hadolint: Dockerfile linter, validate inline bash, written in Haskell](https://github.com/hadolint/hadolint)


```dockerfile
Dockerfile:
    # Comment
        - 只支持单行注释
        - `#` 要么在行首，要么前面只有缩进
        - 注释行可认为会被直接删除，因此注释行可用在多行 `\` 之间
    MAINTAINER
    HEALTHCHECH
    EXPOSE <port> [<port>/<protocol>...]
    VOLUME
    ENTRYPOINT
    CMD

    FROM
        # 语言环境镜像
        - FROM openjdk
        - FROM golang:1.20.1
        - FROM rust
        - FROM gcc:latest
        - FROM python
        - FROM node
        - FROM perl
        # OS 镜像
        - scratch
            - 不以任何镜像为基础，即空白镜像
        - bash
        - busybox
        - alpine:latest
        - cmd.cat/bash
        - cmd.cat/htop/exec/cd/curl/wget/htop/tcpdump
            - Container registry
            - 基于 Alpine
            - 相当于下载了指定命令的 alpine
            - 多个第三方命令由「/」分隔，指定多少个都行
            - 目测 coreutils 和 apk 支持的包都能指定
            - 目测最后一个命令是镜像的 CMD
        - nixery.dev/shell
            - 自带 bash
        - nixery.dev/shell/curl/htop
            - Container registry
            - 基于 NixOS
        - ubuntu:22.04
        - debian
        - rockylinux
        - archlinux
        - docker
        # 专用镜像
        - nginx
        - httpd
        - caddy
        - haproxy
        - tomcat
        - postgres
        - mysql
        - mariadb
        - mongo
        - redis
        - rabbitmq
        - logstash
        - kibana
        - elasticsearch
    RUN
    COPY
    ADD
    ONBUILD

    ENV
    ARG
    WORKDIR
    USER

```
