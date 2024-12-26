---
aliases:
- "java command"
- JVM
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE
---

## Brief

- References
    - 

- Installation
    - 

- Configuration
    - 

- Environments
    - `CLASSPATH`
        - 对标 [Python 的 PYTHONPATH](Python Command)
        - 可被 `-classpath` 命令行选项覆盖

- Data
    - 

- UI
    - 

- Idea
    - 执行字节码文件（不一定是 [[Java|Java]]，还可以是 [[Kotlin|Kotlin]] 生成的字节码）

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Limitation
    - 

- Test
    - 

- Description
    - 

## CLI

```bash
java command
Usage:
    java <class> [args]
    java -jar <file.jar> [args]
    java [options]

Options:
    -? -h -help
    -version -showversion

    -jar <file.jar> [args]

    -cp -classpath --classpath <dir01[:dir][:jar][:zip]...>
        - *nix 下，路径分隔符为 `:`
        - Windows 下，路径分隔符为 `;`

Examples:
    java -classpath . HelloWorld "arg01" "arg02"
        # Excute `main` method of `HelloWorld` class in `HelloWorld.java` file

```
