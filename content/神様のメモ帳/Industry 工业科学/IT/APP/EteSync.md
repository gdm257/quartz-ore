---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- flag/APP/Network
---

- Idea
    - 自建 Contact、Calendar、Task 服务

- Fundamentals
    - EteSync 采用 C/S 架构
    - EteSync 自定义了一套 API，兼容性差
    - etesync-dav 将 etesync server 挂载为 CardDAV/CalDAV，类比 [[alist|AList]] 将网盘挂载为 WebDAV，解决了 EteSync 方案的兼容性问题

- Description
    - EteSync 以 GPL 协议开源
    - EteSync 支持 零知识加密
    - EteSync 官方主要靠卖服务来赚钱，非常良心
    - etesync-dav 是 etesync server 的前端

- Test
    - [Traefik 2 Etesync Permission Denied htpaswd · Issue #185 · etesync/etesync-dav](https://github.com/etesync/etesync-dav/issues/185)

    - [docker build: etebase_python.Error: User not found · Issue #177 · etesync/etesync-dav](https://github.com/etesync/etesync-dav/issues/177)

    - 自建 etesync server，版本为 1.0/2.0
    - 官方 etesync server 版本为 2.0
    - etesync-dav 路由 `/.web/add_legacy/` 适用于 1.0
    - etesync-dav 路由 `/.web/add/` 适用于 2.0
    - etesync-dav 添加 etesync server 账号时，etesync server 1.0 需要填写两个密码（account password 和 encryption password），2.0 只需要一个密码
