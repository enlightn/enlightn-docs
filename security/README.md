# Security

Enlightn has 49 automated security checks (including 28 Enlightn Pro checks).

## :lock: Basic Security
- [Make sure your .env file is not publicly accessible](env-access-analyzer.html)
- [Turn Off App Debug In Production](app-debug-analyzer.html)
- [Hide Sensitive Debug Variables](app-debug-hide-analyzer.html)
- [Generate Your App Key](app-key-analyzer.html)
- [CSRF Protection](csrf-analyzer.html)
- [Secure PHP Configuration](php-ini-analyzer.html)
- [Set Safe File and Directory Permissions](file-permissions-analyzer.html)
- [Login Throttling](login-throttling-analyzer.html)
- [Hashing Strength](hashing-strength-analyzer.html)
- [Your Code Shouldn't Contain Debug Statements](debug-statement-analyzer.html) <Badge text="PRO" type="tip"/>
- [Your Code Shouldn't Contain Hard Coded Credentials](hard-coded-credentials-analyzer.html) <Badge text="PRO" type="tip"/>

## :cookie: Cookie Security and Session Management
- [Cookie Encryption](encrypted-cookies-analyzer.html)
- [Cookie HttpOnly Attribute](http-only-cookie-analyzer.html)
- [Cookie Domain Attribute](cookie-domain-analyzer.html) <Badge text="PRO" type="tip"/>
- [Cookie SameSite Attribute](same-site-cookie-analyzer.html) <Badge text="PRO" type="tip"/>
- [Cookie Secure Attribute](secure-cookie-analyzer.md) <Badge text="PRO" type="tip"/>
- [Session Timeout](session-timeout-analyzer.html) <Badge text="PRO" type="tip"/>

## :black_joker: Mass Assignment
- [Fillable Foreign Key](fillable-foreign-key-analyzer.html)
- [Mass Assignment](mass-assignment-analyzer.html)
- [Unguarded Models](unguarded-models-analyzer.html)

## :radioactive: SQL Injection Attacks
- [Column Name SQL Injection](column-name-sql-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Raw Queries SQL Injection](raw-sql-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Native SQL Injection](sql-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Validation Rule SQL Injection](validation-sql-injection-analyzer.html) <Badge text="PRO" type="tip"/>

## :scroll: Security Headers
- [Cross Site Scripting](xss-analyzer.html)
- [HSTS Header](hsts-header-analyzer.html)
- [Clickjacking](clickjacking-analyzer.html) <Badge text="PRO" type="tip"/>
- [Mime Sniffing](mime-sniffing-analyzer.html) <Badge text="PRO" type="tip"/>
- [Web Server Fingerprinting](web-server-fingerprinting-analyzer.html) <Badge text="PRO" type="tip"/>

## :file_folder: Unrestricted File Uploads and DOS Attacks
- [Arbitrary File Uploads](arbitrary-file-upload-analyzer.html) <Badge text="PRO" type="tip"/>
- [Directory Traversal](directory-traversal-analyzer.html) <Badge text="PRO" type="tip"/>
- [Regex DOS Attacks](regex-dos-analyzer.html) <Badge text="PRO" type="tip"/>
- [Storage DOS Attacks](file-size-validation-analyzer.html) <Badge text="PRO" type="tip"/>
- [Unrestricted File Uploads](unrestricted-file-upload-analyzer.html) <Badge text="PRO" type="tip"/>
- [ZIP and XML File Bombs](file-bomb-validation-analyzer.html) <Badge text="PRO" type="tip"/>

## :syringe: Injection and Phishing Attacks
- [Command Injection](command-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Host Injection](host-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Object Injection](object-injection-analyzer.html) <Badge text="PRO" type="tip"/>
- [Eval Code Injection](eval-analyzer.html) <Badge text="PRO" type="tip"/>
- [Extract Variable Hijacking](extract-analyzer.html) <Badge text="PRO" type="tip"/>
- [Open Redirection](open-redirection-analyzer.html) <Badge text="PRO" type="tip"/>

## :package: Dependency Management
- [Licensing](license-analyzer.html)
- [Backend Vulnerable Dependencies](vulnerable-dependency-analyzer.html)
- [Frontend Vulnerable Dependencies](frontend-vulnerable-dependency-analyzer.html)
- [Stable Dependencies](stable-dependency-analyzer.html)
- [Up To Date Dependencies](up-to-date-dependency-analyzer.html)
- [Horizon Security](horizon-security-analyzer.html) <Badge text="PRO" type="tip"/>
- [Telescope Security](telescope-security-analyzer.html) <Badge text="PRO" type="tip"/>
- [Nova Security](nova-security-analyzer.html) <Badge text="PRO" type="tip"/>