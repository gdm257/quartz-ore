---
tags:
- flag/License/MIT
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/middleware
github: adamchainz/django-cors-headers
pip: django-cors-headers
---

- Idea
    - A Django app that supports CORS automatically

- Fundamentals
    - 处理 Response
        - 加上 `Access-Control-Allow-Origin` header
    - 处理 Request
        - 如果是 Preflight Request，直接处理并响应

- Dependencies
    - [[Django]] 3.2+
    - [[Python]] 3.8+

- Installation
    1. `pip install django-cors-headers`
    2. `settings:INSTALLEDAPPS` - `corsheaders`
    3. `settings:MIDDLEWARE` - `corsheaders.middleware.CorsMiddleware` before any middleware that can generate responses such as `django.middleware.common.CommonMiddleware` `WhiteNoiseMiddleware`

- Configuration
    - `settings`
        - set at least one of three following settings
        - `CORS_ALLOWED_ORIGINS: Sequence[str] = []`
        - `CORS_ALLOWED_ORIGIN_REGEXES: Sequence[str | Pattern[str]] = []`
        - `CORS_ALLOW_ALL_ORIGINS: bool = false`
