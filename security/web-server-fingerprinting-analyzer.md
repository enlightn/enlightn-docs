---
pro: true
---

# Web Server Fingerprinting Analyzer <Badge text="PRO" type="tip"/>

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | Minor      | 5 minutes   |

**Class:** `Enlightn\EnlightnPro\Analyzers\Security\WebServerFingerprintingAnalyzer`

## Introduction

This analyzer checks whether your web server exposes its vendor and/or version information. Exposed information is not a vulnerability in itself but can assist attackers in exploiting un-patched web servers by exposing the vendor and version. This is called [web server fingerprinting](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server).

To verify if your web server exposes this information, you can make a simple `curl` request like so:

```bash
curl -I -L https://myapp.com
```

Look for the "Server" header. If it exposes the vendor (Nginx or Apache) and/or its version, attackers may use this information to exploit vulnerabilities if your web server is using an older un-patched version.

## How To Fix

### CDN

If you use a reverse proxy CDN such as Cloudflare, there may be options to configure the CDN to hide or alter the Server header.

### Nginx

For Nginx, you can fix this using the [server_tokens directive](http://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens) like so:

```ini
server_tokens off;
```

### Apache

Apache is a trickier option. Despite repeated requests to allow a configuration to disable the Server header and [RFC 2616](https://tools.ietf.org/html/rfc2616) recommending that the server header should be a configurable option, Apache seems to have taken the stance that "security through obscurity" is a myth.

If you wish to just disable the server version, you may use the [ServerTokens directive](https://httpd.apache.org/docs/2.4/mod/core.html#servertokens) like so:

```ini
ServerTokens Prod
```

The above configuration will disable the version but display `Apache` in the `Server` header.

To go a step further and remove the `Server` header completely, you need to install the `ModSecurity` Apache module and then configure it as follows:

```ini
<IfModule security2_module>
    SecRuleEngine on
    ServerTokens Full
    SecServerSignature " "
</IfModule> 
```

## References

- [OWASP Guide on Web Server Fingerprinting](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server)
- [Introduction to Web Server Fingerprinting](https://net-square.com/httprint_paper.html)
- [How To Configure Your Web Server to Not Disclose Its Identity](https://www.acunetix.com/blog/articles/configure-web-server-disclose-identity/)