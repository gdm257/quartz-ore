---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/DataAccessLayer/Implement__/IO/Logger
---

```python
print('hello world')  # hello world
print('hello', 'world')  # hello world
print('hello', 'world', seq=', ', end='.')  # hello, world.


print(*values)
    *values: Any
        * 自动调用 __str__.
    file: SupportWrite[str]
        * 打印到哪个文件.
        * 目测，默认为 sys.stdout


```