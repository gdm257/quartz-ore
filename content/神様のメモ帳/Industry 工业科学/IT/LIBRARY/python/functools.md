---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/StandardLibrary
  - flag/Library/BusinessLogicLayer/Implement__/FP
---

## API

### functools.wraps()

- Idea
    - 让闭包函数保留原始函数的元数据

- Fundamentals
    - `update_wrapper()`

### `__wrapped__`

- Idea
    - functions decorated with `functools.wraps` use this to point to the original function

- API
    - `__wrapped__: function`

### functools.update_wrapper()

- Idea
    - 让闭包函数保留原始函数的元数据

- Alternatives
    - 用 `@wrpas()` 即可


### functools.partial()

- Idea
    - 将原始函数封装为偏函数


### functools.reduce()

```python
from functools import reduce


reduce(lambda x, y: x+y, range(0, 5))
递归，0-4 的和

```

### functools.lru_cache()

- Test
    - 被装饰的函数的所有形参必须是「可哈希对象」

### functools.singledispatch()

[PEP 443 – Single-dispatch generic functions | peps.python.org](https://peps.python.org/pep-0443/)

[typing — Support for type hints — Python 3.11.1 documentation](https://docs.python.org/3/library/typing.html#typing.overload)

[原来 Python 也有重载 | Mkdir700's Note](https://www.z2blog.com/archives/68)

[白学这么多年 Python ？连泛型函数都不会写？ - 王一白 - 博客园](https://www.cnblogs.com/wongbingming/p/13798567.html)

```python
- functools.singledispatch needs Python 3.4+
- functools.singledispatch 真正实现了重载.
- functools.singledispatch 是给普通函数使用的，不能有特殊入参 cls/self.
- functools.singledispatch 重载仅对第一个入参有效，因此非常鸡肋.
- functools.singledispatch 第一个入参才能不同，其他入参应保持不变.
- functools.singledispatchmethod needs Python 3.8+
- functools.singledispatchmethod 真正实现了重载.
- functools.singledispatchmethod 是给方法用的，第一个入参为 cls/self.
- functools.singledispatchmethod 重载仅对第一个 non-cls & non-self 入参有效.
- typing.overload 并没有实现重载.
- typing.overload 只用于 type checker 类型注解，相当于注释.
- typing.overload 最后必须有一个没被 @overload 装饰的同名函数，覆盖标识符.
- typing.overload 标识符最后应指向 non-@overload 函数.
- typing.overload 装饰的函数（标识符）应该被 non-@overload 覆盖.
- typing.overload 最后真正执行的应该是 non-@overload 函数.
- typing.overload 装饰的函数不应该被执行，会抛出 NotImplementedError.
- 函数重载对 Python 来说，并不是必要的.
- 函数重载对 Java 这种强类型语言，是必须的，否则无法实现需求.
- 函数重载目的是可变参数类型（Python 入参本身就可以不指定类型）.
- 函数重载目的是可变参数个数（Python 本来就有 `*args` `**kwargs`）.

```
