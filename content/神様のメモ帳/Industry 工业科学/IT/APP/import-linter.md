---
tags:
- flag/License/BSD
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Linter
github: seddonym/import-linter
pip: import-linter
---

## Brief

- References
    - [使用 import-linter 让你的 Python 项目架构更整洁 | Piglei](https://www.piglei.com/articles/use-import-linter-to-lint-proj-arch/)
    - [6 ways to improve the architecture of your Python project (using import-linter) | Piglei](https://www.piglei.com/articles/en-6-ways-to-improve-the-arch-of-you-py-project/)

- Idea
    - 扼杀复杂依赖关系、循环调用
    - 读取 `import` 语句，检查是否符合自定义规则

- Configuration
    - [[TOML]] `pyproject.toml`
    - [[INI]] `setup.cfg`
    - [[INI]] `.importlinter`

- Con
    - 不支持 src layout
        - 对于 [[pre-commit]]，目前无解，要么等 [[import-linter]] 原生支持，要么自己写个 pre-commit local repo hook
        - 对于 CLI 直接运行，可借助 [[pdm]] [[poetry]] 来支持 src layer
        - [Issue with pre-commit hooks and src structure · Issue #214 · seddonym/import-linter](https://github.com/seddonym/import-linter/issues/214)
