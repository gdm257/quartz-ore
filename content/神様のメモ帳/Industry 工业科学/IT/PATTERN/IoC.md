---
aliases:
  - Inversion of Control
  - 控制反转
tags:
  - flag/DesignPattern/Feature/StructuralPatterns-结构型
  - Label/Industry-工业科学/IT/Mindset/DesignPattern
---

- Fundamentals
    - Framework
        - 什么是变量？
        - 可以变的就叫变量
        - 什么叫 Framework？
        - 就是「变量化」
        - 随便一个具体的 application，进行挖空、预留占位符，越来越空，灵活性越来越强
        - IoC，具体实现一般是元编程 e.g. 反射、动态导入、语言级 plugin

- Examples
    - 真要说，source code 的 execution 不就是一种 IoC 么
        - source code 被 managed runtime 所控制，在特定时刻（初始化之后）被执行

重要的是「控制反转」思想。

「依赖注入」是「控制反转」的一种「实际应用」，而不是很多文章所说的「实现」。因为实现这个词给开发者的第一感觉就是固定的方法、每种实现的功能定位一致。「依赖注入」和「插件化」都体现了「控制反转」，但二者的功能完全不同甚至不相干，根本不能称为不同「实现」

ORM 体现了 依赖倒置 的思想
依赖注入 体现了 控制反转 的思想
