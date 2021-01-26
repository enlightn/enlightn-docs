---
pro: true
---

# Command Constructor Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Minor | 10 minutes  |

**Class:** `Enlightn\EnlightnPro\Analyzers\Performance\CommandConstructorInjectionAnalyzer`

## Introduction

Currently, all commands in Laravel are instantiated to be registered in the console application. So, it is considered to be a good practice to use dependency injection in the `handle` method of the command rather than using constructor injection. If you use constructor injection, all the dependencies of the commands will be loaded in memory, even if those commands are not required to run. This can be an issue for commands with big dependency graphs.

Laravel 9x will arrive with lazy loading support for Laravel commands. Until then, it is best to use the `handle` method injection rather than constructor injection in your commands.

## Bad

```php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Cache\CacheManager;
use Illuminate\Filesystem\Filesystem;

class MyCommand extends Command
{
    /**
     * Create a new command instance.
     *
     * @param  \Illuminate\Cache\CacheManager  $cache
     * @param  \Illuminate\Filesystem\Filesystem  $files
     * @return void
     */
    public function __construct(CacheManager $cache, Filesystem $files)
    {
        parent::__construct();
        
        $this->cache = $cache;
        $this->files = $files;
    }
}
```

## Good

```php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Cache\CacheManager;
use Illuminate\Filesystem\Filesystem;

class MyCommand extends Command
{
    /**
     * Create a new command instance.
     *
     * @param  \Illuminate\Cache\CacheManager  $cache
     * @param  \Illuminate\Filesystem\Filesystem  $files
     * @return void
     */
    public function handle(CacheManager $cache, Filesystem $files)
    {
        $this->cache = $cache;
        $this->files = $files;
        
        ...
    }
}
```

## References

- [Lazy Loading Laravel 9x PR](https://github.com/laravel/framework/pull/34873)
- [Laravel Ideas Discussion on Command Constructor Invocation](https://github.com/laravel/ideas/issues/1399)
