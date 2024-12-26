---
aliases:
- null
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/Library/BuiltinDataType
---

[来吧，一文彻底搞懂Java中最特殊的存在——null - 沉默王二博客](https://www.itwanger.com/java/2020/01/13/java-null.html)

- 一个类的成员变量如果是引用类型的话，它的默认值就为 null
- 但如果是一个引用类型的局部变量的话，编译器会提醒我们对其初始化
- Java 的 null 非常特殊，不像 [[Python|Python]] 的 None 那样是一个实例并有对应类型

> [!question]
> [[ChatGPT]]
> Java 中的 null 是一个特殊的值，它表示一个对象的引用没有指向任何内存地址。null 不是一个类型，而是所有引用类型的默认值。当一个变量被声明为对象类型，但没有被赋一个具体的对象，它的默认值就是 null。当尝试使用 null 引用时，会抛出 NullPointerException 异常。


> [!question] [[ChatGPT]] 判断一个对象的值是否为 null

在 Java 中，可以使用 `\=\=` 运算符来判断一个对象的值是否为 null。如果一个对象的值为 null，则 `\=\= null` 表达式的结果为 true，否则结果为 false。例如：

```java
Object obj = null;
if (obj == null) {
    System.out.println("obj is null");
} else {
    System.out.println("obj is not null");
}
```

在这个例子中，由于 obj 的值为 null，所以 `obj == null` 表达式的结果为 true，输出结果为 "obj is null"。
