# Unset Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\UnsetAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not try to unset undefined variables.

## How To Fix

The analyzer highlights the files and lines of code where these bugs may appear. To fix them, make sure that unset calls are to variables that have been previously defined.