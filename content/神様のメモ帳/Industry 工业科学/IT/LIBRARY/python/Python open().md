---
aliases:
- "open()"
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinFunction
- flag/Library/DataAccessLayer/Implement__/IO/File
---

[5.18 将文件描述符包装成文件对象 — python3-cookbook 3.0.0 文档](https://python3-cookbook.readthedocs.io/zh_CN/latest/c05/p18_wrap_existing_file_descriptor_as_file_object.html)

[python中文件复制 - FooFish](https://foofish.net/python-copy-file.html)

[用python-dotenv解决代码与敏感信息的分离 - FooFish](https://foofish.net/python-dotenv.html)

[shutil --- 高阶文件操作 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/shutil.html#module-shutil)

- Links
    - [[io|Python io]]
    - typing.BinaryIO


```python
open() built-in function
API:
    open(file) -> io.TextIOWrapper | typing.BinaryIO


'r'或'rt'：   默认模式，文本读模式
'w'或'wt'：以文本写模式打开（打开前文件被清空）
'rb'：       以二进制读模式打开
'ab'：      以二进制追加模式打开
'wb'：      以二进制写模式打开（打开前文件被清空）
'r+'：       以文本读写模式打开，默认写的指针开始指在文件开头, 因此会覆写文件
'w+'：      以文本读写模式打开（打开前文件被清空）
'a+'：      以文本读写模式打开（只能写在文件末尾）
'rb+'：     以二进制读写模式打开
'wb+'：   以二进制读写模式打开（打开前被清空）
'ab+'：    以二进制读写模式打开


# 关闭（保存）文件
f.close()

# 配合 with 使用，则无需手动 close()，Python 自动帮你关闭
with open('test.log', 'a+', encoding='utf-8'):
    f.write('\n第5行')
    f.write('\n第6行')
    f.write('\n第7行')

# 二进制文件の读写，区别在于需要启用 b 模式，然后少个 encoding
with open('test.zip', 'wb+') as f:
    bin = f.read()
    f.write(bin)  # 看上去文件内容不变，实际是覆盖写入了一遍

```
