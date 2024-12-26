---
tags:
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/APP/Text/Implement__/Docs
---

[Zeal - Offline Documentation Browser](https://zealdocs.org/)

[zealdocs/zeal: Offline documentation browser inspired by Dash](https://github.com/zealdocs/zeal/)


- Installation
    - `scoop install zeal`

- Description
    - Zeal 是为开发者准备的 [[docset]] 离线文档阅读器
    - Zeal 在 [GitHub](https://github.com/zealdocs/zeal/) 开源
    - Zeal 目前（2023.03）自带 209 个 docsets，覆盖多个编程语言、软件、DSL
    - Zeal 支持浏览其他渠道的 docset，只需要将文档解压放入 Zeal 的 docsets 文件夹，重启软件即可
    - Zeal 极度简洁，除了 Search Filter 和几个快捷键，没有任何高级功能，UI 里看到的就是全部
    - Zeal 支持 全文搜索，用于在所有 docsets 进行搜索
    - Zeal 支持 支持 只搜索指定 docsets（Search Filters），语法为 `<docset_name>[, ...]: keyword...`
    - E.g.
    - `python: TextIO`
    - `python, flask, django: socket`
    - `Ctrl + F` or `/` 搜索🔍
    - `Ctrl + T` New Tab
    - `Ctrl + W` Close Tab
    - `Alt + 1-8` Select Tab
    - `Ctrl + 滚轮` or `Ctrl + =/+` 缩放
    - Zeal 在主流的 IDE 都有对应插件，如 vscode-dash
