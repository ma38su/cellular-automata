(this["webpackJsonpcellular-automata"]=this["webpackJsonpcellular-automata"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n(1),i=n.n(c),s=n(7),u=n.n(s),l=n(3);function o(e){var t=e.x,n=e.y,r=e.size,c=e.state?"#555":"#FFF";return Object(a.jsx)("rect",{x:t,y:n,width:r,height:r,fill:c,stroke:"#444"})}function f(e){var t=e.y,n=e.size,r=e.state;return Object(a.jsx)(a.Fragment,{children:r.map((function(e,r){return Object(a.jsx)(o,{x:r*n,y:t,size:n,state:e},r)}))})}function v(e,t,n,r){var c=function(e,t,n){var r=Object(l.a)(new Array(n).keys()).map((function(e){return!1}));switch(e){case"left":for(var a=0;a<t;++a)r[a]=!0;break;case"center":for(var c=0;c<t;++c)r[Math.floor(c+(n-t)/2)]=!0;break;case"right":for(var i=0;i<t;++i)r[r.length-1-i]=!0;break;case"all":return r.map((function(e){return!0}));case"random":return r.map((function(e){return Math.random()>.5}))}return r}(e,t,n);return{cells:c,comps:[Object(a.jsx)(f,{y:0,size:r,state:c},0)]}}function h(e){var t=e.initType,n=e.rule,c=e.length,s=e.batch,u=e.max,o=e.interval,h=e.size,p=u<1e3?u:1e3,b=i.a.useMemo((function(){return function(e){for(var t=[],n=0,r=Object(l.a)(new Array(8).keys());n<r.length;n++){var a=1<<r[n];t.push(0!==(e&a))}return t}(n)}),[n]),j=i.a.useState(v(t,s,c,h)),d=Object(r.a)(j,2),m=d[0],g=d[1];return i.a.useEffect((function(){var e=setInterval((function(){g((function(e){var t=e.cells,n=e.comps;if(n.length>=p)return e;var r=Object(l.a)(t.keys()).map((function(e){return function(e,t,n){var r=n-1,a=n+1;return e[(r>=0&&t[r]?4:0)|(t[n]?2:0)|(a<t.length&&t[a]?1:0)]}(b,t,e)})),c=n.length;return{comps:[].concat(Object(l.a)(n),[Object(a.jsx)(f,{y:h*c,size:h,state:r},c)]),cells:r}}))}),o);return function(){clearInterval(e)}}),[b,p,o,h]),Object(a.jsx)("svg",{children:m.comps})}var p,b,j,d,m,g,x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},y=(n(13),window.location.search.slice(1).split("&").reduce((function(e,t){var n=t.split("="),a=Object(r.a)(n,2),c=a[0],i=a[1];return e[c]=i,e}),{}));var O=function(e){switch(e){case"blank":case"left":case"center":case"right":case"random":case"all":return e;default:return"center"}}(y.init),k=parseInt(null!==(p=y.rule)&&void 0!==p?p:"90"),I=parseInt(null!==(b=y.length)&&void 0!==b?b:"200"),w=parseInt(null!==(j=y.batch)&&void 0!==j?j:"1"),z=parseInt(null!==(d=y.max)&&void 0!==d?d:"200"),F=parseInt(null!==(m=y.interval)&&void 0!==m?m:"10"),M=parseInt(null!==(g=y.cellsize)&&void 0!==g?g:"8");u.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{initType:O,rule:k,length:I,interval:F,batch:w,max:z,size:M})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.c84a86dc.chunk.js.map