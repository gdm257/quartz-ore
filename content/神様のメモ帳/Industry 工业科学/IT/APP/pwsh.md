---
aliases:
  - PowerShell Core
  - PowerShell 7
tags:
  - flag/License/MIT
  - flag/LANGUAGE/PowerShell
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/APP/Command/TUI
  - flag/APP/Shell/Implement__/Shell
  - flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
  - flag/APP/DevOps/Runtime/REPL
scoop: powershell
github: PowerShell/PowerShell
---

## Brief

- Test
    - Linux
        - 但凡改一改 PROFILE 脚本，初始化就慢到死


## Configuration

- References
    - [关于首选项变量 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_preference_variables?view=powershell-7.3)
    - [关于配置文件 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.3)
    - [自定义 shell 环境 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/shell/creating-profiles?view=powershell-7.3)

    - [关于执行策略 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3)

- powershell 通过 `$PROFILE` 对象来指定启动脚本，每个会话（session）开始时会自动执行
- `$PROFILE` 共有 4 个，简单说就是全局级、用户级
- Windows Powershell (PowerShell 5) 和 Powershell Core (PowerShell 7+, pwsh) 分别使用一套不同的 `$PROFILE`，互不影响

```ps
> $PROFILE # 相当于打印 $PROFILE.CurrentUserCurrentHost
> $PROFILE | Select-Object *

```


## CLI

- References
    - [关于 Pwsh - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_pwsh?view=powershell-7.3)

```ps
powershell command
pwsh command
Usage:
    powershell [options]

Options:
    -Help -? /?

    -File <ps1_file>
    -Command <script_string>

    -wd -WorkingDirectory <dir>
    -NoProfile
        - without loading $PROFILE startup configs
    -Version <spec_version>

```


## 执行策略

[关于执行策略 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies)

[开始使用 PowerShell - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started)


```ps
PowerShell 执行策略
    AllSigned
    Bypass
    Default
    RemoteSigned    均衡
    Restricted
    Undefined
    Unrestricted

执行策略范围
    MachinePolicy
    UserPolicy
    Process
    CurrentUser
    LocalMachine



Get-ExecutionPolicy
Get-ExecutionPolicy -List
Get-ExecutionPolicy -Scope CurrentUser
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope LocalMachine

如果未在任何范围内设置执行策略，则有效执行策略为 RestrictedWindows 客户端的默认策略。

若要更改 Windows 计算机上的 PowerShell 执行策略，请使用 Set-ExecutionPolicy cmdlet。 更改立即生效。 无需重启 PowerShell。

如果为 Scopes LocalMachine 或 CurrentUser 设置执行策略，则更改将保存在注册表中，并在再次更改之前保持有效。

如果为 Process 范围设置了执行策略，则不会保存在注册表中。 执行策略将保留，直到当前进程和任何子进程关闭。

确定会话的有效执行策略时，PowerShell 按以下优先顺序评估执行策略
Group Policy: MachinePolicy
Group Policy: UserPolicy
Execution Policy: Process (or pwsh.exe -ExecutionPolicy)
Execution Policy: CurrentUser
Execution Policy: LocalMachine



pwsh.exe -ExecutionPolicy AllSigned
该策略仅影响当前会话和子会话
执行策略存储在环境变量中 $env:PSExecutionPolicyPreference，不影响注册表

```



## 管理员权限

```ps
Start-Process powershell -Verb runAs

```

## i18n

- [[Set-Culture]]
- [[Get-Culture]]
- [[Get-UICulture]]

## proxy

[Use the Az PowerShell module behind a proxy | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/azure/az-powershell-proxy?view=azps-8.3.0)

PowerShell 5.1    推荐系统代理
PowerShell 7 on Windows    推荐系统代理，备选 HTTP_PROXY and HTTPS_PROXY
PowerShell 7 on macOS    推荐系统代理，备选 HTTP_PROXY and HTTPS_PROXY
PowerShell 7 on Linux    HTTP_PROXY and HTTPS_PROXY and optional NO_PROXY


## PSReadLine

[关于 PSReadLine - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/psreadline/about/about_psreadline?view=powershell-7.3)

[使用动态帮助 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/shell/dynamic-help?view=powershell-7.3)

[关于行编辑 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_line_editing?view=powershell-7.3)

[关于 PSReadLine 函数 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/psreadline/about/about_psreadline_functions?view=powershell-7.3)

```powershell
Write-Output '=== 安装新版 PSReadLine ==='
Install-Module -Name PSReadLine -AllowClobber -Force
```


## History

[关于历史记录 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_history)

[关于 PSReadLine - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/psreadline/about/about_psreadline?view=powershell-7.3)

