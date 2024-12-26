---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
github: django-crispy-forms/crispy-tailwind
pip: crispy-tailwind
---

- Idea
    - A [[Tailwind CSS]] template pack for the wonderful [[django-crispy-forms]]
    - 说人话就是 `|crispy` `{% crispy %}` 能够使用 [[Tailwind CSS]] 来自定义渲染细节

- Dependencies
    - [[Django]] 4.2+
    - [[django-crispy-forms]]

- Installation
    1. `pip install crispy-tailwind`
    2. `INSTALLED_APPS` - `crispy_tailwind` next to `crispy_forms`
    3. `CRISPY_ALLOWED_TEMPLATE_PACKS = 'tailwind'`
    4. `CRISPY_TEMPLATE_PACK = 'tailwind'`
    5. for `|crispy`
        - `{% load tailwind_filters %}`
        - `{{ form|crispy }}`
    6. for `{% crispy %}`
        - Add `FormHelper` to your form and use crispy-forms to set-up your form
        - `{% load crispy_forms_tags %}`
        - `{% crispy form %}`
