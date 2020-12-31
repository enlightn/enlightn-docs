---
pro: true
---

# Telescope Slow Response Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

This analyzer scans your Telescope records to detect routes that have slow responses.

By default, responses are considered to be slow if they take longer than 500 milliseconds.

## How To Optimize Slow Responses?

Slow responses are too broad a topic to be covered here in detail. The first step to debugging slow responses would be to understand which step is taking the most time.

Packages such as Telescope, Laravel DebugBar or Clockwork can help you identify the bottleneck. Once you have done that, you can then work on reducing the time taken by the bottleneck step. If you are unable to identify the bottleneck using these packages, you may consider profiling tools such as Xdebug and Blackfire that can help you profile your code line by line.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix a slow response issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the routes that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Requirements

This Telescope analyzer requires you to enable the Telescope `RequestWatcher`.

## Configuration Options

You can customize the time limit (default: 500 milliseconds), beyond which responses are considered to be slow, using the `slow_response_threshold` configuration option (in milliseconds):

```php
'slow_response_threshold' => 500, // ms
```

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet on changing the column data type is provided [here](telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## References

- [Telescope Request Watcher Documentation](https://laravel.com/docs/telescope#request-watcher)
- [Clockwork](https://underground.works/clockwork/)
- [Laravel DebugBar](https://github.com/barryvdh/laravel-debugbar)
- [Xdebug Profiler](https://xdebug.org/docs/profiler)
- [Blackfire](https://www.blackfire.io/)