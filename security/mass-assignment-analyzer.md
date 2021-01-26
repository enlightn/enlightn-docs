# Mass Assignment Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Security\MassAssignmentAnalyzer`

## Introduction

This analyzer scans your application code for potential mass assignment vulnerabilities. Mass assignment is a vulnerability where an ORM pattern in a web application is abused to modify data items that the user should not be allowed to access.

## Examples of Mass Assignment

Here are a couple of examples of mass assignment vulnerabilities that the analyzer detects:

```php
use App\Models\User;

User::forceCreate($request->all());
```

In the example above, all the request input parameters are "force-filled" to the `User` model. This can expose your application to mass assignment. For instance, perhaps there is a `isAdmin` column in the users table, which can be overwritten by the request data.

Some other examples of mass assignment are as below:

```php
$user->forceFill($request->all())->save();
User::update($request->all());
User::firstOrCreate($request->all());
User::upsert($request->all(), []);
User::where('user_id', 1)->update($request->all());
```

## How To Fix

Instead of using the `all` method, you can use the `only` or `validated` (for form requests) methods to fix the above mass assignment vulnerabilities:

```php
$user->forceFill($request->validated())->save();
$user->forceFill($request->only(['email', 'address', 'country', 'phone']))->save();
```

## Related Analyzers

- [Fillable Foreign Key Analyzer](fillable-foreign-key-analyzer.html)
- [Unguarded Models Analyzer](unguarded-models-analyzer.html)

## References

- [OWASP Mass Assignment Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html)
- [Laravel Documentation on Mass Assignment](https://laravel.com/docs/eloquent#mass-assignment)
- [Laravel Documentation on the Request Only Method](https://laravel.com/docs/requests#retrieving-a-portion-of-the-input-data)