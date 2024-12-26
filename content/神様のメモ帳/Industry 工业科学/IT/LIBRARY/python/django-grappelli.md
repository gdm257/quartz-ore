---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: sehmaschine/django-grappelli
pip: django-grappelli
---

## Brief

- References

- Installation
    1. `pip install django-grappelli`
    2. `settings.py:INSTALLED_APPS` - `grappelli` before `django.contrib.admin` and `import_export`
    3. `urls.py:urlpatterns` - `path('grappelli/', include('grappelli.urls'))` before `admin/`
    4. make sure `settings.py:TEMPLATES` - `context_processors` - `django.template.context_processors.request`
    5. `python manage.py collectstatic`

- Dependencies
    - Grappelli 3.0.8 requires [[Django]] 4.0
    - Grappelli 2.15.6 requires [[Django]] 3.2

- Edition

- Idea
    - A modern [[Django]] admin theme

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con
    - 不支持 扩展
        - 可以扩展，但缺少文档
        - 看 API 扩展起来既不方便也不强大
        - 完全没有为扩展做出什么考量，属于源码给你你自己看着办

- Test
    - 不推荐
        - [[django-grappelli]] 本身对 Admin 的优化非常有限，基本没有额外功能
        - [[django-grappelli]] UI 难看
        - [[django-grappelli]] 不支持 自定义
        - [[django-grappelli]] 不支持 扩展
        - 除了 star 很多，要啥啥都没

- Alternatives

- Description
