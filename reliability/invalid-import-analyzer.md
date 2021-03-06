# Invalid Import Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidImportAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not contain invalid use statements.

Consider the following code:

```php
use const Uses\MY_CONSTANT;
```

If this constant does not exist or the namespace used in the "use" statement is incorrect, the analyzer will result in a failure.

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

Make sure that there is no typo in the namespace or the structure you are importing.