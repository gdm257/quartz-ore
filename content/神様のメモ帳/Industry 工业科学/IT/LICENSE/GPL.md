---
tags:
  - Label/Industry-工业科学/IT/License
spdx-licenses:
  - GPL-3.0-or-later
  - GPL-3.0-only
  - GPL-2.0-or-later
  - GPL-2.0-only
  - GPL-1.0-or-later
  - GPL-1.0-only
---

- Idea
    - 任何闭源软件都无缘 GPL
    - 你在你的软件中「使用」了 GPL 协议的库，那么你必须将整个软件的源码以 GPL 协议进行开源
    - 只是对外提供服务的 API 后端不需要开源（存疑）

- Fundamentals
    - 「使用」不必多说，任何形式的使用都算使用，动态链接库也算，网页前后端也算

- Description
    - [[AGPL]] 是 [[GPL]] 的一个补充, 在GPL 的基础上加了一些限制。GPL 的约束生效前提是该软件"发布"，有的公司就使用 GPL 组件编写web 系统，但是不发布系统，只用这个系统在线提供服务，这样就避免了开源系统代码。而 AGPL 要求如果云服务(即 saas )用到的代码是该许可证，那云服务的代码也必须开源
    - 「自用」「公司内部使用」可无视开源协议，因为根本就没发布和对外提供服务
