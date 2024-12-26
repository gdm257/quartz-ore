---
aliases:
- IO
tags:
- flag/LANGUAGE/CSharp
- Label/Industry-工业科学/IT/Library/BuiltinLibrary
- flag/Library/DataAccessLayer/Implement__/IO/File
---

[System.IO 命名空间 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/api/system.io?view=net-6.0)

[Encoding 类 (System.Text) | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/api/system.text.encoding?view=net-6.0)


```c#
using System.IO;
var str = "./a.txt"; // 分隔符一律使用正斜杠，否则无法跨平台


// Path
// path 是提供 文件 或 目录 路径的字符串
// 若要确定当前目录，请调用 Directory
// File 与 Path 功能基本不重叠
// File 大多数成员直接操作文件
// Path 大多数成员 不会 与文件系统交互，而是操作实例对象
GetFullPath(String)


// File
File.Exists(str)
File.Delete(str) // rm
File.Create(String) // touch
File.Copy(srcString, dstString) // 不允许覆盖同名文件，会报错 IOException
File.Copy(srcString, dstString, true) // 允许覆盖
File.Move(srcString, srcString)
File.OpenText(String) // 打开 UTF-8 文本文件
File.ReadAllLines(String) // 打开文本文件，读取所有行，然后关闭该文件
File.ReadAllLines(String, System.Text.Encoding.GetEncoding("utf-8"))
File.ReadAllLines(String, System.Text.Encoding.GetEncoding(65001))
File.ReadAllLines(String, System.Text.UTF8Encoding) // 默认 UTF-8
File.ReadAllLines(String, System.Text.ASCIIEncoding)
File.ReadAllLines(String, System.Text.UTF32Encoding)
File.ReadAllLines(String, System.Text.UnicodeEncoding)
File.ReadAllBytes(String) // 打开文件，读取内容为 byte[]，然后关闭该文件
File.Open(String, FileMode.OpenOrCreate, FileAccess.ReadWrite)
File.OpenWrite(String)
public enum FileMode
{
    CreateNew = 1,
    Create = 2,
    Open = 3,
    OpenOrCreate = 4,
    Truncate = 5,
    Append = 6,
}
public enum FileAccess
{
    Read = 1,
    Write = 2,
    ReadWrite = Write | Read, // 2 | 1
}


// 读取文本文件
try
{
    // 方法 1
    using (var sr = new StreamReader("TestFile.txt"))
    {
        string data = sr.ReadToEnd();
        Console.WriteLine(data);
    }
    // 方法 2
    using (StreamReader sr = File.OpenText("TestFile.txt"))
    {
        string data = sr.ReadToEnd();
        Console.WriteLine(data);
    }
}
catch (IOException e)
{
    Console.WriteLine("The file could not be read:");
    Console.WriteLine(e.Message);
}










```