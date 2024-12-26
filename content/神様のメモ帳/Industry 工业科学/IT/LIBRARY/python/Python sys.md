---
aliases:
- sys
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/OS_API
- flag/Library/APILayer/Implement__/CLI/Process
- flag/Library/BusinessLogicLayer/Implement__/Exception
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Namespace
---

[你的 Python 包都装到哪了？ | Frost's Blog](https://frostming.com/2019/03-13/where-do-your-packages-go/)


```python
sys standard library
API:
    sys.path: List[str]
        * 包搜索路径列表.
        * Python 启动时会初始化 sys.path
            - 追加
                - python -m <module> 追加 cwd、模块所在目录.
                - python <xxx.py> 追加 文件所在目录.
                - REPL 追加 cwd.
            - 追加 PYTHONPATH.
            - 追加 site-packages 第三方库路径.
        * 可随意修改，sys.path.append('/path/to/lib')
    sys.prefix: str
        * $path_prefix
        * prefix/lib 标准库路径
        * prefix/site-packages 第三方库路径 Windows
        * prefix/lib/pythonX.Y/site-packages 第三方库路径 *nix
        * pip 默认安装路径前缀.
    sys.exec_prefix

Environments:
    PYTHONPATH
        * 自定义包搜索路径.
        * 多个目录，用分隔符隔开，*nix 用 `:`，Windows 用 `;`
        * 虚拟环境、PEP 582 就靠 PYTHONPATH 才能导入第三方库.
        * 不建议添加 site-packages 路径，防止 Python 版本不兼容.

```

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description

[notes-python/05.01-overview-of-the-sys-module.ipynb at master · lijin-THU/notes-python](https://github.com/lijin-THU/notes-python/blob/master/05-advanced-python/05.01-overview-of-the-sys-module.ipynb)

[Python exit的原理 - 知乎](https://zhuanlan.zhihu.com/p/388475086)


```python

API:
    sys.stdin
        * 可当作一个已打开的文件来使用.
    sys.stdout
        * 可当作一个已打开的文件来使用.
    sys.stderr
        * 可当作一个已打开的文件来使用.
    sys.executable
        * 当前使用的 Python 解释器路径.
    sys.argv[0]
        * full name of the located module    python -m
        * "-c"    python -c
        * "-"    stdin
    sys.ps1 = ">>>"
        * REPL prompt 提示符.
    sys.ps2 = "..."


```

## API

### `sys.exit()`

- Idea
    * `raise SystemExit`
    * `SystemExit` 不应被捕获，社区约定俗成
