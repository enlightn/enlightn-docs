---
pro: true
---

# Horizon Provisioning Plan Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer confirms that you have a Horizon provisioning plan configured for your application's current environment.

If this is not configured, Horizon will not run in your current environment.

## How To Fix

To fix this issue, you may add your current environment as a key to the `environments` configuration option in your `config/horizon.php` file:

```php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'maxProcesses' => 10,
            'balanceMaxShift' => 1,
            'balanceCooldown' => 3,
        ],
    ],

    'local' => [
        'supervisor-1' => [
            'maxProcesses' => 3,
        ],
    ],
],
```

## Skip Condition

This analyzer is skipped if your application does not use Horizon.

## References

- [Laravel Horizon Documentation on Configuration](https://laravel.com/docs/horizon#configuration)