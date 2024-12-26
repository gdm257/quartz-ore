---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Kernel/CRUD/Read
---

[osquery | Table Schema](https://osquery.io/schema/5.7.0/)

[osquery documentation](https://osquery.readthedocs.io/en/latest/)

[osquery/osquery: SQL powered operating system instrumentation, monitoring, and analytics.](https://github.com/osquery/osquery)


```bash
osqueryctl command
osqueryd command
osqueryi command

Description:
    * osquery 是系统信息查看工具.
    * osquery 将 OS 抽象为一个关系型数据库，通过 SQL 查询信息.
    * osquery 抽象出了上百个 tables.
    * 再也不用手动 cat /proc 惹.

Table Schema:
    users
    processes


Installation:
    * Windows: scoop install -g osquery
    * Debian
        - export \
            OSQUERY_KEY=1484120AC4E9F8A1A577AEEE97A80C63C9D8B80B
        - sudo apt-key adv \
            --keyserver hkp://keyserver.ubuntu.com:80 \
            --recv-keys $OSQUERY_KEY
        - 添加软件源
            * sudo apt edit-sources
                - 追加一行 `deb https://pkg.osquery.io/deb deb main`
            * 或者通过命令
            - sudo add-apt-repository \
              'deb [arch=amd64] https://pkg.osquery.io/deb deb main'
        - sudo yum install osquery
        - sudo apt-get update
        - sudo apt-get install osquery
    - CentOS
        - curl -L https://pkg.osquery.io/rpm/GPG \
          | sudo tee /etc/pki/rpm-gpg/RPM-GPG-KEY-osquery
        - sudo yum-config-manager \
            --add-repo \
            https://pkg.osquery.io/rpm/osquery-s3-rpm.repo
        - sudo yum-config-manager \
            --enable osquery-s3-rpm-repo

```
