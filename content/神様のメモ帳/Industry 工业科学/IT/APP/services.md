---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/Platform/Windows独占
    - flag/APP/Process
    - flag/APP/Process/_Theme/Service
---

[Windows中实现不依赖账户登录的开机启动程序_一个程序员的修炼之路的博客-CSDN博客](https://blog.csdn.net/CJF_iceKing/article/details/71725935)


【自启动】

1. 服务
2. 计划任务
3. 快捷方式启动项
    - 全局快捷方式启动项 `C:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp`
    - 用户快捷方式启动项 `C:/Users/<username>/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup` %AppData%
4. 注册表启动项
    - 全局注册表启动项 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
    - 全局注册表启动项 `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run`
    - 用户注册表启动项 `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`
    - 用户注册表启动项 `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`
5. gpedit 组策略
    - `Computer Configuration->Windows Settings->Scripts-> Startup`


```ps
Start-Service <service>
Restart-Service <service>
Stop-Service
Suspend-Service
Resume-Service

Get-Service
New-Service
Set-Service

sc.exe

```