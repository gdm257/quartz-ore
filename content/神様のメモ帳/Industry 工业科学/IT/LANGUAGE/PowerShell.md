---
aliases:
  - PowerShell
  - PowerShell Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
frontmatter-as-page:
  - powershell-magic-helper
---

# Brief

## Version

- Version
    - [[powershell command|Windows PowerShell]] 5.1
    - [[pwsh|PowerShell Core]] 7

- References
    - [Release history of modules and cmdlets - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/cmdlet-versions?view=powershell-7.4)
    - [PowerShell Support Lifecycle - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/install/powershell-support-lifecycle?view=powershell-7.4)
    - [PowerShell differences on non-Windows platforms - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/unix-support?view=powershell-7.4)
    - [about PowerShell Editions - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_powershell_editions?view=powershell-7.4)
    - [Differences between Windows PowerShell 5.1 and PowerShell 7.x - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

## Syntax

- Specification
    - [PowerShell Language Specification 3.0](https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-01?view=powershell-7.4)

- Keywords
    - [about Reserved Words](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_reserved_words?view=powershell-7.4)
    - [about Language Keywords](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_language_keywords?view=powershell-7.4)

- Builtins
    - `Get-Command | Group-Object -Property Source`
    - `Get-ChildItem variable`
    1. [[Microsoft.PowerShell.Management]]：包含了管理文件系统、注册表、服务等的 cmdlet。
    2. [[Microsoft.PowerShell.Utility]]：包含了一些实用的 cmdlet，例如格式转换、字符串处理等。
    3. [[Microsoft.PowerShell.Security]]：包含了管理安全相关功能的 cmdlet，如加密、数字签名等。
    4. [[Microsoft.PowerShell.Diagnostics]]：提供了一些诊断功能，如事件查看器等。
    5. [[Microsoft.PowerShell.Host]]：包含了管理 PowerShell 主机环境相关功能的 cmdlet。
    6. [[Microsoft.PowerShell.Core]]：提供了一些核心功能，如工作流、事件处理等。
    7. [[Microsoft.PowerShell.Archive]]
    8. [[Microsoft.WSMan.Management]]
    9. [[CimCmdlets]]
    10. [[ThreadJob]]
    11. [[PSDiagnostics]]

- Standard
    - [PowerShell Module Browser](https://learn.microsoft.com/en-us/powershell/module/)

- 3rd
    - [PowerShell Gallery](https://www.powershellgallery.com/)
    - [janikvonrotz/awesome-powershell](https://github.com/janikvonrotz/awesome-powershell)

## References

- Get Started
    - [PowerShell教程](https://www.yiibai.com/powershell/)
    - [PowerShell入门指南(三)·一门新的编程语言 - 知乎](https://zhuanlan.zhihu.com/p/76708298)

- Dive into
    - [About topics - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about?view=powershell-7.2)
    - [Deep dives - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/overview?view=powershell-7.4)

- Examples
    - [Windows 自动化运维的思路或者方法是什么？ - 知乎](https://www.zhihu.com/question/26130721)
    - [Sample scripts for system administration - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/samples/sample-scripts-for-administration?view=powershell-7.4)

# 结构化并发

## `&`

- Idea
    - Job

# SP

## Loop

### `foreach`

- References
    - [about Foreach](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_foreach?view=powershell-7.4)

- Alternatives
    - `foreach` is a keyword
    - [[ForEach-Object]] is a individual cmdlet instead of the alias of `foreach`

```powershell
foreach ($Computer in $ComputerName) {
    break
}
```

### `for`

```powershell
for ($i = 0; $i -lt 10; $i++) {
    continue
}
```

### `while`

```powershell
while ($date.DayOfWeek -ne 'Thursday') {
    Return $date # return 旨在退出现有作用域
}

do {
    ...
}
while ($guess -lt 10)
```

### `until`

```powershell
do {
    ...
}
until ($guess -eq 9)
```

## Branch

### `if`

```powershell
if ($A -eq 0) {
    ...
}
else if ($A -eq 1) {
    ...
}
else {
    ...
}
```

### `switch`

```powershell
switch ($A)
{
    0 {...}
    1 {...}
    default {...}
}

switch (expression)
{
    ...
}
```

### `try`

```powershell
try {
    ...
}
catch [ error01, error02 ] {
    ...
}
catch {
    ...
}
finally {
    ...
}
```

## Main

### `;`

### \` 

- \`
    - 行尾反引号
    - 相当于 [[Bash|Bash]] 的行尾反斜杠
    - 一个逻辑行分为多个物理行，增强可读性

### `#`

```powershell
# 单行注释
# 行尾注释

<# 多行注释
comment
#>

```

### `exit`

# OOP

## `class`

## `enum`

## `data`

## `.GetType()`

- Idea
    - 查看对象类型

- API
    - `[System.Reflection.TypeInfo] $typeInfo = $obj.GetType()`

## `using`

## `.`

- Idea
    - [[dot-source]]

### `$PSScriptRoot`

- Idea
    - 当前脚本所在目录

- API
    - `[System.String] $PSScript`

## `*-Module`

[Modules - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-11?view=powershell-7.3)

[关于模块 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_modules)

- Import
    - [[Import-Module]] Module
    - [[dot-source]] `.ps1`

- Module Types
    - Manifest `psd1`
        - 模块清单文件的文件扩展名是 `.PSD1`，但并非所有扩展名为 `.PSD1` 的文件都是模块清单
    - Script Module `psm1`
    - Binary Module

- Module Members
    - [[#Callable|Commands]]
    - [[#Callable|Items]]

- `$Env:PSModulePath`
    - Windows PowerShell
        - `~/Documents/WindowsPowerShell/Modules`
        - `C:/Program Files/WindowsPowerShell/Modules`
        - `C:/WINDOWS/system32/WindowsPowerShell/v1.0/Modules`
    - PowerShell Core
        - `~/Documents/PowerShell/Modules`
        - `C:/Program Files/PowerShell/Modules`
        - `<pwsh_directory>/Modules`
        - `C:/Program Files/WindowsPowerShell/Modules`
        - `C:/WINDOWS/system32/WindowsPowerShell/v1.0/Modules`
    * PowerShell 会自动递归搜索并导入 `PSModulePath` 的 Modules，免去手动 [[Import-Module]] 的麻烦
    * `PSModulePath` 相当于 [[python command|Python]] 的 `PYTHONPATH`

```powershell
Write-Output '=== Module 相关命令 ==='
Get-Command *Module* | Select-Object CommandType, Name
```


## 标识符

### 命名规笵

[函数 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/ps101/09-functions?view=powershell-7.3)

```
形如 $XXX 看上去是个环境变量，其实是个「对象」


变量 VarName
函数 Verb-Noun E.g. Get-Command
大小写不敏感 E.g. $A -eq $a


$VarName01 = 
$VarName02 = $VarName01
${VarName01} -eq $VarName02





```

### 魔法变量

[关于自动变量 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.3)

[关于环境变量 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_environment_variables)

[关于变量 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_variables?view=powershell-7.3)

```powershell
$PSVersionTable
$profile    ~/.bashrc
$null    /dev/null
Get-Help get-help | Out-Null
$Env

```


## pointer

## str

### Literal

- `*` 是字符串字面量，没有 expansion，很多 cmdlet 支持是因为内部算法对 `*` 做了处理（一般是 [[Glob]]）

```ps


```

## int
### Literal

## bool

## list

## array


## set

## dict

```ps
hashtable

```


## class

参考

[发现对象、属性和方法 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/03-discovering-objects?view=powershell-7.2)


## interface


# FP

## Callable

[在 shell 中运行命令 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/shell/running-commands?view=powershell-7.2)

[探索 PowerShell - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/discover-powershell)

[关于 Aliases - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_aliases)

[帮助系统 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/02-help-system?view=powershell-7.2)


- References
    - [Windows PowerShell 语言规范 3.0 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/lang-spec/chapter-01?view=powershell-7.2)

    - [Modules - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-11?view=powershell-7.3)

- Callable
    - Items
        1. `Alias`
        2. Object
            - `$Variable`
            - `$a.b.property`
    - Commands
        1. `Script`
            - 内置 `.ps1`
        2. `ExternalScript`
            - `PATH` 里的 `.ps1`
        3. `Function`
        4. Method
            - E.g. `$foo.bar`
        5. `Cmdlet`
        6. `Application`
            - aka Native Command 本机命令
    - Other
        1. `Configuration`
            - `Get-Command -CommandType Configuration`
            - 不懂是啥玩意
        2. `Filter`
            - `Get-Command -CommandType Filter`
            - 不懂是啥玩意
    - 复杂命令
        - `|` Pipeline
            - `>` `>>` `&>1` == `| Out-File` Redirection
        - `&` Job
        - `;`
        - `&&`
        - `$()`
        - `()`
            - 表达式化，表示返回的对象




## Alias

- Alias
    - Cmdlet
    - Function
    - Application
    - Script
    - File

- [[Get-Alias]] - Gets all the aliases in the current session.
- [[New-Alias]] - Creates a new alias.
- [[Set-Alias]] - Creates or changes an alias.
- `Remove-Alias` - Deletes an alias. (PowerShell 7+)
- `Remove-Item Alias:<name>` Deletes an alias. (Windows PowerShell)
- `Export-Alias` - Exports one or more aliases to a file.
- `Import-Alias` - Imports an alias file into PowerShell

```powershell
Write-Host "=== Alias 相关命令 ==="
Get-Command -Name *Alias*
```

## Script

## Cmdlet

- References
    - [about Aliases - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.3)
    - [Using aliases - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-aliases?view=powershell-7.4)

- Philosophy
    - PowerShell 几乎 100% 复刻了 [[Python]] 的语言哲学
        - cmdlet 只不过是创建对象的 literal
        - Cmdlet 只不过是实现了特定接口的 `class`
        - 按照这个思路，`|` `>` `<` 可以当成是操作符重载

- cmdlet 读作 command-let
- cmdlet 可理解为一个这样的 [[Python|Python]] 函数：`def Cmdlet(*Object[, params]) -> Union[Object, Tuple[Object]]: pass`
- 所有 cmdlet 都有的选项，叫作 `CommonParameters`
- Filtering Left
    - 过滤左侧
    - 根据对象的属性进行过滤，相当于 Pipeline + [[Where-Object]]
    - 完整匹配属性值 + 支持通配符 `*`
    - 大部分 cmdlets 都支持 filtering left
    - E.g. `Get-Command -Name *Alias`
- Formarting Right
    - 格式化右侧 [[Select-Object]]


[[ChatGPT]]
Cmdlet是一种特殊的类，继承自 System.Management.Automation.Cmdlet 类


## `function`

```powershell

function <Verb>-<Noun> {
    param (
        $VarName
    )
}


```

### `$Args`

- Idea
    - 命令行参数

## Pipeline

[Windows PowerShell 的二进制管道](https://geelaw.blog/entries/powershell-use-rawpipeline/)

[关于管道 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_pipelines)

- 二进制可执行文件 作为 pipeline 输入端
    - PowerShell 会智能处理字节流
    - 如果是文本流，每一行被封装为一个带有 `Length` 属性的 Object，管道接收端会得到多个 Objects
    - 如果是二进制，
- 二进制可执行文件 作为 pipeline 接收端
    - 


我看出来了，ps 的管道是假的管道。

[[Bash|Bash]] 的管道就真的只是改改 fd，直入直出 bytes

ps 的管道只是个语法糖，至于是哪个函数的语法糖我不知道，但原理跟 js 的 promise 差不多 。只不过是把洋葱调用（回调地狱）变成了链式调用，因此管道右边能用的 cmdlet 有限，必须能把管道返回的对象直接作为入参

一个单行命令实际上是一个表达式，表达式最终返回（至少）一个「对象」，我们在终端看到的输出，可理解为 pwsh 自动调用了对象的 str 魔法方法（`toString` 方法）




管道操作符 `|` 的右侧命令到底会接收到什么？「一组对象」vs「stdout & stderr」？

[[ChatGPT]]
管道前的命令的输出指的是标准输出(stdout)，也就是程序正常运行生成的输出结果，它通常是一组对象。标准错误(stderr)是另一种类型的输出，通常用来输出程序运行时发生的错误信息。

**在 PowerShell 中，管道的本质是一种对象传递机制**。当一个命令的输出被传递到管道符号 `|` 后，它会被作为一个对象传递给下一个命令。后续的命令可以对这些对象进行处理或者修改，然后再将它们传递给下一个命令，以此类推。整个过程中，管道符号 `|` 只是起到了传递对象的作用，并没有实际处理对象的能力。

因此，在管道中，输出的对象包含了命令生成的标准输出和标准错误信息。可以通过管道符号 `|` 后面的命令进一步处理这些信息。在处理对象时，可以通过 `$_.` 访问当前对象的属性，也可以使用各种方法来对对象进行修改。





## Redirection

[Windows PowerShell 的二进制管道](https://geelaw.blog/entries/powershell-use-rawpipeline/)

- `>` `n>` `*>`
- `>>` `n>>` `*>>`
- `>&1` `n>&1` `*>&1` 输出到 Success 流
- 不指定 n，默认为 1
- Redirection 本质上是 `| Out-File` 的语法糖


## Group

不确定 PowerShell 是否有命令组机制，但它确实有 `()` `$()`


## Operators

[关于比较运算符 - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_comparison_operators?view=powershell-7.3)

- `@` 解包
    - `@()` 列表字面量
    - `@{}` 字典字面量

- `$` `${}`
    - 引用变量

- `$()`
    - 表达式扩展

- `[Foo.Bar]::Abc`
    - 访问 `Foo.Bar` 类的静态成员 `Abc`
    - 之所以设计的这么丑，主要是为了和 function/cmdlet/binary 作区分

- `()`
    - Grouping operator
    - Grouping result expressions
    - [about Operators - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-7.3)

**等式**

-   `-eq`、 `-ieq`、 `-ceq` - 等于
-   `-ne`、 `-ine`、 `-cne` - 不等于
-   `-gt`、 `-igt`、 `-cgt` - 大于
-   `-ge`、 `-ige`、 `-cge` - 大于或等于
-   `-lt`、 `-ilt`、 `-clt` - 小于
-   `-le`、 `-ile`- `-cle` 小于或等于

**匹配**

-   `-like`、 `-ilike`- `-clike` 字符串匹配通配符模式
-   `-notlike`、 `-inotlike`- `-cnotlike` 字符串与通配符模式不匹配
-   `-match`、 `-imatch`- `-cmatch` 字符串匹配正则表达式模式
-   `-notmatch`、 `-inotmatch`- `-cnotmatch` 字符串与正则表达式模式不匹配

**替代功能**

-   `-replace`、 `-ireplace`、 `-creplace` - 替换与正则表达式模式匹配的字符串

**遏制**

-   `-contains`、 `-icontains`- `-ccontains` 集合包含值
-   `-notcontains`、 `-inotcontains`- `-cnotcontains` 集合不包含值
-   `-in` - 值在集合中
-   `-notin` - 值不在集合中

类型

-   `-is` - 这两个对象是同一类型
-   `-isnot` - 对象不是同一类型




[[ChatGPT]]

PowerShell 中有很多种运算符，包括算术运算符、比较运算符、逻辑运算符等等。下面是一个简要的列表：

算术运算符

| 运算符 | 描述 |
| ------ | ---- |
| +      | 加法 |
| -      | 减法 |
| *      | 乘法 |
| /      | 除法 |
| %      | 取余 |

比较运算符

| 运算符 | 描述     |
| ------ | -------- |
| -eq    | 等于     |
| -ne    | 不等于   |
| -gt    | 大于     |
| -lt    | 小于     |
| -ge    | 大于等于 |
| -le    | 小于等于 |

逻辑运算符

| 运算符 | 描述   |
| ------ | ------ |
| -and   | 逻辑与 |
| -or    | 逻辑或 |
| -not   | 逻辑非 |

还有其他运算符，如位运算符、数据类型运算符等等。在 PowerShell 中，可以使用 Get-Help cmdlet 查看运算符的详细用法和示例。例如，你可以使用以下命令获取关于 -eq 运算符的帮助信息：


```powershell
Get-Help -Name about_comparison_operators
```
