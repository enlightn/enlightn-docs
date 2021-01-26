# Env Call Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 10 minutes  |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\EnvCallAnalyzer`

## Introduction

This analyzer ensures that your application code does not have calls to the `env` function outside of your `config` files. This is a major roadblock to configuration caching.

If you cache your configuration, all calls to the `env` function would return null. This means that your code will break with configuration caching.

It is recommended to only use the `env` function within your `config` files and nowhere else.

## Related Analyzers

- [Config Caching Analyzer](config-caching-analyzer.html)

## References

- [Laravel Documentation on Config Caching](https://laravel.com/docs/configuration#configuration-caching)
- [Config Caching (Servers For Hackers)](https://serversforhackers.com/laravel-perf/config-cache)