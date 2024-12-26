---
tags:
  - flag/License/AGPL
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Text
---

- References
    - [Zotero相关机制详解 - 知乎](https://zhuanlan.zhihu.com/p/137900314)

    - [【Zotero文档翻译】管理篇：分类与标签（上） - 知乎](https://zhuanlan.zhihu.com/p/162939630)

    - [Zotero plugins](https://www.zotero.org/support/plugins)

- Installation
    - `scoop install zotero`

- Configuration
    - `$env:APPDATA\Zotero`

- Data (aka Library)
    - `~/Zotero`

- Idea
    - [[条目体系]]

- Phiylosophy
    - [[中间层|中间层思想]]

- Fundamentals
    - 

- UI
    - 左侧栏
        - 分类面板
        - 标签选择器
    - 条目列表
    - 右侧栏
        - 条目面板 Item Panel
    - 菜单栏
    - Tab 栏

- Description
    - Zotero /zoʊ'tɛroʊ/ 是一个以 AGPL 协议开源的「条目」管理软件
    - Zotero 可用于 条目管理、文献管理、资料管理、引用管理
    - Zotero 可用于 笔记批注
    - Zotero 可用于 引用生成（citation/reference）

- Pro
    - 可能是唯一实现了 [[条目体系]] 的软件

- Con
    - Zotero 只能打开一个 Library。不像 [[Obsidian]]，可以打开多个 vault

- Test
    - 注释
        - > [!tldr] 简陋、不由雅、目前不推荐使用
        - Zotero 6 开始内置 [[PDF]] 高亮、注解功能。这些批注看上去会保存为「笔记」，但实际上是保存为「注释」
        - 「注释」是 Zotero 6 才有的底层数据格式，但它不是 Item，也无法引用、导出、回链，只能在 `PDF 阅读界面 - 左侧栏 - 注释` 中查看与编辑
        - 「注释」支持 高亮
        - 「注释」支持 评论（相当于注解）
        - 「注释」支持 添加标签。添加的 tag 能在「标签面板」中看到，但无法在「条目面板 - 标签」中看到
        - 虽然能在 `PDF 阅读界面 - 右侧栏 - 笔记 - 条目笔记右侧的加号按钮+` 用「注释」来创建一篇「笔记」，但这是一次性操作，每次都会生成一个新的「笔记」Item。而且之后再修改「注释」，「笔记」并不会更新
    - 笔记
        - 笔记（Note）是一种 Item 类型
        - 笔记 可以附属于一个 Item，就像附件那样，这样的笔记称为「条目笔记」
        - 笔记 虽然能引用 PDF 的内容，并跳转回内容所在位置，但是无法高亮被引用的内容，也就是说，笔记是单向的。这对阅读 PDF 来说并不友好，因为你不知道这句话是否有做过笔记，很容易造成重复做笔记
        - 笔记 编辑窗口没有行号，体验非常差
        - 推荐安装 [[Markdown Here]] 插件
        - 推荐安装 [[Better Notes]] 插件
        - 笔记回链 可通过导出笔记来获取 `笔记 Item - 右键 - 导出笔记 - Markdown + 勾选「包括Zoero链接」- OK`

- Objects
    - Item
        - Zotero 最核心、最重要、最基本的对象，一个 Item 可理解为一个条目、一个非 URL 的 URI、一个 [[XSPF]] 的 `location`
        - 没错！这正是我心心念念的 [[条目体系]]，items 本质上就是一个抽象的 [[中间层]]！由雅，太由雅了，Zotero！
    - Attachment
        - 附件。Item 对象的属性
        - Item 是番名，Attachments 是视频文件；
        - Item 是 ISBN，Attachments 是 [[PDF]]/[[Epub]]/txt；
        - Item 是抽象的，Attachment 是具体的；
        - Item 是稳定的，Attachment 是易变的；
        - Item 是对象，Attachment 是属性，用 [[OOP|OOP]] 的话来说；
        - > [!tip] 附件既可以存储在Zotero的数据文件夹中，也可以存放在其他文件夹。存储在Zotero的数据文件夹时，附件以文件的形式存在；放在其他文件夹时，Zotero虽然会显示附件，但该附件实际只是一个标明文件路径的链接
    - Note
        - 笔记。Item 对象的属性。本质上是个特殊的附件
        - Attachment 是 Item 的 content
        - Note 是 Item 的读后感、批注
    - Collection
        - 虚拟文件夹、多层级歌单，同 [[Obsidian]] 的多层级标签。
        - 我们依旧使用树形来组织管理 Items。
        - 与 FS 的一个文件只能放进一个文件夹不同，一个 Item 可以同时「属于」多个 Collection。
        - Collection 不属于 Item 的一部分
        - 注意，是 Collection 持有 Item（具体来说就是记录 Item 的 ID），因此单看 Item 对象的属性是不知道它属于哪些 Collection 的。
    - Tag
        - 标签
        - 或者说是 keyword、topic
        - Tag 是 Item 对象的属性，是嵌入在 Item 里的
        - Collection 不属于 Item 的一部分
        - 打个比方，Tag 是 FLAC 文件的内嵌元数据，而 Collection 是一个 m3u8 文件
        - Tag 是 Bangumi.tv 条目的 Tag，Collection 是 Bangumi.tv 的目录
        - 实际上在一个 Library 内，Tag 与 Collection 没有区别。只有当一个 Item 同时存在于不同 Library 或者被多个用户共同管理时，它们才能体现出不同
    - Library
        - 一个用户只有一个 Library，用于存放软件本体外的**所有数据**
        - Zotero 没有支持多库，不是技术上不允许，而是故意做的简化。估计是为了降低门槛，并且让用户把所有注意力都放在 Items 上

- Usage
> [!question]
> [[ChatGPT]]
> 
> Zotero和Obsidian是两种不同类型的应用程序，它们的主要功能和用途不同。
> 
> Zotero是一种引用管理软件，它可以帮助用户管理和组织引用和参考文献，并将它们导出到文本处理软件中。Zotero支持多种文献格式，包括图书、期刊文章、网页、视频等。使用Zotero，用户还可以轻松地创建书目列表、注释和引用规范。
> 
> 相比之下，Obsidian是一个文本编辑器，它通过笔记链接的方式使用户可以更加方便地组织和管理笔记。Obsidian支持Markdown语言，并提供了一些高级功能，如笔记链接图和全文搜索等。使用Obsidian，用户可以创建大量的笔记，并将它们连接在一起，形成一个知识网络。
> 
> 可以看出，Zotero和Obsidian两者主要目的和使用方式完全不同，前者是致力于管理文献和参考资料，后者则是致力于帮助用户在笔记和知识管理方面更加高效。同时，**二者完全可以配合使用，用户可在Zotero中管理参考资料，再将其引用到[[Obsidian]]中进行文字编写和笔记管理。**
