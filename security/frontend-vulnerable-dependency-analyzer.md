# Frontend Vulnerable Dependency Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 60 minutes   |

## Introduction

This analyzer triggers relies on your frontend package manager (NPM or Yarn) to scan for vulnerable dependencies.

The analyzer fails if there are any known vulnerabilities in your frontend depdendencies.

## How To Fix

To fix the issue, first you need to learn what packages have vulnerabilities. Run the `audit` command on your frontend package manager:

```bash
npm audit
yarn audit
```  

Next, you would need to upgrade to a version that fixes the vulnerability. Most of the time, it should be a minor version patch release, but sometimes it can mean upgrading to a major version.

If you need to upgrade a major version, make sure to go through the upgrade guide for the package so that you ensure the upgrade doesn't break your frontend code.

NPM also offers a `npm audit fix` command that installs any compatible updates to your vulnerable dependencies:

```bash
npm audit fix
```

Note that NPM will not upgrade to a semver major version by the command above. If you wish to do so, you can add the `--force` flag:

```bash
npm audit fix --force
```

Yarn does not offer any command to automatically fix vulnerabilities. You would need to upgrade the vulnerable packages yourself.

::: tip
Make sure to run the audit command again once you fix the vulnerabilities, to make sure all vulnerabilities are indeed fixed with the upgrades.
:::

## Do Frontend Vulnerabilities Even Matter?

Yes, some of them can matter. First of all, you should check if it's a dev dependency or a production dependency. If it's a dev dependency, it probably won't matter but production dependencies can definitely matter.

The most critical production dependency vulnerabilities are malware. Sometimes package owners sneak malware into their packages (for instance, malware to steal or mine bitcoin).

Unlike PHP, Javascript dependency trees are huge! While that's great for having numerous options, it also means that it's easier for a package owner to sneak in malware. In fact, there's even a term coined for it: [Javascript dependency hell](https://blog.appsignal.com/2020/04/09/ride-down-the-javascript-dependency-hell.html).

In a nutshell, **don't take frontend dependencies lightly**. If any of your customers had their financial data stolen because of frontend vulnerabilities in your application, they can potentially hold you responsible!   

## Related Analyzers

- [Vulnerable Dependency Analyzer](vulnerable-dependency-analyzer.html)

## References

- [NPM Audit Documentation](https://docs.npmjs.com/cli/v6/commands/npm-audit)
- [Yarn Audit Documentation](https://classic.yarnpkg.com/en/docs/cli/audit/)