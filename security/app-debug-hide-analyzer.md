# App Debug Hide Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 5 minutes    |

## Introduction

This analyzer confirms whether your application hides sensitive environment variables while in debug mode and in a non-local environment.

If your application is in production and debug mode is on, the security risk is critical. Refer [App Debug Analyzer](app-debug-hide-analyzer.html) for more details.

If your application is in a staging environment, it may be fine to turn on debug mode but you must hide all sensitive environment variables.

## How To Fix

Refer the [Laravel documentation on Hiding Environment Variables From Debug Pages](https://laravel.com/docs/7.x/configuration#hiding-environment-variables-from-debug) to fix this issue. Note that depending on your Laravel version, the name of the configuration parameter may differ, so be sure to visit the Laravel docs for the version of Laravel your application is using.

## Skip Condition

This analyzer is skipped if your application does not have the `filp/whoops` package installed.

## Related Analyzers

- [App Debug Analyzer](app-debug-analyzer.html)