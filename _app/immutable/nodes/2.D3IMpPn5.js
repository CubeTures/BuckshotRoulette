var gh=Object.defineProperty;var ph=(n,t,e)=>t in n?gh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ot=(n,t,e)=>ph(n,typeof t!="symbol"?t+"":t,e);import{w as oe}from"../chunks/index.BR_Ht6tg.js";import{y as Dt,s as Rt,n as ut,b as wt,o as jl,z as Ue,A as _h,h as yh,f as bi,r as Pi,c as vh,u as Eh,g as Th,a as Ih}from"../chunks/scheduler.Dwe-70n3.js";import{S as bt,i as Pt,e as j,s as rt,c as q,d as Z,g as k,h as st,o as x,p as Q,j as L,k as H,y as he,z as on,b as Xt,f as Jt,A as Be,u as gt,v as pt,w as _t,t as W,a as X,x as yt,B as an,l as Br,q as en,n as nn,m as Pe,C as ca}from"../chunks/index.euMG3msX.js";function Qt(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const jr=oe(),ln=oe(),ql=oe(),rs=oe(!1),ae=oe(!1);function ee(){return Dt(ae)}const Ie=oe(),zt=oe(),Js=oe([]),Zs=oe([]),ti=oe(!1),wh=async({url:n})=>{const t=n.searchParams;let e=t.get("id"),r=t.get("role");e!=null&&r!=null&&jr.set({id:e,role:r})},J_=Object.freeze(Object.defineProperty({__proto__:null,load:wh},Symbol.toStringTag,{value:"Module"})),Ah=""+new URL("../assets/TempScreenClean.Oc2iXovo.png",import.meta.url).href;function Rh(n){let t,e,r;return{c(){t=j("div"),e=rt(),r=j("div"),this.h()},l(s){t=q(s,"DIV",{class:!0,style:!0}),Z(t).forEach(k),e=st(s),r=q(s,"DIV",{class:!0}),Z(r).forEach(k),this.h()},h(){x(t,"class","background svelte-1wqw65l"),Q(t,"background-image","url("+Ah+")"),x(r,"class","curtain")},m(s,o){L(s,t,o),L(s,e,o),L(s,r,o)},p:ut,i:ut,o:ut,d(s){s&&(k(t),k(e),k(r))}}}class bh extends bt{constructor(t){super(),Pt(this,t,null,Rh,Rt,{})}}function Ph(){if(ee()){const n=Dt(Ie).getState(),t=n.host.turn=="host"?{player:"host",state:n.host}:{player:"client",state:n.client};pn(t),sr(t)}}function Sh(n){const t=Dt(Ie).getState(),e=n=="host"?{player:n,state:t.host}:{player:n,state:t.client};pn(e),sr(e)}function zl(n){if(ee()&&Ch(n)){const t=Dt(Ie).getState(),e=Vh(n,t);pn(e),sr(e)}}function Ch(n){return n.action!==void 0}function Vh(n,t){return Dh(n)?{player:"host",state:t.host}:{player:"client",state:t.client}}function Dh(n){var t,e,r,s,o;return n.player=="host"?((e=(t=n.action)==null?void 0:t.shoot)==null?void 0:e.target)=="self"||((r=n.action)==null?void 0:r.item):((o=(s=n.action)==null?void 0:s.shoot)==null?void 0:o.target)=="opponent"}function Fe(n){const t=Mh(n);pn(t),sr(t)}function kh(n){return Object.hasOwn(n,"player")}function Nh(n){n.action&&(n.action.shoot?n.action.shoot.target?ee()&&Dt(Ie).shoot(n.player,n.action.shoot.target):n.action.shoot.shell!==void 0&&Dt(zt).saveShell(n.action.shoot.shell):n.action.item&&(n.action.item.use?(ee()&&Dt(Ie).useItem(n.player,n.action.item.use),n.player=="host"==ee()&&(n.action.item.use=="adrenaline"?ti.set(!0):ti.set(!1)),n.action.item.use=="handcuffs"&&(n.player=="host"?Dt(zt).clientHandcuffs=!0:Dt(zt).hostHandcuffs=!0)):n.action.item.draw))}function Vr(n,t){if(!ee())throw new Error("Only host should emit a message");n=="host"?pn({player:n,message:{message:t}}):sr({player:n,message:{message:t}})}function pn(n){if(Oh(n),n.state)zt.update(t=>(t.saveState(n),t));else if(n.action)Nh(n);else if(n.message)zt.update(t=>(t.saveMessage(n.message),t));else throw new Error("No action found in transfer");zl(n)}function Oh(n){ee()?n.player=="host"?Dr(Js,n):Dr(Zs,n):n.player=="host"?Dr(Zs,n):Dr(Js,n)}function Dr(n,t){const e=Dt(Js).length+Dt(Zs).length+1;n.update(r=>(r.push(`${e}: ${Lh(t)}`),r))}function Mh(n){return kh(n)?n:{player:ee()?"host":"client",...n}}function xh(n){return JSON.parse(n)}function Lh(n){return JSON.stringify(n,null,2)}const Fh={action:{shoot:{target:"self"}}},$h={action:{shoot:{target:"opponent"}}},Uh=n=>({action:{item:{use:n}}}),ei=["magnifying_glass","cigarette_pack","can_of_beer","handsaw","handcuffs","burner_phone","inverter","adrenaline","expired_medicine"],Hl=[5,5,5,5,5,1,1,1,1],ha=Hl.reduce((n,t,e)=>[...n,(n[e-1]||0)+t],[]),Bh=Hl.reduce((n,t)=>n+t,0);function jh(){return ei.length}function Fn(n){return n==="host"?"client":"host"}function ni(){return Math.random()<.5}function fa(n,t){return Math.floor(t?Math.random()*(n-t+1)+t:Math.random()*(n+1))}function Wn(n){return n.split("_").map(t=>t.charAt(0).toUpperCase()+t.substring(1)).join(" ")}jh();function da(){return qh()}function qh(){const n=Math.random()*Bh;for(let t=0;t<ha.length;t++)if(n<ha[t])return ei[t];return ei[0]}function zh(){let n;n=ln.subscribe(t=>{t&&(Hh(t),n())})}function Hh(n){const t=n.createDataChannel("game",{negotiated:!0,id:9});Kh(t)}function Kh(n){n.addEventListener("open",Gh),n.addEventListener("message",Qh),n.addEventListener("close",Wh),ql.set(n)}function Gh(){rs.set(!0)}function Wh(){rs.set(!1)}function Qh(n){const t=n.data,e=xh(t);pn(e)}function sr(n){const t=Dt(ql),e=JSON.stringify(n);t.send(e)}function Yh(n,t,e){let r;wt(n,ln,o=>e(0,r=o));const s={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:stun.l.google.com:5349","stun:stun1.l.google.com:3478","stun:stun1.l.google.com:5349","stun:stun2.l.google.com:19302","stun:stun2.l.google.com:5349","stun:stun3.l.google.com:3478","stun:stun3.l.google.com:5349","stun:stun4.l.google.com:19302","stun:stun4.l.google.com:5349"]}],iceCandidatePoolSize:10};return jl(()=>{if(!r){const o=new RTCPeerConnection(s);ln.set(o)}}),zh(),[]}class Xh extends bt{constructor(t){super(),Pt(this,t,Yh,null,Rt,{})}}const Si=""+new URL("../assets/Handcuffs.B24Ca1g7.png",import.meta.url).href,Kl=""+new URL("../assets/Adrenaline.BYybFr74.png",import.meta.url).href,Jh=""+new URL("../assets/Handsaw.BkxSaYAP.png",import.meta.url).href;function ma(n){let t,e;return{c(){t=j("img"),this.h()},l(r){t=q(r,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){Ue(t.src,e=Si)||x(t,"src",e),x(t,"alt","handcuffs"),x(t,"class","item condition"),Q(t,"cursor","default",1)},m(r,s){L(r,t,s)},d(r){r&&k(t)}}}function Zh(n){let t,e,r,s,o,a,l,c,f=n[0]&&ma();return{c(){t=j("div"),e=j("div"),r=j("img"),o=rt(),a=j("img"),c=rt(),f&&f.c(),this.h()},l(d){t=q(d,"DIV",{});var g=Z(t);e=q(g,"DIV",{class:!0,style:!0});var _=Z(e);r=q(_,"IMG",{src:!0,alt:!0,class:!0,style:!0}),o=st(_),a=q(_,"IMG",{src:!0,alt:!0,class:!0}),c=st(_),f&&f.l(_),_.forEach(k),g.forEach(k),this.h()},h(){Ue(r.src,s=Si)||x(r,"src",s),x(r,"alt","handcuffs"),x(r,"class","item condition"),Q(r,"cursor","default",1),Ue(a.src,l=Kl)||x(a,"src",l),x(a,"alt","handcuffs"),x(a,"class","item condition"),x(e,"class","container"),Q(e,"display","flex"),Q(e,"flex-direction","column"),Q(e,"gap","12px")},m(d,g){L(d,t,g),H(t,e),H(e,r),H(e,o),H(e,a),H(e,c),f&&f.m(e,null)},p(d,[g]){d[0]?f||(f=ma(),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:ut,o:ut,d(d){d&&k(t),f&&f.d()}}}function tf(n,t,e){let r,s,o;wt(n,zt,l=>e(2,s=l)),wt(n,ae,l=>e(3,o=l));let{target:a}=t;return n.$$set=l=>{"target"in l&&e(1,a=l.target)},n.$$.update=()=>{n.$$.dirty&14&&e(0,r=a=="self"==o?s.hostHandcuffs:s.clientHandcuffs)},[r,a,s,o]}class ga extends bt{constructor(t){super(),Pt(this,t,tf,Zh,Rt,{target:1})}}const ef=""+new URL("../assets/Buckshot.DQABhTy0.png",import.meta.url).href;function nf(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function qr(n,{delay:t=0,duration:e=400,easing:r=nf,amount:s=5,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.filter==="none"?"":a.filter,f=l*(1-o),[d,g]=_h(s);return{delay:t,duration:e,easing:r,css:(_,R)=>`opacity: ${l-f*R}; filter: ${c} blur(${R*d}${g});`}}function pa(n,{delay:t=0,duration:e=400,easing:r=yh}={}){const s=+getComputedStyle(n).opacity;return{delay:t,duration:e,easing:r,css:o=>`opacity: ${o*s}`}}function _a(n){let t,e,r,s,o,a,l,c,f,d,g="Shooting yourself with a blank grants an extra turn.",_,R;return{c(){t=j("div"),e=j("button"),r=Xt("YOU"),o=rt(),a=j("button"),l=Xt("OPPONENT"),f=rt(),d=j("h1"),d.textContent=g,this.h()},l(P){t=q(P,"DIV",{style:!0});var V=Z(t);e=q(V,"BUTTON",{class:!0});var D=Z(e);r=Jt(D,"YOU"),D.forEach(k),o=st(V),a=q(V,"BUTTON",{class:!0});var $=Z(a);l=Jt($,"OPPONENT"),$.forEach(k),f=st(V),d=q(V,"H1",{style:!0,"data-svelte-h":!0}),Be(d)!=="svelte-taoa54"&&(d.textContent=g),V.forEach(k),this.h()},h(){x(e,"class","room-button"),e.disabled=s=!n[0],x(a,"class","room-button"),a.disabled=c=!n[0],Q(d,"align-self","center"),Q(d,"text-align","center"),Q(d,"padding","12px"),Q(d,"color","white"),Q(d,"padding-top","0px"),Q(t,"margin-top","12px")},m(P,V){L(P,t,V),H(t,e),H(e,r),H(t,o),H(t,a),H(a,l),H(t,f),H(t,d),_||(R=[he(e,"click",n[5]),he(a,"click",n[6])],_=!0)},p(P,V){V&1&&s!==(s=!P[0])&&(e.disabled=s),V&1&&c!==(c=!P[0])&&(a.disabled=c)},d(P){P&&k(t),_=!1,Pi(R)}}}function rf(n){let t,e,r,s,o,a,l,c,f,d=n[0]&&_a(n);return{c(){t=j("button"),e=j("img"),s=rt(),d&&d.c(),this.h()},l(g){t=q(g,"BUTTON",{class:!0,style:!0});var _=Z(t);e=q(_,"IMG",{src:!0,alt:!0,class:!0}),s=st(_),d&&d.l(_),_.forEach(k),this.h()},h(){Ue(e.src,r=ef)||x(e,"src",r),x(e,"alt","shoot"),x(e,"class","buckshot svelte-7765no"),x(t,"class","container"),Q(t,"display","flex"),Q(t,"flex-direction","column"),Q(t,"cursor","pointer"),Q(t,"align-items","center"),Q(t,"transition","all 1s"),t.disabled=o=!n[0]},m(g,_){L(g,t,_),H(t,e),H(t,s),d&&d.m(t,null),l=!0,c||(f=he(t,"click",n[1]),c=!0)},p(g,[_]){g[0]?d?d.p(g,_):(d=_a(g),d.c(),d.m(t,null)):d&&(d.d(1),d=null),(!l||_&1&&o!==(o=!g[0]))&&(t.disabled=o)},i(g){l||(g&&bi(()=>{l&&(a||(a=on(t,qr,{},!0)),a.run(1))}),l=!0)},o(g){g&&(a||(a=on(t,qr,{},!1)),a.run(0)),l=!1},d(g){g&&k(t),d&&d.d(),g&&a&&a.end(),c=!1,f()}}}function sf(n,t,e){let r,s,o;wt(n,ae,d=>e(3,s=d)),wt(n,zt,d=>e(4,o=d));function a(){}function l(d){Fe(d)}const c=()=>l(Fh),f=()=>l($h);return n.$$.update=()=>{n.$$.dirty&24&&e(0,r=o!=null&&o.activePlayer?o.activePlayer=="host"==s:!1)},[r,a,l,s,o,c,f]}class of extends bt{constructor(t){super(),Pt(this,t,sf,rf,Rt,{})}}function af(n){let t,e,r,s,o,a,l;return e=new ga({props:{target:"self"}}),s=new of({}),a=new ga({props:{target:"opponent"}}),{c(){t=j("div"),gt(e.$$.fragment),r=rt(),gt(s.$$.fragment),o=rt(),gt(a.$$.fragment),this.h()},l(c){t=q(c,"DIV",{style:!0});var f=Z(t);pt(e.$$.fragment,f),r=st(f),pt(s.$$.fragment,f),o=st(f),pt(a.$$.fragment,f),f.forEach(k),this.h()},h(){Q(t,"display","flex"),Q(t,"justify-content","space-between"),Q(t,"align-content","flex-start")},m(c,f){L(c,t,f),_t(e,t,null),H(t,r),_t(s,t,null),H(t,o),_t(a,t,null),l=!0},p:ut,i(c){l||(W(e.$$.fragment,c),W(s.$$.fragment,c),W(a.$$.fragment,c),l=!0)},o(c){X(e.$$.fragment,c),X(s.$$.fragment,c),X(a.$$.fragment,c),l=!1},d(c){c&&k(t),yt(e),yt(s),yt(a)}}}class lf extends bt{constructor(t){super(),Pt(this,t,null,af,Rt,{})}}function uf(n){let t,e;const r=n[1].default,s=vh(r,n,n[0],null);return{c(){t=j("div"),s&&s.c(),this.h()},l(o){t=q(o,"DIV",{class:!0});var a=Z(t);s&&s.l(a),a.forEach(k),this.h()},h(){x(t,"class","container")},m(o,a){L(o,t,a),s&&s.m(t,null),e=!0},p(o,[a]){s&&s.p&&(!e||a&1)&&Eh(s,r,o,o[0],e?Ih(r,o[0],a,null):Th(o[0]),null)},i(o){e||(W(s,o),e=!0)},o(o){X(s,o),e=!1},d(o){o&&k(t),s&&s.d(o)}}}function cf(n,t,e){let{$$slots:r={},$$scope:s}=t;return n.$$set=o=>{"$$scope"in o&&e(0,s=o.$$scope)},[s,r]}class ya extends bt{constructor(t){super(),Pt(this,t,cf,uf,Rt,{})}}const hf=""+new URL("../assets/Charge.Ci_8NISQ.png",import.meta.url).href;function va(n,t,e){const r=n.slice();return r[4]=t[e],r}function Ea(n,t,e){const r=n.slice();return r[4]=t[e],r}function Ta(n){let t,e;return{c(){t=j("img"),this.h()},l(r){t=q(r,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),this.h()},h(){Ue(t.src,e=hf)||x(t,"src",e),x(t,"alt","charge"),x(t,"height",wa),x(t,"width",wa),x(t,"class","icon")},m(r,s){L(r,t,s)},p:ut,d(r){r&&k(t)}}}function Ia(n){let t;return{c(){t=j("div"),this.h()},l(e){t=q(e,"DIV",{style:!0}),Z(t).forEach(k),this.h()},h(){Q(t,"height","40px"),Q(t,"width","40px")},m(e,r){L(e,t,r)},p:ut,d(e){e&&k(t)}}}function ff(n){let t,e,r,s=Qt(Array(n[1])),o=[];for(let c=0;c<s.length;c+=1)o[c]=Ta(Ea(n,s,c));let a=Qt(Array(5-n[1])),l=[];for(let c=0;c<a.length;c+=1)l[c]=Ia(va(n,a,c));return{c(){t=j("div");for(let c=0;c<o.length;c+=1)o[c].c();e=rt();for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){t=q(c,"DIV",{class:!0});var f=Z(t);for(let d=0;d<o.length;d+=1)o[d].l(f);e=st(f);for(let d=0;d<l.length;d+=1)l[d].l(f);f.forEach(k),this.h()},h(){x(t,"class",r="charge-container "+(n[0]=="self"?"":"right"))},m(c,f){L(c,t,f);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(t,null);H(t,e);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null)},p(c,[f]){if(f&2){s=Qt(Array(c[1]));let d;for(d=0;d<s.length;d+=1){const g=Ea(c,s,d);o[d]?o[d].p(g,f):(o[d]=Ta(),o[d].c(),o[d].m(t,e))}for(;d<o.length;d+=1)o[d].d(1);o.length=s.length}if(f&2){a=Qt(Array(5-c[1]));let d;for(d=0;d<a.length;d+=1){const g=va(c,a,d);l[d]?l[d].p(g,f):(l[d]=Ia(),l[d].c(),l[d].m(t,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=a.length}f&1&&r!==(r="charge-container "+(c[0]=="self"?"":"right"))&&x(t,"class",r)},i:ut,o:ut,d(c){c&&k(t),an(o,c),an(l,c)}}}const wa=40;function df(n,t,e){let r,s,o;wt(n,zt,l=>e(2,s=l)),wt(n,ae,l=>e(3,o=l));let{target:a}=t;return n.$$set=l=>{"target"in l&&e(0,a=l.target)},n.$$.update=()=>{n.$$.dirty&13&&e(1,r=s?a=="self"==o?s.pHost.health:s.pClient.health:2)},[a,r,s,o]}class Aa extends bt{constructor(t){super(),Pt(this,t,df,ff,Rt,{target:0})}}function mf(n){let t,e,r,s,o;return{c(){t=j("div"),e=j("h1"),r=Xt("Round "),s=Xt(n[0]),o=Xt("/3"),this.h()},l(a){t=q(a,"DIV",{class:!0,style:!0});var l=Z(t);e=q(l,"H1",{});var c=Z(e);r=Jt(c,"Round "),s=Jt(c,n[0]),o=Jt(c,"/3"),c.forEach(k),l.forEach(k),this.h()},h(){x(t,"class","container"),Q(t,"align-content","center")},m(a,l){L(a,t,l),H(t,e),H(e,r),H(e,s),H(e,o)},p(a,[l]){l&1&&Br(s,a[0])},i:ut,o:ut,d(a){a&&k(t)}}}function gf(n,t,e){let r,s;return wt(n,zt,o=>e(1,s=o)),n.$$.update=()=>{n.$$.dirty&2&&e(0,r=s!=null&&s.stage?s.stage:0)},[r,s]}class pf extends bt{constructor(t){super(),Pt(this,t,gf,mf,Rt,{})}}const Ra=""+new URL("../assets/Live.-qwioE7w.png",import.meta.url).href,ba=""+new URL("../assets/Blank.DprNORuH.png",import.meta.url).href;function Pa(n,t,e){const r=n.slice();return r[2]=t[e],r}function Sa(n){let t,e,r;return{c(){t=j("img"),this.h()},l(s){t=q(s,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),this.h()},h(){Ue(t.src,e=n[2]?Ra:ba)||x(t,"src",e),x(t,"alt",r=n[2]?"live":"blank"),x(t,"width",zr),x(t,"height",zr),x(t,"class","icon")},m(s,o){L(s,t,o)},p(s,o){o&1&&!Ue(t.src,e=s[2]?Ra:ba)&&x(t,"src",e),o&1&&r!==(r=s[2]?"live":"blank")&&x(t,"alt",r)},d(s){s&&k(t)}}}function _f(n){let t,e=Qt(n[0]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Sa(Pa(n,e,s));return{c(){t=j("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=q(s,"DIV",{class:!0,style:!0});var o=Z(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(k),this.h()},h(){x(t,"class","container"),Q(t,"width",zr*8+"px"),Q(t,"min-height",zr+"px"),Q(t,"display","flex"),Q(t,"justify-content","center")},m(s,o){L(s,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(s,[o]){if(o&1){e=Qt(s[0]);let a;for(a=0;a<e.length;a+=1){const l=Pa(s,e,a);r[a]?r[a].p(l,o):(r[a]=Sa(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},i:ut,o:ut,d(s){s&&k(t),an(r,s)}}}const zr=40;function yf(n,t,e){let r,s;return wt(n,zt,o=>e(1,s=o)),n.$$.update=()=>{n.$$.dirty&2&&e(0,r=s!=null&&s.shells?s.shells:[])},[r,s]}class vf extends bt{constructor(t){super(),Pt(this,t,yf,_f,Rt,{})}}function Ef(n){let t,e="You";return{c(){t=j("h1"),t.textContent=e},l(r){t=q(r,"H1",{"data-svelte-h":!0}),Be(t)!=="svelte-11ipj2j"&&(t.textContent=e)},m(r,s){L(r,t,s)},p:ut,d(r){r&&k(t)}}}function Tf(n){let t,e="Opponent";return{c(){t=j("h1"),t.textContent=e},l(r){t=q(r,"H1",{"data-svelte-h":!0}),Be(t)!=="svelte-qar0t"&&(t.textContent=e)},m(r,s){L(r,t,s)},p:ut,d(r){r&&k(t)}}}function If(n){let t,e,r,s,o,a,l,c,f,d,g,_,R,P,V,D,$,U;return s=new ya({props:{$$slots:{default:[Ef]},$$scope:{ctx:n}}}),l=new pf({}),d=new ya({props:{$$slots:{default:[Tf]},$$scope:{ctx:n}}}),R=new Aa({props:{target:"self"}}),V=new vf({}),$=new Aa({props:{target:"opponent"}}),{c(){t=j("div"),e=j("div"),r=j("div"),gt(s.$$.fragment),o=rt(),a=j("div"),gt(l.$$.fragment),c=rt(),f=j("div"),gt(d.$$.fragment),g=rt(),_=j("div"),gt(R.$$.fragment),P=rt(),gt(V.$$.fragment),D=rt(),gt($.$$.fragment),this.h()},l(B){t=q(B,"DIV",{class:!0});var it=Z(t);e=q(it,"DIV",{style:!0});var Tt=Z(e);r=q(Tt,"DIV",{style:!0});var ft=Z(r);pt(s.$$.fragment,ft),ft.forEach(k),o=st(Tt),a=q(Tt,"DIV",{style:!0});var T=Z(a);pt(l.$$.fragment,T),T.forEach(k),c=st(Tt),f=q(Tt,"DIV",{style:!0});var p=Z(f);pt(d.$$.fragment,p),p.forEach(k),Tt.forEach(k),g=st(it),_=q(it,"DIV",{class:!0});var y=Z(_);pt(R.$$.fragment,y),P=st(y),pt(V.$$.fragment,y),D=st(y),pt($.$$.fragment,y),y.forEach(k),it.forEach(k),this.h()},h(){Q(r,"display","flex"),Q(a,"display","flex"),Q(a,"justify-content","center"),Q(f,"display","flex"),Q(f,"flex-direction","row-reverse"),Q(e,"display","grid"),Q(e,"grid-template-columns","repeat(3, 1fr)"),x(_,"class","row"),x(t,"class","header")},m(B,it){L(B,t,it),H(t,e),H(e,r),_t(s,r,null),H(e,o),H(e,a),_t(l,a,null),H(e,c),H(e,f),_t(d,f,null),H(t,g),H(t,_),_t(R,_,null),H(_,P),_t(V,_,null),H(_,D),_t($,_,null),U=!0},p(B,[it]){const Tt={};it&1&&(Tt.$$scope={dirty:it,ctx:B}),s.$set(Tt);const ft={};it&1&&(ft.$$scope={dirty:it,ctx:B}),d.$set(ft)},i(B){U||(W(s.$$.fragment,B),W(l.$$.fragment,B),W(d.$$.fragment,B),W(R.$$.fragment,B),W(V.$$.fragment,B),W($.$$.fragment,B),U=!0)},o(B){X(s.$$.fragment,B),X(l.$$.fragment,B),X(d.$$.fragment,B),X(R.$$.fragment,B),X(V.$$.fragment,B),X($.$$.fragment,B),U=!1},d(B){B&&k(t),yt(s),yt(l),yt(d),yt(R),yt(V),yt($)}}}class wf extends bt{constructor(t){super(),Pt(this,t,null,If,Rt,{})}}function Ca(n,t,e){const r=n.slice();return r[3]=t[e],r}function Va(n){let t,e,r=n[3]+"",s,o,a,l;return{c(){t=j("div"),e=j("h1"),s=Xt(r),o=rt(),this.h()},l(c){t=q(c,"DIV",{class:!0});var f=Z(t);e=q(f,"H1",{});var d=Z(e);s=Jt(d,r),d.forEach(k),o=st(f),f.forEach(k),this.h()},h(){x(t,"class","container")},m(c,f){L(c,t,f),H(t,e),H(e,s),H(t,o),l=!0},p(c,f){(!l||f&1)&&r!==(r=c[3]+"")&&Br(s,r)},i(c){l||(c&&bi(()=>{l&&(a||(a=on(t,pa,{},!0)),a.run(1))}),l=!0)},o(c){c&&(a||(a=on(t,pa,{},!1)),a.run(0)),l=!1},d(c){c&&k(t),c&&a&&a.end()}}}function Af(n){let t,e,r=Qt(n[0]),s=[];for(let a=0;a<r.length;a+=1)s[a]=Va(Ca(n,r,a));const o=a=>X(s[a],1,1,()=>{s[a]=null});return{c(){t=j("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){t=q(a,"DIV",{class:!0,style:!0});var l=Z(t);for(let c=0;c<s.length;c+=1)s[c].l(l);l.forEach(k),this.h()},h(){x(t,"class","message"),Q(t,"z-index","100"),Q(t,"display","flex"),Q(t,"flex-direction","column-reverse"),Q(t,"gap","12px")},m(a,l){L(a,t,l);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(t,null);e=!0},p(a,[l]){if(l&1){r=Qt(a[0]);let c;for(c=0;c<r.length;c+=1){const f=Ca(a,r,c);s[c]?(s[c].p(f,l),W(s[c],1)):(s[c]=Va(f),s[c].c(),W(s[c],1),s[c].m(t,null))}for(en(),c=r.length;c<s.length;c+=1)o(c);nn()}},i(a){if(!e){for(let l=0;l<r.length;l+=1)W(s[l]);e=!0}},o(a){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)X(s[l]);e=!1},d(a){a&&k(t),an(s,a)}}}function Rf(n,t,e){let r=[],s;s=zt.subscribe(a=>{a.subscribeOnMessage(o),s&&s()});function o(a){r.push(a),e(0,r),setTimeout(()=>{r.shift(),e(0,r)},5e3)}return[r]}class bf extends bt{constructor(t){super(),Pt(this,t,Rf,Af,Rt,{})}}function Pf(n){let t=()=>{},e=()=>{};jl(()=>{e=ln.subscribe(()=>{Dt(jr)?(console.log("Preset loaded"),n()):(console.log("Waiting for preset"),t=jr.subscribe(r=>{r!=null&&r.id&&(r!=null&&r.role)&&(n(),t())})),e()})})}var Da={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Wl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,f=c?n[s+2]:0,d=o>>2,g=(o&3)<<4|l>>4;let _=(l&15)<<2|f>>6,R=f&63;c||(R=64,a||(_=64)),r.push(e[d],e[g],e[_],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Gl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||g==null)throw new Cf;const _=o<<2|l>>4;if(r.push(_),f!==64){const R=l<<4&240|f>>2;if(r.push(R),g!==64){const P=f<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vf=function(n){const t=Gl(n);return Wl.encodeByteArray(t,!0)},Hr=function(n){return Vf(n).replace(/\./g,"")},Df=function(n){try{return Wl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=()=>kf().__FIREBASE_DEFAULTS__,Of=()=>{if(typeof process>"u"||typeof Da>"u")return;const n=Da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Df(n[1]);return t&&JSON.parse(t)},Ci=()=>{try{return Nf()||Of()||Mf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xf=n=>{var t,e;return(e=(t=Ci())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Lf=n=>{const t=xf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ql=()=>{var n;return(n=Ci())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hr(JSON.stringify(e)),Hr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){var n;const t=(n=Ci())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qf(){try{return typeof indexedDB=="object"}catch{return!1}}function zf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="FirebaseError";class _n extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Hf,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yl.prototype.create)}}class Yl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Kf(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _n(s,l,r)}}function Kf(n,t){return n.replace(Gf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Gf=/\{\$([^}]+)}/g;function ri(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ka(o)&&ka(a)){if(!ri(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ka(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n){return n&&n._delegate?n._delegate:n}class Qn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ff;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yf(t))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=xe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xe){return this.instances.has(t)}getOptions(t=xe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xe){return this.component?this.component.multipleInstances?t:xe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(n){return n===xe?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(tt||(tt={}));const Jf={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},Zf=tt.INFO,td={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},ed=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=td[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xl{constructor(t){this.name=t,this._logLevel=Zf,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const nd=(n,t)=>t.some(e=>n instanceof e);let Na,Oa;function rd(){return Na||(Na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return Oa||(Oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,si=new WeakMap,Zl=new WeakMap,zs=new WeakMap,Vi=new WeakMap;function id(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(we(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Jl.set(e,n)}).catch(()=>{}),Vi.set(t,n),t}function od(n){if(si.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});si.set(n,t)}let ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return si.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Zl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return we(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ad(n){ii=n(ii)}function ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Hs(this),t,...e);return Zl.set(r,t.sort?t.sort():[t]),we(r)}:sd().includes(n)?function(...t){return n.apply(Hs(this),t),we(Jl.get(this))}:function(...t){return we(n.apply(Hs(this),t))}}function ud(n){return typeof n=="function"?ld(n):(n instanceof IDBTransaction&&od(n),nd(n,rd())?new Proxy(n,ii):n)}function we(n){if(n instanceof IDBRequest)return id(n);if(zs.has(n))return zs.get(n);const t=ud(n);return t!==n&&(zs.set(n,t),Vi.set(t,n)),t}const Hs=n=>Vi.get(n);function cd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=we(a);return r&&a.addEventListener("upgradeneeded",c=>{r(we(a.result),c.oldVersion,c.newVersion,we(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const hd=["get","getKey","getAll","getAllKeys","count"],fd=["put","add","delete","clear"],Ks=new Map;function Ma(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ks.get(t))return Ks.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=fd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(e)))return;const o=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&c.done]))[0]};return Ks.set(t,o),o}ad(n=>({...n,get:(t,e,r)=>Ma(t,e)||n.get(t,e,r),has:(t,e)=>!!Ma(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oi="@firebase/app",xa="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Xl("@firebase/app"),gd="@firebase/app-compat",pd="@firebase/analytics-compat",_d="@firebase/analytics",yd="@firebase/app-check-compat",vd="@firebase/app-check",Ed="@firebase/auth",Td="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",Ad="@firebase/database-compat",Rd="@firebase/functions",bd="@firebase/functions-compat",Pd="@firebase/installations",Sd="@firebase/installations-compat",Cd="@firebase/messaging",Vd="@firebase/messaging-compat",Dd="@firebase/performance",kd="@firebase/performance-compat",Nd="@firebase/remote-config",Od="@firebase/remote-config-compat",Md="@firebase/storage",xd="@firebase/storage-compat",Ld="@firebase/firestore",Fd="@firebase/vertexai-preview",$d="@firebase/firestore-compat",Ud="firebase",Bd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]",jd={[oi]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[pd]:"fire-analytics-compat",[vd]:"fire-app-check",[yd]:"fire-app-check-compat",[Ed]:"fire-auth",[Td]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[Ad]:"fire-rtdb-compat",[Rd]:"fire-fn",[bd]:"fire-fn-compat",[Pd]:"fire-iid",[Sd]:"fire-iid-compat",[Cd]:"fire-fcm",[Vd]:"fire-fcm-compat",[Dd]:"fire-perf",[kd]:"fire-perf-compat",[Nd]:"fire-rc",[Od]:"fire-rc-compat",[Md]:"fire-gcs",[xd]:"fire-gcs-compat",[Ld]:"fire-fst",[$d]:"fire-fst-compat",[Fd]:"fire-vertex","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,qd=new Map,li=new Map;function La(n,t){try{n.container.addComponent(t)}catch(e){de.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gr(n){const t=n.name;if(li.has(t))return de.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,n);for(const e of Kr.values())La(e,n);for(const e of qd.values())La(e,n);return!0}function zd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Yl("app","Firebase",Hd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=Bd;function tu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ae.create("bad-app-name",{appName:String(s)});if(e||(e=Ql()),!e)throw Ae.create("no-options");const o=Kr.get(s);if(o){if(ri(e,o.options)&&ri(r,o.config))return o;throw Ae.create("duplicate-app",{appName:s})}const a=new Xf(s);for(const c of li.values())a.addComponent(c);const l=new Kd(e,r,a);return Kr.set(s,l),l}function Wd(n=ai){const t=Kr.get(n);if(!t&&n===ai&&Ql())return tu();if(!t)throw Ae.create("no-app",{appName:n});return t}function rn(n,t,e){var r;let s=(r=jd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),de.warn(l.join(" "));return}Gr(new Qn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firebase-heartbeat-database",Yd=1,Yn="firebase-heartbeat-store";let Gs=null;function eu(){return Gs||(Gs=cd(Qd,Yd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Yn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ae.create("idb-open",{originalErrorMessage:n.message})})),Gs}async function Xd(n){try{const e=(await eu()).transaction(Yn),r=await e.objectStore(Yn).get(nu(n));return await e.done,r}catch(t){if(t instanceof _n)de.warn(t.message);else{const e=Ae.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});de.warn(e.message)}}}async function Fa(n,t){try{const r=(await eu()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(t,nu(n)),await r.done}catch(e){if(e instanceof _n)de.warn(e.message);else{const r=Ae.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});de.warn(r.message)}}}function nu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=1024,Zd=30*24*60*60*1e3;class tm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new nm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$a();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Zd}),this._storage.overwrite(this._heartbeatsCache))}catch(r){de.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$a(),{heartbeatsToSend:r,unsentEntries:s}=em(this._heartbeatsCache.heartbeats),o=Hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return de.warn(e),""}}}function $a(){return new Date().toISOString().substring(0,10)}function em(n,t=Jd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ua(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ua(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class nm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qf()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ua(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){Gr(new Qn("platform-logger",t=>new dd(t),"PRIVATE")),Gr(new Qn("heartbeat",t=>new tm(t),"PRIVATE")),rn(oi,xa,n),rn(oi,xa,"esm2017"),rn("fire-js","")}rm("");var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $e,ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function y(){}y.prototype=p.prototype,T.D=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,I,A){for(var v=Array(arguments.length-2),le=2;le<arguments.length;le++)v[le-2]=arguments[le];return p.prototype[I].apply(E,v)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)E[I]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],v=p+(A^y&(I^A))+E[0]+3614090360&4294967295;p=y+(v<<7&4294967295|v>>>25),v=A+(I^p&(y^I))+E[1]+3905402710&4294967295,A=p+(v<<12&4294967295|v>>>20),v=I+(y^A&(p^y))+E[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(p^I&(A^p))+E[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=p+(A^y&(I^A))+E[4]+4118548399&4294967295,p=y+(v<<7&4294967295|v>>>25),v=A+(I^p&(y^I))+E[5]+1200080426&4294967295,A=p+(v<<12&4294967295|v>>>20),v=I+(y^A&(p^y))+E[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(p^I&(A^p))+E[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=p+(A^y&(I^A))+E[8]+1770035416&4294967295,p=y+(v<<7&4294967295|v>>>25),v=A+(I^p&(y^I))+E[9]+2336552879&4294967295,A=p+(v<<12&4294967295|v>>>20),v=I+(y^A&(p^y))+E[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(p^I&(A^p))+E[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=p+(A^y&(I^A))+E[12]+1804603682&4294967295,p=y+(v<<7&4294967295|v>>>25),v=A+(I^p&(y^I))+E[13]+4254626195&4294967295,A=p+(v<<12&4294967295|v>>>20),v=I+(y^A&(p^y))+E[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(p^I&(A^p))+E[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=p+(I^A&(y^I))+E[1]+4129170786&4294967295,p=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(p^y))+E[6]+3225465664&4294967295,A=p+(v<<9&4294967295|v>>>23),v=I+(p^y&(A^p))+E[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^p&(I^A))+E[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=p+(I^A&(y^I))+E[5]+3593408605&4294967295,p=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(p^y))+E[10]+38016083&4294967295,A=p+(v<<9&4294967295|v>>>23),v=I+(p^y&(A^p))+E[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^p&(I^A))+E[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=p+(I^A&(y^I))+E[9]+568446438&4294967295,p=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(p^y))+E[14]+3275163606&4294967295,A=p+(v<<9&4294967295|v>>>23),v=I+(p^y&(A^p))+E[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^p&(I^A))+E[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=p+(I^A&(y^I))+E[13]+2850285829&4294967295,p=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(p^y))+E[2]+4243563512&4294967295,A=p+(v<<9&4294967295|v>>>23),v=I+(p^y&(A^p))+E[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^p&(I^A))+E[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=p+(y^I^A)+E[5]+4294588738&4294967295,p=y+(v<<4&4294967295|v>>>28),v=A+(p^y^I)+E[8]+2272392833&4294967295,A=p+(v<<11&4294967295|v>>>21),v=I+(A^p^y)+E[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^p)+E[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=p+(y^I^A)+E[1]+2763975236&4294967295,p=y+(v<<4&4294967295|v>>>28),v=A+(p^y^I)+E[4]+1272893353&4294967295,A=p+(v<<11&4294967295|v>>>21),v=I+(A^p^y)+E[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^p)+E[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=p+(y^I^A)+E[13]+681279174&4294967295,p=y+(v<<4&4294967295|v>>>28),v=A+(p^y^I)+E[0]+3936430074&4294967295,A=p+(v<<11&4294967295|v>>>21),v=I+(A^p^y)+E[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^p)+E[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=p+(y^I^A)+E[9]+3654602809&4294967295,p=y+(v<<4&4294967295|v>>>28),v=A+(p^y^I)+E[12]+3873151461&4294967295,A=p+(v<<11&4294967295|v>>>21),v=I+(A^p^y)+E[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^p)+E[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=p+(I^(y|~A))+E[0]+4096336452&4294967295,p=y+(v<<6&4294967295|v>>>26),v=A+(y^(p|~I))+E[7]+1126891415&4294967295,A=p+(v<<10&4294967295|v>>>22),v=I+(p^(A|~y))+E[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~p))+E[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=p+(I^(y|~A))+E[12]+1700485571&4294967295,p=y+(v<<6&4294967295|v>>>26),v=A+(y^(p|~I))+E[3]+2399980690&4294967295,A=p+(v<<10&4294967295|v>>>22),v=I+(p^(A|~y))+E[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~p))+E[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=p+(I^(y|~A))+E[8]+1873313359&4294967295,p=y+(v<<6&4294967295|v>>>26),v=A+(y^(p|~I))+E[15]+4264355552&4294967295,A=p+(v<<10&4294967295|v>>>22),v=I+(p^(A|~y))+E[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~p))+E[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=p+(I^(y|~A))+E[4]+4149444226&4294967295,p=y+(v<<6&4294967295|v>>>26),v=A+(y^(p|~I))+E[11]+3174756917&4294967295,A=p+(v<<10&4294967295|v>>>22),v=I+(p^(A|~y))+E[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var y=p-this.blockSize,E=this.B,I=this.h,A=0;A<p;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<p;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var y=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=y&255,y/=256;for(this.u(T),T=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)T[y++]=this.g[p]>>>E&255;return T};function o(T,p){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;for(var y=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==p||(y[I]=A,E=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return D(f(-T));for(var p=[],y=1,E=0;T>=y;E++)p[E]=T/y|0,y*=4294967296;return new a(p,0)}function d(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return D(d(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(p,8)),E=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),v=parseInt(T.substring(I,I+A),p);8>A?(A=f(Math.pow(p,A)),E=E.j(A).add(f(v))):(E=E.j(y),E=E.add(f(v)))}return E}var g=c(0),_=c(1),R=c(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var T=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(V(this))return"-"+D(this).toString(T);for(var p=f(Math.pow(T,6)),y=this,E="";;){var I=it(y,p).g;y=$(y,I.j(p));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,P(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=$(this,T),V(T)?-1:P(T)?0:1};function D(T){for(var p=T.g.length,y=[],E=0;E<p;E++)y[E]=~T.g[E];return new a(y,~T.h).add(_)}n.abs=function(){return V(this)?D(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0,I=0;I<=p;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=v>>>16,A&=65535,v&=65535,y[I]=v<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(T,p){return T.add(D(p))}n.j=function(T){if(P(this)||P(T))return g;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(0>this.l(R)&&0>T.l(R))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,v=this.i(E)&65535,le=T.i(I)>>>16,Tn=T.i(I)&65535;y[2*E+2*I]+=v*Tn,U(y,2*E+2*I),y[2*E+2*I+1]+=A*Tn,U(y,2*E+2*I+1),y[2*E+2*I+1]+=v*le,U(y,2*E+2*I+1),y[2*E+2*I+2]+=A*le,U(y,2*E+2*I+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function U(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function B(T,p){this.g=T,this.h=p}function it(T,p){if(P(p))throw Error("division by zero");if(P(T))return new B(g,g);if(V(T))return p=it(D(T),p),new B(D(p.g),D(p.h));if(V(p))return p=it(T,D(p)),new B(D(p.g),p.h);if(30<T.g.length){if(V(T)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var y=_,E=p;0>=E.l(T);)y=Tt(y),E=Tt(E);var I=ft(y,1),A=ft(E,1);for(E=ft(E,2),y=ft(y,2);!P(E);){var v=A.add(E);0>=v.l(T)&&(I=I.add(y),A=v),E=ft(E,1),y=ft(y,1)}return p=$(T,I.j(p)),new B(I,p)}for(I=g;0<=T.l(p);){for(y=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=f(y),v=A.j(p);V(v)||0<v.l(T);)y-=E,A=f(y),v=A.j(p);P(A)&&(A=_),I=I.add(A),T=$(T,v)}return new B(I,T)}n.A=function(T){return it(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function Tt(T){for(var p=T.g.length+1,y=[],E=0;E<p;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function ft(T,p){var y=p>>5;p%=32;for(var E=T.g.length-y,I=[],A=0;A<E;A++)I[A]=0<p?T.i(A+y)>>>p|T.i(A+y+1)<<32-p:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ru=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,$e=a}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var su,Un,iu,xr,ui,ou,au,lu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,h){return i==Array.prototype||i==Object.prototype||(i[u]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kr=="object"&&kr];for(var u=0;u<i.length;++u){var h=i[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var h=r;i=i.split(".");for(var m=0;m<i.length-1;m++){var w=i[m];if(!(w in h))break t;h=h[w]}i=i[i.length-1],m=h[i],u=u(m),u!=m&&u!=null&&t(h,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var h=0,m=!1,w={next:function(){if(!m&&h<i.length){var b=h++;return{value:u(b,i[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function d(i,u,h){return i.call.apply(i.bind,arguments)}function g(i,u,h){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function _(i,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,_.apply(null,arguments)}function R(i,u){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function P(i,u){function h(){}h.prototype=u.prototype,i.aa=u.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(m,w,b){for(var N=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)N[lt-2]=arguments[lt];return u.prototype[w].apply(m,N)}}function V(i){const u=i.length;if(0<u){const h=Array(u);for(let m=0;m<u;m++)h[m]=i[m];return h}return[]}function D(i,u){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const w=i.length||0,b=m.length||0;i.length=w+b;for(let N=0;N<b;N++)i[w+N]=m[N]}else i.push(m)}}class ${constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(i){return/^[\s\xa0]*$/.test(i)}function B(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function it(i){return it[" "](i),i}it[" "]=function(){};var Tt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ft(i,u,h){for(const m in i)u.call(h,i[m],m,i)}function T(i,u){for(const h in i)u.call(void 0,i[h],h,i)}function p(i){const u={};for(const h in i)u[h]=i[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)i[h]=m[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(m,h)&&(i[h]=m[h])}}function I(i){var u=1;i=i.split(":");const h=[];for(;0<u&&i.length;)h.push(i.shift()),u--;return i.length&&h.push(i.join(":")),h}function A(i){l.setTimeout(()=>{throw i},0)}function v(){var i=Es;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class le{constructor(){this.h=this.g=null}add(u,h){const m=Tn.get();m.set(u,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Tn=new $(()=>new Oc,i=>i.reset());class Oc{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let In,wn=!1,Es=new le,uo=()=>{const i=l.Promise.resolve(void 0);In=()=>{i.then(Mc)}};var Mc=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(h){A(h)}var u=Tn;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}wn=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var xc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return i}();function An(i,u){if(Mt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Tt){t:{try{it(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else h=="mouseover"?u=i.fromElement:h=="mouseout"&&(u=i.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Lc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&An.aa.h.call(this)}}P(An,Mt);var Lc={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var hr="closure_listenable_"+(1e6*Math.random()|0),Fc=0;function $c(i,u,h,m,w){this.listener=i,this.proxy=null,this.src=u,this.type=h,this.capture=!!m,this.ha=w,this.key=++Fc,this.da=this.fa=!1}function fr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function dr(i){this.src=i,this.g={},this.h=0}dr.prototype.add=function(i,u,h,m,w){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var N=Is(i,u,m,w);return-1<N?(u=i[N],h||(u.fa=!1)):(u=new $c(u,this.src,b,!!m,w),u.fa=h,i.push(u)),u};function Ts(i,u){var h=u.type;if(h in i.g){var m=i.g[h],w=Array.prototype.indexOf.call(m,u,void 0),b;(b=0<=w)&&Array.prototype.splice.call(m,w,1),b&&(fr(u),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Is(i,u,h,m){for(var w=0;w<i.length;++w){var b=i[w];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==m)return w}return-1}var ws="closure_lm_"+(1e6*Math.random()|0),As={};function co(i,u,h,m,w){if(Array.isArray(u)){for(var b=0;b<u.length;b++)co(i,u[b],h,m,w);return null}return h=mo(h),i&&i[hr]?i.K(u,h,f(m)?!!m.capture:!!m,w):Uc(i,u,h,!1,m,w)}function Uc(i,u,h,m,w,b){if(!u)throw Error("Invalid event type");var N=f(w)?!!w.capture:!!w,lt=bs(i);if(lt||(i[ws]=lt=new dr(i)),h=lt.add(u,h,m,N,b),h.proxy)return h;if(m=Bc(),h.proxy=m,m.src=i,m.listener=h,i.addEventListener)xc||(w=N),w===void 0&&(w=!1),i.addEventListener(u.toString(),m,w);else if(i.attachEvent)i.attachEvent(fo(u.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Bc(){function i(h){return u.call(i.src,i.listener,h)}const u=jc;return i}function ho(i,u,h,m,w){if(Array.isArray(u))for(var b=0;b<u.length;b++)ho(i,u[b],h,m,w);else m=f(m)?!!m.capture:!!m,h=mo(h),i&&i[hr]?(i=i.i,u=String(u).toString(),u in i.g&&(b=i.g[u],h=Is(b,h,m,w),-1<h&&(fr(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete i.g[u],i.h--)))):i&&(i=bs(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Is(u,h,m,w)),(h=-1<i?u[i]:null)&&Rs(h))}function Rs(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[hr])Ts(u.i,i);else{var h=i.type,m=i.proxy;u.removeEventListener?u.removeEventListener(h,m,i.capture):u.detachEvent?u.detachEvent(fo(h),m):u.addListener&&u.removeListener&&u.removeListener(m),(h=bs(u))?(Ts(h,i),h.h==0&&(h.src=null,u[ws]=null)):fr(i)}}}function fo(i){return i in As?As[i]:As[i]="on"+i}function jc(i,u){if(i.da)i=!0;else{u=new An(u,this);var h=i.listener,m=i.ha||i.src;i.fa&&Rs(i),i=h.call(m,u)}return i}function bs(i){return i=i[ws],i instanceof dr?i:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(i){return typeof i=="function"?i:(i[Ps]||(i[Ps]=function(u){return i.handleEvent(u)}),i[Ps])}function xt(){pe.call(this),this.i=new dr(this),this.M=this,this.F=null}P(xt,pe),xt.prototype[hr]=!0,xt.prototype.removeEventListener=function(i,u,h,m){ho(this,i,u,h,m)};function jt(i,u){var h,m=i.F;if(m)for(h=[];m;m=m.F)h.push(m);if(i=i.M,m=u.type||u,typeof u=="string")u=new Mt(u,i);else if(u instanceof Mt)u.target=u.target||i;else{var w=u;u=new Mt(m,i),E(u,w)}if(w=!0,h)for(var b=h.length-1;0<=b;b--){var N=u.g=h[b];w=mr(N,m,!0,u)&&w}if(N=u.g=i,w=mr(N,m,!0,u)&&w,w=mr(N,m,!1,u)&&w,h)for(b=0;b<h.length;b++)N=u.g=h[b],w=mr(N,m,!1,u)&&w}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var h=i.g[u],m=0;m<h.length;m++)fr(h[m]);delete i.g[u],i.h--}}this.F=null},xt.prototype.K=function(i,u,h,m){return this.i.add(String(i),u,!1,h,m)},xt.prototype.L=function(i,u,h,m){return this.i.add(String(i),u,!0,h,m)};function mr(i,u,h,m){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,b=0;b<u.length;++b){var N=u[b];if(N&&!N.da&&N.capture==h){var lt=N.listener,Ct=N.ha||N.src;N.fa&&Ts(i.i,N),w=lt.call(Ct,m)!==!1&&w}}return w&&!m.defaultPrevented}function go(i,u,h){if(typeof i=="function")h&&(i=_(i,h));else if(i&&typeof i.handleEvent=="function")i=_(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function po(i){i.g=go(()=>{i.g=null,i.i&&(i.i=!1,po(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class qc extends pe{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rn(i){pe.call(this),this.h=i,this.g={}}P(Rn,pe);var _o=[];function yo(i){ft(i.g,function(u,h){this.g.hasOwnProperty(h)&&Rs(u)},i),i.g={}}Rn.prototype.N=function(){Rn.aa.N.call(this),yo(this)},Rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ss=l.JSON.stringify,zc=l.JSON.parse,Hc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Cs(){}Cs.prototype.h=null;function vo(i){return i.h||(i.h=i.i())}function Eo(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vs(){Mt.call(this,"d")}P(Vs,Mt);function Ds(){Mt.call(this,"c")}P(Ds,Mt);var ke={},To=null;function gr(){return To=To||new xt}ke.La="serverreachability";function Io(i){Mt.call(this,ke.La,i)}P(Io,Mt);function Pn(i){const u=gr();jt(u,new Io(u))}ke.STAT_EVENT="statevent";function wo(i,u){Mt.call(this,ke.STAT_EVENT,i),this.stat=u}P(wo,Mt);function qt(i){const u=gr();jt(u,new wo(u,i))}ke.Ma="timingevent";function Ao(i,u){Mt.call(this,ke.Ma,i),this.size=u}P(Ao,Mt);function Sn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function Kc(i,u,h,m,w,b){i.info(function(){if(i.g)if(b)for(var N="",lt=b.split("&"),Ct=0;Ct<lt.length;Ct++){var et=lt[Ct].split("=");if(1<et.length){var Lt=et[0];et=et[1];var Ft=Lt.split("_");N=2<=Ft.length&&Ft[1]=="type"?N+(Lt+"="+et+"&"):N+(Lt+"=redacted&")}}else N=null;else N=b;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+u+`
`+h+`
`+N})}function Gc(i,u,h,m,w,b,N){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+u+`
`+h+`
`+b+" "+N})}function We(i,u,h,m){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Qc(i,h)+(m?" "+m:"")})}function Wc(i,u){i.info(function(){return"TIMEOUT: "+u})}Cn.prototype.info=function(){};function Qc(i,u){if(!i.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var m=h[i];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return Ss(h)}catch{return u}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ro={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ks;function _r(){}P(_r,Cs),_r.prototype.g=function(){return new XMLHttpRequest},_r.prototype.i=function(){return{}},ks=new _r;function _e(i,u,h,m){this.j=i,this.i=u,this.l=h,this.R=m||1,this.U=new Rn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bo}function bo(){this.i=null,this.g="",this.h=!1}var Po={},Ns={};function Os(i,u,h){i.L=1,i.v=Tr(ue(u)),i.m=h,i.P=!0,So(i,null)}function So(i,u){i.F=Date.now(),yr(i),i.A=ue(i.v);var h=i.A,m=i.R;Array.isArray(m)||(m=[String(m)]),jo(h.i,"t",m),i.C=0,h=i.j.J,i.h=new bo,i.g=oa(i.j,h?u:null,!i.m),0<i.O&&(i.M=new qc(_(i.Y,i,i.g),i.O)),u=i.U,h=i.g,m=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(_o[0]=w.toString()),w=_o);for(var b=0;b<w.length;b++){var N=co(h,w[b],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Pn(),Kc(i.i,i.u,i.A,i.l,i.R,i.m)}_e.prototype.ca=function(i){i=i.target;const u=this.M;u&&ce(i)==3?u.j():this.Y(i)},_e.prototype.Y=function(i){try{if(i==this.g)t:{const Ft=ce(this.g);var u=this.g.Ba();const Xe=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||Ft!=4||u==7||(u==8||0>=Xe?Pn(3):Pn(2)),Ms(this);var h=this.g.Z();this.X=h;e:if(Co(this)){var m=Qo(this.g);i="";var w=m.length,b=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ne(this),Vn(this);var N="";break e}this.h.i=new l.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(m[u],{stream:!(b&&u==w-1)});m.length=0,this.h.g+=i,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,Gc(this.i,this.u,this.A,this.l,this.R,Ft,h),this.o){if(this.T&&!this.K){e:{if(this.g){var lt,Ct=this.g;if((lt=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(lt)){var et=lt;break e}}et=null}if(h=et)We(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xs(this,h);else{this.o=!1,this.s=3,qt(12),Ne(this),Vn(this);break t}}if(this.P){h=!0;let Yt;for(;!this.J&&this.C<N.length;)if(Yt=Yc(this,N),Yt==Ns){Ft==4&&(this.s=4,qt(14),h=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Po){this.s=4,qt(15),We(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else We(this.i,this.l,Yt,null),xs(this,Yt);if(Co(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||N.length!=0||this.h.h||(this.s=1,qt(16),h=!1),this.o=this.o&&h,!h)We(this.i,this.l,N,"[Invalid Chunked Response]"),Ne(this),Vn(this);else if(0<N.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),js(Lt),Lt.M=!0,qt(11))}}else We(this.i,this.l,N,null),xs(this,N);Ft==4&&Ne(this),this.o&&!this.J&&(Ft==4?na(this.j,this):(this.o=!1,yr(this)))}else dh(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),Ne(this),Vn(this)}}}catch{}finally{}};function Co(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Yc(i,u){var h=i.C,m=u.indexOf(`
`,h);return m==-1?Ns:(h=Number(u.substring(h,m)),isNaN(h)?Po:(m+=1,m+h>u.length?Ns:(u=u.slice(m,m+h),i.C=m+h,u)))}_e.prototype.cancel=function(){this.J=!0,Ne(this)};function yr(i){i.S=Date.now()+i.I,Vo(i,i.I)}function Vo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Sn(_(i.ba,i),u)}function Ms(i){i.B&&(l.clearTimeout(i.B),i.B=null)}_e.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Wc(this.i,this.A),this.L!=2&&(Pn(),qt(17)),Ne(this),this.s=2,Vn(this)):Vo(this,this.S-i)};function Vn(i){i.j.G==0||i.J||na(i.j,i)}function Ne(i){Ms(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,yo(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function xs(i,u){try{var h=i.j;if(h.G!=0&&(h.g==i||Ls(h.h,i))){if(!i.K&&Ls(h.h,i)&&h.G==3){try{var m=h.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Pr(h),Rr(h);else break t;Bs(h),qt(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Sn(_(h.Za,h),6e3));if(1>=No(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Me(h,11)}else if((i.K||h.g==i)&&Pr(h),!U(u))for(w=h.Da.g.parse(u),u=0;u<w.length;u++){let et=w[u];if(h.T=et[0],et=et[1],h.G==2)if(et[0]=="c"){h.K=et[1],h.ia=et[2];const Lt=et[3];Lt!=null&&(h.la=Lt,h.j.info("VER="+h.la));const Ft=et[4];Ft!=null&&(h.Aa=Ft,h.j.info("SVER="+h.Aa));const Xe=et[5];Xe!=null&&typeof Xe=="number"&&0<Xe&&(m=1.5*Xe,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Yt=i.g;if(Yt){const Cr=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cr){var b=m.h;b.g||Cr.indexOf("spdy")==-1&&Cr.indexOf("quic")==-1&&Cr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Fs(b,b.h),b.h=null))}if(m.D){const qs=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(m.ya=qs,ct(m.I,m.D,qs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var N=i;if(m.qa=ia(m,m.J?m.ia:null,m.W),N.K){Oo(m.h,N);var lt=N,Ct=m.L;Ct&&(lt.I=Ct),lt.B&&(Ms(lt),yr(lt)),m.g=N}else ta(m);0<h.i.length&&br(h)}else et[0]!="stop"&&et[0]!="close"||Me(h,7);else h.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Me(h,7):Us(h):et[0]!="noop"&&h.l&&h.l.ta(et),h.v=0)}}Pn(4)}catch{}}var Xc=class{constructor(i,u){this.g=i,this.map=u}};function Do(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function No(i){return i.h?1:i.g?i.g.size:0}function Ls(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Fs(i,u){i.g?i.g.add(u):i.h=u}function Oo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Do.prototype.cancel=function(){if(this.i=Mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Mo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const h of i.g.values())u=u.concat(h.D);return u}return V(i.i)}function Jc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(c(i)){for(var u=[],h=i.length,m=0;m<h;m++)u.push(i[m]);return u}u=[],h=0;for(m in i)u[h++]=i[m];return u}function Zc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(c(i)||typeof i=="string"){var u=[];i=i.length;for(var h=0;h<i;h++)u.push(h);return u}u=[],h=0;for(const m in i)u[h++]=m;return u}}}function xo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(c(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var h=Zc(i),m=Jc(i),w=m.length,b=0;b<w;b++)u.call(void 0,m[b],h&&h[b],i)}var Lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function th(i,u){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var m=i[h].indexOf("="),w=null;if(0<=m){var b=i[h].substring(0,m);w=i[h].substring(m+1)}else b=i[h];u(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Oe){this.h=i.h,vr(this,i.j),this.o=i.o,this.g=i.g,Er(this,i.s),this.l=i.l;var u=i.i,h=new Nn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Fo(this,h),this.m=i.m}else i&&(u=String(i).match(Lo))?(this.h=!1,vr(this,u[1]||"",!0),this.o=Dn(u[2]||""),this.g=Dn(u[3]||"",!0),Er(this,u[4]),this.l=Dn(u[5]||"",!0),Fo(this,u[6]||"",!0),this.m=Dn(u[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}Oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(kn(u,$o,!0),":");var h=this.g;return(h||u=="file")&&(i.push("//"),(u=this.o)&&i.push(kn(u,$o,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(kn(h,h.charAt(0)=="/"?rh:nh,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",kn(h,ih)),i.join("")};function ue(i){return new Oe(i)}function vr(i,u,h){i.j=h?Dn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Er(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Fo(i,u,h){u instanceof Nn?(i.i=u,oh(i.i,i.h)):(h||(u=kn(u,sh)),i.i=new Nn(u,i.h))}function ct(i,u,h){i.i.set(u,h)}function Tr(i){return ct(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Dn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function kn(i,u,h){return typeof i=="string"?(i=encodeURI(i).replace(u,eh),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function eh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $o=/[#\/\?@]/g,nh=/[#\?:]/g,rh=/[#\?]/g,sh=/[#\?@]/g,ih=/#/g;function Nn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ye(i){i.g||(i.g=new Map,i.h=0,i.i&&th(i.i,function(u,h){i.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Nn.prototype,n.add=function(i,u){ye(this),this.i=null,i=Qe(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(u),this.h+=1,this};function Uo(i,u){ye(i),u=Qe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Bo(i,u){return ye(i),u=Qe(i,u),i.g.has(u)}n.forEach=function(i,u){ye(this),this.g.forEach(function(h,m){h.forEach(function(w){i.call(u,w,m,this)},this)},this)},n.na=function(){ye(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let m=0;m<u.length;m++){const w=i[m];for(let b=0;b<w.length;b++)h.push(u[m])}return h},n.V=function(i){ye(this);let u=[];if(typeof i=="string")Bo(this,i)&&(u=u.concat(this.g.get(Qe(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)u=u.concat(i[h])}return u},n.set=function(i,u){return ye(this),this.i=null,i=Qe(this,i),Bo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function jo(i,u,h){Uo(i,u),0<h.length&&(i.i=null,i.g.set(Qe(i,u),V(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var m=u[h];const b=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var w=b;N[m]!==""&&(w+="="+encodeURIComponent(String(N[m]))),i.push(w)}}return this.i=i.join("&")};function Qe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function oh(i,u){u&&!i.j&&(ye(i),i.i=null,i.g.forEach(function(h,m){var w=m.toLowerCase();m!=w&&(Uo(this,m),jo(this,w,h))},i)),i.j=u}function ah(i,u){const h=new Cn;if(l.Image){const m=new Image;m.onload=R(ve,h,"TestLoadImage: loaded",!0,u,m),m.onerror=R(ve,h,"TestLoadImage: error",!1,u,m),m.onabort=R(ve,h,"TestLoadImage: abort",!1,u,m),m.ontimeout=R(ve,h,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else u(!1)}function lh(i,u){const h=new Cn,m=new AbortController,w=setTimeout(()=>{m.abort(),ve(h,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:m.signal}).then(b=>{clearTimeout(w),b.ok?ve(h,"TestPingServer: ok",!0,u):ve(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),ve(h,"TestPingServer: error",!1,u)})}function ve(i,u,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function uh(){this.g=new Hc}function ch(i,u,h){const m=h||"";try{xo(i,function(w,b){let N=w;f(w)&&(N=Ss(w)),u.push(m+b+"="+encodeURIComponent(N))})}catch(w){throw u.push(m+"type="+encodeURIComponent("_badmap")),w}}function Ir(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Ir,Cs),Ir.prototype.g=function(){return new wr(this.l,this.j)},Ir.prototype.i=function(i){return function(){return i}}({});function wr(i,u){xt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(wr,xt),n=wr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Mn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?On(this):Mn(this),this.readyState==3&&qo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,On(this))},n.Qa=function(i){this.g&&(this.response=i,On(this))},n.ga=function(){this.g&&On(this)};function On(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Mn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=u.next();return i.join(`\r
`)};function Mn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zo(i){let u="";return ft(i,function(h,m){u+=m,u+=":",u+=h,u+=`\r
`}),u}function $s(i,u,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=zo(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):ct(i,u,h))}function mt(i){xt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(mt,xt);var hh=/^https?$/i,fh=["POST","PUT"];n=mt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ks.g(),this.v=this.o?vo(this.o):vo(ks),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(b){Ho(this,b);return}if(i=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())h.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fh,u,void 0))||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of h)this.g.setRequestHeader(b,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wo(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){Ho(this,b)}};function Ho(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Ko(i),Ar(i)}function Ko(i){i.A||(i.A=!0,jt(i,"complete"),jt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,jt(this,"complete"),jt(this,"abort"),Ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Go(this):this.bb())},n.bb=function(){Go(this)};function Go(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ce(i)!=4||i.Z()!=2)){if(i.u&&ce(i)==4)go(i.Ea,0,i);else if(jt(i,"readystatechange"),ce(i)==4){i.h=!1;try{const N=i.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var h;if(!(h=u)){var m;if(m=N===0){var w=String(i.D).match(Lo)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),m=!hh.test(w?w.toLowerCase():"")}h=m}if(h)jt(i,"complete"),jt(i,"success");else{i.m=6;try{var b=2<ce(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Ko(i)}}finally{Ar(i)}}}}function Ar(i,u){if(i.g){Wo(i);const h=i.g,m=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||jt(i,"ready");try{h.onreadystatechange=m}catch{}}}function Wo(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ce(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),zc(u)}};function Qo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function dh(i){const u={};i=(i.g&&2<=ce(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(U(i[m]))continue;var h=I(i[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=u[w]||[];u[w]=b,b.push(h)}T(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xn(i,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||u}function Yo(i){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xn("baseRetryDelayMs",5e3,i),this.cb=xn("retryDelaySeedMs",1e4,i),this.Wa=xn("forwardChannelMaxRetries",2,i),this.wa=xn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Do(i&&i.concurrentRequestLimit),this.Da=new uh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yo.prototype,n.la=8,n.G=1,n.connect=function(i,u,h,m){qt(0),this.W=i,this.H=u||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=ia(this,null,this.W),br(this)};function Us(i){if(Xo(i),i.G==3){var u=i.U++,h=ue(i.I);if(ct(h,"SID",i.K),ct(h,"RID",u),ct(h,"TYPE","terminate"),Ln(i,h),u=new _e(i,i.j,u),u.L=2,u.v=Tr(ue(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=oa(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yr(u)}sa(i)}function Rr(i){i.g&&(js(i),i.g.cancel(),i.g=null)}function Xo(i){Rr(i),i.u&&(l.clearTimeout(i.u),i.u=null),Pr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function br(i){if(!ko(i.h)&&!i.s){i.s=!0;var u=i.Ga;In||uo(),wn||(In(),wn=!0),Es.add(u,i),i.B=0}}function mh(i,u){return No(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Sn(_(i.Ga,i,u),ra(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new _e(this,this.j,i);let b=this.o;if(this.S&&(b?(b=p(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)t:{for(var u=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=h;break t}if(u===4096||h===this.i.length-1){u=h+1;break t}}u=1e3}else u=1e3;u=Zo(this,w,u),h=ue(this.I),ct(h,"RID",i),ct(h,"CVER",22),this.D&&ct(h,"X-HTTP-Session-Id",this.D),Ln(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(zo(b)))+"&"+u:this.m&&$s(h,this.m,b)),Fs(this.h,w),this.Ua&&ct(h,"TYPE","init"),this.P?(ct(h,"$req",u),ct(h,"SID","null"),w.T=!0,Os(w,h,null)):Os(w,h,u),this.G=2}}else this.G==3&&(i?Jo(this,i):this.i.length==0||ko(this.h)||Jo(this))};function Jo(i,u){var h;u?h=u.l:h=i.U++;const m=ue(i.I);ct(m,"SID",i.K),ct(m,"RID",h),ct(m,"AID",i.T),Ln(i,m),i.m&&i.o&&$s(m,i.m,i.o),h=new _e(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Zo(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Fs(i.h,h),Os(h,m,u)}function Ln(i,u){i.H&&ft(i.H,function(h,m){ct(u,m,h)}),i.l&&xo({},function(h,m){ct(u,m,h)})}function Zo(i,u,h){h=Math.min(i.i.length,h);var m=i.l?_(i.l.Na,i.l,i):null;t:{var w=i.i;let b=-1;for(;;){const N=["count="+h];b==-1?0<h?(b=w[0].g,N.push("ofs="+b)):b=0:N.push("ofs="+b);let lt=!0;for(let Ct=0;Ct<h;Ct++){let et=w[Ct].g;const Lt=w[Ct].map;if(et-=b,0>et)b=Math.max(0,w[Ct].g-100),lt=!1;else try{ch(Lt,N,"req"+et+"_")}catch{m&&m(Lt)}}if(lt){m=N.join("&");break t}}}return i=i.i.splice(0,h),u.D=i,m}function ta(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;In||uo(),wn||(In(),wn=!0),Es.add(u,i),i.v=0}}function Bs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Sn(_(i.Fa,i),ra(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ea(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Sn(_(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Rr(this),ea(this))};function js(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function ea(i){i.g=new _e(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=ue(i.qa);ct(u,"RID","rpc"),ct(u,"SID",i.K),ct(u,"AID",i.T),ct(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&ct(u,"TO",i.ja),ct(u,"TYPE","xmlhttp"),Ln(i,u),i.m&&i.o&&$s(u,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Tr(ue(u)),h.m=null,h.P=!0,So(h,i)}n.Za=function(){this.C!=null&&(this.C=null,Rr(this),Bs(this),qt(19))};function Pr(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function na(i,u){var h=null;if(i.g==u){Pr(i),js(i),i.g=null;var m=2}else if(Ls(i.h,u))h=u.D,Oo(i.h,u),m=1;else return;if(i.G!=0){if(u.o)if(m==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;m=gr(),jt(m,new Ao(m,h)),br(i)}else ta(i);else if(w=u.s,w==3||w==0&&0<u.X||!(m==1&&mh(i,u)||m==2&&Bs(i)))switch(h&&0<h.length&&(u=i.h,u.i=u.i.concat(h)),w){case 1:Me(i,5);break;case 4:Me(i,10);break;case 3:Me(i,6);break;default:Me(i,2)}}}function ra(i,u){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*u}function Me(i,u){if(i.j.info("Error code "+u),u==2){var h=_(i.fb,i),m=i.Xa;const w=!m;m=new Oe(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vr(m,"https"),Tr(m),w?ah(m.toString(),h):lh(m.toString(),h)}else qt(2);i.G=0,i.l&&i.l.sa(u),sa(i),Xo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function sa(i){if(i.G=0,i.ka=[],i.l){const u=Mo(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function ia(i,u,h){var m=h instanceof Oe?ue(h):new Oe(h);if(m.g!="")u&&(m.g=u+"."+m.g),Er(m,m.s);else{var w=l.location;m=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var b=new Oe(null);m&&vr(b,m),u&&(b.g=u),w&&Er(b,w),h&&(b.l=h),m=b}return h=i.D,u=i.ya,h&&u&&ct(m,h,u),ct(m,"VER",i.la),Ln(i,m),m}function oa(i,u,h){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new mt(new Ir({eb:h})):new mt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sr(){}Sr.prototype.g=function(i,u){return new Gt(i,u)};function Gt(i,u){xt.call(this),this.g=new Yo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!U(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ye(this)}P(Gt,xt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Us(this.g)},Gt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Ss(i),i=h);u.i.push(new Xc(u.Ya++,i)),u.G==3&&br(u)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,Gt.aa.N.call(this)};function la(i){Vs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const h in u){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}P(la,Vs);function ua(){Ds.call(this),this.status=1}P(ua,Ds);function Ye(i){this.g=i}P(Ye,aa),Ye.prototype.ua=function(){jt(this.g,"a")},Ye.prototype.ta=function(i){jt(this.g,new la(i))},Ye.prototype.sa=function(i){jt(this.g,new ua)},Ye.prototype.ra=function(){jt(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,lu=function(){return new Sr},au=function(){return gr()},ou=ke,ui={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,xr=pr,Ro.COMPLETE="complete",iu=Ro,Eo.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",xt.prototype.listen=xt.prototype.K,Un=Eo,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,su=mt}).apply(typeof kr<"u"?kr:typeof self<"u"?self:typeof window<"u"?window:{});const ja="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Xl("@firebase/firestore");function $n(){return je.logLevel}function O(n,...t){if(je.logLevel<=tt.DEBUG){const e=t.map(Di);je.debug(`Firestore (${yn}): ${n}`,...e)}}function me(n,...t){if(je.logLevel<=tt.ERROR){const e=t.map(Di);je.error(`Firestore (${yn}): ${n}`,...e)}}function un(n,...t){if(je.logLevel<=tt.WARN){const e=t.map(Di);je.warn(`Firestore (${yn}): ${n}`,...e)}}function Di(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const t=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: `+n;throw me(t),new Error(t)}function at(n,t){n||z()}function G(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends _n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ut.UNAUTHENTICATED))}shutdown(){}}class im{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class om{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let o=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Re,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Re)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Ut(t)}}class am{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new am(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class um{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){at(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new um(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=hm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function cn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new At(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.timestamp=t}static fromTimestamp(t){return new K(t)}static min(){return new K(new At(0,0))}static max(){return new K(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ht extends Xn{construct(t,e,r){return new ht(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ht(e)}static emptyPath(){return new ht([])}}const fm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Xn{construct(t,e,r){return new kt(t,e,r)}static isValidIdentifier(t){return fm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(e)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(ht.fromString(t))}static fromName(t){return new F(ht.fromString(t).popFirst(5))}static empty(){return new F(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ht.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ht.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new ht(t.slice()))}}function dm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new At(e+1,0):new At(e,r));return new Se(s,F.empty(),t)}function mm(n){return new Se(n.readTime,n.key,-1)}class Se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Se(K.min(),F.empty(),-1)}static max(){return new Se(K.max(),F.empty(),-1)}}function gm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _m{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==pm)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},c=>r(c))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let c=0;c<o;c++){const f=c;e(t[f]).next(d=>{a[f]=d,++l,l===o&&r(a)},d=>s(d))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ym(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function or(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ki.oe=-1;function ss(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function vm(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ke(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function hu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){this.comparator=t,this.root=e||Vt.EMPTY}insert(t,e){return new dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nr(this.root,t,this.comparator,!0)}}class Nr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Vt.RED,this.left=s??Vt.EMPTY,this.right=o??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.comparator=t,this.data=new dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new za(this.data.getIterator())}getIteratorFrom(t){return new za(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Nt(this.comparator);return e.data=t,e}}class za{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Wt([])}unionWith(t){let e=new Nt(kt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new fu("Invalid base64 string: "+o):o}}(t);return new Ot(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Em=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(at(!!n),typeof n=="string"){let t=0;const e=Em.exec(n);if(at(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vt(n.seconds),nanos:vt(n.nanos)}}function vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qe(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Oi(n){const t=n.mapValue.fields.__previous_value__;return Ni(t)?Oi(t):t}function Jn(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,r,s,o,a,l,c,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class Zn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Zn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ni(n)?4:wm(n)?9007199254740991:Im(n)?10:11:z()}function se(n,t){if(n===t)return!0;const e=ze(n);if(e!==ze(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Jn(n).isEqual(Jn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ce(s.timestampValue),l=Ce(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return qe(s.bytesValue).isEqual(qe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return vt(s.geoPointValue.latitude)===vt(o.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return vt(s.integerValue)===vt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=vt(s.doubleValue),l=vt(o.doubleValue);return a===l?Wr(a)===Wr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return cn(n.arrayValue.values||[],t.arrayValue.values||[],se);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(qa(a)!==qa(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!se(a[c],l[c])))return!1;return!0}(n,t);default:return z()}}function tr(n,t){return(n.values||[]).find(e=>se(e,t))!==void 0}function hn(n,t){if(n===t)return 0;const e=ze(n),r=ze(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=vt(o.integerValue||o.doubleValue),c=vt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,t);case 3:return Ha(n.timestampValue,t.timestampValue);case 4:return Ha(Jn(n),Jn(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(o,a){const l=qe(o),c=qe(a);return l.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=nt(l[f],c[f]);if(d!==0)return d}return nt(l.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=nt(vt(o.latitude),vt(a.latitude));return l!==0?l:nt(vt(o.longitude),vt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ka(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,c,f,d;const g=o.fields||{},_=a.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(c=_.value)===null||c===void 0?void 0:c.arrayValue,V=nt(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return V!==0?V:Ka(R,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Or.mapValue&&a===Or.mapValue)return 0;if(o===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const _=nt(c[g],d[g]);if(_!==0)return _;const R=hn(l[c[g]],f[d[g]]);if(R!==0)return R}return nt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw z()}}function Ha(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Ce(n),r=Ce(t),s=nt(e.seconds,r.seconds);return s!==0?s:nt(e.nanos,r.nanos)}function Ka(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=hn(e[s],r[s]);if(o)return o}return nt(e.length,r.length)}function fn(n){return ci(n)}function ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ce(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return qe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ci(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${ci(e.fields[a])}`;return s+"}"}(n.mapValue):z()}function hi(n){return!!n&&"integerValue"in n}function Mi(n){return!!n&&"arrayValue"in n}function Ga(n){return!!n&&"nullValue"in n}function Wa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Lr(n){return!!n&&"mapValue"in n}function Im(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ke(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=zn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function wm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.value=t}static empty(){return new Kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Lr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=kt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=zn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Lr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Lr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ke(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Kt(zn(this.value))}}function du(n){const t=[];return Ke(n.fields,(e,r)=>{const s=new kt([e]);if(Lr(r)){const o=du(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Bt(t,0,K.min(),K.min(),K.min(),Kt.empty(),0)}static newFoundDocument(t,e,r,s){return new Bt(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new Bt(t,2,e,K.min(),K.min(),Kt.empty(),0)}static newUnknownDocument(t,e){return new Bt(t,3,e,K.min(),K.min(),Kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Bt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e){this.position=t,this.inclusive=e}}function Qa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=hn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ya(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!se(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Am(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{}class It extends mu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bm(t,e,r):e==="array-contains"?new Cm(t,r):e==="in"?new Vm(t,r):e==="not-in"?new Dm(t,r):e==="array-contains-any"?new km(t,r):new It(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Pm(t,r):new Sm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(hn(e,this.value)):e!==null&&ze(this.value)===ze(e)&&this.matchesComparison(hn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends mu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ie(t,e)}matches(t){return gu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gu(n){return n.op==="and"}function pu(n){return Rm(n)&&gu(n)}function Rm(n){for(const t of n.filters)if(t instanceof ie)return!1;return!0}function fi(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(pu(n))return n.filters.map(t=>fi(t)).join(",");{const t=n.filters.map(e=>fi(e)).join(",");return`${n.op}(${t})`}}function _u(n,t){return n instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.field.isEqual(s.field)&&se(r.value,s.value)}(n,t):n instanceof ie?function(r,s){return s instanceof ie&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&_u(a,s.filters[l]),!0):!1}(n,t):void z()}function yu(n){return n instanceof It?function(e){return`${e.field.canonicalString()} ${e.op} ${fn(e.value)}`}(n):n instanceof ie?function(e){return e.op.toString()+" {"+e.getFilters().map(yu).join(" ,")+"}"}(n):"Filter"}class bm extends It{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Pm extends It{constructor(t,e){super(t,"in",e),this.keys=vu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Sm extends It{constructor(t,e){super(t,"not-in",e),this.keys=vu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function vu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Cm extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Mi(e)&&tr(e.arrayValue,this.value)}}class Vm extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&tr(this.value.arrayValue,e)}}class Dm extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!tr(this.value.arrayValue,e)}}class km extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Mi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>tr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Xa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Nm(n,t,e,r,s,o,a)}function xi(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ss(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>fn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>fn(r)).join(",")),t.ue=e}return t.ue}function Li(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Am(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_u(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ya(n.startAt,t.startAt)&&Ya(n.endAt,t.endAt)}function di(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Om(n,t,e,r,s,o,a,l){return new is(n,t,e,r,s,o,a,l)}function os(n){return new is(n)}function Ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mm(n){return n.collectionGroup!==null}function Hn(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Nt(kt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Yr(o,r))}),e.has(kt.keyField().canonicalString())||t.ce.push(new Yr(kt.keyField(),r))}return t.ce}function ne(n){const t=G(n);return t.le||(t.le=xm(t,Hn(n))),t.le}function xm(n,t){if(n.limitType==="F")return Xa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Yr(s.field,o)});const e=n.endAt?new Qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qr(n.startAt.position,n.startAt.inclusive):null;return Xa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function mi(n,t,e){return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function as(n,t){return Li(ne(n),ne(t))&&n.limitType===t.limitType}function Eu(n){return`${xi(ne(n))}|lt:${n.limitType}`}function Je(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>yu(s)).join(", ")}]`),ss(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>fn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>fn(s)).join(",")),`Target(${r})`}(ne(n))}; limitType=${n.limitType})`}function ls(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=Qa(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,Hn(r),s)||r.endAt&&!function(a,l,c){const f=Qa(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,Hn(r),s))}(n,t)}function Lm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tu(n){return(t,e)=>{let r=!1;for(const s of Hn(n)){const o=Fm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Fm(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,l){const c=a.data.field(o),f=l.data.field(o);return c!==null&&f!==null?hn(c,f):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ke(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return hu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new dt(F.comparator);function ge(){return $m}const Iu=new dt(F.comparator);function Bn(...n){let t=Iu;for(const e of n)t=t.insert(e.key,e);return t}function wu(n){let t=Iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Le(){return Kn()}function Au(){return Kn()}function Kn(){return new vn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Um=new dt(F.comparator),Bm=new Nt(F.comparator);function Y(...n){let t=Bm;for(const e of n)t=t.add(e);return t}const jm=new Nt(nt);function qm(){return jm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(t)?"-0":t}}function Ru(n){return{integerValue:""+n}}function zm(n,t){return vm(t)?Ru(t):Fi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function Hm(n,t,e){return n instanceof Xr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ni(o)&&(o=Oi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof er?Pu(n,t):n instanceof nr?Su(n,t):function(s,o){const a=bu(s,o),l=Za(a)+Za(s.Pe);return hi(a)&&hi(s.Pe)?Ru(l):Fi(s.serializer,l)}(n,t)}function Km(n,t,e){return n instanceof er?Pu(n,t):n instanceof nr?Su(n,t):e}function bu(n,t){return n instanceof Jr?function(r){return hi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Xr extends us{}class er extends us{constructor(t){super(),this.elements=t}}function Pu(n,t){const e=Cu(t);for(const r of n.elements)e.some(s=>se(s,r))||e.push(r);return{arrayValue:{values:e}}}class nr extends us{constructor(t){super(),this.elements=t}}function Su(n,t){let e=Cu(t);for(const r of n.elements)e=e.filter(s=>!se(s,r));return{arrayValue:{values:e}}}class Jr extends us{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Za(n){return vt(n.integerValue||n.doubleValue)}function Cu(n){return Mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Gm(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof er&&s instanceof er||r instanceof nr&&s instanceof nr?cn(r.elements,s.elements,se):r instanceof Jr&&s instanceof Jr?se(r.Pe,s.Pe):r instanceof Xr&&s instanceof Xr}(n.transform,t.transform)}class Wm{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class cs{}function Vu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ku(n.key,Zt.none()):new ar(n.key,n.data,Zt.none());{const e=n.data,r=Kt.empty();let s=new Nt(kt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new De(n.key,r,new Wt(s.toArray()),Zt.none())}}function Qm(n,t,e){n instanceof ar?function(s,o,a){const l=s.value.clone(),c=el(s.fieldTransforms,o,a.transformResults);l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof De?function(s,o,a){if(!Fr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=el(s.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Du(s)),c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Gn(n,t,e,r){return n instanceof ar?function(o,a,l,c){if(!Fr(o.precondition,a))return l;const f=o.value.clone(),d=nl(o.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof De?function(o,a,l,c){if(!Fr(o.precondition,a))return l;const f=nl(o.fieldTransforms,c,a),d=a.data;return d.setAll(Du(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(o,a,l){return Fr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Ym(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=bu(r.transform,s||null);o!=null&&(e===null&&(e=Kt.empty()),e.set(r.field,o))}return e||null}function tl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cn(r,s,(o,a)=>Gm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ar extends cs{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class De extends cs{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Du(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function el(n,t,e){const r=new Map;at(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Km(a,l,e[s]))}return r}function nl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Hm(o,a,t))}return r}class ku extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xm extends cs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Qm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Au();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const c=Vu(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&cn(this.mutations,t.mutations,(e,r)=>tl(e,r))&&cn(this.baseMutations,t.baseMutations,(e,r)=>tl(e,r))}}class $i{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){at(t.mutations.length===r.length);let s=function(){return Um}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new $i(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,J;function eg(n){switch(n){default:return z();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Nu(n){if(n===void 0)return me("GRPC error has no .code"),S.UNKNOWN;switch(n){case Et.OK:return S.OK;case Et.CANCELLED:return S.CANCELLED;case Et.UNKNOWN:return S.UNKNOWN;case Et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Et.INTERNAL:return S.INTERNAL;case Et.UNAVAILABLE:return S.UNAVAILABLE;case Et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Et.NOT_FOUND:return S.NOT_FOUND;case Et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Et.ABORTED:return S.ABORTED;case Et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Et.DATA_LOSS:return S.DATA_LOSS;default:return z()}}(J=Et||(Et={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new $e([4294967295,4294967295],0);function rl(n){const t=ng().encode(n),e=new ru;return e.update(t),new Uint8Array(e.digest())}function sl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new $e([e,r],0),new $e([s,o],0)]}class Ui{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new jn(`Invalid padding: ${e}`);if(r<0)throw new jn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new jn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=$e.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply($e.fromNumber(r)));return s.compare(rg)===1&&(s=new $e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=rl(t),[r,s]=sl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ui(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=rl(t),[r,s]=sl(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,lr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new hs(K.min(),s,new dt(nt),ge(),Y())}}class lr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new lr(r,e,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Ou{constructor(t,e){this.targetId=t,this.me=e}}class Mu{constructor(t,e,r=Ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class il{constructor(){this.fe=0,this.ge=al(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Y(),e=Y(),r=Y();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z()}}),new lr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=al()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sg{constructor(t){this.Le=t,this.Be=new Map,this.ke=ge(),this.qe=ol(),this.Qe=new dt(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(di(o))if(r===0){const a=new F(o.path);this.Ue(e,a,Bt.newNoDocument(a,K.min()))}else at(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(e);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=qe(r).toUint8Array()}catch(c){if(c instanceof fu)return un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ui(a,s,o)}catch(c){return un(c instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&di(l.target)){const c=new F(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Bt.newNoDocument(c,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=Y();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new hs(t,e,this.Qe,this.ke,r);return this.ke=ge(),this.qe=ol(),this.Qe=new dt(nt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new il,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Nt(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new il),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ol(){return new dt(F.comparator)}function al(){return new dt(F.comparator)}const ig={asc:"ASCENDING",desc:"DESCENDING"},og={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ag={and:"AND",or:"OR"};class lg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gi(n,t){return n.useProto3Json||ss(t)?t:{value:t}}function Zr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ug(n,t){return Zr(n,t.toTimestamp())}function re(n){return at(!!n),K.fromTimestamp(function(e){const r=Ce(e);return new At(r.seconds,r.nanos)}(n))}function Bi(n,t){return pi(n,t).canonicalString()}function pi(n,t){const e=function(s){return new ht(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Lu(n){const t=ht.fromString(n);return at(ju(t)),t}function _i(n,t){return Bi(n.databaseId,t.path)}function Ws(n,t){const e=Lu(t);if(e.get(1)!==n.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F($u(e))}function Fu(n,t){return Bi(n.databaseId,t)}function cg(n){const t=Lu(n);return t.length===4?ht.emptyPath():$u(t)}function yi(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $u(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ll(n,t,e){return{name:_i(n,t),fields:e.value.mapValue.fields}}function hg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,d){return f.useProto3Json?(at(d===void 0||typeof d=="string"),Ot.fromBase64String(d||"")):(at(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ot.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const d=f.code===void 0?S.UNKNOWN:Nu(f.code);return new M(d,f.message||"")}(a);e=new Mu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ws(n,r.document.name),o=re(r.document.updateTime),a=r.document.createTime?re(r.document.createTime):K.min(),l=new Kt({mapValue:{fields:r.document.fields}}),c=Bt.newFoundDocument(s,o,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];e=new $r(f,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ws(n,r.document),o=r.readTime?re(r.readTime):K.min(),a=Bt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new $r([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ws(n,r.document),o=r.removedTargetIds||[];e=new $r([],o,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new tg(s,o),l=r.targetId;e=new Ou(l,a)}}return e}function fg(n,t){let e;if(t instanceof ar)e={update:ll(n,t.key,t.value)};else if(t instanceof ku)e={delete:_i(n,t.key)};else if(t instanceof De)e={update:ll(n,t.key,t.data),updateMask:Tg(t.fieldMask)};else{if(!(t instanceof Xm))return z();e={verify:_i(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Xr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw z()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ug(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,t.precondition)),e}function dg(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?re(s.updateTime):re(o);return a.isEqual(K.min())&&(a=re(o)),new Wm(a,s.transformResults||[])}(e,t))):[]}function mg(n,t){return{documents:[Fu(n,t.path)]}}function gg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Fu(n,s);const o=function(f){if(f.length!==0)return Bu(ie.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(d=>function(_){return{field:Ze(_.field),direction:yg(_.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=gi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function pg(n){let t=cg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){at(r===1);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=function(g){const _=Uu(g);return _ instanceof ie&&pu(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(P){return new Yr(tn(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(e.orderBy));let l=null;e.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,ss(_)?null:_}(e.limit));let c=null;e.startAt&&(c=function(g){const _=!!g.before,R=g.values||[];return new Qr(R,_)}(e.startAt));let f=null;return e.endAt&&(f=function(g){const _=!g.before,R=g.values||[];return new Qr(R,_)}(e.endAt)),Om(t,s,a,o,l,"F",c,f)}function _g(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Uu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=tn(e.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=tn(e.unaryFilter.field);return It.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=tn(e.unaryFilter.field);return It.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=tn(e.unaryFilter.field);return It.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return It.create(tn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ie.create(e.compositeFilter.filters.map(r=>Uu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function yg(n){return ig[n]}function vg(n){return og[n]}function Eg(n){return ag[n]}function Ze(n){return{fieldPath:n.canonicalString()}}function tn(n){return kt.fromServerFormat(n.fieldPath)}function Bu(n){return n instanceof It?function(e){if(e.op==="=="){if(Wa(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NAN"}};if(Ga(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wa(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NOT_NAN"}};if(Ga(e.value))return{unaryFilter:{field:Ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ze(e.field),op:vg(e.op),value:e.value}}}(n):n instanceof ie?function(e){const r=e.getFilters().map(s=>Bu(s));return r.length===1?r[0]:{compositeFilter:{op:Eg(e.op),filters:r}}}(n):z()}function Tg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e,r,s,o=K.min(),a=K.min(),l=Ot.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.ct=t}}function wg(n){const t=pg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.un=new Rg}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Se.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Se.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Rg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Nt(ht.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Nt(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new dn(0)}static kn(){return new dn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.changes=new vn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Bt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Gn(r.mutation,s,Wt.empty(),At.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=Le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Bn();return o.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=ge();const a=Kn(),l=function(){return Kn()}();return e.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof De)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Gn(d.mutation,f,d.mutation.getFieldMask(),At.now())):a.set(f.key,Wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var g;return l.set(f,new Pg(d,(g=a.get(f))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Kn();let s=new dt((a,l)=>a-l),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=e.get(c);if(f===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(f,d),r.set(c,d);const g=(s.get(l.batchId)||Y()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,g=Au();d.forEach(_=>{if(!o.has(_)){const R=Vu(e.get(_),r.get(_));R!==null&&g.set(_,R),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Mm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Le());let l=-1,c=o;return a.next(f=>C.forEach(f,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(d)?C.resolve():this.remoteDocumentCache.getEntry(t,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,c,f,Y())).next(d=>({batchId:l,changes:wu(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=Bn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Bn();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,c=>{const f=function(g,_){return new is(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Bt.newInvalidDocument(d)))});let l=Bn();return a.forEach((c,f)=>{const d=o.get(c);d!==void 0&&Gn(d.mutation,f,Wt.empty(),At.now()),ls(e,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:re(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:wg(s.bundledQuery),readTime:re(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.overlays=new dt(F.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Le();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Le(),o=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new dt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=Le(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Le(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return C.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zm(e,r));let o=this.Ir.get(e);o===void 0&&(o=Y(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.Tr=new Nt(St.Er),this.dr=new Nt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new St(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new St(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new F(new ht([])),r=new St(e,t),s=new St(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new F(new ht([])),r=new St(e,t),s=new St(e,t+1);let o=Y();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new St(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return F.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Nt(St.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jm(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new St(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),s=new St(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Nt(nt);return e.forEach(s=>{const o=new St(s,0),a=new St(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new St(new F(o),0);let l=new Nt(nt);return this.br.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.wr)),!0)},a),C.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){at(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,s=>{const o=new St(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new St(e,0),s=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t){this.Mr=t,this.docs=function(){return new dt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(e))}getEntries(t,e){let r=ge();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Bt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ge();const a=e.path,l=new F(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||gm(mm(d),r)<=0||(s.has(d.key)||ls(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){z()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Og(this)}getSize(t){return C.resolve(this.size)}}class Og extends bg{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.persistence=t,this.Nr=new vn(e=>xi(e),Li),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ji,this.targetCount=0,this.kr=dn.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new dn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ki(0),this.Kr=!1,this.Kr=!0,this.$r=new Dg,this.referenceDelegate=t(this),this.Ur=new Mg(this),this.indexManager=new Ag,this.remoteDocumentCache=function(s){return new Ng(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ig(e),this.Gr=new Cg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new kg(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const s=new Lg(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Lg extends _m{constructor(t){super(),this.currentSequenceNumber=t}}class qi{constructor(t){this.persistence=t,this.Jr=new ji,this.Yr=null}static Zr(t){return new qi(t)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=F.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new zi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jf()?8:ym(Uf())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fg;return this.Xi(t,e,a).next(l=>{if(o.result=l,this.zi)return this.es(t,e,a,l.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?($n()<=tt.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):($n()<=tt.DEBUG&&O("QueryEngine","Query:",Je(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?($n()<=tt.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):C.resolve())}Yi(t,e){if(Ja(e))return C.resolve(null);let r=ne(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mi(e,null,"F"),r=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.Ji.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const f=this.ts(e,l);return this.ns(e,f,a,c.readTime)?this.Yi(t,mi(e,null,"F")):this.rs(t,f,e,c)}))})))}Zi(t,e,r,s){return Ja(e)||s.isEqual(K.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?C.resolve(null):($n()<=tt.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Je(e)),this.rs(t,a,e,dm(s,-1)).next(l=>l))})}ts(t,e){let r=new Nt(Tu(t));return e.forEach((s,o)=>{ls(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return $n()<=tt.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Je(e)),this.Ji.getDocumentsMatchingQuery(t,e,Se.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new dt(nt),this._s=new vn(o=>xi(o),Li),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Bg(n,t,e,r){return new Ug(n,t,e,r)}async function qu(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let c=Y();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of o){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(r,c).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:l}))})})}function jg(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const g=f.batch,_=g.keys();let R=C.resolve();return _.forEach(P=>{R=R.next(()=>d.getEntry(c,P)).next(V=>{const D=f.docVersions.get(P);at(D!==null),V.version.compareTo(D)<0&&(g.applyToRemoteDocument(V,f),V.isValidDocument()&&(V.setReadTime(f.commitVersion),d.addEntry(V)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Y();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function zu(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function qg(n,t){const e=G(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const l=[];t.targetChanges.forEach((d,g)=>{const _=s.get(g);if(!_)return;l.push(e.Ur.removeMatchingKeys(o,d.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(o,d.addedDocuments,g)));let R=_.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(Ot.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,R,d)&&l.push(e.Ur.updateTargetData(o,R))});let c=ge(),f=Y();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))}),l.push(zg(o,a,t.documentUpdates).next(d=>{c=d.Ps,f=d.Is})),!r.isEqual(K.min())){const d=e.Ur.getLastRemoteSnapshotVersion(o).next(g=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(d)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,f)).next(()=>c)}).then(o=>(e.os=s,o))}function zg(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ge();return e.forEach((l,c)=>{const f=o.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(K.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):O("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Hg(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Kg(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function vi(n,t,e){const r=G(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!or(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function ul(n,t,e){const r=G(n);let s=K.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,f,d){const g=G(c),_=g._s.get(d);return _!==void 0?C.resolve(g.os.get(_)):g.Ur.getTargetData(f,d)}(r,a,ne(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{o=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Y())).next(l=>(Gg(r,Lm(t),l),{documents:l,Ts:o})))}function Gg(n,t,e){let r=n.us.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class cl{constructor(){this.activeTargetIds=qm()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wg{constructor(){this.so=new cl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new cl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr=null;function Qs(){return Mr===null?Mr=function(){return 268435456+Math.round(2147483648*Math.random())}():Mr++,"0x"+Mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class Jg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const l=Qs(),c=this.xo(e,r.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${l}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,c,f,s).then(d=>(O("RestConnection",`Received RPC '${e}' ${l}: `,d),d),d=>{throw un("RestConnection",`RPC '${e}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(e,r,s,o,a,l){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Yg[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Qs();return new Promise((a,l)=>{const c=new su;c.setWithCredentials(!0),c.listenOnce(iu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xr.NO_ERROR:const d=c.getResponseJson();O($t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case xr.TIMEOUT:O($t,`RPC '${t}' ${o} timed out`),l(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const g=c.getStatus();if(O($t,`RPC '${t}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const P=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN}(R.status);l(new M(P,R.message))}else l(new M(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new M(S.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O($t,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);O($t,`RPC '${t}' ${o} sending request:`,s),c.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=Qs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=lu(),l=au(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const d=o.join("");O($t,`Creating RPC '${t}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let _=!1,R=!1;const P=new Xg({Io:D=>{R?O($t,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(_||(O($t,`Opening RPC '${t}' stream ${s} transport.`),g.open(),_=!0),O($t,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},To:()=>g.close()}),V=(D,$,U)=>{D.listen($,B=>{try{U(B)}catch(it){setTimeout(()=>{throw it},0)}})};return V(g,Un.EventType.OPEN,()=>{R||(O($t,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),V(g,Un.EventType.CLOSE,()=>{R||(R=!0,O($t,`RPC '${t}' stream ${s} transport closed`),P.So())}),V(g,Un.EventType.ERROR,D=>{R||(R=!0,un($t,`RPC '${t}' stream ${s} transport errored:`,D),P.So(new M(S.UNAVAILABLE,"The operation could not be completed")))}),V(g,Un.EventType.MESSAGE,D=>{var $;if(!R){const U=D.data[0];at(!!U);const B=U,it=B.error||(($=B[0])===null||$===void 0?void 0:$.error);if(it){O($t,`RPC '${t}' stream ${s} received error:`,it);const Tt=it.status;let ft=function(y){const E=Et[y];if(E!==void 0)return Nu(E)}(Tt),T=it.message;ft===void 0&&(ft=S.INTERNAL,T="Unknown error status: "+Tt+" with message "+it.message),R=!0,P.So(new M(ft,T)),g.close()}else O($t,`RPC '${t}' stream ${s} received:`,U),P.bo(U)}}),V(l,ou.STAT_EVENT,D=>{D.stat===ui.PROXY?O($t,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===ui.NOPROXY&&O($t,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){return new lg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e,r,s,o,a,l,c){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(me(e.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new M(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zg extends Ku{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=hg(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?re(a.readTime):K.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=yi(this.serializer),e.addTarget=function(o,a){let l;const c=a.target;if(l=di(c)?{documents:mg(o,c)}:{query:gg(o,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xu(o,a.resumeToken);const f=gi(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=Zr(o,a.snapshotVersion.toTimestamp());const f=gi(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=_g(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=yi(this.serializer),e.removeTarget=t,this.a_(e)}}class tp extends Ku{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return at(!!t.streamToken),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=dg(t.writeResults,t.commitTime),r=re(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=yi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>fg(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,pi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(S.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(t,pi(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class np{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(me(e),this.D_=!1):O("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ge(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=G(c);f.L_.add(4),await ur(f),f.q_.set("Unknown"),f.L_.delete(4),await ds(f)}(this))})}),this.q_=new np(r,s)}}async function ds(n){if(Ge(n))for(const t of n.B_)await t(!0)}async function ur(n){for(const t of n.B_)await t(!1)}function Gu(n,t){const e=G(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Wi(e)?Gi(e):En(e).r_()&&Ki(e,t))}function Hi(n,t){const e=G(n),r=En(e);e.N_.delete(t),r.r_()&&Wu(e,t),e.N_.size===0&&(r.r_()?r.o_():Ge(e)&&e.q_.set("Unknown"))}function Ki(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}En(n).A_(t)}function Wu(n,t){n.Q_.xe(t),En(n).R_(t)}function Gi(n){n.Q_=new sg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),En(n).start(),n.q_.v_()}function Wi(n){return Ge(n)&&!En(n).n_()&&n.N_.size>0}function Ge(n){return G(n).L_.size===0}function Qu(n){n.Q_=void 0}async function sp(n){n.q_.set("Online")}async function ip(n){n.N_.forEach((t,e)=>{Ki(n,t)})}async function op(n,t){Qu(n),Wi(n)?(n.q_.M_(t),Gi(n)):n.q_.set("Unknown")}async function ap(n,t,e){if(n.q_.set("Online"),t instanceof Mu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,t)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ts(n,r)}else if(t instanceof $r?n.Q_.Ke(t):t instanceof Ou?n.Q_.He(t):n.Q_.We(t),!e.isEqual(K.min()))try{const r=await zu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=o.N_.get(f);d&&o.N_.set(f,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,f)=>{const d=o.N_.get(c);if(!d)return;o.N_.set(c,d.withResumeToken(Ot.EMPTY_BYTE_STRING,d.snapshotVersion)),Wu(o,c);const g=new Te(d.target,c,f,d.sequenceNumber);Ki(o,g)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ts(n,r)}}async function ts(n,t,e){if(!or(t))throw t;n.L_.add(1),await ur(n),n.q_.set("Offline"),e||(e=()=>zu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ds(n)})}function Yu(n,t){return t().catch(e=>ts(n,e,t))}async function ms(n){const t=G(n),e=Ve(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;lp(t);)try{const s=await Hg(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,up(t,s)}catch(s){await ts(t,s)}Xu(t)&&Ju(t)}function lp(n){return Ge(n)&&n.O_.length<10}function up(n,t){n.O_.push(t);const e=Ve(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Xu(n){return Ge(n)&&!Ve(n).n_()&&n.O_.length>0}function Ju(n){Ve(n).start()}async function cp(n){Ve(n).p_()}async function hp(n){const t=Ve(n);for(const e of n.O_)t.m_(e.mutations)}async function fp(n,t,e){const r=n.O_.shift(),s=$i.from(r,t,e);await Yu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ms(n)}async function dp(n,t){t&&Ve(n).V_&&await async function(r,s){if(function(a){return eg(a)&&a!==S.ABORTED}(s.code)){const o=r.O_.shift();Ve(r).s_(),await Yu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ms(r)}}(n,t),Xu(n)&&Ju(n)}async function fl(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Ge(e);e.L_.add(3),await ur(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ds(e)}async function mp(n,t){const e=G(n);t?(e.L_.delete(2),await ds(e)):t||(e.L_.add(2),await ur(e),e.q_.set("Unknown"))}function En(n){return n.K_||(n.K_=function(e,r,s){const o=G(e);return o.w_(),new Zg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:sp.bind(null,n),Ro:ip.bind(null,n),mo:op.bind(null,n),d_:ap.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Wi(n)?Gi(n):n.q_.set("Unknown")):(await n.K_.stop(),Qu(n))})),n.K_}function Ve(n){return n.U_||(n.U_=function(e,r,s){const o=G(e);return o.w_(),new tp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cp.bind(null,n),mo:dp.bind(null,n),f_:hp.bind(null,n),g_:fp.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await ms(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Qi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yi(n,t){if(me("AsyncQueue",`${t}: ${n}`),or(n))return new M(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Bn(),this.sortedSet=new dt(this.comparator)}static emptySet(t){return new sn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof sn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new sn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.W_=new dt(F.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):z():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class mn{constructor(t,e,r,s,o,a,l,c,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new mn(t,e,sn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&as(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class pp{constructor(){this.queries=ml(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=G(e),o=s.queries;s.queries=ml(),o.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new M(S.ABORTED,"Firestore shutting down"))}}function ml(){return new vn(n=>Eu(n),as)}async function Zu(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new gp,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Yi(a,`Initialization of query '${Je(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Xi(e)}async function tc(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _p(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Xi(e)}function yp(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Xi(n){n.Y_.forEach(t=>{t.next()})}var Ei,gl;(gl=Ei||(Ei={})).ea="default",gl.Cache="cache";class ec{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new mn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ei.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t){this.key=t}}class rc{constructor(t){this.key=t}}class vp{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=Tu(t),this.Ra=new sn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new dl,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const _=s.get(d),R=ls(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;_&&R?_.data.isEqual(R.data)?P!==V&&(r.track({type:3,doc:R}),D=!0):this.ga(_,R)||(r.track({type:2,doc:R}),D=!0,(c&&this.Aa(R,c)>0||f&&this.Aa(R,f)<0)&&(l=!0)):!_&&R?(r.track({type:0,doc:R}),D=!0):_&&!R&&(r.track({type:1,doc:_}),D=!0,(c||f)&&(l=!0)),D&&(R?(a=a.add(R),o=V?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((d,g)=>function(R,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return V(R)-V(P)}(d.type,g.type)||this.Aa(d.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=e&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,a.length!==0||f?{snapshot:new mn(this.query,t.Ra,o,a,t.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Y(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new rc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new nc(r))}),e}ba(t){this.Ta=t.Ts,this.da=Y();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return mn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ep{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Tp{constructor(t){this.key=t,this.va=!1}}class Ip{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new vn(l=>Eu(l),as),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(F.comparator),this.Na=new Map,this.La=new ji,this.Ba={},this.ka=new Map,this.qa=dn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wp(n,t,e=!0){const r=uc(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await sc(r,t,e,!0),s}async function Ap(n,t){const e=uc(n);await sc(e,t,!0,!1)}async function sc(n,t,e,r){const s=await Kg(n.localStore,ne(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Rp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Gu(n.remoteStore,s),l}async function Rp(n,t,e,r,s){n.Ka=(g,_,R)=>async function(V,D,$,U){let B=D.view.ma($);B.ns&&(B=await ul(V.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,B)));const it=U&&U.targetChanges.get(D.targetId),Tt=U&&U.targetMismatches.get(D.targetId)!=null,ft=D.view.applyChanges(B,V.isPrimaryClient,it,Tt);return _l(V,D.targetId,ft.wa),ft.snapshot}(n,g,_,R);const o=await ul(n.localStore,t,!0),a=new vp(t,o.Ts),l=a.ma(o.documents),c=lr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,c);_l(n,e,f.wa);const d=new Ep(t,e,a);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function bp(n,t,e){const r=G(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!as(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Hi(r.remoteStore,s.targetId),Ti(r,s.targetId)}).catch(ir)):(Ti(r,s.targetId),await vi(r.localStore,s.targetId,!0))}async function Pp(n,t){const e=G(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Hi(e.remoteStore,r.targetId))}async function Sp(n,t,e){const r=Mp(n);try{const s=await function(a,l){const c=G(a),f=At.now(),d=l.reduce((R,P)=>R.add(P.key),Y());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=ge(),V=Y();return c.cs.getEntries(R,d).next(D=>{P=D,P.forEach(($,U)=>{U.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,P)).next(D=>{g=D;const $=[];for(const U of l){const B=Ym(U,g.get(U.key).overlayedDocument);B!=null&&$.push(new De(U.key,B,du(B.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(R,f,$,l)}).next(D=>{_=D;const $=D.applyToLocalDocumentSet(g,V);return c.documentOverlayCache.saveOverlays(R,D.batchId,$)})}).then(()=>({batchId:_.batchId,changes:wu(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let f=a.Ba[a.currentUser.toKey()];f||(f=new dt(nt)),f=f.insert(l,c),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,e),await cr(r,s.changes),await ms(r.remoteStore)}catch(s){const o=Yi(s,"Failed to persist write");e.reject(o)}}async function ic(n,t){const e=G(n);try{const r=await qg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?at(a.va):s.removedDocuments.size>0&&(at(a.va),a.va=!1))}),await cr(e,r,t)}catch(r){await ir(r)}}function pl(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=G(a);c.onlineState=l;let f=!1;c.queries.forEach((d,g)=>{for(const _ of g.j_)_.Z_(l)&&(f=!0)}),f&&Xi(c)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cp(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new dt(F.comparator);a=a.insert(o,Bt.newNoDocument(o,K.min()));const l=Y().add(o),c=new hs(K.min(),new Map,new dt(nt),a,l);await ic(r,c),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ji(r)}else await vi(r.localStore,t,!1).then(()=>Ti(r,t,e)).catch(ir)}async function Vp(n,t){const e=G(n),r=t.batch.batchId;try{const s=await jg(e.localStore,t);ac(e,r,null),oc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cr(e,s)}catch(s){await ir(s)}}async function Dp(n,t,e){const r=G(n);try{const s=await function(a,l){const c=G(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(g=>(at(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(f,g))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,t);ac(r,t,e),oc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cr(r,s)}catch(s){await ir(s)}}function oc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ac(n,t,e){const r=G(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function Ti(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||lc(n,r)})}function lc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Hi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ji(n))}function _l(n,t,e){for(const r of e)r instanceof nc?(n.La.addReference(r.key,t),kp(n,r)):r instanceof rc?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||lc(n,r.key)):z()}function kp(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ji(n))}function Ji(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new F(ht.fromString(t)),r=n.qa.next();n.Na.set(r,new Tp(e)),n.Oa=n.Oa.insert(e,r),Gu(n.remoteStore,new Te(ne(os(e.path)),r,"TargetPurposeLimboResolution",ki.oe))}}async function cr(n,t,e){const r=G(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){s.push(f);const g=zi.Wi(c.targetId,f);o.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,f){const d=G(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(f,_=>C.forEach(_.$i,R=>d.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>C.forEach(_.Ui,R=>d.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!or(g))throw g;O("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const _=g.targetId;if(!g.fromCache){const R=d.os.get(_),P=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(_,V)}}}(r.localStore,o))}async function Np(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await qu(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new M(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cr(e,r.hs)}}function Op(n,t){const e=G(n),r=e.Na.get(t);if(r&&r.va)return Y().add(r.key);{let s=Y();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const l=e.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function uc(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ic.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Op.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cp.bind(null,t),t.Ca.d_=_p.bind(null,t.eventManager),t.Ca.$a=yp.bind(null,t.eventManager),t}function Mp(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dp.bind(null,t),t}class es{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Bg(this.persistence,new $g,t.initialUser,this.serializer)}Ga(t){return new xg(qi.Zr,this.serializer)}Wa(t){return new Wg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}es.provider={build:()=>new es};class Ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Np.bind(null,this.syncEngine),await mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pp}()}createDatastore(t){const e=fs(t.databaseInfo.databaseId),r=function(o){return new Jg(o)}(t.databaseInfo);return function(o,a,l,c){return new ep(o,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new rp(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>pl(this.syncEngine,e,0),function(){return hl.D()?new hl:new Qg}())}createSyncEngine(t,e){return function(s,o,a,l,c,f,d){const g=new Ip(s,o,a,l,c,f);return d&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=G(s);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await ur(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ii.provider={build:()=>new Ii};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):me("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Yi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xs(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function yl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Lp(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>fl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>fl(t.remoteStore,s)),n._onlineComponents=t}async function Lp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;un("Error using user provided cache. Falling back to memory cache: "+e),await Xs(n,new es)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Xs(n,new es);return n._offlineComponents}async function hc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await yl(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await yl(n,new Ii))),n._onlineComponents}function Fp(n){return hc(n).then(t=>t.syncEngine)}async function wi(n){const t=await hc(n),e=t.eventManager;return e.onListen=wp.bind(null,t.syncEngine),e.onUnlisten=bp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ap.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Pp.bind(null,t.syncEngine),e}function $p(n,t,e={}){const r=new Re;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,c,f){const d=new cc({next:_=>{d.Za(),a.enqueueAndForget(()=>tc(o,g));const R=_.docs.has(l);!R&&_.fromCache?f.reject(new M(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&c&&c.source==="server"?f.reject(new M(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(_)},error:_=>f.reject(_)}),g=new ec(os(l.path),d,{includeMetadataChanges:!0,_a:!0});return Zu(o,g)}(await wi(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,t,e){if(!e)throw new M(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Up(n,t,e,r){if(t===!0&&r===!0)throw new M(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function El(n){if(!F.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tl(n){if(F.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function te(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zi(n);throw new M(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Up("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sm;switch(r.type){case"firstParty":return new lm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=vl.get(e);r&&(O("ComponentProvider","Removing Datastore"),vl.delete(e),r.terminate())}(this),Promise.resolve()}}function Bp(n,t,e,r={}){var s;const o=(n=te(n,gs))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Ut.MOCK_USER;else{l=$f(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ut(f)}n._authCredentials=new im(new uu(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ps(this.firestore,t,this._query)}}class Ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new be(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ht(this.firestore,t,this._key)}}class be extends ps{constructor(t,e,r){super(t,e,os(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ht(this.firestore,null,new F(t))}withConverter(t){return new be(this.firestore,t,this._path)}}function rr(n,t,...e){if(n=fe(n),dc("collection","path",t),n instanceof gs){const r=ht.fromString(t,...e);return Tl(r),new be(n,null,r)}{if(!(n instanceof Ht||n instanceof be))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return Tl(r),new be(n.firestore,null,r)}}function mc(n,t,...e){if(n=fe(n),arguments.length===1&&(t=cu.newId()),dc("doc","path",t),n instanceof gs){const r=ht.fromString(t,...e);return El(r),new Ht(n,null,new F(r))}{if(!(n instanceof Ht||n instanceof be))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return El(r),new Ht(n.firestore,n instanceof be?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hu(this,"async_queue_retry"),this.Vu=()=>{const r=Ys();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ys();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Re;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!or(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw me("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Qi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Al(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class He extends gs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new wl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wl(t),this._firestoreClient=void 0,await t}}}function jp(n,t){const e=typeof n=="object"?n:Wd(),r=typeof n=="string"?n:"(default)",s=zd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Lf("firestore");o&&Bp(s,...o)}return s}function to(n){if(n._terminated)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qp(n),n._firestoreClient}function qp(n){var t,e,r;const s=n._freezeSettings(),o=function(l,c,f,d){return new Tm(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fc(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new xp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(Ot.fromBase64String(t))}catch(e){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new gn(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=/^__.*__$/;class Hp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new De(t,this.data,this.fieldMask,e,this.fieldTransforms):new ar(t,this.data,e,this.fieldTransforms)}}class gc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new De(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function pc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class so{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new so(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ns(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(pc(this.Cu)&&zp.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Kp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||fs(t)}Qu(t,e,r,s=!1){return new so({Cu:t,methodName:e,qu:r,path:kt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function io(n){const t=n._freezeSettings(),e=fs(n._databaseId);return new Kp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function _c(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);oo("Data must be an object, but it was:",a,r);const l=yc(r,a);let c,f;if(o.merge)c=new Wt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const d=[];for(const g of o.mergeFields){const _=Ai(t,g,e);if(!a.contains(_))throw new M(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Ec(d,_)||d.push(_)}c=new Wt(d),f=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,f=a.fieldTransforms;return new Hp(new Kt(l),c,f)}class ys extends eo{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ys}}function Gp(n,t,e,r){const s=n.Qu(1,t,e);oo("Data must be an object, but it was:",s,r);const o=[],a=Kt.empty();Ke(r,(c,f)=>{const d=ao(t,c,e);f=fe(f);const g=s.Nu(d);if(f instanceof ys)o.push(d);else{const _=vs(f,g);_!=null&&(o.push(d),a.set(d,_))}});const l=new Wt(o);return new gc(a,l,s.fieldTransforms)}function Wp(n,t,e,r,s,o){const a=n.Qu(1,t,e),l=[Ai(t,r,e)],c=[s];if(o.length%2!=0)throw new M(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)l.push(Ai(t,o[_])),c.push(o[_+1]);const f=[],d=Kt.empty();for(let _=l.length-1;_>=0;--_)if(!Ec(f,l[_])){const R=l[_];let P=c[_];P=fe(P);const V=a.Nu(R);if(P instanceof ys)f.push(R);else{const D=vs(P,V);D!=null&&(f.push(R),d.set(R,D))}}const g=new Wt(f);return new gc(d,g,a.fieldTransforms)}function vs(n,t){if(vc(n=fe(n)))return oo("Unsupported field value:",t,n),yc(n,t);if(n instanceof eo)return function(r,s){if(!pc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let c=vs(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=At.fromDate(r);return{timestampValue:Zr(s.serializer,o)}}if(r instanceof At){const o=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(s.serializer,o)}}if(r instanceof no)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gn)return{bytesValue:xu(s.serializer,r._byteString)};if(r instanceof Ht){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Bi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ro)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Fi(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zi(r)}`)}(n,t)}function yc(n,t){const e={};return hu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ke(n,(r,s)=>{const o=vs(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function vc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof At||n instanceof no||n instanceof gn||n instanceof Ht||n instanceof eo||n instanceof ro)}function oo(n,t,e){if(!vc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Zi(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Ai(n,t,e){if((t=fe(t))instanceof _s)return t._internalPath;if(typeof t=="string")return ao(n,t);throw ns("Field path arguments must be of type string or ",n,!1,void 0,e)}const Qp=new RegExp("[~\\*/\\[\\]]");function ao(n,t,e){if(t.search(Qp)>=0)throw ns(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new _s(...t.split("."))._internalPath}catch{throw ns(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ns(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new M(S.INVALID_ARGUMENT,l+n+c)}function Ec(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ic("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yp extends Tc{data(){return super.data()}}function Ic(n,t){return typeof t=="string"?ao(n,t):t instanceof _s?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jp{convertValue(t,e="none"){switch(ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(qe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ke(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>vt(a.doubleValue));return new ro(o)}convertGeoPoint(t){return new no(vt(t.latitude),vt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Oi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Jn(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new At(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ht.fromString(t);at(ju(r));const s=new Zn(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||me(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ac extends Tc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ic("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Ur extends Ac{data(t={}){return super.data(t)}}class Zp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new qn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ur(this._firestore,this._userDataWriter,r.key,r,new qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ur(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new Ur(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:t_(l.type),doc:c,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function t_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n){n=te(n,Ht);const t=te(n.firestore,He);return $p(to(t),n._key).then(e=>Sc(t,n,e))}class Rc extends Jp{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ht(this.firestore,null,e)}}function n_(n,t,e){n=te(n,Ht);const r=te(n.firestore,He),s=wc(n.converter,t);return lo(r,[_c(io(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Zt.none())])}function r_(n,t,e,...r){n=te(n,Ht);const s=te(n.firestore,He),o=io(s);let a;return a=typeof(t=fe(t))=="string"||t instanceof _s?Wp(o,"updateDoc",n._key,t,e,r):Gp(o,"updateDoc",n._key,t),lo(s,[a.toMutation(n._key,Zt.exists(!0))])}function bc(n,t){const e=te(n.firestore,He),r=mc(n),s=wc(n.converter,t);return lo(e,[_c(io(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Pc(n,...t){var e,r,s;n=fe(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Al(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Al(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,f,d;if(n instanceof Ht)f=te(n.firestore,He),d=os(n._key.path),c={next:g=>{t[a]&&t[a](Sc(f,n,g))},error:t[a+1],complete:t[a+2]};else{const g=te(n,ps);f=te(g.firestore,He),d=g._query;const _=new Rc(f);c={next:R=>{t[a]&&t[a](new Zp(f,_,g,R))},error:t[a+1],complete:t[a+2]},Xp(n._query)}return function(_,R,P,V){const D=new cc(V),$=new ec(R,D,P);return _.asyncQueue.enqueueAndForget(async()=>Zu(await wi(_),$)),()=>{D.Za(),_.asyncQueue.enqueueAndForget(async()=>tc(await wi(_),$))}}(to(f),d,l,c)}function lo(n,t){return function(r,s){const o=new Re;return r.asyncQueue.enqueueAndForget(async()=>Sp(await Fp(r),s,o)),o.promise}(to(n),t)}function Sc(n,t,e){const r=e.docs.get(t._key),s=new Rc(n);return new Ac(n,s,t._key,r,new qn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){yn=s})(Gd),Gr(new Qn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new He(new om(r.getProvider("auth-internal")),new cm(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),rn(ja,"4.7.3",t),rn(ja,"4.7.3","esm2017")})();var s_="firebase",i_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(s_,i_,"app");const o_={apiKey:"AIzaSyB8h_qmPTuYaDDSsdtnVwoo1IX_fP_GWQ0",authDomain:"buckshotroulette-6fe6e.firebaseapp.com",projectId:"buckshotroulette-6fe6e",storageBucket:"buckshotroulette-6fe6e.appspot.com",messagingSenderId:"107988551836",appId:"1:107988551836:web:c0f10643d422eaf0098559"},a_=tu(o_),l_=jp(a_),Cc=rr(l_,"rooms");async function u_(n){return await bc(Cc,n)}function Vc(n){return mc(Cc,n)}async function c_(n){const e=(await e_(n)).data();if(!e)throw new Error("Document data is undefined.");return e}async function Rl(n){ae.set(!0);const t=Dt(ln),e=await h_(t),r=await f_(e,n),s=rr(r,"offerCandidates"),o=rr(r,"answerCandidates");return Dc(t,s),d_(t,r),Nc(t,o),r}async function h_(n){const t=await n.createOffer();return await n.setLocalDescription(t),{sdp:t.sdp,type:t.type}}async function f_(n,t){if(t){const e=Vc(t);return await n_(e,{offer:n}),e}return await u_({offer:n})}function d_(n,t){Pc(t,e=>{const r=e.data();!n.currentRemoteDescription&&(r!=null&&r.answer)&&kc(n,r.answer)})}async function bl(n){ae.set(!1);const t=Dt(ln),e=Vc(n),r=rr(e,"offerCandidates"),s=rr(e,"answerCandidates");if(await m_(t,e))Dc(t,s),g_(t,e),Nc(t,r);else throw new Error("Offer does not exists in the room.")}async function m_(n,t){const e=await c_(t);return e.offer?(kc(n,e.offer),!0):!1}async function g_(n,t){const e=await p_(n);await r_(t,{answer:e})}async function p_(n){const t=await n.createAnswer();return await n.setLocalDescription(t),{sdp:t.sdp,type:t.type}}function Dc(n,t){n.onicecandidate=e=>{e.candidate&&bc(t,e.candidate.toJSON())}}function kc(n,t){const e=new RTCSessionDescription(t);console.log(`Connected ${t.type}`),n.setRemoteDescription(e)}function Nc(n,t){Pc(t,e=>{e.docChanges().forEach(r=>{if(n.remoteDescription&&r.type==="added"){const s=r.doc.data(),o=new RTCIceCandidate(s);n.addIceCandidate(o)}})})}function Pl(n,t,e){const r=n.slice();return r[12]=t[e],r}function Sl(n){let t,e="Host",r,s,o="Join",a,l;return{c(){t=j("button"),t.textContent=e,r=rt(),s=j("button"),s.textContent=o,this.h()},l(c){t=q(c,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(t)!=="svelte-x7ld7v"&&(t.textContent=e),r=st(c),s=q(c,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(s)!=="svelte-1akubrw"&&(s.textContent=o),this.h()},h(){x(t,"class","room-button"),x(s,"class","room-button")},m(c,f){L(c,t,f),L(c,r,f),L(c,s,f),a||(l=[he(t,"click",n[5]),he(s,"click",n[7])],a=!0)},p:ut,d(c){c&&(k(t),k(r),k(s)),a=!1,Pi(l)}}}function Cl(n){let t,e,r,s,o,a="Back",l,c,f,d,g=n[1]&&Vl(n);return{c(){t=j("input"),e=rt(),r=j("br"),s=rt(),o=j("button"),o.textContent=a,l=rt(),g&&g.c(),c=Pe(),this.h()},l(_){t=q(_,"INPUT",{class:!0,type:!0,placeholder:!0}),e=st(_),r=q(_,"BR",{}),s=st(_),o=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(o)!=="svelte-jcu365"&&(o.textContent=a),l=st(_),g&&g.l(_),c=Pe(),this.h()},h(){x(t,"class","room-button"),x(t,"type","text"),x(t,"placeholder","Room ID"),t.disabled=n[3],x(o,"class","room-button")},m(_,R){L(_,t,R),ca(t,n[2]),L(_,e,R),L(_,r,R),L(_,s,R),L(_,o,R),L(_,l,R),g&&g.m(_,R),L(_,c,R),f||(d=[he(t,"input",n[9]),he(o,"click",n[8])],f=!0)},p(_,R){R&8&&(t.disabled=_[3]),R&4&&t.value!==_[2]&&ca(t,_[2]),_[1]?g?g.p(_,R):(g=Vl(_),g.c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null)},d(_){_&&(k(t),k(e),k(r),k(s),k(o),k(l),k(c)),g&&g.d(_),f=!1,Pi(d)}}}function Vl(n){let t,e,r,s,o;return{c(){t=j("button"),e=Xt("Connect"),this.h()},l(a){t=q(a,"BUTTON",{class:!0});var l=Z(t);e=Jt(l,"Connect"),l.forEach(k),this.h()},h(){x(t,"class","room-button"),t.disabled=r=n[2]==""},m(a,l){L(a,t,l),H(t,e),s||(o=he(t,"click",n[6]),s=!0)},p(a,l){l&4&&r!==(r=a[2]=="")&&(t.disabled=r)},d(a){a&&k(t),s=!1,o()}}}function __(n){let t,e=Qt(n[4]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Dl(Pl(n,e,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=Pe()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);t=Pe()},m(s,o){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(s,o);L(s,t,o)},p(s,o){if(o&16){e=Qt(s[4]);let a;for(a=0;a<e.length;a+=1){const l=Pl(s,e,a);r[a]?r[a].p(l,o):(r[a]=Dl(l),r[a].c(),r[a].m(t.parentNode,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(s){s&&k(t),an(r,s)}}}function Dl(n){let t,e=n[12]+"",r;return{c(){t=j("p"),r=Xt(e)},l(s){t=q(s,"P",{});var o=Z(t);r=Jt(o,e),o.forEach(k)},m(s,o){L(s,t,o),H(t,r)},p:ut,d(s){s&&k(t)}}}function y_(n){let t,e,r,s,o,a,l=!n[0]&&Sl(n),c=n[0]&&Cl(n),f=n[4].length>0&&__(n);return{c(){t=j("div"),e=rt(),r=j("div"),l&&l.c(),s=rt(),c&&c.c(),o=rt(),f&&f.c(),a=Pe(),this.h()},l(d){t=q(d,"DIV",{class:!0,style:!0}),Z(t).forEach(k),e=st(d),r=q(d,"DIV",{});var g=Z(r);l&&l.l(g),s=st(g),c&&c.l(g),g.forEach(k),o=st(d),f&&f.l(d),a=Pe(),this.h()},h(){x(t,"class","container"),Q(t,"display","none")},m(d,g){L(d,t,g),L(d,e,g),L(d,r,g),l&&l.m(r,null),H(r,s),c&&c.m(r,null),L(d,o,g),f&&f.m(d,g),L(d,a,g)},p(d,[g]){d[0]?l&&(l.d(1),l=null):l?l.p(d,g):(l=Sl(d),l.c(),l.m(r,s)),d[0]?c?c.p(d,g):(c=Cl(d),c.c(),c.m(r,null)):c&&(c.d(1),c=null),d[4].length>0&&f.p(d,g)},i:ut,o:ut,d(d){d&&(k(t),k(e),k(r),k(o),k(a)),l&&l.d(),c&&c.d(),f&&f.d(d)}}}function v_(n,t,e){let r,s;wt(n,jr,V=>e(10,r=V)),wt(n,ae,V=>e(3,s=V));let o=!1,a=!1,l="",c=[];Pf(f);async function f(){e(2,l=r.id),console.warn("Connecting using preset"),r.role=="host"?await Rl(l):await bl(l)}async function d(){e(0,o=!0),e(2,l=(await Rl()).id)}async function g(){try{await bl(l)}catch{c.push("Room does not exist.")}}function _(){e(0,o=!0),e(1,a=!0)}function R(){e(0,o=!1),e(1,a=!1)}function P(){l=this.value,e(2,l)}return[o,a,l,s,c,d,g,_,R,P]}class E_ extends bt{constructor(t){super(),Pt(this,t,v_,y_,Rt,{})}}const T_=""+new URL("../assets/MagnifyingGlass.BHzLRKUU.png",import.meta.url).href,I_=""+new URL("../assets/CigarettePack.B1uYtNIV.png",import.meta.url).href,w_=""+new URL("../assets/CanOfBeer.COyJsOM8.png",import.meta.url).href,A_=""+new URL("../assets/BurnerPhone.Cl_J4D7k.png",import.meta.url).href,R_=""+new URL("../assets/Inverter.BedVjJck.png",import.meta.url).href,b_=""+new URL("../assets/ExpiredMedicine.pUvak10D.png",import.meta.url).href,P_={magnifying_glass:T_,cigarette_pack:I_,can_of_beer:w_,handsaw:Jh,handcuffs:Si,burner_phone:A_,inverter:R_,adrenaline:Kl,expired_medicine:b_};function kl(n){return P_[n]}const S_={magnifying_glass:"Check the current round in the chamber.",cigarette_pack:"Take the edge off. Regain 1 Charge.",can_of_beer:"Racks the shotgun. Ejects current shell.",handsaw:"Shotgun deals 2 damage.",handcuffs:"Skips the opponent's next turn. Cannot be used in succession.",burner_phone:"A mysterious voice gives you insight from the future.",inverter:"Swap the polarity of the current shell in the chamber.",adrenaline:"Steal an item and use it immediately. Cannot steal adrenaline.",expired_medicine:"50% chance to regain 2 Charges; 50% to lose 1 Charge."};function Nl(n){return S_[n]}function C_(n){let t,e,r,s;return{c(){t=j("button"),this.h()},l(o){t=q(o,"BUTTON",{class:!0,style:!0}),Z(t).forEach(k),this.h()},h(){x(t,"class","item"),Q(t,"background-image","url("+kl(n[0])+")"),t.disabled=e=!n[1]},m(o,a){L(o,t,a),r||(s=he(t,"click",n[2]),r=!0)},p(o,[a]){a&1&&Q(t,"background-image","url("+kl(o[0])+")"),a&2&&e!==(e=!o[1])&&(t.disabled=e)},i:ut,o:ut,d(o){o&&k(t),r=!1,s()}}}function V_(n,t,e){let r,s,o,a,l,c,f,d,g,_,R;wt(n,ae,U=>e(11,g=U)),wt(n,zt,U=>e(12,_=U)),wt(n,ti,U=>e(13,R=U));let{item:P}=t,{side:V}=t;const D=V=="left"?"self":"opponent";function $(){console.log(`Use ${P}`),Fe(Uh(P))}return n.$$set=U=>{"item"in U&&e(0,P=U.item),"side"in U&&e(3,V=U.side)},n.$$.update=()=>{n.$$.dirty&6145&&e(6,r=P!="handcuffs"||!(g?_.clientHandcuffs:_.hostHandcuffs)),n.$$.dirty&6145&&e(8,s=P!="adrenaline"||((g?_.clientHandcuffs:_.hostHandcuffs)?(g?_.pClient:_.pHost).items.some(U=>U!="adrenaline"&&U!="handcuffs"):(g?_.pClient:_.pHost).items.some(U=>U!="adrenaline"))),n.$$.dirty&8192&&e(7,o=R&&D=="opponent"),n.$$.dirty&8192&&e(9,a=R&&D=="self"),n.$$.dirty&6144&&e(10,l=_!=null&&_.activePlayer?_.activePlayer=="host"==g:!1),n.$$.dirty&1856&&e(5,c=l&&!a&&r&&s),n.$$.dirty&193&&e(4,f=o&&r&&P!="adrenaline"),n.$$.dirty&48&&e(1,d=D=="self"?c:f)},[P,d,$,V,f,c,r,o,s,a,l,g,_,R]}class D_ extends bt{constructor(t){super(),Pt(this,t,V_,C_,Rt,{item:0,side:3})}}function k_(n){let t,e,r,s,o,a=Wn(n[0])+"",l,c,f=Nl(n[0])+"",d,g,_,R;return e=new D_({props:{item:n[0],side:n[1]}}),{c(){t=j("div"),gt(e.$$.fragment),r=rt(),s=j("div"),o=j("p"),l=Xt(a),c=Xt(": "),d=Xt(f),this.h()},l(P){t=q(P,"DIV",{class:!0});var V=Z(t);pt(e.$$.fragment,V),r=st(V),s=q(V,"DIV",{class:!0});var D=Z(s);o=q(D,"P",{});var $=Z(o);l=Jt($,a),c=Jt($,": "),d=Jt($,f),$.forEach(k),D.forEach(k),V.forEach(k),this.h()},h(){x(s,"class","item-text"),x(t,"class",g="item-container "+n[1])},m(P,V){L(P,t,V),_t(e,t,null),H(t,r),H(t,s),H(s,o),H(o,l),H(o,c),H(o,d),R=!0},p(P,[V]){const D={};V&1&&(D.item=P[0]),V&2&&(D.side=P[1]),e.$set(D),(!R||V&1)&&a!==(a=Wn(P[0])+"")&&Br(l,a),(!R||V&1)&&f!==(f=Nl(P[0])+"")&&Br(d,f),(!R||V&2&&g!==(g="item-container "+P[1]))&&x(t,"class",g)},i(P){R||(W(e.$$.fragment,P),P&&bi(()=>{R&&(_||(_=on(t,qr,{},!0)),_.run(1))}),R=!0)},o(P){X(e.$$.fragment,P),P&&(_||(_=on(t,qr,{},!1)),_.run(0)),R=!1},d(P){P&&k(t),yt(e),P&&_&&_.end()}}}function N_(n,t,e){let{item:r}=t,{side:s}=t;return n.$$set=o=>{"item"in o&&e(0,r=o.item),"side"in o&&e(1,s=o.side)},[r,s]}class O_ extends bt{constructor(t){super(),Pt(this,t,N_,k_,Rt,{item:0,side:1})}}function Ol(n,t,e){const r=n.slice();return r[4]=t[e],r}function Ml(n){let t,e;return t=new O_({props:{item:n[4],side:n[0]}}),{c(){gt(t.$$.fragment)},l(r){pt(t.$$.fragment,r)},m(r,s){_t(t,r,s),e=!0},p(r,s){const o={};s&2&&(o.item=r[4]),s&1&&(o.side=r[0]),t.$set(o)},i(r){e||(W(t.$$.fragment,r),e=!0)},o(r){X(t.$$.fragment,r),e=!1},d(r){yt(t,r)}}}function xl(n){let t,e,r=n[4]!="adrenaline"&&Ml(n);return{c(){r&&r.c(),t=Pe()},l(s){r&&r.l(s),t=Pe()},m(s,o){r&&r.m(s,o),L(s,t,o),e=!0},p(s,o){s[4]!="adrenaline"?r?(r.p(s,o),o&2&&W(r,1)):(r=Ml(s),r.c(),W(r,1),r.m(t.parentNode,t)):r&&(en(),X(r,1,1,()=>{r=null}),nn())},i(s){e||(W(r),e=!0)},o(s){X(r),e=!1},d(s){s&&k(t),r&&r.d(s)}}}function M_(n){let t,e,r,s=Qt(n[1]),o=[];for(let l=0;l<s.length;l+=1)o[l]=xl(Ol(n,s,l));const a=l=>X(o[l],1,1,()=>{o[l]=null});return{c(){t=j("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){t=q(l,"DIV",{class:!0});var c=Z(t);for(let f=0;f<o.length;f+=1)o[f].l(c);c.forEach(k),this.h()},h(){x(t,"class",e="sidebar "+n[0])},m(l,c){L(l,t,c);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(t,null);r=!0},p(l,[c]){if(c&3){s=Qt(l[1]);let f;for(f=0;f<s.length;f+=1){const d=Ol(l,s,f);o[f]?(o[f].p(d,c),W(o[f],1)):(o[f]=xl(d),o[f].c(),W(o[f],1),o[f].m(t,null))}for(en(),f=s.length;f<o.length;f+=1)a(f);nn()}(!r||c&1&&e!==(e="sidebar "+l[0]))&&x(t,"class",e)},i(l){if(!r){for(let c=0;c<s.length;c+=1)W(o[c]);r=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)X(o[c]);r=!1},d(l){l&&k(t),an(o,l)}}}function x_(n,t,e){let r,s,o;wt(n,zt,l=>e(2,s=l)),wt(n,ae,l=>e(3,o=l));let{side:a}=t;return n.$$set=l=>{"side"in l&&e(0,a=l.side)},n.$$.update=()=>{n.$$.dirty&13&&e(1,r=s?a=="left"?o?s.pHost.items:s.pClient.items:o?s.pClient.items:s.pHost.items:[])},[a,r,s,o]}class Ll extends bt{constructor(t){super(),Pt(this,t,x_,M_,Rt,{side:0})}}function L_(n){let t,e="Buckshot <br/>Roulette";return{c(){t=j("h1"),t.innerHTML=e,this.h()},l(r){t=q(r,"H1",{class:!0,"data-svelte-h":!0}),Be(t)!=="svelte-1x56usr"&&(t.innerHTML=e),this.h()},h(){x(t,"class","title")},m(r,s){L(r,t,s)},p:ut,i:ut,o:ut,d(r){r&&k(t)}}}class F_ extends bt{constructor(t){super(),Pt(this,t,null,L_,Rt,{})}}class Fl{constructor(){ot(this,"health");ot(this,"items");ot(this,"maxItems",8);this.health=2,this.items=[]}addItem(t){this.items.push(t)}atMaxItems(){return this.items.length==this.maxItems}takeDamage(t){this.health-=t}removeItem(t){this.items.splice(this.items.indexOf(t),1)}heal(t,e){this.health+=t,this.health>e&&(this.health=e)}}class $_{constructor(){ot(this,"shells");ot(this,"reloadStats");ot(this,"minShells",2);ot(this,"maxShells",8);this.reloadShotgun(6)}reloadShotgun(t=fa(this.minShells,this.maxShells)){this.shells=[];let e=this.getNumLiveShells(t);for(let r=0;r<t;r++){const s=t-1-r;e>0&&e==s?(this.shells.push(!0),e--):e>0&&ni()?(this.shells.push(!0),e--):this.shells.push(!1)}this.setReloadStats()}setReloadStats(){const t=this.shells.length,e=this.getNumLiveShells(t),r=t-e,s=e==1?"":"s",o=r==1?"":"s";this.reloadStats=`${e} live round${s}. ${r} blank${o}.`}getShell(){return this.shells.shift()}isEmpty(){return!this.shells.includes(!0)}canOfBeer(){const t=this.getShell();return`The skipped shell was ${this.getShellString(t)}`}magnifyingGlass(){const t=this.shells[0];return`The current shell is ${this.getShellString(t)}.`}burnerPhone(){if(this.shells.length>1){const t=fa(1,this.shells.length-1),e=this.shells[t],r=this.getIndexString(t);return`${Wn(r)} shell... ${this.getShellString(e)} round.`}else return"There is no future to tell..."}getIndexString(t){const e=t+1;switch(e){case 2:return"second";case 3:return"third";case 4:return"fourth";case 5:return"fifth";case 6:return"sixth";case 7:return"seventh";case 8:return"eighth";default:throw new Error(`Index ${e} not accounted for`)}}getShellString(t){return t?"live":"blank"}getNumLiveShells(t){return Math.ceil(t/2)}}const Ee=class Ee{constructor(){ot(this,"pHost",new Fl);ot(this,"pClient",new Fl);ot(this,"activePlayer");ot(this,"stage",0);ot(this,"shotgun",new $_);ot(this,"usedItems",[]);ot(this,"adrenaline",!1);ot(this,"onDrawItemCallback");ot(this,"onStageChangeCallback");ot(this,"changeTurnFlag",!1);this.activePlayer=ni()?"host":"client";const t="You go first.",e="You'll go second.";Vr("host",this.activePlayer=="host"?t:e),Vr("client",this.activePlayer=="client"?t:e)}getState(){return{host:{health:this.pHost.health,items:this.pHost.items,turn:this.activePlayer},client:{health:this.pClient.health,items:this.pClient.items,turn:this.activePlayer}}}shoot(t,e){this.calculateShotResult(t,e),this.progression()}progression(){const t=this.stageProgression();this.reloadShotgun(t),this.changeTurn(t)}useItem(t,e){if(this.usedItems.push(e),zl({player:t,action:{item:{use:e}}}),this.adrenaline?(console.log(`${t} stole ${e} from ${Fn(t)}`),this.getPlayer(Fn(t)).removeItem(e),Sh(Fn(t)),this.adrenaline=!1):(console.log(`${Wn(t)} used ${Wn(e)}`),this.getPlayer(t).removeItem(e)),e=="magnifying_glass"){const r=this.shotgun.magnifyingGlass();Vr(t,r)}else if(e=="burner_phone"){const r=this.shotgun.burnerPhone();Vr(t,r)}else if(e=="can_of_beer"){const r=this.shotgun.canOfBeer();Fe({player:t,message:{message:r}}),this.reloadShotgun()}else if(e=="cigarette_pack")this.getPlayer(t).heal(1,Ee.livesPerStage[this.stage]);else if(e=="expired_medicine"){const r=ni(),s=this.getPlayer(t);r?s.heal(2,Ee.livesPerStage[this.stage]):(s.takeDamage(1),s.health<=0&&(this.changeTurnFlag=!0,this.progression()))}else e=="adrenaline"&&(this.adrenaline=!0)}myTurn(){return ee()&&this.activePlayer=="host"}getPlayer(t){return t=="host"?this.pHost:this.pClient}calculateShotResult(t,e){let r=this.shotgun.getShell();r=this.usedItems.includes("inverter")?!r:r,console.log(`Shell is ${r?"live":"blank"}`),Fe({player:t,action:{shoot:{shell:r}}}),r?e=="self"?(this.dealDamage(t),this.getPlayer(t).health>0&&(this.changeTurnFlag=!0)):(this.dealDamage(Fn(t)),this.changeTurnFlag=!0):!r&&e=="opponent"?this.changeTurnFlag=!0:!r&&e=="self"&&console.log("Extra Turn")}dealDamage(t){const e=this.usedItems.includes("handsaw")?2:1;this.getPlayer(t).takeDamage(e)}clearItems(){this.usedItems=[]}stageProgression(){if(this.pHost.health<=0||this.pClient.health<=0){const t=Ee.livesPerStage[++this.stage];return this.pHost.health=t,this.pClient.health=t,this.notifyStageChange(),!0}return!1}reloadShotgun(t=!1){(t||this.shotgun.isEmpty())&&(this.shotgun.reloadShotgun(),this.drawItems(),Fe({player:"host",message:{message:this.shotgun.reloadStats,reload:!0}}))}drawItems(){const t=Ee.itemsPerStage[this.stage];for(let e=0;e<t;e++){if(!this.pHost.atMaxItems()){const r=da();this.pHost.addItem(r),this.notifyDrawItem("host",r)}if(!this.pClient.atMaxItems()){const r=da();this.pClient.addItem(r),this.notifyDrawItem("client",r)}}}changeTurn(t=!1){(this.changeTurnFlag||t)&&(this.usedItems.includes("handcuffs")&&!t?this.changeTurnFlag=!1:this.activePlayer=Fn(this.activePlayer),this.clearItems()),this.changeTurnFlag=!1}onDrawItem(t){this.onDrawItemCallback=t}notifyDrawItem(t,e){this.onDrawItemCallback&&this.onDrawItemCallback(t,e)}onStageChange(t){this.onStageChangeCallback=t}notifyStageChange(){if(this.onStageChangeCallback){const t=this.getState(),e=this.activePlayer=="host"?t.host:t.client;this.onStageChangeCallback(this.activePlayer,e,this.stage)}}};ot(Ee,"livesPerStage",[2,4,5,5]),ot(Ee,"itemsPerStage",[0,2,4,4]);let Ri=Ee;class U_{constructor(){ot(this,"pHost");ot(this,"pClient");ot(this,"activePlayer");ot(this,"previousActivePlayer");ot(this,"stage",0);ot(this,"messages",[]);ot(this,"shells",[]);ot(this,"hostHandcuffs",!1);ot(this,"clientHandcuffs",!1);ot(this,"onMessage");this.pHost=this.getDefaultPlayerData(),this.pClient=this.getDefaultPlayerData()}getDefaultPlayerData(){return{health:2,items:[]}}saveState(t){if(!t.state)throw new Error("Cannot update null state");t.player=="host"?this.pHost=t.state:this.pClient=t.state,t.stage&&(this.stage=t.stage),this.activePlayer&&(this.previousActivePlayer=this.activePlayer),this.activePlayer=t.state.turn,this.activePlayer!=this.previousActivePlayer&&(this.hostHandcuffs=!1,this.clientHandcuffs=!1)}saveMessage(t){this.messages.push(t.message),this.notifyOnMessage(t.message),t.reload&&(this.shells=[])}subscribeOnMessage(t){if(this.onMessage==null&&(console.log("here"),this.onMessage=t,this.messages))for(const e of this.messages)this.notifyOnMessage(e)}notifyOnMessage(t){this.onMessage&&this.onMessage(t)}saveShell(t){this.shells.push(t)}}function B_(n){zt.set(new U_),rs.subscribe(r=>{r&&ee()&&(Ie.set(new Ri),Ph(),Dt(Ie).onDrawItem(t),Dt(Ie).onStageChange(e))});function t(r,s){Fe({player:r,action:{item:{draw:s}}})}function e(r,s,o){Fe({player:r,state:s,stage:o})}return[]}class j_ extends bt{constructor(t){super(),Pt(this,t,B_,null,Rt,{})}}function q_(n){let t,e;return t=new j_({}),{c(){gt(t.$$.fragment)},l(r){pt(t.$$.fragment,r)},m(r,s){_t(t,r,s),e=!0},p:ut,i(r){e||(W(t.$$.fragment,r),e=!0)},o(r){X(t.$$.fragment,r),e=!1},d(r){yt(t,r)}}}function z_(n,t,e){let r,s;return wt(n,zt,o=>e(0,r=o)),wt(n,ae,o=>e(1,s=o)),n.$$.update=()=>{n.$$.dirty&3&&r!=null&&r.activePlayer&&r.activePlayer=="host"==s,n.$$.dirty&1&&r!=null&&r.stage&&r.stage,n.$$.dirty&1&&r!=null&&r.messages&&r.messages},[r,s]}class H_ extends bt{constructor(t){super(),Pt(this,t,z_,q_,Rt,{})}}function $l(n){let t,e,r,s;return t=new Ll({props:{side:"left"}}),r=new Ll({props:{side:"right"}}),{c(){gt(t.$$.fragment),e=rt(),gt(r.$$.fragment)},l(o){pt(t.$$.fragment,o),e=st(o),pt(r.$$.fragment,o)},m(o,a){_t(t,o,a),L(o,e,a),_t(r,o,a),s=!0},i(o){s||(W(t.$$.fragment,o),W(r.$$.fragment,o),s=!0)},o(o){X(t.$$.fragment,o),X(r.$$.fragment,o),s=!1},d(o){o&&k(e),yt(t,o),yt(r,o)}}}function Ul(n){let t,e,r,s,o,a;return t=new F_({}),r=new Xh({}),o=new E_({}),{c(){gt(t.$$.fragment),e=rt(),gt(r.$$.fragment),s=rt(),gt(o.$$.fragment)},l(l){pt(t.$$.fragment,l),e=st(l),pt(r.$$.fragment,l),s=st(l),pt(o.$$.fragment,l)},m(l,c){_t(t,l,c),L(l,e,c),_t(r,l,c),L(l,s,c),_t(o,l,c),a=!0},i(l){a||(W(t.$$.fragment,l),W(r.$$.fragment,l),W(o.$$.fragment,l),a=!0)},o(l){X(t.$$.fragment,l),X(r.$$.fragment,l),X(o.$$.fragment,l),a=!1},d(l){l&&(k(e),k(s)),yt(t,l),yt(r,l),yt(o,l)}}}function Bl(n){let t,e,r,s,o,a,l,c;return t=new wf({}),r=new H_({}),o=new lf({}),l=new bf({}),{c(){gt(t.$$.fragment),e=rt(),gt(r.$$.fragment),s=rt(),gt(o.$$.fragment),a=rt(),gt(l.$$.fragment)},l(f){pt(t.$$.fragment,f),e=st(f),pt(r.$$.fragment,f),s=st(f),pt(o.$$.fragment,f),a=st(f),pt(l.$$.fragment,f)},m(f,d){_t(t,f,d),L(f,e,d),_t(r,f,d),L(f,s,d),_t(o,f,d),L(f,a,d),_t(l,f,d),c=!0},i(f){c||(W(t.$$.fragment,f),W(r.$$.fragment,f),W(o.$$.fragment,f),W(l.$$.fragment,f),c=!0)},o(f){X(t.$$.fragment,f),X(r.$$.fragment,f),X(o.$$.fragment,f),X(l.$$.fragment,f),c=!1},d(f){f&&(k(e),k(s),k(a)),yt(t,f),yt(r,f),yt(o,f),yt(l,f)}}}function K_(n){let t,e,r,s,o,a;t=new bh({});let l=n[0]&&$l(),c=!n[0]&&Ul(),f=n[0]&&Bl();return{c(){gt(t.$$.fragment),e=rt(),l&&l.c(),r=rt(),s=j("div"),c&&c.c(),o=rt(),f&&f.c(),this.h()},l(d){pt(t.$$.fragment,d),e=st(d),l&&l.l(d),r=st(d),s=q(d,"DIV",{class:!0});var g=Z(s);c&&c.l(g),o=st(g),f&&f.l(g),g.forEach(k),this.h()},h(){x(s,"class","main-content")},m(d,g){_t(t,d,g),L(d,e,g),l&&l.m(d,g),L(d,r,g),L(d,s,g),c&&c.m(s,null),H(s,o),f&&f.m(s,null),a=!0},p(d,[g]){d[0]?l?g&1&&W(l,1):(l=$l(),l.c(),W(l,1),l.m(r.parentNode,r)):l&&(en(),X(l,1,1,()=>{l=null}),nn()),d[0]?c&&(en(),X(c,1,1,()=>{c=null}),nn()):c?g&1&&W(c,1):(c=Ul(),c.c(),W(c,1),c.m(s,o)),d[0]?f?g&1&&W(f,1):(f=Bl(),f.c(),W(f,1),f.m(s,null)):f&&(en(),X(f,1,1,()=>{f=null}),nn())},i(d){a||(W(t.$$.fragment,d),W(l),W(c),W(f),a=!0)},o(d){X(t.$$.fragment,d),X(l),X(c),X(f),a=!1},d(d){d&&(k(e),k(r),k(s)),yt(t,d),l&&l.d(d),c&&c.d(),f&&f.d()}}}function G_(n,t,e){let r;return wt(n,rs,s=>e(0,r=s)),[r]}class ny extends bt{constructor(t){super(),Pt(this,t,G_,K_,Rt,{})}}export{ny as component,J_ as universal};
