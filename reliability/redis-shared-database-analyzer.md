---
pro: true
---

# Redis Shared Database Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 2 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\RedisSharedDatabaseAnalyzer`

## Introduction

This analyzer detects whether your Redis cache database is shared with other services such as queues, sessions or broadcasting.

If your Redis cache database is shared with other "persistent" services, whenever you clear your cache using the `cache:clear` Artisan command, it will also clear your queues, sessions or broadcasting messages.

## How To Fix

To fix this issue, first set your queue, session and broadcasting configuration to use a Redis connection that differs from your cache connection in their respective config files:

```php{3}
'redis' => [
    'driver' => 'redis',
    'connection' => 'default',
    'queue' => 'default',
    'retry_after' => 90,
    'block_for' => null,
],
```

Next, make sure your persistent connection does not share the same database with your cache connection in your `config/database.php` file:

```php{6,14}
'default' => [
    'url' => env('REDIS_URL'),
    'host' => env('REDIS_HOST', '127.0.0.1'),
    'password' => env('REDIS_PASSWORD', null),
    'port' => env('REDIS_PORT', '6379'),
    'database' => env('REDIS_DB', '0'),
],

'cache' => [
    'url' => env('REDIS_URL'),
    'host' => env('REDIS_HOST', '127.0.0.1'),
    'password' => env('REDIS_PASSWORD', null),
    'port' => env('REDIS_PORT', '6379'),
    'database' => env('REDIS_CACHE_DB', '1'),
],
```

## Skip Condition

This analyzer is skipped if your application's default cache store is not `redis`.

## Related Analyzers

- [Cache Prefix Analyzer](cache-prefix-analyzer.html)
- [Horizon Prefix Analyzer](horizon-prefix-analyzer.html)

## References

- [Laravel Caching Documentation](https://laravel.com/docs/cache)