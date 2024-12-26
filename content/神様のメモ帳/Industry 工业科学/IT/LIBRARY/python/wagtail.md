---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
  - flag/Library/APILayer/Implement__/Web/CMS_Framework
github: wagtail/wagtail
pip: wagtail
vars:
  - page
  - self
  - value
  - request
---

## Brief

- Installation
    - [Integrating Wagtail into a Django project — Wagtail Documentation 5.2.2 documentation](https://docs.wagtail.org/en/stable/getting_started/integrating_into_django.html)

- Dependencies
    - [[Python]] 3.8+
    - [[Django]] 3.2+
    - [Compatible Django / Python versions](https://docs.wagtail.org/en/stable/releases/upgrading.html#compatible-django-python-versions)

- Edition
    - 5.2 LTS

- Idea
    - Headless CMS

- Data
    - 只支持 [[SQLite]] [[PostgreSQL]] [[MySQL]]

- Examples
    - [wagtail/bakerydemo: Next generation Wagtail demo, born in Reykjavik](https://github.com/wagtail/bakerydemo)
        - 比官方文档管用多了

- Users
    - [NASA](https://www.nasa.gov/), [Google](https://www.google.com/), [Oxfam](https://www.oxfam.org/en), the [NHS](https://www.nhs.uk/), [Mozilla](https://www.mozilla.org/en-US/), [MIT](https://www.mit.edu/), the [Red Cross](https://www.icrc.org/en), [Salesforce](https://www.salesforce.com/), [NBC](https://www.nbc.com/), [BMW](https://www.bmw.com/en/index.html), and the US and UK governments

- Web
    - Login wagtail admin `/cms` or `/admin`（base on `urlpatterns`）
    - Create site
    - Navigate page
    - Create child page
    - Edit panels
    - Preview page
    - Publish page

- Ecosystem
    - [springload/awesome-wagtail](https://github.com/springload/awesome-wagtail)

- Philosophy
    - Always wear the right hat
        1. Content author as if [[Typecho]] user
        2. Site administrator as if [[Typecho]] admin
        3. Designer as if product manager
        4. Developer as if [[Typecho]] plugin/theme author
        - [The Zen of Wagtail — Wagtail Documentation 5.2.2 documentation](https://docs.wagtail.org/en/stable/getting_started/the_zen_of_wagtail.html)
    - Programming instead of plugins
        - It should program, instead of [[Typecho]] plugins
    - Directory Structure
        - `<app>/`
            - `wagtail_hooks.py`
            - `Page` in `models.py`
    - inner `Meta`
        - `Meta` == Configuration in class level
        - `**kwargs` == Configuration in instance level
    - Full stack CMS vs Headless CMS
        - Frontend == Head
        - Backend == Body
        - Full Stack CMS
            - 自带前台实现（前端展示）
            - [[Typecho]]
            - [[WordPress]]
            - Ghost
            - Joomla
            - Drupal
            - Joomla
            - TYPO3
            - 传统 CMS Framework 相较于 Blog CMS 扩展性更强，更加编程友好，自带前台实现（前端展示）
        - Headless CMS Framework
            - [[wagtail]]
            - [[django-cms]]
            - Strapi
            - Headless CMS，自带后台，用于管理内容（数据源），但前台网页的展示得自己写。我管这叫 CMS Framework

- Objects
    - Template
        - 如何与 [[HTML]] + [[Tailwind CSS]] + [[alpine.js]] + [[htmx]] 技术栈结合？
        - 当普通的 [[Django]] template 用就行，Page/Field/Block 只不过会注入不同的上下文而已
    - Page Model
        - 用来创建给 Template 用的 DTO（context）

- Con
    - 官方文档示例太少，而且难懂

- Test
    - 优雅至极的「可编程 CMS」
    - 真的能无缝集成已有 [[Django]] 项目，100% 的兼容性！而且更强大

- Alternatives
    - [[django-cms]]

## Configuration

- References
    - [Settings — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/reference/settings.html)

- Configuration
    - `django.conf.settings`
        - [[wagtail]] 作为 [[Django]] apps，自然用的是 [[Django]] settings

## Fundamentals

- Fundamentals
    - 从 [[Django]] 收到请求到返回响应的全过程
        - [Theory — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/reference/pages/theory.html#anatomy-of-a-wagtail-request)

```python
def wagtail_view(request, *args, **kwargs) -> HttpResponse:
    """Wagtail view 伪代码."""
    host: str = get_host(request)
    site: Site = get_site(host)
    for page in site.page_tree():
        try:
            routeResult: RouteResult = page.route(request)
            break
        except:
            pass
    return page.serve(
        request,
        get_template(routeResult),
        get_context(routeResult),
    )
```

## Web

## API

- Idea
    - Expose pages etc as REST API

- Installation
    - [Wagtail API v2 Configuration Guide — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/v5.2.3/advanced_topics/api/v2/configuration.html)

- Ecosystem
    - [Wagtail serializers for streamfield - example of customizing per-block](https://gist.github.com/thclark/100d6aa6d0995984589b983f896002d4)

- Web
    - [Wagtail API v2 Schema](https://docs.wagtail.org/en/v5.2.3/advanced_topics/api/v2/usage.html)

## Admin

- Ecosystem
    - [Generic views — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/v5.2.3/extending/generic_views.html)
    - [Viewsets — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/v5.2.3/reference/viewsets.html)

## Achitecture

### Pages

- Idea
    - Wagtail Page 作用上等价于 [[Django]] ModelView
    - page 会被自动注册进 wagtail 的 urlpatterns

- Configuration
    - subclass `wagtail.Page`
        - `class Meta`
            - `template`
            - `verbose_name: str`
        - template
            - `template`
            - `ajax_template`
            - `serve()`
            - `get_context(self, request) -> Dict[str, Any]`
                - `page` page instance
                - `self` page instance
                - `request`
            - `get_template()`
        - page tree
            - `subpage_types`
            - `parent_page_type`
            - `get_url_parts()`
        - fields
            - wagtail fields
            - [[Django]] fields
            - nesting wagtail orderable models
            - `search_fields`
        - panel
            - `settings_panels: List`
            - `promote_panels`
            - `content_panels`

- `Page` API
    - Fields
    - `.title`
    - `.specific`
    - `.specific.<filed_name>`
    - Meta
    - `.slug`
    - `.get_url()`
    - `.get_url_parts()`
    - `.get_full_url()`
    - `.aliases`
    - breadcrumbs navigation
    - `.get_children()`
    - `.get_children_count()`
    - `.get_first_child()`
    - `.get_last_child()`
    - `.get_ancestors()`
    - `.get_descendants()`
    - `.get_root_nodes()`
    - `.get_first_root_node()`
    - `.get_last_root_node()`
    - `.get_siblings()`
    - `.get_next_siblings()`
    - `.get_next_sibling()`
    - `.get_first_sibling()`
    - `.get_last_sibling()`
    - `self.get_ancestors().type(EventIndexPage).last()`
    - `{% for post in page.get_children %}`
        - `{% with post=post.specific %}`

- Template Tags
    - `{% load wagtailcore_tags %}`
        - `{% pageurl page %}`

### Fields

- Idea
    - Similar to [[Django]] fields, [[wagtail|Wagtail]] Fileds provide dynamic data to Page's template
    - TL;DR
        - Fields are defined in a `Page` class which is similar to [[Django]] view
        - So Fields will be parts of context passed into page's template
        - Which means fields also can be seem as [[Django]] fields, which are to provide dynamic data to page's template

### Form Builder

- Idea
    - Let wagtail page contains a `<form>` to allow viewer to interact with page, and server will process form request and response a new page by definition on `Page` model

- Con
    - wagtail form builder 只适用于 page 只有一个 `<form>` 的情况，例如登录页面
    - 没有实现 AJAX 局部更新 DOM
        - 目测就是 `<form>` 原生行为，submit 获取的 response 会导致刷新整个页面

- Alternatives
    - [[Django]] `Form` with `FormView`
    - [[django-crispy-forms]]
    - [[SurveyJS]]

- Objects
    - `templates/app_label/my_page.html` used for unbinded page
    - `templates/app_label/my_landing_page.html` used for 

- Fundamentals
    - Page model injects `form` variable into `context` for page template

### Blocks

- Idea
    - Blocks are only valid within a `StreamField` - using them in place of a model field will not work

- References
    - [blocks reference — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/reference/streamfield/blocks.html)
    - [Subclassing `StructBlock` --- How to use StreamField for mixed content — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/topics/streamfield.html#subclassing-structblock)
    - [wagtail - Custom representation of Streamfield in rest API - Stack Overflow](https://stackoverflow.com/questions/41956709/custom-representation-of-streamfield-in-rest-api)

- Fundamentals
    - Context
        - 传入 `template` 的 `{{ self }}` 并不是 Block 实例，而是 `Value` 实例
        - `Value` 的类型由 Block 的实现决定，允许自定义，详见 Block 的 `**kwargs`
        - 这意味着官方不鼓励将逻辑写入 Block 类，逻辑入口应在是 Value 类，我们获取真正的值也是从 `value` 获取的

- API
    - `wagtail.blocks.XxxBlock` alias for `wagtail.blocks.XxxBlock`
    - Method
        - `.get_context(self, value, parent_context=None) -> dict:`
            - `value` 根据 Block 的不同，类型也不同
            - `StructBlock` value
                - `wagtail.blocks.struct_block.StructValue` `collections.OrderedDict`
                - `value.get('field_name')` `value['field_name']` 获取 Block 的真实字段值
    - Template
        - `{{ self }}` is `{{ value }}`
            - 二者是同一对象，至于类型
            - `wagtail.blocks.ListValue` for `ListBlock`
            - `wagtail.blocks.StructValue` for `StructBlock`
            - `wagtail.blocks.StreamValue` for `StreamBlock`
            - 属性
            - `value.<child_name>` for `StructValue`
                - 子block
        - `StreamBlock`
            - `{% for block in self %}`
                - `block.block_type`
        - [How to build custom StreamField blocks — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/advanced_topics/customisation/streamfield_blocks.html#additional-methods-and-properties-on-structblock-values)
        - [About StreamField BoundBlocks and values — Wagtail Documentation 6.0a0 documentation](https://docs.wagtail.org/en/latest/advanced_topics/boundblocks_and_values.html)
        - [How to use StreamField for mixed content — Wagtail Documentation 5.2.3 documentation](https://docs.wagtail.org/en/stable/topics/streamfield.html#streamfield-template-rendering)

- Objects
    - Structural block types
        - `StreamBlock` as if `List[AnyBlock]`
        - `StructBlock` as if `Dict[str, AnyBlock]`
        - `ListBlock` as if `List[SpecificBlock]`
        - `StaticBlock` just fixed without field or editable content
    - Field block types
        - `FieldBlock`
            - A block that wraps a Django form field
        - `ChoiceBlock`
            - Con
                - ONLY Support `str` value (if not, implicit type conversion)

- Configuration
    - `Meta` for class / `**kwargs` for constructor
        - `template: str`
        - `default`
        - `label`
            - display name
        - `icon`
        - `group`
            - categorise this block
    - `StreamBlock` additional
        - `required: bool = True`
        - `min_num: int`
        - `max_num: int`
        - `block_counts: (min_num, max_num)`
        - `collapsed: bool`
        - `form_classname`
            - An [[HTML]] `class` attribute to set on root element of this blocks displayed in theediting interface

### Panels

- Idea
    - [[Django]] admin 提供了用于修改 Models 的 Web UI
    - Panel 提供了用于修改 Fields within Page 的 Web UI

- API
    - `wagtail.admin.panels.Panel`
        - 所有 Panel 必须派生于此
    - `Page.content_panels: List[Panel]`
        - Panel 的注册方式

### Snippets

- Idea
    - Reuse for differnt pages

- Examples
    - article license footer

- Alternatives
    - [[Django|DTL]] `include` is static
    - Snippet is content driven

- Configuration
    - `@wagtail.contrib.settings.models.register_snippet`
    - subclass `django.db.models.Model`
    - other parts are same with `Page` class

- Philosophy
    - Content driven
        - similar to page
        - edit fields in wagtail admin and save into db
        - render fields from db in template
    - Reusable
        - Page/Field/Block 只在当前 page 实例可用，无法跨 pages
        - Snippet 相当于全局可用的 Content Driven Block/Field，可以在不同 Page 类型、不同 page 实例中使用
        - 简单的说，Snippet 适合作为不同 Page 类型的相同部分，并且 Content Driven（淘汰 `{% include %}`）

- Web
    - [wagtail - Custom representation of Streamfield in rest API - Stack Overflow](https://stackoverflow.com/questions/41956709/custom-representation-of-streamfield-in-rest-api)

### Images

- Web
    - [wagtail - Custom representation of Streamfield in rest API - Stack Overflow](https://stackoverflow.com/questions/41956709/custom-representation-of-streamfield-in-rest-api)
