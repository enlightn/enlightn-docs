# Reliability

Enlightn has 45 automated reliability checks (including 17 Enlightn Pro checks).

## 🧐 Code Reliability and Bug Detection

- [Invalid Foreach Iterable](foreach-iterable-analyzer.html)
- [Invalid Function Calls](invalid-function-call-analyzer.html)
- [Invalid Imports](invalid-import-analyzer.html)
- [Invalid Method Calls](invalid-method-call-analyzer.html)
- [Invalid Method Overrides](invalid-method-override-analyzer.html)
- [Invalid Offset](invalid-offset-analyzer.html)
- [Invalid Property Access](invalid-property-access-analyzer.html)
- [Invalid Return Type](invalid-return-type-analyzer.html)
- [Invalid Unset](unset-analyzer.html)
- [Missing Return Statement](missing-return-statement-analyzer.html)
- [Syntax Error](syntax-error-analyzer.html)
- [Undefined Constant](undefined-constant-analyzer.html)
- [Undefined Variable](undefined-variable-analyzer.html)

## :muscle: Health Checks

- [Cache Status](cache-status-analyzer.html)
- [Composer Validation](composer-validation-analyzer.html)
- [Database Status](database-status-analyzer.html)
- [Directory Write Permissions](directory-write-permissions-analyzer.html)
- [Maintenance Mode](maintenance-mode-analyzer.html)
- [Env File](env-file-analyzer.html)
- [Up To Date Migrations](up-to-date-migrations-analyzer.html)
- [Disk Space](disk-space-analyzer.html) <Badge text="PRO" type="tip"/>
- [Horizon Status](horizon-status-analyzer.html) <Badge text="PRO" type="tip"/>
- [Redis Status](redis-status-analyzer.html) <Badge text="PRO" type="tip"/>
- [Storage Links](storage-link-analyzer.html) <Badge text="PRO" type="tip"/>

## :gear: Detecting Misconfigurations

- [Cache Prefix](cache-prefix-analyzer.html)
- [Queue Timeouts](queue-timeout-analyzer.html)
- [Failed Job Timeouts](failed-job-timeout-analyzer.html) <Badge text="PRO" type="tip"/>
- [Horizon Prefix](horizon-prefix-analyzer.html) <Badge text="PRO" type="tip"/>
- [Horizon Provisioning Plans](horizon-provisioning-plan-analyzer.html) <Badge text="PRO" type="tip"/>
- [Queue Blocking](queue-blocking-analyzer.html) <Badge text="PRO" type="tip"/>
- [PCNTL](pcntl-analyzer.html) <Badge text="PRO" type="tip"/>
- [Redis Eviction Policy](redis-eviction-policy-analyzer.html) <Badge text="PRO" type="tip"/>
- [Redis Prefix](redis-prefix-analyzer.html) <Badge text="PRO" type="tip"/>
- [Redis Shared Database](redis-shared-database-analyzer.html) <Badge text="PRO" type="tip"/>

## :ghost: Dead Routes and Dead Code

- [Dead Code](dead-code-analyzer.html)
- [Deprecated Code](deprecated-code-analyzer.html)
- [Dead Routes](dead-route-analyzer.html) <Badge text="PRO" type="tip"/>

## :medal_sports: Good Practices

- [Include a Robust Env Example File](env-example-analyzer.html)
- [Define All Env Variables](env-variable-analyzer.html)
- [Define Custom Error Pages](custom-error-page-analyzer.html)
- [Use Cache Busting](cache-busting-analyzer.html) <Badge text="PRO" type="tip"/>
- [Setup Composer Scripts for Publishing Vendor Assets](composer-package-publish-analyzer.html) <Badge text="PRO" type="tip"/>
- [Don't Use Script Terminating Functions](script-terminating-function-analyzer.html) <Badge text="PRO" type="tip"/>
- [Don't Use Globals or SuperGlobals](global-variable-analyzer.html) <Badge text="PRO" type="tip"/>