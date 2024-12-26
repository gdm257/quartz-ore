---
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Wagtail/Report
github: cfpb/wagtail-inventory
pip: wagtail-inventory
---

- Idea
    - Search Wagtail pages by block type in the Wagtail admin site, under Reports > Block Inventory

- Installation
    1. `pip install wagtail-inventory`
    2. `settings.py:INSTALLED_APPS` - `'dal','dal_select2','wagtailinventory'`
    3. `manage.py migrate wagtailinventory`
    4. `manage.py block_inventory`
