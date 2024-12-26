---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/ASGI/Server
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Idea
    - An ASGI Server

- Pro
    - Support WebSockets
    - Support [[HTTP]] 1.1
    - Support HTTPS
    - Support [[Windows]] if not use `uvloop`

- Con
    - NOT Support
        - Support WSGI by using `a2wsgi` convert to ASGI application
        - which is extremely slow!
    - NOT Support `Server` with `Config` object
        - Use `uvicorn.run(...)` instead of `Server(Config(...)).run()`
        - TL;DR
        - The `Server` doesn't care about the `reload` parameter
        - Create `Config` manually might make some exceptions in log
        - [hot reload doesnt work when using the Config class to initialize uvicorn server · Issue #1206 · encode/uvicorn](https://github.com/encode/uvicorn/issues/1206)

- Test
    - Support [[Django]] `asgi:application`
