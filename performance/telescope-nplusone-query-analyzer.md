---
pro: true
---

# Telescope N+1 Query Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\TelescopeNPlusOneQueryAnalyzer`

## Introduction

This analyzer scans your Telescope records to detect N+1 queries along with the lines of code that are responsible for these queries.

N+1 queries mean more network round trips and a larger number of queries. They can slow down your application and overload your database.

Note that Telescope flags N+1 queries as "duplicate". Enlightn detects duplicate queries separately in the [Telescope Duplicate Query Analyzer](telescope-duplicate-query-analyzer.html).

## How To Solve The N+1 Query Problem?

Laravel provides eager loading to solve the N+1 query problem. Consider the following code:

```php
$books = Book::all();

foreach ($books as $book) {
echo $book->author->name;
}
```

This loop will execute one query to retrieve all books and another query for each book to retrieve it's author. So, if there are 25 books, this will execute 26 queries.

With eager loading, this can to 2 queries like so:

```php
$books = Book::with('author')->get();

foreach ($books as $book) {
    echo $book->author->name;
}
```

The N+1 query problem can not only appear in reads, but can also appear in writes. While eager loading solves the N+1 read query problem, bulk queries can solve the N+1 write query problem.

Consider the following code:

```php
foreach ($bookData as $book) {
    Book::create($book);
}
```

Instead of inserting one record at a time, we can optimize this using bulk queries:

```php
Book::insert($bookData);
```

## How To Reset Findings

This analyzer does all its calculations based on the Telescope records in the database. So, if you happen to fix an N+1 query issue, you may want to prune your Telescope records so that the next time Enlightn is run, it does not pick up the N+1 queries that have already been fixed.

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
- [Telescope Slow Query Analyzer](telescope-slow-query-analyzer.html)

## References

- [Telescope Query Watcher Documentation](https://laravel.com/docs/telescope#query-watcher)
- [Laravel Documentation on Eager Loading](https://laravel.com/docs/eloquent-relationships#eager-loading)
- [Eager Loading (Servers For Hackers)](https://serversforhackers.com/laravel-perf/eager-loading)
- [Database Chunking (Servers For Hackers)](https://serversforhackers.com/laravel-perf/database-chunking)