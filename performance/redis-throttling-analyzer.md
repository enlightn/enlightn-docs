---
pro: true
---

# Redis Throttling Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\RedisThrottlingAnalyzer`

## Introduction

This analyzer detects if you are using Redis in your application and also using the `ThrottleRequests` request middleware.

If you are using Redis, it is recommended to use the `ThrottleRequestsWithRedis` middleware instead of the `ThrottleRequests` middleware because of the following reasons:

1. The Redis specific middleware is atomic. This means that the counter is more accurate for high frequency hits than the `ThrottleRequests` middleware, which is not atomic.
2. The performance of the Redis specific middleware is better due to only 1 Redis operation over the network versus 5 Redis commands invoked over the network with the `ThrottleRequests` middleware.

## References

- [Laravel Documentation on Throttling](https://laravel.com/docs/authentication#login-throttling)
- [Redis Throttling PR](https://github.com/laravel/framework/pull/20761)