---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[argparse 的高级用法 | Frost's Blog](https://frostming.com/2021/11-23/advanced-argparse/)

[argparse --- 命令行选项、参数和子命令解析器 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/library/argparse.html)

> [!tldr]
> 请用 `plumbum.cli`


```python
argparse standard library
Description:
    * argparse 唯一可用的 Python 命令行解析标准库，其他标准库不维护了.
    * ~~argparse 是我目前唯一满意的 cli 解析库.~~
    * plumbum.cli 目前最接近完美的 cli 解析库.

API:
    from argparse import ArgumentParser, Namespace, Action
    from typing import List, Type, Callable

    .ArgumentError
    .ArgumentTypeError

    .ArgumentParser
        .__init__()
            parents: List[ArgumentParser]
                * 继承其他解析器的参数.
                * 一般用于批量添加通用参数.
            add_help: bool = True
                * 自动为解析器添加 -h/--help 选项
        .add_arguement(*name_or_flags)
            *name_or_flags
                * 参数名.
                * str
                * 无 "-" 前缀，为 位置参数，即常说的 argument.
                * 有 "-" 前缀，为 选项参数，即常说的 option/flag.
            dest
                * 参数别名.
                * str
                * 可用作 subcommand 别名.
                * 可用作 option/flag 别名.
                * parse_args() 时会解析到 Namespace 的同名属性.
            required: bool = False
                * 必须参数/可选参数.
            choices
                * 参数值多选一.
            nargs
                * 可以指定多少个参数值.
            type
                * 参数值の数据类型.
                * Union[type, Callable]
                * 解析时，自动隐式类型转换.
            default
                * 默认参数值.
            help
                * 帮助文档.
            version
                * 软件版本号.
            action
                * 当参数在命令行中出现时使用的动作基本类型.
                * Union[str, Type[Action], Callable]
                * 'help'
                * 'version'
                * 'store'
                * 'store_const'
                * 'store_true' 或 'store_false'
                * 'append'
                * 'append_const'
                * 'extend'
                * 'count'
                * 大多数动作只是向 parse_args() 返回的对象上添加属性.
                * Action 自定义动作.
                * Action 子类或实现相同接口的可调用对象来指定任意操作.
            metavar
        .add_argument_group()
            .add_argument()
            * 用于给参数分类，而不是一股脑的添加进 parser.
        .add_mutually_exclusive_group()
            .add_argument()
            * 互斥参数组.
            * 用于给参数分类且组内互斥，而不是一股脑的添加进 parser.
        .add_subparsers()
            .add_parser(name) -> ArgumentParser
                name: str
                    * 子命令名称.
                **kwargs: Any
                    * 会传递给 ArgumentParser()
        .set_defaults(**kw)
            * 修改 Namespace 默认值.
            * 传递给 Namespace()
        .parse_args() -> Namespace
            args=None
                * List[str]
                * 要解析的字符串列表.
                * 默认值是从 sys.argv 获取.
            namespace=None
                * argparse.Namespace
                * 将解析结果放入指定 Namespace 对象.
                * 默认值是一个新的空 Namespace 对象.
            * 解析到未知的参数会报错.
        .parse_known_args()
            * 解析到未知的参数不会报错，只解析已知的参数.
    .Namespace
        .__init__(**kw)
            * 初始化 Namespace，写入默认值.
            * 参数对会自动保存为同名的实例属性.
        * 单纯以属性的方式存放值，几乎就是个空类.
        * 用来存放解析结果.
    .Action
        .__call__(self, parser, namespace, values, option_string=None)
            * 必须重载.
        .__init__(self, option_strings, dest, nargs=None, **kwargs)
            * 可选重载.
            * 必须接受两个位置参数 option_strings, dest
            * 及传给 add_argument() 的任何关键字参数，除了 action 本身

```