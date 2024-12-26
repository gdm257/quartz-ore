---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
github: schollz/croc
winget: schollz.croc
scoop: croc
brew: croc
choco: croc
nix-env: croc
pacman: croc
dnf: croc
---

```bash
croc command
Description:
    * croc 是在不同计算机传输文件的工具
    * croc 是通过互联网传输文件的
    * croc 中继服务器跟 Syncthing/Tor 一样是志愿者提供的
    * corc 能防中间人攻击，原理跟 sysnthing 一样，secret-code 就是证书
    * croc 简单易用、安全
    * croc 可理解为 one-off 版 syncthing
    * croc 可理解为零配置的 scp/rsync/rclone
    * croc 支持 跨平台，包括 Android

Installation:
    * scoop install -g croc
    * curl https://getcroc.schollz.com | bash

Usage:
    croc ["send"] <files>
        --code <custom_secret_code>
        * 发送方
        * 指定要发送的文件，并生成随机 secret-code，保持运行不要退出
        * 运行后会进入等待状态，接收端运行 croc 之前，需要一直保持等待
        * 发送文件是实时的，中继只负责传输，不能存储，所以需要保持运行
        * 虽然是点对点，流量还是要经过 relay，并非完全的 P2P
        * 所以我才说 croc 是极简一次性版 syncthing
    croc <secret-code>
        --out "./"
            * 将文件下载到文件夹
        * 接收方
        * 接收指定 secret-code 的文件
        * 全程加密，密钥就是 secret-code，所以请保护好

Examples:
    # 发送方
    $ croc send a.txt
    Sending 'a.txt' (116 B)
    Code is: slow-tomato-almond
    On the other computer run # 保持运行不要退出

    # 接收方
    $ croc slow-tomato-almond --out ./folder

```


### ~~chocolatey~~

```bash
choco search <keyword>    搜索软件
choco list <keyword>  跟 search 命令功能类似
choco install <package1 package2 package3...>  安装软件
choco install <package>  -version *** 安装指定版本
choco  uninstall name 卸载软件
choco version <package>  查看安装包的版本情况
choco  upgrade <package>   更新某个软件
choco list -lo      查看一下所有安装在本地的包的列表

包的类型

    （例：nodejs，git）
    .install （例：nodejs.install，git.install）
    .commandline（例：nodejs.commandline，未来会被抛弃）控制面板里找不到的
    .portable（例：putty.portable）

你也可以选择不带后缀的包，这样如果系统中已经安装了这个包，就会跳过去，如果没安装，Chocolatey 就会为你安装一个，默认安装的这个包的类型应该就是 .install 后缀的包。





// Install
Flux portable

Anki 2.0.52
Lilypond
Sandboxie
Gpg4win
TeXmacs
Raidrive

综上，chocolatey 对我来说没有任何价值，我不缺安装这几个软件的时间。





// 安装
自定义安装目录，注册表编辑器 ChocolateyInstall
可安装文件的安装路径，注册表编辑器 ChocolateyBinRoot
可安装文件的安装路径，注册表编辑器 ChocolateyToolsRoot
可安装文件的安装路径，注册表编辑器 ChocolateyToolsLocation
portable package 的默认解压路径会跟随 chocolatey 安装目录，即 $env:ChocolateyInstall\lib
主要是 HKEY_CURRENT_USER\Environment，猜测此为有效注册表



cmd 管理员：
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

或

powershell 管理员：
Get-ExecutionPolicy
Set-ExecutionPolicy AllSigned 或 Set-ExecutionPolicy Bypass -Scope Process
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


卸载 Chocolatey 只需要删除它安装的文件夹，并删除对应的环境变量即可。删除环境变量 ChocolateyLastPathUpdate 等。更新环境变量 PATH ，去掉 Chocolatey 相关的配置
```