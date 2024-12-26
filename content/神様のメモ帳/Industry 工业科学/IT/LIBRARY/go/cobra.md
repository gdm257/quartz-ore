---
tags:
  - flag/LANGUAGE/Go
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
go: github.com/spf13/cobra@latest
---

- Description
    - cobra 是一个 [[Go|Go]] 命令行解析库
    - cobra 支持 命令别名
    - cobra 依旧半自动解析，目录结构是很由雅了，但复用方面我还没找到具体做法，rclone 命令行初始化代码有点复杂不好看懂
    - `APPNAME COMMAND ARG --FLAG`
        - `Commands` 命令
        - `Args`
        - `Flags`
        - 很好，完美的 POSIX 命令行风格

```go
import "github.com/spf13/cobra"

cobra.Command{
    Use: string,
    Short: string,
    Long: string,
    Run: func,
        // Command.Execute() 会调用
    PersistentPostRun: func
    // Command 用于创建「命令」
    // 对标 Python argparse 的 ArguementParser 类
    // 对标 Python plumbum.cli 的 Application 类

    Execute()
        // 运行入口
}



```
