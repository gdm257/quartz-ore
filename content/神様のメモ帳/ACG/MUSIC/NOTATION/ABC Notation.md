---
tags:
  - flag/MachineLanguage/Markup
  - Label/Industry-工业科学/IT/Language
homepage: https://abcnotation.com
extensions:
  - .abc
abc-fields:
  - X:reference number
  - T:tune title
  - A:area
  - B:book
  - C:composer
  - D:discography
  - F:file url
  - G:group
  - H:history
  - I:instruction
  - L:unit note length
  - M:meter
  - m:macro
  - N:notes
  - O:origin
  - P:parts
  - Q:tempo
  - R:rhythm
  - r:remark
  - S:source
  - s:symbol line
  - U:user defined
  - V:voice
  - W:words
  - w:words
  - Z:transcription
  - K:key
---

## Syntax

- Idea
    - [[简谱]] 通过 1-7 来表示 note
    - [[ABC Notation]] 通过 a-g 来表示 note
    - [[五线谱]] 通过 几线几间 来表示 note

- Syntax
    - [abc:standard:v2.1](https://abcnotation.com/wiki/abc:standard:v2.1)
    - abc file
        - An abc file with more than one abc tune is called abc tunebook
        1. `%abc[-<version>]` (required)
            - e.g. `%abc`
            - e.g. `%abc-2.1`
            - start of abc file
        2. `file header: info fields | stylesheet directives`
            1. `...:` infomation fields (in file level)
                - `X:`
                - `T:`
                - `...:`
                - `K:`
            2. `%%` stylesheet directives (in file level)
                2. pseudo-comments
                1. other directives
                - any stylesheet directive may be written as an `I:instruction` field although this is not recommended for usages
        3. `abc tunes: List[abc tune | free text | typeset text]`
            1. abc tune
                1. tune header
                    - infomation fields in tune level
                2. tune body
                    1. **music code**
                        - the core content of markup language
                        - similar to [[HTML]] nesting tags
                        - similar to [[Markdown]] typography
                    2. inline fields
                        - infomation fields in line level
            1. free text
            2. typeset text
                - The terms "free text" and "typeset text" refer to any text not directly included within the information fields in a tune header
        4. `% comment`

### fields

- `L: unit note length`
    - `L: 1/2`
    - `L: 1/4`
    - `L: 1/8`
    - `L: 1/16`
- `K: key`
    - `K:Emin` E minor

### Music Code

- References
    - [abc:standard:v2.1 ](https://abcnotation.com/wiki/abc:standard:v2.1)
    - [ABC 记谱法 – Vinfall@Geekademy](https://blog.vinfall.com/posts/2023/09/abc-notation/)

- API
    - Note lengths
        - `<note:str>[[/]<multiplier:int>]`
            - `C4` 4 unit length
            - `C3` 3 unit length
            - `C2` 2 unit length
            - `C` 1 unit length
            - `C/` 1 unit length
            - `C/2` 0.5 unit length
            - `C/3` 1/3 unit length
            - `C/4` 0.25 unit length
            - `L: unit note length`
        - `^`
            - prefix
            - 升半音（可叠加）
        - `_`
            - prefix
            - 降半音（可叠加）
        - `'`
            - suffix
            - 升八度（可叠加）
        - `,`
            - suffix
            - 降八度（可叠加）
        - `-`
            - suffix/prefix
            - 延音线
        - `()`
            - surround
            - 连音线
        - `|`
            - independent
            - 小节线
