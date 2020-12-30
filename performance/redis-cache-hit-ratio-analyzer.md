---
pro: true
---

# Redis Cache Hit Ratio Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 5 minutes  |

## Introduction

This analyzer calculates your Redis cache hit ratio. Cache hit ratio means the percentage of successful reads (hits) out of all read operations. Mathematically, it is defined as 

```
Cache Hit Ratio = (Total key hits) / (Total keys hits + Total key misses).
```

Typically, your Redis cache hit ratio **should be above 80%** and the analyzer results in a failure if your cache hit ratio is found to be less than 80%.

This is a good health metric that you should track as low cache hit ratios result in larger latency in applications as most of the requests are fetching data from the disk rather than the cache.

## Why Is My Cache Hit Ratio So Low?

There could be numerous reasons why your Redis cache hit ratio is low. Some of them include:

1. **Your keys are getting evicted:** To verify that this is happening, check your Redis eviction policy and memory usage by running the command `info stats` in the Redis CLI. One of the stats returned will be `evicted_keys` that indicates how many keys have been evicted. If you have many evicted keys (as compared with `keyspace_hits`), it may mean that your Redis server is running out of memory.
2. **Your keys are expiring too soon:** This can happen if you set a very low TTL to your Redis keys, which results in more misses than hits.
3. **Keys simply do not exist:** Perhaps, your application is attempting to read some cache keys but the writes are missing (or very few in number or frequency).
4. **It's too early to say:** Perhaps, you recently deployed an application or you are checking this ratio on your local machine. Remember that this metric makes sense for stable applications that have been running for some time. For new applications, you may ignore this metric for a while.

## How To Reset Redis Stats

To monitor the health of your application and Redis server, you may want to run Enlightn on a frequent basis (say every month or so). If you are doing this, it will be helpful to reset your Redis stats so that the next time Enlightn runs, it only shows stats for the period from the last run.

To do so, run the following command on your Redis CLI after running Enlightn (so that stats are reset for the next run):

```
config resetstat
```

## References

- [Key Redis Monitoring Metrics](https://scalegrid.io/blog/6-crucial-redis-monitoring-metrics/)
- [Understanding Redis Performance](https://blog.newrelic.com/product-news/redis-performance-metrics/)
- [Redis Documentation on Info Stats](https://redis.io/commands/info)
- [Redis Documentation on the Reset Stats Command](https://redis.io/commands/config-resetstat)