# Invalid Return Type Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidReturnTypeAnalyzer`

## Introduction

This analyzer scans your application code to ensure that the return type of your methods and functions match their signature.

Some examples of such code include:

1. Void methods or functions returning something.
2. Return type mismatch.

Since PHP is a loosely typed language, some of the return types may be derived by the docblock and it could happen that your code is correct but your docblock may be incorrect for some of the errors highlighted by this analyzer.

## How To Fix

Make sure that the return types of your methods and functions match the signature. If your docblock is incorrect, you may correct your docblock for these warnings to disappear.