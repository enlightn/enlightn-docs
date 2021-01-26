# Shared Cache Lock Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes  |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\SharedCacheLockAnalyzer`

## Introduction

[Atomic locks](https://laravel.com/docs/cache#atomic-locks) is a mechanism provided by Laravel to manage race conditions and concurrency. If your application uses the `redis` cache driver, you must be careful not to use the same cache connection for locks as you do for your caching.

Cache data is meant to be temporary and it is quite a common deployment step to clear your cache. If your locks and cache reside on the same Redis connection, when you clear your cache, your locks will also be cleared.

Remember that even though your application may not be using atomic locks directly, Laravel uses atomic locks for [Unique Jobs](https://laravel.com/docs/queues#unique-jobs) or [Session Blocking](https://laravel.com/docs/session#session-blocking).

If you are using any of the above features, it is recommended to separate your cache and lock Redis connections with separate databases to avoid clearing your locks when clearing cache data.

## How To Separate Lock and Cache Redis Databases

Laravel 8.20+ ships with a `lock_connection` configuration on your Redis cache store. If your application uses Laravel 8.20+, then you can separate your lock connection in your `config/cache.php` file:

```php
'redis' => [
    'driver' => 'redis',
    'connection' => 'cache',
    'lock_connection' => 'default',
],
```

Make sure that not only are your cache connection and lock connection separate, but they must also use different Redis databases.

If your application uses a Laravel version < 8.20, then you must do the following:

1. Create a separate cache store (that uses a separate Redis connection and database) dedicated for locks in your `config/cache.php` file:

```php
'stores' => [
    'redis' => [
        'driver' => 'redis',
        'connection' => 'cache',
    ],
    'lock' => [
        'driver' => 'redis',
        'connection' => 'default',
    ],
],
```

2. Replace your `Cache::lock` calls with `Cache::store(..)->lock` using your dedicated lock store:

```php
use Illuminate\Support\Facades\Cache;

$lock = Cache::lock('somelock', 10);
// Replace with: $lock = Cache::store('lock')->lock('somelock', 10);
```

## Skip Condition

This analyzer is skipped if your application does not use Redis as its default cache store.

## References

- [Laravel Documentation on Atomic Locks](https://laravel.com/docs/cache#atomic-locks)