---
pro: true
---

# Secure Cookie Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

## Introduction

This analyzer confirms that your application sets an appropriate 'secure' cookie attribute on your session cookies. Note that this is also the default value for all cookies in your application.

The analyzer fails if this value is set to `"false"` as this exposes the application to man-in-the-middle attacks. 

A `"true"` value means that session cookies will only be sent to the server if the browser has an HTTPS connection. A `null` value automatically sets the attribute to `"true"` when the request is already using HTTPS and if not already on HTTPS, it disables the attribute.

If your application is HTTPS only, it is recommended to set this to `"true"`. Otherwise, it is recommended to set to `null` so that the attribute is auto-enabled on HTTPS connections.

## How To Fix

To fix this issue, simply set the `secure` configuration option in your `config/session.php` file (or the corresponding `SESSION_SECURE_COOKIE` env variable) to `"true"` or `null`:

```php
/*
|--------------------------------------------------------------------------
| HTTPS Only Cookies
|--------------------------------------------------------------------------
|
| By setting this option to true, session cookies will only be sent back
| to the server if the browser has a HTTPS connection. This will keep
| the cookie from being sent to you if it can not be done securely.
|
*/

'secure' => null,
```

## Related Analyzers

- [Http Only Cookie Analyzer](http-only-cookie-analyzer.html)
- [Cookie Domain Analyzer](cookie-domain-analyzer.html)
- [Same Site Cookie Analyzer](same-site-cookie-analyzer.html)

## References

- [OWASP Guide on the Secure Cookie Attribute](https://owasp.org/www-community/controls/SecureCookieAttribute)
- [Introduction to Cookie Attributes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Restrict_access_to_cookies)
- [OWASP Cookie Security Guide](https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf)
- [OWASP Session Management Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)