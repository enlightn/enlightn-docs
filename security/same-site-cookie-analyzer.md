---
pro: true
---

# Same Site Cookie Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\SameSiteCookieAnalyzer`

## Introduction

This analyzer confirms that your application sets a secure 'SameSite' cookie attribute on your session cookies. Note that this is also the default value for all cookies in your application.

The `SameSite` attribute of the `Set-Cookie` HTTP response header allows you to declare if your cookie should be restricted to a first-party or same-site context. It allows 3 values:

1. **Lax:** Cookies are not sent on normal cross-site subrequests but are sent when a user is navigating to the origin site.
2. **Strict:** Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites.
3. **None:** Cookies will be sent in all contexts, i.e in responses to both first-party and cross-origin requests. This is a dangerous setting and can expose your application to possible CSRF attacks.

Laravel also allows a `null` value, which means that the `SameSite` attribute will not be specified in the cookie. This is also a dangerous setting because it defaults depending on the browser version. New browser versions have a default of `Lax` whereas older browser versions have a default of `None`.

## How To Fix

To fix this issue, simply set the `same_site` configuration option in your `config/session.php` file to "lax" or "strict":

```php
/*
|--------------------------------------------------------------------------
| Same-Site Cookies
|--------------------------------------------------------------------------
|
| This option determines how your cookies behave when cross-site requests
| take place, and can be used to mitigate CSRF attacks. By default, we
| will set this value to "lax" since this is a secure default value.
|
| Supported: "lax", "strict", "none", null
|
*/

'same_site' => 'lax',
```

## Related Analyzers

- [Http Only Cookie Analyzer](http-only-cookie-analyzer.html)
- [Cookie Domain Analyzer](cookie-domain-analyzer.html)
- [Secure Cookie Analyzer](secure-cookie-analyzer.html)

## References

- [OWASP Guide on the SameSite Cookie Attribute](https://owasp.org/www-community/SameSite)
- [Introduction to the SameSite Attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
- [OWASP CSRF Prevention Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [OWASP Cookie Security Guide](https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf)
- [OWASP Session Management Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)