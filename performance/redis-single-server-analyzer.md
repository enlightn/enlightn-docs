---
pro: true
---

# Redis Single Server Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

If your Redis service is running on your web server, it is highly recommended that you use Unix sockets to communicate with your web server. Based on the Redis official benchmark, you can improve performance by upto 50% using unix sockets on Redis.

Of course, unix sockets can only be used if both your Laravel application and Redis are running on the same server.

## How To Enable Unix Sockets

First, create the redis folder that the unix socket will be in and set appropriate permissions:

```bash
$ sudo mkdir -p /var/run/redis/
$ sudo chown -R redis:www-data /var/run/redis
```

Next, add the unix socket path and permissions in your Redis configuration file (typically at `/etc/redis/redis.conf`):

```ini
unixsocket /var/run/redis/redis.sock
unixsocketperm 770
```

Finally, set your corresponding env variables to the socket path as above:

```bash
REDIS_HOST=/var/run/redis/redis.sock
REDIS_PORT=null
REDIS_SCHEME=unix
```

Ensure that you have your `config/database.php` file refer to the above variables (notice the `scheme` addition below):

```php
'redis' => [
    'client' => env('REDIS_CLIENT', 'phpredis'),
    
    'options' => [
        'cluster' => env('REDIS_CLUSTER', 'redis'),
        'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
        'scheme' => env('REDIS_SCHEME', 'tcp'),
    ],

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
],
```

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Redis.

## References

- [Redis Official Benchmark on Socket vs TCP](https://redis.io/topics/benchmarks)
- [Laravel Documentation on Redis](https://laravel.com/docs/redis)