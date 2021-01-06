module.exports = {
  title: 'Enlightn',
  description: "Enlightn - A Laravel Tool To Boost Your App's Performance & Security",
  base: '/docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // Add GA4 snippet to head tag.
    ['script', {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0RKB1N2VJK'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0RKB1N2VJK');
    `]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
        {
            text: 'Home',
            link: 'https://www.laravel-enlightn.com',
        },
        {
            text: 'Github',
            link: 'https://github.com/enlightn/enlightn'
        }
    ],
    sidebar: [
        {
            title: 'Getting Started',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/getting-started/installation',
                '/getting-started/configuration',
                '/getting-started/usage'
            ]
        },
        {
            title: 'Performance Checks',
            path: '/performance/',
            children: [
                '/performance/cache-driver-analyzer',
                '/performance/cache-header-analyzer',
                '/performance/cdn-analyzer',
                '/performance/collection-call-analyzer',
                '/performance/command-constructor-injection-analyzer',
                '/performance/compression-header-analyzer',
                '/performance/config-caching-analyzer',
                '/performance/debug-log-analyzer',
                '/performance/dev-dependency-analyzer',
                '/performance/env-call-analyzer',
                '/performance/event-caching-analyzer',
                '/performance/fallback-route-analyzer',
                '/performance/horizon-suggestion-analyzer',
                '/performance/minification-analyzer',
                '/performance/mysql-single-server-analyzer',
                '/performance/opcache-analyzer',
                '/performance/queue-driver-analyzer',
                '/performance/redis-cache-hit-ratio-analyzer',
                '/performance/redis-rate-limiting-analyzer',
                '/performance/redis-single-server-analyzer',
                '/performance/redis-throttling-analyzer',
                '/performance/route-caching-analyzer',
                '/performance/session-driver-analyzer',
                '/performance/shared-cache-lock-analyzer',
                '/performance/telescope-cache-hit-ratio-analyzer',
                '/performance/telescope-duplicate-query-analyzer',
                '/performance/telescope-memory-intensive-request-analyzer',
                '/performance/telescope-model-hydration-analyzer',
                '/performance/telescope-non-queued-notification-analyzer',
                '/performance/telescope-nplusone-query-analyzer',
                '/performance/telescope-slow-query-analyzer',
                '/performance/telescope-slow-response-analyzer',
                '/performance/unused-global-middleware-analyzer',
                '/performance/view-caching-analyzer'
            ],
            collapsable: true,
            sidebarDepth: 0,
        },
        {
            title: 'Security Checks',
            path: '/security/',
            children: [
                '/security/app-debug-analyzer',
                '/security/app-debug-hide-analyzer',
                '/security/app-key-analyzer',
                '/security/clickjacking-analyzer',
                '/security/column-name-sql-injection-analyzer',
                '/security/command-injection-analyzer',
                '/security/cookie-domain-analyzer',
                '/security/csrf-analyzer',
                '/security/debug-statement-analyzer',
                '/security/directory-traversal-analyzer',
                '/security/encrypted-cookies-analyzer',
                '/security/eval-analyzer',
                '/security/extract-analyzer',
                '/security/file-bomb-validation-analyzer',
                '/security/file-permissions-analyzer',
                '/security/file-size-validation-analyzer',
                '/security/fillable-foreign-key-analyzer',
                '/security/frontend-vulnerable-dependency-analyzer',
                '/security/hard-coded-credentials-analyzer',
                '/security/horizon-security-analyzer',
                '/security/host-injection-analyzer',
                '/security/hsts-header-analyzer',
                '/security/http-only-cookie-analyzer',
                '/security/license-analyzer',
                '/security/login-throttling-analyzer',
                '/security/mass-assignment-analyzer',
                '/security/mime-sniffing-analyzer',
                '/security/nova-security-analyzer',
                '/security/object-injection-analyzer',
                '/security/open-redirection-analyzer',
                '/security/php-ini-analyzer',
                '/security/raw-sql-injection-analyzer',
                '/security/regex-dos-analyzer',
                '/security/same-site-cookie-analyzer',
                '/security/secure-cookie-analyzer',
                '/security/session-timeout-analyzer',
                '/security/sql-injection-analyzer',
                '/security/stable-dependency-analyzer',
                '/security/telescope-security-analyzer',
                '/security/unguarded-models-analyzer',
                '/security/unrestricted-file-upload-analyzer',
                '/security/up-to-date-dependency-analyzer',
                '/security/validation-sql-injection-analyzer',
                '/security/vulnerable-dependency-analyzer',
                '/security/xss-analyzer'
            ],
            collapsable: true,
            sidebarDepth: 0,
        },
        {
            title: 'Reliability Checks',
            path: '/reliability/',
            children: [
                '/reliability/cache-prefix-analyzer',
                '/reliability/cache-status-analyzer',
                '/reliability/cache-busting-analyzer',
                '/reliability/composer-package-publish-analyzer',
                '/reliability/composer-validation-analyzer',
                '/reliability/database-status-analyzer',
                '/reliability/dead-code-analyzer',
                '/reliability/dead-route-analyzer',
                '/reliability/directory-write-permissions-analyzer',
                '/reliability/disk-space-analyzer',
                '/reliability/env-example-analyzer',
                '/reliability/env-file-analyzer',
                '/reliability/env-variable-analyzer',
                '/reliability/failed-job-timeout-analyzer',
                '/reliability/foreach-iterable-analyzer',
                '/reliability/global-variable-analyzer',
                '/reliability/horizon-prefix-analyzer',
                '/reliability/horizon-provisioning-plan-analyzer',
                '/reliability/horizon-status-analyzer',
                '/reliability/invalid-function-call-analyzer',
                '/reliability/invalid-import-analyzer',
                '/reliability/invalid-method-call-analyzer',
                '/reliability/invalid-method-override-analyzer',
                '/reliability/invalid-property-access-analyzer',
                '/reliability/invalid-offset-analyzer',
                '/reliability/invalid-return-type-analyzer',
                '/reliability/maintenance-mode-analyzer',
                '/reliability/missing-return-statement-analyzer',
                '/reliability/pcntl-analyzer',
                '/reliability/queue-blocking-analyzer',
                '/reliability/queue-timeout-analyzer',
                '/reliability/redis-eviction-policy-analyzer',
                '/reliability/redis-prefix-analyzer',
                '/reliability/redis-shared-database-analyzer',
                '/reliability/redis-status-analyzer',
                '/reliability/script-terminating-function-analyzer',
                '/reliability/storage-link-analyzer',
                '/reliability/undefined-constant-analyzer',
                '/reliability/undefined-variable-analyzer',
                '/reliability/unset-analyzer',
                '/reliability/up-to-date-migrations-analyzer'
            ],
            collapsable: true,
            sidebarDepth: 0,
        }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
