---
aliases:
  - Python random
tags:
  - flag/LANGUAGE/Python
  - flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

```python
random standard library
Examples:
    random.random()  # [0.0, 1.0) 保留 16 位小数
    random.randrange(0, 100)  # 从 range 随机一个数
    random.randrange(0, 100, 1)
    random.randrange(0, 100, 2)

API:
    .choices(seq) -> item
        seq
            * 对象必须实现 __len__ 和 __getitem__.
        * 随机返回一个序列里的 item.
    .random()


```