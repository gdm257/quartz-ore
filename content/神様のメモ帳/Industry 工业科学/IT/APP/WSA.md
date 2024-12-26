---
aliases:
  - Windows Subsystem Android
tags:
  - flag/Platform/Windows独占
  - flag/APP/Layer
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
---

[MustardChef/WSABuilds: Run Windows Subsystem For Android on your Windows 10 and Windows 11 PC using prebuilt binaries with Google Play Store (OpenGApps/ MindTheGapps) and/or Magisk or KernelSU (root solutions) built in.](https://github.com/MustardChef/WSABuilds)

[LSPosed/MagiskOnWSALocal: Integrate Magisk root and Google Apps into WSA (Windows Subsystem for Android)](https://github.com/LSPosed/MagiskOnWSALocal)

[cinit/WSAPatch: Make WSA(Windows Subsystem for Android) run on Windows 10.](https://github.com/cinit/WSAPatch)

[Question - Windows Subsystem for Android (WSA) for windows 10 (&11) (ANDROID 13) | XDA Forums](https://forum.xda-developers.com/t/windows-subsystem-for-android-wsa-for-windows-10-11-android-13.4533165/)

[Paving-Base/APK-Installer: An Android Application Installer for Windows](https://github.com/Paving-Base/APK-Installer)

[weareblahs/WSAUtilities: CLI-based toolbox for Windows Subsystem for Android. Includes installation of APKs, installation of WSA, and diagnostics.](https://github.com/weareblahs/WSAUtilities)


0. Windows 系统版本更新到至少 2311；Windows 启用虚拟机相关功能；Windows 设置启用开发者模式；BIOS 开启虚拟化
1. 在 WSL 里运行 MagiskOnWSALocal 脚本，得到集成了 Magisk 的 WSA AppX 包
2. 按照 WSAPatch 的要求修改 WSA AppX 包
3. 安装 WSA AppX 包

> [!tips]
> 对于小白，完全可以下载别人打包修改好的 WSA AppX 包，安装就能直接使用

> [!tip]
> 首选 [WSABuilds](https://github.com/MustardChef/WSABuilds)，更新起来也方便

> [!note]
> 实际动手操作过后，其实并不复杂，对于程序员来说，非常容易理解（除了 AppX 本身，这玩意大多数程序员都不熟），毕竟本质就是安装了个名为 WSA 的软件


```
// Magisk
C:\Users\11\AppData\Local\Microsoft\WindowsApps\MicrosoftCorporationII.WindowsSubsystemForAndroid_8wekyb3d8bbwe\WsaClient.exe /launch wsa://com.topjohnwu.magisk

// Play Store
C:\Users\11\AppData\Local\Microsoft\WindowsApps\MicrosoftCorporationII.WindowsSubsystemForAndroid_8wekyb3d8bbwe\WsaClient.exe /launch wsa://com.android.vending

// Pure Writer
C:\Users\11\AppData\Local\Microsoft\WindowsApps\MicrosoftCorporationII.WindowsSubsystemForAndroid_8wekyb3d8bbwe\WsaClient.exe /launch wsa://com.drakeet.purewriter
```
