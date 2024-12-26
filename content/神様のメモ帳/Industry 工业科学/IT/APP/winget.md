---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
  - flag/APP/DevOps/PackageManagement
frontmatter-as-page:
  - winget
commands:
  - winget
---

## Brief

- References
    - [microsoft/winget-cli: Windows Package Manager CLI (aka winget)](https://github.com/microsoft/winget-cli)
    - [microsoft/winget-pkgs: The Microsoft community Windows Package Manager manifest repository](https://github.com/microsoft/winget-pkgs)
    - [Use the winget tool to install and manage applications | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
    - [Proxy options support · Issue #190 · microsoft/winget-cli](https://github.com/microsoft/winget-cli/issues/190)

- Configuration
    - `%LOCALAPPDATA%/Microsoft/WinGet/Settings/defaultState/settings.json`
    - `%LOCALAPPDATA%/Packages/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe/LocalState/settings.json`
    - [Settings](https://github.com/microsoft/winget-cli/blob/master/doc/Settings.md)
    - Source
        - `https://cdn.winget.microsoft.com/cache`
        - `https://winget.azureedge.net/cache`
        - 测试可用性
            - `https://cdn.winget.microsoft.com/cache/srouce.msix`

- Idea
    - 用命令行安装安装软件
        - EXE (with Silent and SilentWithProgress flags)
        - INNO
        - NULLSOFT
        - MSI
        - APPX
        - MSIX
        - BURN
        - PORTABLE
        - [Use the winget tool to install and manage applications | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/winget/#supported-installer-formats)

- Test
    - winget 源无法用
        - CDN 和 winget-cli 都出了问题，更新 winget-cli 即可
        - [P.S.A. Original CDN will be retired · Issue #3652 · microsoft/winget-cli](https://github.com/microsoft/winget-cli/issues/3652)
    - winget 命令无输出
        - 权限问题，莫名其妙，突然只有管理员权限才能正常运行

- Description
    - 注意安全性，winget 发布形容类似于 [[scoop]]，任何人都可以发布


## CLI

```bash
winget command
Usage:
    winget <subcommand> [args]

Subcommands:
    settings
    source
        add
        remove
        reset
        update
        list
        export

    search
    show

    install
    import
    upgrade
    uninstall

    list
    export

Options:
    -? --help
    -v --version
    --info

    --verbose --verbose-logs
    --disable-interactivity
    --wait
        - 等待用户按回车才进行下一步，方便 Debug




Elasticsearch    Elastic.Elasticsearch
Google Earth Pro    Google.EarthPro
极速PDF阅读器    Hitencent.JisuPDF
极速PDF编辑器    Hitencent.JisuPDFEditor
极速PDF转WORD    Hitencent.JisuPDFToWord
HiSuite    Huawei.HiSuite
Logitech G HUB    Logitech.GHUB
Microsoft 365 Apps for enterprise    Microsoft.Office
    Microsoft.VC++2005Redist-x64
    Microsoft.VC++2005Redist-x86
    Microsoft.VC++2008Redist-x64
    Microsoft.VC++2008Redist-x86
    Microsoft.VC++2010Redist-x64
    Microsoft.VC++2010Redist-x86
    Microsoft.VC++2012Redist-x64
    Microsoft.VC++2012Redist-x86
    Microsoft.VC++2013Redist-x64
    Microsoft.VC++2013Redist-x86
    Microsoft.VC++2015-2019Redist-x64
    Microsoft.VC++2015-2019Redist-x86
    Microsoft.VC++2015-2022Redist-x64
    Microsoft.VC++2015-2022Redist-x86
    Microsoft.VC++2015Redist-x64
    Microsoft.VC++2015Redist-x86
    Microsoft.VC++2017Redist-x64
    Microsoft.VC++2017Redist-x86
    Microsoft.VC++2019Redist-arm64
    Microsoft.VC++2022Redist-arm64
Visual Studio Community 2019
Visual Studio Enterprise 2019
Visual Studio Professional 2019
Visual Studio Community 2022
Visual Studio Enterprise 2022
Visual Studio Professional 2022
.NET Framework    Microsoft.dotNetFramework
Microsoft .NET SDK    Microsoft.dotnet
    Microsoft.dotnetRuntime.3-x64
    Microsoft.dotnetRuntime.3-x86
    Microsoft.dotnetRuntime.5-arm64
    Microsoft.dotnetRuntime.5-x64
    Microsoft.dotnetRuntime.5-x86
    Microsoft.dotnetRuntime.6-x64
    Microsoft.dotnetRuntime.6-x86
    Microsoft.dotnetUninstallTool
NVIDIA CUDA Toolkit    Nvidia.CUDA
NVIDIA GeForce Experience    Nvidia.GeForceExperience
NVIDIA PhysX System Software    Nvidia.PhysX
NVIDIA PhysX (Legacy)    Nvidia.PhysXLegacy
小狼毫輸入法    Rime.Weasel
ToDesk    Todesk.Todesk
万兴喵影    Wondershare.Filmora.CN
XMind 8    XMind.XMind.8
知云文献翻译    Yemiao.ZhiyunTranslator

```


## DSL

- References
    - [Create your package manifest | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/package/manifest?tabs=minschema%2Cversion-example)
    - [Installing a package from a local manifest (generated with wingetcreate) fails. · Issue #1064 · microsoft/winget-cli](https://github.com/microsoft/winget-cli/issues/1064)

```yaml
PackageIdentifier:  # Publisher.package format.
PackageVersion:     # Version numbering format.
PackageLocale:      # BCP 47 format (e.g. en-US)
Publisher:          # The name of the publisher.
PackageName:        # The name of the application.
License:            # The license of the application.
ShortDescription:   # The description of the application.
Installers: 
 - Architecture:    # Enumeration of supported architectures.
   InstallerType:   # Enumeration of supported installer types (exe, msi, msix, inno, wix, nullsoft, appx).
   InstallerUrl:    # Path to download installation file.
   InstallerSha256: # SHA256 calculated from installer.
ManifestType:       # The manifest file type
ManifestVersion: 1.0.0
```
