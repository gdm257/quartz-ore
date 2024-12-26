---
aliases:
  - net/http
tags:
  - flag/LANGUAGE/Go
  - Label/Industry-工业科学/IT/Library/StandardLibrary
  - flag/Library/DataAccessLayer/Implement__/IO/Network
go: net/http
---

- Fundamentals
    - [一文读懂Go Http Server原理 - 捉虫大师 - 博客园](https://www.cnblogs.com/zhuochongdashi/p/17047719.html)
    - [一文带你搞懂Golang net/http包的实现原理net/http包的web工作原理大致就是如下四个部分组成了：端口 - 掘金](https://juejin.cn/post/7127535913483108360)
    - [Go 语言 HTTP 标准库的实现原理 | Go 语言设计与实现](https://draveness.me/golang/docs/part4-advanced/ch09-stdlib/golang-net-http/)

- API
    - `http.Handler interface`
        - `ServeHTTP(ResponseWriter, *Request)`
        - 给你一个 `http.ResponseWriter`，你只管往里面写入数据，就能返回给 [[HTTP]] client，这样一个请求就算处理好了
    - `http.ResponseWriter interface`
        - 无需自己实现，用 [[Go http|net/http]] 自带的就好
    - `http.HandlerFunc()`
        - 除了直接用作 Handler，更是 Middleware 的具体实现原理
    - Utils
        - [[HTTP]] Server
            - `http.Error()`
            - `http.NotFound()`
            - `http.Redirect()`
            - `http.SetCookie()`
            - `http.ServeContent()`
            - `http.ServeFile()`

- Philosophy
    - Onion Model (Middlewares)

```go
import "net/http"

var resp, err = http.Get("https://bangumi.moe")
if err != nil {
    log.Fatal(err)
}
defer resp.Body.Close()
if resp.StatusCode != 200 {
    log.Fatalf("status code error: %d %s", resp.StatusCode, resp.Status)
}

doc, err := goquery.NewDocumentFromReader(resp.Body)
if err != nil {
    log.Fatal(err)
}

doc.Find(".s-hotsearch-content .hotsearch-item").Each(func(i int, s *goquery.Selection) {
    content := s.Find(".title-content-title").Text()
    fmt.Printf("%d: %s\n", i, content)
})
```
