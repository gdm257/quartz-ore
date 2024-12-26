---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/LANGUAGE
    - flag/LANGUAGE/Python
---

[JupyterHub — JupyterHub 3.1.0 documentation](https://jupyterhub.readthedocs.io/en/stable/index.html)

[单机多用户 JupyterLab 环境搭建](https://gist.github.com/tanbro/a94bfa4a552381f599e7e6b551ccadcf)

[Application configuration — JupyterHub 3.1.0 documentation](https://jupyterhub.readthedocs.io/en/stable/api/app.html)

[JupyterLab on JupyterHub — JupyterLab 3.6.0rc0 documentation](https://jupyterlab.readthedocs.io/en/stable/user/jupyterhub.html#jupyterhub)

[jupyterhub/jupyterhub: Multi-user server for Jupyter notebooks](https://github.com/jupyterhub/jupyterhub)


```bash
jupyterhub command
Description
    * jupyter hub 最大的意义在于支持多用户.
    * jupyter hub 是唯一选择 for 多用户 dashboard.
    * jupyter hub 对标 colab，后者可看作 google 自己实现的 jupyerhub.
    * pipx 运行失败，缺少某些包，懒得修，不用了.

Installation:
    * pip install jupyterhub

Usage:
    jupyterhub [options]

Examples:
    jupyterhub --generate-config -f jupyterhub_config.py
    jupyterhub --ip 1.2.3.4 --port 8000

Options:
    --help-all
    --show-config
    --show-config-json
    --generate-config

    -f --config "jupyterhub_config.py"
    --log-file <file>
    --log-level 30
        * 0, 10, 20, 30, 40, 50, 'DEBUG', 'INFO',
        * 'WARN', 'ERROR', 'CRITICAL'
    --ip=""
        * 默认监听本机所有 IP.
    --port 8000
    --url "http://:8000"

Configuration:
    * ./jupyterhub_config.py

```
