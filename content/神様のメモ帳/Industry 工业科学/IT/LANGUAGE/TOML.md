---
tags:
  - flag/MachineLanguage/ExchangeFormat/Hierarchical
  - Label/Industry-工业科学/IT/Language
---

[TOML: 简体中文 v1.0.0](https://toml.io/cn/v1.0.0)

[TOML: Tom's Obvious Minimal Language](https://toml.io/en/)


```toml
TOML
Examples:
    str01 = "gdm257"
    str02 = """
Hello World"""
    int01 = 257
    int01 = +257
    int01 = -257
    int02 = 65_536
    non_negative_int01 = 0b111    # 二进制非负整数
    non_negative_int02 = 0o777    # 八进制非负整数
    non_negative_int03 = 0xfff    # 十六进制非负整数
    float01 = 3.14
    float01 = +3.14
    float01 = -3.14
    float02 = 314e-2
    float02 = 0.314e1
    float03 = inf    # 正无穷，被算作浮点数
    float03 = +inf    # 正无穷，被算作浮点数
    float03 = -inf    # 负无穷，被算作浮点数
    float04 = nan
    float04 = +nan
    float04 = -nan
    bool = true
    bool = false
    list01 = ["gdm257", 257, 3.14, true, [0, 1], {"k1": 0, "k2": 1}]
    list01 = [
        "gdm", 257,
        {
            "name": "gdm257",
            "age": 257
        }
        3.14,
    ]
    # list02 等价于 json 的一个数组
    [[list02]]    # 数组里的第 1 个元素，该元素必须是字典（dict/table）
    key = value
    ...
    ...
    [[list02]]    # 数组里的第 2 个元素，该元素必须是字典（dict/table）
    key = value
    ...
    ...
    [[list02]]    # 数组里的第 3 个元素，该元素必须是字典（dict/table）
    key = value
    ...
    ...
    [[a.b.c.d]]    # d 是 c 的属性，值为 List[dict]
    key = value
    ...
    ...
    dict01 = {"k1": 0, "k2": 1}
    dict01 = {
        "key01": "gdm",
        "key02": 257,
        "name": "gdm257",
        "age": 257,
        "p01": 3.14,
        "pa": [0, 1, 257, 3.14],
        "hda": {"k1": 0, "kk": 2}
    }
    [dict02]
    key = value
    ...
    ...
    [dict02]
    key = value
    ...
    ...
    [dict02.dict_key]  # dict_key 是 dict02 里的一个键，值为一个字典
    key = value
    ...
    ...
    [a.b.c.d]  # 以此类推，d 是 c 的属性，值为字典
    key = value
    ...
    ...

Desciption:
    * TOML 规范化的 INI.
    * TOML 跟 JSON 和 YAML 根本没法比，也就能欺负欺负 INI 了.
    * 不得不说 INI 的 section 那套真的反人类，友好个屁，一点也不直观.

Statements:
    * # 注释
    * foo = "bar"  # 行尾注释
    * <key> = <value>

Key Types:
    * 字符串
        - 键名只能是字符串.
        - 键名只允许使用 [A-Za-z0-9_-] 大小写字母、数字、下划线、短横线.

Value Types:
    * 字符串
        * "基本字符串"
            - 转义序列
                - \\    反斜杠 \
                - \t    tab
                - \r
                - \n    人类使用的换行符
                - \b    backspace
                - \"    "双引号 in 双引号对
                - \uHHHH    支持的 Unicode 字符有限 (U+HHHH)
                - \UHHHHHHHH    经典的 UTF32 (U+HHHHHHHH)
        * """多行字符串"""
            - 紧跟头部三引号的换行符会被忽略.
            - 相当于 Python 的三引号字符串.
    * 整数
    * 浮点数
    * 布尔值
    * 坐标日期时刻
    * 各地日期时刻
    * 各地日期
    * 各地时刻
    * 数组
    * 内联表
    - 不指定值是非法的.

```