---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/Platform/Linux独占
  - flag/APP/DevOps/PackageManagement
  - flag/APP/Process/Implement__/Service/Manager
frontmatter-as-page:
  - brew
homepage: https://brew.sh
commands:
  - brew
x-cmd-install: brew
---

- Ecosystem
    - [Homebrew(brew) 目前可用的国内源介绍和选择](https://www.zzxworld.com/posts/available-cn-mirrors-for-homebrew)
    - [使用 Homebrew 维护自己的软件仓库(转载) - Baby King's Wiki](https://babyking.github.io/wiki/%E5%8D%9A%E5%AE%A2%E5%A4%87%E4%BB%BD/2019-11-18-shi-yong-homebrew-wei-hu-zi-ji-de-ruan-jian-cang-ku/)

- Philosophy
    - Homebrew 提供了“瓶子”（bottles），这是一种预编译的二进制格式。大多数软件包在安装时会优先使用这些瓶子，因为它们能够加快安装速度和简化安装过程
    - [Homebrew 的设计哲学 | 楚权的世界](http://chuquan.me/2023/08/27/understand-the-design-of-homebrew/)

- Dependencies
    1. [[curl]]
    2. [[git]]
    3. `sudo apt-get install build-essential`
        - 可以装完 [[homebrew]] 之后再安装
    3. `brew install gcc`
        - 装完 [[homebrew]] 之后再安装

- Installation
    1. `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
        - 网络不好可使用镜像
        - `export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"`
        - `export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"`
        - `export HOMEBREW_INSTALL_FROM_API=1`
    2. `(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.bashrc`
    - [homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

- Architecture
    - Pakcage
        - 对标 [[scoop]] 的 app
    - Cask
        - 对标 [[scoop]] 的 GUI app
    - Formula
        - Formula 是一个 Ruby 脚本
        - 对标 [[scoop]] 的 manifest 文件
    - Tap
        - 对标 [[scoop]] 的 bucket

- Pro
    - Support cross-distro
        - 官方 tap 的 formulae 全是从源码编译，编译工具链也是由的其他 formulae 提供
        - 因此 formulae 基本都是跨发行版的

- Con
    - NOT Support linking `xxx@version` during installation
    - NOT Support deps for builder
        - 官方 tap 的 formulae 全是从源码编译
        - 编译出来的可执行文件没有依赖，编译工具链在运行时完全多余，却占用空间

- Examples
    - `brew install <cli>`
    - `brew install --cask <gui>`
    - `brew search <word>`
    - `brew services <subcommand> [args]`
    - `brew bundle <subcommand> [args]`

- Data
    - `/home/linuxbrew/`
        - 类似 [[scoop]]，所有东西都在这里面，包括 [[homebrew]] 自己
