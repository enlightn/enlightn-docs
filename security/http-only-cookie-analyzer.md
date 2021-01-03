# HTTP Only Cookie Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

## Introduction

A cookie with an `HttpOnly` attribute is inaccessible from Javascript. The `http_only` configuration option in your `config/session.php` file determines whether your session cookie should set the `HttpOnly` attribute.

This analyzer confirms that your session cookie sets the `HttpOnly` attribute.

If this is not enabled, it may expose your application to cross-site scripting (XSS) attacks. Unless, you have a very specific use case to require session cookies to be accessed from Javascript, it is recommended to enable this option.

## How To Fix

Simply set the `http_only` attribute in your `config/session.php` file to true:

```php
/*
|--------------------------------------------------------------------------
| HTTP Access Only
|--------------------------------------------------------------------------
|
| Setting this value to true will prevent JavaScript from accessing the
| value of the cookie and the cookie will only be accessible through
| the HTTP protocol. You are free to modify this option if needed.
|
*/
'http_only' => true,
```

## Skip Condition

This analyzer is skipped if your app is stateless (does not use sessions).

## References

- [HttpOnly OWASP Guide](https://owasp.org/www-community/HttpOnly)
- [Introduction to the HttpOnly Cookie Attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Restrict_access_to_cookies)
- [OWASP Cookie Security Guide](https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf)
- [OWASP Session Management Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)