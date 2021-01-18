# Queue Driver Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 1 hour       |

## Introduction

Choosing the right queue driver can make a major impact to the performance of your application. While making this choice, it is important for you to understand the differences between the major drivers.

Remember that even if you do not use queueable jobs directly in your application, queues can improve performance (faster response times) for your application via queueable mails, notifications and events as well.


| Driver    | Suitable For | Supports Multiple Servers  | Deadlock Issues | Comments |
| :-------- | :----------- | :-------------------------:|:---------------:|:---------|
| Null      | Testing Only | No                         | No              | The null driver ignores all queued jobs, mails, notifications or events. |
| Sync      | Local & Testing | No                      | No              | Processes all queued jobs, mails, notifications and events in a synchronous manner. This means it will slow down web requests and is not suited for production environments. |
| Database  | Local, Testing & Failover | Yes           | Yes             | The database queue driver is not suitable for production environments and is known to have issues such as deadlocks and slowing down your database during peak queue backlogs. |
| Redis     | All          | Yes                        | No              |  Robust option. |
| SQS       | All          | Yes                        | No              |  Robust option. |
| Beanstalkd | All         | Yes                        | No              |  Robust option. |

## References

- [Laravel Queue Documentation](https://laravel.com/docs/queues)