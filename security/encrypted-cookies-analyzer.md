# Encrypted Cookies Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 5 minutes    |

## Introduction

This analyzer confirms whether your application encrypts its cookies. 

## Why Encrypt Cookies?

In general, it's a good practice to encrypt all cookies. At the very least, it reduces your application's attack surface.

However, it becomes absolutely critical to use cookie encryption for the following use cases:

1. If you use the `cookie` session store, you should definitely encrypt your cookies, otherwise user specific session data would not only be readable but also may be tampered by cookie stealing or man-in-the-middle attacks. Additionally, certain jurisdictions have regulations to encrypt user sensitive personal data.
2. If you store any kind of data in cookies that should not be readable by clients (e.g. secrets or credentials), you must encrypt your cookies.
3. If you store any data in cookies that should not be tampered with, you must encrypt your cookies otherwise clients can easily change the data at their end.

It is not possible for the analyzer to assess what kind of data you are storing in cookies. Therefore, it records a failure if your application does not encrypt cookies.

Even if you don't store sensitive or user personal data in cookies, it's still recommended to use cookie encryption just to reduce the attack surface and for peace of mind!

## Skip Condition

This analyzer is skipped for stateless apps or apps that do not use cookies.

## Related Analyzers

- [App Key Analyzer](app-key-analyzer.html)

## References

- [Laravel Documentation on Cookie Encryption](https://laravel.com/docs/responses#cookies-and-encryption)