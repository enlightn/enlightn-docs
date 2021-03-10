---
pro: true
---

# Web Server Fingerprinting Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\WebServerFingerprintingAnalyzer`

## Introduction

This analyzer checks whether your web server exposes its version information. Exposed information is not a vulnerability in itself but can assist attackers in exploiting un-patched web servers by exposing the vendor and version. This is called [web server fingerprinting](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server).

To verify if your web server exposes this information, you can make a simple `curl` request like so:

```bash
curl -I -L https://myapp.com
```

Look for the "Server" header. If it exposes the vendor (Nginx or Apache) and its version, attackers may use this information to exploit vulnerabilities if your web server is using an older un-patched version.

## How To Fix

### CDN

If you use a reverse proxy CDN such as Cloudflare, there may be options to configure the CDN to hide or alter the Server header.

### Nginx

For Nginx, you can can disable the server version using the [server_tokens directive](http://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens) like so:

```ini
server_tokens off;
```

### Apache

For Apache, you can disable the server version using the [ServerTokens directive](https://httpd.apache.org/docs/2.4/mod/core.html#servertokens) like so:

```ini
ServerTokens Prod
```

## References

- [OWASP Guide on Web Server Fingerprinting](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server)
- [Introduction to Web Server Fingerprinting](https://net-square.com/httprint_paper.html)
- [How To Configure Your Web Server to Not Disclose Its Identity](https://www.acunetix.com/blog/articles/configure-web-server-disclose-identity/)