# Vulnerable Dependency Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Critical   | 60 minutes   |

## Introduction

This analyzer scans your application's backend dependencies for any known vulnerabilities.  

## How To Fix

If your application has any PHP dependencies with known vulnerabilities, you must update your dependencies to a stable version that includes the security patch associated with the vulnerabilities.

The analyzer lists the version of your package that has the vulnerability along with a title that may include the Common Vulnerabilities and Exposures (CVE) ID associated with the vulnerability. You can visit the [CVE website](https://cve.mitre.org/) and search for the CVE ID to get the version of the package that includes a security patch of the vulnerability.

A composer update with the `--prefer-stable` should fix the issue if a patch has been released:

```bash
composer update --prefer-stable
```

::: tip
It is not recommended to run a `composer update` command on your production servers. Instead, run the above command in a local environment and commit the `composer.lock` file.
:::

## Related Analyzers

- [Frontend Vulnerable Dependency Analyzer](frontend-vulnerable-dependency-analyzer.html)
- [Stable Dependency Analyzer](stable-dependency-analyzer.html)

## References

- [CVE Website](https://cve.mitre.org/)
- [Composer Documentation on the Update Command](https://getcomposer.org/doc/03-cli.md#update-u)