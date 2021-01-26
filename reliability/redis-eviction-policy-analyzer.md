---
pro: true
---

# Redis Eviction Policy Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 10 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\RedisEvictionPolicyAnalyzer`

## Introduction

This analyzer confirms that an appropriate eviction policy is set on your Redis servers. The eviction policy defines the methodology that Redis uses when the database exceeds the memory limit.

Redis supports the following eviction policies:

1. **noeviction:** Returns an error if the memory limit has been reached when trying to insert more data. This is the default policy.
2. **allkeys-lru:** Evicts the least recently used keys out of all keys.
3. **allkeys-lfu:** Evicts the least frequently used keys out of all keys.
4. **allkeys-random:** Randomly evicts keys out of all keys.
5. **volatile-lru:** Evicts the least recently used keys out of all keys with an “expire” field set.
6. **volatile-lfu:** Evicts the least frequently used keys out of all keys with an “expire” field set.
7. **volatile-random:** Randomly evicts keys with an “expire” field set.
8. **volatile-ttl:** Evicts the shortest time-to-live keys out of all keys with an “expire” field set.

If you are using Redis for queues or sessions, your Redis database need to be persistent. This means that you should set your eviction policy to `noeviction`.

If you are using Redis only for caching (and not for queues/sessions), your eviction policy should not be `noeviction`, otherwise your Redis servers will error out when the memory limit is reached. For cache-only servers, we recommend using the `allkeys-lfu` (on Redis 4+) or `allkeys-lru` (on Redis 3+) policy.

## How To Fix

To change your Redis eviction policy, make the following change to your configuration file (typically at `/etc/redis/redis.conf`):

```ini
maxmemory-policy noeviction
```

Replace "noeviction" above with the policy you wish to set. Then, restart your Redis service.

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Redis.

## References

- [Using Redis as an LRU Cache](https://redis.io/topics/lru-cache)
- [How To Choose A Redis Eviction Policy](https://www.digitalocean.com/docs/databases/redis/how-to/choose-eviction-policies/)