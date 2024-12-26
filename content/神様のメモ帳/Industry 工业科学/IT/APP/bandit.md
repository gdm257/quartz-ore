---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Python
github: PyCQA/bandit
files:
  - .bandit
commands:
  - bandit
---

- Configuration
    - `.bandit`
        - 支持 自动加载 `./.bandit`
    - `-c xxx.yaml`
        - 必须手动指定配置文件
    - `-c xxx.toml`
        - 必须手动指定配置文件

- Idea
    - Python 代码漏洞检测工具

- Fundamentals
    - 解析 Python 代码为 AST，进行安全分析
