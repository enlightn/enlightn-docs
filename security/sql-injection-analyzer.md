---
pro: true
---

# SQL Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 30 minutes   |

## Introduction

This analyzer scans your application code to detect any native PHP database code such as:

1. Direct interaction with the PDO object.
2. Native PHP database functions.
3. Usage of the DB facade's `unprepared` method.

Any such code may be vulnerable to SQL injection attacks because it does not use the SQL injection protection features available with Laravel Eloquent models or the query builders.

## How To Fix

To fix this issue, remove any dangerous code as listed above. The analyzer highlights the file(s) and line(s) of code to make it easy for you to identify such code.

## Configuration Options

This analyzer uses a blacklist of unsafe sql functions. You may customize this list by using the `unsafe_sql_functions` configuration option in your `config/enlightn.php` file:

```php
'unsafe_sql_functions' => [
    'mysqli_connect', 'mysqli_execute', 'mysqli_stmt_execute', 'mysqli_stmt_close', 'mysqli_stmt_fetch',
    'mysqli_stmt_get_result', 'mysqli_stmt_more_results', 'mysqli_stmt_next_result', 'mysqli_stmt_prepare',
    'mysqli_close', 'mysqli_commit', 'mysqli_begin_transaction', 'mysqli_init', 'mysqli_insert_id',
    'mysqli_prepare', 'mysqli_query', 'mysqli_real_connect', 'mysqli_real_query', 'mysqli_store_result',
    'mysqli_use_result', 'mysqli_multi_query',
    
    'pg_connect', 'pg_close', 'pg_affected_rows', 'pg_delete', 'pg_execute', 'pg_fetch_all', 'pg_fetch_result',
    'pg_fetch_row', 'pg_fetch_all_columns', 'pg_fetch_array', 'pg_fetch_assoc', 'pg_fetch_object', 'pg_flush',
    'pg_insert', 'pg_get_result', 'pg_pconnect', 'pg_prepare', 'pg_query', 'pg_query_params', 'pg_select',
    'pg_send_execute', 'pg_send_prepare', 'pg_send_query', 'pg_send_query_params', 'pg_affected_rows',
],
```

## Related Analyzers

- [Raw SQL Injection Analyzer](raw-sql-injection-analyzer.html)
- [Validation SQL Injection Analyzer](validation-sql-injection-analyzer.html)

## References

- [Laravel Documentation on the Eloquent ORM](https://laravel.com/docs/eloquent)
- [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
- [OWASP SQL Injection Prevention Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [OWASP Blind SQL Injection Guide](https://owasp.org/www-community/attacks/Blind_SQL_Injection)