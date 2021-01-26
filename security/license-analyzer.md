# License Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 60 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Security\LicenseAnalyzer`

## Introduction

This analyzer makes sure that you are legally allowed to use your backend dependency packages.

To do so, it gets the licenses of all your Composer packages and then matches them with a whitelist of licenses. If any package has a license that is not included in the whitelist, this analyzer will result in a failure.

## How To Fix

The error message displays a list of packages that you may not be legally allowed to use. Check out the licenses of those packages.

If there are some licenses that you cannot use, you may have to switch to another package or buy a commercial license (if available).

## Configuration Options

By default, this analyzer assumes that the MIT, Apache-2.0, ISC, BSD Clause 2 & 3, LGPL, CC0 and Unlicense licenses are legally valid to use for proprietary or commercial applications. You may change this using the `license_whitelist` configuration option in your `config/enlightn.php` file:

```php
'license_whitelist' => [
    'Apache-2.0', 'Apache2', 'BSD-2-Clause', 'BSD-3-Clause', 'LGPL-2.1-only', 'LGPL-2.1',
    'LGPL-2.1-or-later', 'LGPL-3.0', 'LGPL-3.0-only', 'LGPL-3.0-or-later', 'MIT', 'ISC',
    'CC0-1.0', 'Unlicense',
],
```

If there are certain packages for which you have already purchased licenses, or if you have verified that they are fine to use, you may include them in your `commercial_packages` configuration option:

```php
 'commercial_packages' => [
    'laravel/nova', 'enlightn/enlightnpro',
],
``` 

## References

- [Comparison of Free and Open Source Licenses](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licences)
- [Composer Licenses Command](https://getcomposer.org/doc/03-cli.md#licenses)
- [List of OSI Approved Licenses](https://opensource.org/licenses/alphabetical)
- [List of FSF Approved Licenses](https://www.gnu.org/licenses/license-list.html)