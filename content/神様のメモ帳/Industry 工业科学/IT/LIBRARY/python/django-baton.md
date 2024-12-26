---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
---

## Brief

- References

- Installation
    1. `pip install django-baton`
    2. `settings:INSTALLED_APPS` - `baton` before `django.contrib.admin`; `baton.autodiscover` very end
    3. `urls` - `path('baton/', include('baton.urls'))` after `path('admin/', admin.site.urls)`
    4. `python manager.py collectstatic`

- Dependencies
    - [[Django]] 2.1+

- Edition

- Idea
    - [[Django]] admin theme

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

- Test
    - [[Django]] 3.2 
        - Web 布局显示错误 bug

- Alternatives

- Description
