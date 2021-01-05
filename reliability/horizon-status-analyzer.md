---
pro: true
---

# Horizon Status Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes   |

## Introduction

This analyzer confirms that Horizon is currently running on your application.

## How To Fix

If you are using `Supervisor`, you can start the Horizon process worker with the following command:

```bash
sudo supervisorctl start laravel-worker:*
```

You may need to change the worker name above based on your Supervisor configuration.

You may also run Horizon in the foreground. This may be useful for development in local environments:

```bash
php artisan horizon
```

## Skip Condition

This analyzer is skipped if your application does not use Horizon.

## References

- [Laravel Horizon Documentation on Supervisor Configuration](https://laravel.com/docs/queues#supervisor-configuration)
- [Supervisor Documentation on CLI Commands](http://supervisord.org/running.html#running-supervisorctl)