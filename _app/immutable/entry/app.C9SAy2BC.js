function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.BrVumatj.js","../chunks/scheduler.DIcuhWVn.js","../chunks/index.DgmR3Q5x.js","../chunks/stores.CEN0ds5W.js","../chunks/entry.l6_MBkVN.js","../chunks/icon.BBFybhCE.js","../assets/icon.BqodkFDo.css","../chunks/media.BFuKSY36.js","../assets/0.UI_fZbL_.css","../nodes/1.DN2yNkQZ.js","../nodes/2.Ezk9ghrP.js","../assets/2.Di1pZYSt.css","../nodes/3.5wFnwH5q.js","../chunks/each.D6YF6ztN.js","../chunks/title.BaXxfhsz.js","../assets/title.QqdSLG7C.css","../assets/3.B8FwI_-f.css","../nodes/4.CwG1mxsG.js","../nodes/5.DDBRgqrR.js","../nodes/6.CbMQqNCu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as q,e as B,o as U,b as A,t as j}from"../chunks/scheduler.DIcuhWVn.js";import{S as z,i as M,s as W,u as d,f as F,g as k,q as h,x as P,p as g,d as w,e as G,c as H,a as J,n as D,z as p,t as K,b as Q,j as X,y as L,A as E,k as v,l as I,o as R,r as y}from"../chunks/index.DgmR3Q5x.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},b=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=E(s,c(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=E(s,c(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=E(s,c(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&y(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let _=a[5]&&T(a);return{c(){n.c(),i=W(),_&&_.c(),s=d()},l(o){n.l(o),i=F(o),_&&_.l(o),s=d()},m(o,u){r[e].m(o,u),k(o,i,u),_&&_.m(o,u),k(o,s,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?r[e].p(o,u):(L(),h(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(o,u):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=T(o),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){h(n),c=!1},d(o){o&&(w(i),w(s)),r[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,o,u,m,i,s,N,S,C]}class oe extends z{constructor(e){super(),M(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>b(()=>import("../nodes/0.BrVumatj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>b(()=>import("../nodes/1.DN2yNkQZ.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url),()=>b(()=>import("../nodes/2.Ezk9ghrP.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>b(()=>import("../nodes/3.5wFnwH5q.js"),__vite__mapDeps([12,1,2,13,14,7,15,5,6,16]),import.meta.url),()=>b(()=>import("../nodes/4.CwG1mxsG.js"),__vite__mapDeps([17,1,2,14,7,15]),import.meta.url),()=>b(()=>import("../nodes/5.DDBRgqrR.js"),__vite__mapDeps([18,1,2,13,14,7,15]),import.meta.url),()=>b(()=>import("../nodes/6.CbMQqNCu.js"),__vite__mapDeps([19,1,2,3,4]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/projects":[4],"/writing":[5],"/writing/[slug]":[6]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
