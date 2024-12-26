---
tags:
- Label/Article/Industry-工业科学/IT/LANGUAGE
---

Python 仅有的真正难点全在于它的不自然之处

* import a.b.c 导入的是 a
* the fucking := operator
* yield
* getattribute
* descriptor
* monkey patch
* eval & exec
* namespace
* stub
* 互操作

上述难点会用不难，也不影响正常编程。难的是理解透彻 CPython 的实现。除了难点，Python 还有些坏设计

del name
del obj.name
del obj[key]
明明是是三种完全不同的行为，却用同一个关键字。这种做法与其他魔法方法格格不入，而且很丑。好的做法应该是分别用不同函数来实现