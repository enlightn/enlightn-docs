---
pro: true
---

# Telescope Cache Hit Ratio Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

This analyzer calculates your cache hit ratio based on Laravel Telescope's recorded hits and misses. Cache hit ratio means the percentage of successful reads (hits) out of all read operations. Mathematically, it is defined as 

```
Cache Hit Ratio = (Total key hits) / (Total keys hits + Total key misses).
```

Typically, your cache hit ratio **should be above 80%** and the analyzer results in a failure if your cache hit ratio is found to be less than 80%.

This is a good health metric that you should track as low cache hit ratios result in larger latency in applications as most of the requests are fetching data from the disk rather than the cache.

## Why Is My Cache Hit Ratio So Low?

There could be numerous reasons why your cache hit ratio is low. Some of them include:

1. **Your keys are getting evicted:** To verify that this is happening, check your cache eviction policy and memory usage on your cache server.
2. **Your keys are expiring too soon:** This can happen if you set a very low TTL to your cache keys, which results in more misses than hits.
3. **Keys simply do not exist:** Perhaps, your application is attempting to read some cache keys but the writes are missing (or very few in number or frequency).
4. **It's too early to say:** Perhaps, you recently deployed an application or you are checking this ratio on your local machine. Remember that this metric makes sense for stable applications that have been running for some time. For new applications, you may ignore this metric for a while.
5. **You are filtering your Telescope records:** It may happen that you are filtering Telescope records such that Telescope only records cache hits and misses on an exception, etc. This will skew your cache hit ratio and if this is the case, it is recommended that you exclude this analyzer by using the `exclude_analyzers` [Enlightn configuration](/getting-started/configuration.html#configuring-analyzers) option.

## How To Reset Stats

This analyzer does all its calculations based on the Telescope records in the database. So, if you prune your Telescope records every week, your cache hit ratio stats will be reset every week. This makes it flexible for you to choose how frequently you wish to reset your stats.

## Requirements

This Telescope analyzer requires you to enable the Telescope `CacheWatcher`.

## Special Note For Performance of Telescope Analyzers

All Telescope analyzers work by querying your database for Telescope records. For enhanced query performance, we recommend that you convert the `content` column of your `telescope_entries` table to a `json` data type. Note that for PostgresQL this change is mandatory, since PostgresQL does not allow json queries on text data types.

A simple migration to do so is as follows:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTelescopeEntriesTable extends Migration
{
    /**
     * The database schema.
     *
     * @var \Illuminate\Database\Schema\Builder
     */
    protected $schema;

    /**
     * Create a new migration instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->schema = Schema::connection($this->getConnection());
    }

    /**
     * Get the migration connection name.
     *
     * @return string|null
     */
    public function getConnection()
    {
        return config('telescope.storage.database.connection');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema->table('telescope_entries', function (Blueprint $table) {
            $table->json('content')->change();
        }
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema->table('telescope_entries', function (Blueprint $table) {
            $table->longText('content')->change();
        }
    }
}
```

Telescope analyzer queries can take considerable time if you have a large number of Telescope records stored in your database. To further enhance performance, we recommend regularly pruning your Telescope entries.

Note that this query is only executed when you run the `enlightn` Artisan command and does not impact performance of your application.

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not have [Laravel Telescope](https://laravel.com/docs/telescope) installed.

## Related Analyzers

- [Redis Cache Hit Ratio Analyzer](/docs/performance/redis-cache-hit-ratio-analyzer)

## References

- [Telescope Cache Watcher Documentation](https://laravel.com/docs/telescope#cache-watcher)