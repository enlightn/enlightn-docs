# Invalid Method Override Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidMethodOverrideAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not contain invalid method overrides.

Some examples of invalid method overrides include:

1. Overriding final methods.
2. Non-static methods overriding static methods or vice versa.
3. Method overrides do not match original method signature.

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, you need to make sure that the method override signature matches the original method signature and you are not overriding final methods.