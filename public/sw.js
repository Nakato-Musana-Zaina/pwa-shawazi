if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const c=e=>t(e,i),d={module:{uri:i},exports:o,require:c};s[i]=Promise.all(a.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b21203e8efdab71bb9a81d2178f3738e"},{url:"/_next/static/chunks/105-f89a72a21d4cc360.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/173-426e03b949f3b5d9.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/23-09462ec4f66e259c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/231-62e59527d4e7ba99.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/381-1eb65e139b4bd512.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/3d47b92a-a8854be03623db03.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/44-6aaf9e9bb5ada00e.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/479ba886-b3059139b39ebff6.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/4e6af11a-5f12f8e979dc747c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/550-da95902546cd6339.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/66ec4792-8e5f92f5ff6f173c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/687-f0fefb53610219cd.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/795d4814-1377c7ae99b9d07b.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/8e1d74a4-98ce925548df1125.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/922-363e3c6e807943ea.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/94730671-a833251fa30087c0.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/968-bb75426e2f41ca18.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/9c4e2130-1a182974dac2a216.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/_not-found/page-3ff5360b8958f3d8.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/agreementNext/page-936da1ac75479f11.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/chatroom/page-735c964f9f703901.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/components/Link-to-join/page-7f615d2814bd08f7.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/forgot-password/page-1c58eaad594fb22c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/land-display/page-b039264cce6a8fd4.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/lawyer/draft-contract/page-b6de0e901050c1f8.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/layout-ee3e8e9e46d8e42b.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/login/page-7a08ada9cf7effe8.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/otp-verification/page-8ba702ebe53680e5.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/page-b3107f9a229ac2c3.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/profile/page-c2e9c6b352c97fc4.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/register/page-b499f67f9314145c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/searchbar/page-2f0185bdf613d108.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/seller-page/page-3140045190900201.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/teaser /page-048784392c659b8b.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/teaserthree/page-de766d5898e92828.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/teasertwo/page-e0fef7507e58b124.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/transactions/history-of-transactions/page-a25fb7b0c13d107e.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/transactions/transactions/page-d934bdf611e34ac6.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/app/transactions/upload_transactions/page-24aef3414a7cb98b.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/fd9d1056-bcdadb895367c026.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/main-9a943eb7377337e1.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/main-app-db50317ea078ad9c.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-0cad6b0be2da45cf.js",revision:"dExgK3-vd7UAotey3DJdo"},{url:"/_next/static/css/ff61a14fb7a9fcff.css",revision:"ff61a14fb7a9fcff"},{url:"/_next/static/dExgK3-vd7UAotey3DJdo/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/dExgK3-vd7UAotey3DJdo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/favicon.ico",revision:"bf3118c740e15157531b2be60c4aec36"},{url:"/images/error.png",revision:"20ef3b0d71ece44d8353dedf896a408b"},{url:"/images/secure.png",revision:"d6d12701f22f0b7975faa69c96257bd9"},{url:"/images/securetransactions.png",revision:"ed5c7580af1aee30f23528ca606a114b"},{url:"/images/shawazilogo.png",revision:"a3f2f04b5badd185aa613c7ad95ccf14"},{url:"/images/transactions.png",revision:"be5423453c8755b696d328076bad6cd5"},{url:"/manifest.json",revision:"4e1ffec60dfb481de09a0a494791f299"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
