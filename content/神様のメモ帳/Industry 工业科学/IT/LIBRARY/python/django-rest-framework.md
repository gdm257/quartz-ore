---
aliases:
- DRF
tags:
- flag/License/MIT
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/views
pip: djangorestframework
---

## Brief

- Alternatives
    - [[Django]] `APIView`

- Ecosystem
    - django-filter
    - [nioperas06/awesome-django-rest-framework](https://github.com/nioperas06/awesome-django-rest-framework)

- Objects
    - Django View
        - View is the object `urlpatterns` need
        - View is the hook to handle `request` and return `response`
    - Serializer
        - The purposes of View and Serializer are same in total
        - Serializer is also in order to provide object for `urlpatterns`
        - which means Serializer is essentially the body of View that implements general business
        - deserialize [[JSON]] to Python object for [[Django]] model
    - ViewSet
        - CRUD
        - ViewSet == Special Serializer
    - Router
        - register ViewSet as urls
