---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Kotlin
  - flag/LANGUAGE/Java
commands:
  - adb
scoop: adb
---

- References
    - [awesome-cheatsheets/tools/adb.txt at master · skywind3000/awesome-cheatsheets](https://github.com/skywind3000/awesome-cheatsheets/blob/master/tools/adb.txt)

- Installation
    * `scoop install adb`

- Description
    - adb 是 CS 架构，adb server 相当于 SSH server，adb client 相当于 SSH client
    - ADB Server 一定运行在 Android 端
    - ADB Client 可以是任意平台的 `adb` 命令，甚至可以在 Android 本机里运行，就好像在本机里可以使用 SSH client
    - Android 端可运行 `adb tcpip 5555` 来启动 server

```bash
adb command
Usage:
    adb <subcommand> [args]

Subcommands:
    # Server
    tcpip

    # Client
    connect
    devices
    shell
    install
        - 安装 apk

Examples:
    adb tcpip 5555 # 启用无线调试，监听 5555 端口

```
