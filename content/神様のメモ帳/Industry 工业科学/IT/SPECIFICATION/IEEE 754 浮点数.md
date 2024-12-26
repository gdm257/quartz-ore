---
aliases:
- IEEE 754
tags:
- Label/Article/Industry-工业科学/IT/LANGUAGE
- Label/Industry-工业科学/IT/Specification/IEEE
---

[深入理解计算机系统-第2章信息的表示和处理 - 知乎](https://zhuanlan.zhihu.com/p/572878345)

[从科学记数法到浮点数标准IEEE 754](https://mp.weixin.qq.com/s/mf1mH-aGWgcC6v2R8ijE8A)

- Fundamentals
    - 普通浮点数在计算机底层以「二进制小数」的方式来存储
    - 二进制小数无法覆盖所有十进制小数
    - 换句话说，有些（无穷多个）十进制小数无法用 多个 2的n次幂 的和 表示
    - 解决办法很简单，底层是二进制小数的方法行不通，那么就将底层换为十进制，完美解决，代价是性能
