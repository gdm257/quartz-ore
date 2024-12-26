---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/views
github: encode/django-vanilla-views
pip: django-vanilla-views
---

- Idea
    - 重新实现了一遍 `django.views` 的 CBV，更加简洁

- Pro
    - 更加合理的继承链
        - inheritance hiearchy of [[Django]] implement is complex E.g. `Mixin` `Form` `Base`
    - 没有 Mixin，源码简洁易懂

- Dependencies
    - [[Django]] 2.2-3.2
    - [[Python]] 3.6-3.9

- References
    - [Django Vanilla Views - Beautifully simple class based views](http://django-vanilla-views.org/)
