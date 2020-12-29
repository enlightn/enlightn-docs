# Session Driver Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :rocket: Performance | Major | 1 hour       |

## Introduction

Choosing the right session driver can make a major impact to the performance of your application. While making this choice, it is important for you to understand the differences between the major drivers:

| Driver    | Suitable For | Supports Multiple Servers  | Security | Comments |
| :-------- | :----------- | :-------------------------:|:--------:|:---------|
| Null      | Testing Only | No                         | N/A      | The null driver ignores all session writes. All reads will result in a miss. This driver is only suitable for testing. |
| Array     | Testing      | No                         | N/A      | Sessions are not persisted outside the running PHP process. So, session writes are only valid within the same request. |
| File      | Single Server Setup | No                  | Secure   | The file driver is only suitable for single server setups since it uses the local filesystem. |
| Cookie    | Local & Testing | Yes                     | Less Secure | The cookie driver is not suitable for production environments. Firstly, it is not a very secure option as cookies are susceptible to change on the client side. While encryption may counter that to an extent, it is still less secure than other options. Also, cookie session data is limited to 4KB as cookies are constrained with this size limit. |
| Database  | All          | Yes                        | Secure  | Robust option. |
| Redis     | All          | Yes                        | Secure  | Robust option. |
| Memcached | All          | Yes                        | Secure  | Robust option. |
| DynamoDB  | All          | Yes                        | Secure  | Robust option. |

## References

- [Laravel Session Documentation](https://laravel.com/docs/session)