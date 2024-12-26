---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Emacs
---

- References
    - [Spacemacs 14 Days](https://liuzhijun-source.github.io/spacemacs-14-days/#/)

- Dependences
    - [[Emacs]]
    - [[git]]
    - [[tar]]
    - Optional
        - Any Nerd-Font
        - [[rg]]
        - [[ag]]
        - [[ack]]
        - [[grep]]

- Installation
    - if `$HOME` set
        - `git clone https://github.com/syl20bnr/spacemacs $HOME/.emacs.d`
    - if `$HOME` not set (Windows by default)
        - `git clone https://github.com/syl20bnr/spacemacs $env:APPDATA/.emacs.d`
    - Test
        - Windows
            - `undo-tree` 编译失败，整个 spacemacs 感觉问题，没法正常用

- Configuration
    - if `$HOME` set
        - `$HOME/.spacemacs`
        - `$HOME/.spacemacs.env`
    - if `$HOME` not set (Windows by default)
        - `$env:APPDATA/.spacemacs`
        - `$env:APPDATA/.spacemacs.env`
