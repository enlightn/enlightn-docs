---
pro: true
---

# Session Timeout Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 2 minutes    |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\SessionTimeoutAnalyzer`

## Introduction

This analyzer confirms that your application sets an appropriate session timeout.

The session timeout represents the time interval during which if there is no user activity, the user will be logged out. Session timeouts should be as low as possible so that users that may be using public terminals are automatically logged out after inactivity, thereby preventing user accounts from being compromised.

This analyzer results in a failure for any session timeout that is greater than a day.

## How To Fix

To fix this issue, simply set the `lifetime` configuration option in your `config/session.php` file (or the `SESSION_LIFETIME` env value) to a value less than a day (1440 minutes). Laravel's default is 2 hours seems like a smart choice for most applications:

```php
/*
|--------------------------------------------------------------------------
| Session Lifetime
|--------------------------------------------------------------------------
|
| Here you may specify the number of minutes that you wish the session
| to be allowed to remain idle before it expires. If you want them
| to immediately expire on the browser closing, set that option.
|
*/

'lifetime' => env('SESSION_LIFETIME', 120),
```

Alternatively, you could set the session to auto-expire on browser closing in your `config/session.php` file:

```php
'expire_on_close' => true,
```

## Skip Condition

This analyzer is skipped if the session is set to auto-expire on close or if the app is stateless (does not use sessions).

## References

- [OWASP Session Timeout Guide](https://owasp.org/www-community/Session_Timeout)
- [OWASP Session Management Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#session-expiration)