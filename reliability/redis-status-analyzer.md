---
pro: true
---

# Redis Status Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

## Introduction

This analyzer confirms that your Redis connections are accessible.

If the application is unable to connect to your Redis servers, this analyzer will result in a failure.

## How To Fix

You would need to check connectivity between the Redis server and your web server, and also check if the Redis server is running.

## Configuration Options

By default, this analyzer tests connectivity for all Redis connections configured in your application. You may configure this in Enlightn using the `redis_connections` configuration option in your `config/enlightn.php` file:

```php
'redis_connections' => [
    'default', 'cache',  
],
```

## Skip Condition

This analyzer is skipped if your application does not use Redis.

## References

- [Laravel Documentation on Redis](https://laravel.com/docs/redis)