# Fillable Foreign Key Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer confirms that your application does not have any "fillable" foreign keys to protect against mass assignment.

Mass assignment is a vulnerability where an ORM pattern in a web application is abused to modify data items that the user should not be allowed to access. To protect against [mass assignment](https://laravel.com/docs/eloquent#mass-assignment), Laravel provides the ability to whitelist (using `$fillable`) or blacklist (using `guarded`) the model attributes that can be assigned user data.

Typically, you would not want to whitelist foreign keys to avoid ownership stealing. Consider the user model below:

```php
/**
 * The attributes that are mass assignable.
 *
 * @var array
 */
$fillable = [
    'team_id',
];
``` 

Here, `team_id` is a fillable property. This means that attackers can abuse this pattern to change to teams that belong to other users or organizations.

## Exceptions

There may be cases where it is perfectly fine to whitelist foreign keys. For instance, if they relate to static data, keys such as `country_id` or something like a `type_id` may be valid fillable foreign keys.

It is difficult for the analyzer to assess such situations. So, it flags a failure nonetheless (better safe than sorry right?). Feel free to ignore such warnings.

## Related Analyzers

- [Mass Assignment Analyzer](mass-assignment-analyzer.html)
- [Unguarded Models Analyzer](unguarded-models-analyzer.html)

## References

- [Laravel Documentation on Mass Assignment](https://laravel.com/docs/eloquent#mass-assignment)
- [OWASP Cheatsheet on Mass Assignment](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html)