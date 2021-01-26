---
pro: true
---

# File Bomb Validation Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\FileBombValidationAnalyzer`

## Introduction

This analyzer scans your application code to detect any input validations that allow for XML or ZIP files.

XML files expose a wide variety of attacks including the following:

1. [XML eXternal Entity injection (XXE) attacks](https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing), which are now part of OWASP top 10.
2. Malformed XML document vulnerabilities.
3. Invalid XML document vulnerabilities.
4. [Billion laughs DOS attack](https://en.wikipedia.org/wiki/Billion_laughs_attack)

ZIP files may expose your application to a zip bomb attack. A zip bomb is an archive file that contains a large volume of data. It’s intended to cause a denial of service (DOS) by exhausting the disk space or memory of the target system that tries to extract the archive. A 1 MB zip bomb can decompress to 1 GB.

It is not possible for the analyzer to understand if your application is secure from XML vulnerabilities or zip bomb vulnerabilities, due to the wide variety of XML parsing and zip decompression libraries out there. So, if you allow a `zip` or `xml` mime type in your request validation, this analyzer simply flags that as a potential vulnerability and results in a failure.

::: danger
The severity of this analyzer is marked as minor because it is not possible to completely determine if your application is vulnerable. However, do not take this lightly as XML and zip bomb attacks can cripple applications.
:::

## How To Fix

If you can avoid XML or ZIP files in your application, it would be the easiest way to secure your application.

If that is not an option, avoid decompressing the ZIP files you accept from users. As for XML files, there is a wide variety of security checks you would need to implement. You may refer the OWASP XML security cheatsheet in the references below.

## Related Analyzers

- [File Size Validation Analyzer](file-size-validation-analyzer.html)

## References

- [OWASP Guide on XXE Attacks](https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing)
- [OWASP Guide on XML Based Attacks](https://owasp.org/www-pdf-archive/XML_Based_Attacks_-_OWASP.pdf)
- [OWASP XML Security Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/XML_Security_Cheat_Sheet.html)
- [OWASP File Upload Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)