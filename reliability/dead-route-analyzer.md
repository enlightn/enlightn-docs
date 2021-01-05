---
pro: true
---

# Dead Route Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 10 minutes  |

## Introduction

This analyzer confirms that your application does not contain any dead routes.

Dead routes are routes that have invalid methods or actions (e.g. controllers that do not exist or methods that cannot be invoked, etc.). This may happen due to any of the following reasons:

1. Routes are registered to reference controllers that don't exist.
2. Routes are registered to reference methods on controllers that don't exist.
3. Routes are registered to reference methods that are private.

## How To Fix

This analyzer nicely formats all the dead routes and displays the uri and applicable methods for the dead route(s). To fix this, you may either delete the dead route registration (if it is no longer required) or you may correct the references or access visibility of the method.

## References

- [Laravel Documentation on Routing](https://laravel.com/docs/routing)