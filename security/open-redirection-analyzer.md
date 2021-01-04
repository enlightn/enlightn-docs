---
pro: true
---

# Open Redirection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer scans your application code to detect possible open redirection vulnerabilities.

If your application accepts user controlled input that specifies a link to an external site, and uses that link in a redirect, it is exposed to an open redirection vulnerability. By modifying the URL value to a malicious site, an attacker may successfully launch a phishing scam and steal user credentials. Because the server name in the modified link is identical to the original site, phishing attempts have a more trustworthy appearance.

Consider the following code:

```php
return redirect($request->input('link'));
```

The code above is a classic example of an open redirection vulnerability. So, if your website is `example.com`, an attacker can create a link such as `www.example.com/redirect?link=evil.com/confirm-password` that redirects to an external website. This makes phishing scams easier because the victim would think that the link actually belongs to `example.com`.

Other examples of vulnerable code are as follows:

```php
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Redirect;

redirect()->to($request->input('path'));
(new Redirector(url()))->away('/somewhere/'.$request->query('path'));
return Redirect::to(request()->post('path'));
```

## How To Fix

To fix this issue, simply remove any redirects to user provided external links.

## References

- [OWASP Unvalidated Redirects and Forwards Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)
- [CWE on the Open Redirection Vulnerability](https://cwe.mitre.org/data/definitions/601.html)