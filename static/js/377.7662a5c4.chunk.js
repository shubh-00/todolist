"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[377],{377:function(t,n,e){e.r(n),e.d(n,{getCLS:function(){return d},getFCP:function(){return m},getFID:function(){return v},getLCP:function(){return h},getTTFB:function(){return S}});var i,a,r=function(t){return{name:t,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),isFinal:!1}},o=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},u=!1,s=!1,c=function(t){u=!t.persisted},f=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(addEventListener("pagehide",c),addEventListener("beforeunload",(function(){})),s=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:u})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},d=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=r("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},u=o("layout-shift",a);u&&(n=l(t,i,u,e),f((function(t){var e=t.isUnloading;u.takeRecords().map(a),e&&(i.isFinal=!0),n()})))},p=function(){return void 0===i&&(i="hidden"===document.visibilityState?0:1/0,f((function(t){var n=t.timeStamp;return i=n}),!0)),{get timeStamp(){return i}}},m=function(t){var n,e=r("FCP"),i=p(),a=o("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));a&&(n=l(t,e,a))},v=function(t){var n=r("FID"),e=p(),i=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,u())},a=o("first-input",i),u=l(t,n,a);a?f((function(){a.takeRecords().map(i),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],u())}))},g=function(){return a||(a=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),a},h=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=r("LCP"),a=p(),u=function(t){var e=t.startTime;e<a.timeStamp?(i.value=e,i.entries.push(t)):i.isFinal=!0,n()},s=o("largest-contentful-paint",u);if(s){n=l(t,i,s,e);var c=function(){i.isFinal||(s.takeRecords().map(u),i.isFinal=!0,n())};g().then(c),f(c,!0)}},S=function(t){var n,e=r("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);
//# sourceMappingURL=377.7662a5c4.chunk.js.map