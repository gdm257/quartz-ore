---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[argparse 的高级用法 | Frost's Blog](https://frostming.com/2021/11-23/advanced-argparse/)

[lebrice/SimpleParsing: Simple, Elegant, Typed Argument Parsing with argparse](https://github.com/lebrice/SimpleParsing)

[Support for Positional Arguments by haydenflinner · Pull Request #91 · lebrice/SimpleParsing](https://github.com/lebrice/SimpleParsing/pull/91)

[Support for subparser aliases · Issue #58 · lebrice/SimpleParsing](https://github.com/lebrice/SimpleParsing/issues/58)

[Allow parsing multiple nested sub commands · Issue #130 · lebrice/SimpleParsing](https://github.com/lebrice/SimpleParsing/issues/130)

> [!tldr]
> 请用 `plumbum.cli`


```python
simple-parsing 对 argparse 的封装相对不错，但是，明显不完美，属于较厚的封装，缺失了许多功能。我能看出来，simple-parsing 已经不适合我了。

# pip install simple-parsing
我试了下，位置参数、参数值多选一（枚举）都有 bug，因此目前继续 argparse
simple-parsing 是 argparse 的封装，非常棒，虽然灵活性、功能比不过原版；
simple-parsing 比 click、fire 顺手多了；
simple-parsing 提供了 subparsers() 来实现 subcommands，每个子命令可用独立的 dataclass 类来定义；
继承 dataclass 类，可以实现复用选项组；
simple-parsing 不支持使用 dataclass 来实现互斥选项组；
simple-parsing 不支持的功能可以直接使用 argparse 的 API，例如互斥选项组；


from simple_parsing import ArgumentParser



```
