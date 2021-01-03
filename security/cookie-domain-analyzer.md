---
pro: true
---

# Cookie Domain Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 1 minute     |

## Introduction

The cookie `domain` attribute specifies which hosts are allowed to receive the cookie. If not specified, it defaults to the same origin that set the cookie, excluding subdomains.

This analyzer confirms that your session cookie `domain` attribute is set to null if you do not have subdomain route registrations.

If a domain attribute is specified, then subdomains are always included, potentially making your application less secure.

## How To Fix

Simply set your `domain` configuration option in your `config/session.php` file to null:

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

This analyzer is skipped if there are route registrations that relate to more than one unique domain or sub-domain in your application.

## References

- [Introduction to Cookies and Cookie Attributes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [OWASP Cookie Security Guide](https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf)
- [OWASP Session Management Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP Cookie Attribute Security Testing](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes)