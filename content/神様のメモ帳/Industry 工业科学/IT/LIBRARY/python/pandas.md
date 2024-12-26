---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/DataFrame
  - flag/Library/BusinessLogicLayer/Implement__/Mathematics
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: pandas
pip-extra-deps:
  - performance
---

## Brief

- References
    - [microsoft/Data-Science-For-Beginners: 10 Weeks, 20 Lessons, Data Science for All!](https://github.com/microsoft/Data-Science-For-Beginners)
    - [jakevdp/PythonDataScienceHandbook: Python Data Science Handbook: full text in Jupyter Notebooks](https://github.com/jakevdp/PythonDataScienceHandbook)
    - [donnemartin/data-science-ipython-notebooks: Data science Python notebooks: Deep learning (TensorFlow, Theano, Caffe, Keras), scikit-learn, Kaggle, big data (Spark, Hadoop MapReduce, HDFS), matplotlib, pandas, NumPy, SciPy, Python essentials, AWS, and various command lines.](https://github.com/donnemartin/data-science-ipython-notebooks)

- Dependencies
    - `pip install pandas-stubs` for [[mypy]]

- Installation
    - `pip install pandas`
    - `pip install pandas[performance]` requires LLVM toolchains

- Version
    - 2.x
        - 支持 pyarrow，相比 [[numpy]] 更轻更快
    - [Using Polars in a Pandas world](https://pythonspeed.com/articles/polars-pandas-interopability/)

- Idea
    - Manipulate 1D & 2D Array

- Philosophy
    - Indexable array
        - [[pandas]] 在 [[numpy]] 的基础上，强化了 index
    - `MutiIndex` instead of high-dimensional array
        - [[pandas]]：我管你 ndarray 是几维，通通给我看作 `DataFrame` 或 `Series`，多出来的维度用 `MutiIndex` 代替
        - TL;DR
        - 多维数组的一大问题就是维度的不确定性，数组每增加一个维度，调用代码就要多一层循环。这对代码的可用性、可维护性、可读性造成了挑战
        - 为了避免数组维度的提升，[[pandas]] 非常有创造性地提出了 `MutiIndex`，成功将数组维度固定在二维 `DataFrame` 和一维 `Series`
        - `MutiIndex` 每多一层索引，相当于 NDArray 增加一个维度
        - `MutiIndex` 允许我们用操作 `DataFrame` `Series` 的方式来处理更高维的数组
        - Pro
            - 解耦 业务代码 & 数据集
            - 提高 业务代码 泛用型
            - 提高 业务代码 稳定性
            - 提高 业务代码 可维护性

- Architecture
    - [为Pandas加速，Dask, Ray, Modin, Vaex, RAPIDS哪个好呢？ - 知乎](https://zhuanlan.zhihu.com/p/164730629)

- Alternatives
    - [[modin]]

## Objects

- Objects
    - `pandas.DataFrame`
        - 二维数组 `List[Series]` `Dict[Hashable, Series]`
        - 相当于 Table
    - `pandas.Series`
        - 一维数组 `List[Any]` `NamedTuple[Any]` `Dict[Hashable, Any]`
        - Element 理论上是 `Any`，但实际使用一般为 `np.<dtype>`、标准库类或偏字面量的数据类；如需更高维度（更多嵌套），请用 `MutiIndex`


## API

- References
    - [我的Pandas学习经历及动手实践 - 知乎](https://zhuanlan.zhihu.com/p/476534270)
    - [Pandas全面语法教程 & 更好理解Pandas用法 - 知乎](https://zhuanlan.zhihu.com/p/370471321)
    - [Pandas Cheat Sheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
    - ![15 operations](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff8140932-5172-4587-a284-b6798ee8126b_1652x1492.jpeg?utm_source=substack&utm_medium=email)

- API
    - `import pandas as pd`
    - `pd.read_*(s) -> DataFrame`
    - `pd.read_csv(f) -> DataFrame`

    - `pd.Series`
        - `.__init__()`
            - 参数 `data`
                - `data=['3.14', '2.57', '2.55']`
            - 参数 `index`
                - 默认是 0,1,2,……递增的整数序列
                - 可手动指定 `Series(..., index=['a', 'b', 'c'])`

    - `pandas.DataFrame`
        - *Create*
        - `.from_dict(d) -> DataFrame`
            - `Dict[column_name, List[Any]]`
        
        - *Row*
        - `.query()`
        - `.dropna()`
        - `.merge()`
        - `.__getitem__()`
        - `.iloc.__getitem__()`
        - `.loc.__getitem__()`
        - `.to_dict() -> Dict[column_name, List[Any]]`
        - `.head()`
        - `.tail()`
        - `.sample()`
        - `.sort_values()`
        - `.nlargest()`
        - `.nsmallest()`
        - `.drop_duplicates()`
        - `.apply()`
        - `.fillna()`
        - `.groupby()`
        - `.agg()`
        
        - *Column*
        - `.filter()`
        - `.iloc.__getitem__()`
        - `.loc.__getitem__()`
        - `.drop()`
        - `.sort_index()`
        - `.rename()`
        - `.assign()`
        
        - *Reflaction*
        - `.columns`
            - 重新赋值，可实现 批量重命名 keys
            - `.to_list() -> List`
                - 类比 `dict.keys()`
        - `.index`
            - `.to_list() -> List`
