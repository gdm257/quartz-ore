---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: pennersr/django-allauth
pip: django-allauth
---

- Dependencies
    - [[Django]] 3.2+

- Installation
    1. `pip install django-allauth[mfa]`
    2. Make sure `settings.py:TEMPLATES[0]['OPTIONS']['context_processors']` - `django.template.context_processors.request`
    3. `settings:INSTALLED_APPS` - `allauth` `allauth.account` `allauth.mfa` `allauth.socialaccount`
    4. `settings:MIDDLEWARES` - `allauth.account.middleware.AccountMiddleware`
    5. `settings:SOCIALACCOUNT_PROVIDERS`
    6. `urls:` - `path('accounts/', include('allauth.urls'))`
    7. `python manage.py migrate`
    - [Quickstart — django-allauth 0.60.0 documentation](https://docs.allauth.org/en/latest/installation/quickstart.html)
