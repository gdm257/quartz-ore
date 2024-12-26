---
tags:
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
  - flag/Library/BusinessLogicLayer/Implement__/FP
  - flag/LANGUAGE/Python
---

[5. 数据结构 - 循环的技巧 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tut-loopidioms)

- Idea
    - X columns -> Y rows
    - X 个长度为 Y 的可迭代对象 -> 一个长度为 Y 的可迭代对象
    - 同时遍历 X 个对象

```python
list01 = ['g', 'd', 'm']
list02 = [2, 5, 7]
list03 = [True, False, None]
for a01, a02, a03 in zip(list01, list02, list03):
    print(a01, a02, a03)

# g 2 True
# d 5 False
# m 7 None
```
