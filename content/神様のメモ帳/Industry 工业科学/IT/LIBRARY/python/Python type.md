---
aliases:
- "type"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/Type
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/MonkeyPatching
---

[一文读懂架构师都不知道的isinstance检查机制 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1149349)

[collections.abc --- 容器的抽象基类 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/library/collections.abc.html)

[先有Class还是先有Object？ - 知乎](https://www.zhihu.com/question/30301819/answer/47539163)

[浅谈 Python Metaclass（上）：type 与 object 原理介绍 | Henry Z's blog~](https://changchen.me/blog/20201122/metaclass-with-django-orm/)


```python

type(257)  # <class 'int'>
type('gdm257')  # <class 'str'>
class MyClass: pass
my01 = MyClass()
type(my01)  # <class '__main__.MyClass'>
type(MyClass)  # <class 'type'>
type(str)  # <class 'type'>
type(int)  # <class 'type'>

isinstance(257, object)  # True
isinstance('gdm257', object)  # True
isinstance(my01, object)  # True

isinstance(257, type)  # False    任何「对象」都是 object 的「实例」
isinstance('gdm257', type)  # False
isinstance(my01, type)  # False

isinstance(str, object)  # True    「类」也是「对象」
isinstance(int, object)  # True
isinstance(MyClass, object)  # True

issubclass(str, object)  # True
issubclass(int, object)  # True
issubclass(MyClass, object)  # True

isinstance(str, type)  # True    「类」是 type 的「实例」
isinstance(int, type)  # True
isinstance(MyClass, type)  # True

issubclass(str, type)  # False    「类」不是 type 的「子类」
issubclass(int, type)  # False
issubclass(MyClass, type)  # False

# 下面就绕起来了，会迷糊很正常。

type(type)  # <class 'type'>
type(object)  # <class 'type'>

issubclass(type, type)  # True
issubclass(object, object)  # True
issubclass(type, object)  # True
issubclass(object, type)  # False

isinstance(type, type)  # True
isinstance(object, object)  # True
isinstance(object, type)  # True
isinstance(type, object)  # True

issubclass(C, object) 永远为 True
isinstance(o, object) 永远为 True
总结下，
从继承角度，任何一个类都继承自 object。type 是类。所以 type 继承自 object
从实例角度，任何一个对象都是 object 的实例。type 是对象。所以 type 是 object 的实例

我无法理解的是：
2. type 为什么是 object 的后代类？
type 是 object 的后代类，但 object 的类型却是 type，然后二者又互为实例。让我给你翻译翻译，一个类继承自这个类的实例，就好比说一只鸡是从它自己下的蛋里出生的，你说诡不诡异？
1. object 与 type 为什么互为实例？
任何对象都是 object 的实例，object 却也是 type 的实例，为什么？

```
