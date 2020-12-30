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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
                '/performance/collection-call-analyzer',
                '/performance/config-caching-analyzer',
                '/performance/debug-log-analyzer',
                '/performance/dev-dependency-analyzer',
                '/performance/env-call-analyzer',
                '/performance/horizon-suggestion-analyzer',
                '/performance/minification-analyzer',
                '/performance/mysql-single-server-analyzer',
                '/performance/opcache-analyzer',
                '/performance/queue-driver-analyzer',
                '/performance/route-caching-analyzer',
                '/performance/session-driver-analyzer',
                '/performance/shared-cache-lock-analyzer',
                '/performance/unused-global-middleware-analyzer',
                '/performance/view-caching-analyzer',
                '/performance/cdn-analyzer',
                '/performance/command-constructor-injection-analyzer',
                '/performance/compression-header-analyzer',
                '/performance/event-caching-analyzer',
                '/performance/fallback-route-analyzer',
                '/performance/redis-cache-hit-ratio-analyzer',
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
