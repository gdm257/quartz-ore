---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/mypy/plugin
github: typeddjango/django-stubs
pip: django-stubs
---

- Idea
    - support [[mypy]] for [[Django]]

- Installation
    - ~~`pip installl django-stubs[compatible-mypy]`~~
    - `pip installl django-stubs`
    - optional
        - `pyproject.toml` - `[tool.mypy]` - `plugins: list` - `"mypy_django_plugin.main"`
        - `pyproject.toml` - `[tool.django-stubs]` - `django_settings_module: str` - `"myproject.settings"`

- Test
    - [[pre-commit]] & [[mypy]] 不支持 src-layout，mypy 插件没法用

- References
    - [python - Type annotations for Django models - Stack Overflow](https://stackoverflow.com/questions/59031982/type-annotations-for-django-models)
