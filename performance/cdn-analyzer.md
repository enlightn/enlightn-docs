---
pro: true
---

# CDN Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 30 minutes  |

## Introduction

This analyzer checks to see if your application is using a CDN while in production.

A CDN can significantly improve performance and provides the following benefits:

1. Faster loading speed and response times.
2. Decrease server load.
3. Most CDNs also offer DDoS protection.
4. CDNs often provide analytics and insights on asset popularity, load statistics and more out of the box. 

Some popular CDNs include Cloudflare, AWS Cloudfront and Azure CDN. Do check them out if you are interested in boosting asset serving performance on your application.

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not have any assets (fonts, images, CSS, JS files).

## References

- [CDN Introduction](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
- [CDN Benefits](https://www.keycdn.com/blog/why-use-a-cdn)
