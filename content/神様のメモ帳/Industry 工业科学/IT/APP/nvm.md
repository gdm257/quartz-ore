---
tags:
- flag/LANGUAGE/JS
- flag/LANGUAGE/TypeScript
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
---

[coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.](https://github.com/coreybutler/nvm-windows)

- Test
    - Windows 推荐 [[nvm]]
    - Linux 推荐 [[nvs]]

```bash
nvm command
Examples:
    nvm list available
    nvm install lts    # 下载最新版 lts
    nvm install 17    # 下载最新版 18.x.x
    nvm install latest    # 下载最新版
    nvm uninstall <version>

    nvm list
    nvm current
    nvm use lts
    nvm use 16
    nvm use 17
    nvm use latest
    nvm use newest

    nvm off    #删除 node 文件夹软连接，此时 node 会 command not found
    nvm on    #创建 node 文件夹软连接
        echo "5.9" > .nvmrc
        echo "lts/*" > .nvmrc # to default to the latest LTS version
        echo "node" > .nvmrc # to default to the latest version

Installation:
    * Windows: scoop install -g nvm
    * Linux: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

Description:
    * nvm use 原理是添加一个**固定的**路径进 PATH，这个路径是个软连接，通过改变软连接的目标来切换版本.
    * nvm-windows 的原理跟 scoop 一模一样.
    * nvm 和 nvm-windows 是不同项目，因为 nvm 官方不支持 windows.




```
