---
tags:
- flag/License/Apache
- flag/LANGUAGE/Java
- flag/LANGUAGE/Kotlin
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/PackageManagement
- flag/APP/DevOps/Runtime/IL_Builder
scoop: maven
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea
    - [[Java|Java]] 包管理器
    - 对标 [[npm]] [[pip]] [[poetry]] [[pdm]]

- Configuration
    - `pom.xml`
        - 完全是手动维护，相比 [[npm]] [[poetry]] [[pdm]] 确实很麻烦
    - [Maven基础 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1252599548343744/1255945359327200)
    - [Maven 继承 - 知乎](https://zhuanlan.zhihu.com/p/506004991)

- Data
    - `~/.m2`
        - 本地仓库
        - 对标 [[Go|Go]] 的 `~/go`
        - 对标 [[JavaScript|JS]] 的 `node_modules`
        - 支持 多版本共存，解决钻石依赖

- Examples

- Users

- Author

- GUI

- CLI
    - `mvn <subcommand> [args]`
        - `mvn clean`
        - `mvn compile`
        - `mvn test`
        - `mvn package`
        - `mvn install`
        - `mvn deplay`
            - 对标 [[pdm]] publish

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem
    - [Maven Central Repository 中央仓库](https://search.maven.org/) 对标 PyPi

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
