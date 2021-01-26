# Unguarded Models Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 30 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Security\UnguardedModelsAnalyzer`

## Introduction

This analyzer checks whether your application unguards models. Unguarding models can expose your application to mass assignment vulnerabilities. 

## Why Not Unguard?

Guarding models is Laravel's mechanism to protect against mass assignment. While properly validating requests can mitigate the risk of mass assignment, guarding models by default makes your code more readable towards mass assignment vulnerabilities.

Consider the following code:

```php
$user->fill($request->all())->save();
```

If the `User` model is unguarded, the above code can result in a mass assignment vulnerability.

However, if you have the `User` model as guarded, you would need to change the above code to:

```php
$user->forceFill($request->all())->save();
```

This code is much more readable. A simple scan of the above code signals to the code reviewer that there may be a possible mass assignment vulnerability in play.

This is why it is not recommended to unguard models.

## Related Analyzers

- [Fillable Foreign Key Analyzer](fillable-foreign-key-analyzer.html)
- [Mass Assignment Analyzer](mass-assignment-analyzer.html)

## References

- [OWASP Mass Assignment Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html)
- [Laravel Documentation on Mass Assignment](https://laravel.com/docs/eloquent#mass-assignment)