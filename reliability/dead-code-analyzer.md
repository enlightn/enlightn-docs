# Dead Code Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 10 minutes  |

## Introduction

This analyzer scans your application source for any unreachable or dead code.

This analyzer is quite the wizard and detects the following situations:

1. Unreachable statements (e.g. code after return statements).
2. Unused methods or constants.
3. Statements that do not do anything (no-op).

As an example of a no-op, consider the following code:

```php{3}
function exampleFn(array $a) {
    if (count($a) === 0) {
        foreach ($a as $val) {
            echo $a;
        }
    }
}
```

In the example code above, the highlighted line is a no-op because it is iterating over an empty array every time.

## How To Fix

To fix this issue, you can delete all unreachable or dead code to improve code readability.

## References

- [What Is Dead Code](https://en.wikipedia.org/wiki/Dead_code)
- [Dead Code CWE](https://cwe.mitre.org/data/definitions/561.html)