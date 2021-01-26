---
pro: true
---

# Validation SQL Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\ValidationSQLInjectionAnalyzer`

## Introduction

This analyzer scans your application code to detect possible validation rule SQL injection vulnerabilities.

If your application passes user controlled request input to the `ignore` method of the unique rule, your application will be vulnerable to a SQL injection attack.

Consider the following code:

```php
use Illuminate\Validation\Rule;

Rule::unique('users')->ignore($request->input('user_id'));
```

The code above is vulnerable to SQL injection attacks because it passes user input to the `ignore` method of the unique rule.

Passing user data to the second parameter will also result in a SQL injection vulnerability:

```php
use Illuminate\Validation\Rule;

Rule::unique('users')->ignore(5, $request->get('userid_col'));
```

## How To Fix

To fix this issue, do not pass any user input data to the `ignore` method:

```php
use Illuminate\Validation\Rule;

Rule::unique('users')->ignore(auth()->id());
```

## Related Analyzers

- [Raw SQL Injection Analyzer](raw-sql-injection-analyzer.html)
- [SQL Injection Analyzer](sql-injection-analyzer.html)

## References

- [Laravel Documentation on Unique Rule Validation](https://laravel.com/docs/validation#rule-unique)
- [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
- [OWASP SQL Injection Prevention Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [OWASP Blind SQL Injection Guide](https://owasp.org/www-community/attacks/Blind_SQL_Injection)