---
pro: true
---

# PCNTL Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 2 minutes   |

## Introduction

This analyzer confirms that the [PCNTL PHP extension](https://www.php.net/manual/en/book.pcntl.php) is loaded for job timeout support.

If the extension is not loaded, your jobs will never timeout. It is recommended to install the extension if your application uses queues.

## How To Fix

To fix this issue, simply install the PCNTL PHP extension on your web server.

## Skip Condition

This analyzer is skipped if your application queue driver is set to `sync` or `null`.

## References

- [PHP Documentation on the PCNTL Extension](https://www.php.net/manual/en/book.pcntl.php)
- [Laravel Documentation on Job Timeouts](https://laravel.com/docs/queues#timeout)