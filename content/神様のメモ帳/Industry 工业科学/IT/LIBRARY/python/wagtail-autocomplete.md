---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Wagtail/Widget
github: wagtail/wagtail-autocomplete
pip: wagtail-autocomplete
---

- Idea
    - Autocompleting choosers for `ForeignKey`, `ParentalKey`, and `ManyToMany` fields

- Installation
    1. `pip install wagtail-autocomplete`
    2. `settings.py:INSTALLED_APPS` - `wagtailautocomplete`
    3. `urls.py:urlpatterns` - `path('admin/autocomplete/', include(autocomplete_admin_urls))` before `admin/`
    4. `AutocompletePanel('field_01')` for `Page.content_panels` or `Snippet.content_panels` 
