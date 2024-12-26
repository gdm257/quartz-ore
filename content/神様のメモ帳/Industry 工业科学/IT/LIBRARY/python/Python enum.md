---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/DataAccessLayer/Implement__/OOP/Enum
---

## API

[Enum HOWTO — Python 3.11.1 documentation](https://docs.python.org/3/howto/enum.html)

[enum --- 对枚举的支持 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/enum.html)

- Dependencies
    * Python 3.11 introduces StrEnum, EnumCheck, ReprEnum, FlagBoundary, property, member, nonmember, global_enum, show_flag_values.

- Con
    - NOT Support rename member
        - If Enum value with `enum.auto` should be 
    - NOT Support change value
        - If Enum value saved in database, 

- Objects
    - `@enum.unique`
    - `enum.Enum` inheritance
        - Attributes
            - Enum member value can be any type, but 3rd library may not support many types
            - Enum supports custom *class* method
        - Caller
            1. `isinstance(Member.A, Member)`
            2. `Member.A is Member.A`
            3. `Member.A.name == 'A'`
            4. `Member.A.value == 1`
        - `enum.IntEnum`
            - where members are also (and must be) ints
        - `enum.StrEnum`
            - `auto()` results in the lower-cased member name as the value
            - Python 3.11+
        - `enum.Flag`
            - _Flag_ 成员支持位运算符 `&` (_AND_), `|` (_OR_), `^` (_XOR_) 和 `~` (_INVERT_)
        - `enum.IntFlag`
    - `enum.auto()`
        - 更推荐手动赋值，因为 auto value 会受 member name、order 影响，如果要存数据库，value 是不能变的
        - 如果将 `auto()` 与手动指定的值混用则必须十分小心
        - get value from Enum's `_generate_next_value_()` method (can override)
        - `auto()` 整数从 `1` 开始

```python
from enum import Enum, IntEnum, StrEnum
from enum import Flag, IntFlag
from enum imoprt auto, property

@unique
class Member(Enum):
    A = auto()  # 默认从 1 开始
    B = 2
    C = 3.14
    D = 'DDD'  # 值的类型没有任何限制
    # E = 'DDD'  # Raise ValueError, @unique 不允许相同的值
    F = auto()
    G = auto()
```
