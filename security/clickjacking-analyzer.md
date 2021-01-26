---
pro: true
---

# Clickjacking Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\ClickjackingAnalyzer`

## Introduction

This analyzer checks whether your application sets the `X-Frame-Options` security header to protect against clickjacking attacks. This header indicates whether a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>` tag.

If you are rendering pages in any of the above tags on your application, you would not be able to set this header. In this case, you may choose to ignore this analyzer.

## How To Fix

You can add the `X-Frame-Options` header in your web server configuration.

For Nginx, you may use the `add_header` directive in your `server` or `location` block:

```ini
add_header X-Frame-Options "SAMEORIGIN";
```

For Apache, you may use the `Header` directive in your `<VirtualHost>`, `<Directory>` or `<Location>` container:

```ini
Header always set X-Frame-Options "SAMEORIGIN"
```

Alternatively, if you do not wish to set the header at the web server level, you may add the `FrameGuard` middleware to the `web` middleware group in your `App\Http\Kernel` class:

```php{8}
/**
 * The application's route middleware groups.
 *
 * @var array
 */
protected $middlewareGroups = [
    'web' => [
        \Illuminate\Http\Middleware\FrameGuard::class,
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        // \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

    'api' => [
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];
```

## References

- [Introduction to the X-Frame-Options Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [OWASP Introduction to Clickjacking](https://owasp.org/www-community/attacks/Clickjacking)
- [OWASP Clickjacking Defense Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)
- [Nginx Add Header Directive](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
- [Apache Header Directive](https://httpd.apache.org/docs/current/mod/mod_headers.html)