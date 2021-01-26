# Invalid Offset Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidOffsetAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not use invalid offsets.

Some examples of invalid offsets include:

1. Trying to access offsets of variables that are not arrays and do not implement the `ArrayAccess` interface.
2. Trying to access offsets that do not exist.
3. Offset type mismatch.

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, make sure there are no invalid offsets based on the examples listed above.