# Cache Header Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 15 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Performance\CacheHeaderAnalyzer`

## Introduction

This analyzer searches for your Laravel Mix manifest file and makes requests to all assets that are versioned on Laravel Mix. We assume that the versioned assets are the ones that safe to cache, and all other assets are dynamic or un-cacheable.

If you use a CDN for your Mix assets by either setting the `app.mix_url` or the `app.asset_url` configuration, this analyzer makes requests to the CDN instead.

Based on the request, the analyzer checks for a `Cache-Control` header. If this header does not exist, the analyzer will fail.

Caching can provide a significant performance boost for your application, especially for static assets such as images, CSS and JS files. It is recommended to enable cache control headers at the web server level or at your CDN level (if applicable).

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Laravel Mix.

## References

- [Nginx Caching (Servers For Hackers)](https://serversforhackers.com/c/nginx-caching)
- [Nginx Caching Guide](https://www.nginx.com/blog/nginx-caching-guide/)
- [Apache Caching Guide](https://httpd.apache.org/docs/current/caching.html)
- [AWS Cloudfront Caching](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cache-hit-ratio.html)
- [Cloudflare Caching](https://support.cloudflare.com/hc/en-us/articles/202775670-Customizing-Cloudflare-s-cache)
- [Google Cloud CDN Caching](https://cloud.google.com/cdn/docs/caching)
- [Web Caching Tutorial](https://www.mnot.net/cache_docs/)
- [Cache Control Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
