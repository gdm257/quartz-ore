---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/Platform/Windows独占
  - flag/License/MIT
  - flag/APP/DevOps/PackageManagement
frontmatter-as-page:
  - scoop
github-topics:
  - scoop-bucket
buckets:
  - main
  - extras
  - versions
  - nirsoft
  - sysinternals
  - php
  - nerd-fonts
  - nonportable
  - java
  - games
spdx-licenses:
  - Unknown
  - Freeware
  - Public Domain
  - Shareware
  - Proprietary
vars:
  - $dir
  - $version
  - $cmd
  - $app
  - $persist_dir
  - $fname
  - $architecture
  - $baseurl
  - $global
  - $bucketsdir
powershell-magic-helper:
  - appdir
commands:
  - scoop
---

### Brief

- Installation
    - `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
    - `irm get.scoop.sh | iex`

- Environments
    - `SCOOP`
        - 用户级 scoop 目录
        - default to `$env:USERPROFILE\scoop`
    - `SCOOP_GLOBAL`
        - 全局 scoop 目录
        - default to `$env:ProgramData\scoop`

- Test
    - 重装系统/移动SCOOP目录
        - scoop 本质是个便携软件，无需卸载重装
        - 只需要设置好 `apps/scoop/**` `buckets/**` 正确的权限即可
    - 修改 `SCOOP_REPO` 不小心把 scoop 搞的不能 update 了
        - 本质是因为第三方魔改 scoop 的分支名与原版 scoop 的分支名不一致，因此要手动指定分支名，一般是如下二选一
        - `scoop config SCOOP_BRANCH master`
        - `scoop config SCOOP_BRANCH main`
    - 不推荐第三方 scoop
        - E.g. `https://github.com/Ash258/Scoop-Core`

- Description
    * scoop 是一个软件包管理器
    * scoop 支持 安装便携软件、非便携软件、字体 etc
    * 贡献 软件包请去 GitHub 对应的 bucket
    * Main bucket 只接受稳定的、有名的、便携的、non-GUIの开发工具
    * Extras bucket 接收不符合 Main 要求的 App
    * dorado bucket 如果 Extras 没有 pull 可考虑
    * PR 标题 of new manifest:
        - `<app name>: Add version <version>`
    * PR 标题 of updating manifest: 
        - `<app name>@<version>: <small description>`
    * PR 标题 of maintance something:
        - `(chore): <small description>`

## Test

### `CreateShortcut`

- `uninstall` 打印的 shortcut 字符串正确
    - `ConvertFrom-Json` 生成的 Object 的 property 的 value（string 类型）

- `install` 出现 `?` 乱码
    - `[System.IO.FileInfo]` 没问题
    - 锁定了，复现方法：
    - `(New-Object -ComObject WScript.Shell).CreateShortcut("$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Scoop Apps\有CJK字符.lnk").Save()`
    - `नमस्ते`
    - `🎨`
    - `↑`
    - non-ASCII

刚说完微软不靠谱，就发现一个 COM API 的编码 Bug

0. 起因是 scoop install 115 在创建快捷方式 "115网盘.lnk" 时报错
1. 命令行打印 115??.lnk 而不是正确的 115网盘.lnk ，很明显这是编码问题
2. 掏出 VSCode 阅读 scoop 源码（吐槽下 PowerShell function 的形参设计太弱鸡了），经过层层排查，定位了具体代码，总结下就是

```powershell
> $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
> $PSDefaultParameterValues['*:Encoding'] = 'utf8'
> 
> $non-system-default-str = [System.String] "系统语言之外的字符"
> $wsShell = New-Object -ComObject WScript.Shell
> $wsShell = $wsShell.Create("$non-system-default-str")
> $wsShell.Save()
OperationStopped: Unable to save shortcut "...??..."
```

万恶之源 ANSI 编码！

可以看到，即便我手动指定了 UTF-8 编码、PowerShell 字符串也是 UTF-8 编码， Windows 底层的 COM API 依旧用的是 ANSI……

明确了问题 CreateShortcut ，从上千个 issue 找到最相关的几个就容易多了

github.com/ScoopInstaller/Scoop/issues/2585
Cannot create non-system-default encoded shortcut

github.com/ScoopInstaller/Scoop/pull/2577
set WebClient encoding to UTF-8 explicitly

解决方法……没有。2018 年的 issue 直到现在还处于 Open 状态，只能另寻他法

stackoverflow.com/questions/4897655/create-a-shortcut-on-desktop/14632782#14632782

learn.microsoft.com/en-us/troubleshoot/windows-client/admin-development/create-desktop-shortcut-with-wsh
Windows API 七零八落的，C#都不一定能解决该问题，连微软自己的文档也是 CreateShortcut

更恐怖的是， winget 用起来是没问题的，但我懒得看源码了，折磨

### CLI

[Scoop](https://scoop.sh/)

[ScoopInstaller/Scoop: A command-line installer for Windows.](https://github.com/ScoopInstaller/Scoop)


```bash
scoop command

Usage:
    scoop <subcommand> [args]

Subcommands:
    help <subcommand>
    install <[bucket/]app[@version]>...
        -g    全局安装
        -s    不检查哈希值
        * 安装指定版本软件.
        * 不指定默认安装最新版.
    uninstall <app>...
    hold <app>
    update <app>
        * 更新已安装软件至最新版本.
    info <app>
    cat <app>
    search <str>
    reset <app>
    list
    status
    config
    bucket
        add <name> [repo_url]
        list
        rm []
        known
    which <command>

# 管理
scoop status
scoop list
scoop config
scoop cleanup *
scoop cleanup python37
scoop cache rm *
scoop reset * 重置应用以解决冲突,会重置环境变量,shims等
scoop reset python27
scoop reset python37
scoop hold python37 锁定应用，禁止更新
scoop checkup 检查潜在的问题
scoop which python2
scoop search python
scoop info python
scoop install -gs mysql@8.0.21 指定版本，最好加 -s 跳过哈希检查，容易报错
scoop uninstall scoop 卸载
scoop update *
scoop update python
scoop update python -g 全局安装
scoop bucket list
scoop bucket known
scoop config rm proxy
scoop bucket add [软件源名字(随意)] [源地址]

永久代理（临时代理使用环境变量 excc）
scoop config proxy 127.0.0.1:7890 && \

一些命令说参数太长，进 poershell 执行

scoop install frp 配置环境变量实际是在 $scoop/shims 文件夹生成了 xxx.exe xxx.ps1 文件，xxx.exe 会读取 xxx.ps1 配置。所有 xxx.exe 是一样的（MD5 都相同），但它们的 ps1 配置文件不同，也就对应不同软件、可执行程序。使用 shims 显而易见的好处就是不用污染 path，后续 scoop 安装卸载软件都不影响 path。




// 重装系统

官方回答:

You need to add system environment paths as you have right now manually, because installier will fail with `Scoop is already installed`

1. You need to Copy scoop''s folder when you want it to have.
2. Add location from first step as `$env:SCOOP`
3. Append `$env:SCOOP\shims` to path
4. run `scoop reset *`

重装系统之后, 如果把原有的scoop文件夹粘贴回去user文件夹,然后在powershell中再次输入Windows下的软件管理神器:scoop文章中的安装命令,会得到一个Scoop is already installed错误,要想正确恢复scoop,根据官方回答,请按照以下步骤:

1. 重装系统之前,先完整复制用户目录下的scoop文件夹到别的地方
2. 重装系统之后,将scoop文件夹粘贴回去用户目录
3. 在环境变量设置中,新建一个用户变量,名字为SCOOP,值为当前scoop文件夹的地址,即 C:\Users\xxxx\scoop
4. 允许脚本执行:
set-executionpolicy remotesigned -s currentuser
5. 双击用户变量中的path,新建一个路径,填入 :
%SCOOP%\shims
6. 管理员权限powershell中运行:
scoop reset *
即可恢复所有软件的正常使用.

reset 之前考虑下是否需要移走 persit 的文件夹（或简单将 persit 文件夹重命名为 persit-old），因为 reset 会覆盖 apps 的已有文件。如果文件只存在于 apps，persit 里没有，那么会被 apps 的文件会被硬链接到 persit。



// 准备
注册表编辑器
2 个变量「SCOOP」「SCOOP_GLOBAL」值为「D:\Portable\scoop」
2 个 Path，「D:\Portable\scoop」「D:\Portable\scoop\shims」



// 卸载
scoop 本身并非完全便携的软件，移动后或重装系统后可能会报错「项识别为 cmdlet、函数、脚本文件或可运行程序 的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次」，因此建议卸载重装。

scoop 卸载做的很差。命令卸载通常会出错，建议强制卸载：删除 <user>/scoop 文件夹；删除 <scoop>/apps/scoop，并移走 apps；执行安装命令；新安装的 apps 改名为 apps2，旧的 apps 移回去，apps2 的目录移到 apps，删除空的 apps2；设置 scoop。

注意！卸载命令 scoop uninstall scoop 会把 app 下的所有软件删除，所以提前将这些软件移走，重装完 scoop 再移动回 app 文件夹即可正常使用。

del .\scoop -Force    #Broken Install 不懂干嘛的，别用。

scoop 的 persist 策略：apps 的文件夹 <JUNCTION> 到 persist 的文件夹，只认路径，所以多版本共用 persist 的文件夹；apps 的文件 硬链接 到存储地址，不认路径，哪怕删除 persist 的文件都没用。因此，persist 的所有文件夹、文件都是普通的、简单的，没有软连接、没有指向别处。reset 时，如果有冲突，persist 的文件、文件夹直接覆盖 apps。我没记错的话，文件夹是直接覆盖，而不是合并。


// 安装
方法 1：cmder - bash 执行命令 `powershell`，然后执行下面 5 条命令，cmder 合集兼容可用，原生 powershell 可用，但原生 cmd 因为缺少 powershell 命令会报错

# scoop 安装目录
[environment]::setEnvironmentVariable('SCOOP','D:\Portable\scoop','Machine')
$env:SCOOP='D:\Portable\scoop'

# 包安装目录（全局）
[environment]::setEnvironmentVariable('SCOOP_GLOBAL','D:\Portable\scoop','Machine')
$env:SCOOP_GLOBAL='D:\Portable\scoop'

# 开始安装
Set-ExecutionPolicy RemoteSigned -scope CurrentUser #允许PowerShell执行本地脚本
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

scoop update && \
scoop install aria2 && \
scoop config aria2-max-connection-per-server 16 && \
scoop config aria2-split 8 && \
scoop config aria2-min-split-size 2M && \





// 还有几条命令供参考
# scoop
export SCOOP='D:\\Portable\\Figure\\scoop'
[environment]::setEnvironmentVariable('SCOOP','D:\Application\Scoop','User')
[environment]::setEnvironmentVariable('Path',[System.Environment]::GetEnvironmentVariable('Path',[System.EnvironmentVariableTarget]::User)+";D:\Application\Scoop\shims",'User')

# 全局
export SCOOP_GLOBAL='D:\\Portable\\Figure\\scoop'
[environment]::setEnvironmentVariable('Path',[System.Environment]::GetEnvironmentVariable('Path',[System.EnvironmentVariableTarget]::Machine)+";D:\Application\ScoopGlobal\shims",'Machine')




// bucket
persist 是目录硬链接到 app/xxx/bbb 文件夹的，更新或卸载后 persist 会保留

shims 有 exe ps1 shim 三个文件，依据 bucket/xxx.json 中的 bin 自动生成的。

shortcuts 用于开始菜单

如果不手写 scoop，还是有 60 个软件，10 个便携版，50+ 个安装版（非主力姬装机只需要 20 个左右），不包括驱动

没做 persist 的太多了，懒得管了，请当作 Portable/Figure 使用（很多本来就没必要更新嘛）




// Error

scoop reset *, I got this:
Linking Y:\Scoop\apps\7zip\current => Y:\Scoop\apps\7zip\current
Error: Version 'current' is not allowed!

1. Try to used admin powershell
2. 那可能是scoop的app中所有软件的current文件夹变成了一个真正的文件夹,而不是一个软链接,你试试双击打开current文件夹看看里面有什么东西,如果没东西,试试把current删了,让scoop自动生成一个新的



// Error 2: bucket error

[error: Your local changes to the following files would be overwritten by merge: · Issue #3273 · ScoopInstaller/Scoop](https://github.com/ScoopInstaller/Scoop/issues/3273)

[scoop search error from `convertfrom-json` · Issue #3653 · ScoopInstaller/Scoop](https://github.com/ScoopInstaller/Scoop/issues/3653)

Tried rm and add again. Removing and re-adding the broken bucket is the easiest fix.

1. scoop bucket rm <有问题的bucket>
2. scoop bucket add <有问题的bucket>  # 添加回来，通常是 main 和 extras

```

### Bucket

[rasa/scoop-directory: A searchable directory of buckets for the scoop package manager for Windows](https://github.com/rasa/scoop-directory)

[ScoopInstaller/Main: 📦 The default bucket for Scoop.](https://github.com/ScoopInstaller/Main)

[ScoopInstaller/Extras: 📦 The Extras bucket for Scoop.](https://github.com/ScoopInstaller/Extras)

[chawyehsu/dorado: 🐟 Yet Another bucket for lovely Scoop](https://github.com/chawyehsu/dorado)

[kkzzhizhou/scoop-apps: 使用Github Action每天自动合并其他scoop仓库的更新，仓库地址：https://github.com/kkzzhizhou/scoop-apps](https://github.com/kkzzhizhou/scoop-apps)


> [!info]
> `kkzzhizhou/scoop-apps` 整合了几十个 buckets、近万个软件，每天自动更新，强烈推荐
> 
> `lzwme/scoop-proxy-cn` 整合了 1.4w 软件，并且基于 `ghproxy.com` 代理，墙内网络也能用

```bash

【聚合】

apps https://github.com/kkzzhizhou/scoop-apps
    extras
    versions
    nirsoft
    java
    nonportable
    dorado https://github.com/h404bi/dorado
    emulators https://github.com/hermanjustnu/scoop-emulators
    sysinternals https://github.com/niheaven/scoop-sysinternals
    retools https://github.com/TheCjw/scoop-retools
    Cluttered https://github.com/Paxxs/Cluttered-bucket
    php
    games
    JetBrains
    nerd-fonts

scoop-proxy-cn https://ghproxy.com/https://github.com/lzwme/scoop-proxy-cn
    KnotUntied https://github.com/KnotUntied/scoop-fonts
    sushi https://github.com/kidonng/sushi



【其他】

gdm257 https://github.com/gdm257/scoop-257
Ash258 https://github.com/Ash258/scoop-Ash258
frostming https://github.com/frostming/scoop-frostming
echo https://github.com/echoiron/echo-scoop



```


### Manifest

[BucketTemplate/app-name.json.template at master · ScoopInstaller/BucketTemplate](https://github.com/ScoopInstaller/BucketTemplate/blob/master/bucket/app-name.json.template)

[App Manifests · ScoopInstaller/Scoop Wiki](https://github.com/ScoopInstaller/Scoop/wiki/App-Manifests)

[Extras/irfanview.json at master · ScoopInstaller/Extras](https://github.com/ScoopInstaller/Extras/blob/master/bucket/irfanview.json)

[.github/CONTRIBUTING.md at main · ScoopInstaller/.github](https://github.com/ScoopInstaller/.github/blob/main/.github/CONTRIBUTING.md)

[Criteria for including apps in the main bucket · ScoopInstaller/Scoop Wiki](https://github.com/ScoopInstaller/Scoop/wiki/Criteria-for-including-apps-in-the-main-bucket)


> [!tip]
> 建议使用 [[VSCode]] 编写 Manifest 文件。
> > 在 `.vscode/settings.json` 中设置 `json.schemas`（具体配置可参考官方 bucket），可以给 JSON 文件添加语法提示，写起来非常方便，免去了看文档的麻烦

- Variables
    - `$version`
        * Manifest 定义的 `version` 字段
    - `$dir`
        * current 文件夹
    - `$persist_dir`
        * 相当于 `$env:SCOOP/persist/<app>`
    - `$app`
    - `$fname`
    - `$cmd`
        - the running command
        - `install`
        - `uninstall`
        - `update`
    - `$baseurl`
        - `$baseurl/checksums.txt` for hash

- CLI
    - `appdir`
        - `$FoobarDir = $(appdir foobar2000 $global)`

- API
    - `regex`
        - [[正则表达式]] 分组捕获第一组当作版本号

```json
{
    "##": "This file is a template. Fill the blanks and add or remove fields as necessary.",
    "version": "",
    "description": "",
    "homepage": "",
    "license": "<SPDX identifier>|Unknown|Freeware|Public Domain|Shareware (free to try, must pay eventually)|Proprietary (must pay to use)",
    "notes": "",
    "architecture": {
        "64bit": {
            "url": "",
            "hash": ""
        },
        "32bit": {
            "url": "",
            "hash": ""
        },
        "arm64": {
            "url": "",
            "hash": ""
        }
    },
    "pre_install": "",
    "installer": {
        "script": ""
    },
    "post_install": [
        "",
        ""
    ],
    "uninstaller": {
        "script": ""
    },
    "bin": "",
    "env_add_path": [
        "",
        ""
    ],
    "persist": [
        "",
        ""
    ],
    "checkver": "github" | Dict["github", str] | Dict["url|regex", str],
    "autoupdate": {
        "architecture": {
            "64bit": {
                "url": ""
            },
            "32bit": {
                "url": ""
            },
            "arm64": {
                "url": ""
            }
        },
        "hash": {
            "url": "",
            "regex": "",
            "replace": ""
        }
    }
}
```

### Migrate

- Idea
    - reinstall OS or migrate to another computer

- Shortcuts
    - Update (admin shell)
        - `scoop list | Where-Object -Property Name -Match 'LXGW|Sarasa|NerdFonts|NF-Mono' | foreach { scoop update -g $_.Name }`
    - Reset (admin shell)
        - `scoop list | Where-Object { Select-String -Pattern 'env_add_path|env_set' -Path "$(scoop prefix $_.Name)\manifest.json" } | foreach { scoop reset $_.Name }`

- Objects
    - for `$_` in `scoop list [xxx]`
        - `Name`
        - `Version`
        - `Source`
            - E.g. `main`
            - E.g. `D:\apps\scoop\buckets\apps\bucket\wechat.json`
        - `Info`
        - `Updated`
 
- Fundamentals
    - keep path to be same
    - find apps with env variables and reset them
    - `scoop list`
    - `"$(scoop prefix <app>)\manifest.json"`
    - `where-object { select-string -Pattern 'env_add_path|env_set' -Path "$(scoop prefix $_.Name)" }`
    - `sudo scoop reset <app>`
