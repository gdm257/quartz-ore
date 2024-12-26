---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/EventLoop
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: RealOrangeOne/django-tasks
pip: django-tasks
django-apps:
  - django_tasks
  - django_tasks.backends.database
django-task-backends:
  - django_tasks.backends.dummy.DummyBackend
  - django_tasks.backends.immediate.ImmediateBackend
  - django_tasks.backends.database.DatabaseBackend
django-commands:
  - db_worker
---

- Dependencies
    - [[Django]] 4.2+

- Installation
    1. `pip install django-tasks`
    2. `settings.py:INSTALLED_APPS` - `django_tasks`
    3. `settings.py:TASKS.default.BACKEND` - `django_tasks.backends.immediate.ImmediateBackend`

- Idea
    - A reference implementation and backport of background workers and tasks in Django, as defined in DEP 0014
