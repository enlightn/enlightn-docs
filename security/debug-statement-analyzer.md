---
pro: true
---

# Debug Statement Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 10 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\DebugStatementAnalyzer`

## Introduction

This analyzer confirms that your application does not contain any debug statements.

If your application contains debug statements, it may potentially output the result to the response and may expose  exposes your application to numerous security risks including dumping sensitive environment variables or secrets and exposing PHP variables that may result in code injection attacks.

## How To Fix

Simply remove the debug statements in your application to fix the issue. The analyzer flags the file and lines of codes that contain the debug statements.

## Configuration Options

Enlightn provides a blacklist of debug statements or functions. You may customize this list by using the `debug_blacklist` configuration option in your `config/enlightn.php` file:

```php
'debug_blacklist' => [
    'var_dump', 'dump', 'dd', 'print_r', 'var_export', 'debug_print_backtrace',
    'debug_backtrace', 'debug_zval_dump',
],
```