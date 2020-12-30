---
pro: true
---

# Fallback Route Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 10 minutes  |

## Introduction

Laravel provides a `Route::fallback` method to register a route that will be executed when no other route matches the incoming request. This may be helpful for testing maybe but can be harmful to your application's SEO.

The problem lies in the response status code. Imagine your fallback route returns a single-page application (SPA) view that recognizes an unknown page and will render a page not found view. While, the page not found is shown to the user, the route will return a `200` response status code.

Search engines such as Google call these soft 404s and currently have very little support to detect and flag such pages as 404s on their own. This can hamper your application's search engine ranking in the long run and is not recommended.

## Alternative Cleaner Way For SPA Routing

There can be many ways to solve this problem, however, all of them require us to avoid any `Route::fallback` method calls. One simple example to approach this is as follows:

First, list your SPA routes in a `routes/spa.php` file:

```php
return [

    /*
    |--------------------------------------------------------------------------
    | SPA Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register SPA routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | is assigned the "web" middleware and directed to the SPA action.
    |
    */

    // '/users/{userId}',

];
```

Next, register your SPA routes in the boot method of your `RouteServiceProvider`:

```php
/**
 * The SPA route action for the application.
 *
 * When present, all routes in your routes/spa.php file will be directed to this action.
 *
 * @var array|string
 */
protected $spaAction = 'SPAController@index';

/**
 * Define your route model bindings, pattern filters, etc.
 *
 * @return void
 */
public function boot() {
    ...
    
    Route::middleware('web')
        ->namespace($this->namespace)
        ->group(function () {
            collect(require base_path('routes/spa.php'))
                ->each(function ($path) {
                    Route::get($path, $this->spaAction);
                });
        });
}
```

This is just an example. Of course, there are many ways to solve this issue but just make sure that you do not use `Route::fallback` if search engine ranking is important for your application.

## References

- [How To Properly Serve 404s On SPAs](https://thegray.company/blog/single-page-application-spas-404s-seo)
- [What Are Soft 404s (Google Search Central)](https://support.google.com/webmasters/answer/181708?hl=en)