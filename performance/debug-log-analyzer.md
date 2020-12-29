# Debug Log Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 1 minute    |

## Introduction

This analyzer ensures that your log level is not set to debug while your application is in a non-local environment.

In a non-local environment, it is recommended that your log level should not be set to debug because of various cost factors:
- **Cost of Storage:** Debug logs are the most verbose and will increase the cost of storing logs.
- **Cost of Processing:** If you use a third party service to accumulate logs across your servers, there will be incremental costs for processing logs based on your service provider.

To change your log level, check your `config/logging.php` configuration file and your `LOG_LEVEL` env variable.

```bash
LOG_LEVEL=warning
```

## References

- [Laravel Documentation on Logging](https://laravel.com/docs/logging)
