---
tags:
  - Label/Industry-工业科学/IT/Mindset/AbstractDataType/HighLevel
---

[从位图到布隆过滤器，C#实现 - 黑洞视界 - 博客园](https://www.cnblogs.com/eventhorizon/p/16414593.html)

布隆过滤器（Bloom filter）是一种特殊的 Hash Table，能够以较小的存储空间较快地判断出数据是否存在。常用于允许一定误判率的数据过滤及防止缓存击穿及等场景。

布隆过滤器的数据保存在 位图（Bitmap）上。Bitmap 简而言之是二进制位（bit）的数组。Hash Table 保存每个元素的位置，我们称之为 桶（bucket）， Bitmap 上的每一位就是布隆过滤器的 bucket。

布隆过滤器的每一个 bucket 只能存储 0 或 1。数据插入时，布隆过滤器会通过 Hash 函数计算出插入的 key 对应的 bucket，并将该 bucket 设置为 1。

查询时，再次根据 Hash 函数计算出 key 对应的 bucket，如果 bucket 的值是 1，则认为 key 存在。