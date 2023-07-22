# Missing Model Relation Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major     | 10 minutes    |

**Class:** `Enlightn\Enlightn\Analyzers\Reliability\MissingModelRelationAnalyzer`

## Introduction

This analyzer scans your application code to ensure that your code does not refer to model relations that do not exist.

If your code refers to any relations that do not exist, then it may result in runtime exceptions.

As an example, consider the following code:

```php
class BookController extends Controller
{
    public function getBooks($title)
    {
        return Book::where('title', $title)->whereHas('author')->get();
    }
}

class Book extends Model
{
    public function authors(): HasMany
    {
        return $this->hasMany(BananaModel::class);
    }
}
```

The above code refers to the `author` relation in the `Book` model, however, the model contains the `authors` relation instead.

:::tip Viewing Detailed Error Messages
To view detailed error messages, use the `--details` option while running the `enlightn` Artisan command.
:::

## How To Fix

Make sure the relation you are referring to exists in the relevant model(s).