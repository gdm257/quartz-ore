---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- Label/Industry-工业科学/IT/APP/Server/Service
- flag/LANGUAGE/Python
---

[colab 解压](https://colab.research.google.com/drive/1j2eRCfNc2hUseFqQFhvevhbbfHXhaqRV?usp=sharing)

[colab 运行 shell](https://colab.research.google.com/drive/1QZywh4xiiR8BX14dThVVRaJ3c7hgJcyU)

colab 是谷歌提供的免费的 jupyter 环境，目前来看是在线里数一数二的。

简单地说，Colab 就是 Google 免费提供的 jupyter notebook 云服务，或者你可以理解为一台装了 Jupyter Notebook 的 VPS。我们创建并编写后缀名为 .ipynb 的脚本文件，来让 colab 执行命令（其实 colab 就是个可以运行脚本的 ide）。那么下面就是如何写脚本的问题了：

1. Colab中，在命令前加上感叹号“!”运行的就是 linux 命令
2. colab 工作目录默认在 “/content” 目录下，该目录下只有一个默认建好的“sample_data”文件夹
3. 可以在”Edit>Notebook Settings”中设置笔记本所用的默认硬件，或者”Runtime>Change runtime type”，然后在Hardware accelerator(硬件加速器）一栏选择GPU，然后就可以在Google Colab里使用GPU运行基本的python代码了
4. 在开启GPU的情况下，Colab提供了12.7GB的内存性能，与kaggle中kernel的13GB内存相比相差不大。硬盘有 107GB，但一开始就被用了 31GB，所以实际能用的只有 75GB 左右
5. 每次要执行脚本都要 connect - init - excute - output，退出后清零，类似影子系统，大概
6. 网络不稳定，经常出现断连的情况，每隔一段时间需要切进来点击连接，一旦断连时间过长就会停止运行，等于白跑了
7. Google Collab的菜单中选择了Runtime-> Restart all runtimes，这将清除所有文件

为防止90分钟自动断开，请在浏览器控制台（按F12然后转到Console）中输入以下命令以防止断开。

```bash
function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#connect").click() 
}
setInterval(ConnectButton,60000);
```

!cat /proc/meminfo # 内存大小
!nvidia-smi # 查看显卡硬件信息

授权挂载 GoogleDrive
from google.colab import drive
drive.mount('/content/drive')

有种很简单的方法，直接在 colab 的 code 当作在用 xshell 好了，注意开始那行要加 !，每条命令要用分号分隔，换行跟 bash 一样在行尾加 \，例如

```bash
!cd /content/drive/Shareddrives/loli/test/download;  \
pwd;  \
ls -l;  \
```

下边是搜的：

```bash
%%shell

echo "This is an entire cell interpreted as a shell script"
echo "You don't need to prepend each line with the '!' character"
pwd
ls
```

在线解压
分卷总和最多 70G，因为 colab 硬盘就只有 107G。不过好消息是，我正常用 unrar 命令解压时 xxx.part01.rar，它会一个分卷一个分卷地解压，并且每解压完一个分卷就从缓存中删除来释放空间，也就是只要剩余空间大于每个分卷的大小，就能完成解压。

https://colab.research.google.com/drive/1j2eRCfNc2hUseFqQFhvevhbbfHXhaqRV?usp=sharing
