---
tags:
- Label/Industry-工业科学/IT/Specification/RFC
---

[PEP3333 (Part 1) -- 为什么需要 WSGI | SinHub's Blog](https://sinhub.cn/2017/10/pep3333-in-chinese-part-one/)

[PEP3333 (Part 2) -- WSGI 规范概述 | SinHub's Blog](https://sinhub.cn/2017/10/pep3333-in-chinese-part-two/)

[PEP3333 (Part 3) -- WSGI 规范细节 | SinHub's Blog](https://sinhub.cn/2017/10/pep3333-in-chinese-part-three/)

[PEP3333 (Part 4) -- WSGI 的实现说明(完.) | SinHub's Blog](https://sinhub.cn/2017/10/pep3333-in-chinese-part-four/)

[Web 应用 & 框架 — The Hitchhiker's Guide to Python](https://pythonguidecn.readthedocs.io/zh/latest/scenarios/web.html)

[一篇文章把 Python 里的 WSGI 给彻底搞明白了](https://iswbm.com/126.html)

[所谓 WSGI - 掘金](https://juejin.cn/post/6844904202825646093)

[所谓 ASGI - 掘金](https://juejin.cn/post/7074746028699680805)

[WSGI 是什么，看完一定懂 - FooFish](https://foofish.net/python-wsgi.html)

[Python WSGI Interface | 小猴子jerry](https://monkeyjerry.top/post/wsgi/)

[区分wsgi、uWSGI、uwsgi、php-fpm、CGI、FastCGI - DevOps在路上 - 博客园](https://www.cnblogs.com/FLY_DREAM/p/15635690.html)

[uwsgi协议 — uWSGI 2.0 文档](https://uwsgi-docs-zh.readthedocs.io/zh_CN/latest/Protocol.html)

[一篇就弄懂WSGI、uwsgi和uWSGI的区别 – VeinFu的技术博客](https://veinfu.github.io/%E6%8A%80%E6%9C%AF%E5%8D%9A%E5%AE%A2/2019/06/27/%E4%B8%80%E7%AF%87%E5%B0%B1%E5%BC%84%E6%87%82WSGI-uwsgi%E5%92%8CuWSGI%E7%9A%84%E5%8C%BA%E5%88%AB/)

[LNMP架构与uwsgi协议 - 墨天轮](https://www.modb.pro/db/237313)

[程序员 - 搞不清FastCgi与PHP-fpm之间是个什么样的关系 - SegmentFault 思否](https://segmentfault.com/q/1010000000256516)

[PHP学习系列 -- CLI、CGI、FastCGI、php-fpm学习_PHP_ydm东方旭日的专栏-CSDN博客](https://blog.csdn.net/ydm19891101/article/details/79512660)

[CGI、FastCGI和PHP-FPM关系图解 – 歪麦博客](https://www.awaimai.com/371.html/amp)


- Idea
    - [[WSGI]] Server == [[HTTP]] Server
    - Python 程序想要对外提供 HTTP 服务，必须实现 HTTP/TCP/UDP etc 协议，自己负责连接的管理。问题是每次开发新的 Python 应用都得重新搞一次，为了避免重复工作、提高兼容性，弄出了一套接口（WSGI）来专门管理这事。而所有的 Web Framework，几乎无一例外全部都已经帮你实现了这套接口，于是开发者不需要关心如何对接 Nginx etc web server，只需专注于提供哪些内容即可

- Fundamentals
    - 就如同「迭代器」「生成器」「可迭代对象」是接口，「WSGI」也可以看作「接口」，实现了接口的对象，才能称为「WSGI Application」「WSGI Server」

- Client
    * E.g. `Browser`
- Reverse Proxy
    * E.g. `Nginx`
    * E.g. `Apache`
- HTTP Server
    - Web Server (or say Middleware)
        * E.g. WSGI Server
            * E.g. `Gunicorn`
            * E.g. `uWSGI`
        * E.g. Servlet
            * E.g. `Tomcat`
            * E.g. `JSP`
        * E.g. FasterCGI Server
            * E.g. `php-fpm`
            * E.g. `Spawn-fcgi`
        * E.g. CGI Server
            * E.g. `php-cgi`
    - Web Application (or called Web Framework)
        * E.g. `Django`
        * E.g. `Flask`
        * E.g. `Spring Boot`
- Cache
- DB

P.S. JSP 可看作一种特殊的 Servlet，jsp主要用来写前端页面，servlet主要用来装载业务逻辑代码，不过 JSP、ASP 早就凉了，Servlet 现在还好好的


Python需要使用nginx + WSGI 提供静态页面访问，和高并发
php 需要使用 nginx + fastcgi 提供高并发
java 需要使用 nginx + tomcat 提供 web 服务

CGI 是个协议，语言无关，各个语言实现 CGI 于是就走了不同的 CGI Server，例如 php-cgi

FastCGI 是为了解决 CGI 的设计缺陷而出现的协议，基本功能跟 CGI 一样，语言无关，同样有着各个语言的实现，例如 php-fpm、S

WSGI 是 Python Web App 独有的协议。简单来说就是将一个完整的 http server 拆分成独立的两部分：wsgi server、web app。wsgi 负责 TCP 连接、接收 http 请求、响应，web app 负责生成响应内容。在未拆分之前，二者同属于一个 python 程序，二者是两个 python 对象，相互调用与数据交换都依托于 python 数据类型，简单直接。但拆分之后，变成了两个独立程序，二者之间通信的协议就是 wsgi。

那么，最大的问题是，为什么要将一个完整的 http server 拆分成独立的两部分呢？

主要是为了开发方便。如果不拆分，开发者每写一个新的程序，都要从头实现管理 TCP 连接、处理 http 请求、发送响应、支持高并发、性能优化这些繁琐且与业务无关的事。写多了就会想着尽可能复用代码来处理 http 相关的任务，于是出现了各种各样、互不兼容的解耦方案，就如同早期 python 有着各种打包方案一样。PEP 333 PEP 3333 就提出倡议：统一解耦的方式、二者各自的功能（模型）、提出解耦以后二者之间的通信协议，这个通信协议就是 wsgi。

上述问题在所有语言都存在，wsgi 只解决了 Python 的问题，其他语言用不了 wsgi。

Django Flask 在 WSGI 的模型中被定义为 Web App，但模型中的 Web App 是无法处理 http 请求的，Django 为什么又能直接通过 http 访问呢？

Django 确实是 Web App，它能作为 http server 是因为它还内置了一个简易的 wsgi server，仅为了方便开发者调试，它提供 wsgi server 不是叫你直接在生产环境中将 Django 作为完整的 http server，而是仅用于测试，毕竟这个简易的 wsgi server 性能不是很好，还得搭配专门的 wsgi server

自从WSGI被开发出来以后，许多其它语言中也出现了类似接口。

uwsgi同WSGI一样是一种通信协议。

而uWSGI是实现了uwsgi和WSGI两种协议的Web服务器。

要注意 WSGI / uwsgi / uWSGI 这三个概念的区分。

为什么有了uWSGI为什么还需要nginx？因为nginx具备优秀的静态内容处理能力，然后将动态内容转发给uWSGI服务器，这样可以达到很好的客户端响应。
