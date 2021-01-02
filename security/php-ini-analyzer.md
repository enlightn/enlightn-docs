# PHP Ini Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

This analyzer checks whether your PHP configuration is secure.

## Recommended PHP Settings

1. `allow_url_fopen`: Should be disabled. Disabling this minimizes the risk of escalating [LFIs](https://www.acunetix.com/blog/articles/local-file-inclusion-lfi/) to [RFIs](https://www.acunetix.com/blog/articles/remote-file-inclusion-rfi/) and reduces the risk of remote code execution, information disclosure and cross-site scripting (XSS).
2. `allow_url_include`: Should be disabled. This has an effect similar to `allow_url_fopen`.
3. `expose_php`: Should be disabled. If this configuration is on, an attacker may see the version of PHP running on the application server.
4. `display_errors`: Should be disabled to avoid so that detailed application error messages  which may include sensitive information, is not exposed to untrusted sources.
5. `display_startup_errors`: Should be disabled so that errors that occur during PHP's startup sequence are not exposed.
6. `log_errors`: Should be enabled so that error messages are logged to the server's error log file.
7. `ignore_repeated_errors`: Should be disabled. 

If any of the above settings differ from the recommendations, this analyzer would result in a failure.

::: tip
While changing the above settings, make sure you make the relevant changes to the `php.ini` file for both the FPM and CLI.
:::

## References

- [OWASP PHP Configuration Guide](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html)
- [PHP Documentation on Configuration](https://www.php.net/manual/en/errorfunc.configuration.php)