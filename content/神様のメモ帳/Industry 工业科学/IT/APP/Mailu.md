---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
---

## Brief

- References
    - [Docker搭建邮件系统(mailu) | RESTKHZ](https://blog.restkhz.com/post/mailsystem-setting-up)
    - [使用 Mailu 搭建邮件服务器 | Verne in GitHub](https://einverne.github.io/post/2021/07/email-server-mailu.html)

- Installation
    - [Mailu 搭建邮局的不完全指南 // Sanae's Blog](https://blog.sanae.im/posts/mail-hosting-with-mailu/)
    - [Frequently asked questions — What is the difference between DOMAIN and HOSTNAMES?](https://mailu.io/2.0/faq.html#what-is-the-difference-between-domain-and-hostnames)
    - [Mailu setup](https://setup.mailu.io)
    - [Docker Compose setup — Mailu, Docker based mail server](https://mailu.io/2.0/compose/setup.html)
    - [Setting up your DNS — Mailu, Docker based mail server](https://mailu.io/2.0/dns.html)
    - `HOSTNAMES`
        - 设为 `mx.yourdomain.com` 即可，该域名 A 或 CNAME 记录指向真实 Mail Server，反代无需 serve 该域名
        - TL;DR
        - 仅仅是用来指向 Web UI 服务器的。顺便用来生成 `MX` 记录所指向的域名，但并非强制要求 `MX` 记录指向 `HOSTNAMES` 中的域名，毕竟 `MX` 本质只要 IP 对了就行（指向 Mail Server）
        - 理论上 `docker down && docker up -d` 就能续期证书，但貌似 certbot 有判断机制，第二天才能自动重新申请证书
        - [Letsencrypt Force Renewal · Issue #1270 · Mailu/Mailu](https://github.com/Mailu/Mailu/issues/1270)

- Dependencies

- Edition

- Idea
    - 全功能自建 Mail Server

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

- Philosophy

- Objects

- Fundamentals
    - [什么是电子邮件？| 电子邮件的定义 | Cloudflare](https://www.cloudflare-cn.com/learning/email-security/what-is-email/)
    - [什么是 DNS MX 记录？ | Cloudflare](https://www.cloudflare-cn.com/learning/dns/dns-records/dns-mx-record/)
    - [电子邮件是如何工作的 | Verne in GitHub](https://einverne.github.io/post/2022/03/how-email-send-and-receive.html)
    - [SPF 记录：原理、语法及配置方法简介 - Blog - Renfei Song](https://www.renfei.org/blog/introduction-to-spf.html)
    - [什么是 DMARC | Verne in GitHub](https://einverne.github.io/post/2022/03/what-is-dmarc.html)
    - [DMARC 报告 | Verne in GitHub](https://einverne.github.io/post/2022/03/dmarc-report.html)

- Architecture

- Pro
    - 支持 多域名 E.g. `@tutanota.com` `@tuta.io`
    - 性能要求低

- Con
    - 不支持 Rule

- Test
    - [[caddy]]
        - [[Mailu]] 暴露了非常多端口，根本不懂怎么反代……
        - 好吧，其实只需要反代 80/443 就行，其他端口全由 Mailu（Mail Server）直接负责。如果你非要反代，可以考虑 TCP 转发
        - `80/443`: Web UI
        - `25`: [[SMTP]]
        - `587`: [[SMTP|SMTP(Submission)]]
        - `465`: [[SMTP|SMTPS]]
        - `110`: [[POP3]]
        - `995`: [[POP3|POP3S]]
        - `143`: [[神様のメモ帳/Industry 工业科学/IT/PROTOCOL/IMAP]]
        - `993`: [[神様のメモ帳/Industry 工业科学/IT/PROTOCOL/IMAP|IMAPS]]
    - [[DNS]]
        - SPF: Success
        - DKIM: Success
        - DMARC: Success
        - PTR (rDNS): 这个要给 VPS 服务商提工单
        - IP Blacklist: 绝大多数都是绿的，一两个红的，无解
        - [[Mailu]] 生成的 DNS 记录可以直接导入 CloudFlare，虽然有双引号包裹，但其实是能用的，无需解引号
    - Protocol
        - [[SMTP]]
        - [[SMTP|SMTPS]]
        - [[神様のメモ帳/Industry 工业科学/IT/PROTOCOL/IMAP]]
        - [[神様のメモ帳/Industry 工业科学/IT/PROTOCOL/IMAP|IMAPS]]
        - [[POP3]]
        - [[POP3|POP3S]]
        - autodiscover
        1. 确保 DNS SRV 所指向的域名在 `HOSTNAMES` 中
        2. 确保 `HOSTNAMES` 的所有域名都添加了 A 记录
        3. 确保 反代 `HOSTNAMES` 所有域名到 `mailu-front-1`（注意域名个数不要完全一致，会挤掉 SSL 证书，建议在反代加个 `.autoconfig` 域名），这是因为申请 Let's Encrypt 需要用到 443 端口

- Alternatives

- Description
