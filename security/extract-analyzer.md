---
pro: true
---

# Extract Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 5 minutes   |

## Introduction

This analyzer scans your application code to detect any `extract` function calls on untrusted user input.

The `extract` function imports variables from an associative array. This function treats keys as variable names.

Consider the following code:

```php
extract(request()->all());
```

The code above could potentially lead to hijacking superglobal variables such as `$_COOKIE` or `$_SERVER`, or even variables set in the scope of the function call.

So, for instance, if the request data contains a variable `_SERVER[HTTP_USER_AGENT]`, then it can change hijack the user agent for the request.

## How To Fix

Instead of using the `all` method, you can use the `only` or `validated` (for form requests) methods to fix the extract vulnerability:

```php
extract(request()->only(['search', 'id']));
```

## References

- [PHP Documentation on Extract](https://www.php.net/manual/en/function.extract.php)
- [Laravel Documentation on the Request Only Method](https://laravel.com/docs/requests#retrieving-a-portion-of-the-input-data)