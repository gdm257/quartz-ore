---
aliases:
- tuple
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/Collections/Array
---

元组——戴了枷锁的列表

tuple2 = ('a', 'b', 1, 2, 3, 'c', [4, 5] )
type(a)    查看数据类型
a = (1,)    这是元组
a = 1,    这也是元组，逗号才是关键
a = ()    空元组
a = (1)    这不是元组，是 int

tuple2[0]
tuple2[:]

tuple3 = tuple[:]
tuple = tuple * 3
tuple = tuple[0:2]    堆中的元组确实不能增删改，但栈中的 tuple 只是个名字，值为堆内存地址，栈的值是可以改的，不能改的是地址所指的堆的值。类似 git 的 HEAD
