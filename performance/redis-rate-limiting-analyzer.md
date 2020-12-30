---
pro: true
---

# Redis Rate Limiting Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes  |

## Introduction

This analyzer detects if you are using Redis in your application and also using the `RateLimited` job middleware.

If you are using Redis, it is recommended to use the `RateLimitedWithRedis` job middleware instead of the `RateLimited` job middleware because of the following reasons:

1. The Redis specific middleware is atomic. This means that the counter is more accurate for high frequency hits than the `RateLimited` middleware, which is not atomic.
2. The performance of the Redis specific middleware is better due to only 1 Redis operation over the network versus 5 Redis commands invoked over the network with the `RateLimited` middleware.

## References

- [Laravel Documentation on Job Rate Limiting](https://laravel.com/docs/queues#rate-limiting)
- [Job Rate Limiting PR](https://github.com/laravel/framework/pull/34829)