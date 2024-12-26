---
tags:
- flag/License/BSD
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/models
github: tolomea/django-data-browser
pip: django-data-browser
---

## Brief

- References

- Installation
    1. `pip install django-data-browser`
    2. `settings:INSTALLED_APPS` - `data_browser`
    3. `urls` - `path("data-browser/", include("data_browser.urls"))`
    4. `python manage.py migrate`

- Dependencies
    - [[Django]] 3.2+

- Edition

- Idea
    - 专门用来查看 Models 数据库，用法类似 [[Django]] Admin

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
    - Directory Structure
        - `<myapp>/data_browser.py`
        - 类似 [[Django]] Admin
            - Register by [[Django]] app itself
            - 注册 models 是各个 app 自己进行声明
            - [[django-data-browser]] 使用方法也是提供一个独立页面，就像 Django Admin 的 `/admin` URL

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
