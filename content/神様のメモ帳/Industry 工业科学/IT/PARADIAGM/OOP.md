---
aliases:
    - OOP
    - Object Oriented Programming
    - 面向对象编程
    - 面向对象
tags:
    - Label/Article/Industry-工业科学/IT/LANGUAGE
---

[博采 27 门语言之长，提升 Python 的能力](https://mp.weixin.qq.com/s/BBvhOCqKzNN7INx13yiUmQ)

[函数式编程（Functional Programming）相比面向对象编程（Object-oriented Programming）有哪些优缺点？ - 知乎](https://www.zhihu.com/question/19732025/answer/530161703)

[怎么从本质上理解面向对象的编程思想？ - 知乎](https://www.zhihu.com/question/305042684/answer/550196442)


0. 该不该用 type？
    - No Type, No Life
    - 应该反过来问，哪些特殊情况要将 type 退化为独立 function？
1. 你的类是不是好文明？
    - 名词 == type
    - 动词 == method
    - 形容词 == feature
    - 写下问题的描述（程序要做什么），把所有名词、动词和形容词加下划线
    - 包含 20 个以上方法的类可能很难理解和维护，这样的 God Class 在各个开源库里一定是绝对核心的类
    - 一步步考虑每个使用实例，依靠直觉不断迭代，直到满意



属性阵营：多为动态语言，一切皆对象，类型也是对象，是对象就能当变量来操作。反射、元编程随便搞

Python 属于此派。但同时吸收了实例阵营的精华，内置了许多强大的类型及其工具库

JS 彻底倒向属性阵营，允许创建无比灵活的对象，想要类型？自己用对象模拟，谢谢

Python 虽然也是要开发者自己模拟来实现其他类型，但标准库和三方库已实现很多类型，加上泛型，类型使用体验直追强类型语言。因此 Python 才能越来越火热，而不像 JS 纯靠浏览器才成为历史赢家（JB 的统计显示 JS 受欢迎度每年都在小幅下滑）



实例阵营：多为强类型语言，类型不能赋值给变量，不允许运算符重载，不开放索引协议、可调用协议、可迭代协议、属性描述符

也有例外，例如给函数开了个口子，允许闭包

取而代之，内置五花八门的类型及其增强功能，说的就是 C++。也因此非常需要泛型



【类、接口、对象的面向对象——面向对象的封装、继承、多态之理解】

「封装」，即类，表面上看是方法与变量的封装。表面上的封装如何理解？一句话，include。其实还有最重要的意义：对象。对象实例化后可以调用类里的成员方法、成员变量操作，是不是跟列表、元组很像？是的！我们其实创造了一种数据类型，一种与整数、浮点数、布尔值、序列、元组有着平等关系的数据类型，我们甚至没有意识到这个对象属于一种全新的数据类型。

没错，基本数据类型，其实就是类。整型类、浮点类……我们声明一个浮点数，其实就是实例化了一个浮点类对象。我们拿这个浮点数运算，本质上是用这个对象操作。

那么，「类」真正的意义就体现了：创建对象。对象有什么用呢？可别忘了，对象是数据类型的实例，就如同 0 是整数。整数是什么，类就是什么。整数怎么用，对象就怎么用。

这才是面对对象的真正含义。「封装说」就完全没有抓住面向对象的核心。

我们难以意识到的原因是，我们创建的数据类型没有第三方运算方法。什么意思呢？我们创建了一个整数对象，我们无意识地使用加减乘除来运算，加减乘除，是语言编译器提供的操作方法，是一套运算规则与运算实现。但我们新建一个自定义数据类型的对象时，我们既没有编译器提供的类似加减乘除的操作工具，也没有一套对应的运算法则，即使有，我们也不知道这套运算法则有什么实践意义，更何况这套法则的实现还得我们自己码代码呢。

基本数据类型就不一样了，它们有着完整的待遇。继续拿浮点数举例吧，一个浮点数字是一个对象，对象的数据类型就是浮点类。浮点数字有什么操作方法呢？有，数学。数学是来自于我们人脑的规则体系，对于电脑里的对象而言，这就是第三方的体系，编译器就是这个体系的实现。我们为什么会认同、使用浮点类对象呢？因为它有意义。浮点数可以是圆周率、自然对数、股票价格……因为它在现实中已经有一套完整的实践意义，所以即便是初学者也能轻易地使用、理解它。换成自己定义的类，我们哪知道实例化对象有什么意义？

所以，与其说是万物皆是对象，这种不明觉厉的话，不如说实例都是数据类型。**因为只有数据类型才有实际意义**。普通人能接受、理解的数据类型就只有少数几种，程序员的工作，就是创造出截然不同但有实践意义的数据类型，利用这些数据类型实现各种效果，这些效果就如同计算两个数相乘，本质上没有区别。

最重要的词，不是「封装」，不是「对象」，而是「数据类型」，**是「数据」，是「数据的作用」**。至于这种全新的「数据」有什么用，就看你能不能开发出一套操作体系了。

「继承」，表面上又是封装，是类的封装。其真正的实践核心仍然是「数据类型」。顺便说一句，父类这个词不太好理解，翻译成基类更好。说基类可能还是不清楚，那就举个例子吧，int double 这两个类的基类是 整数类。对象属于类，子类属于父类，本质是一样的。1 属于 int，int 属于整数类。不要以为类一定是抽象的、不具体的。我完全可以这么定义：1 属于 类1-10，类1-10 属于 int，int 属于整数类。看到了吗，这个「类 1-10」是自定义类，但实际上相当具体，如果我愿意，可以更加具体，只不过没实践意义罢了。

类是一种数据类型，对象是具体数据，数据类型没法直接使用，但属于这种数据类型的数据能使用。所以我很讨厌 java 禁止多继承，多继承意味着一个数据可以属于多种数据类型，这在现实中是相当有意义的，不然 java 干嘛弄出个接口、干嘛允许多实现，所谓的接口，本质上是允许多继承的纯抽象类，java 将之显式定义为接口。当然，这种说法并不全面，我在另外的笔记里讨论了接口的本质。
