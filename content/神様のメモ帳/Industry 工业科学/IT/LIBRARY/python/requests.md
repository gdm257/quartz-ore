---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/Network
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[http - Fetch a file from a local url with Python requests? - Stack Overflow](https://stackoverflow.com/questions/10123929/fetch-a-file-from-a-local-url-with-python-requests)

[wangshunping/read_requests: python requests 源码阅读，学习更pythonic 的python代码写法。](https://github.com/wangshunping/read_requests)


```python
requests 的 ssl & proxy 问题太烦人，换 httpx 了。api 与 requests 一模一样。


import requests as req

req.get('url', params=a, headers=b, proxies=c, stream=True, timeout=0.2)
req.packages.urllib3.disable_warnings()  # 隐藏警告

# stream 参数为 True 的时候 requests 并不会立刻开始下载，只有在调用 iter_content 或者 iter_lines 遍历内容时下载


    url_decode = 'file:///E:/[MUSIC]/0-Angel Beats/07 Unjust Life.flac'
    url = 'file:///E:/%5BMUSIC%5D/0-Angel%20Beats/07%20Unjust%20Life.flac'

import requests

s = requests.utils.unquote(url)



r = req.get('http://127.0.0.1:2557/v2/libraries')
r
r.status_code
r.apparent_encoding
r.enconding = 'unicode_escape'
ISO-8859-1
unicode_escape
unicode-escape
utf-8
utf8
gb2312
gbk
gb18030
latin-1
notepad++ 里能查到很多编码字符集
     UTF-8
    UTF-16BE/UTF-16LE
    UTF-32BE/UTF-32LE/X-ISO-10646-UCS-4-34121/ X-ISO-10646-UCS-4-21431 
    ascii

s = str(r.contect, 'utf-8')  # 手动解码响应内容

json.dumps(r, encoding="utf-8", ensure_ascii=False)

guess = chardet.detect(r.content)['encoding']
r.content.decode(guess)
r.text.encode('utf8')
t.encode('unicode-escape').decode('utf-8')

t = r.text
j = r.json
c = r.content  # 二进制响应 bytes型，可以用来获取文件、图片

# 当你收到一个响应时，Requests 会猜测响应的编码方式，用于在你调用 Response.text 方法时对响应进行解码。Requests 首先在 HTTP 头部检测是否存在指定的编码方式，如果不存在，则会使用 charade 来尝试猜测编码方式。
# 只有当 HTTP 头部不存在明确指定的字符集，并且 Content-Type 头部字段包含 text 值之时， Requests 才不去猜测编码方式。在这种情况下， RFC 2616 指定默认字符集必须是 ISO-8859-1 。Requests 遵从这一规范。如果你需要一种不同的编码方式，你可以手动设置 Response.encoding 属性，或使用原始的 Response.content。
# Requests 自动解压缩的 gzip 编码的响应体，并在可能的情况下尽可能的将响应内容解码为 unicode.



# 报错
  raise ValueError("check_hostname requires server_hostname")
ValueError: check_hostname requires server_hostname

先把 windows 系统代理关了再试试。

it seems to implement an custom SSL/TLS cert validation in the file \Python\envs\arcgispro-py3\lib\ssl.py. Therefore it does not trust the custom root CA certificate used by Fiddler.

fiddler抓包工具要在requests请求参数中加上：verify=False


解决措施2 将urllib3插件的版本降低就可以
pip install requests==2.20
或者使用下面的命令降低版本：
pip install urllib3==1.25.8

这个其实跟选用的python版本的关系不大，主要原因是因为每次使用 pip install 命令下载插件的时候，下载的都是最新的版本，比如下载requests插件，它会自动的将依赖的urllib3这个插件也安装，然后依赖的插件版本太高，就导致了这个报错的问题。





    raise SSLError(e, request=request)
requests.exceptions.SSLError: HTTPSConnectionPool(host='baidu.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1076)')))

the quickest fix is setting verify=False:
requests.get('https://example.com', verify=False)


实测 fiddler 抓包方法 1：
proxies = {
    'http': 'http://127.0.0.1:2599',
    'https': 'http://127.0.0.1:2599'
}
req.get(url, verify=False, proxies=proxies)

方法 2:
cafile = 'cacert.pem' # http://curl.haxx.se/ca/cacert.pem
r = requests.get(url, verify=cafile)

方法 3:
pip install -U requests[security]
大致原理就是不再使用 requests 自己的 CA 了。
会安装三个security相关的package: pyopenssl cryptography idna。requests和urllib3的源码，发现确实使用了pyopenssl。具体是怎么用的，还没有来得及分析。


```
