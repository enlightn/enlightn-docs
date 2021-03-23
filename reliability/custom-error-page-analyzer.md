# Custom Error Page Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 60 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\CustomErrorPageAnalyzer`

## Introduction

This analyzer confirms that your application defines custom error pages.

If your app doesn't define custom error pages, it may hamper user experience. For instance, Laravel's custom error pages don't link back to the home page and do not match the styling of your application's pages.

Additionally, custom error pages allow potential attackers to fingerprint your application and identify Laravel as your app's framework.

**Note:** This analyzer only checks for custom 404 pages. This is the basic minimum that an application should define. By default, Laravel includes standard error pages for `401`, `403`, `404`, `419`, `429`, `500` and `503` error pages.

## How To Fix

To fix this issue, you may define custom error pages as described in the [Laravel docs](https://laravel.com/docs/errors#custom-http-error-pages).

## Skip Condition

This analyzer is skipped if your application is stateless. We assume here that stateless apps are probably not web apps and therefore, don't need custom error page views.

## References

- [Laravel Documentation on Custom Error Pages](https://laravel.com/docs/errors#custom-http-error-pages)