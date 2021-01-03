---
pro: true
---

# Eval Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 30 minutes   |

## Introduction

This analyzer scans your application code to detect any `eval` statements. The `eval` statement or function executes arbitrary code in a string format. This statement or function is extremely dangerous and is actually even discouraged in the PHP documentation.

`eval` statements or function calls can expose your application to code injection attacks. Simply put, if you are using `eval` statements or functions in your application, you have taken a wrong turn.

It could be argued that `eval` is fine if it isn't provided user input. But that is a fallacy. `eval` is pure evil (even if it isn't provided user input data) and here's why:

1. It's a huge security risk when provided user input. Code injection attacks are the nastiest kind of attacks.
2. It adds another attack vector. So, for instance say `eval` is not provided user input and simply executes code in a database table that is inaccessible to users. If your application has a SQL injection vulnerability, it can quickly escalate to code injection. So, it is a security risk even if it isn't provided user input.
3. It is difficult to debug (because the code is literally in a string).
4. Using `eval` can prevent the evaluated code and the code surrounding it from being optimised by Opcache and/or by a JIT compiler.
5. `eval` code is unreadable and your IDE will not recognize or format the code.

In a nutshell, `eval` is bad for security, performance, code readability and debugging. We have spoken.

## How To Fix

The only way to fix this is to remove all `eval` statements and function calls.

## References

- [PHP Documentation on Eval](https://www.php.net/manual/en/function.eval.php)
- [OWASP Guide on Eval Injection](https://owasp.org/www-community/attacks/Direct_Dynamic_Code_Evaluation_Eval%20Injection)
- [OWASP Guide on Code Injection](https://owasp.org/www-community/attacks/Code_Injection)
- [OWASP Injection Prevention Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html)