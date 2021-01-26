---
pro: true
---

# Unrestricted File Upload Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\UnrestrictedFileUploadAnalyzer`

## Introduction

This analyzer scans your application code to detect unrestricted file uploads.

If your application allows user controlled data to construct the path of a file upload, this may result in overwriting a critical file or storing the file in a bad location.

Consider the following code:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

public function upload(Request $request)
{
    Storage::put($request->input('path'), $request->file('uploadFile'));
}
```

The code above is vulnerable to overwriting any file because untrusted user input data is used to determine the path of the file. So, if the user sets the path to something like `../.env`, the user may be able to overwrite your `.env` file depending on the permissions of the file and the default storage driver.

Other examples of vulnerable code include:

```php
$request->file('avatar')->storeAs($request->input('path'), auth()->user()->id);
Storage::putFile($request->input('path'), $request->file('somefile'));
```

## How To Fix

### Option 1: Using Basename

The best way to fix this is to use the `basename` function, if the directory path is pre-determined (not variable):

```php
Storage::put('somedir/'.basename($request->input('path')), $request->file('uploadFile'));
``` 

### Option 2: Validating Path Using Realpath

If the directory path can have sub-directories, you can use the `realpath` function instead and validate that it belongs to the intended directory:

```php
use Illuminate\Support\Str;
use Illuminate\Http\Request;

public function uploadDocument(Request $request)
{
    $path = realpath(storage_path('somedir/'.$request->input('path')));
    if (! Str::startsWith($path, storage_path())) {
        abort(403);
    }
    $request->file('avatar')->storeAs($path, auth()->user()->id);    
}
``` 

::: danger
`realpath` converts the directory to a real path without any `../`. Just using `realpath` will not protect your application. You will need to validate the result of the `realpath` function as above. This analyzer, however, will not result in a failure if you are using the `realpath` function as it assumes that you are using it to validate the path.
:::

## PHP Secure Configuration Settings

For even more security, you may set the `doc_root` and `open_basedir` PHP configuration settings to your application root directory. This limits the files that can be accessed by PHP to the specified directory. Be sure to check out the PHP documentation on these configuration settings (listed below in the references section).

::: danger
Using `open_basedir` will disable the realpath cache. This may adversely impact your application performance.
:::

## Related Analyzers

- [Directory Traversal Analyzer](directory-traversal-analyzer.html)

## References

- [OWASP Guide on Unrestricted File Uploads](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload)
- [OWASP File Upload Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- [PHP Documentation on Configuration Directives](https://www.php.net/manual/en/ini.core.php#ini.doc-root)