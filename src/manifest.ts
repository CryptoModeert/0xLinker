import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: '0xLinker',
  description: '',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  action: {},
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/index.ts',
  },
  content_scripts: [
    {
      matches: [
        'https://*.etherscan.io/*',
        'https://*.polygonscan.com/*',
        'https://optimistic.etherscan.io/*',
        'https://*.arbiscan.io/*',
      ],
      js: ['src/content/index.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  permissions: ['contextMenus', 'storage'],
})
