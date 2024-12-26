---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/CRUD/Create
---

```bash
cp command
Usage:
    cp [options] <src>    <dst> -T    重命名模式
    cp [options] <src>... -t <dst>    丢进去模式
    cp [options] <src>... <dst>    (without -t/-T) 有歧义，极度不推荐

Examples:
    cp     file 'file-bak'         -T  # 重命名 file，但是拷贝而非移动
    cp -r  dir  'non-existed-dir/' -T  # 重命名 dir，但是拷贝而非移动
    cp -r  dir  'non-existed-dir'  -T  # 重命名 dir，但是拷贝而非移动
    cp -rd README.md 2018/ 2019/ -t '3D/'  # 丢进文件夹
    cp -rd VCB-6/. VCB-7/. '[VCB-Studio]/' # 合并文件夹 (特殊的丢进去)

Options:
    --help
    -r -R    递归
             使src可以是个目录
             src为文件也可使用，无副作用
    -t    copy all SOURCE arguments into DIRECTORY
          声明dst是个目录，并且指明工作模式为「丢进去模式」
    -T    treat DEST as a normal file
          声明dst是个文件，避免file与dir工作效果的差异
    -d    保留链接，默认是复制链接所指向的文件
    -n    不覆盖同名文件 (默认 同名文件夹会合并，同名文件会覆盖)
    -f    强制、覆盖
    -l    复制为硬链接
    -s    复制为软连接，Windows 下无效
    -p    保留文件属性，如所有者、时间戳
    -a    相当于 -prd
    P.S. 强烈建议，
         丢进去模式 加上选项 -t
         重命名模式の 重命名file 加上选项 -T
         重命名模式の 重命名dir 加上选项 -T
         既能避免歧义与意料之外的错误，
         又能增强可读性.
         千万不要不加 -t/-T，除非你要利用这份歧义，
         没有 -t/-T 你看一句 cp 得想半天，
         有 -t/-T 一眼就读懂了.
         实在不想加 -t/-T 也许，dst 是目录时可以通过 / 结尾来省略 -t/-T
    P.S. 强烈建议 -n 能加就加，因为默认覆盖同名文件真的很危险.

Source:
    dir/.    属于 多src + 丢进去模式.
             实现「合并文件夹」的效果.
             它会被 cp 解析为「'dir/'里的所有文件」，即 多src.
             这些文件会被放进 dst-existed-dir[/]，即 丢进去模式.
             P.S. 对 cp 来说，「dir/.」与「dir/」是完全不同的.

Working Mode:
    1. 丢进去模式 -t
        * 识别 & 使用:
            * 多src 一定是 丢进去模式 (注意 dst 必须是已存在目录即可)
            * 单src
                * dst 为 existed-dir[/] 一定是 丢进去模式
                * 其他 dst 一律为 重命名模式 (还可能是报错)
        * 效果:
            把 src 放到 dst 文件夹里，称为「丢进去模式」
    2. 重命名模式 -T
        * 效果:
            我将 mv a.txt b.txt 这样的工作方式称为「重命名模式」
            只不过 cp 不会删除 src 罢了
        * 识别 & 使用:
            * 单src 才可能是重命名模式
            * 重命名模式 的识别详见「丢进去模式」
            * 使用详解:
            * 多src
                多src 一定是 丢进去模式
                多src 的 dst 只能是 existed-dir[/]
                这些 src 全被放进目标目录下.
            * 单src
                src-file
                    dst-existed-dir[/]    丢进去模式
                    dst-non-existed-dir/    报错
                    dst-file    重命名模式
                        dst-non-existed-file    重命名模式
                        dst-existed-file    重命名模式 (默认覆盖)
                src-dir
                    dst-existed-dir[/]    丢进去模式
                    dst-non-existeted-dir/    重命名模式
                    dst-non-existeted-file    重命名模式
            P.S. file
                     existed-file
                     non-existed-file
                 dir
                     existed-dir[/]
                     non-existed-dir/
    3. 歧义 without -t/-T
        * cp 只有两种工作模式，丢进去模式、重命名模式.
        * 缺少 -t/-T 造成歧义 i.e. cp 可能以重命名模式工作，可能丢进去.

```