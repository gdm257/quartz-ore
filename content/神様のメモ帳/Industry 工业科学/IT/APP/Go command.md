---
tags:
  - flag/LANGUAGE/Go
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Runtime/MachineILCodeGenerator
  - flag/APP/DevOps/PackageManagement
  - flag/APP/DevOps/Linter
  - flag/APP/DevOps/Formatter
  - flag/APP/DevOps/Testing
  - flag/APP/DevOps/Docs
aliases:
  - command
go: command
---

[Go 命令教程](https://hyper0x.github.io/go_command_tutorial/#/)


```bash
go command
Usage:
    go <command> [args]

Examples:
    go env    查看 go 配置

Subcommands:
    help [command|topic]
    version

    # 项目管理
    mod <command> [args]
        init <module-name>    创建 go.mod
        graph    查看依赖关系图
        tidy    解析你的代码，整理 go.mod，自动添加、移除依赖项
        edit -fmt    格式化 go.mod
        edit -require=<module>    手动添加依赖项（用的少）
        edit -droprequire=<module>    手动移除依赖项（用的少）
        download    安装依赖到 $GOPATH/pkg/mod
    build    编译生成机器码
    run    编译并运行，相当于 python xxx.py
    test    单元测试
    doc
    fmt

    # 全局管理
    install <pkgs>    相当于 pip install，拿来安装 app
    env

Configuration:
    * GOENV    Go 配置文件路径
    * GOROOT    Go 安装路径，对标 JDK 路径
    * GO111MODULE
        - on    无脑选 on，否则没法用 go.mod
        - off
        - auto
    * GOPATH
        - 指定一个目录用来安装依赖，对标 node_modules，默认 ~/go
        - $GOPATH/pkg/mod
            - 作为 go install 依赖安装目录
            - 作为 go mod download 依赖安装目录
            - 提供 go build 所需的依赖
            - 提供 IDE 提示所需的依赖
        - $GOPATH/bin
            - 作为 go install 软件安装目录
        - $GOPATH/src    过时的历史遗留，不应该使用，甚至不应该存在
    * GOBIN    directory where 'go install' use
    * GOPROXY    go module 代理服务器地址，对标 pypi 源
    - Go 环境（Go Environment）应该叫 Go 配置才更贴切，对标 Python 配置

```
