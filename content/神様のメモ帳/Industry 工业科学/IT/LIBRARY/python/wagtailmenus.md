---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Wagtail/Page
github: jazzband/wagtailmenus
pip: wagtailmenus
vars:
  - wagtailmenus_vals
  - section_root
  - current_page_ancestor_ids
---

- Dependencies
    - [[wagtail]] 4.1+
    - [[Django]] 3.2+
    - [[Python]] 3.8+

- Installation
    1. `pip install wagtailmenus`
    2. `pip install wagtail_modeladmin` for [[wagtail]] 5.1+
    3. `settings.py:INSTALLED_APPS` - `wagtail_modeladmin` for [[wagtail]] 5.1+
    4. `settings.py:INSTALLED_APPS` - `wagtail.contrib.modeladmin` for [[wagtail]] < 5.1
    5. `settings.py:INSTALLED_APPS` - `wagtailmenus`
    6. `settings.py:TEMPLATES[0].OPTIONS.context_processors` - `wagtailmenus.context_processors.wagtailmenus`
    7. `python manage.py migrate wagtailmenus`
    8. `python manage.py autopopulate_main_menus` (Optional)
