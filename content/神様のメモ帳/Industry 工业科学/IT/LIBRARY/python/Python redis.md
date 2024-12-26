---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: redis
---

[redis/redis-py: Redis Python Client](https://github.com/redis/redis-py)


```python
MIT license.


# pip install redis

# redis client 本身就是半个 ORM，因为 redis 数据库的结构与 sql 不同，是 KV型的 NoSQL，而不是 table。
# 非要用 ORM，那就 pottery


import redis

# 连接
redis_conn = redis.Redis(host='127.0.0.1', port=6379, password='', db=0)


# 【查】
# 全局
redis_conn.save()  # 保存修改，阻塞
redis_conn.bgsave()  # 保存修改，非阻塞
redis_conn.exists('key')  #判断 key 是否存在
redis_conn.type('key')  #查看 key 的数据类型，返回字符串（none string list set zset hash）

# hash
redis_conn.hlen('key')
redis_conn.hexists('key', 'title')  #True 表示键存在
redis_conn.hkeys('key')  #获取 hash 所有键，返回 list
redis_conn.hvals('key')  #获取 hash 所有值，返回 list
redis_conn.hgetall('key')  #获取 hash 所有键值对，返回 dict
redis_conn.hget('key', 'title')  #获取 hash 中指定键的值

# string
redis_conn.get('key')
redis_conn.mget(['key1', 'key2'])
redis_conn.getrange()

# list
redis_conn.llen('key')
redis_conn.lindex('key', indices)
redis_conn.lrange('key', start, end)

# set
redis_conn.smembers('key')  #获取集合中的所有元素，返回 set
redis_conn.sismember('key', 'apple')  #判断某个值是否在集合中，在 True



# 【增】
# 全局
redis_conn.move('key', <db_number>)
redis_conn.move('key', 0)  #移动 key 至 db0
redis_conn.rename('old_key', 'new_key')  #重命名 key

# hash
redis_conn.hset('key', 'series', 'C89')
redis_conn.hmset('key', {'name': 'test', 'age': 'unknow'})
redis_conn.hmset('key', mapping)  #mapping 就是 dict

# string
redis_conn.set('key', 'value')
redis_conn.mset('key1': 'value', 'key2': 'value')
redis_conn.getset('key', 'new_value')
redis_conn.setrange()

# list
redis_conn.lset('key', indices, value)
redis_conn.linsert('key', where, refvalue, value)



# 【删】
# 全局
redis_conn.delete('key1', 'key2', 'key3')  #删除指定 key

# hash
redis_conn.hdel('key', 'title')

# list
redis_conn.lpop('key')  #删除 list 左边的第一个元素，返回该元素的值
redis_conn.rpop('key')  #删除 list 右边的第一个元素，返回该元素的值
redis_conn.ltrim('key', start, end)  #删除指定范围以外的所有元素，成功返回 True
```
