---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/BusinessLogicLayer/Implement__/Exception
---

[内置异常 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/library/exceptions.html)

[Python 工匠： 异常处理的三个好习惯](https://github.com/piglei/one-python-craftsman/blob/master/zh_CN/6-three-rituals-of-exceptions-handling.md)

[调用追踪与异常栈追踪 · python攻略](https://blog.hszofficial.site/TutorialForPython/%E5%B7%A5%E5%85%B7%E9%93%BE%E7%AF%87/%E8%B0%83%E7%94%A8%E8%BF%BD%E8%B8%AA%E4%B8%8E%E5%BC%82%E5%B8%B8%E6%A0%88%E8%BF%BD%E8%B8%AA.html)

[8. Errors and Exceptions — Python 3.11.1 documentation](https://docs.python.org/3/tutorial/errors.html)

[PEP 249](https://peps.python.org/pep-0249/#exceptions)

- References
    - [创建自定义异常](https://python3-cookbook.readthedocs.io/zh_CN/latest/c14/p08_creating_custom_exceptions.html)

- API
    - `BaseException`
        - 请勿直接继承 `BaseException`
    - `Exception`
        - 自定义异常请继承 `Exception` 或其 subclass

```python

【异常类型】

raise ValueError("xxx")
raise TypeError("Expected a string")
raise KeyError("xxx")
raise KeyError

KeyboardInterrupt: Ctrl-C
KeyError 当在现有键集合中找不到指定的映射（字典）键时将被引发。
SyntaxError：语法错误
NameError：尝试访问一个未申明的变量
IndexError：索引超出范围
KeyError：字典关键字不存在
IOError：输入输出错误
AttributeError：访问未知对象属性
ValueError：数值错误。传入一个调用者不期望的值，即使值的类型是正确的
TypeError：类型错误
AssertionError：断言错误
ZeroDivisionError：除数为0
MemoryError：内存耗尽异常
NotImplementedError：方法没实现引起的异常
LookupError：键、值不存在引发的异常
StandardError 标准异常




其实，`except:` 与 `except Exception:` 并不相同，区别是，except:会catch包括SystemExit的所有异常，except Exception:不会catch SystemExit，因为SystemExit的父类并不是Exception，而是BaseException。

应该使用 except Exception:，而不是 except:，后者可能把SystemExit和KeyboardInterrupt错误地catch住，导致程序不能用exit或者输入Ctrl-C退出。

sys.exit 抛出 SystemExit 异常来退出解释器.
exit 基本等价于 sys.exit


* 所有异常必须派生自 BaseException 类


我该抛出哪种异常？

* 入参拿到了预期之外的类型对象——TypeError


我可能经常遇到哪种异常？

* 索引越界——IndexError
* 未知键名——KeyError






BaseException
Exception
ArithmeticError
BufferError
LookupError

常见异常
AssertionError
AttributeError
IndexError
KeyError
NameError
TypeError
ZeroDivisionError

具体异常
AssertionError
AttributeError
EOFError
FloatingPointError
GeneratorExit
ImportError
ModuleNotFoundError
IndexError
KeyError
KeyboardInterrupt
MemoryError
NameError
NotImplementedError
OSError
OverflowError
RecursionError
ReferenceError
RuntimeError
StopIteration
StopAsyncIteration
SyntaxError
IndentationError
TabError
SystemError
SystemExit
TypeError
UnboundLocalError
UnicodeError
UnicodeEncodeError
UnicodeDecodeError
UnicodeTranslateError
ValueError
ZeroDivisionError
EnvironmentError
IOError
WindowsError

```
