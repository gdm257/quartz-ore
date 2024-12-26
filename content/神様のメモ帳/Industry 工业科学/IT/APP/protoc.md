---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text
commands:
  - protoc
---

## protobuf

```bash
pip install protobuf

ProtoBuf(Protocol Buffers)是一种跨平台、语言无关、可扩展的序列化结构数据的方法，可用于网络数据交换及存储。

ProtoBuf == JSON == XML


ProtoBuf 的消息是在idl文件(.proto)中描述的。
# 生成文件
protoc --java_out=./java/ ./proto/helloworld.proto
protoc --go_out=./go/ ./proto/helloworld.proto
protoc --go_out=./go/ -I proto ./proto/helloworld.proto
protoc --javanano_out=ignore_services=true:./javanano/ -I proto ./proto/garlic.proto
--cpp_out=OUT_DIR
--csharp_out=OUT_DIR
--js_out=OUT_DIR
--kotlin_out=OUT_DIR
--objc_out=OUT_DIR
--php_out=OUT_DIR
--python_out=OUT_DIR
--ruby_out=OUT_DIR


如果多个proto文件之间有互相依赖，生成某个proto文件时，需要import其他几个proto文件，这时候就要用-I来指定搜索目录。如果没有指定 –I 参数，则在当前目录进行搜索。

```
