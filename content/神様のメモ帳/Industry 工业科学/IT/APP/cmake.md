---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/C
  - flag/LANGUAGE/CPP
  - flag/APP/DevOps/PackageManagement
---

[为cmake添加make install自定义命令 · 零壹軒·笔记](https://note.qidong.name/2021/11/cmake-uninstall/)

CMakeList.txt 相当于 setup.py、requirements.txt、pyproject.toml


当你的程序只有一个原文件，用 gcc 就可以编译。但是对于一个有着复杂依赖关系的项目，直接使用 gcc 完成编译几乎是不可能的事情，毕竟人总会出错。make 就是为了解决「编译整个项目」而诞生的。make 创造了一门 DSL 专门用来定义如何处理依赖，也就是那天书般的 Makefile。Makefile 这玩意即不由雅也不好用，最重要的是容易出错、兼容性差，谁都不敢乱碰。但编译还是要编译的，于是有人就捣鼓除了 cmake 这个工具专门用来生成 Makefile。cmake 一定程度上缓解了使用 Makefile 的痛苦，但是随着包的不断增长，使用 cmake 本身也变得痛苦，Makefile 与 CMakeLists.txt 相继成为程序员们烧香拜佛的玄学。但 C/C++ 的包管理方案几十年来始终没有统一，`make` `cmake` `qmake` `autotools` `msbuild` `bazel` `ninja` `conan` `vcpkg` `xmake`……轮子数量绝对比前端多。哪怕是个像样的 package 仓库都没有，一片混乱。至少在「工具链」尤其是「依赖管理」这件事上，「去中心化」绝对是个错误的决定。Perl 最先证明了这点，于是 Java/Python/JS/Rust/Go 更是完美证明，并且一个比一个统一。2023 了，C/C++ 包管理依旧是一片狼藉，我的评价是，`cmake` `make` 数量太多了，历史惯性，不得不用，但如果可以，我选 `xmake`.
