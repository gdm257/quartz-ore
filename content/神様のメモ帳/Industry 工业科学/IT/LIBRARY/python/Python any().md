---
aliases:
  - any()
  - Python any()
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
  - flag/Library/BusinessLogicLayer/Implement__/FP
---

```python
all()    True: 可迭代对象的 all elements 的 __bool__() 返回 True
any()    True: 可迭代对象的 any elements 的 __bool__() 返回 True
        目测，有 __bool__ 就用 __bool__
        没有 __bool__ 则直接算 True
        all([True, True, True]) == True
        all([True, True, False]) == False
        any([False, False, False]) == False
        any([False, False, True]) == True
```
