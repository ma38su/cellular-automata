(this["webpackJsonpcellular-automata"]=this["webpackJsonpcellular-automata"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(0),c=n(1),u=n.n(c),i=n(7),l=n.n(i),s=(n(13),n(4));function o(t){var e=t.x,n=t.y,r=t.size,c=t.state?"#777":"#EEE";return Object(a.jsx)("rect",{x:e,y:n,width:r,height:r,fill:c,stroke:"#222"})}function f(t){var e=t.y,n=t.size,r=t.state;return Object(a.jsx)(a.Fragment,{children:r.map((function(t,r){return Object(a.jsx)(o,{x:r*n,y:e,size:n,state:t},r)}))})}function h(t,e){var n=Object(s.a)(new Array(e).keys()).map((function(t){return!1}));switch(t){case"left":n[0]=!0;break;case"center":n[Math.floor(e/2)]=!0;break;case"right":n[n.length-1]=!0;break;case"all":return n.map((function(t){return!0}));case"random":return n.map((function(t){return Math.random()>.5}))}return n}var b,g,j=function(t){var e=t.initType,n=t.rule,c=t.length,i=u.a.useState(function(t){for(var e=[],n=0,r=Object(s.a)(new Array(8).keys());n<r.length;n++){var a=1<<r[n];e.push(0!==(t&a))}return e}(n)),l=Object(r.a)(i,1)[0],o=u.a.useState([h(e,c)]),b=Object(r.a)(o,2),g=b[0],j=b[1];return u.a.useEffect((function(){var t=setInterval((function(){j((function(e){e.length>200&&clearInterval(t);var n=e[e.length-1],r=Object(s.a)(n.keys()).map((function(t){return function(t,e,n){var r=n-1,a=n+1;return t[(r>=0&&e[r]?4:0)|(e[n]?2:0)|(a<e.length&&e[a]?1:0)]}(l,n,t)}));return[].concat(Object(s.a)(e),[r])}))}),500);return function(){return clearInterval(t)}}),[l]),Object(a.jsx)("svg",{children:g.map((function(t,e){return Object(a.jsx)(f,{y:10*e,size:10,state:t},e)}))})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},p=window.location.search.slice(1).split("&").reduce((function(t,e){var n=e.split("="),a=Object(r.a)(n,2),c=a[0],u=a[1];return t[c]=u,t}),{});var d=function(t){switch(t){case"blank":case"left":case"center":case"right":case"random":case"all":return t;default:return"center"}}(p.init),m=parseInt(null!==(b=p.rule)&&void 0!==b?b:"90"),O=parseInt(null!==(g=p.length)&&void 0!==g?g:"200");console.log("cell-automata",{rule:m,init:d,length:O}),l.a.render(Object(a.jsx)(u.a.StrictMode,{children:Object(a.jsx)(j,{initType:d,rule:m,length:O})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.aa0eb518.chunk.js.map