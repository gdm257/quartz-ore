---
tags:
  - flag/License/GPL
  - flag/LANGUAGE/C
  - flag/LANGUAGE/CPP
  - Label/Industry-工业科学/IT/APP/Command/CLI
envvars:
  - C_INCLUDE_PATH
  - CPLUS_INCLUDE_PATH
---

[Top (Using the GNU Compiler Collection (GCC))](https://gcc.gnu.org/onlinedocs/gcc/index.html)

[linux基础篇（一）——GCC和Makefile编译过程_Aladdin_KK的博客-CSDN博客_gcc makefile编译](https://blog.csdn.net/sinat_31039061/article/details/98885275)

[C++静态库与动态库 | 菜鸟教程](https://www.runoob.com/w3cnote/cpp-static-library-and-dynamic-library.html)


gcc command
Usage:
    gcc [options] <files>

Options:
    -o <filename>    输出文件名
    -E    只进行 预处理，生成 .i
    -S    只进行 编译，生成 .s
    -c    只进行 编译、汇编，生成 .o
    -pie    Create a dynamically linked position independent executable
    -static    Create a static library
    -shared    Create a shared library

Examples:
    vim main.c
    gcc main.c    -o main.i -E
    gcc main.i    -o main.s -S
    gcc main.s    -o main.o -c
    gcc main.o    -o main

Description:
    Preprocessing 预处理    .i
        need .h
    Compilation 编译    .s
    Assembly 汇编    .o
    Linking 链接    exe
        static linking needs lib<library_name>.a / XXX.lib
        dynamic linking needs libXXX.so / .dll