---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea
    - [[SSH]] 直连，服务器只能看到登录日志，至于用户跑了命令，完全不可控。堡垒机做的就是，我不给你 SSH 登录了，不给你用 SSH client，而是在 web ui 开一个 terminal emulator，你在这个界面做的所有操作，命令什么的，都有完整记录，还能够回放。不仅如此，一些高危命令，也可以拦截
    - 不仅限于 [[SSH]]，[[jumpserver]] 集成了各种技术栈，可以管理 [[Docker]] [[k8s]] [[Windows]] etc
    - [[1Panel]] 是单机器管理，[[jumpserver]] 是多机器（集群）管理

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives
    - [[ssh command|ssh client]]

- Description
