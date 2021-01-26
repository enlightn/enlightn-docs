---
pro: true
---

# Object Injection Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\ObjectInjectionAnalyzer`

## Introduction

This analyzer scans your application code to detect any `unserialize` function calls on untrusted user input data, which may expose your application to object injection attacks.

Since PHP allows object serialization, attackers could pass ad-hoc serialized strings to a vulnerable unserialize() call, resulting in an arbitrary PHP object(s) injection into the application scope.

Consider the following code:

```php
class SomeClass
{
   public $cache_file;

   function __destruct()
   {
      $file = "/var/www/cache/tmp/{$this->cache_file}";
      if (file_exists($file)) @unlink($file);
   }
}
```

Say, you have a controller that unserializes user request data:

```php
$user_data = unserialize($request->input('data'));
```

The attacker will now be able to delete an arbitrary file by setting the data query string to `O:8:"SomeClass":1:{s:10:"cache_file";s:15:"../../index.php";}`. When this string is unserialized, the `SomeClass` object is created which deletes the cache file on `__destruct`. This means that the attacker can provide the path to any file in a custom constructed serialized string to delete the file.

This is just one example. This vulnerability can lead to a wide variety of attacks including code injection, SQL injection, path traversal and application denial of service, depending on the context.

## How To Fix

If you want to fix the security vulnerability, simply remove all `unserialize` function calls on user request data.

## References

- [PHP Documentation on Unserialize](https://www.php.net/manual/en/function.unserialize.php)
- [OWASP Guide on PHP Object Injection](https://owasp.org/www-community/vulnerabilities/PHP_Object_Injection)
- [OWASP Guide on Deserialization of Untrusted Data](https://owasp.org/www-community/vulnerabilities/Deserialization_of_untrusted_data)