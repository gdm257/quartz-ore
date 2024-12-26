---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/templates
github: forgepackages/forge-htmx
pip: forge-htmx
---

## Brief

- References

- Installation
    1. `pip install forge-htmx`
    2. `settings:INSTALLED_APPS` - `'forgehtmx'`

- Dependencies

- Edition

- Idea
    - Provide DTL template tags
        - introduce [[JavaScript|JS]] script
        - easy way to write [[htmx]] fragment
    - Provide [[Django]] View Mixin
        - Mixin handles request from [[forge-htmx]] fragment
        - Mixin inject existing [[Django]] view of page, instead of extra view and url
        - Mixin only affects response while request is issued by [[htmx]] and [[forge-htmx]], so origin view works as normal as origin for normal request
            - Which means that the same url actions different results.
            - directly url request actions defined by origin view;
            - [[forge-htmx]] request actions by Minxin methods.

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API
    - Introduce [[htmx]] and [[forge-htmx]] script
        - `{% load htmx %}`
        - `{% htmx_js %}` in [[HTML]] `<head>`

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con
    - 不支持 [[htmx]] 所有的使用方法，只在部分情况能用/好用

- Test

- Alternatives

- Description
