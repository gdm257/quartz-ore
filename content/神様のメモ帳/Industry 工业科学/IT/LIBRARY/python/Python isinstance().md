---
aliases:
  - isinstance()
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
  - flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Reflection
---

[一文读懂架构师都不知道的isinstance检查机制 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1149349)

[collections.abc --- 容器的抽象基类 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/library/collections.abc.html)

详见 type()

```python
instance() 有 2 种作用，第一是「判断一个对象是否是 某个类的实例 或 其后代类的实例」，判断依据是对象的 __class__ 属性。第二就是「检查鸭子类型，即判断一个对象是否实现特定接口」。

# isinstance() 作为内置函数，是用 C 实现的。比较黑盒子，但还是有大神将其判断逻辑整理成了 python 伪代码

# Python 3.6.0
def _isinstance(x, C):
    # 快速匹配
    if type(x) is C:
        return True

    # 如果是由元类 type 直接构造的类
    if type(C) is type:
        return C in x.__class__.__mro__

    # 如果第二个参数是元组, 则递归调用
    if type(C) is tuple:
        for item in C:
            r = _isinstance(x, item)
            if r:
                return r

    # 用户自定义检测规则
    if hasattr(C, "__instancecheck__"):
        return C.__instancecheck__(x)

    # 默认行为
    return C in x.__class__.__mro__

```
