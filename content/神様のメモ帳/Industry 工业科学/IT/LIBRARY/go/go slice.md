---
aliases:
  - slice
tags:
  - flag/LANGUAGE/Go
  - Label/Industry-工业科学/IT/Library/BuiltinDataType
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/Array
---

```go
* 切片（Slice）与数组（Array）是两个完全不同的东西.
* 切片也被称为动态数组.
* 切片相当于 Python 的 List[T].
* 切片极其常用.
* 数组并不常用.
* 数组类型固定.
* 数组长度固定.
* 数组长度和类型必须在声明时就确定.



// 动态数组（Slice 切片）
numbers := []int{1,2,3} // 动态数组，切片 slice
numbers = append(numbers, 4, 5, 6, 7) // 追加元素
最常用的并不是名义上的「数组」，而是「切片」。
因为名义上的「数组」，长度是固定的。
「切片」，长度是可变的，又称「动态数组」，如同 Python 的 list。



// 数组（长度固定，类型相同）
var ids [2] int // 长度为 2
ids[0] = 38291
ids[1] = 8329

ids := [2]int{3829, 87233}
var ids = [...]int{832, 2134, 2212, 8370, 8881} // 长度不确定，编译器根据元素个数自行判断长度


```
