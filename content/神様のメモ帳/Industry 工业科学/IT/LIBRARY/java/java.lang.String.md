---
aliases:
- String
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/Library/BuiltinDataType
---

- References
    - [Characters](https://docs.oracle.com/javase/tutorial/java/data/characters.html)

- Description
    - `String` 并不是 [[Java 原始数据类型]]
    - `String` 是引用数据类型之一

- Literal
    - `"..."` 双引号包裹

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("\\");
        System.out.println("\"");
        System.out.println("\'");
        System.out.println("gdm\t257");
        System.out.println("\n"); // newline
        System.out.println("\r"); // CR
        System.out.println("\f"); // LF
        System.out.println("Hellow\b World"); // backspace
    }
}
```
