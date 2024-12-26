---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Compiler/ParserGenerator/Left-to-right_Leftmost_Derivation
  - flag/LANGUAGE/CPP
  - flag/LANGUAGE/CSharp
  - flag/LANGUAGE/Dart
  - flag/LANGUAGE/Go
  - flag/LANGUAGE/Java
  - flag/LANGUAGE/JS
  - flag/LANGUAGE/PHP
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/Swift
  - flag/LANGUAGE/TypeScript
homepage: https://www.antlr.org
github: antlr/antlr4
extensions:
  - .g4
commands:
  - antlr4
  - antlr4-parse
  - grun
pip: antlr4-tools
go: github.com/antlr4-go/antlr
aliases:
  - ANother Tool for Language Recognition
entrypoints:
  - org.antlr.v4.Tool
  - org.antlr.v4.gui.Interpreter
  - org.antlr.v4.gui.TestRig
keywords:
  - grammar
versions:
  - v4
---

## Brief

- References
    - [ANTLR 4 Documentation](https://github.com/antlr/antlr4/blob/master/doc/index.md)
    - [ANTLR 4 简明教程](https://wizardforcel.gitbooks.io/antlr4-short-course/content/)
    - [ANTLR 解析原理 - 中国科学技术大学](http://staff.ustc.edu.cn/~yuzhang/compiler/2019f/lectures/allstar.pdf)

- Users
    - Groovy
    - Jython
    - Hibernate
    - Apache Cassandra
    - WebLogic Server

- Installation
    - [antlr4/doc/getting-started.md at master · antlr/antlr4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
    - by [[pip]]
        1. `pip install antlr4-tools`
        2. `antlr4`
    - jar
        1. Install [[Java|JDK 11]]
        2. Download and add `antlr-4.x.x-complete.jar` to `CLASSPATH`
        3. [[Linux]]
            1. `alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.2-complete.jar:$CLASSPATH" org.antlr.v4.Tool'`
            2. `alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.13.2-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'`
        4. [[Windows]]
            1. `doskey antlr4=java org.antlr.v4.Tool $*`
            2. `doskey grun =java org.antlr.v4.gui.TestRig $*`

- Fundamentals
    - [[ANTLR]] is a tool written in [[Java]] that translates your grammar to a *parser/lexer* in [[Java]] (or other target language)
    - [[ANTLR]] is also a *runtime library* needed by the generated parsers/lexers

## CLI

- Fundamentals
    - `antlr4` == `java -cp ./antlr-*-complete.jar org.antlr.v4.Tool`
    - `antlr4-parse` == `org.antlr.v4.gui.Interpreter`
    - `grun` == `org.antlr.v4.gui.TestRig` (deprecated, use `antlr4-parse`)

- Examples
    - `vim Hello.g4`
    - `antlr4-parse Hello.g4 r -tokens -trace -tree -gui r.txt`
    - `antlr4 Hello.g4 && javac -cp ./antlr-4.13.2-complete.jar Hello*.java`

## Syntax

- Syntax
    - `// Comment`

- Keywords
    - `grammar`

- Ecosystem
    - Name
        - 词法规则：大写字母开头 E.g. `ID`
        - 语法规则：小写字母开头 E.g. `expr`
