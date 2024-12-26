---
tags:
- flag/License/BSD
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: sehmaschine/django-filebrowser
pip: django-filebrowser
---

## Brief

- References

- Installation
    1. `pip install django-filebrowser`
    2. `settings.py:INSTALLED_APPS` - `filebrowser` before `django.contrib.admin`
    3. `urls.py`
        1. `from filebrowser.sites import site`
        1. `urlpatterns` - `path('admin/filebrowser/', site.urls)` before any admin-urls (including [[django-grappelli]])
    4. `python manage.py collectstatic`

- Dependencies
    - FileBrowser 3.14.3
        - [[Django]] 3.2
        - [[django-grappelli]] 2.15
        - pillow
    - FileBrowser 4.0.3
        - [[Django]] 4.0
        - [[django-grappelli]] 3.0
        - pillow

- Edition

- Idea
    - manage media/uploads files in [[Django]] admin with [[django-grappelli]]

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

- Alternatives

- Description
