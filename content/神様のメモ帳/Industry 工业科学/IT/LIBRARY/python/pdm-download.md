---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Plugin/PDM
  - flag/LANGUAGE/Python
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
pip: pdm-download
github: pdm-project/pdm-download
---

- Alternatives
    - 请配合 [[pdm-wheel]] 一起使用

- Idea
    - A PDM plugin to download all packages in a lockfile for offline use

- Installation
    - `pdm self add pdm-download`

- Examples
    - 离线部署
    - 请跟 [[pdm-wheel]] 一起使用，因为 [[pdm-download]] 只是从 [[PyPI]] 下载，对于那些只有 sdist 的依赖，有可能无法安装。这时候就要用 [[pdm-wheel]] 来生成 wheel
    - `pdm build`
        - 1st deps
        - generate sdist and wheels to `./dist/`
    - `pdm download -d ./dist`
        - 3rd deps
        - download sdist and wheels
    - `pdm self add pdm-wheel`
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
