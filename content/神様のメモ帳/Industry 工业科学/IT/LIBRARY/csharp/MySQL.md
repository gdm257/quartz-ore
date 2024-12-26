---
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

[使用雪花id或uuid作为Mysql主键，被老板怼了一顿！](https://mp.weixin.qq.com/s/Ia-6sZpg2tETGJXMeElFCA)

[为什么数据库不应该使用外键 - 面向信仰编程](https://draveness.me/whys-the-design-database-foreign-key/)

[FavioVazquez/ds-cheatsheets: List of Data Science Cheatsheets to rule the world](https://github.com/FavioVazquez/ds-cheatsheets)

[系统迁移之【mysql迁移实战】（文末docker彩蛋） - 知乎](https://zhuanlan.zhihu.com/p/144711729)

[jaywcjlove/mysql-tutorial: MySQL入门教程（MySQL tutorial book）](https://github.com/jaywcjlove/mysql-tutorial)

[MySQL系列文章 | 骏马金龙](https://www.junmajinlong.com/mysql/index/)

[Starting MySQL as a Windows Service](https://dev.mysql.com/doc/refman/8.0/en/windows-start-service.html)

[Docker 容器明文密码问题解决之道 - DCS 文档](http://guide.daocloud.io/dcs/docker-9154000.html)

[MySQL重置root密码 - 歪麦博客](https://www.awaimai.com/2484.html)

[MySQL之权限管理 - I’m Me! - 博客园](https://www.cnblogs.com/richardzhu/p/3318595.html)

[mysql用户权限设置 - 一米一阳光 - 博客园](https://www.cnblogs.com/candle806/p/4048651.html)

[MySQL性能优化的简单说明 | 秋水逸冰](https://teddysun.com/424.html)

[jaywcjlove/mysql-tutorial MySQL 配置修改](https://github.com/jaywcjlove/mysql-tutorial/blob/master/chapter2/2.6.md)

[MySql优化_数据库_否命题的博客-CSDN博客](https://blog.csdn.net/qq_22329521/article/details/54801950)

[适合mysql 5.6与5.7内存参数优化内存占用为30MB左右(转贴)_文章_云服务器主机面板](https://www.osyum.com/article/show/92/)

[MySQL在512M以下小内存VPS上的优化设置 | 扩软博客](https://blog.kuoruan.com/72.html)

[Docker安装的mysql使用mysqldump定时备份数据库 - 简书](https://www.jianshu.com/p/be1e581acb8e)

[巧用 Docker Volume：数据备份的新潮流 - 开发者头条](https://toutiao.io/posts/yq6ci9/preview)

[lnmp自动将网站备份FTP或Google drive网盘 - 耿俭博客](https://www.gengjian.net/2019/06/16/44.html)


### Statements

- Fundamentals
    - `SELECT * FROM user WHERE age >= 18`
        - `$user | Where-Object {$_.age -ge 18} | ForEach-Object {$_}` [[PowerShell|PowerShell]] 风格
        - 发现了吗，语法顺序和执行顺序其实是不一样的，本来可以看作是链式调用，结果却是乱七八糟的语法顺序，而且还不符合语义

- Objects
    - [SQL Data Types for MySQL, SQL Server, and MS Access](https://www.w3schools.com/sql/sql_datatypes.asp)

- Utils
    - DESCRIBE
    - EXPLAIN
    - HELP
    - USE
- DAS
    - SHOW
    - CLONE
    - SET
- DDS
    - ALTER
    - CREATE
    - DROP
    - RENAME
    - TRUNCATE
    - GRANT
    - REVOKE
- DMS
    - SELECT
    - UPDATE
    - INSERT
    - REPLACE
    - DELETE
    - LOAD
    - IMPORT
    - TABLE (MySQL 8.0.19+)
    - VALUES (MySQL 8.0.19+)


```sql

show databases;
show tables;
use <db_name>;
select <column>,<column>,... from <table>;
select distinct ...;    select 去重版
update <table> set <column>='xxx',<column>=233,... where id<10;
delete from <table> where age<18;    批量删除条目
insert into <table> values ('loli', 17);
insert into <table> (name,age) values ('loli',17), ('neko', 17), ...;
insert into <table> (<column>,<column>,...) values (<value>,<value>,...);
insert into <table_name> values
    (value_of_field01, value_of_field02, ...),
    (value_of_field01, value_of_field02, ...);
create database <db_name>;
create table <table_name> (
    <field01> <type>,
    <field02> <type>,
    <field03> <type>,
    primary key(<field01>, <field02>),  # 可选
    foreign key (<field01>) references <another_table>(<f_field>)  # 可选
);


过滤
from <table>
where <column> <operator> <value>
where id=1
where name='loli'
where (id=1 OR name='loli') AND (debug=1)
order by name,id ASC|DESC
ORDER BY column_name,column_name ASC|DESC    排序

运算符
= 	等于
<> 	不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=
> 	大于
< 	小于
>= 	大于等于
<= 	小于等于
BETWEEN 	在某个范围内
LIKE 	搜索某种模式
IN 	指定针对某个列的多个可能值
''    SQL 使用单引号来环绕文本值


通配符 配合 LIKE
%    正则的 *
_    正则的 .
[abc]    同正则
[^abc]    同正则
[!abc]    同上

where url like ''
%    


函数
call func(args)


SQL 语句的语法顺序是：

USE <dbname>;
SELECT * SELECT 表示将要查询，* 表示所有列，SELECT查询的结果是一个二维数组
SELECT [表1.]列1, [表2.]列2, 列3
FROM <table> 表示从哪个表查询
WHERE <条件表达式> AND <条件2>
GROUP BY
HAVING
UNION
ORDER BY keyname 表示根据 key 排序，默认 ASC 升序，可省略
ORDER BY keyname DESC 表示倒序
ORDER BY key1 DESC, key2, key3
LIMIT 3 OFFSET 0 分页，从第 0 条开始，每页 3 条
LIMIT总是设定为pageSize；
OFFSET计算公式为pageSize * (pageIndex - 1)
COUNT(*) [查询结果的列的别名] 表示查询所有列的行数，SQL还提供了如下聚合函数：
SUM	计算某一列的合计值，该列必须为数值类型
AVG	计算某一列的平均值，该列必须为数值类型
MAX	计算某一列的最大值
MIN

FROM <表1> INNER JOIN <表2> ON <条件...>
INNER JOIN
LEFT OUTER JOIN
RIGHT OUTER JOIN
FULL OUTER JOIN


就以上述语句为例，其执行顺序为：

FROM
WHERE
GROUP BY
HAVING
SELECT
DISTINCT
UNION
ORDER BY

这种把多条语句作为一个整体进行操作的功能，被称为数据库事务。数据库事务可以确保该事务范围内的所有操作都可以全部成功或者全部失败。如果事务失败，那么效果就和没有执行这些SQL一样，不会对数据库数据有任何改动。使用BEGIN开启一个事务，使用COMMIT提交一个事务，这种事务被称为显式事务

BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

主键：唯一标识一行的列
外键：标示表与表相对关系的键（一对一，一对多，多对一，多对多）
索引：为了加快查询速度（插入等更改操作会变慢），为列预排序而建立的列
事务：多条语句变为原子操作

```


### Operators

- References
    - [Operators - MySQL 8 | dash](file:///D:/Portable/scoop/apps/zeal/current/docsets/MySQL.docset/Contents/Resources/Documents/functions.html#non-typed-operators)

- Types
    - Logical Operators
        - `AND, &&`
        - `OR, ||`
        - `XOR`
        - `NOT, !`
    - Comparison Functions and Operators
        - 太多了，看文档
    - Assigment Operators
        - `:=`
        - `=`

### Data Types

- References
    - [Chapter 11 Data Types - MySQL 8 | dash](file:///D:/Portable/scoop/apps/zeal/current/docsets/MySQL.docset/Contents/Resources/Documents/data-types.html)

- Numberic
    - INTEGER, INT, SMALLINT, TINYINT MEDIUMINT, BIGINT
    - DECIMAL, NUMERIC
    - FLOAT, DOUBLE
    - BIT
- Date & Time
    - DATE, DATETIME & TIMESTAMP
    - TIME
    - YEAR
- String
    - CHAR & VARCHAR
    - BINARY & VARBINARY
    - BLOB & TEXT
    - ENUM
    - SET
- Spatial
    - ……


### Client

- HeidiSQL
    * 顺手.
    * 简单易懂.
    * log 非常友好.
    * 功能齐全.
    * 支持的数据库全面.
    * 不支持 命令补全
    * 用过不少免费 DB GUI Client，heidisql 最强，比 JetBrains、dbeaver 好用多了
- Navicat
    - 我也不懂好在哪，反正 DBA 都说好


### 基础概念

值
字段
条目
表
库
mysql 文件夹

「值」：字面意思，例如一个整数、一个字符串、一个布尔值

「字段」：单纯的多个「值」是没有意义的，给不同的值起名字，例如名字、年龄，这样的名字就是「字段」

「条目」：通常不同字段的值相互之间有这对应关系，例如 名字的值张三 对应 年龄的值18、性别的值男……这样一组不同字段的值形成了一个「条目」

「表」：无数的「条目」累积成一张「表」，这样的表就是我们平常看见的 excel 表格，这张表格的每一行就是一个「条目」

「库」：一个数据库可以多张表格，你可以理解为一个 csv 文件就是一个数据库

「mysql 文件夹」：一个 mysql 程序文件夹可以存储多个数据库，mysql 安装完后默认带有 `information_schema` `mysql` `performance_schema` `sys` 这几个数据库

以上是极其简化的描述，事实上 MySQL 数据库的设计更为复杂：

一个「数据库」并不只由多张「表」组成，还包括「视图」「存储过程」「函数」「触发器」

「视图」：不用为好。简单的说就是懒得写查询语句，于是把要查询的内容做成了表，称为视图

「存储过程」：简单的说就是懒得写 SQL 语句，已经很少用了，不用为好，全是坑

「函数」：简单理解为 SQL 语句自带 if 代码块，是种特殊类型的存储过程






我对数据库的猜想：虽说一个数据库可以有多张表，但理想的状态是

sheet

header
row
column

Record
key
primary key或unique key
superkey
candidate key
foreign key

value


### 编码

[Miscellaneous - Dolt](https://docs.dolthub.com/sql-reference/sql-support/miscellaneous)


MySQL 的 `utf8` 是不完整的，`utf8mb4` 才是完整的 UTF-8。请无脑 `utf8mb4`。

`utf8mb4` 那么多种，应该选哪个？看 [dolt 支持的编码](https://docs.dolthub.com/sql-reference/sql-support/miscellaneous) 就知道了

如果只是中英文 `utf8mb4_general_ci` 跟 `utf8mb4_unicode_ci` 差别不大，ci 是 case insensitive, 即大小写不敏感。`utf8mb4_bin` 是二进制存储，大小写敏感

dolt 官方说，`utf8mb4_0900_bin` 是最佳实践，我觉得很有道理，就这个了。



### 数据类型

1. 数字类型
    1. TINYINT(size)
    2. SMALLINT(size)
    3. MEDIUMINT(size)
    4. INT(size)
    5. BIGINT(size)
    6. FLOAT(size,d)
    7. DOUBLE(size,d)
    8. DECIMAL(size,d)
2. 日期和时间类型
    1. DATE()
    2. DATETIME()
    3. TIMESTAMP()
    4. TIME()
    5. YEAR()
3. 字符串(字符和字节)类型
    1. CHAR(size)
    2. VARCHAR(size)
    3. TINYTEXT
    4. TEXT
    5. BLOB
    6. MEDIUMTEXT
    7. MEDIUMBLOB
    8. LONGTEXT
    9. LONGBLOB
    10. ENUM(x,y,z,etc.)
    11. SET
4. 空间类型
5. JSON数据类型


### Version

直到 MariaDB 5.5，都与对应 MySQL 5.x 基本完全兼容。

10.0.x 版以 MySQL 5.5 版为基础，加上移植自 MySQL 5.6版的功能和自行开发的新功能。

整体而言，mysql和mariadb版本的一般比较如下：

l  10.3-10.4和8.0对应

l  10.1-3和5.7对应

l  10.0-1和5.6对应

首先来看mysql和mariadb当前的各自活跃版本。mariadb目前主流的版本为5.5到10.4。mariadb正常大约一到两个月发布一次。

mysql的主流版本为MySQL 5.6-8.0，大约3个月左右发布一次


### Management

1. 登录
-hhost-name
-ppassword
-Pport
-uusername

2. CMD
SELECT NOW()：显示当前时间
SELECT USER()：显示当前用户
SHOW DATABASES：显示所有数据库
CREATE DATABASE <名称>;
DROP DATABASE <名称>;
USE db_name：切换到db_name数据库
SHOW TABLES：显示当前数据库所有表
SHOW CREATE DATABASE db_name：查看数据库字符集编码
SHOW CREATE TABLE tb_name：查看数据表创建语句
SHOW COLUMNS FROM tb_name：查看数据表字段信息
SHOW WARNING：查看警告信息

用户
grant select,insert,update,delete,create,drop privileges on <typechoSSS>.* to <用户>@localhost identified by '<密码>';
`*.*` 中前面的 * 号用来指定数据库名，后面的*号用来指定表名。
`grant all privileges on wp.* to user@localhost identified by 'passwd';`
create user <用户> identified by '<密码>';
show grants;
`revoke delete,update on *.* from 'jack'@'localhost';`
flush privileges;
drop user '用户名'@'localhost';
常用权限

    表数据: select, update, delete, insert
    表结构: create, alert, drop
    外键: references
    创建临时表: create temporary tables
    操作索引: index
    视图: create view, show view
    存储过程: create routine, alert routine, execute
    所有权限: all


改 root 密码
use mysql;
update user set authentication_string=password('新密码') where user='root';
flush privileges;

无密码
use mysql;
update user set authentication_string=password('') where user='root';
flush privileges;

改密码
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');


SHOW VARIABLES LIKE '%storage_engine%'; 查看存储引擎
SHOW ENGINES; 查看支持的存储引擎

### SSH

br-787ef94e6c0c 192.168.0.1/20 brd 192.168.15.255 可以 SSH，不可 TCP IP
docker0 172.17.0.1/16 brd 172.17.255.255 不可
eth0 104.194.238.114/28 brd 104.194.238.127 不可

猜测 br-xxx 网络是 docker-compose 启动时创建的 x-monster_default 网络，并且默认的网络模式是桥接。所以允许 br 网络就可以使用 SSH 隧道了。但我想不通的是，映射到宿主机 3306 端口后，只有 SSH 隧道才能连上 MySQL，直连的话被拒绝访问。理论上，无论是宿主机其他应用访问 3306 和外网访问宿主机 3306，都应该被转发到 br 网络，然后 br 网络转发给 MySQL，并且 MySQL 允许了 br 网络的访问。所以外网直连也应该能够连上 MySQL 才对，但事实上只有 SSH 隧道能访问 MySQL，这点就很想不通。

失败了，暂时使用超高强度密码，41 位以内

禁止root密码远程登录
delete from mysql.user where user='root' and host='%'; # 删除不需要的权限，%表示可远程访问
flush privileges;
select user, host from mysql.user; # 查看用户开放的访问权限

或者
改表法。可能是你的帐号不允许从远程登陆，只能在localhost。这个时候只要在localhost的那台电脑，登入mysql后，更改 "mysql" 数据库里的 "user" 表里的 "host" 项，从"%"改称"localhost"
mysql -u root -pvmware
mysql>use mysql;
mysql>update user set host = 'localhost' where user = 'root';
mysql>select host, user from user;
mysql>flush privileges;

SSH
ssh -NCPf root@192.168.99.52 -L 3388:127.0.0.1:3306
    C 使用压缩功能，是可选的，加快速度。
    P 用一个非特权端口进行出去的连接。
    f SSH完成认证并建立port forwarding后转入后台运行。
    N 不执行远程命令。该参数在只打开转发端口时很有用（V2版本SSH支持）


DataGrip 报错
The specified database user/password combination is rejected:
[28000] ... (using password: NO)

原因是密码没保存。DataGrip - settings - Appearance & Behavior - System Settings - Passwords - 勾选 In KeePass - 新建个 keepass 密码文件，填写路径、填写密码



### Security

我认为，MySQL 安全考虑主要有 2 层。一是如果被渗透，会不会读取、删改服务外的数据库，例如服务器运行了 Typecho 和 NextCloud，NextCould 被攻破拿到权限后，入侵者是否能拿到 Typecho 的数据库。二是如果被拿到权限，服务内数据库是否会被修改甚至删库。先看看：

0. MYSQL_ROOT_PASSWORD（yml 里的环境变量）
1. 数据库地址（-h）
2. 数据库端口（-P）
3. MySQL User（-u）
4. Password for MySQL User（-p）
5. database
6. 数据库前缀

所以，比较好的办法是 **1 个服务对应 1 个 MySQL User，所有 MySQL User 使用随机密码，并且对各个用户做好白名单式的最小权限管理**。

另一个问题是，root 密码用环境变量有点不妥，mysql 容器在首次启动的时候，必须指定一个root密码才能启动，指定的方式是声明环境变量 MYSQL_ROOT_PASSWORD 。 一旦在指定的数据文件夹发现已经存在库的时候，这个参数就会被忽略掉。 所以我们只需要在第一次启动的时候加上，后面有了数据后都去掉就好了。

为了证明这点，我们去考证下 Dockerfile 及其启动脚本，并实践。结论：确实如此。关于 root 密码的本质，它是存储在自带的名为 mysql 的 database 中的。登录 MySQL root 用户时，判断依据名为 mysql 的 database 里的记录。而默认的 yml 配置中，mysql 所在文件夹是会被 volume 到宿主机里面的，即挂载的 data/mysql5 目录。所以先 exec 到容器内，修改 root 密码，再 restart 容器，就无法用环境变量的密码登录，而是用修改过的密码才能登录。

顺便说下，启动 mysqld 进程是不用登录任何 MySQL User，更不需要密码。

PS：初始有 4 个 databases，分别叫 information_schema、mysql、performance_schema、sys




### utf8

mysql 中请大家忘记 utf8，永远只考虑 utf8mb4
Collation（排序字符集 ）推荐用 utf8mb4_unicode_ci，
但是用 utf8mb4_general_ci 也没啥问题。


### InnoDB

以下内容全是对 5.7 的优化。

**物理方面，磁盘 I/O 是制约 MySQL 性能的最大因素。采用 SSD 的服务器肯定会比普通 HDD 硬盘性能要好；采用 RAID10 的肯定要比单盘的性能要好。**

innodb_buffer_pool_size
这个是Innodb最重要的参数，主要作用是缓存innodb表的索引，数据，插入数据时的缓冲，默认值为128M。这个参数主要缓存innodb表的索引，数据，插入数据时的缓冲，设置得越大，存取表里面数据时所需要的磁盘I/O越少，一般是内存的一半，不超过2G，否则系统会崩溃。为Innodb加速优化首要参数。该参数分配内存的原则：如果是一个专用数据库服务器，那么他可以占到内存的70%-80%。这个参数不能动态更改，所以分配需多考虑。分配过大，会使Swap占用过多，致使Mysql的查询特慢。如果你的数据比较小，那么可分配是你的数据大小10%左右做为这个参数的值。1G 及以下小内存还是 64M 吧。

MySQL 5.7 提供了更加合适的默认值，一般情况下只要调整 InnoDB 的 3 个选项就可以了，其余参数根据实际情况再进行配置。在 my.cnf 中的[mysqld] 节下面添加如下配置：

####innodb配置#################
innodb_buffer_pool_size=64M
innodb_log_file_size=32M
innodb_flush_method=O_DIRECT

日志大小至多 2G，不需要大于 buffer pool。

在有RAID卡和写缓存的系统中，O_DIRECT有助于避免InnoDB缓存池和操作系统缓存之间的双重缓存。在InnoDB数据和日志文件放在SAN存储上面的系统，默认值（fdatasync）或O_DSYNC方法会对以读为主的数据库起到加速作用。


### 直接复制 MySQL 文件夹

能不能通过复制 MySQL 文件夹（data 目录）的方式备份与迁移数据库？

答：操作系统兼容性强的话，MySQL 数据可以直接复制使用（因此极其适合 Docker）。但复制前必须关闭 MySQL程序（不关闭程序，复制出的表易出问题，复制不全面，甚至不可用），因此得先 **docker-compose stop mysql5**，备份完再 doco start mysql5。鉴于可能用不了，最好久不久 dump 备份以防万一，不要把鸡蛋放一个蓝子里。


### dump 备份

传统备份：/usr/bin/mysqldump -u [user] --password=[password] [database-name] > [backup-file-name]
容器备份：docker exec [mysql-container-name] /usr/bin/mysqldump -u [user] --password=[password] [database-name] > [backup-file-name]
容器压缩：docker exec [mysql-container-name] /usr/bin/mysqldump -u [user] --password=[password] [database-name] | gzip > [backup-file-name]


```bash
backupfolder=$1
subfolder="$backupfolder"`date '+%Y%m'/`
mkdir -p $subfolder
echo "1. Backup db"
docker exec [mysql-container-name] /usr/bin/mysqldump -u [user] --password=[password] [database-name] | gzip > $subfolder`date '+%Y%m%d'.sql.gz`
echo "2. Backup web"
cp -a /data/blog/web/images/upload/ $subfolder`date '+%Y%m%d'/`
```
定期：0  3    * * *   search  path/to/backup.sh ~/backup/

恢复：cat [backup-file-name] | docker exec -i [CONTAINER] /usr/bin/mysql -u [user] —password=[password] [database-name]

docker exec ... 这一句，如果设置了定时任务，要记得去除 -it ,因为定时任务中无法开启虚拟终端。



### 导入导出

heidisql 导入 sql 至选中数据库：选中一个数据库 - 菜单栏 - 文件 - 加载 sql 文件 - 保证选中数据库 - 运行 sql 脚本（按 F9 / 工具栏的三角）- 运行完按 F5 刷新就能看到

DataGrip 导出为 xlsl：DataGrip - 选中数据库或表 - 右键 - Export Data to File - 推荐导出 xlsl，csv 因为是用英文逗号分隔，极其容易出错；或者保存为 tsv，用 tab 分隔，出错几率小一些



### 默认位置

ps ax | grep '[m]ysqld'
/usr/sbin/mysqld --help --verbose




### mysqld

理论上，启动 mysql 进程是不用登录任何 MySQL User，更不需要密码。

Windows 系统下，MySQL Server 有 2 种启动方式：
一是直接使用 mysqld 开启守护进程，本段便是；
二是将 mysql server 安装为一个 Windows Service，然后通过 net 命令启动服务；

MySQL Server 8.0\bin\mysqld 启动
MySQL Server 8.0\bin\mysqladmin -u root shutdown 停止

0).以命令提示框方式运行：mysqld --console；窗口退出后程序退出(非标准启动方式，启动及运行诊断的重定向)；
1).单独的应用程序模式：直接从命令行运行mysqld或者指定--standalone；关闭命令窗口程序不退出
2).服务模式：如果是“完全路径的mysqld.exe”，可以通过定义--defaults-file来指定不同的选项


### Windows Service

MySQL Server 8.0\bin\mysqld
--defaults-file="D:\Portable\scoop\persist\mysql57\my.ini"
--install 默认安装服务(自动启动)；
--install-manual 默认安装服务(手动启动)；
--install service_name 默认安装指定名称为service_name的服务(自动)；
--install-manual service_name 默认安装指定名称为service_name的服务(手动)；
--defaults-file=C:\my-opts.cnf 该服务的默认配置文件，本参数要在 --install 之后
--remove 删除默认服务；
--remove service_name 删除指定名称为service_name的服务；
--enable-named-pipe 启动命令管道(仅对默认服务有效)；
--standalone 以独立程序方式运行；
--console 以console方式运行，方便ctrl c关闭程序；

net start mysql57
net stop mysql57
sc start mysqld_service_name
sc stop mysqld_service_name


测试 MySQL server is working：

C:\> "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqlshow"
C:\> "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqlshow" -u root mysql
C:\> "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqladmin" version status proc
C:\> "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" test





### my.ini

```ini
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=D:\Portable\Figure\scoop\apps\mysql57\current  # 有些电脑需要用双斜线\\
# 设置mysql数据库的数据的存放目录
datadir=D:\Portable\Figure\scoop\apps\mysql57\current\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用utf8mb4
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
# 更改时区
default-time-zone='+8:00'

[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4

[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```



### 外键约束

我的理解：外键约束的作用就是硬链接/软链接，可以通过手写代码实现，也可以用数据库自带的方案，即外键。

2.外键等于把数据的一致性事务实现，全部交给数据库服务器完成；

3.有了外键，当做一些涉及外键字段的增，删，更新操作之后，需要触发相关操作去检查，而不得不消耗资源；

4.外键还会因为需要请求对其他表内部加锁而容易出现死锁情况；


一对一关联的实现方式是用外键，多对一关联的实现方式也是用外键，多对多关联的实现方式是用中间表。记下了这个口诀，在很多数据库设计的时候，你都可以发挥得更加游刃有余。




### Mycli

pip install -U mycli
pip install paramiko

mycli \
-h 127.0.0.1 \
-p 5300 \
-u root \
-p 91ZeFiMZ0KaF3z7eW_fB-OinS-_KovH2XDoZT9hV \
--ssh-host lolineko.com \
--ssh-port 4551 \
--ssh-user root \
--ssh-key-filename "F:\2. 网络\ssh_rsa_4096"
--ssh-password




Usage: mycli [OPTIONS] [DATABASE]

Options:
  -h, --host TEXT               数据库的主机地址。
  -P, --port INTEGER            用于连接的端口号。 Honors $MYSQL_TCP_PORT
  -u, --user TEXT               连接到数据库的用户名。
  -S, --socket TEXT             用于连接的套接字文件。
  -p, --password TEXT           连接到数据库的密码。
  --pass TEXT                   连接到数据库的密码。
  -v, --version                 mycli的版本输出。
  -D, --database TEXT           使用数据库。
  -R, --prompt TEXT             提示格式 (Default: "\t \u@\h:\d> ")
  -l, --logfile FILENAME        将每一个查询和它的结果记录到一个文件中。
  --defaults-group-suffix TEXT  读取指定的后缀的配置组。
  --defaults-file PATH          只从给定文件中读取默认选项。
  --auto-vertical-output        如果结果比终端更宽，自动切换到垂直输出模式。
  --login-path TEXT             从登录文件中读取此路径。
  --help                        显示此帮助消息


### MariaDB

必须先初始化：
mysql_install_db \
--datadir="D:\Portable\Figure\scoop\persist\mariadb103\data" \
--port=3406 \
--password=123456 \
--service=mysqld8 \
--allow-remote-root-access \

--datadir 必须要有，且必须为空目录
--password 密码设置的是 root password
--service 注册为服务
初始化后会生成 data 目录下生成 my.ini


配置好定制配置文件 my.cnf 之后需要初始化一下
mysqld --initialize


单独注册为服务：
mariadb/bin/mysqld
--port 3406
--install-manual mysqld8 \
--defaults-file="D:\Portable\Figure\scoop\persist\mariadb103\data\my.ini" \
--remove service_name \
