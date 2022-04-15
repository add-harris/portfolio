const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'binxly.co.uk',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Software Developer - Adam Harrison",

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
        text: 'Cloud Computing',
        link: '/cloud-computing/',
      },
      {
        text: 'Frontend',
        link: '/frontend/'
      },
      {
        text: 'Backend',
        link: '/backend/'
      },
      {
        text: 'Github',
        link: 'https://github.com/add-harris'
      }
    ],
    sidebar: {
      '/frontend/': [
        {
          title: 'Frontend',
          collapsable: false,
          children: [
            '',
            'splash-page',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
