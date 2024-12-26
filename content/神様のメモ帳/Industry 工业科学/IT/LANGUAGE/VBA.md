---
aliases:
  - VBA Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[VBA指令、工程命名及过程_w3cschool](https://www.w3cschool.cn/excelvba/excelvba-order2.html)

[VBA 实践指南 - 硬核分析仙人](https://www.zhihu.com/column/c_142964938)



## 二八法则


    别管什么宏，直接看一些「手写的代码」，就会明白：

    Python 怎么写，VBA 就怎么写；
    xlwings 怎么用，excel（API）就怎么用

    剩下的积累 API 技术栈就好。

    vba == python
    excel库 + excel控件 == xlwings
    1 个模块 == 1 个 .py 文件
    1 个类模块 == 
    excel对象 == xlwings.main.Sheets
    .xlsx == xlwings.main.Book == excel对象 + 模块 + 类模块 + 窗体

开发者主要编写的是「模块」「类模块」「窗体」，但一般与「excel 对象」一起保存为 xlsx 文件。当然你也可以专门导出，这样更由雅。

    .cls    类文件
    .frm    窗体文件
    .bas    Basic 文件

Workbook 工作簿：一个 excel 文件，如 csv
Worksheet 工作表：工作簿里的每张表格
Range 单元格区域：多个格子
Cell 单元格：一个格子


「函数」要返回一个数值。

「子程序」只执行一个或多个操作，而不返回数值。当录制完宏查看代码时，所看到的就是子程序。宏只能录制子程序，而不能录制函数过程。



## 技术栈

```vb

Application.ScreenUpdating = False   '关闭屏幕更新

Selection.Copy    '模拟 Ctrl-C
ActiveSheet.Paste    '模拟 Ctrl-V

Windows("3-12已出图下单表.xls").Activate    '模拟 切换到workbook

Range("A2")    'sheet.range('A2').value
Range("A2").Select    '模拟 鼠标选中指定区域




my_files = Dir(my_path & "\*.xlsx*")     '遍历当前文件夹下的Excel文件
Debug.Print <变量>


```


## 收集代码

```vb
Sub sheets_copy()
    Dim my_files, my_path, wb               '声明变量
    Application.ScreenUpdating = False   '关闭屏幕更新
    Sheet1.UsedRange.Offset(1, 0).Clear  '清除除表头之外的所有内容
    my_path = ThisWorkbook.Path           '找到当前工作簿的路径
    Debug.Print my_path
    my_files = Dir(my_path & "\*.xlsx*")     '遍历当前文件夹下的Excel文件
    Debug.Print my_files
    Do While my_files <> ""                '当找到的文件不为空时
        If my_files <> ThisWorkbook.Name Then   '当找到的文件不是当前Excel工作簿时
            Set wb = GetObject(my_path & "\" & my_files)   '得到dir找到的工作簿的内容，设为wb
            With wb.Sheets(1)              '对找到的工作簿的sheet1进行操作，复制wb的sheet1除第一行的所有内容
            .UsedRange.Offset(1, 0).Copy Sheet1.Range("A" & Sheet1.UsedRange.Rows.Count + 1)
            End With
            wb.Close False      '关闭wb工作簿且不保存
        End If
        myfile = Dir          '寻找下一个Excel工作簿
    Loop
    Application.ScreenUpdating = True   '恢复屏幕更新
End Sub
```


## VBA 是什么？


java 语言    VBA 语言
.class       宏
javaw        Excel

Excel 能类比成 javaw 暗示着，我们在 Excel 的几乎所有手动操作都是宏，是可以通过代码 100% 模拟的。VBA 可以称作 EXCEL 的遥控器。

「VBA」与「宏」的关系，这么说，VBA 是 java 源代码（.java 文件），宏是 javac 编译生成的二进制文件（.class 文件），Excel 是 java.exe。Excel 执行宏，就相当于 java 执行 .class 文件（java.exe HellowWorld）

VBA 是一门编程语言。VBA 与 Python 不同，VBA 代码不能被直接解释运行，需要先编译成二进制文件，这种二进制文件能直接被 Excel 执行。所以 VBA 工作形式上更像 java，而不是 python。

vba是office的宏语言，vba是vb6的子集，vb6和vb.net不是一个东西，可以说是两个语言，vb.net是微软至今还在更新维护的，vb6已经不支持了。现在微软推荐用vsto（可用c#和vb.net语言）外接程序的方式操作office文档，但vb.net比vb6难，学习成本高，社区资源少，生态环境差，所以要是用vsto，不如用c#写。

所以我最后的结论是，学vb还行，学vb.net就没必要了，不如学c#再学vsto。


## 环境

vba最大的优势是当可以帮助你快速在没有条件大面积布置关联和环境的情况下实现一个应用。因为excel他就是个极其普遍，范围极广，基本行只要大版本一致了就不需要再去部署的超级稳定环境。最多最多复制一个MS.OLB文件就可以完成环境布置这件事。在环境稳定的同时，excel还赋予了非常好的用户交互能力，可以说作为语言vba是烂的，但是作为interface，office几乎是最好的。

我也试过很多比如xlwing，之类的关联excel的lib，但是自己用还好，一旦开始布置环境马上就变成灾难。 用其他语言上云也是一个办法，但是过程一般很长而且需要非常非常非常非常多it人员的帮助。在时间有限的条件下，依附于office的vba是没有办法的办法

自己部署环境很容易，但是要保证几千号人跟你是一个环境，在没有it人员的帮助下是非常困难的。即使生成exe，保证大家都能运行难度都是非常高的


我自己装Python百试百灵，给同事在公司虚拟机上装，每次都出问题。。。

楼主说得太对了，我写一个VBA程序，稍作修改，可能整个办公室都可以用。写一个Python打包，可能一个人都用不了。

excel里用vba写点东西大部分情况下你分享给别人用别人直接就可以用了，少部分情况也就补点一下系统自带的库就可以了

想不用VBA首先要离开Excel。



## 开发准备工作

文件 - 选项 - 自定义功能区 - 勾选 开发工具
文件 - 选项 - 信任中心 - 信任中心设置 - 宏设置 - 选择「启用所有宏」；勾选「信任对 VBA 工程对象模型的访问」
文件 - 选项 - 自定义功能区 - 开发工具（勾选）

Excel 2007 及以后的版本中，工作簿中想要保存和运行宏，必须将其另存为「启用宏的工作簿」文件类型。

工具栏 - 开发工具 - 开始工作吧！


## VB 编辑器

工具栏 - 开发工具 -  VBA





## 录制宏

很多你不知道的vba代码，都可以通过录制宏来学习。因为，录制宏也相当于写代码。为什么这样说呢？因为录制宏就是Excel把你的操作步骤用代码表示出来。所以，当你不知道Excel的某个操作怎么用vba代码实现的时候，就可以录制宏录下这个操作，然后看代码是如何表示的。这是写vba的一个很重要的技巧。

工具栏 - 开发工具 - 录制宏 - 已经开始录制了，现在进行一顿操作 - 结束录制 - 查看宏 - 编辑

工具栏 - 视图 - 宏 - 录制宏 - 已经开始录制了，现在进行一顿操作 - 宏 - 结束录制 - 查看宏 - 编辑

通过宏记录器无法完成的工作有:

1. 录制的宏无判断或循环能力.
2. 人机交互能力差,即用户无法进行输入,计算机无法给出提示.
3. 无法显示EXCEL对话框.
4. 无法显示自定义窗体.

宏可保存在三种可能的位置：

1. 当前工作簿。（只有该工作簿打开时，该宏才可用）
2. 新工作簿。（另存为工作簿）
3. 个人宏工作簿。（一个特殊的工作簿，C:\WINDOWS\Profiles\Application Data\Microsoft\Excel\XLSTART\PERSONAL.XLS，excel 每次启动会自动加载该文件，所以保存的宏能用在每个所有 xlsl etc. 文件）




## 注释

```vb

xxx  '单行注释

```

## 换行

```vb


```

一条语句的换行：在一行的结尾加上 ` _` 来换行代码，相当于 bash 的 ` \`

多条语句放一行：可以书写多条语句，各语句之间以冒号 `:` 分开




## 命名

```vb

Dim number As Integer
Dim number As Long
Dim number As Single
Dim number As Double
Dim number As Decimal
Dim name As String
Dim bin As Byte
Dim status As Boolean
Dim obj As Object



字母打头，由字母、数字和下划线组成

长度小于40,Excel2002以上中文版本等，可以用汉字且长度可达254个字符
VBA共有12种数据类型，此外因为 VBA 支持面向对象，所以用户可以用 Type 自定义数据类型。
VBA允许使用未定义的变量，默认是变体变量。
一般变量作用域的原则是，在哪部分定义就在哪部分起作用，模块中定义则在该模块起作用。
常量为变量的一种特例，用Const定义，且定义时赋值，程序中不能改变值，作用域也如同变量作用域。如下定义：Const Pi=3.1415926 as single



```


|    数据类型     | 类型标识符 |         字节          |
| --------------- | --------- | --------------------- |
| 字符串型String  | $         | 字符长度（0-65400）    |
| 字节型Byte      | 无         | 1                     |
| 布尔型Boolean   | 无         | 2                     |
| 整数型Integer   | %         | 2                     |
| 长整数型Long    | &         | 4                     |
| 单精度型Single  | ！         | 4                     |
| 双精度型Double  | #         | 8                     |
| 日期型Date      | 无         | 8公元100/1/1-99/12/31 |
| 货币型Currency  | @         | 8                     |
| 小数点型Decimal | 无         | 14                    |
| 变体型Variant   | 无         | 以上任意类型，可变     |
| 对象型Object    | 无         | 4                     |



## 运算

```vba
=    赋值
+
-
*
/
\    整除
Mod    取余
^    次方
&

And
Or
Xor    异或
Eqv    相等
Not
Imp    隐含

>
<
=
>=
<=
<>    不等于
Like
ls

```

## 数组

数组是包含相同数据类型的一组变量的集合，对数组中的单个变量引用通过数组索引下标进行。在内存中表现为一个连续的内存块，必须用Global或Dim语句来定义。定义规则如下：

Dim 数组名([lower to ]upper [, [lower to ]upper, ….]) as type ;Lower缺省值为0。二
维数组是按行列排列，如XYZ(行，列)。

除了以上固定数组外，VBA 还有一种功能强大的动态数组，定义时无大小维数声明；在程序中再利用Redim语句来重新改变数组大小，原来数组内容可以通过加preserve关键字来保留。

如下例：
Dim array1() as double : Redim array1(5) : array1(3)=250 : Redim preserve array1(5,10)

## 结构体

## 单元格

## if

```vba
If Number < 10  Then
     Digits = 1
ElseIf Number < 100  Then
     Digits = 2
Else
     Digits = 3
End If


If condition Then
    [statements]
    [ElseIf condition-n Then
        [elseifstatements] ...
    [Els]
        [elsestatements]]
End If

Select Case  Pid
   Case  “A101”
   Price=200
   Case  “A102”
   Price=300
   ……
   Case Else
   Price=900
End Case
```

## for

```vba
For counter = start To end [Step step]                  ＇step 缺省值为1
[statements]
[Exit For]
[statements]
Next [counter]

For Words = 10 To 1 Step  -1                               ＇建立 10 次循环 
      For Chars = 0 To 9                                        ＇建立 10 次循环
           MyString = MyString & Chars                      ＇将数字添加到字符串中
      Next Chars                                                   ＇Increment counter
      MyString = MyString & " "                                ＇添加一个空格
Next  Words





For Each rang2 In  range1
     With range2.interior
             .colorindex=6
             .pattern=xlSolid
     End with
Next

For Each element In  group
Statements
[Exit for]
Statements
Next  [element]




With object
[statements]
End With



Do {while |until} condition ' while 为当型循环，until为直到型循环，顾名思义，不多说啦
Statements
Exit do
Statements
Loop

Do                                    ' 先do 再判断，即不论如何先干一次再说
Statements
Exit do
Statements
Loop {while |until} condition


```

## 函数

## 过程

VBA具有四种过程：Sub 过程、Function函数、Property属性过程和Event事件过程。

## 类

## 库

```vba
选中

复制
粘贴
删除
移动

```


## 文件操作



# Excel

参考

[Excel 函数（按类别列出）](https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0-%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb)


## 兼容性

`_xlfn` 是一个前缀，出现这个是因为表里某函数在当前版本里不适用。

`DISPIMG` 是wps私有函数，且涉及到图片相关等其他模块。所以用 Excel 打开会显示成 `=_xlfn.DISPIMG()`

Excel 函数在不同 Excel 软件版本的兼容性可能不同，在此处查看：Excel - 菜单栏 - 公式 - 其他函数 - 兼容性


Excel 2013 新函数

```excel
ACOT
ACOTH
BASE
BITAND
BITLSHIFT
BITOR
BITRSHIFT
BITXOR
CEILING.MATH
COMBINA
COT
COTH
CSC
CSCH
DECIMAL
DAYS
DBCS
ENCODEURL
FILTERXML
FORMULATEXT
FLOOR.MATH
GAMMA
GAUSS
IFNA
ISO.CEILING
ISOWEEKNUM
IMCOSH
IMCOT
IMCSC
IMCSCH
IMSEC
IMSECH
IMSINH
IMTAN
MUNIT
NUMBERVALUE
PDURATION
PERMUTATIONA
PHI
RRI
ISFORMULA
SHEET
SHEETS
SEC
SECH
SKEW.P
UNICHAR
UNICODE
WEBSERVICE
XOR
```


Excel 2016 新函数

```excel
FORECAST.ETS
FORECAST.ETS.CONFINT
FORECAST.ETS.SEASONALITY
FORECAST.ETS.STAT
FORECAST.LINEAR
SWITCH
```


Excel 2019 新函数

```excel
AVERAGEIFS
COUNTIFS
CONCAT
IFS
MAXIFS
MINIFS
SUMIFS
SWITCH
TEXTJOIN
```


Office 365 新函数

```excel
ARRAYTOTEXT
FILTER
LET
RANDARRAY
SORT
SORTBY
SEQUENCE
UNIQUE
VALUETOTEXT
XLOOKUP
XMATCH

```




## 自动化

EXCEL 自动化有 4 种手段：

1. GUI（E.g. 单元格右下角拖动）
2. 公式（使用内置函数进行 函数式编程）
3. **VBA**
4. Python

这几种手段的组合、封装，就能够满足具体的需求。

如果实现简单、且一次性需求，那么写公式。
如果公式不会写，那么无脑 VBA。
如果需要循环，那么无脑 VBA。
如果判断逻辑复杂，那么无脑 VBA。

为什么无脑 VBA？
因为 VBA 可以调用 Excel 内置函数啊，公式只不过是 VBA lambda 表达式的封装罢了。所谓公式，不就是运用 Excel 内置函数进行函数式编程么，有编程经验的人都知道，是正常的编程方式（VBA）难，还是函数式编程难。



## 快捷键

```
F5    定位
F9    将表达式替换为表达式的值


```



## 公式、表达式、函数

公式的写法

1. 普通公式 `=<表达式>`
2. 数组公式 `{=<表达式>}`

E.g.
`=10+20`
`=A1+B1`
`=A1*A2`
`SUM(A1+A2)+SUM(B1+B2)`

函数：输入参数，会返回值。

表达式：Excel 函数、VBA 函数、单元格引用、名称（别名）、常量、运算符の组合使用，表达式最终要返回一个值。表达式这个抽象是我自己加的，但这么抽象显然比 公式-函数 要更清晰。

公式：是写在一个单元格里的，所以公式可以被看作为一个赋值语句，单元格本身是变量，表达式返回的是值。
单元格 `B1` 写了公式 `=SUM(A1+A2)`，其中 `=` 声明这是一个公式，`SUM(A1+A2)` 是表达式，这个表达式会返回一个值，这个值作赋给单元格 `B1`，这不就是个变量赋值语句吗。

布尔表达式：返回值为 `TRUE` 或 `FALSE` 的表达式；

名称：Excel - 选中一个或多个单元格 - 右键 - 定义名称。为单元格区域引用指定别名，即名称，可以看作变量的语法糖。方便复用，增强可读性。名称的作用域可以为当前 sheet 或当前 workbook，取决于你的指定。




## Excel 数据类型

「Excel 数据类型」与「VBA 数据类型」是不一样的，Excel 调用 VBA 时，实际上会把 VBA 数据类型转换为对应的 Excel 数据类型，反过来也一样。excel 的数据类型跟面向对象里的「数据类型」是一样的。例如这样调用 `DATE()` 函数，`DATE(2022,4,9)`，返回值为一个日期对象。

Excel 数据类型：

1. 数字
2. 字符串
3. 布尔值
4. 错误值
5. 数组
6. 变形体

1. 整数 Integer
2. 长整型 Long
3. 单精度浮点型 Single
4. 双精度浮点型 Double
6. 字符串 String `"公式、函数入参中使用双引号括起来表示字符串"`
7. 布尔值 Boolean
8. 数组 `{1,2,3}` `{=A1:C3}` `A1:A7`
8. 错误值
9. 变形体 Variant

Date：在Excel中，可以识别的日期范围为1900年1月1日到9999年12月31日，每个日期的序列值就是这个日期距离1900年1月1日的天数，一天的日期序列值为1。

Variant：当不知道变量所要表示的数据是什么类型时，就把它定义为Variant

一维数组：相当于 Python 的列表。

二维数组：相当于一个矩阵。



## 格式

前端展示数字的各种格式，如**日期**、千分位、货币、百分比、科学计数法，本质上都是数字，它们之前可以通过调整格式来正确显示。

Exce提供了两种日期系统一1900日期系统和1904日期系统。它们的最大区别就是起始日期不同。1900日期系统的起始日期是1900年1月1日，而1904日期系统的起始日期是1904年1月1日。默认情况下采用1900日期系统。对于1900日期系统，规定1900年1月1日的日期序列号为1，那么1900年1月2日序列号2，以此类推。数字0.5表示一天的一半，即中午 12 点。

计算一小时的序列号：=1/24
计算一分钟的序列号：=1/（24*60）


## 运算符

```excel
// 数值运算符
+
-
*
/
^
%


// 比较运算符
>
<
=
>=
<=
<>


// 通配符
*
?    单个字符
~    转义符号
~*
~?


// 特殊运算符
:    区域引用
&    字符串拼接 E.g. A1&A2
,    多个区域引用的集合 E.g. sum(A1:C2,C2:D10)
空格    返回两个区域引用的交集
()    括号，最高优先级
[]    


& 类似于 Python 中的对多个字符串用加号 + 进行连接
Excel: =A1&A2&"abc"
Python: value: str = A1 + A2 + "abc"
如果 A1 为数字 233，会自动隐式转换为字符串 "233" 再拼接。



```


## 引用


1. 相对引用 `A2`
2. 绝对引用 `$A$2`
3. 混合引用 `$A2` 只固定列 `A$2` 只固定行
4. 跨 sheet 引用 `<sheet_name>!<坐标>`
5. 跨 workbook 引用 `[数据.xlsx]shee_name!<坐标>`

单元格引用 & 区域 & range & array

数组 == 单元格区域

Excel 里的 `array` 数组，相当于 xlwings 的 `range()`

A1引用样式：`A2` `C3` `<字母><row index>` 这样的引用样式。对程序员来说并不友好，因为字母不好迭代。

R1C1引用样式：`R2C1` `R3C3` `R<row index>C<column index>` 这样的引用样式。对程序员来说方便许多。

| R1C1引用样式 | A1引用样式 |
| ------------ | ---------- |
| R1C1         | A1         |
| R2C1         | A2         |
| R3C1         | A3         |
| R3C3         | C3         |
|              |            |
|              |            |
|              |            |
|              |            |

Excel - 菜单栏 - 文件 - 选项 - 公式 - 勾选「R1C1 引用样式」


## 隐式类型转换

Excel 中存在大量的隐式类型转换，这点差评。




## 循环の函数

部分 Excel 函数自带了循环的功能。虽然这些函数的写法和功能是钉死的，但的确可以减少使用 VBA 自定义函数。前提是你的需求恰好能用这些函数解决，如果看了几眼，想不出怎么用 Excel 函数实现，那还是乖乖用 VBA。

```excel
LOOKUP()
VLOOKUP()
MATCH()
FIND()
FINDB()
SUMIF()
SUMIFS()    Excel 2019
AVERAGEIF()
AVERAGEIFS()    Excel 2019
COUNTIF()
COUNTIFS()    Excel 2019
```

可以看出，这些自带迭代功能的函数更像是 VBA 的语法糖。




## IF 函数

```excel
IF(<bool expression>, <value_if_true>, <value_if_false>)


返回值的类型 Return:
    Any
    即 IF() -> Any: ...

可能的返回值 Possible Value:
    1. value_if_true
    2. value_if_false

Examples:
    =IF(A2="Hello World", 999, 888)
    返回 999，或者返回 888

```



## IFS

```excel
Excel 2019

```


## SUMIF

```excel
SUMIF()

```



## SUMIFS



## VLOOKUP

```excel
VLOOKUP(<value>, <cell range>, <column index>, [TRUE|FALSE])

Return:
    Any

Examples:
    =VLOOKUP(DATE(2022,4,9),A:A,2,TRUE)
    =IF(VLOOKUP(DATE(2022,4,9),A:A,1,TRUE),TRUE,FALSE)
    =IF(VLOOKUP("abc?ef",A:A,1,TRUE),TRUE,FALSE)

```


## DATE

```
DATE(year,month,day)

Retrun:
    表示特定日期的连续序列号

Example:
    =DATE(2022,4,9)

```



## SUM

```excel
SUM(number01, number02, number03, ...)
AVERAGE(number01, number02, number03, ...)
MAX(number01, number02, number03, ...)
MIN(number01, number02, number03, ...)
COUNT(value01, value02, value03, ...)

参数最多 255 个

```


## 显示 `#N/A`

常见的错误值：

`#N/A` 通常表示查找类函数找不到关键内容
`#NAME?` Excel不知道公式中的字符是啥意思了
`#VALUE!` 公式引用的数字类型不对
`#REF!` 单元格引用无效
`#NUM!` 无效数字
`#DIV/0!` 将 0 作为除数了





# SSS