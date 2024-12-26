---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: whitespy/django-node-assets
pip: django-node-assets
---

- Alternatives
    - `settings:STATICFILES_DIR: list` - `BASE_DIR.parent / 'node_modules'`

- Idea
    - staticfiles finder for `node_modules`

- Installation
    1. `pip install django-node-assets`
    2. `settings.py:STATICFILES_FINDERS: list` - `django.contrib.staticfiles.finders.FileSystemFinder` `django.contrib.staticfiles.finders.AppDirectoriesFinder` `django_node_assets.finders.NodeModulesFinder`
    3. `settings:NODE_PACKAGE_JSON` - `/path/to/package.json`
    4. `settings:NODE_MODULES_ROOT` - `/path/to/node_modules`
    5. `settings:NODE_PACKAGE_MANAGER_EXECUTABLE` - `/path/to/npm` (optional)
    6. `python manage.py npminstall` install dependencies specified in the `package.json`, or use `npm install`
    7. `{% static 'jquery/dist/jquery.min.js' %}`
