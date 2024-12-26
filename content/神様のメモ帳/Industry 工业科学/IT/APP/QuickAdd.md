---
tags:
  - flag/Obsidian/快捷输入FastInput
  - Label/Industry-工业科学/IT/APP/Plugin/Obsidian/Plugin
---

- [ ] [QuickAdd Documentation](https://quickadd.obsidian.guide/docs/)

[chhoumann/quickadd: QuickAdd for Obsidian](https://github.com/chhoumann/quickadd)

- [ ] [Obsidian 批量命令快捷键实现](https://www.edony.ink/batch-command-shortcut-of-obsidian/)

[Obsidian最强插件：QuickAdd - 少数派](https://sspai.com/post/69375)

- [ ] [Obsidian callout 快捷方法](https://www.edony.ink/obsidian-callout-kuai-jie-fang-fa/)


- Usage
    - Obsidian Command

- Description
    - QuickAdd 是一个 [[Obsidian]] 插件
    - QuickAdd 的 Template 和 Capture 是核心插件 Templates 的加强版，总之就是更灵活、更动态
    - Template 主要用来创建笔记，纯纯的文件模板
    - Capture 相当于代码片段（Snippet），程序员秒懂
    - 如果只是这样，QuickAdd 还称不上神器，QuickAdd 最强大的是它的 Macro Choice，因为 Macro 能调用「Obsidian Command」「User Script」，这让 QuickAdd 用了无限可能
    - 再加上任何 Choice 都可以注册为一个 Obsidian Command，理论上你甚至可以用 Macro 来代替 Command Panel
    - 使用 `{{VDATE:<variable name>, <date format>}}` 需要安装 Natural Language Dates 插件
    - 缺点：Template 和 Capture 只能指定固定的文件，尽管 Template 可以利用格式化动态化文件名，但只影响一个文件，无法达到「搜索 - 批量处理文件」的效果。想要多个文件，必须手动指定多次

- Fundamentals
    - 定义 Choice、执行 Choice，就这么简单
    - Choice 本质是一种特定的自动化脚本
    - Choice 是一些常用操作抽象而成
    - 本质是自动化脚本，抽象后形成了一个小型 DSL，即 Choice

- Choice Types
    1. Capture (捕获)
        - 伪代码如下
        - input() 问答，可指定多次
        - format() 格式化字符串
        - open() 打开/新建文件
            - write_cursor() 插入到光标
            - append() 追加到文件末尾
            - insert_after() 插入到指定内容之后
            - 根据配置，执行其中一种操作
        - add_link()
        - open_tab()
    2. Template (模板)
        - 伪代码如下
        - input() 问答
        - format() 格式化字符串
        - open() 新建/打开文件
            - write() 覆盖写入
            - insert() 插入到开头
            - append() 追加到末尾
            - rename() 重命名文件
            - pass 什么也不做
            - 根据配置，执行其中一种操作
        - add_link() 添加新建文件的链接 to 当前光标处
        - open_tab() 打开新建的文件
    3. Macro (宏)
        - 按顺序执行操作，一共有 5 种操作
        1. Obsidian Command
            - 调用命令
        2. User Script
        3. Choice
        4. Editor commands
            - 模拟在 Editor 里的操作，复制、粘贴、选择之类的
        5. Time Delay
    4. Multi
        - 子菜单，用来给 Choice 分组

- QuickAdd Settings
    - QuickAdd Settings 可以直接添加、定义 Template choice
    - QuickAdd Settings 可以直接添加、定义 Capture choice
    - QuickAdd Settings 可以添加 Multi choice
    - QuickAdd Settings 可以添加 Macro choice
    - Manage Macros 负责定义 Macro Choice
    - 任何一个添加的 Choice 可注册为 Command，通过点亮闪电图标
