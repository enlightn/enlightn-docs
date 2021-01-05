# Undefined Constant Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

## Introduction

This analyzer scans your application code to ensure that your code does not reference undefined constants.

Some examples of such code include:

1. Trying to access an undefined constant.
2. Trying to access a constant outside of its class scope.
3. Trying to access a constant on an unknown class or a class that has not been imported properly.

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, make sure there are no undefined constants based on the examples listed above.