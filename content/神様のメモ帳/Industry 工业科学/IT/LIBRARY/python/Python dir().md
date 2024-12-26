---
aliases:
- "dir()"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/MonkeyPatching
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Namespace
---

- Idea
    - `dir()`
        - 查看当前命名空间のnames
        - 无参数时获得本地作用域内的标识符
    - `dir(obj)`
        - 查看对象的命名空间のnames
        - 获取对象的所有可用属性，可通过 `__dir__()` 来自定义
