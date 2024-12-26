---
tags:
  - flag/License/GPL
  - flag/LANGUAGE/XML
  - flag/LANGUAGE/HTML
  - flag/LANGUAGE/JSON
  - flag/LANGUAGE/XPath
  - flag/LANGUAGE/CSS
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text/Implement__/Serialization/Hierarchical
commands:
  - xidel
scoop: xidel
---

## Brief

- Idea
    - [[XPath]]/XQuery/[[CSS|CSS Selector]] for [[XML]]/[[HTML]]/[[JSON]]

- CLI
    - Usage
        - `xidel [options] [<file>|<string>|<url>]`
    - Options
        - `--data {<string>|<url>|<file>}`
            - 从哪读取，不启用(-)代表 stdin
        - `--download <file>`
            - 写入到哪，不启用(-)代表 stdout
        - `--input-format {[auto]|html|xml|xml-strict|json|json-strict}`
        - `--output-encoding {oem|utf-8|utf-16be|utf-16le|latin1|input}`
        - `--output-format {[adhoc]|xml[-wrapped]|json[-wrapped]|html|bash,cmd}`
        - `--xpath <expr>`
        - `--css <expr>`
        - `--xquery <expr>`
        - `--template-action <expr>`
        - `--xpath2 <expr>`
        - `--xpath3 <expr>`
        - `--xquery1 <expr>`
        - `--xquery3 <expr>`
        - `-e --extract <expr>`
            - 自动检测表达式是哪个 DSL
        - `--extract-file <file>`
        - `--extract-kind {auto|xpath|xpath{2|3}|css|xquery{|1|3}|template}`
