---
tags:
- flag/License/Apache
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Awaitable
- flag/Library/DataAccessLayer/Implement__/IO/File
github: Tinche/aiofiles
pip: aiofiles
---

```python
aiofiles library
Description:
    * aiofiles 提供操作文件相关的协程对象.
    * aiofiles.os 的 API 基本复刻 os 模块，但是协程.
    * aiofiles 的 API 专门被做的老旧，我不喜欢.

API:
    .stdin
    .stdin_bytes
    .open(file)
        file
        mode
        encoding
        newline
        * 可看作 open() 内置函数的协程版.
            .close()
            .__aenter__() -> f
            .__aexit__()

    aiofiles.tempfile.TemporaryFile
        .close()
        .__aenter__() -> f
        .__aexit__()


```