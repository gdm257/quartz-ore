---
tags:
  - flag/MachineLanguage/ExchangeFormat/Hierarchical
  - Label/Industry-工业科学/IT/Language
---

## INI

[INI file - Wikipedia](https://en.wikipedia.org/wiki/INI_file)


```ini
; comment
; key 不能有「=」「;」
; value 可以包含任意字符
; 大小写敏感
; 高级功能(parser 可能不支持)
; 1. global properties
; 2. 嵌套 section.like.json.or.yaml
; 3. 嵌套相关路径 .subsection
; 4. # comment
; 5. 使用双引号包裹字符串
; 6. 反斜杠转义序列


global-key01 = value
global-key02=value

[section01]
key = value

[section02]


```