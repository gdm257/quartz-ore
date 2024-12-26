---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/JSONPath
  - flag/LANGUAGE/YAML
  - flag/LANGUAGE/JSON
  - flag/LANGUAGE/TOML
  - flag/LANGUAGE/XML
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/CSV
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text/Implement__/Serialization/Hierarchical
  - flag/APP/Text/Implement__/Serialization/Relational
commands:
  - yq
scoop: yq
---

## Brief

- Alternatives
    - [[yq]] 注重查询、顺便 CRUD
    - [[xidel]]
    - [[dasel]] 简单查询、注重 CRUD

- Idea
    - 类 [[JSONPath]] 语法查询 [[YAML]] [[TOML]] [[JSON]][[XML]] [[HTML]] [[CSV]] TSV，并进行简单 CRUD，输出结果为 [[JSON]]

- CLI
    - Subcommand
        - `help`
        - `completion`
        - `shell-completion`
        - `eval [expr] [files] [flags]`
            - default command
        - `eval-all`
    - Options
        - `-h --help`
        - `--expression <string>`
        - `--from-file <file>`
        - `-p --input-format {yaml|json|xml|p}`
        - `-o --output-format {yaml|json|xml|p}`
        - `-P --prettyPrint`
        - `-I --indent 2`
        - `-i --inplace`
        - `-C --colors`
        - `-e --exit-status`
            - set exit status if there are no matches
            - or null or false is returned

- Fundamentals
    - 实用类似 [[JSONPath]] [[XPath]] 的语法来获取节点（Node）；过滤完的节点进行简单 CRUD 然后重新输出为 [[JSON]] 或其他格式
