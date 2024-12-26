---
aliases:
- str
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinDataType
- flag/Library/DataAccessLayer/Implement__/OOP/str
---

## Brief

[string --- 常见的字符串操作 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/string.html#module-string)

[stringprep --- 因特网字符串预备 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/stringprep.html#module-stringprep)

[文本处理服务 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/text.html)

[codecs --- 编解码器注册和相关基类 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/codecs.html#standard-encodings)


### Literal

```python
s01: str = "gdm257"
s01 = 'gdm257'
s01 = 'gdm257\'s gdm257'
s01 = "\"gdm257\" is gdm257"  # 除了引号转义，单引号、双引号无任何区别
s01 = 'hello\nworld'  # TODO: 反斜杠序列

s02 = r'gdm257'  # 不能有单引号，转义也不行
s02 = r"gdm257"  # 不能有双引号，转义也不行

s03 = """hello
world"""  # 除了「\\」「\"」，其余都是字面值，包括换行符
s03 = '''hello
world'''  # 除了「\\」「\'」，其余都是字面值，包括换行符
s03 = '''I'm gdm257.'''
s03 = '''I\'m gdm257.'''  # 单引号转义是可选的，只要无歧义
s03 = """I say "go"."""
s03 = """I say \"go\"."""  # 双引号转义是可选的，只要无歧义

s04 = f'{s03}'
s04 = f'''hello
world'''
s04 = f'{expr}'

s05 = 'hello, '    r'world'
s05 = f'{str01}'    f'{str02}'    'abc'
s05 = f'{str01}'
    f'{str02}'
  'foo'
      r'bar'
s05 = rf'\1{str01}'

s06: str = u'gdm257 \uf8d1'

b01: bytes = b'gdm257'

```


### str

```python
str built-in type
API:
    * Immutable.
    .__init__()
        * 强制类型转换.
        * 空字符串 ''.
    .encode()
    .replace()
    .strip()
    .lstrip()
    .rstrip()
    .upper()
    .lower()
    .format()
    .join(__iterable: Iterable[str]) -> str
        * 迭代拼接为字符串
    .splitlines() -> List[str]
        * 按行分割
    .split()
    .rsplit()
    .lsplit()
    .format_map()

    .isupper()
    .islower()
    .isascii()
    .isalpha()
    .isalnum()
    .isnumeric()
    .isdigit()
    .isdecimal()
    .isspace()
    .isidentifier()
    .istitle()
    .ispritable()
    .startwith()
    .endwith()
    .count()

```

### bytes

```python
bytes built-in type
API:
    


```


### 格式化

[7. Input and Output — Python 3.11.1 documentation](https://docs.python.org/3/tutorial/inputoutput.html)

[f-string - 2. 词法分析 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings)

[PEP 498 – Literal String Interpolation | peps.python.org](https://peps.python.org/pep-0498/)

[python字符串格式化输出 - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/10139325.html)

- Format Specifiers
    - [PEP 3101 – Advanced String Formatting | peps.python.org](https://peps.python.org/pep-3101/)

```python

* 无脑选 format()，如果确定不在 Python 2 运行，则选择 f-string.
* f-string 语法跟 format() 基本一样.
* f-string 可看作 format() 的子集.
* f-string 最低也要 Python 3.6.
* 不推荐 % 占位符.
* 在 `{}` 里索引字典时，不要对键名加引号，加了会报错 KeyError.


// f-string (Python 3.6+)
user = 'gdm257'
group = 'gdm257'
groups = ['root', 'wheel']
uid = 1000

s03 =   f'Username: {user}\nGroup: {group}'
s04 = f'''Username: {user}
Group: {group}
UID: {uid}'''



// format()

template = '''一个例子讲完 format()
Username: {0}
Username: {0}
Username: {0}
Username: {1}
Username: {2}
Username: {3}
Username: {4}
Username: {5}
Username: {username}
Username: {username}
Username: {6}
1st group: {7}
1st group: {8[0]}
1st group: {9[first]}
1st group: {groups[0]}
1st group: {groups_dict[first]}
2nd group: {8[1]}
2nd group: {9[second]}
2nd group: {groups[1]}
2nd group: {groups_dict[second]}
UID: {10}
UID: {11:d}
UID: {11:f}
UID: {11:2f}
UID: {uid}
UID: {uid:d}
UID: {uid:f}
UID: {uid:3f}
'''

format(template, ...)
template.format(
    user,  # 位置参数 0
    user,  # 位置参数 1
    user,  # 位置参数 2
    user,  # 位置参数 3
    user,  # 位置参数 4
    user,  # 位置参数 5
    user,  # 位置参数 6
    groups[0],  # 位置参数 7
    groups,  # 位置参数 8
    {'first': groups[0], 'second': groups[1]},  # 位置参数 9
    uid,  # 位置参数 10
    uid,  # 位置参数 11

    # 命名参数
    username=user,
    groups=groups,
    groups_dict={'first': groups[0], 'second': groups[1]},
    uid=uid,
)
# P.S. 在 `{}` 里索引字典时，不要对键名加引号，加了会报错 KeyError.


s05 = 'Username: {}\nGroup: {}\nUID: {}'.format(user,
                                                group,
                                                uid)
s05 = '''Username: {}
Group: {}
UID: {}'''.format(user,
                  group,
                  uid)

s06 = 'Username: {0}\nGroup: {1}\nUID: {2}'.format(user,
                                                   group,
                                                   uid)  # 位置参数
s06 = '''Username: {0}
Group: {1}
1th group: {2[0]}
2nd group: {3[1]}'''.format(user,
                            group,
                            groups,
                            groups)


s07 = '''Username: {username}
Group: {group}
1st group: {groups[0]}
2nd group: {groups[1]}
UID: {uid}'''.format(username=user,
                     group=group,
                     groups=groups,
                     uid=uid)  # 命名参数。支持索引。推荐写法


s08 = '''Username: {username}
Group: {0}
Groups: {groups}
UID: {1}'''.format(group,
                   uid,
                   username=user,
                   groups=', '.join(groups))  # 位置参数、命名参数混用




// % 占位

s01 = r'Username: %s' % user
s01 = r'UID: %d' % (uid)
s01 = '''Username: %s
Group: %s
Groups: %s''' % ( user, group, ', '.join(groups) )

s02 = '''
Username: %(username)s
UID: %(uid)d
''' % {'username': user, 'uid': uid}  # 推荐写法

# TODO: % 转换说明符
%s    字符串对象
%c
%d    整数对象の十进制表示
%u    整数对象の十进制表示
%o    整数对象の八进制表示
%x    整数对象の十六进制表示
%X    整数对象の十六进制表示（大写）
%f    浮点数对象
%2f    浮点数对象の保留 2 位小数表示
%e    浮点数对象の科学记数法表示
%E    同 %e
%g    %f 和 %e 的简写
%G    %F 和 %E 的简写
%p    对象の十六进制地址表示

```

### 拼接

```python
f'{str01}{str02}'
str01 + str02

f'{str01}'    f'{str02}'

f'{str01}'
    f'{str02}'

```


### 分割

```python
list01: List[str] = 'g,d,m,2,5,7'.split(',')


```

### 合并

```python
list01 = ['g', 'd', 'm', '2', '5', '7']
str01 = ','.join(list01)  # 'g,d,m,2,5,7'
str01 = ''.join(list01)  # 'gdm257'


```

### 搜索替换

### 强制类型转换

[Python program to convert a character to ASCII code and vice versa | AsciiTable.xyz](https://www.asciitable.xyz/python-program-convert-string-character-to-ascii-code/)


```python

ord()
chr()
bin()
oct()
hex()
str()
repr()
bytes()
bytearray()


str(257) == r'257'
str(3.14) == r'3.14'
bytes('abc', 'utf-8') == b'abc'
bytearray('abc', 'utf-8')  # typing.Iterable
bin(5) == r'0b101'
oct(11) == r'0o13'
hex(99) == r'0x63'
chr(65) == 'a'
chr(0) == r'\x00'
chr(1114111) == r'\U0010ffff'
ord('a') == 65
ord(chr(1114111)) == 1114111





r'reg/\exp'

'%03d' % 9 == '009'

>>>"{} {}".format("hello", "world")    # 不设置指定位置，按默认顺序
'hello world'

>>> "{0} {1}".format("hello", "world")  # 设置指定位置
'hello world'

>>> "{1} {0} {1}".format("hello", "world")  # 设置指定位置
'world hello world'

print("网站名：{name}, 地址 {url}".format(name="菜鸟教程", url="www.runoob.com"))


template = '''本行如果直接换行，那就是以换行符开头

    所见
        即所得。

「\」需要转义成「\\」
「{」需要转义成「{{」
「}」需要转义成「}}」


尾行要不要换行想清楚'''

b = r'world'
a = f'hello {b}'
print(a)  # __str__
print('%s' % a)  # __str__: 'hello world'
print('%r' % r)  # __repr__: "'hello world'"
str(a)  # __str__
repr(a)  # __repr__
a  # __repr__
c = eval(repr(a))
c == a


class Entry:

    def __str__(self):
        return 'abc'

    def __repr__(self):
        return "'abc'"

    def __unicode__(self):
        return 'abc'

    def __bytes__(self):
        return b'abc'


__str__ 强调可读性
__repr__ 强调准确性，最好可以用 eval 执行，即 eval(repr(obj))
__unicode__ 需要 return str 类型，但调用时会自动返回为 unicode 类型.
如果只有 __repr__，那么 __repr__ 也相当于 __str__，repr() 与 str() 等价.
如果没有定义 __repr__，那么 repr() 将会展示默认的定义.
str()
repr()
unicode()
bytes()

```

## Ecosystem

### `__str__()`

### `__repr__()`

- The `__repr__` method is particularly helpful at the the Python REPL and when debugging.
