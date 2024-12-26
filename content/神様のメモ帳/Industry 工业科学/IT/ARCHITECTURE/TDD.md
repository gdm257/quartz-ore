---
aliases:
  - Test Driven Development
tags:
  - Label/Article/Industry-工业科学/IT/Mindset/Architecture
---

- Architecture
    1. Design
    2. Use (Use Case)
    3. Test Case
    4. Interface (Type/Class/Struct/Object)

- Objects
    - Test Case vs Interface
        - Test Case
            - excepted to run
            - can be used
            - a kind of design (which drives business code)
        - Interface (Type/Class/Struct/Object)
            - excepted to do not run
            - can not be used
            - a kind of design

- Philosophy
    - 乱改源代码，会导致测试无法通过
        - 看上去是废话，但其实不是
        - 所有关键入口必须覆盖
        - 覆盖率越高，越能实现这点
    - 无法通过的测试，必须反映准确的出错位置
        - 让开发者完全放下心智负担
        - 同样的，覆盖率越高越好
