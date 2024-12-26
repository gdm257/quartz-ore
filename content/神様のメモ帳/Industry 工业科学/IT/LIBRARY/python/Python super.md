---
aliases:
- super
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/Type
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
---

- References
    - [Python3 super() 函数详解 隐式访问父类（超类）的被重载方法 - 张恺阳博客](https://www.zky.name/article/67.html)

```
super builtin function
Description:
    * supper获取的是MRO列表中的下一个类.
    * 根据文档，Derived Class（派生类）的 MRO 问题主要由「钻石继承」产生.

Examples:
    class A(B):
        def __init__(self):
            super()
                cls=A
                obj=self
                .__init__(self):
                    * 调用 B 的 __init__().


```
