---
pro: true
---

# Global Variable Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 10 minutes  |

## Introduction

This analyzer confirms that your application does not use PHP global variables or functions.

This analyzer will result in a failure if it detects any of the following:

1. **Your application defines [global variables](https://www.php.net/manual/en/language.variables.scope.php) (example below):**

```php
global $x;
```

In an object oriented world, global variables are not recommended. Consider changing them to Singleton classes registered on the Laravel Service Container or static variables on classes.

2. **Your application uses [superglobal variables](https://www.php.net/manual/en/language.variables.superglobals).**

Superglobals should not be used when using a framework such as Laravel as it may create issues within your application. For instance, if you use the `$_COOKIES` variable directly, then all your cookie configuration will not be applied to the cookies (e.g. the path, domain and secure attributes). Also, ccokies will not be encrypted.

3. **Your application uses PHP native functions such as `setcookie` or `getenv`.**
   
These can cause similar issues as above. It is recommended to use Laravel helper methods, facades or service classes instead.

## How To Fix

Remove all global variable declarations and uses of superglobals or blacklisted native functions.

## Configuration Options

Enlightn uses a blacklist of global variables to disallow. You may customize this list for your own application by setting the `global_variable_blacklist` configuration option in your `config/enlightn.php` file:

```php
'global_variable_blacklist' => [
    'GLOBALS', '_SERVER', '_GET', '_POST', '_FILES', '_COOKIE', '_SESSION', '_REQUEST', '_ENV',
],
```

Similarly, Enlightn also uses a blacklist of global native functions to disallow. You may customize this list for your own application by setting the `global_function_blacklist` configuration option in your `config/enlightn.php` file:

```php
'global_function_blacklist' => [
    'header', 'header_remove', 'headers_list', 'http_response_code', 'setcookie', 'setrawcookie',
    'session_abort', 'session_cache_expire', 'session_cache_limiter', 'session_commit', 'session_create_id',
    'session_decode', 'session_destroy', 'session_encode', 'session_gc', 'session_get_cookie_params',
    'session_id', 'session_is_registered', 'session_module_name', 'session_name', 'session_regenerate_id',
    'session_register_shutdown', 'session_register', 'session_reset', 'session_save_path',
    'session_set_cookie_params', 'session_set_save_handler', 'session_start', 'session_status',
    'session_unregister', 'session_unset', 'session_write_close', 'getenv', 'putenv',
],
```

## References

- [PHP Documentation on Global Variables](https://www.php.net/manual/en/language.variables.scope.php)
- [PHP Documentation on SuperGlobals](https://www.php.net/manual/en/language.variables.superglobals)