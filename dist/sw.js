if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const d=e=>n(e,c),t={module:{uri:c},exports:s,require:d};i[c]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-90e71ef4.js",revision:null},{url:"assets/index-a9a2ecad.css",revision:null},{url:"index.html",revision:"126cb4a253f448ea4906a4c17a1bbba9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-icon-36x36.png",revision:"6cce160ec0e57bb86e80580918d4bb2e"},{url:"android-icon-48x48.png",revision:"d7f3bc6ad966ee343cb1572b9f0b30b4"},{url:"android-icon-72x72.png",revision:"81129e6fb2dcaa1b00f13768ec1ff1e4"},{url:"android-icon-96x96.png",revision:"8a4c5ecd29efdb3cb21224b0dc0e8a32"},{url:"android-icon-144x144.png",revision:"4b3ebc9e81c535ed8b865091abb8962f"},{url:"android-icon-192x192.png",revision:"eba2ca4816321a6e33e80eec31443a7c"},{url:"manifest.webmanifest",revision:"8669692ed4b8928af33a5542d8c74cec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
