---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Go
- flag/APP/DevOps/Linter
scoop: golangci-lint
---

- Idea
    - 像 [[pre-commit]] 那样作为 linter 的入口，调用各种 linters
    - golangci-lint 本身并不是 linter，但可以调用其他 linters

- Configuration
    - `.golangci.yml`
    - `.golangci.yaml`
    - `.golangci.toml`
    - `.golangci.json`
    - [Configuration | golangci-lint](https://golangci-lint.run/usage/configuration/)

- Pro
    - 支持 调用数十种 linters，数量管够，开箱即用
