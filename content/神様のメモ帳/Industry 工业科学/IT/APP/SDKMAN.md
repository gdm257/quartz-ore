---
aliases:
- SDKMAN
- sdk
- sdk command
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/APP/Command/CLI
---

[Home - SDKMAN! the Software Development Kit Manager](https://sdkman.io/)

[sdkman/sdkman-cli: The SDKMAN! Command Line Interface](https://github.com/sdkman/sdkman-cli)

- Installation
    - Windows: `scoop install sdkman`
        - Windows 原生版本支持的子命令有限
    - \*nix
        - (Optional) `export SDKMAN_DIR="$HOME/.sdkman"`
        - `curl -s "https://get.sdkman.io" | bash`
        - `source "$HOME/.sdkman/bin/sdkman-init.sh"`
        - Uninstall: `rm -rf ~/.sdkman`

- Configuration
    - `.sdkmanrc`

- Data
    - `~/.sdkman`

- Usage
    - 

- Idea
    - SDK 多版本管理

- Fundamentals
    - 

- Philosophy
    - 

- Description
    - SDKMAN 是一个 SDK 多版本管理工具
    - SDKMAN 支持 JDK
    - SDKMAN 支持 很多奇奇怪怪的 [SDKs](https://sdkman.io/sdks)

```bash
sdk command
Usage:
    sdk <subcommand> [args]

Subcommands:
    help
    version
    update
    selfupdate
    config
    flush
    completion {bash|zsh|fish|powershell}

    list
    install
    unistall
    upgrade
    use
    current
    home
    default
    env

Examples:
    sdk install java

```
