(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{49:function(t,e,c){"use strict";c.d(e,"e",(function(){return i})),c.d(e,"d",(function(){return o})),c.d(e,"a",(function(){return s})),c.d(e,"b",(function(){return u})),c.d(e,"c",(function(){return l}));var n=c(56),a=c.n(n);a.a.defaults.baseURL="https://api.themoviedb.org/3";var r="a6a422d110dec9c7fa9eeee757b6f274";function i(){return a()({method:"GET",url:"/trending/movie/week?api_key=".concat(r)})}function o(t){return a()({method:"GET",url:"/search/movie?api_key=".concat(r,"&query=").concat(t)})}function s(t){return a()({method:"GET",url:"/movie/".concat(t,"?api_key=").concat(r)})}function u(t){return a()({method:"GET",url:"/movie/".concat(t,"/credits?api_key=").concat(r)})}function l(t){return a()({method:"GET",url:"/movie/".concat(t,"/reviews?api_key=").concat(r)})}},50:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return i})),c.d(e,"c",(function(){return o}));var n="https://image.tmdb.org/t/p/w500",a="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";function r(t){return t.poster_path?n+t.poster_path:"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_960_720.png"}function i(t){return t.profile_path?n+t.profile_path:a}function o(t){var e=t.author_details.avatar_path;return console.log("initialAvatar",e),e?e.includes("http")?e.slice(1,e.length-1):n+e:a}},85:function(t,e,c){t.exports={castList:"Cast_castList__2BpLu",castItem:"Cast_castItem__1fjjZ"}},86:function(t,e,c){t.exports={reviewList:"Reviews_reviewList__2tNHK",reviewItem:"Reviews_reviewItem__OLwbg"}},89:function(t,e,c){"use strict";c.r(e);var n=c(51),a=c.n(n),r=c(55),i=c(52),o=c(54),s=c(0),u=c(3),l=c(12),j=c(85),d=c.n(j),h=c(49),p=c(50),b=c(2);var v=function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1],l=Object(u.h)();return Object(s.useEffect)((function(){(function(){var t=Object(i.a)(a.a.mark((function t(){var e,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.b)(l.state.id);case 3:e=t.sent,c=e.data.cast,n(c.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{avatar:Object(p.a)(t)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error :>> ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[l.state.id]),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:d.a.castList,children:c.length>0?c.map((function(t){var e=t.id,c=t.name,n=t.avatar;return Object(b.jsxs)("li",{className:d.a.castItem,children:[Object(b.jsx)("h4",{children:c}),Object(b.jsx)("img",{src:n,alt:c,width:"80"})]},e)})):Object(b.jsx)("li",{className:d.a.castItem,children:Object(b.jsx)("p",{children:"No actors list for this movie was found"})})})})},f=c(86),O=c.n(f);var m=function(){var t=Object(s.useState)([]),e=Object(o.a)(t,2),c=e[0],n=e[1],l=Object(u.h)();return Object(s.useEffect)((function(){(function(){var t=Object(i.a)(a.a.mark((function t(){var e,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.c)(l.state.id);case 3:e=t.sent,c=e.data.results,console.log("reviews :>> ",c),n(c.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{avatar:Object(p.c)(t)})}))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error :>> ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}})()()}),[l.state.id]),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:O.a.reviewList,children:c.length>0?c.map((function(t){var e=t.id,c=t.author,n=t.avatar,a=t.content;return Object(b.jsxs)("li",{className:O.a.reviewItem,children:[Object(b.jsx)("h4",{children:c})," ",Object(b.jsx)("img",{src:n,alt:c,width:"80"}),Object(b.jsx)("p",{children:a})]},e)})):Object(b.jsx)("li",{className:O.a.reviewItem,children:Object(b.jsx)("p",{children:"No reviews"})})})})},x=c(47);e.default=function(){var t,e,c,n,j=Object(s.useState)({}),d=Object(o.a)(j,2),f=d[0],O=d[1],w=Object(u.h)(),_=Object(u.g)(),g=Object(u.i)();return Object(s.useEffect)((function(){var t,e=!1;(null===(t=w.state)||void 0===t?void 0:t.id)&&function(){var t=Object(i.a)(a.a.mark((function t(){var c,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.a)(w.state.id);case 3:c=t.sent,n=Object(r.a)(Object(r.a)({},c.data),{},{poster:Object(p.b)(c.data)}),e||O((function(t){return Object(r.a)(Object(r.a)({},t),{},{info:n})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error :>> ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()();return function(){return e=!0}}),[w.state.id]),Object(b.jsxs)("div",{children:[Object(b.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){_.push(w.state.from,{search:w.state.search})},children:"go back"}),Object(b.jsx)("h1",{children:null===(t=f.info)||void 0===t?void 0:t.original_title}),Object(b.jsx)("img",{src:null===(e=f.info)||void 0===e?void 0:e.poster,alt:null===(c=f.info)||void 0===c?void 0:c.tagline,width:"300"}),Object(b.jsx)("h3",{children:"Overview"}),Object(b.jsx)("p",{style:{width:"600px",margin:"0 auto"},children:null===(n=f.info)||void 0===n?void 0:n.overview}),Object(b.jsx)(l.c,{style:{textDecoration:"none"},to:{pathname:"".concat(g.url,"/reviews"),state:w.state},children:Object(b.jsx)(x.a,{style:{fontSize:"28px"},color:"primary",children:"Reviews"})}),Object(b.jsx)(l.c,{style:{textDecoration:"none"},to:{pathname:"".concat(g.url,"/cast"),state:w.state},children:Object(b.jsx)(x.a,{style:{fontSize:"28px"},color:"primary",children:"Cast"})}),Object(b.jsx)(u.b,{path:"".concat(g.path,"/reviews"),exact:!0,component:m}),Object(b.jsx)(u.b,{path:"".concat(g.path,"/cast"),exact:!0,component:v})]})}}}]);
//# sourceMappingURL=4.e4237fe6.chunk.js.map