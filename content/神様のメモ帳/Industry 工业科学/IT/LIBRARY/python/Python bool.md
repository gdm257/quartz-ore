---
aliases:
- bool
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/bool
---

```python
in
not in
is
not is
and
or
not

if 10 <= num <= 20: pass


```


[Truth Value Testing | Built-in Types — Python 3.11.1 documentation](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)


- 类の实例 without __bool__
    * True: 永远返回 True
    * False: 不存在

- 类の实例 with __bool__
    * True: __bool__() 返回 True
    * False: __boo__() 返回 False

- class
    * True: bool(ClassName) 永远返回 True
    * False: 不存在

- func
    * True: bool(func_name) 永远返回 True
    * False: 不存在

- int
    * False: 0
    * True: other

- float
    * False: 0.0
    * True: other

- complex
    * False: 0j
    * True: other

- str
    * False: ''
    * True: 非空

- list
    * False: []
    * True: 非空

- set
    * False: ()
    * True: 非空

- dict
    * False: {}
    * True: 非空

- Fraction
    * False: Fraction(0, 1)
    * True: other

- Decimal
    * False: Decimal(0)
    * True: other
