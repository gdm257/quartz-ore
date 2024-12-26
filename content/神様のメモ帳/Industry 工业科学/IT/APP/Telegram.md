---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

[Telegram传奇：一个关于俄罗斯富豪、黑客、极权和阴谋的创业故事-钛媒体官方网站](https://www.tmtpost.com/1443098.html)

[SpriteOvO/Telegram-Anti-Revoke: Telegram anti-revoke plugin. | Telegram 防撤回插件。](https://github.com/SpriteOvO/Telegram-Anti-Revoke)


Telegram创始人Durov谈电报的原则：科技只是工具，不要希望科技可以解决社会问题，除了恐怖主义和儿童色情，其他的telegram都决不会干涉。

Telegram DC 是什么？

● 简述
DC 是 Data Centers 的缩写，也就是"数据中心"。Telegram 的服务器在世界不同地区分为多个数据中心。
目前有：DC1 美国、DC2 荷兰、DC3 美国、DC4 荷兰、DC5 新加坡。

● DC 和 Telegram 账户
根据 Telegram datacenter (https://core.telegram.org/api/datacenter) 的描述，Telegram 账号属于某一个DC，是由注册时的IP地址决定的。当用户注册时，Telegram 会检查其IP地址，并使用它来识别最接近的DC。
同样，如有必要，Telegram 会将用户重定向到另一个DC（如遇到 NETWORK_MIGRATE_X 错误时）。


> [!question]
> > 请告诉我一个可以查询用户所在 Data Center 的 Telegram Bot
> 
> [[ChatGPT]]
> 我很抱歉，我无法提供Telegram Bot的完整列表。不过，您可以尝试使用@mydcbot这个 Telegram Bot。当您发送/start命令给这个 Bot 后，它会返回您所在的Data Center的名称和IP地址。
