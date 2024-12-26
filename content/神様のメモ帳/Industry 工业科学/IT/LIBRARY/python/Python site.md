---
aliases:
- site
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/MetaProgramming/Attribute/Namespace
---

[site — Site-specific configuration hook — Python 3.11.1 documentation](https://docs.python.org/3/library/site.html)

```python
site standard library
Description:
    * site 主要用来完成 site-packages 相关设置的.
    * site 一般用于 Python 虚拟环境工具、打包工具.
    * site 对 App 开发基本没用.
    * site 在程序初始化时会被导入.
    * site 的导入，会追加 site-specific paths 至 sys.path
    * site 的导入，会添加 builtins

API:
    .main()
        * 追加 site-specific paths 至 sys.path

```