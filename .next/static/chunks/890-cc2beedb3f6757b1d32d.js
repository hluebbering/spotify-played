"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{4405:function(e,t,n){n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function c(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,u=e.title,c=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},3250:function(e,t,n){var r=n(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},1688:function(e,t,n){e.exports=n(3250)},3757:function(e,t,n){n.d(t,{ZP:function(){return Y}});var r=n(7294),o=n(1688);const i=()=>{},a=i(),s=Object,u=e=>e===a,c=e=>"function"==typeof e,l=(e,t)=>({...e,...t}),f=new WeakMap;let d=0;const g=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(s(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=f.get(e),o)return o;if(o=++d+"~",f.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=g(e[i])+",";f.set(e,o)}if(n==s){o="#";const t=s.keys(e).sort();for(;!u(i=t.pop());)u(e[i])||(o+=i+":"+g(e[i])+",");f.set(e,o)}}return o},h=new WeakMap,p={},v={},y="undefined",w=typeof window!=y,m=typeof document!=y,b=(e,t)=>{const n=h.get(e);return[()=>!u(t)&&e.get(t)||p,r=>{if(!u(t)){const o=e.get(t);t in v||(v[t]=o),n[5](t,l(o,r),o||p)}},n[6],()=>!u(t)&&t in v?v[t]:!u(t)&&e.get(t)||p]};let E=!0;const[O,S]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],_={isOnline:()=>E,isVisible:()=>{const e=m&&document.visibilityState;return u(e)||"hidden"!==e}},k={initFocus:e=>(m&&document.addEventListener("visibilitychange",e),O("focus",e),()=>{m&&document.removeEventListener("visibilitychange",e),S("focus",e)}),initReconnect:e=>{const t=()=>{E=!0,e()},n=()=>{E=!1};return O("online",t),O("offline",n),()=>{S("online",t),S("offline",n)}}},R=!r.useId,L=!w||"Deno"in window,C=e=>w&&typeof window.requestAnimationFrame!=y?window.requestAnimationFrame(e):setTimeout(e,1),T=L?r.useEffect:r.useLayoutEffect,V="undefined"!==typeof navigator&&navigator.connection,x=!L&&V&&(["slow-2g","2g"].includes(V.effectiveType)||V.saveData),D=e=>{if(c(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]};let P=0;const j=()=>++P;var I=3,N=0,W=2,M=1;async function F(...e){const[t,n,r,o]=e,i=l({populateCache:!0,throwOnError:!0},"boolean"===typeof o?{revalidate:o}:o||{});let s=i.populateCache;const f=i.rollbackOnError;let d=i.optimisticData;const g=!1!==i.revalidate,p=i.throwOnError;if(c(n)){const e=n,r=[],o=t.keys();for(const n of o)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&r.push(n);return Promise.all(r.map(v))}return v(n);async function v(n){const[o]=D(n);if(!o)return;const[i,l]=b(t,o),[v,y,w,m]=h.get(t),E=()=>{const e=v[o];return g&&(delete w[o],delete m[o],e&&e[0])?e[0](2).then((()=>i().data)):i().data};if(e.length<3)return E();let O,S=r;const _=j();y[o]=[_,0];const k=!u(d),R=i(),L=R.data,C=R._c,T=u(C)?L:C;if(k&&(d=c(d)?d(T,L):d,l({data:d,_c:T})),c(S))try{S=S(T)}catch(V){O=V}if(S&&c(S.then)){if(S=await S.catch((e=>{O=e})),_!==y[o][0]){if(O)throw O;return S}O&&k&&(e=>"function"===typeof f?f(e):!1!==f)(O)&&(s=!0,l({data:T,_c:a}))}if(s&&!O)if(c(s)){const e=s(S,T);l({data:e,error:a,_c:a})}else l({data:S,error:a,_c:a});if(y[o][1]=j(),Promise.resolve(E()).then((()=>{l({_c:a})})),!O)return S;if(p)throw O}}const A=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},z=(e,t)=>{if(!h.has(e)){const n=l(k,t),r={},o=F.bind(a,e);let s=i;const u={},c=(e,t)=>{const n=u[e]||[];return u[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);const o=u[t];if(o)for(const e of o)e(n,r)},d=()=>{if(!h.has(e)&&(h.set(e,[r,{},{},{},o,f,c]),!L)){const t=n.initFocus(setTimeout.bind(a,A.bind(a,r,0))),o=n.initReconnect(setTimeout.bind(a,A.bind(a,r,1)));s=()=>{t&&t(),o&&o(),h.delete(e)}}};return d(),[e,o,d,s]}return[e,h.get(e)[4]]},[$,q]=z(new Map),J=l({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!u(i)&&a>i||setTimeout(r,s,o)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:(e,t)=>g(e)==g(t),isPaused:()=>!1,cache:$,mutate:q,fallback:{}},_),U=(e,t)=>{const n=l(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=l(o,a))}return n},H=(0,r.createContext)({}),Z=w&&window.__SWR_DEVTOOLS_USE__,B=Z?window.__SWR_DEVTOOLS_USE__:[],G=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],K=B.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=D(t),[,,,o]=h.get($);if(r.startsWith("$inf$"))return n(...e);const i=o[r];return u(i)?n(...e):(delete o[r],i)}),r)));Z&&(window.__SWR_DEVTOOLS_REACT__=r);const Q=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),X={dedupe:!0},Y=(s.defineProperty((e=>{const{value:t}=e,n=(0,r.useContext)(H),o=c(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),s=(0,r.useMemo)((()=>o?i:U(n,i)),[o,n,i]),u=i&&i.provider,f=(0,r.useRef)(a);u&&!f.current&&(f.current=z(u(s.cache||$),i));const d=f.current;return d&&(s.cache=d[0],s.mutate=d[1]),T((()=>{if(d)return d[2]&&d[2](),d[3]}),[]),(0,r.createElement)(H.Provider,l(e,{value:s}))}),"defaultValue",{value:J}),ee=(e,t,n)=>{const{cache:i,compare:s,suspense:f,fallbackData:d,revalidateOnMount:g,revalidateIfStale:p,refreshInterval:v,refreshWhenHidden:y,refreshWhenOffline:w,keepPreviousData:m}=n,[E,O,S,_]=h.get(i),[k,V]=D(e),x=(0,r.useRef)(!1),P=(0,r.useRef)(!1),A=(0,r.useRef)(k),z=(0,r.useRef)(t),$=(0,r.useRef)(n),q=()=>$.current,J=()=>q().isVisible()&&q().isOnline(),[U,H,Z,B]=b(i,k),G=(0,r.useRef)({}).current,K=u(d)?n.fallback[k]:d,Y=(e,t)=>{for(const n in G){const r=n;if("data"===r){if(!s(e[r],t[r])){if(!u(e[r]))return!1;if(!s(ue,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},ee=(0,r.useMemo)((()=>{const e=!!k&&!!t&&(u(g)?!q().isPaused()&&!f&&(!!u(p)||p):g),n=t=>{const n=l(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=U(),o=B(),i=n(r),a=r===o?i:n(o);let s=i;return[()=>{const e=n(U());return Y(e,s)?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>a]}),[i,k]),te=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>Z(k,((t,n)=>{Y(n,t)||e()}))),[i,k]),ee[0],ee[1]),ne=!x.current,re=E[k]&&E[k].length>0,oe=te.data,ie=u(oe)?K:oe,ae=te.error,se=(0,r.useRef)(ie),ue=m?u(oe)?se.current:oe:ie,ce=!(re&&!u(ae))&&(ne&&!u(g)?g:!q().isPaused()&&(f?!u(ie)&&p:u(ie)||p)),le=!!(k&&t&&ne&&ce),fe=u(te.isValidating)?le:te.isValidating,de=u(te.isLoading)?le:te.isLoading,ge=(0,r.useCallback)((async e=>{const t=z.current;if(!k||!t||P.current||q().isPaused())return!1;let r,o,i=!0;const l=e||{},f=!S[k]||!l.dedupe,d=()=>R?!P.current&&k===A.current&&x.current:k===A.current,g={isValidating:!1,isLoading:!1},h=()=>{H(g)},p=()=>{const e=S[k];e&&e[1]===o&&delete S[k]},v={isValidating:!0};u(U().data)&&(v.isLoading=!0);try{if(f&&(H(v),n.loadingTimeout&&u(U().data)&&setTimeout((()=>{i&&d()&&q().onLoadingSlow(k,n)}),n.loadingTimeout),S[k]=[t(V),j()]),[r,o]=S[k],r=await r,f&&setTimeout(p,n.dedupingInterval),!S[k]||S[k][1]!==o)return f&&d()&&q().onDiscarded(k),!1;g.error=a;const e=O[k];if(!u(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return h(),f&&d()&&q().onDiscarded(k),!1;const c=U().data;g.data=s(c,r)?c:r,f&&d()&&q().onSuccess(r,k,n)}catch(y){p();const e=q(),{shouldRetryOnError:t}=e;e.isPaused()||(g.error=y,f&&d()&&(e.onError(y,k,e),(!0===t||c(t)&&t(y))&&J()&&e.onErrorRetry(y,k,e,(e=>{const t=E[k];t&&t[0]&&t[0](I,e)}),{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return i=!1,h(),!0}),[k,i]),he=(0,r.useCallback)(((...e)=>F(i,A.current,...e)),[]);if(T((()=>{z.current=t,$.current=n,u(oe)||(se.current=oe)})),T((()=>{if(!k)return;const e=ge.bind(a,X);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(k,E,((n,r={})=>{if(n==N){const n=Date.now();q().revalidateOnFocus&&n>t&&J()&&(t=n+q().focusThrottleInterval,e())}else if(n==M)q().revalidateOnReconnect&&J()&&e();else{if(n==W)return ge();if(n==I)return ge(r)}}));return P.current=!1,A.current=k,x.current=!0,H({_k:V}),ce&&(u(ie)||L?e():C(e)),()=>{P.current=!0,n()}}),[k]),T((()=>{let e;function t(){const t=c(v)?v(U().data):v;t&&-1!==e&&(e=setTimeout(n,t))}function n(){U().error||!y&&!q().isVisible()||!w&&!q().isOnline()?t():ge(X).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[v,y,w,k]),(0,r.useDebugValue)(ue),f&&u(ie)&&k){if(!R&&L)throw new Error("Fallback data is required when using suspense in SSR.");z.current=t,$.current=n,P.current=!1;const e=_[k];if(!u(e)){const t=he(e);Q(t)}if(!u(ae))throw ae;{const e=ge(X);u(ue)||(e.status="fulfilled",e.value=!0),Q(e)}}return{mutate:he,get data(){return G.data=!0,ue},get error(){return G.error=!0,ae},get isValidating(){return G.isValidating=!0,fe},get isLoading(){return G.isLoading=!0,de}}},function(...e){const t=l(J,(0,r.useContext)(H)),[n,o,i]=G(e),a=U(t,i);let s=ee;const{use:u}=a,c=(u||[]).concat(K);for(let r=c.length;r--;)s=c[r](s);return s(n,o||a.fetcher||null,a)});var ee}}]);