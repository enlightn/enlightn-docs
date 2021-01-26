# Invalid Function Call Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidFunctionCallAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not contain function calls that are either non-existent or do not match the function signature.

For instance, the `bar` function call below does not match the function signature:

```php
bar(1);

function bar($foo, $bar)
{
}
```

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, you should confirm the following:

1. Confirm there is no typo in the function name.
2. Confirm that the function call matches the function signature.
3. Confirm that your application imports or autoloads any functions called.