---
pro: true
---

# Queue Blocking Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 1 minute    |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\QueueBlockingAnalyzer`

## Introduction

This analyzer confirms that your application does not set an invalid `block_for` configuration value in your `config/queue.php` file.

Setting `block_for` to 0 will cause queue workers to block indefinitely until a job is available. This will also prevent signals such as SIGTERM (for terminating the queue worker) from being handled until the next job has been processed. Either set this value to null or greater than zero.

## How To Fix

To fix this issue, simply set the `block_for` value to null or a value greater than zero in your `config/queue.php` file:

```php{6}
'redis' => [
    'driver' => 'redis',
    'connection' => 'default',
    'queue' => env('REDIS_QUEUE', 'default'),
    'retry_after' => 90,
    'block_for' => 5,
],
```

## Skip Condition

This analyzer is skipped if your application does not use the `redis` queue driver.

## References

- [Laravel Documentation on Redis Queues & Blocking](https://laravel.com/docs/8.x/queues#redis)