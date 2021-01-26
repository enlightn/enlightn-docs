# Missing Return Statement Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\MissingReturnStatementAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not have any missing return statements.

If a return type is not explicitly defined in your method or function definition, then this analyzer considers the return type defined in the docblock. 

## How To Fix

Make sure that there are no missing return statements at the file and lines of code highlighted by this analyzer. Also, make sure that your docblock is correct.