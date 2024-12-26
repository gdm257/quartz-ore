---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[sys.argv --- 系统相关的参数和函数 — Python 3.10.5 文档](https://docs.python.org/zh-cn/3/library/sys.html#sys.argv)

> [!tldr]
> 请用 `plumbum.cli`


```python

【通用の选项参数の定义 --param】

1. __init__() の入参（如果有默认值就是可选，否则必选）


【子命令の选项参数の定义】

1. func の入参（如果有默认值就是可选，否则必选）


【子命令の位置参数の定义 subcommand <position_value>】

1. func の入参（如果有默认值就是可选，否则必选）



PS:
入参名的下划线 "_" 在命令行可以写成减号 "-"，例如 `__init__(self, log_file)` 在命令行中用 `--log-file` 指定。

PPS:
普通方法中定义的入参，在命令行中即可以是位置参数，也可以是选项参数。

PPS:
如果在命令行中，指定了选项但没有赋值，例如指定了 `--debug` 但后边没有跟着值，那么 fire 会将 `debug` 自动赋值为 `True`，即便在函数入参那里有默认值，也会改成 `True` 传入。所以一个 Option 既可以当成 --flag 也可当作有值的 --param

PPS:
fire 支持在入参中使用 `*args` 和 `**kw`。
def subcommand01(*args, **kw): pass    # CLI: python xxx.py subcommand01 args_value01 args_value02 args_value03 args_valueXX
def subcommand01(**kw): pass    # CLI: python xxx.py subcommand01 --unknown_option_01 999 --unknown_option_02 999 --unknown_option_03 233

PPS:
通过分隔符 - 可显式告知分隔符后的为子命令，而非命令的位置参数。
python example.py subcommand01 a b c - subcommand_of_subcommand01

PPS:
- `command -- --help` 列出详细的帮助信息
- `command -- --interactive` 进入交互式模式
- `command -- --completion [shell]` 生成 CLI 程序的自动补全脚本，以支持自动补全
- `command -- --trace` 获取命令的 Fire 追踪以了解调用 Fire 后究竟发生了什么
- `command -- --verbose` 获取包含私有成员在内的详情
- command --help    列出 flags
- command -h    列出 flags
- command -- --help    列出 flags
- command    列出子命令
- command - --help    列出子命令
- command <subcommand> -h    子命令帮助

PPS:
import fire
fire.Fire(lambda obj: type(obj).__name__)
$ python example.py 10
int
$ python example.py 10.0
float
$ python example.py hello
str
$ python example.py '(1,2)'
tuple
$ python example.py [1,2]
list
$ python example.py True
bool
$ python example.py {name: David}
dict
【数字】
$ python example.py 10
int
# 没有对引号处理，仍然是数字10
$ python example.py "10"
int
# 把引号引起来，所以是字符串“10”
$ python example.py '"10"'
str
# 另一种把引号引起来的形式
$ python example.py "'10'"
str
# 转义引号
$ python example.py \"10\"
str

"【字典】
# 推荐做法
$ python example.py '{"name": "David Bieber"}'
dict
# 也是可以的
$ python example.py {"name":'"David Bieber"'}
dict
# 错误，会被解析为字符串
$ python example.py {"name":"David Bieber"}
str
# 错误，不会作为单个参数（因为中间有空格），报错
$ python example.py {"name": "David Bieber"}
<error>











def sub01():
    print('sub01.')


def get_sub01_func():
    return sub01


class FireLearn:

    # list02 = sub01()  # 不推荐，不该作为子命令，因为一定会执行

    # 构造函数
    # 实例属性，可行（和闭包差不多）
    def __init__(self):
        self.list = sub01
        # self.list05 = sub01()  # 不推荐，不该作为子命令，因为一定会执行

    # 闭包，可行（和实例属性差不多）
    def list03(self):
        return sub01

    # 返回值为闭包函数（闭包函数的闭包），可行
    def list06(self):
        return get_sub01_func

    # 闭包^3，可行，目测 闭包^n 也可行
    def list07(self):
        def third_func():
            return self.list06

        return third_func

    # 其实就是普通方法，可行
    def list04(self):
        sub01()


```
