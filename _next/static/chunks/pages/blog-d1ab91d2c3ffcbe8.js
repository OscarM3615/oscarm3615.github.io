(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5423:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(5959)}])},5959:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return i},default:function(){return o}});var n=t(5893),r=t(7294),l=t(9008),a=function(e){var s=e.post;return(0,n.jsxs)("div",{className:"card",children:[(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h4",{className:"card-title",children:s.title}),(0,n.jsx)("p",{className:"h6 card-subtitle text-muted mb-2",children:s.createdAt}),(0,n.jsx)("p",{className:"card-text",children:s.description}),(0,n.jsxs)("a",{href:"blog/".concat(s.slug),className:"d-block card-link stretched-link text-end",children:["Read post ",(0,n.jsx)("i",{className:"bi bi-arrow-right"})]})]}),(0,n.jsx)("footer",{className:"card-footer d-flex gap-1",children:s.tags.map((function(e){return(0,n.jsx)("span",{className:"badge bg-secondary",children:e},e)}))})]})},c=t(5915),i=!0,o=function(e){var s=e.posts,t=e.tags,i=(0,r.useState)(""),o=i[0],d=i[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{children:(0,n.jsxs)("title",{children:["Blog | ",c.Z.title]})}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h3",{className:"text-center mb-4",children:"Blog"}),(0,n.jsxs)("div",{className:"col-12 col-md-4 mb-4 ms-0 ms-sm-4",children:[(0,n.jsx)("label",{htmlFor:"filter",className:"form-label small",children:"Filter by tag"}),(0,n.jsxs)("select",{id:"filter",className:"form-control form-control-sm",value:o,onChange:function(e){return d(e.target.value)},children:[(0,n.jsx)("option",{value:"",children:"Show all"}),t.map((function(e,s){return(0,n.jsx)("option",{value:e,children:(t=e,t.charAt(0).toUpperCase()+t.slice(1))},s);var t}))]})]}),(0,n.jsx)("div",{className:"d-flex flex-column gap-3 px-0 px-md-4",children:s.filter((function(e){return!o||e.tags.includes(o)})).map((function(e){return(0,n.jsx)(a,{post:e},e.slug)}))})]})]})}},9008:function(e,s,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return s=5423,e(e.s=s);var s}));var s=e.O();_N_E=s}]);