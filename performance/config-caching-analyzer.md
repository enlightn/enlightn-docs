# Config Caching Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\ConfigCachingAnalyzer`

## Introduction

This analyzer ensures that:

1. Your config is not cached while your app is in a local environment.
2. Your config is cached while your app is in a non-local environment.

If your config is cached in local, any changes that you make to your `.env` file or your `config` files will not be reflected in your config. This is why it is not recommended to cache your config in a local environment.

In production environments, it is recommended to cache your config. This allows for a nice performance boost as your application will not need to parse your `.env` and `config` files while booting.

## How To Cache Your Config

You may cache your Laravel app config using the `config:cache` Artisan command:
```bash
php artisan config:cache
```

If you wish to clear your config cache, you may use the `config:clear` Artisan command:
```bash
php artisan config:clear
```

::: tip
You should make sure to re-cache your config as part of your application deployment so that any changes in config are updated.
:::

## Related Analyzers

- [Env Call Analyzer](env-call-analyzer.html)

## References

- [Laravel Documentation on Config Caching](https://laravel.com/docs/configuration#configuration-caching)
- [Config Caching (Servers For Hackers)](https://serversforhackers.com/laravel-perf/config-cache)
