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
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/LXiangEthan" target="_blank">
          Ethan
        </a>
        .
      </span>
    )
  }
}

export default config
