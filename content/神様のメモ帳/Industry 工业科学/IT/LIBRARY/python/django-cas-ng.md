---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/views
github: django-cas-ng/django-cas-ng
pip: django-cas-ng
---

- Dependencies
    - [[Python]] 3.7+
    - [[Django]] 2.2+

- Installation
    - `pip install django-cas-ng`
    - `settings.CAS_SERVER_URL: str`
        - base URL of your CAS source
        - e.g. `https://account.example.com/cas/`

- Pro
    - Supports CAS versions 1.0, 2.0 and 3.0
        - [CAS Protocol Overview — django-cas-ng 5.0.0 documentation](https://djangocas.dev/docs/latest/cas-protocol-overview.html)
    - Support Single Logout (needs CAS server support)
    - Supports Token auth schemes
