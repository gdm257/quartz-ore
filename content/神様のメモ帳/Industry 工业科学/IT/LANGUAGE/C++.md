---
aliases:
  - C++
  - cpp
  - CPlusPlus
  - CPlusPlus Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[C++ Reference](https://zh.cppreference.com/w/%E9%A6%96%E9%A1%B5)
[https://cplusplus.com/reference/](https://cplusplus.com/reference/)

[Learn Contemporary C++ | Concise&Visual Examples | hacking C++](https://hackingcpp.com/)

[mortennobel/cpp-cheatsheet: Modern C++ Cheatsheet](https://github.com/mortennobel/cpp-cheatsheet)

[TheLartians/ModernCppStarter: 🚀 Kick-start your C++! A template for modern C++ projects using CMake, CI, code coverage, clang-format, reproducible dependency management and much more.](https://github.com/TheLartians/ModernCppStarter)

[ThisisGame/cpp-game-engine-book: 从零编写游戏引擎教程 Writing a game engine tutorial from scratch](https://github.com/ThisisGame/cpp-game-engine-book)

[CnTransGroup/EffectiveModernCppChinese: 《Effective Modern C++》翻译 - 已完成](https://github.com/CnTransGroup/EffectiveModernCppChinese)

[0voice/cpp\_new\_features: 2021年最新整理， C++ 学习资料，含C++ 11 / 14 / 17 / 20 / 23 新特性、入门教程、推荐书籍、优质文章、学习笔记、教学视频等](https://github.com/0voice/cpp_new_features)

[yuesong-feng/30dayMakeCppServer: 30天自制C++服务器，包含教程和源代码](https://github.com/yuesong-feng/30dayMakeCppServer)



## Toolchain

[C 语言有没有 REPL？ - 知乎](https://www.zhihu.com/question/53638858)

[root-project/cling: The cling C++ interpreter](https://github.com/root-project/cling)

[chu's blog - 从零开始的C++包管理器CONAN上手指南](http://chu-studio.com/posts/2019/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%9A%84C++%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8CONAN%E4%B8%8A%E6%89%8B%E6%8C%87%E5%8D%97)

### Makefile


    cd nginx-source-code
    ./configure --help
    ./configure [options]    生成 makefile
    make    编译
    make install    安装（复制文件到指定目录）


C/C++ 的包管理极其弱鸡，所有依赖都要自己拉源码、Makefile 编译安装，或者安装二进制包。

本质上这和其他语言没什么不同，但问题在于业界从未统一过发布方式，也就是没有像 PyPi 那样的存在，即使有，包的数量也很少。用的人少，就更没有人发布到这样的包仓库。

目前唯一一个稍微有点起色的包管理器是 `canon`，解决了很多痛点，但 C/C++ 祖传硬伤——包数量与兼容性还没完全解决，只能说能用最好，用不了还得手动编译。

- `canon`
- `automake`


## Namespace

C/C++ 的 `#include myfile.h` 效果跟 Nginx 的 `include` 一模一样，也就是 Python 的 `from myfile import *`

# Brief

## Pro

- Idea
    - C++ 是 Software Engineering 最重要的底层语言，没有之一

- Pro
    - C++ 是 interop 最重要的语言
    - 非常适合「性能优化」「用作 binding/interop」
    - 生态全面偏底层（面向过程、算法实现），数据处理生态极其繁荣，毫无疑问是地表最强（除了机器学习比不过 [[Python]]）

## Con

- Idea
    - 全面了解之后，我一点都不满意，放弃主修 [[C++]]，否定该决定

- Con
    - 不适合 产品实现
        - 非常适合「性能优化」「用作 binding」
        - 非常不适合「全栈」「产品设计」
        - 生态全面偏底层（面向过程、算法、业务实现），数据处理生态极其繁荣，除了机器学习比不过 [[Python]]，[[C++]] 毫无疑问是地表最强
        - web/mobile 生态差的可怜，只能跟 [[C]] [[Perl]] 比比，主流后端语言包括新晋 [[Rust]] 都完爆
    - 语法不够现代
        - 即便是 C++17，代码的可读性依旧无法令人满意，加之标准库、第三方库千奇百怪的 API，你不可能写出、见到美观、现代、简洁的代码
    - 工具链只满足基本需求
    - 缺少 杀手锏生态
        - 没有像 [[Spring]] 那样的统治地位的框架
        - 没有像 [[FastAPI]] 那样令人眼前一亮的框架
        - 拿得出手的就只有 [[Qt]] coco2d，但其他语言有更好的选择与生态
        - [[ffmpeg]] 算一个，但其他语言也能用

## Edition

- References
    - [ISO C++ Standards Committee](https://github.com/cplusplus)

## Ecosystem

- References
    - [rigtorp/awesome-modern-cpp](https://github.com/rigtorp/awesome-modern-cpp)
    - [fffaraz/awesome-cpp](https://github.com/fffaraz/awesome-cpp?tab=readme-ov-file)

# 结构化并发

# SP

## Main

## `;`

### `//`

- Idea
    - comment to end of line

### `/**/`

- Idea
    - multi-line comment

# OOP

## `class`

## `struct`

## `template`

## `namespace`

## `#`

- Idea
    - preprocessor

- Objects
    - `#include`
        - 相当于 [[Python]] 的 `from xxx import *`
    - `#define`
    - `#undef`
    - `#if` `#else` `#endif`

## `T`

## =

# FP
