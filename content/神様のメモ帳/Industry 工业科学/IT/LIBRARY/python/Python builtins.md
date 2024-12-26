---
aliases:
  - builtins
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/BuiltinLibrary
  - Label/Industry-工业科学/IT/Library/BuiltinDataType
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
---

- References
    - [builtins](https://docs.python.org/3/library/builtins.html)

```python
我把内置函数分成了三类，第一类跟 Python 面向对象的机制有关；第二类是类型转换函数；第三类是 utils，可理解为常用语法糖，让代码更简洁（由雅）、动态。

__import__()
compile()
globals()
locals()
type()
isinstance(obj, type)
isinstance(obj, Union[int, str, dict, list])
issubclass()
super()    调用父类的方法
dir()    返回命名空间的标识符，非常有用
dir(var)    返回对象的属性、方法
vars()    dir()键值对版，要求对象必须有 __dict__，dir() 则不需要
hasattr(obj, 'attr_name')
getattr()
setattr()
delattr()
callable()
id()
hash()
memoryview()
len()
iter()
next()



~~int()~~    str 是内置类型，虽然可调用但不是函数
~~float()~~
~~complex()~~
round()
~~bool()~~
~~dict()~~
~~list()~~
~~set()~~
~~frozenset()~~
~~tuple()~~
ord()
chr()
bin()
oct()
hex()
~~str()~~
repr()
~~bytes()~~
~~bytearray()~~




input()
print()
range()
slice()
open()
format()
sum()
abs()
pow()
divmod()
map()    简易for循环の语法糖
filter()
zip()
reversed()
sorted()
enumerate()
all()    True: 可迭代对象的 all elements 的 __bool__() 返回 True
any()    True: 可迭代对象的 any elements 的 __bool__() 返回 True
        目测，有 __bool__ 就用 __bool__
        没有 __bool__ 则直接算 True
        all([True, True, True]) == True
        all([True, True, False]) == False
        any([False, False, False]) == False
        any([False, False, True]) == True
eval()    将字符串当成有效的表达式 并 返回计算结果，例如 scrapy 的中间件
exec()    执行储存在字符串中的 Python 语句，比 eval 更强大
breakpoint()

```
