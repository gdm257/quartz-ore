---
tags:
  - flag/MachineLanguage/Markup
  - Label/Industry-工业科学/IT/Language
---

## Brief

- Web
    - [Online FlowChart & Diagrams Editor - Mermaid Live Editor](https://mermaid.live/edit)

[Mermaid | Diagramming and charting tool](https://mermaid.js.org/)

[Diagram Syntax | Mermaid](https://mermaid.js.org/intro/n00b-syntaxReference.html)

- Idea
> [!cite] Mermaid 是一个基于 Javascript 的图表绘制工具，通过解析类 Markdown 的文本语法来实现图表的创建和动态修改。Mermaid 诞生的主要目的是让文档的更新能够及时跟上开发进度

- Test
    - 语法有点别扭，我更喜欢 [[PlantUML]]

- Supported Diagrams
    - [[饼图]]
    - [[思维导图]]
    - [[流程图]]
    - [[Gantt diagram]]
    - [[时序图]]
    - [[状态图]]
    - [[类图]]
    - [[C4 图]]
    - Git Graph
    - [[Journey 图]]

- Common Syntax
    - 要定义一个 Diagram（图表），首先要声明 Diagram Type（图表类型）

- Limitation
    - > [!suggest]
      > 我想放弃了…
      > 复杂的图画不了一点
      > 比如黑暗之魂的 [地图](https://www.gamersky.com/handbook/201805/1053927_2.shtml)
      > ![黑暗之魂 区域连接示意图](https://img1.gamersky.com/image2018/05/20180530_qy_372_6/gamersky_02origin_03_20185301514A82.jpg)

- Description
    - Mermaid 是一门 DSL
    - Mermaid 是一个 [JS 库](https://github.com/mermaid-js/mermaid)
    - DSL 与 JS 库的关系，类比 Python Specification 与 CPython，JS 库就是 DSL 的解析器、渲染器
    - Mermaid DSL 被设计为类 [[Markdown]] 的文本语法，充分吸收了 Markdown 的包裹式语法，可读性强，容易上手
    - Mermaid 基本已成为 Markdown 的事实标准，大部分 Markdown 编辑器和解析库采用 Mermaid 来实现 UML 绘图
    - [Mermaid Live Editor](https://mermaid.live) 是官方提供的在线编辑器，提供了交互式的体验与各种图表的示例


## 饼图 `pie`

```mermaid
pie
"Dogs" : 386
"Cats" : 85
"Rats" : 15
```

- 使用关键字 `pie` 声明一个 [[饼图]]


## 思维导图 `mindmap`

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

- 使用关键字 `mindmap` 声明一个 [[思维导图]]


## 时间线 `timeline`

```mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter
```

## 流程图 `flowchart` `graph`

[Flowcharts Syntax | Mermaid](https://mermaid.js.org/syntax/flowchart.html)

```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

- 使用关键字 `flowchart` 或 `graph` 声明一个 [[流程图]]


## 甘特图 `gantt`

```mermaid
gantt
    section Section
    Completed :done,    des1, 2014-01-06,2014-01-08
    Active        :active,  des2, 2014-01-07, 3d
    Parallel 1   :         des3, after des1, 1d
    Parallel 2   :         des4, after des1, 1d
    Parallel 3   :         des5, after des3, 1d
    Parallel 4   :         des6, after des4, 1d
```


## 时序图 `sequenceDiagram`

```mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
```

## 状态图 `stateDiagram-v2`

```mermaid
stateDiagram-v2
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
```

## 类图 `classDiagram`

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<Interface>> Class01
Class09 --> C2 : Where am I?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

## Requirement Graph `requirementDiagram`

```mermaid
requirementDiagram

requirement test_req {
id: 1
text: the test text.
risk: high
verifymethod: test
}

element test_entity {
type: simulation
}

test_entity - satisfies -> test_req
```

## C4 Graph `C4Context`

```mermaid
C4Context
title System Context diagram for Internet Banking System

Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
Person(customerB, "Banking Customer B")
Person_Ext(customerC, "Banking Customer C")
System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

Enterprise_Boundary(b1, "BankBoundary") {

  SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

  System_Boundary(b2, "BankBoundary2") {
    System(SystemA, "Banking System A")
    System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts.")
  }

  System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
  SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

  Boundary(b3, "BankBoundary3", "boundary") {
    SystemQueue(SystemF, "Banking System F Queue", "A system of the bank, with personal bank accounts.")
    SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
  }
}

BiRel(customerA, SystemAA, "Uses")
BiRel(SystemAA, SystemE, "Uses")
Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
Rel(SystemC, customerA, "Sends e-mails to")
```


## ER Graph `erDiagram`

```mermaid
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
```

- Entity Relationship Diagrams 实体关系图
- 没错，就是后端程序员再熟悉不过的 Entity/Entry/Model/Schema，可以用来描述数据库条目

## Git Graph `gitGraph`

```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
```

## Journey Graph `jouney`

```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 3: Me
```

- User Journey Diagram 用户体验旅程图
- 有点鸡肋，用不上
