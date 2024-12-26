---
tags:
  - flag/LANGUAGE/RegExp
  - flag/LANGUAGE/Go
  - Label/Industry-工业科学/IT/Library/StandardLibrary
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
aliases:
  - regexp
go: regexp
---

[Go语言正则表达式：regexp包](http://c.biancheng.net/view/5124.html)


```go
// 一句话，regexp 能干的事就 3 件：匹配、查找、替换，算是很弱了。但提供的 API 眼花缭乱，写起来也麻烦，不推荐使用。
// 而且使用逻辑很奇葩。

import (
    "regexp"
)

Python: `re.search(pattern, text)`
Go: `regexp.MustCompile(pattern).MatchString(text)`

Python: `re.sub(pattern, repl, text)`
Go: `regexp.MustCompile(pattern).ReplaceAllString(text, repl)` // 很丑，这还是没写 error 处理的代码

pattern 写法和 Python 相同，包括分组引用。

另外，repl 的写法和 Python 的 re 略有不同。

repl 中，引用通过符号 "$" 标明，而不是反斜杠 \g<name> \1 \2。
E.g. `.ReplaceAllString(text, "${1}")`
E.g. `.ReplaceAllString(text, "${2}")`
E.g. `.ReplaceAllString(text, "${3}")`
E.g. `.ReplaceAllString(text, "${id}")`
E.g. `.ReplaceAllString(text, "${name}")`






regexp.Match()    // 相当于 Python 的 re.search()
regexp.MatchString()
regexp.MatchReader()
regexp.QuoteMeta() // 元字符转义，不常用

regexp.MustCompile()    // 生成 Regexp 对象
regexp.MustCompilePOSIX()
regexp.Compile()
regexp.CompilePOSIX()

compile := regexp.MustCompile(pattern) // 你没看错，就是 pattern，奇葩逻辑
compile.String()    // pattern
compile.Match()    // 是否命中
compile.MatchString()
compile.MatchReader()
compile.Find()    // 第一处命中的内容
compile.FindString()
compile.FindStringIndex()
compile.FindStringSubmatch()
compile.FindAll()    // 内容s of 所有命中处
compile.FindAllString()
compile.ReplaceAll()    // 替换
compile.ReplaceAllString()
compile.ReplaceAllFunc()
compile.ReplaceAllLiteralString()



regexp 十分弱鸡，开放的 API 只有 1 个 struct 和 8 个函数：
4 个函数用于生成 compilation (Regexp object)
3 个函数用于判断是否匹配
1 个函数用于转义元字符

方法看上去很多，实际上除了 Match Find Replace，剩下的就三四个，还是没用的那种。

pattern 字符串建议使用这种书写方式 `abc` 而不是用引号 "abc"。

regexp 采用 RE2 语法，除了 \c、\C外，Go语言和 Perl、Python 等语言的正则基本一致。

```


## 5. EGP

包括 BGP