---
pro: true
---

# Storage Link Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\StorageLinkAnalyzer`

## Introduction

This analyzer confirms that your application's symbolic links have been created.

Without these symbolic links, the `public` Storage disk (and other possible disks that you may have customized) will not work. 

## How To Fix

To fix this issue, simply run the `storage:link` Artisan command:

```bash
php artisan storage:link
```

## References

- [Laravel Documentation on the Public Storage Disk](https://laravel.com/docs/filesystem#the-public-disk)