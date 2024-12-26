---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
---

## Brief

- Alternatives
    - [[Nginx Proxy Manager]] bugs 巨多，折磨死了
        - DB CRUD 事务
        - 证书自动续期后，用的还是过期的证书
    - [[zoraxy]] 功能上是 [[Nginx Proxy Manager]] 的超集，且更现代

- Idea
    - 使用 WebUI 进行管理的 [[Nginx]]
    - NPM 自带 [[Nginx]]，而不是单纯的 config 前端

- Configuration
    - 可扩展性全在这了，完整的控制 [[Nginx]] 配置
    - You can add your custom configuration snippet files at `/data/nginx/custom` as follow, every file is optional:
    -   `/data/nginx/custom/root.conf`: Included at the very end of nginx.conf
    -   `/data/nginx/custom/http_top.conf`: Included at the top of the main http block
    -   `/data/nginx/custom/http.conf`: Included at the end of the main http block
    -   `/data/nginx/custom/events.conf`: Included at the end of the events block
    -   `/data/nginx/custom/stream.conf`: Included at the end of the main stream block
    -   `/data/nginx/custom/server_proxy.conf`: Included at the end of every proxy server block
    -   `/data/nginx/custom/server_redirect.conf`: Included at the end of every redirection server block
    -   `/data/nginx/custom/server_stream.conf`: Included at the end of every stream server block
    -   `/data/nginx/custom/server_stream_tcp.conf`: Included at the end of every TCP stream server block
    -   `/data/nginx/custom/server_stream_udp.conf`: Included at the end of every UDP stream server block

- Pro
    - 支持 [[TCP]]/[[UDP]] 转发
    - 支持 [[Let's Encrypt]] 的 HTTP-01 challenge 和 DNS challenge
    - 支持 Subject Alternative Name 证书
        - 与 [[caddy]] 为每个域名申请一张证书不同
        - [[Nginx Proxy Manager]] 每个 Host 的「所有域名」共用一张证书。因此我们能够在 Host 指定一些无意义的域名来避免吊销已有 [[Let's Encrypt]] 证书

- Con
    - 不支持 [[PHP]]

- Test
    - [[Let's Encrypt]] DNS challenge
        - Propagation Seconds for [[CloudFlare DNS]] 最好手动设置为 `30` 甚至以上，默认时间太短，经常失败
    - **不要删除正在被使用的 SSL 证书！**
        - 批量替换证书，请手动修改 sqlite 文件
        - TL;DR
        - 我怀疑外键事务没实现好，导致证书文件删了，数据库没改。并且我手动改数据库外键依赖，但不懂哪里还是有地方引用已删除的证书文件，实在找不到了，只能手动随便复制一份到 live 目录

- Alternatives

- Description
