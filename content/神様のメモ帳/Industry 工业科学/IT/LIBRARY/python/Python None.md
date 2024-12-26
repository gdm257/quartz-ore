---
aliases:
- None
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinVariable
---

- Philosophy
    - 代表 undefined

- Fundamentals
    - `None` 是常量
    - `None` 是一个标识符，指向一个常量对象
    - `None` 是 `NoneType` 的 instance
    - `None` 在 Type Annotation 里实际是类似 Literal 性质的，因为按照正常的 Type Annotation，理论上我们应该将参数标注为 `NoneType`、传入 `None`。而事实是我们标注为 `None`、传入 `None`，这是 CPython 底层有特殊化处理
    - `None` 只能作为右值使用
    - `None` 本质只是个有点特殊的实例对象，重要的是它背后的思想，即「未定义」的实现
    - `NoneType` 是单实例类
