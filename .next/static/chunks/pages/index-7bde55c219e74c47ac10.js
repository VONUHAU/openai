(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5015:function(n,e,t){"use strict";function r(n,e,t,r,i,a,s){try{var u=n[a](s),c=u.value}catch(o){return void t(o)}u.done?e(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var s=n.apply(e,t);function u(n){r(s,i,a,u,c,"next",n)}function c(n){r(s,i,a,u,c,"throw",n)}u(void 0)}))}}t.r(e),t.d(e,{default:function(){return p}});var a=t(7757),s=t.n(a),u=t(9008),c=t(7294),o=t(4956),l=t.n(o),f=t(5893);function p(){var n=(0,c.useState)(""),e=n[0],t=n[1],r=(0,c.useState)(),a=r[0],o=r[1];function p(){return(p=i(s().mark((function n(r){var i,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({animal:e})});case 3:return i=n.sent,n.next=6,i.json();case 6:a=n.sent,o(a.result),t("");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,f.jsxs)("div",{children:[(0,f.jsxs)(u.default,{children:[(0,f.jsx)("title",{children:"OpenAI Quickstart"}),(0,f.jsx)("link",{rel:"icon",href:"/dog.png"})]}),(0,f.jsxs)("main",{className:l().main,children:[(0,f.jsx)("img",{src:"/dog.png",className:l().icon}),(0,f.jsx)("h3",{children:"Name my pet"}),(0,f.jsxs)("form",{onSubmit:function(n){return p.apply(this,arguments)},children:[(0,f.jsx)("input",{type:"text",name:"animal",placeholder:"Enter an animal",value:e,onChange:function(n){return t(n.target.value)}}),(0,f.jsx)("input",{type:"submit",value:"Generate names"})]}),(0,f.jsx)("div",{className:l().result,children:a})]})]})}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5015)}])},4956:function(n){n.exports={main:"index_main___Ajca",icon:"index_icon__2FeAx",result:"index_result__QuWa4"}},9008:function(n,e,t){n.exports=t(639)}},function(n){n.O(0,[774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);