---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: peewee
---

## ~~peewee~~


    peewee 平平无奇，找不到用的理由，不如直接 sqlalchemy
    不如 sqlmodel


```python
# 简介
Peewee 是一种简单而小的ORM。它有很少的（但富有表现力的）概念，使它易于学习和直观的使用。

翻了文档，peewee 完全足够，正如官方的宣传，轻而简单，但功能全面。够复杂了，所以 SQLAlchemy 根本不考虑，学习曲线陡峭、文档稀烂。peewee 文档相当详尽全面，附带大量 demo，中文文档翻译 https://www.osgeo.cn/peewee/ 大体看懂没问题。

supports sqlite, mysql, postgresql and cockroachdb

Peewee如果有兴趣可以后续继续使用来感受一下，Peewee也是一个功能全面的ORM，star很多但开发没有SQLAlchemy活跃

# 安装
pip install peewee
from peewee import *  #无需加 peewee. 前缀就能使用
import peewee  # peewee.xxx 才能调用

# 连接 sqlite
db = SqliteDatabase('/path/to/app.db')  #创建实例

# 连接 mysql
db = MySQLDatabase(
    "test", host="127.0.0.1", port=3306, user="root", passwd="123456"
)
db.connect()

# 定义表 Model
class User(Model):  #表名为 User，也可以通过下方 table_name 指定
    #没有指定主键的表peewee会自动创建一个名字为id的自增主键
    username = CharField()  #字段名
    message = TextField()  #字段名
    class Meta:
        database = db
        table_name = 'user'

这样就完成了「定义」table，之后可用 User.create_table() 创建该表；

如果是读取已有数据库，则无需创建，只定义即可。

但手写 Model 未免太麻烦，可以使用 pwiz 读取已有 db 来自动生成 Model 代码。

python -m pwiz -e sqlite "library.ydb" > my_models.py
python -m pwiz -e postgresql -u postgres my_postgres_db

[游戏室，扩展到Peewee — peewee 3.14.4 文档](https://www.osgeo.cn/peewee/peewee/playhouse.html#pwiz)




# 增
<Model>.create_table()  #创建表，前提是已定义 Model
User.create_table()

Person.create(name='tom', age=30, height=177)  #创建条目




# 查
db.get_tables()  #列出所有表，返回 list, which includes string element
db.get_columns('comic_info')  #列出指定表的字段，返回 list, which contains "peewee.ColumnMetadata" element
db.get_columns('comic_info')[0].name  #查看 peewee.ColumnMetadata 的字段名
db.get_columns('comic_info')[0].data_type  #查看 peewee.ColumnMetadata 的数据类型
db.get_columns('comic_info')[0].primary_key  #查看 peewee.ColumnMetadata 是否是主键

可以将一张 table 看作是一个 list，条目的数量就是 list 的长度，条目就是 list 的一个元素。

于是 .select() 就是对这个 list 进行切片。切片的范围可以由 .where etc 方法来限定

res = ComicInfo.select()  # 不过滤，获取 整个list == 所有条目
res = ComicInfo.select().dicts()  # 不过滤，获取 整个list，元素为 dict
res = ComicInfo.select().where()
res = ComicInfo.select().where().dicts()



>>> query = User.select()
>>> [user.username for user in query]
['Charlie', 'Huey', 'Peewee']

>>> query[1]
<__main__.User at 0x7f83e80f5550>

>>> query[1].username
'Huey'

>>> query[:2]
[<__main__.User at 0x7f83e80f53a8>, <__main__.User at 0x7f83e80f5550>]

select()是很智能的，在查询一次的前提下可以多次迭代，切片，下标取值等。

除了返回模型实例外，Select查询还可以返回字典、元组和命名元组。根据您的用例，您可能会发现将行作为字典使用更容易

>>> query = User.select().dicts()
>>> for row in query:
...     print(row)

{'id': 1, 'username': 'Charlie'}
{'id': 2, 'username': 'Huey'}
{'id': 3, 'username': 'Peewee'}


有了__init__方法，在创建实例的时候，就不能传入空的参数了，必须传入与__init__方法匹配的参数，但self不需要传，Python解释器自己会把实例变量传进去


# 杂
等你被上百个界面到处都是SQL语句的屎山项目支配的时候，就知道orm的重要性了，ORM的优势在小规模项目里面是显现不出来的，一旦项目庞大到几百几千个页面，上千个表的时候，你就会知道ORM存在的必要。

任何优秀的ORM都必须符合高内聚低耦合这六个字，这六个字的含义就是任何一处改动都最好不要影响很大的范围。

接下来就是sql语句，自己拼条件当然可以，但是写着写着也会往orm的方向去，最后根据模型去生成sql，比如写一个表的condition类去生成条件，玩着玩着，最终还是orm写表达式最方便

orm就是让你多花点时间来陪老婆孩子家人，别顾着埋头打码，可惜java的orm还是不能像php或go py那样orm，还是很累事，千万别信手打sql的屁话，人生还有很多美好事情比打码重要的，那么爱码，不如用记事本去撸，用什么IDE呢？

这么多年用下来，我觉得ORM最大的作用是用了ORM不用担心数据库变更了，如果用SQL，变个字段能让你怀疑人生



```
