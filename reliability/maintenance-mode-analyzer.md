# Maintenance Mode Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 1 minute     |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\MaintenanceModeAnalyzer`

## Introduction

This analyzer confirms that your application is not currently in maintenance mode.

## How To Fix

If you would like to disable maintenance mode, you may run the `up` Artisan command:

```bash
php artisan up
```

## References

- [Laravel Documentation on Maintenance Mode](https://laravel.com/docs/configuration#maintenance-mode)