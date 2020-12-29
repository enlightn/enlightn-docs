# Minification Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 5 minutes  |

## Introduction

This analyzer searches for JS and CSS files within your public directory (configurable). If it finds any un-minified JS or CSS files within the public directory while your application is in a non-local environment, the result of the analysis is flagged as failed.

Minification of assets can provide a significant performance boost for your application and is recommended for production.

Laravel Mix makes it super easy to minify assets. All you need to do is run the `prod` script while using Laravel Mix:

```bash
npm run prod
```

## Configuration Options

By default, this analyzer assumes that your compiled JS and CSS files are somewhere within the public directory (sub-directories included). You may customize your build path in your `config/enlight.php` file using the `build_path` configuration option, so that this analyzer searches for compiled CSS and JS files within your custom build path:

```php
'build_path' => public_path(),
```

## Skip Condition

If there are no JS or CSS files within your configured build path, this analyzer is skipped.

## References

- [Laravel Mix Documentation](https://laravel.com/docs/mix)
- [Introduction To Minification](https://www.keycdn.com/support/how-to-minify-css-js-and-html)