---
aliases:
  - DI
  - 依赖注入
tags:
  - flag/DesignPattern/Feature/StructuralPatterns-结构型
  - Label/Industry-工业科学/IT/Mindset/DesignPattern
---

- Idea
    - [[Dependency Inject|DI]] 简单说就是依赖对象参数化

- Examples
    - 函数入参
    - 构造方法入参
    - setter 入参

- Philosophy
    - 参数化 & 接口化
        - [[Dependency Inject|DI]] 简单说就是依赖对象参数化
        - 仅仅只是参数化，type annotations 仍然存在直接的依赖关系。为了消除 type annotations 直接依赖，参数类型需要接口化，而不是标注为结构体类型。
        - 遗憾的是，接口化仅限于方法调用或函数调用（函数签名），如果我们调用了结构体的字段，那么是没法对这个结构体进行接口化的，至少 Go 语言不支持，Java 可以用抽象类，Python 可以用 Protocol 或 dataclass
        - 接口化是典型的依赖倒置的实现方式。
        - [[Dependency Inject|DI]] 是 [[IoC]] 思想的实现方式，[[Dependence Inversion Principle|依赖倒置原则]] 也是。
        - [[IoC]] 是思想，而非特定实现方式。
        - 有些 DI 框架特别黑魔法（黑盒子），彻底隐藏了对象初始化过程。对于团队合作与开源协作来说，这是有害的，所以完全透明、人类可读的 [[Go wire|wire]] 库才大受欢迎
