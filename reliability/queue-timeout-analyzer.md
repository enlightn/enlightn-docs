# Queue Timeout Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 2 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\QueueTimeoutAnalyzer`

## Introduction

This analyzer ensures that your queue retry value is larger than your queue timeout configuration value.

The queue timeout value must be at least several seconds shorter than the retry after configuration value. If this is not the case, then this can cause problems such as your jobs may be processed twice or the queue worker may crash.

## How To Fix

If you are not using Horizon, the default queue worker timeout is 60 seconds. So, your retry after value must be greater than 60 seconds. To change your retry after value, you may do so in your `config/queue.php` file:

```php{5}
'redis' => [
    'driver' => 'redis',
    'connection' => 'default',
    'queue' => env('REDIS_QUEUE', 'default'),
    'retry_after' => 90,
    'block_for' => null,
],
```

If you are using Horizon, then make sure that your retry after is greater than your timeout defined in your `defaults` and `environments` configurations (if no timeout is defined, it is considered to be 60 seconds):

```php{8}
'defaults' => [
    'supervisor-1' => [
        'connection' => 'redis',
        'queue' => ['default'],
        'balance' => 'auto',
        'maxProcesses' => 1,
        'memory' => 128,
        'timeout' => 90,
        'tries' => 1,
        'nice' => 0,
    ],
],
```

As above, the timeout is explicitly defined as 90 seconds, so your retry after value must be greater than 90 seconds. If not, then you may change the value in your `config/queue.php` file as indicated above.

## References

- [Error When Timeout Is Not Configured Properly](https://divinglaravel.com/integrity-constraint-violation-duplicate-entry-for-key-failed_jobs_uuid_unique)
- [Laravel Documentation on Job Expiration](https://laravel.com/docs/queues#worker-timeouts)
- [Laravel Horizon Documentation on Configuration](https://laravel.com/docs/horizon#configuration)