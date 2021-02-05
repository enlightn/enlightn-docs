# Foreach Iterable Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\ForeachIterableAnalyzer`

## Introduction

This analyzer scans your application code to ensure that you are not iterating over non-iterable types.

Consider the following code:

```php
$string = 'foo';
foreach ($string as $x) {
    //
}
```

A string is not iterable, so this would result in a runtime error. This analyzer detects this bug ahead of time for you.

There may also be situations where in certain edge cases, your variable is not iterable. For instance, consider the following code:

```php
$arrayOrFalse = [1, 2, 3];
if (doFoo()) {
    $arrayOrFalse = false;
}

foreach ($arrayOrFalse as $val) {
    //
}
```

Here, depending on the return value of the `doFoo` function, the `$arrayOrFalse` variable may or may not iterable. These errors are also detected by this analyzer to detect edge case bugs ahead of time.

There may be a small percentage of "false positives" where a condition may always be true or false, making the variable iterable at all times. In such situations, you may ignore this analyzer. 

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

This analyzer displays the files and lines of code where the possible bugs may be. You would need to evaluate whether your code actually contains a bug and fix it accordingly.

## References

- [PHP Documentation on the Foreach Construct](https://www.php.net/manual/en/control-structures.foreach.php)