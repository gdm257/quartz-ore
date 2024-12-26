---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text/Implement__/Serialization/Relational
github: multiprocessio/dsq
scoop: dsq
commands:
  - dsq
---

SQL for CSV/TSV/XLS/JSON/JSONL/YAML


```bash
dsq command
Usage:
    dsq <files> <query>
    dsq -s <file_type> <query> < a.csv

Description:
    * dsq 使用 SQL 查询文件，结果（默认）输出为 JSON.
    * dsq 支持 SQLite/CSV/TSV/Excel，固定结构的 JSON/YAML.
    * dsq 论简单不如 q，论强大不如 miller，我觉得没机会用.
    * file 在 query 中被当成 table 使用，第N个文件写作 `{N-1}`.


```