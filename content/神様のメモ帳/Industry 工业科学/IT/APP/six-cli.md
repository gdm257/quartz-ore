---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Download
---

```bash
go get github.com/Mrs4s/six-cli
或者
wget https://github.com/Mrs4s/six-cli/releases/download/V0.0.6-alpha/six-cli_V0.0.6-alpha_windows_amd64.zip
wget https://github.com/Mrs4s/six-cli/releases/download/V0.0.6-alpha/six-cli_V0.0.6-alpha_linux_amd64.tar.gz
tar -zxvf six-cli_V0.0.6-alpha_linux_amd64.tar.gz
cp six-cli /usr/local/bin/six-cli
chmod +x /usr/local/bin/six-cli

可以不使用shell模式，程序是支持six-cli download /xxx/xxx.file 这种调用方式的

guest@six-pan:/$ login   #然后按提示操作即可
mrs4s@six-pan:/$ cd target  # 进入子目录
mrs4s@six-pan:/target$ cd /target/sub/test  # 以完整路径切换目录
mrs4s@six-pan:/target/sub/test$ cd ..  # 返回上一层
mrs4s@six-pan:/target/sub$ cd ../../  # 向上返回N层
mrs4s@six-pan:/$ pwd

mrs4s@six-pan:/$ down file  # 下载文件
mrs4s@six-pan:/$ down dir  # 下载文件夹
mrs4s@six-pan:/$ down /dir/file  # 通过绝对路径下载文件
mrs4s@six-pan:/$ mkdir dir  #在当前目录创建文件夹
mrs4s@six-pan:/$ mkdir /test/dir  #根据绝对路径创建文件夹
mrs4s@six-pan:/$ rm file -y  #删除文件/文件夹
mrs4s@six-pan:/$ rm file1 file2 dir -y  #删除多个文件/文件夹
mrs4s@six-pan:/$ cksum file1 file2 #获取文件hash信息
mrs4s@six-pan:/$ pw file #预览文件

mrs4s@six-pan:/$ ls  # 列出当前目录所有对象
dir1    dir2    file1    file2
mrs4s@six-pan:/$ ls -d  # 按文件夹过滤
dir1    dir2
mrs4s@six-pan:/$ ls /target  # 列出目标目录所有对象
dir1    file1
mrs4s@six-pan:/$ ls /target -R  # 遍历列出子目录对象 (鉴于负载考虑不递归子目录)
.:
dir1    file1
./dir1:
test1    test2
mrs4s@six-pan:/$ ls -a  # 输出文件详细信息
序号  创建时间             文件大小  文件名
0     2019-01-01 00:00:00 100.00GB  dir1


```

