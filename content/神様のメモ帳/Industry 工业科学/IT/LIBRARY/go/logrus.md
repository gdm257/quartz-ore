---
tags:
  - flag/LANGUAGE/Go
  - flag/Library/DataAccessLayer/Implement__/IO/Logger
  - Label/Industry-工业科学/IT/Library/3rdLibrary
go: github.com/sirupsen/logrus@latest
---

```go
import (
    "github.com/sirupsen/logrus"
    log "github.com/sirupsen/logrus" // 建议使用别名，因为 logrus 完美兼容标准库 log 的 API，迁移很方便
)


var msg = "这是一条日志"

logrus.Trace(msg)
logrus.Debug(msg)
logrus.Info(msg)
logrus.Warning(msg)
logrus.Error(msg)
logrus.Fatal(msg) // 记完日志后会调用os.Exit(1)
logrus.Panic(msg) // 记完日志后会调用 panic()

logrus.WithFields(
    logrus.Fields{
        "anime": "dog",
    }
).Info("一条狗出现了。")
// 效果
// time="2021-02-26T20:42:40+08:00" level=info msg="一条狗出现了。" animal=dog

Logrus鼓励通过日志字段进行谨慎的结构化日志记录，而不是冗长的、不可解析的错误消息。

requestLogger := log.WithFields(log.Fields{"request_id": request_id, "user_ip": user_ip})
requestLogger.Info("something happened on that request")
requestLogger.Warn("something not great happened")


```
