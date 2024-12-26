---
aliases:
- int
tags:
- flag/LANGUAGE/Go
- Label/Industry-工业科学/IT/Library/BuiltinLibrary
---

- Objects
    - 64-bit OS default to [[Go int64|int64]]
    - 32-bit OS default to [[Go int32|int32]]

[基础数据类型 · Golang学习笔记](https://www.k8stech.net/go-book/ch4/readme.html)


```go
float32      the set of all IEEE-754 32-bit floating-point numbers
float64      the set of all IEEE-754 64-bit floating-point numbers (Default)
int    either int32 or int64 (Default)
int8      the set of all signed  8-bit integers (-128 to 127)
int16      the set of all signed 16-bit integers (-32768 to 32767)
int32      the set of all signed 32-bit integers (-2147483648 to 2147483647)
int64      the set of all signed 64-bit integers (-9223372036854775808 to 9223372036854775807)
uint    either 32 or 64 bits
uint8      the set of all unsigned  8-bit integers (0 to 255)
uint16      the set of all unsigned 16-bit integers (0 to 65535)
uint32      the set of all unsigned 32-bit integers (0 to 4294967295)
uint64      the set of all unsigned 64-bit integers (0 to 18446744073709551615)
uintptr    an unsigned integer large enough to store the uninterpreted bits of a pointer value


var int01 int = 257

var f01 float64 = 3.14


```
