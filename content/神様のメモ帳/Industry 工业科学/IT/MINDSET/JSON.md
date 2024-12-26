---
tags:
  - flag/MachineLanguage/ExchangeFormat/Hierarchical
  - Label/Industry-工业科学/IT/Language
---

## JSON

[JSON.org](https://www.json.org/json-en.html)

[字符集与编码（四）——Unicode | 肖国栋的i自留地](https://xiaogd.net/md/%e5%ad%97%e7%ac%a6%e9%9b%86%e4%b8%8e%e7%bc%96%e7%a0%81%ef%bc%88%e5%9b%9b%ef%bc%89-unicode)

[JSON 序列化中的转义和 Unicode 编码 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1625557)


```json
{
    "string": "gdm257",
    "num01": 257,
    "num02": -7,
    "num03": 3.14,
    "num04": 1/3,    TODO
    "bool01": true,
    "bool02": null,
    "list": ["gdm", 257, true, false, null, [], {}],
    "object": {}
}

object key:
    key 必须是字符串.

value 可以是:
    字符串
    数字
    true
    false
    列表    完全等价于 Python 的 list
    对象    无序字典，完全等价于 Python 的 dict
    null

string:
    * 使用双引号包裹.
    * 双引号里的所有字符皆为字面量，除了双引号、反斜杠.
    * 反斜杠序列:
        * \"    转义双引号"
        * \\
        * \/
        * \b
        * \f
        * \n
        * \t
        * \uHHHH
            * 实质就是 UTF-16 的做法.
            * 1 个 U+0000-U+FFFF 的 Code Point 用 "\uHHHH" 表示.
            * 1 个 SP 的 Code Point 用 "\uXXXX\uYYYY" 表示.
            * UTF-16 用 2 或 4 bytes 表示 1 个 Unicode Code Point.
            * 2 bytes 的 UTF-16 直接等于 Code Point 的数值大小.
            * 4 bytes 的 UTF-16 使用代理对的乘积来定位码点.

number:
    * A number is very much like a C or Java number,
      except that the octal and hexadecimal formats are not used.
    * 官方画的语法树有点复杂，但我还是人肉解析了.
        * 正整数
        * 负整数
        * 小数
        * 分数 E.g. 1/3
        * 负数
            * 任意非负数加上「-」前缀变为负数
            * 负号后边不要加空格
            * E.g. -257/233
        * 科学记数法
            * 任意非科学记数法的数字加上「e257」后缀变为科学记数法
            * e/E 前边不要加空格
            * {e,E}[+|-][\d]+
            * E.g. 2.57e2
            * E.g. 3.14e0
            * E.g. 314e-2
            * E.g. -314e-2
        * JOSN 不支持小括号，别乱加

```