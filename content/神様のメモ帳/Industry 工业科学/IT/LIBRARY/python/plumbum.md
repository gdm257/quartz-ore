---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - flag/Library/APILayer/Implement__/CLI/Process
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: tomerfiliba/plumbum
pip: plumbum
---

## Brief

- References
    - [Plumbum](https://plumbum.readthedocs.io/en/latest/)

- Idea
    - plumbum.cli == [[argparse]]
    - plumbum.machines.local == [[Python subprocess]]
    - plumbum.colors == `colorful`
    - plumbum.typed_env == [[Python os|os.environ]]
    - plumbum.utils == [[cp]] [[mv]] [[rm]] [[xdg-open]]

- Fundamentals
    - plumbum.cli 底层是 [[Python subprocess]]

- Pro
    - ~~目前最完美的命令行解析库~~（[[typer]] 更完美）
    - ~~唯二~~直接支持参数复用的库，其他还有 [[argparse]] [[typer]]
    * plumbum 支持 外部命令、管道、重定向、前后台任务.
    * plumbum 支持 在远程服务器执行命令 via SSH.
    * plumbum 理论上完全可以取代 [[Bash|Bash]] 脚本.
    * plumbum.colors 支持 输出彩色文本，对标 colorful 库.
    * plumbum.colors 可以但没必要，推荐 [[rich]].
    * plumbum.typed_env 支持 环境变量解析与修改.
    * plumbum.typed_env 一点也不好用，不推荐，还不如直接 [[Python os|os.environ]]
    * plumbum.cli 支持 命令行参数解析，对标 [[argparse]]/[[Python click]].
    * plumbum.cli 封装了 [[argparse]]，看了下，非常 DRY.
    * plumbum.cli 完美取代 [[argparse]].
    * plumbum 抽象设计优秀，源码读起来真是享受，值得学习.

- Con
    - 「option」必须在 Application 类中定义，即侵入式的。略微不由雅，唯一的短板，不过 99% 情况下都不成问题，包括撸个 [[docker command|docker 命令]]

## plumbum.machines

```python
API:
    plumbum
        .local: LocalMachine
        .FG
            * 前台命令.
        .BG
            * 后台命令.
        NOHUP
        TEE
    plumbum.machines.local
        .LocalMachine
            .cmd
                .__getattr__() -> plumbum.machines.local.LocalCommand
                * 一个实例，__getattr__ 是唯一用法，因此类是什么不重要.
                * 其类非常简单，只实现了 __init__ 和 __getattr__.
            .path() -> plumbum.path.local.LocalPath
                * 获取路径对象.
            .cwd -> plumbum.path.local.LocalWorkdir
                * 当前工作目录.
                * 委托给 non-data descriptor.
            .env: plumbum.machines.local.LocalEnv
                * 环境变量.
            .env.home -> plumbum.machines.local.LocalEnv
                * 家目录.
                * 委托给 non-data descriptor.
            * 比 subprocess 强太多了.
            * plumbum.machines.base.BaseMachine の子类.
        .LocalCommand
            (*args, **kw) -> str
                * 传参、执行、返回 stdout.
                * 底层是 subprocess.Popen，详见 PlumbumLocalPopen.
            * 代表 PATH 里的同名命令.
            * plumbum.commands.base.BaseCommand の后代.
        .PlumbumLocalPopen
            * plumbum.commands.base.BaseCommand.__call__ 的具体实现.
            * 底层是 subprocess.Popen.
        .LocalEnv
            .home -> plumbum.machines.local.LocalEnv
                * 家目录.
                * 委托给 non-data descriptor.
            * 本地机器の环境.
            * plumbum.machines.env.BaseEnv の后代.
    plumbum.machines.remote
        .BaseRemoteMachine
        .RemoteCommand
        .RemoteEnv
    plumbum.machines.env
        .BaseEnv
            * 环境，包括但不限于环境变量.
    plumbum.commands.base
        .BaseCommand
            .run(*args, **kw) -> exit_code, stdout, stderr
                *args: str
                retcode: Optional[int]
                    * 期望的退出状态码.
                    * Exit Code 不匹配才抛出异常 ProcessExecutionError.
                    * E.g.
                    * retcode = 0
                    * retcode = None    接受任何退出状态码
                timeout
                    * in seconds.
                    * None 代表永不超时.
                **kw
                    * 传递给 Popen().
                    * 底层记得是 subprocess.Popen()
                ->
                exit_code
                stdout
                    * 如果实参指定了 stdout，返回空字符串 ''.
                stderr
                    * 如果实参指定了 stderr，返回空字符串 ''.
                * 传参、运行、返回结果.
            .popen() -> Popen-like
                args: Iterable[str] = tuple()
                **kw
                    * 传递给 Popen().
                * 后台执行任务，立刻返回.
                * 创建任务、执行任务，非阻塞不等待.
            (*args) -> str
                *args: str
                retcode: Optional[int]
                    * 期望的退出状态码.
                    * Exit Code 不匹配则抛出异常 ProcessExecutionError.
                    * E.g.
                    * retcode = 0
                    * retcode = None    接受任何退出状态码
                * 传参、运行、返回 stdout.
                * 未实现，具体实现看各子类，目测都是 subprocess.Popen.
            [*args] -> BoundCommand
                *args: str
                | cmd.__getattr__ -> Pipeline
                    * 将管道进行封装.
                * 添加参数.
            | cmd.__getattr__ -> Pipeline
                * 管道.
            < stdin
                stdin
                    * E.g. sys.stdin
                * 输入重定向.
            << s
                s: str
                * 输入重定向.
            > file
                file: str
                * 输出重定向.
            .with_cwd(path) -> BoundEnvCommand
                * 指定命令运行时的 cwd.
                * 线程安全.
            * 单个命令.
            * 推荐一律注解为返回 BaseCommand，满足多态.
        .BoundEnvCommand
            * 带指定环境の命令行.
            * plumbum.commands.base.BaseCommand の后代.
        .BoundCommand
            [str] -> BoundCommand
            | cmd.__getattr__ -> Pipeline
                * 将管道进行封装.
            * 带参数の命令行.
            * plumbum.commands.base.BaseCommand の后代.
        .Pipeline
            () -> str    运行
            | cmd.__getattr__ -> Pipeline
                * 相连的管道の封装.
            * 管道命令.
            * BaseCommand 的后代类.
    plumbum.path.base
        .Path
            / path -> 一般是子类の实例
                path: str
                * 抽象方法.
            * API 类似 pathlib.Path
    plumbum.path.local
        .LocalPath
            / path -> LocalPath
                path: str
            * plumbum.path.base.Path 的子类.
        .LocalWorkdir
            (newdir) -> ContextManager
                newdir
                    * 目测可以用 pathlib.Path
                * with 进入时修改 local 的 cwd，在指定目录执行命令.
                * with 退出时恢复原 cwd.
                * 线程不安全.
            * 当前工作目录.
            * plumbum.path.base.Path の后代.
            * plumbum.path.local.LocalPath の子类.
    plumbum.path.remote
        .RemotePath
            * plumbum.path.base.Path 的子类.
        .RemoteWorkdir
            * plumbum.path.base.Path 的后代.
            * plumbum.path.remote.RemotePath の子类.
```

## plumbum.cli

[用 Plumbum 开发 Python 命令行工具](https://mp.weixin.qq.com/s/u2DFBD9h8XPokWeHudlBng)

[Plumbum: Shell Combinators and More — Plumbum: Shell Combinators](https://plumbum.readthedocs.io/en/latest/)

[使用Python的Plumbum库创建你自己的CLI工具箱 · Kahn's blogs](https://kahnsen.github.io/kahnblog/2018/07/06/%E4%BD%BF%E7%94%A8Python%E5%88%9B%E5%BB%BA%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84CLI%E5%B7%A5%E5%85%B7%E7%AE%B1/)

- Alternatives
    - 请用 [[typer]]
        - 体验超越 [[plumbum]]，但没有任何功能损失，pythonic 典范！

- Con
    - 花了个把小时精读了源码，发现无法实现 `help` 命令，理论上可行，但非常复杂，别想了

- Objects
    - command
        - 根命令 或 子命令
        - 根命令 没有 父命令
        - 子命令 有 父命令
        - 任何一个命令都可通过 `@subcommand()` 变为子命令，无副作用
    - swith
        - 即命令行里常说的 option（选项），有值
    - flag
        - 即命令行里常说的 flag，无值（或者说值为 boolean）
        - 底层其实是 swith
    - tailing argument (aka arg)
        - 即 [[argparse]] 的 position argument（位置参数）
        - 单独的值，不能有 key，必须严格按照顺序填写
        - 可利用 [[Python|Python]] 的 `*` 解包实现「可变长度的位置参数」

- Usage
    - 命令行解析
        - 定义 `plumbum.cli.Application` 继承类 作为 命令
            - 定义 方法 来注册 参数
                - 可利用**多继承**来批量添加实例方法，达到「代码层面的参数分组」「参数复用」，非常由雅
        - 注入 命令类S 为 命令类P 的子命令
        - 在程序入口运行根命令 `CommandClass.run()`

### API

- Objects
    - `plumbum.cli.Application` inheritance
    - `@plumbum.cli.switch()`
    - `plumbum.cli.Flag`
    - `plumbum.cli.SwitchAttr`
    - `plumbum.cli.Set`
    - `plumbum.cli.Range`
    - `plumbum.cli.ExistingFile`
    - `plumbum.cli.ExistingDirectory`
    - `plumbum.cli.NonexistentPath`

- API - CLI Options
    - `@plumbum.cli.swith()` for `def func()`
        - `names: List[str]`
            - E.g. `['--config', '-c']`
        - `envname: str`
            - env var
        - `list: bool = False`
            * `True`: Repeatable Options
        - `argtype: T = None`
            * 参数的类型.
            * 目测有隐式转换.
        * `def func(self, <option_value>)`
        * 支持 可选选项、必选选项、可变长选项、选项组、依赖选项、互斥选项.
        * 默认为 可选选项.
        - 代表 swith，即代表 option 或 flag
        - 用法：修饰一个成员方法
        - 作用：给 command 添加
        * 代表一个「选项（option）」，一个绑定了回调函数的 option.
    - `plumbum.cli.Set`
        * E.g. `cli.switch(..., argtype=cli.Set(...))` 多选一参数
    - `plumbum.cli.Range`
        - `__init__(a, b)`
        * 整数闭区间 (a, b)

- API - CLI Commands
    - `plumbum.cli.Application` inheritance
        - Brief
            - Attributes
                - `def run()`
                - `def main()`
                - `nested_command: cli.Application`
                - `def <cli_option_callback>()` with `@cli.switch()`
                - `<cli_option_property>: `
                    - `plumbum.cli.Flag`
                    - `plumbum.cli.SwitchAttr`
                    - `plumbum.cli.Set`
                    - `plumbum.cli.Range`
                    - `plumbum.cli.ExistingFile`
                    - `plumbum.cli.ExistingDirectory`
                    - `plumbum.cli.NonexistentPath`
            - Decorators
                - `@classmethod .subcommand()`
            - 代表 根命令 或 子命令
            - 创建一个类并基础 Application 即可定义一个 Command
        - `.run()`
            - 调用该命令的入口
                - 解析 sys.argv
                - 验证 swithes，未知 swith 会报错
                - 验证 position args，未知 arg 会报错
                - 回调 switch 的对应 method
                - 回调 main()
                - 回调 子命令的 main()，没错，自动递归了
        - `@override`
          `.main(self[, pos01, pos02, ..., *pos_args])`
            - `*args`
                - ONLY position args for THIS command
                - NOT containing position args for subcommand
                - NOT containing flags
                - NOT containing options and values
            - 用于处理 position arguments 的函数
            - 要么非常空，恨不得直接 return 0
                - E.g. 一般有多个 subcommands，真正的代码都封装到 subcommand.main 了
                - E.g. 一般不会有 position arg(s)
            - 要么成为 command 的核心，真正开始调用 业务逻辑层
                - E.g. 一般不会有 subcommand
                - E.g. 可以有 position arg(s)
        - `@classmethod`
          `@subcommand()`
            - 任何命令都可被 `@subcommand()` 变为子命令，无副作用
            - 修饰 一个子命令类
        - `.nested_command`
            - 代表 一个即将被调用的 subcommand
            - 如果不为空，说明 sys.argv 调用了 subcommand

## plumbum.colors

## plumbum.typed_env

> [!tldr]
> 别用，不好用


```python
from plumbum.typed_env import TypedEnv

TypedEnv
    .__init__()
    .__getattr__(name)
        name: str
        * 读取环境变量.
        * 环境变量不存在则抛出 AttributeError.
    .__setattr__(name, value)
        * 修改环境变量，写入 os.environ
        * 试了下，根本没法用.


```

## plumbum.utils

```python
from plumbum.utils import copy, move, delete, open_gui

copy(src, dst)
    * 支持 远程路径与本地路径混合使用.
move(src, dst)
delete(*paths)
    *paths: str | Path
open_gui(path)
    * 没什么用.
    * Opens a file in the default editor.
    * os.startfile if available (Windows)
    * xdg_open (GNU)
    * open (Mac)
```
