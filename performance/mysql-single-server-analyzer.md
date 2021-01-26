# MySQL Single Server Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\MysqlSingleServerAnalyzer`

## Introduction

If your MySQL database is running on your web server, it is highly recommended that you use **Unix sockets** instead of **TCP ports** to communicate with your web server. 

Based on Percona's benchmark, you can **improve performance by up to 50%** using Unix sockets (versus TCP ports) on MySQL.

Of course, Unix sockets can only be used if both your Laravel application and database are running on the same server.

## How To Enable Unix Sockets

First, locate your MySQL configuration files.

```bash
$ mysqld --verbose --help | grep -A 1 "Default options"
Default options are read from the following files in the given order:
/etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf
```

Then, uncomment and change (if needed) the socket parameter in the `[mysqld]` section of one of the above configuration files:

```ini
[mysqld]
user            = mysql
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
port            = 3306
```

Finally, set your `database.connections.mysql.unix_socket` configuration variable or the corresponding env variable to the socket path as above:

```bash
DB_SOCKET=/var/run/mysqld/mysqld.sock
```

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use the MySQL database driver.

## References

- [Percona Benchmark (Unix vs TCP)](https://www.percona.com/blog/2020/04/13/need-to-connect-to-a-local-mysql-server-use-unix-domain-socket/)
- [MySQL Unix Socket Setup](https://www.digitalocean.com/community/tutorials/how-to-troubleshoot-socket-errors-in-mysql)
- [MySQL Shell Connections Guide](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-connection-socket.html)
