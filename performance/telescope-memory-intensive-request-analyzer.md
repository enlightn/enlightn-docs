---
pro: true
---

# Telescope Memory Intensive Request Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

This analyzer scans your Telescope records to detect routes that are using too much memory.

By default, all routes that consume more than 50 MB of memory are flagged.

## How To Reduce Memory Usage

There can be a number of reasons why your memory usage is high. Some good practices to reduce memory usage include:

1. Make sure that you are not hydrating too many models. Try to use [lazy collections](https://laravel.com/docs/collections#lazy-collections) and [query chunking](https://laravel.com/docs/queries#chunking-results) where possible to reduce memory usage.
2. If you are storing files, check out [automatic streaming](https://laravel.com/docs/filesystem#automatic-streaming) to reduce memory usage.
3. If you are reading files, consider using the `Filesystem::lines` method to lazily read file contents.
4. Make sure that you are not running dev packages in production that consume too much memory.

If you are unable to debug why the memory usage is high, consider using the [Xdebug Profiler](https://xdebug.org/docs/profiler).

## Configuration Options

You can customize the memory limit (default: 50 MB) using the `request_memory_limit` configuration option (in MB):

```php
'request_memory_limit' => 50, // MB
```

## Requirements

This Telescope analyzer requires you to enable the Telescope `RequestWatcher`.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix a memory usage issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the routes that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet on changing the column data type is provided [here](/performance/telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## Related Analyzers

- [Telescope Model Hydration Analyzer](/docs/performance/telescope-model-hydration-analyzer)

## References

- [Telescope Request Watcher Documentation](https://laravel.com/docs/telescope#request-watcher)
- [Laravel Lazy Collections Documentation](https://laravel.com/docs/collections#lazy-collections)
- [Laravel Query Chunking Documentation](https://laravel.com/docs/queries#chunking-results)
- [Xdebug Profiler Documentation](https://xdebug.org/docs/profiler)