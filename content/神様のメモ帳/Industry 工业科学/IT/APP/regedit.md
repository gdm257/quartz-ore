---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/Platform/Windows独占
    - flag/APP/Kernel
---

[Registry - Win32 apps | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry)

[Windows关机状态修改注册表内容 | 杂烩饭](https://zahui.fan/posts/36ac7ecc/)


GUI 推荐使用第三方软件 Registry Workshop
CLI 推荐使用官方自带的 regedit.exe reg.exe
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -PropertyType String -Force

「注册表」相当于 Linux 的 /etc 目录。注册表可以成为任何应用的配置，只要应用支持。但不得不说，这是个坏主意。从配置的角度，可以分为「入口配置」「深入配置」，入口配置一般就是同目录的 ini json yaml sqlite 文件，深入配置一般一般就是数据库（mysql sqlite），注册表想做的是代替 mysql 数据库来存储那一部分配置。但实际上没有后端会把配置存储在注册表，因为根本不通用。GUI 更倾向使用同目录文件配置、其次是 HOME 目录或 AppDate 目录，CLI 则根本不会去考虑使用注册表。除了适配 Windows 的某种机制（比如应用关联、开机自启），根本没有必要使用注册表，事实上大多数应用也确实没用注册表。一个理论上没什么用、实际上也没什么人用、开发者也不想用、用户也不懂用的东西，这就是注册表。况且，注册表本质是个分层数据库，所谓的分层，也就是树形，跟文件系统没有任何区别，那为什么不直接用文件系统呢？你 Windows 权限管理不是特别复杂吗？

但 pid 1 怎么读取注册表呢？刚启动时又没有 process 可以通信。答案是「文件」。注册表本质是几个特定路径的二进制文件。

Windows 在注册表中 HKLM\SYSTEM\CurrentControlSet\Control\hivelist 下维护了一个配置单元及其存放文件的列表。下面的表中显示了标准的配置单元与其对应的文件。

注册表配置单元  文件 
HKLM\SAM %SystemRoot%\System32\Config\SAM 
HKLM\SECURITY %SystemRoot%\System32\Config\Security 
HKLM\SOFTWARE %SystemRoot%\System32\Config\Software 
HKLM\SYSTEM %SystemRoot%\System32\Config\System 
HKU\.DEFAULT %SystemRoot%\System32\Config\DEFAULT 
HKU\SID Documents and Settings\userName\NTUSER.DAT 
HKU\SID_Classes Documents and Settings\userName\Local Settings \Application Data\Microsoft\Windows\UsrClass.dat 

注册表根项 缩写 
HKEY_CLASSES_ROOT  HKCR 
HKEY_CURRENT_USER  HKCU 
HKEY_LOCAL_MACHINE  HKLM 
HKEY_USERS  HKU 
HKEY_CURRENT_CONFIG  HKCC 

HKLM 和 HKU 包含了所有的注册表数据.
HKCR, HKCU 和 HKCC 仅仅是符号链接。

注册表根项 链接 
HKCR HKCU\Software\Classes + HKLM\SOFTWARE\Classes 
HKCU HKU\SID 
HKCC HKLM\SYSTEM\CurrentControlSet\Hardware Profiles\Current