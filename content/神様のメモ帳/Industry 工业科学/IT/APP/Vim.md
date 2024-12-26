---
tags:
  - flag/License/VIM
  - Label/Industry-工业科学/IT/APP/Command/TUI
  - flag/APP/DevOps/IDE
frontmatter-as-page:
  - vim-autocmds
  - vim-commands
  - vim-motions
  - vim-operators
  - vim-options
commands:
  - vim
scoop: vim
vim-commands:
  - :w[rite]
  - :w[rite][!]
  - :wa[ll]
  - :wa[ll][!]
  - :q[uit]
  - :q[uit][!]
  - :qa[ll]
  - :qa[ll][!]
  - :wqa[ll]
  - :wqa[ll][!]
  - :x[it]
  - :x[it][!]
  - :xa[ll]
  - :xa[ll][!]
  - :e[dit]
  - :e[dit][!]
  - :cd
  - :cd[!]
  - :pwd
  - :set
  - :Explore
  - :h[elp]
  - :buffers
  - :ls
  - :files
  - :f[ile]
  - :b[uffer]
  - :command
  - :Ntree
  - :jumps
  - :exu[sage]
  - :viu[sage]
vars:
  - v:argv
vim-autocmds:
  - VimEnter
  - VimLeavePre
  - VimLeave
vim-operators:
  - vV
  - yY
  - dD
  - cC
  - xX
  - sS
  - rR
  - pP
  - g~
  - guU
  - g?
  - gq
  - gw
  - ga
  - J
  - =
  - "><"
  - zf
  - ":"
  - "!"
