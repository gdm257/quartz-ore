---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Text
frontmatter-as-page:
  - emacs-commands
  - emacs-modes
commands:
  - emacs
  - emacsclientw
scoop: emacs
emacs-commands:
  - emacs-version
emacs-modes:
  - emacs-lisp-mode
---

## Brief

- References
    - [Top (GNU Emacs Lisp Reference Manual)](https://www.gnu.org/software/emacs/manual/html_node/elisp/index.html)

- Ecosystem
    - [emacs-tw/awesome-emacs](https://github.com/emacs-tw/awesome-emacs)

- Users
    - [Emacs Survey 2020 Results](https://emacssurvey.org/2020/)
    - [使用 Emacs 两年多后的总结 | hsingko](https://hsingko.pages.dev/post/2023/07/29/emacs-usage-summary/)

- CLI
    - `emacs -nw`
        - 相比 [[Vim]] 差太远，更别说跟 [[neovim]] 比，可以埋了

- GUI
    - menu bar
        - 本质上是一个 frame
    - echo area
        - 本质上是一个 frame
    - minibuffer
        - 本质上是一个 frame

- Philosophy
    - Extensibility
        - 「Emacs 是个伪装成操作系统的编辑器」
    - GUI
        - GUI 是「Emacs 是个伪装成操作系统的编辑器」的基础前提
        - [[Vim]] 作为一个 TUI 软件，功能是有上限的。而 [[Emacs]] 是个 GUI 软件，配合无与伦比的扩展性，拥有无限可能
    - Modes
        - [[Vim]] 天生就有 Mode，源自 Modal Editing
        - [[Emacs]] 并没有采用模态编辑的设计，而是依靠大量 Modifier Keys，因此有一套自己的 Modes 机制
        - 由此还衍生出了 Mode-line（类似于底部状态栏，但针对 Mode）
        - Types
            - Major Mode
            - Minor Mode
        - Idea
            - Each buffer has *one* major mode
            - Each buffer has *many* minor modes
            - Major Mode 通常由文件类型决定
            - Minor Modes 主要用于修改 Major Mode 的行为，类似于 Mixins
            - 可以看出这套 Modes 机制可以模拟 [[Vim]] 的各种模式，所以才能诞生 Evil

- Objects
    - *[[Emacs]] 核心对象跟 [[Vim]] 几乎一模一样，一一对应*
    - *[[Emacs]] 独有概念最主要出自 ELisp*
    - point (i.e. cursor)
    - mark
        - previous point location
    - region
        - range between point and mark
    - buffer
    - window
    - frame(windows)
    - bookmark
    - undo history
    - register
    - keyboard macro
        - 对标 [[Vim]] 的 macro
    - abbrev
    - function
    - command
        - 本质上是一种特殊类型的 function
        - 对标 [[VSCode]] 的 command
    - key
    - keymap
    - event
    - package
    - session
    - [Emacs 自力求生指南 ── 基本概念 - Nayuki's Archive](https://nyk.ma/posts/emacs-terms/)
    - [Documentation - Doom Emacs v21.12 documentation](https://docs.doomemacs.org/latest/#/users/concepts)

- Fundamentals
    - Emacs 是用 [[C|C]] 和 [[ELisp|ELisp]] 写的
    - [Emacs 启动过程介绍](https://phenix3443.github.io/notebook/emacs/emacs-startup-process.html)

- Con
    - 代偿能力极差，不是开发者基本整不明白，也不值得
    - 必须先学 ELisp，否则根本用不明白
    - 必须先学很多快捷键，否则根本没法用
    - LSP 生态不如 [[Vim]]，很多只有 tags 没有 LSP
    - NOT Support remote development
        - 不要折腾，巨坑
        - [Emacs远程编辑得向jetbrain和vscode看齐 了呀 - Emacs-general - Emacs China](https://emacs-china.org/t/emacs-jetbrain-vscode/10523)

## Shortcuts

- References
    - [Emacs Cheat Sheet & Quick Reference](https://quickref.me/emacs)

- Philosophy
    - Modifier Keys
        - `SPC`: modern style``
        - `M-x`: command palette style
        - `C-x`: [[Emacs]] classic style
        - `C-c`: [[Emacs]] mode related
        - `C-h`: help
        - 原生 [[Emacs]] 大量使用 Modifier Keys（修饰键）
        - 原生 [[Emacs]] 采用单一模式设计
        - 如果不想双手离开主键盘区，也不想用 [[Vim]] 那种 Modal Editing（模态编辑）的多模式方案，那么大量使用 Modifier Keys 是唯一选择，这就是所谓的 Emacs 风格
        - [emacs和vim键位上，谁的效率高？ - 知乎](https://www.zhihu.com/question/443563447/answer/1724521240)
    - Modal Editing
        - [[Emacs]] 风格的键位是著名的小拇指杀手，人们不可避免地回归 Modal Editing 的道路。[[Vim]] 作为道上的绝对王者，被最先考虑引入，于是有了 Evil 插件，它使 [[Vim]] 用户可以无缝使用 [[Emacs]]
            - [emacs-evil/evil: The extensible vi layer for Emacs.](https://github.com/emacs-evil/evil)
        - meow 是又一个 Modal Eiditing 方案，得益于 Emacs 无与伦比的扩展性，Vim 并非唯一选择
            - [meow-edit/meow: Yet another modal editing on Emacs / 猫态编辑](https://github.com/meow-edit/meow)

- Fundamentals
    - [Emacs常见键绑定方式汇总 - 知乎](https://zhuanlan.zhihu.com/p/26068894)

- Test
    - 原生快捷键 效率不如 Capslock+
    - 快捷键 **需要**根据自身需求来**定制**，没有通用方案

- Shortcuts
    - Modifier Key
        - `<Ctronl>` `C-` Ctrl
        - `<Meta>` `M-` Alt
        - `<Alt>` `A-` 基本不用
        - `<Super>` `s-` -
        - `<Hyper>` `H-` -
    - eXtend
        - `C-x` 字符扩展。  C-x 之后输入另一个字符或者组合键。
        - `M-x` 命令名扩展。M-x 之后输入一个命令名。
        - Emacs 的命令就像天上的星星，数也数不清。把它们都对应到 CONTROL 和 META 组合键上显然是不可能的。Emacs 用扩展（eXtend）命令来解决这个问题，扩展 命令有两种风格
    - Mics
        - `RET` 回车

## Configuration

- Configuration
    - Windows
        - `$env:APPDATA/.emacs.d/`
        - `$env:APPDATA/.emacs`
    - \*nix
        - `~/.emacs`
        - `~/.emacs.d/`
        - `~/.config/emacs/init.el`

- Examples
    - [[Doom Emacs]]
    - [[Spacemacs]]
