---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## ~~gevent~~

[argparse 的高级用法 | Frost's Blog](https://frostming.com/2021/11-23/advanced-argparse/)


我选择 async/await。目前没有任何一个方案能让一个函数同时是「同步函数」和「协程函数」，包括 Golang。我设想过，如果支持函数重载并且编译器提供额外支持的话还有点希望。在那之前， 「async/await」「channel」就是两个最好的方案，二者没有本质区别，channel 只不过是语法糖化了，看起来像同步函数，但其实不能当同步函数使用。

综上，gevent 这种 Python 2 时代的方案早已经可以完全放弃了，更何况还得打猴子补丁。总之，不如 async/await。