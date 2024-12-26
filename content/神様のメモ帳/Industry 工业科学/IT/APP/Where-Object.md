---
aliases:
  - where
tags:
  - Label/Industry-工业科学/IT/APP/Command/Cmdlet
  - flag/Library/BusinessLogicLayer/Implement__/FP
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Idea
    - 第一种用法
        - 每次执行自定义 [[System.Management.Automation.ScriptBlock]] 返回一个布尔值，来判断是否过滤对象
    - 第二种用法
        - [[grep]] 根据每行的内容来过滤
        - [[Where-Object]] 根据每个对象的属性来过滤

- API
    - `... | Where-Object {...}`
    - `... | Where-Object -Property -NotMatch "pattern"`
