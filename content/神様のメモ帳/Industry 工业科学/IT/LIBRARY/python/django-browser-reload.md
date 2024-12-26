---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: adamchainz/django-browser-reload
pip: django-browser-reload
---

- Idea
    - Automatically reload your browser in development

- Dependencies
    - [[Python]] 3.8+
    - [[Django]] 3.2+

- Installation
    1. `pip install django-browser-reload`
    2. `settings.py:INSTALLED_APPS` - `django_browser_reload`
    4. `settings.py:MIDDLEWARE` - `django_browser_reload.middleware.BrowserReloadMiddleware` after any others that encode the response, such as Django’s `GZipMiddleware`
    3. `urls.py:urlpatterns` - `path("__reload__/", include("django_browser_reload.urls"))`

- Fundamentals
    - polling
