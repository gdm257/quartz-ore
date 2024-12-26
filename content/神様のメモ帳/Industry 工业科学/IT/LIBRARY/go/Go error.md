---
aliases:
- error
tags:
- flag/LANGUAGE/Go
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/BusinessLogicLayer/Implement__/Exception
---

- Fundamentals
   - `type error interface { Error() string }`

- Philosophy
    - Return error, instead of raising exception
        - 如果 `func` 100% 成功，则无需返回 [[Go error|error]]
        - 如果 `func` 但凡有一点失败的可能性，则*必须*返回 [[Go error|error]]
            - 约定俗成返回 `nil` 代表成功，非 `nil` 代表失败
            - 失败的 [[Go error|error]] *必须*要处理，即经典的 `if err != nil {...}`
            - 以上的*必须*并非语法级别，而是约定俗成的习惯
        - Exception 和 Error 本质上没区别，只不过不同语言的错误处理风格不同，因此使用不同的术语
