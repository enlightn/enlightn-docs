---
pro: true
---

# Arbitrary File Upload Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\ArbitraryFileUploadAnalyzer`

## Introduction

This analyzer scans your application code to detect any missing file type validations. 

If you allow uploading of files by users, you should also validate the file types being uploaded. Failure to do so may result in arbitrary code execution attacks. These attacks entail first uploading malicious executable files (such as PHP files) and then triggering their malicious code by visiting the file URL (if public).

[This CWE](https://cwe.mitre.org/data/definitions/434) highlights the risk of such attacks.

## How To Fix

To fix this, simply add validation rules to validate the file MIME type or extension as well:

```php
$request->validate([
    'filename' => 'file|mimes:jpg,png,bmp'
]);
```

## Related Analyzers

- [File Size Validation Analyzer](file-size-validation-analyzer.html)
- [File Bomb Validation Analyzer](file-bomb-validation-analyzer.html)

## References

- [OWASP File Upload Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- [CWE on Arbitrary File Uploads](https://cwe.mitre.org/data/definitions/434)