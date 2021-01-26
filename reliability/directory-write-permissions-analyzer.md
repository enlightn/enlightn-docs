# Directory Write Permissions Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\DirectoryWritePermissionsAnalyzer`

## Introduction

This analyzer confirms that your storage and cache directories are writable.

If the storage and cache directories are not writable, your application will not be able to store files or cache files for performance optimization such as the route and services cache files.

## How To Fix

To fix this, set write permissions on the directories that are not writable:

```bash
sudo chmod -R ug+w storage
sudo chmod -R ug+w bootstrap/cache
```

## Configuration Options

By default, this analyzer only checks whether the `storage` and `bootstrap/cache` directories are writable. You may customize this by using the `writable_directories` configuration option in your `config/enlightn.php` file:

```php
'writable_directories' => [
    storage_path(),
    app()->bootstrapPath('cache'),
],
```

## References

- [Laravel Documentation on Directory Structure](https://laravel.com/docs/structure)