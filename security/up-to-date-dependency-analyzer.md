# Up To Date Dependency Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 1 minute     |

## Introduction

This analyzer confirms that your application's dependencies are up-to-date.

If the installed dependencies do not match the versions of your `composer.lock` file, this analyzer would result in a failure. This could mean that you may have possibly missed bug fixes, security patches or features (without which your code is broken).  

## How To Fix

To fix this issue, simply run the `composer install` command:

```bash
composer install
```

If you wish to run this on a production server, you should add the `--no-dev` flag:

```bash
composer install --no-dev
```

## Related Analyzers

- [Stable Dependency Analyzer](stable-dependency-analyzer.html)

## References

- [Composer Documentation on the Install Command](https://getcomposer.org/doc/03-cli.md#install-i)