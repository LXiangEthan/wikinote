import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Docs of Ethan</span>,
  project: {
    link: 'https://github.com/LXiangEthan',
  },
  chat: {
    link: 'https://discord.gg/hnsDYATm',
  },
  docsRepositoryBase: 'https://github.com/LXiangEthan/wikinote',
  footer: {
    content: 'Ethan @ 2025 MIT',
  },
  i18n: [
  { locale: 'en-US', name: 'English' },
  { locale: 'zh', name: '中文' },
  { locale: 'de', name: 'Deutsch' }
  ]
}

export default config
