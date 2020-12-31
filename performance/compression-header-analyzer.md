---
pro: true
---

# Compression Header Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 30 minutes  |

## Introduction

This analyzer checks to see if your application uses appropriate compression headers on your JS and CSS asset files.

Compression headers are so underrated and they can provide a massive performance boost to your application. Picture this: [minification](minification-analyzer.html) optimizes about ~20% file size, whereas compression headers can save 80%!

Just to give you an idea, the performance boost from compression headers is probably equal to that gained by using every other frontend optimization strategy possible (tree shaking, minification, CSS purging, etc.).

## Why Not Compress Everything?

Most image formats are already compressed (except maybe SVG that is basically XML). This is why you must not use gzip or br compression on most image formats that are already compressed. It can do more harm than actually boost performance. Compression is typically useful for text formats (CSS, JS, XML, JSON, etc.).

## How To Setup Compression (Nginx)

If you use Nginx, you can setup compression fairly easily by modifying your `/etc/nginx/nginx.conf` file. Here's a small configuration snippet from [Matt Stauffer's blog](https://mattstauffer.com/blog/enabling-gzip-on-nginx-servers-including-laravel-forge/) that may help (feel free to customize based on your needs):

```ini
  # Compression

  # Enable Gzip compressed.
  gzip on;

  # Enable compression both for HTTP/1.0 and HTTP/1.1.
  gzip_http_version  1.1;

  # Compression level (1-9).
  # 5 is a perfect compromise between size and cpu usage, offering about
  # 75% reduction for most ascii files (almost identical to level 9).
  gzip_comp_level    5;

  # Don't compress anything that's already small and unlikely to shrink much
  # if at all (the default is 20 bytes, which is bad as that usually leads to
  # larger files after gzipping).
  gzip_min_length    256;

  # Compress data even for clients that are connecting to us via proxies,
  # identified by the "Via" header (required for CloudFront).
  gzip_proxied       any;

  # Tell proxies to cache both the gzipped and regular version of a resource
  # whenever the client's Accept-Encoding capabilities header varies;
  # Avoids the issue where a non-gzip capable client (which is extremely rare
  # today) would display gibberish if their proxy gave them the gzipped version.
  gzip_vary          on;

  # Compress all output labeled with one of the following MIME-types.
  gzip_types
    application/atom+xml
    application/javascript
    application/json
    application/rss+xml
    application/vnd.ms-fontobject
    application/x-font-ttf
    application/x-web-app-manifest+json
    application/xhtml+xml
    application/xml
    font/opentype
    image/svg+xml
    image/x-icon
    text/css
    text/plain
    text/x-component;
  # text/html is always compressed by HttpGzipModule
```

## How To Setup Compression On CDNs

Almost all CDNs support automatic compression based on your file type. Check out your CDN's documentation on how to enable compression on your CDN. We have also listed links to the compression docs of popular CDNs in the references section below.

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Laravel Mix.

## Related Analyzers

- [Minification Analyzer](minification-analyzer.html)

## References

- [Difference Between Minification and Compression](https://css-tricks.com/the-difference-between-minification-and-gzipping/)
- [Nginx Compression Guide](https://docs.nginx.com/nginx/admin-guide/web-server/compression/)
- [Apache Compression Guide](https://httpd.apache.org/docs/current/mod/mod_deflate.html#enable)
- [AWS Cloudfront Compression Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html)
- [Cloudflare Compression Guide](https://support.cloudflare.com/hc/en-us/articles/200168396-What-will-Cloudflare-compress-)
- [Azure CDN Compression Guide](https://docs.microsoft.com/en-us/azure/cdn/cdn-improve-performance)
