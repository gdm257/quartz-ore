---
aliases:
  - click
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[argparse 的高级用法 | Frost's Blog](https://frostming.com/2021/11-23/advanced-argparse/)

[Click命令行接口工具 | Escape](https://www.escapelife.site/posts/75801c08.html)

[API — click](https://click-docs-zh-cn.readthedocs.io/zh/latest/api.html)

[Python 命令行之旅：深入 click 之选项篇 - 知乎](https://zhuanlan.zhihu.com/p/92650388)

> [!tldr]
> 请用 [[plumbum|plumbum.cli]] 或 [[typer]]

- Pro
    - click 支持非侵入式定义「option」，[[plumbum]] 就做不到

- Con
    - 功能不如 [[argparse]] [[plumbum]] 全面
    - 参数复用难度很大

```python
我宁愿 fire，因为 fire 可以很方便的使用 Python 代码来运行程序，Debug 也很方便。

亲测不支持选项组，无法复用选项。

使用方式单一，一点也不灵活，click 不适合我。


【子命令】
命令别名
~~参数~~ Argument
~~参数的数据类型~~
~~多个参数~~
~~动态参数（多个参数值）~~
~~参数值多选一~~
参数值多选多

【选项 Option】
~~无值选项 flag~~
~~有值选项~~
~~命令选项~~
~~选项组~~
互斥选项
~~多次指定选项~~
~~选项出现次数~~
~~多次指定选项值~~
~~限制选项值~~
~~选项缩写~~
~~可选、必选~~
~~环境变量~~

Arguments只支持Option特性的子集，Click不会为Arguments参数生成帮助文档。


```