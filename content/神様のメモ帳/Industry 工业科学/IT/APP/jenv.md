---
tags:
- flag/LANGUAGE/Java
- Label/Industry-工业科学/IT/APP/Command/CLI
---

```bash
jEnv == Java 版 pyenv/nvs

对 CentOS 7 无效，待解决.


// Linux
git clone https://github.com/jenv/jenv.git ~/.jenv
echo '''
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
''' >> ~/.bashrc
exec $SHELL -l
jenv doctor    # 验证是否可用 output: [OK]    No JAVA_HOME set
#jenv enable-plugin export    # 全局 JAVA_HOME (.barch 自动使之生效)
#jenv disable-plugin export    # export 插件性能差，影响 shell 体验
exec $SHELL -l
wget https://github.com/AdoptOpenJDK/openjdk8-upstream-binaries/releases/download/jdk8u342-b07/OpenJDK8U-jdk_x64_linux_8u342b07.tar.gz
wget https://github.com/AdoptOpenJDK/openjdk11-upstream-binaries/releases/download/jdk-11.0.16%2B8/OpenJDK11U-jdk_x64_linux_11.0.16_8.tar.gz
unar OpenJDK*.tar.gz
rm OpenJDK*.tar.gz


// Usage
jenv add /path/to/jdk
jenv add /path/to/jdk1.8.0_281.jdk/Contents/Home
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home
jenv versions
jenv shell 1.8    临时生效
jenv local 1.8    当前目录永久生效
jenv global 11    全局永久生效
jenv version


jenv 原理真的很简单，设置 `JAVA_HOME`.
jenv 缺点是没有下载功能，得自己下载解压 JDK E.g. github.com/AdoptOpenJDK

```
