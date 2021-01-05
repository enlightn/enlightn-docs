---
pro: true
---

# Failed Job Timeout Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 5 minutes   |

## Introduction

This analyzer checks to see whether any of your jobs are timing out and unable to complete processing.

It can be quite difficult to check if a failed job timed out. This analyzer does the task for you and nicely formats the job class names that are failing due to timeouts.

## How To Fix

You can either increase the timeout for the jobs indicated by the analyzer or break down the job into smaller jobs.

To increase the job timeout, you may define a `timeout` property on your job class:

```php
namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;

class ProcessPodcast implements ShouldQueue
{
    /**
     * The number of seconds the job can run before timing out.
     *
     * @var int
     */
    public $timeout = 120;
}
```

## Skip Condition

This analyzer is skipped if your application uses the `sync` or `null` queue driver.

## References

- [Laravel Documentation on Job Timeouts](https://laravel.com/docs/queues#timeout)