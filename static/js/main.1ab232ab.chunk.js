(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(16),i=c.n(s),o=c(6),u=c(12),j=c(3),l=(c(37),c(11)),b=c(4),d=c.n(b),h=c(10),m="6b3d2042aa7eea41dc6a80457b25d65e",f=function(){var e=Object(h.a)(d.a.mark((function e(t,c){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://ws.audioscrobbler.com").concat(t),c);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/2.0/?method=chart.gettoptracks&api_key=".concat(m,"&format=json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(d.a.mark((function e(t,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/2.0/?method=track.getInfo&api_key=".concat(m,"&artist=").concat(c,"&track=").concat(t,"&autocorrect[1]&format=json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/2.0/?method=artist.getinfo&artist=".concat(t,"&api_key=").concat(m,"&format=json"));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=c(14),g=c(26),N=c(27),k="SET_SONGS",w="SET_FOUND_SONG",y="SET_ARTIST",S=function(e){return{type:k,songs:e}},_=function(e){return{type:w,song:e}},T=function(e){return Object(h.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:c=t.sent,F.dispatch({type:y,artist:c.artist});case 4:case"end":return t.stop()}}),t)})))},A=function(e){return e.songs},E=function(e){return e.foundSong},C=function(e){return e.selectedArtist},F=Object(v.createStore)((function(e,t){switch(t.type){case k:return Object(l.a)(Object(l.a)({},e),{},{songs:t.songs});case w:return Object(l.a)(Object(l.a)({},e),{},{foundSong:t.song});case y:return Object(l.a)(Object(l.a)({},e),{},{selectedArtist:t.artist});default:return e}}),{songs:[],foundSong:null,selectedArtist:null},Object(N.composeWithDevTools)(Object(v.applyMiddleware)(g.a))),D=F,I=(c(39),function(e){var t=e.image,c=e.name,a=e.artist,r=e.url,s=Object(o.b)();return Object(n.jsxs)("div",{className:"card song-card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("figure",{className:"image",children:Object(n.jsx)("img",{src:t[3]["#text"],alt:""})})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("a",{href:r,children:c}),Object(n.jsx)(u.b,{to:"/artist",onClick:function(){s(T(a.name))},children:a.name})]})]})}),G=(c(41),function(){var e=Object(o.b)(),t=Object(o.c)(A);return Object(a.useEffect)(Object(h.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:c=t.sent,e(S(c.tracks.track));case 4:case"end":return t.stop()}}),t)}))),[]),Object(n.jsx)("div",{className:"songs",children:t.map((function(e){return Object(a.createElement)(I,Object(l.a)(Object(l.a)({},e),{},{key:e.name}))}))})}),J=(c(42),function(){return Object(n.jsxs)("section",{className:"popular",children:[Object(n.jsx)("h1",{className:"popular__title",children:"Popular songs"}),Object(n.jsx)(G,{})]})}),M=c(23),z=(c(43),function(){var e=Object(o.b)(),t=Object(a.useState)(""),c=Object(M.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(""),u=Object(M.a)(i,2),j=u[0],l=u[1],b=function(){var t=Object(h.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,p(r,j);case 3:n=t.sent,e(_(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("form",{onSubmit:b,children:Object(n.jsxs)("div",{className:"field is-horizontal",children:[Object(n.jsx)("div",{className:"field",children:Object(n.jsxs)("p",{className:"control has-icons-left",children:[Object(n.jsx)("input",{className:"input",placeholder:"Some song",type:"text",name:"song",value:r,onChange:function(e){s(e.target.value)}}),Object(n.jsx)("span",{className:"icon is-small is-left",children:Object(n.jsx)("i",{className:"fas fa-search"})})]})}),Object(n.jsx)("div",{className:"field",children:Object(n.jsxs)("p",{className:"control has-icons-left",children:[Object(n.jsx)("input",{className:"input",placeholder:"Some artist",type:"text",name:"artist",value:j,onChange:function(e){l(e.target.value)}}),Object(n.jsx)("span",{className:"icon is-small is-left",children:Object(n.jsx)("i",{className:"fas fa-search"})})]})}),Object(n.jsx)("button",{type:"submit",className:"button",children:"Find song"})]})})}),B=(c(44),function(){var e=Object(o.c)(E);if(!e)return Object(n.jsx)("h2",{children:"Find song first"});if(e.message)return Object(n.jsx)("h2",{children:e.message});var t=e.track,c=t.name,a=t.artist,r=t.album;return Object(n.jsx)("div",{className:"m-3",children:Object(n.jsxs)("div",{className:"card song-info",children:[Object(n.jsx)("h1",{children:"Song: ".concat(c)}),Object(n.jsx)("p",{children:"Artist: ".concat(a.name)}),r?Object(n.jsx)("p",{children:"Album: ".concat(r.title)}):Object(n.jsx)("p",{children:"No album info"})]})})}),H=(c(45),function(){return Object(n.jsxs)("section",{className:"search m-3",children:[Object(n.jsx)(z,{}),Object(n.jsx)(B,{})]})}),P=(c(46),function(){var e=Object(o.c)(C);return Object(n.jsx)("div",{className:"m-3",children:e?Object(n.jsxs)("div",{className:"card artist-card",children:[Object(n.jsx)("img",{src:e.image[0]["#text"],alt:""}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("a",{href:e.url,children:e.name}),Object(n.jsx)("p",{children:"Tags :"}),Object(n.jsx)("ul",{children:e.tags.tag.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.url,children:e.name})},e.name)}))})]}),Object(n.jsx)("p",{children:e.bio.summary})]}):Object(n.jsx)("h1",{children:"No artist selected"})})}),R=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"tabs is-info",children:Object(n.jsxs)("div",{className:"navbar-brand",children:[Object(n.jsx)(u.c,{to:"/",className:"navbar-item is-tab",activeClassName:"is-active",exact:!0,children:"Home"}),Object(n.jsx)(u.c,{to:"/search",className:"navbar-item is-tab",activeClassName:"is-active",children:"Search song"}),Object(n.jsx)(u.c,{to:"/artist",className:"navbar-item is-tab",activeClassName:"is-active",children:"Artist"})]})})}),Object(n.jsx)("main",{className:"container",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",component:J,exact:!0}),Object(n.jsx)(j.a,{path:"/search",component:H}),Object(n.jsx)(j.a,{path:"/artist",component:P})]})})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{store:D,children:Object(n.jsx)(u.a,{children:Object(n.jsx)(R,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1ab232ab.chunk.js.map