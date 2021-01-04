---
pro: true
---

# Nova Security Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

## Introduction

This analyzer checks whether you are running Nova on a separate subdomain or not.

It is recommended to host any admin interface like Nova on a separate subdomain for the following security reasons:

1. If your main application is compromised by say session hijacking or cookie stealing attacks, this will not be escalated to your admin interface if hosted on the same subdomain.
2. While on a separate subdomain, your admin interface is not considered the same origin in your browser. So, XSS attacks on your main application cannot be escalated to your admin interface.

## How To Fix

First, host Nova on a separate subdomain by setting the `domain` configuration option in your `config/nova.php` file:

```php
/*
|--------------------------------------------------------------------------
| Nova Domain Name
|--------------------------------------------------------------------------
|
| This value is the "domain name" associated with your application. This
| can be used to prevent Nova's internal routes from being registered
| on subdomains which do not need access to your admin application.
|
*/

'domain' => 'nova.example.com',
```

Next, ensure that the `domain` configuration option in your `config/session.php` file is set to null so that Nova does not share session cookies with your main application:

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

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or if your application does not use Laravel Nova.

## Related Analyzers

- [Horizon Security Analyzer](horizon-security-analyzer.html)
- [Telescope Security Analyzer](telescope-security-analyzer.html)

## References

- [Laravel Nova Documentation](https://nova.laravel.com/docs/)