---
pro: true
---

# Host Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\HostInjectionAnalyzer`

## Introduction

This analyzer ensures that your application is not vulnerable to host injection attacks. In this attack, the attacker can change the host of a signed URL using the `X-Forwarded-Host` or the `Host` header. This would allow an attacker to generate a malicious password reset email with a link to a website controlled by the attacker.

Host injection attacks can happen via either the `X-Forwarded-Host` header or the `Host` header:
1. If your application is behind a load balancer or reverse proxy and it does not set trusted hosts, it will be exposed to host injection attacks via the `X-Forwarded-Host` header. If you have already set the `X-Forwarded-Host` header at your reverse proxy level, you may ignore this analyzer.
2. If your web server configuration is insecure, it may allow host injection attacks via the `Host` Header. This may happen if you use server name wildcards or do not have catch-all server configurations to catch all requests with unrecognized Host headers.

[This video](https://www.youtube.com/watch?v=KGTTlzZiihw) shows a live demo of the vulnerability. Note that password reset poisoning is just one of the possible attacks. Other attacks that arise from host header injection include web cache poisoning, bypassing authentication, SSRF and virtual host brute-forcing. You may learn more about this [here](https://portswigger.net/web-security/host-header/exploiting).

## Easy Way To Confirm

To confirm that this is an issue, you can use `curl` to fire the following two requests to your application:

```bash
curl https://myapp.com -H "Host: evil.com"
curl https://myapp.com -H "X-Forwarded-Host: evil.com" 
```

If you see `evil.com` in any of the response headers (e.g. Location header) or in any of the response body URLs, then you're vulnerable.

## How To Fix Host Header Injection

To fix `Host` header injection attacks, you must have a secure web server configuration.

Make sure to configure a catch-all server block (Nginx) or VirtualHost (Apache) to catch all requests with unrecognized Host headers, specify non-wildcard server names and turn on the `UseCanonicalName` directive (for Apache).

In case you do not have control over your web server configuration, you may add the `TrustHosts` middleware to your global middleware.

If you use reverse proxy CDNs such as Cloudflare, they should automatically take care of this for you.

## How To Fix X-Forwarded-Host Header Injection

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

### Option 4: Replace IP Address At Your Application Web Server(s)

If you are using Nginx, you may replace the remote IP address directly from the X-Forwarded-For header, without the need to setup trusted proxies in Laravel: 

```ini
real_ip_header X-Forwarded-For;
```

Make sure you set this at your application web server(s) and not at your load balancer/reverse proxy. This directive replaces the remote IP address with the `X-Forwarded-For` IP address that the web server receives from the load balancer/reverse proxy.

You may also add a `set_real_ip_from` directive so that it only trusts valid load balancers/reverse proxies:

```ini
set_real_ip_from 172.0.0.0/8;
```

The IP address CIDR added above should be replaced with that of your load balancers or reverse proxies (assuming they are in the same VPN). This may not be required if you have a firewall rule setup to only allow incoming traffic to your web server(s) from your load balancer/reverse proxy VPN.

After you add the directives above, remove both the `TrustProxies` and `TrustHosts` middleware.

::: warning
This analyzer currently only passes with Option 1 and 4. So, if you are solving the issue with Option 2 or 3, you may ignore this analyzer.
:::

## Skip Condition

This analyzer is skipped if your application does not use trusted proxies.

## References

- [Host Injection Demo on A Laravel App](https://www.youtube.com/watch?v=KGTTlzZiihw)
- [Laravel Documentation on Trusted Proxies](https://laravel.com/docs/requests#configuring-trusted-proxies)
- [Discussion on Host Injection on the Laravel Repo](https://github.com/laravel/laravel/pull/5477)
- [Introduction to Host Header Injection Attacks](https://portswigger.net/web-security/host-header/exploiting)
- [Nginx Documentation on the Real IP Module](http://nginx.org/en/docs/http/ngx_http_realip_module.html)
- [Nginx Documentation on the Proxy Module](http://nginx.org/en/docs/http/ngx_http_proxy_module.html)