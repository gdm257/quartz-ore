---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Emacs
files:
  - .doommodule
---

- References
    - [doomemacs/modules/README.org at master · doomemacs/doomemacs](https://github.com/doomemacs/doomemacs/blob/master/modules/README.org)
    - [Doom Emacs documentation](https://docs.doomemacs.org)
    - [Documentation - Doom Emacs v21.12 documentation](https://docs.doomemacs.org/latest/#/modules)
    - [Code search results](https://github.com/search?q=repo%3Adoomemacs%2Fdoomemacs%20.org&type=code)
    - [Code search results](https://github.com/search?q=repo%3Adoomemacs%2Fdoomemacs%20.md&type=code)

- API
    - [doomemacs/lisp/demos.org at master · doomemacs/doomemacs](https://github.com/doomemacs/doomemacs/blob/master/lisp/demos.org)

- Keymaps
    - Help System
        - Help for help
            - `C-h ?`
            - `RET`
            - `C-u C-^` -> same as [[Vim]] `C-o`
        - [[Lisp]] atom
            - `K` -> atom docs where the cursor hovers above
        - Commands
            - `C-h f` -> search describe function
        - Keymaps
            - `SPC` -> leader keymaps
                - `C-h` to fuzzy search keys
                    - `C-j` `C-k` to move up/down
                    - `C-n` `C-p` to move up/down
            - `SPC m` -> localleader keymaps

- Installation
    - `git clone --depth 1 https://github.com/hlissner/doom-emacs $HOME/.emacs.d`
    - `$HOME/.emacs.d/bin/doom install`
    - [getting started](https://github.com/doomemacs/doomemacs/blob/master/docs/getting_started.org)

- Architecture
    - Module
        - A module is a bundle of packages, configuration and commands
        - [Documentation - Doom Emacs v21.12 documentation](https://docs.doomemacs.org/latest/#/modules)

| File                                        | Interactive | Batch | CLI |
| ------------------------------------------- | ----------- | ----- | --- |
| ~/.emacs.d/early-init.el (Emacs 27+ only)   | yes         | no    | no  |
| ~/.emacs.d/init.el                          | yes         | no    | no  |
| $DOOMDIR/init.el                            | yes         | yes   | yes |
| {~/.emacs.d,$DOOMDIR}/modules/*/*/init.el   | yes         | yes   | yes |
| $DOOMDIR/cli.el                             | no          | no    | yes |
| {~/.emacs.d,$DOOMDIR}/modules/*/*/cli.el    | no          | no    | yes |
| {~/.emacs.d,$DOOMDIR}/modules/*/*/config.el | yes         | no    | no  |
| $DOOMDIR/config.el                          | yes         | no    | no  |

- Configuration
    - [Doom Emacs 的基本用法 | MinCodes](https://mincodes.com/posts/basic-usage-of-doom-emacs/)
    - [Doom Guide](https://www.codeplayer.org/Wiki/Emacs/doom-guide.html)
    - `$HOME/.doom.d` (`$DOOMDIR`)
        - `init.el`
            - 该 hook 很早就会被加载，一般用不上
            - Run `doom sync` whenever you modify your `doom!` block
            - [modules](https://github.com/doomemacs/doomemacs/blob/master/docs/modules.org)
        - `packages.el`
            - 所有额外第三方包都必须在此处安装
            - Run `doom sync` whenever you modify your `packages.el` file
        - `modules/<category-name>/<module-name>/`
            - Writing your own modules
            - enable it in `~/.doom.d/init.el`
            - `packages.el`
                - deps
            - `init.el`
                - This file is loaded early, before anything else
                - But after Doom core is loaded
            - `config.el`
                - [fonts](https://github.com/doomemacs/doomemacs/blob/master/docs/faq.org#change-my-fonts)
                - [themes](https://github.com/doomemacs/doomemacs/blob/master/docs/faq.org#change-customize-or-make-themes)
            - `autoload.el`
            - `autoload/*.el`
            - `cli.el`
                - integrate with `doom`
            - `doctor.el`
                - integrate with `doom doctor`
            - `test/**/test-*.el`
                - unit tests
        - `config.el`
            - 自定义配置入口，你可以当 `~/.emacs`（Emacs 原生入口）
            - [doomemacs/themes: A megapack of themes for GNU Emacs.](https://github.com/doomemacs/themes)

- Keybindings
    - `SPC`(space) -> Leader Key
    - [[Vim]]
        - [s/S key](https://github.com/doomemacs/doomemacs/blob/master/docs/faq.org#restore-the-s-and-s-keys-to-their-default-vim-behavior-1307)

- Dependencies
    - [[Emacs]]
    - [[git]]
    - [[rg]]
    - [[神様のメモ帳/Industry 工业科学/IT/APP/find|find]]
    - [[fd]] (Optional)
    - [[clang|llvm]] (Optional)

- Pro
    - 比 spacemacs 启动快很多
    - 比 spacemacs 稳定
    - 比 spacemacs 友好

- Con
    - 编译速度慢
        - 初次安装至少需要十几分钟来编译 packages
        - 包更新、配置更新也需要数分钟，而且需要手动运行 `doom sync`
        - 相比 [[neovim]] 的 [[LazyVim]] 的十几秒差远了
    - 启动速度慢
        - 跟 [[Vim]]/[[neovim]]/[[helix]]/[[Sublime Text]] 没法比
        - doom 包管理是增量加载，但还是慢
        - [用 doom-emacs 的增量加载来提高 emacs 流畅性 - Emacs-general - Emacs China](https://emacs-china.org/t/doom-emacs-emacs/21799)
    - 运行速度慢
        - [输入延迟比较大的解决方案 - Emacs-general - Emacs China](https://emacs-china.org/t/topic/27946)
    - 不够友好
        - doom 在 [[Emacs]] 生态算简单的了，但相比 [[LazyVim]] 复杂性高起码一个层次
        - doom 作者自己也说，doom 是为了「高效」定制，而不是 starter 那样帮你「省去」定制的工作。总之，不够开箱即用
        - [想从 neovim 转 emacs，有什么建议？ - Programming - Emacs China](https://emacs-china.org/t/neovim-emacs/28037?page=2)
    - LSP 集成度不够高
        - [[Doom Emacs]] 的 [[JavaScript]]/[[TypeScript]] 开箱体验不如 [[LazyVim]]，很多功能尤其是跳转功能都没有

- Fundamentals
    - `straight.el`
        - `~/.emacs.d/modules/*/*/packages.el`
            - Declare packages to install
        - `~/.emacs.d/.local/straight/`
            - Installed packages
