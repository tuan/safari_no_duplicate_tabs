import packageJson from './package.json' assert { type: 'json' };

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  name: 'No Duplicate Tabs',
  version: packageJson.version,
  description: 'Automatically close duplicate tabs',
  permissions: ['tabs', 'storage'],
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: {
      16: 'icon-16.png',
      19: 'icon-19.png',
      32: 'icon-32.png',
      38: 'icon-38.png',
      48: 'icon-48.png',
      72: 'icon-72.png',
    },
  },
  icons: {
    48: 'icon-48.png',
    96: 'icon-96.png',
    128: 'icon-128.png',
    256: 'icon-256.png',
    512: 'icon-512.png',
  },
};

export default manifest;
