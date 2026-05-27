import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressConfigs = {
  title: 'Sifted AI News',
  description: 'Daily AI News',
  base: '/',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://aifeeds.sifted.network'
  },
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news'},
      { text: 'Top 100', link: '/README'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sifted-network' }
    ]
  }
}

export default defineConfig(
  withSidebar(vitePressConfigs, {
    collapsed: true,
    rootGroupText: 'Contents',
    hyphenToSpace: true,
    capitalizeFirst: true,
    sortMenusByFileDatePrefix: true,
    sortMenusOrderByDescending: true
  })
)