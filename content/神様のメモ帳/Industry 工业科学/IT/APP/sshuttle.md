---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## sshuttle

[sshuttle/sshuttle: Transparent proxy server that works as a poor man's VPN. Forwards over ssh. Doesn't require admin. Works with Linux and MacOS. Supports DNS tunneling.](https://github.com/sshuttle/sshuttle)


sshuttle 本质是将 tcp 流量重新封装成 ssh 流量，通过 ssh 连接来转发，相当于 http proxy + ssh client。类比 shadowsocks/v2ray 方案，sshuttle 是 ss client，ssh server 是 ss server。讲道理 ssh 应该是最早的翻墙技术之一了，即把 ssh 当成 VPN 用，早就过时了，不知 sshuttle 这轮子有啥用……

sshuttle 作为 ssh client 连接上 VPS（ssh server）后，会上传 sshuttle 本身的源码到 VPS 并运行，相当于自动部署 ss server，由此实现了服务器的零配置。

至于流量，目测是 ssh 隧道的端口转发。

sshuttle -vv --dns -r root@your_vps_ip -x your_vps_ip 0/0