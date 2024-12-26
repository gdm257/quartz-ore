---
tags:
  - flag/Library/BusinessLogicLayer/Implement__/FP
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[filter - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1016959663602400/1017404530360000)


```python
# 遍历可迭代对象，过滤掉不符合自定义条件的元素，生成新的可迭代对象
def is_odd(n) -> bool:
    return n % 2 == 1

list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15]))
# 结果: [1, 5, 9, 15]

返回 filter 对象，主动迭代才会真正执行，即生成器对象
论可读性，filter() 不如生成器表达式 (i for i in obj if xxx)
论可读性，list(filter()) 不如列表推导式 [i for i in obj if xxx]

```
