---
aliases:
- number
tags:
- flag/LANGUAGE/JS
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/number
---

## number


### Literal

[词法语法 - JavaScript Guidebook](https://tsejx.github.io/javascript-guidebook/basic-concept/lexical-grammar/lexical-grammar)


```js
int01 = 257 // 十进制

int02 = 0b10 // 二进制
int02 = 0b00010

int03 = 0o70 // 八进制
int03 = 0o00000070

int04 = 0xff // 十六进制
int04 = 0x000ff


0.314e1 // 科学记数法
NaN // Not a Number 表示结果无法计算
Infinity // 无穷大，超过了 number 类型的范围
0xff00 // 十六进制表示整数
0xa5b4c3d2

isNaN(NaN) // true
// NaN 与所有其他值都不相等，包括它自己，唯有 isNaN() 能判断

JavaScript 语言的底层根本没有整数，所有数字都是 64 位浮点数，例如 11 与 11.0 在 JS 底层其实是同一个数。



```

### IEEE754

基于IEEE754数值的浮点计算的通病,浮点数精度丢失问题

0.1 + 0.2 == 0.3


### isNaN()