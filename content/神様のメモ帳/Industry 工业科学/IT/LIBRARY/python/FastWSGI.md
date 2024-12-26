---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/WSGI/Server
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: fastwsgi
---

- Pro
    - 支持 Linux
    - 支持 [[Windows]]
    - 支持 macOS

- Con
    - MSVC required on [[Windows]], still failed to build
    - 不支持 生产环境。TODOs 还有基础未实现，commits 总数少

- Alternatives
    - [[gunicorn]]

- Configuration
    - `./gunicorn.conf.py`
