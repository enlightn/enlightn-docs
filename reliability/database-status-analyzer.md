# Database Status Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

## Introduction

This analyzer confirms that your database connections are accessible.

If the application is unable to connect to your database, this analyzer will result in a failure.

## How To Fix

You would need to check connectivity between the database server and your web server, and also check if the database server is running.

You can debug errors by trying to connect to your database using the Artisan `db` command:

```bash
php artisan db
```

::: tip
This command was introduced in Laravel 8.16. If you are using an older version of Laravel, you may try connecting using any database client.
:::

## Configuration Options

By default, this analyzer only tests connectivity for the default database connection. If your application uses multiple database connections, you may configure this in Enlightn using the `database_connections` configuration option in your `config/enlightn.php` file:

```php
'database_connections' => [
    'mysql', 'pgsql',  
],
```

## References

- [Laravel Documentation on the Artisan DB Command](https://laravel.com/docs/database#connecting-to-the-database-cli)