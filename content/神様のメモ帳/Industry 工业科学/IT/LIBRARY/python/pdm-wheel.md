---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/APP/Plugin/PDM
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
github: GabDug/pdm-wheel
pip: pdm-wheel
---

- Installation
    - `pdm self add pdm-download`

- Con
    - 不支持 跨平台
        - 每个包一个 `.whl`，当前平台可用（CPU Arch、Python version etc）
        - 可用 [[pdm-download]] 下载所有平台的文件

- Examples
    - 离线部署
    - `pdm build`
        - 1st deps
        - generate sdist and wheels to `./dist/`
    - `pdm wheel -w ./dist`
        - 3rd deps
        - generate wheels
    - `pdm export -o requirements.txt`
    - venv
        - `mkdir -p /new/folder/to/deploy`
        - `cp -r dist requirements.txt -t /new/folder/to/deploy/`
        - `cd /new/folder/to/deploy`
        - `python -m venv ./`
        - `./Scripts/activate.ps1`
        - `pip install -r requirements.txt --no-index --find-links=./dist --no-deps`
        - `pip install <1st-module-name> --no-index --find-links=./dist`
