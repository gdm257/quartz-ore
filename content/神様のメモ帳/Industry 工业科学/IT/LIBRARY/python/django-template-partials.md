---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
github: carltongibson/django-template-partials
pip: django-template-partials
django-apps:
  - template_partials
django-template-tags:
  - partials
---

- Idea
    - Inline `include` in one file
    - Reusable named inline partials for the Django Template Language

- Alternatives
    - [[Django]] `include` tag
    - [[django-components]]

- Con
    - NOT Support `{% block %}` in `partial`
        - block will be invalid as non-existing

- Examples
    - [Django, HTMX, and Template Partials](https://circumeo.io/blog/entry/django-htmx-and-template-partials/)
