---
aliases:
- list
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
---

[序列协议 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/sequence.html)

[序列对象 - 具体的对象层 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/concrete.html#sequence-objects)

[Python 表达式 i += x 与 i = i + x 等价吗？ - FooFish](https://foofish.net/iadd_add.html)


### 字面量

```python
list01: list = list()  # empty list
list01 = []  # empty list
list02 = [0, 1, 'gdm', 257]  # literal
list03 = [i for i in range(0, 10)]  # 列表推导式
[i for i in range(0, 10) if i <= 1] == [0, 1]


```

### API

[gto76/python-cheatsheet: Comprehensive Python Cheatsheet](https://github.com/gto76/python-cheatsheet)


```python
list built-in type
API:
    .__init__()
        * 强制类型转换 or 创建空列表.

    [<slice>] -> list
    .index(<Any>) -> int
    .count(<Any>) -> int

    .append(<Any>)
        * 等价于 a[len(a):] = [item]
    .extend(<collection>)
        * 等价于 a[len(a):] = Iterable
    .insert(<int>, <Any>)
    + <collection>
    += <collection>

    .remove(<Any>)
    .pop(<List[int]>)
    .clear()
        * 等价于 del a[:]

    .sort()
    .reverse()

    .copy()
        * 等价于 a[:]

    * Container: True
    * Sequence: True
    * Sized: True
    * Hashable: False
    * list 实例是可变对象.
    * 元素可以是任意数据类型.
    * 有序.
    * 可直接获取长度.


```


### 拼接

```python
list01 = [0, 1, 2, 3]
list02 = [2, 5, 7]
list03 = list01 + list02
list01.extend(list02)  # 相当于 list01 = list01 + list02

```

### 增

```python
list01 = [0, 1]
list01.append('gdm')
list01.append(257)
list01 == [0, 1, 'gdm', 257]

list02 = [0, 1]
list02.insert(0, 'gdm')  # ['gdm', 0, 1]
list02.insert(1, 257)  # ['gdm', 257, 0, 1]

```


### 删

```python
list01 = ['gdm', 255, 257, 0, 1, 3.14]
last_element: Any = list01.pop()  # 从列表中删除最后一个元素，并返回最后一个元素的值
last_element == 3.14
list01 == ['gdm', 255, 257, 0, 1]


poped_element: Any = list01.pop(1)  # 删除索引e为 1 的元素，返回其值
poped_element == 255
list01 == ['gdm', 257, 0, 1]


list01.remove(0)  # 删除第一个值为 0 的元素，成功返回 None，值不存在升起异常 ValueError: list.remove(x): x not in list
list01 == ['gdm', 257, 1]


del list01[2:3]  # 从列表中删除 [2, 3) 区间的元素，语法同切片
list01 == ['gdm', 257]


list01.clear()  # 清空列表
list01 == []

用pop(m)方法，取出并删除索引值为m的元素

```

### 改

```python
list01 = ['gdm', 255]
list01[1] = 257  # ['gdm', 257]


```


### reversed

```python
list01 = [0, 1, 2, 3]
list01.reverse()  # 相当于 list01 = reversed(list01)
list01 == [3, 2, 1, 0]


list02 = [0, 1, 2]
from typing import Iterator
reversed02: Iterator = reversed(list02)
[i for i in reversed(list02)] == [2, 1, 0]
list02 == [0, 1, 2]


list03 = [1, 2, 3]
slice03 = list03[::-1]
slice03 == [3, 2, 1]
list03 == [1, 2, 3]

```

### 排序

```python

* 排序的前提是元素之间是可比较的.
* 字符串与字符串可比较.
* 数值和数值可比较.
* 字符串与数值不可比较.


list01 = [2, 5, 7, 257, 3.14, 0, 1]
list01.sort()
list01 == [0, 1, 2, 3.14, 5, 7, 257]

list02 = [2, 5, 7, 257, 3.14, 0, 1]
sorted02 = sorted(list02)
sorted02 == [0, 1, 2, 3.14, 5, 7, 257]



```

### 切片取值

[Python进阶：自定义对象实现切片功能 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1411659)

[Python学习：自定义迭代器，索引取值和分片取值_刘智民的技术博客_51CTO博客](https://blog.51cto.com/u_14568144/2443914)


```python
list01 = [0, 1, 2, 3, 4, '5']
list01[0] == 0
list01[1] == 1
list01[5] == '5'

用pop(m)方法，取出并删除索引值为m的元素。

slice -- 切片

    通常只包含了特定 sequence 的一部分的对象。切片是通过使用下标标记来创建的，在 [] 中给出几个以冒号分隔的数字，例如 variable_name[1:3:5]。方括号（下标）标记在内部使用 slice 对象。


```

### 搜索匹配

```python
list01 = ['gdm', 257, 257, 257]

first_index: int = list01.index('gdm')  # 0
first_index: int = list01.index(257)  # 首个值为 257 的元素的索引为 1
list01.index('hello')  # ValueError: 'hello' is not in list

count01: int = list01.count('gdm')  # 1
count02: int = list01.count(257)  # 3
count03: int = list01.count('hello')  # 0


用len()方法，统计全部元素的个数。

用count()方法，统计指定值的元素的个数。

用max()方法，统计元素中的最大值（要求元素类型相同；数字类型直接比较，其它类型比较id）

用min()方法，统计元素中的最小值（要求元素类型相同；数字类型直接比较，其它类型比较id）

用index()方法，查找指定值的元素的索引位置（第一个匹配项）。

用reverse()方法，翻转列表中的元素。

用copy()方法，浅拷贝并生成新的列表。

用deepcopy()方法，深拷贝并生成新的列表。

用sort()方法，在原列表基础上进行排序。

用sorted()方法，将新列表基础上对原列表的元素进行排序。

```

### 嵌套

### 强制类型转换

列表[]、字典{}、元组()或()可以分多行书写，直接换行即可

【创建】

list3 = ['a', 'b', 1, 2, 3, 'c', [4, 5] ]
list2 = [1, 2, 3, 4, 5]
list = ['a', 'b', 'c']
empty = []
[None] * 999    创建一个含N个对象的列表
[None for i in range(999)]    列表推导式
[None for i in range(999) if i <= 99]
普通列表 ['a', 'b', 'c']
混合列表 ['a', 'b', 1, 2, 3, 'c', [4, 5] ]
空列表 []
指定长度零列表 [0 for i in range(1000)]
自然数列表 [i for i in range(0, 101)] or list(range(0, 101))
偶数列表 [i for i in range(0, 101) if i%2 == 0]



【访问】(利用已有列表生成新列表，不影响已有列表)

list.copy
list[<indices>]
list[0]    访问第 1 个元素
list[0:2]    分片，访问第 1-2 个元素（注意不包含右侧 indices 2）
list[:2] == list[0:2]
list[:]    访问整个列表
list[0][3]    如果列表的第 1 个元素是列表 list2，访问 list2[3]
list[-1]    访问倒数第一个（最后一个）元素
list[len(list) - 1]    访问访问倒数第一个（最后一个）元素
list.count('abc')    该值的元素有几个
list.index('abc')    第一个 'abc' 的 indices
list.index('abc', 0, 9)    第一个 'abc' 的 indices，在 indices 范围 0-9
len(list)    列表长度
'abc' in list    列表是否有元素 'abc'，有 true，没有 false
'abc' not in list    列表是否有元素 'abc'，有 false，没有 true




【赋值】（修改已有列表）

dir(list)    查看列表内置方法
list[indices] = xxx    修改元素值
list.append('abc')    追加 1 个元素到列表尾部
list.insert(0, 'abc')    插入 1 个元素，插入后 list[0] == 'abc'
list.insert(indices, 'abc')
list.remove('abc')    删除元素 'abc'
del list[0]    删除第 1 个元素
del list    删除列表
list.pop()    删除最后一个元素，并返回最后一个元素
list.pop(0)    删除第 1 个元素，并返回第 1 个元素
list.reverse()    翻转列表
list.sort()    从小到大排序列表（归并排序）
list.sort(reverse=True)    从大到小排序列表
list1 = list2[:]    拷贝（新建了栈）
list1 = list2    注意，list1 的值是 list2 的栈地址，对 list2.sort() 的话，list1 也跟着变
list = list.extend(list2)    拼接列表
list.extend(['abc', 1, 2, 3])
list3 = list1 + list2    拼接列表
list3 = list * 3    重复列表
list * 3 == list + list + list
list += [None]    不要对列表使用 +=，因为是 extend([None])，影响原对象


【比较】

list1 > list2 == list1[0] > list2[0]
其他逻辑操作符同理


【类型转换】

set(list2)    列表 to 集合
list2 = list(set(list2))    列表去重