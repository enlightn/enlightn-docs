---
pro: true
---

# Host Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes   |

## Introduction

This analyzer ensures that your application uses the `TrustHosts` middleware if trusted proxies are setup.

If your application is behind a load balancer or reverse proxy and it does not set trusted hosts, it will be exposed to host injection attacks. In this attack, the attacker can change the host of a signed URL using the `X-Forwarded-Host` header. This would allow an attacker to generate a malicious password reset email with a link to a website controlled by the attacker.

If you have already set the `X-Forwarded-Host` header at your reverse proxy level, you may ignore this analyzer.

## How To Fix

### Option 1: Add the TrustHosts Middleware

Simply add the `TrustHosts` middleware to your global middleware as indicated below:

```php{9}
/**
 * The application's global HTTP middleware stack.
 *
 * These middleware are run during every request to your application.
 *
 * @var array
 */
protected $middleware = [
    \App\Http\Middleware\TrustHosts::class,
    \App\Http\Middleware\TrustProxies::class,
    \Fruitcake\Cors\HandleCors::class,
    \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
    \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
    \App\Http\Middleware\TrimStrings::class,
    \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
];
```

### Option 2: Whitelist Your TrustedProxy Headers

By default, the `TrustProxies` middleware whitelists all headers including `X-Forwarded-Host`. You may specifically set the whitelist headers to only `X-Forwarded-For` in your `App\Http\Middleware\TrustProxies` class, so that even if the attacker sets the `X-Forwarded-Host` header, it will not be trusted by your application:

```php
/**
 * The headers that should be used to detect proxies.
 *
 * @var int
 */
protected $headers = Request::HEADER_X_FORWARDED_FOR;
```

### Option 3: Explicitly Set All X-Forwarded Headers At Your Reverse Proxy

You may also explicitly set all `X-Forwarded-*` headers at your reverse proxy so that they override any headers set by a possible attacker. To do this in Nginx, you can add the following directives:

```ini
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Port $server_port;
```

### Option 4: Replace IP Address At Your Reverse Proxy

If you are using Nginx, you may replace the remote IP address directly from the X-Forwarded-For header, without the need to setup trusted proxies in Laravel: 

```ini
real_ip_header X-Forwarded-For;
```

After you add the directive above, remove both the `TrustProxies` and `TrustHosts` middleware.

::: warning
This analyzer currently only passes with Option 1 and 4. So, if you are solving the issue with Option 2 or 3, you may ignore this analyzer.
:::

## Skip Condition

This analyzer is skipped if your application does not use trusted proxies.

## References

- [Host Injection Demo on A Laravel App](https://www.youtube.com/watch?v=KGTTlzZiihw)
- [Discussion on Host Injection on the Laravel Repo](https://github.com/laravel/laravel/pull/5477)