---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/Bash
---

- References
    - [GitHub - Bash-it/bash-it: A community Bash framework.](https://github.com/Bash-it/bash-it)

- Installation
    - `git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it`
    - `~/.bash_it/install.sh`

- Configuration
    - `$BASH_IT/` i.e. `~/.bash_it`
        - `aliases/custom.aliases.bash`
        - `completion/custom.completion.bash`
        - `lib/custom.bash`
        - `plugins/custom.plugins.bash`
        - `custom/themes/<custom theme name>/<custom theme name>.theme.bash`

- Data
    - 

- Usage
    - 

- Examples
    - 

- UI
    - 

- Idea
    - 用一个框架完成 `.bashrc` 的工作
        - aliases
        - completion
        - lib
        - theme
        - plugins (Prompt)
        - 相当于 [[Bash|Bash]] 的 [[starship|starship]]、[[oh-my-posh]]
        - bash-it 自带了许多脚本，我们只需启用需要的脚本即可，开箱即用

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Limitation
    - 

- Test
    - 慢的要死，哪怕是禁用了所有脚本，不懂 bash-it hook 了什么东西

- Description
    - 

## CLI

```bash
bash-it function
Usage:
    bash-it <subcommand> <component type> [specific component]

Subcommands:
    help
    profile
    enable
    disable
    reload
    restart
    show

Examples:
    bash-it show aliases
    bash-it show completions
    bash-it show plugins
    bash-it help aliases
    bash-it help completions
    bash-it help plugins


```
