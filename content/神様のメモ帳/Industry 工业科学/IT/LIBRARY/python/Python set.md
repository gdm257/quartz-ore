---
aliases:
- set
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/Collections/Set
---

## set

### 字面量

```python

* 元素不重复，即数学意义上的集合.
* 元素可以是任意类型.
* 无序.


set01 = set()  # empty set
set02 = {'gdm257', 3.14, 0, 1}  # literal
set03 = {i for i in range(0, 10)}  # 集合推导式

```

### 拼接

```python
set01 = {0, 1}
set02 = {'gdm257', 3.14, 0}

// 合集
set03 = set02.union(set01)  # 合集 {0, 1, 'gdm257', 3.14}
set04 = set01 | set02  # 合集 {0, 1, 'gdm257', 3.14}
set02.append(set01)  # 相当于 set02 = set02.union(set01)


// 交集
set05 = set01.intersection(set02)  # 交集 {0}


// 交集の补集 a.k.a. 不重合集
set06 = set01.symmetric_difference(set02)  # {'gdm257', 3.14, 1}


// 独有元素の集合 a.k.a. 差集
set07 = set01.difference(set02)  # {1} 属于 set01 但不属于 set02 的元素的集合
set08 = set02.difference(set01)  # {'gdm257', 3.14} 属于 set02 但不属于 set01 的元素的集合

```

### 增

```python
set01 = set()
set01.add(0)
set01.add(0)
set01.add(0)
set01.add(1)
set01.add(257)
set01.add('gdm')
set01 == {'gdm', 257, 0, 1}  # True

```

### 删

```python
set01 = {'gdm257', 0, 1}

set01.remove(0)  # 成功则返回 None
set01.remove('gdm')  # 元素不存在则报错 KeyError
set01.discard('gdm')  # 无论元素是否存在，都返回 None
set01.clear()  # 清空集合

```

### 搜索匹配

```python
set01 = {'gdm257', 0, 1, 3.14, 257}
has_element: bool = 'gdm257' in set01  # True
has_element: bool = 'gdm' in set01  # False


set03 = {0, 1}
is_subset: bool = set03.issubset(set01)  # True
# True: set03 为 set01 的子集
# False: set03 不是 set01 的子集


set02 = {'gdm', 257}
has_same_element: bool = set02.isdisjoint(set01)  # False
# False: set02 与 set01 存在交集
# True: set02 与 set01 不存在交集（交集为空）

```

### 属性

Iterable: True
Iterator: False
Sequence: False
len(): True

dir()
['__and__',
 '__class__',
 '__class_getitem__',
 '__contains__',
 '__delattr__',
 '__dir__',
 '__doc__',
 '__eq__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__gt__',
 '__hash__',
 '__iand__',
 '__init__',
 '__init_subclass__',
 '__ior__',
 '__isub__',
 '__iter__',
 '__ixor__',
 '__le__',
 '__len__',
 '__lt__',
 '__ne__',
 '__new__',
 '__or__',
 '__rand__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__ror__',
 '__rsub__',
 '__rxor__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__sub__',
 '__subclasshook__',
 '__xor__',
 'add',
 'clear',
 'copy',
 'difference',
 'difference_update',
 'discard',
 'intersection',
 'intersection_update',
 'isdisjoint',
 'issubset',
 'issuperset',
 'pop',
 'remove',
 'symmetric_difference',
 'symmetric_difference_update',
 'union',
 'update']


set2 = {1, 2, 3}
empty = set()    # 空集合
{i**2 for i in (1,2,3)}
{x for x in 'abracadabra' if x not in 'abc'}
{ expression for item in Sequence }
{ expression for item in Sequence if conditional }

set.add(a)    # 添加元素（若元素已存在，则不操作）
set.update(a, b, c)    # 添加元素（元素还可以是 列表，元组，字典等）
remove(a)    # 删除元素（元素不存在会报错）
discard(a)    # 删除元素（元素不存在不会报错）
pop()    # 随机删除 1 个元素
difference_update

set01 = set01.union(set02)    # 合并集合

set01 = set(str01)  # string -> set（无分隔符，每个字符是一个元素）
list01 = str01.split(', ')  # string -> list（分隔符为「, 」）
set01 = set(list01)  # list -> set
str02 = ', '.join('%s' %id for id in list01)  # list -> string（分隔符为「, 」）
str02 = ', '.join(list01)  # 容易报错，不推荐
list02 = list(set01)  # set -> list（乱序）
', '.join('%s' %id for id in list(set01))  # set -> string（乱序，分隔符「, 」）


`frozenset` 是戴了枷锁的 `set`，它的实例是不可变对象，即创建后不能 add update etc


### 强制类型转换

```python
set()
fronzenset()


```
