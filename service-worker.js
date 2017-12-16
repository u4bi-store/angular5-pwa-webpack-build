importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.js",
    "revision": "aed3b443ea97d247222b50250634d07a"
  },
  {
    "url": "assets/u4bi.png",
    "revision": "87066bfe66a756b143149dc1a28cacbc"
  },
  {
    "url": "index.html",
    "revision": "8de950cb4663370b8e22a8cb12948a38"
  },
  {
    "url": "polyfills.js",
    "revision": "477d4e2d5173cfd19df097862b7e7264"
  },
  {
    "url": "vendor.js",
    "revision": "95b815333cda7c711201a007d6b268c3"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
