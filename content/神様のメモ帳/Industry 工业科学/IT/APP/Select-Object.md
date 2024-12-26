---
aliases:
  - select
tags:
  - Label/Industry-工业科学/IT/APP/Command/Cmdlet
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
  - flag/Library/BusinessLogicLayer/Implement__/FP
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Idea
    1. Formatting Right
        - Access last pipeline output objects' attributes
        - Output these attributes for next pipeline
    2. Filtering Objects
        - `-First 10` simillar to "[[head]] -n 10"

- Philosophy
    - Formatting Right
        - 相当于 [[SQL]] 的 `SELECT`（列选择）
        - 相当于 [[cut]]
        - Access last pipeline's output objects attributes, and output these attributes for next pipeline
        - Keep one-line style
        - 一般通过 `obj.attr` 的方式来访问对象的属性
        - `obj` 对象初始化、`obj.attr` 访问属性，一般写在 2 个不同的语句（statements）中
        - 而 Pipelines 是单个语句，Pipeline 输出的匿名对象的作用域仅限于管道内部，也就是说，下一个语句无法访问这些对象
        - 为了在 Pipeline 中访问上一个 Pipeline 输出的对象的属性，[[PowerShell]] 提供了 [[Select-Object]]
    - Filtering Objects
        - `-First`
        - `-Last`
        - `-Skip`
        - `-SkipIndex`
        - `-Unique`
        - `-Index`
        - E.g. `Select-Object -First 10` 类似 `head -n 10`
        - E.g. `Select-Object -Last 10` 类似 `tail -n 10`
        - 第二种语义非常多余
            - `-First` `-Last` etc 本应交给 [[Where-Object]] 来做的，或者做成单独的 Cmdlet，就像 [[Sort-Object]] [[Tee-Object]] 那样
            - 两种截然不同的语义混合在一起，徒增理解与记忆负担。简直就是重蹈 [[SQL]] select 的覆辙

- Examples
    - `$PROFILE | select *`
