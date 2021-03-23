---
pro: true
---

# Xdebug Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | ⚠️ Critical | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\XdebugAnalyzer`

## Introduction

This analyzer ensures that your application does not have the Xdebug extension loaded in a non-local environment (e.g. production or staging).

If you have Xdebug loaded in a production environment:
- It will significantly impact your performance. The Xdebug engine attaches to your PHP process and receives messages to stop at breakpoints.
- It can cause security issues as Xdebug tends to open ports on the server, which may be exposed to potential attackers depending on your firewall configuration.

## How To Fix

Simply uninstall Xdebug on your production or staging servers. You may refer the [Xdebug documentation](https://xdebug.org/docs/) on how to do so.

## Skip Condition

This analyzer is skipped for local or testing environments.

## References

- [Xdebug Documentation](https://xdebug.org/docs/)
- [Xdebug Performance Impact on Production](https://www.tutorialspoint.com/will-enabling-xdebug-on-a-production-server-make-php-slower)
