---
pro: true
---

# Telescope Slow Query Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\TelescopeSlowQueryAnalyzer`

## Introduction

This analyzer scans your Telescope records to detect slow queries along with the lines of code that are responsible for these queries.

By default, queries are considered to be slow if they take longer than 100 milliseconds. This can be customized in your Telescope QueryWatcher's `slow` configuration option.

## How To Optimize Slow Queries?

There are a number of ways to optimize slow queries. Some of them include:

1. Avoid using select * and define select fields instead where possible.
2. Add a limit to your queries where possible.
3. Use inner joins instead of outer joins where possible.
4. Cache expensive queries.
5. Perform expensive queries during non-peak hours (perhaps as scheduled commands) where possible.
6. Carefully choose your table indexes based on your application's most frequent queries on the specific table.
7. Use query explains to understand and optimize query execution plans.
8. Avoid expensive operations such as like, distinct, etc. where possible.

Query optimization is an entire topic by itself and cannot be summarized in this documentation alone. In case the above tips don't help, do explore some SQL query optimization tutorials.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix a slow query issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the slow queries that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Requirements

This Telescope analyzer requires you to enable the Telescope `QueryWatcher`.

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet for changing the column data type is provided [here](telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact the performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## Related Analyzers

- [Telescope Duplicate Query Analyzer](telescope-duplicate-query-analyzer.html)
- [Telescope N+1 Query Analyzer](telescope-nplusone-query-analyzer.html)

## References

- [Telescope Query Watcher Documentation](https://laravel.com/docs/telescope#query-watcher)
- [Eloquent Performance Patterns Course By Jonathan Reinink](https://eloquent-course.reinink.ca/)
- [MySQL Indexing (Servers For Hackers)](https://serversforhackers.com/laravel-perf/mysql-indexing-one)