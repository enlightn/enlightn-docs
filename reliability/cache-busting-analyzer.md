---
pro: true
---

# Cache Busting Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\CacheBustingAnalyzer`

## Introduction

This analyzer confirms that your application uses cache busting for your assets.

When a static file gets cached it can be stored for very long periods of time before it ends up expiring (depending on your browser version and cache headers if any). So, your customers might still be served stale versions of your application assets without cache busting.

Cache busting forces browsers to load fresh assets instead of serving stale copies of the code  by using a unique file version identifier to tell the browser that a new version of the file is available. This is built-in with Laravel Mix.

## How To Fix

The Laravel Mix `version` method appends a unique hash to the filenames of all compiled files for cache busting. To fix the issue, simply add the `version` method to your `webpack.mix.js` file:

```js
mix.js('resources/js/app.js', 'public/js')
    .version();
```

After generating the versioned file, you may use the `mix` helper method within your views to load the appropriately hashed asset:

```php
<script src="{{ mix('/js/app.js') }}"></script>
```

## Skip Condition

This analyzer is skipped for local environments (if the `skip_env_specific` configuration option is set to true) or your application does not use Laravel Mix.

## References

- [Laravel Mix Documentation on Cache Busting](https://laravel.com/docs/mix#versioning-and-cache-busting)
- [Introduction to Cache Busting](https://www.keycdn.com/support/what-is-cache-busting)