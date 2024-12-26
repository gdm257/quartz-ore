---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/File/Compression
commands:
  - zip
---

```bash
for i in `find ./* -type d`;do zip $i.zip ./$i/*;done
for i in `find ./* -type d`;do zip $i.zip `find $i -type f`;done
for i in `find ./* -type d`;do zip $i.zip `find $i | grep -v "$i$"`;done

zip -r <起个名>.zip    <文件夹>


```