# App Debug Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

## Introduction

This analyzer checks to see whether your app debug is set to true while your application is in production. If it is, this is an extremely critical security risk.

This is probably the highest security risk for any Laravel app. If your app debug mode is on while your application is in production, depending on your installed packages, you may expose sensitive environment variables such as your database credentials, your e-mail service credentials, your cloud service credentials or your cache server credentials. Not only that, you also risk exposing the source code along with complete stack traces when exceptions are thrown.

<img :src="$withBase('/images/laravel-debug.png')" alt="Laravel Debug Mode Security Risk" />

## How To Fix

Simply turn off your app debug mode by setting your `APP_DEBUG` environment variable in your `.env` file:

```ini
APP_DEBUG=false
```

## Related Analyzers

- [App Debug Hide Analyzer](app-debug-hide-analyzer.html)

## References

- [Laravel Documentation on Debug Mode](https://laravel.com/docs/configuration#debug-mode)
- [Debug Mode Security Risk Explained (By Mailgun)](https://www.mailgun.com/blog/a-word-of-caution-for-laravel-developers/)