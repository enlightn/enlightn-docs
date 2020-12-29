# View Caching Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes   |

## Introduction

This analyzer ensures that your views are cached while your app is in a non-local environment.

By default, Blade template views are compiled on demand. When a request is executed that renders a view, Laravel will compile the view if a pre-compiled view does not already exist (or if the view has been modified more recently than the compiled view).

View caching pre-compiles all of the views utilized by your application. This can provide a nice performance boost for your Laravel app.

## How To Cache Your Views

You may cache your Laravel routes using the `view:cache` Artisan command:
```bash
php artisan view:cache
```

If you wish to clear your view cache, you may use the `view:clear` Artisan command:
```bash
php artisan view:clear
```

::: tip
You should make sure to re-cache your views as part of your application deployment so that re-compiles are not required while serving requests.
:::

## References

- [Laravel Documentation on View Caching](https://laravel.com/docs/views#optimizing-views)
