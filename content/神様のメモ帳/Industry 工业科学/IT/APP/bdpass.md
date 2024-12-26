---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
commands:
  - bdpass
---

```bash
百度网盘秒传链接生成工具，支持梦姬标准/PanDownload/BaiduPCS-Go三种格式


$ bdpass 文件路径
# 批量生成
$ bdpass 文件路径A 文件路径B 文件路径C...
# 输出为 PanDownload 格式
$ bdpass -f pdl 文件路径
# 输出为 BaiduPCS-Go 格式
$ bdpass -f pcs 文件路径
std 为梦姬标准（默认）
pdl 为 PanDownload
pcs 为 BaiduPCS-Go


```
