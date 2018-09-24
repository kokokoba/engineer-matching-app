importScripts('/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09a603ee3e89be31da7b.js",
    "revision": "826539b019ff51f30645e772c5a37f3f"
  },
  {
    "url": "/_nuxt/2ab26c31cb7b1cb3c9a4.js",
    "revision": "8805efa264be277a83abedcdebb294c9"
  },
  {
    "url": "/_nuxt/466f7ec7f3fabd3664ae.js",
    "revision": "bc272c927c50263ccf3e83dcebf8d40b"
  },
  {
    "url": "/_nuxt/91b3ac7d157fe47e311c.js",
    "revision": "d385298c6f25273b69671e7f428cc045"
  },
  {
    "url": "/_nuxt/afd89bbd28688bc879b2.js",
    "revision": "799d355763dd1f4690d892879ec6148b"
  }
], {
  "cacheId": "src",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





