---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Read
---

```bash
apt install gdu
scoop install -g gdu

gdu /path/to/scan
-d, --show-disks        #Show all mounted disks
--enable-gc        #牺牲速度低内存运行，适合 VPS。超过 300w 文件也请使用
--output-file        #Export all info as JSON
--input-file
--log-file
--ignore-dirs "[/proc,/dev,/sys,/run]"        #Absolute paths to ignore (separated by comma)
--ignore-dirs-pattern        #ignore paths by regular pattern (separated by comma)
--ignore-from        #ignore paths by regular patterns from file
--enable-profiling        #Enable collection of profiling data and provide it on http://localhost:6060/debug/pprof/
--non-interactive        #only print stats, do not start interactive mode
--no-progress        #Do not show progress in non-interactive mode
--summarize        #show only total usage in non-interactive mode


gdu --ignore-dirs-pattern '.*[abc]+' /home
gdu --ignore-dirs '/sys,/proc' /home
gdu --non-interactive --no-progress /home    #do not show progress, useful when using its output in a script

gdu -o- / | gzip -c >report.json.gz   # write all info to JSON file for later analysis
zcat report.json.gz | gdu -f-         # read analysis from file


```