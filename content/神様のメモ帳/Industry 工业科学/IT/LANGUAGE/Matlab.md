---
aliases:
  - Matlab
  - Matlab Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Documentation - MATLAB & Simulink](https://www.mathworks.com/help/)

[Documentation - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/)

[数学建模与数学实验 - 知乎](https://www.zhihu.com/column/ZhangJingxin)

[MATLAB临时抱佛脚 · Mengzelev's Blog](https://mengzelev.github.io/2019/01/16/matlab-getstart/)

[matlab 刷题 - Project Euler](https://projecteuler.net/)

[Matlab 内数据及数据类型转换 - 简书](https://www.jianshu.com/p/9570f76f3b4d)



## Compoile

[在Windows cmd下启动matlab command - 简书](https://www.jianshu.com/p/01d5f4c38ac3)

[MATLAB 启动文件夹 - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/matlab/matlab_env/matlab-startup-folder.html#bvkqb5q)

[启动时路径未成功设置 - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/when-path-not-successfully-set-at-startup_zh_CN.html)


Matlab

- Info:
    * Version: 
    * Run: src -(Shell)-> Execute
    * REPL: 
    * Dependency Manager: 
    * IDE: 
    * Formatter: 
    * Checker:
    * Unit Testing: 
    * CI/CD: 
    * Tag: Shell, Script, Science
    * Windows Environment: 
    * Linux Environment: 
- Main:
    * .java containing main()
        * maven build
        * gradle

* Matlab 可看作一种 Shell，类似于 PowerShell/bash/zsh.
* 你以为 matlab.exe 是 IDE，其实它更像 Shell，一个很重的 Shell.
* D:\Installer\Daily\MATLAB\R2010b\toolbox\local\matlabrc.m 效果等同于 ~/.bashrc


### i18n

设置 - MATLAB - {常规,帮助}


### help

[Find Text in Command Window or History - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/find-text-in-command-window-or-history.html)

[Find Functions to Use - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/find-functions-using-the-function-browser.html)

REPL 窗口の左侧的那条边，有个 `fx` 字样的图标，点击就能看见分类好的函数。


## Namespace

## % 注释

```matlab
% 单行注释

%{
多行注释
多行注释
%}

```

## 命名

### 规范

```matlab
蛇形或大驼峰.
namelengthmax 命令可以获取变量名长度上限(63).
大小写敏感.
可用字符: 字母、数字、下划线.
无需声明.



a = 1


1. 数值
2. 字符串
3. 矩阵
4. 元胞数组
5. 结构体

Numeric arrays    数字数组
Character arrays    字符数组
Logic arrays    逻辑阵列
Cells arrays    单元格阵列
Structure arrays    结构阵列
function handle    函数句柄



```

### 魔法变量

```matlab

**ans**  : 如果未定义变量名，用于默认的计算结果存储；
**pi**  : 圆周率；
**i / j** ： 虚数单位
**inf / Inf** : 无穷大
**eps** : 浮点运算的相对精度；
**realmax** : 最大的正浮点数；
**realmin** : 最小的正浮点数；
**intmin** : 最小的整数；
**intmax** : 最大的整数；
**NaN / nan**: 不定量；
nargin : 函数输入参数个数；
nargout : 函数输出参数个数；
lasterr : 存放最新的错误信息；
lastwarn : 存放最新的警告信息
flops : 浮点运算次数，用于统计计算量


```


## Pointer

## str

[Escape]
''
%%
\\
\a
\b
\f
\n
\r
\t
\v


## int

### 字面量

```
a = 1


1. 整型
2. 浮点型
3. 复型

single()    转换为单精度 32bit 浮点数
double
int8    转换为有符号 8bit 整数
int16
int32
int64
uint8    转换为无符号 8bit 整数
uint16
uint32
uint64
real    得到实部
imag    得到虚部
复型默认实部 64bit、虚部 64bit

format <格式符>    只是显示格式，不影响计算、存储
format short    小数点 4 位（默认）
format long    小数点 15 位
format shortEng
format longEng    整数加小数共 15 位
format shortG
format longG
format hex    十六进制
format rat    分数

科学记数法
>> 7.00e-02 == 0.07
>> 7.00000000e-02 == 0.07


```

## bool

## Numeric Arrays

> 所有 MATLAB 变量在底层都是多维数组，与数据类型无关。矩阵是指通常用来进行线性代数运算的二维数组。


### Literal

```matlab

1    2    3
4    5    6

A = [1 2 3;    4, 5, 6]
2行 3列の矩阵，
分号分隔行，
空格 or 逗号分隔元素。


```

### 特殊矩阵
**ones(m,n)**——生成m×n维的全“1”矩阵
**zeros(m,n)**——生成m×n维的全“0”矩阵
eye(m,n)——生成m×n维的单位矩阵（多余的行或列全为0）
diag(k或A) ——生成或提取对角矩阵
triu(A)——提取矩阵A的上三角部分生成上三角矩阵
tril(A)——提取矩阵A的下三角部分生成下三角矩阵
**rand(m,n)**——生成m×n维的(0,1)区间均匀分布的随机矩阵
**randn(m,n)**——生成m×n维均值为0，方差为1的标准正态分布随机矩阵
fiplr(A)——矩阵A左右翻转
fipud(A)——矩阵A上下翻转
fipdim(A,dim)——矩阵A特定维度dim(1,2)翻转
sparse()——生成稀疏矩阵
full()——将稀疏矩阵化为普通矩阵



### 【矩阵的维度、大小、长度】
a=ndims(A)     %返回矩阵A的维度（几维矩阵）
[I,J]=size(A) %返回矩阵A各维度维数的大小（几行,几列）
L=length(A)   %返回矩阵A各维度维数的最大值（行数,列数的最大值）,常用来测量向量的大小
B = size(A)
[row, col] = size(A)
[行数 列数]



### 【矩阵拼接、扩充、变形】
C = [A, B]——水平拼接
D = [A; B]——垂直拼接
repmat(A,[m,n])——重复生成m×n个的A
reshape(X, 3, 8)——把X变形为3×8的二维矩阵



### 【元素查找】
访问2维矩阵元素有两种方式：

A(1) 行列下标索引（坐标）
A(i,j)——第i行，第j列的元素

(2)线性索引
A(1),A(2), …, A(m*n)——元素依次取自第1列，再第2列，……
故A(i,j) = A( (j-1)*m+i)
注意，从 1 开始索引，而不是 0

两种索引间的转换函数：
[I,J] = ind2sub( size(A), IND)
[IND]= sub2ind(size(A), I, J)

还可以配合冒号「:」获取矩阵的一些元素
A(i,:)——矩阵A的第i行，所有列
A(:,j)——矩阵A的第j列，所有行
A(:,i:j)——矩阵A的第i到第j列，所有行
A(i:j,k:end)——矩阵A的第i到第j行，第k到最后一列
A(:,[1,3])——矩阵A的第1、第3列，所有行
A(i:j)——返回水平向量
A(:)——返回垂直向量，按线性索引返回矩阵A的所有元素（向量）


查找矩阵中满足一定条件的元素
find(A)    返回 非零向量のindice 为 向量
find(A) == find(A~=0)
find(A>2 & A<9 [,最多返回几个索引值])
find(A==7)
**[m, n] = find(X)** 返回坐标
**[m, n, value] = find(X)** 返回坐标、对应值
如果 X 为向量，则 find 返回方向与 X 相同的向量。
如果 X 为多维数组，则 find 返回由结果的线性索引组成的列向量。
如果 X 为空，则 find 返回一个空数组。

[I,J]=ind2sub(size(A),ind); %线性索引转行列下标索引
IND=sub2ind(size(A),I,J);  %行列下标索引转线性索引



### 【点运算】
点运算——
同型矩阵各个对应位置的元素做该运算

循环、函数中，注意要用点运算
自变量的幂必须用点幂 .^
尤其是函数
必须点运算
不然容易报错

常数 c 乘除矩阵 A 可以不用
但常数 c 必须点乘除 c .* exp(A)
我也不知这是为什么，反正答案都是这么写的
虽然理论上不需要这么做
照做就是了
只要答案一样的话

……我发现必须是 3.* x.^0.75
我已经搞不懂到底咋判断了，
**所以点运算最好都加上**

A.*B    点乘
A./B    点除（点右除）
A.\B    点反除（点左除）
A.^B    点幂


### 【矩阵の运算】
**A > B**——返回同尺寸矩阵，元素 0 or 1，A 对应元素 > B
**A == B**——返回同尺寸矩阵，元素 0 or 1，A 对应元素 == B
**A'**——转置
**inv(A)**——方阵的逆
pinv(A)——非方阵的广义逆，即ABA=A, BAB=B
norm(A)= norm(A,2); norm(A,1); norm(A,inf)——矩阵或向量的范数（平方和の开根）
**det(A)**——方阵的行列式
**rank(A)**——矩阵的秩
trace(A)——矩阵的迹
null(A)——基础解系（矩阵的零空间）
orth(A)——标准正交化
rref(A)——化行最简型（初等行变换解线性方程组）
subspace(A,B)——两个子空间的夹角（两个向量的夹角
[v,d]=eig(A)——方阵的特征值（对角阵d）与特征向量（v的列向量）






### 【三维矩阵】
可以想象成一本书的“行、列、页”。
处理k个m×n的二维矩阵，可用一个m×n×k的三维矩阵A：
A(:,:, 1) 表示第1个m×n矩阵（第1页）
A(:,:, 2) 表示第2个m×n矩阵（第2页）
………………
A(:,:, k) 表示第k个m×n矩阵（第k页）
每个A(:, :, k)与2维矩阵操作一样。


## 4. 元胞数组（表格）

数组 == 元胞数组 == 什么都能放の矩阵 == 什么都能放の表格
元胞 == 数组の元素

{} 花括号 来创建元胞数组。二维元胞数组就是一张表格，每个单元格里什么都可以放
() 圆括号 坐标，访问矩阵的元素
[] 方括号 创建矩阵。二维矩阵是只能放数值的表格
A = cell(7, 8) 创建 7×8 的空元胞数组
A{a, b} 访问数组 第a行 第b列 的元胞（cell）。数组的元胞类似矩阵的元素

矩阵是一个数学概念（线性代数里的），**数组是个计算机上的概念**。
你见过纯粹数学中有数组的概念吗？没有。
若不考虑运算结果的数学意义时，矩阵是数组的二维版本。


【数组的操作（函数）】
a(i,:) = []; ——删除a的第i行
iscell(a) ——判断a是否是元胞数组，返回逻辑值1或0；
celldisp(a)——显示元胞数组a中各元胞的内容；
celldisp(a,’cell1’)——显示元胞数组a中各元胞的内容，用“cell1”代替元胞数组名“a”；
cellplot(a)——以图形化的方式显示元胞数组a的内容.
cellfun(fun,a)——将函数fun分别做用在元胞数组a的每个元素上。




## 5. 结构体（json）

相当于 Pythonの字典：键值对の哈希表，key 可以是 num str tuple，value 可以取任何数据类型 { key: value }

A = struct( 'name', {{'Machine Learning', 'Data Mining'}}, 'price', [20 30] )
A.name
A.name(1)
A.name{1}



## 运算符

```matlab

Arithmetic Operators
\+ 加法 addition
\- 减法 subtraction
\* 乘法 multiplication
/ 右除（右边除以左边） right division
\ 左除 left division
^ 乘方 exponentiation
' 转置（行列互换）（复共轭转置）
.' 非共轭数组转置
.* 元素乘法
./ 元素右除
.\ 元素左除
.^ 元素乘方


Relational Operators
< 小于
<= 小于等于
\> 大于
\>= 大于等于
== 等于
~= 不等于


Logical Operators
& 逻辑 and
| 逻辑 or
~ 逻辑 not
&& 逻辑 and
|| 逻辑 or
|| 和 && 运算符的操作数必须能够转换为逻辑标量值，不能给矩阵用
A & B 返回矩阵，矩阵全是 0 or 1，1 表示 A and B 对应位置元素非零
A | B 返回矩阵，矩阵全是 0 or 1，1 表示 A or B 对应位置元素非零
xor(A,B) 返回矩阵，矩阵全是 0 or 1，1 表示 A or B 对应位置元素非零（但不是同时）

Special Characters
= 赋值 replacement; assignment
@
.
...
,
:    colon  单独的冒号表示全部  起点:步长:终点  起点:终点（步长默认 1）
3:7    本质是 [3 4 5 6 7]
;    行尾 ; 表示不打印输出
() 圆括号 引用数组中的元素，即坐标
[] 方括号 表示向量或矩阵。矩阵是只能放数值的表格
{} 花括号 表示元胞，就是一张表格。每个单元格里什么都可以放
%{ %}
%
!
?
""
N/A
~
< &
.?






优先级

1. 圆括号（）
2.  转置（.'）、共轭转置（’）、乘方（.^）、矩阵乘方（^）
3. 一元加法（+）、一元减法（-）、取反（~）
4.  乘法（.*）、矩阵乘法（*）、右除（./）、 左除（.\）、 矩阵右除（/）、矩阵 左除（\）
5.  加法（+）、减法（-）、逻辑非（~）
6.  冒号运算符（：）
7.  小于、小于等于、大于、大于等于、等于、不等于
8.  逐逻辑运算与（&）
9. 逐逻辑运算或（|）
10.  "避绕式"逻辑与（&&）
11.  "避绕式"逻辑与（||）

Order
1st 各种括号
2nd .' . .^ ^
2nd 正负号 取反~
3rd 乘法 除法
4th 加法 减法 非~
5th :
6th 大小等于
7th & | && ||


```

## for

```matlab

for 循环变量 = 初值:步长:终值
end

while 表达式
end

while amount < finalvalue
amount = amount*1.06+10000;
i = i+1;
end

break 结束循环
continue 结束本次循环，进入下一个循环
pause(延迟秒数)


```

## if

```matlab
if 表达式
elseif 表达式
elseif 表达式
else
end

表达式的值为矩阵，则 logical(表达式) 所得到的逻辑矩阵必须所有元素为 1 时，表达式为 true，否则表达式为 false。

switch 表达式（数值 or 字符串）
case 数值 or 字符串
case 数值 or 字符串
otherwise
end

try
catch
end


```


## function

[Name=Value in Function Calls - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_prog/namevalue-in-function-calls.html)

[Choose Command Syntax or Function Syntax - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_prog/command-vs-function-syntax.html)

```matlab

% 调用
max(a)
union(a, b)



```

# 文本

## disp

disp('print something') 输出函数， 输出项可以为矩阵或字符串


## format

[Set output display format - MATLAB format](https://www.mathworks.com/help/matlab/ref/format.html)

[Format Output - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/format-output.html)

[Set Command Window Preferences - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/command-window-preferences.html)

[Set Command History Preferences - MATLAB & Simulink](https://www.mathworks.com/help/matlab/matlab_env/command-history.html)


## input

A = input('Enter matrix A=>')
% 这样可以在执行该语句时首先给出提示，再接收键盘输入



## more

[Control paged output in Command Window - MATLAB more](https://www.mathworks.com/help/matlab/ref/more.html)



# Shell 管理

## ;

```matlab
a = 1
a = 1;    抑制输出，可以看作 bash 的 'cmd >& /dev/null'


```

## !

!command 执行外部命令

## @

@ 句柄、指针。类似 alias，例如「fun02 = @fun01」，你执行「fun02」其实等于替换成「fun01」

## ...

```matlab
% long statement on multiple lines
a = 1 + 2 + 3 ...
      + 4 + 5 ...
      + 6 + 7

行尾「...」可看作 bash 的行尾「\」.


```


## 快捷键

Tab    补全
f5    运行
f9    执行选中代码
f12    断点
c C    中断
c T    注释
c R    取消注释
c I    自动排版
c [    减少缩进
c ]    缩进
c D    查看函数源码

## class

class(<对象>) 获取对象类型

## clc
## doc
## exist
## help
## iskeyword
## lookfor
lookfor    对 man 进行 grep

## type

## userpath

## version

```matlab
version
version -java

```

## which

# File 管理

## cd


## csvread
## close

## delete

## diary

[Log Command Window text to file - MATLAB diary](https://www.mathworks.com/help/matlab/ref/diary.html)

## edit

## fopen

## fread

## fwrite

## home

## load

## ls/dir

## open

## pwd

## save

## xlsread
## xlswrite

# RAM 管理

## clear

## who


## whos


# 函数
## 三角函数

见截图


## 指数对数

exp(x) = e^x
sqrt(x) = x 开根号 = x^(1/2)

log(x)
log10(x)

linspace(左端点数, 右端点数 [,等距点个数])    生成等差间距行向量
logspace(左端点数, 右端点数 [,等距点个数])    生成对数间距向量
exp(a)    返回 e^a


## 逻辑

**logical(x)**——将x转换成逻辑值 1 or 0
**logical(A)**——每个元素转换成逻辑值 1 or 0
**xor( 2 < 3, 1 == 1 )**——异或，就是 OR、但不能同时为真
**xor(A,B)**——异或，A or B 但不能同时

if while 条件常用
eq(a, b)    true: a == b
ne(a, b)    true: q ~= b
gt(a, b)    true: a > b
ge(a, b)    true: a >= b
lt(a, b)    true: a < b
le(a, b)    true: a <= b
isequal(A, B)    true: A == B
isequaln(A, B)    true: A == B, NaN 视为相等


## symbol

**syms x t y a b**
**x = sym('x')**
平时用 x y 之类的变量时，得先赋值，不赋值就使用变量会报错。使用 sym 之后，不需要赋值就能直接将 x 写进表达式中然后执行



2. 如何使用 symbol
**symbol 当成一个数字使（常数、标量）**
e.g.
syms x;
y = cos(x)^2;
diff(cos(x)^2)
diff(y)


**e.g. 符号微分 diff**
syms x y;
f = @(x,y) x^2 * y;
diff(f, x)    二元函数 f(x,y) 对 x 的偏导
diff(f, y)    二元函数 f(x,y) 对 y 的偏导
diff(f, x, n)    f对x求n阶偏导


**e.g. 符号积分 int**
syms x y;
f = cos(x)^2;
int(f)    不定积分。单变量函数可以这么写，多变量默认是 int(f, x)
int(f, x)    不定积分。函数f对变量x
int(f, x, a, b)    定积分。函数f对变量x求从a到b的定积分
int(f, x, [a b])    定积分。函数f对变量x求从a到b的定积分


**e.g. 解带符号の等式 solve**
syms x;
solve(x^2 + 6 == 5*x)    解出 x = ?
solve(x^2 - 5*x + 6)
solve(x^2 - 5*x + 6 == 0)
syms y;
solve( x^3*y == 3, y )    解出 y = ?
solve( symbolic_expression == symbolic_expression, a_symbolic_variable )


**e.g. 解微分方程 dsolve**
syms y(t)
eqn = diff(y,t) == -0.05*(y-20);
con = y(0) == 100;
yS = dsolve(eqn,con)

syms y t
dy/dt == y, y(0) == 1
dsolve( 'diff(y,t) == y', 'y(0) = 1')
dsolve( 'Dy == y', 'y(0) == 1')



**e.g. 求极限 limit**
当 n->Inf，求 lim (1+x/n)^n = ?
syms x n;
limit( (1+x/n)^n, n, Inf)


**e.g. 简化表达式 simplify**
syms x
x = sqrt(sym(2)) – 1;
f = x^2 + 2*x -1;
simplify(f)


**e.g. 化多项式为标准形式 expand**
syms x
f = (x-3)^2  *  (2*x^3 + 4*x + 3)
expand(f)
ans = 2*x^5 - 12*x^4 + 22*x^3 - 21*x^2 + 18*x + 27


**e.g. 多项式の因式分解 factor**
factor 是 expand 的逆操作
syms x
f = x^4 - 1
factor(f)
ans = [ x - 1, x + 1, x^2 + 1]
即 x^4 - 1 == (x-1)*(x+1)*(x^2+1)


**e.g. 用数字替换符号变量 subs**
syms x
f = x^2 + 2*x - 3
令 x = 3
subs(f, 3)
subs(f, x, 3)
subs( x^2 + 2*x -3, x, 3)

syms x y
f = x^2*y + 2*x - 3*y
令 y = 4
subs(f, y, 4)
令 y = x^2
subs(f, y, x^2)





1. 如何定义 symbol
sym 类是一种新的数据类型。
这种数据类型的变量称为 符号变量。
创建符号对象の函数: sym() syms()
sym() 只能定义 1 个符号变量。
syms 定义多个符号变量。
class() 获取符号变量的类型。
symbols object: number, variable, expression, function
symbolic number % e.g. a = sym(1/3)
symbolic variable % e.g. x = sym('x')
symbolic function % e.g. syms g(x1,x2)
symbolic expression 是包含 symbols object の表达式
% e.g. 2/sym(5);
% e.g. phi = sqrt(sym(5)) + 1;
% e.g. f = phi^2 – phi -1;
% e.g. syms a b c x; f = a*x^2 + b*x + c;

syms a    % a = sym('a')
syms a b x1 x2 x3    % a = sym('a'); b = sym('b')...
syms g(x1,x2) % class(g) == 'symfun'; class(x1) == 'sym'; class(x2) == 'sym';






## 自定义函数

自定义函数，准确的说是文件函数，必须是单独的 .m 文件。在命令行能创建的只有内联函数或匿名函数。

function [输出形参表] = 函数名(输入形参表)
注释说明部分
函数体代码部分
end

调用：MATLAB 通过文件名来调用函数，而非函数名，因此文件名、函数名最好一致。

函数不能直接在命令行中创建。
错误: 此上下文中不支持函数定义。请在代码文件中创建函数。


```matlab
function output_var = function_name(input_var1, ...)
function [output_var1, output_var2, ...] = function_name(input_var1, ...)
% 当输出形参多于1个时，用方括号括起来
% 所有 output_var 都不会存入命令行的 workspace
% 所有 input_var 都不会存入命令行的 workspace
% function_name.m

output_var1 = exp(input_var1);
% 行尾尽量使用 ; 分号，不然会在命令行中显示执行函数的信息。

global y
% 声明 y 为全局变量。
% 其他文件函数只要也声明一句 global y，
% 就可以直接在其他函数里使用变量 y 了。
% 同理，要在命令行中访问全局变量，
% 只需 global y 一下即可。
% 因此完全不必担心变量重名问题，
% 函数中的局部变量不受命令行的变量影响，
% 反过来局部变量也不会影响命令行中的变量，
% 所以变量名一样也没关系。
% The global command declares certain variables global, and  therefore their values are available to the basic workspace  and to other functions that declare these variables global.

if nargin == 1
    fout = a;
elseif nargin == 2
    fout = a+b;
elseif nargin == 3
    fout = (a*b*c);
else
    fout = zeros(1);
end
% 变量 nargin 为输入形参的个数
% 变量 nargout 为输出形参的个数
% 如上，可利用 nargin nargout
% 不同形参个数时，执行不同的代码

end
% 可省略







% Subfunction
```


## 内联函数

可以让用户编写简单的函数而不需要创建M文件。inline已经老掉牙，不建议使用，连ezplot都不推荐

f=inline('x^2+y','x','y')
f(2,3)
name=inline('函数表达式', '变量1', '变量2', ……)
name(实参列表)



## 匿名函数

匿名函数具有内联的所有优点，并且效率比更高。匿名函数的主要功能是：
（1）可以代替“将函数编写为单独的m-文件”；
（2）可以实现符号函数的赋值运算；
（3）很方便地对含参变量函数进行操作。

f=@(x1,x2)x1^2+x2^2
f(2,3)
f=@(参数1, 参数2, …) 函数表达式



## 数据类型转换

logical()

string
char
celest
intest
mat2str
num2str

int8；uint8；int16；uint16；int32；uint32；int64；uint64
fix, floor, ceil, round 取整
str2double
str2num
native2unicode
unicode2native

cell2mat
cell2struct
mat2cell
num2cell
struct2cell



## 多项式 Polynomial

roots(A)——返回多项式的根
**poly(r)**——返回各个多项式系数
**y = polyval(A, [1,2,3])**——返回 x = 1,2,3…时的 y 值，y(x) = ax^n + bx^(n-1)+…
conv(f,g)——返回 f(x)g(x) 的多项式系数
conv(f,g)——返回 f(x)*g(x) 两多项式的积の新多项式系数
deconv(f,g)——返回 f(x)/g(x) 的多项式系数

**polyint(p)**——多项式の积分。返回 f 多项式系数向量 p 的 不定积分的系数向量（即 F 的系数向量）
**polyder(p)**——多项式の微分。返回 F 多项式系数向量 p 的 微分的系数向量（即 f 的系数向量）


一元多次
2x^3 - 4x^2 + 8x - 7 = 0
A = [2 -4 8 -7]
roots(A) = r
poly(r) = A = [1 -2 4 -3.5]

一元二次方程
ax^2 + bx + c = 0
x^2 + Bx + C = 0

A = -2a/b
C = c/a
(A+u)(A-u) = C
x1 = A+u
x2 = A-u

对称轴 -b/2a = A
开口 a>0 向上
b^2-4ac = 0 唯一解
b^2-4ac > 0 两个解
b^2-4ac < 0 无解



## 线性方程组

解方程原理
Ax = b
**x = A\b** = inv(A) * b = A^-1 b
具体代码【见截图】

线性方程组 System of Linear Equations（多元一次方程组）可以抽象成
Ax = b
A 指的是「系数矩阵」
x 指的是 [x1 x2 x3 ...]
b 指的是方程组等号右边那一列常数
[A b] 指的是「增广矩阵」

非齐次线性方程组：b 全是 0
齐次线性方程组：b 至少一个数不是 0

非齐次
    唯一解——rank(A) < rank(A, b)
    通解——rank(A) == rank(A, b) < 未知数个数 == 行数
    无解——rank(A) == rank(A, b) < 未知数个数 == 行数

齐次
    唯一解（叫做零解）——det(A) != 0
    通解（叫做非零解）——det(A) == 0


唯一解的前提是矩阵A有逆。
方阵、且非奇异阵才有逆；
|A|=det(A)=0 这叫奇异矩阵；

行列皆满秩 rank(A) == 行数 == 列数，有唯一解

如果方程组有无数个解，可以以下方法得到其中一组「**特解**」
x = pinv(A)*b


## 函数の零点、根

fzero 求根，求非线性函数的根。

x0 = 7;
x0 = [3, 12];
**fzero(@sin, x0)**
% 求正弦函数 sin(x)=0 在 x0 附近的零点
% 「零点」是标量，是 x 的值
% 「零点」不是坐标，而是 f(x)=0 时 x 的值

一元二次方程
对称轴为 -b/2a


## 函数の最小值

**fminbnd(@function_name, x1, x2)**
% 单变量函数
% f(x) 在区间 x1 <= x <= x2 上的「最小值」


fminsearch(@function_name, x0)
% 多变量函数
% f(x1, x2) 的「最小值」，从向量 x0 开始
% x0 = [x1, x2, ...]
% x0 必须由用户提供
function f = f01(x)
f = x(1).*exp(-x(1).^2-x(2).^2);
fminsearch(@f01, [0, 0])


## 极限

>>syms h n x
>>limit((cos(x+h) – cos(x))/h, h, 0)
>>limit((1+x/n)^n, n, inf) % 趋向正无穷时的极限

limita(f,t,a)当符号变量t->a时，函数f的极限，t缺省x，a缺省为0



## 绘图

2D绘图

1. 离散自变量 x
2. 离散函数值 f
3. 绘图 plot(x,y)


3D绘图

1. 离散自变量 x y，网格离散化 [xx, yy]
3. 离散函数值 f
4. plot3(xx,yy,f)

**figure**——新建一个 figure 来绘图
**subplot(行数,列数,分区的indice)**——图表（分区）
**hold on**——绘图时追加到已有画布 Figure
**hold off**——每次绘图单独新建画布 Figure

什么是离散化？
简单的说就是「穷举、举例子、全部列出」
网格化本质也是离散化

**x = a:xh:b**——离散化自变量
**y = c:yh:d**——离散化自变量
**[XX, YY] = meshgrid(x,y)**——返回二维网格坐标，即离散化二维坐标
**[XX, YY, ZZ] = meshgrid(x,y,z)**——返回三维网格坐标，即离散化三维坐标
waterfall
**[Px, Py] = gradient(XX, YY, xh, yh)**
**quiver(XX, YY, Px, Py)**——2D箭头图、矢量图
**contour(x,y,f)**——2D等高线图（3D函数の2D等高线）
contour3——3D等高线图（3D函数の3D等高线）

**plot(x,y)**——2D线图，其中x和y为坐标向量
**plot(X1,Y1,LineSpec1, ..., Xn,Yn,LineSpecn)**——同时画多条线
plot(x,y, LineSpec)——定制线的属性
plot3——3D线图
**surf(X,Y,Z)**——3D曲面图
surfc
**mesh(x,y,f)**——3D网格图
meshc
meshz
**histogram**——直方图
hist——直方图（不推荐；请使用 histogram
fplot 2D绘图
**bar**/barh 条形图
**scatter(x,y)**——散点图，效果同 plot(x,y,'o')

print –dfileFormat –rresolution fileName
print –dpdf f1.pdf % PDF
print –depsc f1.eps % EPS
print –djpeg –r300 f1.jpg % JEPG, 300 dpi

[X, Y] = meshgrid(x,y);
surf(X,Y,Z);
[X,Y,Z] = sphere(50);

LineSpec——doc LineSpec 线条设定
plot(x,y, '[线条类型][标记设定符][颜色设定符]')
线条类型
    -  默认实线
    -- 虚线
    :  点线
    -. 点划线
标记设定符
    +
    o
    *
    .
    x
    square/s
    diamond/d
    ^
    v
    >
    <
    pentagram/p
    hexagram/h
颜色设定符
    r
    g
    b
    c  青蓝色
    m  品红色
    y
    k
    w

一大堆属性，详见 doc 'Line 属性'
LineWidth——线条宽度
LineStyle
Marker
MarkerSize——标记的大小
MarkerEdgeColor——边缘颜色
MarkerFaceColor——填充标记的面的颜色
Color

title('My Title' [, 'FontSize', 12])
title(date)——日期作标题
title(['Temperature is ',num2str(c),' C'])——字符串拼接成标题
title('Cobb-Douglas production function z(x,y) = 1.15x^{0.75} y^{0.25}', 'FontSize', 12)
xlabel('amount of labor', 'FontSize', 12);
ylabel('amount of capital', 'FontSize', 12);
ylabel('amount of production', 'FontSize', 12);
xlim([-2,7])——x轴显示范围
ylim([0, 1.2])——y轴显示范围
text
gtext
legend('str', 'str')——添加图例（告诉你这根线是啥，那根线是啥，常用于多数据集）
contour(X,Y,Z,'ShowText','on');
plot(x,y,’LineStyle’,’:’,…
’Marker’, ’*’,…
’Color’, ’b’,…
’LineWidth’,8,…
’MarkerSize’,8);
colorbar % showing color scale



## 数值微分

Numerical Differentiation,数值微分
原理是 y' = Δy/Δx

**diff( [y1 y2 ...] )**    差分
diff(A, n)    递归进行 n 次差分
diff(A, 2) == diff(diff(A))

**gradient**    梯度

**polyder(A)**    多项式の导数の系数
**k = polyder(A,B)**    多项式の积 A*B の导数の系数
**[f, g] = polyder(A,B)**    多项式の商 f/g の导数の系数



## 数值积分

Numerical Integration,数值积分
积分即梯形面积和

记得 向量/矩阵 全都要用「点运算」

**integral(function, xmin, xmax)**    数值积分
**integral2(FUN,XMIN,XMAX,YMIN,YMAX)**    二重积分
integral3    三重积分
integral 如何处理二重积分？
——见 Week 9 Lab 7 Q2 2.2
```matlab
%2.1
f2 = @(x,y) (sqrt(6)/(2*pi)).*exp(-0.5*(2*x.^2+3*y.^2));
integral2(f2,0,1,1,2)
%2.2
f2_x = @(x) (sqrt(6)/(2*pi)).*exp(-0.5*2*x.^2);
f2_y = @(y) exp(-0.5*3*y.^2);
value = integral(f2_x,0,1)*integral(f2_y,1,2)
```


**trapz(x,y)**    数值积分
x = 0:0.1:10
y = exp( -(x.^2) )
trapz(X,Y) 根据 X 指定的坐标或标量间距对 Y 进行积分。
如果 X 是坐标向量，则 length(X) 必须等于 Y 的大小不等于 1 的第一个维度的大小。
如果 X 是标量间距，则 trapz(X,Y) 等于 X*trapz(Y)。
trapz(___,dim) 使用以前的任何语法沿维度 dim 求积分。必须指定 Y，也可以指定 X。如果指定 X，则它可以是长度等于 size(Y,dim) 的标量或向量。
如果 Y 为矩阵，则 trapz(X,Y,2) 对 Y 的每行求积分。

trapz 如何处理 x 定义域有正负无穷？——无法处理，请用 integral

cumtrapz

quad
quad1



## 定积分、不定积分


**integral(@f, xmin, xmax)**    数值积分

**polyint(A)**——多项式の不定积分 F(x) + C，默认 C == 0，向量 A 是多项式系数
polyint(A, C)——多项式の不定积分 F(x) + C の 系数行向量
polyint(A, [x0 x1])——多项式の积分 F(x)+0 在 x=x0, x=x1 处的值
diff( polyint(A, [x0 x1]) )——多项式の定积分 F(x)|(x0<=x<=x1)






## 微分方程

ode45 解 1st ODE
**[t, y] = ode45(ODEFUN,TSPAN,Y0)**
**[t, y] = ode45(@(t,y) dy/dtの表达式 , [t0, tfinal], Y0)**
e.g. [t,y] = ode45(@(t,y)0.05*y-200, tspan, y0); % ODE dy/dt = 0.05y - 200
[t,x] = ode23/45('xprime', [t0,tf], x0, tol, trace)
求解非刚性微分方程 - 中阶方法
ODEFUN == dy/dt == f(y,t) = @(y,t) f(y,t)
tspan = [t0 tf]——即自变量 t 的取值范围 [最大值 最小值]
y0 就是「初值条件」，即 t=t0 处 y = y0，题目会给出 y0，照着填就是了。

2nd ODE，用可降阶方法
微分方程 y'' == f(x,y,y')
换元 p = y' 为 p' == g(x,p)
ode45(p_ode_fun, [t0, tf], p0) 解出 p(t)
y = pの积分


ODE45 原理是 Euler's Method
ODE45 用于暴力计算 ODEの初值问题
Euler’s method is the simplest numerical method for the initial value problem

微分方程（DE）是描述函数与其导数之间的关系的方程。
常微分方程（ODE）是未知函数只有 1 个自变量的微分方程。
偏微分方程（PDE）是指含有未知函数及其偏导数的方程。描述自變量、未知函數及其偏導數之間的關係。


Taylor Series,泰勒级数

Taylor展开
taylor(f,n,a)函数f对符号变量x或最接近字母x的符号变量在a点的n-1阶泰勒多项式,n缺省时值为6,a缺省值为0



级数和
symsum(s,t,a,b)``s中的符号变量t从a到b的级数和

解方程
solve(f,t)对f中的符号标量t解方程f=0
solve('fname',t) 求解形如f(x)=g(x)的方程
dsolve('S','s1',...'x')



## 复利

「复利」俗称利滚利
Compound Interest
可以按月利滚利
可以按年利滚利
没特别说明
**默认是按月**
**每月的利率是 rate/12**
例如题目说利率是 4%
那每月利率就是 4%/12



## hist & bar

W11 Lab 9 Q1

**hist(x) y轴是 x_frequency、x轴是 x_value**
**bar(y) y轴是 y_value、x轴是 y_第几个**

**[freq, x_center_value] = hist(x)**
**bar(x_center_value, freq)** y轴 freq、x轴 x_center_value 当作构建出来的新 x_value 就好
**bar(x,y) 在 x 指定的位置绘制条形**

hist是画直方图；bar是画柱状图；
直方图展示数据的分布，柱状图比较数据的大小。
直方图上的每根柱子都是不可移动的，X轴上的区间是连续的、固定的。
直方图柱子无间隔，柱状图柱子有间隔
直方图柱子宽度可不一，柱状图柱子宽度须一致。
柱状图柱子的宽度因为没有数值含义，所以宽度必须一致。
但是在直方图中，柱子的宽度代表了区间的长度，根据区间的不同，柱子的宽度可以不同，但理论上应为单位长度的倍数。

histogram(X) 基于 X 创建直方图。histogram 函数使用自动 bin 划分算法，然后返回均匀宽度的 bin。histogram 将 bin 显示为矩形，这样每个矩形的高度就表示 bin 中的元素数量。
例如，
histogram(X,nbins) 使用标量 nbins 指定的 bin 数量。
histogram(X,edges) 将 X 划分到由向量 edges 来指定 bin 边界的 bin 内。每个 bin 都包含左边界，但不包含右边界，除了同时包含两个边界的最后一个 bin 外。

**hist(x, nbins)**
histogram(x,nbins)
bar(y)
**bar(x,y)**
bar(x,freqy)

1. 频率
x = [1 3 5 5 5 5 7 9 9 9 10 13 14]
**[freq_abs, bin_location] = hist(x)**

hist(y,x)
y = [92,94,93,96,93,94,95,96,91,93,95,95,95,92,93,94,91,94,92,93]
x = 6 or x = [91:96]
推荐写 x = 6 that
**hist(y,6)** 表示有 6 根直方，分成 6 组
title('Absolute Frequency Histogram for 20 Tests')
ylabel('Absolute Frequency')
xlabel('Thread Strength (N)')

**bar(y)**
y = [75 91 105 123.5 131 150 179 203 226 249 281.5]
**bar(x,y)**
bar(x,y,'stacked')
x = 1900:10:2000

relative frequency
**y = y/sum(y)**
bar(x,y)

2. scaled frequency 总面积为 1
**bar( min:width:max , freq_abs/(length(x) * width) )**
y_abs=[1,0,0,0,2,4,5,4,8,11,12,10,9,8,7,5,4,4,3,1,1,0,1];
binwidth = 0.5;
area = binwidth*sum(y_abs);
y_scaled = y_abs/area;
bins = [64:binwidth:75];
bar(bins,y_scaled)
ylabel(scaled frequency'),
xlabel(‘height (in.)')

96% u-2o <= x <= u+2o
99.7% u-3o <= x <= u+3o
68% u-o <= x <= u+o



## 统计

1. 生成 **均匀分布**の [a, b] 上的の随机数 **x = a + (b-a)* rand(m,n)**
2. 生成 **正态分布**の标准差为 std、均值为 meanの随机数 **x = std * randn(m,n) + mean**
3. **rand(m,n)** 均匀分布 in [0,1]
4. **randn(m,n)** 正态分布 where std=1, mean=0

**scatter(x,y)**——散点图，效果同 plot(x,y,'o')
scatter(x,y, 'filled')
qqplot(x,y)——Quantile-quantile plot
**quantile(x, 0.5) == median(x)**
quantile(x, p)——看不懂
y = quantile(x,[0.025 0.25 0.50 0.75 0.975])
Find the the quantiles for the cumulative probabilities 0.025, 0.25, 0.5, 0.75, and 0.975

mean(x)——算术平均
var(x)——方差
std(x)——标准差
median(x)——中位数
cov(x)——协方差
mode(x)——最高频数
var == 1/n ∑(xi - mean)^2
std == var^(1/2)

**abs(c)**——|c|
**abs(A)**——每个元素取绝对值
**mod(被除数, 除数)**——算余数
**mod(A, 除数)**——每个元素取模

**[value, a] = min(A)**——每列の最小值、是该列の第几个
**[value, a] = max(A)**——每列の最大值、是该列の第几个
**[value, a] = min(A,[],2)**——每行の最小值、是该行の第几个
**[value, a] = max(A,[],2)**——每行の最大值、是该行の第几个
**min(A)**——按列求矩阵A最小值
**min(A,[],2)**——按行求最小值
**max(A)**——按列求矩阵A的最大值
**max(A,[],2)**——按行求最大值

**sum(A) == sum(A,1)**——计算每列の元素和
**sum(A,2)**——计算每行の元素和
**sum(A>7)**——每列大于 7 の元素个数
**sum(A>7, 2)**——每行大于 7 の元素个数

sum(A)——[第1列和  第2列和  第3列和 ……]
max(A)——[第1列max  第2列max  第3列max ……]
min(A)——[第1列min  第2列min  第3列min ……]

**mean(A) == mean(A,1)**——按列求平均值
**mean(A,2)**——按行求平均值

**sort(A) == sort(A,1)**——每列按从小到大排序
**sort(A,2)**——每行按从小到大排序

prod(A)——矩阵A各列元素求积
dot(A,B)——A,B（同型）各列做内积（点积）
cross(A,B)——A,B（至少某个维度是3维）的外积（叉积）
**cumsum(A)**——返回相同大小的矩阵，新矩阵某列的第 k 个元素值为 A 的对应列的前 k 个元素和
cumsum([1 4; 10 20]) = [1 4; 11 24]
cumprod(A)——每列元素的累计积
cumprod([1 4; 10 20]) = [1 4; 10 80]



## 插值

```matlab
% ------- 插值 -------
% 插值你见过的，就是图片缩放算法
x = [0 0.25 0.75 1.25 1.5 1.75 1.875 2 2.125 2.25];
y = [1.2 1.18 1.1 1 0.92 0.8 0.7 0.55 0.35 0];


% 1. 线性插值 piecewise linear interp
x_int = 0:0.1:2.25;
y_int = interp1(x,y,x_int);
% 插值可视化
figure
plot(x,y,'ro', x_int, y_int)

% interp2 二元の线性插值
x_int = 0:0.5:15;
y_int = 0:1:100;
[xx, yy] = meshgrid(x_int, y_int);
z_int = interp2(x_int, y_int, z, xx, yy);

figure
surf(xx, yy, z_int)

% another interp2
x = [0,1]; y = [0,2];
z = [49,54;53,57];
interp2(x,y,z,0.6,1.5)


% 2. 三次插值 cubic spline
y_int2 = spline(x,y,x_int);
y_int3 = interp1(x,y,x_int, 'spline');
% 插值可视化
hold on
plot(x,y,'ro', x_int, y_int,'-.g', ...
     x_int,y_int2,'b', ...
     x_int,y_int2,'--cx')


% 3. Cubic Spline interpolation
% 理论上是 spline(x,y,x_int)
% 实际上课件用 interp1(x,y,x_int, 'spline')
% 按照课件来
figure
vq2 = interp1(x,v,xq,'spline');
plot(x,v,'o',xq,vq2,':.');
xlim([0 2*pi]);
title('Spline Interpolation');

```






## 回归

```matlab
% ------- 回归 -------
x = [0 0.25 0.75 1.25 1.5 1.75 1.875 2 2.125 2.25];
y = [1.2 1.18 1.1 1 0.92 0.8 0.7 0.55 0.35 0];

% 1. 线性回归 y = ax + b
p = polyfit(x,y,1)
xfit = 0:0.1:2.25;
yfit = polyval(p, xfit);
figure
plot(x,y,'or', ...
     xfit,yfit,'k')

% 1.2 残差の图 Residual plot
residual = y – (p(1)*x+p(2))
plot(x, residual, '.r');
title('residual plot');
xlabel('x');
ylabel('residual');


% 2. 多项式回归 y = an*x^n + ... + a1*x + b
polyfit(x, y, k) % 回归方程の多项式の系数
p2 = polyfit(x,y,2); % y = a2*x^2 + a1*x + b
p3 = polyfit(x,y,3); % y = a3*x^3 + a2*x^2 + a1*x + b

xfit2 = 0:0.1:2.25;
yfit2 = polyval(p2, xfit);
xfit3 = 0:0.1:2.25;
yfit3 = polyval(p3, xfit);

figure
plot(x,y,'or', ...
     xfit,yfit,'k', ...
     xfit2,yfit2,'g', ...
     xfit3,yfit3,'c')
```



## 未分类函数

cellplot
eval
evalc
nnz
cast
typecast
num2str
ischar
iscell
iscellstr
isinf
isinteger
isfloat
isletter
ifnan
isnumeric
isspace
isreal




# 概率


**概率函数** == 分布律 == 概率密度函数 == 密度函数 == 概率质量函数 == f
                  ⇧⇩
                  ⇧⇩
           (求导) ⇧⇩  (积分)
                  ⇧⇩
                  ⇧⇩
累积分布函数 == 连续概率分布函数 == 连续概率分布 == 概率分布函数 == 概率分布 == **分布** == **分布函数** == 联合分布函数 == 概率和 == 离散概率分布函数 == 离散概率分布 == F

离散概率分布函数:
伯努利分布 (Bernoulli distribution)
二项分布 (binomial distribution)
多项分布 (Multinomial Distribution)
泊松分布 (Poisson distribution)
几何分布 (geometric distribution)
超几何分布 (Hypergeometric Distribution)
均匀分布 (uniform distribution)

连续概率分布函数:
正态分布 (normal distribution) == 高斯分布 (Gaussian Distribution)
指数分布 (exponential distribution)
β分布 (beta distribution)
均匀分布 (uniform distribution)
韦伯分布 (Weibull distribution)


「随机变量」就是变量
就是自变量
分为
离散型随机变量
连续型随机变量

「X」就是取值
名义上叫做随机变量

「P/p」就是概率
pk = P(X = k)

「F(k)」== P(X <= k)
概率和
累积分布函数

「f(x)」== F'(x)
概率密度函数
给出定义域后
积分所得的面积就是概率

「多维随机变量」就是个向量
也叫随机向量
每个元素都是自变量

「联合分布函数」是针对多维随机变量の累积分布函数
上边的所有内容都是针对一维随机变量
一维随机变量只有 1 个自变量
二维随机变量有 2 个自变量
例如二维正态分布

「原分布」是随机向量の累积分布函数 F

「边缘分布」是随机向量 X 其中一个分量 Xi の累积分布函数 Fi
类似偏导数

「边缘密度」就是 fi
参考边缘分布

「条件概率分布」字面意思
某些条件限制时の累积分布函数

「数学期望」是随机变量的均值
也叫均值
写成 X 头顶加一横
或写作 E(X)
均值是加权的和
连续型随机变量的均值通过 概率密度函数の积分 来算
期望这种说法源于赌博
本来并不通俗易懂
但用多了就成公认说法了

「方差」差の平方
Var(X) == E( X - EX )^2 == σ^2
取值 X 与均值（数学期望）の差の平方

「标准差」方差开根号 == σ

「协方差」== E[ (X - E(X)) * (Y - E(Y)) ] == Cov(X,Y)

「相关系数」

「矩」== E( (X-c)^k )
c 是常数
k 是正整数



# 线性代数

## 简单运算

1. 数乘：每个元素乘一个数
2. 加法：两个矩阵的对应位置元素相加
3. 减法：两个矩阵的对应位置元素相减
4. 转置：横竖交换，行变列、列变行


## 复杂运算

1. 乘法
2. 行列式
3. 逆矩阵
4. 除法
5. 反除（左除）
6. 秩


1. 乘法
前提是前矩阵的宽度 == 后矩阵的高度
前矩阵的行 × 后矩阵的列，每次乘完结果相加，每次得到新矩阵的其中一个元素的数值
新矩阵的高 == 前矩阵的高
新矩阵的宽 == 后矩阵的宽

2. 行列式（绝对值）
记住是「算对角线」就好，反正方法也记不住，我也不懂有啥意义
前提是矩阵是方阵
试图让对角线下边的三角形全部变成 0，然后对角线的所有数字的乘积就是了。

4. 除法（右除）
除法是乘法的逆运算。
A/B == A*inv(B)
inv(B) B的逆

5. 反除（左除）
A\B == inv(A)*B
注意，A\B != B/A

6. 秩
矩阵A 初等变换为 梯矩阵B，B 的非零行的总数就是「秩」
行满秩指的是 rank(A) == 行数
列满秩指的是 rank(B) == 列数
行列皆满秩 rank(A) == 行数 == 列数，有唯一解




# 微分方程

「微分方程学」一句话概括就是
求微分方程の解
无论你是入门还是深入
几乎都是为了寻找微分方程的解


「微分方程の解」是未知函数 y 的表达式
Solution
General Solution
Particular Solution
解 y = φ(x) 代入 DE 后能使方程成立
分为 显式解、隐式解
也可分为 通解、特解
显式解 就是 y = φ(x)
隐式解 就是 Φ(x, y) = 0
通解 就是 y = Φ(x, c1, c2, ..., cn)
特解 就是 y = Φ(x, c1, c2, ..., cn) 取一组特定的 c1, c2, ..., cn
n == 微分方程の阶数
c 是任意常数
隐式解 也叫积分
特解 是在 定解条件 下的
显式解、隐式解 是从 y 的函数表达式描述方法的角度进行分类
通解、特解 是从 y 是否固定的角度来分类


「通解」如果 DEの解の独立常数の个数 == DEの阶数
y == y(x, C1, C2, ..., Cn)
这样的解就是通解
可以理解为
通解还需要 n 个参数（任意独立常数）才能成为特解
e.g. 1st DE——y'== 2x の解——y(x) = x^2 + C——有 1 个独立常数 C
e.g. 2nd DE——m* d^2 h/dh^2 == -mg - k* dh/dt の解——y(t) = C1 + C2 * exp(-kt/m) - mgt/k——有 2 个独立常数 C1 C2


「隐式通解」是通解的一种
也叫通积分


「特解」通解的参数取值变成特解


「定解条件」就是让通解变成特解的条件
Initial Condition
e.g. 初值条件、边值条件
初值问题也叫柯西问题


「定解问题」就是提供一组 定解条件 然后让你求 DEの解 の 题目
定解条件是 初值条件 的定解问题叫 初值问题
e.g. 给定 x0, y0
即  φ(x0) = y0
于是可以求出特解
定解条件是 边值条件 的定阶问题叫 边值问题


「初值条件」y(x0) == y0 & y'(x0) == y1 & ... & y^(n-1) (x0) == y_(n-1)


「积分曲线」就是微分方程の解の绘图曲线
y = φ(x) 表示一条 Oxy 平面上の曲线
特解 φ(x0) = y0 是一条过点 (x0, y0) の曲线
通解 y = φ(x, c) 是一堆特解那样的曲线组成の一族曲线（一堆曲线）


「方向场」
也叫 向量场
等斜率线 == 等斜线


「动力系统」


「驻定」
也叫自洽

「非驻定」
也叫非自洽


「相空间」


「奇点」


「轨线」


「微分方程」是描述 自变量、未知函数、未知函数的导数 之间的关系の方程
Differential Equation (DE)
DE 分为 ODE PDE
ODE 分为 线性、非线性
PDE 分为 线性、非线性
ODE 也可分为 齐次、非齐次
PDE 也可分为 齐次、非齐次
未知函数代表着
我们不知道它的表达式
无法直接或间接写出它的函数表达式
所以求解就是在求 未知函数的表达式
n 阶 DE 的表达式是
F(x, y, y', y'', ..., y^(n)) == 0
y^(n) 必须出现
其余可以不出现


「微分方程组」包含有多个未知函数の多个等式
A system of ordinary differential equations is two or more equations involving the derivatives of two or more unknown functions of a single independent variable.


「常微分方程」是只有 1 个自变量的 DE
Ordinary Differential Equation (ODE)
未知函数 y 只有 1 个自变量


「偏微分方程」是至少有 2 个自变量的 DE
Partial Differential Equation (PDE)
未知函数 y 至少有 2 个自变量
PDE 比较好认
带有偏导数符号 ∂ 的 DE 肯定是 PDE


「n 阶 DE」是最高阶导数的阶数为 n 的 DE
first-order ordinary differential equation == differential form
最高阶导数为 y' 即 1st-order
second-order ordinary differential equation
最高阶导数为 y'' 即 2nd-order


「n 阶线性 DE」F(x, y, y', y'', ..., d^n y/dx^n) = 0
a1(x), a2(x), ..., an(x) 分别是 d^(n-1) y/dx^(n-1), ..., dy/dx, y 的系数
a1(x), a2(x), ..., an(x) 是关于 x 的已知函数


「n 阶非线性 DE」字面意思
不是线性 DE
那就是非线性 DE
例如 sin(y), e^(y'), yy', y^2


「n 阶齐次型 DE」
Homogeneous Equation


「n 阶非齐次型 DE」
NonHomogeneous Equation


「伯努利方程」
Bernoulli Equation


「全微分方程」
Exact Equation
M(x,y) dx + N(x,y) dy == 0


「1st order 可分离变量 DE」能化简成 g(y)*dy == f(x)*dx の DE
可求出 y 的（隐式）通解 G(y) == F(x) + C
化简的过程称为分离变量
这种求解的方法叫分离变量法







# 微积分
## 微分学

    微积分中，误差可以当作不存在。

「微积分学」分为 微分学、积分学
Calculus


「微分学」分为 一元函数微分学、多元函数微分学
Differential Calculus


「积分学」
Integral Calculus


**「微分」就是 Δ**
**一般默认是 Δy**
**「dy」就是 Δy**
**「dx」就是 Δx**
微分记作 dy
虽说理论上
微分的定义是 AΔx
AΔx 记作 dy
Δy == AΔx + 更高阶的无穷小（误差）
但微积分中误差可以当作不存在
所以
dy == Δy
这里 dy 有句潜台词，Δy 是对于自变量 x 来说的，因为 Δy 是由 Δx 定义的


**「偏微分」也还是 Δy**
对于多元函数也一样是 Δy
不同的是
f(x, k, z) 想要在 x0 处微分
由于 k z 是不确定的
不同的 k z 导致 x0 处 f 有多个值
所以 x0 处的偏导才会带有其他自变量
仅此而已


「d^2 y」是 d(dk)
一阶微分の微分
叫做二阶微分
高阶微分就是多递归几次


「d x^2」是 (dx)^2
一阶微分の二次方
一阶微分のn次方


**「导数」永远是斜率**
derivative
对于多维函数
就是
二维平面切线の斜率
三维空间切线の斜率
三维直线の斜率
n维直线の斜率
n维两点の斜率
对于一维函数
即一元函数
一阶二阶三阶导数理解方法都一样
就是导函数の导数罢了
没什么好说的
斜率必须定义一个二维直角坐标系？
否则是没有办法确定斜率的？


**「导函数」永远是斜率の函数式**


**「偏导函数」是曲线 f(x,y0) の切线の斜率の函数式**
即斜率の导函数
记作 ∂f/∂x 或 f'x
几何意义是
平行于f、平行于xの平面 竖直切了 f 一刀
形成的曲线の导函数
公式化一点的说法是
已知 y=y0
平行于Oxfの平面y=y0 & 曲面f
相交形成の曲线 f(x,y0)の斜率の函数式
偏导函数本质是特殊の方向导函数
本质是 x方向の方向导函数


**「偏导数」是曲线f(x,y0)上x=x0对应点 の切线の斜率**
记作 ∂f/∂x|x=x0 y=y0
或 f'(x0,y0) 对x
偏导数本质是特殊の方向导数
本质是 x方向の方向导数
几何意义有 2 种看法
第一种
已知 x=x0 y=y0
平行于Oxfの平面y=y0 & 曲面f
相交形成の曲线 f(x,y0) 在x=x0处 の斜率
第二种
(x0,y0,f) 点的切平面 & 过该点の平行于Oxf の平面y=y0
相交形成 の切线の斜率


**「方向导函数」是沿着向量v の斜率の函数式**
几何意义是
平行于f、平行于vの平面 竖直切了 f 一刀
形成的曲线の导函数
记作 ∂f/∂v == f'x * cosα + f'y * cosβ == ∇f * v
== ||∇f|| * ||v0|| * cos[∇f,v0]
== ||∇f|| * cos[∇f,v0]
cos[∇f,v0] = 0 时 ∂f/∂v 为最大值
已知 v = (a, b, c)
v 单位化成向量 v0
(cosα, cosβ, cosγ)
== v0
== (a/sqrt(a^2+b^2+c^2), b/sqrt(a^2+b^2+c^2), c/sqrt(a^2+b^2+c^2))


**「方向导数」定义参考偏导数**
只不过是把 方向x 改为 Oxy平面上的任意方向v(x1,y1)
记作 ∂f/∂v|(x0,y0)
就是在 (x0,y0,f) 点处的切平面の沿着某方向の切线
切平面上的切线有无数条
向量 v(x1,y1) 决定是哪条的斜率


**「梯度向量」の方向是 某点の方向导数取得最大值时 所沿着の方向**
Gradient
梯度向量 g = (f'x, f'y, f'z)
也叫梯度
记作 grad f(x,y,z) 或 ∇f(x,y,z)
f'x, f'y, f'z 就是偏导
当一个点确定后
梯度向量是确定的
某点の方向导数有无数个
而梯度向量方向
方向导数取得 最大值
梯度向量の反向时
方向导数为 最小值
梯度向量也是 法向量
等高线の某点の法向量？
曲面fの某点の法向量？
网上语焉不详……
梯度向量 垂直于 等高线
隐函数の梯度向量为其高维曲面的法向量


**「全微分」能表示出 切平面の方程**
本质还是微分 Δ
df == Δf == AΔx + BΔy 在点 (x0,y0,f)
全微分的精髓就是利用切平面去代替某点附近的曲面
切平面是通过随便两条切线得到的
例如 x方向 y方向 の切线






## 积分学

一元函数积分学中

「不定积分」也叫原函数、反导函数
就是求导的反过来

「定积分」就是面积和

「一重积分」是曲边梯形の面积
或者说是梯形面积和


「二重积分」是曲顶柱体の体积



# 三角函数复习

三角函数の定义
反三角函数の定义
三角恒等式
诱导公式
图像



# 数学符号


大写     小写     英文注音       国际音标注音     中文注音
Α          α      alpha             alfa                阿耳法
Β          β      beta               beta               贝塔
Γ          γ      gamma           gamma          伽马
Δ          δ      deta               delta              德耳塔
Ε          ε      epsilon           epsilon          艾普西隆
Ζ          ζ       zeta               zeta               截塔
Η          η      eta                 eta                艾塔
Θ          θ     theta              θita                西塔
Ι            ι      iota                 iota               约塔
Κ          κ     kappa             kappa           卡帕
∧         λ     lambda           lambda          兰姆达
Μ         μ       mu                   miu                缪
Ν          ν       nu                   niu                纽
Ξ          ξ        xi                    ksi              可塞
Ο          ο     omicron          omikron      奥密可戎
∏          π     pi                    pai                  派
Ρ           ρ     rho                  rou                  柔
∑          σ     sigma             sigma           西格马
Τ           τ       tau                 tau                 套
Υ           υ     upsilon            jupsilon    衣普西隆
Φ          φ      phi                   fai              斐
Χ           χ      chi                 khai              喜
Ψ          ψ      psi                 psai           普西
Ω          ω     omega           omiga        欧米伽

ΦφΔ∂αβγ∇

→
⇒
⊃
⇔
↔
¬
⊕
∀
∃
∃!
∅
∈
∉
⊆
⊂
⫋
⊇
⊃
⫌
∪
∩
∞
π
∑
∏
∫
∇
∂
≡    定义为

# 考试

Resit exam (Resit exam week, 2 hours).  Learning mall test questions based upon  comprehensive programming problems, contributing 100% towards the final  overall grade.  The test will consist of MCQs, fill-in blanks, matching answers, etc.	

------------------------------------有道翻译------------------------------------
补考考试(补考考试周,2小时)。学习商场试题基于全面的编程问题,贡献100%到最后的整体品位。测试将包括mcq,填补空白,匹配的答案等。


# SSS