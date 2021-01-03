---
pro: true
---

# Column Name SQL Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer scans your application code for possible column name SQL injection vulnerabilities.

PDO does not support binding column names, so if user input is used to dictate column names, it may expose your application to column name SQL injection attacks.

Consider an example of a search box, where you give an option to the user to search books by a set of fields.

```php
use App\Models\Book;

public function searchBooks(Request $request)
{
    // Request input dictates column name in where clause.
    return Book::where($request->input('search_field'), $request->input('query'))
                ->get();
}
```

The code above is vulnerable to SQL injection attacks because user input dictates the column name for the search query.

Some other examples of vulnerable code include:

```php
use App\Models\Book;

// Request input dictates column name in order by clause.
$books = Book::orderBy($request->input('sort_column'))->get();

// Request input dictates column names in select clause.
$books = Book::where('published', true)->get($request->all());

// Request input dictates column names in having clause.
$books = Book::where('author', $request->input('author'))
            ->having($request->input('someColumn'))->get();
```

## How To Fix

Instead of directly having the user dictate the column name, you must validate that the column name is present in a whitelisted set of columns:

```php
use App\Models\Book;

public function searchBooks(Request $request)
{
    $validated = $request->validate([
        'search_field' => 'in:author,title,isbn',
    ]);

    return Book::where($validated['search_field'], $request->input('query'))
                ->get();
}
```

## References

- [Laravel Documentation on Validation](https://laravel.com/docs/validation)
- [OWASP SQL Injection Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)