---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

```python
shlex standard library
Description:
    * shlex 是简单的词法分析库.

API:
    .split(str) -> List[str]
        * 将命令行参数解析为 List[str].
    .join(args) -> str
        * .split() 的逆函数，将 Iterable[str] 拼接成命令行参数.
    .quote(s) -> str
        * Return a shell-escaped version of the string.

```