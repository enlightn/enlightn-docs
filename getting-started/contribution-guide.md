# Contribution Guide

Please read this contribution guide before creating an issue or pull request.

## Bug Reports

If you file a bug report, please make sure of the following:

1. The bug or issue isn't already filed as an issue on the [issue tracker](https://github.com/enlightn/enlightn/issues).
2. The [pull requests](https://github.com/enlightn/enlightn/pulls) don't already have a fix in progress.
3. Use the issue template provided and include steps to reproduce along with the Enlightn, Laravel and PHP versions.

## PR Requirements

You may submit a PR to Enlightn OSS and even to Enlightn Pro (request us for access to the Github repo if needed). Make sure they meet the following requirements:

1. The PR must comply with [PSR-2 coding standards](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md).
2. PRs must be backed with tests.
3. Existing tests must not fail after your changes unless the test itself is the bug.
4. Each PR must have only 1 feature. Split up multiple features in multiple PRs.
5. The PR must be accompanied with a PR to the [docs repo](https://github.com/enlightn/enlightn-docs).
6. If you are submitting a new check (analyzer) to Enlightn OSS, make sure that the feature does not already exist with Enlightn Pro.