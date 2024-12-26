---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/Type
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: python/typing_extensions
pip: typing-extensions
---

- Idea
    - Enable use of new type system features on older Python versions
    - Enable experimentation with new type system PEPs before they are accepted and added to the `typing` module

- Examples
    - `typing.TypeGuard` is new in Python 3.10, but `typing_extensions` allows users on previous Python versions to use it
    - `typing.Annotated` new in 3.9

- Dependencies
    - [[Python]] 3.8+
