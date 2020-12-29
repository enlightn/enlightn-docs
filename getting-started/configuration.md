# Configuration
[[toc]]

After publishing Enlightn's assets, its primary configuration file will be located at `config/enlightn.php`. This configuration file allows you to configure which checks should be run and also some configuration options for specific checks.

## Configuring Analyzers

Enlightn has 120 checks (including the Enlightn Pro checks). Each check corresponds to an "analyzer" class that conducts the actual analysis when you run the `enlightn` Artisan command.

By default, Enlightn runs all of its analyzers. You may customize the list of Enlightn analyzer classes to run by using the `analyzers` configuration option:

```php
'analyzers' => [
    \Enlightn\Enlightn\Analyzers\Security\AppDebugAnalyzer::class,
    \Enlightn\Enlightn\Analyzers\Performance\CacheHeaderAnalyzer::class,
    \Enlightn\Enlightn\Analyzers\Reliability\CachePrefixAnalyzer::class,
    \Enlightn\Enlightn\Analyzers\Performance\CollectionCallAnalyzer::class,
    ...
],
```

You may use the wildcard option to run all Enlightn analyzers:

```php
'analyzers' => ['*'],
```

You may also provide a list of analyzer classes that should be excluded from your analysis using the `exclude_analyzers` configuration option:

```php
'exclude_analyzers' => [
    \Enlightn\Enlightn\Analyzers\Security\HSTSHeaderAnalyzer::class,
    \Enlightn\Enlightn\Analyzers\Performance\UnusedGlobalMiddlewareAnalyzer::class,
    \Enlightn\Enlightn\Analyzers\Reliability\UpToDateMigrationsAnalyzer::class,
],
```

## Configuring Base Path

Some Enlightn analyzers conduct a static analysis on your application code for their checks. By default, these analyzers look at all PHP code in your `app`, `database/migrations` and `database/seeds` folders. You may customize the list of folders to scan for code using the `base_path` configuration option:

```php
'base_path' => [
    app_path(),
    database_path('migrations'),
    database_path('seeders'),
],
```

## Environment Specific Checks

Some checks may be specific to your application environment. For instance, the `CacheHeaderAnalyzer` determines whether you have set appropriate cache headers on your Laravel Mix assets. It may be perfectly fine not to set these cache headers in your local development environment. So, you may want to exclude this check when your application is running in a local environment.

By default, Enlightn does not exclude environment specific checks for such scenarios. If you wish to exclude checks specific to non-local environments when running in local, you can set the `skip_env_specific` configuration option to `true`:

```php
'skip_env_specific' => true,
```

## Analyzer Specific Configuration Options

There are some configuration options that are specific to certain analyzers. To learn more, you may refer the documentation for the specific analyzers, which will include the analyzer configuration options (if any).
