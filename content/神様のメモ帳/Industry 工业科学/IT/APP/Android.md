---
tags:
- flag/License/Apache
- flag/Platform/Android独占
- Label/Industry-工业科学/IT/APP/GUI/Mobile
---

## Brief

- References
    - 

- Installation
    - 

- Version
    - `minSdkVersion`
        - 代码所能使用的最高 API 等级
        - 类比 [[pyproject.toml]] 的 `requires-python` 的最低支持版本 E.g. `python>=3.7` 不能使用 `python 3.8` 才有的 API
    - `compileSdkVersion`
        - 类比 [[gcc]] 的版本
        - 编译器自带的 Android SDK 的版本
    - `targetSdkVersion`
        - 显式声明该应用最高能运行在哪个版本的 Android 系统
        - 类比 `python>=3.7` 可以声明该包能在 `python 3.11` 环境下运行
    - [一文带你读懂compileSdkVersion、minSdkVersion与targetSdkVersion | 柘个角落 | IF YOU WANT SOMETHING, GO GET IT. PERIOD.](https://lilei.pro/2020/03/16/Android-SDK-versions/)

- Idea
    - 

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- Author
    - 

- GUI
    - 

- CLI
    - 

- API
    - 

- Mobile
    - 

- DSL
    - 

- Shortcuts
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 

- Test
    - 

- Alternatives
    - 

- Description
    - 

## 加密

- References
    - [Android加密之全盘加密详解 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1720048)
    - [无惧「翻车」与换机，这些 Android 数据备份方案值得了解 - 少数派](https://sspai.com/post/54075)
    - [解密DATA分区到底有什么用？DATA解密后手机安全吗-ROM乐园官网首页](http://www.romleyuan.com/news/readnews?newsid=1808)

- Installation
    - 

- Configuration
    - 

- Data
    - 

- Usage
    1. 手机全程必须插着充电器
    2. `设置 - 安全 - 加密与凭据 - 加密手机 - 一路确认`
    3. 128 GB 大约需要半小时
    4. 

- UI
    - 

- Idea
    - Android 原生支持的 全盘加密

- Philosophy
    - 

- Objects
    - 密钥
        - 全盘对称加密所用密钥
    - 口令
        - 用于对「密钥」进行加密
        - 就是平时我们设置的锁屏密码、PIN、图案

- Fundamentals
    - 分区加密
    - 分区转换为一种专用 FS，就像 [[BitLocker]] 那样，挂载该 FS 需要额外的 Driver
    - Android 系统内置了这种 Driver
    - Android 系统的 Boot Loader 支持该 FS，因此系统分区被加密了也能正常开机

- Description
    - Android 版 [[BitLocker]]
    - Android 全盘加密缺点
        - 加密的分区只能由当前系统来挂载。因为我们不知道 Android 全盘加密所用的完整密钥，我们只是给该密钥加了一层口令（phrase），而挂载加密分区需要完整密钥
        - 技术上这是完全可以避免的，单纯是 Android 全盘加密没做好（故意不做），像 PC 上的分区加密方案如 [[BitLocker]] [[VeraCrypt]] 都是可挂载的
        - 基于上述原因，分区加密后，必须格式化相应分区，才能刷机。要么刷机丢数据，要么保留数据不刷机。换句话说，分区加密与 ROM 是强绑定关系
        - 基于上述原因，恢复模式 TWRP 无法挂载 data 分区（SD卡），这意味着无法直接卡刷（SD卡卡刷），只能OTG卡刷（U盘+OTG线），或者线刷（连电脑或另一台手机）

- Test
    - 全盘加密前安装了 Magisk，全盘加密后 Magisk 依旧能用


## 热点

火车站这种信号拥挤的地方，热点需要切换为 5 GHz 频段。因为默认频段是 2.4 GHz，用的人太多了会堵信道。



## WiFi 网络链接受限

（类）原生安卓容易出现该问题，解决办法：

方法一：设置 - 系统 - 重置选项 - 重置网络 - 然后关机重启即可

方法二：scene5 - 附加功能 - AOSP 专属功能 - 切换国内服务器或禁用网络验证服务器
