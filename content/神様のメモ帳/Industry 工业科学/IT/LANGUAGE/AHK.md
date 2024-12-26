---
aliases:
  - AHK
  - AutoHotKey
  - AHK Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Quick Reference | AutoHotkey](https://www.autohotkey.com/docs/AutoHotkey.htm)

[快速参考 | AutoHotkey](https://wyagd001.github.io/zh-cn/docs/AutoHotkey.htm)

[AutoHotkey](https://ahkcn.github.io/docs/AutoHotkey.htm)

[AutoHotkey 学习指南 - AutoHotkey Community](https://www.autohotkey.com/boards/viewtopic.php?t=1099)

[papple23g/ahkcompiler: AutoHotKey 語法產生器(線上網站)](https://github.com/papple23g/ahkcompiler)

[Ixiko/AHK-libs-and-classes-collection: This is a collection of currently around 3600 Autohotkey libraries, classes with examples.](https://github.com/Ixiko/AHK-libs-and-classes-collection)


## Brief

- References

- Installation

- Dependencies

- Edition

- Idea

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Philosophy

- Objects

- Fundamentals
    - 基本全都是调用 windir 下的函数

- Architecture

- Pro

- Con

- Test

- Alternatives
    - [baskerville/sxhkd: Simple X hotkey daemon](https://github.com/baskerville/sxhkd)
    - [jordansissel/xdotool: fake keyboard/mouse input, window management, and more](https://github.com/jordansissel/xdotool)

- Description




## Compile

[有没有必要从AutoHotKey V1.1版本转到V2版本？ - 知乎](https://www.zhihu.com/question/264147542/answers/updated)

[【AHK】最适合中国人的几款AutoHotKey编辑器！ - 知乎](https://zhuanlan.zhihu.com/p/44148961)


TeX

- Info:
    * Specification: AutoHotKey
    * Version: V1
    * .ahk Endocing: UTF-8 with BOM
    * Run: src -(Interpreter)-> Machine Code
    * IDE: VSCode
    * Formatter: 
    * Checker: 
    * Builder: ahk2exe
    * Tag: Script, DSL, Shortcut
    * Windows Environment: `scoop install -g autohotkey`
    * Linux Environment: 

- Main:
    * autohotkey xxx.ahk



### ahk2exe

```bash
ahk2exe command
Usage:

Examples:
    Ahk2Exe.exe /in "MyScript.ahk" /icon "MyIcon.ico"

```

### autohotkey



## 注释

```ahk
; 单行注释
xxx ;行内注释

/* 多行注释
多行注释
*/

```


## 命名

### 规范





## string

## int

### Literal

[Concepts and Conventions | AutoHotkey](https://www.autohotkey.com/docs/Concepts.htm)


```ahk
257
-257
00257

3.14
2.57e2
2.57E2
25700e-2
-25700e-2

; 十六进制
0x7B
0X7B
0x007B
-0x1

```

## bool

```ahk
true
false

```


## None

AHK 没有专门的 None/null/undefined，一般用空字符串代替。

> If a variable or parameter is said to be "empty" or "blank", that usually means an empty string (a string of zero length).


## array

[创建和初始化简单数组 | 他山教程，只选择最优质的自学材料](http://www.tastones.com/stackoverflow/autohotkey/arrays/creating_and_initializing_simple_arrays/)



## 运算符

```


```

## for

## if

```ahk
if() {
    ...
}


```


## function

```ahk
keyFunc_run(p){
    run, % p
    return
}


<func>([<arg01>[:=xxx]]) {

}


```



## Label

```ahk
mylabel:
...
...
return

```

# IO

## MsgBox

```ahk
MsgBox "Hello World"

```


# 技术栈

[spyoungtech/ahk: Python wrapper for AutoHotkey. Harness the automation power of AutoHotkey with the beauty of Python.](https://github.com/spyoungtech/ahk)



# 语言之外

## Capslock+

[wo52616111/capslock-plus: An efficiency tool that provides various functions by enhancing the Caps Lock key into a modifier key.](https://github.com/wo52616111/capslock-plus)



# SSS