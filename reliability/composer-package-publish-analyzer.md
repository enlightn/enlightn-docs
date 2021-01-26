---
pro: true
---

# Composer Package Publish Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 10 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Reliability\ComposerPackagePublishAnalyzer`

## Introduction

This analyzer confirms that your application re-publishes package assets on update.

There may be packages such as Telescope, Nova or Horizon that also publish frontend assets. Whenever there is an update on the version of these packages, you must re-publish your package assets using a command depending on how the package supports updates. For example, to re-publish assets on Horizon, we need to run:

```bash
php artisan horizon:publish
```

It is generally a good practice to have your composer scripts setup so that you don't need to remember to re-publish assets on each update. Composer just does that for you!

## How To Fix

To fix this issue, add the command to re-publish assets in your `composer.json` file's `post-update-cmd` script like so:

```json
{
    "scripts": {
        "post-update-cmd": [
            "@php artisan horizon:publish --ansi"
        ]
    }
}
```

This way whenever you run a `composer update` or a `composer install` without a lock file present, the assets are re-published automatically for you by Composer.

You don't need to worry about this script running in production as it is anyway not recommended to run a `composer update` or `composer install` without a lock file on production servers.

## References

- [Composer Documentation on Scripts](https://getcomposer.org/doc/articles/scripts.md)
- [Laravel Horizon Documentation on Upgrading](https://laravel.com/docs/horizon#upgrading-horizon)
- [Laravel Telescope Documentation on Upgrading](https://laravel.com/docs/telescope#upgrading-telescope)
- [Laravel Nova Documentation on Upgrading](https://nova.laravel.com/docs/3.0/installation.html#updating-nova-s-assets)