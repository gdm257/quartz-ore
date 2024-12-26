---
tags:
- flag/License/Proprietary
- flag/Platform/Windows独占
- Label/Industry-工业科学/IT/APP/Distro
---

## Brief

- FS
    - [Windows 文件夹权限不足——夺权 - ZHider - 博客园](https://www.cnblogs.com/zhiders/p/17793204.html)
    - [特殊标识组 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/identity/ad-ds/manage/understand-special-identities-groups)

- Ecosystem
    - [sunlei/awesome-tools: 我常用或收集的工具](https://github.com/sunlei/awesome-tools)

- Version
    - Windows 11
        - 性能巨差，尤其是虚拟机
        - 如果不需要 [[WSL|WSLg]]，建议 Windows 10
    - Windows 10
    - Home vs Pro
        - Multiple Accounts
        - BitLocker
        - Remote Desktop
        - Group Policy
        - Azure Active Directory

- TL;DR
    - 激活方式
        - Enterprise
            - 镜像文件名带有 `Enterprise`
            - 企业授权，也就是常说的 VL
            - 不存在永久激活，无论正版还是盗版
            - 通常采用 KMS 的方式进行激活
        - 非 Enterprise
            - 镜像文件名不带 `Enterprise`
            - 非企业授权，也就是常说的 消费者、个人、家庭
            - 可以永久激活，无论正版还是盗版，例如笔记本自带的 Windows
            - 支持绝大部分激活方式
            - 「数字许可证激活」支持 永久激活，重装系统了也能激活
            - 「KMS」支持 长期（38 年）或短期（180 天）激活
            - 一律推荐「非 Enterprise」镜像，一是支持永久激活，二是在功能上没有区别，「Enterprise 镜像」安装的「专业版」并不比「非 Enterprise 镜像」安装的「专业版」有更多功能，仅仅只是授权方式的不同
    - 功能齐全程度
        - 家庭版
        - 专业版
        - 专业工作站版
        - P.S.
            - 「授权方式」与「功能齐全程度」可以进行排列组合
                - 「企业（Enterprise）授权」+「家庭版」
                - 「企业（Enterprise）授权」+「专业工作站」
                - 「非企业授权」+「家庭版」
                - 「非企业授权」+「专业工作站」
                - ……
            - 其实很多镜像已经包含了 Windows 的全部功能，只不过安装的时候你可以选择安装为什么版本，家庭版功能最少，专业工作站版功能最全


- Driver
    - Windows 10 insider / Windows 11 已经足够智能，你不需要去官网找驱动，也不需要 Dism++ 备份还原驱动，Windows 会自动帮你安装
    - 如果有少量驱动如 Intel 核显驱动没有自动安装，请到 Windows Update 界面的可选更新，勾选需要驱动进行安装
    - Windows 10 insider 已经自带 NVDIA 驱动

- Data
    - File path
        - `/` means driver root directory e.g. `C:/` `D:/`

## Shortcuts

- Edit
    - `Winows + ;` -> 🎉emoji

- Navigation
    - `Ctrl + Alt + Tab` -> List windows
    - `Alt + Esc` -> Switch window

## Windows Server

[link-windows-auto-ops]: https://www.zhihu.com/question/26130721

[Windows常用命令整理 | 好派笔记](https://www.haopython.com/myshare/977/)

[LINUX&WINDOWS应急响应排查 | 好派笔记](https://www.haopython.com/baseyw/jichu/1068/)

[如何制作 Windows Server 2019 的 DD 镜像 | 秋水逸冰](https://teddysun.com/544.html)

[Windows Server 2019/2016/2012R2 Datacenter DD 镜像 | 秋水逸冰](https://teddysun.com/545.html)

[适用于 UEFI 启动的多个 Windows 系统 DD 镜像 | 秋水逸冰](https://teddysun.com/656.html)






简单体验了下 Windows Server 2022，要进行的操作本质跟 *nix 没有区别。只不过工具链完全不一样，配置的存放理念不一样。

单台服务器维护，跟我平常用 Windows 10 差不多，开始菜单里的的各种工具、设置、控制面板、PowerShell，也就这样。此外，由于 Windows 对开源工具的支持不是很好，所以自带了很多重型轮子，IIS、DHCP、TFTP、NFS 什么的，但因为其配置理念不同，用着很别扭，微软依旧是教你做事，还只允许你用一种并不由雅的方式做事。

批量部署与维护，微软也自带很多重型工具，DSC 什么的，详见 [Windows 自动化运维的思路或者方法是什么](https://www.zhihu.com/question/26130721)，原理其实跟 Ansible 差不多，只不过更难理解。



Windows Server vs Windows 7/8.1/10/11

都以 GUI 为主要的交互方式，鼠标点点点。
用 RDP 连接、操作远程服务器。
兼容性一般不会有太大问题。
可以玩 Galgame。
Windows Server 需要一些额外配置才能达到 Windows 10 开箱即用的效果。
区别不大，Windows Server 有更好的稳定性优化和商业支持。
出了事微软负责。


Windows Server 2016 Standard edition(标准版)
    此版本最多支持64个插槽和最多4TB的RAM。
    它包括最多两个虚拟机的许可证，并且支持Nano服务器安装

Windows Server 2016 Essentials edition
    此版本最多可容纳25个用户和50台设备。
    它支持两个处理器内核和高达64GB的RAM。
    它不支持Windows Server 2016的许多功能，包括虚拟化。

Windows Server 2016 Datacenter edition(数据中心版)
    此版本最多支持64个插槽，最多640个处理器内核和最多4TB的RAM。
    它为在相同硬件上运行的虚拟机提供了无限基于虚拟机许可证。
    它还包括新功能，如储存空间直通和存储副本，
    以及新的受防护的虚拟机和软件定义的数据中心场景所需的功能。

Microsoft Hyper-V Server 2016
    作为运行虚拟机的独立虚拟化服务器
    主机操作系统没有许可成本，但每个虚拟机必须单独获得许可。
    包括Windows Server 2016中虚拟化的所有新功能
    此版本最多支持64个插槽和最多4TB的RAM。
    它支持加入到域。
    除了有限的文件服务功能，它不支持其他Windows Server 2016角色。
    此版本没有GUI，但有一个显示配置任务菜单的用户界面。


## Windows 保留文件名

    CON, PRN, AUX, NUL
    COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9
    LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9


## Windows 路径保留字符

    <（小于）    〈
    >（大于）     〉
    : (冒号)    ：
    "（双引号"）    ＂
    /（正斜杠）    ／
    \ (反斜杠)    ∖
    | (竖线或管道)    ∣
    ? （问号）    ？
    * (星号)    ⚹



## KMS

[CloudMoe Windows 10 Activation Toolkit - Home](https://cmwtat.cloudmoe.com/en.html)

[TGSAN/CMWTAT_Digital_Edition: CloudMoe Windows 10 Activation Toolkit get digital license, the best open source Win 10 activator in GitHub. GitHub 上最棒的开源 Win10 数字权利（数字许可证）激活工具！](https://github.com/TGSAN/CMWTAT_Digital_Edition)


> 盗版系统通过kms激活导致系统被认定为企业版，而企业版一般是通过企业内的更新服务器来推送更新的。

牛逼呀，也就是说，我可以通过 CMWTAT Digital 的 KMS 激活（十几年那个）来规避自动更新

## Win 11 任务栏位置

[自定义 Windows 11 任务栏 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-hardware/customize/desktop/customize-the-windows-11-taskbar)

[BitDock比特工具栏-官方网站](http://www.bitdock.cn/)

[Windows10桌面美化之Dock栏指南 - 知乎](https://zhuanlan.zhihu.com/p/215814528)

[windows上dock栏程序体验记-远景论坛-微软极客社区](https://bbs.pcbeta.com/forum.php?mod=viewthread&tid=1934985)

无解，注册表改了，位置对了，但图标没了，用不了。




## Win 11 圆角

[MicaForEveryone/MicaForEveryone: Mica For Everyone is a tool to enable backdrop effects on the title bars of Win32 apps on Windows 11.](https://github.com/MicaForEveryone/MicaForEveryone)

2023.06 目前推荐该方法



## ~~Win 11 圆角~~

[valinet/Win11DisableRoundedCorners: A simple utility that cold patches dwm (uDWM.dll) in order to disable window rounded corners in Windows 11](https://github.com/valinet/Win11DisableRoundedCorners)

下载软件 - 解压 - 运行 - 几分钟成功了，自动变为直角

Original `uDWM.dll` is backed up as `uDWM_win11drc.bak` in `%windir%\System32`





## Win 11 右键菜单 默认显示更多选项

[有没有什么办法可以让win11右键默认显示更多选项？ - 知乎](https://www.zhihu.com/question/480356710)


`HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID`

新建项(类似文件夹) - 名为 `{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}` - 进入项文件夹 - 新建项 `InprocServer32` - 进入项 - 双击默认条目 - 什么内容都不需要输入，按下回车键（即值从 `未设置` 变为 空白）

重启 explorer.exe

野路子（待测试）

`reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`


## Win 11 删除 微软输入法

[Win11怎么删除微软输入法 - 哔哩哔哩](https://www.bilibili.com/read/cv13646111/)

设置 - 时间和语言 - 语言和区域 - 语言 - 点击 中文(简体,中国) の右侧の三个点 - 语言选项 - 




## Win 11 remove Windows Hello PIN

[How to remove PIN (greyed out) on Windows 11 - Pureinfotech](https://pureinfotech.com/remove-pin-grayed-out-windows-11/)



## ~~Win 10 隐藏 右下角测试模式水印~~

[轻松去掉Win10桌面右下角的测试模式水印 | 王桂明’s Blog | 杰创官方博客](http://www.0523jz.com/5507.html)

可能你电脑的win10系统使用的好好的，突然某天注意到桌面右下角多出了一个测试模式字样的水印，什么都没动啊？为什么就多了个水印呢？其实这个水印的出现，是因为你安装了非官方的驱动，或运行了某些修改系统关键文件的补丁。因为这个原因，导致win10系统判断你的系统为非正式版，是一个测试版本。

当然，并不是说安装非官方驱动或修改系统关键文件会对win10的正常运行有影响，不过桌面有个水印始终影响系统的美观，还是去掉它吧。

测试模式水印怎么去掉？

右键桌面任务栏开始图标——在列表中打开命令提示符（管理员）

    bcdedit /set testsigning off

如果命令提示符窗口内显示操作成功完成，需要重新启动一下电脑

## Win 10 Windows Update

- 如果使用 WiFi，请在 WiFi 属性里启用「设为按流量计费的连接」

```powershell
Get-Service -DisplayName "Windows Update" | Set-Service -StartupType Disabled
Get-ScheduledTask -TaskPath \Microsoft\Windows\WindowsUpdate\ -TaskName "Scheduled Start" | Disable-ScheduledTask
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\UsoSvc' -Name 'Start' -Value 4
Get-Service UsoSvc | Set-Service -StartupType Manual

# 定义服务名称
$serviceName = "UsoSvc"

# 定义注册表路径
$registryPath = "HKLM:\SYSTEM\CurrentControlSet\Services\$serviceName"

# 设定 FailureActions 值
# 构建 FailureActions 二进制数据
# 此例配置了第一次失败后一分钟后重新启动，第二次失败后五分钟后重新启动，后续失败不采取任何行动
$failureActions = @(
    0x80, 0x51, 0x01, 0x00,  # Reset period (24 hours)
    0x00, 0x00, 0x00, 0x00,  # Preshutdown
    0x00, 0x00, 0x00, 0x00,  # Preshutdown
    0x03, 0x00, 0x00, 0x00,  # Number of actions (3)
    0x00, 0x00, 0x00, 0x00,  # First action delay
    0x00, 0x00, 0x00, 0x00,  # First action type (SC_ACTION_NONE)
    0x00, 0x00, 0x00, 0x00,  # Second action delay
    0x00, 0x00, 0x00, 0x00,  # Second action type (SC_ACTION_NONE)
    0x00, 0x00, 0x00, 0x00,  # Third action delay
    0x00, 0x00, 0x00, 0x00,  # Third action type (SC_ACTION_NONE)
    0x00, 0x00, 0x00, 0x00,  # Fourth action delay
    0x00, 0x00, 0x00, 0x00   # Fourth action type
)

# 转换为字节数组
$binaryFailureActions = [byte[]] $failureActions

# 设置 FailureActions 值
Set-ItemProperty -Path $registryPath -Name "FailureActions" -Value $binaryFailureActions
```


## Win 10 DoH

[如何为Windows 10开启DoH功能](https://xmanyou.com/how-to-enable-dns-over-https-on-windows/)

[使用软件一键自动为Windows 10配置DoH功能](https://xmanyou.com/enable-dns-over-https-on-windows-with-simple-dnscrypt/)

Win 11 才开始原生支持 DoH。

Win 10 想要 WLAN 网卡支持 DoH 非常麻烦，建议直接 Clash For Windows TUN，支持 DoH/DoT。

## Win 10 禁用 磁盘碎片整理程序

[win10如何关闭磁盘碎片整理计划|管理器|快捷键|驱动器_网易订阅](https://www.163.com/dy/article/H4MGBGK60552NQ70.html)

电脑空闲时，HDD 老是炒豆子，烦死了！

文件管理器 - C盘 - 右键属性 - 工具 - 优化 - 更改设置 - 取消勾选「按计划运行」

## Windows 10/11 N `MFPlat.DLL` missing

[Media Feature Pack list for Windows N editions - Microsoft Support](https://support.microsoft.com/en-us/topic/media-feature-pack-list-for-windows-n-editions-c1c6fffa-d052-8338-7a79-a4bb980a700a)

[How to Fix Mfplat.dll Is Missing or Not Found Errors](https://www.lifewire.com/how-to-fix-mfplat-dll-not-found-or-missing-errors-2623682)

[How Do I Automatically Repair Windows Problems?](https://www.lifewire.com/how-do-i-automatically-repair-windows-problems-2624907)



## 禁用 开机自动登录

[在Windows10中启用或禁用自动登录的3种方法 | 多听号](https://www.duotin.com/en/100371.html)

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon]
"LastUsedUsername"="Administrator"
"DefaultUserName"=""
"AutoAdminLogon"="0"

```

## 隐藏 安全中心の通知

[从Windows 安全中心应用隐藏通知 - Windows security | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/security/threat-protection/windows-defender-security-center/wdsc-hide-notifications)

组策略 - 计算机配置 - 管理模板 - Windows 组件 > Windows 安全中心 > 通知 - 隐藏所有通知 - 编辑 - 已启用


## 隐藏 右下角测试模式水印

[[scoop]] install universal-watermark-disabler



## 禁用 Ctrl Space 切换中英文

[How to disable Ctrl-Space selecting chinese keyboard on windows 7? - Super User](https://superuser.com/questions/363873/how-to-disable-ctrl-space-selecting-chinese-keyboard-on-windows-7)

[【快捷键】win10 禁用ctrl+space切换中英文快捷键\_路玉屏风的博客-CSDN博客](https://blog.csdn.net/qq_41487095/article/details/123531363)

- 设置 - 时间和语言 - 输入 - 高级键盘输入 - 语言栏选项
- 高级键设置 - 更改「输入法/非输入法切换」の快捷键
- 必须是「更改」，而不能是禁用，禁用无效果
- 重启

## ~~旧版 Alt Tab~~

HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer

新建值 - DWORD (32 位) 值 - 命名为 AltTabSettings - 双击项目，把值修改为 1

重启 资源管理器


## 隐藏 桌面的回收站图标

Dism++

~~开始 - 设置 - 个性化 - 主题 - 桌面图标设置 - 取消勾选回收站~~


## 隐藏 快捷方式右下角小盾牌

HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons\

名为「77」的值：

    reg_expand_sz 值由「%systemroot%\Blank.ico」改为空。
    
    上面的方法好像不行，应该
    reg_sz 值改为「%systemroot%\Blank.ico」


## 隐藏 右键菜单 `Skype 共享`

[如何关闭右键菜单中“使用Skype共享”？ - Microsoft Community](https://answers.microsoft.com/zh-hans/windows/forum/all/%E5%A6%82%E4%BD%95%E5%85%B3%E9%97%AD%E5%8F%B3/463db1ec-cada-4763-b242-d43972890c3a)

- `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\PackagedCom\Package\Microsoft.SkypeApp_15.122.3205.0_x64__kzf8qxf38zg5c\Class\{776DBC8D-7347-478C-8D71-791E12EF49D8}\DllPath`
- DllPath ，在其数值前加 `–` 号，即可

## 禁用 Windows Search

服务 - Windows Search - 停止、右键属性禁用


## 修改 文件夹位置

[文件夹的属性没有“位置”选项，解决方案-百度经验](https://jingyan.baidu.com/article/e5c39bf5d984c139d6603372.html)


HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders

HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders

在右边可以看见“My Music”“My Pictures”“My Pictures”等项，鼠标右键“修改”在“数值数据”里改为文件夹路径



## 修改 默认应用

[手动改注册表](https://www.jianshu.com/p/7b5a7b304c2c)

[屏蔽系统自带](https://www.zhihu.com/question/40319875)

1. 官方の图形界面方式

**错误办法：**
1.直接卸载win10自带APP，让win10无法恢复默认应用。
2.卸载所谓的 KB3135173补丁

**关于重置**
微软官方的解释是修改了系统关联应用的接口，凡是不符合规范的关联都会被重置为默认应用。其实简单的说，就是之前通过修改注册表关联应用的方法会被微软认为是不安全的，所以软件如果在安装时或者使用中，采取了修改注册表的方式来关联应用，就会被重置，这就是系统经常出现“已重置应用默认”提示的原因。

安装第三方软件时不做任何关联

**规范操作**
解决办法很简单，那就是采用符合微软规范的管理方式即可：**设置 - 选择默认应用（官方 1）**

但是通常会有2个问题无法解决：
    应用列表里找不到自己喜欢的应用，只能从应用商店查找应用；
    无法对 pdf，doc等文件设置关联。

其实解决办法很简单：：关联指定应用，针对某种文件的关联，可以选择**右键菜单 - 打开方式（官方 2）**，指定应用即可。



根源の注册表方式

如果都无效：所有的图形界面都是纸老虎，真正掌管系统资源的是数据本身。所以不管微软有没有提供正确修改默认应用的操作选项，我们都可以通过【注册表】解析到每一个系统操作的“数据联系”。

修改 HKEY_CLASSES_ROOT 更改的文件格式类型，**如 HKEY_CLASSES_ROOT\.mp4** 项（项即文件夹）

**2、检查两处注册表**

在注册表编辑器中，是有以下两处位置负责管理“默认应用”

HKEY_CLASSES_ROOT\

HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FileExts\

想要“默认应用”不会被系统重置，要保证相同文件关联的应用是一样的。举个例子，

HKEY_CLASSES_ROOT\.mp4如果使用射手影音打开的话。

那HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.mp4\OpenWithList的显示关联应用也必须是它，否则系统在校验过程中出错就会造成默认应用重置的说





屏蔽系统自带应用

**既然干不掉，那就藏起来！！**

在[LzSkyline's Blog](https://link.zhihu.com/?target=https%3A//www.lzskyline.com/)看到一篇文章，成功解决问题

原理是通过注册表屏蔽系统自带的应用，此法可以复原，不妨试试：

以下是原文链接 [https://](https://link.zhihu.com/?target=https%3A//www.lzskyline.com/archives/530)[www.lzskyline.com/archives/530](https://link.zhihu.com/?target=http%3A//www.lzskyline.com/archives/530)

***

方法：将一下代码存为.reg 然后导入注册表就行了

```text
Windows Registry Editor Version 5.00

;Description: Prevents Windows 10 from resetting the file associations
;... by adding NoOpenWith & NoStaticDefaultVerb values for all the modern apps.
;Created on Feb 13 2016 by Ramesh Srinivasan
;Updated on Sep 28 2016
;The Winhelponline Blog
;http://www.winhelponline.com/blog
;Tested in Windows 10 v1511 & 1607

;-------------------
;Microsoft.3DBuilder
;-------------------
;File Types: .stl, .3mf, .obj, .wrl, .ply, .fbx, .3ds, .dae, .dxf, .bmp
;... .jpg, .png, .tga
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXvhc4p7vz4b485xfp46hhk3fq3grkdgjg]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;-------------------
;Microsoft Edge
;-------------------
;File Types: .htm, .html
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX4hxtad77fbk3jkkeerkrm0ze94wjf3s9]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;File Types: .pdf
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXd4nrz8ff68srnhf9t5a8sbjyar1cr723]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;File Types: .svg
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXde74bfzw9j31bzhcvsrxsyjnhhbq66cs]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;File Types: .xml
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXcc58vyzkbjbs4ky0mxrmxf8278rk9b3t]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;-------------------
;Microsoft Photos
;-------------------
;File Types: .3g2,.3gp, .3gp2, .3gpp, .asf, .avi, .m2t, .m2ts, .m4v, .mkv
;... .mov, .mp4, mp4v, .mts, .tif, .tiff, .wmv
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXk0g4vb8gvt7b93tg50ybcy892pge6jmt]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;File Types: Most Image File Types
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX43hnxtbyyps62jhe9sqpdzxn1790zetc]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;File Types: .raw, .rwl, .rw2 and others
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX9rkaq77s0jzh1tyccadx9ghba15r6t3h]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;-------------------
; Zune Music
;-------------------
;File Types: .aac, .adt, .adts ,.amr, .flac, .m3u, .m4a, .m4r, .mp3, .mpa
;.. .wav, .wma, .wpl, .zpl
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXqj98qxeaynz6dv4459ayz6bnqxbyaqcs]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""

;-------------------
; Zune Video
;-------------------
;File Types: .3g2,.3gp, .3gpp, .avi, .divx, .m2t, .m2ts, .m4v, .mkv, .mod
;... .mov, .mp4, mp4v, .mpe, .mpeg, .mpg, .mpv2, .mts, .tod, .ts
;... .tts, .wm, .wmv, .xvid
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX6eg8h5sxqq90pv53845wmnbewywdqq5h]
"NoOpenWith"=""
"NoStaticDefaultVerb"=""
```

在运行这个REG之后, 打开控制面板 – 默认程序, 将对应的打开方式换成你想要的, 之后应该不会再有任何内置程序重置关联了. 这个方法已经在Win10 1511和1607上通过测试.

作者提醒: 本方法会在打开方式对话框中隐藏这些Win10内置APP, 但你仍可以在控制面板 – 默认程序中看到(并设置)它们.

  

复原的方法：同样存为.reg 导入

```text
Windows Registry Editor Version 5.00

;Description: UNDO file for the earlier NoOpenWith registry edit
;Created on Feb 13 2016 by Ramesh Srinivasan
;Updated on Sep 28 2016
;The Winhelponline Blog
;Tested in Windows 10 v1511, 1607
;http://www.winhelponline.com/blog

;-------------------
;Microsoft.3DBuilder
;-------------------
;File Types: .stl, .3mf, .obj, .wrl, .ply, .fbx, .3ds, .dae, .dxf, .bmp
;... .jpg, .png, .tga

[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXvhc4p7vz4b485xfp46hhk3fq3grkdgjg]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;-------------------
;Microsoft Edge
;-------------------
;File Types: .htm, .html
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX4hxtad77fbk3jkkeerkrm0ze94wjf3s9]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;File Types: .pdf
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXd4nrz8ff68srnhf9t5a8sbjyar1cr723]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;File Types: .svg
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXde74bfzw9j31bzhcvsrxsyjnhhbq66cs]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;File Types: .xml
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXcc58vyzkbjbs4ky0mxrmxf8278rk9b3t]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;-------------------
;Microsoft Photos
;-------------------
;File Types: .3g2,.3gp, .3gp2, .3gpp, .asf, .avi, .m2t, .m2ts, .m4v, .mkv
;... .mov, .mp4, mp4v, .mts, .tif, .tiff, .wmv
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXk0g4vb8gvt7b93tg50ybcy892pge6jmt]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;File Types: Most Image File Types
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX43hnxtbyyps62jhe9sqpdzxn1790zetc]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;File Types: .raw, .rwl, .rw2 and others
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX9rkaq77s0jzh1tyccadx9ghba15r6t3h]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;-------------------
; Zune Music
;-------------------
;File Types: .aac, .adt, .adts ,.amr, .flac, .m3u, .m4a, .m4r, .mp3, .mpa
;.. .wav, .wma, .wpl, .zpl
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppXqj98qxeaynz6dv4459ayz6bnqxbyaqcs]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

;-------------------
; Zune Video
;-------------------
;File Types: .3g2,.3gp, .3gpp, .avi, .divx, .m2t, .m2ts, .m4v, .mkv, .mod
;... .mov, .mp4, mp4v, .mpe, .mpeg, .mpg, .mpv2, .mts, .tod, .ts
;... .tts, .wm, .wmv, .xvid
[HKEY_CURRENT_USER\SOFTWARE\Classes\AppX6eg8h5sxqq90pv53845wmnbewywdqq5h]
"NoOpenWith"=-
"NoStaticDefaultVerb"=-

```

***


Good Luck


## 启用 Long Path

```powershell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

## Change Host Name

Windows - Settings - System - About - Rename

## Microsoft Store

参考

[Microsoft Store - Generation Project (v1.2.2)](https://store.rg-adguard.net/)

[获取 UWP 应用（Windows 10 商店应用）离线包并安装 - 知乎](https://zhuanlan.zhihu.com/p/43012490)



必须取消系统代理才能上网，太奇葩了。

UWP 应用离线安装包需要 fiddler 抓包得到下载 url，然后 15 分钟内用 IDM 下载该 URL 得到 .Appx 安装包文件。

嫌麻烦直接去 https://store.rg-adguard.net/ 下现成的
例如输入 Intel Graphics Command Center 的 URL:
https://www.microsoft.com/store/productId/9plfnlnt3g5g

不要试图修改安装包扩展名用App Installer去安装，那个软件就是个残废。一定要直接在PowerShell里用Appx模块提供的安装命令部署，不管啥扩展名，msixvc、eappx、appx、appxbundle、eappxbundle啥都可以直接用这个方法安装。


## 防止自动更新

1. Service、计划任务、组策略、注册表、控制面板、设置取消自动更新
~~2. svchost.exe 限速 1kb 不让它下载更新~~不行，因为太多服务依赖于 svchost.exe


## 桌面快捷方式图标丢失变白

桌面快捷方式变成白色图标是由于缓存文件的问题导致，删除 `C:\Users\你的用户名\AppData\Local\IconCache.db` 然后在任务管理器中重启「文件管理器」即可。

## fix SMB auth failed due to Windows Hello

[关于Windows Hello导致的SMB共享验证失败 – Snow Star 博客](https://snowstar.org/2021/07/12/%E5%85%B3%E4%BA%8Ewindows-hello%E5%AF%BC%E8%87%B4%E7%9A%84smb%E5%85%B1%E4%BA%AB%E9%AA%8C%E8%AF%81%E5%A4%B1%E8%B4%A5/)

[When using Windows Hello PIN, how to connect shared folders via SMB protocol on Android? - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/1190726/when-using-windows-hello-pin-how-to-connect-shared)

## fix WiFi 连接了但上不了网

Windows wifi 问题破案了：切换 wifi 后，DHCP 没生效，Settings 界面显示 DHCP，但实际上 WLAN 网卡设置没改，还是静态 IP。解决办法，手动修改 WLAN 网卡的 IPv4 设置，开启 DHCP

## fix The Application Was Unable to Start (0xc000007b)

[Fix "The Application Was Unable to Start (0xc000007b)" in Windows](https://www.diskgenius.com/how-to/fix-error-code-0xc000007b.php)

- 没有明确解决方案，只能尝试
    - Reinstall application
    - Run as administrator
    - Install/Repair .NET Framework
    - Update DirectX
    - Reinstall VC++ lib

## 隐藏 用户 in 登录界面

- References
    - [在 Windows 上隔离 app：以百度云管家为例](https://geelaw.blog/entries/isolate-app/)

