# Env Access Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 5 minutes   |

**Class:** `Enlightn\Enlightn\Analyzers\Security\EnvAccessAnalyzer`

## Introduction

This analyzer makes a request to a `/.env` route to confirm that your env file is not publicly accessible and your root project directory is configured properly on your web server.

If this is not the case, this is a serious security vulnerability as it exposes your `.env` file to the outside world.

## How To Fix

To fix this issue, you must ensure that the `public` directory in your Laravel application is the one that is setup as the root directory on the web server and not your project root directory.

Check out the references below for the documentation specific to your web server to learn more on how to configure the root directory.

## References

- [Nginx Root Directive Documentation](http://nginx.org/en/docs/http/ngx_http_core_module.html#root)
- [Apache DocumentRoot Directive Documentation](https://httpd.apache.org/docs/2.4/mod/core.html#documentroot)