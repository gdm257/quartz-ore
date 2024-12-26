---
tags:
- flag/License/MIT
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
github: django-crispy-forms/django-crispy-forms
pip: django-crispy-forms
---

- Idea
    - The best way to have Django DRY forms
    - `|crispy` `{% crispy %}` 渲染漂亮的表单

- Dependencies
    - [[Django]] 4.0+ for [[django-crispy-forms]] 1.13+
    - [[Django]] 3.2 for [[django-crispy-forms]] latest (2024.04)
    - [[Python]] 3.8+
    - Any template pack
        - [[crispy-tailwind]]
        - `crispy-bulma`
        - `crispy-forms-foundation`
        - `crispy-forms-bootstrap2`
        - `crispy-bootstrap3`
        - `crispy-bootstrap4`
        - `crispy-bootstrap5`

- Installation
    1. `pip install django-crispy-forms`
    2. `settings.py:INSTALLED_APPS` - `'crispy_forms'`
    3. `settings.py:CRISPY_TEMPLATE_PACK`
        - `tailwind` through [[crispy-tailwind]]

- Architecture
    - Template pack
        - 说人话就是 `|crispy` `{% crispy %}` 能够使用各种 JS/CSS 库来自定义渲染细节

- API
    - `|crispy`
    - `{% crispy %}`
