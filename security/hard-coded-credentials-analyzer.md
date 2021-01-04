---
pro: true
---

# Hard Coded Credentials Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

## Introduction

This analyzer scans your application code to detect hard coded credentials in your source code.

It is considered a bad practice to have hard coded credentials in your source code because of the following reasons:

1. It allows all project developers to view the password.
2. If the account protected by the password is compromised, you would be forced to choose between security and availability.
3. Once the code is in production, the password cannot be changed without patching the software.

## How To Fix

Remove all references to hard coded credentials and either store them in the database or in your `.env` file, which can be referenced by a config file.

## References

- [OWASP Guide on Hardcoded Passwords](https://owasp.org/www-community/vulnerabilities/Password_Management_Hardcoded_Password)
- [CWE: Use of Hardcoded Credentials](https://cwe.mitre.org/data/definitions/798.html)