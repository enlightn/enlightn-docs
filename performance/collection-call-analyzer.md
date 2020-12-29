# Collection Call Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major      | 10 minutes   |

## Introduction

This analyzer conducts a static analysis on your application code to check if you have any calls to a Laravel collection that could have been handled at the query level instead. This reduces heavy queries on the database and prevents unnecessary loops over collections. Some examples of such calls are:

```php
use App\Models\User;

User::all()->count();
// Optimized version: User::count().

$user->roles()->pluck('name')->contains('a role name');
// Optimized version: $user->roles()->where('name', 'a role name')->exists().

$user = User::all()->first();
// Optimized version: $user = User::first().
```

## References

- [How To Defer Collection Calls To The Query Builder](https://codeburst.io/how-to-use-laravels-eloquent-efficiently-d46f5c392ca8) 
