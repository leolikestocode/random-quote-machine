(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=(n(15),n(4)),s=n(5),l=n(7),h=n(6),u=n(1),d=n(8),m=[{name:"Bob Dylan",text:"A man is a success if he gets up in the morning and goes to bed at night."},{name:"John Lennon",text:"Life is what happens to you while you\u2019re busy making other plans."},{name:"Chinese Proverb",text:"The best time to plant a tree was 20 years ago. The second best time is now."},{name:"George Addair",text:"Everything you\u2019ve ever wanted is on the other side of fear."},{name:"Farrah Gray",text:"Build your own dreams, or someone else will hire you to build theirs."}],w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleClick=function(t){e.setState(function(e){return{change:5===e.change?1:e.change+1,previous:t}})},e.state={change:1,previous:null},e.handleClick=e.handleClick.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Math.floor(5*Math.random());return this.state.previous===t&&this.handleClick(t),m.map(function(n,a){return t===a&&o.a.createElement("div",{key:a,className:"color"+e.state.change,id:"author-data"},o.a.createElement("p",{id:"text"},n.text),o.a.createElement("span",{id:"author"},n.name),o.a.createElement("div",{id:"new-quote",className:"color"+e.state.change,onClick:function(){return e.handleClick(a)}},"New Quote"),o.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags="+n.text,onClick:e.handleClick,target:"_blank",rel:"noopener noreferrer"},"Tweet this"))})}}]),t}(a.Component);n(16);var f=function(){return o.a.createElement("div",{id:"quote-box"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.17578cea.chunk.js.map