---
pro: true
---

# Command Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

This analyzer scans your application code for possible command injection vulnerabilities.

If your application executes a shell command constructed with unescaped user provided data, it can expose your application to command injection attacks.

Consider an example where your application needs to perform a `whois` on a user provided domain name:

```php

public function verifyDomain(Request $request) {
    exec('whois '.$request->input('domain'));
}
```

The code above is vulnerable to command injection attacks because unescaped user provided data is used to construct a shell command.

If the user provides an input such as `example.com && cat /etc/passwd > public/passwd.txt`. This would allow the user to view your `/etc/passwd` file.

Some other examples of vulnerable code include:

```php
shell_exec('whois '.$request->input('domain'));
system('whois '.$request->input('domain'));
passthru('whois '.$request->input('domain'));
```

## How To Fix

To protect against command injection, you must either escape the command or escape the arguments using `escapeshellcmd` or `escapeshellarg` like so:

```php
exec(escapeshellcmd('whois '.$request->input('domain')));
exec('whois '.escapeshellarg($request->input('domain')));
```

## References

- [PHP Documentation on escapeshellcmd](https://www.php.net/manual/en/function.escapeshellcmd)
- [PHP Documentation on escapeshellarg](https://www.php.net/manual/en/function.escapeshellarg)
- [OWASP Command Injection Introduction](https://owasp.org/www-community/attacks/Command_Injection)
- [OWASP Command Injection Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html)