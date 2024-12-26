---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Plugin/Vim
github: junegunn/vim-plug
vim-commands:
  - :PlugInstall
  - :PlugUpdate
  - :PlugDiff
  - :PlugClean
  - :PlugStatus
  - :PlugSnapshot
vim-options:
  - g:plug_threads
  - g:plug_timeout
  - g:plug_retries
  - g:plug_shallow
  - g:plug_window
  - g:plug_pwindow
  - g:plug_url_format
functions:
  - plug#begin()
  - plug#end()
---

- Installation
    - [[Windows]] 用户请把 [[vim-plug]] 安装在 `~/vimfiles/autoload/plug.vim`
    - [[help] Vim-plug canot be loaded · Issue #1192 · junegunn/vim-plug](https://github.com/junegunn/vim-plug/issues/1192)
