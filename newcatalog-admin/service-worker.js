if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let c={};const u=s=>l(s,i),o={module:{uri:i},exports:c,require:u};e[i]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(r(...s),c)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"admin"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/148.bcb4c52b.css",revision:null},{url:"/css/322.4d88af63.css",revision:null},{url:"/css/360.774814c9.css",revision:null},{url:"/css/app.27c1fca2.css",revision:null},{url:"/css/chunk-vendors.59935f5c.css",revision:null},{url:"/index.html",revision:"fa5ca241387a936721c8fe592cfad9ea"},{url:"/js/148.cd7a9910.js",revision:null},{url:"/js/322.0d3d6e66.js",revision:null},{url:"/js/360.f9e581f9.js",revision:null},{url:"/js/658.267df1c5.js",revision:null},{url:"/js/71.453ef2a5.js",revision:null},{url:"/js/826.5d906cd3.js",revision:null},{url:"/js/829.bb77a001.js",revision:null},{url:"/js/975.500e93f5.js",revision:null},{url:"/js/app.c99cccde.js",revision:null},{url:"/js/chunk-vendors.20a48937.js",revision:null},{url:"/manifest.json",revision:"ad1c7122216ff6e919bd68f90e80d94d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
