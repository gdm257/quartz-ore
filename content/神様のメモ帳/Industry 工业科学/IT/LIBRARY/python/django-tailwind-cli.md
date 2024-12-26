---
tags:
- flag/License/MIT
- flag/LANGUAGE/Python
- flag/LANGUAGE/CSS
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/commands
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
github: oliverandrich/django-tailwind-cli
pip: django-tailwind-cli
---

## Brief

- References

- Installation
    1. `pip install django-tailwind-cli[django-extensions]`
    2. `settings:INSTALLED_APPS` - `django_tailwind_cli` before `django_extensions`
    3. `settings:STATICFILES_DIRS` - e.g. `BASE_DIR / 'assets'`
    4. `mkdir assets`
    5. `python manage.py tailwind build` generates `.css`
    6. `python manage.py collectstatic`
    7. `{% load tailwind_cli %}` for DTL tags
    8. `{% tailwind_css %}` in `<head>` element

- Dependencies
    - [Settings & Configuration - django-tailwind-cli](https://django-tailwind-cli.andrich.me/settings/)

- Edition

- Idea
    - 生成 [[Tailwind CSS]] 的 `.css` 文件并导入

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
    - [[django-tailwind-cli]] 本质上是对 [[Tailwind CSS]] CLI 的封装，所以手动调用 CLI 可以实现完全相同的效果

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
