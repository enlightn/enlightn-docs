# Configuration
[[toc]]

After publishing Enlightn's assets, its primary configuration file will be located at `config/enlightn.php`. This configuration file allows you to configure which checks should be run and also some configuration options for specific checks.

## Configuring Analyzers

Enlightn has 128 checks (including the Enlightn Pro checks). Each check corresponds to an "analyzer" class that conducts the actual analysis when you run the `enlightn` Artisan command.

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

## Excluding Analyzers From Reporting

When you run the `enlightn` Artisan command, the exit status code will be `0` if all checks passed. This can be useful if you intend to run Enlightn in your CI/CD pipeline.

Additionally, if you wish to exclude some analyzers from counting towards the status code, you may use the `dont_report` configuration option:

```php
'dont_report' => [\Enlightn\Enlightn\Analyzers\Security\XSSAnalyzer::class],
```

This means that even if the XSS analyzer fails, it will not result in a non-zero exit status code unless there are other analyzers that also failed.

Note that this does not mean that these analyzers won't run. They will still run and be displayed in the output of the `enlightn` command. If you wish to exclude them from the analysis, you should use the `exclude_analyzers` configuration option instead.

## Ignoring Errors

Some analyzers show detailed error messages for each line of code flagged. These details can be viewed when you run the `enlightn` Artisan command using the `--details` option.

Instead of completely ignoring such analyzers using the `exclude_analyzers` or `dont_report` options, you may also ignore specific errors using the `ignore_errors` configuration option:

```php
'ignore_errors' => [
    \Enlightn\Enlightn\Reliability\InvalidMethodCallAnalyzer::class => [
        [
            'path' => 'app/Models/Test.php',
            'details' => '*undefined method*',
        ],
    ],
],
```

The `details` value supports patterns as well as exact string matches.

Both `dont_report` and `ignore_errors` can be automatically generated for you by Enlightn if you [establish a baseline](usage.html#establishing-a-baseline).

## Compact Lines

By default, the `enlightn` Artisan command restricts the maximum number of files displayed to avoid cluttered output.

<img :src="$withBase('/images/compact_lines.png')" alt="Compact Lines" />

If you wish to display all the files for all checks, you may set the `compact_lines` configuration option to false:

```php
'compact_lines' => false,
```

## Analyzer Specific Configuration Options

There are some configuration options that are specific to certain analyzers. To learn more, you may refer the documentation for the specific analyzers, which will include the analyzer configuration options (if any).

## Customize Memory Limit

If you face any memory limit exhausted issues, you may supply a custom memory limit for running Enlightn like so:

```bash
php -d memory_limit=512M artisan enlightn
```

The same memory limit is then passed to PHPStan for its static analysis checks.