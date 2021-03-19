# Performance

Enlightn has 36 automated performance checks (including 18 Enlightn Pro checks).

## :rocket: Performance Quick Wins (In-Built)
- [Autoloader Optimization](autoloader-optimization-analyzer.html)
- [Config Caching](config-caching-analyzer.html)
- [Route Caching](route-caching-analyzer.html)
- [View Caching](view-caching-analyzer.html)
- [Event Caching](event-caching-analyzer.html) <Badge text="PRO" type="tip"/>

## ⏳ Performance Bottleneck Identification
- [Unused Middleware](unused-global-middleware-analyzer.html)
- [Unnecessary Collection Calls](collection-call-analyzer.html)
- [Slow Queries](telescope-slow-query-analyzer.html) <Badge text="PRO" type="tip"/>
- [Duplicate Queries](telescope-duplicate-query-analyzer.html) <Badge text="PRO" type="tip"/>
- [N+1 Queries](telescope-nplusone-query-analyzer.html) <Badge text="PRO" type="tip"/>
- [Memory Intensive Requests](telescope-memory-intensive-request-analyzer.html) <Badge text="PRO" type="tip"/>
- [Slow Responses](telescope-slow-response-analyzer.html) <Badge text="PRO" type="tip"/>
- [Too Many Model Hydrations](telescope-model-hydration-analyzer.html) <Badge text="PRO" type="tip"/>

## 🍽️ Serving Assets
- [Minification](minification-analyzer.html)
- [Cache Headers](cache-header-analyzer.html)
- [CDN](cdn-analyzer.html) <Badge text="PRO" type="tip"/>
- [Compression Headers](compression-header-analyzer.html) <Badge text="PRO" type="tip"/>

## 🎛️ Infrastructure Tuning
- [MySQL Sockets for Single Server Setups](mysql-single-server-analyzer.html)
- [Opcache](opcache-analyzer.html)
- [Redis Sockets for Single Server Setups](redis-single-server-analyzer.html) <Badge text="PRO" type="tip"/>
- [Redis Cache Hit Ratio](redis-cache-hit-ratio-analyzer.html) <Badge text="PRO" type="tip"/>
- [Cache Hit Ratio](telescope-cache-hit-ratio-analyzer.html) <Badge text="PRO" type="tip"/>
- [HTTP/2](http-two-analyzer.html) <Badge text="PRO" type="tip"/>

## 🛸 Choosing The Right Driver
- [Cache Driver](cache-driver-analyzer.html)
- [Queue Driver](queue-driver-analyzer.html)
- [Session Driver](session-driver-analyzer.html)

## 🏆 Good Practices
- [Don't Install Dev Dependencies In Production](dev-dependency-analyzer.html)
- [Avoid Debug Log Levels In Production](debug-log-analyzer.html)
- [Avoid Env Calls Outside Of Config](env-call-analyzer.html)
- [Use Separate Redis Database For Locks](shared-cache-lock-analyzer.html)
- [Use Horizon For Redis Queues](horizon-suggestion-analyzer.html)
- [Queue Your Notifications](telescope-non-queued-notification-analyzer.html) <Badge text="PRO" type="tip"/>
- [Avoid Command Constructor Injections](command-constructor-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Avoid Fallback Routes For Better SEO](fallback-route-analyzer.html) <Badge text="PRO" type="tip"/>
- [Use Redis Specific Throttling](redis-throttling-analyzer.html) <Badge text="PRO" type="tip"/>
- [Use Redis Specific Job Rate Limiting](redis-rate-limiting-analyzer.html) <Badge text="PRO" type="tip"/>