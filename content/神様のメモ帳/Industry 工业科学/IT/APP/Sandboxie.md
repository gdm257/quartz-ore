---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Layer
winget: Sandboxie.Plus
---

[Command Line for Sandbox](https://sandboxie-plus.com/sandboxie/startcommandline/)

[Sandboxie Plus Support](https://sandboxie-plus.com/sandboxie/allpages/)

[Sandboxie深度教程（自留备用）| 啦啦啦](https://www.yuedongxu.cn/posts/8c3d19bb.html)

[Sandboxie深度教程_虚拟机讨论区_安全区 卡饭论坛 - 互助分享 - 大气谦和!](https://bbs.kafan.cn/thread-2121301-1-1.html)

[Sandboxies 中正常使用 Rime 输入法](https://www.seekhue.com/2020/software/sandboxie-runasinvoker-rime/)

[使用 Sandboxie 保护隐私：微信 Windows 配置 - V2EX](https://www.v2ex.com/t/816967)

[将 QQ、TIM 或微信运行在 Sandboxie 之中 – Xeath](https://www.xeath.cc/2021/02/07/archives-379/)


【CLI】

```cmd
D:\Installer\Sandboxie-Plus\Start.exe {filepath}
D:\Installer\Sandboxie-Plus\Start.exe /box:DefaultBox c:\windows\system32\calc.exe
D:\Installer\Sandboxie-Plus\Start.exe /box:ask__ c:\windows\system32\calc.exe
"D:\Installer\Sandboxie-Plus\Start.exe" default_browser

/box:DefaultBox    指定沙盒名
/box:ask__    询问使用哪个沙盒（试了下没用）
/box:TestBox  /terminate    终止沙盒
/terminate_all    终止所有沙盒
/box:TestBox  /listpids
/silent
/env:VariableName="Variable Value With Spaces"
/elevate    run a program with Administartor privileges on a system where User Account Control (UAC) is enabled
/hide_window

D:\Installer\Sandboxie-Plus\Start.exe /reload    reloads the Sandboxie configuration
```


【Rime 输入法】

Sandboxies 中正常使用 Rime 输入法：

某个 Sandbox - 右键 - sandbox setting - Resource Access - File Access - Full Access - Eidt/Add - \Device\NamedPipe\你的用户名\WeaselNamedPipe - 一路确认保存
