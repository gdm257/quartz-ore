---
aliases:
- 类图
tags:
- Label/Industry-工业科学/IT/APP/Prototype/Diagrams/UML/Development
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea

- Configuration

- Data

- Examples
    - ![Relations](https://pic3.zhimg.com/v2-61af74fe4b611c85c740cececb18e4ae_r.jpg)

- Users
    - [[PlantUML]]

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Philosophy

- Objects
    - Class
        - Field
        - Method
            - visibility 可见性
                - `-` private
                - `#` protected
                - `~` package private
                - `+` public
    - Interface
    - Relation
        - Label
            - `Class01 "side_str" <-- "side_str" Class02 : middle_str`
        - Drawing
            1. Generalization (Extend)
                - `<|--`
                - 空心三角形箭头 + 实线
            2. Relization (Implement)
                - `..|>`
                - 空心三角形箭头 + 虚线
            3. Composition
                - `--*`
                - 尖括号箭头 + 实线 + 实心菱形
            4. Aggregation
                - `--o`
                - 尖括号箭头 + 实线 + 空心菱形
            5. Association
                - `<--`
                - 尖括号箭头 + 实线
            6. Dependency (Use)
                - `<..`
                - 尖括号箭头 + 虚线
        - [分分钟弄明白UML中泛化 , 实现 , 关联, 聚合, 组合, 依赖-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1012684)
        - [类的六大关系——依赖和关联的区别\_关联和依赖\_夏诗曼CharmaineXia的博客-CSDN博客](https://blog.csdn.net/CharmaineXia/article/details/120585526)
        - [关联、聚合、组合的区别 - 知乎](https://zhuanlan.zhihu.com/p/359672087)
    - Package
        - 可以把一堆 Class 框起来，像个文件夹📁
    - Namespace
        - 类似 Package，主要看编程语言和 DSL 的支持
    - Note
        - 额外批注，即便签，没什么好说的
    - [Class Diagram syntax and features](https://plantuml.com/class-diagram)

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
