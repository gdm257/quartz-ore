---
tags:
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[C# 中的语言集成查询 (LINQ) | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/linq/)

[表达式树 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/expression-trees)

[c#对数据库操作是不是主要用linq技术？ - 知乎](https://www.zhihu.com/question/522505759)

[linq调试神器之二——LinqPad Premium 7.4.9高级学习版_懒得勤快的博客_互联网分享精神](https://masuit.com/1666)


```c#
using System;
using System.Collections.Generic;
using System.Linq;

查询表达式必须以 from 子句开头，且必须以 select 或 group 子句结尾。 在第一个 from 子句与最后一个 select 或 group 子句之间，可以包含以下这些可选子句中的一个或多个：from、select、group、let，甚至是其他 from 子句。 还可以使用 into 关键字，使 或 group 子句的结果可以充当相同查询表达式中的其他查询子句的源。

我们建议在编写 LINQ 查询时尽量使用查询语法，并在必要时尽可能使用方法语法。 这两种不同的形式在语义或性能上毫无差异。 查询表达式通常比使用方法语法编写的等同表达式更具可读性。

一些查询操作（如 Count 或 Max）没有等效的查询表达式子句，因此必须表示为方法调用。


```