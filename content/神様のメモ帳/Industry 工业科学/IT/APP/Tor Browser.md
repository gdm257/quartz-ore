---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network/Implement__/Browser/Firefox
---

## Tor Browser

[如何优雅地用Tor_下篇 | 无二自留地](https://111111.online/posts/tor_bridges_proxy.html)

[如何优雅地用Tor_上篇 | 无二自留地](https://111111.online/posts/tor_obfs4_proxy.html)

[Tor Project | Download](https://www.torproject.org/download/)

[Tor Project Support](https://support.torproject.org/zh-CN/)

[RUNNING TOR BROWSER FOR THE FIRST TIME | Tor Project | Tor Browser Manual](https://tb-manual.torproject.org/running-tor-browser/)

[Tor check](https://check.torproject.org/)

[BridgeDB 申请网桥](https://bridges.torproject.org/bridges?transport=obfs4)

[Relay Search 测速](https://metrics.torproject.org/rs.html)

[什么是网桥？ | Tor Project | 支持](https://support.torproject.org/zh-CN/censorship/censorship-7/)

[使用闲置的小机搭建Tor网桥 - Skoilly Studio](https://www.skoilly.cn/?p=126)

[Users – Tor Metrics](https://metrics.torproject.org/userstats-bridge-country.html)

[GoodBadISPs · Wiki · Legacy / Trac · GitLab](https://gitlab.torproject.org/legacy/trac/-/wikis/doc/GoodBadISPs)


```bash
tor-browser app
Description:
    * Tor Browser 是集成了 Tor、obfs4proxy 的 Firefox.
    * Tor Browser 被设计为只能通过 Tor Network 上网.
    * Tor Browser 被设计为不保存用户数据，每次打开跟新的一样.
    * Tor 是加入 Tor Network 的工具.
    * Tor Network 是分布式匿名网络.
    * Tor Network 由世界各地的志愿者提供节点.
    * Tor Network 一个请求拆分给 3 个节点合作完成，以防止中间人攻击.
    * Tor Network 最大的缺陷在于，蜜罐足够多，还是能拼凑成完整请求.
    * Tor Network 提供者会积极配合各国的警察局公安机关.
    * Tor Network 不一定是完美匿名，想追踪大概率只是时间和成本问题.
    * Tor Network 不仅可用于用户，还能给服务器匿名.

Node Types:
    1. Exit Node 出口节点
    2. Tor Relay 中继节点：在 Tor directory 中列出的中继节点
    3. Bridges Relay 网桥：在 Tor directory 中不列出的中继节点
    - Tor Relay 的 IP 可能被检测到，很可能被 ISP/GFW 屏蔽.
    - Bridges Relay 用于对付对 Tor Relay 的封锁.
    - Bridge 使用 obfs4/meek 等混淆插件防止特征识别.
    - Bridge 用于桥接 Tor 网络.
    - Exit Node 直接与目标服务器通信，因此供不应求.
    - Exit Node 知道你访问了什么网站，但不知道通信内容.


接入 Tor 网络有 3 种方式，直连、代理、网桥。**强烈推荐代理，obfs4 也救不了封 IP**

1. 直连 很不安全，首先 ISP 能看到你试图连接 Tor 网络，虽然 ISP 不知道你用 Tor 浏览了什么内容，但它可以直接封了 Tor 网络，你连连都连不上。
2. 代理 相对安全， ISP 只能看到你连上了代理，但不知道这其实是个代理，也不知道你用代理去连接 Tor 网络，更不知道你通过 Tor 网络访问了什么。常见代理有 v2ray ss ssr。
3. 网桥 可以简单理解为没被 ISP 封锁的直连。可以解决 ISP 审查的问题。网桥其实是特殊的「入口节点」，网桥与普通中继不同，它们并未公开列出，因此对手无法轻易识别它们。因为网桥地址非公开，您需要自行请求。网桥方式是「特殊的直连」，ISP 虽然知道你连接了 Bridge，但不知道 Bridge 其实是 Tor 网络的一部分，而会把 Bridge 当成普通服务器。
4. 
firefox --> tor client --> obfs4proxy client --> censor --> obfs4proxy server --> tor bridge





重置线路

为什么我连接的中继回路，第一个 IP 地址总是相同的呢？
这是 Tor 的正常操作。 你连接的中继回路中的第一个节点通常被称为“入口节点”或是“中转节点""。 它是一个快速且稳定的节点，并且将会在您的中继回路中维持两到三个月，用来抵挡破解匿名攻击。 其余的中继会在你每次访问新网站时改变，这三个 Tor 中继会一起提供完整的隐私保护。

Tor 浏览器有两种方法改变你的中继线路 —— “新身份”和“为该站点使用新 Tor 线路”。 Both options are located in the hamburger menu ("≡"). You can also access the New Circuit option inside the site information menu in the URL bar, and the New Identity option by clicking the small sparky broom icon at the top-right of the screen.


新身份

这个选项在你不想让你接下来的浏览活动和以前的关联时会很有用。

运行此功能将会关闭所有已经打开的浏览器窗口及标签页，清除所有的浏览器 Cookie 与历史记录等个人信息，并且为后续所有的网络连接创建新的洋葱路由回路。

Tor 浏览器会提示你所有的活动和下载会被终止，在你点击“新身份”时考虑这一点。


New Tor Circuit for this Site

这个选项在出口节点无法访问你请求的网站或显示不正常时会有用。 选择它会在新的 Tor 线路上加载当前标签页。

在其它标签或窗口打开的相同的网站会在重新加载后使用新的线路。

这个选项不会清除任何私密信息或者取消关联你的活动，也不会影响你当前与其它网站的连接。



```