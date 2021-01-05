# Up To Date Migrations Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

## Introduction

This analyzer ensures that there are no pending migrations in your application.

## How To Fix

You may fix this by simply running the `migrate` Artisan command:

```bash
php artisan migrate
```

## References

- [Laravel Documentation on Migrations](https://laravel.com/docs/migrations)