---
tags:
  - Label/Industry-工业科学/IT/TCP_IP/Protocol/7-应用层
ports:
  - "25"
  - "587"
  - "465"
---

## Brief

- References
    - [STARTTLS vs SSL vs TLS Explained in 5 Minutes | Mailtrap Blog](https://mailtrap.io/blog/starttls-ssl-tls/)
    - [什么是简单邮件传输协议（SMTP）？ | Cloudflare](https://www.cloudflare-cn.com/learning/email-security/what-is-smtp/)
    - [应该使用哪个 SMTP 端口？端口 25 还是 587？ | Cloudflare](https://www.cloudflare.com/zh-cn/learning/email-security/smtp-port-25-587/)

- Idea
    - 向 Mail Server 发送 email 的协议
    - Mail Server 接收 email 的协议
    - [什么是电子邮件？| 电子邮件的定义 | Cloudflare](https://www.cloudflare-cn.com/learning/email-security/what-is-email/)

- Ports
    - 25 SMTP
    - 465 SSL
    - 587 STARTTLS

- Fundamentals
    - [[ChatGPT]] 大部分的邮件客户端在支持 SMTP/SMTPS 协议时，会优先采用 SMTPS（SMTP over SSL/TLS）协议进行发送邮件。SMTPS 是一种经过 SSL 或 TLS 加密的 SMTP 协议，可以提高邮件传输的安全性和保密性。如果邮件接收方不支持 SMTPS，发送方将自动降级到使用 SMTP 协议传输邮件。在使用邮件客户端发送邮件时，通常会自动处理协议选择，不需要用户手动干预。
