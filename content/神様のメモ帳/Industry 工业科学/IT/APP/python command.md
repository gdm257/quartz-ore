---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/APP/Command/TUI
  - flag/APP/Shell
  - flag/APP/Shell/Implement__/Shell
  - flag/APP/DevOps/Runtime/ManagedRuntime_VM_Interpreter_Compiler
  - flag/LANGUAGE/Python
aliases:
  - CPython
---

## Fundamentals

- References
    - [zpoint/CPython-Internals: Dive into CPython internals, trying to illustrate every detail of CPython implementation](https://github.com/zpoint/CPython-Internals)

- Objects
    - Python compiler
        - convert python code to bytecode
    - Python virtual machine
        - execute bytecode
    - Python interpreter
        - interpreter == Compiler +  VM

## Version

- Version
    * Python 3.8 是最后一个支持 Win7 的版本

## Configuration

- Environment
    * `PYTHONSTARTUP`
        - 对标 [[Bash]] 的 `~/.profile`
        - 仅在交互式会话生效
    * `PYTHONPATH`
        - Augment the default search path for module files.
        - Python 模块搜索路径
        - 可指定多个路径，用 `:` 或 `;` 分隔
        - Python 启动时会自动将路径追加进 `sys.path`
        - `__import__()` 会使用 `sys.path`

## TUI

- Shortcuts
    - `Ctrl D` (\*nix)
    - `Ctrl Z` (win)
        * 键入 EOF 字符
        * REPL 通过执行 EOF 字符，或者 `quit()` 来退出

## CLI

[1. Command line and environment — Python 3.11.1 documentation](https://docs.python.org/3/using/cmdline.html)

```bash
python command
Usage:
    python [options] <file>
    python [options] -
        * stdin
        * sys.argv[0] 为 '-'
    python [options] -m <module-name>
        * 从 sys.path 找到指定 module 并执行.
        * 对于 .py 文件，会直接执行该文件.
        * 对于 package，会执行其 __main__ submodule.
        * sys.argv[0] 为模块的完整路径
    python [options] -c <code-string>
        * sys.argv[0] 为 '-c'.
    python [options]

Examples:
    python --version
    python --help
    python --help-env
    python --help-xoptions
    python --help-all

    python main.py
    python __pycache__/a.cpython-311.pyc
    python -m main
    python -m pip --version
    python -c "print('Hello World')"
    python -c "import sys; print(f'{sys.argv[0]}')"
    python

Options:
    -h --help
    -V --version
    -v --verbose
    -B    don''t write .pyc files on import
    -E    ignore PYTHON* environment variables (such as PYTHONPATH)
    -S    初始化时不导入 site
    -d    debug output
    -O    removes assert statements
    -OO    removes assert statements and doc strings
```

## Con

### 逆向

[私有部署如何避免代码泄露？如何限制服务有效期？ - V2EX](https://www.v2ex.com/t/807464)

[不可区分混淆 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/zh-hans/%E4%B8%8D%E5%8F%AF%E5%8D%80%E5%88%86%E6%B7%B7%E6%B7%86)

[几乎无解的最强加密方法，终于被证实真的存在 | 论文频道 | 领研网](https://www.linkresearcher.com/theses/13fb909d-1062-43c6-a23e-352d4cb6f4cf)

[代码混淆——福音还是噩梦？](https://www.changhai.org/articles/technology/misc/obfuscation.php)

现在都是不在客户端做严格的防护了，而是把部分功能对接你的云端服务器，通过控制服务的可用性来操控客户端的客户端。。。

客户端太难防备了。

既然你都启动时校验授权了，那么 python 可以直接从远端 zip 进行 import 。源代码根本都不用落盘。

代码混淆的现状跟密码学有点像，数学上尚未找到完美的加密算法（混淆方式），但实际也没有那么悲观。例如目前的人类基本无法破解非对称加密（无法从二进制逆向出完整源码），加密与破解，逆向与混淆，这场攻防战在可见的未来都不会停歇，只会随着理论的发展、硬件的迭代不断变化，最终呈现出螺旋式的进程
