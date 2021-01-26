# Invalid Method Call Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\InvalidMethodCallAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not contain method calls that are either non-existent or do not match the method scope or signature.

Some examples of invalid method calls include:

1. Calling a private method from an ancestor class.
2. Missing required parameters in method calls.
3. Expecting a return from a void method.
4. Calls to undefined methods.
5. Calls to abstract methods.
6. Static calls to instance methods.
7. Calling methods outside of class scope.
8. Method signature mismatch.

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, you need to make sure that the method exists, is accessible within the scope, and the call matches the method signature.