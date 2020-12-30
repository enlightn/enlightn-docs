---
pro: true
---

# Event Caching Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 5 minutes   |

## Introduction

This analyzer ensures that:

1. Your events are not cached while your app is in a local environment.
2. Your events are cached while your app is in a non-local environment.

If your events are cached in local, any changes that you make to your event registrations will not be reflected in your application. This is why it is not recommended to cache your events in a local environment.

In production environments, it is recommended to cache your events to speed up your event registration process.

## How To Cache Your Events

You may cache your Laravel events using the `event:cache` Artisan command:
```bash
php artisan event:cache
```

If you wish to clear your event cache, you may use the `event:clear` Artisan command:
```bash
php artisan event:clear
```

::: tip
You should make sure to re-cache your events as part of your application deployment so that any changes in event registrations are updated.
:::

## Skip Condition

This analyzer is skipped if there are no available events to cache in your application. 

## References

- [Laravel Documentation on Event Caching](https://laravel.com/docs/events#event-discovery-in-production)