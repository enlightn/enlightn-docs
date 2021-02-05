# Unset Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\UnsetAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not try to unset undefined variables.

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, make sure that unset calls are to variables that have been previously defined.