---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/Platform/Windows独占
    - flag/APP/Process
---

[stbrenner/SilentCMD: SilentCMD executes a batch file without opening the command prompt window.](https://github.com/stbrenner/SilentCMD)


```cmd
SilentCMD command
Usage:
    SilentCMD <bat-file [args]> [options]

Examples:
    SilentCMD c:\DoSomething.bat
    SilentCMD c:\MyBatch.cmd MyParam1 /LOG:c:\MyLog.txt
    SilentCMD c:\MyBatch.cmd /LOG+:c:\MyLog.txt
    SilentCMD c:\MyBatch.cmd /DELAY:3600 /LOG+:c:\MyLog.txt

Options:
   /? :: Show help
   /LOG:file :: Output status to LOG file (overwrite existing log)
   /LOG+:file :: Output status to LOG file (append to existing log)
   /DELAY:seconds :: Delay the execution of batch file by x seconds

Description:
    * SilentCMD 用来运行 .bat 脚本，以隐藏 dos 窗口的方式.
    * SilentCMD executes a batch file without opening the command prompt window.
    * If required, the console output can be redirected to a log file.

```