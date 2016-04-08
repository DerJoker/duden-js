
"use strict";

// block
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: true};
  },
  {urls: [
    "*://apis.google.com/*",
    "*://*.googleadservices.com/*",
    "*://*.googleapis.com/*",
    "*://*.googletagservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/",
    "*://*.meetrics.net/*"
  ]},
  ["blocking"]
);
