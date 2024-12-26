---
aliases:
  - map
tags:
  - flag/LANGUAGE/Go
  - Label/Industry-工业科学/IT/Library/BuiltinDataType
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/Mapping
---

```go
// 简易字典 Map
// Map 是一种无序的键值对的集合。
// 相当于 Python 的 Dict[K, V]
// 声明名为 dict 的字典
// key 为 string
// value 为 int
var dict map[string]int // 声明
dict == nil // 初始值
dict = make(map[string]int, 10) // 分配空间，最大长度为 10
dict["key01"] = 999 // 赋值

// 动态长度
dict := make(map[string]int) // 声明 + 分配空间
dict["key"] = 199
dict["key01"] = 299

// 动态长度（声明+分配空间+赋值）
dict02 := map[string]int {
    "key01": 999
    "key02": 999
}


```