---
aliases:
- panic()
- panic
tags:
- flag/LANGUAGE/Go
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/BusinessLogicLayer/Implement__/Exception
---

[传统的try-catch异常处理是否是编程语言发展中的弯路？ - 知乎](https://www.zhihu.com/question/425726667/answer/1531780075)

[Go中的"err != nil"好烦？教你怎么优雅地处理error - 修行编程，沉淀技术，记录生活 - JinTang's Zone](http://jintang.zone/2021/04/28/go%E4%B8%AD%E7%9A%84err!=nil%E5%A5%BD%E7%83%A6%EF%BC%9F%E6%95%99%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BC%98%E9%9B%85%E5%9C%B0%E5%A4%84%E7%90%86error.html)

[Go - juju/errors 包(Trace Stack 不是梦) - 掘金](https://juejin.cn/post/6873454472958312462)

[关于 Golang 错误处理的思考 - Go语言中文网 - Golang中文社区](https://studygolang.com/articles/29029)

[Go by Example 中文版: 错误处理](https://gobyexample-cn.github.io/errors)

- Test
    - 如何抛出错误？
        - E.g. `func myFunc() (bool, Error)`
        - 直接 `return nil, err`
        - 一般遇到错误时是无法拿到正确的结果的，但函数签名又要求你返回一个 `bool`，那么用一个 `nil` 作为占位就成为了最直接的解决办法。这种做法已是开发者的普遍共识，应该也是 Go 官方的推荐做法，因为编译器并没有报错


```go
// Go 内置接口 error，其实现代码为
type error interface {
    Error() string
}


> 如果底层函数出错，只在上层打印错误信息，会丢失调用栈，不知道最开始的错误发生在哪里。

太真实了！Go 又臭又长的调用链根本不知道到底是从哪开始报错的，恶心死我了。反观 Java Python C# 会自动打印完整的 StackTrace，异常是怎么一步步抛出来的显示的清清楚楚

Golang 的错误处理机制：

    函数直接返回 error（非常原始且操蛋，会丢失调用链）
    panic、recover、defer，类似 try catch，出错你不捕获，就向上抛。直接退出也会比层层返回方便的多。因此go中实现了panic-recover机制，专门用于对这些异常进行抛出和恢复。

据我不完全观察，很多人喜欢异常，其实喜欢的并不是异常，而是抛异常出错时完整的堆栈信息让人很方便的定位问题。


```
