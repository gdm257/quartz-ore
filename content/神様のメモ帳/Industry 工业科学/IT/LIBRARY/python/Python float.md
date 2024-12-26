---
aliases:
- float
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/number
---

[15. Floating Point Arithmetic: Issues and Limitations — Python 3.11.1 documentation](https://docs.python.org/3/tutorial/floatingpoint.html)


```python
Description:
    * Python 的浮点数是 IEEE-754 双精度浮点数.
    * IEEE-754 浮点数，在硬件层面，存储为二进制分数（binary fraction）.
    * IEEE-754 浮点数无法避免 Representation Error，即一个十进制分数（decimal fraction），无法完美转换为二进制分数（binary fraction），只能用一个近似值来表示（精度为 53 bits，对于绝大多数机器）.
    * 二进制分数转换回十进制分数，同样不能完美转换（貌似），只是按照精度要求，转换为最接近的十进制分数，十进制十进制分数再按照精度显示为十进制小数.


Examples:
    float('inf')
    float('-inf')


```