---
pro: true
---

# Directory Traversal Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 10 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\DirectoryTraversalAnalyzer`

## Introduction

This analyzer scans your application code for possible directory traversal vulnerabilities.

A directory traversal attack aims to access files and directories that are stored outside the web root folder by manipulating variables that reference files with “dot-dot-slash (../)” sequences and its variations or by using absolute file paths. 

Consider the following code:

```php
use Illuminate\Http\Request;

public function downloadDocument(Request $request)
{
    return response()->download(storage_path('/').$request->input('filename'));
}
```

The above code is vulnerable to directory traversal attacks. If the user provides a filename such as `../../../../etc/passwd`, then the user may gain access to your `/etc/passwd` file depending on your application's root path.

Other examples of vulnerable code include:

```php
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

response()->file($request->input('path').'.xml');
file_get_contents($request->post('path'));
(new Filesystem())->get($request->input('path'));
(new Filesystem())->copy($request->input('path'), 'sometarget');
Storage::download($request->input('path'));
Storage::get($request->input('path'));
```

## How To Fix

### Option 1: Using Basename

The best way to fix this is to use the `basename` function, if the directory path is pre-determined (not variable):

```php
response()->download(storage_path('somedirectory/').basename($request->input('filename')));
``` 

### Option 2: Validating Path Using Realpath

If the directory path can have sub-directories, you can use the `realpath` function instead and validate that it belongs to the intended directory:

```php
use Illuminate\Support\Str;
use Illuminate\Http\Request;

public function downloadDocument(Request $request)
{
    $path = realpath(storage_path('somedir/'.$request->input('path')));
    if (! Str::startsWith($path, storage_path())) {
        abort(403);
    }
    return response()->download($path);
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

- [Unrestricted File Upload Analyzer](unrestricted-file-upload-analyzer.html)

## References

- [OWASP Directory Traversal Introduction](https://owasp.org/www-community/attacks/Path_Traversal)
- [PHP Documentation on Configuration Directives](https://www.php.net/manual/en/ini.core.php#ini.doc-root)