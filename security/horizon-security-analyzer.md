---
pro: true
---

# Horizon Security Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\HorizonSecurityAnalyzer`

## Introduction

This analyzer checks whether you are running Horizon on a separate subdomain or not.

It is recommended to host any admin interface like Horizon on a separate subdomain for the following security reasons:

1. If your main application is compromised by say session hijacking or cookie stealing attacks, this will not be escalated to your admin interface if hosted on the same subdomain.
2. While on a separate subdomain, your admin interface is not considered the same origin in your browser. So, XSS attacks on your main application cannot be escalated to your admin interface.

## How To Fix

First, host Horizon on a separate subdomain by setting the `domain` configuration option in your `config/horizon.php` file:

```php
/*
|--------------------------------------------------------------------------
| Horizon Domain
|--------------------------------------------------------------------------
|
| This is the subdomain where Horizon will be accessible from. If this
| setting is null, Horizon will reside under the same domain as the
| application. Otherwise, this value will serve as the subdomain.
|
*/

'domain' => 'horizon.example.com',
```

Next, ensure that the `domain` configuration option in your `config/session.php` file is set to null so that Horizon does not share session cookies with your main application:

```php
/*
|--------------------------------------------------------------------------
| Session Cookie Domain
|--------------------------------------------------------------------------
|
| Here you may change the domain of the cookie used to identify a session
| in your application. This will determine which domains the cookie is
| available to in your application. A sensible default has been set.
|
*/

'domain' => null,
```

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Laravel Horizon.

## Related Analyzers

- [Telescope Security Analyzer](telescope-security-analyzer.html)
- [Nova Security Analyzer](nova-security-analyzer.html)

## References

- [Laravel Horizon Documentation](https://laravel.com/docs/horizon)