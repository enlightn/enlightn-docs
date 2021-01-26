# Unused Global Middleware Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes  |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\UnusedGlobalMiddlewareAnalyzer`

## Introduction

Laravel has almost everything built-in. But sometimes, we fall into the trap of just using the Laravel skeleton code rather than cleaning it up for your specific application.

This analyzer checks to see if there are any "unused" global middleware classes lying around in your `App\Http\Kernel` class. The boilerplate middleware classes it checks includes:

1. HandleCors: If your application does not use CORS (your `cors.paths` configuration is an empty array), then this middleware is flagged as unused.
2. TrustProxies: If your application does not configure trusted proxies (using the `trustedproxy.proxies` configuration), then this middleware is flagged as unused.
3. TrustHosts: If your application does not use setup trusted proxies, then you do not need to setup trusted hosts either and this middleware is flagged as unused.

## How To Fix

To fix this issue, simply remove all the unused global middleware from your `App\Http\Kernel` class.

## References

- [Laravel Documentation on CORS](https://laravel.com/docs/routing#cors)
- [Laravel Documentation on Trusted Proxies](https://laravel.com/docs/requests#configuring-trusted-proxies)