---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackageManagement
scoop: vfox
brew: vfox
winget: version-fox.vfox
apt-sources:
  - deb [trusted=yes] https://apt.fury.io/versionfox/ /
apt: vfox
yum-sources:
  - https://yum.fury.io/versionfox/
yum: vfox
PATH:
  - $HOME/.version-fox/shims
commands:
  - vfox
hooks:
  - available.lua
  - pre_install.lua
  - post_install.lua
  - pre_use.lua
  - env_keys.lua
  - parse_legacy_file.lua
  - pre_uninstall.lua
---

- Installation
    1. `scoop install vfox` or `brew install vfox`
    2. `Invoke-Expression "$(vfox activate pwsh)"` or `echo 'eval "$(vfox activate bash)"' >> ~/.bashrc`

- Fundamentals
    - Global ENV
        - `vfox use --global <plugin>@<version>` =>
        - `$HOME/.version-fox/<plugin>/hooks/env_keys.lua`
    - Session ENV
        - `vfox use <plugin>@<version>` =>
        - `$HOME/.version-fox/<plugin>/hooks/env_keys.lua`
