---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/mypy
github: typeddjango/djangorestframework-stubs
pip: djangorestframework-stubs
---

- Installation
    - ~~`pip install djangorestframework-stubs[compatible-mypy]`~~
    - `pip install djangorestframework-stubs`
    - (optional) [[mypy]] plugin `mypy_drf_plugin.main`

- Test
    - [[pre-commit]] & [[mypy]] 不支持 src-layout，mypy 插件没法用
