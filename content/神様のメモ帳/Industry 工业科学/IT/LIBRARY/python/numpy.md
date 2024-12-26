---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/Array
  - flag/Library/BusinessLogicLayer/Implement__/Mathematics
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: numpy
---

## Brief

- References
    - [ijl/orjson: Fast, correct Python JSON library supporting dataclasses, datetimes, and numpy](https://github.com/ijl/orjson)
    - [Numpy 练习册 rougier/numpy-100: 100 numpy exercises (with solutions)](https://github.com/rougier/numpy-100)
    - ![cheatsheet](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F282013b7-68d4-4307-9828-2607c35d56d4_3562x3984.jpeg)

- Ecosystem
    - [caniko/pydantic-numpy: Package that integrates NumPy Arrays into Pydantic](https://github.com/caniko/pydantic-numpy)
    - [p2p-ld/numpydantic: Type and shape validation and serialization for numpy arrays in pydantic models](https://github.com/p2p-ld/numpydantic)

- Idea
    - N维数组的 CRUD

- API
    - `import numpy as np`
    - `import numpy.typing as npt`
        - `arr: npt.NDArray[np.float64]`
        - `arr: npt.NDArray[np.float64[T]]`
        - 野路子，不懂能不能用，不推荐
            - `arr: np.ndarray[[]]`
            - `arr: np.ndarray[[Union[int, str]]]`
            - `arr: np.ndarray[[n,m,p]]` n,m,p分别表示三个维度的大小

- Philosophy
    - NDArray
        - N维 == N个嵌套的列表
        - 1D == `List[numpy.<datatype>]`
        - 2D == `List[List]`
        - 3D == `List[List[List]`

- Objects
    - `np.ndarray`
        - Type Annotation
            1. `numpy.typing`
            2. [[nptyping]]
            3. [[beartype]] + [[typing|typing.Annotated]]
            4. [[nptyping]] + [[beartype]]
            - [Numpy Typing with specific shape and datatype - Stack Overflow](https://stackoverflow.com/questions/71109838/numpy-typing-with-specific-shape-and-datatype)

- Fundamentals
    - shape + dtype + foreach 足以复刻一个 ndarray 的全部
    - ndarray 加上算法能复刻 numpy 的全部

- Con
    - dtype 虽然也支持字符串等其他数据类型，但仍然主要是用于「数值计算」，尤其是内部集成了大量矩阵计算模块

- Test
    - numpy 的难点在于掌握 CRUD API，就像掌握 [[python list|list]] 的 API 那样
    - [Typing (numpy.typing) — NumPy v2.1.dev0 Manual](https://numpy.org/devdocs/reference/typing.html)
