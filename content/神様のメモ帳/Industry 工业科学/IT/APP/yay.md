---
tags:
  - flag/Platform/Linux独占
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Download
  - flag/APP/DevOps/PackageManagement
frontmatter-as-page:
  - yay
commands:
  - yay
---

```bash
yay -P -g #查看配置
yay -c  # 卸载所有无用的依赖。类比 apt-get autoremove
yay 是 AUR 管理工具，上述所有 pacman xxx 命令，均可替换成 yay xxx 执行
rm -rf ~/.cache/yay


sudo sed -i "s/#Color/Color/g" /etc/pacman.conf # 开启 pacman 和 yay 的彩色输出
sudo sed -i "s/PKGEXT='.pkg.tar.xz'/PKGEXT='.pkg.tar'/g" /etc/makepkg.conf #设置构建包时不进行压缩.默认情况下 makepkg 构建 AUR 包时会启用压缩，构建完了安装又要再解压一次，如果只是自己机器上使用的话，实在是没必要（而且大软件包压缩很慢）。
AUR 镜像
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
yay 默认源为 aur.archlinux.org
yay --aururl "https://aur.archlinux.org" --save
话说 aur 换源真的有必要吗？AUR 社区是没有国内源的，即便是清华源，国内速度也慢的不行，根本不能用（都是这样的，不用怀疑），唯二的解决办法就是代理或肉身翻墙

```
