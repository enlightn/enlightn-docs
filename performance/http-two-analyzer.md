---
pro: true
---

# HTTP/2 Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 10 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\HttpTwoAnalyzer`

## Introduction

This analyzer confirms whether your application supports the HTTP/2 protocol.

If your application is served over HTTPS connections, HTTP/2 can provide a nice performance boost with request/response multiplexing, header compression and faster TLS handshakes.

## Easy Way To Confirm

To confirm that this is an issue, you can use `curl` to fire the following request to your application:

```bash
curl -I -L https://myapp.com
```

After running the above command, check for the first line in the output that displays the HTTP protocol version.

## How To Fix

If you serve your application through a CDN or load balancer service, you will need to make sure that HTTP/2 is enabled on your service.

If you serve your app directly via a web server, make sure that HTTP/2 is enabled and configured on your web server. The references listed below may help out on how to do this. 

## Skip Condition

This analyzer is skipped if your application does not have an HTTPS app URL or if the `curl` PHP extension is not installed (or does not support HTTP/2). Modern browsers only support HTTP/2 over HTTPS connections and this is why, this analyzer is skipped for non-HTTPS apps.

## References

- [Google's Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2)
- [Cloudflare's Introduction to HTTP/2](https://www.cloudflare.com/website-optimization/http2/what-is-http2/)
- [Enabling HTTP/2 on Nginx](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-with-http-2-support-on-ubuntu-18-04)
- [Nginx HTTP/2 Guide](http://nginx.org/en/docs/http/ngx_http_v2_module.html)
- [Apache HTTP/2 Guide](https://httpd.apache.org/docs/2.4/howto/http2.html)
