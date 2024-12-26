---
aliases:
- "id()"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
---

CPython 的 id() 返回对象的内存地址

hashable    可哈希

    一个对象的哈希值如果在其生命周期内绝不改变，就被称为 可哈希 （它需要具有 __hash__() 方法），并可以同其他对象进行比较（它需要具有 __eq__() 方法）。可哈希对象必须具有相同的哈希值比较结果才会相同。

    可哈希性使得对象能够作为字典键或集合成员使用，因为这些数据结构要在内部使用哈希值。

    大多数 Python 中的不可变内置对象都是可哈希的；可变容器（例如列表或字典）都不可哈希；不可变容器（例如元组和 frozenset）仅当它们的元素均为可哈希时才是可哈希的。 用户定义类的实例对象默认是可哈希的。 它们在比较时一定不相同（除非是与自己比较），它们的哈希值的生成是基于它们的 id()。
