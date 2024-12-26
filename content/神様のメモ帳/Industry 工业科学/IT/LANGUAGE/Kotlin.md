---
aliases:
  - Kotlin
  - Kotlin Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Kotlin 官方文档 中文版](https://book.kotlincn.net/)

[Kotlin-Tutorials](https://alleniverson.gitbooks.io/kotlin-tutorials/content/)

# Toolchains

[Kotlin 编程 - 2021 开发者生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/kotlin/)

- Kotlin
    - Specification:
    - Version:
    - Interpreter/Compiler:
    - Main:
    - Run:
    - REPL:
    - Windows Installation:
    - Linux Installation:
    - Running Environment:
    - Dependency Manager:
    - Repository:
    - Project Wizard:
    - One-off Runner:
    - Global App Manager:
    - IDE:
    - Formatter:
    - Linter:
    - Docs:
    - Unit Testing:
    - Application Testing:
    - Multiple Environments Testing:
    - Packing:
    - Publish:
    - Builder:
    - CI/CD:
    - Tag:

较新版本的 IntelliJ IDEA（以下简称 IDEA）中已经内置了 Kotlin 支持，包括 Kotlin REPL。

方法一：IDEA - 打开/创建一个 Kotlin 或者 Java 项目 - 菜单栏 - Tools -> Kotlin -> Kotlin REPL

方法二：`scoop install -g kotlin` - `kotlinc.cmd`


```bash
kotlinc hello.kt -include-runtime -d hello.jar  # 打包
java -jar hello.jar  # 运行

kotlinc -script list_folders.kts <path_to_folder>  # 运行 .kts 脚本

与 Java 有完善的互操作性，完善到可以直接在 Kotlin 代码中随便插入 Java 语句（反正最后都要编译成字节码~），同样可以在 Java 代码中调用 Kotlin 语言写成的函数和类库。

```

# 结构化并发

## promise

## async/await

# SP

## Loop

### `for`

```kotlin
for (i in 0..9) print(i)
for (i in 0..9 step 1) print(i)
for (i in 0 until 10) print(i)
for (i in 9 downTo 0) print(i)
for (i in 9 downTo 0 step 1) print(i)



```

### `while`

### `when`

## Branch

## `if`

## `try`

# OOP

## `class`

## `interface`

## `delegate`

## `dynamic`

## `typealias`


## =

## `val`

## `var`

## `package`

## `import`

- Fundamentals
    - Interop
        - [[Kotlin]] imports [[Java]]
            - [[TypeScript|TS]] 可以直接导入并使用 [[JavaScript|JS]]，是因为 [[TypeScript|TS]] 是 [[JavaScript|JS]] 的超集，[[TypeScript|TS]] 支持 [[JavaScript|JS]] 的所有语法，因此可以自动把 [[JavaScript|JS]] 当作 AnyScript
            - [[Kotlin]] 可以直接导入并使用第三方 [[Java]] 库，即便 [[Java]] 库本身并没有考虑任何 [[Kotlin]] 的兼容性问题。
            - 虽然 [[Kotlin]] 不是 [[Java]] 的超集，但 [[Java]] 会编译为 JVM bytecode，[[Kotlin]] 导入的是 bytecode
        - [[Java]] imports [[Kotlin]]
            - [[TypeScript|TS]] 会编译为 [[JavaScript|JS]]，因此能被 [[JavaScript|JS]] 导入并使用
            - [[Kotlin]] 会编译为 JVM bytecode，因此能被 [[Java]] 导入并使用
            - 这并不是说，只要是 JVM bytecode 就能直接导入。主要归功于 [[Kotlin]] 编译器专门对 bytecode 进行了优化与解析

## Style Guide

```kotlin
一句话，小驼峰或大驼峰。

var <标识符> = <value>
var <标识符>: <type> = <value>

var <标识符>: <type>
<标识符> = <value>
val|var 变量名[: 变量类型][= 初始化赋值]
val Pi: Float = 3.14 // 常量
建议尽量使用 val，能不使用 var 就不使用 var。在使用 IDEA 编写 Kotlin 程序时，如果声明了 var 变量而没有改变它的值，就会提示你把 var 改成 val。这里体现了 Kotlin 语言追求的价值：“清楚地说明每一个要素，避免因为混淆而出现错误”，所以要求变量能不变就不变，以免出现不必要的错误。

Short
Int
Long
Float
Double
String
Boolean
Byte
Char    字符不属于数值类型，是一个独立的数据类型。

Array<Int>

```

# FP

## `fun`

```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}

fun sum(a: Int, b: Int) = a + b
public fun sum(a: Int, b: Int): Int = a + b


fun printSum(a: Int, b: Int) {
    print(a + b)
}

fun sums(vararg x: Int) {
    var r: Int = 0
    for (num in x) {
        r = r + num
    }
    return r
}

```

## // Comment

```kotlin
// 单行注释

/* 多行注释
多行注释
*/

```
