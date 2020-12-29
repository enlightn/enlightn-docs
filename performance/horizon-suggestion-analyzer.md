# Horizon Suggestion Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 15 minutes  |

## Introduction

This analyzer simply suggests you install Horizon if you are using the `redis` queue driver. Horizon not only offers a beautiful dashboard for monitoring queues and jobs, but it also offers configurable provisioning plans for queue workers, load balancing strategies and memory management features.

Simply put, you are missing out on a lot of nice features and performance boosts if you don't have Horizon installed while using the `redis` queue driver! 

## Skip Condition

This analyzer is skipped if your application does not use the Redis queue driver.

## References

- [Horizon Documentation](https://laravel.com/docs/horizon)
- [Introducing Horizon](https://medium.com/@taylorotwell/introducing-laravel-horizon-4585f66e3e)