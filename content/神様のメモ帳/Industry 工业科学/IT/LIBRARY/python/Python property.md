---
aliases:
- property
- getter
- setter
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
- flag/Library/BusinessLogicLayer/Implement__/FP
---

禁止使用 getter setter

TL;DR

理论上可以无限复杂，考虑到实际生态，它们最大用途在于 validation 与实例内查询

但 getter setter 是不好的。因为它们对外看上去是一个 field。这相当于你给 table 新增了一个字段！DBA 心脏骤停

field 给人感觉是「有状态的」，一种非常不可靠的感觉。人们会下意识避免修改 field。想想看你真的要用 setter 来 CRUD 数据库吗

正确做法是用 method，甚至可以像 Java 那样单独做个查询层。

method 感觉上像是 pipe，像函子与方法，是稳定的、可靠的、无副作用的

查询层更不必说，都单独一个中间层了。

说回 validation，正确做法是在 hooks 里注册多个验证器，总之是**链式**的
