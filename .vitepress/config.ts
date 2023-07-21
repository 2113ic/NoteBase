import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'NoteBase',
  base: '/NoteBase/',
  titleTemplate: "2113's study notes",
  description: 'This is my study notes recording website.',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './logo.jpg'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    outlineTitle: '目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2113ic' }
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  }
})
