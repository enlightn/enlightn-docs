---
pro: true
---

# Horizon Prefix Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 1 minute    |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\HorizonPrefixAnalyzer`

## Introduction

`laravel_horizon:` is the default Horizon Redis prefix for all Laravel applications. If you share the same Redis servers for multiple applications, this may result in a collision with other applications.

The Horizon Redis connection is used to store data for the dashboard (jobs, metrics, etc.) as well as for managing supervisor processes. A collision may result in your dashboard data or Horizon supervisors getting mixed up.

## How To Fix

To avoid a collision with other applications that share the same Redis servers, you may modify the Horizon Redis prefix in your `config/horizon.php` file or the corresponding `HORIZON_PREFIX` env variable:

```php
/*
|--------------------------------------------------------------------------
| Horizon Redis Prefix
|--------------------------------------------------------------------------
|
| This prefix will be used when storing all Horizon data in Redis. You
| may modify the prefix when you are running multiple installations
| of Horizon on the same server so that they don't have problems.
|
*/

'prefix' => env('HORIZON_PREFIX', 'myappname_horizon:'),
```

It is also a good practice to use separate Redis databases for Horizon when sharing the same Redis servers. You may do so by defining a `horizon` connection in your `config/database.php` file:

```php
'redis' => [
    ...
    
    'cache' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD', null),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_CACHE_DB', '1'),
    ],
    
    'horizon' => [
        'url' => env('REDIS_URL'),
        'host' => env('REDIS_HOST', '127.0.0.1'),
        'password' => env('REDIS_PASSWORD', null),
        'port' => env('REDIS_PORT', '6379'),
        'database' => env('REDIS_HORIZON_DB', '2'),
    ],

],
```

Make sure that your `REDIS_HORIZON_DB` env variable is set to different values for applications that share the same Redis server.

## Skip Condition

This analyzer is skipped if your application does not use Horizon.

## Related Analyzers

- [Cache Prefix Analyzer](cache-prefix-analyzer.html)
- [Redis Prefix Analyzer](redis-prefix-analyzer.html)

## References

- [Laravel Horizon Documentation on Configuration](https://laravel.com/docs/horizon#configuration)