---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Python
  - flag/APP/DevOps/PackageManagement
github: mitsuhiko/rye
commands:
  - rye
scoop: rye
brew: rye
---

- Installation
    - `scoop install rye` (Windows)
    - \*nix
        1. `curl -sSf https://rye-up.com/get | bash` (\*nix)
        2. `echo 'source "$HOME/.rye/env"' >> ~/.bashrc` or `export PATH="~/.rye/shims:$PATH"`
        3. `rye config --set-bool behavior.global-python=true` (Optional)
        4. `rye config --set default.toolchain=3.11` (Optional)
            - [Suggestion: Add an ability to swap \`default global\` version in the toolchain · Issue #455 · mitsuhiko/rye](https://github.com/mitsuhiko/rye/issues/455)

 - Configuration
    - \*nix
        - `$RYE_HOME`
        - `~/.rye`
    - Windows
        - `$env:RYE_HOME`
        - `$env:USERPROFILE/.rye`

- Idea
    - Python 软件安装，对标 [[pipx]]
        - `rye tools install foo` 相当于 `pipx install foo`
        - `rye install` 时 `rye tools install` 的快捷方式
    - Python 多版本管理，对标 [[pyenv]]
    - Python 项目管理，对标 [[pdm]] [[poetry]]