vim-motions:
  - :{num}
  - ggG
  - hjkl
  - HML
  - 0$^g_
  - bBwW
  - eEgeE
  - (){}[]
  - "%"
  - tT{char}
  - fF{char}
  - /?{pattern}
  - "'{mark}"
  - "''"
  - "``"
  - iwW
  - awW
  - ip}
  - ap}
  - i(
  - a(
  - i{
  - a{
  - i[
  - a[
  - i<
  - a<
  - i"
  - a"
  - i'
  - a'
  - it
  - at
  - ghjkl
  - g0$
  - g%
  - "{num}hjkl"
vim-options:
  - "'jumpoptions'"
  - "'jop'"
vim+feature-list:
  - +acl
  - +ARP
  - +arabic
  - +autochdir
  - +autocmd
---

## Brief

- References
    - [ ] [VIM 9.0 中文帮助](https://yianwillis.github.io/vimcdoc/doc/help.html)
    - `vimtutor`

    - [vim-galore-zh-cn: All things Vim!](https://gitlab.com/wsdjeg/vim-galore-zh_cn)
    - [mhinz/vim-galore: All things Vim!](https://github.com/mhinz/vim-galore)

    - [ ] [Eric Wong / Learn Vim Zh Cn · GitLab](https://gitlab.com/wsdjeg/Learn-Vim_zh_cn)
    - [ ] [iggredible/Learn-Vim](https://github.com/iggredible/Learn-Vim)
    - [ ] [wsdjeg/vim-galore-zh_cn: Vim 从入门到精通](https://github.com/wsdjeg/vim-galore-zh_cn)

- Version
    - 请用 [[neovim]]

- Idea
    - Highly Configurable Modal Text Editor

- Objects
    - *APP 的运行本质上是对象之间的交互*
    - cusor
    - mode
    - buffer
    - window
    - tab
    - event
    - autocmd
    - mark
    - tag
    - register
    - undo tree
    - macro
    - function
    - command
    - operator
    - motion
    - count
    - range
    - mapping
        - global-scoped
        - buffer-scoped
    - plugin
    - option
        - global-scoped
        - buffer-scoped
    - view
    - session
    - viminfo

- Pro
    - 开箱即用（包括原生 Vim，事实上我就是这么用的，而且我连 `vimrc` 都没有照样用的很爽），不像 [[Emacs]] 需要定制
    - `operator` `motion` 自由组合，真的爽爆了

- Con
    - [[VSCode]] [[JetBrains IDEA|IDEA]] [[Emacs]] 是比 比 [[neovim]] 更好的 "[[Vim]] 发行版"
    - [[Vim]] 专注于「文本编辑」，即便安装了无数插件，终究还是个纯粹的「Text Editor」，除此以外的事**都不擅长、也不推荐**，而 [[Emacs]] 基本都能做
    - 上限远不如 [[Emacs]]，不光是 TUI 的问题，扩展性差太多

- Test
    - Cusor shape not reset after exiting [[Vim]]/[[neovim]]
        - [Cursor doesn't change back to what's specified in the settings.json · Issue #9081 · microsoft/terminal](https://github.com/microsoft/terminal/issues/9081)

## References

- Help System
    - `:h[elp] {subject}` -> help for specified subject
    - `:h help` -> help for help
    - `:exu[sage]` -> help list for `:xxx`
    - `:viu[sage]` -> help list for *keymaps*
    - `:h options`
    - `:h :autocmd`
    - `:h builtin.txt` -> builtin *functions* & builtin *feature-list*
    - `:h vim-variable` `:h v:var` `:h v:` -> `v:xxx` variables
    - `:h g:` `:h g:var` `:h global-variable`
    - `:h l:` `:h l:var` `:h local-variable`

## Philosophy

- References
    - [如何评价文本编辑器Helix Editor? - 知乎](https://www.zhihu.com/question/462847687/answer/2324540123)

- Philosophy
    1. Modal Editing
        - [[Vim]] 是如何实现模态编辑的？
            - `Mode + Command(s)`
            - 这是 Vim 的核心思想，也是模态编辑的具体实现
            - 但这不是 Modal Editng 的唯一实现方式
        - Mode
            1. Normal Mode
                - 其他模式可看作 Normal Mode 的 sub-mode
            2. Visual Mode (Select Mode, Extend Mode)
                - Character Visual Mode
                - Line Visual Mode
                - Block Visual Mode
            3. Insert Mode
            4. Replace Mode
            5. Command-Line Mode
            - P.S. Match 不是 Mode，是 motion
    2. Usage Stlye
        1. `operator + motion`
            - `Operator` as verb; `Count` as adj; `Motion` as object
        2. `motion + operation`
            - 一般用于 Visual Mode
        3. 最少按键/快捷键/宏/黑盒子风格
            - 正如每个 IDE 都有一大堆根本记不住的快捷键
            - 没有规律，没有章法，没有配合，单纯是为了减少按键，比较丑陋，不值得大量记忆（本质上是反人性的），只适合高频且简单的操作
            - E.g.
            - `dd` `yy` `gg`
            - `x` `X` `D` `C`


## Shortcuts

- References
    - [Vim Cheat Sheet & Quick Reference](https://quickref.me/vim)
    - [awesome-cheatsheets 备用](https://github.com/skywind3000/awesome-cheatsheets/blob/master/editors/vim.txt)
    - [Roadmap | NeoVintageous Docs](https://neovintageous.github.io/roadmap)
    - [解决 vim 粘贴代码时缩进混乱 - VVavE](https://www.vvave.net/archives/fix-vim-editor-toggle-auto-indenting-for-code-paste.html)

- Shortcuts
    - ![Vim Cheat Sheet for Programmers](http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png)
    - ![Vim Cheat Sheet](https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png)
    - ![Vim Visual Cheat Sheet](https://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png)
    
    - Mode
        - Nomal Mode
            - `ESC` `CTRL-[` `CTRL-C`
        - Insert Mode
            - `i` `o` `a` `s`
            - `I` `O` `A` `S`
            - `gi`
            - `ESC` `CTRL-[`
        - Visual Mode
            - `v` `V` `CTRL-V`
        - Command-Line Mode
            - `:` 对标 [[Emacs]] 自带的 `M-x`
        - Replace Mode
            - `R`
        - Leader Key
            - `\`
            - 一般 remap 为 `<Space>` or `,`
            - 对标 [[VSCode]] 自带的 `Ctrl + K`
            - 对标 [[Emacs]] 社区的 `SPC`
            - 对标 [[Emacs]] 自带的 `C-x`
    
    - Operator Command
        - `d` (delete)
        - `c` (change)
        - `y` (yank)
        - `>` (indent right)
        - `<` (indent left)
        - `gU` (uppercase)
        - `gu` (lowercase)
        - `g~` (case conversion)
        - = (format)
        - `!` (filter)
    
    - Motion Command
        - `h` `j` `k` `l`
        - `w` `e` `b` `ge`
        - `W` `E` `B` `gE`
        - `f` `t` `;` `,`
        - `F` `T` `;` `,`
        - `/` `?` `n` `N`
        - `^`
        - `0` `$`
        - `H` `M` `L`
        - `CTRL-B` `CTRL-F`
        - `CTRL-U` `CTRL-D`
        - `CTRL-Y` `CTRL-E`
        - `iw` `iW` `is` `ip` `it` `ib` `iB` `i{` `i<` `i[` `i(` `i"` `i'` i\`
        - `aw` `aW` `as` `ap` `at` `ab` `aB` `a{` `a<` `a[` `a(` `a"` `a'` a\`
        - `%` (support `{}` `()` `[]`)
        - \`mark `'mark`
        - `{` `}`
        - `[m` `]m`
        - `[M` `]M`
        - `gg` `G` `numbergg` `numberG` `:number`
    
    - Command-line
        - `:!external_command args`
        - `:[range]s/pattern/repl/flags`
        - `:[range]command [options]`
        - `:write` `:w` `:wall` `:wa`
        - `:quit` `:q` `:qall` `:qa`
        - `:x`
        - `:edit` `:e` `:e {file}` (new file)
        - `:sp {file}` `:vsp {file}`
        - `:version`
        - `:messages`
        - `:echo`
            - `:echo $VIM`
            - `:echo $HOME`

## Configuration

- References
    - [VIM 文件编码识别与乱码处理](https://edyfox.codecarver.org/html/vim_fileencodings_detection.html)

- GUI
    - [Vim 配置光标形状和颜色（Windows Terminal、xterm） | StarryLand](https://rollingstarky.github.io/2021/06/08/change-vim-cursor-shape-and-color-in-xterm-or-windows-terminal/)

- CLI
    - `:version` 查看当前配置文件路径

- Configuration
    - [[Windows]]
        - `~/vimfiles/`
            - `autoload/*.vim`
        - vimrc
            1. defaults 文件: `$VIMRUNTIME/defaults.vim`
                - This is loaded if no vimrc file was found
                - 这个配置对于 Windows 用户挺有用的，例如 Backspace 能够正常删除字符
            2. 系统 vimrc 文件: `$VIM/vimrc`
            3. 用户 vimrc 文件: `$HOME/_vimrc`
            4. 第二用户 vimrc 文件: `$HOME/vimfiles/vimrc`
            5. 第三用户 vimrc 文件: `$VIM/_vimrc`
            6. 用户 exrc 文件: `$HOME/_exrc`
            7. 第二用户 exrc 文件: `$VIM/_exrc`
    - Unix
        - `~/.vim/`
            - `autoload/*.vim`
        - vimrc
            - `_vimrc` 换为 `.vimrc`
            - `vimrc` 太长，说明你该换工具了，这点跟 [[Emacs]] 正好相反
            - 系统级与用户级 rc 可以同时生效，用户级覆盖系统级
            - 用户级 rc 只会加载一个，而不会加载多个用户级然后覆盖，3-7 按顺序找到一个即停止
            - Ex 是 [[Vim]] 的前身，太过古老，不建议使用
