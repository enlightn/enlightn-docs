# Cache Status Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\CacheStatusAnalyzer`

## Introduction

This analyzer confirms that your cache system is online.

If the application is unable to connect to your cache system or read/write cache keys, this analyzer will result in a failure.

## How To Fix

There may be a couple of reasons why the cache system is not working including lost connectivity or an out of memory error.

To investigate the error further, you may try a cache write on [Laravel Tinker](https://laravel.com/docs/artisan#tinker) using `Cache::put` to check the error message.

## References

- [Laravel Caching Documentation](https://laravel.com/docs/cache)