---
aliases:
  - C#
  - c-sharp
  - CSharp
  - CSharp Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
  - flag/LanguageFeature/if-elif-if
  - flag/LanguageFeature/switch-default
  - flag/LanguageFeature/for-each
  - flag/LanguageFeature/for-loop
  - flag/LanguageFeature/while-loop
  - flag/LanguageFeature/do-while
  - flag/LanguageFeature/try-catch-finally
  - flag/LanguageFeature/pass-by-value
  - flag/LanguageFeature/pass-by-refference
  - flag/LanguageFeature/function
  - flag/LanguageFeature/class
  - flag/LanguageFeature/struct
---

# Brief

## Edition

- References
    - [C# – 2023 开发者生态系统现状信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2023/csharp/)

## References

- Ecosystem
    - [MoienTajik/AspNetCore-Developer-Roadmap](https://github.com/MoienTajik/AspNetCore-Developer-Roadmap?tab=readme-ov-file)
    - [Awesome Rank for thangchung/awesome-dotnet-core](https://awesomerank.github.io/lists/thangchung/awesome-dotnet-core.html)
    - [quozd/awesome-dotnet](https://github.com/quozd/awesome-dotnet)
    - [bianchenglequ/NetCodeTop](https://github.com/bianchenglequ/netcodetop)
    - [NuGet Trends](https://nugettrends.com/)

- Philosohpy
    - [.NET documentation C# Coding Conventions - C# | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
    - [AspNetCoreDiagnosticScenarios/AsyncGuidance.md at master · davidfowl/AspNetCoreDiagnosticScenarios](https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md)
    - [Style guide for c#? - Stack Overflow](https://stackoverflow.com/questions/4678178/style-guide-for-c)

[.NET API | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/api/?view=net-6.0)

[搜索 | Microsoft Docs](https://docs.microsoft.com/zh-cn/search/?scope=.NET&terms=c%23&products=%2Fdevrel%2F7696cda6-0510-47f6-8302-71bb5d2e28cf)

[C# 文档 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/)

[.NET 文档 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/fundamentals/)

[NuGet Gallery | Packages](https://www.nuget.org/packages?page=2&sortBy=relevance)

[技术文档 | Microsoft Learn](https://learn.microsoft.com/zh-cn/docs/)

[.NET 术语表 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/standard/glossary)

[core/core-repos.md at main · dotnet/core](https://github.com/dotnet/core/blob/main/Documentation/core-repos.md)

[林德熙](https://blog.lindexi.com/)

[dotNET China: 让 .NET 开发更简单，更通用，更流行。](https://gitee.com/dotnetchina)


    C# 灵活、够用，说实话我挺喜欢的，但不够简单，我玩不明白。


## Toolchain

[C# 编程 - 2021 开发人员生态系统信息图 | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/csharp/)

[.NET Downloads (Linux, macOS, and Windows)](https://dotnet.microsoft.com/en-us/download/dotnet)

[C#10 完整特性介绍](https://mp.weixin.qq.com/s/jEFUs7kokMpm0aMfXh69-A)

[从未来看 C# - hez2010 - 博客园](https://www.cnblogs.com/hez2010/p/12385967.html)

[.NET 5 的新变化 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/whats-new/dotnet-5)

[选择要使用哪个 .NET 版本 - .NET | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/versions/selection)

[.NET 的未来：.NET 5 - hez2010 - 博客园](https://www.cnblogs.com/hez2010/p/10825492.html)

[.NET 项目 SDK 概述 - MSBuild | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/project-sdk/overview)

[安装 NuGet 客户端工具 | Microsoft Learn](https://learn.microsoft.com/zh-cn/nuget/install-nuget-client-tools)

[包创作最佳做法 | Microsoft Learn](https://learn.microsoft.com/zh-cn/nuget/create-packages/package-authoring-best-practices)

[重新认识 MSBuild - 1 - hez2010 - 博客园](https://www.cnblogs.com/hez2010/p/a-brand-new-look-at-msbuild-1.html)

[在 .NET 中测试 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/testing/#ide)

[使用 C# 写脚本的优势和方法](https://blog.lindexi.com/post/%E4%BD%BF%E7%94%A8-C-%E5%86%99%E8%84%9A%E6%9C%AC%E7%9A%84%E4%BC%98%E5%8A%BF%E5%92%8C%E6%96%B9%E6%B3%95.html)

[使用 Visual Studio 调试 .NET 控制台应用程序 - .NET | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/debugging-with-visual-studio?pivots=dotnet-6-0)

[.NET SDK 和 .NET CLI 遥测 - .NET CLI | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/tools/telemetry)


C#

- Info:
    * Specification: C# 6 27%， C# 7 39%, C# 8 50%, C# 9 30%
    * Runtime: .NET Framework 62%, .NET Core 66%, .NET 5 33%
    * Run: src -(.NET)-> Machine Code
    * REPL: csi / VS->View->Other Windows->C# Interactive
    * Dependency Manager:
        - `dotnet.exe`
            - `.NET Core` library
            - `.NET Standard` library
            - non-SDK-style project
        - `nuget.exe`
            - `.NET Framework` library
            - non-SDK-style project
        - Visual Studio - NuGet Package Manager Console/UI
        - 非常复杂，我也搞不懂
    * Repository: NuGet
    * IDE: VS
    * Formatter: VS
    * Linter: VS
    * Docs: 
    * Unit Testing: 
    * Packing: `dotnet pack` or MSBuild
    * Publish: `dotnet nuget push` or `nuget push`
    * Builder: MSBuild
    * CI/CD: 
    * Tag: OOP, 强类型, GC, Runtime
    * Windows Environment: 官网下载 .NET 安装包
    * Linux Environment: 

- Main:
    * The class containing Main() method

- .NET 版本演进:
    - .NET Standard
    - .NET Framework 1.x
    - .NET Framework 2.x
    - .NET Framework 3.x
    - .NET Framework 4.x
    - .NET Core 1.x
    - .NET Core 2.x
    - .NET Core 3.x
    - .NET 5
    - .NET 6
    - .NET 7
    - `.NET 5` 是继 `.NET Core 3.1` 的下一个主要版本
        - 我们跳过了版本编号 4.x，以避免与 .NET Framework 4.x 混淆。
        - ~~避了个寂寞~~
        - 我们从名称中删除了“Core”，是为了强调这是 .NET 未来的主要实现。
        - ~~更乱了~~
        - 还有更乱的
        - ASP.NET Core 5.0 虽以 .NET 5 为基础，
          但保留了名称“Core”以避免与 ASP.NET MVC 5 混淆
        - 同理，Entity Framework Core 5.0 保留了名称“Core”，
          以避免与 Entity Framework 5 和 Entity Framework 6 混淆


C# & .NET？
C# 简单说就是语法规范，类似 ECMAScript。例如 nameof 运算符在 C# 6 才引入。
.NET 可看作 JDK，包含着运行时（JVM）、标准库。
安装的 .NET Core/5/6/7 会内置较新版本的 C# 编译器（支持较新 C# 语法），所以可以通过 dotnet 命令来编译执行代码，而无需直接使用 csi.exe csc.exe。
`using System;` // 关键字 `using` 是 C# 语法；`System` 是 .NET 提供的库，即标准库。这也说明了为什么我们一定要安装 .NET，因为写代码总不能不用 `System` 库吧。
将标准库（.NET）与编译器分开，是为了支持多语言，实际上 .NET 不仅是 C# 的标准库，还是 F# VB etc 语言的标准库，这样一套标准库供多种语言使用，故称 .NET 平台。
这点与 java python go 不同，go 的标准库与编译器是混合在一起的，go 语言的标准库无法供其他语言使用，java python 同理。
对用户来说，安装 .NET Framework、.NET Core、.NET 5、.NET 6 实际是安装动态链接库。
对开发者来说，SDK 不单单是动态链接库，还多出了写代码用的标准库。
.net Framework 从2.0 至3.5 是向下兼容的，安装3.5 就具有2.0 至3.5 的全部功能。1.0、1.1 与2.0 及后续版本都是独立的，不能被取代。



.csproj、.fsproj 或 .vbproj 指定目标和负责编译、打包和发布代码的关联任务。
msbuild 负责编译？
nuget 负责打包、发布、包管理。
nuget 对标 pip。
要想 `using`，就得先使用 nuget 安装第三方包。
安装 MSBuild 最简单的方法就是安装一个 .NET SDK
可以通过运行 dotnet msbuild 调用 MSBuild
NuGet 对标 pip npm。它就是一个包（package）管理平台，提供了一系列客户端用于生成，上传和使用包（package）

C# 成品：
    1. 库：
        - `dotnet pack` 创建 NuGet 包，然后使用 `nuget` 管理包、发布包到 NuGet 平台，对标 setup.py + pip。
    2. 独立应用
        - `dotnet` 生成能直接运行的二进制文件，对标 pyinstaller。
        - `dotnet publish` 生成依赖框架的二进制文件，对标 jar。


## Namespace

```c#
/*
C# 的 包管理跟 python 差不多。
dotnet 命令从 nuget 安装指定的包；（pip install）
代码中 using 使用命名空间；（from namespace import *）


C# 的 namespace 就是 golang 的 package。
namespace 里包含了一系列的 class struct etc。
namespace 不仅可以写在不同文件，甚至可以写在不同层级文件夹的文件。
namespace 意义在于定义了其中的 class struct etc 的作用域；
一个 namespace 必须 using 才能在另一个 namespace 使用；


C# 的作用域十分严格，
除了显式的命名空间 namespace，
其实还有各种隐式命名空间 class struct enum for if 花括号对 etc，
命名空间外部无法使用命名空间内部的标识符（除非使用了 using 且 public）
*/


// using 指令
// 本质是 import 命名空间为别名,
// 但如果各个命名空间声明的成员没有重名,
// 就可以无需 namespace 前缀而直接使用,
// `System.Console.WriteLine` 可简写为 `Console.WriteLine`
// 效果同 from namespace import *; import namespace
using System; // 必须完全匹配。只能使用 System 的成员，不能使用 System.IO 的
using System.Text;
using <Namespace>;
using Project = PC.MyCompany.Project;
using <Alias> = <Namespace>; // 别名


// using 语句
// 有点类似 with 上下文
// 变量只在代码块中使用
// 此范围的末尾将释放对象
string manyLines = @"This is line one
This is line two
Here is line three
The penultimate line is line four
This is the final, fifth line.";
using (var reader = new StringReader(manyLines))
{
    string? item;
    do
    {
        item = reader.ReadLine();
        Console.WriteLine(item);
    } while (item != null);
}
// 可以无需括号
using var reader = new StringReader(manyLines);
string? item;
do
{
    item = reader.ReadLine();
    Console.WriteLine(item);
} while (item != null);

```

# SC

# SP

# OOP

## `namespace`

- Objects
    - Namespace == [[Go]] package == `using` target
    - Module == [[Go]] `go.mod` == namespaces
    - Assembly == `.csproj` == NuGet package == modules
    - Solution == C#/VB/Python/...'s Projects
        - Solution 并非 C# 的概念，而是 [[Visual Studio]] 专有的概念
        - Solution 是语言无关的

# FP

## // 注释

[Recommended XML documentation tags for a class and its members | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags)


```c#
// 单行注释

/* 多行
注释 */


```



## 变量

### 命名规笵

[C# 编码约定 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/fundamentals/coding-style/coding-conventions)

[全面的C#编码规范整理](https://masuit.com/1755)


```c#
class{} 大驼峰
record 大驼峰
struct 大驼峰
interface 大驼峰 + 大写I前缀 E.g. IWorkerQueue
{}
private 或 internal 字段 小驼峰 + _ 前缀
使用为 private 或 internal 的static 字段时 请使用 s_ 前缀，对于线程静态，请使用 t_。
class{} 中的 public 成员（例如字段、属性、事件、方法和本地函数）大驼峰
函数入参 小驼峰
命名空间 . 分隔 E.g. System.Text

约定俗成：

async 名称以 Async 结尾；
interface 名称以大写 I 开头；
私有成员以小写 m 开头；


```

### 赋值

[可为空引用类型 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/nullable-references)


```c#

// 默认值
<数据类型>    <默认值>
数值型    0
Bool    false
引用型    null

C# 有两种类型：值类型和引用类型
值类型的变量直接包含它们的数据。
引用类型的变量存储对数据（称为“对象”）的引用。
对于引用类型，两个变量可以引用同一个对象；对一个变量执行的运算可能会影响另一个变量引用的对象。
对于值类型，每个变量都有自己的数据副本；因此，对一个变量执行的运算不会影响另一个变量（ref 和 out 参数变量除外）

值类型：数字、bool、struct、enum
引用类型：class、record、委托、interface、数组


string    python str
string?    python Optional[str]    nulltable，由雅解决引用类型必须初始化


// ref 指针



// 变量
int a = 0;
string a02 = "xyz";
foreach (int i in numbers) {}
foreach (JsonNode? i in nodes) {}



// 显式类型转换
Covert.To // 方法 1
Covert.ToInt32(x);

Int.Parse(numString); // 方法 3

NewType a = (<NewType>)<expression>; // 方法 2（不推荐，容易溢出）
double x = 3.14d;
int x02 = (int)x;






```




## pointer

[C#中的值传递与引用传递（in、out、ref） - 没有星星的夏季 - 博客园](https://www.cnblogs.com/shanfeng1000/p/15043795.html)



## string

```c#
string a = 'xyz';
string a02 = $"变量 a02: {a}"; // python 的 f'xxx'
string a03 = @"The path is C:\Users\Public"; // python 的 r'xxx'
string a04 = "The path is C:\\Users\\Public"; // 「\」转义成「\\」
string a05 = a + a02 + a03 + "..." + a04;
string jsonString = // python 的 '''str'''
@"{
  ""Date"": ""2019-08-01T00:00:00"",
  ""Temperature"": 25,
  ""Summary"": ""Hot"",
  ""DatesAvailable"": [
    ""2019-08-01T00:00:00"",
    ""2019-08-02T00:00:00""
  ],
  ""TemperatureRanges"": {
      ""Cold"": {
          ""High"": 20,
          ""Low"": -10
      },
      ""Hot"": {
          ""High"": 60,
          ""Low"": 20
      }
  }
}
";



// 类型转换
int b01 = int.Parse(a);
long b02 = long.Parse(a);


```




## int

```c#
// 类型转换
var a = 1;
var b = a.ToString();

double 能隐式类型转换为 int。


```

## double

```c#
var x = 3.14 // double
var y = 3.14d // double
var z = 3.14f // float
var n01 = 3.14m // decimal


```


## bool

```c#
bool n = true;
bool p = false;

```

### void

```c#

- void 用 Python 的话来说就是「函数返回值为 None」.


```


## Array[]

参考

[索引器 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/indexers)

```c#
// 初始化
int[] a = new int[2];
a[0] = 0;
a[1] = 1;
int[] a = new int[] {0, 1}; // 语法糖
int[] a = {0, 1}; // 语法糖



```


## List<>


## Dictionary<,>


## Set



## 运算符

```c#


`?` 或 `!` 可以用来解决警告引用类型变量 null 的问题。


++
--
+=
-=
<
<=
>
>=
==
!=
&&    与
||    或
!    非
typeof()

```




## for

参考

[迭代器 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/iterators)

```c#
foreach (int i in numbers) {} // python - for i in numbers:
需要对象需要定义 IEnumerable<T> 和 IEnumerator<T>。相当于 Python 魔法方法



for (int i = 0; i < 10; i++)
{
    ...
}


while()
{
    ...
    continue;
    break;
}




```




## if

```c#
if(...)
{
    ...
}
else if()
{
    ...
}
else
{
    ...
}


int code = 1;
switch (code)
{
    case 0: ...
    case 1: ...
    default: ...
}

```


## try

```c#



```



## function

```c#
[修饰词s] <返回值类型|void> <FuncName>(int x, int y)
{
    ...
}



```


## class

[方法 - C# 指南 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/methods)

[C# 中的属性 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/properties)


```c#
public class MyClass[: Object] {}

// 类の成员类型

    常量：与类相关联的常量值
    字段：与类关联的变量
    方法：类可执行的操作
    属性：与读取和写入类的已命名属性相关联的操作
    索引器：与将类实例编入索引（像处理数组一样）相关联的操作
    事件：类可以生成的通知
    运算符：类支持的转换和表达式运算符
    构造函数：初始化类实例或类本身所需的操作
    终结器：永久放弃类的实例之前完成的操作
    类型：类声明的嵌套类型
    吐槽一下，这不就是 python 的魔法方法吗？魔法方法不比这些简单、由雅啊？

class 类型定义包含数据成员（字段）和函数成员（方法、属性及其他）的数据结构。{}
class 的成员要么是静态成员，要么是实例成员
实例方法通过 `this` 引用实例对象。


// 访问级别 (default to private)

    public：访问不受限制。
        static public 通过 Class 访问
        public 通过实例访问
    private：访问仅限于此类。
    protected：访问仅限于此类或派生自此类的类。
    internal：仅可访问当前程序集（.exe 或 .dll）。
    protected internal：仅可从从此类、从此类中派生的类，或者同一程序集中的类
    private protected：仅可访问此类或同一程序集中从此类中派生的类。


// 其他修饰

    static: 静态成员。只能直接通过类来访问，不能通过实例对象访问。
    readonly


// 一切皆对象

C# 采用统一的类型系统，因此任意类型的值都可视为 `object`。 每种 C# 类型都直接或间接地派生自 `object` 类，而 `object` 是所有类型的最终基类。

可以使用 struct、class、interface、enum 和 record 构造来创建自己的自定义类型。{}

obj.GetType()    获取对象类型


// const
class MyClass02
{
    public const int Months = 12;
    private const string name = "html"; // 默认 private
}
var months = MyClass02.Months; // public const 正确访问方式
var c02 = new MyClass02();
var months02 = c02.Months; // 报错，public const 不能通过实例访问
var name = c02.name; // 报错，作用域外无法直接访问 private，即便是实例对象


// field
class MyClass02
{
    public string NameA01 = "A1"; // field 不推荐 public
    public static string NameA02 = "A2"; // field 不推荐 public
    private static string a = "c";
    private int _code = 0;
}
var c02 = new MyClass02();
字段相当于类的变量；
字段不推荐 public，请用 public 属性代替；


// property
class MyClass03
{
    string p01 { get; set; }
    string? p02 { get; set; } // 引用类型的、非静态的属性，推荐 Optional
    string p03 { get => "xyz"; }
    string p04 { get { return "xyz"; } }
    static string p05 { get => "xyz"; }
    public string P06 { get => "xyz"; }
    public static string P07 { get => "xyz"; }
}
var c03 = new MyClass03();
var p01 = c03.p01; // 报错，private 无法通过实例访问
var p02 = c03.p02; // 报错，private 无法通过实例访问
var p03 = c03.p03; // 报错，private 无法通过实例访问
var p04 = c03.p04; // 报错，private 无法通过实例访问
var p05 = c03.p05; // 报错，private 无法通过实例访问
var p06 = c03.P06; // public property 正确使用方法
var p07 = c03.P07; // 报错，static 无法通过实例访问，请直接用 class
var p07 = MyClass03.P07; // public static property 正确使用方法


// method
class MyClass04
{
    public int Func01() { return 1; }
    public static int Func02() { return 2; }
    private int Func03() { return 3; }
    private static int Func04() { return 4; }
}
var c04 = new MyClass04();
var f01 = c04.Func01(); // public Function() 正确使用方法
var f02 = c04.Func02(); // 报错，static 无法通过实例访问，请直接用 class
var f03 = c04.Func03(); // 报错，private 无法通过实例访问
var f04 = c04.Func04(); // 报错，private 无法通过实例访问
var f02 = MyClass04.Func02(); // public static Function() 正确使用方法


// class
参考 method


// 构造函数
构造函数是一种方法，其名称与其类型同名。
与普通方法不同，构造函数在声明时不需要表明返回值类型。
class MyClass06
{
    private int _x;
    private int _y;

    public MyClass06(int x, int y) // 不需要返回任何东西
    {
        // 跟 python 的 __init__() 相同，只不过实例变量变成了 public 属性
        _x = x;
        _y = y;
    }
}


// 终结器（构析函数）
C# 中很少使用终结器。


// 继承
基类中的私有成员被继承，但不能从派生类访问。


// 自定义迭代器（python 魔法方法）
public IEnumerable<int> GetSingleDigitNumbersLoop()
{
    int index = 0;
    while (index < 10)
        yield return index++;
}


// 自定义索引器（python 魔法方法）
public int this[string key]
{
    get { return storage.Find(key); }
    set { storage.SetAt(key, value); }
}

public Measurements this[int index]
{
    get {}
    set {}
}

```



## struct

```c#
struct 是值类型
class 是引用类型
二者的写法、用法一模一样{}



```

## interface

```c#
public interface I<Name> {}
public interface IFileSystem
{
    void AbstractFunc();
}


```


## Enum

```c#
enum ECodeType
{
    Male = 0,
    Female, // 1
    Other = 999,
}


int code = 0;
switch (code)
{
    case 0: ...
    case 1: ...
    default: ...
}


```

## record

与 struct class 不同的是，record 实例化后无法修改，即 python 的 list vs tuple





## delegate

- References
    - [C# 中的委托和事件简介 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/csharp/delegates-overview)
    - [浅谈C#委托事件机制：为什么我们需要事件&补充和总结（7） - 知乎](https://zhuanlan.zhihu.com/p/162065756)
    - [C#学习（三）深入理解委托、匿名方法和 Lambda 表达式 - 画星星高手 DealiAxy的个人博客](https://deali-axy.github.io/C%23/C%23%E5%AD%A6%E4%B9%A0%EF%BC%88%E4%B8%89%EF%BC%89%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%A7%94%E6%89%98%E3%80%81%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%E5%92%8C-Lambda-%E8%A1%A8%E8%BE%BE%E5%BC%8F/)

- Idea
    - Delegate Type == Callable
    - Callable，但是后期绑定、链式多播

- Fundamentals
    - Class
        - 你用 `delegate` 关键字声明的「委托类型」本质是一个 Class
        - 这个 Class 的特点是，它的实例是可调用的，即 Python 的 [[typing|Callable]]

- Philosophy
    - 后期绑定
        - 「泛型」是将 变量声明、变量类型 分开写，从而实现动态性
            - [[OOP|OOP]] 多态的原理就是后期绑定
        - 「委托」是将 函数声明、函数实现 分开写，从而实现动态性
        - 为什么 [[Python]] 没有 Delegate？
            - Python 只有 Class，连 Interface 都没有，怎么会有 Delegate
            - 但在 Python 或任何支持「函数指针」的语言里，用模拟一个 Delegate 类型是非常简单的
            - 这也是为啥网上很多文章介绍 Delegate 会提到「函数指针」
        - 「C# 的 Delegate」与「Composition 的委托」是一个东西吗？
            - 不是。
            - 前者是 Callable
            - 后者是 代理方法调用组合对象的方法，我认为更应叫「代理」而非「委托」
    - 多播
        - `Callable`（单播）不好吗，为啥多播？
            - 「后期绑定」和「多播」本身没什么关系，只不过是微软给 C# 语言设计了一种同时支持这两个特性的 Type（即委托），简化相关业务场景的开发
            - 最早设计 Delegate 时，分为「单播委托」和「多播委托」，但微软发现区分「单播委托」没啥大用，「多播委托」都能做，于是最后只用「多播委托类型」（包括 `delegate` 关键字创建的委托类型），但出于兼容性以及边缘场景仍保留了 `System.Delegate` 单播委托类型
        - Delegate 与 Event 有啥关系？
            - C# 的 Delegate 支持多播委托，可以轻松实现 [[Web API]] 那种「一个 Event，多个 Callbacks」的效果
        - Function
            - 为什么不用 Interface 实现后期绑定，要用 Delegate？
            - Interface 虽然各语言细节不同，但核心都是「抽象的 Type」
            - Delegate 则是「抽象的 Function」，类似 Python 的 [[typing|Callable]]
    - [设计模式篇——代理模式详解（面试官再问你代理模式，这么回答他！） - 知乎](https://zhuanlan.zhihu.com/p/120343903)

- API
    - `.Invoke()` 同步调用
    - `.BeginInvoke()` 异步调用
    - `.EndInvoke()` 阻塞结果

## event

- Fundamentals
    - Event type is a pre-defined delegate type
        - Function signature is fixed
        - Standard event type supports generic for `EventArgs`

## attribute

[[ChatGPT]]
C# 实际上是支持类似装饰器（Decorator）的功能的，只不过它采用了另一种实现方式，称之为“特性”（Attribute）。

特性（Attribute）是一种可以应用于程序元素（如类型、变量、参数、方法、事件等）的声明式标记。特性可以用于给程序元素添加声明式信息，或者指示编译器对这些元素进行编译时的处理。可以将特性视为编译器的指令，用于控制编译和运行时的行为。

与 Python 中的装饰器类似，C# 中的特性可以在类、方法、属性等声明前面使用，以改变这些元素的行为。例如，特性可以指示编译器自动生成元素的处理代码，或者让编译器跳过编译器检查。

下面是一个使用特性的示例：

```csharp
[Obsolete("This method is obsolete. Please use a different method instead.")]
public void OldMethod()
{
    // Code goes here
}
```

在这个示例中，`Obsolete` 作为一种特性被应用到了 `OldMethod` 方法上，以标记这个方法已经过时，不再推荐使用。编译器会根据特性信息，生成相关的警告或者错误信息。

因此，尽管 C# 没有直接使用 Python 风格的装饰器，但是通过特性的方式，同样可以实现类似的功能，把重要的行为与程序元素绑定在一起。



## 并发

[谈一谈.NET中的并行编程（TPL）多线程、异步、任务和并行计算](https://masuit.com/1201)

C#の并发 与 pythonの并发 没有区别；
C#の异步 与 pythonの异步 没有区别；
C#の多线程 与 pythonの多线程 没有区别；
C#の多进程 与 pythonの多进程 没有区别；

```c#
一句话，C# 的 async/await 跟 Python 没区别。
await 只能在 async 方法中使用；
async 具有传染性，会污染整个调用链；

> async 修饰符它会向编译器发出信号，说明此方法包含 await 语句；也包含异步操作
> async 关键字将方法转换为异步方法，这使你能在其正文中使用 await 关键字。
> 如果 await 未用在 async 方法的主体中，C# 编译器将生成一个警告

```

## 表达式树

[C#的入表达式树（LambdaExpression保姆级超详细简单入门教程](https://masuit.com/1795)

