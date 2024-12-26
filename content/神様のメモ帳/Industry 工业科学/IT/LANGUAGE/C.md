---
aliases:
  - C
  - C Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

# Brief

## Edition

- References
    - [C语言标准的变迁（最全版本） - 知乎](https://zhuanlan.zhihu.com/p/424425444)
    - [请教当前C语言最新标准是什么？C11、C17还是C18？ (amobbs.com 阿莫电子论坛 - 东莞阿莫电子网站)](https://www.amobbs.com/thread-5746575-1-1.html)

- Language Specification
    - ANSI C == C89 == C90 == ISO C
    - C99
    - C11 == C17 == C18

## Ecosystem

- References
    - [C 语言编程 - 2021 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/c/)
    - [C 语言编程 - 2020 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2020/c/)
    - [C++最佳实践 | 1. 工具\_c++\_俞凡\_InfoQ写作社区](https://xie.infoq.cn/article/090c6d6ff159a0f66b2970520)

- Idea
    - [[C]] 语言太过重要，哪怕是 [[Lisp]] 也不得不用 [[C]] 来写底层代码，例如 `setq`

- Idea
    - Specification: C99
    - Interpreter/Compiler: gcc/clang/msvc
    - Main: `xxx.c::main()`
    - Run: 编辑 .c - 编译 .o - 链接 - 执行
    - REPL: cling
    - Windows Installation: `scoop install mingw xmake conan cmake`
    - Linux Installation:
    - Dependency Manager: xmake + xrepo
    - Repository: vcpkg, conan, apt/yum/...
    - Project Wizard:
    - IDE: VSCode
    - Formatter:
    - Linter:
    - Docs:
    - Unit Testing: Google Test
    - Application Testing:
    - Packing: xmake
    - Publish: xmake
    - Builder: xmake
    - CI/CD:
    - Tag: 静态语言, 强类型语言, 高性能, Machine Code, 面向过程, 驱动, 系统编程

## References

- 入门
    - [C 语言教程 - 网道](https://wangdoc.com/clang/)

- 实战
    - [antirez/kilo: A text editor in less than 1000 LOC with syntax highlight and search.](https://github.com/antirez/kilo)

# 结构化并发

# SP

## Loop

### `for`

```c
for(int i = 0; i < 10; ++i)
{
    break;
}

for(int i = 0, j = 0; i < 10; ++i, j += i)
{
    continue;
}


int i = 0;
while(i < 10)
{
    printf(i);
    ++i;
}


int i = 0;
do
{
    printf(i);
    ++i;
}
while(i < 10);

```

### `while`

## Branch

### if

```c
if(true)
    return 0;
else if(1)
    return 0;
else
    return 0;


switch(var)
{
    case 'x': case 'X':
        break; // 如果不执行 break 将会继续向下匹配并执行
    case 'y': case 'y':
        break;
    case 'z': case 'Z':
        break;
    case 'f':
        break;
    default:
        break;
}

```

### `switch`

### `goto`

## Main

- Ecosystem
    - [[make]] `Makefile` target to of `foo.c`, default to `main()` function

### `{}`

- Idea
    - compounded statement

- Pro
    - C 支持 就地创建 compounded statement

### `;`

- Idea
    - Must be required at the end of every statement

# OOP

## `struct`

```c
struct Horse
{
    int age;
    int height;
};

struct Horse h = { 18,  150 };
struct Horse h = { .age = 18,  .height = 150 };

```

## `typedef`

## `union`

## `enum`

```c
enum Day {
    Monday = 0,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = 6
};

enum Day today = Sunday;
enum Day tomorrow = today + 1;

```

## `=`

## `(type)`

- Idea
    - 强制类型转换

## `*`

- Idea
    - Pointer

## `&`

- Idea
    - 寻址

## declaration

- Philosophy
    - 变量名最好不超过 31 字符

## `#`

```c
// 预处理指令
// stdio.h 头文件
// from stdio.h import *
#include <stdio.h>

#define PI 3.1415926 // 不推荐使用


```



# FP

## Function

```c

Return_type Function_name(int arg01, char arg02[])
{
    ...
    // return; 会返回 void
}


```

## Operators

```
sizeof
(type)

+
-
*
/
%

=
+=
-=
*=
/=
%=
<<=
>>=
&=
|=
^=

++
--

>
>=
<
<=
==
!=

&&    逻辑与
||    逻辑或
!    逻辑非

&    按位与
|    按位或
^    按位异或
~    按位补（按位非）
<<    左移
>>    右移

?:    条件运算符

()
[]
.    按对象选择成员
->    按指针选择成员

```

## `//`

```c
// 单行注释

/* 多行
注释
*/

/* 文档注释
 * 文档注释
 * 文档注释 */
```
