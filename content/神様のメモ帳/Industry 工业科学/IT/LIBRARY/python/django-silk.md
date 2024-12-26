---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: jazzband/django-silk
pip: django-silk
django-apps:
  - silk
django-middlewares:
  - silk.middleware.SilkyMiddleware
---

- Idea
    - [[Django]] profiler

- Installation
    1. `pip install django-silk`
    2. `settings.py:INSTALLED_APPS` - `silk`
    3. `settings.py:MIDDLEWARE` - `silk.middleware.SilkyMiddleware` before any middleware that returns anything from `process_request`, after `django.middleware.gzip.GZipMiddleware`
    4. `urls.py:urlpatterns` - `path('silk/', include('silk.urls', namespace='silk'))`
    5. `python manage.py migrate`
    6. `python manage.py collectstatic`

- Con
    - Slow down
        - Any profiler does slow down application, so it should not be used in production environment
        - [[Question] Best performance settings · Issue #565 · jazzband/django-silk](https://github.com/jazzband/django-silk/issues/565)
