---
pro: true
---

# Raw SQL Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer scans your application code to detect possible SQL injection vulnerabilities with raw SQL statements.

By default, Laravel provides protection from SQL injection if you use the Eloquent ORM to build queries. However, it also provides the ability to add raw statements, which is useful for constructing complex queries. However, you need to be careful when using raw SQL queries and ensure that you use bindings for untrusted user input data.

Consider the following code:

```php
use App\Models\Book;

Book::whereRaw('author = '.$request->input('author'));
```

The code above is vulnerable to SQL injection attacks because it does not use bindings for user input data.

Some other examples of vulnerable code are:

```php
use App\Models\Book;
use Illuminate\Facades\DB;

Book::fromRaw($request->get('query'))->get();
DB::insert('insert into books where author ='.$request->input('author'));
DB::update('update books set author ='.$request->input('author'));
DB::unprepared($request->input('query'));
```

## How To Fix

To fix this issue, use query parameter bindings for user input data:

```php
use App\Models\Book;

Book::whereRaw('author = ?', [$request->input('author')]);
```

You can also use named parameter bindings:

```php
use App\Models\Book;

Book::whereRaw('author = :author', ['author' => $request->input('author')]);
```

## Related Analyzers

- [SQL Injection Analyzer](sql-injection-analyzer.html)
- [Validation SQL Injection Analyzer](validation-sql-injection-analyzer.html)

## References

- [Laravel Documentation on Raw Queries](https://laravel.com/docs/queries#raw-methods)
- [Laravel Documentation on Named Bindings](https://laravel.com/docs/database#using-named-bindings)
- [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
- [OWASP SQL Injection Prevention Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [OWASP Blind SQL Injection Guide](https://owasp.org/www-community/attacks/Blind_SQL_Injection)