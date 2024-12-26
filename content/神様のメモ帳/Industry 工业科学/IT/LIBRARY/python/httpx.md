---
tags:
- flag/LANGUAGE/Python
- flag/Protocol/HTTP
- Label/Industry-工业科学/IT/Library/Plugin/Awaitable
- flag/Library/DataAccessLayer/Implement__/IO/Network
pip: httpx
---

[API Reference Developer Interface - HTTPX](https://www.python-httpx.org/api/)

[Exceptions - HTTPX](https://www.python-httpx.org/exceptions/)

[Advanced Usage - HTTPX](https://www.python-httpx.org/advanced/)

[Async Support - HTTPX](https://www.python-httpx.org/async/)

[Requests Compatibility - HTTPX](https://www.python-httpx.org/compatibility/)

[nuno-andre/httpx-file: Transport adapter fort httpx to allow file:// URI fetching in the local filesystem](https://github.com/nuno-andre/httpx-file)


```python
httpx library
Desciption:
    * httpx requests aiohttp 是 Python 最热的 http client.
    * httpx 支持 HTTP 2.0，但必须使用 Client.
    * httpx 支持同步，相关对象及其 API 基本无缝兼容 requests.
    * httpx 支持异步，相关对象及其 API 基本无缝兼容 aiohttp.
    * httpx 没有 requests 的 CA/SSL、proxy 天坑.
    * httpx 唯一不如 requests 的就是极限性能.
    * httpx 唯一不如 aiohttpx 的就是极限性能.
    * httpx 还是个 cli，我可以好好学学代码复用.

API:
    import httpx
    from httpx import Client, Response


    # 异常
    httpx.RequestError
    httpx.HTTPStatusError


    # 类
    httpx.AsyncClient
        .get()
        .post()
        .put()
        .delete()
        .head()
        .options()
        .patch()
        .request()
        .send()
        * 兼容 aiohttp 的 ClientSession

    httpx.Client
        .__init__(
            proxies: {
                'http://': 'http://127.0.0.1:1080',
                'https://': ,
                'all://': ,
                'all://domain.com': ,
                'all://*domain.com': ,
                'all://*foo.com': None,  # Don't use proxy
            }
            * httpx 的 proxies 写法不兼容 requests.
            * requests 的 proxies 写法是 'http' 而非 'http://'.
        )
        .get()
        .post()
        .put()
        .delete()
        .head()
        .optinos()
        * 兼容 requests.Seesion
        * Client 支持 TCP 复用，避免重复握手.
        * Client 必须手动关闭，要么 .close()，要么 with 上下文管理器.
    httpx.Request
    httpx.Response
    httpx.BasicAuth
    httpx.DigestAuth
    httpx.Auth
        * 自定义认证.


    # 函数
    httpx.get()
    httpx.post()
    httpx.put()
    httpx.patch()
    httpx.delete()
    httpx.head()
    httpx.options()

    httpx.stream()
        * 用于大文件下载，防止挤爆内存.
        * 原理是懒加载，每迭代一次，才请求一段数据.

```
