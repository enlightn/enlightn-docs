# PHP Ini Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Security\PHPIniAnalyzer`

## Introduction

This analyzer checks whether your PHP configuration is secure.

## Recommended PHP Settings

1. `allow_url_fopen`: Should be disabled. Disabling this minimizes the risk of escalating [LFIs](https://www.acunetix.com/blog/articles/local-file-inclusion-lfi/) to [RFIs](https://www.acunetix.com/blog/articles/remote-file-inclusion-rfi/) and reduces the risk of remote code execution, information disclosure and cross-site scripting (XSS).
2. `allow_url_include`: Should be disabled. This has an effect similar to `allow_url_fopen`.
3. `expose_php`: Should be disabled. If this configuration is on, an attacker may see the version of PHP running on the application server.
4. `display_errors`: Should be disabled to avoid exposing detailed application error messages which may include sensitive information.
5. `display_startup_errors`: Should be disabled to avoid exposing errors that occur during PHP's startup sequence.
6. `log_errors`: Should be enabled to log error messages to the server's error log file.
7. `ignore_repeated_errors`: Should be disabled.

If any of the above settings differ from the recommendations, this analyzer would result in a failure.

::: tip
While changing the above settings, make sure you make the relevant changes to the `php.ini` file for both the FPM and CLI.
:::

## Configuration Options

By default, this analyzer includes all the checks listed above. You may customize the checks in your `config/enlightn.php` file using the `php_secure_settings` configuration option. This is an associative array with the keys representing the checks to test for and the boolean values (true/false) representing whether the configuration should be enabled or disabled. So, for instance, if you would like to remove a specific check, you can delete the respective key for that check.

```php
'php_secure_settings' => [
    'allow_url_fopen' => false,
    'allow_url_include' => false,
    'expose_php' => false,
    'display_errors' => false,
    'display_startup_errors' => false,
    'log_errors' => true,
    'ignore_repeated_errors' => false,
],
```

## References

- [OWASP PHP Configuration Guide](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html)
- [PHP Documentation on Configuration](https://www.php.net/manual/en/errorfunc.configuration.php)