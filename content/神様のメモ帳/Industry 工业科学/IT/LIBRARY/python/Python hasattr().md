---
aliases:
- "hasattr()"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/MonkeyPatching
---

- Fundamentals
    - `hasattr` 是依赖 [[Python getattr()|getattr()]] 起作用的，它直接调用 `getattr()` 然后看是否会产生 `AttributeError`
