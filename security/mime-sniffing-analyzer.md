---
pro: true
---

# Mime Sniffing Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Major      | 5 minutes   |

## Introduction

This analyzer detects whether your application sets the `X-Content-Type-Options` header. This header tells browsers to not ignore explicitly defined content types and helps prevent MIME sniffing attacks.

In a MIME sniffing attack, an attacker disguises an HTML file as a different file type and uploads the file to the web server. Consequently, the browser will render it as an HTML file therefore providing the attacker with the possibility to execute XSS.

## How To Fix

To fix this issue, you may set the `X-Content-Type-Options` header on your web server.

For Nginx, you may use the `add_header` directive in your `server` or `location` block:

```ini
add_header X-Content-Type-Options "nosniff";
```

For Apache, you may use the `Header` directive in your `<VirtualHost>`, `<Directory>` or `<Location>` container:

```ini
Header set X-Content-Type-Options "nosniff"
```

## Skip Condition

This analyzer is skipped for stateless apps (e.g. API only).

## References

- [Introduction to Mime Sniffing](https://www.keycdn.com/support/what-is-mime-sniffing)
- [Introduction to the X-Content-Type-Options Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [Nginx Add Header Directive](http://nginx.org/en/docs/http/ngx_http_headers_module.html)
- [Apache Header Directive](https://httpd.apache.org/docs/current/mod/mod_headers.html)