# Hashing Strength Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

**Class:** `Enlightn\Enlightn\Analyzers\Security\HashingStrengthAnalyzer`

## Introduction

This analyzer confirms that your application has a secure hashing strength set.

## How To Fix

If you are using the bcrypt hashing driver, the recommended number of rounds is at least 12. In fact, the default bcrypt rounds in PHP was changed to 12 in 2023 and was set to 11 in 2012. As a benchmark, Laravel's default was changed to 12 in 2023 and Symfony's current default is 13. To fix this, change the rounds in your `config/hashing.php` file.

If you are using the argon hashing driver, the recommended memory cost is at least 64 MB and recommended time cost is at least 2. This is in line with Laravel's current default configuration.

## References

- [password_hash PHP docs](https://www.php.net/manual/en/function.password-hash.php)
- [PHP 2023 RFC to increase bcrypt rounds](https://wiki.php.net/rfc/bcrypt_cost_2023)