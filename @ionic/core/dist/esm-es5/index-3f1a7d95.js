/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{G as GESTURE_CONTROLLER}from"./gesture-controller-17e82006.js";export{G as GESTURE_CONTROLLER}from"./gesture-controller-17e82006.js";var addEventListener=function(e,r,t,a){var n=supportsPassive(e)?{capture:!!a.capture,passive:!!a.passive}:!!a.capture;var i;var u;if(e["__zone_symbol__addEventListener"]){i="__zone_symbol__addEventListener";u="__zone_symbol__removeEventListener"}else{i="addEventListener";u="removeEventListener"}e[i](r,t,n);return function(){e[u](r,t,n)}};var supportsPassive=function(e){if(_sPassive===undefined){try{var r=Object.defineProperty({},"passive",{get:function(){_sPassive=true}});e.addEventListener("optsTest",(function(){return}),r)}catch(e){_sPassive=false}}return!!_sPassive};var _sPassive;var MOUSE_WAIT=2e3;var createPointerEvents=function(e,r,t,a,n){var i;var u;var s;var v;var f;var o;var c;var l=0;var d=function(a){l=Date.now()+MOUSE_WAIT;if(!r(a)){return}if(!u&&t){u=addEventListener(e,"touchmove",t,n)}if(!s){s=addEventListener(a.target,"touchend",p,n)}if(!v){v=addEventListener(a.target,"touchcancel",p,n)}};var m=function(a){if(l>Date.now()){return}if(!r(a)){return}if(!o&&t){o=addEventListener(getDocument(e),"mousemove",t,n)}if(!c){c=addEventListener(getDocument(e),"mouseup",E,n)}};var p=function(e){_();if(a){a(e)}};var E=function(e){g();if(a){a(e)}};var _=function(){if(u){u()}if(s){s()}if(v){v()}u=s=v=undefined};var g=function(){if(o){o()}if(c){c()}o=c=undefined};var y=function(){_();g()};var X=function(r){if(r===void 0){r=true}if(!r){if(i){i()}if(f){f()}i=f=undefined;y()}else{if(!i){i=addEventListener(e,"touchstart",d,n)}if(!f){f=addEventListener(e,"mousedown",m,n)}}};var Y=function(){X(false);a=t=r=undefined};return{enable:X,stop:y,destroy:Y}};var getDocument=function(e){return e instanceof Document?e:e.ownerDocument};var createPanRecognizer=function(e,r,t){var a=t*(Math.PI/180);var n=e==="x";var i=Math.cos(a);var u=r*r;var s=0;var v=0;var f=false;var o=0;return{start:function(e,r){s=e;v=r;o=0;f=true},detect:function(e,r){if(!f){return false}var t=e-s;var a=r-v;var c=t*t+a*a;if(c<u){return false}var l=Math.sqrt(c);var d=(n?t:a)/l;if(d>i){o=1}else if(d<-i){o=-1}else{o=0}f=false;return true},isGesture:function(){return o!==0},getDirection:function(){return o}}};var createGesture=function(e){var r=false;var t=false;var a=true;var n=false;var i=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},e);var u=i.canStart;var s=i.onWillStart;var v=i.onStart;var f=i.onEnd;var o=i.notCaptured;var c=i.onMove;var l=i.threshold;var d=i.passive;var m=i.blurOnStart;var p={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};var E=createPanRecognizer(i.direction,i.threshold,i.maxAngle);var _=GESTURE_CONTROLLER.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll});var g=function(e){var r=now(e);if(t||!a){return false}updateDetail(e,p);p.startX=p.currentX;p.startY=p.currentY;p.startTime=p.currentTime=r;p.velocityX=p.velocityY=p.deltaX=p.deltaY=0;p.event=e;if(u&&u(p)===false){return false}_.release();if(!_.start()){return false}t=true;if(l===0){return Y()}E.start(p.startX,p.startY);return true};var y=function(e){if(r){if(!n&&a){n=true;calcGestureData(p,e);requestAnimationFrame(X)}return}calcGestureData(p,e);if(E.detect(p.currentX,p.currentY)){if(!E.isGesture()||!Y()){b()}}};var X=function(){if(!r){return}n=false;if(c){c(p)}};var Y=function(){if(_&&!_.capture()){return false}r=true;a=false;p.startX=p.currentX;p.startY=p.currentY;p.startTime=p.currentTime;if(s){s(p).then(h)}else{h()}return true};var L=function(){if(typeof document!=="undefined"){var e=document.activeElement;if(e===null||e===void 0?void 0:e.blur){e.blur()}}};var h=function(){if(m){L()}if(v){v(p)}a=true};var T=function(){r=false;t=false;n=false;a=true;_.release()};var D=function(e){var t=r;var n=a;T();if(!n){return}calcGestureData(p,e);if(t){if(f){f(p)}return}if(o){o(p)}};var P=createPointerEvents(i.el,g,y,D,{capture:false,passive:d});var b=function(){T();P.stop();if(o){o(p)}};return{enable:function(e){if(e===void 0){e=true}if(!e){if(r){D(undefined)}T()}P.enable(e)},destroy:function(){_.destroy();P.destroy()}}};var calcGestureData=function(e,r){if(!r){return}var t=e.currentX;var a=e.currentY;var n=e.currentTime;updateDetail(r,e);var i=e.currentX;var u=e.currentY;var s=e.currentTime=now(r);var v=s-n;if(v>0&&v<100){var f=(i-t)/v;var o=(u-a)/v;e.velocityX=f*.7+e.velocityX*.3;e.velocityY=o*.7+e.velocityY*.3}e.deltaX=i-e.startX;e.deltaY=u-e.startY;e.event=r};var updateDetail=function(e,r){var t=0;var a=0;if(e){var n=e.changedTouches;if(n&&n.length>0){var i=n[0];t=i.clientX;a=i.clientY}else if(e.pageX!==undefined){t=e.pageX;a=e.pageY}}r.currentX=t;r.currentY=a};var now=function(e){return e.timeStamp||Date.now()};export{createGesture};