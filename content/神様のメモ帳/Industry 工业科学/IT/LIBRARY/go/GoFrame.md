---
aliases:
  - gf
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Go
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: gogf/gf
---

## Brief

- Idea
    - Full features web framework

- Configuration
    - [工程目录设计 - GoFrame (ZH)-Latest - GoFrame官网 - 类似PHP-Laravel, Java-SpringBoot的Go企业级开发框架](https://goframe.org/pages/viewpage.action?pageId=30740166)

- Philosophy
    - [框架设计 - GoFrame (ZH)-Latest - GoFrame官网 - 类似PHP-Laravel, Java-SpringBoot的Go企业级开发框架](https://goframe.org/pages/viewpage.action?pageId=3672399)

- Objects
    - [关于GoFrame框架中Context相关梳理及实例\_goframe 上下文\_皛心的博客-CSDN博客](https://blog.csdn.net/m0_47670683/article/details/119367800)

- Architecture
    - ![三层架构设计与框架代码分层映射关系](https://goframe.org/download/attachments/30740166/image2022-1-18_0-47-31.png?version=1&modificationDate=1642437918159&api=v2)
    - ![工程目录设计](https://goframe.org/download/attachments/30740166/image2022-6-22_16-2-37.png?version=1&modificationDate=1655884751621&api=v2)

- Pro
    - 由雅！良心！全面！
    - 文档齐全，说明贴心，全中文
    - ORM
        - 完全没有硬编码，包括 Query。独有的杀手锏
    - 简单易懂
        - 看了一圈 web frameworks，再看 [[GoFrame]] 真的觉得属于朴实无华、简单易懂的级别了，[[GoFrame]] 只不过是 project structure 进行分层处理

- Con
    - CLI 完全不合格
        - Position Argument 采用硬编码
        - Option 采用硬编码
        - Flag 采用硬编码
        - 只有 Subcommand 才能明确定义、通过字段读取
        - 不支持 Argument Group
        - 不支持 Argument Reuse
        - 当然，你可以自行重写入口 `main.go`，换成 [[cobra]] 之类的
