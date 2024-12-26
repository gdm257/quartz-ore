---
aliases:
  - Methematica
  - Methematica Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Mathematica 激活指南](https://tiebamma.github.io/InstallTutorial/)

[TieBaMma/InstallTutorial](https://github.com/TieBaMma/InstallTutorial)

[Mathematica Stack Exchange](https://mathematica.stackexchange.com/)

[mathematica吧-百度贴吧--自带帮助是最好的教材，提问前请先仔细查查](https://tieba.baidu.com/f?kw=mathematica&ie=utf-8&tp=0)


    个人感受是，如果Mma不能在10行代码内解决一个子问题，我绝不会使用Mma来干
    MMA 语言实在太古怪了，尽是没见过的概念，看起来不像是一门编程语言，好歹 Matlab 看一眼就懂，MMA 看了文档都不懂在说什么，放弃了。
    不得不吐槽过程控制语句这一部分，对Mathematica稍有了解的朋友都知道，在Mathematica里大量的使用过程式语句是非常不自然且不高效的一种做法，其他语言（比如C）中大量使用的For循环在Mathematica中丑陋而低效。
    首先旗帜鲜明，Mathematica就是一种不用写括号的Lisp。首先，我是mathematica的脑残粉，科大两次Mathematica讲座我都是主办人和主讲人之一，但是我并不觉得Mathematica是一种完美的编程语言。题主大约会快十种编程语言，并且经常写其中的四五种，Mathematica是题主写起来最缚手缚脚的编程语言之一。
    首先我们说开发环境吧，对于MMA自带的那个notebook，在这里写代码简直是一种身心的折磨。作为Vim粉这个就不多说了。
    mma虽然不用lisp那么写圆括号了，但是鉴于MMA是基于S表达式的， 一堆方括号不忍直视。。。。。。。特别是提取一个数组元素的，时候，简直要死了好吗！还有坑爹的For循环等，你丫不是说好了函数式编程么，有本事就不带副作用盯死啊



## Q&A

【Q】版本？

我用 12.1，因为可以支持高 DPI。如果硬件不行就 11.3。




【Q1】为何首次启动 Mathematica 时，没有弹出激活界面

【A1】如果之前安装过 Mathematica，且电脑又没有重装过。那么，再次安装 Mathematica 时，可能不会弹出激活界面。因为 Mathematica 卸载后，激活文件 mathpass 默认保留，不会自动删除。

如果之前是成功激活的，比如，之前成功激活了 Mathematica 8，然后卸载 Mathematica 8，安装 Mathematica 9，那么，这时 Mathematica 9 不会弹出激活界面，而实际上 Mathematica 9 已经激活了。

验证是否完整激活的一个办法是，尝试自由格式输入是否可用。




【Q9】激活不当，需要重置 Mathematica：Mathematica 已激活，但功能有限制，比如不能使用自由输入、虚拟全书、函数浏览器、帮助文档

解决步骤是

    删除残余信息。
    再重新激活。

对于 Windows 8 及更高版本的系统，可以利用 PowerShell。请以管理员权限打开一个 PowerShell 窗口，然后执行以下步骤。（Windows 7 自带的 Windows PowerShell 2.0 很不稳定、功能匮乏。如有需要，请更新。）

第 1 步，执行下面这段命令
Remove-Item -Path "$env:ProgramData\Mathematica\Licensing" -Recurse -Force

第 2 步，如果问题仍然存在，执行下面这段命令
Remove-Item -Path @("$env:ProgramData\Mathematica", "$env:USERPROFILE\AppData\Local\Mathematica", "$env:USERPROFILE\AppData\Roaming\Mathematica", "$env:USERPROFILE\AppData\Local\Wolfram", "$env:USERPROFILE\AppData\Roaming\Wolfram") -Recurse -Force

第 3 步，如果问题仍然存在，卸载 Mathematica，之后，执行第 2 步的命令，再执行下面这段命令
Remove-Item -Path @("Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research", "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica") -Recurse -Force

对于较低版本的 Windows，请阅读以下内容。

第 1 步，删除激活信息。

Windows XP 在这 2 个目录：
C:\Documents and Settings\Administrator\Application Data\Mathematica\Licensing
C:\Documents and Settings\All Users\Application Data\Mathematica\Licensing

Windows 7 及更高版本的系统在：
%ProgramData%\Mathematica\Licensing

之后，通常需要继续清理其他残留，要全部删除！（似乎，只有一些人会面临此问题，原因暂不明。已知的可能存在残留的地方列于下方，欢迎补充。）

第 2 步，如果问题仍然存在，删除下列文件夹：

%ProgramData%\Mathematica
%USERPROFILE%\AppData\Local\Mathematica
%USERPROFILE%\AppData\Roaming\Mathematica
%USERPROFILE%\AppData\Local\Wolfram
%USERPROFILE%\AppData\Roaming\Wolfram

第 3 步，如果问题仍然存在，卸载 Mathematica，之后，执行第 2 步，再删除下列注册表键（对于不同版本的 Mathematica，可能存在下列几个位置之一）：

HKEY_LOCAL_MACHINE\SOFTWARE\Wolfram Research
HKEY_LOCAL_MACHINE\SOFTWARE\Mathematica






【Q18】 安装后是否需要关闭 Mathematica 的自动更新

【A18】不需要。截止目前，Wolfram 对破解版没有任何打击措施。此外，有证据表明某些小的 bug 修复是通过自动更新进行的，所以，最好不要关。




## CMD

`;` 抑制输出，同 Matlab。如果你以一个分号（;）结束某个表达式， Mathematica 会计算其值而不显示它。

`expression1; expression2; expression3`    依次执行，并将 expression3 作为输出 Out



## 快捷键

**Mathematica 是带计算器的 Word**。MMA 的笔记本 .nb 之于 Java 的 .java、Python 的 .py、Markdown 的 .md、Word 的 .doc、PPT 的 .ppt。但 MMA 的编辑模式有些特别，MMA 的组织模式和 Notion 可以说是一模一样，MMA 基于单元，Notion 基于 Block。所以平时回车实际上还是在同一个单元，只有按方向键下 ↓ 或手动创建新单元，才会进入下一个单元。默认单元是 input，可以理解为命令行，所以你也可以把 MMA 当作脚本语言来使。

↓    新建单元
a + 1-6    N 级标题
a + 7    纯文本，即段落
s + Enter    运算（相当于命令行的回车执行）
复制代码前，用 Ctrl + Shift + I 将当前 cell 转换为 InputForm，再复制，可以避免代码变乱。
F1    对应函数帮助文档
F2    补全函数名
?function    帮助信息
自带帮助是最好的教材，提问前先打开软件按下F1仔细查查
将光标停在不认识的函数前/中/后再按F1即可调出相应帮助
看不懂英文的就老老实实装个中文版

9　没赋值的变量是蓝色的，注意这点能有效避免低级错误
10　赋过值的变量会变黑，注意这点能有效避免低级错误
11　内置函数全是黑色的，注意这点能有效避免低级错误
12　Mathematica中有四种括号，分工明确，功能全不同

    未赋值的全局符号是蓝色 (#002cc3)。
    已赋值的符号是黑色 (#000000)。
    Mathematica 内置函数都是黑色。
    局部变量是绿色 (#438958)。
    特殊局部变量是水绿色 (#3c7d91)。

Show 函数可以将多幅图合成为一个。 

    如果合并之后绘图范围不全，给 Show 函数添加 PlotRange -> All 选项。

Clear 函数清除符号的定义，ClearAll 函数还会清除属性等相关信息。



## 帮助

    自带中文版帮助是最好的教程。

?Sin
??Cos


## 注释

```mathematica
(* 注释 *)
```


## 命名

% 相当于 Matlab 的 ans，称为 Out。所以 MMA 实现管道很容易，都不需要中间变量


## 运算符

```mathematica
+
-
* or X Y Z    空格也代表乘
/
^

n*^ee    科学记数法

==
!=
===    恒等于
=!=    不恒等于
&&
||
!
True
False

=    赋值
=.    去掉对变量定义的任何规则
:=    延时赋值
+=
-=
*=
/=
i++
i--
++i
--i

```



## 数据类型

字符串 `"This is a string."`



## 列表

a = {2, 3, 5, 7}
List[2, 3, 5, 7]
FullForm[{2, 3, 5, 7}]
{{1, 3, 5, 7}, {2, 4, 6, 8}}    矩阵

Span
Part
list2[[7]]    访问第 7 个元素
list2[[-2]]    访问倒数第 2 个元素
list2[[{1, 3, 1, -2, -2, -1}]]    访问指定位置的元素
list2[[2;;5]]    访问第 2-5 个
list2[[2;;]]    访问第 2-end 个
list2[[;;5]]    访问第 1-5 个
list2[[;;]]    访问所有元素
list2[[1;;100;;2]]    访问 1-100 元素，步长为 2
list2[[;; ;;2]]    访问所有元素，步长为 2

matrix2[[m, n]]    访问 m 行 n 列的元素
matrix2[[All, 2]]    访问第 2 列的元素
matrix2[[3]]    访问第 3 行的元素



## 循环

Do[expression, n]    对 expression 执行 n 次
Do[expr,Infinity]
Do[expression, {i, Start, Stop[, Step]}]
Do[expression, {i, {2, 3, 5, 7, 11} }]
Do[expression, {i, Start, Stop[, Step]}, {j, Start, Stop[, Step]}]
Return
Break
Continue
Throw


## 函数

`FunctionName[arg1, arg2]`

内置函数名以大写字母开头（大驼峰式命名）且其参数在一对方括号里。几乎所有的内置函数都是以完整拼写出来的。特例是一些广为人知的缩写，比如 D 用作微分，Sqrt 表示平方根，Log 表示对数，Det 表示矩阵的行列式等等。完整拼出函数名的传统在你不知道是否存在某个函数完成特定任务时十分有用。

# SSS