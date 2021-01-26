---
pro: true
---

# Telescope Non Queued Notification Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\TelescopeNonQueuedNotificationAnalyzer`

## Introduction

This analyzer scans your Telescope records to detect if there are any notifications that are not queued.

It is recommended to queue notifications for faster response times and better performance. Since notifications depend on third party services, queueing notifications offer several advantages:

1. Faster response times.
2. Decouple notifications and responses. This means that if the notifications fail (due to say a third party outage), they are retried later while also returning a 200 ok response to users.

There may be a few specific use cases where notifications must not be queued. In those specific cases, you may ignore the failed status of this analyzer (better safe than sorry!).

## Requirements

This Telescope analyzer requires you to enable the Telescope `NotificationWatcher`.

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix an issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the notifications that have already been fixed.

Generally, it would be a good practice to prune your Telescope records each time you deploy fresh code or push a new release. If your application is relatively stable, consider pruning Telescope records at a frequency (say every week or daily).

## Query Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A migration code snippet on changing the column data type is provided [here](telescope-cache-hit-ratio-analyzer.html#special-note-for-performance-of-telescope-analyzers).

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries. 

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## References

- [Telescope Notification Watcher Documentation](https://laravel.com/docs/telescope#notification-watcher)