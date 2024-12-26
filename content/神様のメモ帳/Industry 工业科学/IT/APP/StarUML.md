---
tags:
  - flag/License/Proprietary
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Picture
  - flag/LANGUAGE/UML
  - flag/LANGUAGE/SysML
scoop: staruml
---

- References
    - [StarUML documentation](https://docs.staruml.io/)

    - [Basic Concepts - StarUML documentation](https://docs.staruml.io/user-guide/basic-concepts)

- Installation
    - `scoop install staruml`

- Configuration
    - 

- Data
    - 根本无法导入导出 [[UML]]/[[PlantUML]]/[[Mermaid]]，最多只能导出为图片，和 Visio 一样封闭
    - **导出的图片整个背景都是文字水印，根本没法用，艹**

- Usage
    - 

- Examples
    - 

- UI
    - 

- Idea
    - 负责开发文档中的模型部分
    - 标准化模型

- Philosophy
    - 

- Objects
    - Project `.mdj`
        * 一个 Project 可理解为一个 System 的建模
        * 一个 System 相当于现实中的一个「复杂系统」
        * E.g.
        * 「飞机」是一个系统
        * 「汽车」是一个系统
        * 「淘宝」是一个系统
    - Model
        - Model consists of Model Elements
        * 一个 Model 相当于一个「简单系统」
        * 一个 Model 专注于描述 System 的某一方面
        * 一个 System 可通过多个 Models 进行描述
        * 一个「复杂系统」，通常可以视为多个「简单系统」的组合
        * E.g.「飞机」这种「复杂系统」，自然是由成百上千个大大小小的「简单系统」所组成
    - Diagram
        - Diagram consists of View Elements
            * E.g.
            * 类图 专注于类的继承关系
            * 时序图 专注于任务的顺序
            * 更多 Diagram 可参考 [[UML]] [[PlantUML]] [[SysML]]
        - 即便是一个「简单系统」（Model），也需要使用多种「图表」（Diagram）才能描述清楚
        - A Diagram is a visual geometric symbolic representation of a software model
    - View Element
        - 整个 Project 是一个树形结构，多叉树的节点称为 Element
        - `Project` 本身为根节点，其下可以创建各种 Element E.g. Model/Package/Subsystem/Diagram
        - Element 可以嵌套创建 sub element
    - Fragment `.mfj`
        - Fragment 用于在 Project 之间复用 Element
        - Any element can be exported as a fragment
        - Fragment can be reused by importing in a project

- Fundamentals
    - 

- Limitation
    - StarUML 本质是一个定义 Model 顺带将 Model 可视化的工具，其 Model 是完全标准化的，也就是「定义」导向，而不是「视觉」导向，没有半点模糊空间。这损害了灵活性、泛用性、实用性、美观度，因此 StarUML 永远都做不到像 Whiteboard 那样简单、自由。但 StarUML 给了我们很多启发——如果要在 Whiteboard 里实现一套建模方法论，应该怎么做

- Test
    - 

- Description
    - StarUML 支持 [[UML|UML 2]]
    - StarUML 支持 [[SysML]]
    - StarUML 支持 asynchronous model validation
    - StarUML 支持 插件系统
