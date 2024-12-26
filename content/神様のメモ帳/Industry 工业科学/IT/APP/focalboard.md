---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Text
---

- Alternatives
    - 更推荐 [[anytype]]，完全的超集替代
    - [[AITable]]
        - [[anytype]] 定位是 PKM
        - [[AITable]] 定位是 Data Workflows
        - 二者核心设计和用法非常相似，但是 [[AITable]] 更多聚焦在数据处理，支持图表 dashboard；并且只关注 Database，不支持 Content

- Philosophy
    - Database ONLY
        - [[anytype]] 虽然主打图数据库，但依旧保留了 [[Notion]] 那样的「Content（正文/流式文本/标记语言）」
        - [[focalboard]] 反倒是弱化了「Content」，以 properties 为中心，设计简练，我很欣赏
        - [[focalboard]] 跟 [[anytype]] 设计非常相似
            - 只不过 [[anytype]] 支持的 Content 类型更多
            - [[anytype]] 内置了一些特殊的 Type（相当于图数据库的 Label），更符合图数据库用法
            - [[focalboard]] 完全通过 [[Excel]]-style spreadsheet (properties) 来模拟图数据库，比较原始

- Con
    - NOT Support cross-board node
        - [[anytype]] 的 widget 与 objects 是完全解耦的，一个 object 可以用于多个 widgets
        - [[focalboard]] 里的 card（node）必须属于且只能用于某一个 board（相当于 [[anytype]] widget），**灵活性算是废了**
