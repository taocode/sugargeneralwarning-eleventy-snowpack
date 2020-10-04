/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "6d05e76007a45ffb8fca6aa8b60a3b36"
  },
  {
    "url": "index.html",
    "revision": "75e59a544877cac3ce8971a4e755a060"
  },
  {
    "url": "static/favicon.png",
    "revision": "09b1bb9ed374f29226a44a494848fa06"
  },
  {
    "url": "static/favicon/android-chrome-192x192.png",
    "revision": "ea327619692b03f4044a91dd0bc061af"
  },
  {
    "url": "static/favicon/android-chrome-512x512.png",
    "revision": "d29c6ceaba3bc7ace3c569dcb20711d5"
  },
  {
    "url": "static/favicon/apple-touch-icon.png",
    "revision": "d64de1282820f24de96bae45f9679838"
  },
  {
    "url": "static/favicon/favicon-16x16.png",
    "revision": "5157433c98553c24029b33063744cb23"
  },
  {
    "url": "static/favicon/favicon-32x32.png",
    "revision": "af27f8655a294f7bff410724b7671b63"
  },
  {
    "url": "static/favicon/mstile-150x150.png",
    "revision": "e4d9b0265447cb56ab084ad1608a3904"
  },
  {
    "url": "static/favicon/safari-pinned-tab.svg",
    "revision": "f4c44898302798c0a369b6032b160747"
  },
  {
    "url": "static/fonts/oswald-v35-latin-300.svg",
    "revision": "a240fb09ff42f2165fe3eef4c7cefb24"
  },
  {
    "url": "static/fonts/oswald-v35-latin-300.woff",
    "revision": "2c81632cda52782e71075612c81b90ec"
  },
  {
    "url": "static/fonts/oswald-v35-latin-300.woff2",
    "revision": "95bf83dcbd798c779f2e6685aecf8fba"
  },
  {
    "url": "static/fonts/oswald-v35-latin-600.svg",
    "revision": "c8aca399820cc25aaee0ae5264a803fd"
  },
  {
    "url": "static/fonts/oswald-v35-latin-600.woff",
    "revision": "47fef7e5ce2663eb933d86ab6c81b2ac"
  },
  {
    "url": "static/fonts/oswald-v35-latin-600.woff2",
    "revision": "161c0bfba22fa0b99354f854e15b15e8"
  },
  {
    "url": "static/fonts/oswald-v35-latin-regular.svg",
    "revision": "dc872e68995b6f6a0a24f013ff750c50"
  },
  {
    "url": "static/fonts/oswald-v35-latin-regular.woff",
    "revision": "0e88ec239d6256e2c889df2e3f0d51f2"
  },
  {
    "url": "static/fonts/oswald-v35-latin-regular.woff2",
    "revision": "f3655d2e126fb0891c94407ce82bea4b"
  },
  {
    "url": "static/logo.svg",
    "revision": "65eb02ef564d4bc9f19937e44df9a954"
  },
  {
    "url": "static/style.css",
    "revision": "da972e42aa2a34883daeeacf9220834e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
