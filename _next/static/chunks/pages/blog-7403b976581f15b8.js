(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5423:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(5959)}])},5959:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return d},default:function(){return o}});var r=t(5893),l=t(7294),n=t(9008),a=t(1664),c=function(e){var s=e.post;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h4",{className:"card-title",children:s.title}),(0,r.jsx)("p",{className:"h6 card-subtitle text-muted mb-2",children:s.createdAt}),(0,r.jsx)("p",{className:"card-text",children:s.description}),(0,r.jsx)(a.default,{href:"/blog/".concat(s.slug),passHref:!0,children:(0,r.jsxs)("a",{className:"d-block card-link stretched-link text-end",children:["Read post ",(0,r.jsx)("i",{className:"bi bi-arrow-right"})]})})]}),(0,r.jsx)("footer",{className:"card-footer d-flex gap-1",children:s.tags.map((function(e){return(0,r.jsx)("span",{className:"badge bg-secondary",children:e},e)}))})]})},i=t(5915),d=!0,o=function(e){var s=e.posts,t=e.tags,a=(0,l.useState)(""),d=a[0],o=a[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{children:(0,r.jsxs)("title",{children:["Blog | ",i.Z.title]})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{className:"text-center mb-4",children:"Blog"}),(0,r.jsxs)("div",{className:"col-12 col-md-4 mb-4 ms-0 ms-sm-4",children:[(0,r.jsx)("label",{htmlFor:"filter",className:"form-label small",children:"Filter by tag"}),(0,r.jsxs)("select",{id:"filter",className:"form-control form-control-sm",value:d,onChange:function(e){return o(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Show all"}),t.map((function(e,s){return(0,r.jsx)("option",{value:e,children:(t=e,t.charAt(0).toUpperCase()+t.slice(1))},s);var t}))]})]}),(0,r.jsx)("div",{className:"d-flex flex-column gap-3 px-0 px-md-4",children:s.filter((function(e){return!d||e.tags.includes(d)})).map((function(e){return(0,r.jsx)(c,{post:e},e.slug)}))})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return s=5423,e(e.s=s);var s}));var s=e.O();_N_E=s}]);