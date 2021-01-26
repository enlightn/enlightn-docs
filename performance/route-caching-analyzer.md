# Route Caching Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 5 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\RouteCachingAnalyzer`

## Introduction

This analyzer ensures that:

1. Your routes are not cached while your app is in a local environment.
2. Your routes are cached while your app is in a non-local environment.

If your routes are cached in local, any changes that you make to your route files will not be reflected in your application. This is why it is not recommended to cache your routes in a local environment.

In production environments, it is recommended to cache your routes. This allows for a **significant boost of upto 5X**!

## How To Cache Your Routes

You may cache your Laravel routes using the `route:cache` Artisan command:
```bash
php artisan route:cache
```

If you wish to clear your route cache, you may use the `route:clear` Artisan command:
```bash
php artisan route:clear
```

::: tip
You should make sure to re-cache your routes as part of your application deployment so that any changes in routes are updated.
:::

## References

- [Laravel Documentation on Route Caching](https://laravel.com/docs/routing#route-caching)
- [Laravel Route Caching Benchmarks](https://voltagead.com/laravel-route-caching-for-improved-performance/)
- [Laravel Route Caching (Servers For Hackers)](https://serversforhackers.com/laravel-perf/route-cache)
