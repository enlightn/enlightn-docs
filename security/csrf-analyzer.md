# CSRF Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

This analyzer checks for any routes (with the POST, PUT, PATCH or DELETE methods) that are un-protected against Cross Site Request Forgery (CSRF) attacks.

CSRF is an attack that tricks the victim into submitting a malicious request. Laravel provides CSRF protection out of the box with the `VerifyCSRFToken` middleware, which is included in the web middleware group by default. 

## How To Fix

By default, Laravel adds the `VerifyCSRFToken` middleware in the `web` middleware group of your `Kernel`. That's a sensible option because you would want to protect all web routes from CSRF attacks (stateless routes don't need protection).

If you wish to add CSRF protection to your web routes, you can add the `VerifyCSRFToken` middleware in the `web` middleware group of your `App\Http\Kernel` class:

```php{13}
/**
 * The application's route middleware groups.
 *
 * @var array
 */
protected $middlewareGroups = [
    'web' => [
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

If you wish to exclude some specific web routes from the CSRF middleware, it is advisable to add these routes to the `$except` variable in the CSRF middleware class.

## Which Routes Should Be Excluded From CSRF Protection?

Typically, you would want to exclude only stateless routes (e.g. APIs or webhooks) from CSRF protection. These routes would probably anyway be outside of the `web` middleware group because you would want an entirely different set of middleware for stateless routes. However, if you want to include some of these routes in the `web` middleware group, the `$except` variable is your friend here. 

## Skip Condition

This analyzer is skipped for stateless apps or apps that do not use cookies.

## References

- [Laravel Documentation on CSRF Protection](https://laravel.com/docs/csrf)
- [OWASP Guide on CSRF Attacks](https://owasp.org/www-community/attacks/csrf)
- [OWASP CSRF Protection Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)