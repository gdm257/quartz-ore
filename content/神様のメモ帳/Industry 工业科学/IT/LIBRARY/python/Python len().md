---
aliases:
- "len()"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
---

- Idea
    - 调用 `__len__()` 方法来返回长度
    - 如果不存在 `__len__()`，则再调用 `__length_hint__()` 方法得到一个估计的长度
