# Deprecated Code Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 5 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\DeprecatedCodeAnalyzer`

## Introduction

This analyzer confirms that your application does not use any deprecated code. Deprecated code is subject to be removed in future versions of your dependent packages or third party app code. So, this may introduce bugs when you update your dependencies.

This analyzer detects the following situations:

1. Calls to deprecated functions or class methods.
2. Accessing deprecated properties or deprecated code blocks (scope marked as deprecated).
3. Implementation or extension of deprecated classes, interfaces or traits.

As an example, consider the following `app\Http\Kernel.php` code:

```php{3}
public function handle($request)
{
    $this->routeMiddleware = ['auth' => Authenticate::class,];

    return parent::handle($request);
}
```

In Laravel 10, `routeMiddleware` was deprecated and renamed to `middlewareAliases`. This means that the `routeMiddleware` property might be removed in future Laravel releases and could break your application in such a scenario.

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

To fix this, you should remove all usage of deprecated code.

## References

- [OWASP Guidelines on Deprecated Code](https://owasp.org/www-community/vulnerabilities/Use_of_Obsolete_Methods)
- [Deprecated or Obsolete Code CWE](https://cwe.mitre.org/data/definitions/477.html)