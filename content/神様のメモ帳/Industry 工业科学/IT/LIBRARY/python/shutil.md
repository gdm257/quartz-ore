---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/File
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: shutil
---

## ~~shutil~~

```python
import shutil
import os
from pathlib import Path

""" 文件 """

# 复制、移动
shutil.copy(r'/src/file00', r'/dst/file00-copy')
shutil.copy2(r'/src/file00', r'/dst/file00-copy')
shutil.copyfile(r'/src/file00', r'/dst/file00-copy')
shutil.move(r'/src/file00', r'/dst/file00-copy')

# 删除
os.remove(r'file00')


""" 目录 """
# 复制、移动
shutil.move(r'/src/dir00/', r'/dst/dir00-move/')
shutil.copytree(r'/src/dir00/', r'/dst/dir00-copy/',
    symlinks=False,
    ignore=shutil.ignore_patterns(r'*.pyc', r'tmp*')
)

# 删除
shutil.retree(r'/dir00/')  # rm -rf '/dir00/'

# 创建
Path(r'支持/多级/目录/').mkdir()
os.makedirs(r'支持/多级/目录/')
os.mkdir(r'单级目录/')



```



