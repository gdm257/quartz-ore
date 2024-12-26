---
tags:
  - flag/LANGUAGE/Python
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
  - Label/Industry-工业科学/IT/APP/Command/CLI
commands:
  - hatch
pip: hatchling
---

- Ecosystem
    - `hatch build -t app`
        - [[hatch]] 支持调用 [[PyApp]] 打包出 binary executable，但这必须使用 [[hatchling]] 作为 build-backend
