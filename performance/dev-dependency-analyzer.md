# Dev Dependency Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 1 minute    |

## Introduction

This analyzer ensures that you do not have any dev dependencies installed in a production environment.

Dev dependencies can slow down your application in production. Dev packages are typically used for debugging and can have quite a significant overhead, especially with package auto discovery enabled.

Some of these packages record queries, events and other activities in memory, which produces both processing and memory overhead.

To run a Composer install on production, it is recommended to use the `--no-dev` flag to ensure dev dependencies are not installed:

```bash
composer install --prefer-dist --no-dev
```

## References

- [Composer Documentation on the Install Command](https://getcomposer.org/doc/03-cli.md#install-i)