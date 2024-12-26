---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/TUI
  - flag/Library/BusinessLogicLayer/Implement__/Exception
  - flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
  - flag/License/MIT
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: Textualize/rich
pip: rich
pip-extra-deps:
  - jupyter
---

[Welcome to Rich’s documentation! — Rich 13.2.0 documentation](https://rich.readthedocs.io/en/latest/)

[使用Rich来美化终端格式 | Escape](https://www.escapelife.site/posts/d2a82698.html)

[比tqdm更好用的进度条工具rich.progress，你值得拥有 - 知乎](https://zhuanlan.zhihu.com/p/470320311)

[Using Rich Inspect to interrogate Python objects - Textual](https://textual.textualize.io/blog/2023/07/27/using-rich-inspect-to-interrogate-python-objects/)

```python
rich library

API:
    import rich
    from rich.console import Console

    .print(*objects)
        *objects: Any
        * 类似 pprint，但彩色输出.
    .inspect()
    rich.pretty.install()
    rich.console.Console
        .__init__(self)
        .print()
        .log()
    rich.panel.Panel
    rich.markdown.Markdown
    rich.text.Text
    rich.sytax.Syntax
    rich.color.Color
    rich.style.Style
    rich.theme.Theme
    rich.table.Table
        .add_column()
        .add_row()
    rich.columns.Columns
    rich.progress.track()
    rich.markup.escape()
```
