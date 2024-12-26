---
aliases:
- int
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/number
---

[数字协议 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/number.html)

[数值对象 - 具体的对象层 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/concrete.html#numeric-objects)

[statistics --- 数学统计函数 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/statistics.html#module-statistics)


### 字面量

```python
int01 = 0x10FFFF  # 十六进制
int01 = 0x10ffff
int01 = -0x101  # -257
int01 = 0xCAFE_F00D_FFFF

int02 = 0o7777  # 八进制
int02 = 0o7
int02 = -0o10  # -8

int03 = 0b0011111101001110  # 二进制
int03 = 0b_0011_1111_0100_1110

int04 = 257  # 十进制
int04 = -257


float01 = 3.14
float01 = 1.0
float01 = 0.0
float01 = 10_000_000.0

float02 = 1e0  # 1.0
float02 = -1e0  # -1.0
float02 = 314e-2  # 3.14


complex01 = 2 + 3j
complex01 = 0.5 + 3.14j
1j * 1J == -1  # True

complex02 = complex(2, 3)
complex02 = complex(0.5, 3.14)

```

### 比较

[15. Floating Point Arithmetic: Issues and Limitations — Python 3.11.1 documentation](https://docs.python.org/3/tutorial/floatingpoint.html)

[在Python中判断两个浮点数的相等 · 零壹軒·笔记](https://note.qidong.name/2021/05/python-float-tolerance/)



### 强制类型转换

```python

- int() 舍弃小数返回整数.
- round() 四舍五入返回整数.
- // 地板除，对除法的结果舍弃小数返回整数.
- float()
- complex()
* round() 和 int() 支持任意实数.

round(3.14) == 3
round(-3.14) == -3
round(2.57) == 3
round(-2.57) == -3



import math  # 数学模块
import cmath  # 复数数学模块


int01 = 257
float01 = 3.14
complex01 = 1 + 2j
complex02 = 1j**2

complex(1, 2) == 1 + 2j
complex(-1, 0) == 1j**2
int(3.14) == 3
float(0) == 0.0
abs(1 + 1j)





```


### 内置函数

```python
sum()
abs()
pow()
divmod()

```