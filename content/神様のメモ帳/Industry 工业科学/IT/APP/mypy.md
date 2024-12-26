---
tags:
- flag/License/Apache
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Python
- flag/APP/DevOps/Linter
---

- References
    - [PEP 561 – Distributing and Packaging Type Information | peps.python.org](https://peps.python.org/pep-0561/)

- Ecosystem
    - [typeddjango/awesome-python-typing](https://github.com/typeddjango/awesome-python-typing)
    - [mypy builtin plugins](https://github.com/python/mypy/tree/master/mypy/plugins)
    - [sbdchd/celery-types](https://github.com/sbdchd/celery-types)
    - [sbdchd/mongo-types](https://github.com/sbdchd/mongo-types)

- Fundamentals
    - [python/typeshed](https://github.com/python/typeshed)

- Idea
    - Linter，但是静态类型检查器，只检查类型错误
        - Type Annotation (Type Hints)
        - 类型推断

- Configuration
    - `./mypy.ini`
    - `./.mypy.ini`
    - `./pyproject.toml`
    - `./setup.cfg`
    - `$XDG_CONFIG_HOME/mypy/config`
    - `~/.config/mypy/config`
    - `~/.mypy.ini`
    - 项目级
        - section named `[mypy]` must be present
    - module 级
        - Additional sections named `[mypy-PATTERN1,PATTERN2,...]` may be present, where `PATTERN1`, `PATTERN2`, etc., are comma-separated patterns of fully-qualified module names, with some components optionally replaced by the `*` character (e.g. `foo.bar`, `foo.bar.*`, `foo.*.baz`). These sections specify additional flags that only apply to _modules_ whose name matches at least one of the patterns
        - Patterns may also be “unstructured” wildcards, in which stars may appear in the middle of a name (e.g `site.*.migrations.*`). Stars match zero or more module components (so `site.*.migrations.*` can match `site.migrations`)
    - 代码级
        - 以 Python 行尾注释的方式
            - `# noqa: E501, ...`
            - `# type: ignore`
            - `# type: ignore[misc]`
    - Specification
        - `[mypy]`
            - `plugins: List[str]`
    - [The mypy configuration file - mypy 1.4.1 documentation](https://mypy.readthedocs.io/en/stable/config_file.html#config-file)

- Examples
    - `mypy xxx.py`

|   Python 内置类型    |             描述              |
| ------------------- | ----------------------------- |
| int                 | 整数                          |
| float               | 浮点数                        |
| bool                | 布尔值                        |
| str                 | 字符串                        |
| bytes               | 8-bit 字符串                  |
| object              | 对象                          |
| Any                 | 任意类型                      |
| list\[str\]         | 字符串数组                    |
| tuple\[int, int\]   | 2个整数元素的元祖              |
| tuple\[int, ...\]   | 任意数量整数元素的元祖         |
| dict\[str, int\]    | key为字符串，value是整数的字典 |
| Iterable\[int\]     | 可迭代类型，元素为整数         |
| Sequence\[bool\]    | 布尔值序列                    |
| Mapping\[str, int\] | key是字符串，value是整数的映射 |
