---
pro: true
---

# Telescope Model Hydration Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

This analyzer scans your Telescope records to detect routes that hydrate too many models.

By default, all routes that hydrate more than 50 models are flagged.

## How To Reduce Model Hydrations

Some good practices to reduce model hydrations include:

1. Using [lazy collections](https://laravel.com/docs/collections#lazy-collections) where possible.
2. Using [query chunking](https://laravel.com/docs/queries#chunking-results) where possible. Note that this does not reduce the number of model hydrations, but it does reduce the peak hydrations and thereby, reduces peak memory usage.
3. Using bulk queries rather than individual queries that return hydrated models.

## Configuration Options

You can customize the limit for number of hydrated models (default: 50) using the `hydration_limit` configuration option:

```php
'hydration_limit' => 50,
```

## Requirements

This Telescope analyzer requires you to enable the Telescope `ModelWatcher` and `RequestWatcher`.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix a model hydration issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the routes that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet on changing the column data type is provided [here](/performance/telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## Related Analyzers

- [Telescope Memory Intensive Request Analyzer](/docs/performance/telescope-memory-intensive-request-analyzer)

## References

- [Telescope Model Watcher Documentation](https://laravel.com/docs/telescope#model-watcher)
- [Laravel Lazy Collections Documentation](https://laravel.com/docs/collections#lazy-collections)
- [Laravel Query Chunking Documentation](https://laravel.com/docs/queries#chunking-results)