---
tags:
- Label/Industry-工业科学/IT/License
---

[SPDX License List | Software Package Data Exchange (SPDX)](https://spdx.org/licenses/)

[正经人话版Apache许可证 - 掘金](https://juejin.cn/post/6915332980919517191)

[步进式解读Apache许可证](https://mp.weixin.qq.com/s?__biz=MzAxMDc4NDc5OA%3D%3D&idx=1&mid=2649431649&scene=21&sn=f5564806b413d66d60f1a87fd9c312e6#wechat_redirect)

[如何遵循Apache 2.0协议](https://blog.futrime.com/zh-cn/p/%E5%A6%82%E4%BD%95%E9%81%B5%E5%BE%AAapache-2.0%E5%8D%8F%E8%AE%AE/)

[ASF Source Header and Copyright Notice Policy](https://www.apache.org/legal/src-headers.html#notice)

[Assembling LICENSE and NOTICE files - Apache Infrastructure Website](https://infra.apache.org/licensing-howto.html#mod-notice)

[逐句深扒 Apache 许可协议原文，一文看懂！|alice|apache|license|源代码|许可人_网易订阅](https://www.163.com/dy/article/FCE1GN2K0511FQO9.html)

[观点|逐行解读 MIT 许可证](https://linux.cn/article-13180-1.html)

[从MIT协议谈契约精神 - 掘金](https://juejin.cn/post/6914457075275792397)

[开源许可证教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/10/open-source-license-tutorial.html)

[开源 LICENSE 选型](https://phodal.github.io/licenses/)

[开源协议是否可以商用（总结） - richpeak - 博客园](https://www.cnblogs.com/richpeak/p/14617315.html)

[各种License介绍](https://liferay.dev/ask/questions/general/-license--1)

[如何选择开源许可证？ - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

[常见软件开源协议详解 | Java 全栈知识体系](https://www.pdai.tech/md/dev-spec/opensource/dev-opensource.html)

[shaokeyibb/open-source-licenses-in-depth: 深入理解开源许可证（Open Source Licenses In Depth）试图用通俗的语言辅以专业化的表述，带领读者深入理解几个主流开源许可证之间的区别，并强调了 copyleft 协议与其他协议之间的兼容性。](https://github.com/shaokeyibb/open-source-licenses-in-depth)

[Sandboxie Plus 没有使用双授权，也没有说明其它开发者贡献版权归作者，只有纯 GPL 许可证，为什么可以销售商业版本？由其它开发者贡献的 commit 版权算谁的？ - V2EX](https://v2ex.com/t/874861)

[WTFPL - 维基百科，自由的百科全书](https://zh.wikipedia.org/zh-cn/WTFPL)

[如何理解Apache License, Version 2.0（整理） - 范仁义 - 博客园](https://www.cnblogs.com/Renyi-Fan/p/8148658.html)

[开源软件与开源协议的法律问题分析](https://www.qin.news/kai-yuan-xiang-guan-fa-lu-wen-ti/)


Q：我不该「使用」哪些第三方库？

- GPL 千万别用，除非你就是想以 GPL 协议开源你写的项目


Q：我不该「fork（派生）」哪些项目？

- GPL 具有传染性，除非你就是想以 GPL 协议开源你写的项目
- LGPL 具有传染性，除非你就是想以 LGPL 协议开源你写的项目
- MPL 具有传染性，除非你就是想以 MPL 协议开源你写的项目


Q：我的「个人项目」应该「采用」哪个开源许可协议？

- 想赚钱    **闭源收费**
- 一旦采用就不可能赚钱、保留署名是唯一限制    **Apache**


Q：介绍介绍开源许可协议？

- 想赚钱    闭源收费
- 想赚钱    多协议/多许可/多重授权（商用需要购买商用许可证 + GPL）
- 不想赚钱、但也不想拿去给别人赚钱    GPL
- 一旦采用就不可能赚钱、随便商业「使用」、但「衍生」要开源    LGPL
- 一旦采用就不可能赚钱、随便商业「使用」、但「衍生」要开源、放弃修改贡献的版权    MPL
- 一旦采用就不可能赚钱、保留署名和注明修改是仅有的限制    Apache
- 一旦采用就不可能赚钱、保留署名是唯一限制    BSD
- 一旦采用就不可能赚钱、保留署名是唯一限制    MIT



Q：具体操作？

* `MIT` 在 README.md 声明我们有用到哪个哪个 MIT 项目，附上 GitHub 即可。当然，更规范的做法是，把该项目的 LICENSE 文件下载下来，放进我们的项目的随便哪个文件夹，但实际上很少人会这么做，也没这个必要.

* 多看几个开源项目就会发现，大家遵守开源协议的最主要方式就是在「标明项目名、标明 GitHub URL、标明开源许可协议 URL」in README.md or 某个界面 or 文档，无论这个项目是 MIT/Apache/BSD……反正都当作 MIT 来处理了。

* `Apache 2.0` 是最繁琐、最复杂、最操蛋的开源许可协议。但是不用担心，大家都把它当 MIT 来用，完美遵守 Apache 2.0 协议的项目，我是一个也没见过，包括大公司的开源项目。其他撑死也就下载几个 NOTICE 文件，修改别人的源码时加一句注释，复制别人代码时标明出处。这些行为一般有职业操守的程序员都会做，要不着 Apache 协议来提醒，最重要的是，也不麻烦.

* `Apache 2.0` 你 fork 一个 Apache 2.0 协议的项目后，「您必须在任何修改过的文件中，带有明显的声明，表明您已更改文件」，一般是通过注释的方式；当然，如果你是打算 PR 回原项目，那么可以不声明，直接改代码然后 PR 就行，大部分人都是这么做的，不然的话源码里就满是贡献者声明了。官方承认的的简化版声明如下 `Modifications Copyright [时间] [你的名字]`
* `Apache 2.0` 你 fork 一个 Apache 2.0 协议的项目后，如果这个新项目你打算也采用 Apache 2.0 协议，那么在项目根目录放一个名为 LICENSE 的文件，内容上完整的 Apache 2.0 协议。如果你打算采用其他协议，那么原则上你需要附带一份许可文件，一般的做法是，在 README.md 的 Licenses 一节，注明原项目的出处（GitHub 地址）和许可文件链接 `http://www.apache.org/licenses/LICENSE-2.0`.


* `Apache 2.0` 你的项目采用该协议，需要在项目根目录放置个名为 LICENSE 的 Apache 2.0 协议许可文件.
* `Apache 2.0` 你的项目采用该协议，需要想办法附上你所使用的其他 Apache 2.0 项目的 NOTICE 文件，最简单粗暴的办法就是创建个 notices 文件夹，然后将用到的 Apache 2.0 项目的 NOTICE 文件下载到 notices 文件夹，重命名文件加上项目名后缀，例如 `NOTICE_tachiyomi`。这就算是搞定 NOTICE 了。比手写 NOTICE 文件简单多了.
* `Apache 2.0` 如果你想将 Apache 2.0 协议用于特定文件，那么加上声明即可，官方承认的简化声明如下：
```
Copyright [yyyy] [name of copyright owner]
SPDX-License-Identifier: Apache-2.0
```

* `Apache 2.0` 你的项目没有采用 Apache 2.0，而是采用了其他协议。此时如果你在项目中「使用」了某个 Apache 2.0 项目，你需要在 README.md 的 Licenses 一节声明使用的项目出处、许可文件链接 `http://www.apache.org/licenses/LICENSE-2.0`，这样就算附带一份许可文件了。
* `Apache 2.0` 你的项目没有采用 Apache 2.0，而是采用了其他协议。此时如果你在项目中「使用」了某个 Apache 2.0 项目，我不确定是否需要 NOTICE 文件，毕竟你的项目并不是采用 Apache 2.0，而且我也没见过有项目这么做的……读了下原文是说「NOTICE 文件的归属声明の可读拷贝」应该放在你的项目里几个地方之一：NOTICE 文件、源码或文档、应用的某个界面……我去查证了几个项目，`arrow` 库采用 Apache 2.0，但很多依赖于 arrow 的高 star 项目都没有 NOTICE……也就是说，NOTICE 的事情基本上就只存在于纸面，大家都还是把 Apache 当成 MIT 来致谢的，少了 NOTICE 实际上也没什么人在意，无论是作者还是使用者，毕竟程序员都懒，当成 MIT 来用就完事了.
……想通了，原文还有一句「与衍生作品无关的声明除外」而你的项目只是在「使用」第三方库，那么第三方库的 NOTICE 声明理应是与你的项目无关的，既然是无关声明，那么 NOTICE 自然不需要管.


* `Apache 2.0` 你的项目从某个 Apache 2.0 项目里复制了一段代码。老规矩，README.md 的 Licenses 安排上 GitHub 地址和 `http://www.apache.org/licenses/LICENSE-2.0`.
* `Apache 2.0` 你的项目从某个 Apache 2.0 项目里复制了一段代码。项目根目录创建个 NOTICE 文件，致谢该项目、复制该项目的 NOTICE 的归属声明……理论上是这样，但实际上可能 Apache 2.0 项目本身都没有 NOTICE 文件，而且概率非常高，甚至连 Licenses 小节你都找不到，所以你也就没必要搞 NOTICE 文件了。致谢的话，还是那句话，当 MIT 项目就行，README.md 加上代码注释声明出处，已经够意思了，原作者不会找你麻烦的……虽然理论上做的并不完全符合 Apache 2.0 协议.
* `Apache 2.0` 你的项目从某个 Apache 2.0 项目里复制了一段代码。那么你需要给这段代码加一段注释声明出处和原作者，反正意思到了就行

```
fork from https://github.com/xxx/xxx

```




> 除了 Affero GPL (AGPL) ，其他许可证都规定只有在"分发"时，才需要遵守许可证。换言之，如果不"分发"，就不需要遵守。
> 
> 简单说，分发就是指将版权作品从一个人转移到另一个人。这意味着，如果你是自己使用，不提供给他人，就没有分发。另外，这里的"人"也指"法人"，因此如果使用方是公司，且只在公司内部使用，也不需要遵守许可证。
> 
> 但是实际上，不遵守 GPL，最坏情况就是被起诉。如果你向法院表示无法履行 GPL 的条件，法官只会判决你停止使用 GPL 代码（法律上叫做"停止侵害"），而不会强制要求你将源码开源，因为《版权法》里面的"违约救济"没有提到违约者必须开源，只提到可以停止侵害和赔偿损失。
> 
> XXX is licensed under XXX.



为什么有这么多协议？
喵：核心在于不同协议对「使用」「引用」「衍生」「贡献」有着不同级别的限制（传染性开源、商业许可、个人、非商用、注明修改、保留署名、贡献代码版权归创始人所有），于是各种排列组合。
所谓「使用」，简单说就是 `import httpx`，然后正常写代码。
所谓「引用」，简单说就是你从 `httpx` 里复制了一段代码到你的项目里。
所谓「衍生」，fork 肯定是衍生，那「使用」算不算「衍生」？
所谓「贡献」，简单说就是指向 `httpx` 提交的 PR。


Apache 咋这么多事？
喵：实际上能遵守协议全部要求的 Apache 2.0 开源项目非常少，绝对不超过一半，非常多人都当 MIT 使。


GPL 的传染性太变态了，一个项目只要「使用了」GPL 协议的库，那么该项目必须以 GPL 协议开源。
喵：除非有特殊需求，否则我是不会主动采用的，GPL 的库我更是不敢用。


GPL 可以商用。
喵：是的，可以收费，这就是所谓的「开源收费软件」。但跟用爱发电没区别，完全不赚钱，实际上 GPL 完全没有商业价值（除非你像 PyQt 采用了双许可）。GPL 允许你分发软件时对用户收费。但是！你必须同时将源码也分发给用户。并且，用户有权利进行再分发，可以是收费分发，也可以免费分发，只要保持 GPL 的传染性。是的，GPL 协议强制保护了分发权。这意味着，实际上你只能赚到第一份的钱，别人完全可以低价分发，或者直接免费分发，这样就没有人来买你的了，除非你维护升级到下一个版本，可以再卖一次，但同样只能赚第一份的钱。


PyQt 收费怎么说？
喵：PyQt 的「商用必须交钱」并不是因为 GPL，而是因为 PyQt 采用了双许可证（双协议），一个是 GPL，一个是商业许可证。「开源项目可以免费使用 PyQt 但必须以 GPL 协议开源」是 GPL 的要求；「非 GPL 开源项目、商用闭源项目使用 PyQt 必须交钱」则是商业许可证的要求。是的，双协议，GPL 并没有阻止多许可证共存，反而是鼓励的。MySQL 也是个很好的例子，MySQL 也是双协议，所以才能收费赚钱。GPL 能收费但不可能赚钱，能赚钱完全是因为商业许可证。双协议下，GPL 的作用是保持开源，给社区一点信心，赚取信用，这样人家才敢买你的商业许可。


LGPL 允许商业软件通过类库引用 (link) 方式「使用」LGPL 类库而不需要开源商业软件的代码。
喵：link……是指动态链接库？那 JS/Python 那种怎么办呢？还是说 link 只是单纯的「使用」？
查了下，类库指的是，由 Source Code（源码）编译或解释或打包而来的 Object Code，例如 Java 的 jar、Python 的 eggs/wheel、C/C++ 的 so/dll、Rust 的 Crate……这些都可以直接在商用闭源项目中「使用」，保留署名就行。
虽然 LGPL 不限制「类库」的「使用」，但限制了「Source Code（源码）」的使用。闭源项目一定不能「包含」LGPL 代码的「源码」（但是可以包含编译出的链接库）。


Go 没「包含」源码，但没「使用」「类库」，而是直接「使用」「源码」，算不算违反 LGPL 协议？
Go 写的库不需要打包，貌似也没有打包这个功能，也就是说，Go 没法把源码编译为类库，Go 是「直接使用源码」。更纠结的是，Go 源码虽然没有「包含」源码，但是编译出的「二进制可执行文件」应该是「包含」了「源码」的，毕竟没有类库。那么这算不算违反 LGPL 协议？……感觉好像发现了灰色地带？如果 Go 底层是有类库的但对用户不可见，那么这个问题当我没说。但如果 Go 底层并没有将 lib 编译为链接库（类库），那好像真的就是灰色地带了。


修改 LGPL 协议的代码或者衍生，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都必须采用 LGPL 协议。
喵：库封装必须传染为 LGPL，我完全能接受，毕竟 LGPL 还是可以商用的。





