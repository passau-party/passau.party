if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const c=e=>n(e,s),t={module:{uri:s},exports:d,require:c};i[s]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7497aee9.js",revision:null},{url:"assets/index-b652e748.css",revision:null},{url:"index.html",revision:"e70c6b45abf64dc6b79fdb4b28c637ba"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-icon-36x36.png",revision:"3eb207324565c92e6064ea884484d5c2"},{url:"android-icon-48x48.png",revision:"4e73d58868834475b77068fe8247e214"},{url:"android-icon-72x72.png",revision:"b9915592f288f184b191e91c2c9049db"},{url:"android-icon-96x96.png",revision:"19a22629df8709a52efe4b481bbd2e75"},{url:"android-icon-144x144.png",revision:"e35a6b1b3e81b10e53059b062a6ec47b"},{url:"android-icon-192x192.png",revision:"3f7ad15fabd6ce7f90601099abd073a2"},{url:"manifest.webmanifest",revision:"8669692ed4b8928af33a5542d8c74cec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
