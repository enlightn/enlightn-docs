# Stable Dependency Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 1 minute     |

**Class:** `Enlightn\Enlightn\Analyzers\Security\StableDependencyAnalyzer`

## Introduction

This analyzer checks whether your application uses stable versions of dependencies.

If your application is using a version lower than the most stable version (within the same major version) of your dependencies, then you may be missing some bug fixes and/or security patches that may be included with the most stable release.

Similarly, if your application is using an unstable version such as an early or beta release, then the release may be susceptible to security vulnerabilities or unknown bugs. 

## How To Fix

To update to the most stable release, run the `composer update` command with the `--prefer-stable` flag:

```bash
composer update --prefer-stable
```

::: tip
It is not recommended to run a `composer update` command on your production servers. Instead, run the above command in a local environment and commit the `composer.lock` file.
:::

## Related Analyzers

- [Up To Date Dependency Analyzer](up-to-date-dependency-analyzer.html)
- [Vulnerable Dependency Analyzer](vulnerable-dependency-analyzer.html)

## References

- [Composer Documentation on the Update Command](https://getcomposer.org/doc/03-cli.md#update-u)