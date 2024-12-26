---
aliases:
  - Lua
  - Lua Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Lua 5.3 参考手册](http://cloudwu.github.io/lua53doc/contents.html)

[Lua快速入门 - 掘金](https://juejin.cn/post/6844904001872330766)

[CookBook/Lua at master · Byron4j/CookBook](https://github.com/Byron4j/CookBook/tree/master/Lua)

[一天上手Lua脚本语言 | 文章 | BEWINDOWEB](http://www.bewindoweb.com/225.html)

[为什么 lua 在游戏开发中应用普遍？ - 知乎](https://www.zhihu.com/question/395593519/answer/2738722877)

- Fundamentals
    - Virtual Machine
        - 主流的脚本型语言都用虚拟机来实现
        - [深入理解Lua虚拟机 - 可可西 - 博客园](https://www.cnblogs.com/kekec/p/11768935.html)
        - [lichuang/Lua-Source-Internal](https://github.com/lichuang/Lua-Source-Internal)

- Idea
    - *最速启动* 脚本语言

- Version
    - *5.1*
        - [[neovim]] comes with LuaJIT
        - LuaJIT supports [[Lua]] 5.1 syntax
        - LuaJIT supports [[Lua]] 5.2/5.3 partial syntax
    - ~~5.2~~
    - ~~5.3~~

- Users
    - [[neovim]]

## `reqire()`

- Con
    - NOT Support directory as module
        - `.lua` file `return` a table in top-level as exporting module, which is similar to [[JavaScript|JS]] CommonJS's `module.exports` and [[Python]] `__init__.py`'s `__all__`

## 异步

lua 没有 `await`，纯用 `yield` 实现异步！主流语言就只剩 [[Lua]] 和 [[Go]] 能避免 `await` 的传染性了


## 数据类型

八种基本类型

nil
boolean
number
string
function
userdata    用户数据
thread    线程
table    表（匿名键自动数字索引的 *有序字典*）

userdata、thread、table 在 lua 中被称为「对象」。

Lua 中所有的值都是 一等公民。

表是 Lua 中唯一的数据结构，它可被用于表示普通数组、序列、符号表、集合、记录、图、树等等。


## C

想要弄明白 lua，关键在于理解为什么不用 c 语言：

用C/C++开发的大型程序，拥有了可靠性和速度，但是其灵活性不够。
比如我要增加某项附加功能，用C/C++当然还能做，但众所周知C这类语言的开发速度远远比不上lua这类解释型语言，lua光是一个不用定义数据类型，就节省了成吨的功夫，而且某些数据结构用C来表示是很麻烦的，例如你要用C的数据结构去描述json string，如果不用第三方库，你知道凌晨四点的洛杉矶是什么
样子的吗

所以就有lua的用武之地了，lua速率可以接受，lua嵌入C容易得就像一个妈生的一样，注意是嵌入而不是简单的调用啊？试想如果有很多主流功能之外的额外用lua开发，用这省下来的成吨的时间，去研究怎样拿到前台小妹的电话不好吗？

7 人赞同了该回答
通信系统中用LUA做业务脚本，高效灵活，谁用谁知道。通信行业还是比较习惯用C写软件的，但是C用起来很费劲不是吗，因此把底层用C写好，变化业务部分用LUA做，简直不要太爽。

最近有厂商研发出支持LUA脚本的通信模块，可以方便地在上面实现各种业务，这是一种潮流，因为很多时候用户希望快速地基于模块做一些自己的应用，如果只是提供c语言SDK，用起来还是很麻烦的，首先你要搭建编译环境，其次你要熟悉SDK的使用，如果该SDK是基于嵌入式操作系统的，你还得了解该操作系统的细节，反正就是很麻烦就是了。使用LUA呢，厂商将基本功能封装好，提供LUA库，不用编译环境，直接用记事本就可以写脚本，下载下去就能运行

总结一下，lua是一门被定位为：胶水的脚本语言。它底层是c，是一种面向过程的语言。但是由于其轻量级，易维护，且可以用来模拟面对对象。因此，它可以很好的和其他大型面对对象语言对接，而且能方便的进行维护和功能扩展。

**一句话，造小轮子很顺手**
