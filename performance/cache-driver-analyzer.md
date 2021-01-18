# Cache Driver Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 1 hour       |

## Introduction

Choosing the right cache driver can make a major impact to the performance of your application. While making this choice, it is important for you to understand the differences between the major drivers.

Remember that even if you are not using caching directly in your application, the Laravel framework still uses caching for rate limiting, unique job locks and its queueing system.

| Driver    | Suitable For | Supports Multiple Servers  | Efficient  | Supports Locks | Comments |
| :-------- | :----------- | :-------------------------:|:----------:|:---------------:|:---------|
| Null      | Testing Only | No                         | No         | No             |  The null driver does not cache anything. All cache read attempts result in misses.    |
| Array     | Testing Only | No                         | No         | Yes (Non Persistent) |  Caches are not persisted outside the running PHP process. So, cache writes are only valid within the same request, and a subsequent result results in a cache miss.    |
| File      | Single Server Setup | No                  | Yes        | Yes (Same Server Only) |  File caching is only suitable for single server setups since it uses the local filesystem. Also, filesystem IO results in a lower throughput than in-memory drivers. |
| Database  | Local & Testing | Yes                     | No         | Yes            |  Database caching is not suitable for production environments, even though it does support multiple server setups. In-memory cache drivers such as Redis and Memcached perform much better than database caching. |
| Redis     | All          | Yes                        | Yes        | Yes            |  Robust option. |
| Memcached | All          | Yes                        | Yes        | Yes            |  Robust option. |
| DynamoDB  | All          | Yes                        | Yes        | Yes            |  Robust option. |

## References

- [Laravel Caching Documentation](https://laravel.com/docs/cache#configuration)
- [Cache Driver Benchmarks](https://www.georgebuckingham.com/laravel-cache-driver-performance/)