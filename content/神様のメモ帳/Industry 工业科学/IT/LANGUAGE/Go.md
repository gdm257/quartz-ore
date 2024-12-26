---
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
frontmatter-as-page:
  - go
aliases:
  - Golang
  - Go Specification
user-title: Gopher
---

# Brief

- Version
    - latest (recommanded)
        - Go 承诺 1.x 永远向下兼容
        - Go 承诺 即便真的有 v2，也会向下兼容 v1
    - 1.18+
        - 支持 泛型

## Ecosystem

- Ecosystem
    - [avelino/awesome-go: A curated list of awesome Go frameworks, libraries and software](https://github.com/avelino/awesome-go)
    - [Go 语言编程 - 2021 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/go/)

[详解 Go 语言中间代码生成 | Go 语言设计与实现](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-ir-ssa/)

[编译流程 — 深入Go语言之旅](https://go.cyub.vip/compiler.html)

[Go 运行时 (runtime) | unknwon/the-way-to-go_ZH_CN](https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/02.7.md)

- Info:
    * Run: src -(Compiler)-> Binary with IR & Runtime -(Excute)-> Machine Code
    * Language Environment: Go Module

## Philosophy

- Name
    - `lowerCamelCase`
        - 私有
        - 默认无脑小驼峰，需要再改大驼峰
    - `UpperCamelCase`
        - 对外开放
    - `UPPER_SNAKE_CASE`
        - 常量 蛇形全大写
    - `package`
        - single word
    - `file_name.go`
        - single word as much as possible
    - `my-go-repo`
        - [[GitHub]] repo can use mutiple words

- Project Layout
    - [golang-standards/project-layout](https://github.com/golang-standards/project-layout)
    - [Go 面向包的设计和架构分层](https://github.com/danceyoung/paper-code/blob/master/package-oriented-design/packageorienteddesign.md)
    - `modname/`
        - `.git/`
        - `README.md` 约定俗成（没说明则为约定俗成）
        - `README_zh.md`
        - `README_zh-TW.md`
        - `go.mod` 编译器强制
        - `go.sum` 编译器强制
        - `internal/` 编译器强制
            - `app/`
            - `pkg/`
                - `cfg/`
                - `log/`
                - `db/`
        - `vendor/` 编译器强制
            - `github.com/`
            - `golang.org/`
        - `pkg/`
        - `cmd/`
        - `api/`
        - `web/`
            - `staic/`
            - `template/`
            - `app/`
        - `test/`
        - `docs/`
        - `assets/`
        - `examples/`
        - `configs/`
        - `scripts/`
        - `build/`
            - `ci/`
            - `package/`
        - `deployments/`
        - `init/`
        - `tools/`

## References

- 入门
    - [Go语言精进之路目录 - 贾维斯Echo - 博客园](https://www.cnblogs.com/taoxiaoxin/p/17747165.html)

- 进阶

[Go 语言设计与实现 | Go 语言设计与实现](https://draveness.me/golang/)

[深入Go语言之旅 — 深入Go语言之旅](https://go.cyub.vip/index.html)

[Go 零基础编程入门教程 · Golang学习笔记](https://www.k8stech.net/go-book/)

[Go by Example 中文版](https://gobyexample-cn.github.io/)

[Go语言起源 · Go语言圣经](https://book.itsfun.top/gopl-zh/ch0/ch0-01.html)

[unknwon/the-way-to-go_ZH_CN: 《The Way to Go》中文译本，中文正式名《Go 入门指南》](https://github.com/Unknwon/the-way-to-go_ZH_CN)

[Go语言轻松进阶](http://tigerb.cn/go/#/kernal/)

[Go设计模式实战](http://tigerb.cn/go/#/patterns/)

[《Go 入门指南》 | Go 技术论坛](https://learnku.com/docs/the-way-to-go)

[Golang tutorial: Table Of Contents](https://golangbot.com/learn-golang-series/)

[talkgo/read: Go 学习之路：Go 开发者博客、Go 微信公众号、Go 学习资料（文档、书籍、视频）](https://github.com/talkgo/read)

[yinggaozhen/awesome-go-cn: 一个很棒的Go框架、库和软件的中文收录大全。 脚本定期与英文文档同步，包含了各工程star数/最近更新时间，助您快速发现优质项目。Awesome Go~](https://github.com/yinggaozhen/awesome-go-cn)

[llitfkitfk/go-best-practice: Go语言实战: 编写可维护Go语言代码建议](https://github.com/llitfkitfk/go-best-practice)

[a8m/golang-cheat-sheet: An overview of Go syntax and features.](https://github.com/a8m/golang-cheat-sheet)

# 结构化并发

## `chan`

[golang中锁Mutex与通道channel的选择 - 序语程言](https://www.yangyanxing.com/article/query-mysql-in-go-base.html)

[如何把 golang 的 Channel 玩出 async 和 await 的 feel | Go 技术论坛](https://learnku.com/articles/40825)

[使用 Go 实现 Async/Await 模式 - 知乎](https://zhuanlan.zhihu.com/p/341794161)

[大话 goroutine | Go 技术论坛](https://learnku.com/articles/37409)

[go语言在goroutine中拿到返回值 | Polar Snow Documentation](http://docs.lvrui.io/2020/03/26/go%E8%AF%AD%E8%A8%80%E5%9C%A8goroutine%E4%B8%AD%E6%8B%BF%E5%88%B0%E8%BF%94%E5%9B%9E%E5%80%BC/)

[Golang Mutex 和 Channel 怎么选 - 掘金](https://juejin.cn/post/7125215236512022565)

[Golang并发：再也不愁选channel还是选锁 | Go语言充电站](https://lessisbetter.site/2019/01/14/golang-channel-and-mutex/)

```go
goroutine 调用的函数，返回值会被丢弃

这意味着，想要拿到返回值，只能使用通道。因为通道是协程之间数据交换的方式。

<- chan 相当于 await result，二者都会阻塞该行代码所在协程（main 函数本身就带一个协程）


/* Go 的 Channel 才是我想要的！

`<-` 类似于 await，但不需要 callback！`<-` 本身自带阻塞（当然也有技巧弄成非阻塞），这样就不需要 async 了，无需 callback，而是直接阻塞，阻塞后 GMP 调度器会挂起，切换 goroutine 继续执行。极大提高代码兼容性、可复用性。

`<- <ChannelObject>`
向队列 put 值。
channel object 可以看作一个队列。
相当于 Python 的 await。并且 await 的对象必须是 channel object。

`<ChannelObject> <-`
从队列 get 值。

`goroutine`
相当于传统的多线程，只不过可以不用管理线程池，并且可以随意嵌套
*/

package main

import "fmt"

func main() {

   // 方法的两个参数
   a := 1
   b := 2

   // 从管道中接收结果，这一步是阻塞的，因为在等待结果的产出
   sum := <-addAsync(a, b) // 从 channel get 值
   fmt.Println(sum)
}

func addAsync(a int, b int) chan int {
   // 使用管道接收结果，注意需要设置一个缓冲位，否则没有取结果的话这个 goroutine 会被阻塞
   resultChan := make(chan int, 1)
   go func() {
      // 在新的 goroutine 中计算结果，并将结果发送到管道
      resultChan <- a + b // 向 channel put 值
   }()
   return resultChan
}




`go funcName(param)` 本质是类似 Python 的 `Thread(target=func_name, args=(param,))` 或 `process_pool.apply_async(func_name, args=(param,))` 的语法糖。

goroutine 的工作方式与 Python 的多线程一模一样，而不是 Python 的 coroutine。这意味着的 goroutine 的切换是不可控的。调度器会自动判断运行中的 goroutine 是否阻塞，阻塞了，挂起 goroutine，从队列中拿出另一个 goroutine 运行。而协程的调度完全由用户控制。所以 goroutine 应被看作传统的「线程」，而非协程。

虽然 goroutine 的工作方式与多线程一样，但其实所有 goroutines 运行在 1 个 OS 线程上。goroutine 比较黑魔法，既可以像多线程一样工作，但又不真正创建其他线程而从始至终都在一个线程上工作。

`goroutine` 相当于传统的多线程，只不过可以不用管理线程池，并且可以随意嵌套。网上说 goroutine 是异步怕是没用过 await。很简单的道理，只需要 `<-` 就能实现异步，根本不需要用 `goroutine`。


goroutine 是在并行吗？
可能单核运行，也可能多核并行，由调度器决定。
默认地，Go所有的goroutines只能在一个线程里跑。所以默认肯定不是并行。
`import "runtime"; runtime.GOMAXPROCS(16)` 告诉Go我们允许同时最多使用多少个核，即可真正并行 goroutine。


Golang 如何实现并行？
我搜了搜资料，目测官方是想通过 goroutine 实现并行。也就是说，由 goroutine 调度器自动决定所有 goroutines 应该以单核的方式运行，还是多核的方式并行。
官方给出的答案是，这是当前版本的 Go 编译器还不能很智能地去发现和利用多核的优势。默认地，虽然我们确实创建了多个 goroutine，并且从运行状态看这些 goroutine 也都在"同时"运行，但实际上所有这些 goroutine 都运行在同一个 CPU 核心上，在一个 goroutine 得到时间片执行的时候，其他 goroutine 都会处于等待状态。从这一点可以看出，虽然 goroutine 简化了我们写并行代码的过程，但实际上整体运行效率并不真正高于单线程程序。

虽然Go语言还不能很好的利用多核心的优势，我们可以先通过设置环境变量 GOMAXPROCS 的值来控制使用多少个 CPU 核心。具体操作方法是通过直接设置环境变量 GOMAXPROCS 的值，或者在代码中启动 goroutine 之前先调用以下这个语句以设置使用 16 个 CPU 核心 `import "runtime"; runtime.GOMAXPROCS(16)`



```

## `go`

## `sync.Mutex`

- Objects
    - `sync.Mutex`
    - `sync.WaitGroup`

## `select`

# SP

## Loop

### `for`

- Version
    - [Go range iterators demystified | DoltHub Blog](https://www.dolthub.com/blog/2024-07-12-golang-range-iters-demystified/)

```go
// 遍历 for 循环
for index, value := range "abc" {
    xxx
}


// 索引 for 循环
for i := 0; i < 10; i++ {
    continue
    break
}

// 相当于 while
for true {
    // 无限循环
}


// Label
func FuncName() {
    ...
}
loop:
    ...

不懂这是啥

现在看来，应该是标签机制 label
goto
break
continue

```

## Branch

### `if`

```go
if true {
    xxx
} else if true {
    xxx
} else if true {
    xxx
} else {
    xxx
}

if err := random.Seed(); err!= nil {}

err := random.Seed()
if err!= nil {}
```

### `switch`

### `goto`

### label

## Main

[Go基础系列：import导包和初始化阶段 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/9847554.html)

[为什么有了Go module后“依赖地狱”问题依然存在 | Tony Bai](https://tonybai.com/2022/03/12/dependency-hell-in-go/)

- Architecture
    - Application
        - APP == Go Module + Specified Function
    - Library
        - Library == Go Module

- Objects
    - Module
        - 简单地说，`go.mod` 所在的文件夹就是 Module
        - Module 可以包含多个 Packages
    - Package
        - 本意为项目架构的最小组成单位
        - 不严谨地说，Package 就是一个 Folder，方便组织代码

- Architecture
    - `package foo`
    - 初始化被导入的包 `import`
        - 初始化被导入的包 `import`
            - 初始化被导入的包 `import`
                - ...
        - ...
    - 包级 `const`
    - 包级 `var`
    - 包级 `type`
    - 包级 `var` for `type`
    - 包级 `func`
    - `method`
    - 调用 `init()`
    - 调用 `main()` only if execute

- Description:
    - `main()` 无入参、无返回值、不能主动调用.
    - `main()` 只能在 `package main` 定义.
    - `init()` 无入参、无返回值、不能主动调用.
    - `init()` 可有可无.
    - 一个 package 可以存在多个 `init()`.
    - 一个 package 推荐只写一个 `init()`.
    - 多个 `init()` 以随机顺序执行.
    - 我讨厌 `init()`，看起来十分像猴子补丁，也确实可以用作猴子补丁.
    - 我讨厌 `init()`，匿名包像是魔法，难以理解，尽量别用.
    - 重复的包只会被导入一次 E.g. `fmt`，原理目测是 python 那种命名空间.
    - `import <alias> "<module-name>[/package/name]"`
    - `import _ "xxx"` 导入为匿名包，只利用包的 `init()` 进行初始化.
    - 导入的包必须使用（匿名包除外），否则会编译报错.
    - Package 等同于「一个很长的 .py 文件」.
    - 但是这个文件太长了，于是将这个文件拆分成多个小的 .go 文件.
    - Module 包含一个或多个 Package.
    - Module 只有一个 Package 时，包含 `main` 则为 App，可以 `go build`.
    - Module 只有一个 Package 时， 包含与 Module 同名的包则为库.
    - 疑问，App 可作为库使用吗？
    - 我突然发现，Go 不存在「打包」。Java 库需要打包为 jar 并上传到仓库，Python 库需要打包为 wheel 上传到 PyPi，JS 也类似。但是，Go 则不需要专门进行打包，Go 是直接使用源码，`import "包名"` 会直接使用该包的源码。优点很明显，简单易懂，项目维护起来很方便，git push 就搞定了，无需复杂的 CI/CD 打包上传。缺点就是 `import` 速度慢。
    - `全局作用域`（全局标识符，但是大写。包内以大写字母开头的标识符，包括变量、常量、函数和方法名、自定义类型、结构体字段 etc，在任意命名空间内都可见）
    - `包内作用域`（全局标识符，但是小写。包内以小写字母开头的标识符，包括变量、常量、函数和方法名、自定义类型、结构体字段 etc，它们只对本包可见，其他包不可见）
    - `隐式作用域`（局部变量 func if for switch etc {} 代码块）

```go
import fmt
import time

import (
    "net/http" // 导入包名为 http 的 package
    "github.com/rclone/rclone/cmd" // 导入包名为 cmd 的 package

    f "fmt" // 别名。用 Python 的话来说是 import fmt as f
    . "fmt" // 用 Python 的话来说是 from fmt import *。实属拉屎，不要用。
    _ "github.com/rclone/rclone/cmd/all"    // 匿名导入包 all，导入而不使用。可以利用导入包产生的副作用，它会计算包级变量的初始化表达式和执行导入包的 init 初始化函数。数据库包 database/sql 也是采用了类似的技术
)


import (
    "fmt"
    "time"
) // （被称为因式分解关键字，该方法同样适用于 const、var 和 type 的声明或定义）


import (
    "./utils" // 导入当前文件的同一目录的 utils 目录（包），不建议使用
)

```

### `;`

- Idea
    - statement separator

- Pro
    - 支持 编译器自动追加句尾 `;`
        - 平时写代码无需也不推荐手动加 `;`
        - 除了 `for` `if` 不得不用 `;` 分隔 statements

### //

- Idea
    - Comment

- DSL
    - `// 单行注释 & 行尾注释`
    - `/* 多行注释 */`

# OOP

## `type`

- Objects
    1. `struct`
    2. `interface`
    3. `func`
    - 其他都是派生类型，例如切片其实是个结构体

- Generic Data Structures
    - 与 Generic Funtion 新增一组 parameters 类似，`type` 也能够用 `(T1, T2)` 新增一组 parameters，在 `{}`（body）中使用这些类型
    - 使用的时候，就如同 

```go
// Go 语言不存在隐式类型转换，因此所有的转换都必须显式说明，就像调用一个函数一样（类型在这里的作用可以看作是一种函数）
// A to B
valueOfTypeB = typeB(valueOfTypeA)
```

### Instance

```go
new:
	

Default Instance:
    # Built-in Types
    * str()    ''
    * int()    0
    * bool()    False
    * list()    []
    * tuple()    ()
    * set()    empty set
    * dict()    {}
    - 默认实例，默认值，零值.

Description:
    - 每个 instance 有着自己的命名空间，初始化时生成，GC 时销毁.
    - 同理，类定义时也会产生命名空间，毕竟类本身就是元类的实例.



```

### 对象实例

```go
// 自定义结构体
type MyType struct {...}

// 结构体实例
c01 := MyType{...}


```

## `contract`

- Version
    - 废案

- Contract (rejected)
    - 合约 是一种 meta-type。它将多个任何类型的参数作为入参，返回多个「受限」的类型。注意，返回的类型本身，而不是类型的实例。另外，为什么可以输入多个参数，不仅仅是为了批量定义，还为了这些类型可以相互引用。「受限」方式有以下几种：
    - (Union-like)
            - `contracts.Ordered`
    - (Interface-like) Contract with methods
        - `Contract Stringer(T) { T String() string }`
            - `String()` method that returns `string`
        - `func (type E Stringer) (s []E) {}`
        - 太离谱了
            - `s` is not a slice of `fmt.Stringer`
            - but the element of `s` is a implementation (interface variable) of `fmt.Stringer` interface
            - `[]Stringer` != `[]fmt.Stringer`
            - ……喵喵喵？
            - Go does not support direct conversions between them
            - 所以为什么不直接用 Interface？

## `interface`

- Examples
    - `interface{}`
        - 空接口
        - 万能类型
    - `any`
        - Go 1.18+
        - `type any interface{}`
        - `interface{}` 的别名
        - 注意，二者不兼容

- Philosophy
    - Polymorphism
        - Using embedding interface in struct
    - Lightweight
        - Interface with only 1 or 2 methods are common in Go

## `struct`

- Philosophy
    - Struct Embedding
        - ONLY Supports Composition
        - `struct` NOT Support Polymorphism

- Con
    - NOT Support type level members
        - such as [[Python]] class properties, class method, static method
    - NOT Suppoort custom default value
        - default to zero value

- Fundamentals
    - Embedded TYPE
        - E.g. `type Foo struct { *pkg.Bar }`
            - `Foo.Bar` 自动*组合*字段
            - `Foo.<fields_of_bar>` 自动*委托*字段到 `Foo.Bar.*`
            - 嵌入 `Bar struct` 可以自动初始化 `Bar` 字段（零值）
            - 嵌入 `Bar interface` 初始化时必须手动初始化一个 `Bar` 对象并传入

```go
type str01 string
// type 的本质是「创建一个指向 struct 对象或 interface 对象的标识符」
// 创建标识符 str01，该标识符指向 struct 对象。
// 实际上 string 本身也是一个标识符，指向 struct 对象。
// 也就是说，「标识符 str01」指向的是「标识符 string 所指向的对象」。
// 因此，「str01」和「string」指向同一个对象（struct 对象）。
// 「str01{}」是「str01」的一个实例。
// 「str01」是 struct 对象。
// 「str01{}」是 struct 对象的实例，简称 struct 实例。
// 在这里我们区分出了两个概念「struct 对象」「struct 实例」。
// struct 对象相当于 Python 的「类」。
// struct 实例相当于 Python 的「实例」。
// 至于为什么要有 type 而不是只用 struct，很简单，「struct 对象」是右值，「type 标识符」是左值。用内存堆栈考虑，「struct 对象」是 Heap 的一块内存，「type 标识符」是 stack 的一块内存。
// interface 同理，你把 struct 换成 interface 即可。
// 一句话，
// struct/interface 用来创建类型对象本身；
// type 用来创建指向类型对象的标识符，即起名，跟变量起名一个道理。

struct {
    Field01 string // 无法自定义默认值，但是实例会初始化为对应类型的零值
    field02 float64
    Field03 bool
}
```

### \`tag\`

- Idea
    - Set field's serialization name to other format such as [[JSON]]

- DSL
    - 标签使用一对反引号进行包裹

- Examples
    - `json:"foobar" yaml:"FooBar" toml:"foo-bar"`

## `*`

- Idea
    - Pointer 
    - Reference

- Philosphy
    - Shadow Copy vs Pointer
        - `*t` in order to edit its attributes
        - Shadow copy by default

## `.()`

- Idea
    - type switches
        - `switch value := foo.(type) {case int:}`
        - reflect the type
        - ONLY Support switch statement
    - type assertion
        - `value, ok := foo.(typeName)`
        - whether is type
        - implicit type conversion

## =

- DSL
    - `foo = bar`

- API
    - Zero value
        - Go 不存在「只声明」「不赋值」，编译器会自动初始化为「零值」

- Objects
    - 值类型
        - `string` `""`
        - `int` `0`
        - `float64` `0.0`
        - `bool` `false`
        - `[257]T` 元素根据T决定零值
        - `struct{Field T}` Field根据T决定零值
    - 引用类型 `nil`
        - `map[K]V`
        - `&var`
        - `*ptr`
        - `[]T`
        - `interface{}`
        - `make(chan T)`
        - `func`

- Philosophy
    - 按值传递
        - 默认为按值传递（浅拷贝）
        - 严格来说 Go 只有按值传递
    - Pointer
        - 需要「按引用传递」，那就使用「一级指针」`&t`，就这么简单
        - Go 支持多级指针 E.g. `***T` 三级指针
        - 使用指针，为的就是能够修改原来的变量
        - 指针本身也是按值传递的

- Fundamentals
    - `*T`
        - 形参 `*T`「按值传递」创建一个新指针，新旧指针都指向 `t`，实现了「按引用传递」的效果
        - 严格来说，Go 只有「按值传递」，没有「按引用传递」

- References
    - [Golang数据初始化，零值以及一些陷阱 - 烛影小札](https://fantasyhh.github.io/2020/07/07/goInitialize/)

## `:=`

- `:=` 左侧必须要有至少 1 个未声明的新变量，否则会报错.
- `:=` 会自动根据变量是否已声明，决定是进行「声明+赋值」还是「赋值」.
- `:=` 只能用于局部变量.
- `x, y := 0, 0` 并不是 `var x, y = 0` 的语法糖，而是会根据 x、y 是否已声明来决定 x、y 是「声明+赋值」还是「单纯赋值」，如果 x 或 y 已经声明过了，那么 `:=` 只会单纯进行赋值，因此常见变量 `err` 和 `_` 配合 `:=` 使用并不会报错。但是要注意，`:=` 左侧必须要有至少 1 个未声明的新变量，不能 x、y 都声明过了，会报错.

## `const`

- Con
    - ONLY Support numbers, characters (runes), booleans
    - NOT Support enum (`iota` is ugly)

- Pro
    - At compile time

- Examples
```go
const PI = 3.14
const (
    G = 2
    D = 5
    M = 7
)
```

## `var`

- Pro
    - Support any type
    - Support compile time
    - Support run time such as `var home = os.GetEnv('HOME')`

- Examples
    - `_` blank identifier

## `package`

- Module & Package
    - Module 的默认包名为绝对路径的末尾部分，如果有短横线，需要换成下划线
    - E.g. 模块 `github.com/aaa/foo-bar` 的默认包名为 `foo_bar`，导入语句 `import "github.com/aaa/foo-bar"` 实际上是导入 `package foo_bar` 这个包
    - 就如同 [[Python]] 导入一个包其实是等于导入包的 `__init__.py` 模块

## `import`

```go
import (
    "net/http"
    "reflect"

    my_baz "github.com/foo/bar/pkg/biz"
)
```

- API
    - `internal/`
        - 编译器强制
        - 只允许 `module` 内部使用
        - 任意目录下都可以创建 `internal` 包，而不仅限于模块根路径
    - `pkg/`
        - 约定俗成
        - 对外开放，欢迎其他项目导入

- Con
    - Absolute path
        - All import must be absolute path
        - Anyway, absolute path is a kind a hardcode which variable is better than
        - Fork & Contribute PR
            1. `go mod edit -replace="github.com/ori/repo=github.com/my/repo@latest"`
            2. `echo "machine github.com login USER password PERSONAL_TOKEN" >> $HOME/.netrc` if `my/repo` is a private repo
            3. `go mod tidy`
            - `go mod edit -replace="old[@v]=new[@v]"`
            - `replace` edits `go.mod` to make `old` indicate `new`, which lets `github.com/xxx/xxx` works like a relative path actually
            - [go modules的replace使用, 解决fork的项目import问题 - Go语言中文网 - Golang中文社区](https://studygolang.com/articles/23008)
            - [Frequently Asked Questions (FAQ) - The Go Programming Language](https://go.dev/doc/faq#git_https)
            - [再探go modules：使用与细节 - apocelipes - 博客园](https://www.cnblogs.com/apocelipes/p/10295096.html)

- Fundamentals
    - _**在使用第三方包的时候，当源码和.a均已安装的情况下，编译器链接的是源码**_
    - 那么是否可以只链接.a，不用第三方包源码呢？
    - 编译器还是去找源码，而不是.a，因此我们要依赖第三方包，就必须搞到第三方包的源码，这也是Golang包管理的一个特点
    - 编译器链接了$GOPATH/pkg下的foo.a。**(2)到这里我们明白了所谓的使用第三方包源码，实际上是链接了以该最新源码编译****的临时目录下的.a文件而已**
    - Go标准库中的包也是这样么？
    - 比如fmt而言，编译时，到底使用的时$GOROOT/src下源码还是$GOROOT/pkg下已经编译好的.a呢？
    - 找不到fmt包了。显然标准库在编译时也是必须要源码的。不过与自定义包不同的是，即便你修改了fmt包的源码（未重新编译GO安装包），用户源码编译时，也不会尝试重新编译fmt包的，依旧只是在链接时链接已经编译好的fmt.a。
    - import后面路径中最后的一个元素到底是包名还是路径名？
    - 路径名

- References
    - [【golang学习笔记】包（package）的使用go语言给我们提供了很多的内置包，如fmt，os，io等。 任何源代码 - 掘金](https://juejin.cn/post/7122730352023437343)
    - [Golang：包的小知识 | BLOG](https://startdusk.github.io/my-blog/posts/2020/02/28/go-package-name.html)

# FP

## `func`

- Philosophy
    - Function Signature
        - `context` 如果存在，必须是第一个传入
        - `error` 如果存在，必须是最后一个返回

- Type Annotation for function
    - `func(int, int) int` accept 2 params with `int`, return a `int`

- Generic Function
    - 任何语言的函数，声明了 parameters，就能在 body 访问该 parameters
    - 如果，有多组先后定义的 parameters，那么是不是后面那组 parameters 能引用前面那组 parameters？对的。这就是 generics。换句话说，generics 可以理解为一种基于「不同生命周期」与「作用域」的机制

- Objects
    - Function
    - Method
        - Support `struct`
        - Pointer Method
            - Support invoked on pointer `p.M()`
            - `p.M()` will be converted to `(&p).M()` by compiler
        - Value Method
            - Support invoked on pionter `p.M()` and value `v.M()`

```go
Formal Arguments:
	func MyFunc(args) ReturnType {
		...
	}

    func (t *T) MyMethod(args) ReturnType {
        ...
    }
```

### `func init()`

- References
    - [答应我，别在go项目中用init()了 - 机智的小小帅 - 博客园](https://www.cnblogs.com/XiaoXiaoShuai-/p/14642055.html)

- Idea
    - At import time (run time)
        1. variable declarations in package such as `const` `type` `func` `method` `var`
        2. call `init()`

- Pro
    - Support multiple `init()` functions in a package, which are called in random order

- Philosophy
    - ONLY ONE `init()` function in a package

### `(t T)`

- Philosophy
    - ONLY Support instance method
    - NOT Support "class" method

- Con
    - ONLY Support instance method
    - NOT Support "class" method
        - `(t T)` shadow copy
        - `(t *T)` pointer (in order to edit its attribute)

```go
// 为 struct 绑定方法
type TypeName struct {...}
func (local_mark *TypeName) MethodName() {...} // local_mark 类似于 Python 里 class 的 self，只不过 go 允许将 self 换成自定义标记，约定俗成地，将结构体名称的首字母小写作为自定义标记，随便找个开源项目，基本上都这么做。

type book struct {
    title string
    author string
}

func (this book) get_title() { // 可以看作成员方法
    return this.title
}

func (this book) set_title(new_title string) {
    this.title = new_title
}

func (this *book) get_title() { // 推荐写法
    return this.title
}

func (this *book) set_title(new_title string) { // 推荐写法
    this.title = new_title
}
```

## `defer`

- Idea
    - 只有在函数退出时，才执行函数内部的所有显式 `defer` 调用

- Examples
    - `defer` 捕获并处理 [[Go panic()|panic()]]，对标其他语言的 `except` `catch`
    - `defer` 可以充当只能自定义后半部分的 `@decorator`
 
- Philosophy
    - 给函数调用添加 hooks，而且不用修改 caller（client）的代码