[windows - How to search Powershell command history from previous sessions - Server Fault](https://serverfault.com/questions/891265/how-to-search-powershell-command-history-from-previous-sessions)

- Examples
    - `get-content (Get-PSReadLineOption).HistorySavePath | where { $_ -like '*string*' }`

- Data
    - Seesion History
    - PSReadLine History
        - `$env:APPDATA\Microsoft\Windows\PowerShell\PSReadLine\$($host.Name)_history.txt`
        - `$env:XDG_DATA_HOME/powershell/PSReadLine/$($host.Name)_history.txt`
        - 收集了所有会话的历史记录
        - 看了下，目前 6000 条历史记录，约 400 个命令




## Remote

### Terminal Emulator via SSH

- Fundamentals
    - 原理和 [[Bash|Bash]] 一模一样，也就是 pty 那一套，只不过是将 shell 平替为 [[pwsh]]
    - 请注意，该方案并未使用 WinRM（WS-Management 协议），单纯用的 pty via SSH，因此功能有限，甚至微软官方文档都没有提及这种方案

- Installation
    - Client
        - Windows/Linux/MacOS
        - [[ssh command|ssh client]]
    - Server
        - Windows/Linux/MacOS
        - [[sshd]]
        - PowerShell 6+

- Pro
    - Client 端无需安装 [[PowerShell|PowerShell]]

- Con
    - 功能有限，支持较差


### PSRemoting via SSH

- References
    - [通过 SSH 进行 PowerShell 远程处理 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/remoting/ssh-remoting-in-powershell-core?view=powershell-7.3)

- Installation
    - Client
        - Windows/Linux/MacOS
        - [[ssh command|ssh client]]
        - PowerShell 6+
    - Server
        - Windows/Linux/MacOS
        - [[sshd]]
        - PowerShell 6+

- CLI
    - `New-PSSession`、`Enter-PSSession` 和 `Invoke-Command`

- Pro
    - 与 terminal emulator + ssh client 不同，这种方案是通过 `New-PSSession` 建立基于 WinRM 会话的 PSSession，你可以认为 SSH 主要被用作隧道转发，原理并不是终端模拟器那一套。我们平时在 Windows 使用 PowerShell 就是用的本地 PSSession，现在这个远程场景下，只不过是 PSSession 的目标换成了远程主机

- Con
    - 基于 SSH 的远程处理目前不支持远程终结点配置和 Just Enough Administration (JEA)
    - [[sudo]] 命令对 Linux 计算机上的远程会话不起作用
    - 通过 SSH 进行 PSRemoting 不支持配置文件，并且无权访问 `$PROFILE`
    - PowerShell 7.1 之前，通过 SSH 进行远程处理不支持第二跃点远程会话。 此功能仅限于使用 WinRM 的会话。 PowerShell 7.1 允许 `Enter-PSSession` 和 `Enter-PSHostProcess` 在任何交互式远程会话中工作


### PSRemoting via WinRM

- References
    - [PowerShell 远程常见问题解答 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/remoting/powershell-remoting-faq?view=powershell-7.3)

    - [关于远程要求 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_remote_requirements?view=powershell-7.3)

    - [在云服务器上玩GalGame - 极光萝卜の博客备份](https://blogbak.ijglb.com/post/63)

    - [使用 WinRM 进行 PowerShell 远程处理时的安全注意事项 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/remoting/winrmsecurity?view=powershell-7.3)

    - [运行远程命令 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/remoting/running-remote-commands)

    - [PowerShell 远程常见问题解答 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/remoting/powershell-remoting-faq?source=recommendations&view=powershell-7.2)

    - [在 PowerShell 中WS-Management (WSMan) 远程处理 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/remoting/wsman-remoting-in-powershell-core?view=powershell-7.3)

    - [关于 WSMan 提供程序 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.wsman.management/about/about_wsman_provider?view=powershell-7.3)

    - [关于 WS-Management Cmdlet - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.wsman.management/about/about_ws-management_cmdlets?view=powershell-7.3)

- Idea
    - 用 [[PowerShell|PowerShell]] 平替 [[Bash|Bash]]

- Installation
    - PowerShell 3.0+ Session
        - Client
            - Windows
            - PowerShell 3+
            - .NET Framework 4 or later
            - Windows Remote Management 3.0 or higher
        - Server
            - Windows
            - PowerShell 3+
            - .NET Framework 4 or later
            - Windows Remote Management 3.0 or higher
    - PowerShell 2.0 Session
        - Client
            - Windows
            - PowerShell 2+
            - .NET Framework 2.0 or later
            - Windows Remote Management 2.0
        - Server
            - Windows
            - PowerShell 2+
            - .NET Framework 2.0 or later
            - Windows Remote Management 2.0

- Pro
    - 功能最全

- Con
    - 基本只支持 Windows，不支持 Linux/MacOS

- Fundamentals
    - WinRM 是 WS-Management 协议的 Microsoft 实现
