const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Y();const m={};function Z(e){m.context=e}const z=(e,t)=>e===t,v={equals:z};let Q=$;const x={},g=1,N=2,V={owned:null,cleanups:null,context:null,owner:null};var a=null;let C=null,u=null,S=null,c=null,d=null,F=0;function k(e,t){const n=u,s=a,i=e.length===0,o=i?V:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>G(o));a=o,u=null;try{return q(r,!0)}finally{u=n,a=s}}function ee(e,t){t=t?Object.assign({},v,t):v;const n={value:e,observers:null,observerSlots:null,pending:x,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==x?n.pending:n.value)),j(n,i));return[W.bind(n),s]}function te(e,t,n){const s=P(e,t,!0,g);b(s)}function B(e,t,n){const s=P(e,t,!1,g);b(s)}function ne(e,t,n){Q=ue;const s=P(e,t,!1,g);s.user=!0,d?d.push(s):b(s)}function _(e,t,n){n=n?Object.assign({},v,n):v;const s=P(e,t,!0,0);return s.pending=x,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,b(s),W.bind(s)}function se(e){if(S)return e();let t;const n=S=[];try{t=e()}finally{S=null}return q(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==x){const o=i.pending;i.pending=x,j(i,o)}}},!1),t}function O(e){let t,n=u;return u=null,t=e(),u=n,t}function ie(e){ne(()=>O(e))}function oe(e){const t=Symbol("context");return{id:t,Provider:ce(t),defaultValue:e}}function re(e){const t=_(e);return _(()=>I(t()))}function W(){const e=C;if(this.sources&&(this.state||e)){const t=c;c=null,this.state===g||e?b(this):T(this),c=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function j(e,t,n){if(S)return e.pending===x&&S.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&q(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&C.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?c.push(o):d.push(o),o.observers&&D(o)),s||(o.state=g)}if(c.length>1e6)throw c=[],new Error},!1),t}function b(e){if(!e.fn)return;G(e);const t=a,n=u,s=F;u=a=e,le(e,e.value,s),u=n,a=t}function le(e,t,n){let s;try{s=e.fn(t)}catch(i){J(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?j(e,s):e.value=s,e.updatedAt=n)}function P(e,t,n,s=g,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==V&&(a.owned?a.owned.push(o):a.owned=[o]),o}function A(e){const t=C;if(e.state===0||t)return;if(e.state===N||t)return T(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===g||t)b(e);else if(e.state===N||t){const i=c;c=null,T(e,n[0]),c=i}}function q(e,t){if(c)return e();let n=!1;t||(c=[]),d?n=!0:d=[],F++;try{const s=e();return fe(n),s}catch(s){J(s)}finally{c=null,n||(d=null)}}function fe(e){c&&($(c),c=null),!e&&(d.length?se(()=>{Q(d),d=null}):d=null)}function $(e){for(let t=0;t<e.length;t++)A(e[t])}function ue(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:A(i)}m.context&&Z();const s=e.length;for(t=0;t<n;t++)A(e[t]);for(t=s;t<e.length;t++)A(e[t])}function T(e,t){const n=C;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===g||n?i!==t&&A(i):(i.state===N||n)&&T(i,t))}}function D(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=N,s.pure?c.push(s):d.push(s),s.observers&&D(s))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function J(e){throw e}function I(e){if(typeof e=="function"&&!e.length)return I(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=I(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function ce(e){return function(n){let s;return te(()=>s=O(()=>(a.context={[e]:n.value},re(()=>n.children)))),s}}function U(e,t){return O(()=>e(t||{}))}function ae(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,f=t[i-1].nextSibling,p=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const h=o<s?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],h)}else if(o===l)for(;r<i;)(!p||!p.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],h),t[i]=n[o]}else{if(!p){p=new Map;let y=l;for(;y<o;)p.set(n[y],y++)}const h=p.get(t[r]);if(h!=null)if(l<h&&h<o){let y=r,L=1,H;for(;++y<i&&y<o&&!((H=p.get(t[y]))==null||H!==h+L);)L++;if(L>h-l){const X=t[r];for(;l<h;)e.insertBefore(n[l++],X)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}function he(e,t,n){let s;return k(i=>{s=i,t===document?e():de(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function pe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function de(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return E(e,t,s,n);B(i=>E(e,t(),i,n),s)}function E(e,t,n,s,i){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(m.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=w(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(m.context)return n;n=w(e,n,s)}else{if(o==="function")return B(()=>{let l=t();for(;typeof l=="function";)l=l();n=E(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(R(l,t,i))return B(()=>n=E(e,l,n,s,!0)),()=>n;if(m.context){for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=w(e,n,s),r)return n}else Array.isArray(n)?n.length===0?K(e,l,s):ae(e,n,l):(n&&w(e),K(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function R(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],l;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=R(e,r)||s;else if((l=typeof r)=="string")e.push(document.createTextNode(r));else if(l==="function")if(n){for(;typeof r=="function";)r=r();s=R(e,Array.isArray(r)?r:[r])||s}else e.push(r),s=!0;else e.push(document.createTextNode(r.toString()))}return s}function K(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(i,l):e.insertBefore(i,n):f&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const ge=!1;function ye({app:e,props:t={},providers:n}){return n.reduceRight((s,{provider:i,opts:o={}})=>()=>U(i,{...o,get children(){return s()}}),()=>U(e,t))}function me(e,t){const n=[],s={use(i,o={}){return n.push({provider:i,opts:o}),s},mount(i){const o=ye({app:e,props:t,providers:n}),r=typeof i=="string"?document.querySelector(i):i;return he(o,r)}};return s}const we=oe(),M=["title","meta"],xe=e=>{const t=new Map,[n,s]=ee({});ie(()=>{const o=document.head.querySelectorAll('[data-sm=""]');Array.prototype.forEach.call(o,r=>r.parentNode.removeChild(r))});const i={addClientTag:(o,r)=>{if(M.indexOf(o)!==-1){s(f=>{const p=f[o]||[];return{...f,[o]:[...p,r]}});const l=t.has(o)?t.get(o)+1:0;return t.set(o,l),l}return-1},shouldRenderTag:(o,r)=>{if(M.indexOf(o)!==-1){const l=n()[o];return l&&l.lastIndexOf(l[r])===r}return!0},removeClientTag:(o,r)=>{s(l=>{const f=l[o];return f?(f[r]=null,{...l,[o]:f}):l})}};if(ge&&(i.addServerTag=o=>{const{tags:r=[]}=e;if(M.indexOf(o.tag)!==-1){const l=r.findIndex(f=>{const p=f.props.name||f.props.property,h=o.props.name||o.props.property;return f.tag===o.tag&&p===h});l!==-1&&r.splice(l,1)}r.push(o)},Array.isArray(e.tags)===!1))throw Error("tags array should be passed to <MetaProvider /> in node");return U(we.Provider,{value:i,get children(){return e.children}})},be=pe('<div class="min-h-screen">BP</div>'),Se=()=>be.cloneNode(!0);me(Se).use(xe).mount("#root");