(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[29],{134:function(e,t,a){"use strict";var n=a(0),c=a(86),r=["mousedown","touchstart"];t.a=function(e,t,a){void 0===a&&(a=r);var l=Object(n.useRef)(t);Object(n.useEffect)((function(){l.current=t}),[t]),Object(n.useEffect)((function(){for(var t=function(t){var a=e.current;a&&!a.contains(t.target)&&l.current(t)},n=0,r=a;n<r.length;n++){var o=r[n];Object(c.c)(document,o,t)}return function(){for(var e=0,n=a;e<n.length;e++){var r=n[e];Object(c.b)(document,r,t)}}}),[a,e])}},144:function(e,t,a){"use strict";a.r(t);var n=a(78),c=a(23),r=a(0),l=a.n(r),o=a(256),s=a(5),d=a(81),i=a(134),u=function(e){var t=e.stateCode,a=e.trail,u=Object(r.useState)(!1),m=Object(n.a)(u,2),f=m[0],v=m[1],p=Object(r.useRef)(),b=Object(s.g)(),j=Object(o.a)().t;Object(i.a)(p,(function(){v(!1)}));var h=Object(d.f)(f,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),O=Object(r.useCallback)((function(e){v(!1),b.push("/state/".concat(e))}),[b]);return l.a.createElement("div",{className:"StateDropdown",ref:p},l.a.createElement(d.a.h1,{className:"state-name fadeInUp",style:a,onClick:v.bind(void 0,!f)},j(c.p[t])),h.map((function(e){var a=e.item,n=e.key,r=e.props;return a?l.a.createElement(d.a.div,{className:"dropdown",style:r,key:n},Object.keys(c.h).filter((function(e){return"TT"!==e&&e!==t})).sort().map((function(e){return l.a.createElement("h1",{key:e,className:"item",onClick:O.bind(void 0,e)},j(c.p[e]))}))):l.a.createElement(d.a.div,{key:t,style:r})})),f&&l.a.createElement("div",{className:"backdrop"}))},m=a(31);t.default=l.a.memo((function(e){var t,a,n,c,s,i=e.data,f=e.stateCode,v=Object(o.a)().t,p=Object(r.useMemo)((function(){var e=[];return[0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(250*a,"ms")}),null})),e}),[]),b=Object(d.c)({total:Object(m.j)(i,"total","tested"),config:d.b.gentle});return l.a.createElement("div",{className:"StateHeader"},l.a.createElement("div",{className:"header-left"},l.a.createElement(u,Object.assign({stateCode:f},{hyperlink:!1,trail:p[0]})),(null===i||void 0===i||null===(t=i.meta)||void 0===t?void 0:t.last_updated)&&l.a.createElement("h5",{className:"fadeInUp",style:p[1]},"Last Updated on ".concat(Object(m.d)(i.meta.last_updated,"dd MMM, p")," IST"))),l.a.createElement("div",{className:"header-right fadeInUp",style:p[2]},l.a.createElement("h5",null,v("Tested")),l.a.createElement(d.a.h2,null,b.total.interpolate((function(e){return Object(m.f)(Math.floor(e))}))),(null===i||void 0===i||null===(a=i.meta)||void 0===a||null===(n=a.tested)||void 0===n?void 0:n.last_updated)&&l.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(m.d)(i.meta.tested.last_updated,"dd MMMM"))),(null===i||void 0===i||null===(c=i.meta)||void 0===c||null===(s=c.tested)||void 0===s?void 0:s.source)&&l.a.createElement("h5",null,"per ",l.a.createElement("a",{href:i.meta.tested.source,target:"_noblank"},"source"))))}))}}]);
//# sourceMappingURL=29.ffd07d21.chunk.js.map