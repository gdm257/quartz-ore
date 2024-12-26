---
aliases:
  - 事件查看器
tags:
  - flag/License/Proprietary
  - flag/Platform/Windows独占
  - flag/APP/Process
  - flag/APP/Kernel
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
---

## Brief

- References
    - [奇安信攻防社区-Windows日志总结](https://forum.butian.net/share/355)

    - [闲聊Windows系统日志-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1170984)

    - [第1篇:Window日志分析 · 应急响应实战笔记](https://bypass007.github.io/Emergency-Response-Notes/LogAnalysis/%E7%AC%AC1%E7%AF%87%EF%BC%9AWindow%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90.html)

- Installation
    - 

- Version
    - 

- Idea
    - 

- Configuration
    - 

- Data
    - `$env:SystemRoot/System32/winevt/Logs/`
        - `System.evtx`
        - `Security.evtx`
        - `Setup.evtx`
        - `Application.evtx`

- Examples
    - 

- Users
    - 

- UI
    - 

- CLI
    - 

- Philosophy
    - 

- Objects
    - EventLog
        - Category
            - System
            - Security
            - Setup
            - Application
                - E.g. [[winsw]]
            - Forwarded Events
        - Source
            - 一般是进程名/软件名
        - User
        - Machine
        - Date/Time
        - Level
            - `Information`
            - `Warning`
            - `Error`
            - `Success audit` 成功审核
            - `Failure audit` 失败审核
        - Keyword
        - 操作代码
        - 日志
        - EventID
            - `0`
            - `1102`
            - `4624`
            - `4625`
            - ……
    - File Format
        - evtx
        - xml
        - csv
        - txt

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 使用 Event Log 的第三方软件屈指可数，我翻来翻去，就看见 [[winsw]]、WinFsp 用了，但内容都没什么营养，[[winsw]] 还不如直接看其生成的 `.log` 文件
    - Windows Event Log 又不跨平台，活该没人用

- Test
    - 狗都不用

- Alternatives
    - 

- Description
    - 
