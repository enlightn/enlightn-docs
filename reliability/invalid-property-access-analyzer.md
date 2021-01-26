# Invalid Property Access Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidPropertyAccessAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not reference class properties that are defined or inaccessible.

Some examples of such code include:

1. Trying to access undefined class properties (this is a good practice but not required).
2. Trying to access properties that are inaccessible based on scope (e.g. accessing a private property outside the class scope).

## How To Fix

It may not be mandatory to "fix" or change the code. If you are referencing undefined class properties, you may define them as a matter of good practice. However, if you are referencing inaccessible properties, you would definitely need to fix your code by removing such references.