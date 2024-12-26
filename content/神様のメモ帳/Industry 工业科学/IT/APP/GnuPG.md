---
aliases:
  - GPG
  - OpenPGP
  - gpg
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text
ugly-cli: yes
commands:
  - gpg
---

## Brief

- Alternatives
    - [[enc]]

- References
    - [GPG终极指南（加密/签名） - 马在路上 - 博客园](https://www.cnblogs.com/machao/p/5938744.html)

- Pro
    - Supported Algorithms
        * Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
        * Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH, CAMELLIA128, CAMELLIA192, CAMELLIA256
        * Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
        * Compression: Uncompressed, ZIP, ZLIB, BZIP2

- Description:
    * GnuPG 是一个实现了 OpenPGP 标准的软件，简称 GPG
    * GnuPG 用于 非对称加解密
    * GnuPG 用于 数字签名
    * GnuPG 难点在于 OpenPGP 密钥对的管理
    * OpenPGP 密钥、SSH 密钥、SSL 证书，它们是几种完全不同的密钥，无法转换，互不兼容
    * 子密钥对，类似于 SSL 的证书链关系，子密钥经过主密钥签名

## CLI

```bash
gpg command
Usage:
    gpg <subcommand> [args]

Subcommands:
    -h --help
    --version

    # 签名 & 验证
    -s --sign <file>
        -o --output <file>.gpg
        * 生成 经过签名的文件
        * 包含文件内容
        * 二进制格式
    --clear-sign <file>
        -o --output <file>.asc
        * 生成 经过签名的文件
        * 包含文件内容
        * 内嵌 bytes 的文本格式
    -b --detachi-sign <file>
        -o --output <file>.sig
            * 二进制格式
        -o --output <file>.asc
            * 如果指定了 -a --armor 选项，生成的是 .asc 文件
        -a --armor
            * 纯文本格式的签名
        * 生成 签名
        * 不包含文件内容，单纯只是签名，体积很小
    --verify <signed_file>
        - gpg --verify file.asc
        - gpg --verify file.gpg
        * 验证 签名
    --verify <sig_file> <file>
        - gpg --verify file.sig file
        - gpg --verify file.asc file
        - gpg --vefify file.sig
        - gpg --vefify file.asc
            - 签名文件与原文件同名的话，原文件可省略
        * 验证 签名

    # 加密 & 解密
    -e --encrypt <file>
        -o --output <file>.gpg
        * 加密文件
    -d --decrypt
        * 解密文件
    -c --symmetric <file>
        * 对称加密文件

    -k --list-key --list-keys [id]
        --keyid-format LONG
            * 可用于给 git config 指定密钥
        * list keys
    --fingerprint [id]
        * list keys & fingerprints
        * 公钥指纹
    --list-signatures [id]
        * list keys & signatures

    # 密钥管理
    --export [id]
        * 导出主公钥
    --export-secret-keys <id>
        --armor --output ./all-pri-keys
        * 导出包括指定主私钥の所有私钥
    --export-secret-subkey <id>
        * 导出子私钥
    --export-secret-subkeys <id>
        * 导出子私钥
    --import public.gpg
        * 导入公钥
    --delete-keys <id>
        * 从本机删除指定 公钥
    --delete-secret-keys <id>
        * 从本机删除指定 私钥

    --change-passphrase
        * 修改 私钥口令
        * 私钥可以明文存储，也可以加密存储
        * 明文存储就是不设置口令
        * 加密存储就是设置了口令
    --edit-key <id> [commands]
        * 进入 gpg shell

    --full-generate-key
        * 交互式生成 密钥对
            - Kind of key
                - RSA and RSA (default)
                - DSA and Elgamal
                - DSA (sign only)
                - RSA (sign only)
                - Existing key from card
            - Keysize
            - Expire
            - Real name
            - Email address
            - Comment
            - Passphrase
    --gen-key
        * 简化版 交互式生成 密钥对
            - Real name
            - Email address
            - Passphrase
    --gen-revoke <ID>
        * 生成撤销证书


Options:
    -v --verbose
    -n --dry-run
    -i --interactive
        * prompt before overwriting
    -a --armor
        * 输出为 ASCII 文本
    -o --output <file>
        * 输出到 文件

// 准备
gpg -a -o ./all-pri-subkeys.txt --export-secret-subkeys <id>    Export all private keys about subkeys
gpg -a -o ./some-pri-subkeys.sub --export-secret-subkeys AAAAAAAAAAAAAAAA! BBBBBBBBBBBBBBBB!    导出部分子密钥的私钥，别忘了感叹号!
gpg -a -o ./all-pubkeys.txt --export <id>    导出包括主密钥、子密钥在内的所有公钥
-a    导出为纯文本格式，不加 -a 则二进制
gpg --import <file>    导入公钥或私钥
gpg --send-keys <id> --keyserver hkp://subkeys.pgp.net    上传公钥到 KeyServer
gpg --edit-key <id>    进入 gpg shell



想要生成子密钥，我们需要使用 GPG 选项 --edit-key + 密钥名称编辑密钥，然后输入 GPG 命令 addkey，经过引导完成子密钥的新建，最后要输入命令 save，才会保存。

--edit-key 进入后，输入 trust 来修改密钥的信任度
--edit-key 进入后，就能看到子密钥的 id

口令：1 个 gpg 只有 1 个口令，但 1 个 gpg 可以有多个子密钥对

--export-secret-keys 密钥名称
~/.gnupg/openpgp-revocs.d/ 默认的吊销证书


gpg --list-keys 列出公钥
gpg --list-keys --keyid-format SHORT
gpg --list-keys --keyid-format LONG
gpg --armor --output public-key.txt --export <用户ID> 导出公钥
gpg --recv-key '<fingerprint>' 从服务器下载公钥
gpg --import <密钥文件> 将他人的公钥或者你的其他密钥输入系统
gpg --verify demo.txt.asc demo.txt 验证签名
gpg --keyserver hkp://subkeys.pgp.net --search-keys <用户ID> 搜索公钥服务器
gpg --decrypt demo.en.txt --output demo.de.txt 解密
gpg --recipient [用户ID] --output demo.en.txt --encrypt demo.txt 加密
gpg --clearsign demo.txt 签名
gpg -K #若sec 后面带 #，表示我们安装的是子密钥，并且主密钥不在本地








gpg: signing failed: No secret key
如果设置了 `git config set commit.gpgSign=true`，那么 `git commit` 时 git 会自动调用 gpg，如果 gpg 没有存储对应用户的私钥，那就提交失败。




别看密钥格式乱七八糟的，其实核心有且只有一个：OpenPGP。gpg 命令是 OpenPGP 标准的实现。所以也可以将 gpg 当成核心。

什么时候需要管理密钥对？
常用的密钥对主要有 2 种：SSH Keys & OpenPGP Keys
SSH Keys 相关工具：ssh-keygen
OpenPGP Keys 相关工具：gpg


> GnuPG 是实现了 OpenPGP 标准的工具，简称 GPG。通常 GnuPG 与 OpenPGP 可以混用。


SSH Keys
GitHub 账户名下的 SSH 公钥；    仅要求保存好 SSH 私钥文件
~~Linux 账户名下的 SSH 公钥；~~    等价于 GitHub 账户名下的 SSH 公钥，因为我使用脚本自动添加 GitHub 账户名下的公钥到 Linux 账户
~~Nginx SSL 证书；~~    无需管理

OpenPGP Keys
GitHub 账户名下的 GPG 公钥；    仅要求保存好 GPG 私钥文件
~~git commit 签名；~~    等价于 GitHub 账户名下的 GPG 公钥
~~使用 duplicity etc 非对称加密软件；~~    反正我不用
~~发送 Email 附带的公钥；~~    反正我不用

一句话，
备份好 PC 的 `~/.ssh` 就等于管理好了 SSH Keys；
备份好 PC 的 gpg 数据库就等于管理好了 GPG Keys。

> SSH keys and GnuPG (actually, OpenPGP) keys are completely different, even though both protocols can use RSA key pairs.


> Commit 只能由 OpenGPG Keys 签名，而不能用 SSH Keys。


常见 SSH private key 文件格式

- `-----BEGIN OPENSSH PRIVATE KEY-----` OpenSSH 格式
- `-----BEGIN RSA PRIVATE KEY-----` PEM 格式
- `---- BEGIN NSSSH PRIVATE KEY ----` .pri User Key Files 格式


常见 SSH public key 文件格式

- `ssh-rsa xxxxxxxxxxxxxxxxxxxx` OpenSSH 格式
- `---- BEGIN SSH2 PUBLIC KEY ----` IETF SECSH 格式
- `2048 xx xxxxx rsa 2048-xxxx` SSH1 格式


常见 GPG public/private key 文件格式

- xxx.asc



```

## Data

- Objects
    - User ID
        * ID
        * Email
        * Hash

- Data
    * `~/.gnupg`
    * 如果想清除所有密钥，直接删除 `~/.gnupg` 即可
    * `~/.gnupg`
        * gpg 命令在 bash 所管理的密钥对（推荐 `mklink /d` 到 `$SCOOP/apps/gpg/current/home/`）

```bash
~/.gnupg/
├── S.gpg-agent
├── S.gpg-agent.browser
├── S.gpg-agent.extra
├── S.gpg-agent.ssh
├── openpgp-revocs.d
│   └── 6A34491D718ACAA135A9E1DAF576ADD5734788EB.rev
│   └── XXXX.rev
├── private-keys-v1.d
│   ├── 27737AB1EE57C3E989E5BF1EA2D9AE7AFE02D160.key
│   └── FCF02CD3E59391A727E79DE1150E133DC0AA19FF.key
│   └── XXXX.rev
│   └── XXXX.rev
├── pubring.kbx
├── pubring.kbx~
└── trustdb.gpg
```
