"use strict";var precacheConfig=[["/chatter/index.html","1bb2cc28c712b05f39aadfad0ac247ce"],["/chatter/static/css/main.7e1bbf4a.css","0af8ee86673177aa2a14f515f4e9c649"],["/chatter/static/js/main.028c3e85.js","01b74d3a1288313f09f5d98a9ba3bcdf"],["/chatter/static/media/AddItem.265f4f83.scss","265f4f8373fa767d9ae6aca5123e0acb"],["/chatter/static/media/App.dc8da64c.scss","dc8da64c8a98f1dbe4d4cecc9a5f2223"],["/chatter/static/media/Common.c52251ec.scss","c52251ec6052d3355e344dff1d921309"],["/chatter/static/media/Footer.897423e4.scss","897423e4837746846b84b7ac9b26c3d9"],["/chatter/static/media/Header.a0cfab60.scss","a0cfab607febbf0cde84b4414a643d4e"],["/chatter/static/media/IconButton.8d55bcd7.scss","8d55bcd7203f111f1615d695ee80f75c"],["/chatter/static/media/Item.2ab723ad.scss","2ab723adc10342a49120d346ec4951c4"],["/chatter/static/media/ItemList.b1eff44d.scss","b1eff44d1c08f0d3c1b13fc208895dab"],["/chatter/static/media/ListSelector.9f16f352.scss","9f16f3521087def9f8b2cae0216a828e"],["/chatter/static/media/avacado_image.69edc6ac.jpg","69edc6ac23392bf44686cadc109c0fbe"],["/chatter/static/media/icomoon.2c297164.eot","2c2971643c36b59ca074cad39d955772"],["/chatter/static/media/icomoon.7d226b34.ttf","7d226b34037a2f191aa3a0ec3bf4fce5"],["/chatter/static/media/icomoon.8ba3c023.svg","8ba3c023e9517a30c2f7842532dd6d03"],["/chatter/static/media/icomoon.ee4e1974.woff","ee4e1974aac071077021cacb6ea94b22"],["/chatter/static/media/pepper_image.644d7bf7.jpg","644d7bf732dc6ea4e5f53d965b5273bc"],["/chatter/static/media/tomato_image.e452e7a5.jpg","e452e7a5d92db1b930b9f1615c89cbee"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/chatter/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});