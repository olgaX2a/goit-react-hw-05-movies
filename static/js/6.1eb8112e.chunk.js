(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{49:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return d}));var c=n(56),r=n.n(c);r.a.defaults.baseURL="https://api.themoviedb.org/3";var a="a6a422d110dec9c7fa9eeee757b6f274";function i(){return r()({method:"GET",url:"/trending/movie/week?api_key=".concat(a)})}function o(t){return r()({method:"GET",url:"/search/movie?api_key=".concat(a,"&query=").concat(t)})}function s(t){return r()({method:"GET",url:"/movie/".concat(t,"?api_key=").concat(a)})}function u(t){return r()({method:"GET",url:"/movie/".concat(t,"/credits?api_key=").concat(a)})}function d(t){return r()({method:"GET",url:"/movie/".concat(t,"/reviews?api_key=").concat(a)})}},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var c="https://image.tmdb.org/t/p/w500",r="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";function a(t){return t.poster_path?c+t.poster_path:"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_960_720.png"}function i(t){return t.profile_path?c+t.profile_path:r}function o(t){var e=t.author_details.avatar_path;return console.log("initialAvatar",e),e?e.includes("http")?e.slice(1,e.length-1):c+e:r}},53:function(t,e,n){t.exports={cardList:"MovieList_cardList__1jJ09",cardItem:"MovieList_cardItem__3INBY",cardPhoto:"MovieList_cardPhoto__18xBG",cardThumb:"MovieList_cardThumb__1ukjQ",cardInfo:"MovieList_cardInfo__1mBCe",cardTitle:"MovieList_cardTitle__3nH6T"}},57:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var c=n(3),r=n(12),a=n(53),i=n.n(a),o=n(2),s=function(t){var e=t.movie,n=t.query,a=Object(c.h)();return Object(o.jsx)("li",{className:i.a.cardItem,children:Object(o.jsxs)(r.b,{to:{pathname:"/movies/".concat(e.id),state:{search:void 0!==n?n:"",id:e.id,from:a.pathname}},children:[Object(o.jsx)("div",{className:i.a.cardThumb,children:Object(o.jsx)("img",{className:"cardPhoto",src:e.poster,alt:e.title,width:"280",height:"402"})}),Object(o.jsx)("div",{className:i.a.cardInfo,children:Object(o.jsx)("h2",{className:"cardTitle",children:e.title})})]})})},u=function(t){var e=t.movies,n=t.query;return Object(o.jsx)("ul",{className:i.a.cardList,children:e.map((function(t){return Object(o.jsx)(s,{movie:t,query:n},t.id)}))})}},88:function(t,e,n){"use strict";n.r(e);var c=n(51),r=n.n(c),a=n(55),i=n(52),o=n(54),s=n(0),u=n(3),d=n(49),h=n(50),l=n(57),p=n(2);e.default=function(){var t=Object(s.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],m=Object(s.useState)([]),f=Object(o.a)(m,2),v=f[0],b=f[1],j=Object(u.g)(),_=function(){var t=Object(i.a)(r.a.mark((function t(e){var n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(d.d)(e);case 3:n=t.sent,i=n.data.results,console.log("results :>> ",i),b(i.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{poster:Object(h.b)(t)})}))),c(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error :>> ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){var t;(null===(t=j.location.state)||void 0===t?void 0:t.search)&&_(j.location.state.search)}),[j]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault(),j.push({pathname:j.location.pathname,search:"?q=".concat(n)}),_(n)},children:[Object(p.jsx)("input",{type:"text",value:n,name:"query",onChange:function(t){c(t.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Search"})]}),Object(p.jsx)(l.a,{movies:v,query:n})]})}}}]);
//# sourceMappingURL=6.1eb8112e.chunk.js.map