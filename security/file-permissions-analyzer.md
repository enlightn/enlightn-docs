# File Permissions Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 60 minutes   |

## Introduction

This analyzer confirms whether your application sets safe directory and file permissions.

In general, all Laravel directories should be setup with a max permission level of 775 and non-executable files with a max permission level of 664. Executable files such as Artisan or deployment scripts should be provided with a max permission level of 775.

If your permissions are more lax than the ones above, then this would expose your application to be compromised if another account on the same server is compromised.

## Configuration Options

You may change the files/directories and permission levels to be checked by this analyzer using the `allowed_permissions` configuration option:

```php
'allowed_permissions' => [
    base_path() => '775',
    app_path() => '775',
    resource_path() => '775',
    storage_path() => '775',
    public_path() => '775',
    config_path() => '775',
    database_path() => '775',
    base_path('routes') => '775',
    app()->bootstrapPath() => '775',
    app()->bootstrapPath('cache') => '775',
    app()->bootstrapPath('app.php') => '664',
    base_path('artisan') => '775',
    public_path('index.php') => '664',
    public_path('server.php') => '664',
],
```

## References

- [Laravel Documentation on Directory Structure](https://laravel.com/docs/structure)