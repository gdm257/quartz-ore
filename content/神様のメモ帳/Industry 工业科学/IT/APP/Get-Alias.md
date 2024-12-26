---
tags:
  - Label/Industry-工业科学/IT/APP/Command/Cmdlet
  - flag/Library/APILayer/Implement__/CLI/Parser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- References
    - [使用别名 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/shell/using-aliases?view=powershell-7.3)
    - [about Aliases - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.3)

- Usage
```powershell
Write-Output '=== 获取 d 开头的别名 ==='
Get-Alias -Name d*

Write-Output '=== 获取 Get-ChildItem 的别名 ==='
Get-Alias -Definition Get-ChildItem

Write-Output '=== 获取 所有别名 ==='
Get-Alias
Get-Alias -Name *

```


- Test
    - 试了下，不行

> [!question]
> [[ChatGPT]]
> powershell 设置带参数的命令别名？

要设置带参数的命令别名，可以使用PowerShell中的“New-Alias”命令。以下是基本语法：

`New-Alias -Name <AliasName> -Value <CommandName> -ArgumentList <Arguments>`


其中：

- `<AliasName>` 是您想要为命令设置的别名的名称。
- `<CommandName>` 是您要设置别名的命令的名称，可以是带参数的，如 `"Get-ChildItem"`。
- `<Arguments>` 是您要为别名传递的任何参数，可以是单个参数或多个参数的列表，用逗号分隔。

例如，要为带参数的`Get-ChildItem`命令设置别名`ls`，可以使用以下命令：

`New-Alias -Name ls -Value Get-ChildItem -ArgumentList '-Force', '-Recurse'`


这将创建一个名为`ls`的别名，它将`Get-ChildItem`命令与`-Force`和`-Recurse`参数一起运行。 然后，您可以使用别名`ls`而不是`Get-ChildItem`来运行此命令，并自动传递任何给定的参数。
