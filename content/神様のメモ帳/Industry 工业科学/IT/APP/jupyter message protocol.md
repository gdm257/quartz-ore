---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/LANGUAGE
    - flag/LANGUAGE/Python
---

[Messaging in Jupyter — jupyter_client 8.0.1 documentation](https://jupyter-client.readthedocs.io/en/latest/messaging.html)

[Jupyter工作原理和架构解析 - 知乎](https://zhuanlan.zhihu.com/p/514065007?utm_id=0)

[从消息和可扩展性的角度看待 Jupyter | CodeLab](https://www.codelab.club/blog/2021/04/28/jupyter-message-extension/)

[Making simple Python wrapper kernels — jupyter_client 8.0.1 documentation](https://jupyter-client.readthedocs.io/en/latest/wrapperkernels.html)

[Making kernels for Jupyter — jupyter_client 8.0.1 documentation](https://jupyter-client.readthedocs.io/en/latest/kernels.html)


```

Descriptor:
    * jupyter message protocol 是与 kernel 通信所用的协议.
    * 万变不离其宗，无论出现了多少花里胡哨的软件（Jupyter Notebook App），什么 jupyter-notebook、jupyter-console、jupyter-qtconsole、nbviewer、jupyter-lab、jupyter client、VSCode jupyter 扩展、nteract，
    * 这些 Jupyter Notebook App/Package 本质都是「读取、解析笔记本文件（nbformat 文件），通过 jupyter message protocol 与 jupyter kernel 通信，将文件里的 code cell 发送给 jupyter kernel，等待 jupyter kernel 完成计算并返回结果，最终通过各种方式展示计算结果」。
    * 很容易发现，不同 Jupyter Notebook App，出现差异的只有最后一步，即「如何展示结果」——在命令行里展示的 jupyter-console，伪装成命令行的 jupyter-qtconsole，在浏览器里展示的 jupyter-notebook、jupyter-lab、jupyter-hub，直接生成静态文件的 nbconvert、Desktop GUI 的 nteract……


```
