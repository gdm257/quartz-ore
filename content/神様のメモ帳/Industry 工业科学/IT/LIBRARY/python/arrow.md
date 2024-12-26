---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DateTime
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Alternatives
    - [[Python whenever|whenever]]

[Arrow: Better dates & times for Python — Arrow 🏹 1.2.3 documentation](https://arrow.readthedocs.io/en/latest/)

[arrow-py/arrow: 🏹 Better dates & times for Python](https://github.com/arrow-py/arrow)


> [!tldr] [[pendulum]] 更加 pythonic，arrow 的方法与属性太乱了，难记


```python
arrow library
Installation:
    * pip install arrow

API:
    import arrow

    .utcnow() -> Arrow
    .now() -> Arrow
    .get() -> Arrow
        * 将对象解析为 Arrow.
        * E.g.
        * int/float 时间戳.
        * str ISO时间.
    .factory()


    .Arrow
        .tzinfo
        .year
        .month
        .day
        .hour
        .minute
        .second
        .microsecond


        .clone() -> Arrow
            * 克隆.
            * 无损.
        .to() -> Arrow
            * 修改时区.
            * 无损转换.
        .astimezone() -> datetime.datetime
            * 修改时区.
            * 无损转换.
        .tzinfo
            * 时区.

        .timestamp() -> float
            * 时间戳.
            * 无损转换.
        .int_timestamp() -> int
            * 时间戳（整数部分）.
            * 有损转换，丢失微秒.
        .microsecond: int
            * 微秒.
            * 微秒e-6 即时间戳の小数部份.


        .isoformat() -> str
            * 'YYYY-MM-DDTHH:MM:SS.xxxxxx+TZ:00'
            * 无损转换.
        .datetime: datetime.datetime
            * 年月日时分秒微秒时区.
            * 带时区.
            * 无损转换.
        .naive: datetime.datetime
            * 年月日时分秒微秒.
            * 有损转换，丢失时区.
        .tzinfo
            * 时区.
        .date() -> datetime.date
            * 纯年月日.
        .isocalendar() -> (year, month, day)
            * 纯年月日.
            * 偏的离谱，这是哪个宇宙的日历？
        .timetz() -> datetime.time
            * 纯时分秒微秒，带时区.
        .time() -> datetime.time
            * 纯时分秒微秒.
        .tzinfo
            * 时区.
        .ctime() -> str
            * 有损转换，丢失微秒.
            * 'Wed Feb  8 02:03:08 2023'
        .microsecond
            * 微秒.



        .isoweekday() -> int
            * 本周的第几天.
        .weekday() -> int
            * 本周的第几天.
        .format()
        .humanize()
        .dehumanize()
        .ambiguous

        .shift()
        .replace()

        .floor()
        .ceil()
        .span()

        @classmethod
        .span_range()

    .ArrowFactory

```
