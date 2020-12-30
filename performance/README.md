# Performance

Enlightn has 34 automated performance checks (including 17 Enlightn Pro checks).

## :rocket: Performance Quick Wins (In-Built In Laravel)
- [Config Caching](/docs/performance/config-caching-analyzer)
- [Route Caching](/docs/performance/route-caching-analyzer)
- [View Caching](/docs/performance/view-caching-analyzer)
- [Event Caching](/docs/performance/event-caching-analyzer) <Badge text="PRO" type="tip"/>

## ⏳ Performance Bottleneck Identification
- [Unused Middleware](/docs/performance/unused-global-middleware-analyzer)
- [Unnecessary Collection Calls](/docs/performance/collection-call-analyzer)
- [Slow Queries](/docs/performance/telescope-slow-query-analyzer) <Badge text="PRO" type="tip"/>
- [Duplicate Queries](/docs/performance/telescope-duplicate-query-analyzer) <Badge text="PRO" type="tip"/>
- [N+1 Queries](/docs/performance/telescope-nplusone-query-analyzer) <Badge text="PRO" type="tip"/>
- [Memory Intensive Requests](/docs/performance/telescope-memory-intensive-request-analyzer) <Badge text="PRO" type="tip"/>
- [Slow Responses](/docs/performance/telescope-slow-response-analyzer) <Badge text="PRO" type="tip"/>
- [Too Many Model Hydrations](/docs/performance/telescope-model-hydration-analyzer) <Badge text="PRO" type="tip"/>

## 🍽️ Serving Assets
- [Minification](/docs/performance/minification-analyzer)
- [Cache Headers](/docs/performance/cache-header-analyzer)
- [CDN](/docs/performance/cdn-analyzer) <Badge text="PRO" type="tip"/>
- [Compression Headers](/docs/performance/compression-header-analyzer) <Badge text="PRO" type="tip"/>

## 🎛️ Infrastructure Tuning
- [MySQL Sockets for Single Server Setups](/docs/performance/mysql-single-server-analyzer)
- [Opcache](/docs/performance/opcache-analyzer)
- [Redis Sockets for Single Server Setups](/docs/performance/redis-single-server-analyzer) <Badge text="PRO" type="tip"/>
- [Redis Cache Hit Ratio](/docs/performance/redis-cache-hit-ratio-analyzer) <Badge text="PRO" type="tip"/>
- [Cache Hit Ratio](/docs/performance/telescope-cache-hit-ratio-analyzer) <Badge text="PRO" type="tip"/>

## 🛸 Choosing The Right Driver
- [Cache Driver](/docs/performance/cache-driver-analyzer)
- [Queue Driver](/docs/performance/queue-driver-analyzer)
- [Session Driver](/docs/performance/session-driver-analyzer)

## 🏆 Good Practices
- [Don't Install Dev Dependencies In Production](/docs/performance/dev-dependency-analyzer)
- [Avoid Debug Log Levels In Production](/docs/performance/debug-log-analyzer)
- [Avoid Env Calls Outside Of Config](/docs/performance/env-call-analyzer)
- [Use Separate Redis Database For Locks](/docs/performance/shared-cache-lock-analyzer)
- [Use Horizon For Redis Queues](/docs/performance/horizon-suggestion-analyzer)
- [Queue Your Notifications](/docs/performance/telescope-non-queued-notification-analyzer) <Badge text="PRO" type="tip"/>
- [Avoid Command Constructor Injections](/docs/performance/command-constructor-injection-analyzer) <Badge text="PRO" type="tip"/>
- [Avoid Fallback Routes For Better SEO](/docs/performance/fallback-route-analyzer) <Badge text="PRO" type="tip"/>
- [Use Redis Specific Throttling](/docs/performance/redis-throttling-analyzer) <Badge text="PRO" type="tip"/>
- [Use Redis Specific Job Rate Limiting](/docs/performance/redis-rate-limiting-analyzer) <Badge text="PRO" type="tip"/>