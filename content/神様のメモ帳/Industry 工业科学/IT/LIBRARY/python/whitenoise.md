---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/middleware
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
  - flag/Library/APILayer/Implement__/Web/WSGI/Middleware
pip: whitenoise
github: evansd/whitenoise
---

## Brief

- Installation
    1. `pip install whitenoise`
    2. `settings:MIDDLEWARE` - `whitenoise.middleware.WhiteNoiseMiddleware` next to `django.middleware.security.SecurityMiddleware`
    3. [[Django]] 4.2+
        - (Optional) `STORAGES.staticfiles.BACKEND` - `whitenoise.storage.CompressedManifestStaticFilesStorage`
    4. [[Django]] <4.2
        - (Optional) `STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'`

- Dependencies

- Edition

- Idea
    - Serve [[Django]] static files when `Debug = False`

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals
    - 利用 [[Django]] Middleware 对 static requets 进行 hook

- Architecture

- Pro

- Con
    - 只支持 static files，不支持 other urlconf
    - 无法替代 [[gunicorn]] etc [[WSGI]] Server

- Test

- Alternatives

- Description
