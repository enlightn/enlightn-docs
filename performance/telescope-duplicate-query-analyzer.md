---
pro: true
---

# Telescope Duplicate Query Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\TelescopeDuplicateQueryAnalyzer`

## Introduction

This analyzer scans your Telescope records to check for duplicate queries - more than one of the same query being executed for the same request.

Note that if the raw query is the same but the bindings are different, this analyzer will pass as this scenario does not really entail a duplicate query (and rather is an eager loading or bulk query issue). This behaviour differs from how Telescope flags duplicate queries.

Once duplicate queries are found, Enlightn will highlight the routes that have these duplicate queries. You can further investigate why these queries are triggered using Telescope.

## How To Remove Duplicate Queries?

There could be numerous reasons why your application has duplicate queries. First, you must identify where these queries are duplicated.

For instance, perhaps two middlewares or service classes trigger the same query on the same route. In this case, you could internally cache the query result (in memory) by extracting it to a repository class.

Perhaps, multiple views are rendered within the same request, and they are all computing the same set of data. In this case, you may use [view composers](https://laravel.com/docs/views#view-composers) and extract the logic of data computation outside of the views.

Typically, the duplicate query issue can be solved if you extract the data computation to another class (which caches the result in memory) if multiple classes or services need the same set of data.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix a duplicate query issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the duplicate queries that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Requirements

This Telescope analyzer requires you to enable the Telescope `QueryWatcher` and `RequestWatcher`.

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet on changing the column data type is provided [here](telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## Related Analyzers

- [Telescope N+1 Query Analyzer](telescope-nplusone-query-analyzer.html)
- [Telescope Slow Query Analyzer](telescope-slow-query-analyzer.html)

## References

- [Telescope Query Watcher Documentation](https://laravel.com/docs/telescope#query-watcher)