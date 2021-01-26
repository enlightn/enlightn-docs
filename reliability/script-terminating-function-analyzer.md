---
pro: true
---

# Script Terminating Function Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\ScriptTerminatingFunctionAnalyzer`

## Introduction

This analyzer confirms that your application does not use unrecommended script terminating functions.

To terminate your script, it is recommended to return the exit status for CLI Commands and use the `abort` helper for web requests.

## How To Fix

To fix this issue, remove all unrecommended script terminating functions. Instead, return the exit status for CLI Commands and use the `abort` helper for web requests.

## Configuration Options

By default, this analyzer checks script terminating functions against a blacklist. You may customize this list using the `terminating_function_blacklist` configuration option in your `config/enlightn.php` file:

```php
'terminating_function_blacklist' => [
    'exit', 'die',
],
```

## References

- [Laravel Documentation on Console Commands](https://laravel.com/docs/artisan#writing-commands)
- [Laravel Documentation on the Abort Helper](https://laravel.com/docs/helpers#method-abort)