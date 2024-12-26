---
tags:
- Label/Industry-工业科学/IT/License
---

- Idea
    - LGPL = [[MIT]] if (不修改源码 and 不使用静态链接库) else [[GPL]]

- Fundamentals
    - 「使用」不必多说，任何形式的使用都算使用，动态链接库也算，网页前后端也算
    - 「发布」有一点需要注意，如果只是在**网页前端**和 **API 后端**中使用了 GPL 库，那么前后端完全不需要开源，因为这不算发布
    - 「动态链接库」：例如你有个 [[Python|Python]] 软件，如果它使用了发布在 PyPI 上的 LGPL 库作为依赖，那么根据 LGPL 的规定，如果你的 Python 软件只是链接了 LGPL 库的动态库，那么该软件本身不需要开源。这是因为 Python 通常在运行时链接库，所以 Python 程序通常使用的是动态库 [[ChatGPT]]

- Examples
    - [[纯纯写作]] 使用了 [borisbrodski/sevenzipjbinding](https://github.com/borisbrodski/sevenzipjbinding) 这个 LGPL 库，其遵守协议的方式为，在 `软件 - 设置 - 开源许可证` 写明了该库的名称、GitHub URL、使用的协议

- Description
    - 「自用」「公司内部使用」可无视开源协议，因为根本就没发布和对外提供服务
