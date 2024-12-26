---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

[如何解决mosh中翻页只能查看一屏的问题 - 丶Blank - 博客园](https://www.cnblogs.com/aboutblank/p/10530018.html)

- Alternatives
    - [[htop]]
        - 是的，跑个 htop，不要隐藏 terminal 程序窗口，即可一直激活连接

```bash
apt install -y mosh
yum install -y mosh

Description:
    安装即可，无需配置、运行，client 会通过 ssh 启动 server.
    试用了一下，确实不掉线了，也流畅了一点.
    但输出行数不全，看了看文档没有相关资料，懒得折腾，宁愿 screen 重连.
    它是为了解决两个问题:
        线路不稳定, 丢包率高.
        线路延迟大, 操作延迟大.
    它使用普通的ssh协议认证, 然后传输使用udp协议.
    mosh 只能在 纯的 utf-8 环境下工作.
        export LANG=en_US.UTF-8
        export LC_ALL=en_US.UTF-8

```
