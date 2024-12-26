---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
  - flag/Library/APILayer/Implement__/Web/DOM
github: adamghill/django-unicorn
pip: django-unicorn
homepage: https://www.django-unicorn.com
django-template-tags:
  - unicorn
django-tags:
  - unicorn
  - unicorn_scripts
html-properties:
  - u
  - unicorn
  - unicorn:model
  - unicorn:key
  - unicorn:id
  - unicorn:target
  - unicorn:loading
  - unicorn:visible
  - unicorn:poll
  - unicorn:poll-1000
  - unicorn:dirty
  - unicorn:partial
  - unicorn:click
js-magic-helper:
  - Unicorn
  - Unicorn.call
  - Unicorn.getReturnValue
  - Unicorn.trigger
  - $event
  - $returnValue
  - $parent
  - $refresh
  - $reset
  - $toggle
  - $validate
html-modifiers:
  - debounce
  - lazy
  - defer
  - prevent
  - stop
  - discard
  - class
  - class.remove
html-events:
  - updated
---

## Brief

- Installation
    1. `pip install django-unicorn`
    2. `settings:INSTALLED_APPS` - `django_unicorn`
    3. `urls:urlpatterns` - `path('unicorn/', include('django_unicorn.urls'))`
    4. Add `{% load unicorn %}` to the top of the Django HTML template
    5. Add `{% unicorn_scripts %}` into the Django HTML template and make sure there is a `{% csrf_token %}` in the template as well
    - [Installation - Unicorn](https://www.django-unicorn.com/docs/installation/)

- Idea
    - [[Django]] 版 [[alpine.js]]
    - Write AJAX components without [[JavaScript|JS]]

- Philosophy
    - Directory Structure
        - `<app>/`
            - `template/unicorn/<component-name.html>`
            - `components/<component_name.py>`

- Objects
    - Unicorn Component
        - view
            - context 之于 Django template，Fields of UnicornView 之于 Component
            - 只有一个 `UnicornView`，没有其他花里胡哨的类
            - [Views - Unicorn](https://www.django-unicorn.com/docs/views/)
        - template
            - [Views - Unicorn](https://www.django-unicorn.com/docs/views/)
            - [Actions - Unicorn](https://www.django-unicorn.com/docs/actions/)
            - [Child components - Unicorn](https://www.django-unicorn.com/docs/child-components/)
        - `python manage.py startunicorn <myapp> <component_name>...`
        - [Components - Unicorn](https://www.django-unicorn.com/docs/components/)

- Pro
    - Data Responsive
    - Reusable
    - NO Need RESTful API Server

- Con
    - NOT Support State Management
        - No `$store`
        - No flux
        - You could just use DOM or event for external state (state of other components)
    - NOT Support Slot
        - You can work with [[django-components]] together
    - NOT Support Shadow DOM
    - NOT Support WebSockets
    - Hard to write [[JavaScript|JS]]
        - Support inline `<script>`
        - NOT Support Double-quoted JS like [[alpine.js]]
            - [[django-unicorn]] use [[Python]] component class method
    - Slow
        - Almost all AJAX depend on server side to render (html template), which are affected by network speed
        - [[alpine.js]] can use double-quoted JS

- Alternatives
    - [[alpine.js]]
