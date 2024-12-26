---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DateTime
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: pendulum
---

- Alternatives
    - [[Python whenever|whenever]]

[Documentation | Pendulum - Python datetimes made easy](https://pendulum.eustace.io/docs/)

[sdispater/pendulum: Python datetimes made easy](https://github.com/sdispater/pendulum)


```Python
pendulum library
Installation:
    * pip install pendulum

Description:
    * pendulum 是一个时间日期库.
    * pendulum 重新实现了 datetime/date/time，并兼容 datetime 标准库.
    * MIT license.

API:
    .now() -> DateTime
    .today() -> DateTime
    .tomorrow() -> DateTime
    .yesterday() -> DateTime
    .datetime() -> DateTime
    .local() -> DateTime
    .naive() -> DateTime
    .parser() -> DateTime
    .from_format() -> DateTime
    .from_timestamp() -> DateTime
    .instance() -> DateTime
    .timezone() -> pendulum.tz.timezone.Timezone


    pendulum.DateTime
        .tz: pendulum.tz.timezone.Timezone
        .timezone: pendulum.tz.timezone.Timezone
        .timezone_name: str
        .year
        .month
        .day
        .hour
        .minute
        .second
        .microsecond


        .timestamp() -> float
        .float_timestamp
        .int_timestamp
        .microsecond
        .ctime() -> str
             * 有损转换，丢失微秒.
        .microsecond
        .for_json() -> str
            * 目测是 iso format.
            * 无损转换.
        .subtrack() -> pendulum.DateTime
            * 克隆？
        .naive() -> pendulum.DateTime
            * 有损转换，丢失时区.
        .date() -> pendulum.Date
            * 年月日.
        .time() -> pendulum.Time
            * 时分秒微秒.
        .timezone: pendulum.tz.timezone.Timezone

        .to_atom_string()
        .to_cookie_string()
        .to_date_string()
        .to_datetime_string()
        .to_day_datetime_string()
        .to_formatted_date_string()
        .to_iso8601_string()
        .to_rfc1036_string()
        .to_rfc1123_string()
        .to_rfc2822_string()
        .to_rfc3339_string()
        .to_rfc822_string()
        .to_rfc850_string()
        .to_rss_string()
        .to_time_string()
        .to_w3c_string()


        .day_of_week
        .day
        .days_in_month
        .day_of_year
        .week_of_month
        .week_of_year
        .weekday
        .days_in_month
        .quarter: int
            * 第N季度.
        .age
        .fold
        .resolutoin
        .offset
        .offset_hours
        .get_offset()
        .diff()
        .diff_for_humans()
        .is_long_year()
        .is_leap_year()
        .is_same_day()
        .is_birthday()
        .is_anniversary()
            * 周年纪念日.
        .is_past()
        .is_future()
        .is_dst()
        .is_local()
        .is_utc()
        .format()
        .strftime()
        .strptime()

        # 时间偏移
        .add()
        .previous()
        .next()
        .set()
        .replace()
        .start_of()
        .last_of()
        .first_of()
        .end_of()
        .nth_of()
        .combine()
        .closest()
        .farthest()
        .average()

        .at()
        .in_tz() -> pendulum.DateTime
            * 修改时区.
        .in_timezone() -> pendulum.DateTime
        .on()

        # 类属性
        .max
        .min

        # 类方法
        .now()
        .today()
        .fromtimestamp()
        .fromisoformat()
        .fromordinal()
        .dst()

```