---
pro: true
---

# Disk Space Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\DiskSpaceAnalyzer`

## Introduction

This analyzer confirms that your application has sufficient disk space.

If your available disk space is below the threshold percentage (90% by default), this analyzer results in a failure.

## How To Fix

To fix this, you may add space to your server or free up some disk space.

## Configuration Options

You may customize the disk space threshold percentage by setting the `disk_usage_threshold` configuration option in your `config/enlightn.php` file:

```php
'disk_usage_threshold' => 80,
```