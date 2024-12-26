---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## od

od 以二进制的方式读取文件内容


### ~~opencc~~

```bash
pip install opencc-python-reimplemented
python -m opencc -h
python -m opencc -c t2s -i my_simplified_input_file.txt -o my_traditional_output_file.txt
```

### ~~openssl~~

```bash
# 生成自签名证书和私钥
sudo openssl req \
  -x509 \
  -nodes \
  -days 365 \
  -newkey rsa:2048 \
  -keyout localhost.key \
  -out localhost.crt

执行后，命令行会跳出一堆问题要你回答，比如你在哪个国家、你的 Email 等等。其中最重要的一个问题是 Common Name，正常情况下应该填入一个域名，自签名可以填 127.0.0.2 或 localhost
```



### ~~otpauth~~

```bash
otpauth -link "otpauth-migration://offline?data=xxxxxx"

output:
otpauth://totp/Google:<name01>?algorithm=SHA1&digits=6&issuer=Google&period=30&secret=<TOTP_Seed01>
otpauth://totp/Google:<name02>?algorithm=SHA1&digits=6&issuer=Google&period=30&secret=<TOTP_Seed02>
...

```
