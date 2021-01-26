---
pro: true
---

# Regex DOS Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\RegexDosAnalyzer`

## Introduction

This analyzer scans your application code to detect possible regex DOS (also known as ReDOS) vulnerabilities.

In regex DOS attacks, attackers construct "evil" regex patterns that can cause them to hang or work very slowly.

Please note the following situations:

1. The regex pattern is constructed by the user: This is very dangerous and easy to exploit. This analyzer searches for any code that obtains regex patterns from user input data.
2. The regex pattern is vulnerable in code: Perhaps, the code itself contains some regex patterns that are "evil". This analyzer does not search or validate regex patterns, so this type of vulnerability is not detected by this analyzer.

Consider the following code:

```php
preg_match($request->input('pattern'), $request->input('query'));
```

Since both the regex pattern and subject string are obtained from user input, it is extremely dangerous and easy to exploit.

Now, let's consider this code:

```php
preg_match('/(.*a){x}/', $request->input('query'));
```

The above code is also vulnerable to regex DOS attacks. Given the input string `aaa...a` (with x or more of character a), the time complexity of the regex match is O(2<sup>x</sup>).

::: danger
This analyzer does not detect regex DOS vulnerabilities like the second code block above. It only detects vulnerabilities like in the first code block where the regex pattern is obtained from user input data.
:::

## How To Fix

To fix this issue, remove all regex patterns that are obtained from user input data.

## References

- [OWASP ReDOS Guide](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS)