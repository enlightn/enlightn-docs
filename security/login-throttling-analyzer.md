# Login Throttling Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

This analyzer ensures that your application uses login throttling for protection against brute force attacks.

This analyzer searches for usage of throttling middleware (`ThrottleRequests` or `ThrottleRequestsWithRedis` classes) or the `RateLimiter` class. If you have setup login throttling at your web server level or are using your own custom throttling mechanism (not in-built with Laravel), then you may ignore this analyzer.

## How To Throttle Using Nginx

You could setup login throttling at your web server level. To do this in Nginx, here's an example snippet:

```ini
http {
    limit_req_zone $binary_remote_addr zone=ratelimitzone:10m rate=15r/m;
    ...
    server {
        ...
        location /login {
            limit_req zone=ratelimitzone;
        }
    }
}
```

::: warning
If your incoming requests are spread across multiple servers, this won't work as each server will maintain its own count.
:::

## How To Throttle Using Middleware

You may use the `ThrottleRequests` or `ThrottleRequestsWithRedis` middleware for your login routes to throttle login requests.

```php
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(['guest', 'throttle:60,1']);
```

The login route registered above allows a maximum of 60 login requests per minute.

## How To Throttle Using Rate Limiters

You can also use the `RateLimiter` facade to customize your throttling logic.

First, register a named rate limiter in the `configureRateLimiting` method of your application's `App\Providers\RouteServiceProvider` class:

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

/**
 * Configure the rate limiters for the application.
 *
 * @return void
 */
protected function configureRateLimiting()
{
    RateLimiter::for('login', function (Request $request) {
        return Limit::perMinute(60)->by($request->input('email').'|'.$request->ip());
    });
}
```

The login rate limiter above allows a maximum of 60 requests per minute by a combination of email and IP address.

Next, configure the throttling middleware to use the named rate limiter:

```php
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(['guest', 'throttle:login']);
```

## Skip Condition

This analyzer is skipped for stateless apps or apps that use Laravel UI or Fortify (as these packages have custom in-built throttling mechanisms).

## References

- [OWASP Brute Force Attack Guide](https://owasp.org/www-community/attacks/Brute_force_attack)
- [OWASP Brute Force Protection Guide](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks)
- [Laravel Documentation on Login Throttling](https://laravel.com/docs/authentication#login-throttling)
- [Laravel Documentation on Route Rate Limiting](https://laravel.com/docs/routing#rate-limiting)
- [Nginx Rate Limiting Guide](https://www.nginx.com/blog/rate-limiting-nginx/)
- [Apache Rate Limiting Guide](https://httpd.apache.org/docs/2.4/mod/mod_ratelimit.html)