// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'QA or the Highway',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'QA or the Highway 2022 Schedule',
        startUrl: '/qaorthehwy2022/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#1b51aa',
        backgroundColor: '#ffffff',

        // icon should be a path to the static folder i.e. 'static/icon.png'
        icon: 'logo-192.png',
      }
    }
  ],
  siteUrl: 'https://rquellh.github.io',
  pathPrefix: '/qaorthehwy2022'
}
