---
pro: true
---

# File Size Validation Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\FileSizeValidationAnalyzer`

## Introduction

This analyzer scans your application code to detect missing file size validations.

If you allow file size uploads from users, it is a good practice to also validate and limit file size. Without this validation, your application may be exposed to a class of unrestricted file upload vulnerabilities called storage DOS attacks. Storage DOS attacks exploit missing file size validations and upload massive files to cause a denial of service (DOS) by exhausting the disk space.

While PHP also has a file size limit, it applies across your entire application. So, it will typically be set to the highest file size allowed by your application. This is why it is a good practice to have file size validations in your application as well.

## How To Fix

To fix this, add the `max`, `size` or `between` validation to limit the file upload size (in KB):

```php
$request->validate([
   'profile_pic' => 'file|size:200', 
]);
```

## Related Analyzers

- [File Bomb Validation Analyzer](file-bomb-validation-analyzer.html)

## References

- [Laravel Documentation on Validation](https://laravel.com/docs/validation)
- [OWASP Guide on Unrestricted File Uploads](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload)
- [OWASP File Upload Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)