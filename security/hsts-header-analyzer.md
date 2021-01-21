# HSTS Header Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

So many applications today are HTTPS only. Besides the obvious security and trust benefits, HTTPS also boosts your SEO ranking.

For HTTPS only apps, it is recommended to include the HTTP Strict Transport Security (HSTS) header. This header tells browsers that it should only be accessed using HTTPS, instead of using HTTP and helps prevent man-in-the-middle attacks.

This analyzer detects whether your application sets the HSTS header if it is an HTTPS only app.

## How To Fix

You can add the HSTS security header in your web server configuration.

For Nginx, you may use the `add_header` directive in your `server` or `location` block:

```ini
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

For Apache, you may use the `Header` directive in your `<VirtualHost>`, `<Directory>` or `<Location>` container:

```ini
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
```

## Configuration Options

By default, this analyzer looks for a named route called `login` to inspect the headers in the response. You may change the route the analyzer hits by specifying the `guest_url` configuration option in your `config/enlightn.php` file:

```php
/*
|--------------------------------------------------------------------------
| Guest URL
|--------------------------------------------------------------------------
|
| Specify any guest url or path (preferably your app's login url) here. This
| would be used by Enlightn to inspect your application HTTP headers.
| Example: '/login'.
|
*/
'guest_url' => '/login',
```

## Skip Condition

This analyzer is skipped if your app is not HTTPS only (verified by the APP URL or the `session.secure` configuration option).

## References

- [Introduction to the HSTS Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [OWASP HSTS Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- [Nginx Add Header Directive](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
- [Apache Header Directive](https://httpd.apache.org/docs/current/mod/mod_headers.html)