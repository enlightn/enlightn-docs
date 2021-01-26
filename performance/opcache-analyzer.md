# Opcache Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 10 minutes  |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\OpcacheAnalyzer`

## Introduction

This analyzer checks to see if Opcache is enabled. By default, Opcache is enabled in PHP 5.5+. So, this should be enabled unless it is configured to be disabled.

Opcache provides massive performance gains. One of the benchmarks suggest it can provide a 5.5X performance gain in a Laravel application!

## References

- [Opcache Laravel Benchmark](https://arubacao.com/laravel-opcache-performance-benchmark/)
- [Opcache Installation](https://www.php.net/manual/en/opcache.installation.php)