---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/DataAccessLayer/Implement__/IO/File
---

[文件和目录访问 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/filesys.html)

[Python文件操作，看这篇就足够 - 知乎](https://zhuanlan.zhihu.com/p/56909212)


| 路径                           | 使用情况   | 语义一致性 | .py                 | .exe           | 说明                                               |
| ------------------------------ | ---------- | ---------- | ------------------- | -------------- | -------------------------------------------------- |
| `sys.argv[0]`                  | 推荐使用   | 基本相同   | main.py             | main.exe       | 主执行文件路径，或可执行文件路径                   |
| `sys.argv[0].parent`           | 推荐使用   | 基本相同   |                     |                | 入口文件所在文件夹                                 |
| `__name__`                     | 可以使用   | 相同       | main                | main           | 存放这段代码の模块名称                             |
| `__name__`                     | 可以使用   | 相同       | utils               | utils          | 存放这段代码の模块名称                             |
| `__file__`                     | 请小心使用 | 不同       | /path/to/main.py    | /temp/main.py  | 存放这段代码の模块路径，一般用于查找包内的资源文件 |
| `__file__`                     | 请小心使用 | 不同       | /path/to/utils.py   | /temp/utils.py | 存放这段代码の模块路径，一般用于查找包内的资源文件 |
| `inspect.stack()[-1].filename` | 别用       | 不同       |                     |                | 入口模块路径                                       |
| `sys.executable`               | 别用       | 不同       | /path/to/python.exe | main.exe       | Python 解释器文件路径                              |
| `sys.path[0]`                  | 别用       | 不同       |                     |                | 模块搜索路径，经常被改，别用就对了                 |


```python
pathlib standard library
API:
    from pathlib import Path
    from os import PathLike

    pathlib.Path
        @classmethod
        .cwd() -> Path  # 当前工作目录
        @classmethod
        .home() -> Path  # 家目录

        .__init__()
            path: str | Path | PathLike
            - 尽量别用反斜杠 `\`，极其容易转义，如 `\r`，一律用 `/`
        / Union[str, Path] -> Path
            - 路径拼接
        .joinpath(*path) -> Path
            *path: str | Path
            - 路径拼接
            - E.g.
            - .joinpath('data', 'config.json')

        .iterdir() -> Generator[Path]
            - 遍历该目录（第一层，不递归子文件夹）
            - 等价于 .glob('*')
            - 如果 Path 对象是文件，返回一个空生成器
        .glob(pattern)
            pattern: str
                - glob pattern
        .parents: List[Path]  # 祖先目录s
        .parents[0]  # 父目录
        .parent: Path  # 父目录

        .absolute() -> str  # 绝对路径
        .resolve() -> str  # 绝对路径
        .__str__() -> str
            - Windows 默认使用 `\\` 作为分隔符
            - *nix 默认使用 `/`
        .as_posix() -> Path  # str() 是 正斜杠路径，POSIX 风格
        .as_uri() -> str
            - URI
            - E.g. 'file:///C:/gdm/257.json'
        .parts: Tuple[str]
            - E.g. ('E:\\', 'waifu2x', 'mpv', '4k.mkv')

        .name == .stem + .suffix
        .name: str  # 文件名
        .stem: str  # 文件名 without 扩展名
        .suffix: str  # 扩展名 with dot
        .anchor: Path  # E.g. 'E:\\' 或 '/'
        .drive: str  # E.g. 'E:'
        .with_suffix(s) -> Path
            s: str
            - 返回 同名、但不同扩展名の路径对象
            - E.g. .with_suffix('.json')
        .stat()
            - 文件属性
        .stat().st_size  # bytes (int)
        .stat().st_mtime
            import time
            time.ctime(f.stat().st_mtime)
            time.ctime(f.stat().st_ctime)
            time.ctime(f.stat().st_atime)
        .is_dir() -> bool
        .is_file() -> bool
        .exists() -> bool
        .match(glob_pattern) -> bool
            glob_pattern: str
            - E.g. .match('*.log')


        .touch()
        .mkdir()
            parents: bool
                - 自动递归创建父目录
            exist_ok: bool
                - 不报错 when 目录不存在
            - 创建目录
        .rmdir()  # 删除空目录
        .replace(new)
            - 移动
            - 父目录必须存在
        .rename(new)
        .read_text()
        .read_bytes()
        .write_text('abc')
        .write_text(b'abc')

```
