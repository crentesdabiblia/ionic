var __awaiter=this&&this.__awaiter||function(e,t,r,a){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function o(e){try{d(a.next(e))}catch(e){n(e)}}function s(e){try{d(a["throw"](e))}catch(e){n(e)}}function d(e){e.done?r(e.value):i(e.value).then(o,s)}d((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},a,i,n,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return d([e,t])}}function d(o){if(a)throw new TypeError("Generator is already executing.");while(r)try{if(a=1,i&&(n=o[0]&2?i["return"]:o[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;if(i=0,n)o=[o[0]&2,n.value];switch(o[0]){case 0:case 1:n=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(o[0]===6&&r.label<n[1]){r.label=n[1];n=o;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(o);break}if(n[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];i=0}finally{a=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var a=0,i=t.length,n;a<i;a++){if(n||!(a in t)){if(!n)n=Array.prototype.slice.call(t,0,a);n[a]=t[a]}}return e.concat(n||Array.prototype.slice.call(t))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-477ae426.system.js","./p-b17b66bb.system.js","./p-75f609d5.system.js","./p-4fe90052.system.js","./p-9f28e3f7.system.js","./p-0482e514.system.js","./p-af44870b.system.js","./p-396ac84b.system.js","./p-1ef14636.system.js","./p-13ac1b82.system.js","./p-e8d72748.system.js","./p-c2dc6ac6.system.js","./p-3e3b3f60.system.js","./p-04f1268e.system.js","./p-6ab93e67.system.js"],(function(e){"use strict";var t,r,a,i,n,o,s,d,l,c,u,p,f,h,m,v,b,g,y,w,k,x,S,E,A,D,_,B,C,T,Y,P,M;return{setters:[function(e){t=e.r;r=e.e;a=e.c;i=e.h;n=e.H;o=e.i},function(e){s=e.b;d=e.c},function(e){l=e.f;c=e.i;u=e.d;p=e.r;f=e.a;h=e.p},function(e){m=e.C;v=e.a;b=e.d},function(e){g=e.g;y=e.l;w=e.r},function(e){k=e.KEYBOARD_DID_OPEN},function(e){x=e.p},function(e){S=e.B;E=e.e;A=e.d;D=e.h;_=e.f;B=e.g},function(e){C=e.g},function(e){T=e.e},function(e){Y=e.c},function(e){P=e.g},function(e){M=e.createGesture},function(){},function(){}],execute:function(){var I=this;var L=typeof window!=="undefined"?window:undefined;var O;(function(e){e["Dark"]="DARK";e["Light"]="LIGHT";e["Default"]="DEFAULT"})(O||(O={}));var R={getEngine:function(){var e,t,r;return((t=(e=L)===null||e===void 0?void 0:e.Capacitor)===null||t===void 0?void 0:t.isPluginAvailable("StatusBar"))&&((r=L)===null||r===void 0?void 0:r.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle:function(){var e,t;return!!((t=(e=L)===null||e===void 0?void 0:e.Capacitor)===null||t===void 0?void 0:t.PluginHeaders)},setStyle:function(e){var t=this.getEngine();if(!t){return}t.setStyle(e)}};var j=function(e,t){if(t===1){return 0}var r=1/(1-t);var a=-(t*r);return e*r+a};var N=function(){if(!L||L.innerWidth>=768||!R.supportsDefaultStatusBarStyle()){return}R.setStyle({style:O.Dark})};var W=function(){if(!L||L.innerWidth>=768||!R.supportsDefaultStatusBarStyle()){return}R.setStyle({style:O.Default})};var q=function(e,t){return __awaiter(I,void 0,void 0,(function(){var r;return __generator(this,(function(a){switch(a.label){case 0:if(typeof e.canDismiss!=="function"){return[2]}return[4,e.canDismiss()];case 1:r=a.sent();if(!r){return[2]}if(t.isRunning()){t.onFinish((function(){e.dismiss(undefined,"handler")}),{oneTimeCallback:true})}else{e.dismiss(undefined,"handler")}return[2]}}))}))};var F=function(e){return.00255275*Math.pow(2.71828,-14.9619*e)-1.00255*Math.pow(2.71828,-.0380968*e)+1};var z={MIN_PRESENTING_SCALE:.93};var K=function(e,t,r){var a=.5;var i=e.offsetHeight;var n=false;var o=false;var s=null;var d=null;var f=.2;var h=true;var m=0;var v=function(){if(s&&c(s)){return s.scrollY}else{return true}};var b=function(e){var t=e.event.target;if(t===null||!t.closest){return true}s=l(t);if(s){if(c(s)){var r=g(s);d=r.querySelector(".inner-scroll")}else{d=s}var a=!!s.querySelector("ion-refresher");return!a&&d.scrollTop===0}var i=t.closest("ion-footer");if(i===null){return true}return false};var w=function(r){var a=r.deltaY;h=v();o=e.canDismiss!==undefined&&e.canDismiss!==true;if(a>0&&s){u(s)}t.progressStart(true,n?1:0)};var k=function(e){var r=e.deltaY;if(r>0&&s){u(s)}var n=e.deltaY/i;var d=n>=0&&o;var l=d?f:.9999;var c=d?F(n/l):n;var p=y(1e-4,c,l);t.progressStep(p);if(p>=a&&m<a){W()}else if(p<a&&m>=a){N()}m=p};var x=function(d){var l=d.velocityY;var c=d.deltaY/i;var u=c>=0&&o;var m=u?f:.9999;var v=u?F(c/m):c;var b=y(1e-4,v,m);var g=(d.deltaY+l*1e3)/i;var w=!u&&g>=a;var k=w?-.001:.001;if(!w){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");k+=P([0,0],[1,0],[.68,.28],[1,1],b)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");k+=P([0,0],[.32,.72],[0,1],[1,1],b)[0]}var x=w?G(c*i,l):G((1-b)*i,l);n=w;S.enable(false);if(s){p(s,h)}t.onFinish((function(){if(!w){S.enable(true)}})).progressEnd(w?1:0,k,x);if(u&&b>m/4){q(e,t)}else if(w){r()}};var S=M({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:b,onStart:w,onMove:k,onEnd:x});return S};var G=function(e,t){return y(400,e/Math.abs(t*1.1),500)};var H=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint;var a=r===undefined||r<t;var i=a?"calc(var(--backdrop-opacity) * ".concat(t,")"):"0";var n=Y("backdropAnimation").fromTo("opacity",0,i);if(a){n.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"])}var o=Y("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-t*100,"%)")}]);return{wrapperAnimation:o,backdropAnimation:n}};var V=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint;var a="calc(var(--backdrop-opacity) * ".concat(j(t,r),")");var i=[{offset:0,opacity:a},{offset:1,opacity:0}];var n=[{offset:0,opacity:a},{offset:r,opacity:0},{offset:1,opacity:0}];var o=Y("backdropAnimation").keyframes(r!==0?n:i);var s=Y("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-t*100,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]);return{wrapperAnimation:s,backdropAnimation:o}};var Z=function(){var e=Y().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=Y().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:e,wrapperAnimation:t}};var U=function(e,t){var r=t.presentingEl,a=t.currentBreakpoint;var i=g(e);var n=a!==undefined?H(t):Z(),o=n.wrapperAnimation,s=n.backdropAnimation;s.addElement(i.querySelector("ion-backdrop"));o.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=Y("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(r){var l=window.innerWidth<768;var c=r.tagName==="ION-MODAL"&&r.presentingElement!==undefined;var u=g(r);var p=Y().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var f=document.body;if(l){var h=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=c?"-10px":h;var v=z.MIN_PRESENTING_SCALE;var b="translateY(".concat(m,") scale(").concat(v,")");p.afterStyles({transform:b}).beforeAddWrite((function(){return f.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:b,borderRadius:"10px 10px 0 0"}]);d.addAnimation(p)}else{d.addAnimation(s);if(!c){o.fromTo("opacity","0","1")}else{var v=c?z.MIN_PRESENTING_SCALE:1;var b="translateY(-10px) scale(".concat(v,")");p.afterStyles({transform:b}).addElement(u.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);var y=Y().afterStyles({transform:b}).addElement(u.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);d.addAnimation([p,y])}}}else{d.addAnimation(s)}return d};var J=function(){var e=Y().fromTo("opacity","var(--backdrop-opacity)",0);var t=Y().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:e,wrapperAnimation:t}};var Q=function(e,t,r){if(r===void 0){r=500}var a=t.presentingEl,i=t.currentBreakpoint;var n=g(e);var o=i!==undefined?V(t):J(),s=o.wrapperAnimation,d=o.backdropAnimation;d.addElement(n.querySelector("ion-backdrop"));s.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=Y("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){var c=window.innerWidth<768;var u=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var p=g(a);var f=Y().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}a.style.setProperty("overflow","");var t=Array.from(h.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(t<=1){h.style.setProperty("background-color","")}}));var h=document.body;if(c){var m=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var v=u?"-10px":m;var b=z.MIN_PRESENTING_SCALE;var y="translateY(".concat(v,") scale(").concat(b,")");f.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:y,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);l.addAnimation(f)}else{l.addAnimation(d);if(!u){s.fromTo("opacity","1","0")}else{var b=u?z.MIN_PRESENTING_SCALE:1;var y="translateY(-10px) scale(".concat(b,")");f.addElement(p.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:y},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var w=Y().addElement(p.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:y},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([f,w])}}}else{l.addAnimation(d)}return l};var X=function(){var e=Y().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=Y().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:e,wrapperAnimation:t}};var $=function(e,t){var r=t.currentBreakpoint;var a=g(e);var i=r!==undefined?H(t):X(),n=i.wrapperAnimation,o=i.backdropAnimation;o.addElement(a.querySelector("ion-backdrop"));n.addElement(a.querySelector(".modal-wrapper"));return Y().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,n])};var ee=function(){var e=Y().fromTo("opacity","var(--backdrop-opacity)",0);var t=Y().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:e,wrapperAnimation:t}};var te=function(e,t){var r=t.currentBreakpoint;var a=g(e);var i=r!==undefined?V(t):ee(),n=i.wrapperAnimation,o=i.backdropAnimation;o.addElement(a.querySelector("ion-backdrop"));n.addElement(a.querySelector(".modal-wrapper"));return Y().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,n])};var re=function(e,t,r,a,i,n,o,s,d,l){if(o===void 0){o=[]}var c=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}];var u=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}];var p={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:i!==0?u:c};var f=e.querySelector("ion-content");var h=r.clientHeight;var m=a;var v=0;var b=false;var g=.95;var k=n.childAnimations.find((function(e){return e.id==="wrapperAnimation"}));var x=n.childAnimations.find((function(e){return e.id==="backdropAnimation"}));var S=o[o.length-1];var E=o[0];var A=function(){e.style.setProperty("pointer-events","auto");t.style.setProperty("pointer-events","auto");e.classList.remove("ion-disable-focus-trap")};var D=function(){e.style.setProperty("pointer-events","none");t.style.setProperty("pointer-events","none");e.classList.add("ion-disable-focus-trap")};if(k&&x){k.keyframes(__spreadArray([],p.WRAPPER_KEYFRAMES,true));x.keyframes(__spreadArray([],p.BACKDROP_KEYFRAMES,true));n.progressStart(true,1-m);var _=m>i;if(_){A()}else{D()}}if(f&&m!==S){f.scrollY=false}var B=function(e){var t=e.event.target.closest("ion-content");m=s();if(m===1&&t){return false}return true};var C=function(){b=e.canDismiss!==undefined&&e.canDismiss!==true&&E===0;if(f){f.scrollY=false}w((function(){e.focus()}));n.progressStart(true,1-m)};var T=function(e){var t=1-m;var r=o.length>1?1-o[1]:undefined;var a=t+e.deltaY/h;var i=r!==undefined&&a>=r&&b;var s=i?g:.9999;var d=i&&r!==undefined?r+F((a-r)/(s-r)):a;v=y(1e-4,d,s);n.progressStep(v)};var Y=function(e){var t=e.velocityY;var r=(e.deltaY+t*100)/h;var a=m-r;var i=o.reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e}));P({breakpoint:i,breakpointOffset:v,canDismiss:b})};var P=function(t){var r=t.breakpoint,a=t.canDismiss,s=t.breakpointOffset;var c=a&&r===0;var u=c?m:r;var h=u!==0;m=0;if(k&&x){k.keyframes([{offset:0,transform:"translateY(".concat(s*100,"%)")},{offset:1,transform:"translateY(".concat((1-u)*100,"%)")}]);x.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(j(1-s,i),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(j(u,i),")")}]);n.progressStep(0)}I.enable(false);n.onFinish((function(){if(h){if(k&&x){w((function(){k.keyframes(__spreadArray([],p.WRAPPER_KEYFRAMES,true));x.keyframes(__spreadArray([],p.BACKDROP_KEYFRAMES,true));n.progressStart(true,1-u);m=u;l(m);if(f&&m===o[o.length-1]){f.scrollY=true}var e=m>i;if(e){A()}else{D()}I.enable(true)}))}else{I.enable(true)}}}),{oneTimeCallback:true}).progressEnd(1,0,500);if(c){q(e,n)}else if(!h){d()}};var I=M({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:B,onStart:C,onMove:T,onEnd:Y});return{gesture:I,moveSheetToBreakpoint:P}};var ae=":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}";var ie=":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";var ne=e("ion_modal",function(){function e(e){var a=this;t(this,e);this.didPresent=r(this,"ionModalDidPresent",7);this.willPresent=r(this,"ionModalWillPresent",7);this.willDismiss=r(this,"ionModalWillDismiss",7);this.didDismiss=r(this,"ionModalDidDismiss",7);this.ionBreakpointDidChange=r(this,"ionBreakpointDidChange",7);this.didPresentShorthand=r(this,"didPresent",7);this.willPresentShorthand=r(this,"willPresent",7);this.willDismissShorthand=r(this,"willDismiss",7);this.didDismissShorthand=r(this,"didDismiss",7);this.modalIndex=se++;this.coreDelegate=m();this.isSheetModal=false;this.inline=false;this.gestureAnimationDismissing=false;this.presented=false;this.hasController=false;this.keyboardClose=true;this.backdropBreakpoint=0;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.isOpen=false;this.configureTriggerInteraction=function(){var e=a,t=e.trigger,r=e.el,i=e.destroyTriggerInteraction;if(i){i()}var n=t!==undefined?document.getElementById(t):null;if(!n){return}var o=function(e,t){var r=function(){t.present()};e.addEventListener("click",r);return function(){e.removeEventListener("click",r)}};a.destroyTriggerInteraction=o(n,r)};this.onBackdropTap=function(){a.dismiss(undefined,S)};this.onLifecycle=function(e){var t=a.usersElement;var r=oe[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(i)}}}e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.swipeToCloseChanged=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this.gesture)return[3,1];this.gesture.enable(e);return[3,3];case 1:if(!e)return[3,3];return[4,this.initSwipeToClose()];case 2:t.sent();t.label=3;case 3:return[2]}}))}))};e.prototype.breakpointsChanged=function(e){if(e!==undefined){this.sortedBreakpoints=e.sort((function(e,t){return e-t}))}};e.prototype.connectedCallback=function(){E(this.el)};e.prototype.componentWillLoad=function(){var e=this,t=e.breakpoints,r=e.initialBreakpoint,a=e.swipeToClose;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-modal-".concat(this.modalIndex);var i=this.isSheetModal=t!==undefined&&r!==undefined;if(i){this.currentBreakpoint=this.initialBreakpoint}if(t!==undefined&&r!==undefined&&!t.includes(r)){x("Your breakpoints array must include the initialBreakpoint value.")}if(a){x("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}};e.prototype.componentDidLoad=function(){var e=this;if(this.isOpen===true){w((function(){return e.present()}))}this.breakpointsChanged(this.breakpoints);this.configureTriggerInteraction()};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&!this.hasController;var a=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:a}};e.prototype.checkCanDismiss=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.canDismiss;if(e===undefined){return[2,true]}if(typeof e==="function"){return[2,e()]}return[2,e]}))}))};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,i,n,o;var d=this;return __generator(this,(function(l){switch(l.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:l.sent();l.label=2;case 2:this.currentBreakpoint=this.initialBreakpoint;e=Object.assign(Object.assign({},this.componentProps),{modal:this.el});t=this.getDelegate(true),r=t.inline,i=t.delegate;n=this;return[4,v(i,this.el,this.component,["ion-page"],e,r)];case 3:n.usersElement=l.sent();return[4,T(this.usersElement)];case 4:l.sent();a((function(){return d.el.classList.add("show-modal")}));this.currentTransition=A(this,"modalEnter",U,$,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});o=this.swipeToClose||this.canDismiss!==undefined&&this.presentingElement!==undefined;if(o&&s(this)==="ios"){N()}return[4,this.currentTransition];case 5:l.sent();if(!this.isSheetModal)return[3,6];this.initSheetGesture();return[3,8];case 6:if(!o)return[3,8];return[4,this.initSwipeToClose()];case 7:l.sent();l.label=8;case 8:if(typeof window!=="undefined"){this.keyboardOpenCallback=function(){if(d.gesture){d.gesture.enable(false);w((function(){if(d.gesture){d.gesture.enable(true)}}))}};window.addEventListener(k,this.keyboardOpenCallback)}this.currentTransition=undefined;return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(s(this)!=="ios"){return}var t=this.el;var r=this.leaveAnimation||d.get("modalLeave",Q);var a=this.animation=r(t,{presentingEl:this.presentingElement});var i=f(t);if(!i){h(t);return}this.gesture=K(t,a,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.initSheetGesture=function(){var e=this;var t=this,r=t.wrapperEl,a=t.initialBreakpoint,i=t.backdropBreakpoint;if(!r||a===undefined){return}var n=this.enterAnimation||d.get("modalEnter",U);var o=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:a,backdropBreakpoint:i});o.progressStart(true,1);var s=re(this.el,this.backdropEl,r,a,i,o,this.sortedBreakpoints,(function(){var t;return(t=e.currentBreakpoint)!==null&&t!==void 0?t:0}),(function(){return e.sheetOnDismiss()}),(function(t){if(e.currentBreakpoint!==t){e.currentBreakpoint=t;e.ionBreakpointDidChange.emit({breakpoint:t})}})),l=s.gesture,c=s.moveSheetToBreakpoint;this.gesture=l;this.moveSheetToBreakpoint=c;this.gesture.enable(true)};e.prototype.sheetOnDismiss=function(){var e=this;this.gestureAnimationDismissing=true;this.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.currentBreakpoint=0;this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint});return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,i,n,o,d;var l=this;return __generator(this,(function(c){switch(c.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}r=t!=="handler";if(!r)return[3,2];return[4,this.checkCanDismiss()];case 1:r=!c.sent();c.label=2;case 2:if(r){return[2,false]}i=this.swipeToClose||this.canDismiss!==undefined&&this.presentingElement!==undefined;if(i&&s(this)==="ios"){W()}if(typeof window!=="undefined"&&this.keyboardOpenCallback){window.removeEventListener(k,this.keyboardOpenCallback)}if(!(this.currentTransition!==undefined))return[3,4];return[4,this.currentTransition];case 3:c.sent();c.label=4;case 4:n=D.get(this)||[];this.currentTransition=_(this,e,t,"modalLeave",Q,te,{presentingEl:this.presentingElement,currentBreakpoint:this.currentBreakpoint||this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});return[4,this.currentTransition];case 5:o=c.sent();if(!o)return[3,7];d=this.getDelegate().delegate;return[4,b(d,this.usersElement)];case 6:c.sent();a((function(){return l.el.classList.remove("show-modal")}));if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy()}n.forEach((function(e){return e.destroy()}));c.label=7;case 7:this.currentBreakpoint=undefined;this.currentTransition=undefined;this.animation=undefined;return[2,o]}}))}))};e.prototype.onDidDismiss=function(){return B(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return B(this.el,"ionModalWillDismiss")};e.prototype.setCurrentBreakpoint=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,a,i,n;return __generator(this,(function(o){if(!this.isSheetModal){x("setCurrentBreakpoint is only supported on sheet modals.");return[2]}if(!this.breakpoints.includes(e)){x("Attempted to set invalid breakpoint value ".concat(e,". Please double check that the breakpoint value is part of your defined breakpoints."));return[2]}t=this,r=t.currentBreakpoint,a=t.moveSheetToBreakpoint,i=t.canDismiss,n=t.breakpoints;if(r===e){return[2]}if(a){a({breakpoint:e,breakpointOffset:1-r,canDismiss:i!==undefined&&i!==true&&n[0]===0})}return[2]}))}))};e.prototype.getCurrentBreakpoint=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.currentBreakpoint]}))}))};e.prototype.render=function(){var e;var t=this;var r=this,a=r.handle,o=r.isSheetModal,d=r.presentingElement,l=r.htmlAttributes;var c=a!==false&&o;var u=s(this);var p=this.modalId;var f=d!==undefined&&u==="ios";return i(n,Object.assign({"no-router":true,"aria-modal":"true",tabindex:"-1"},l,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((e={},e[u]=true,e["modal-default"]=!f&&!o,e["modal-card"]=f,e["modal-sheet"]=o,e["overlay-hidden"]=true,e),C(this.cssClass)),id:p,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),i("ion-backdrop",{ref:function(e){return t.backdropEl=e},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),u==="ios"&&i("div",{class:"modal-shadow"}),i("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(e){return t.wrapperEl=e}},c&&i("div",{class:"modal-handle",part:"handle"}),i("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return e}());var oe={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var se=0;ne.style={ios:ae,md:ie}}}}));