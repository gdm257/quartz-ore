---
aliases:
- ctypes
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/Interop
---

[Python/C API 参考手册 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/index.html)

[聊聊 Python 互操作（混合编程） | SinHub's Blog](https://sinhub.cn/2020/01/little-talk-about-interoperation-of-python/)

[如何实现 C/C++ 与 Python 的通信？ - 知乎](https://www.zhihu.com/question/23003213)

韦易笑
swig太老，直接写 module 太麻烦容易出错（比如引用）。cython（复杂封装） + cffi（pypy追求性能） + ctypes（普通封装），这三个足够了。

[Python 中调用 Go 代码 | Leetao's Blog](https://leetaogoooo.github.io/2022/10/28/Python%20%E4%B8%AD%E8%B0%83%E7%94%A8%20Go%20%E4%BB%A3%E7%A0%81/)


```python
from ctypes import cdll

lib = cdll.LoadLibrary('./s1.so')

# 调用go语言的Sum
result = lib.Sum(100, 200)
print(result)

```