---
aliases:
- Python typing
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinLibrary
- flag/Library/DataAccessLayer/Implement__/OOP/Type
---

## Brief

- References
    - [PEP 585 – Type Hinting Generics In Standard Collections | peps.python.org](https://peps.python.org/pep-0585/)
    - [PEP 612 – Parameter Specification Variables | peps.python.org](https://peps.python.org/pep-0612/)
    - [PEP 591 – Adding a final qualifier to typing | peps.python.org](https://peps.python.org/pep-0591/)
    - [PEP 593 – Flexible function and variable annotations | peps.python.org](https://peps.python.org/pep-0593/)
    - [collections.abc --- 容器的抽象基类 — Python 3.12.2 文档](https://docs.python.org/zh-cn/3/library/collections.abc.html#collections-abstract-base-classes)
    - [Type hinting in modern Python: The Protocol class](https://codebeez.nl/blogs/type-hinting-in-modern-python-the-protocol-class/)
    - [Built-in Types — Python 3.11.1 documentation](https://docs.python.org/3/library/stdtypes.html)
    - [typing —— 类型注解支持 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/typing.html)
    - [流畅的 Python（7）：接口与继承 | fuchencong](https://fuchencong.com/2021/09/12/fluent-python-07/)
    - [Python进阶笔记（四）总结Python中的多态（抽象类、白鹅类型与鸭子类型、猴子补丁） - 知乎](https://zhuanlan.zhihu.com/p/477174854)

- Dependencies
    - [[typing-extensions]] for older python

## Objects

```python
typing standard library
Pythonの对象:
    * object
    * type
    * 元类 type の实例
    * 自定义元类の实例
    * 其他实例

Description:
    * typing 提供了许多抽象基类（Abstract Base Class）.
    * 抽象类、抽象基类、白鹅类型、鸭子类型、猴子补丁
    * collection.abc 的类已通过类似别名的方式迁移到了 typing.
    * register 用于创建虚拟子类.

API:
    from typing imoprt *
    # 这些类型都是鸭子类型，或者说也可以理解为接口
    __all__ = [
    # Super-special typing primitives.
    'Annotated',
    'Any',
    'Callable',
    'ClassVar',
    'Concatenate',
    'Final',
    'ForwardRef',
    'Generic',
    'Literal',
    'Optional',
    'ParamSpec',
    'Protocol',
    'Tuple',
    'Type',
    'TypeVar',
    'Union',

    # ABCs (from collections.abc).
    'AbstractSet',  # collections.abc.Set.
    'ByteString',
    'Container',
    'ContextManager',
    'Hashable',
    'ItemsView',
    'Iterable',
    'Iterator',
    'KeysView',
    'Mapping',
    'MappingView',
    'MutableMapping',
    'MutableSequence',
    'MutableSet',
    'Sequence',
    'Sized',
    'ValuesView',
    'Awaitable',
    'AsyncIterator',
    'AsyncIterable',
    'Coroutine',
    'Collection',
    'AsyncGenerator',
    'AsyncContextManager',

    # Structural checks, a.k.a. protocols.
    'Reversible',
    'SupportsAbs',
    'SupportsBytes',
    'SupportsComplex',
    'SupportsFloat',
    'SupportsIndex',
    'SupportsInt',
    'SupportsRound',

    # Concrete collection types.
    'ChainMap',
    'Counter',
    'Deque',
    'Dict',
    'DefaultDict',
    'List',
    'OrderedDict',
    'Set',
    'FrozenSet',
    'NamedTuple',  # Not really a type.
    'TypedDict',  # Not really a type.
    'Generator',

    # Other concrete types.
    'BinaryIO',
    'IO',
    'Match',
    'Pattern',
    'TextIO',

    # One-off things.
    'AnyStr',
    'cast',
    'final',
    'get_args',
    'get_origin',
    'get_type_hints',
    'is_typeddict',
    'NewType',
    'no_type_check',
    'no_type_check_decorator',
    'NoReturn',
    'overload',
    'ParamSpecArgs',
    'ParamSpecKwargs',
    'runtime_checkable',
    'Text',
    'TYPE_CHECKING',
    'TypeAlias',
    'TypeGuard',
    ]


Examples:

list
List
List[str]
List[int]
List[dict]

tuple
Tuple
Tuple[Any, ...]
Tuple[()]  # 空元组
Tuple[str, ...]  # 任意长度的纯 str 元组
Tuple[int, ...]
Tuple[str, int, float, list, dict]  # 第 1-5 个元素的类型

dict
Dict
Dict[str, int]
Dict[str, str]
Dict[str, dict]

set
Set

Union[int, float]
Union[int, float, str]
int | float  # 高版本新语法
int or float  # 效果不明
Optional[int]
Optional[str]
Union[int, None]

Iterable
Iterable[int]
Iterator
Iterator[int]
Generator

Sequence
Container

Hashable    可哈希 P.S. 只有「不可变对象」才可哈希
Sized    len() E.g. str list tuple set dict
SupportsInt    __int__    int()
SupportsFloat    __float__    float()
SupportsComplex    __complex__    complex()
SupportsAbs    __abs__    abs()
SupportsRound    __round__
SupportsBytes    __bytes__
SupportsIndex    __index__

Callable    目测 __call__
Callable[Concatenate[int, P], int]

ContextManager    P.S. 类不是上下文管理器，类的实例才是

Awaitable
AsyncIterator
AsyncIterable
Coroutine

IO
TextIO
BinaryIO



```

### Iterable

- Idea
    - Support [[Python iter()|iter()]]
    - Support `for`

- Objects
    - `Iterable`
        - iterable object

- Deps
    - Override `__iter__()` or `__getitem__()`

- API
    - `isinstance(obj, Iterable)`
        - 只检查对象是否有 `__iter__`，有则 `True`，没有则 `False`
        - 因此 `isinstance()` 并不可靠，它并没有真正调用 `__iter__()` 或 [[Python iter()|iter()]]，理论上只有 `__getitem__` 没有 `__iter__` 也可能是可迭代对象
        - [如何判断一个对象是否为可迭代对象（isiterable） - FooFish](https://foofish.net/python-check-isiterable.html)

### Iterator

- References
    - [Python进阶——什么是迭代器？ - 掘金](https://juejin.cn/post/6900373651099648014)

- Objects
    - `Iterator`
        - iterator (object)
        - `Iterator` is also a `Iterable`

- Deps
    - Override `__iter__()` and `__next__()`

### `Container`

[重新思考自定义容器类的实现 | Frost's Blog](https://frostming.com/2021/05-19/custom-dict/)

### `Collection`

### `Set`

### `Sequence`

[序列协议 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/c-api/sequence.html)

[Python进阶：自定义对象实现切片功能](https://mp.weixin.qq.com/s/QTodsriWW_gESvmJPD1EYg)

[高阶编程：魔术方法应用实战 | Python源码剖析](https://fasionchan.com/python-source/class-mechanism/magic-method/)

[3.4 抽象基类 · Fluent Python Note](https://hotttao.gitbooks.io/fluent-python-note/content/object/abstract.html)

- Idea
    - Support `for`
    - Support `list()`
    - Support `tuple()`

- Examples
    - [[python list|list]]
    - [[Python tuple]]
    - [[Python str]]
    - [[Python bytes|bytes]]

### `Mapping`

## Objects - Attributes

### Duck Type: `Protocol`

- Idea
    - 针对 methods 的 duck type
    - Python 的 Interface

- API
    - subclass `typing.Protocol` to define interface

- Philosophy
    - Interface
        - 实现类必须实现某些 methods
        - 本质是「对象必须有指定的属性」
    - Just implement, nothing more
        - [[Go]] style implement
        - 实现类只需要实现 methods，而无需显式声明所实现的 Interface

- Alternatives
    - 抽象基类

- References
    - [PEP 544 – Protocols: Structural subtyping (static duck typing) | peps.python.org](https://peps.python.org/pep-0544/)
    - [typing模块中Protocol协议的使用 - 我在路上回头看 - 博客园](https://www.cnblogs.com/weiweivip666/p/17502014.html)
    - [Python Protocols: Leveraging Structural Subtyping – Real Python](https://realpython.com/python-protocol/)
    - [应该如何理解 Python 中的『协议』？ - 知乎](https://www.zhihu.com/question/353405782)

### Duck Type: TypedDict

- Idea
    - 针对 fileds 的 duck type

- References
    - [PEP 589 – TypedDict: Type Hints for Dictionaries with a Fixed Set of Keys | peps.python.org](https://peps.python.org/pep-0589/)

### Goose Type: Abstract Base Class

- Idea
    - Python 的 Interface

- API
    - subclass `abc.ABC` to define interface

- Objects
    - 普通实现类
        - subclass `MyAbsBase` to implement interface
    - 虚拟子类
        - 虚拟子类 本质是 实现类
        - 就如同 [[Java]] 的 class 实现 implement 需要显式使用 `impl` 进行声明
        - 虚拟子类 需要通过 `@AbsBase.register` decorator 显式指定所实现的 Interface
        - subclass `AbsBase` 常常会造成「多继承」，心智负担大，而 decorator 避免了多继承

- Philosophy
    - Interface
        - 实现类必须实现某些 methods
        - 本质是「对象必须有指定的属性」
    - Implement, as well as decleration needed

- Alternatives
    - `typing.Protocol`

[再谈 Python 中的继承（译） | Frost's Blog](https://frostming.com/2021/07-30/python-subclassing-redux-cn/)

[协议,接口与抽象基类 · python攻略](https://blog.hszofficial.site/TutorialForPython/%E8%AF%AD%E6%B3%95%E7%AF%87/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E6%83%AF%E7%94%A8%E6%B3%95/%E5%8D%8F%E8%AE%AE%E4%B8%8E%E6%8E%A5%E5%8F%A3%E4%B8%8E%E6%8A%BD%E8%B1%A1%E5%9F%BA%E7%B1%BB.html)

[流畅的 Python（7）：接口与继承 | fuchencong](https://fuchencong.com/2021/09/12/fluent-python-07/)

[友好的 Python：接口友好 | Frost's Blog](https://frostming.com/2021/07-23/friendly-python-2/)

[Python拾遗 接口和抽象基类　--流畅的python - 知乎](https://zhuanlan.zhihu.com/p/53559206)

[Python进阶笔记（四）总结Python中的多态（抽象类、白鹅类型与鸭子类型、猴子补丁） - 知乎](https://zhuanlan.zhihu.com/p/477174854)

## Objects - First-class citizen

### `Any`

- Idea
    - 万能类型

- Alternatives
    - [[Python object|object]]

### `TypeAlias`

- References
    - [PEP 613 – Explicit Type Aliases | peps.python.org](https://peps.python.org/pep-0613/)

### `Annotated`

- Idea
    - Alias/Subset 性质，但附带额外信息，例如 description、validation

### `Callable`

- Idea
    - 如何声明一个函数对象？如何针对具体函数签名进行 Type Annotation？
    - 答案是 `Callable` 可调用对象

- Examples
    - 高阶函数

- API
    - `Callable[args, RetT]`
        - `args: List[type]`
            - `[]` 无参数
            - 不支持 声明可变长参数、关键字参数
        - `args: ParamSpec`
        - `args: Concatenate`
        - `args: ellipsis`
            - i.e. `Callable[..., RetT]`
            - `Callable[..., ...]` 能通过 [[mypy]] 检测

- Con
    - 不支持 [[JavaScript|JS]] 那样灵活的函数签名声明
        * Callable 并不完美，无法覆盖所有的函数签名，所以有了 Ellipsis.

### `Union`

[PEP 604 – Allow writing union types as X | Y | peps.python.org](https://peps.python.org/pep-0604/)

```python
from typing import Union


def return_int_or_float() -> Unoin[int, float]:
    pass

```

### `TypeVar`

- Idea
    - 占位符类型，调用时绑定具体的类型

- Examples
    - 用于 Function/Method 的 Type Annotations
    - 用于 `foo: T = ...` 的 Type Annotations
    - 用于 `Class[T]` 的 Type Annotations

- Philosophy
    - Bind on call
        - 最终绑定哪个类型，要在 caller 那里根据所用实例才能确定
        - 因为是 Bind on call 而非 Bind on runtime，因此编译阶段（代码检测阶段）就能确定要绑定的类型，从而保证强类型

- Fundamentals
    - Reflection
        - 可能是通过 [[Python type|type]] 反射获取 instance 的具体类型

- Pro
    - 支持 绑定任意类型
        - type checker 会根据传入的实例推断出绑定的类型
    - 支持 限制可绑定的类型
        - 如同 `Union`，绑定类型必须在白名单中

### `Generic`

- Idea
    - `TypeVar` 在 调用时 绑定 instance 的类型
    - `Generic` 在 调用时 绑定 直接指定的类型

- Philosophy
    - `Foo[SpecifiedT]` syntax
        - `Generic` 的 subclass 

- Fundamentals
    - `Foo[T]` syntax
        - 以下皆盲猜
        - `Foo` 对象的 `__getitem__` 方法返回一个临时生成的 class
        - 该 class 原本是通过 `TypeVar` 作为占位类型，但因为传入了 `T` 这个具体类型，所以 `__getitem__` 能够调用 `TypeVar` 绑定到 `T`
        - TL;DR
        - `Generic` 的 subclass 是 [[Python type|type]] 的 instance
        - 目测该 instance 通过 override `__getitem__` 返回一个新的 class（`type` instance）
        - 生成 class 的「模板」目测是使用 `TypeVar` 作为占位类型
        - 生成的 class 已经能确定 `TypeVar` 的真实类型，因为 `TypeVar` 是调用时绑定，而调用发生在 `__getitem__` 方法里，`__getitem__` 是可以通过 `Foo[T]` 语法拿到传入的具体类型 `T`

- Pro
    - 无需 instance，无需反射

[Python中的泛型 | Mkdir700's Note](https://www.z2blog.com/archives/66)

[一日一技：Any与TypeVar，让IDE的自动补全更好用 | 谢乾坤 | Kingname](https://www.kingname.info/2022/05/29/any-vs-typevar/)

[泛型补充 - PyStatic](https://pystatic.gitee.io/page/mypy/%E6%B3%9B%E5%9E%8B_%E6%96%B0%E8%A1%A5%E5%85%85/)

[pep 544 Protocols: Structural subtyping (static duck typing) | Leetao's Blog](https://leetaogoooo.github.io/2021/11/29/HwmFtxua0/)

[5.7 【进阶】泛型函数的使用 — Python中文指南 1.0 documentation](https://python.iswbm.com/c05/c05_07.html)

[一日一技：Any与TypeVar，让IDE的自动补全更好用 | 谢乾坤 | Kingname](https://www.kingname.info/2022/05/29/any-vs-typevar/)

[泛型补充 - PyStatic](https://pystatic.gitee.io/page/mypy/%E6%B3%9B%E5%9E%8B_%E6%96%B0%E8%A1%A5%E5%85%85/)

[静态类型检测 · python攻略](https://blog.hszofficial.site/TutorialForPython/%E5%B7%A5%E5%85%B7%E9%93%BE%E7%AF%87/%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%B5%8B.html)

[collections.abc --- 容器的抽象基类 — Python 3.11.1 文档](https://docs.python.org/zh-cn/3/library/collections.abc.html)

[PEP 483 – The Theory of Type Hints | peps.python.org](https://peps.python.org/pep-0483/)

[pep 544 Protocols: Structural subtyping (static duck typing) | Leetao's Blog](https://leetaogoooo.github.io/2021/11/29/HwmFtxua0/)

[PEP 646 – Variadic Generics | peps.python.org](https://peps.python.org/pep-0646/)

[PEP 695 – Type Parameter Syntax | peps.python.org](https://peps.python.org/pep-0695/)

### `Self`

- Idea
    - Type annotation for instance method which return `self`

- References
    - [Python's Self Type: How to Annotate Methods That Return self – Real Python](https://realpython.com/python-type-self/)
    - [PEP 673 – Self Type | peps.python.org](https://peps.python.org/pep-0673/)

### `Final`

- Idea
    - The final name cannot be re-assigned or overridden

- Examples
    - `PI: Final = 3.14`

### `Literal`

- References
    - [PEP 482 – Literature Overview for Type Hints | peps.python.org](https://peps.python.org/pep-0482/)
    - [PEP 586 – Literal Types | peps.python.org](https://peps.python.org/pep-0586/)

- Idea
    - Similar to enum type

- Examples
    - `foo: Literal['red', 'green', 'blue']`
