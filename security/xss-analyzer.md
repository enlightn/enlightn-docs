# XSS Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes    |

## Introduction

This analyzer checks whether your application sets an appropriate `Content-Security-Policy` header to protect against XSS attacks.

If your application does not set this header (with at least a `default-src` or `script-src` directive) or includes an `unsafe-eval` or `unsafe-inline` source, this analyzer would result in a failure.  

## How To Set The Content-Security-Policy Header

You can add the `Content-Security-Policy` header in your web server configuration.

For Nginx, you may use the `add_header` directive in your `server` or `location` block:

```ini
add_header Content-Security-Policy "default-src 'self';";
```

For Apache, you may use the `Header` directive in your `<VirtualHost>`, `<Directory>` or `<Location>` container:

```ini
Header always set Content-Security-Policy "default-src 'self';"
```

::: danger
Note that the header above is just an example. Make sure to read the content security policy documentation in the links below to understand what directives and sources would be valid for your application.

If you miss certain sources, it may mean that some of your JS scripts or CSS styles may not apply properly. Make sure to open the Developer Console in your browser to confirm there are no errors after your configuration is complete. 
:::

## References

- [Introduction to the Content-Security-Policy Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
- [Google's Guide to Content Security Policy](https://developers.google.com/web/fundamentals/security/csp)
- [OWASP Introduction to Content Security Policy](https://owasp.org/www-community/attacks/Content_Security_Policy)
- [OWASP Content Security Policy Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
- [Nginx Add Header Directive](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
- [Apache Header Directive](https://httpd.apache.org/docs/current/mod/mod_headers.html)
