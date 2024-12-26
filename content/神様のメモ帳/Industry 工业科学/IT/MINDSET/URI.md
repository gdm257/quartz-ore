---
tags:
    - Label/Industry-工业科学/IT/Specification/RFC
---

[一个URL编码引发的小插曲 | Lishunyang's Blog](https://blog.lishunyang.com/2020/05/encode-uri.html)

[RFC 3986: Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986#section-2.2)

[程序员都应该知道的URI，一文帮你全面了解 | Lenix Blog](https://blog.p2hp.com/archives/7592)


[[神様のメモ帳/app/AIMP Desktop]] 导入 xspf 歌单时，有些歌曲的 location 解码失败。经过仔细排查，发现是 [[AIMP]] 要求必须对 `(` `)` 小括号进行编码，否则就解码失败。查了查发现，RFC-3986 确实将英文小括号定义为了保留字符，所以 JS 的编码函数 encodeURI 和 encodeURIComponent 背大锅。

RFC-3986
reserved = gen-delims / sub-delims
gen-delims：`:`，`/`，`?`，`#`，`[`，`]`，`@`
sub-delims：`!`，`$`，`&`，`'`，`(`，`)`，`*`，`+`，`,`，`;`，`=`


URI == [[URL]] + [[URN]] + 其他 URI

- [[URL]] 大家都很熟悉了，平时没有注意到的是，URL 指定了「服务器」，依赖于服务器
- [[URN]] 则不会指定服务器，不会依赖特定服务器。最好的例子就是 torrent 里的哈希值，这串哈希值标识了文件，但又没有指定服务器
- 其他 URI……例如 [[DOI]]
