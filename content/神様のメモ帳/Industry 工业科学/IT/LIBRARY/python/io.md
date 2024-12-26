---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/DataAccessLayer/Implement__/IO/File
---

```python
io standard library

API:
    from io import TextIOWrapper
    from typing import BinaryIO

    io.TextIOWrapper
        .__enter__() -> Self
            - 上下文管理器
        .__exit__()
            - 上下文管理器
            - 自动关闭 IO
            - 手动关闭 IO 请用 self.close()
        .__iter__() -> Iterator[str]
        .__next__() -> str
            - 每次迭代返回一行（包含行尾的换行符）
        .read() -> str
            __size: int | None
            - 默认读取全部文本
        .readline() -> str
            __size: int = -1
            - 默认读取一行（包含行尾的换行符）
            - 读指针移到下一行开头
        .readlines() -> List[str]
            __hint: int = -1
            - 读取所有行（包含行尾的换行符）
        .write(__s: str) -> int
            - 写入字符串
        .writelines(__lines: Iterable[str]) -> None
            - 写入多行
        .seek()
            - 指针
            - f.seek(0) 读指针 定位到 文件开头
        .name: str
            - 文件路径
        .mode: str
            - 打开模式
            - 就是 open() 用的那个 E.g. 'r'
        .encoding: str
            - 文件编码
            - E.g. 'utf-8'
        .closed: bool
            - 文件是否关闭
        .readable() -> bool
            - 文件是否可读
        .writable() -> bool
            - 文件是否可写
        .seekable() -> bool
    typing.BinaryIO



# 文件 IO 对象
f = open('test.txt', 'a+', encoding='utf-8')  # a mode 文件指针在文件末尾，r/w mode 文件指针在文件开头

# 文件指针
f.tell()  # 文件指针左侧の字节数，即文件指针位置，即偏移量
f.seek(offset[, whence])  # 把文件指针移动到指定位置

8 bit 为 1 byte，byte 是一个文件的最小存储单位，也就是说，如果以 byte 为单位，文件大小一定是整数，如果以 bit 为单位，文件大小一定是 8 的整数倍 bit。

offset 的值是个整数，表示指针

指针指向的是 byte，
'r/w' 文件指针的初始位置 offset 是 1，也就是指向第 1 个 byte
'a' 文件指针的初始位置 offset 是 os.path.getsize('file_path')
也就是说 offset 最大值 == 字节数，offset 最小值 == 1


# 文件模式
f.readable()  # IO 对象是否可读
f.writeable()  # IO 对象是否可写

# 其他
.flush()  # 手动刷新缓冲区
.truncate()

```
