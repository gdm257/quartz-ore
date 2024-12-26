---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/Plugin/Django/app/views
homepage: https://django-ninja.dev
pip: django-ninja
github: vitalik/django-ninja
django-apps:
  - ninja
---

- Web
    - `http://<host>:<port>/api/docs`

- References
    - [How to to return a file object for downloads · Issue #142 · vitalik/django-ninja](https://github.com/vitalik/django-ninja/issues/142)

- API
    - `api = ninja.NinjaAPI()`
    - `@api.get()`
        - `response: Dict[int, Schema | List[Schema]]`
            - `response: Dict[int, NOT_SET | Optional[Type[Schema]]] | NOT_SET | Optional[Type[Schema]]`
            - `NOT_SET` == `{200: NOT_SET}`
            - `T` == `{200: T}`
            - `{200: FooSchema, 400: BarSchema}`
            - 只能使用 `Schema` 类，其他都不行
        - `@api.get() -> def func(request, **kwargs) -> django.http.HttpResponse | Union[ninja.Schema, dict, Mapping, List[Schema], Type[Schema], str, int, float, bool, None]`
