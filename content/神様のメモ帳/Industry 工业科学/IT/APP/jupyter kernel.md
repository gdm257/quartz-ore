---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/LANGUAGE
    - flag/LANGUAGE/Python
---

[Jupyter kernels · jupyter/jupyter Wiki](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels)

[NII-cloud-operation/sshkernel: SSH Kernel for Jupyter](https://github.com/NII-cloud-operation/sshkernel)

[takluyver/bash_kernel: A bash kernel for IPython](https://github.com/takluyver/bash_kernel)

[Calysto/matlab_kernel: Jupyter Kernel for Matlab](https://github.com/calysto/matlab_kernel)

[imatlab/imatlab: A Jupyter kernel for MATLAB.](https://github.com/imatlab/imatlab)

[vors/jupyter-powershell: PowerShell language kernel for Jupyter](https://github.com/vors/jupyter-powershell)

[kylebarron/stata_kernel: A Jupyter kernel for Stata. Works with Windows, macOS, and Linux.](https://github.com/kylebarron/stata_kernel)

[ticoneva/pystata-kernel: Jupyter kernel for Stata based on pystata](https://github.com/ticoneva/pystata-kernel)

[vatlab/sos: SoS workflow system for daily data analysis](https://github.com/vatlab/SOS)

[yunabe/tslab: Interactive JavaScript and TypeScript programming with Jupyter](https://github.com/yunabe/tslab)

[winnekes/itypescript: ITypescript is a typescript kernel for the Jupyter notebook (A modified version of IJavascript)](https://github.com/winnekes/itypescript)

[interactive/NotebookswithJupyter.md at main · dotnet/interactive](https://github.com/dotnet/interactive/blob/main/docs/NotebookswithJupyter.md#running-the-net-interactive-jupyter-kernel)

[jupyter-xeus/xeus-cling: Jupyter kernel for the C++ programming language](https://github.com/jupyter-xeus/xeus-cling)

[XaverKlemenschits/jupyter-c-kernel: Minimal Jupyter C kernel](https://github.com/XaverKlemenschits/jupyter-c-kernel)

[evcxr/evcxr_jupyter at main · google/evcxr](https://github.com/google/evcxr/tree/main/evcxr_jupyter)

[gopherdata/gophernotes: The Go kernel for Jupyter notebooks and nteract.](https://github.com/gopherdata/gophernotes)


```bash
Description:
    *  

jupyter kernelspec command:
    list
    remove <name>

Kernels:
    * SSH
        - pip install sshkernel
        - python -m sshkernel install --user
            [--user|--sys-prefix]
    * Bash
        - pip install bash_kernel
        - python -m bash_kernel.install
            [--user|--sys-prefix]
    * Matlab
        - 推荐
        - pip install matlab_kernel
        - python -m matlab_kernel install --user
        - python -m matlab_kernel.check
        - cat ~/.jupyter/matlab_kernel_config.py
    * Matlab
        - pip install imatlab
        - python -m mimatlab install
            [--user|--sys-prefix]
    * Kotlin
        - pip install kotlin-jupyter-kernel
        - python -m kotlin_kernel add-kernel
            [--name name]
            [--jdk jdk_home_dir]
            [--set-jvm-args]
            [--jvm-arg arg]*
            [--env KEY VALUE]*
            [--force]
    * Stata
        - 推荐
        - pip install stata_kernel
        - python -m stata_kernel.install
        - vim ~/.stata_kernel.conf
            - [stata_kernel]
            - stata_path = D:/Portable/Stata16MP/StataMP-64.exe
    * Stata >= 17
        - pip install pystata-kernel
        - python -m pystata-kernel.install
            [--sys-prefix]
            [--prefix]
            [--conf-file]
    * SoS (bash, R, python, matlab)
        - pip install sos sos-pbs sos-notebook
        - python -m sos_notebook.install
        - pip install sos-r sos-matlab sos-python sos-bash
    * PowerShell
        - pip install powershell_kernel
        - python -m powershell_kernel.install
    * TS + JS
        - npm install -g tslab
        - tslab install [--python=python]
    * TS
        - npm install -g itypescript
        - its --install=local
    * JS
    * .NET (C#, F#, PowerShell, JavaScript, SQL, KQL, Mermaid)
        - dotnet tool install -g Microsoft.dotnet-interactive
        - dotnet interactive jupyter install
    * Rust
        - cargo install evcxr_jupyter
        - evcxr_jupyter --install
    * C
        - 不支持 Windows
    * C++
        * 不支持 Windows
    * Go
        - 不支持 Windows


```
