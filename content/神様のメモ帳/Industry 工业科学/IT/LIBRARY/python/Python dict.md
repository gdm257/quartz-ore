---
aliases:
- dict
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
---

[映射协议 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/mapping.html)

[容器对象 - 具体的对象层 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/concrete.html#container-objects)

[Python 有序字典的实现 | Frost's Blog](https://frostming.com/2016/07-07/python-you-xu-zi-dian-de-shi-xian/)

[python - How to avoid "RuntimeError: dictionary changed size during iteration" error? - Stack Overflow](https://stackoverflow.com/questions/11941817/how-to-avoid-runtimeerror-dictionary-changed-size-during-iteration-error)



### 字面量

```python

* key 必须 Hashable 可哈希对象 E.g. 字符串、整数、浮点数.
* Hashable 一定是 Immutable，但是 Immutable 不一定是 Hashable.
* Tuple[Mutable] 是 Immutable，但不是 Hashable.
* Tuple[list] 是 Immutable，但不是 Hashable.
* Tuple[Hashble] 是 Immutable 和 Hashable.
* value 可以是任意类型.

dict01 = dict()  # empty dict
dict01 = {}  # empty dict
dict02 = {
    'key01': 'value01',
    'key02': 'value02',
    3.14: 3.14,
    257: 'gdm',
}  # literal
dict03 = {f'key{i}': f'value{i}' for i in range(0, 10)}  # 字典推导式



```

### 增

```python
dict01 = {}
dict01['key01'] = 'gdm257'

dict02 = {'name': 'gdm257'}
dict02.setdefault('name', 'gdm')  # key 已存在则什么也不做
dict02.setdefault('age', 17)  # key 不存在则给索引赋值
dict02 == {'name': 'gdm257', 'age': 17}

```

### 删

```python
dict01 = {
    'key01': 'gdm',
    'key02': 257,
    'key03': 3.14,
}

dict01.pop('key01')
del dict01['key02']

```

### 索引取值

```python
dict01 = {
    'key01': 'gdm',
    'key02': 257,
    'key03': 3.14,
}
print(dict01['key03'])
print(dict01['key99'])  # key 不存在则报错 KeyError
print(dict01.get('key99', 'default'))  # 索引 'key99' 的值，不存在则返回指定对象 'default'


dict01.get('key01')  # key 不存在则返回 None
dict01.get('key01', 0)  # key 不存在则返回 0

```

### 改
### 合并
### 搜索

```python
dict01 = {
    'key01': 'gdm',
    'key02': 257,
    'key03': 3.14,
}

has_key: bool = 'key01' in dict01  # True


keys: list = list(dict01.keys())


```

### 嵌套
### 强制类型转换

```python
dict()


```

### 有序字典

【创建】
dict1 = { 'abc': 456 }
dict2 = { 'abc': 123, 98.6: 37 }
dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
{x: x**2 for x in (2, 4, 6)}
{x for x in 'abracadabra' if x not in 'abc'}
{ key_expr: value_expr for value in collection }
{ key_expr: value_expr for value in collection if condition }


【访问】
dict['Name']
a in dict2    字典 dict2 是否有 a 这个 key
keys = list(dict)


【赋值】
del dict['Key']
dict01.update(dict02)    合并 dcit02 的所有键值对进 dict01，如果 key 重复，dict02 key 对应的值将 覆盖 dict01 key 的值
dict01.pop('key_name')
dict01.pop('non_exist_key_name', 'default value') == 'default value'