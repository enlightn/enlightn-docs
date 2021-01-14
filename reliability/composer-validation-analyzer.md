# Composer Validation Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer confirms that your application has a valid `composer.json` and `composer.lock` file.

Under the hood, this analyzer uses the [composer validate](https://getcomposer.org/doc/03-cli.md#validate) CLI command.

## How To Fix

Run `composer validate` to view the errors in your composer files:

```bash
composer validate
```

## References

- [Composer Documentation on the Validate Command](https://getcomposer.org/doc/03-cli.md#validate)