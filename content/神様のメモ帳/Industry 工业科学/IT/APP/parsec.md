---
tags:
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- flag/License/Freeware
- flag/APP/Network
- flag/APP/Network/Implement__/RemoteControl
---

- Installation
    - `scoop install parsec`

- Description
    - parsec 是一款远程控制软件
    - parsec 不支持自定义连接方式，连接过程是全自动的，用户无法指定，完全依靠 parsec 的判断。也就是说假如能通过局域网连接，而 parsec 认为必须走公网才能连接，那最后会走公网。显然这是种错误的判断，好在经过不断迭代，parsec 的判断逻辑已经相当成熟，基本都是最优选择。如果你的网络情况比较特殊，恰好 parsec 选择了较差的连接方式，那就需要一些高级手段来修复这个问题，例如手动组网（我觉得这基本上是个伪需求）

- 测试流水帐
    - ~~我用 Android 连接，不知为何走的是公网没走局域网，稳定性差，根本没法拔 GALGAME~~
    - 进一步测试发现，应该确实是局域网连接，因为延迟超低，明显不可能是公网连接。但音频无论如何都不稳定，此外，目测 Magpie 不兼容 parsec，Magpie 一缩放，音频立马断断续续。，
    - 总之，是局域网，视频没问题，但音频问题很大，待研究
    - 艹了，音频断断续续还有一种可能，手机的音量开太小了！……然而并不是，我打字的期间又音频断断续续了一会
    - 破案了，就是单纯的带宽没跟上……虽然我也不懂为啥局域网能有带宽问题，目测是 parsec 自己的锅，不懂用了什么鬼协议
