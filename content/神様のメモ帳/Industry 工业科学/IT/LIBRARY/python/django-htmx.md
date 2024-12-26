---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/middleware
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/views
github: adamchainz/django-htmx
pip: django-htmx
---

## Brief

- References
    - [adamchainz/django-htmx: Extensions for using Django with htmx.](https://github.com/adamchainz/django-htmx)

- Installation
    1. `pip install django-htmx`
    2. `settings:INSTALLED_APPS` - `django_htmx`
    3. `settings:MIDDLEWARE` - `django_htmx.middleware.HtmxMiddleware`
    - [Installation - django-htmx 1.17.2 documentation](https://django-htmx.readthedocs.io/en/latest/installation.html)

- Dependencies
    - [[Django]] 3.2+
    - [[Python]] 3.8+

- Edition

- Idea
    - Attach info about [[htmx]] to [[Django]] request
    - Provide functionalities that make [[htmx]] response

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
    - `request.htmx`
        1. Enable [[Django]] middleware from [[django-htmx]]
        2. Middleware 检查 [[HTTP]] headers，判断是否为 [[htmx]] request
        3. 如果是，为请求赋值一个新属性 `request.htmx: django_htmx.middleware.HtmxDetails`
        4. `django_htmx.middleware.HtmxDetails` 实例方便开发者读取 [[htmx]] request headers
        - Inject a `htmx` property to `request` i.e. `request.htmx` when there is a [[htmx]] request, which includes infomation about [[htmx]] request header
        - [Middleware - django-htmx 1.17.2 documentation](https://django-htmx.readthedocs.io/en/latest/middleware.html)

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
