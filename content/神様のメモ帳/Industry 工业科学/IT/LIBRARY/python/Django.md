---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: django/django
pip: django
commands:
  - django-admin
django-template-tags:
  - static
  - i18n
  - l10n
  - tz
django-tags:
  - block
  - comment
  - csrf_token
  - extends
  - for
  - if
  - load
  - lorem
  - static
  - url
  - with
django-filters:
  - lower
  - pprint
  - safe
  - upper
vars:
  - "True"
  - "False"
  - None
  - csrf_token
  - debug
  - sql_queries
  - request
  - user
  - perms
  - messages
  - DEFAULT_MESSAGE_LEVELS
django-commands:
  - createsuperuser
  - changepassword
  - startapp
  - migrate
  - makemigrations
  - dbshell
  - dumpdata
  - makemessages
  - sqlmigrate
  - test
  - runserver
  - collectstatic
frontmatter-as-page:
  - django-apps
  - django-commands
  - django-filters
  - django-middlewares
  - django-tags
  - django-task-backends
  - django-template-tags
  - django-urls
---

## Brief

- References
    - [Django documentation 4.2](https://docs.djangoproject.com/en/4.2/)
    - [Django Tutorials – Real Python](https://realpython.com/tutorials/django/)

- Idea
    - Full-featured web framework

- Installation
    - `pip install django~=3.2.23`
    - `pip install django~=4.2.7`
    - [[pyinstaller]]
        1. `execute_from_command_line(["manage.py", "runserver", "--noreload"])` 避免监控文件
        2. `hiddenimports` 那些隐式导入 `INSTALLED_APPS` `MIDDLEWARE`
        3. `datas` `binaries` 打包 static/template

- Users
    - Instagram, Spotify, YouTube, Pinterest, Disqus, Dropbox

- Examples
    - `cookiecutter https://github.com/cookiecutter/cookiecutter-django`
    - [cookiecutter/cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django)
    - [HackSoftware/Django-Styleguide-Example](https://github.com/HackSoftware/Django-Styleguide-Example)
    - [model-bakers/model_bakery: Object factory for Django](https://github.com/model-bakers/model_bakery)

- Dependencies
    - [[Python]]
        - [[Python]] 3.6-3.10 for [[Django]] 3.2
        - [[Python]] 3.8-3.10 for [[Django]] 4.0
        - [[Python]] 3.8+ for [[Django]] 4.2
        - [[Python]] 3.10+ for [[Django]] 5.0
        - [FAQ: Installation](https://docs.djangoproject.com/en/dev/faq/install/#what-python-version-can-i-use-with-django)
    - ORM
        - `pip install psycopg2` for [[PostgreSQL]]
        - `pip install mysqlclient` under [[GPL]] license for [[MySQL]]
        - `pip install mssql-django` for [[SQL Server]]
    - [[django-stubs]] for [[mypy]]
    - Serve static files
        - [[whitenoise]] (recommended)
        - [[caddy]] [[Nginx]] [[apache]]
        - [Configure Caddyfile for Django static files - Caddy Community](https://caddy.community/t/configure-caddyfile-for-django-static-files/21549)
    - Serve media files
        - [[django-storages]]
        - [[caddy]]/[[Nginx]]

- Edition
    - 4.2 LTS
        - ~~太新了，实测很多库不支持~~
        - 实战个把月，主流第三方插件已全面支持 4.2
        - Support [[Python]] 3.8-3.12 (latest)
        - Dropped support for [[PostgreSQL]] 11
        - Dropped support for [[MySQL]] 5.7
        - Dropped support for MariaDB 10.3
        - Upgrade 看上去根本没什么要改，主要还是第三方库
        - 最好重新生成 `settings.py`，diff 一下
            - `STATIC_URL` from `'/static/'` to `static/`
        - [adamchainz/django-upgrade](https://github.com/adamchainz/django-upgrade)
        - [Django 4.2 release notes | Django documentation | Django](https://docs.djangoproject.com/en/4.2/releases/4.2/)
    - 3.2 LTS
        - ~~目前兼容性最好~~
        - 推荐 4.2 LTS
    - ~~2.x 早已停止维护，敢用？~~

- CLI
    - `django-admin` 必要时需要手动指定 `--settings`
    - `python manage.py <subcommand> [args]` 自带 `DJANGO_SETTINGS` 环境变量
    - Ecosystem
        - `<app>/management/commands/<subcommand>.py`
            - inherit `django.core.management.base.BaseCommand`
            - [[django-typer]]

- Ecosystem
    - [Django Developers Survey 2023 Results](https://lp.jetbrains.com/django-developer-survey-2023/)
    - [Django.WTF](https://django.wtf/)
    - [wsvincent/awesome-django](https://github.com/wsvincent/awesome-django)
    - [haiiiiiyun/awesome-django-cn](https://github.com/haiiiiiyun/awesome-django-cn)
    - [Django Packages](https://djangopackages.org/)
    - [Django Forum](https://forum.djangoproject.com/)

- Alternatives
    - [[FastAPI]]
    - [[Flask]]
        - 我更喜欢 [[Django]]，用着省心

- Philosophy
    - 约定优于配置
        - 约定 本质是硬编码（或者说是接口），反而更容易维护了
        - 约定 可被手动配置覆盖
    - [HackSoftware/Django-Styleguide: Django 编码风格指南，一线团队的多年经验总结](https://github.com/HackSoftware/Django-Styleguide)
    - [Radoslav Georgiev - Django structure for scale and longevity - YouTube](https://www.youtube.com/watch?v=yG3ZdxBb1oo)
    - [Styleguide - Django API Domains](https://phalt.github.io/django-api-domains/styleguide/)
    - [Enforcing conventions in Django projects with introspection - lukeplant.me.uk](https://lukeplant.me.uk/blog/posts/enforcing-conventions-in-django-projects-with-introspection/)

## Fundamentals

- References
    - [django 源码解析 -1 启动流程分析 - 掘金](https://juejin.cn/post/7071991548447031327)
    - [django 源码解析 - 2 http协议处理流程 - 掘金](https://juejin.cn/post/7075359746328379400)
    - [深入理解Django(一) django是如何启动的？ - 知乎](https://zhuanlan.zhihu.com/p/109213644)
    - [深入理解Django(二) 信号机制 - 知乎](https://zhuanlan.zhihu.com/p/430131881)
    - [Django 从启动到请求到响应全过程分析-入门版 - 掘金](https://juejin.cn/post/6844903768136351751)

- Fundamentals
    - [[Django]] project 本质是一个 [[WSGI]]/ASGI application

- Ojbects
    - Models
    - Fields
        - ForeignKey
            - By convention, Django appends `"_id"` to the foreign key field name. (Yes, you can override this, as well.)

- Architecture
    1. 初始化配置，包括加载配置中的 [[Django]] apps
    2. 用配置来初始化 [[WSGI]] application
    3. 用 [[WSGI]] Server 运行 WSGI application

## Architecture

- References
    - [python - 详解Django请求与响应：深入理解Web Http交互的核心机制 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000043988232)

- Objects
    - [[WSGI]] Server == [[HTTP]] Server
    - [[ASGI]] Server == [[HTTP]]/[[WebSocket]]/SSE/MQTT Server
    - Django Project == [[WSGI]]/ASGI Application
    - Django App == Python package with contractual structure
        - a set of urls, templates, static, media, models, commands, templatetags etc
    - URL == Request Entrypoint
    - **View** == Request Handler
        - the most important concept
    - Template == a text file with template language
    - Model == a table in RDBMS
    - QuerySet == middle direction between V and M
        - QuerySet is as dependency injected into View, APIView, Form, Serializer
        - QuerySet seems like proxy for models

### Project

- Idea
    - Project == settings + [[WSGI]] application
        - initialize
        - urls

- CLI
    - `django-admin startproject <project>`

- Architecure
    - `manage.py`
    - `<project>/`
        - `__init__.py`
        - `wsgi:application` `asgi:application`
            - 指定 WSGI/ASGI application
            - 指定 project settings `export DJANGO_SETTINGS_MODULE=<myproject>.settings`
        - `settings.py`
            - 指定 `urls`
            - 指定 `INSTALLED_APPS`
            - `django.conf.settings` 对象来访问 project settings
        - `urls.py`
            - `:urlpatterns`
        - `api.py`

- API
    - `django.conf.settings`
        - e.g. `apps: List[str] = settings.INSTALLED_APPS`
    - `django.apps.apps`
        - installed apps
        - 反射神器

- Configuration
    - Static
        - `STATIC_ROOT: PathLike`
            - E.g. `BASE_DIR / 'static'`
            - 静态文件目录，包含了最终部署所需的所有静态文件
        - `STATICFILES_DIRS: List[PathLike]`
            - E.g. `[BASE_DIR / 'assets']`
            - 支持与 `STATIC_ROOT` 共存
            - 但注意 `STATIC_ROOT` 不能与 `STATICFILES_DIRS` 里的值重复
            - `python mange.py collectstatic` 会将 `STATICFILES_DIRS` 的文件复制进 `STATIC_ROOT`
            - `assert STATIC_ROOT not in STATICFILES_DIRS`
        - [Effects of changing Django's SECRET\_KEY - Stack Overflow](https://stackoverflow.com/questions/15170637/effects-of-changing-djangos-secret-key)
    - Data
        - `DATABASE_ROUTERS: List[str]`
        - `DATABASES: Dict[str, dict]`
        - [Multiple databases | Documentation de Django | Django](https://docs.djangoproject.com/fr/4.2/topics/db/multi-db/)

#### urls

- References
    - [url - Django Template Tag - GeeksforGeeks](https://www.geeksforgeeks.org/url-django-template-tag/)

- Examples
    - `path('p01/', view01, name='u01')`
        - `{% url 'u01' %}` => `p01/`
    - `path('p02/<id:int>/', view02, name='u02')`
        - `{% url 'u02' page.id %}` => `p02/999/`
    - `re_path(r'^\w*/', view03, name='u03')`
        - `{% url 'u03' 'foo' %}` -> `foo`

### App

#### `app_label`

- Ecosystem
    - [[Django]] app 本质是一个 [[Python]] Module，只不过有着特定的结构
    - [DjangoTricks: How to Rename Django App Label](https://djangotricks.blogspot.com/2022/10/how-to-rename-a-django-app.html)
    - [odwyersoftware/django-rename-app](https://github.com/odwyersoftware/django-rename-app)

- Idea
    - `pkg.to.app` 的 `AppConfig.label` `urls.app_name` `namespace` 请手动设为 `pkgtoapp`

- CLI
    - `django-admin startapp <app>`

- Test
    - 不要轻易修改 `AppConfig.label`，可能导致 migrations 不兼容
    - `{% include %}` `{% extends %}` 可用 `./xxx` `../xxx` 来缓解没有 current app 的痛苦。相对路径是相对于存放该字符串的模板文件
    - 不用 `.` 开头的是命名空间路径，相对于 the template loader’s root directory i.e. `DIRS` `APP_DIRS`
    - [Built-in template tags and filters | Django documentation | Django](https://docs.djangoproject.com/en/3.2/ref/templates/builtins/#extends)

- Con
    - [[Django]] 不支持 current app
        - 你必须保证
        - 「第一方或第三方 app 的 `AppConfig.label`」不能与「第一方和第三方 apps 的 `AppConfig.label`」相同！
        - 「第一方或第三方 app 的 `urls.app_name`」不能与「第一方和第三方 apps 的 `urls.app_name`」相同！
        - 「第一方或第三方 app 的 `namespace` 参数」不能与「第一方和第三方 apps 的 `namespace` 参数」相同！
        - 将它们视作跟 `AppConfig.name` 一样必须唯一
        - 否则会可能无法读取正确的文件
        - E.g. Django app `wagtail.contrib.forms` 的 `AppConfig.label` `urls.app_name` 都为 `wagtailforms`，而非默认生成的 `forms`
        - 你看，上万 stars 的开源项目 [[wagtail]] 都这样做了
        - TL;DR
        - 为什么？
        - 因为 [[Django]] 并没有「current app」这样的概念
        - E.g. `{% extends 'app01/base.html' %}` written in `pkg01/app01/templates/app01/index.html`
        - 预期读取 `pkg01/app01/templates/app01/base.html`
        - 看上去没问题？
        - 不不不
        - 假如有一个 Django app `pkg02.app01`，同样有一个模板文件 `pkg02/app01/templates/app01/base.html`
        - 那么 `{% extends 'app01/base.html' %}` 会读取哪个包的文件？
        - 你可能会想，`{% extends 'app01/base.html' %}` 这行字符串不是写在 `pkg01/app01/templates/app01/index.html` 文件里，自然会读取 `pkg01` 的 `base.html` 文件
        - 然而 [[Django]] 里并没有 current app 这样的概念，template tag 根本无法分辨 `app01/base.html` 里 `app01` 到底是 `pkg01/app01` 还是 `pkg02/app01`
        - 事实是，最终会按照 `INSTALLED_APPS` 的顺序读取文件
        - 如果 `pkg02/app01` 在 `pkg01/app02` 之前，那么最终会读取 `pkg02` 的 `base.html`
        - 这造成了一个很恐怖的后果！
        - 完全不相干的多个第一方/第三方 Django apps，可能因为 `AppConfig.label` `urls.app_name` `namespace` 的同名而「只能从 `INSTALLED_APPS` 里最先安装的 app 里读取同名 template/url/static/media 文件」！
        - 这意味着，即便一个 Django app 通过了单元测试，没问题。但在不同项目里一旦同名便会错误读取文件。多个互不相干、作者都不同的第三方 Django apps 可能造成冲突！

#### Directory Layout

- References
    - [How I organize `staticfiles` in my Django projects | joshthomas.dev](https://joshthomas.dev/blog/2024/how-i-organize-staticfiles-in-my-django-projects/)

- Architecture
    - `<app>/`
        - `__init__.py`
        - `apps.py`
        - `admin.py`
        - `management/`
            - `__init__.py`
            - `commands/`
                - `__init__.py`
                - `<subcommand>.py`
        - `urls.py`
            - `url_patterns: list`
            - `app_name: str`
                - `app_name` 这个设计有重大缺陷，那就是不能同名！不同 Django apps 都不能同名，哪怕导入路径不同！
                - 这个设计真的头晕，第一方 app 的 label 难道可能导致同 label 名的第三方 apps 读取到错误的 URL/Template/Static/Media？
                - 我问 [[ChatGPT]] 它说会冲突
                - [Confused by Namespace vs app.name and app.label - Using Django / Getting Started - Django Forum](https://forum.djangoproject.com/t/confused-by-namespace-vs-app-name-and-app-label/8873)
        - `views.py`
        - `forms.py`
        - `signals.py`
        - `finders.py`
        - `templates/<app_label>/`
            - `xxx.html`
        - `templatetags/`
            - `__init__.py`
            - `<my_tags>.py`
        - `static/<app_label>/`
            - `css/xxx.css`
            - `js/xxx.js`
            - `images/*.*`
            - `fonts/*.*`
        - `models.py`
        - `migrations/`
        - `admin.py`
        - `locale/<language_code>/`
            - `*.po`
        - `tests/`
            - `__init__.py`
            - `test*.py`
        - `fixtures/`
            - `media/`

#### command

### Middleware

- Idea
    - Middleware is a framework of hooks into Django’s request/response processing

### Signal

- References
    - [Django Signals: How to Use Them for Better Application Development | by Saurabh Pandey | Dev Genius](https://blog.devgenius.io/django-signals-how-to-use-them-for-better-application-development-3658815e1c92)

### Background workers

- Version
    - [RealOrangeOne/django-tasks](https://github.com/RealOrangeOne/django-tasks)

- Architecture
    - Task
    - Task Backend
    - Task Runner
    - Task Result

- API
    - [deps/accepted/0014-background-workers.rst at main · django/deps](https://github.com/django/deps/blob/main/accepted/0014-background-workers.rst)

- Philosophy
    - Django App wide
    - lifecycle
        - outside the request-response cycle

## Web

### WSGI

- Examples
    - [[granian]]
        - 终于有个速度正常的了，泪目

- Con
    - NOT Support WebSockets
        - WSGI Server 都不支持 WebSockets
        - [[hypercorn]]/[[uvicorn]] 这种声称支持 WSGI 但实际上是 WSGI 中转 ASGI 的，速度感人……我怀疑是 [[Django]] ASGI 自己的问题，就是中转，要么就是底层没有 await
        - [[Django Channels]] 文档明确写了，要用 [[WebSocket]]，你必须更换部署架构
        - However, it requires switching to a new deployment architecture
        - websockets server runs outside of Django
        - 说人话就是你需要部署 2 个进程，一个用来 WSGI Based Django，一个用来 ws django，跟微服务有点像。当然你也可以一个 Python 脚本手动开两个子进程来强行部署到一个主进程
    - Extremely Slow
        - 不知为何，[[waitress]]/[[hypercorn]]/[[uvicorn]] etc 速度极慢，一个网页十几秒的那种，而自带的 `manage.py run_server` 就能秒开
        - 目前唯有 [[waitress]]/[[granian]] 能正常响应，尽管 [[waitress]] 速度极慢，但行为是正确的。[[uvicorn]]/[[hypercorn]] 都有报错

### ASGI

- Con
    - Extremely Slow
        - 起码 -1,000x
        - Django 3.2/4.2 的 ASGI 性能差到发指
        - Middleware 转 WSGI 为 ASGI 也没救
        - [[uvicorn]]/[[hypercorn]] 都试过

## Data

- template
    - TEMPLATES
    - `Storage` class
- static
    - STATIC_ROOT
    - STATICFILES_DIRS
    - STATICFILES_FINDERS
    - STATICFILES_STORAGE
    - `Storage` class
- locale
    - LOCALE_PATHS
- fixture
    - FIXTURE_DIRS

- media
    - FILE_UPLOAD_HANDLERS
    - DEFAULT_FILE_STORAGE
    - STORAGES
    - MEDIA_ROOT

- message
    - MESSAGE_STORAGE

### Model

- References
    - [Everything You Need to Know About Django Models | Dev Genius](https://blog.devgenius.io/everything-you-need-to-know-about-django-models-09ba75ff3c6d)
    - [Models | Django documentation | Django](https://docs.djangoproject.com/en/3.2/ref/models/)
    - [How to Move a Django Model to Another App – Real Python](https://realpython.com/move-django-model/)

- CLI
    - `python manage.py inspectdb [table [table ...]]`
        - 连接已有数据库，生成指定 tables 的 Models 代码

- Migration
    1. Create/Delete Models
    2. Add/Delete/Update Fields
    3. `python manage.py makemigrations`
    4. `python manage.py migrate`
    5. `python manage.py sqlmigrate` 只打印 [[SQL]] 而不执行

- `models.py`
    1. Inherit `django.db.models.Model`
    2. Django fields `django.db.models.Field`
    3. Inner `class Meta`
    4. CRUD through manager `YourModel.objects`
    5. Other methods and fields
        - `def __str__(self) -> str:`
        - `def clean(self) -> None:`
        - `def full_clean(self) -> None:`
            - validation 方法，约定俗成叫 `clean()` `full_clean()`

- `class Meta`
    - [Model Meta options | Django documentation | Django](https://docs.djangoproject.com/en/4.2/ref/models/options/)
    - *Read-only Options*
        - `label: str = f'{app_label}.{object_name}'`
        - e.g. `polls.Question`
        - `label_lower: str = label.lower()`
        - e.g. `polls.question`
    - *Available Options*
        - `abstract = False`
        - `app_label: str`
            - required if model is outside of app in `INSTALLED_APPS`
            - also use `model._meta.label` or `model._meta.label_lower`
        - `base_manager_name = 'objects'`
        - `db_table: str`
        - `db_table_comment: str`
            - new is django 4.2
        - `db_tablespace: str`
            - e.g. [[SQL Server]]'s schema
        - `default_manager_name: str`
        - `default_related_name: str = f'{model_name}_set'`
            - Relationship injection name
        - `get_latest_by: str | List[str]`
            - e.g. `['-foo', 'bar']`
        - `managed = True`
        - `order_with_respect_to: str`
            - e.g. `'field_01'`
        - `ordering: str`
            - e.g. `'-field_01'`
        - `permissions: List`
        - `default_permissions = ('add', 'change', 'delete', 'view')`
        - `proxy: bool`
        - `required_db_features: List[str]`
        - `select_on_save = False`
        - `indexes: List[models.Index]`
        - `unique_together: List[str] | List[List[str]]`
            - e.g. `["driver", "restaurant"]`
        - `index_together: List[str] | List[List[str]]`
            - e.g. `["pub_date", "deadline"]`
        - `constraints: List`
        - `verbose_name: str`
            - e.g. `my model`
        - `verbose_name_plural: str`
            - `f'{verbose_name}s'`

- `Class _meta`
    - [Model \_meta API | Django documentation | Django](https://docs.djangoproject.com/en/4.2/ref/models/meta/)
    - 反射利器
    - `.label: str`
    - `.label_lower: str`
    - `.get_fields()`

- Manager
    - `.using(db_alias)`
        - 手动选择数据库，而不是用 `DATABASE_ROUTER`

- Con
    - NOT Support multiple-column primary keys
        - please use `unique_together` in model's inner `class Meta`

- Philosophy
    - ORM
        - ORM Model == Table in any supported DB
    - [[Django]] ORM is the ORM for **RDBMS**
        - Model 是 Table，而不是 JSON
        - 关系模型中，Models 之间的「关系」的类型非常少，基本就是「一对一」「多对一」「多对多」，hooks 一般也只需要考虑 `on_delete`
        - 要想实现「图数据库」那样复杂的关系非常困难，但有足够的 hooks 也不是不可能
        - `on_delete` 可以想象成「组合 vs 聚合」+「引用计数」
        - `DO_NOTHING` 算是「聚合」
    - Primary keys (IDs) are added automatically
        - 无需手动声明 主键 字段
        - By default, Django gives each model an auto-incrementing primary key

#### Field

- Pro
    - 支持 Soft Foreign Key（数据库里不创建约束）

- Con
    - ORM 不支持 Type Annotations，魔法太多，别想了
        - [python - Type annotations for Django models - Stack Overflow](https://stackoverflow.com/questions/59031982/type-annotations-for-django-models)
    - `OneToOneField` 会在数据库创建外键约束，无法禁用

- Philosohpy
    - Enforced specification
        - `_at` suffix for `DateTimeField`
        - `_on` or `_data` suffix for `DateField`

- Fields
    - [Model field reference | Django documentation | Django](https://docs.djangoproject.com/en/3.2/ref/models/fields/)
    - Base
        - `django.db.models.Field(**options)`
    - Relationship
        - `ForeignKey(to, on_delete, **options)`
            - `to: 'self'|str|type`
            - `on_delete: models.CASCADE | models.DO_NOTHING | models.SET_NULL | models.SET_DEFAULT | models.SET() | models.PROTECT | models.RESTRICT`
            - `db_constraint: bool = False`
            - `limit_choices_to: Dict | models.Q`
            - `related_name: str`
            - `related_query_name: str`
            - `swappable: bool = True`
            - `to_field: str = None`
        - `ManyToManyField(to, **options)`
            - `related_name`
            - `related_query_name`
            - `limit_choices_to`
        - `OneToOneField(to, on_delete, parent_link=False, **options)`
            - `parent_link: bool` whether is inline to parent model
    - Literal
        - `TextField` Compatible with `str`
        - `CharField` Compatible with `str` with `max_length`
        - `IntegerField` Compatible with `int`
        - `FloatField` Compatible with `float`
        - `BooleanField` Compatible with `bool`
        - `JSONField`
    - Data
        - `BinaryField`
        - `FileField`
        - `ImageField`
    - Special
        - `DateTimeField`
            - Compatible with `datetime.datetime`
            - `django.utils.timezone.now() -> datetime.datetime`
            - `datetime.now()` without timezone info
        - `TimeField`
        - `DurationField`
        - `URLField`
        - `GenericIPAddressField`
        - `EmailField`

- General Field Options
    - `null: bool`
    - `blank: bool`
    - `choices: django.db.models.TextChoices`
    - `db_column: str`
    - `db_index: bool`
    - `db_tablespace: str`
    - `default: Any`
    - `editable: bool`
    - `error_messages: Dict`
    - `help_text: str`
    - `primary_key: bool`
    - `unique: bool`
    - `unique_for_date: str`
    - `unique_for_month: str`
    - `unique_for_year: str`
    - `verbose_name: str`
    - `validators: List`

#### i18n

- API
    - View
        - `# Translators: Description` last to `gettext()`
        - `django.utils.translation.gettext()`
        - `django.utils.translation.gettext_lazy()`
        - `django.utils.translation.gettext_noop()`
        - `django.utils.translation.ngettext()`
        - `django.utils.translation.pgettext()`
    - Template
        - `{# Translators: Description #}`
        - `{% comment %}Translators: Description{% endcomment %}` last to `{% translate %}`
        - `{% load i18n %}`
        - `{% translate 'content' %}`
        - `{% blocktranslate %}Allow to use {{ alias1 }}{% endblocktranslate %}`
        - `{% plural %}`
    - Outside views or templates
        - same as views
    - URLs
        - `path("i18n/", include("django.conf.urls.i18n"))` urlpatterns for redirection (Optional)

- Configuration
    - `settings.py`
        - `LANGUAGES`
        - `LANGUAGE_CODE`
        - `LOCALE_PATHS`
        - `MIDDLEWARES` - `django.middleware.locale.LocaleMiddleware` after `django.contrib.sessions.middleware.SessionMiddleware`, before `django.middleware.common.CommonMiddleware`

- Deps
    - GNU `gettext` command: `scoop install git` for [[scoop]]

- CLI
    - `django-admin makemessages -l zh_HAns`

- Layout
    - `<app>/`
        - `local/` (`settings.LOCALE_PATHS`)
            - `zh-HAns`
            - `zh-HAnt`
            - `en/`
            - `de/`
                - `LC_MESSAGES`
                    - `django.po`
                    - `django.mo`

- Philosophy
    - language code
        - `django.conf.global_settings.LANGUAGES`
    - internationalization
        - Usually done by developers
        - Preparing the software for localization
        - turn on by default
        - For django, it is using `gettext()` placeholder
    - localization
        - Usually done by translators
        - Writing the translations and local formats
        - For django, it is translating `.po` files

- Objects
    - translation string `gettext()`
        - They tell Django: "This text should be translated into the end user’s language, if a translation for this text is available in that language."
    - message file `.po`
        - convenient way for translators to provide the equivalent of the translation strings in the target language
        - `msgid`
        - `msgstr` translate it

### Manager

- Pro
    - 支持 自动管理 connections
        - 使用 manager 来 CRUD Model 时，Django 会自动根据 `settings` 来创建数据库连接以用于 CRUD，当然你也可以通过 `.using('db_alias')` 手选数据库

- Con
    - Manager 其实是和 Model 高度耦合的
        - 首先，Manager 是作为 Model Class 的字段而存在的
        - 其次，Manager 或许能通用于不同 Models，但 Manager 本质上就是为了更好地操作 Model 而生的
        - 与 Model 无关的事情，Manager 做不了，也不合适

### Storage

### Log

- Fundamentals
    - base on [[logging]]

- Configuration
    - `settings.py`
        - `LOGGING: dictConfig`
        - see [[logging]]

- API
    - Django's built-in [[logging]] loggers
        - `django`
        - `django.request`
        - `django.template`
        - `django.db.backends`
        - `django.security`
        - `django.server`
        - `logger = logging.getLogger('django.request')`
        - `logger.debug(msg)`

- References
    - [Logging | Django documentation | Django](https://docs.djangoproject.com/en/4.2/topics/logging/)
    - [How to configure and use logging | Django documentation | Django](https://docs.djangoproject.com/en/4.2/howto/logging/)

### Message

- References
    - [The messages framework | Django documentation | Django](https://docs.djangoproject.com/en/4.2/ref/contrib/messages/)

- Fundamentals
    - Message framework 本质是一种小型的 interactivity solution，用于弥补 SSR 的固有缺陷

- Alternatives
    - CSR e.g. [[htmx]]/[[alpine.js]]

- Con
    - A complex solution
        - 尤其是跟 AJAX 很难结合，并且 Message 与「组件化」格格不入，扩展困难
        - 我宁愿用 [[htmx]]/[[alpine.js]]/[[vue]] 手动实现，又简单又灵活

## Objects

### View

- Idea
    - A view handles given request and makes response directly

- Pro
    - A view can **directly** be used as an urlpattern in `urls.py`

- Ecosystem
    - Layout
        - `<app>/views.py`
    - inheritance hiearchy
        - `class FooMixin: pass`
        - `class BarMixin: pass`
        - `class MyBaseView(FooMixin, BarMixin, View)`
        - `class MyView(MyBaseView)`

- Objects
    - FBV
        - [Django: Class Based Views vs Function Based Views | by Sarthak Kumar | Medium](https://medium.com/@ksarthak4ever/django-class-based-views-vs-function-based-view-e74b47b2e41b)
    - CBV
        - Every request is handled by a new view instance
        - [[django-vanilla-views]]
        - `View`
            - `RedirectView`
            - `GenericView`
                - `TemplateView`
                    - `context` passed in template likes `DTO` object
                - `FormView`
            - `GenericModelView`
                - `ListView`
                - `DetailView`
                - `CreateView`
                - `UpdateView`
                - `DeleteView`

- Con
    - 不支持 交互式网页
        - 想做 AJAX，只能通过 [[JavaScript|JS]] 实现
        - 这不是 [[Django]] 或者 [[Python|Python]] 的锅，单纯是因为 浏览器 只能通过 [[JavaScript|JS]] 来修改 [[HTML]]（DOM）

#### Serializer

- Alternatives
    - recommand [[django-rest-framework]] serializers

- API
    - `django.core.serializers`

#### Form

- References
    - [Working with forms | Django documentation | Django](https://docs.djangoproject.com/en/4.2/topics/forms/)

- Directory Layout
    - `<app>/`
        - `__init__.py`
        - `forms.py`

- Architecture
    1. [[HTML]] `<form>` is mapped as a `request`
    2. `request` is mapped as a `Form`
    3. `Form` contains `Fields`
    4. `Field` is rendered by `Widget`
    5. `Form` is mapped as a `Model`

- Philosohpy
    - CRUD
        - template's `context` is for Read
        - `Form` is for Create, Update, Delete
        - Unless you’re planning to build websites and applications that do nothing but publish content, and don’t accept input from your visitors, you’re going to need to understand and use forms
    - [[HTML]] `<form>`
        - [[django-rest-framework]] `Serializer` == bridge between [[JSON]] and Django `Model`
        - Django `Form` == bridge between [[HTML]] `<form>` and Django `Model`

### Flatpages

- References
    - [The flatpages app | Django documentation | Django](https://docs.djangoproject.com/en/5.0/ref/contrib/flatpages/#module-django.contrib.flatpages)

### Syndication Feed

- Idea
    - Solution of RSS and Atom

- References
    - [The syndication feed framework | Django documentation | Django](https://docs.djangoproject.com/en/5.0/ref/contrib/syndication/#module-django.contrib.syndication)

### Site

- References
    - [Django 多站点在Django中|极客笔记](https://deepinout.com/django/django-questions/247_django_multiple_sites_in_django.html)
    - [The “sites” framework | Django documentation | Django](https://docs.djangoproject.com/en/5.0/ref/contrib/sites/#site-middleware)

- Idea
    - Single Django, Multiple Sites

- Examples
    - [[wagtail]]
        - 想要体验多站点，非常简单
        - wagtail 后台页面创建多个 Sites，每个 Site 设置不同的 Root Page

- Philosophy
    - Multiple Sites
        - 一个应用程序可以为多个不同的域名或子域名提供服务
        - 每个站点都使用一个唯一的域名或子域名标识
        - **每个站点可以有自己的模板、静态文件、数据库和URL路由**
        - [django 多站点学习 - 小周同学、 - 博客园](https://www.cnblogs.com/jz8912/articles/13734477.html)

## DSL

- References
    - [Django 模板语言 | Django 文档](https://docs.djangoproject.com/zh-hans/3.2/ref/templates/language/)

- Idea
    - Django Template Language 支持任何文本，不仅限于 [[HTML]]

- Objects
    1. `{# single line comment #}`
    2. `{{ variable }}`
    2. `{% template_tag %}`

- Fundamentals
    - DTL vs f-string
        - f-string
            - 本质都是将一个静态的「字符串」通过传入「上下文变量」的方式进行动态「格式化」
            - f-string 的手段只有一个，那就是「python 表达式」作为占位符，进行「字符串替换」
        - DTL
            1. 变量。类似于 f-string 但限制更多。
            2. 过滤器。变量不够灵活，过滤器给予变量超越 f-string 的灵活性。
            3. 模板标签。前两者顶多是格式化，不过是简单的字符串替换。模板标签则将 DTL 提升到一门语言的高度，拥有无与伦比的表达能力与灵活性。

### Template

1. `templates/<app>/<template.html>`
    - `SETTINGS:TEMPLATES`
    - [[HTML]]
        - template tags
    - [[CSS]]
        - [CSS – make it pretty · HonKit](https://tutorial.djangogirls.org/en/css/)
    - [[JavaScript|JS]]
        - [管理的 JavaScript 自定义 | Django 文档](https://docs.djangoproject.com/zh-hans/4.2/ref/contrib/admin/javascript/)

- Philosophy
    - [[Dependency Inject]]

#### Variable

- DSL
    - `{{ foo }}` `{% for i in foo %}`
        - variable name consists of `a-zA-Z0-9_`
        - variable cannot start with `_0-9`
        - variable indicates the object in context with same name
        - 不仅限于 `{{ var }}`，`{% tag %}` 中的变量也适用
    - `{{ foo.bar }}` 遇到 `.` 按顺序查找
        1. 字典索引
        2. 属性或方法
        3. 数字索引
        - 属性 不支持 `_` 开头，意味着无法调用魔法属性
        - 别加括号 `()`，Django 会自行判断是否为函数并调用
        - 没有括号，不能传参，因此必须是无参方法
        - 不存在的「变量」或「属性」将视为 `string_if_invalid` 的值，默认为 `''` 空字符串
        - 为什么不允许传参，因为 [[Django]] 认为不应该把逻辑写进 template
    - `{{ ...|foo|bar }}`
        - filter 可以是链式的，上一个 filter 的输出就是下一个 filter 的输入，其实就是 [[Bash]] 管道

#### Filters

- References
    - [内置模板标签和过滤器 | Django 文档](https://docs.djangoproject.com/zh-hans/3.2/ref/templates/builtins/)

- Idea
    - DTL 的 Variable 太弱鸡了，连 f-string 都不如，于是用于增强 Variable 的 Filters 便诞生了。不仅支持管道式（链式）调用，更重要的是 filter 支持指定参数，弥补 Variable Method 无法传参的缺点

- DSL
    - `{{ var|filter }}`
    - `{{ left_variable | filter:pos_01:pos_02:pos_03 | filter_2:pos }}`
    - `{% tag|filter %}`
        - 理解为 [[C|C]] 的 formatter，或 [[PowerShell|PowerShell]] 的 pipeline
        - 定义了大量的 functional filters。说实话这很糟糕，因为 Templates 不属于 Business Logic Layer，不应该处理业务逻辑——只需要最基础的就够了，保持贫血

- Con
    - 只支持 位置参数
    - 不支持 可选参数
    - 不支持 命名参数

- Ecosystem
    - Layout
        - `<app>/templatetags/`
            - `__init__.py`
            - `loaded_name.py`
    - Register
        - `register = django.template.Library()`
        - `@register.filter`
        - `@register.filter(name='filter_01')`
            - `name: str`
            - `is_safe: bool = False`
                - 如果要输出 [[HTML]] fragment，无脑 `is_safe=True`
                - TL;DR
                - 声明 过滤器的返回值 是否安全
                - 官方文档写的很烂
                - `True` 告诉 Django，如果一个安全字符串输入给过滤器函数，则返回值仍然是安全的；如果传入不安全字符串，Django 会在需要的时候转义
            - `needs_autoescape: bool = False`
                - 如果要输出 [[HTML]] fragment，无视这个参数就好（即默认值 `False`）
                - TL;DR
                - 文档写的极其糟糕，语焉不详
                - 过滤器返回值 是否 需要自动转义
                - `True` 过滤器函数额外接收一个名为 `autoescape` 的 keyword argument。`autoescape=True` 表示启用自动转义，反之则禁用
                - `is_safe` 与 `needs_autoescape` 不冲突
            - `expects_localtime`
        - `def filter_name(left_obj: Any[, pos_01: Any, ...][, autoescape=True]) -> Any:`
            - 如果要返回 [[HTML]] fragment，那就 `return django.utils.safestring.mark_safe(html_frag)`

- API
    - `{{ ...|safe }}`
        - 将 string 视作 [[HTML]] fragment 直接输出，不进行转义

#### Template Tags

- References
    - [内置模板标签和过滤器 | Django 文档](https://docs.djangoproject.com/zh-hans/3.2/ref/templates/builtins/)

- Ecosystem
    - Layout
        - `<app>/templatetags/`
            - `__init__.py`
            - `loaded_name.py`
    - Rigister
        - 第一种
        - `register = django.template.Library()`
        - `@register.simple_tag`
        - `def foo(a, b, c, *args, **kwargs) -> Any:`
        - `@register.simple_tag(name='foo', takes_context=True)`
        - `def foo(context, a, b, ...):`
        - 第二种
        - `@register.inclusion_tag('results.html')`
        - `def foo(a, b, c, *args, **kwargs) -> None:`
            - Render given template as template tag's output
            - Return a dict as context of given template `results.html`
        - `@register.inclusion_tag('results.html', takes_context=True)`
        - `def foo(context, a, b, c, *args, **kwargs) -> dict:`
        - 第三种
        - 高级标签（节点化），没必要用

- `{% load 'loaded_name' %}`
    - `load` == [[Python]] `import`
    - 任何模板，但凡用到非内置 tags，直接 `load`
    - TL;DR
    - base 模板使用了 `load`，子模板无需 `load`
        - 实测发现并不行，还是得手动 `load`

- `{% block %}`
    - 不支持 `include` 中创建 block
        - 我好像理解了「the top of template」，`load` 就是设计为在子模板用的，而不是 base template
    - `block.super`

- `{% extends %}`
- `{% include %}`

- `{% csrf_token %}`
    - static 无需 CSRF
    - base template 无需 CSRF
    - `<a>` 无需 CSRF
    - `<form>`（AJAX）需要 CSRF
    - [[JavaScript|JS]] request 需要 CSRF
    - Fundamentals
        - renders a hidden `<input>`
        - `<input type="hidden" name="csrfmiddlewaretoken" value="..." />`
        - 所以表单发送的请求才会带有 CSRF token
    - [Debugging CSRF Failed / 403 Forbidden errors in Django · Better Simple](https://www.better-simple.com/django/2023/11/04/debugging-csrf-error-in-production/)

## Test

- References
    - [Test-Driving HTML Templates](https://martinfowler.com/articles/tdd-html-templates.html)
    - [[Python unittest|unittest]]
    - [Testing in Django | Django documentation | Django](https://docs.djangoproject.com/en/3.2/topics/testing/)
    - [Django - 写好单元测试 - 掘金](https://juejin.cn/post/6844903955298795534)

- Ecosystem
    - [wsvincent/awesome-django](https://github.com/wsvincent/awesome-django?tab=readme-ov-file#testing)

- Philosophy
    - Unit test for HTML Template
        - Test HTML template whether is renderable
        - Test HTML structure whether is correct
        - Test HTML content by [[XPath]]/[[CSS]] selector like [[scrapy]] crawler parser
        - Test HTML behavior by browser driver such as playwright
 
- Directory Layout
    - `<app>/`
        - `tests/`
            - `__init__.py`
            - `test_foo.py`
            - `test_bar.py`
            - `test_biz.py`
            - `models.py`

- CLI
    - `python manage.py test [pkg.tests]`
        - `-p "test*.py"`
        - `--keepdb` 可以保留测试数据库，以用作下次测试。下次运行会问你是否复用
        - `--noinput` 非交互式，不使用已有的测试数据库
        - `--reverse` 反转测试用例的执行顺序。 这可以帮助确保你的测试彼此独立

- Architecture
    - `python manage.py test`
    - `settings:TEST_RUNNER = 'django.test.runner.DiscoverRunner'`
    - `test*.py`
        1. `django.test.TestCase`
        2. `django.test.*TestCase`
        3. `unittest.TestCase`

- Data
    - 如果你的测试依赖数据库连接，比如创建或查询模型，请确保继承 django.test.TestCase 实现你的测试类，而不是 unittest.TestCase
    - 测试数据库会自动创建，测后即焚，不用担心污染真实数据库
    - 运行测试时从生产数据库中查找数据？
        - 如果你的代码在编译模块时试图访问数据库，这将在测试数据库建立 _之前_ 发生
        - 生产数据可能会污染你的测试
        - 无论如何，_在代码中都包含这样的导入时数据库查询是一个坏主意_

- Objects
    - ![](https://docs.djangoproject.com/zh-hans/3.2/_images/django_unittest_classes_hierarchy.svg)
    - `django.test.TestCase` -> `unittest.TestCase`

- API
    - `django.test.Client`
        - 充当一个虚拟的 Web 浏览器
        - 用于测试 views
