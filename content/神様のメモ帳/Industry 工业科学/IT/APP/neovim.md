---
aliases:
  - nvim
  - Neovim
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/TUI
  - flag/APP/DevOps/IDE
scoop: neovim
vim-commands:
  - :lua
vars:
  - vim
---

- Alternatives
    - [[VSCode]]
        - [[VSCode]] 上层实现远胜 [[neovim]]/[[Emacs]]
            - API/SDK
            - Configuration
            - Keybindings
            - Event
            - Logs
        - [[VSCode]] 底层设计不如 [[neovim]]/[[Emacs]]
            - [[Emacs]] `advise` 直接 patch 已有插件

- Idea
    - [[Vim]] 的超集，解决了非常多历史包袱

- Configuration
    - `~/.config/nvim/`
    - `$Env:LOCALAPPDATA/nvim/`
        - `init.lua`
    - 请用 [[LazyVim]]，真正做到了「开箱即用」「最佳实践」「终极形态」「返璞归真」

- Data
    - `~/.config/nvim-data/`
    - `$Env:LOCALAPPDATA/nvim-data/`
        - compiled plugins
        - cache

- Ecosystem
    - [rockerBOO/awesome-neovim](https://github.com/rockerBOO/awesome-neovim)
    - [Dotfyle](https://dotfyle.com/)
    - [neovimcraft](https://neovimcraft.com/)
    - [NeoLand](https://neoland.dev/)
