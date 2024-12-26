---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
  - flag/Library/BusinessLogicLayer/Implement__/FP
---

[5. 数据结构 - 循环的技巧 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/tutorial/datastructures.html#tut-loopidioms)

[python - How to avoid "RuntimeError: dictionary changed size during iteration" error? - Stack Overflow](https://stackoverflow.com/questions/11941817/how-to-avoid-runtimeerror-dictionary-changed-size-during-iteration-error)


```python
# 利用解包，每次迭代时获取元素值及其对应索引，类似于 Go 的 for range
list01 = ['a', 'b', 'c']

for index, value in enumerate(list01):
    print(index, value)

0 a
1 b
2 c


```