---
pro: true
---

# Redis Prefix Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 1 minute    |

## Introduction

`laravel_database_` is the default Redis prefix for all Laravel applications. If you share the same Redis servers for multiple applications, this may result in a collision with other applications.

## How To Fix

To avoid a collision with other applications that share the same Redis servers, you may modify the Redis default prefix in your `config/database.php` file or the corresponding `REDIS_PREFIX` env variable:

```php
'redis' => [

        'client' => env('REDIS_CLIENT', 'phpredis'),

        'options' => [
            'cluster' => env('REDIS_CLUSTER', 'redis'),
            'prefix' => env('REDIS_PREFIX', 'myappname_database_'),
        ],
        
        ...
],
```

It is also a good practice to use separate Redis databases when sharing the same Redis servers.

## Skip Condition

This analyzer is skipped if your application does not use Redis.

## Related Analyzers

- [Cache Prefix Analyzer](cache-prefix-analyzer.html)
- [Horizon Prefix Analyzer](horizon-prefix-analyzer.html)

## References

- [Laravel Caching Documentation](https://laravel.com/docs/cache)