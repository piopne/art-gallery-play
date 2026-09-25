var hx=Object.defineProperty;var fx=(n,t,e)=>t in n?hx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ho=(n,t,e)=>fx(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="169",dx=0,op=1,px=2,K1=1,j1=2,di=3,bi=0,on=1,we=2,es=0,Os=1,Tn=2,ip=3,sp=4,mx=5,Is=100,gx=101,vx=102,xx=103,Mx=104,yx=200,wx=201,_x=202,Sx=203,Y0=204,Z0=205,bx=206,Tx=207,Ex=208,Ax=209,Rx=210,Px=211,Cx=212,Ix=213,Lx=214,K0=0,j0=1,J0=2,ta=3,Q0=4,tf=5,ef=6,nf=7,J1=0,Dx=1,Nx=2,Si=0,Ux=1,Fx=2,Ox=3,Q1=4,zx=5,Bx=6,kx=7,tv=300,ea=301,na=302,gu=303,of=304,Ju=306,We=1e3,Bo=1001,sf=1002,Wn=1003,Gx=1004,Il=1005,Ge=1006,yh=1007,Qo=1008,Ho=1009,ev=1010,nv=1011,fl=1012,wd=1013,cs=1014,ro=1015,ao=1016,_d=1017,Sd=1018,oa=1020,ov=35902,iv=1021,sv=1022,lo=1023,rv=1024,av=1025,Vr=1026,ia=1027,bd=1028,Td=1029,lv=1030,Ed=1031,Ad=1033,Zc=33776,Kc=33777,jc=33778,Jc=33779,rf=35840,af=35841,lf=35842,cf=35843,uf=36196,hf=37492,ff=37496,df=37808,pf=37809,mf=37810,gf=37811,vf=37812,xf=37813,Mf=37814,yf=37815,wf=37816,_f=37817,Sf=37818,bf=37819,Tf=37820,Ef=37821,Qc=36492,Af=36494,Rf=36495,cv=36283,Pf=36284,Cf=36285,If=36286,Hx=3200,Vx=3201,uv=0,Wx=1,nn="",te="srgb",Vo="srgb-linear",Rd="display-p3",Qu="display-p3-linear",vu="linear",Re="srgb",xu="rec709",Mu="p3",Ys=7680,rp=519,Xx=512,$x=513,qx=514,hv=515,Yx=516,Zx=517,Kx=518,jx=519,Lf=35044,ap="300 es",yi=2e3,yu=2001;class ua{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[t]===void 0&&(o[t]=[]),o[t].indexOf(e)===-1&&o[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const o=this._listeners;return o[t]!==void 0&&o[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const o=this._listeners[t.type];if(o!==void 0){t.target=this;const i=o.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lp=1234567;const Ja=Math.PI/180,sa=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]).toLowerCase()}function Ze(n,t,e){return Math.max(t,Math.min(e,n))}function Pd(n,t){return(n%t+t)%t}function Jx(n,t,e,o,i){return o+(n-t)*(i-o)/(e-t)}function Qx(n,t,e){return n!==t?(e-n)/(t-n):0}function Qa(n,t,e){return(1-e)*n+e*t}function tM(n,t,e,o){return Qa(n,t,1-Math.exp(-e*o))}function eM(n,t=1){return t-Math.abs(Pd(n,t*2)-t)}function nM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function oM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function iM(n,t){return n+Math.floor(Math.random()*(t-n+1))}function sM(n,t){return n+Math.random()*(t-n)}function rM(n){return n*(.5-Math.random())}function aM(n){n!==void 0&&(lp=n);let t=lp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lM(n){return n*Ja}function cM(n){return n*sa}function uM(n){return(n&n-1)===0&&n!==0}function hM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dM(n,t,e,o,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+o)/2),u=r((t+o)/2),h=s((t-o)/2),f=r((t-o)/2),d=s((o-t)/2),p=r((o-t)/2);switch(i){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Eo={DEG2RAD:Ja,RAD2DEG:sa,generateUUID:ti,clamp:Ze,euclideanModulo:Pd,mapLinear:Jx,inverseLerp:Qx,lerp:Qa,damp:tM,pingpong:eM,smoothstep:nM,smootherstep:oM,randInt:iM,randFloat:sM,randFloatSpread:rM,seededRandom:aM,degToRad:lM,radToDeg:cM,isPowerOfTwo:uM,ceilPowerOfTwo:hM,floorPowerOfTwo:fM,setQuaternionFromProperEuler:dM,normalize:ye,denormalize:zo};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,o=this.y,i=t.elements;return this.x=i[0]*e+i[3]*o+i[6],this.y=i[1]*e+i[4]*o+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(t,Math.min(e,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const o=this.dot(t)/e;return Math.acos(Ze(o,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,o=this.y-t.y;return e*e+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const o=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*o-r*i+t.x,this.y=s*i+r*o+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,o,i,s,r,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,o,i,s,r,a,l,c)}set(t,e,o,i,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=o,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,o=t.elements;return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=o[3],e[4]=o[4],e[5]=o[5],e[6]=o[6],e[7]=o[7],e[8]=o[8],this}extractBasis(t,e,o){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const o=t.elements,i=e.elements,s=this.elements,r=o[0],a=o[3],l=o[6],c=o[1],u=o[4],h=o[7],f=o[2],d=o[5],p=o[8],v=i[0],m=i[3],g=i[6],b=i[1],x=i[4],w=i[7],E=i[2],S=i[5],_=i[8];return s[0]=r*v+a*b+l*E,s[3]=r*m+a*x+l*S,s[6]=r*g+a*w+l*_,s[1]=c*v+u*b+h*E,s[4]=c*m+u*x+h*S,s[7]=c*g+u*w+h*_,s[2]=f*v+d*b+p*E,s[5]=f*m+d*x+p*S,s[8]=f*g+d*w+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-o*s*u+o*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,f=a*l-u*s,d=c*s-r*l,p=e*h+o*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(i*c-u*o)*v,t[2]=(a*o-i*r)*v,t[3]=f*v,t[4]=(u*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=d*v,t[7]=(o*l-c*e)*v,t[8]=(r*e-o*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,o,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(o*l,o*c,-o*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wh.makeScale(t,e)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,e){return this.premultiply(wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),o=Math.sin(t);return this.set(e,-o,0,o,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,o=t.elements;for(let i=0;i<9;i++)if(e[i]!==o[i])return!1;return!0}fromArray(t,e=0){for(let o=0;o<9;o++)this.elements[o]=t[o+e];return this}toArray(t=[],e=0){const o=this.elements;return t[e]=o[0],t[e+1]=o[1],t[e+2]=o[2],t[e+3]=o[3],t[e+4]=o[4],t[e+5]=o[5],t[e+6]=o[6],t[e+7]=o[7],t[e+8]=o[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Qt;function fv(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pM(){const n=dl("canvas");return n.style.display="block",n}const cp={};function tu(n){n in cp||(cp[n]=!0,console.warn(n))}function mM(n,t,e){return new Promise(function(o,i){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:o()}}setTimeout(s,e)})}function gM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const up=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hp=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[Vo]:{transfer:vu,primaries:xu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[te]:{transfer:Re,primaries:xu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qu]:{transfer:vu,primaries:Mu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(hp),fromReference:n=>n.applyMatrix3(up)},[Rd]:{transfer:Re,primaries:Mu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(hp),fromReference:n=>n.applyMatrix3(up).convertLinearToSRGB()}},xM=new Set([Vo,Qu]),he={enabled:!0,_workingColorSpace:Vo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const o=da[t].toReference,i=da[e].fromReference;return i(o(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return da[n].primaries},getTransfer:function(n){return n===nn?vu:da[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(da[t].luminanceCoefficients)}};function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _h(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zs;class MM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=dl("canvas")),Zs.width=t.width,Zs.height=t.height;const o=Zs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),e=Zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dl("canvas");e.width=t.width,e.height=t.height;const o=e.getContext("2d");o.drawImage(t,0,0,t.width,t.height);const i=o.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wr(s[r]/255)*255;return o.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let o=0;o<e.length;o++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[o]=Math.floor(Wr(e[o]/255)*255):e[o]=Wr(e[o]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class dv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const o={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Sh(i[r].image)):s.push(Sh(i[r]))}else s=Sh(i);o.url=s}return e||(t.images[this.uuid]=o),o}}function Sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?MM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;class Sn extends ua{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,o=Bo,i=Bo,s=Ge,r=Qo,a=lo,l=Ho,c=Sn.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=ti(),this.name="",this.source=new dv(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=o,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const o={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),e||(t.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case We:t.x=t.x-Math.floor(t.x);break;case Bo:t.x=t.x<0?0:1;break;case sf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case We:t.y=t.y-Math.floor(t.y);break;case Bo:t.y=t.y<0?0:1;break;case sf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=tv;Sn.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,o=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=o,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,o,i){return this.x=t,this.y=e,this.z=o,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,o=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*o+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*o+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*o+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*o+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,o,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,w=(d+1)/2,E=(g+1)/2,S=(u+f)/4,_=(h+v)/4,y=(p+m)/4;return x>w&&x>E?x<.01?(o=0,i=.707106781,s=.707106781):(o=Math.sqrt(x),i=S/o,s=_/o):w>E?w<.01?(o=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),o=S/i,s=y/i):E<.01?(o=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),o=_/s,i=y/s),this.set(o,i,s,e),this}let b=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(t,Math.min(e,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this.z=t.z+(e.z-t.z)*o,this.w=t.w+(e.w-t.w)*o,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _M extends ua{constructor(t=1,e=1,o={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},o);const s=new Sn(i,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.colorSpace);s.flipY=!1,s.generateMipmaps=o.generateMipmaps,s.internalFormat=o.internalFormat,this.textures=[];const r=o.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this.depthTexture=o.depthTexture,this.samples=o.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,o=1){if(this.width!==t||this.height!==e||this.depth!==o){this.width=t,this.height=e,this.depth=o;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=o;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let o=0,i=t.textures.length;o<i;o++)this.textures[o]=t.textures[o].clone(),this.textures[o].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dv(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends _M{constructor(t=1,e=1,o={}){super(t,e,o),this.isWebGLRenderTarget=!0}}class pv extends Sn{constructor(t=null,e=1,o=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:o,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Sn{constructor(t=null,e=1,o=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:o,depth:i},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(t=0,e=0,o=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=o,this._w=i}static slerpFlat(t,e,o,i,s,r,a){let l=o[i+0],c=o[i+1],u=o[i+2],h=o[i+3];const f=s[r+0],d=s[r+1],p=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==p){let m=1-a;const g=l*f+c*d+u*p+h*v,b=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,g*b);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}const w=a*b;if(l=l*m+f*w,c=c*m+d*w,u=u*m+p*w,h=h*m+v*w,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,o,i,s,r){const a=o[i],l=o[i+1],c=o[i+2],u=o[i+3],h=s[r],f=s[r+1],d=s[r+2],p=s[r+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,o,i){return this._x=t,this._y=e,this._z=o,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const o=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(o/2),u=a(i/2),h=a(s/2),f=l(o/2),d=l(i/2),p=l(s/2);switch(r){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const o=e/2,i=Math.sin(o);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,o=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=o+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(o>a&&o>h){const d=2*Math.sqrt(1+o-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-o-h);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-o-a);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let o=t.dot(e)+1;return o<Number.EPSILON?(o=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=o):(this._x=0,this._y=-t.z,this._z=t.y,this._w=o)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=o),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const o=this.angleTo(t);if(o===0)return this;const i=Math.min(1,e/o);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const o=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=o*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-o*c,this._z=s*u+r*c+o*l-i*a,this._w=r*u-o*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const o=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+o*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=o,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*o+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=r*h+this._w*f,this._x=o*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,o){return this.copy(t).slerp(e,o)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),o=Math.random(),i=Math.sqrt(1-o),s=Math.sqrt(o);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,o=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=o}set(t,e,o){return o===void 0&&(o=this.z),this.x=t,this.y=e,this.z=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,o=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*o+s[6]*i,this.y=s[1]*e+s[4]*o+s[7]*i,this.z=s[2]*e+s[5]*o+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,o=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*o+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*o+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*o+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*o+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,o=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*o),u=2*(a*e-s*i),h=2*(s*o-r*e);return this.x=e+l*c+r*h-a*u,this.y=o+l*u+a*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,o=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*o+s[8]*i,this.y=s[1]*e+s[5]*o+s[9]*i,this.z=s[2]*e+s[6]*o+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(t,Math.min(e,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,o){return this.x=t.x+(e.x-t.x)*o,this.y=t.y+(e.y-t.y)*o,this.z=t.z+(e.z-t.z)*o,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const o=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-o*l,this.z=o*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const o=t.dot(this)/e;return this.copy(t).multiplyScalar(o)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const o=this.dot(t)/e;return Math.acos(Ze(o,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,o=this.y-t.y,i=this.z-t.z;return e*e+o*o+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,o){const i=Math.sin(e)*t;return this.x=i*Math.sin(o),this.y=Math.cos(e)*t,this.z=i*Math.cos(o),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,o){return this.x=t*Math.sin(e),this.y=o,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),o=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=o,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,o=Math.sqrt(1-e*e);return this.x=o*Math.cos(t),this.y=e,this.z=o*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new P,fp=new He;class Ln{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,o=t.length;e<o;e+=3)this.expandByPoint(Co.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,o=t.count;e<o;e++)this.expandByPoint(Co.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,o=t.length;e<o;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const o=Co.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(o),this.max.copy(t).add(o),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const o=t.geometry;if(o!==void 0){const s=o.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Co):Co.fromBufferAttribute(s,r),Co.applyMatrix4(t.matrixWorld),this.expandByPoint(Co);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),Ll.copy(o.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Co),Co.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,o;return t.normal.x>0?(e=t.normal.x*this.min.x,o=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,o=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,o+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,o+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,o+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,o+=t.normal.z*this.min.z),e<=-t.constant&&o>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Dl.subVectors(this.max,pa),Ks.subVectors(t.a,pa),js.subVectors(t.b,pa),Js.subVectors(t.c,pa),Ei.subVectors(js,Ks),Ai.subVectors(Js,js),ds.subVectors(Ks,Js);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-ds.z,ds.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,ds.z,0,-ds.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-ds.y,ds.x,0];return!Th(e,Ks,js,Js,Dl)||(e=[1,0,0,0,1,0,0,0,1],!Th(e,Ks,js,Js,Dl))?!1:(Nl.crossVectors(Ei,Ai),e=[Nl.x,Nl.y,Nl.z],Th(e,Ks,js,Js,Dl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Co).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Co).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new P,new P,new P,new P,new P,new P,new P,new P],Co=new P,Ll=new Ln,Ks=new P,js=new P,Js=new P,Ei=new P,Ai=new P,ds=new P,pa=new P,Dl=new P,Nl=new P,ps=new P;function Th(n,t,e,o,i){for(let s=0,r=n.length-3;s<=r;s+=3){ps.fromArray(n,s);const a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),u=o.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bM=new Ln,ma=new P,Eh=new P;class Gs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const o=this.center;e!==void 0?o.copy(e):bM.setFromPoints(t).getCenter(o);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,o.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const o=this.center.distanceToSquared(t);return e.copy(t),o>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);const e=ma.lengthSq();if(e>this.radius*this.radius){const o=Math.sqrt(e),i=(o-this.radius)*.5;this.center.addScaledVector(ma,i/o),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(Eh)),this.expandByPoint(ma.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new P,Ah=new P,Ul=new P,Ri=new P,Rh=new P,Fl=new P,Ph=new P;class Cd{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const o=e.dot(this.direction);return o<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,o,i){Ah.copy(t).add(e).multiplyScalar(.5),Ul.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Ah);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Ul),a=Ri.dot(this.direction),l=-Ri.dot(Ul),c=Ri.lengthSq(),u=Math.abs(1-r*r);let h,f,d,p;if(u>0)if(h=r*l-a,f=r*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const v=1/u;h*=v,f*=v,d=h*(h+r*f+2*a)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-r*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(r*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+a)),d=-h*h+f*(f+2*l)+c;return o&&o.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ah).addScaledVector(Ul,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const o=ii.dot(this.direction),i=ii.dot(ii)-o*o,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=o-r,l=o+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(t.normal)+t.constant)/e;return o>=0?o:null}intersectPlane(t,e){const o=this.distanceToPlane(t);return o===null?null:this.at(o,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let o,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(o=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(o=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),o>r||s>i||((s>o||isNaN(o))&&(o=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),o>l||a>i)||((a>o||o!==o)&&(o=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(o>=0?o:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,o,i,s){Rh.subVectors(e,t),Fl.subVectors(o,t),Ph.crossVectors(Rh,Fl);let r=this.direction.dot(Ph),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(Fl.crossVectors(Ri,Fl));if(l<0)return null;const c=a*this.direction.dot(Rh.cross(Ri));if(c<0||l+c>r)return null;const u=-a*Ri.dot(Ph);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(t,e,o,i,s,r,a,l,c,u,h,f,d,p,v,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,o,i,s,r,a,l,c,u,h,f,d,p,v,m)}set(t,e,o,i,s,r,a,l,c,u,h,f,d,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=o,g[12]=i,g[1]=s,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(t){const e=this.elements,o=t.elements;return e[0]=o[0],e[1]=o[1],e[2]=o[2],e[3]=o[3],e[4]=o[4],e[5]=o[5],e[6]=o[6],e[7]=o[7],e[8]=o[8],e[9]=o[9],e[10]=o[10],e[11]=o[11],e[12]=o[12],e[13]=o[13],e[14]=o[14],e[15]=o[15],this}copyPosition(t){const e=this.elements,o=t.elements;return e[12]=o[12],e[13]=o[13],e[14]=o[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,o){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(t,e,o){return this.set(t.x,e.x,o.x,0,t.y,e.y,o.y,0,t.z,e.z,o.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,o=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),s=1/Qs.setFromMatrixColumn(t,1).length(),r=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=o[0]*i,e[1]=o[1]*i,e[2]=o[2]*i,e[3]=0,e[4]=o[4]*s,e[5]=o[5]*s,e[6]=o[6]*s,e[7]=0,e[8]=o[8]*r,e[9]=o[9]*r,e[10]=o[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,o=t.x,i=t.y,s=t.z,r=Math.cos(o),a=Math.sin(o),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=r*u,d=r*h,p=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,p=c*u,v=c*h;e[0]=f+v*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=d*a-p,e[6]=v+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,p=c*u,v=c*h;e[0]=f-v*a,e[4]=-r*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*u,e[9]=v-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*u,d=r*h,p=a*u,v=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,p=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=p*h+d,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-v*h}else if(t.order==="XZY"){const f=r*l,d=r*c,p=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=r*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TM,t,EM)}lookAt(t,e,o){const i=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Pi.crossVectors(o,Zn),Pi.lengthSq()===0&&(Math.abs(o.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Pi.crossVectors(o,Zn)),Pi.normalize(),Ol.crossVectors(Zn,Pi),i[0]=Pi.x,i[4]=Ol.x,i[8]=Zn.x,i[1]=Pi.y,i[5]=Ol.y,i[9]=Zn.y,i[2]=Pi.z,i[6]=Ol.z,i[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const o=t.elements,i=e.elements,s=this.elements,r=o[0],a=o[4],l=o[8],c=o[12],u=o[1],h=o[5],f=o[9],d=o[13],p=o[2],v=o[6],m=o[10],g=o[14],b=o[3],x=o[7],w=o[11],E=o[15],S=i[0],_=i[4],y=i[8],A=i[12],M=i[1],T=i[5],R=i[9],L=i[13],U=i[2],z=i[6],O=i[10],B=i[14],N=i[3],H=i[7],G=i[11],$=i[15];return s[0]=r*S+a*M+l*U+c*N,s[4]=r*_+a*T+l*z+c*H,s[8]=r*y+a*R+l*O+c*G,s[12]=r*A+a*L+l*B+c*$,s[1]=u*S+h*M+f*U+d*N,s[5]=u*_+h*T+f*z+d*H,s[9]=u*y+h*R+f*O+d*G,s[13]=u*A+h*L+f*B+d*$,s[2]=p*S+v*M+m*U+g*N,s[6]=p*_+v*T+m*z+g*H,s[10]=p*y+v*R+m*O+g*G,s[14]=p*A+v*L+m*B+g*$,s[3]=b*S+x*M+w*U+E*N,s[7]=b*_+x*T+w*z+E*H,s[11]=b*y+x*R+w*O+E*G,s[15]=b*A+x*L+w*B+E*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],o=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],v=t[7],m=t[11],g=t[15];return p*(+s*l*h-i*c*h-s*a*f+o*c*f+i*a*d-o*l*d)+v*(+e*l*d-e*c*f+s*r*f-i*r*d+i*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*r*h+o*r*d+s*a*u-o*c*u)+g*(-i*a*u-e*l*h+e*a*f+i*r*h-o*r*f+o*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,o){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=o),this}invert(){const t=this.elements,e=t[0],o=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],b=h*m*c-v*f*c+v*l*d-a*m*d-h*l*g+a*f*g,x=p*f*c-u*m*c-p*l*d+r*m*d+u*l*g-r*f*g,w=u*v*c-p*h*c+p*a*d-r*v*d-u*a*g+r*h*g,E=p*h*l-u*v*l-p*a*f+r*v*f+u*a*m-r*h*m,S=e*b+o*x+i*w+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/S;return t[0]=b*_,t[1]=(v*f*s-h*m*s-v*i*d+o*m*d+h*i*g-o*f*g)*_,t[2]=(a*m*s-v*l*s+v*i*c-o*m*c-a*i*g+o*l*g)*_,t[3]=(h*l*s-a*f*s-h*i*c+o*f*c+a*i*d-o*l*d)*_,t[4]=x*_,t[5]=(u*m*s-p*f*s+p*i*d-e*m*d-u*i*g+e*f*g)*_,t[6]=(p*l*s-r*m*s-p*i*c+e*m*c+r*i*g-e*l*g)*_,t[7]=(r*f*s-u*l*s+u*i*c-e*f*c-r*i*d+e*l*d)*_,t[8]=w*_,t[9]=(p*h*s-u*v*s-p*o*d+e*v*d+u*o*g-e*h*g)*_,t[10]=(r*v*s-p*a*s+p*o*c-e*v*c-r*o*g+e*a*g)*_,t[11]=(u*a*s-r*h*s-u*o*c+e*h*c+r*o*d-e*a*d)*_,t[12]=E*_,t[13]=(u*v*i-p*h*i+p*o*f-e*v*f-u*o*m+e*h*m)*_,t[14]=(p*a*i-r*v*i-p*o*l+e*v*l+r*o*m-e*a*m)*_,t[15]=(r*h*i-u*a*i+u*o*l-e*h*l-r*o*f+e*a*f)*_,this}scale(t){const e=this.elements,o=t.x,i=t.y,s=t.z;return e[0]*=o,e[4]*=i,e[8]*=s,e[1]*=o,e[5]*=i,e[9]*=s,e[2]*=o,e[6]*=i,e[10]*=s,e[3]*=o,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],o=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,o,i))}makeTranslation(t,e,o){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,o,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),o=Math.sin(t);return this.set(1,0,0,0,0,e,-o,0,0,o,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),o=Math.sin(t);return this.set(e,0,o,0,0,1,0,0,-o,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),o=Math.sin(t);return this.set(e,-o,0,0,o,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const o=Math.cos(e),i=Math.sin(e),s=1-o,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+o,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+o,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+o,0,0,0,0,1),this}makeScale(t,e,o){return this.set(t,0,0,0,0,e,0,0,0,0,o,0,0,0,0,1),this}makeShear(t,e,o,i,s,r){return this.set(1,o,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,o){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,h=a+a,f=s*c,d=s*u,p=s*h,v=r*u,m=r*h,g=a*h,b=l*c,x=l*u,w=l*h,E=o.x,S=o.y,_=o.z;return i[0]=(1-(v+g))*E,i[1]=(d+w)*E,i[2]=(p-x)*E,i[3]=0,i[4]=(d-w)*S,i[5]=(1-(f+g))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(p+x)*_,i[9]=(m-b)*_,i[10]=(1-(f+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,o){const i=this.elements;let s=Qs.set(i[0],i[1],i[2]).length();const r=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Io.copy(this);const c=1/s,u=1/r,h=1/a;return Io.elements[0]*=c,Io.elements[1]*=c,Io.elements[2]*=c,Io.elements[4]*=u,Io.elements[5]*=u,Io.elements[6]*=u,Io.elements[8]*=h,Io.elements[9]*=h,Io.elements[10]*=h,e.setFromRotationMatrix(Io),o.x=s,o.y=r,o.z=a,this}makePerspective(t,e,o,i,s,r,a=yi){const l=this.elements,c=2*s/(e-t),u=2*s/(o-i),h=(e+t)/(e-t),f=(o+i)/(o-i);let d,p;if(a===yi)d=-(r+s)/(r-s),p=-2*r*s/(r-s);else if(a===yu)d=-r/(r-s),p=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,o,i,s,r,a=yi){const l=this.elements,c=1/(e-t),u=1/(o-i),h=1/(r-s),f=(e+t)*c,d=(o+i)*u;let p,v;if(a===yi)p=(r+s)*h,v=-2*h;else if(a===yu)p=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,o=t.elements;for(let i=0;i<16;i++)if(e[i]!==o[i])return!1;return!0}fromArray(t,e=0){for(let o=0;o<16;o++)this.elements[o]=t[o+e];return this}toArray(t=[],e=0){const o=this.elements;return t[e]=o[0],t[e+1]=o[1],t[e+2]=o[2],t[e+3]=o[3],t[e+4]=o[4],t[e+5]=o[5],t[e+6]=o[6],t[e+7]=o[7],t[e+8]=o[8],t[e+9]=o[9],t[e+10]=o[10],t[e+11]=o[11],t[e+12]=o[12],t[e+13]=o[13],t[e+14]=o[14],t[e+15]=o[15],t}}const Qs=new P,Io=new It,TM=new P(0,0,0),EM=new P(1,1,1),Pi=new P,Ol=new P,Zn=new P,dp=new It,pp=new He;class Xn{constructor(t=0,e=0,o=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=o,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,o,i=this._order){return this._x=t,this._y=e,this._z=o,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,o=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,o===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,o){return dp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dp,e,o)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pp.setFromEuler(this),this.setFromQuaternion(pp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const mp=new P,tr=new He,si=new It,zl=new P,ga=new P,RM=new P,PM=new He,gp=new P(1,0,0),vp=new P(0,1,0),xp=new P(0,0,1),Mp={type:"added"},CM={type:"removed"},er={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Ie extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new P,e=new Xn,o=new He,i=new P(1,1,1);function s(){o.setFromEuler(e,!1)}function r(){e.setFromQuaternion(o,void 0,!1)}e._onChange(s),o._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Qt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(gp,t)}rotateY(t){return this.rotateOnAxis(vp,t)}rotateZ(t){return this.rotateOnAxis(xp,t)}translateOnAxis(t,e){return mp.copy(t).applyQuaternion(this.quaternion),this.position.add(mp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gp,t)}translateY(t){return this.translateOnAxis(vp,t)}translateZ(t){return this.translateOnAxis(xp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,o){t.isVector3?zl.copy(t):zl.set(t,e,o);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ga,zl,this.up):si.lookAt(zl,ga,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(si),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mp),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(CM),Ch.child=t,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mp),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let o=0,i=this.children.length;o<i;o++){const r=this.children[o].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,o=[]){this[t]===e&&o.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,o);return o}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,PM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let o=0,i=e.length;o<i;o++)e[o].updateMatrixWorld(t)}updateWorldMatrix(t,e){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",o={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),f=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(o.geometries=a),l.length>0&&(o.materials=l),c.length>0&&(o.textures=c),u.length>0&&(o.images=u),h.length>0&&(o.shapes=h),f.length>0&&(o.skeletons=f),d.length>0&&(o.animations=d),p.length>0&&(o.nodes=p)}return o.object=i,o;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let o=0;o<t.children.length;o++){const i=t.children[o];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lo=new P,ri=new P,Ih=new P,ai=new P,nr=new P,or=new P,yp=new P,Lh=new P,Dh=new P,Nh=new P,Uh=new fe,Fh=new fe,Oh=new fe;class So{constructor(t=new P,e=new P,o=new P){this.a=t,this.b=e,this.c=o}static getNormal(t,e,o,i){i.subVectors(o,e),Lo.subVectors(t,e),i.cross(Lo);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,o,i,s){Lo.subVectors(i,e),ri.subVectors(o,e),Ih.subVectors(t,e);const r=Lo.dot(Lo),a=Lo.dot(ri),l=Lo.dot(Ih),c=ri.dot(ri),u=ri.dot(Ih),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,p=(r*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,o,i){return this.getBarycoord(t,e,o,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,o,i,s,r,a,l){return this.getBarycoord(t,e,o,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(r,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,o,i,s,r){return Uh.setScalar(0),Fh.setScalar(0),Oh.setScalar(0),Uh.fromBufferAttribute(t,e),Fh.fromBufferAttribute(t,o),Oh.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Uh,s.x),r.addScaledVector(Fh,s.y),r.addScaledVector(Oh,s.z),r}static isFrontFacing(t,e,o,i){return Lo.subVectors(o,e),ri.subVectors(t,e),Lo.cross(ri).dot(i)<0}set(t,e,o){return this.a.copy(t),this.b.copy(e),this.c.copy(o),this}setFromPointsAndIndices(t,e,o,i){return this.a.copy(t[e]),this.b.copy(t[o]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,o,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,o),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Lo.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Lo.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return So.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return So.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,o,i,s){return So.getInterpolation(t,this.a,this.b,this.c,e,o,i,s)}containsPoint(t){return So.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return So.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const o=this.a,i=this.b,s=this.c;let r,a;nr.subVectors(i,o),or.subVectors(s,o),Lh.subVectors(t,o);const l=nr.dot(Lh),c=or.dot(Lh);if(l<=0&&c<=0)return e.copy(o);Dh.subVectors(t,i);const u=nr.dot(Dh),h=or.dot(Dh);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(o).addScaledVector(nr,r);Nh.subVectors(t,s);const d=nr.dot(Nh),p=or.dot(Nh);if(p>=0&&d<=p)return e.copy(s);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(o).addScaledVector(or,a);const m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return yp.subVectors(s,i),a=(h-u)/(h-u+(d-p)),e.copy(i).addScaledVector(yp,a);const g=1/(m+v+f);return r=v*g,a=f*g,e.copy(o).addScaledVector(nr,r).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function zh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class bt{constructor(t,e,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,o)}set(t,e,o){if(e===void 0&&o===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,o);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,o,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=o,he.toWorkingColorSpace(this,i),this}setHSL(t,e,o,i=he.workingColorSpace){if(t=Pd(t,1),e=Ze(e,0,1),o=Ze(o,0,1),e===0)this.r=this.g=this.b=o;else{const s=o<=.5?o*(1+e):o+e-o*e,r=2*o-s;this.r=zh(r,s,t+1/3),this.g=zh(r,s,t),this.b=zh(r,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=te){function o(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return o(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=te){const o=mv[t.toLowerCase()];return o!==void 0?this.setHex(o,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}copyLinearToSRGB(t){return this.r=_h(t.r),this.g=_h(t.g),this.b=_h(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=te){return he.fromWorkingColorSpace(Rn.copy(this),t),Math.round(Ze(Rn.r*255,0,255))*65536+Math.round(Ze(Rn.g*255,0,255))*256+Math.round(Ze(Rn.b*255,0,255))}getHexString(t=te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Rn.copy(this),e);const o=Rn.r,i=Rn.g,s=Rn.b,r=Math.max(o,i,s),a=Math.min(o,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case o:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-o)/h+2;break;case s:l=(o-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Rn.copy(this),e),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=te){he.fromWorkingColorSpace(Rn.copy(this),t);const e=Rn.r,o=Rn.g,i=Rn.b;return t!==te?`color(${t} ${e.toFixed(3)} ${o.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(o*255)},${Math.round(i*255)})`}offsetHSL(t,e,o){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+o)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,o){return this.r=t.r+(e.r-t.r)*o,this.g=t.g+(e.g-t.g)*o,this.b=t.b+(e.b-t.b)*o,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Bl);const o=Qa(Ci.h,Bl.h,e),i=Qa(Ci.s,Bl.s,e),s=Qa(Ci.l,Bl.l,e);return this.setHSL(o,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,o=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*o+s[6]*i,this.g=s[1]*e+s[4]*o+s[7]*i,this.b=s[2]*e+s[5]*o+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new bt;bt.NAMES=mv;let IM=0;class Hs extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Os,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y0,this.blendDst=Z0,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const o=t[e];if(o===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(o):i&&i.isVector3&&o&&o.isVector3?i.copy(o):this[e]=o}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const o={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(t).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(t).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(t).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(t).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(t).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(o.blending=this.blending),this.side!==bi&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==Y0&&(o.blendSrc=this.blendSrc),this.blendDst!==Z0&&(o.blendDst=this.blendDst),this.blendEquation!==Is&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(o.textures=s),r.length>0&&(o.images=r)}return o}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let o=null;if(e!==null){const i=e.length;o=new Array(i);for(let s=0;s!==i;++s)o[s]=e[s].clone()}return this.clippingPlanes=o,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vs extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=J1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gi=LM();function LM(){const n=new ArrayBuffer(4),t=new Float32Array(n),e=new Uint32Array(n),o=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(o[l]=0,o[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(o[l]=1024>>-c-14,o[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(o[l]=c+15<<10,o[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(o[l]=31744,o[l|256]=64512,i[l]=24,i[l|256]=24):(o[l]=31744,o[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:o,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function DM(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Ze(n,-65504,65504),gi.floatView[0]=n;const t=gi.uint32View[0],e=t>>23&511;return gi.baseTable[e]+((t&8388607)>>gi.shiftTable[e])}function NM(n){const t=n>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[t]+(n&1023)]+gi.exponentTable[t],gi.floatView[0]}const kl={toHalfFloat:DM,fromHalfFloat:NM},$e=new P,Gl=new st;class qt{constructor(t,e,o=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=o,this.usage=Lf,this.updateRanges=[],this.gpuType=ro,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,o){t*=this.itemSize,o*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[o+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,o=this.count;e<o;e++)Gl.fromBufferAttribute(this,e),Gl.applyMatrix3(t),this.setXY(e,Gl.x,Gl.y);else if(this.itemSize===3)for(let e=0,o=this.count;e<o;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,o=this.count;e<o;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,o=this.count;e<o;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,o=this.count;e<o;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let o=this.array[t*this.itemSize+e];return this.normalized&&(o=zo(o,this.array)),o}setComponent(t,e,o){return this.normalized&&(o=ye(o,this.array)),this.array[t*this.itemSize+e]=o,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zo(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zo(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zo(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,o){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array)),this.array[t+0]=e,this.array[t+1]=o,this}setXYZ(t,e,o,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=o,this.array[t+2]=i,this}setXYZW(t,e,o,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=o,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lf&&(t.usage=this.usage),t}}class gv extends qt{constructor(t,e,o){super(new Uint16Array(t),e,o)}}class vv extends qt{constructor(t,e,o){super(new Uint32Array(t),e,o)}}class Dt extends qt{constructor(t,e,o){super(new Float32Array(t),e,o)}}let UM=0;const fo=new It,Bh=new Ie,ir=new P,Kn=new Ln,va=new Ln,un=new P;class $t extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?vv:gv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,o=0){this.groups.push({start:t,count:e,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const s=new Qt().getNormalMatrix(t);o.applyNormalMatrix(s),o.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fo.makeRotationFromQuaternion(t),this.applyMatrix4(fo),this}rotateX(t){return fo.makeRotationX(t),this.applyMatrix4(fo),this}rotateY(t){return fo.makeRotationY(t),this.applyMatrix4(fo),this}rotateZ(t){return fo.makeRotationZ(t),this.applyMatrix4(fo),this}translate(t,e,o){return fo.makeTranslation(t,e,o),this.applyMatrix4(fo),this}scale(t,e,o){return fo.makeScale(t,e,o),this.applyMatrix4(fo),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=[];for(let o=0,i=t.length;o<i;o++){const s=t[o];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let o=0,i=e.length;o<i;o++){const s=e[o];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const o=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Kn.min,va.min),Kn.expandByPoint(un),un.addVectors(Kn.max,va.max),Kn.expandByPoint(un)):(Kn.expandByPoint(va.min),Kn.expandByPoint(va.max))}Kn.getCenter(o);let i=0;for(let s=0,r=t.count;s<r;s++)un.fromBufferAttribute(t,s),i=Math.max(i,o.distanceToSquared(un));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)un.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(t,c),un.add(ir)),i=Math.max(i,o.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*o.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<o.count;y++)a[y]=new P,l[y]=new P;const c=new P,u=new P,h=new P,f=new st,d=new st,p=new st,v=new P,m=new P;function g(y,A,M){c.fromBufferAttribute(o,y),u.fromBufferAttribute(o,A),h.fromBufferAttribute(o,M),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),p.sub(f);const T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(T),a[y].add(v),a[A].add(v),a[M].add(v),l[y].add(m),l[A].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,A=b.length;y<A;++y){const M=b[y],T=M.start,R=M.count;for(let L=T,U=T+R;L<U;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new P,w=new P,E=new P,S=new P;function _(y){E.fromBufferAttribute(i,y),S.copy(E);const A=a[y];x.copy(A),x.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(S,A);const T=w.dot(l[y])<0?-1:1;r.setXYZW(y,x.x,x.y,x.z,T)}for(let y=0,A=b.length;y<A;++y){const M=b[y],T=M.start,R=M.count;for(let L=T,U=T+R;L<U;L+=3)_(t.getX(L+0)),_(t.getX(L+1)),_(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new qt(new Float32Array(e.count*3),3),this.setAttribute("normal",o);else for(let f=0,d=o.count;f<d;f++)o.setXYZ(f,0,0,0);const i=new P,s=new P,r=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(o,p),l.fromBufferAttribute(o,v),c.fromBufferAttribute(o,m),a.add(u),l.add(u),c.add(u),o.setXYZ(p,a.x,a.y,a.z),o.setXYZ(v,l.x,l.y,l.z),o.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.setXYZ(f+0,u.x,u.y,u.z),o.setXYZ(f+1,u.x,u.y,u.z),o.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,o=t.count;e<o;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $t,o=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,o);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,o);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const o=this.attributes;for(const l in o){const c=o[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const o=t.index;o!==null&&this.setIndex(o.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wp=new It,ms=new Cd,Hl=new Gs,_p=new P,Vl=new P,Wl=new P,Xl=new P,kh=new P,$l=new P,Sp=new P,ql=new P;let lt=class extends Ie{constructor(t=new $t,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,o=Object.keys(e);if(o.length>0){const i=e[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const o=this.geometry,i=o.attributes.position,s=o.morphAttributes.position,r=o.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(kh.fromBufferAttribute(h,t),r?$l.addScaledVector(kh,u):$l.addScaledVector(kh.sub(e),u))}e.add($l)}return e}raycast(t,e){const o=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Hl.copy(o.boundingSphere),Hl.applyMatrix4(s),ms.copy(t.ray).recast(t.near),!(Hl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Hl,_p)===null||ms.origin.distanceToSquared(_p)>(t.far-t.near)**2))&&(wp.copy(s).invert(),ms.copy(t.ray).applyMatrix4(wp),!(o.boundingBox!==null&&ms.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,o){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=r[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,E=x;w<E;w+=3){const S=a.getX(w),_=a.getX(w+1),y=a.getX(w+2);i=Yl(this,g,t,o,c,u,h,S,_,y),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const b=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);i=Yl(this,r,t,o,c,u,h,b,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=r[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=b,E=x;w<E;w+=3){const S=w,_=w+1,y=w+2;i=Yl(this,g,t,o,c,u,h,S,_,y),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const b=m,x=m+1,w=m+2;i=Yl(this,r,t,o,c,u,h,b,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function FM(n,t,e,o,i,s,r,a){let l;if(t.side===on?l=o.intersectTriangle(r,s,i,!0,a):l=o.intersectTriangle(i,s,r,t.side===bi,a),l===null)return null;ql.copy(a),ql.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ql);return c<e.near||c>e.far?null:{distance:c,point:ql.clone(),object:n}}function Yl(n,t,e,o,i,s,r,a,l,c){n.getVertexPosition(a,Vl),n.getVertexPosition(l,Wl),n.getVertexPosition(c,Xl);const u=FM(n,t,e,o,Vl,Wl,Xl,Sp);if(u){const h=new P;So.getBarycoord(Sp,Vl,Wl,Xl,h),i&&(u.uv=So.getInterpolatedAttribute(i,a,l,c,h,new st)),s&&(u.uv1=So.getInterpolatedAttribute(s,a,l,c,h,new st)),r&&(u.normal=So.getInterpolatedAttribute(r,a,l,c,h,new P),u.normal.dot(o.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};So.getNormal(Vl,Wl,Xl,f.normal),u.face=f,u.barycoord=h}return u}class ee extends $t{constructor(t=1,e=1,o=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:o,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,o,e,t,r,s,0),p("z","y","x",1,-1,o,e,-t,r,s,1),p("x","z","y",1,1,t,o,e,i,r,2),p("x","z","y",1,-1,t,o,-e,i,r,3),p("x","y","z",1,-1,t,e,o,i,s,4),p("x","y","z",-1,-1,t,e,-o,i,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function p(v,m,g,b,x,w,E,S,_,y,A){const M=w/_,T=E/y,R=w/2,L=E/2,U=S/2,z=_+1,O=y+1;let B=0,N=0;const H=new P;for(let G=0;G<O;G++){const $=G*T-L;for(let Q=0;Q<z;Q++){const j=Q*M-R;H[v]=j*b,H[m]=$*x,H[g]=U,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),h.push(Q/_),h.push(1-G/y),B+=1}}for(let G=0;G<y;G++)for(let $=0;$<_;$++){const Q=f+$+z*G,j=f+$+z*(G+1),X=f+($+1)+z*(G+1),at=f+($+1)+z*G;l.push(Q,j,at),l.push(j,X,at),N+=6}a.addGroup(d,N,A),d+=N,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ra(n){const t={};for(const e in n){t[e]={};for(const o in n[e]){const i=n[e][o];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][o]=null):t[e][o]=i.clone():Array.isArray(i)?t[e][o]=i.slice():t[e][o]=i}}return t}function Nn(n){const t={};for(let e=0;e<n.length;e++){const o=ra(n[e]);for(const i in o)t[i]=o[i]}return t}function OM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xv(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Mv={clone:ra,merge:Nn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Se extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ra(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const o={};for(const i in this.extensions)this.extensions[i]===!0&&(o[i]=!0);return Object.keys(o).length>0&&(e.extensions=o),e}}class yv extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new P,bp=new st,Tp=new st;class yn extends yv{constructor(t=50,e=1,o=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=o,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,o){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,bp,Tp),e.subVectors(Tp,bp)}setViewOffset(t,e,o,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=o,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ja*.5*this.fov)/this.zoom,o=2*e,i=this.aspect*o,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*o/c,i*=r.width/l,o*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-o,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,rr=1;class wv extends Ie{constructor(t,e,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(sr,rr,t,e);i.layers=this.layers,this.add(i);const s=new yn(sr,rr,t,e);s.layers=this.layers,this.add(s);const r=new yn(sr,rr,t,e);r.layers=this.layers,this.add(r);const a=new yn(sr,rr,t,e);a.layers=this.layers,this.add(a);const l=new yn(sr,rr,t,e);l.layers=this.layers,this.add(l);const c=new yn(sr,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[o,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===yi)o.up.set(0,1,0),o.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yu)o.up.set(0,-1,0),o.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,t.setRenderTarget(o,0,i),t.render(e,s),t.setRenderTarget(o,1,i),t.render(e,r),t.setRenderTarget(o,2,i),t.render(e,a),t.setRenderTarget(o,3,i),t.render(e,l),t.setRenderTarget(o,4,i),t.render(e,c),o.texture.generateMipmaps=v,t.setRenderTarget(o,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,o.texture.needsPMREMUpdate=!0}}class _v extends Sn{constructor(t,e,o,i,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ea,super(t,e,o,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sv extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const o={width:t,height:t,depth:1},i=[o,o,o,o,o,o];this.texture=new _v(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ee(5,5,5),s=new Se({name:"CubemapFromEquirect",uniforms:ra(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:on,blending:es});s.uniforms.tEquirect.value=e;const r=new lt(i,s),a=e.minFilter;return e.minFilter===Qo&&(e.minFilter=Ge),new wv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,o,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,o,i);t.setRenderTarget(s)}}const Gh=new P,kM=new P,GM=new Qt;class Zi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,o,i){return this.normal.set(t,e,o),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,o){const i=Gh.subVectors(o,e).cross(kM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const o=t.delta(Gh),i=this.normal.dot(o);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(o,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),o=this.distanceToPoint(t.end);return e<0&&o>0||o<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const o=e||GM.getNormalMatrix(t),i=this.coplanarPoint(Gh).applyMatrix4(t),s=this.normal.applyMatrix3(o).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Gs,Zl=new P;class Ld{constructor(t=new Zi,e=new Zi,o=new Zi,i=new Zi,s=new Zi,r=new Zi){this.planes=[t,e,o,i,s,r]}set(t,e,o,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(o),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let o=0;o<6;o++)e[o].copy(t.planes[o]);return this}setFromProjectionMatrix(t,e=yi){const o=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],v=i[10],m=i[11],g=i[12],b=i[13],x=i[14],w=i[15];if(o[0].setComponents(l-s,f-c,m-d,w-g).normalize(),o[1].setComponents(l+s,f+c,m+d,w+g).normalize(),o[2].setComponents(l+r,f+u,m+p,w+b).normalize(),o[3].setComponents(l-r,f-u,m-p,w-b).normalize(),o[4].setComponents(l-a,f-h,m-v,w-x).normalize(),e===yi)o[5].setComponents(l+a,f+h,m+v,w+x).normalize();else if(e===yu)o[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,o=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(o)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let o=0;o<6;o++){const i=e[o];if(Zl.x=i.normal.x>0?t.max.x:t.min.x,Zl.y=i.normal.y>0?t.max.y:t.min.y,Zl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let o=0;o<6;o++)if(e[o].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let n=null,t=!1,e=null,o=null;function i(s,r){e(s,r),o=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(o=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(o),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function HM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function o(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],v=h[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class le extends $t{constructor(t=1,e=1,o=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:o,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(o),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],v=[],m=[];for(let g=0;g<u;g++){const b=g*f-r;for(let x=0;x<c;x++){const w=x*h-s;p.push(w,-b,0),v.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const x=b+c*g,w=b+c*(g+1),E=b+1+c*(g+1),S=b+1+c*g;d.push(x,w,S),d.push(w,E,S)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.widthSegments,t.heightSegments)}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ow=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:VM,alphahash_pars_fragment:WM,alphamap_fragment:XM,alphamap_pars_fragment:$M,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:ZM,aomap_pars_fragment:KM,batching_pars_vertex:jM,batching_vertex:JM,begin_vertex:QM,beginnormal_vertex:ty,bsdfs:ey,iridescence_fragment:ny,bumpmap_pars_fragment:oy,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:ay,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:hy,common:fy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:My,colorspace_pars_fragment:yy,envmap_fragment:wy,envmap_common_pars_fragment:_y,envmap_pars_fragment:Sy,envmap_pars_vertex:by,envmap_physical_pars_fragment:Uy,envmap_vertex:Ty,fog_vertex:Ey,fog_pars_vertex:Ay,fog_fragment:Ry,fog_pars_fragment:Py,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Iy,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Dy,lights_pars_begin:Ny,lights_toon_fragment:Fy,lights_toon_pars_fragment:Oy,lights_phong_fragment:zy,lights_phong_pars_fragment:By,lights_physical_fragment:ky,lights_physical_pars_fragment:Gy,lights_fragment_begin:Hy,lights_fragment_maps:Vy,lights_fragment_end:Wy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:Zy,map_pars_fragment:Ky,map_particle_fragment:jy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:tw,morphinstance_vertex:ew,morphcolor_vertex:nw,morphnormal_vertex:ow,morphtarget_pars_vertex:iw,morphtarget_vertex:sw,normal_fragment_begin:rw,normal_fragment_maps:aw,normal_pars_fragment:lw,normal_pars_vertex:cw,normal_vertex:uw,normalmap_pars_fragment:hw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:vw,premultiplied_alpha_fragment:xw,project_vertex:Mw,dithering_fragment:yw,dithering_pars_fragment:ww,roughnessmap_fragment:_w,roughnessmap_pars_fragment:Sw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Tw,shadowmap_vertex:Ew,shadowmask_pars_fragment:Aw,skinbase_vertex:Rw,skinning_pars_vertex:Pw,skinning_vertex:Cw,skinnormal_vertex:Iw,specularmap_fragment:Lw,specularmap_pars_fragment:Dw,tonemapping_fragment:Nw,tonemapping_pars_fragment:Uw,transmission_fragment:Fw,transmission_pars_fragment:Ow,uv_pars_fragment:zw,uv_pars_vertex:Bw,uv_vertex:kw,worldpos_vertex:Gw,background_vert:Hw,background_frag:Vw,backgroundCube_vert:Ww,backgroundCube_frag:Xw,cube_vert:$w,cube_frag:qw,depth_vert:Yw,depth_frag:Zw,distanceRGBA_vert:Kw,distanceRGBA_frag:jw,equirect_vert:Jw,equirect_frag:Qw,linedashed_vert:t_,linedashed_frag:e_,meshbasic_vert:n_,meshbasic_frag:o_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:a_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:u_,meshphong_frag:h_,meshphysical_vert:f_,meshphysical_frag:d_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:v_,shadow_vert:x_,shadow_frag:M_,sprite_vert:y_,sprite_frag:w_},Rt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Yo={basic:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Nn([Rt.points,Rt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Nn([Rt.common,Rt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Nn([Rt.sprite,Rt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Nn([Rt.lights,Rt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Yo.physical={uniforms:Nn([Yo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Kl={r:0,b:0,g:0},vs=new Xn,__=new It;function S_(n,t,e,o,i,s,r){const a=new bt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function p(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function v(b){let x=!1;const w=p(b);w===null?g(a,l):w&&w.isColor&&(g(w,1),x=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?o.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const w=p(x);w&&(w.isCubeTexture||w.mapping===Ju)?(u===void 0&&(u=new lt(new ee(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:ra(Yo.backgroundCube.uniforms),vertexShader:Yo.backgroundCube.vertexShader,fragmentShader:Yo.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vs.copy(x.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(vs)),u.material.toneMapped=he.getTransfer(w.colorSpace)!==Re,(h!==w||f!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new lt(new le(2,2),new Se({name:"BackgroundMaterial",uniforms:ra(Yo.background.uniforms),vertexShader:Yo.background.vertexShader,fragmentShader:Yo.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(w.colorSpace)!==Re,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,x){b.getRGB(Kl,xv(n)),o.buffers.color.setClear(Kl.r,Kl.g,Kl.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(a,l)},render:v,addToRenderList:m}}function b_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),o={},i=f(null);let s=i,r=!1;function a(M,T,R,L,U){let z=!1;const O=h(L,R,T);s!==O&&(s=O,c(s.object)),z=d(M,L,R,U),z&&p(M,L,R,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,w(M,T,R,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,T,R){const L=R.wireframe===!0;let U=o[M.id];U===void 0&&(U={},o[M.id]=U);let z=U[T.id];z===void 0&&(z={},U[T.id]=z);let O=z[L];return O===void 0&&(O=f(l()),z[L]=O),O}function f(M){const T=[],R=[],L=[];for(let U=0;U<e;U++)T[U]=0,R[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,T,R,L){const U=s.attributes,z=T.attributes;let O=0;const B=R.getAttributes();for(const N in B)if(B[N].location>=0){const G=U[N];let $=z[N];if($===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),G===void 0||G.attribute!==$||$&&G.data!==$.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function p(M,T,R,L){const U={},z=T.attributes;let O=0;const B=R.getAttributes();for(const N in B)if(B[N].location>=0){let G=z[N];G===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(G=M.instanceColor));const $={};$.attribute=G,G&&G.data&&($.data=G.data),U[N]=$,O++}s.attributes=U,s.attributesNum=O,s.index=L}function v(){const M=s.newAttributes;for(let T=0,R=M.length;T<R;T++)M[T]=0}function m(M){g(M,0)}function g(M,T){const R=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;R[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),U[M]!==T&&(n.vertexAttribDivisor(M,T),U[M]=T)}function b(){const M=s.newAttributes,T=s.enabledAttributes;for(let R=0,L=T.length;R<L;R++)T[R]!==M[R]&&(n.disableVertexAttribArray(R),T[R]=0)}function x(M,T,R,L,U,z,O){O===!0?n.vertexAttribIPointer(M,T,R,U,z):n.vertexAttribPointer(M,T,R,L,U,z)}function w(M,T,R,L){v();const U=L.attributes,z=R.getAttributes(),O=T.defaultAttributeValues;for(const B in z){const N=z[B];if(N.location>=0){let H=U[B];if(H===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const G=H.normalized,$=H.itemSize,Q=t.get(H);if(Q===void 0)continue;const j=Q.buffer,X=Q.type,at=Q.bytesPerElement,rt=X===n.INT||X===n.UNSIGNED_INT||H.gpuType===wd;if(H.isInterleavedBufferAttribute){const ft=H.data,et=ft.stride,q=H.offset;if(ft.isInstancedInterleavedBuffer){for(let ct=0;ct<N.locationSize;ct++)g(N.location+ct,ft.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ct=0;ct<N.locationSize;ct++)m(N.location+ct);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ct=0;ct<N.locationSize;ct++)x(N.location+ct,$/N.locationSize,X,G,et*at,(q+$/N.locationSize*ct)*at,rt)}else{if(H.isInstancedBufferAttribute){for(let ft=0;ft<N.locationSize;ft++)g(N.location+ft,H.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ft=0;ft<N.locationSize;ft++)m(N.location+ft);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ft=0;ft<N.locationSize;ft++)x(N.location+ft,$/N.locationSize,X,G,$*at,$/N.locationSize*ft*at,rt)}}else if(O!==void 0){const G=O[B];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(N.location,G);break;case 3:n.vertexAttrib3fv(N.location,G);break;case 4:n.vertexAttrib4fv(N.location,G);break;default:n.vertexAttrib1fv(N.location,G)}}}}b()}function E(){y();for(const M in o){const T=o[M];for(const R in T){const L=T[R];for(const U in L)u(L[U].object),delete L[U];delete T[R]}delete o[M]}}function S(M){if(o[M.id]===void 0)return;const T=o[M.id];for(const R in T){const L=T[R];for(const U in L)u(L[U].object),delete L[U];delete T[R]}delete o[M.id]}function _(M){for(const T in o){const R=o[T];if(R[M.id]===void 0)continue;const L=R[M.id];for(const U in L)u(L[U].object),delete L[U];delete R[M.id]}}function y(){A(),r=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:y,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function T_(n,t,e){let o;function i(c){o=c}function s(c,u){n.drawArrays(o,c,u),e.update(u,o,1)}function r(c,u,h){h!==0&&(n.drawArraysInstanced(o,c,u,h),e.update(u,o,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];e.update(d,o,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)r(c[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(o,c,0,u,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];for(let v=0;v<f.length;v++)e.update(p,o,f[v])}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E_(n,t,e,o){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(_){return!(_!==lo&&o.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const y=_===ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ho&&o.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==ro&&!y)}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const _=t.get("EXT_clip_control");_.clipControlEXT(_.LOWER_LEFT_EXT,_.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:E,maxSamples:S}}function A_(n){const t=this;let e=null,o=0,i=!1,s=!1;const r=new Zi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||o!==0||i;return i=f,o=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const b=s?0:o,x=b*4;let w=g.clippingState||null;l.value=w,w=u(p,f,x,d);for(let E=0;E!==x;++E)w[E]=e[E];g.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=o>0),t.numPlanes=o,t.numIntersection=0}function u(h,f,d,p){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=d+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,w=d;x!==v;++x,w+=4)r.copy(h[x]).applyMatrix4(b,a),r.normal.toArray(m,w),m[w+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function R_(n){let t=new WeakMap;function e(r,a){return a===gu?r.mapping=ea:a===of&&(r.mapping=na),r}function o(r){if(r&&r.isTexture){const a=r.mapping;if(a===gu||a===of)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Sv(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:o,dispose:s}}class th extends yv{constructor(t=-1,e=1,o=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=o,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,o,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=o,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=o-t,r=o+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Cr=4,Ep=[.125,.215,.35,.446,.526,.582],Ls=20,Hh=new th,Ap=new bt;let Vh=null,Wh=0,Xh=0,$h=!1;const As=(1+Math.sqrt(5))/2,ar=1/As,Rp=[new P(-As,ar,0),new P(As,ar,0),new P(-ar,0,As),new P(ar,0,As),new P(0,As,-ar),new P(0,As,ar),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,o=.1,i=100){Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,o,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,Wh,Xh),this._renderer.xr.enabled=$h,t.scissorTest=!1,jl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ea||t.mapping===na?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=e||this._allocateTargets();return this._textureToCubeUV(t,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,o={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ao,format:lo,colorSpace:Vo,depthBuffer:!1},i=Pp(t,e,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(t,e,o);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=C_(s,t,e)}return i}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Hh)}_sceneToCubeUV(t,e,o,i){const a=new yn(90,1,e,o),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ap),u.toneMapping=Si,u.autoClear=!1;const d=new Vs({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),p=new lt(new ee,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Ap),v=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;jl(i,b*x,g>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const o=this._renderer,i=t.mapping===ea||t.mapping===na;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;jl(e,0,0,3*l,2*l),o.setRenderTarget(e),o.render(r,Hh)}_applyPMREM(t){const e=this._renderer,o=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rp[(i-s-1)%Rp.length];this._blur(t,s-1,s,r,a)}e.autoClear=o}_blur(t,e,o,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,o,i,"latitudinal",s),this._halfBlur(r,t,o,o,i,"longitudinal",s)}_halfBlur(t,e,o,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[o]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ls-1),v=s/p,m=isFinite(s)?1+Math.floor(u*v):Ls;m>Ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);const g=[];let b=0;for(let _=0;_<Ls;++_){const y=_/v,A=Math.exp(-y*y/2);g.push(A),_===0?b+=A:_<m&&(b+=2*A)}for(let _=0;_<g.length;_++)g[_]=g[_]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-o;const w=this._sizeLods[i],E=3*w*(i>x-Cr?i-x+Cr:0),S=4*(this._cubeSize-w);jl(e,E,S,3*w,2*w),l.setRenderTarget(e),l.render(h,Hh)}}function P_(n){const t=[],e=[],o=[];let i=n;const s=n-Cr+1+Ep.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>n-Cr?l=Ep[r-n+Cr-1]:r===0&&(l=0),o.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,v=3,m=2,g=1,b=new Float32Array(v*p*d),x=new Float32Array(m*p*d),w=new Float32Array(g*p*d);for(let S=0;S<d;S++){const _=S%3*2/3-1,y=S>2?0:-1,A=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];b.set(A,v*p*S),x.set(f,m*p*S);const M=[S,S,S,S,S,S];w.set(M,g*p*S)}const E=new $t;E.setAttribute("position",new qt(b,v)),E.setAttribute("uv",new qt(x,m)),E.setAttribute("faceIndex",new qt(w,g)),t.push(E),i>Cr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:o}}function Pp(n,t,e){const o=new Mn(n,t,e);return o.texture.mapping=Ju,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function jl(n,t,e,o,i){n.viewport.set(t,e,o,i),n.scissor.set(t,e,o,i)}function C_(n,t,e){const o=new Float32Array(Ls),i=new P(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Cp(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Ip(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I_(n){let t=new WeakMap,e=null;function o(a){if(a&&a.isTexture){const l=a.mapping,c=l===gu||l===of,u=l===ea||l===na;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new wu(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:o,dispose:r}}function L_(n){const t={};function e(o){if(t[o]!==void 0)return t[o];let i;switch(o){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(o)}return t[o]=i,i}return{has:function(o){return e(o)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(o){const i=e(o);return i===null&&tu("THREE.WebGLRenderer: "+o+" extension not supported."),i}}}function D_(n,t,e,o){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const v=f.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}f.removeEventListener("dispose",r),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),o.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const v=d[p];for(let m=0,g=v.length;m<g;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,p=h.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let x=0,w=b.length;x<w;x+=3){const E=b[x+0],S=b[x+1],_=b[x+2];f.push(E,S,S,_,_,E)}}else if(p!==void 0){const b=p.array;v=p.version;for(let x=0,w=b.length/3-1;x<w;x+=3){const E=x+0,S=x+1,_=x+2;f.push(E,S,S,_,_,E)}}else return;const m=new(fv(f)?vv:gv)(f,1);m.version=v;const g=s.get(h);g&&t.remove(g),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function N_(n,t,e){let o;function i(f){o=f}let s,r;function a(f){s=f.type,r=f.bytesPerElement}function l(f,d){n.drawElements(o,d,s,f*r),e.update(d,o,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(o,d,s,f*r,p),e.update(d,o,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,d,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,o,1)}function h(f,d,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/r,d[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(o,d,0,s,f,0,v,0,p);let g=0;for(let b=0;b<p;b++)g+=d[b];for(let b=0;b<v.length;b++)e.update(g,o,v[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function U_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function o(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:o}}function F_(n,t,e){const o=new WeakMap,i=new fe;function s(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=o.get(a);if(f===void 0||f.count!==h){let M=function(){y.dispose(),o.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let E=a.attributes.position.count*w,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const _=new Float32Array(E*S*4*h),y=new pv(_,E,S,h);y.type=ro,y.needsUpdate=!0;const A=w*4;for(let T=0;T<h;T++){const R=g[T],L=b[T],U=x[T],z=E*S*4*T;for(let O=0;O<R.count;O++){const B=O*A;p===!0&&(i.fromBufferAttribute(R,O),_[z+B+0]=i.x,_[z+B+1]=i.y,_[z+B+2]=i.z,_[z+B+3]=0),v===!0&&(i.fromBufferAttribute(L,O),_[z+B+4]=i.x,_[z+B+5]=i.y,_[z+B+6]=i.z,_[z+B+7]=0),m===!0&&(i.fromBufferAttribute(U,O),_[z+B+8]=i.x,_[z+B+9]=i.y,_[z+B+10]=i.z,_[z+B+11]=U.itemSize===4?i.w:1)}}f={count:h,texture:y,size:new st(E,S)},o.set(a,f),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function O_(n,t,e,o){let i=new WeakMap;function s(l){const c=o.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class Nd extends Sn{constructor(t,e,o,i,s,r,a,l,c,u=Vr){if(u!==Vr&&u!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&u===Vr&&(o=cs),o===void 0&&u===ia&&(o=oa),super(null,i,s,r,a,l,u,o,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tv=new Sn,Lp=new Nd(1,1),Ev=new pv,Av=new SM,Rv=new _v,Dp=[],Np=[],Up=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function ha(n,t,e){const o=n[0];if(o<=0||o>0)return n;const i=t*e;let s=Dp[i];if(s===void 0&&(s=new Float32Array(i),Dp[i]=s),t!==0){o.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function sn(n,t){if(n.length!==t.length)return!1;for(let e=0,o=n.length;e<o;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,o=t.length;e<o;e++)n[e]=t[e]}function eh(n,t){let e=Np[t];e===void 0&&(e=new Int32Array(t),Np[t]=e);for(let o=0;o!==t;++o)e[o]=n.allocateTextureUnit();return e}function z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function H_(n,t){const e=this.cache,o=t.elements;if(o===void 0){if(sn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,o))return;Op.set(o),n.uniformMatrix2fv(this.addr,!1,Op),rn(e,o)}}function V_(n,t){const e=this.cache,o=t.elements;if(o===void 0){if(sn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,o))return;Fp.set(o),n.uniformMatrix3fv(this.addr,!1,Fp),rn(e,o)}}function W_(n,t){const e=this.cache,o=t.elements;if(o===void 0){if(sn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,o))return;Up.set(o),n.uniformMatrix4fv(this.addr,!1,Up),rn(e,o)}}function X_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function Z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function Q_(n,t,e){const o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?(Lp.compareFunction=hv,s=Lp):s=Tv,e.setTexture2D(t||s,i)}function tS(n,t,e){const o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTexture3D(t||Av,i)}function eS(n,t,e){const o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTextureCube(t||Rv,i)}function nS(n,t,e){const o=this.cache,i=e.allocateTextureUnit();o[0]!==i&&(n.uniform1i(this.addr,i),o[0]=i),e.setTexture2DArray(t||Ev,i)}function oS(n){switch(n){case 5126:return z_;case 35664:return B_;case 35665:return k_;case 35666:return G_;case 35674:return H_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return $_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return Z_;case 36294:return K_;case 36295:return j_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return nS}}function iS(n,t){n.uniform1fv(this.addr,t)}function sS(n,t){const e=ha(t,this.size,2);n.uniform2fv(this.addr,e)}function rS(n,t){const e=ha(t,this.size,3);n.uniform3fv(this.addr,e)}function aS(n,t){const e=ha(t,this.size,4);n.uniform4fv(this.addr,e)}function lS(n,t){const e=ha(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function cS(n,t){const e=ha(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function uS(n,t){const e=ha(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hS(n,t){n.uniform1iv(this.addr,t)}function fS(n,t){n.uniform2iv(this.addr,t)}function dS(n,t){n.uniform3iv(this.addr,t)}function pS(n,t){n.uniform4iv(this.addr,t)}function mS(n,t){n.uniform1uiv(this.addr,t)}function gS(n,t){n.uniform2uiv(this.addr,t)}function vS(n,t){n.uniform3uiv(this.addr,t)}function xS(n,t){n.uniform4uiv(this.addr,t)}function MS(n,t,e){const o=this.cache,i=t.length,s=eh(e,i);sn(o,s)||(n.uniform1iv(this.addr,s),rn(o,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Tv,s[r])}function yS(n,t,e){const o=this.cache,i=t.length,s=eh(e,i);sn(o,s)||(n.uniform1iv(this.addr,s),rn(o,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Av,s[r])}function wS(n,t,e){const o=this.cache,i=t.length,s=eh(e,i);sn(o,s)||(n.uniform1iv(this.addr,s),rn(o,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Rv,s[r])}function _S(n,t,e){const o=this.cache,i=t.length,s=eh(e,i);sn(o,s)||(n.uniform1iv(this.addr,s),rn(o,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ev,s[r])}function SS(n){switch(n){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return hS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return _S}}class bS{constructor(t,e,o){this.id=t,this.addr=o,this.cache=[],this.type=e.type,this.setValue=oS(e.type)}}class TS{constructor(t,e,o){this.id=t,this.addr=o,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=SS(e.type)}}class ES{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,o){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],o)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function zp(n,t){n.seq.push(t),n.map[t.id]=t}function AS(n,t,e){const o=n.name,i=o.length;for(qh.lastIndex=0;;){const s=qh.exec(o),r=qh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){zp(e,c===void 0?new bS(a,n,t):new TS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new ES(a),zp(e,h)),e=h}}}class eu{constructor(t,e){this.seq=[],this.map={};const o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<o;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);AS(s,r,this)}}setValue(t,e,o,i){const s=this.map[e];s!==void 0&&s.setValue(t,o,i)}setOptional(t,e,o){const i=e[o];i!==void 0&&this.setValue(t,o,i)}static upload(t,e,o,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=o[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const o=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&o.push(r)}return o}}function Bp(n,t,e){const o=n.createShader(t);return n.shaderSource(o,e),n.compileShader(o),o}const RS=37297;let PS=0;function CS(n,t){const e=n.split(`
`),o=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;o.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return o.join(`
`)}function IS(n){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(n);let o;switch(t===e?o="":t===Mu&&e===xu?o="LinearDisplayP3ToLinearSRGB":t===xu&&e===Mu&&(o="LinearSRGBToLinearDisplayP3"),n){case Vo:case Qu:return[o,"LinearTransferOETF"];case te:case Rd:return[o,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[o,"LinearTransferOETF"]}}function kp(n,t,e){const o=n.getShaderParameter(t,n.COMPILE_STATUS),i=n.getShaderInfoLog(t).trim();if(o&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+CS(n.getShaderSource(t),r)}else return i}function LS(n,t){const e=IS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function DS(n,t){let e;switch(t){case Ux:e="Linear";break;case Fx:e="Reinhard";break;case Ox:e="Cineon";break;case Q1:e="ACESFilmic";break;case Bx:e="AgX";break;case kx:e="Neutral";break;case zx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jl=new P;function NS(){he.getLuminanceCoefficients(Jl);const n=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function FS(n){const t=[];for(const e in n){const o=n[e];o!==!1&&t.push("#define "+e+" "+o)}return t.join(`
`)}function OS(n,t){const e={},o=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<o;i++){const s=n.getActiveAttrib(t,i),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Ha(n){return n!==""}function Gp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(n){return n.replace(zS,kS)}const BS=new Map;function kS(n,t){let e=Jt[t];if(e===void 0){const o=BS.get(t);if(o!==void 0)e=Jt[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,o);else throw new Error("Can not resolve #include <"+t+">")}return Df(e)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(n){return n.replace(GS,HS)}function HS(n,t,e,o){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=o.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function VS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===K1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===j1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function WS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case na:t="ENVMAP_TYPE_CUBE";break;case Ju:t="ENVMAP_TYPE_CUBE_UV";break}return t}function XS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case na:t="ENVMAP_MODE_REFRACTION";break}return t}function $S(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case J1:t="ENVMAP_BLENDING_MULTIPLY";break;case Dx:t="ENVMAP_BLENDING_MIX";break;case Nx:t="ENVMAP_BLENDING_ADD";break}return t}function qS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,o=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:o,maxMip:e}}function YS(n,t,e,o){const i=n.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=VS(e),c=WS(e),u=XS(e),h=$S(e),f=qS(e),d=US(e),p=FS(s),v=i.createProgram();let m,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ha).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ha).join(`
`),g.length>0&&(g+=`
`)):(m=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),g=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Si?DS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,LS("linearToOutputTexel",e.outputColorSpace),NS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),r=Df(r),r=Gp(r,e),r=Hp(r,e),a=Df(a),a=Gp(a,e),a=Hp(a,e),r=Vp(r),a=Vp(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=b+m+r,w=b+g+a,E=Bp(i,i.VERTEX_SHADER,x),S=Bp(i,i.FRAGMENT_SHADER,w);i.attachShader(v,E),i.attachShader(v,S),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function _(T){if(n.debug.checkShaderErrors){const R=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(S).trim();let z=!0,O=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,v,E,S);else{const B=kp(i,E,"vertex"),N=kp(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+B+`
`+N)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||U==="")&&(O=!1);O&&(T.diagnostics={runnable:z,programLog:R,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:g}})}i.deleteShader(E),i.deleteShader(S),y=new eu(i,v),A=OS(i,v)}let y;this.getUniforms=function(){return y===void 0&&_(this),y};let A;this.getAttributes=function(){return A===void 0&&_(this),A};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,RS)),M},this.destroy=function(){o.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=PS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=S,this}let ZS=0;class KS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,o=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(o),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const o of e)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let o=e.get(t);return o===void 0&&(o=new Set,e.set(t,o)),o}_getShaderStage(t){const e=this.shaderCache;let o=e.get(t);return o===void 0&&(o=new jS(t),e.set(t,o)),o}}class jS{constructor(t){this.id=ZS++,this.code=t,this.usedTimes=0}}function JS(n,t,e,o,i,s,r){const a=new Id,l=new KS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,T,R,L,U){const z=L.fog,O=U.geometry,B=M.isMeshStandardMaterial?L.environment:null,N=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),H=N&&N.mapping===Ju?N.image.height:null,G=v[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=$!==void 0?$.length:0;let j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let X,at,rt,ft;if(G){const mn=Yo[G];X=mn.vertexShader,at=mn.fragmentShader}else X=M.vertexShader,at=M.fragmentShader,l.update(M),rt=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const et=n.getRenderTarget(),q=U.isInstancedMesh===!0,ct=U.isBatchedMesh===!0,vt=!!M.map,V=!!M.matcap,I=!!N,D=!!M.aoMap,tt=!!M.lightMap,nt=!!M.bumpMap,Z=!!M.normalMap,pt=!!M.displacementMap,Y=!!M.emissiveMap,F=!!M.metalnessMap,C=!!M.roughnessMap,K=M.anisotropy>0,ut=M.clearcoat>0,mt=M.dispersion>0,W=M.iridescence>0,xt=M.sheen>0,yt=M.transmission>0,St=K&&!!M.anisotropyMap,Ft=ut&&!!M.clearcoatMap,_t=ut&&!!M.clearcoatNormalMap,At=ut&&!!M.clearcoatRoughnessMap,Bt=W&&!!M.iridescenceMap,Xt=W&&!!M.iridescenceThicknessMap,Ut=xt&&!!M.sheenColorMap,Kt=xt&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,de=!!M.specularColorMap,J=!!M.specularIntensityMap,Pt=yt&&!!M.transmissionMap,gt=yt&&!!M.thicknessMap,Mt=!!M.gradientMap,Lt=!!M.alphaMap,Ct=M.alphaTest>0,oe=!!M.alphaHash,Ce=!!M.extensions;let pn=Si;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(pn=n.toneMapping);const se={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:at,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ct,batchingColor:ct&&U._colorsTexture!==null,instancing:q,instancingColor:q&&U.instanceColor!==null,instancingMorph:q&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Vo,alphaToCoverage:!!M.alphaToCoverage,map:vt,matcap:V,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:tt,bumpMap:nt,normalMap:Z,displacementMap:d&&pt,emissiveMap:Y,normalMapObjectSpace:Z&&M.normalMapType===Wx,normalMapTangentSpace:Z&&M.normalMapType===uv,metalnessMap:F,roughnessMap:C,anisotropy:K,anisotropyMap:St,clearcoat:ut,clearcoatMap:Ft,clearcoatNormalMap:_t,clearcoatRoughnessMap:At,dispersion:mt,iridescence:W,iridescenceMap:Bt,iridescenceThicknessMap:Xt,sheen:xt,sheenColorMap:Ut,sheenRoughnessMap:Kt,specularMap:Wt,specularColorMap:de,specularIntensityMap:J,transmission:yt,transmissionMap:Pt,thicknessMap:gt,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===Os&&M.alphaToCoverage===!1,alphaMap:Lt,alphaTest:Ct,alphaHash:oe,combine:M.combine,mapUv:vt&&m(M.map.channel),aoMapUv:D&&m(M.aoMap.channel),lightMapUv:tt&&m(M.lightMap.channel),bumpMapUv:nt&&m(M.bumpMap.channel),normalMapUv:Z&&m(M.normalMap.channel),displacementMapUv:pt&&m(M.displacementMap.channel),emissiveMapUv:Y&&m(M.emissiveMap.channel),metalnessMapUv:F&&m(M.metalnessMap.channel),roughnessMapUv:C&&m(M.roughnessMap.channel),anisotropyMapUv:St&&m(M.anisotropyMap.channel),clearcoatMapUv:Ft&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&m(M.sheenRoughnessMap.channel),specularMapUv:Wt&&m(M.specularMap.channel),specularColorMapUv:de&&m(M.specularColorMap.channel),specularIntensityMapUv:J&&m(M.specularIntensityMap.channel),transmissionMapUv:Pt&&m(M.transmissionMap.channel),thicknessMapUv:gt&&m(M.thicknessMap.channel),alphaMapUv:Lt&&m(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||K),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(vt||Lt),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:j,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:pn,decodeVideoTexture:vt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===Re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===we,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||ct)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function b(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)T.push(R),T.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(T,M),w(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function w(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function E(M){const T=v[M.type];let R;if(T){const L=Yo[T];R=Mv.clone(L.uniforms)}else R=M.uniforms;return R}function S(M,T){let R;for(let L=0,U=u.length;L<U;L++){const z=u[L];if(z.cacheKey===T){R=z,++R.usedTimes;break}}return R===void 0&&(R=new YS(n,T,M,s),u.push(R)),R}function _(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function y(M){l.remove(M)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:E,acquireProgram:S,releaseProgram:_,releaseShaderCache:y,programs:u,dispose:A}}function QS(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function o(r){n.delete(r)}function i(r,a,l){n.get(r)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:o,update:i,dispose:s}}function tb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $p(){const n=[];let t=0;const e=[],o=[],i=[];function s(){t=0,e.length=0,o.length=0,i.length=0}function r(h,f,d,p,v,m){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:v,group:m},n[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=v,g.group=m),t++,g}function a(h,f,d,p,v,m){const g=r(h,f,d,p,v,m);d.transmission>0?o.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(h,f,d,p,v,m){const g=r(h,f,d,p,v,m);d.transmission>0?o.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||tb),o.length>1&&o.sort(f||Xp),i.length>1&&i.sort(f||Xp)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:o,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function eb(){let n=new WeakMap;function t(o,i){const s=n.get(o);let r;return s===void 0?(r=new $p,n.set(o,[r])):i>=s.length?(r=new $p,s.push(r)):r=s[i],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function nb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new bt};break;case"SpotLight":e={position:new P,direction:new P,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function ob(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ib=0;function sb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rb(n){const t=new nb,e=ob(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)o.probe.push(new P);const i=new P,s=new It,r=new It;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)o.probe[A].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,b=0,x=0,w=0,E=0,S=0,_=0;c.sort(sb);for(let A=0,M=c.length;A<M;A++){const T=c[A],R=T.color,L=T.intensity,U=T.distance,z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=R.r*L,h+=R.g*L,f+=R.b*L;else if(T.isLightProbe){for(let O=0;O<9;O++)o.probe[O].addScaledVector(T.sh.coefficients[O],L);_++}else if(T.isDirectionalLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const B=T.shadow,N=e.get(T);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,o.directionalShadow[d]=N,o.directionalShadowMap[d]=z,o.directionalShadowMatrix[d]=T.shadow.matrix,b++}o.directional[d]=O,d++}else if(T.isSpotLight){const O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(R).multiplyScalar(L),O.distance=U,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,o.spot[v]=O;const B=T.shadow;if(T.map&&(o.spotLightMap[E]=T.map,E++,B.updateMatrices(T),T.castShadow&&S++),o.spotLightMatrix[v]=B.matrix,T.castShadow){const N=e.get(T);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,o.spotShadow[v]=N,o.spotShadowMap[v]=z,w++}v++}else if(T.isRectAreaLight){const O=t.get(T);O.color.copy(R).multiplyScalar(L),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),o.rectArea[m]=O,m++}else if(T.isPointLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const B=T.shadow,N=e.get(T);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,o.pointShadow[p]=N,o.pointShadowMap[p]=z,o.pointShadowMatrix[p]=T.shadow.matrix,x++}o.point[p]=O,p++}else if(T.isHemisphereLight){const O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(L),O.groundColor.copy(T.groundColor).multiplyScalar(L),o.hemi[g]=O,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Rt.LTC_FLOAT_1,o.rectAreaLTC2=Rt.LTC_FLOAT_2):(o.rectAreaLTC1=Rt.LTC_HALF_1,o.rectAreaLTC2=Rt.LTC_HALF_2)),o.ambient[0]=u,o.ambient[1]=h,o.ambient[2]=f;const y=o.hash;(y.directionalLength!==d||y.pointLength!==p||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==b||y.numPointShadows!==x||y.numSpotShadows!==w||y.numSpotMaps!==E||y.numLightProbes!==_)&&(o.directional.length=d,o.spot.length=v,o.rectArea.length=m,o.point.length=p,o.hemi.length=g,o.directionalShadow.length=b,o.directionalShadowMap.length=b,o.pointShadow.length=x,o.pointShadowMap.length=x,o.spotShadow.length=w,o.spotShadowMap.length=w,o.directionalShadowMatrix.length=b,o.pointShadowMatrix.length=x,o.spotLightMatrix.length=w+E-S,o.spotLightMap.length=E,o.numSpotLightShadowsWithMaps=S,o.numLightProbes=_,y.directionalLength=d,y.pointLength=p,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=b,y.numPointShadows=x,y.numSpotShadows=w,y.numSpotMaps=E,y.numLightProbes=_,o.version=ib++)}function l(c,u){let h=0,f=0,d=0,p=0,v=0;const m=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const x=c[g];if(x.isDirectionalLight){const w=o.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),h++}else if(x.isSpotLight){const w=o.spot[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const w=o.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),r.identity(),s.copy(x.matrixWorld),s.premultiply(m),r.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),p++}else if(x.isPointLight){const w=o.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const w=o.hemi[v];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:o}}function qp(n){const t=new rb(n),e=[],o=[];function i(u){c.camera=u,e.length=0,o.length=0}function s(u){e.push(u)}function r(u){o.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:o,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function ab(n){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new qp(n),t.set(i,[a])):s>=r.length?(a=new qp(n),r.push(a)):a=r[s],a}function o(){t=new WeakMap}return{get:e,dispose:o}}class lb extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cb extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fb(n,t,e){let o=new Ld;const i=new st,s=new st,r=new fe,a=new lb({depthPacking:Vx}),l=new cb,c={},u=e.maxTextureSize,h={[bi]:on,[on]:bi,[we]:we},f=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:ub,fragmentShader:hb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new $t;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K1;let g=this.type;this.render=function(S,_,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const A=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),R=n.state;R.setBlending(es),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=g!==di&&this.type===di,U=g===di&&this.type!==di;for(let z=0,O=S.length;z<O;z++){const B=S[z],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const H=N.getFrameExtents();if(i.multiply(H),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,N.mapSize.y=s.y)),N.map===null||L===!0||U===!0){const $=this.type!==di?{minFilter:Wn,magFilter:Wn}:{};N.map!==null&&N.map.dispose(),N.map=new Mn(i.x,i.y,$),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const G=N.getViewportCount();for(let $=0;$<G;$++){const Q=N.getViewport($);r.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),R.viewport(r),N.updateMatrices(B,$),o=N.getFrustum(),w(_,y,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===di&&b(N,y),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(A,M,T)};function b(S,_){const y=t.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,y,f,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,y,d,v,null)}function x(S,_,y,A){let M=null;const T=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=y.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const R=M.uuid,L=_.uuid;let U=c[R];U===void 0&&(U={},c[R]=U);let z=U[L];z===void 0&&(z=M.clone(),U[L]=z,_.addEventListener("dispose",E)),M=z}if(M.visible=_.visible,M.wireframe=_.wireframe,A===di?M.side=_.shadowSide!==null?_.shadowSide:_.side:M.side=_.shadowSide!==null?_.shadowSide:h[_.side],M.alphaMap=_.alphaMap,M.alphaTest=_.alphaTest,M.map=_.map,M.clipShadows=_.clipShadows,M.clippingPlanes=_.clippingPlanes,M.clipIntersection=_.clipIntersection,M.displacementMap=_.displacementMap,M.displacementScale=_.displacementScale,M.displacementBias=_.displacementBias,M.wireframeLinewidth=_.wireframeLinewidth,M.linewidth=_.linewidth,y.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=n.properties.get(M);R.light=y}return M}function w(S,_,y,A,M){if(S.visible===!1)return;if(S.layers.test(_.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===di)&&(!S.frustumCulled||o.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);const L=t.update(S),U=S.material;if(Array.isArray(U)){const z=L.groups;for(let O=0,B=z.length;O<B;O++){const N=z[O],H=U[N.materialIndex];if(H&&H.visible){const G=x(S,H,A,M);S.onBeforeShadow(n,S,_,y,L,G,N),n.renderBufferDirect(y,null,L,G,S,N),S.onAfterShadow(n,S,_,y,L,G,N)}}}else if(U.visible){const z=x(S,U,A,M);S.onBeforeShadow(n,S,_,y,L,z,null),n.renderBufferDirect(y,null,L,z,S,null),S.onAfterShadow(n,S,_,y,L,z,null)}}const R=S.children;for(let L=0,U=R.length;L<U;L++)w(R[L],_,y,A,M)}function E(S){S.target.removeEventListener("dispose",E);for(const y in c){const A=c[y],M=S.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const db={[K0]:j0,[J0]:ef,[Q0]:nf,[ta]:tf,[j0]:K0,[ef]:J0,[nf]:Q0,[tf]:ta};function pb(n){function t(){let J=!1;const Pt=new fe;let gt=null;const Mt=new fe(0,0,0,0);return{setMask:function(Lt){gt!==Lt&&!J&&(n.colorMask(Lt,Lt,Lt,Lt),gt=Lt)},setLocked:function(Lt){J=Lt},setClear:function(Lt,Ct,oe,Ce,pn){pn===!0&&(Lt*=Ce,Ct*=Ce,oe*=Ce),Pt.set(Lt,Ct,oe,Ce),Mt.equals(Pt)===!1&&(n.clearColor(Lt,Ct,oe,Ce),Mt.copy(Pt))},reset:function(){J=!1,gt=null,Mt.set(-1,0,0,0)}}}function e(){let J=!1,Pt=!1,gt=null,Mt=null,Lt=null;return{setReversed:function(Ct){Pt=Ct},setTest:function(Ct){Ct?rt(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(Ct){gt!==Ct&&!J&&(n.depthMask(Ct),gt=Ct)},setFunc:function(Ct){if(Pt&&(Ct=db[Ct]),Mt!==Ct){switch(Ct){case K0:n.depthFunc(n.NEVER);break;case j0:n.depthFunc(n.ALWAYS);break;case J0:n.depthFunc(n.LESS);break;case ta:n.depthFunc(n.LEQUAL);break;case Q0:n.depthFunc(n.EQUAL);break;case tf:n.depthFunc(n.GEQUAL);break;case ef:n.depthFunc(n.GREATER);break;case nf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Ct}},setLocked:function(Ct){J=Ct},setClear:function(Ct){Lt!==Ct&&(n.clearDepth(Ct),Lt=Ct)},reset:function(){J=!1,gt=null,Mt=null,Lt=null}}}function o(){let J=!1,Pt=null,gt=null,Mt=null,Lt=null,Ct=null,oe=null,Ce=null,pn=null;return{setTest:function(se){J||(se?rt(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(se){Pt!==se&&!J&&(n.stencilMask(se),Pt=se)},setFunc:function(se,mn,Ro){(gt!==se||Mt!==mn||Lt!==Ro)&&(n.stencilFunc(se,mn,Ro),gt=se,Mt=mn,Lt=Ro)},setOp:function(se,mn,Ro){(Ct!==se||oe!==mn||Ce!==Ro)&&(n.stencilOp(se,mn,Ro),Ct=se,oe=mn,Ce=Ro)},setLocked:function(se){J=se},setClear:function(se){pn!==se&&(n.clearStencil(se),pn=se)},reset:function(){J=!1,Pt=null,gt=null,Mt=null,Lt=null,Ct=null,oe=null,Ce=null,pn=null}}}const i=new t,s=new e,r=new o,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,p=!1,v=null,m=null,g=null,b=null,x=null,w=null,E=null,S=new bt(0,0,0),_=0,y=!1,A=null,M=null,T=null,R=null,L=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=O>=2);let N=null,H={};const G=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Q=new fe().fromArray(G),j=new fe().fromArray($);function X(J,Pt,gt,Mt){const Lt=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(J,Ct),n.texParameteri(J,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(J,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<gt;oe++)J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(Pt+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Ct}const at={};at[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),rt(n.DEPTH_TEST),s.setFunc(ta),tt(!1),nt(op),rt(n.CULL_FACE),I(es);function rt(J){c[J]!==!0&&(n.enable(J),c[J]=!0)}function ft(J){c[J]!==!1&&(n.disable(J),c[J]=!1)}function et(J,Pt){return u[J]!==Pt?(n.bindFramebuffer(J,Pt),u[J]=Pt,J===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Pt),J===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function q(J,Pt){let gt=f,Mt=!1;if(J){gt=h.get(Pt),gt===void 0&&(gt=[],h.set(Pt,gt));const Lt=J.textures;if(gt.length!==Lt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,oe=Lt.length;Ct<oe;Ct++)gt[Ct]=n.COLOR_ATTACHMENT0+Ct;gt.length=Lt.length,Mt=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(gt)}function ct(J){return d!==J?(n.useProgram(J),d=J,!0):!1}const vt={[Is]:n.FUNC_ADD,[gx]:n.FUNC_SUBTRACT,[vx]:n.FUNC_REVERSE_SUBTRACT};vt[xx]=n.MIN,vt[Mx]=n.MAX;const V={[yx]:n.ZERO,[wx]:n.ONE,[_x]:n.SRC_COLOR,[Y0]:n.SRC_ALPHA,[Rx]:n.SRC_ALPHA_SATURATE,[Ex]:n.DST_COLOR,[bx]:n.DST_ALPHA,[Sx]:n.ONE_MINUS_SRC_COLOR,[Z0]:n.ONE_MINUS_SRC_ALPHA,[Ax]:n.ONE_MINUS_DST_COLOR,[Tx]:n.ONE_MINUS_DST_ALPHA,[Px]:n.CONSTANT_COLOR,[Cx]:n.ONE_MINUS_CONSTANT_COLOR,[Ix]:n.CONSTANT_ALPHA,[Lx]:n.ONE_MINUS_CONSTANT_ALPHA};function I(J,Pt,gt,Mt,Lt,Ct,oe,Ce,pn,se){if(J===es){p===!0&&(ft(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),J!==mx){if(J!==v||se!==y){if((m!==Is||x!==Is)&&(n.blendEquation(n.FUNC_ADD),m=Is,x=Is),se)switch(J){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case ip:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ip:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}g=null,b=null,w=null,E=null,S.set(0,0,0),_=0,v=J,y=se}return}Lt=Lt||Pt,Ct=Ct||gt,oe=oe||Mt,(Pt!==m||Lt!==x)&&(n.blendEquationSeparate(vt[Pt],vt[Lt]),m=Pt,x=Lt),(gt!==g||Mt!==b||Ct!==w||oe!==E)&&(n.blendFuncSeparate(V[gt],V[Mt],V[Ct],V[oe]),g=gt,b=Mt,w=Ct,E=oe),(Ce.equals(S)===!1||pn!==_)&&(n.blendColor(Ce.r,Ce.g,Ce.b,pn),S.copy(Ce),_=pn),v=J,y=!1}function D(J,Pt){J.side===we?ft(n.CULL_FACE):rt(n.CULL_FACE);let gt=J.side===on;Pt&&(gt=!gt),tt(gt),J.blending===Os&&J.transparent===!1?I(es):I(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),i.setMask(J.colorWrite);const Mt=J.stencilWrite;r.setTest(Mt),Mt&&(r.setMask(J.stencilWriteMask),r.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),r.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),pt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(J){A!==J&&(J?n.frontFace(n.CW):n.frontFace(n.CCW),A=J)}function nt(J){J!==dx?(rt(n.CULL_FACE),J!==M&&(J===op?n.cullFace(n.BACK):J===px?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),M=J}function Z(J){J!==T&&(z&&n.lineWidth(J),T=J)}function pt(J,Pt,gt){J?(rt(n.POLYGON_OFFSET_FILL),(R!==Pt||L!==gt)&&(n.polygonOffset(Pt,gt),R=Pt,L=gt)):ft(n.POLYGON_OFFSET_FILL)}function Y(J){J?rt(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function F(J){J===void 0&&(J=n.TEXTURE0+U-1),N!==J&&(n.activeTexture(J),N=J)}function C(J,Pt,gt){gt===void 0&&(N===null?gt=n.TEXTURE0+U-1:gt=N);let Mt=H[gt];Mt===void 0&&(Mt={type:void 0,texture:void 0},H[gt]=Mt),(Mt.type!==J||Mt.texture!==Pt)&&(N!==gt&&(n.activeTexture(gt),N=gt),n.bindTexture(J,Pt||at[J]),Mt.type=J,Mt.texture=Pt)}function K(){const J=H[N];J!==void 0&&J.type!==void 0&&(n.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ft(){try{n.texStorage2D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function _t(){try{n.texStorage3D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Xt(J){Q.equals(J)===!1&&(n.scissor(J.x,J.y,J.z,J.w),Q.copy(J))}function Ut(J){j.equals(J)===!1&&(n.viewport(J.x,J.y,J.z,J.w),j.copy(J))}function Kt(J,Pt){let gt=l.get(Pt);gt===void 0&&(gt=new WeakMap,l.set(Pt,gt));let Mt=gt.get(J);Mt===void 0&&(Mt=n.getUniformBlockIndex(Pt,J.name),gt.set(J,Mt))}function Wt(J,Pt){const Mt=l.get(Pt).get(J);a.get(Pt)!==Mt&&(n.uniformBlockBinding(Pt,Mt,J.__bindingPointIndex),a.set(Pt,Mt))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,H={},u={},h=new WeakMap,f=[],d=null,p=!1,v=null,m=null,g=null,b=null,x=null,w=null,E=null,S=new bt(0,0,0),_=0,y=!1,A=null,M=null,T=null,R=null,L=null,Q.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:rt,disable:ft,bindFramebuffer:et,drawBuffers:q,useProgram:ct,setBlending:I,setMaterial:D,setFlipSided:tt,setCullFace:nt,setLineWidth:Z,setPolygonOffset:pt,setScissorTest:Y,activeTexture:F,bindTexture:C,unbindTexture:K,compressedTexImage2D:ut,compressedTexImage3D:mt,texImage2D:At,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:Ft,texStorage3D:_t,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:yt,compressedTexSubImage3D:St,scissor:Xt,viewport:Ut,reset:de}}function Yp(n,t,e,o){const i=mb(o);switch(e){case iv:return n*t;case rv:return n*t;case av:return n*t*2;case bd:return n*t/i.components*i.byteLength;case Td:return n*t/i.components*i.byteLength;case lv:return n*t*2/i.components*i.byteLength;case Ed:return n*t*2/i.components*i.byteLength;case sv:return n*t*3/i.components*i.byteLength;case lo:return n*t*4/i.components*i.byteLength;case Ad:return n*t*4/i.components*i.byteLength;case Zc:case Kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jc:case Jc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case af:case cf:return Math.max(n,16)*Math.max(t,8)/4;case rf:case lf:return Math.max(n,8)*Math.max(t,8)/2;case uf:case hf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ff:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case df:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mf:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gf:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vf:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xf:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yf:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wf:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _f:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bf:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ef:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qc:case Af:case Rf:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cv:case Pf:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Cf:case If:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mb(n){switch(n){case Ho:case ev:return{byteLength:1,components:1};case fl:case nv:case ao:return{byteLength:2,components:1};case _d:case Sd:return{byteLength:2,components:4};case cs:case wd:case ro:return{byteLength:4,components:1};case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gb(n,t,e,o,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(F,C){return d?new OffscreenCanvas(F,C):dl("canvas")}function v(F,C,K){let ut=1;const mt=Y(F);if((mt.width>K||mt.height>K)&&(ut=K/Math.max(mt.width,mt.height)),ut<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const W=Math.floor(ut*mt.width),xt=Math.floor(ut*mt.height);h===void 0&&(h=p(W,xt));const yt=C?p(W,xt):h;return yt.width=W,yt.height=xt,yt.getContext("2d").drawImage(F,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+W+"x"+xt+")."),yt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),F;return F}function m(F){return F.generateMipmaps&&F.minFilter!==Wn&&F.minFilter!==Ge}function g(F){n.generateMipmap(F)}function b(F,C,K,ut,mt=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let W=C;if(C===n.RED&&(K===n.FLOAT&&(W=n.R32F),K===n.HALF_FLOAT&&(W=n.R16F),K===n.UNSIGNED_BYTE&&(W=n.R8)),C===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(W=n.R8UI),K===n.UNSIGNED_SHORT&&(W=n.R16UI),K===n.UNSIGNED_INT&&(W=n.R32UI),K===n.BYTE&&(W=n.R8I),K===n.SHORT&&(W=n.R16I),K===n.INT&&(W=n.R32I)),C===n.RG&&(K===n.FLOAT&&(W=n.RG32F),K===n.HALF_FLOAT&&(W=n.RG16F),K===n.UNSIGNED_BYTE&&(W=n.RG8)),C===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(W=n.RG8UI),K===n.UNSIGNED_SHORT&&(W=n.RG16UI),K===n.UNSIGNED_INT&&(W=n.RG32UI),K===n.BYTE&&(W=n.RG8I),K===n.SHORT&&(W=n.RG16I),K===n.INT&&(W=n.RG32I)),C===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(W=n.RGB8UI),K===n.UNSIGNED_SHORT&&(W=n.RGB16UI),K===n.UNSIGNED_INT&&(W=n.RGB32UI),K===n.BYTE&&(W=n.RGB8I),K===n.SHORT&&(W=n.RGB16I),K===n.INT&&(W=n.RGB32I)),C===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),K===n.UNSIGNED_INT&&(W=n.RGBA32UI),K===n.BYTE&&(W=n.RGBA8I),K===n.SHORT&&(W=n.RGBA16I),K===n.INT&&(W=n.RGBA32I)),C===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),C===n.RGBA){const xt=mt?vu:he.getTransfer(ut);K===n.FLOAT&&(W=n.RGBA32F),K===n.HALF_FLOAT&&(W=n.RGBA16F),K===n.UNSIGNED_BYTE&&(W=xt===Re?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function x(F,C){let K;return F?C===null||C===cs||C===oa?K=n.DEPTH24_STENCIL8:C===ro?K=n.DEPTH32F_STENCIL8:C===fl&&(K=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===cs||C===oa?K=n.DEPTH_COMPONENT24:C===ro?K=n.DEPTH_COMPONENT32F:C===fl&&(K=n.DEPTH_COMPONENT16),K}function w(F,C){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Wn&&F.minFilter!==Ge?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function E(F){const C=F.target;C.removeEventListener("dispose",E),_(C),C.isVideoTexture&&u.delete(C)}function S(F){const C=F.target;C.removeEventListener("dispose",S),A(C)}function _(F){const C=o.get(F);if(C.__webglInit===void 0)return;const K=F.source,ut=f.get(K);if(ut){const mt=ut[C.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&y(F),Object.keys(ut).length===0&&f.delete(K)}o.remove(F)}function y(F){const C=o.get(F);n.deleteTexture(C.__webglTexture);const K=F.source,ut=f.get(K);delete ut[C.__cacheKey],r.memory.textures--}function A(F){const C=o.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(C.__webglFramebuffer[ut]))for(let mt=0;mt<C.__webglFramebuffer[ut].length;mt++)n.deleteFramebuffer(C.__webglFramebuffer[ut][mt]);else n.deleteFramebuffer(C.__webglFramebuffer[ut]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[ut])}else{if(Array.isArray(C.__webglFramebuffer))for(let ut=0;ut<C.__webglFramebuffer.length;ut++)n.deleteFramebuffer(C.__webglFramebuffer[ut]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ut=0;ut<C.__webglColorRenderbuffer.length;ut++)C.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[ut]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const K=F.textures;for(let ut=0,mt=K.length;ut<mt;ut++){const W=o.get(K[ut]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),r.memory.textures--),o.remove(K[ut])}o.remove(F)}let M=0;function T(){M=0}function R(){const F=M;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),M+=1,F}function L(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function U(F,C){const K=o.get(F);if(F.isVideoTexture&&Z(F),F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){const ut=F.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(K,F,C);return}}e.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+C)}function z(F,C){const K=o.get(F);if(F.version>0&&K.__version!==F.version){j(K,F,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+C)}function O(F,C){const K=o.get(F);if(F.version>0&&K.__version!==F.version){j(K,F,C);return}e.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+C)}function B(F,C){const K=o.get(F);if(F.version>0&&K.__version!==F.version){X(K,F,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+C)}const N={[We]:n.REPEAT,[Bo]:n.CLAMP_TO_EDGE,[sf]:n.MIRRORED_REPEAT},H={[Wn]:n.NEAREST,[Gx]:n.NEAREST_MIPMAP_NEAREST,[Il]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[yh]:n.LINEAR_MIPMAP_NEAREST,[Qo]:n.LINEAR_MIPMAP_LINEAR},G={[Xx]:n.NEVER,[jx]:n.ALWAYS,[$x]:n.LESS,[hv]:n.LEQUAL,[qx]:n.EQUAL,[Kx]:n.GEQUAL,[Yx]:n.GREATER,[Zx]:n.NOTEQUAL};function $(F,C){if(C.type===ro&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ge||C.magFilter===yh||C.magFilter===Il||C.magFilter===Qo||C.minFilter===Ge||C.minFilter===yh||C.minFilter===Il||C.minFilter===Qo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,N[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,N[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,N[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,H[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,H[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,G[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Wn||C.minFilter!==Il&&C.minFilter!==Qo||C.type===ro&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||o.get(C).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),o.get(C).__currentAnisotropy=C.anisotropy}}}function Q(F,C){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",E));const ut=C.source;let mt=f.get(ut);mt===void 0&&(mt={},f.set(ut,mt));const W=L(C);if(W!==F.__cacheKey){mt[W]===void 0&&(mt[W]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,K=!0),mt[W].usedTimes++;const xt=mt[F.__cacheKey];xt!==void 0&&(mt[F.__cacheKey].usedTimes--,xt.usedTimes===0&&y(C)),F.__cacheKey=W,F.__webglTexture=mt[W].texture}return K}function j(F,C,K){let ut=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ut=n.TEXTURE_3D);const mt=Q(F,C),W=C.source;e.bindTexture(ut,F.__webglTexture,n.TEXTURE0+K);const xt=o.get(W);if(W.version!==xt.__version||mt===!0){e.activeTexture(n.TEXTURE0+K);const yt=he.getPrimaries(he.workingColorSpace),St=C.colorSpace===nn?null:he.getPrimaries(C.colorSpace),Ft=C.colorSpace===nn||yt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let _t=v(C.image,!1,i.maxTextureSize);_t=pt(C,_t);const At=s.convert(C.format,C.colorSpace),Bt=s.convert(C.type);let Xt=b(C.internalFormat,At,Bt,C.colorSpace,C.isVideoTexture);$(ut,C);let Ut;const Kt=C.mipmaps,Wt=C.isVideoTexture!==!0,de=xt.__version===void 0||mt===!0,J=W.dataReady,Pt=w(C,_t);if(C.isDepthTexture)Xt=x(C.format===ia,C.type),de&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Xt,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,Xt,_t.width,_t.height,0,At,Bt,null));else if(C.isDataTexture)if(Kt.length>0){Wt&&de&&e.texStorage2D(n.TEXTURE_2D,Pt,Xt,Kt[0].width,Kt[0].height);for(let gt=0,Mt=Kt.length;gt<Mt;gt++)Ut=Kt[gt],Wt?J&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,At,Bt,Ut.data):e.texImage2D(n.TEXTURE_2D,gt,Xt,Ut.width,Ut.height,0,At,Bt,Ut.data);C.generateMipmaps=!1}else Wt?(de&&e.texStorage2D(n.TEXTURE_2D,Pt,Xt,_t.width,_t.height),J&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t.width,_t.height,At,Bt,_t.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,_t.width,_t.height,0,At,Bt,_t.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Wt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Xt,Kt[0].width,Kt[0].height,_t.depth);for(let gt=0,Mt=Kt.length;gt<Mt;gt++)if(Ut=Kt[gt],C.format!==lo)if(At!==null)if(Wt){if(J)if(C.layerUpdates.size>0){const Lt=Yp(Ut.width,Ut.height,C.format,C.type);for(const Ct of C.layerUpdates){const oe=Ut.data.subarray(Ct*Lt/Ut.data.BYTES_PER_ELEMENT,(Ct+1)*Lt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,Ct,Ut.width,Ut.height,1,At,oe,0,0)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ut.width,Ut.height,_t.depth,At,Ut.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,Xt,Ut.width,Ut.height,_t.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?J&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ut.width,Ut.height,_t.depth,At,Bt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,Xt,Ut.width,Ut.height,_t.depth,0,At,Bt,Ut.data)}else{Wt&&de&&e.texStorage2D(n.TEXTURE_2D,Pt,Xt,Kt[0].width,Kt[0].height);for(let gt=0,Mt=Kt.length;gt<Mt;gt++)Ut=Kt[gt],C.format!==lo?At!==null?Wt?J&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,At,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,Xt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?J&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,At,Bt,Ut.data):e.texImage2D(n.TEXTURE_2D,gt,Xt,Ut.width,Ut.height,0,At,Bt,Ut.data)}else if(C.isDataArrayTexture)if(Wt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Xt,_t.width,_t.height,_t.depth),J)if(C.layerUpdates.size>0){const gt=Yp(_t.width,_t.height,C.format,C.type);for(const Mt of C.layerUpdates){const Lt=_t.data.subarray(Mt*gt/_t.data.BYTES_PER_ELEMENT,(Mt+1)*gt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,_t.width,_t.height,1,At,Bt,Lt)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,At,Bt,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,_t.width,_t.height,_t.depth,0,At,Bt,_t.data);else if(C.isData3DTexture)Wt?(de&&e.texStorage3D(n.TEXTURE_3D,Pt,Xt,_t.width,_t.height,_t.depth),J&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,At,Bt,_t.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,_t.width,_t.height,_t.depth,0,At,Bt,_t.data);else if(C.isFramebufferTexture){if(de)if(Wt)e.texStorage2D(n.TEXTURE_2D,Pt,Xt,_t.width,_t.height);else{let gt=_t.width,Mt=_t.height;for(let Lt=0;Lt<Pt;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Xt,gt,Mt,0,At,Bt,null),gt>>=1,Mt>>=1}}else if(Kt.length>0){if(Wt&&de){const gt=Y(Kt[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Xt,gt.width,gt.height)}for(let gt=0,Mt=Kt.length;gt<Mt;gt++)Ut=Kt[gt],Wt?J&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,At,Bt,Ut):e.texImage2D(n.TEXTURE_2D,gt,Xt,At,Bt,Ut);C.generateMipmaps=!1}else if(Wt){if(de){const gt=Y(_t);e.texStorage2D(n.TEXTURE_2D,Pt,Xt,gt.width,gt.height)}J&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Bt,_t)}else e.texImage2D(n.TEXTURE_2D,0,Xt,At,Bt,_t);m(C)&&g(ut),xt.__version=W.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function X(F,C,K){if(C.image.length!==6)return;const ut=Q(F,C),mt=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+K);const W=o.get(mt);if(mt.version!==W.__version||ut===!0){e.activeTexture(n.TEXTURE0+K);const xt=he.getPrimaries(he.workingColorSpace),yt=C.colorSpace===nn?null:he.getPrimaries(C.colorSpace),St=C.colorSpace===nn||xt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ft=C.isCompressedTexture||C.image[0].isCompressedTexture,_t=C.image[0]&&C.image[0].isDataTexture,At=[];for(let Mt=0;Mt<6;Mt++)!Ft&&!_t?At[Mt]=v(C.image[Mt],!0,i.maxCubemapSize):At[Mt]=_t?C.image[Mt].image:C.image[Mt],At[Mt]=pt(C,At[Mt]);const Bt=At[0],Xt=s.convert(C.format,C.colorSpace),Ut=s.convert(C.type),Kt=b(C.internalFormat,Xt,Ut,C.colorSpace),Wt=C.isVideoTexture!==!0,de=W.__version===void 0||ut===!0,J=mt.dataReady;let Pt=w(C,Bt);$(n.TEXTURE_CUBE_MAP,C);let gt;if(Ft){Wt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Kt,Bt.width,Bt.height);for(let Mt=0;Mt<6;Mt++){gt=At[Mt].mipmaps;for(let Lt=0;Lt<gt.length;Lt++){const Ct=gt[Lt];C.format!==lo?Xt!==null?Wt?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt,0,0,Ct.width,Ct.height,Xt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt,Kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt,0,0,Ct.width,Ct.height,Xt,Ut,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt,Kt,Ct.width,Ct.height,0,Xt,Ut,Ct.data)}}}else{if(gt=C.mipmaps,Wt&&de){gt.length>0&&Pt++;const Mt=Y(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Kt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(_t){Wt?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,At[Mt].width,At[Mt].height,Xt,Ut,At[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Kt,At[Mt].width,At[Mt].height,0,Xt,Ut,At[Mt].data);for(let Lt=0;Lt<gt.length;Lt++){const oe=gt[Lt].image[Mt].image;Wt?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt+1,0,0,oe.width,oe.height,Xt,Ut,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt+1,Kt,oe.width,oe.height,0,Xt,Ut,oe.data)}}else{Wt?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Xt,Ut,At[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Kt,Xt,Ut,At[Mt]);for(let Lt=0;Lt<gt.length;Lt++){const Ct=gt[Lt];Wt?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt+1,0,0,Xt,Ut,Ct.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt+1,Kt,Xt,Ut,Ct.image[Mt])}}}m(C)&&g(n.TEXTURE_CUBE_MAP),W.__version=mt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function at(F,C,K,ut,mt,W){const xt=s.convert(K.format,K.colorSpace),yt=s.convert(K.type),St=b(K.internalFormat,xt,yt,K.colorSpace);if(!o.get(C).__hasExternalTextures){const _t=Math.max(1,C.width>>W),At=Math.max(1,C.height>>W);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,W,St,_t,At,C.depth,0,xt,yt,null):e.texImage2D(mt,W,St,_t,At,0,xt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),nt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,mt,o.get(K).__webglTexture,0,tt(C)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,mt,o.get(K).__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(F,C,K){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){const ut=C.depthTexture,mt=ut&&ut.isDepthTexture?ut.type:null,W=x(C.stencilBuffer,mt),xt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=tt(C);nt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,W,C.width,C.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,W,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,W,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,F)}else{const ut=C.textures;for(let mt=0;mt<ut.length;mt++){const W=ut[mt],xt=s.convert(W.format,W.colorSpace),yt=s.convert(W.type),St=b(W.internalFormat,xt,yt,W.colorSpace),Ft=tt(C);K&&nt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,St,C.width,C.height):nt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,St,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,St,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!o.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),U(C.depthTexture,0);const ut=o.get(C.depthTexture).__webglTexture,mt=tt(C);if(C.depthTexture.format===Vr)nt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(C.depthTexture.format===ia)nt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function et(F){const C=o.get(F),K=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const ut=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ut){const mt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ut.removeEventListener("dispose",mt)};ut.addEventListener("dispose",mt),C.__depthDisposeCallback=mt}C.__boundDepthTexture=ut}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ft(C.__webglFramebuffer,F)}else if(K){C.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[ut]),C.__webglDepthbuffer[ut]===void 0)C.__webglDepthbuffer[ut]=n.createRenderbuffer(),rt(C.__webglDepthbuffer[ut],F,!1);else{const mt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=C.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),rt(C.__webglDepthbuffer,F,!1);else{const ut=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(F,C,K){const ut=o.get(F);C!==void 0&&at(ut.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&et(F)}function ct(F){const C=F.texture,K=o.get(F),ut=o.get(C);F.addEventListener("dispose",S);const mt=F.textures,W=F.isWebGLCubeRenderTarget===!0,xt=mt.length>1;if(xt||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=C.version,r.memory.textures++),W){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let St=0;St<C.mipmaps.length;St++)K.__webglFramebuffer[yt][St]=n.createFramebuffer()}else K.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<C.mipmaps.length;yt++)K.__webglFramebuffer[yt]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(xt)for(let yt=0,St=mt.length;yt<St;yt++){const Ft=o.get(mt[yt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),r.memory.textures++)}if(F.samples>0&&nt(F)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<mt.length;yt++){const St=mt[yt];K.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);const Ft=s.convert(St.format,St.colorSpace),_t=s.convert(St.type),At=b(St.internalFormat,Ft,_t,St.colorSpace,F.isXRRenderTarget===!0),Bt=tt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,At,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),$(n.TEXTURE_CUBE_MAP,C);for(let yt=0;yt<6;yt++)if(C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)at(K.__webglFramebuffer[yt][St],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else at(K.__webglFramebuffer[yt],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(C)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let yt=0,St=mt.length;yt<St;yt++){const Ft=mt[yt],_t=o.get(Ft);e.bindTexture(n.TEXTURE_2D,_t.__webglTexture),$(n.TEXTURE_2D,Ft),at(K.__webglFramebuffer,F,Ft,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),m(Ft)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(yt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,ut.__webglTexture),$(yt,C),C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)at(K.__webglFramebuffer[St],F,C,n.COLOR_ATTACHMENT0,yt,St);else at(K.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,yt,0);m(C)&&g(yt),e.unbindTexture()}F.depthBuffer&&et(F)}function vt(F){const C=F.textures;for(let K=0,ut=C.length;K<ut;K++){const mt=C[K];if(m(mt)){const W=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=o.get(mt).__webglTexture;e.bindTexture(W,xt),g(W),e.unbindTexture()}}}const V=[],I=[];function D(F){if(F.samples>0){if(nt(F)===!1){const C=F.textures,K=F.width,ut=F.height;let mt=n.COLOR_BUFFER_BIT;const W=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=o.get(F),yt=C.length>1;if(yt)for(let St=0;St<C.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let St=0;St<C.length;St++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const Ft=o.get(C[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,K,ut,0,0,K,ut,mt,n.NEAREST),l===!0&&(V.length=0,I.length=0,V.push(n.COLOR_ATTACHMENT0+St),F.depthBuffer&&F.resolveDepthBuffer===!1&&(V.push(W),I.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let St=0;St<C.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const Ft=o.get(C[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function tt(F){return Math.min(i.maxSamples,F.samples)}function nt(F){const C=o.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Z(F){const C=r.render.frame;u.get(F)!==C&&(u.set(F,C),F.update())}function pt(F,C){const K=F.colorSpace,ut=F.format,mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Vo&&K!==nn&&(he.getTransfer(K)===Re?(ut!==lo||mt!==Ho)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}function Y(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=T,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=q,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=at,this.useMultisampledRTT=nt}function vb(n,t){function e(o,i=nn){let s;const r=he.getTransfer(i);if(o===Ho)return n.UNSIGNED_BYTE;if(o===_d)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Sd)return n.UNSIGNED_SHORT_5_5_5_1;if(o===ov)return n.UNSIGNED_INT_5_9_9_9_REV;if(o===ev)return n.BYTE;if(o===nv)return n.SHORT;if(o===fl)return n.UNSIGNED_SHORT;if(o===wd)return n.INT;if(o===cs)return n.UNSIGNED_INT;if(o===ro)return n.FLOAT;if(o===ao)return n.HALF_FLOAT;if(o===iv)return n.ALPHA;if(o===sv)return n.RGB;if(o===lo)return n.RGBA;if(o===rv)return n.LUMINANCE;if(o===av)return n.LUMINANCE_ALPHA;if(o===Vr)return n.DEPTH_COMPONENT;if(o===ia)return n.DEPTH_STENCIL;if(o===bd)return n.RED;if(o===Td)return n.RED_INTEGER;if(o===lv)return n.RG;if(o===Ed)return n.RG_INTEGER;if(o===Ad)return n.RGBA_INTEGER;if(o===Zc||o===Kc||o===jc||o===Jc)if(r===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Jc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===rf||o===af||o===lf||o===cf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===rf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===af)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===uf||o===hf||o===ff)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(o===uf||o===hf)return r===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===ff)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===df||o===pf||o===mf||o===gf||o===vf||o===xf||o===Mf||o===yf||o===wf||o===_f||o===Sf||o===bf||o===Tf||o===Ef)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(o===df)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===vf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===xf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Mf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===yf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===wf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===_f)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Sf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===bf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Tf)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ef)return r===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Qc||o===Af||o===Rf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(o===Qc)return r===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===cv||o===Pf||o===Cf||o===If)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(o===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(o===Pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===If)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===oa?n.UNSIGNED_INT_24_8:n[o]!==void 0?n[o]:null}return{convert:e}}class xb extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Et extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const o of t.hand.values())this._getHandJoint(e,o)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,o){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,o),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,o),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const o=new Et;o.matrixAutoUpdate=!1,o.visible=!1,t.joints[e.jointName]=o,t.add(o)}return t.joints[e.jointName]}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,o){if(this.texture===null){const i=new Sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=o.depthNear||e.depthFar!=o.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,o=new Se({vertexShader:yb,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new le(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sb extends ua{constructor(t,e){super();const o=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null;const v=new _b,m=e.getContextAttributes();let g=null,b=null;const x=[],w=[],E=new st;let S=null;const _=new yn;_.layers.enable(1),_.viewport=new fe;const y=new yn;y.layers.enable(2),y.viewport=new fe;const A=[_,y],M=new xb;M.layers.enable(1),M.layers.enable(2);let T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=x[X];return at===void 0&&(at=new Yh,x[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=x[X];return at===void 0&&(at=new Yh,x[X]=at),at.getGripSpace()},this.getHand=function(X){let at=x[X];return at===void 0&&(at=new Yh,x[X]=at),at.getHandSpace()};function L(X){const at=w.indexOf(X.inputSource);if(at===-1)return;const rt=x[at];rt!==void 0&&(rt.update(X.inputSource,X.frame,c||r),rt.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let X=0;X<x.length;X++){const at=w[X];at!==null&&(w[X]=null,x[X].disconnect(at))}T=null,R=null,v.reset(),t.setRenderTarget(g),d=null,f=null,h=null,i=null,b=null,j.stop(),o.isPresenting=!1,t.setPixelRatio(S),t.setSize(E.width,E.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Mn(d.framebufferWidth,d.framebufferHeight,{format:lo,type:Ho,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,rt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ia:Vr,rt=m.stencil?oa:cs);const et={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Mn(f.textureWidth,f.textureHeight,{format:lo,type:Ho,depthTexture:new Nd(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),j.setContext(i),j.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(X){for(let at=0;at<X.removed.length;at++){const rt=X.removed[at],ft=w.indexOf(rt);ft>=0&&(w[ft]=null,x[ft].disconnect(rt))}for(let at=0;at<X.added.length;at++){const rt=X.added[at];let ft=w.indexOf(rt);if(ft===-1){for(let q=0;q<x.length;q++)if(q>=w.length){w.push(rt),ft=q;break}else if(w[q]===null){w[q]=rt,ft=q;break}if(ft===-1)break}const et=x[ft];et&&et.connect(rt)}}const O=new P,B=new P;function N(X,at,rt){O.setFromMatrixPosition(at.matrixWorld),B.setFromMatrixPosition(rt.matrixWorld);const ft=O.distanceTo(B),et=at.projectionMatrix.elements,q=rt.projectionMatrix.elements,ct=et[14]/(et[10]-1),vt=et[14]/(et[10]+1),V=(et[9]+1)/et[5],I=(et[9]-1)/et[5],D=(et[8]-1)/et[0],tt=(q[8]+1)/q[0],nt=ct*D,Z=ct*tt,pt=ft/(-D+tt),Y=pt*-D;if(at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Y),X.translateZ(pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),et[10]===-1)X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const F=ct+pt,C=vt+pt,K=nt-Y,ut=Z+(ft-Y),mt=V*vt/C*F,W=I*vt/C*F;X.projectionMatrix.makePerspective(K,ut,mt,W,F,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function H(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let at=X.near,rt=X.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(rt=v.depthFar)),M.near=y.near=_.near=at,M.far=y.far=_.far=rt,(T!==M.near||R!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,R=M.far);const ft=X.parent,et=M.cameras;H(M,ft);for(let q=0;q<et.length;q++)H(et[q],ft);et.length===2?N(M,_,y):M.projectionMatrix.copy(_.projectionMatrix),G(X,M,ft)};function G(X,at,rt){rt===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(rt.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let $=null;function Q(X,at){if(u=at.getViewerPose(c||r),p=at,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ft=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let q=0;q<rt.length;q++){const ct=rt[q];let vt=null;if(d!==null)vt=d.getViewport(ct);else{const I=h.getViewSubImage(f,ct);vt=I.viewport,q===0&&(t.setRenderTargetTextures(b,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(b))}let V=A[q];V===void 0&&(V=new yn,V.layers.enable(q),V.viewport=new fe,A[q]=V),V.matrix.fromArray(ct.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ct.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(vt.x,vt.y,vt.width,vt.height),q===0&&(M.matrix.copy(V.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(V)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){const q=h.getDepthInformation(rt[0]);q&&q.isValid&&q.texture&&v.init(t,q,i.renderState)}}for(let rt=0;rt<x.length;rt++){const ft=w[rt],et=x[rt];ft!==null&&et!==void 0&&et.update(ft,at,c||r)}$&&$(X,at),at.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:at}),p=null}const j=new bv;j.setAnimationLoop(Q),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}}const xs=new Xn,bb=new It;function Tb(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function o(m,g){g.color.getRGB(m.fogColor.value,xv(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,b,x,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,w)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=t.get(g),x=b.envMap,w=b.envMapRotation;x&&(m.envMap.value=x,xs.copy(w),xs.x*=-1,xs.y*=-1,xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(xs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:i}}function Eb(n,t,e,o){let i={},s={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const w=x.program;o.uniformBlockBinding(b,w)}function c(b,x){let w=i[b.id];w===void 0&&(p(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",m));const E=x.program;o.updateUBOMapping(b,E);const S=t.render.frame;s[b.id]!==S&&(f(b),s[b.id]=S)}function u(b){const x=h();b.__bindingPointIndex=x;const w=n.createBuffer(),E=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function h(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],w=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,_=w.length;S<_;S++){const y=Array.isArray(w[S])?w[S]:[w[S]];for(let A=0,M=y.length;A<M;A++){const T=y[A];if(d(T,S,A,E)===!0){const R=T.__offset,L=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let z=0;z<L.length;z++){const O=L[z],B=v(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,R+U,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,w,E){const S=b.value,_=x+"_"+w;if(E[_]===void 0)return typeof S=="number"||typeof S=="boolean"?E[_]=S:E[_]=S.clone(),!0;{const y=E[_];if(typeof S=="number"||typeof S=="boolean"){if(y!==S)return E[_]=S,!0}else if(y.equals(S)===!1)return y.copy(S),!0}return!1}function p(b){const x=b.uniforms;let w=0;const E=16;for(let _=0,y=x.length;_<y;_++){const A=Array.isArray(x[_])?x[_]:[x[_]];for(let M=0,T=A.length;M<T;M++){const R=A[M],L=Array.isArray(R.value)?R.value:[R.value];for(let U=0,z=L.length;U<z;U++){const O=L[U],B=v(O),N=w%E,H=N%B.boundary,G=N+H;w+=H,G!==0&&E-G<B.storage&&(w+=E-G),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=B.storage}}}const S=w%E;return S>0&&(w+=E-S),b.__size=w,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const w=r.indexOf(x.__bindingPointIndex);r.splice(w,1),n.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const b in i)n.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:l,update:c,dispose:g}}class Ud{constructor(t={}){const{canvas:e=pM(),context:o=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=o.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const g=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=te,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let w=!1,E=0,S=0,_=null,y=-1,A=null;const M=new fe,T=new fe;let R=null;const L=new bt(0);let U=0,z=e.width,O=e.height,B=1,N=null,H=null;const G=new fe(0,0,z,O),$=new fe(0,0,z,O);let Q=!1;const j=new Ld;let X=!1,at=!1;const rt=new It,ft=new It,et=new P,q=new fe,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function V(){return _===null?B:1}let I=o;function D(k,ot){return e.getContext(k,ot)}try{const k={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yd}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),I===null){const ot="webgl2";if(I=D(ot,k),I===null)throw D(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let tt,nt,Z,pt,Y,F,C,K,ut,mt,W,xt,yt,St,Ft,_t,At,Bt,Xt,Ut,Kt,Wt,de,J;function Pt(){tt=new L_(I),tt.init(),Wt=new vb(I,tt),nt=new E_(I,tt,t,Wt),Z=new pb(I),nt.reverseDepthBuffer&&Z.buffers.depth.setReversed(!0),pt=new U_(I),Y=new QS,F=new gb(I,tt,Z,Y,nt,Wt,pt),C=new R_(x),K=new I_(x),ut=new HM(I),de=new b_(I,ut),mt=new D_(I,ut,pt,de),W=new O_(I,mt,ut,pt),Xt=new F_(I,nt,F),_t=new A_(Y),xt=new JS(x,C,K,tt,nt,de,_t),yt=new Tb(x,Y),St=new eb,Ft=new ab(tt),Bt=new S_(x,C,K,Z,W,f,l),At=new fb(x,W,nt),J=new Eb(I,pt,nt,Z),Ut=new T_(I,tt,pt),Kt=new N_(I,tt,pt),pt.programs=xt.programs,x.capabilities=nt,x.extensions=tt,x.properties=Y,x.renderLists=St,x.shadowMap=At,x.state=Z,x.info=pt}Pt();const gt=new Sb(x,I);this.xr=gt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const k=tt.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=tt.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(k){k!==void 0&&(B=k,this.setSize(z,O,!1))},this.getSize=function(k){return k.set(z,O)},this.setSize=function(k,ot,ht=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=k,O=ot,e.width=Math.floor(k*B),e.height=Math.floor(ot*B),ht===!0&&(e.style.width=k+"px",e.style.height=ot+"px"),this.setViewport(0,0,k,ot)},this.getDrawingBufferSize=function(k){return k.set(z*B,O*B).floor()},this.setDrawingBufferSize=function(k,ot,ht){z=k,O=ot,B=ht,e.width=Math.floor(k*ht),e.height=Math.floor(ot*ht),this.setViewport(0,0,k,ot)},this.getCurrentViewport=function(k){return k.copy(M)},this.getViewport=function(k){return k.copy(G)},this.setViewport=function(k,ot,ht,dt){k.isVector4?G.set(k.x,k.y,k.z,k.w):G.set(k,ot,ht,dt),Z.viewport(M.copy(G).multiplyScalar(B).round())},this.getScissor=function(k){return k.copy($)},this.setScissor=function(k,ot,ht,dt){k.isVector4?$.set(k.x,k.y,k.z,k.w):$.set(k,ot,ht,dt),Z.scissor(T.copy($).multiplyScalar(B).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(k){Z.setScissorTest(Q=k)},this.setOpaqueSort=function(k){N=k},this.setTransparentSort=function(k){H=k},this.getClearColor=function(k){return k.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(k=!0,ot=!0,ht=!0){let dt=0;if(k){let it=!1;if(_!==null){const Tt=_.texture.format;it=Tt===Ad||Tt===Ed||Tt===Td}if(it){const Tt=_.texture.type,Nt=Tt===Ho||Tt===cs||Tt===fl||Tt===oa||Tt===_d||Tt===Sd,zt=Bt.getClearColor(),Gt=Bt.getClearAlpha(),Yt=zt.r,Zt=zt.g,Ht=zt.b;Nt?(d[0]=Yt,d[1]=Zt,d[2]=Ht,d[3]=Gt,I.clearBufferuiv(I.COLOR,0,d)):(p[0]=Yt,p[1]=Zt,p[2]=Ht,p[3]=Gt,I.clearBufferiv(I.COLOR,0,p))}else dt|=I.COLOR_BUFFER_BIT}ot&&(dt|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ht&&(dt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),St.dispose(),Ft.dispose(),Y.dispose(),C.dispose(),K.dispose(),W.dispose(),de.dispose(),J.dispose(),xt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",$s),gt.removeEventListener("sessionend",fa),ni.stop()};function Mt(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const k=pt.autoReset,ot=At.enabled,ht=At.autoUpdate,dt=At.needsUpdate,it=At.type;Pt(),pt.autoReset=k,At.enabled=ot,At.autoUpdate=ht,At.needsUpdate=dt,At.type=it}function Ct(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function oe(k){const ot=k.target;ot.removeEventListener("dispose",oe),Ce(ot)}function Ce(k){pn(k),Y.remove(k)}function pn(k){const ot=Y.get(k).programs;ot!==void 0&&(ot.forEach(function(ht){xt.releaseProgram(ht)}),k.isShaderMaterial&&xt.releaseShaderCache(k))}this.renderBufferDirect=function(k,ot,ht,dt,it,Tt){ot===null&&(ot=ct);const Nt=it.isMesh&&it.matrixWorld.determinant()<0,zt=cn(k,ot,ht,dt,it);Z.setMaterial(dt,Nt);let Gt=ht.index,Yt=1;if(dt.wireframe===!0){if(Gt=mt.getWireframeAttribute(ht),Gt===void 0)return;Yt=2}const Zt=ht.drawRange,Ht=ht.attributes.position;let Me=Zt.start*Yt,Ae=(Zt.start+Zt.count)*Yt;Tt!==null&&(Me=Math.max(Me,Tt.start*Yt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Yt)),Gt!==null?(Me=Math.max(Me,0),Ae=Math.min(Ae,Gt.count)):Ht!=null&&(Me=Math.max(Me,0),Ae=Math.min(Ae,Ht.count));const Be=Ae-Me;if(Be<0||Be===1/0)return;de.setup(it,dt,zt,ht,Gt);let qn,pe=Ut;if(Gt!==null&&(qn=ut.get(Gt),pe=Kt,pe.setIndex(qn)),it.isMesh)dt.wireframe===!0?(Z.setLineWidth(dt.wireframeLinewidth*V()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(it.isLine){let Vt=dt.linewidth;Vt===void 0&&(Vt=1),Z.setLineWidth(Vt*V()),it.isLineSegments?pe.setMode(I.LINES):it.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else it.isPoints?pe.setMode(I.POINTS):it.isSprite&&pe.setMode(I.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)pe.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))pe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Vt=it._multiDrawStarts,gn=it._multiDrawCounts,me=it._multiDrawCount,Po=Gt?ut.get(Gt).bytesPerElement:1,qs=Y.get(dt).currentProgram.getUniforms();for(let Yn=0;Yn<me;Yn++)qs.setValue(I,"_gl_DrawID",Yn),pe.render(Vt[Yn]/Po,gn[Yn])}else if(it.isInstancedMesh)pe.renderInstances(Me,Be,it.count);else if(ht.isInstancedBufferGeometry){const Vt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,gn=Math.min(ht.instanceCount,Vt);pe.renderInstances(Me,Be,gn)}else pe.render(Me,Be)};function se(k,ot,ht){k.transparent===!0&&k.side===we&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,xe(k,ot,ht),k.side=bi,k.needsUpdate=!0,xe(k,ot,ht),k.side=we):xe(k,ot,ht)}this.compile=function(k,ot,ht=null){ht===null&&(ht=k),m=Ft.get(ht),m.init(ot),b.push(m),ht.traverseVisible(function(it){it.isLight&&it.layers.test(ot.layers)&&(m.pushLight(it),it.castShadow&&m.pushShadow(it))}),k!==ht&&k.traverseVisible(function(it){it.isLight&&it.layers.test(ot.layers)&&(m.pushLight(it),it.castShadow&&m.pushShadow(it))}),m.setupLights();const dt=new Set;return k.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Tt=it.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){const zt=Tt[Nt];se(zt,ht,it),dt.add(zt)}else se(Tt,ht,it),dt.add(Tt)}),b.pop(),m=null,dt},this.compileAsync=function(k,ot,ht=null){const dt=this.compile(k,ot,ht);return new Promise(it=>{function Tt(){if(dt.forEach(function(Nt){Y.get(Nt).currentProgram.isReady()&&dt.delete(Nt)}),dt.size===0){it(k);return}setTimeout(Tt,10)}tt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let mn=null;function Ro(k){mn&&mn(k)}function $s(){ni.stop()}function fa(){ni.start()}const ni=new bv;ni.setAnimationLoop(Ro),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(k){mn=k,gt.setAnimationLoop(k),k===null?ni.stop():ni.start()},gt.addEventListener("sessionstart",$s),gt.addEventListener("sessionend",fa),this.render=function(k,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(ot),ot=gt.getCamera()),k.isScene===!0&&k.onBeforeRender(x,k,ot,_),m=Ft.get(k,b.length),m.init(ot),b.push(m),ft.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),j.setFromProjectionMatrix(ft),at=this.localClippingEnabled,X=_t.init(this.clippingPlanes,at),v=St.get(k,g.length),v.init(),g.push(v),gt.enabled===!0&&gt.isPresenting===!0){const Tt=x.xr.getDepthSensingMesh();Tt!==null&&hs(Tt,ot,-1/0,x.sortObjects)}hs(k,ot,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(N,H),vt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,vt&&Bt.addToRenderList(v,k),this.info.render.frame++,X===!0&&_t.beginShadows();const ht=m.state.shadowsArray;At.render(ht,k,ot),X===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=v.opaque,it=v.transmissive;if(m.setupLights(),ot.isArrayCamera){const Tt=ot.cameras;if(it.length>0)for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const Gt=Tt[Nt];kt(dt,it,k,Gt)}vt&&Bt.render(k);for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const Gt=Tt[Nt];gh(v,k,Gt,Gt.viewport)}}else it.length>0&&kt(dt,it,k,ot),vt&&Bt.render(k),gh(v,k,ot);_!==null&&(F.updateMultisampleRenderTarget(_),F.updateRenderTargetMipmap(_)),k.isScene===!0&&k.onAfterRender(x,k,ot),de.resetDefaultState(),y=-1,A=null,b.pop(),b.length>0?(m=b[b.length-1],X===!0&&_t.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function hs(k,ot,ht,dt){if(k.visible===!1)return;if(k.layers.test(ot.layers)){if(k.isGroup)ht=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(ot);else if(k.isLight)m.pushLight(k),k.castShadow&&m.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||j.intersectsSprite(k)){dt&&q.setFromMatrixPosition(k.matrixWorld).applyMatrix4(ft);const Nt=W.update(k),zt=k.material;zt.visible&&v.push(k,Nt,zt,ht,q.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||j.intersectsObject(k))){const Nt=W.update(k),zt=k.material;if(dt&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),q.copy(k.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),q.copy(Nt.boundingSphere.center)),q.applyMatrix4(k.matrixWorld).applyMatrix4(ft)),Array.isArray(zt)){const Gt=Nt.groups;for(let Yt=0,Zt=Gt.length;Yt<Zt;Yt++){const Ht=Gt[Yt],Me=zt[Ht.materialIndex];Me&&Me.visible&&v.push(k,Nt,Me,ht,q.z,Ht)}}else zt.visible&&v.push(k,Nt,zt,ht,q.z,null)}}const Tt=k.children;for(let Nt=0,zt=Tt.length;Nt<zt;Nt++)hs(Tt[Nt],ot,ht,dt)}function gh(k,ot,ht,dt){const it=k.opaque,Tt=k.transmissive,Nt=k.transparent;m.setupLightsView(ht),X===!0&&_t.setGlobalState(x.clippingPlanes,ht),dt&&Z.viewport(M.copy(dt)),it.length>0&&Ke(it,ot,ht),Tt.length>0&&Ke(Tt,ot,ht),Nt.length>0&&Ke(Nt,ot,ht),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function kt(k,ot,ht,dt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[dt.id]===void 0&&(m.state.transmissionRenderTarget[dt.id]=new Mn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ao:Ho,minFilter:Qo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const Tt=m.state.transmissionRenderTarget[dt.id],Nt=dt.viewport||M;Tt.setSize(Nt.z,Nt.w);const zt=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(L),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),vt&&Bt.render(ht);const Gt=x.toneMapping;x.toneMapping=Si;const Yt=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),m.setupLightsView(dt),X===!0&&_t.setGlobalState(x.clippingPlanes,dt),Ke(k,ht,dt),F.updateMultisampleRenderTarget(Tt),F.updateRenderTargetMipmap(Tt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ht=0,Me=ot.length;Ht<Me;Ht++){const Ae=ot[Ht],Be=Ae.object,qn=Ae.geometry,pe=Ae.material,Vt=Ae.group;if(pe.side===we&&Be.layers.test(dt.layers)){const gn=pe.side;pe.side=on,pe.needsUpdate=!0,ve(Be,ht,dt,qn,pe,Vt),pe.side=gn,pe.needsUpdate=!0,Zt=!0}}Zt===!0&&(F.updateMultisampleRenderTarget(Tt),F.updateRenderTargetMipmap(Tt))}x.setRenderTarget(zt),x.setClearColor(L,U),Yt!==void 0&&(dt.viewport=Yt),x.toneMapping=Gt}function Ke(k,ot,ht){const dt=ot.isScene===!0?ot.overrideMaterial:null;for(let it=0,Tt=k.length;it<Tt;it++){const Nt=k[it],zt=Nt.object,Gt=Nt.geometry,Yt=dt===null?Nt.material:dt,Zt=Nt.group;zt.layers.test(ht.layers)&&ve(zt,ot,ht,Gt,Yt,Zt)}}function ve(k,ot,ht,dt,it,Tt){k.onBeforeRender(x,ot,ht,dt,it,Tt),k.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),it.onBeforeRender(x,ot,ht,dt,k,Tt),it.transparent===!0&&it.side===we&&it.forceSinglePass===!1?(it.side=on,it.needsUpdate=!0,x.renderBufferDirect(ht,ot,dt,it,k,Tt),it.side=bi,it.needsUpdate=!0,x.renderBufferDirect(ht,ot,dt,it,k,Tt),it.side=we):x.renderBufferDirect(ht,ot,dt,it,k,Tt),k.onAfterRender(x,ot,ht,dt,it,Tt)}function xe(k,ot,ht){ot.isScene!==!0&&(ot=ct);const dt=Y.get(k),it=m.state.lights,Tt=m.state.shadowsArray,Nt=it.state.version,zt=xt.getParameters(k,it.state,Tt,ot,ht),Gt=xt.getProgramCacheKey(zt);let Yt=dt.programs;dt.environment=k.isMeshStandardMaterial?ot.environment:null,dt.fog=ot.fog,dt.envMap=(k.isMeshStandardMaterial?K:C).get(k.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&k.envMap===null?ot.environmentRotation:k.envMapRotation,Yt===void 0&&(k.addEventListener("dispose",oe),Yt=new Map,dt.programs=Yt);let Zt=Yt.get(Gt);if(Zt!==void 0){if(dt.currentProgram===Zt&&dt.lightsStateVersion===Nt)return En(k,zt),Zt}else zt.uniforms=xt.getUniforms(k),k.onBeforeCompile(zt,x),Zt=xt.acquireProgram(zt,Gt),Yt.set(Gt,Zt),dt.uniforms=zt.uniforms;const Ht=dt.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Ht.clippingPlanes=_t.uniform),En(k,zt),dt.needsLights=cx(k),dt.lightsStateVersion=Nt,dt.needsLights&&(Ht.ambientLightColor.value=it.state.ambient,Ht.lightProbe.value=it.state.probe,Ht.directionalLights.value=it.state.directional,Ht.directionalLightShadows.value=it.state.directionalShadow,Ht.spotLights.value=it.state.spot,Ht.spotLightShadows.value=it.state.spotShadow,Ht.rectAreaLights.value=it.state.rectArea,Ht.ltc_1.value=it.state.rectAreaLTC1,Ht.ltc_2.value=it.state.rectAreaLTC2,Ht.pointLights.value=it.state.point,Ht.pointLightShadows.value=it.state.pointShadow,Ht.hemisphereLights.value=it.state.hemi,Ht.directionalShadowMap.value=it.state.directionalShadowMap,Ht.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ht.spotShadowMap.value=it.state.spotShadowMap,Ht.spotLightMatrix.value=it.state.spotLightMatrix,Ht.spotLightMap.value=it.state.spotLightMap,Ht.pointShadowMap.value=it.state.pointShadowMap,Ht.pointShadowMatrix.value=it.state.pointShadowMatrix),dt.currentProgram=Zt,dt.uniformsList=null,Zt}function Bn(k){if(k.uniformsList===null){const ot=k.currentProgram.getUniforms();k.uniformsList=eu.seqWithValue(ot.seq,k.uniforms)}return k.uniformsList}function En(k,ot){const ht=Y.get(k);ht.outputColorSpace=ot.outputColorSpace,ht.batching=ot.batching,ht.batchingColor=ot.batchingColor,ht.instancing=ot.instancing,ht.instancingColor=ot.instancingColor,ht.instancingMorph=ot.instancingMorph,ht.skinning=ot.skinning,ht.morphTargets=ot.morphTargets,ht.morphNormals=ot.morphNormals,ht.morphColors=ot.morphColors,ht.morphTargetsCount=ot.morphTargetsCount,ht.numClippingPlanes=ot.numClippingPlanes,ht.numIntersection=ot.numClipIntersection,ht.vertexAlphas=ot.vertexAlphas,ht.vertexTangents=ot.vertexTangents,ht.toneMapping=ot.toneMapping}function cn(k,ot,ht,dt,it){ot.isScene!==!0&&(ot=ct),F.resetTextureUnits();const Tt=ot.fog,Nt=dt.isMeshStandardMaterial?ot.environment:null,zt=_===null?x.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Vo,Gt=(dt.isMeshStandardMaterial?K:C).get(dt.envMap||Nt),Yt=dt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,Zt=!!ht.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Ht=!!ht.morphAttributes.position,Me=!!ht.morphAttributes.normal,Ae=!!ht.morphAttributes.color;let Be=Si;dt.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Be=x.toneMapping);const qn=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,pe=qn!==void 0?qn.length:0,Vt=Y.get(dt),gn=m.state.lights;if(X===!0&&(at===!0||k!==A)){const uo=k===A&&dt.id===y;_t.setState(dt,k,uo)}let me=!1;dt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==gn.state.version||Vt.outputColorSpace!==zt||it.isBatchedMesh&&Vt.batching===!1||!it.isBatchedMesh&&Vt.batching===!0||it.isBatchedMesh&&Vt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Vt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Vt.instancing===!1||!it.isInstancedMesh&&Vt.instancing===!0||it.isSkinnedMesh&&Vt.skinning===!1||!it.isSkinnedMesh&&Vt.skinning===!0||it.isInstancedMesh&&Vt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Vt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Vt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Vt.instancingMorph===!1&&it.morphTexture!==null||Vt.envMap!==Gt||dt.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==_t.numPlanes||Vt.numIntersection!==_t.numIntersection)||Vt.vertexAlphas!==Yt||Vt.vertexTangents!==Zt||Vt.morphTargets!==Ht||Vt.morphNormals!==Me||Vt.morphColors!==Ae||Vt.toneMapping!==Be||Vt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Vt.__version=dt.version);let Po=Vt.currentProgram;me===!0&&(Po=xe(dt,ot,it));let qs=!1,Yn=!1,vh=!1;const Ve=Po.getUniforms(),Ti=Vt.uniforms;if(Z.useProgram(Po.program)&&(qs=!0,Yn=!0,vh=!0),dt.id!==y&&(y=dt.id,Yn=!0),qs||A!==k){nt.reverseDepthBuffer?(rt.copy(k.projectionMatrix),gM(rt),vM(rt),Ve.setValue(I,"projectionMatrix",rt)):Ve.setValue(I,"projectionMatrix",k.projectionMatrix),Ve.setValue(I,"viewMatrix",k.matrixWorldInverse);const uo=Ve.map.cameraPosition;uo!==void 0&&uo.setValue(I,et.setFromMatrixPosition(k.matrixWorld)),nt.logarithmicDepthBuffer&&Ve.setValue(I,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Ve.setValue(I,"isOrthographic",k.isOrthographicCamera===!0),A!==k&&(A=k,Yn=!0,vh=!0)}if(it.isSkinnedMesh){Ve.setOptional(I,it,"bindMatrix"),Ve.setOptional(I,it,"bindMatrixInverse");const uo=it.skeleton;uo&&(uo.boneTexture===null&&uo.computeBoneTexture(),Ve.setValue(I,"boneTexture",uo.boneTexture,F))}it.isBatchedMesh&&(Ve.setOptional(I,it,"batchingTexture"),Ve.setValue(I,"batchingTexture",it._matricesTexture,F),Ve.setOptional(I,it,"batchingIdTexture"),Ve.setValue(I,"batchingIdTexture",it._indirectTexture,F),Ve.setOptional(I,it,"batchingColorTexture"),it._colorsTexture!==null&&Ve.setValue(I,"batchingColorTexture",it._colorsTexture,F));const xh=ht.morphAttributes;if((xh.position!==void 0||xh.normal!==void 0||xh.color!==void 0)&&Xt.update(it,ht,Po),(Yn||Vt.receiveShadow!==it.receiveShadow)&&(Vt.receiveShadow=it.receiveShadow,Ve.setValue(I,"receiveShadow",it.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(Ti.envMap.value=Gt,Ti.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&ot.environment!==null&&(Ti.envMapIntensity.value=ot.environmentIntensity),Yn&&(Ve.setValue(I,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&fs(Ti,vh),Tt&&dt.fog===!0&&yt.refreshFogUniforms(Ti,Tt),yt.refreshMaterialUniforms(Ti,dt,B,O,m.state.transmissionRenderTarget[k.id]),eu.upload(I,Bn(Vt),Ti,F)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(eu.upload(I,Bn(Vt),Ti,F),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Ve.setValue(I,"center",it.center),Ve.setValue(I,"modelViewMatrix",it.modelViewMatrix),Ve.setValue(I,"normalMatrix",it.normalMatrix),Ve.setValue(I,"modelMatrix",it.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const uo=dt.uniformsGroups;for(let Mh=0,ux=uo.length;Mh<ux;Mh++){const np=uo[Mh];J.update(np,Po),J.bind(np,Po)}}return Po}function fs(k,ot){k.ambientLightColor.needsUpdate=ot,k.lightProbe.needsUpdate=ot,k.directionalLights.needsUpdate=ot,k.directionalLightShadows.needsUpdate=ot,k.pointLights.needsUpdate=ot,k.pointLightShadows.needsUpdate=ot,k.spotLights.needsUpdate=ot,k.spotLightShadows.needsUpdate=ot,k.rectAreaLights.needsUpdate=ot,k.hemisphereLights.needsUpdate=ot}function cx(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(k,ot,ht){Y.get(k.texture).__webglTexture=ot,Y.get(k.depthTexture).__webglTexture=ht;const dt=Y.get(k);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=ht===void 0,dt.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(k,ot){const ht=Y.get(k);ht.__webglFramebuffer=ot,ht.__useDefaultFramebuffer=ot===void 0},this.setRenderTarget=function(k,ot=0,ht=0){_=k,E=ot,S=ht;let dt=!0,it=null,Tt=!1,Nt=!1;if(k){const Gt=Y.get(k);if(Gt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),dt=!1;else if(Gt.__webglFramebuffer===void 0)F.setupRenderTarget(k);else if(Gt.__hasExternalTextures)F.rebindTextures(k,Y.get(k.texture).__webglTexture,Y.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const Ht=k.depthTexture;if(Gt.__boundDepthTexture!==Ht){if(Ht!==null&&Y.has(Ht)&&(k.width!==Ht.image.width||k.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(k)}}const Yt=k.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Zt=Y.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Zt[ot])?it=Zt[ot][ht]:it=Zt[ot],Tt=!0):k.samples>0&&F.useMultisampledRTT(k)===!1?it=Y.get(k).__webglMultisampledFramebuffer:Array.isArray(Zt)?it=Zt[ht]:it=Zt,M.copy(k.viewport),T.copy(k.scissor),R=k.scissorTest}else M.copy(G).multiplyScalar(B).floor(),T.copy($).multiplyScalar(B).floor(),R=Q;if(Z.bindFramebuffer(I.FRAMEBUFFER,it)&&dt&&Z.drawBuffers(k,it),Z.viewport(M),Z.scissor(T),Z.setScissorTest(R),Tt){const Gt=Y.get(k.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt.__webglTexture,ht)}else if(Nt){const Gt=Y.get(k.texture),Yt=ot||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,ht||0,Yt)}y=-1},this.readRenderTargetPixels=function(k,ot,ht,dt,it,Tt,Nt){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Y.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){Z.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Gt=k.texture,Yt=Gt.format,Zt=Gt.type;if(!nt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=k.width-dt&&ht>=0&&ht<=k.height-it&&I.readPixels(ot,ht,dt,it,Wt.convert(Yt),Wt.convert(Zt),Tt)}finally{const Gt=_!==null?Y.get(_).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(k,ot,ht,dt,it,Tt,Nt){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Y.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){const Gt=k.texture,Yt=Gt.format,Zt=Gt.type;if(!nt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ot>=0&&ot<=k.width-dt&&ht>=0&&ht<=k.height-it){Z.bindFramebuffer(I.FRAMEBUFFER,zt);const Ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ht),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(ot,ht,dt,it,Wt.convert(Yt),Wt.convert(Zt),0);const Me=_!==null?Y.get(_).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Me);const Ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mM(I,Ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(Ht),I.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(k,ot=null,ht=0){k.isTexture!==!0&&(tu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ot=arguments[0]||null,k=arguments[1]);const dt=Math.pow(2,-ht),it=Math.floor(k.image.width*dt),Tt=Math.floor(k.image.height*dt),Nt=ot!==null?ot.x:0,zt=ot!==null?ot.y:0;F.setTexture2D(k,0),I.copyTexSubImage2D(I.TEXTURE_2D,ht,0,0,Nt,zt,it,Tt),Z.unbindTexture()},this.copyTextureToTexture=function(k,ot,ht=null,dt=null,it=0){k.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture function signature has changed."),dt=arguments[0]||null,k=arguments[1],ot=arguments[2],it=arguments[3]||0,ht=null);let Tt,Nt,zt,Gt,Yt,Zt;ht!==null?(Tt=ht.max.x-ht.min.x,Nt=ht.max.y-ht.min.y,zt=ht.min.x,Gt=ht.min.y):(Tt=k.image.width,Nt=k.image.height,zt=0,Gt=0),dt!==null?(Yt=dt.x,Zt=dt.y):(Yt=0,Zt=0);const Ht=Wt.convert(ot.format),Me=Wt.convert(ot.type);F.setTexture2D(ot,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ot.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ot.unpackAlignment);const Ae=I.getParameter(I.UNPACK_ROW_LENGTH),Be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qn=I.getParameter(I.UNPACK_SKIP_PIXELS),pe=I.getParameter(I.UNPACK_SKIP_ROWS),Vt=I.getParameter(I.UNPACK_SKIP_IMAGES),gn=k.isCompressedTexture?k.mipmaps[it]:k.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,gn.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),k.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,it,Yt,Zt,Tt,Nt,Ht,Me,gn.data):k.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,it,Yt,Zt,gn.width,gn.height,Ht,gn.data):I.texSubImage2D(I.TEXTURE_2D,it,Yt,Zt,Tt,Nt,Ht,Me,gn),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ae),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt),it===0&&ot.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(k,ot,ht=null,dt=null,it=0){k.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,dt=arguments[1]||null,k=arguments[2],ot=arguments[3],it=arguments[4]||0);let Tt,Nt,zt,Gt,Yt,Zt,Ht,Me,Ae;const Be=k.isCompressedTexture?k.mipmaps[it]:k.image;ht!==null?(Tt=ht.max.x-ht.min.x,Nt=ht.max.y-ht.min.y,zt=ht.max.z-ht.min.z,Gt=ht.min.x,Yt=ht.min.y,Zt=ht.min.z):(Tt=Be.width,Nt=Be.height,zt=Be.depth,Gt=0,Yt=0,Zt=0),dt!==null?(Ht=dt.x,Me=dt.y,Ae=dt.z):(Ht=0,Me=0,Ae=0);const qn=Wt.convert(ot.format),pe=Wt.convert(ot.type);let Vt;if(ot.isData3DTexture)F.setTexture3D(ot,0),Vt=I.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)F.setTexture2DArray(ot,0),Vt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ot.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ot.unpackAlignment);const gn=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Po=I.getParameter(I.UNPACK_SKIP_PIXELS),qs=I.getParameter(I.UNPACK_SKIP_ROWS),Yn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),k.isDataTexture||k.isData3DTexture?I.texSubImage3D(Vt,it,Ht,Me,Ae,Tt,Nt,zt,qn,pe,Be.data):ot.isCompressedArrayTexture?I.compressedTexSubImage3D(Vt,it,Ht,Me,Ae,Tt,Nt,zt,qn,Be.data):I.texSubImage3D(Vt,it,Ht,Me,Ae,Tt,Nt,zt,qn,pe,Be),I.pixelStorei(I.UNPACK_ROW_LENGTH,gn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Po),I.pixelStorei(I.UNPACK_SKIP_ROWS,qs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yn),it===0&&ot.generateMipmaps&&I.generateMipmap(Vt),Z.unbindTexture()},this.initRenderTarget=function(k){Y.get(k).__webglFramebuffer===void 0&&F.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?F.setTextureCube(k,0):k.isData3DTexture?F.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?F.setTexture2DArray(k,0):F.setTexture2D(k,0),Z.unbindTexture()},this.resetState=function(){E=0,S=0,_=null,Z.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rd?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Qu?"display-p3":"srgb"}}class nh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new nh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sl extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ab{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lf,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,o){t*=this.stride,o*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[o+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),o=new this.constructor(e,this.stride);return o.setUsage(this.usage),o}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new P;class _u{constructor(t,e,o,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=o,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,o=this.data.count;e<o;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,o=this.count;e<o;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,o=this.count;e<o;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}getComponent(t,e){let o=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(o=zo(o,this.array)),o}setComponent(t,e,o){return this.normalized&&(o=ye(o,this.array)),this.data.array[t*this.data.stride+this.offset+e]=o,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zo(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zo(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zo(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zo(e,this.array)),e}setXY(t,e,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this}setXYZ(t,e,o,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this.data.array[t+2]=i,this}setXYZW(t,e,o,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),o=ye(o,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=o,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let o=0;o<this.count;o++){const i=o*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let o=0;o<this.count;o++){const i=o*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fd extends Hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let lr;const xa=new P,cr=new P,ur=new P,hr=new st,Ma=new st,Pv=new It,Ql=new P,ya=new P,tc=new P,Zp=new st,Zh=new st,Kp=new st;class Cv extends Ie{constructor(t=new Fd){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new $t;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),o=new Ab(e,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new _u(o,3,0,!1)),lr.setAttribute("uv",new _u(o,2,3,!1))}this.geometry=lr,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Pv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-ur.z);const o=this.material.rotation;let i,s;o!==0&&(s=Math.cos(o),i=Math.sin(o));const r=this.center;ec(Ql.set(-.5,-.5,0),ur,r,cr,i,s),ec(ya.set(.5,-.5,0),ur,r,cr,i,s),ec(tc.set(.5,.5,0),ur,r,cr,i,s),Zp.set(0,0),Zh.set(1,0),Kp.set(1,1);let a=t.ray.intersectTriangle(Ql,ya,tc,!1,xa);if(a===null&&(ec(ya.set(-.5,.5,0),ur,r,cr,i,s),Zh.set(0,1),a=t.ray.intersectTriangle(Ql,tc,ya,!1,xa),a===null))return;const l=t.ray.origin.distanceTo(xa);l<t.near||l>t.far||e.push({distance:l,point:xa.clone(),uv:So.getInterpolation(xa,Ql,ya,tc,Zp,Zh,Kp,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ec(n,t,e,o,i,s){hr.subVectors(n,e).addScalar(.5).multiply(o),i!==void 0?(Ma.x=s*hr.x-i*hr.y,Ma.y=i*hr.x+s*hr.y):Ma.copy(hr),n.copy(t),n.x+=Ma.x,n.y+=Ma.y,n.applyMatrix4(Pv)}class oh extends Sn{constructor(t=null,e=1,o=1,i,s,r,a,l,c=Wn,u=Wn,h,f){super(null,r,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:o},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Su extends qt{constructor(t,e,o,i=1){super(t,e,o),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fr=new It,jp=new It,nc=[],Jp=new Ln,Rb=new It,wa=new lt,_a=new Gs;class Go extends lt{constructor(t,e,o){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Su(new Float32Array(o*16),16),this.instanceColor=null,this.morphTexture=null,this.count=o,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<o;i++)this.setMatrixAt(i,Rb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let o=0;o<e;o++)this.getMatrixAt(o,fr),Jp.copy(t.boundingBox).applyMatrix4(fr),this.boundingBox.union(Jp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let o=0;o<e;o++)this.getMatrixAt(o,fr),_a.copy(t.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const o=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=o.length+1,r=t*s+1;for(let a=0;a<o.length;a++)o[a]=i[r+a]}raycast(t,e){const o=this.matrixWorld,i=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(o),t.ray.intersectsSphere(_a)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fr),jp.multiplyMatrices(o,fr),wa.matrixWorld=jp,wa.raycast(t,nc);for(let r=0,a=nc.length;r<a;r++){const l=nc[r];l.instanceId=s,l.object=this,e.push(l)}nc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const o=e.morphTargetInfluences,i=o.length+1;this.morphTexture===null&&(this.morphTexture=new oh(new Float32Array(i*this.count),i,this.count,bd,ro));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<o.length;c++)r+=o[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(o,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Iv extends Hs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qp=new It,Nf=new Cd,oc=new Gs,ic=new P;class us extends Ie{constructor(t=new $t,e=new Iv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const o=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=o.drawRange;if(o.boundingSphere===null&&o.computeBoundingSphere(),oc.copy(o.boundingSphere),oc.applyMatrix4(i),oc.radius+=s,t.ray.intersectsSphere(oc)===!1)return;Qp.copy(i).invert(),Nf.copy(t.ray).applyMatrix4(Qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=o.index,h=o.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let p=f,v=d;p<v;p++){const m=c.getX(p);ic.fromBufferAttribute(h,m),tm(ic,m,l,i,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let p=f,v=d;p<v;p++)ic.fromBufferAttribute(h,p),tm(ic,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,o=Object.keys(e);if(o.length>0){const i=e[o[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tm(n,t,e,o,i,s,r){const a=Nf.distanceSqToPoint(n);if(a<e){const l=new P;Nf.closestPointToPoint(n,l),l.applyMatrix4(o);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ce extends Sn{constructor(t,e,o,i,s,r,a,l,c){super(t,e,o,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const o=this.getUtoTmapping(t);return this.getPoint(o,e)}getPoints(t=5){const e=[];for(let o=0;o<=t;o++)e.push(this.getPoint(o/t));return e}getSpacedPoints(t=5){const e=[];for(let o=0;o<=t;o++)e.push(this.getPointAt(o/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let o,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)o=this.getPoint(r/t),s+=o.distanceTo(i),e.push(s),i=o;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const o=this.getLengths();let i=0;const s=o.length;let r;e?r=e:r=t*o[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=o[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,o[i]===r)return i/(s-1);const u=o[i],f=o[i+1]-u,d=(r-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=e||(r.isVector2?new st:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const o=this.getUtoTmapping(t);return this.getTangent(o,e)}computeFrenetFrames(t,e){const o=new P,i=[],s=[],r=[],a=new P,l=new It;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new P)}s[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,o.set(1,0,0)),h<=c&&(c=h,o.set(0,1,0)),f<=c&&o.set(0,0,1),a.crossVectors(i[0],o).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ze(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ze(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ih extends Ao{constructor(t=0,e=0,o=1,i=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=o,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const o=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return o.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pb extends ih{constructor(t,e,o,i,s,r){super(t,e,o,o,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Od(){let n=0,t=0,e=0,o=0;function i(s,r,a,l){n=s,t=a,e=-3*s+3*r-2*a-l,o=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){i(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,u,h){let f=(r-s)/c-(a-s)/(c+u)+(a-r)/u,d=(a-r)/u-(l-r)/(u+h)+(l-a)/h;f*=u,d*=u,i(r,a,f,d)},calc:function(s){const r=s*s,a=r*s;return n+t*s+e*r+o*a}}}const sc=new P,Kh=new Od,jh=new Od,Jh=new Od;class zn extends Ao{constructor(t=[],e=!1,o="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=o,this.tension=i}getPoint(t,e=new P){const o=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(sc.subVectors(i[0],i[1]).add(i[0]),c=sc);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(sc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=sc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Kh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,v,m),jh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,v,m),Jh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(Kh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),jh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Jh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return o.set(Kh.calc(l),jh.calc(l),Jh.calc(l)),o}copy(t){super.copy(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,o=this.points.length;e<o;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function em(n,t,e,o,i){const s=(o-t)*.5,r=(i-e)*.5,a=n*n,l=n*a;return(2*e-2*o+s+r)*l+(-3*e+3*o-2*s-r)*a+s*n+e}function Cb(n,t){const e=1-n;return e*e*t}function Ib(n,t){return 2*(1-n)*n*t}function Lb(n,t){return n*n*t}function tl(n,t,e,o){return Cb(n,t)+Ib(n,e)+Lb(n,o)}function Db(n,t){const e=1-n;return e*e*e*t}function Nb(n,t){const e=1-n;return 3*e*e*n*t}function Ub(n,t){return 3*(1-n)*n*n*t}function Fb(n,t){return n*n*n*t}function el(n,t,e,o,i){return Db(n,t)+Nb(n,e)+Ub(n,o)+Fb(n,i)}class Lv extends Ao{constructor(t=new st,e=new st,o=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=o,this.v3=i}getPoint(t,e=new st){const o=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return o.set(el(t,i.x,s.x,r.x,a.x),el(t,i.y,s.y,r.y,a.y)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zd extends Ao{constructor(t=new P,e=new P,o=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=o,this.v3=i}getPoint(t,e=new P){const o=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return o.set(el(t,i.x,s.x,r.x,a.x),el(t,i.y,s.y,r.y,a.y),el(t,i.z,s.z,r.z,a.z)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dv extends Ao{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const o=e;return t===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(t).add(this.v1)),o}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends Ao{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const o=e;return t===1?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(t).add(this.v1)),o}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uv extends Ao{constructor(t=new st,e=new st,o=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=o}getPoint(t,e=new st){const o=e,i=this.v0,s=this.v1,r=this.v2;return o.set(tl(t,i.x,s.x,r.x),tl(t,i.y,s.y,r.y)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends Ao{constructor(t=new P,e=new P,o=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=o}getPoint(t,e=new P){const o=e,i=this.v0,s=this.v1,r=this.v2;return o.set(tl(t,i.x,s.x,r.x),tl(t,i.y,s.y,r.y),tl(t,i.z,s.z,r.z)),o}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fv extends Ao{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const o=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return o.set(em(a,l.x,c.x,u.x,h.x),em(a,l.y,c.y,u.y,h.y)),o}copy(t){super.copy(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,o=this.points.length;e<o;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,o=t.points.length;e<o;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:Pb,CatmullRomCurve3:zn,CubicBezierCurve:Lv,CubicBezierCurve3:zd,EllipseCurve:ih,LineCurve:Dv,LineCurve3:Nv,QuadraticBezierCurve:Uv,QuadraticBezierCurve3:bu,SplineCurve:Fv});class Ob extends Ao{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const o=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[o](e,t))}return this}getPoint(t,e){const o=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=o){const r=i[s]-o,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let o=0,i=this.curves.length;o<i;o++)e+=this.curves[o].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let o=0;o<=t;o++)e.push(this.getPoint(o/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let o;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];o&&o.equals(u)||(e.push(u),o=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,o=t.curves.length;e<o;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,o=this.curves.length;e<o;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,o=t.curves.length;e<o;e++){const i=t.curves[e];this.curves.push(new Tu[i.type]().fromJSON(i))}return this}}class ei extends Ob{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,o=t.length;e<o;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const o=new Dv(this.currentPoint.clone(),new st(t,e));return this.curves.push(o),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,o,i){const s=new Uv(this.currentPoint.clone(),new st(t,e),new st(o,i));return this.curves.push(s),this.currentPoint.set(o,i),this}bezierCurveTo(t,e,o,i,s,r){const a=new Lv(this.currentPoint.clone(),new st(t,e),new st(o,i),new st(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),o=new Fv(e);return this.curves.push(o),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,o,i,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,o,i,s,r),this}absarc(t,e,o,i,s,r){return this.absellipse(t,e,o,o,i,s,r),this}ellipse(t,e,o,i,s,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,o,i,s,r,a,l),this}absellipse(t,e,o,i,s,r,a,l){const c=new ih(t,e,o,i,s,r,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class an extends $t{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,o=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:o,phiLength:i},e=Math.floor(e),i=Ze(i,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],u=1/e,h=new P,f=new st,d=new P,p=new P,v=new P;let m=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-m,d.z=g*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let b=0;b<=e;b++){const x=o+b*u*i,w=Math.sin(x),E=Math.cos(x);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*w,h.y=t[S].y,h.z=t[S].x*E,r.push(h.x,h.y,h.z),f.x=b/e,f.y=S/(t.length-1),a.push(f.x,f.y);const _=l[3*S+0]*w,y=l[3*S+1],A=l[3*S+0]*E;c.push(_,y,A)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){const w=x+b*t.length,E=w,S=w+t.length,_=w+t.length+1,y=w+1;s.push(E,S,y),s.push(_,y,S)}this.setIndex(s),this.setAttribute("position",new Dt(r,3)),this.setAttribute("uv",new Dt(a,2)),this.setAttribute("normal",new Dt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.points,t.segments,t.phiStart,t.phiLength)}}class bl extends $t{constructor(t=1,e=32,o=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:o,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new P,u=new st;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=o+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends $t{constructor(t=1,e=1,o=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:o,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const v=[],m=o/2;let g=0;b(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function b(){const w=new P,E=new P;let S=0;const _=(e-t)/o;for(let y=0;y<=s;y++){const A=[],M=y/s,T=M*(e-t)+t;for(let R=0;R<=i;R++){const L=R/i,U=L*l+a,z=Math.sin(U),O=Math.cos(U);E.x=T*z,E.y=-M*o+m,E.z=T*O,h.push(E.x,E.y,E.z),w.set(z,_,O).normalize(),f.push(w.x,w.y,w.z),d.push(L,1-M),A.push(p++)}v.push(A)}for(let y=0;y<i;y++)for(let A=0;A<s;A++){const M=v[A][y],T=v[A+1][y],R=v[A+1][y+1],L=v[A][y+1];t>0&&(u.push(M,T,L),S+=3),e>0&&(u.push(T,R,L),S+=3)}c.addGroup(g,S,0),g+=S}function x(w){const E=p,S=new st,_=new P;let y=0;const A=w===!0?t:e,M=w===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),p++;const T=p;for(let R=0;R<=i;R++){const U=R/i*l+a,z=Math.cos(U),O=Math.sin(U);_.x=A*O,_.y=m*M,_.z=A*z,h.push(_.x,_.y,_.z),f.push(0,M,0),S.x=z*.5+.5,S.y=O*.5*M+.5,d.push(S.x,S.y),p++}for(let R=0;R<i;R++){const L=E+R,U=T+R;w===!0?u.push(U,U+1,L):u.push(U+1,U,L),y+=3}c.addGroup(g,y,w===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tl extends ie{constructor(t=1,e=1,o=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,o,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:o,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Tl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ln extends ei{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let o=0,i=this.holes.length;o<i;o++)e[o]=this.holes[o].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,o=t.holes.length;e<o;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,o=this.holes.length;e<o;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,o=t.holes.length;e<o;e++){const i=t.holes[e];this.holes.push(new ei().fromJSON(i))}return this}}const zb={triangulate:function(n,t,e=2){const o=t&&t.length,i=o?t[0]*e:n.length;let s=Ov(n,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,u,h,f,d;if(o&&(s=Vb(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let p=e;p<i;p+=e)h=n[p],f=n[p+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return pl(s,r,e,a,l,d,0),r}};function Ov(n,t,e,o,i){let s,r;if(i===t3(n,t,e,o)>0)for(s=t;s<e;s+=o)r=nm(s,n[s],n[s+1],r);else for(s=e-o;s>=t;s-=o)r=nm(s,n[s],n[s+1],r);return r&&sh(r,r.next)&&(gl(r),r=r.next),r}function Bs(n,t){if(!n)return n;t||(t=n);let e=n,o;do if(o=!1,!e.steiner&&(sh(e,e.next)||ze(e.prev,e,e.next)===0)){if(gl(e),e=t=e.prev,e===e.next)break;o=!0}else e=e.next;while(o||e!==t);return t}function pl(n,t,e,o,i,s,r){if(!n)return;!r&&s&&Yb(n,o,i,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?kb(n,o,i,s):Bb(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),gl(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=Gb(Bs(n),t,e),pl(n,t,e,o,i,s,2)):r===2&&Hb(n,t,e,o,i,s):pl(Bs(n),t,e,o,i,s,1);break}}}function Bb(n){const t=n.prev,e=n,o=n.next;if(ze(t,e,o)>=0)return!1;const i=t.x,s=e.x,r=o.x,a=t.y,l=e.y,c=o.y,u=i<s?i<r?i:r:s<r?s:r,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>r?i:r:s>r?s:r,d=a>l?a>c?a:c:l>c?l:c;let p=o.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ir(i,a,s,l,r,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kb(n,t,e,o){const i=n.prev,s=n,r=n.next;if(ze(i,s,r)>=0)return!1;const a=i.x,l=s.x,c=r.x,u=i.y,h=s.y,f=r.y,d=a<l?a<c?a:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,g=Uf(d,p,t,e,o),b=Uf(v,m,t,e,o);let x=n.prevZ,w=n.nextZ;for(;x&&x.z>=g&&w&&w.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==r&&Ir(a,u,l,h,c,f,x.x,x.y)&&ze(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=d&&w.x<=v&&w.y>=p&&w.y<=m&&w!==i&&w!==r&&Ir(a,u,l,h,c,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==r&&Ir(a,u,l,h,c,f,x.x,x.y)&&ze(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=b;){if(w.x>=d&&w.x<=v&&w.y>=p&&w.y<=m&&w!==i&&w!==r&&Ir(a,u,l,h,c,f,w.x,w.y)&&ze(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Gb(n,t,e){let o=n;do{const i=o.prev,s=o.next.next;!sh(i,s)&&zv(i,o,o.next,s)&&ml(i,s)&&ml(s,i)&&(t.push(i.i/e|0),t.push(o.i/e|0),t.push(s.i/e|0),gl(o),gl(o.next),o=n=s),o=o.next}while(o!==n);return Bs(o)}function Hb(n,t,e,o,i,s){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&jb(r,a)){let l=Bv(r,a);r=Bs(r,r.next),l=Bs(l,l.next),pl(r,t,e,o,i,s,0),pl(l,t,e,o,i,s,0);return}a=a.next}r=r.next}while(r!==n)}function Vb(n,t,e,o){const i=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*o,l=s<r-1?t[s+1]*o:n.length,c=Ov(n,a,l,o,!1),c===c.next&&(c.steiner=!0),i.push(Kb(c));for(i.sort(Wb),s=0;s<i.length;s++)e=Xb(i[s],e);return e}function Wb(n,t){return n.x-t.x}function Xb(n,t){const e=$b(n,t);if(!e)return t;const o=Bv(e,n);return Bs(o,o.next),Bs(e,e.next)}function $b(n,t){let e=t,o=-1/0,i;const s=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>o&&(o=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ir(r<c?s:o,r,l,c,r<c?o:s,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(s-e.x),ml(e,n)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&qb(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function qb(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function Yb(n,t,e,o){let i=n;do i.z===0&&(i.z=Uf(i.x,i.y,t,e,o)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Zb(i)}function Zb(n){let t,e,o,i,s,r,a,l,c=1;do{for(e=n,n=null,s=null,r=0;e;){for(r++,o=e,a=0,t=0;t<c&&(a++,o=o.nextZ,!!o);t++);for(l=c;a>0||l>0&&o;)a!==0&&(l===0||!o||e.z<=o.z)?(i=e,e=e.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;e=o}s.nextZ=null,c*=2}while(r>1);return n}function Uf(n,t,e,o,i){return n=(n-e)*i|0,t=(t-o)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Kb(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ir(n,t,e,o,i,s,r,a){return(i-r)*(t-a)>=(n-r)*(s-a)&&(n-r)*(o-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(o-a)}function jb(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jb(n,t)&&(ml(n,t)&&ml(t,n)&&Qb(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||sh(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function sh(n,t){return n.x===t.x&&n.y===t.y}function zv(n,t,e,o){const i=ac(ze(n,t,e)),s=ac(ze(n,t,o)),r=ac(ze(e,o,n)),a=ac(ze(e,o,t));return!!(i!==s&&r!==a||i===0&&rc(n,e,t)||s===0&&rc(n,o,t)||r===0&&rc(e,n,o)||a===0&&rc(e,t,o))}function rc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ac(n){return n>0?1:n<0?-1:0}function Jb(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zv(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ml(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function Qb(n,t){let e=n,o=!1;const i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(o=!o),e=e.next;while(e!==n);return o}function Bv(n,t){const e=new Ff(n.i,n.x,n.y),o=new Ff(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,o.next=e,e.prev=o,s.next=o,o.prev=s,o}function nm(n,t,e,o){const i=new Ff(n,t,e);return o?(i.next=o.next,i.prev=o,o.next.prev=i,o.next=i):(i.prev=i,i.next=i),i}function gl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ff(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t3(n,t,e,o){let i=0;for(let s=t,r=e-o;s<e;s+=o)i+=(n[r]-n[s])*(n[s+1]+n[r+1]),r=s;return i}class ns{static area(t){const e=t.length;let o=0;for(let i=e-1,s=0;s<e;i=s++)o+=t[i].x*t[s].y-t[s].x*t[i].y;return o*.5}static isClockWise(t){return ns.area(t)<0}static triangulateShape(t,e){const o=[],i=[],s=[];om(t),im(o,t);let r=t.length;e.forEach(om);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,im(o,e[l]);const a=zb.triangulate(o,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function om(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function im(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class bn extends $t{constructor(t=new ln([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const o=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Dt(i,3)),this.setAttribute("uv",new Dt(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:e3;let x,w=!1,E,S,_,y;g&&(x=g.getSpacedPoints(u),w=!0,f=!1,E=g.computeFrenetFrames(u,!1),S=new P,_=new P,y=new P),f||(m=0,d=0,p=0,v=0);const A=a.extractPoints(c);let M=A.shape;const T=A.holes;if(!ns.isClockWise(M)){M=M.reverse();for(let V=0,I=T.length;V<I;V++){const D=T[V];ns.isClockWise(D)&&(T[V]=D.reverse())}}const L=ns.triangulateShape(M,T),U=M;for(let V=0,I=T.length;V<I;V++){const D=T[V];M=M.concat(D)}function z(V,I,D){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(I,D)}const O=M.length,B=L.length;function N(V,I,D){let tt,nt,Z;const pt=V.x-I.x,Y=V.y-I.y,F=D.x-V.x,C=D.y-V.y,K=pt*pt+Y*Y,ut=pt*C-Y*F;if(Math.abs(ut)>Number.EPSILON){const mt=Math.sqrt(K),W=Math.sqrt(F*F+C*C),xt=I.x-Y/mt,yt=I.y+pt/mt,St=D.x-C/W,Ft=D.y+F/W,_t=((St-xt)*C-(Ft-yt)*F)/(pt*C-Y*F);tt=xt+pt*_t-V.x,nt=yt+Y*_t-V.y;const At=tt*tt+nt*nt;if(At<=2)return new st(tt,nt);Z=Math.sqrt(At/2)}else{let mt=!1;pt>Number.EPSILON?F>Number.EPSILON&&(mt=!0):pt<-Number.EPSILON?F<-Number.EPSILON&&(mt=!0):Math.sign(Y)===Math.sign(C)&&(mt=!0),mt?(tt=-Y,nt=pt,Z=Math.sqrt(K)):(tt=pt,nt=Y,Z=Math.sqrt(K/2))}return new st(tt/Z,nt/Z)}const H=[];for(let V=0,I=U.length,D=I-1,tt=V+1;V<I;V++,D++,tt++)D===I&&(D=0),tt===I&&(tt=0),H[V]=N(U[V],U[D],U[tt]);const G=[];let $,Q=H.concat();for(let V=0,I=T.length;V<I;V++){const D=T[V];$=[];for(let tt=0,nt=D.length,Z=nt-1,pt=tt+1;tt<nt;tt++,Z++,pt++)Z===nt&&(Z=0),pt===nt&&(pt=0),$[tt]=N(D[tt],D[Z],D[pt]);G.push($),Q=Q.concat($)}for(let V=0;V<m;V++){const I=V/m,D=d*Math.cos(I*Math.PI/2),tt=p*Math.sin(I*Math.PI/2)+v;for(let nt=0,Z=U.length;nt<Z;nt++){const pt=z(U[nt],H[nt],tt);ft(pt.x,pt.y,-D)}for(let nt=0,Z=T.length;nt<Z;nt++){const pt=T[nt];$=G[nt];for(let Y=0,F=pt.length;Y<F;Y++){const C=z(pt[Y],$[Y],tt);ft(C.x,C.y,-D)}}}const j=p+v;for(let V=0;V<O;V++){const I=f?z(M[V],Q[V],j):M[V];w?(_.copy(E.normals[0]).multiplyScalar(I.x),S.copy(E.binormals[0]).multiplyScalar(I.y),y.copy(x[0]).add(_).add(S),ft(y.x,y.y,y.z)):ft(I.x,I.y,0)}for(let V=1;V<=u;V++)for(let I=0;I<O;I++){const D=f?z(M[I],Q[I],j):M[I];w?(_.copy(E.normals[V]).multiplyScalar(D.x),S.copy(E.binormals[V]).multiplyScalar(D.y),y.copy(x[V]).add(_).add(S),ft(y.x,y.y,y.z)):ft(D.x,D.y,h/u*V)}for(let V=m-1;V>=0;V--){const I=V/m,D=d*Math.cos(I*Math.PI/2),tt=p*Math.sin(I*Math.PI/2)+v;for(let nt=0,Z=U.length;nt<Z;nt++){const pt=z(U[nt],H[nt],tt);ft(pt.x,pt.y,h+D)}for(let nt=0,Z=T.length;nt<Z;nt++){const pt=T[nt];$=G[nt];for(let Y=0,F=pt.length;Y<F;Y++){const C=z(pt[Y],$[Y],tt);w?ft(C.x,C.y+x[u-1].y,x[u-1].x+D):ft(C.x,C.y,h+D)}}}X(),at();function X(){const V=i.length/3;if(f){let I=0,D=O*I;for(let tt=0;tt<B;tt++){const nt=L[tt];et(nt[2]+D,nt[1]+D,nt[0]+D)}I=u+m*2,D=O*I;for(let tt=0;tt<B;tt++){const nt=L[tt];et(nt[0]+D,nt[1]+D,nt[2]+D)}}else{for(let I=0;I<B;I++){const D=L[I];et(D[2],D[1],D[0])}for(let I=0;I<B;I++){const D=L[I];et(D[0]+O*u,D[1]+O*u,D[2]+O*u)}}o.addGroup(V,i.length/3-V,0)}function at(){const V=i.length/3;let I=0;rt(U,I),I+=U.length;for(let D=0,tt=T.length;D<tt;D++){const nt=T[D];rt(nt,I),I+=nt.length}o.addGroup(V,i.length/3-V,1)}function rt(V,I){let D=V.length;for(;--D>=0;){const tt=D;let nt=D-1;nt<0&&(nt=V.length-1);for(let Z=0,pt=u+m*2;Z<pt;Z++){const Y=O*Z,F=O*(Z+1),C=I+tt+Y,K=I+nt+Y,ut=I+nt+F,mt=I+tt+F;q(C,K,ut,mt)}}}function ft(V,I,D){l.push(V),l.push(I),l.push(D)}function et(V,I,D){ct(V),ct(I),ct(D);const tt=i.length/3,nt=b.generateTopUV(o,i,tt-3,tt-2,tt-1);vt(nt[0]),vt(nt[1]),vt(nt[2])}function q(V,I,D,tt){ct(V),ct(I),ct(tt),ct(I),ct(D),ct(tt);const nt=i.length/3,Z=b.generateSideWallUV(o,i,nt-6,nt-3,nt-2,nt-1);vt(Z[0]),vt(Z[1]),vt(Z[3]),vt(Z[1]),vt(Z[2]),vt(Z[3])}function ct(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2])}function vt(V){s.push(V.x),s.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,o=this.parameters.options;return n3(e,o,t)}static fromJSON(t,e){const o=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];o.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Tu[i.type]().fromJSON(i)),new bn(o,t.options)}}const e3={generateTopUV:function(n,t,e,o,i){const s=t[e*3],r=t[e*3+1],a=t[o*3],l=t[o*3+1],c=t[i*3],u=t[i*3+1];return[new st(s,r),new st(a,l),new st(c,u)]},generateSideWallUV:function(n,t,e,o,i,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[o*3],u=t[o*3+1],h=t[o*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],v=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new st(r,1-l),new st(c,1-h),new st(f,1-p),new st(v,1-g)]:[new st(a,1-l),new st(u,1-h),new st(d,1-p),new st(m,1-g)]}};function n3(n,t,e){if(e.shapes=[],Array.isArray(n))for(let o=0,i=n.length;o<i;o++){const s=n[o];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rh extends $t{constructor(t=.5,e=1,o=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:o,phiSegments:i,thetaStart:s,thetaLength:r},o=Math.max(3,o),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new P,p=new st;for(let v=0;v<=i;v++){for(let m=0;m<=o;m++){const g=s+m/o*r;d.x=h*Math.cos(g),d.y=h*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let v=0;v<i;v++){const m=v*(o+1);for(let g=0;g<o;g++){const b=g+m,x=b,w=b+o+1,E=b+o+2,S=b+1;a.push(x,w,S),a.push(w,E,S)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ws extends $t{constructor(t=new ln([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const o=[],i=[],s=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(o),this.setAttribute("position",new Dt(i,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2));function c(u){const h=i.length/3,f=u.extractPoints(e);let d=f.shape;const p=f.holes;ns.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const b=p[m];ns.isClockWise(b)===!0&&(p[m]=b.reverse())}const v=ns.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const b=p[m];d=d.concat(b)}for(let m=0,g=d.length;m<g;m++){const b=d[m];i.push(b.x,b.y,0),s.push(0,0,1),r.push(b.x,b.y)}for(let m=0,g=v.length;m<g;m++){const b=v[m],x=b[0]+h,w=b[1]+h,E=b[2]+h;o.push(x,w,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return o3(e,t)}static fromJSON(t,e){const o=[];for(let i=0,s=t.shapes.length;i<s;i++){const r=e[t.shapes[i]];o.push(r)}return new Ws(o,t.curveSegments)}}function o3(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,o=n.length;e<o;e++){const i=n[e];t.shapes.push(i.uuid)}else t.shapes.push(n.uuid);return t}class Xe extends $t{constructor(t=1,e=32,o=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:o,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),o=Math.max(2,Math.floor(o));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new P,f=new P,d=[],p=[],v=[],m=[];for(let g=0;g<=o;g++){const b=[],x=g/o;let w=0;g===0&&r===0?w=.5/e:g===o&&l===Math.PI&&(w=-.5/e);for(let E=0;E<=e;E++){const S=E/e;h.x=-t*Math.cos(i+S*s)*Math.sin(r+x*a),h.y=t*Math.cos(r+x*a),h.z=t*Math.sin(i+S*s)*Math.sin(r+x*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(S+w,1-x),b.push(c++)}u.push(b)}for(let g=0;g<o;g++)for(let b=0;b<e;b++){const x=u[g][b+1],w=u[g][b],E=u[g+1][b],S=u[g+1][b+1];(g!==0||r>0)&&d.push(x,w,S),(g!==o-1||l<Math.PI)&&d.push(w,E,S)}this.setIndex(d),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends $t{constructor(t=1,e=.4,o=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:o,tubularSegments:i,arc:s},o=Math.floor(o),i=Math.floor(i);const r=[],a=[],l=[],c=[],u=new P,h=new P,f=new P;for(let d=0;d<=o;d++)for(let p=0;p<=i;p++){const v=p/i*s,m=d/o*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/o)}for(let d=1;d<=o;d++)for(let p=1;p<=i;p++){const v=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,b=(i+1)*d+p;r.push(v,m,b),r.push(m,g,b)}this.setIndex(r),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $n extends $t{constructor(t=new bu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,o=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:o,radialSegments:i,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,l=new P,c=new st;let u=new P;const h=[],f=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(d,2));function v(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),b(),g()}function m(x){u=t.getPointAt(x/e,u);const w=r.normals[x],E=r.binormals[x];for(let S=0;S<=i;S++){const _=S/i*Math.PI*2,y=Math.sin(_),A=-Math.cos(_);l.x=A*w.x+y*E.x,l.y=A*w.y+y*E.y,l.z=A*w.z+y*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+o*l.x,a.y=u.y+o*l.y,a.z=u.z+o*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=e;x++)for(let w=1;w<=i;w++){const E=(i+1)*(x-1)+(w-1),S=(i+1)*x+(w-1),_=(i+1)*x+w,y=(i+1)*(x-1)+w;p.push(E,S,y),p.push(S,_,y)}}function b(){for(let x=0;x<=e;x++)for(let w=0;w<=i;w++)c.x=x/e,c.y=w/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $n(new Tu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class wt extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uv,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bd extends wt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Eu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class i3{constructor(t,e,o){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=o,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const s3=new i3;class Xs{constructor(t){this.manager=t!==void 0?t:s3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const o=this;return new Promise(function(i,s){o.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class r3 extends Error{constructor(t,e){super(t),this.response=e}}class kd extends Xs{constructor(t){super(t)}load(t,e,o,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Eu.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(li[t]!==void 0){li[t].push({onLoad:e,onProgress:o,onError:i});return}li[t]=[],li[t].push({onLoad:e,onProgress:o,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=li[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let v=0;const m=new ReadableStream({start(g){b();function b(){h.read().then(({done:x,value:w})=>{if(x)g.close();else{v+=w.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let S=0,_=u.length;S<_;S++){const y=u[S];y.onProgress&&y.onProgress(E)}g.enqueue(w),b()}},x=>{g.error(x)})}}});return new Response(m)}else throw new r3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Eu.add(t,c);const u=li[t];delete li[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=li[t];if(u===void 0)throw this.manager.itemError(t),c;delete li[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class a3 extends Xs{constructor(t){super(t)}load(t,e,o,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Eu.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=dl("img");function l(){u(),Eu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class l3 extends Xs{constructor(t){super(t)}load(t,e,o,i){const s=this,r=new oh,a=new kd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:Bo,r.wrapT=c.wrapT!==void 0?c.wrapT:Bo,r.magFilter=c.magFilter!==void 0?c.magFilter:Ge,r.minFilter=c.minFilter!==void 0?c.minFilter:Ge,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(r.colorSpace=c.colorSpace),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=Qo),c.mipmapCount===1&&(r.minFilter=Ge),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,e&&e(r,c)},o,i),r}}class ah extends Xs{constructor(t){super(t)}load(t,e,o,i){const s=new Sn,r=new a3(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},o,i),s}}class ks extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xr extends ks{constructor(t,e,o){super(t,o),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qh=new It,sm=new P,rm=new P;class Gd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,o=this.matrix;sm.setFromMatrixPosition(t.matrixWorld),e.position.copy(sm),rm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rm),e.updateMatrixWorld(),Qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class c3 extends Gd{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,o=sa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(o!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=o,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class am extends ks{constructor(t,e,o=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=o,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new c3}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const lm=new It,Sa=new P,t0=new P;class u3 extends Gd{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const o=this.camera,i=this.matrix,s=t.distance||o.far;s!==o.far&&(o.far=s,o.updateProjectionMatrix()),Sa.setFromMatrixPosition(t.matrixWorld),o.position.copy(Sa),t0.copy(o.position),t0.add(this._cubeDirections[e]),o.up.copy(this._cubeUps[e]),o.lookAt(t0),o.updateMatrixWorld(),i.makeTranslation(-Sa.x,-Sa.y,-Sa.z),lm.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm)}}class Wo extends ks{constructor(t,e,o=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=o,this.decay=i,this.shadow=new u3}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class h3 extends Gd{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $r extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new h3}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class f3 extends ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class d3 extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}let lc;class p3{static getContext(){return lc===void 0&&(lc=new(window.AudioContext||window.webkitAudioContext)),lc}static setContext(t){lc=t}}class m3 extends Xs{constructor(t){super(t)}load(t,e,o,i){const s=this,r=new kd(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(l){try{const c=l.slice(0);p3.getContext().decodeAudioData(c,function(h){e(h)}).catch(a)}catch(c){a(c)}},o,i);function a(l){i?i(l):console.error(l),s.manager.itemError(t)}}}const cm=new It;class g3{constructor(t,e,o=0,i=1/0){this.ray=new Cd(t,e),this.near=o,this.far=i,this.camera=null,this.layers=new Id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(t,e=!0,o=[]){return Of(t,this,o,e),o.sort(um),o}intersectObjects(t,e=!0,o=[]){for(let i=0,s=t.length;i<s;i++)Of(t[i],this,o,e);return o.sort(um),o}}function um(n,t){return n.distance-t.distance}function Of(n,t,e,o){let i=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(i=!1),i===!0&&o===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Of(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);const jt={eyeHeight:1.68,capsuleRadius:.3,walkSpeed:2.8,slowSpeed:1.4,sprintSpeed:4.35,doubleTap:.38,tapHeldFor:.3,accelLambda:9,fovDegrees:70,lookSensitivity:.0022,pitchLimit:Math.PI/2-.02,bob:{amplitude:.008,rollAmplitude:.003,cyclesPerMetre:.75},lean:{perTurnRate:.035,max:.045,lambda:6},jump:{speed:4.8,gravity:10.5,mantleReach:.7,mantleSeconds:.12,buffer:.12,coyote:.06},stepLambda:14},v3={exposure:.47};function x3(n){he.enabled=!0;const t=new Ud({canvas:n,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:typeof window<"u"&&new URLSearchParams(window.location.search).has("shot")});t.outputColorSpace=te,t.toneMapping=Q1,t.toneMappingExposure=v3.exposure,t.shadowMap.enabled=!0,t.shadowMap.type=j1;const e=Math.min(window.devicePixelRatio,2),o=Math.min(1,e),i=.25,s=30,r=.019,a=.012;let l=e;t.setPixelRatio(l);let c=0,u=0,h=0;t.localClippingEnabled=!0;const f=new Sl;f.fog=new nh(525322,0);const d=new yn(jt.fovDegrees,1,.05,100);let p="high";const v=(m,g)=>{m<=0||g<=0||(t.setSize(m,g,!1),d.aspect=m/g,d.updateProjectionMatrix())};return v(n.clientWidth,n.clientHeight),{renderer:t,scene:f,camera:d,setTier(m){p=m},getTier:()=>p,render(){t.render(f,d)},adapt(m){if(h>0)return h-=m,!1;if(m>.12||(u+=m,c+=1,c<s))return!1;const g=u/c;u=0,c=0;const b=g>.03?l-i*2:g>r?l-i:g<a?l+i:l,x=Math.max(o,Math.min(e,b));return x===l?!1:(l=x,t.setPixelRatio(l),h=1.2,!0)},pixelRatio:()=>l,resize:v,dispose(){t.dispose()}}}const e0=20,hm=11,cc=5,Ot={length:e0,depth:hm,levels:{skirtingTop:.15,dadoTop:1.1,dadoCapTop:1.22,pictureRail:4.5,pictureRailTop:4.58,corniceBottom:7.8,ceiling:8.5,lanternWellTop:10.2},window:{count:cc,width:2.2,sill:1.6,springing:4.6,crown:5.7,centresX:Array.from({length:cc},(n,t)=>e0*(t+1)/(cc+1)),pierWidth:e0/(cc+1)-2.2},lantern:{surround:{minX:7,maxX:13,minZ:3,maxZ:8},glazing:{minX:8,maxX:12,minZ:3.5,maxZ:7.5}},floor:{module:1,borderWidth:1},coffer:{module:1},door:{width:2.4,height:4.2},spawn:{x:1.5,z:hm/2,yaw:-Math.PI/2},maxPierFrameWidth:.95},ba={rossoLevanto:2759962,pompeianRed:8269606,plaster:15920868,gilt:13148206,stone:14604491},fm=(n,t,e=0)=>new wt({color:n,roughness:t,metalness:e});function M3(n,t,e){const o=[];for(let r=0;r<(t+1)*(t+1);r+=1){const a=Math.sin(r*12.9898+e*78.233)*43758.5453;o.push(a-Math.floor(a))}const i=new Array(n*n),s=t/n;for(let r=0;r<n;r+=1)for(let a=0;a<n;a+=1){const l=a*s,c=r*s,u=Math.floor(l),h=Math.floor(c),f=l-u,d=c-h,p=f*f*(3-2*f),v=d*d*(3-2*d),m=(x,w)=>o[w%(t+1)*(t+1)+x%(t+1)],g=m(u,h)*(1-p)+m(u+1,h)*p,b=m(u,h+1)*(1-p)+m(u+1,h+1)*p;i[r*n+a]=g*(1-v)+b*v}return i}function zf(n,t,e=4){const o=new Array(n*n).fill(0);let i=4,s=.5,r=0;for(let a=0;a<e;a+=1){const l=M3(n,i,t+a*7.13);for(let c=0;c<o.length;c+=1)o[c]+=l[c]*s;r+=s,i*=2,s*=.5}for(let a=0;a<o.length;a+=1)o[a]/=r;return o}function Bf(n,t){const e=document.createElement("canvas");e.width=n,e.height=n;const o=e.getContext("2d"),i=o.createImageData(n,n);for(let r=0;r<n*n;r+=1)t(r,i.data,r*4);o.putImageData(i,0,0);const s=new ce(e);return s.wrapS=We,s.wrapT=We,s.anisotropy=8,s}function dr(n,t,e,o,i=4){const s=zf(n,t,i),r=Bf(n,(a,l,c)=>{const u=Math.round(255*(e+(o-e)*s[a]));l[c]=u,l[c+1]=u,l[c+2]=u,l[c+3]=255});return r.colorSpace=nn,r}function y3(n=512){const t=zf(n,3.1,5),e=zf(n,9.7,4),o=r=>{const a=r%n/n,l=Math.floor(r/n)/n,c=Math.sin((a*1.6+l*2.4+t[r]*2.9)*Math.PI*3);return Math.pow(Math.max(0,1-Math.abs(c)),7)},i=Bf(n,(r,a,l)=>{const c=o(r),u=(e[r]-.5)*.045,h=.913+u-c*.3,f=.898+u-c*.26,d=.863+u-c*.2;a[l]=Math.round(255*h),a[l+1]=Math.round(255*f),a[l+2]=Math.round(255*d),a[l+3]=255});i.colorSpace=te;const s=Bf(n,(r,a,l)=>{const c=Math.round(255*(.13+o(r)*.3+(e[r]-.5)*.06));a[l]=c,a[l+1]=c,a[l+2]=c,a[l+3]=255});return s.colorSpace=nn,{colour:i,rough:s}}function w3(n){const e=document.createElement("canvas");e.width=1024,e.height=1024;const o=e.getContext("2d");if(!o)throw new Error("2D canvas context unavailable for the floor");return n(o,1024,1024/2),e}function _3(n,t,e,o,i){n.fillStyle=o,n.fillRect(0,0,t,t),n.strokeStyle=i,n.lineWidth=13;for(let a=0;a<=2;a+=1){const l=a*e;n.beginPath(),n.moveTo(l,0),n.lineTo(l,t),n.moveTo(0,l),n.lineTo(t,l),n.stroke()}n.lineWidth=5;const s=e*.13;for(let a=0;a<2;a+=1)for(let l=0;l<2;l+=1)n.strokeRect(l*e+s,a*e+s,e-s*2,e-s*2);n.fillStyle=i;const r=26;for(let a=0;a<=2;a+=1)for(let l=0;l<=2;l+=1)n.fillRect(l*e-r/2,a*e-r/2,r,r)}function n0(n,t,e){const o=w3((s,r,a)=>_3(s,r,a,n,t)),i=new ce(o);return i.wrapS=We,i.wrapT=We,i.colorSpace=e?te:nn,i.anisotropy=16,i}function S3(n,t){const e=n0("#0b0a0d","#e8bb45",!0),o=n0("#000000","#ffffff",!1),i=n0("#7a7a7a","#2e2e2e",!1);for(const d of[e,o,i])d.repeat.set(n,t);const s=y3(512);s.colour.repeat.set(3,3),s.rough.repeat.set(3,3);const r=dr(512,21.4,.72,1,3);r.repeat.set(4,4);const a=dr(512,21.4,0,1,5);a.repeat.set(4,4);const l=dr(512,44.9,.78,1,5);l.repeat.set(6,6);const c=dr(256,63.2,.16,.62,4);c.repeat.set(3,3);const u=dr(512,88.1,.48,.86,4);u.repeat.set(2,2);const h=dr(512,88.1,0,1,5);h.repeat.set(2,2);const f={marble:new wt({map:s.colour,roughnessMap:s.rough,roughness:1,metalness:0,envMapIntensity:1.15}),wallField:new wt({color:ba.pompeianRed,roughnessMap:r,roughness:.9,bumpMap:a,bumpScale:.012}),plaster:new wt({color:ba.plaster,roughnessMap:l,roughness:.94,bumpMap:l,bumpScale:.008}),gilt:new wt({color:ba.gilt,roughnessMap:c,roughness:1,metalness:.88,envMapIntensity:1.4}),stone:new wt({color:ba.stone,roughnessMap:u,roughness:1,bumpMap:h,bumpScale:.014}),floorBorder:fm(ba.rossoLevanto,.2),floorField:new wt({map:e,metalnessMap:o,roughnessMap:i,metalness:1,roughness:1,envMapIntensity:1.5}),glazing:new Bd({color:14149362,roughness:.03,metalness:0,transparent:!0,opacity:.17,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2.2,side:we}),frame:fm(15130834,.6)};return{...f,dispose(){e.dispose(),o.dispose(),i.dispose(),s.colour.dispose(),s.rough.dispose();for(const d of[r,a,l,c,u,h])d.dispose();for(const d of Object.values(f))d.dispose()}}}const{length:Vn,depth:ji,levels:kv,lantern:Gv,floor:b3}=Ot;function Ko(n,t,e){const o=new lt(new ee(...t),n);return o.position.set(...e),o.castShadow=!0,o.receiveShadow=!0,o}function T3(n){const t=new Et,e=b3.borderWidth,o=(s,r,a,l,c)=>{const u=new lt(new le(r,a),s);u.rotation.x=-Math.PI/2,u.position.set(l,0,c),u.receiveShadow=!0,t.add(u)},i={w:Vn-e*2,d:ji-e*2};return o(n.floorField,i.w,i.d,Vn/2,ji/2),o(n.floorBorder,Vn,e,Vn/2,e/2),o(n.floorBorder,Vn,e,Vn/2,ji-e/2),o(n.floorBorder,e,i.d,e/2,ji/2),o(n.floorBorder,e,i.d,Vn-e/2,ji/2),t}function E3(n,t,e){{const o=e/t;n.repeat.set(1,o),n.offset.set(0,(1-o)/2)}}function A3(n,t){const e=new Et,o=kv.ceiling,{minX:i,maxX:s,minZ:r,maxZ:a}=Gv.surround,l=(f,d,p,v)=>{const m=new lt(new le(f,d),n.plaster);m.rotation.x=Math.PI/2,m.position.set(p,o,v),m.receiveShadow=!0,e.add(m)};l(Vn,r,Vn/2,r/2),l(Vn,ji-a,Vn/2,(a+ji)/2),l(i,a-r,i/2,(r+a)/2),l(Vn-s,a-r,(s+Vn)/2,(r+a)/2);const c=5.5,u=8,h=[3.6,Vn-3.6];for(const f of h){const d=ji/2;if(t){const x=t.clone();x.needsUpdate=!0,E3(x,c/u,2800/4568);const w=new lt(new le(c,u),new wt({map:x,emissiveMap:x,emissive:16777215,emissiveIntensity:.42,roughness:.95}));w.rotation.x=Math.PI/2,w.position.set(f,o-.012,d),e.add(w)}const p=.11,v=.34,m=(x,w,E,S,_,y)=>{e.add(Ko(_,[x,y,w],[E,o-y/2,S]))};m(c+p*2,p,f,d-u/2-p/2,n.gilt,.09),m(c+p*2,p,f,d+u/2+p/2,n.gilt,.09),m(p,u+p*2,f-c/2-p/2,d,n.gilt,.09),m(p,u+p*2,f+c/2+p/2,d,n.gilt,.09);const g=c/2+p+v/2,b=u/2+p+v/2;m(c+p*2+v*2,v,f,d-b,n.plaster,.2),m(c+p*2+v*2,v,f,d+b,n.plaster,.2),m(v,u+p*2,f-g,d,n.plaster,.2),m(v,u+p*2,f+g,d,n.plaster,.2)}return e}function R3(n){const t=new Et,{surround:e}=Gv,o=kv.ceiling,i=(e.minX+e.maxX)/2,s=(e.minZ+e.maxZ)/2,r=2.35,a=.55,l=new ln;l.moveTo(e.minX,e.minZ),l.lineTo(e.maxX,e.minZ),l.lineTo(e.maxX,e.maxZ),l.lineTo(e.minX,e.maxZ),l.closePath();const c=new ei;c.absarc(i,s,r,0,Math.PI*2,!0),l.holes.push(c);const u=new lt(new Ws(l),n.plaster);u.rotation.x=Math.PI/2,u.position.y=o,u.receiveShadow=!0,t.add(u);const h=new lt(new dn(r+.1,.13,12,64),n.gilt);h.rotation.x=Math.PI/2,h.position.set(i,o-.06,s),t.add(h);const f=new lt(new ie(r,r,a,64,1,!0),n.stone);f.material.side=we,f.position.set(i,o+a/2,s),t.add(f);const d=o+a,p=.95,v=new Et;v.position.set(i,d,s),v.userData.noMerge=!0,t.add(v);const m=new lt(new Xe(r,48,24,0,Math.PI*2,p,Math.PI/2-p),n.glazing);m.renderOrder=1,v.add(m);const g=12;for(let x=0;x<g;x+=1){const w=x/g*Math.PI*2,E=new lt(new dn(r+.015,.035,6,32,Math.PI/2),n.frame);E.rotation.y=w,v.add(E)}for(const[x,w]of[[.34,.94],[.66,.75]]){const E=new lt(new dn(r*w+.015,.03,6,48),n.frame);E.rotation.x=Math.PI/2,E.position.y=r*x,v.add(E)}const b=new lt(new ie(.2,.28,.16,24),n.gilt);return b.position.y=r-.02,v.add(b),{group:t,chapel:v}}const{length:Li,depth:P3}=Ot;function C3(n){return[[.05,0],[.115,.04],[.1,.09],[.062,.16],[.058,.26],[.086,.38],[.104,.5],[.092,.6],[.062,.7],[.05,.78],[.086,.88],[.104,.94],[.07,1]].map(([e,o])=>new st(e,o*n))}function I3(n){return[[.03,0],[.06,.03],[.15,.07],[.23,.14],[.27,.26],[.278,.38],[.258,.52],[.218,.66],[.16,.79],[.095,.9],[.04,.96],[0,1]].map(([e,o])=>new st(e*n,o*n))}function dm(n,t,e,o){n.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=`uniform float uTime;
${i.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        float phase = modelMatrix[3].x * 0.63 + modelMatrix[3].z * 0.41;
        float up = clamp(transformed.y / ${e.toFixed(3)}, 0.0, 1.0);
        float bend = up * up;
        float gust = 0.72 + 0.28 * sin(uTime * 0.21 + phase * 0.5);
        transformed.x += sin(uTime * 0.85 + phase) * bend * ${o.toFixed(3)} * gust;
        transformed.z += cos(uTime * 0.61 + phase * 1.4) * bend * ${(o*.6).toFixed(3)} * gust;
      }`),i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      {
        float facing = abs(dot(normalize(-vViewPosition), normalize(normal)));
        float through = pow(1.0 - facing, 2.0);
        totalEmissiveRadiance += vec3(0.30, 0.26, 0.12) * through * 0.9;
      }`)},n.customProgramCacheKey=()=>`foliage-${e}-${o}`}function pm(n,t,e,o){const i=n.clone(),s=i.getAttribute("position");for(let r=0;r<s.count;r+=1){const a=s.getX(r),l=s.getY(r),c=s.getZ(r),u=Math.atan2(c,a),h=Math.min(1,Math.max(0,l/t+.5)*1.6),f=Math.sin(u*3+e)*.5+Math.sin(u*7-l*1.6+o)*.32+Math.sin(u*13+l*3.1+e*2.7)*.18,d=Math.sin(l*9+u*5+o)*.14,p=1+(f*.22+d)*h;s.setX(r,a*p),s.setZ(r,c*p),s.setY(r,l+f*.07)}return s.needsUpdate=!0,i.computeVertexNormals(),i}function L3(){const n=new Et,t=P3,e={value:0},o=new wt({color:11050118,roughness:.82}),i=new wt({color:4344368,roughness:1}),s=new wt({color:4014418,roughness:1}),r=new wt({color:2240540,roughness:1}),a=new wt({color:2372383,roughness:1}),l=1.12,c=t+8.7,u=Li+14,h=new lt(new ee(u,.4,9),o);h.position.set(Li/2,-.2,t+4.5),h.receiveShadow=!0,n.add(h);const f=(A,M,T,R)=>(A.position.set(M,T,R),A.receiveShadow=!0,A);n.add(f(new lt(new ee(u,.26,.54),o),Li/2,.13,c));const d=l-.26-.14,p=new an(C3(d),12),v=.52,m=Math.floor(u/v),g=new Go(p,o,m),b=new It;for(let A=0;A<m;A+=1)b.setPosition(Li/2-u/2+(A+.5)*v,.26,c),g.setMatrixAt(A,b);g.instanceMatrix.needsUpdate=!0,n.add(g),n.add(f(new lt(new ee(u,.09,.66),o),Li/2,l-.09,c)),n.add(f(new lt(new ee(u,.1,.78),o),Li/2,l,c));for(let A=-6;A<=Li+6;A+=6.5)n.add(f(new lt(new ee(.62,l+.2,.86),o),A,(l+.2)/2,c)),n.add(f(new lt(new Xe(.24,16,12),o),A,l+.4,c));const x=new lt(new le(300,170),i);x.rotation.x=-Math.PI/2,x.position.set(Li/2,-1.6,t+90),n.add(x);const w=9.5,E=new an(I3(w),28);E.translate(0,-w*.5,0),dm(r,e,w,.34),dm(a,e,7.5,.46);const S=[[-5,15,1],[3,17.5,.86],[12,14,1.12],[21,16,.94],[30,15,.9],[-11,31,1.3],[6,35,1.14],[18,31,1.24],[28,34,1.05],[39,30,1.2]];for(const[A,M,T]of S){const R=new lt(pm(E,w,A,M),r);R.userData.noMerge=!0,R.position.set(A,w*T*.5-1.5,t+M),R.scale.setScalar(T),R.rotation.y=A*1.7,n.add(R)}const _=7.5,y=new Xe(2.6,18,13);y.scale(1,.78,1);for(const[A,M,T]of[[-16,23,1.1],[34,25,.95]]){const R=new lt(pm(y,_,A,M),a);R.userData.noMerge=!0,R.position.set(A,_*T*.55-1.5,t+M),R.scale.setScalar(T),n.add(R),n.add(f(new lt(new ie(.22,.32,3.4,8),r),A,.2,t+M))}for(const[A,M,T,R]of[[-34,125,100,17],[42,145,120,24],[116,170,140,19]]){const L=new lt(new le(T,R),s);L.position.set(A,R/2-6.5,t+M),n.add(L)}return{group:n,update(A){e.value=A},dispose(){for(const A of[o,i,s,r,a])A.dispose();n.traverse(A=>{(A instanceof lt||A instanceof Go)&&A.geometry.dispose()})}}}function Le(n,t=!1){const e=n[0].index!==null,o=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),s={},r={},a=n[0].morphTargetsRelative,l=new $t;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!o.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==o.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=mm(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<r[u].length;++v)d.push(r[u][v][f]);const p=mm(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function mm(n){let t,e,o,i=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(o===void 0&&(o=u.normalized),o!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const r=new t(s),a=new qt(r,e,o);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<e;p++){const v=u.getComponent(f,p);a.setComponent(f+h,p,v)}}else r.set(u.array,l);l+=u.count*e}return i!==void 0&&(a.gpuType=i),a}function El(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},o=n.getIndex(),i=n.getAttribute("position"),s=o?o.count:i.count;let r=0;const a=Object.keys(n.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,x=a.length;b<x;b++){const w=a[b],E=n.attributes[w];l[w]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const S=n.morphAttributes[w];S&&(c[w]||(c[w]=[]),S.forEach((_,y)=>{const A=new _.array.constructor(_.count*_.itemSize);c[w][y]=new _.constructor(A,_.itemSize,_.normalized)}))}const d=t*.5,p=Math.log10(1/t),v=Math.pow(10,p),m=d*v;for(let b=0;b<s;b++){const x=o?o.getX(b):b;let w="";for(let E=0,S=a.length;E<S;E++){const _=a[E],y=n.getAttribute(_),A=y.itemSize;for(let M=0;M<A;M++)w+=`${~~(y[h[M]](x)*v+m)},`}if(w in e)u.push(e[w]);else{for(let E=0,S=a.length;E<S;E++){const _=a[E],y=n.getAttribute(_),A=n.morphAttributes[_],M=y.itemSize,T=l[_],R=c[_];for(let L=0;L<M;L++){const U=h[L],z=f[L];if(T[z](r,y[U](x)),A)for(let O=0,B=A.length;O<B;O++)R[O][z](r,A[O][U](x))}}e[w]=r,u.push(r),r++}}const g=n.clone();for(const b in n.attributes){const x=l[b];if(g.setAttribute(b,new x.constructor(x.array.slice(0,r*x.itemSize),x.itemSize,x.normalized)),b in c)for(let w=0;w<c[b].length;w++){const E=c[b][w];g.morphAttributes[b][w]=new E.constructor(E.array.slice(0,r*E.itemSize),E.itemSize,E.normalized)}}return g.setIndex(u),g}function gm(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(!(e instanceof lt)||e instanceof Go||e.userData.noMerge===!0||Array.isArray(e.material))return;for(let r=e;r;r=r.parent)if(r.userData.noMerge===!0)return;const o=e.material;let i=t.get(o);i||(i={geometries:[],meshes:[]},t.set(o,i));const s=e.geometry.clone();if(s.applyMatrix4(e.matrixWorld),!s.index){const r=s.getAttribute("position").count;s.setIndex(Array.from({length:r},(a,l)=>l))}i.geometries.push(s),i.meshes.push(e)});for(const[e,o]of t){if(o.geometries.length<2){for(const a of o.geometries)a.dispose();continue}const i=Le(o.geometries,!1);for(const a of o.geometries)a.dispose();if(!i)continue;const s=o.meshes[0],r=new lt(i,e);r.castShadow=(s==null?void 0:s.castShadow)??!0,r.receiveShadow=(s==null?void 0:s.receiveShadow)??!0;for(const a of o.meshes)a.removeFromParent(),a.geometry.dispose();n.add(r)}}const bo=[{id:"437506",objectId:437506,file:"437506.jpg",artist:"Salvator Rosa",artistDates:"1615–1673",title:"Bandits on a Rocky Coast",year:"1655–60",medium:"Oil on canvas",creditLine:"Charles B. Curtis Fund, 1934",widthMetres:1,heightMetres:.749,slot:"north",slotIndex:0},{id:"437480",objectId:437480,file:"437480.jpg",artist:"Hubert Robert",artistDates:"1733–1808",title:"The Swing",year:"1777–79",medium:"Oil on canvas",creditLine:"Gift of J. Pierpont Morgan, 1917",widthMetres:.879,heightMetres:1.734,slot:"north",slotIndex:1},{id:"436295",objectId:436295,file:"436295.jpg",artist:"Henri Fantin-Latour",artistDates:"1836–1904",title:"Portrait of a Woman",year:"1885",medium:"Oil on canvas",creditLine:"Catharine Lorillard Wolfe Collection, Wolfe Fund, 1910",widthMetres:.813,heightMetres:1.003,slot:"north",slotIndex:2},{id:"436049",objectId:436049,file:"436049.jpg",artist:"Gaspar de Crayer",artistDates:"1584–1669",title:"Philip IV (1605–1665) in Parade Armor",year:"ca. 1628",medium:"Oil on canvas",creditLine:"Bequest of Helen Hay Whitney, 1944",widthMetres:1.181,heightMetres:1.829,slot:"north",slotIndex:3},{id:"436039",objectId:436039,file:"436039.jpg",artist:"Lucas Cranach the Elder",artistDates:"1472–1553",title:"The Martyrdom of Saint Barbara",year:"ca. 1510",medium:"Oil on linden",creditLine:"Rogers Fund, 1957",widthMetres:1.378,heightMetres:1.534,slot:"north",slotIndex:4},{id:"435908",objectId:435908,file:"435908.jpg",artist:"Claude Lorrain (Claude Gellée)",artistDates:"1604–1682",title:"The Trojan Women Setting Fire to Their Fleet",year:"ca. 1643",medium:"Oil on canvas",creditLine:"Fletcher Fund, 1955",widthMetres:1.521,heightMetres:1.051,slot:"north",slotIndex:5},{id:"437683",objectId:437683,file:"437683.jpg",artist:"Alfred Sisley",artistDates:"1839–1899",title:"Sahurs Meadows in Morning Sun",year:"1894",medium:"Oil on canvas",creditLine:"Gift of Janice H. Levin, 1991",widthMetres:.921,heightMetres:.73,slot:"north",slotIndex:6},{id:"437390",objectId:437390,file:"437390.jpg",artist:"Rembrandt (Rembrandt van Rijn)",artistDates:"1606–1669",title:"Portrait of a Woman",year:"1633",medium:"Oil on wood",creditLine:"Bequest of Benjamin Altman, 1913",widthMetres:.502,heightMetres:.679,slot:"north",slotIndex:7},{id:"436311",objectId:436311,file:"436311.jpg",artist:"Vincenzo Foppa",artistDates:"1456–1516",title:"Madonna and Child",year:"ca. 1480",medium:"Tempera, oil, and gold on wood",creditLine:"Theodore M. Davis Collection, Bequest of Theodore M. Davis, 1915",widthMetres:.321,heightMetres:.438,slot:"south-pier",slotIndex:0},{id:"435923",objectId:435923,file:"435923.jpg",artist:"John Constable",artistDates:"1776–1837",title:"Stoke-by-Nayland",year:"ca. 1810–11",medium:"Oil on canvas",creditLine:"Charles B. Curtis Fund, 1926",widthMetres:.362,heightMetres:.283,slot:"south-pier",slotIndex:1},{id:"437436",objectId:437436,file:"437436.jpg",artist:"Auguste Renoir",artistDates:"1841–1919",title:"A Road in Louveciennes",year:"ca. 1870",medium:"Oil on canvas",creditLine:"The Lesley and Emma Sheafer Collection, Bequest of Emma A. Sheafer, 1973",widthMetres:.464,heightMetres:.381,slot:"south-pier",slotIndex:2},{id:"436934",objectId:436934,file:"436934.jpg",artist:"Nicolaes Maes",artistDates:"1634–1693",title:"Young Woman Peeling Apples",year:"ca. 1655",medium:"Oil on wood",creditLine:"Bequest of Benjamin Altman, 1913",widthMetres:.457,heightMetres:.546,slot:"south-pier",slotIndex:3},{id:"437452",objectId:437452,file:"437452.jpg",artist:"Sir Joshua Reynolds",artistDates:"1723–1792",title:"Lady Smith (Charlotte Delaval) and Her Children (George Henry, Louisa, and Charlotte)",year:"1787",medium:"Oil on canvas",creditLine:"Bequest of Collis P. Huntington, 1900",widthMetres:1.121,heightMetres:1.407,slot:"west",slotIndex:0},{id:"435906",objectId:435906,file:"435906.jpg",artist:"Claude Lorrain (Claude Gellée)",artistDates:"1604–1682",title:"Pastoral Landscape: The Roman Campagna",year:"ca. 1639",medium:"Oil on canvas",creditLine:"Bequest of Adele L. Lehman, in memory of Arthur Lehman, 1965",widthMetres:1.359,heightMetres:1.016,slot:"west",slotIndex:1},{id:"437090",objectId:437090,file:"437090.jpg",artist:"Daniël Mijtens",artistDates:"1585–1648",title:"Charles I (1600–1649), King of England",year:"1629",medium:"Oil on canvas",creditLine:"Gift of George A. Hearn, 1906",widthMetres:1.407,heightMetres:2.003,slot:"east",slotIndex:0},{id:"437464",objectId:437464,file:"437464.jpg",artist:"Hyacinthe Rigaud",artistDates:"1659–1743",title:"Louis XV (1710–1774) as a Child",year:"ca. 1716–24",medium:"Oil on canvas",creditLine:"Purchase, Mary Wetmore Shively Bequest, in memory of her husband, Henry L. Shively, M.D., 1960",widthMetres:1.41,heightMetres:1.956,slot:"east",slotIndex:1}],vm=[[{span:.07,from:.72,to:.74,curved:!1},{span:.16,from:.42,to:.56,curved:!0},{span:.6,from:.6,to:.6,curved:!1},{span:.11,from:.66,to:.94,curved:!0},{span:.06,from:.9,to:.4,curved:!0}],[{span:.05,from:.66,to:.68,curved:!1},{span:.13,from:.38,to:.52,curved:!0},{span:.66,from:.56,to:.56,curved:!1},{span:.1,from:.62,to:.88,curved:!0},{span:.06,from:.84,to:.36,curved:!0}],[{span:.06,from:.78,to:.8,curved:!1},{span:.19,from:.4,to:.58,curved:!0},{span:.57,from:.62,to:.62,curved:!1},{span:.12,from:.7,to:.96,curved:!0},{span:.06,from:.92,to:.42,curved:!0}],[{span:.08,from:.7,to:.72,curved:!1},{span:.14,from:.36,to:.5,curved:!0},{span:.58,from:.54,to:.54,curved:!1},{span:.14,from:.6,to:.98,curved:!0},{span:.06,from:.94,to:.38,curved:!0}]],D3=7;function N3(n){return n*n*(3-2*n)}function nl(n,t){const e=Math.min(.16,Math.max(.07,t*.115)),o=e*.62,i=vm[n]??vm[0],s=[];let r=0;for(const h of i){const f=h.span*e,d=h.curved?D3:1;for(let p=0;p<d;p+=1){const v=p/d,m=(p+1)/d,g=h.from+(h.to-h.from)*N3((v+m)/2);s.push({inner:r+f*v,out:r+f*m,depth:g*o})}r+=f}const a=(i[0].span+i[1].span)*e,l=a+i[2].span*e,c=i[2].from*o,u=i.slice(0,3).reduce((h,f)=>h+f.span,0)*e;return{width:e,depth:o,bands:s,sightAt:i[0].span*e*.5,backAt:u+i[3].span*e*.6,friezeDepth:c,ornamentBand:{inner:a,out:l,height:c},variant:n}}function nu(n){return(n*3+1)%4}const xm=420;function U3(n,t){const e=new Array(n*n);for(let o=0;o<e.length;o+=1){const i=Math.sin(o*12.9898+t*78.233)*43758.5453;e[o]=i-Math.floor(i)}return e}function o0(n,t,e){const o=U3(t+1,e),i=(s,r)=>o[r%(t+1)*(t+1)+s%(t+1)];return(s,r)=>{const a=s/n*t,l=r/n*t,c=Math.floor(a),u=Math.floor(l),h=a-c,f=l-u,d=h*h*(3-2*h),p=f*f*(3-2*f),v=i(c,u)*(1-d)+i(c+1,u)*d,m=i(c,u+1)*(1-d)+i(c+1,u+1)*d;return v*(1-p)+m*p}}function F3(n,t,e,o){const i=Math.floor(n/e),s=Math.floor(t/e),r=n/e-i,a=t/e-s,l=h=>Math.sin(Math.PI*Math.min(1,Math.max(0,h))),c=(i+s)%2===0,u=.72+.55*o(n,t);return c?l(r)*u+l(a)*.22:l(a)*u+l(r)*.22}function O3(n,t,e){const o=e(n,t),i=Math.abs(o-.5);return Math.pow(Math.max(0,1-i*14),3)}function z3(n=512){const t=n/26,e=o0(n,7,4.31),o=o0(n,9,19.7),i=o0(n,5,27.3),s=new Float32Array(n*n);for(let u=0;u<n;u+=1)for(let h=0;h<n;h+=1)s[u*n+h]=F3(h,u,t,e);const r=u=>{const h=document.createElement("canvas");h.width=n,h.height=n;const f=h.getContext("2d"),d=f.createImageData(n,n);for(let v=0;v<n*n;v+=1)u(v,d.data,v*4);f.putImageData(d,0,0);const p=new ce(h);return p.wrapS=We,p.wrapT=We,p.anisotropy=8,p.colorSpace=nn,p},a=(u,h)=>s[(h+n)%n*n+(u+n)%n],l=r((u,h,f)=>{const d=u%n,p=Math.floor(u/n),v=(a(d+1,p)-a(d-1,p))*.6,m=(a(d,p+1)-a(d,p-1))*.6,g=-v,b=-m,x=1,w=Math.hypot(g,b,x);h[f]=Math.round(255*(g/w*.5+.5)),h[f+1]=Math.round(255*(b/w*.5+.5)),h[f+2]=Math.round(255*(x/w*.5+.5)),h[f+3]=255}),c=r((u,h,f)=>{const d=u%n,p=Math.floor(u/n),v=1-Math.min(1,a(d,p)/1.2),m=O3(d,p,o),g=i(d,p),b=.16+v*.26+m*.55+g*.1,x=Math.round(255*Math.min(1,b));h[f]=x,h[f+1]=x,h[f+2]=x,h[f+3]=255});return{weave:l,varnish:c,dispose(){l.dispose(),c.dispose()}}}let Mm=null;function B3(){return Mm??(Mm=z3(512)),Mm}function k3(n,t,e){const o=B3(),i=Math.max(1,t*xm/26),s=Math.max(1,e*xm/26),r=o.weave.clone();r.needsUpdate=!0,r.repeat.set(i,s);const a=o.varnish.clone();a.needsUpdate=!0,a.repeat.set(i,s),n.normalMap=r,n.normalScale=new st(.28,.28),n.roughnessMap=a,n.roughness=1,n.envMapIntensity=1.25,n.needsUpdate=!0}const vo=512,Xi=256;function ym(n,t,e,o,i,s,r,a){const l=Math.max(24,Math.floor(i*40));n.lineCap="round";for(let c=0;c<l;c+=1){const u=c/l,h=(c+1)/l,f=s+a*u*i*Math.PI*2,d=s+a*h*i*Math.PI*2,p=o*(1-u*.82),v=o*(1-h*.82);n.lineWidth=r*(1-u*.7),n.beginPath(),n.moveTo(t+Math.cos(f)*p,e+Math.sin(f)*p),n.lineTo(t+Math.cos(d)*v,e+Math.sin(d)*v),n.stroke()}}function uc(n,t,e,o,i,s,r){n.lineCap="round";let l=t,c=e;for(let u=1;u<=14;u+=1){const h=u/14,f=i+s*h*h,d=t+Math.cos(f)*o*h,p=e+Math.sin(f)*o*h;n.lineWidth=r*(1-h*.85),n.beginPath(),n.moveTo(l,c),n.lineTo(d,p),n.stroke(),l=d,c=p}}function G3(n){const t=vo,e=Xi;n.fillStyle="#2c2c2c",n.fillRect(0,0,t,e);const o=e/2;n.strokeStyle="#8a8a8a",n.lineWidth=e*.05,n.beginPath(),n.moveTo(0,o);for(let i=0;i<=t;i+=16)n.lineTo(i,o+Math.sin(i/t*Math.PI*2)*e*.11);n.stroke();for(const i of[-1,1])for(const s of[0,1]){const r=s===0?t*.25:t*.75,a=s===0?1:-1;n.strokeStyle="#c8c8c8",ym(n,r,o+i*e*.2,e*.24,1.5,i>0?.4:-.4,e*.085,a*i),n.strokeStyle="#e6e6e6",ym(n,r+a*t*.12,o+i*e*.3,e*.15,1.25,i>0?1.2:-1.2,e*.06,-a*i),n.strokeStyle="#a8a8a8",uc(n,r+a*t*.04,o+i*e*.08,e*.34,i>0?1.1:-1.1,a*1.5,e*.05),uc(n,r-a*t*.05,o+i*e*.12,e*.26,i>0?1.9:-1.9,-a*1.2,e*.042),uc(n,r+a*t*.16,o+i*e*.16,e*.22,i>0?.7:-.7,a*1.8,e*.038)}for(const i of[0,t]){n.strokeStyle="#f0f0f0";for(let s=0;s<6;s+=1){const r=s/6*Math.PI*2;uc(n,i,o,e*.17,r,.9,e*.05)}n.fillStyle="#ffffff",n.beginPath(),n.arc(i,o,e*.055,0,Math.PI*2),n.fill()}}function H3(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const o=e.getContext("2d");if(!o)throw new Error("2D canvas context unavailable for the ornament");return o.filter=`blur(${t}px)`,o.drawImage(n,0,0),o.getImageData(0,0,n.width,n.height)}function V3(n,t=1){const e=document.createElement("canvas");e.width=vo,e.height=Xi;const o=e.getContext("2d");if(!o)throw new Error("2D canvas context unavailable for the ornament");G3(o);const i=H3(e,2.5),s=document.createElement("canvas");s.width=vo,s.height=Xi;const r=s.getContext("2d");if(!r)throw new Error("2D canvas context unavailable for the ornament");const a=r.createImageData(vo,Xi),l=document.createElement("canvas");l.width=vo,l.height=Xi;const c=l.getContext("2d");if(!c)throw new Error("2D canvas context unavailable for the ornament");const u=c.createImageData(vo,Xi),h=(m,g)=>{const b=(m%vo+vo)%vo,x=Math.min(Xi-1,Math.max(0,g));return i.data[(x*vo+b)*4]/255},f=3.4;for(let m=0;m<Xi;m+=1)for(let g=0;g<vo;g+=1){const b=h(g-1,m-1)+2*h(g-1,m)+h(g-1,m+1)-h(g+1,m-1)-2*h(g+1,m)-h(g+1,m+1),x=h(g-1,m-1)+2*h(g,m-1)+h(g+1,m-1)-h(g-1,m+1)-2*h(g,m+1)-h(g+1,m+1),w=b*f,E=x*f,S=Math.hypot(w,E,1),_=(m*vo+g)*4;a.data[_]=(w/S*.5+.5)*255,a.data[_+1]=(E/S*.5+.5)*255,a.data[_+2]=(1/S*.5+.5)*255,a.data[_+3]=255;const A=(.62-h(g,m)*.42)*255;u.data[_]=A,u.data[_+1]=A,u.data[_+2]=A,u.data[_+3]=255}r.putImageData(a,0,0),c.putImageData(u,0,0);const d=m=>{const g=new ce(m);return g.wrapS=We,g.wrapT=We,g.repeat.set(n,t),g.colorSpace=nn,g.anisotropy=8,g},p=d(s),v=d(l);return{normal:p,roughness:v,dispose(){p.dispose(),v.dispose()}}}function W3(n,t,e,o,i){const s=new It;return i&&s.makeRotationFromEuler(i),s.setPosition(t,e,o),n.applyMatrix4(s)}function X3(n,t,e,o=.6){const i=e.filter((p,v)=>v===0||Math.abs(p.r-e[v-1].r)+Math.abs(p.z-e[v-1].z)>1e-7),s=[],r=[0];for(let p=0;p<i.length-1;p+=1){const v=i[p+1].r-i[p].r,m=i[p+1].z-i[p].z,g=Math.hypot(v,m);s.push([-m/g,v/g]),r.push(r[p]+g)}const a=Math.cos(o),l=(p,v)=>{const m=s[p],g=s[v?p+1:p-1];if(!g||m[0]*g[0]+m[1]*g[1]<a)return m;const b=m[0]+g[0],x=m[1]+g[1],w=Math.hypot(b,x);return[b/w,x/w]},c=[],u=[],h=[],f=[{o:[0,-1],t:[1,0]},{o:[1,0],t:[0,1]},{o:[0,1],t:[-1,0]},{o:[-1,0],t:[0,-1]}];for(const{o:p,t:v}of f){const m=Math.abs(p[0])*n+Math.abs(p[1])*t,g=Math.abs(v[0])*n+Math.abs(v[1])*t,b=(x,w)=>[p[0]*(m+x.r)+w*v[0]*(g+x.r),p[1]*(m+x.r)+w*v[1]*(g+x.r),x.z];for(let x=0;x<i.length-1;x+=1){const w=i[x],E=i[x+1],S=l(x,!1),_=l(x,!0),y=b(w,-1),A=b(w,1),M=b(E,1),T=b(E,-1),R=[p[0]*S[0],p[1]*S[0],S[1]],L=[p[0]*_[0],p[1]*_[0],_[1]],U=[-(g+w.r),r[x]],z=[g+w.r,r[x]],O=[g+E.r,r[x+1]],B=[-(g+E.r),r[x+1]],N=[A[0]-y[0],A[1]-y[1],A[2]-y[2]],H=[M[0]-y[0],M[1]-y[1],M[2]-y[2]],G=[N[1]*H[2]-N[2]*H[1],N[2]*H[0]-N[0]*H[2],N[0]*H[1]-N[1]*H[0]],$=s[x],j=G[0]*p[0]*$[0]+G[1]*p[1]*$[0]+G[2]*$[1]<0?[[y,R,U],[M,L,O],[A,R,z],[y,R,U],[T,L,B],[M,L,O]]:[[y,R,U],[A,R,z],[M,L,O],[y,R,U],[M,L,O],[T,L,B]];for(const[X,at,rt]of j)c.push(...X),u.push(...at),h.push(...rt)}}const d=new $t;return d.setAttribute("position",new Dt(c,3)),d.setAttribute("normal",new Dt(u,3)),d.setAttribute("uv",new Dt(h,2)),d}function $3(n){const{bands:t}=n,e=r=>t[r].out-t[r].inner,o=(r,a)=>a>=0&&a<t.length&&Math.abs(e(r)-e(a))<n.width*1e-6,i=[{r:0,z:0}];t.forEach((r,a)=>{const l=o(a,a-1),c=o(a,a+1);l||i.push({r:r.inner,z:r.depth}),(l||c)&&i.push({r:(r.inner+r.out)/2,z:r.depth}),c||i.push({r:r.out,z:r.depth})});const s=t[t.length-1].out;return i.push({r:s,z:0},{r:0,z:0}),i}function q3(n,t,e,o,i,s){const r=[],a=new Xn(-Math.PI/2,0,0),l=-(n+e),c=n+e,u=-(t+e),h=t+e;let f=0;const d=(p,v)=>{const m=Math.max(3,Math.round(p/i)),g=p/m;for(let b=0;b<m;b+=1){const x=s(f++);if(!x)continue;const[w,E]=v((b+.5)*g);r.push(W3(x,w,E,o,a))}};return d(c-l,p=>[l+p,h]),d(c-l,p=>[l+p,u]),d(h-u,p=>[l,u+p]),d(h-u,p=>[c,u+p]),r}function Y3(n,t,e){const o=[],i=e.ornamentBand,s=i.out-i.inner,r=(i.inner+i.out)/2,a=s*2,l=(c,u,h,f)=>{const d=new le(c,s,1,1),p=d.getAttribute("uv"),v=Math.max(1,Math.round(c/a));for(let g=0;g<p.count;g+=1)p.setX(g,p.getX(g)*v);p.needsUpdate=!0;const m=new It().makeRotationZ(f);m.setPosition(u,h,i.height+8e-4),o.push(d.applyMatrix4(m))};return l(n*2+r*2,0,t+r,0),l(n*2+r*2,0,-(t+r),Math.PI),l(t*2+r*2,-(n+r),0,Math.PI/2),l(t*2+r*2,n+r,0,-Math.PI/2),o}function Hv(n,t,e){const o=n/2,i=t/2,s=e.width,r=[X3(o,i,$3(e))],a=new Xe(s*.035,6,2,0,Math.PI*2,Math.PI/2,Math.PI/2);return r.push(...q3(o,i,e.sightAt,e.bands[0].depth,s*.11,()=>a.clone())),a.dispose(),{gilt:r,scrollwork:Y3(o,i,e)}}function lh(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(!e)throw new Error("2D canvas context unavailable for the gilding");e.fillStyle="#6a6a6a",e.fillRect(0,0,256,256);for(let i=0;i<2600;i+=1){const s=40+Math.floor(Math.random()*150);e.fillStyle=`rgb(${s},${s},${s})`,e.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*3,1+Math.random()*3)}const o=new ce(t);return o.wrapS=We,o.wrapT=We,o.repeat.set(7,7),o.colorSpace=nn,new wt({color:16764743,roughnessMap:o,roughness:.62,metalness:.92,envMapIntensity:2.6})}function ch(){const n=V3(1,1),t=new wt({color:16764743,normalMap:n.normal,normalScale:new st(1.5,1.5),roughnessMap:n.roughness,roughness:1,metalness:.92,envMapIntensity:2.6,side:we});return{material:t,dispose(){n.dispose(),t.dispose()}}}function Z3(n){const t=[{text:n.artist.toUpperCase(),size:.05,weight:"bold",italic:!1,gapBefore:0}];return n.artistDates&&t.push({text:n.artistDates,size:.042,weight:"normal",italic:!1,gapBefore:.008}),t.push({text:n.title,size:.054,weight:"normal",italic:!0,gapBefore:.03}),n.year&&t.push({text:n.year,size:.042,weight:"normal",italic:!1,gapBefore:.01}),n.medium&&t.push({text:n.medium,size:.038,weight:"normal",italic:!1,gapBefore:.024}),n.creditLine&&t.push({text:n.creditLine,size:.034,weight:"normal",italic:!1,gapBefore:.022}),t}function K3(n,t,e){const o=n.split(/\s+/).filter(Boolean);if(o.length===0)return[];const i=[];let s=o[0];for(const r of o.slice(1)){const a=`${s} ${r}`;e(a)<=t?s=a:(i.push(s),s=r)}return i.push(s),i}const kf=.3,Gf=.21,Di=1600;function j3(n){const t=document.createElement("canvas");t.width=Di,t.height=Math.round(Di*Gf/kf);const e=t.getContext("2d");if(!e)throw new Error("2D canvas context unavailable for a placard");e.fillStyle="#f3eee1",e.fillRect(0,0,t.width,t.height),e.fillStyle="#e6dfcd",e.fillRect(0,0,t.width,Math.round(t.height*.012));const o=Di*.062,i=t.width-o*2;let s=o,r=!1;e.textBaseline="top";for(const u of Z3(n)){const h=u.size*Di;e.font=`${u.italic?"italic ":""}${u.weight==="bold"?"600 ":""}${h}px "Iowan Old Style", Palatino, Georgia, serif`,e.fillStyle=u.size>=.05?"#1f1c18":"#5c554a",u.italic&&(e.fillStyle="#241f1a"),s+=u.gapBefore*Di;for(const f of K3(u.text,i,d=>e.measureText(d).width)){if(s+h>t.height-o*.5){console.warn(`gallery: placard overflow for "${n.title}"`);break}e.fillText(f,o,s),s+=h*1.2}!r&&u.size<.05&&(r=!0,s+=Di*.012,e.fillStyle="#b8ad97",e.fillRect(o,s,i*.42,Math.max(1,Di*.0016)),s+=Di*.006)}const a=new ce(t);a.colorSpace=te,a.anisotropy=16;const l=new wt({map:a,roughness:.9,emissiveMap:a,emissive:16777215,emissiveIntensity:.22}),c=new lt(new le(kf,Gf),l);return{mesh:c,dispose(){a.dispose(),l.dispose(),c.geometry.dispose()}}}const Ta=new P;function po(n,t,e,o,i,s){const r=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ta.copy(t),Ta[o]=0,Ta.normalize();const c=.5*r/(r+a),u=1-Ta.angleTo(n)/l;return Math.sign(Ta[e])===1?u*c:a/(r+a)+c+c*(1-u)}class J3 extends ee{constructor(t=1,e=1,o=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,o/2,s),super(1,1,1,i,i,i),i===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new P,l=new P,c=new P(t,e,o).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,p=new P,v=.5/i;for(let m=0,g=0;m<u.length;m+=3,g+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:p.set(1,0,0),f[g+0]=po(p,l,"z","y",s,o),f[g+1]=1-po(p,l,"y","z",s,e);break;case 1:p.set(-1,0,0),f[g+0]=1-po(p,l,"z","y",s,o),f[g+1]=1-po(p,l,"y","z",s,e);break;case 2:p.set(0,1,0),f[g+0]=1-po(p,l,"x","z",s,t),f[g+1]=po(p,l,"z","x",s,o);break;case 3:p.set(0,-1,0),f[g+0]=1-po(p,l,"x","z",s,t),f[g+1]=1-po(p,l,"z","x",s,o);break;case 4:p.set(0,0,1),f[g+0]=1-po(p,l,"x","y",s,t),f[g+1]=1-po(p,l,"y","x",s,e);break;case 5:p.set(0,0,-1),f[g+0]=po(p,l,"x","y",s,t),f[g+1]=1-po(p,l,"y","x",s,e);break}}}const ci=.046,Q3=Eo.degToRad(25),Ea=Eo.degToRad(55),wm=18,tT=new Vs({color:new bt(1,.8,.55).multiplyScalar(3.4),vertexColors:!0});function _m(n,t){return[-Math.cos(n)*t,Math.sin(n)*t]}function Sm(n,t){const e=n.getAttribute("position").count;return n.setAttribute("color",new Dt(new Array(e*3).fill(t),3)),n}function eT(n){const t=n.index;if(t)for(let o=0;o<t.count;o+=3){const i=t.getX(o+1);t.setX(o+1,t.getX(o+2)),t.setX(o+2,i)}const e=n.getAttribute("normal");for(let o=0;o<e.count;o+=1)e.setXYZ(o,-e.getX(o),-e.getY(o),-e.getZ(o));return n}function nT(n,t,e){const o=new Et,i=[],s=t/2,r=Math.min(.62,Math.max(.26,n*.45)),a=e*.6,l=e+.17,c=.15,u=s+c,h=a+l;i.push(new J3(.085,.048,.02,1,.005).translate(0,s-.03,a)),i.push(new ie(.011,.013,.018,10).translate(0,s-.002,a));const[f,d]=_m(Math.PI*.78,ci),p=new P(0,u+f+.004,h+d);i.push(new ie(.0085,.0085,.03,10).rotateZ(Math.PI/2).translate(p.x,p.y,p.z));const v=new zd(new P(0,s+.004,a),new P(0,s+c*.95,a-.006),new P(0,u+.07,a+l*.4),p);i.push(new $n(v,18,.0068,6,!1));const m=new It().makeRotationX(-Q3).setPosition(0,u,h),g=Math.PI*2-Ea*2,b=A=>new ie(A,A,r,wm,1,!0,Ea-Math.PI/2,g).rotateZ(-Math.PI/2).rotateX(Math.PI/2);i.push(b(ci).applyMatrix4(m));for(const A of[-1,1]){const[M,T]=_m(A*Ea,ci);i.push(new ie(.0034,.0034,r,6).rotateZ(Math.PI/2).translate(0,M,T).applyMatrix4(m))}const x=new an([new st(0,0),new st(ci+.0035,0),new st(ci+.0045,.0035),new st(ci+.001,.0065),new st(.012,.0075),new st(.008,.013),new st(0,.014)],wm);for(const A of[-1,1])i.push(x.clone().rotateZ(-A*Math.PI/2).translate(A*r/2,0,0).applyMatrix4(m));x.dispose();const w=Math.sin(Ea)*ci*2,E=Sm(new le(r*.94,w*.82).rotateX(Math.PI/2).translate(0,-Math.cos(Ea)*ci*.92,0),1),S=Sm(eT(b(ci-.0012)),.2),_=Le([E,S],!1);if(E.dispose(),S.dispose(),!_)throw new Error("picture light: could not merge the glow");const y=new lt(_.applyMatrix4(m),tT);return o.add(y),{group:o,brass:i,dispose(){y.geometry.dispose()}}}const ge=2048,Oe=64,Rs=1024,hc=256,oT=1536;function uh(n,t,e,o){return{u0:n/ge,u1:(n+e)/ge,v0:1-(t+o)/ge,v1:1-t/ge,aspect:o/e}}function Ni(n){return uh(0,Rs+n*Oe+1,ge,Oe-2)}const iT=uh(6,6,1012,1012),sT=uh(1030,6,1012,1012),Uo={stretcher:[Ni(0),Ni(1),Ni(2)],pine:Ni(3),key:Ni(4),frameBack:Ni(5),cradle:Ni(6),strata:Ni(7)},Hf=[["exhibition",236,150],["packer",236,140],["dealer",210,170],["loan",200,120],["ticket",150,96],["customs",220,220],["colourman",250,170],["seal",120,120],["chalkNumber",250,110],["chalkCross",220,120],["chalkTop",240,140],["stencil",250,70],["bracket",220,220]];function Vv(n,t,e){const o=n%8*hc+(hc-t)/2,i=oT+Math.floor(n/8)*hc+(hc-e)/2;return[o,i,t,e]}const tn=Object.fromEntries(Hf.map(([n,t,e],o)=>[n,uh(...Vv(o,t,e))]));function Hd(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const De='Georgia, "Times New Roman", serif',Aa='"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive',i0='"Chalkboard SE", "Marker Felt", "Comic Sans MS", cursive';function co(n,t,e,o,i,s,r,a,l,c){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip();for(let u=0;u<r;u+=1){const h=t+s()*o,f=e+s()*i,d=c*(.3+s()),p=n.createRadialGradient(h,f,0,h,f,d);p.addColorStop(0,a),p.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=l*(.4+s()*.6),n.fillStyle=p,n.fillRect(h-d,f-d,d*2,d*2)}n.restore()}function vl(n,t,e,o,i,s,r,a,l){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip(),n.strokeStyle=r;for(let c=0;c<a;c+=1){const u=e+s()*i,h=.6+s()*3.5,f=.002+s()*.007,d=s()*6.28;n.globalAlpha=l*(.3+s()*.7),n.lineWidth=.6+s()*2.4,n.beginPath();for(let p=-8;p<=o+8;p+=12){const v=u+Math.sin(p*f+d)*h+Math.sin(p*f*3.3+d*2)*h*.25;p===-8?n.moveTo(t+p,v):n.lineTo(t+p,v)}n.stroke()}n.restore()}function rT(n,t,e,o,i){n.save(),n.strokeStyle=i;for(let s=3;s>=1;s-=1)n.globalAlpha=.18+.12*(3-s),n.lineWidth=1.2,n.beginPath(),n.ellipse(t,e,o*s*1.6,o*s*.6,0,0,Math.PI*2),n.stroke();n.globalAlpha=.75,n.fillStyle=i,n.beginPath(),n.ellipse(t,e,o*1.1,o*.55,0,0,Math.PI*2),n.fill(),n.restore()}function fc(n,t,e,o,i,s){n.fillStyle=o,n.fillRect(0,t,ge,Oe),co(n,0,t,ge,Oe,e,40,i,.12,60),vl(n,0,t,ge,Oe,e,i,22,.45),vl(n,0,t,ge,Oe,e,"rgba(255,240,210,1)",6,.12);for(let r=0;r<s;r+=1)rT(n,100+e()*(ge-200),t+14+e()*(Oe-28),2+e()*2.5,i)}function aT(n,t,e){n.fillStyle="#a4916c",n.beginPath(),n.moveTo(0,t),n.lineTo(ge,t);for(let i=ge;i>=0;i-=6)n.lineTo(i,t+15-1.5+e()*3.5);n.closePath(),n.fill(),n.save(),n.globalAlpha=.18,n.strokeStyle="#6d5d43",n.lineWidth=1;for(let i=0;i<ge;i+=3)n.beginPath(),n.moveTo(i,t),n.lineTo(i,t+15),n.stroke();n.restore(),n.save(),n.strokeStyle="#a4916c",n.globalAlpha=.7,n.lineWidth=1;for(let i=0;i<90;i+=1){const s=e()*ge;n.beginPath(),n.moveTo(s,t+15),n.lineTo(s+(e()-.5)*4,t+15+2+e()*5),n.stroke()}n.restore();for(let i=18+e()*10;i<ge;i+=38+e()*10){const s=t+7+(e()-.5)*2,r=n.createRadialGradient(i,s,0,i,s,11);r.addColorStop(0,"rgba(110,58,24,0.55)"),r.addColorStop(1,"rgba(110,58,24,0)"),n.fillStyle=r,n.fillRect(i-11,s-11,22,22),n.fillStyle="#2a2521",n.beginPath(),n.arc(i,s,3.4,0,Math.PI*2),n.fill(),n.fillStyle="rgba(200,190,170,0.5)",n.beginPath(),n.arc(i-1,s-1,1.1,0,Math.PI*2),n.fill()}}function lT(n,t){const[e,o,i]=[0,0,1024];n.fillStyle="#b9a57e",n.fillRect(e,o,i,i),co(n,e,o,i,i,t,90,"#8d7a55",.16,150),co(n,e,o,i,i,t,60,"#d6c7a2",.14,120),n.save(),n.lineWidth=1;for(let a=0;a<i;a+=2)n.globalAlpha=.04+t()*.09,n.strokeStyle=t()<.5?"#6f5f42":"#e0d3b2",n.beginPath(),n.moveTo(e,o+a+.5),n.lineTo(e+i,o+a+.5),n.stroke(),n.globalAlpha=.04+t()*.09,n.strokeStyle=t()<.5?"#6f5f42":"#e0d3b2",n.beginPath(),n.moveTo(e+a+.5,o),n.lineTo(e+a+.5,o+i),n.stroke();for(let a=0;a<700;a+=1){n.globalAlpha=.18+t()*.2,n.fillStyle=t()<.6?"#8a7752":"#d2c29c";const l=t()<.5,c=8+t()*30;n.fillRect(e+t()*i,o+t()*i,l?c:1.6,l?1.6:c)}n.restore(),n.save();for(const[a,l,c,u]of[[0,0,0,1],[0,0,1,0],[1,0,0,0],[0,1,0,0]]){const h=n.createLinearGradient(e+a*i,o+l*i,e+(a+c*.14-(a?.14:0))*i,o+(l+u*.14-(l?.14:0))*i);h.addColorStop(0,"rgba(70,56,36,0.42)"),h.addColorStop(1,"rgba(70,56,36,0)"),n.fillStyle=h,n.fillRect(e,o,i,i)}n.restore(),n.save(),n.globalAlpha=.28,n.strokeStyle="#7b6440",n.lineWidth=3,n.beginPath();const s=e+i*(.6+t()*.2),r=o+i*(.65+t()*.2);for(let a=0;a<=Math.PI*2+.01;a+=.15){const l=120+Math.sin(a*3+1)*22+Math.sin(a*7)*9,c=s+Math.cos(a)*l*1.3,u=r+Math.sin(a)*l;a===0?n.moveTo(c,u):n.lineTo(c,u)}n.stroke(),n.restore()}function cT(n,t){const[e,o,i]=[1024,0,1024];n.fillStyle="#b4a992",n.fillRect(e,o,i,i),co(n,e,o,i,i,t,120,"#8f846d",.25,50);for(let s=o+2;s<o+i;s+=23+Math.floor(t()*3)){const r=16+t()*2;let a=e-t()*300;for(;a<e+i;){const l=260+t()*360,c=110+Math.floor(t()*30);n.fillStyle=`rgb(${c+22},${c+6},${c-18})`,n.fillRect(a,s,l-4,r),vl(n,a,s,l-4,r,t,"#5b4a33",5,.5),n.fillStyle="#2d2824",n.fillRect(a+l-12,s+r/2-2,4,4),a+=l}for(let l=e;l<e+i;l+=10+t()*26)n.fillStyle=t()<.5?"#c7bca5":"#b0a58d",n.globalAlpha=.85,n.beginPath(),n.ellipse(l,s+r+2.5+(t()-.5)*2,6+t()*12,2.5+t()*3,0,0,Math.PI*2),n.fill(),n.globalAlpha=1}co(n,e,o,i,i,t,14,"#4f4130",.3,160),co(n,e,o,i,i,t,30,"#d8cdb6",.2,90)}function uT(n,t){for(let a=0;a<3;a+=1){const l=Rs+a*Oe;fc(n,l,t,["#c9a878","#c4a06c","#cfae80"][a],"#8a6538",2),aT(n,l,t)}fc(n,Rs+3*Oe,t,"#c7a574","#8d6a3d",1),fc(n,Rs+4*Oe,t,"#9c7a4f","#5d4226",1);const e=Rs+5*Oe;n.fillStyle="#4a3423",n.fillRect(0,e,ge,Oe),vl(n,0,e,ge,Oe,t,"#24170e",26,.6),vl(n,0,e,ge,Oe,t,"#7a5a3a",8,.25),co(n,0,e,ge,Oe,t,30,"#1c120a",.3,40),n.fillStyle="#8c3a24",n.fillRect(0,e,ge,3);for(let a=0;a<ge;a+=2+t()*9)n.fillStyle=t()<.6?"#c9a24b":"#e8d9b0",n.fillRect(a,e+t()*4,1+t()*5,1+t()*3);for(let a=0;a<18;a+=1)n.fillStyle="#120b06",n.beginPath(),n.arc(t()*ge,e+10+t()*(Oe-20),1.6,0,Math.PI*2),n.fill();const o=Rs+6*Oe;fc(n,o,t,"#7f6649","#4e3b27",2),n.save(),n.strokeStyle="#4e3b27",n.lineWidth=1;for(let a=0;a<ge;a+=9+t()*6)n.globalAlpha=.08+t()*.1,n.beginPath(),n.moveTo(a,o),n.lineTo(a+18,o+Oe),n.stroke();n.restore(),co(n,0,o,ge,Oe,t,20,"#2a2016",.3,50);const i=Rs+7*Oe,s=[[3,"#a07c5c"],[11,"#e8e0cf"],[22,"#c4b89f"],[4,"#6e5a40"],[24,"#8a7355"]];let r=i;for(const[a,l]of s){n.fillStyle=l,n.beginPath(),n.moveTo(0,r);for(let c=0;c<=ge;c+=16)n.lineTo(c,r+(t()-.5)*1.5);n.lineTo(ge,i+Oe),n.lineTo(0,i+Oe),n.closePath(),n.fill(),r+=a}co(n,0,i+14,ge,22,t,500,"#8e836c",.5,3),co(n,0,i,ge,Oe,t,30,"#5a4c3a",.2,30)}function Ra(n,t,e,o,i,s,r){n.fillStyle=r,n.beginPath();const a=s()<.6;if(n.moveTo(t+2,e+2),n.lineTo(t+o-2-(a?o*.18:0),e+1),a)for(let c=1;c<=5;c+=1)n.lineTo(t+o-2-o*.18*(1-c/5)+(s()-.5)*4,e+1+i*.3*(c/5));n.lineTo(t+o-1,e+i-2),n.lineTo(t+1,e+i-1),n.closePath(),n.fill(),n.save(),n.clip(),co(n,t,e,o,i,s,12,"#8a6a3a",.28,12),co(n,t,e,o,i,s,4,"#b89a66",.35,60);const l=n.createLinearGradient(t,e,t,e+i);l.addColorStop(0,"rgba(120,90,50,0.25)"),l.addColorStop(.2,"rgba(120,90,50,0)"),l.addColorStop(.8,"rgba(120,90,50,0)"),l.addColorStop(1,"rgba(120,90,50,0.3)"),n.fillStyle=l,n.fillRect(t,e,o,i),n.restore()}function ue(n,t,e,o,i,s,r="center"){n.font=i,n.fillStyle=s,n.textAlign=r,n.textBaseline="middle",n.fillText(t,e,o)}function pr(n,t,e,o,i,s,r,a){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip(),n.globalCompositeOperation="destination-out";for(let l=0;l<r;l+=1)n.globalAlpha=.5+s()*.5,a?n.fillRect(t+s()*o,e+s()*i,3+s()*9,1+s()*1.5):(n.beginPath(),n.arc(t+s()*o,e+s()*i,.8+s()*2.2,0,Math.PI*2),n.fill());n.restore()}function hT(n,t){const e=i=>{const s=Hf.findIndex(([l])=>l===i),[,r,a]=Hf[s];return Vv(s,r,a)},o="#2b2520";{const[i,s,r,a]=e("exhibition");Ra(n,i,s,r,a,t,"#e6dcc2"),n.strokeStyle=o,n.lineWidth=2,n.strokeRect(i+10,s+10,r-20,a-20),n.lineWidth=.8,n.strokeRect(i+14,s+14,r-28,a-28),ue(n,"EXPOSITION",i+r/2,s+36,`bold 24px ${De}`,o),ue(n,"DES AMIS DES ARTS",i+r/2,s+60,`13px ${De}`,o),ue(n,"— 1867 —",i+r/2,s+80,`italic 13px ${De}`,o),ue(n,"N°",i+50,s+114,`16px ${De}`,o),ue(n,"412",i+120,s+112,`34px ${Aa}`,"#3a2a55")}{const[i,s,r,a]=e("packer");Ra(n,i,s,r,a,t,"#efe4c6"),ue(n,"HOLLIS & REDE",i+r/2,s+30,`bold 23px ${De}`,"#5a1e16"),ue(n,"FINE ART PACKERS · SHIPPERS",i+r/2,s+54,`10px ${De}`,"#5a1e16"),ue(n,"14 Wardour Street, London",i+r/2,s+70,`italic 11px ${De}`,"#5a1e16"),n.fillStyle="#5a1e16",n.fillRect(i+22,s+82,r-44,1.5),ue(n,"Case",i+40,s+108,`13px ${De}`,"#5a1e16","left"),ue(n,"37",i+120,s+106,`40px ${Aa}`,o)}{const[i,s,r,a]=e("dealer");n.save(),n.beginPath(),n.ellipse(i+r/2,s+a/2,r/2-3,a/2-3,0,0,Math.PI*2),n.clip(),Ra(n,i,s,r,a,t,"#dfe0cf"),n.restore(),n.strokeStyle="#1f3558",n.lineWidth=3,n.beginPath(),n.ellipse(i+r/2,s+a/2,r/2-12,a/2-12,0,0,Math.PI*2),n.stroke(),ue(n,"GALERIE",i+r/2,s+48,`14px ${De}`,"#1f3558"),ue(n,"VAUTRIN",i+r/2,s+74,`bold 28px ${De}`,"#1f3558"),ue(n,"22, rue Laffitte · Paris",i+r/2,s+100,`italic 11px ${De}`,"#1f3558"),ue(n,"4471",i+r/2,s+128,`30px ${Aa}`,o)}{const[i,s,r,a]=e("loan");Ra(n,i,s,r,a,t,"#f1ecdf"),n.fillStyle="#2c4a7a",n.fillRect(i+6,s+6,r-12,22),ue(n,"LENT BY",i+r/2,s+18,`bold 14px ${De}`,"#f1ecdf"),ue(n,"the Trustees",i+r/2,s+48,`italic 15px ${De}`,o),ue(n,"Cat. 218",i+r/2,s+86,`28px ${Aa}`,o)}{const[i,s,r,a]=e("ticket");Ra(n,i,s,r,a,t,"#e9dfbe"),ue(n,"N°",i+34,s+a/2,`18px ${De}`,o),ue(n,"58",i+90,s+a/2-2,`42px ${Aa}`,o)}{const[i,s,r,a]=e("customs"),l=i+r/2,c=s+a/2,u="#4a2d6e";n.strokeStyle=u,n.lineWidth=5,n.beginPath(),n.arc(l,c,r/2-8,0,Math.PI*2),n.stroke(),n.lineWidth=2,n.beginPath(),n.arc(l,c,r/2-44,0,Math.PI*2),n.stroke(),n.font=`bold 19px ${De}`,n.fillStyle=u,n.textAlign="center",n.textBaseline="middle";const h="DOUANE CENTRALE · PARIS · EXPORT · ";for(let f=0;f<h.length;f+=1){const d=-Math.PI/2+f/h.length*Math.PI*2;n.save(),n.translate(l+Math.cos(d)*(r/2-26),c+Math.sin(d)*(r/2-26)),n.rotate(d+Math.PI/2),n.fillText(h[f],0,0),n.restore()}ue(n,"1889",l,c-6,`bold 30px ${De}`,u),ue(n,"VU",l,c+22,`bold 18px ${De}`,u),pr(n,i,s,r,a,t,900,!1)}{const[i,s,r,a]=e("colourman"),l=i+r/2,c=s+a/2,u="#1e2330";n.strokeStyle=u,n.lineWidth=3,n.beginPath(),n.ellipse(l,c,r/2-6,a/2-6,0,0,Math.PI*2),n.stroke(),n.lineWidth=1.2,n.beginPath(),n.ellipse(l,c,r/2-14,a/2-14,0,0,Math.PI*2),n.stroke(),ue(n,"PREPARED BY",l,c-42,`12px ${De}`,u),ue(n,"R. ASHBY & SON",l,c-14,`bold 22px ${De}`,u),ue(n,"ARTISTS’ COLOURMEN",l,c+12,`11px ${De}`,u),ue(n,"9, LONG ACRE · LONDON",l,c+34,`12px ${De}`,u),pr(n,i,s,r,a,t,1400,!1)}{const[i,s,r,a]=e("seal"),l=i+r/2,c=s+a/2;n.beginPath();for(let h=0;h<=Math.PI*2+.01;h+=.2){const f=r/2-6+Math.sin(h*5+1)*3+(t()-.5)*3;h===0?n.moveTo(l+Math.cos(h)*f,c+Math.sin(h)*f):n.lineTo(l+Math.cos(h)*f,c+Math.sin(h)*f)}n.closePath();const u=n.createRadialGradient(l-10,c-12,4,l,c,r/2);u.addColorStop(0,"#b8392c"),u.addColorStop(.7,"#8a1b14"),u.addColorStop(1,"#5c0f0b"),n.fillStyle=u,n.fill(),n.strokeStyle="#5c0f0b",n.lineWidth=2,n.beginPath(),n.arc(l,c,r/2-22,0,Math.PI*2),n.stroke(),ue(n,"V",l+1,c+2,`bold 40px ${De}`,"#e0786a"),ue(n,"V",l,c,`bold 40px ${De}`,"#5c0f0b")}{const[i,s,r,a]=e("chalkNumber");ue(n,"4471",i+r/2-10,s+a/2,`bold 76px ${i0}`,"#ece6d2"),n.strokeStyle="#ece6d2",n.lineWidth=5,n.beginPath(),n.moveTo(i+20,s+a-14),n.quadraticCurveTo(i+r/2,s+a-4,i+r-16,s+a-18),n.stroke(),pr(n,i,s,r,a,t,700,!0)}{const[i,s,r,a]=e("chalkCross");n.strokeStyle="#efe3bf",n.lineWidth=7,n.lineCap="round",n.beginPath(),n.moveTo(i+14,s+16),n.lineTo(i+70,s+a-16),n.moveTo(i+70,s+16),n.lineTo(i+16,s+a-18),n.stroke(),ue(n,"B 12",i+150,s+a/2,`bold 58px ${i0}`,"#efe3bf"),pr(n,i,s,r,a,t,600,!0)}{const[i,s,r,a]=e("chalkTop");ue(n,"ALTO",i+150,s+a/2+4,`bold 64px ${i0}`,"#f0ead8"),n.strokeStyle="#f0ead8",n.lineWidth=7,n.lineCap="round",n.beginPath(),n.moveTo(i+40,s+a-14),n.lineTo(i+40,s+16),n.moveTo(i+18,s+40),n.lineTo(i+40,s+16),n.lineTo(i+62,s+40),n.stroke(),pr(n,i,s,r,a,t,700,!0)}{const[i,s,r,a]=e("stencil");ue(n,"INV. 1752 · 14",i+r/2,s+a/2+2,'bold 36px "Arial Black", Impact, sans-serif',"#1b1917"),n.save(),n.globalCompositeOperation="destination-out";for(let l=i+12;l<i+r;l+=17)n.fillRect(l,s+a/2-1,2,3);n.restore(),pr(n,i,s,r,a,t,300,!1)}{const[i,s,r,a]=e("bracket"),l=54;n.fillStyle="#35332f",n.beginPath(),n.moveTo(i+4,s+4),n.lineTo(i+r-4,s+4),n.lineTo(i+r-4,s+l),n.lineTo(i+l,s+l),n.lineTo(i+l,s+a-4),n.lineTo(i+4,s+a-4),n.closePath(),n.fill(),n.save(),n.clip(),co(n,i,s,r,a,t,26,"#7a4524",.5,20),n.restore(),n.strokeStyle="#6a655c",n.lineWidth=1.5,n.stroke();for(const[c,u]of[[l/2+2,l/2+2],[110,l/2+2],[180,l/2+2],[l/2+2,110],[l/2+2,180]])n.fillStyle="#1e1c1a",n.beginPath(),n.arc(i+c,s+u,9,0,Math.PI*2),n.fill(),n.strokeStyle="#5b574f",n.lineWidth=2,n.beginPath(),n.moveTo(i+c-6,s+u-2),n.lineTo(i+c+6,s+u+2),n.stroke()}}function fT(){const n=document.createElement("canvas");n.width=ge,n.height=ge;const t=n.getContext("2d");if(!t)throw new Error("2D canvas context unavailable for the backs of things");const e=Hd(1789);return lT(t,e),cT(t,e),uT(t,e),hT(t,e),n}function dT(){const n=new ce(fT());n.colorSpace=te,n.anisotropy=8;const t=new wt({map:n,bumpMap:n,bumpScale:1.2,roughness:.9,metalness:0,alphaTest:.5});return{material:t,dispose(){n.dispose(),t.dispose()}}}class Wv{constructor(){ho(this,"position",[]);ho(this,"normal",[]);ho(this,"uv",[])}tri(t,e,o,i,s,r,a){const l=e[0]-t[0],c=e[1]-t[1],u=e[2]-t[2],h=o[0]-t[0],f=o[1]-t[1],d=o[2]-t[2],v=(c*d-u*f)*i[0]+(u*h-l*d)*i[1]+(l*f-c*h)*i[2]<0?[[t,s],[o,a],[e,r]]:[[t,s],[e,r],[o,a]];for(const[m,g]of v)this.position.push(m[0],m[1],m[2]),this.normal.push(i[0],i[1],i[2]),this.uv.push(g[0],g[1])}quad(t,e,o,i,s,r,a,l,c){this.tri(t,e,o,s,r,a,l),this.tri(t,o,i,s,r,l,c)}build(){const t=new $t;return t.setAttribute("position",new Dt(this.position,3)),t.setAttribute("normal",new Dt(this.normal,3)),t.setAttribute("uv",new Dt(this.uv,2)),t}}const Vd=[0,0,-1];function Wd(n,t,e,o,i){let s=0;for(let l=0;l<t.length;l+=1){const[c,u]=t[l],[h,f]=t[(l+1)%t.length];s+=c*f-h*u}const r=s<0?[...t].reverse():t,a=(l,c)=>[l[0],l[1],c];for(let l=1;l<r.length-1;l+=1){const c=r[0],u=r[l],h=r[l+1];n.tri(a(c,e),a(u,e),a(h,e),Vd,i(...c),i(...u),i(...h))}for(let l=0;l<r.length;l+=1){const c=r[l],u=r[(l+1)%r.length],h=u[0]-c[0],f=u[1]-c[1],d=Math.hypot(h,f),p=[f/d,-h/d,0];n.quad(a(c,e),a(u,e),a(u,o),a(c,o),p,i(...c),i(...u),i(...u),i(...c))}}function Xd(n,t,e){const o=Math.max(2,t),i=(1-t/o)*e;return(s,r)=>[n.u0+(i+s/o)*(n.u1-n.u0),n.v1-Math.min(1,Math.max(0,r))*(n.v1-n.v0)]}function Vf(n,t,e,o,i,s,r){const[a,l]=t,[c,u]=e;[{outline:[[-c,-u],[c,-u],[a,-l],[-a,-l]],s:(f,d)=>[f+c,(d+u)/(u-l)],length:c*2},{outline:[[c,-u],[c,u],[a,l],[a,-l]],s:(f,d)=>[d+u,(c-f)/(c-a)],length:u*2},{outline:[[c,u],[-c,u],[-a,l],[a,l]],s:(f,d)=>[c-f,(u-d)/(u-l)],length:c*2},{outline:[[-c,u],[-c,-u],[-a,-l],[-a,l]],s:(f,d)=>[u-d,(f+c)/(c-a)],length:u*2}].forEach((f,d)=>{const p=Xd(s[d%s.length],f.length,r());Wd(n,f.outline,o,i,(v,m)=>{const[g,b]=f.s(v,m);return p(g,b)})})}function Lr(n,t,e,o,i,s,r,a){const l=e[0]-t[0],c=e[1]-t[1],u=Math.hypot(l,c),h=-c/u*(o/2),f=l/u*(o/2),d=Xd(r,u,a());Wd(n,[[t[0]-h,t[1]-f],[e[0]-h,e[1]-f],[e[0]+h,e[1]+f],[t[0]+h,t[1]+f]],i,s,(p,v)=>{const m=((p-t[0])*l+(v-t[1])*c)/u,g=((p-t[0])*-c+(v-t[1])*l)/u/o+.5;return d(m,1-g)})}function io(n,t,e,o,i,s,r=0){const a=i*s.aspect,l=Math.cos(r),c=Math.sin(r),u=(h,f)=>[t-(h*l-f*c),e+(h*c+f*l),o];n.quad(u(-i/2,-a/2),u(i/2,-a/2),u(i/2,a/2),u(-i/2,a/2),Vd,[s.u0,s.v0],[s.u1,s.v0],[s.u1,s.v1],[s.u0,s.v1])}function Xv(n,t,e,o,i){n.quad([t,-e,o],[-t,-e,o],[-t,e,o],[t,e,o],Vd,[i.u0,i.v0],[i.u1,i.v0],[i.u1,i.v1],[i.u0,i.v1])}const mr=.03,dc=-.006,Pa=-.01;function pT(n,t){const e=Hd(n.objectId),o=n.widthMetres/2,i=n.heightMetres/2,s=t.width,r=Math.max(n.widthMetres,n.heightMetres),a=Math.min(n.widthMetres,n.heightMetres),l=Math.min(.072,Math.max(.045,.036+.02*r)),c=new Wv;Xv(c,o,i,mr,iT),Vf(c,[o,i],[o+s,i+s],dc,0,[Uo.frameBack],e),Vf(c,[o-l,i-l],[o,i],Pa,mr,Uo.stretcher,e);const u=Pa+.002,h=mr-.006,f=l*.85,d=n.widthMetres<=n.heightMetres,p=a>1.1,v=[];if(r>.75&&v.push(d?"h":"v"),p&&v.push(d?"v":"h"),v.includes("v")&&Lr(c,[0,-(i-l)],[0,i-l],f,u,h,Uo.pine,e),v.includes("h")){const j=v.includes("v")?f/2:0;j>0?(Lr(c,[-(o-l),0],[-j,0],f,u,h,Uo.pine,e),Lr(c,[j,0],[o-l,0],f,u,h,Uo.pine,e)):Lr(c,[-(o-l),0],[o-l,0],f,u,h,Uo.pine,e)}const m=l*.95,g=l*.42,b=g*.45,x=(j,X,at)=>{const[rt,ft]=j,et=[rt+X[0]*m,ft+X[1]*m],q=Xd(Uo.key,m,e());Wd(c,[[rt-at[0]*b/2,ft-at[1]*b/2],[et[0]-at[0]*g/2,et[1]-at[1]*g/2],[et[0]+at[0]*g/2,et[1]+at[1]*g/2],[rt+at[0]*b/2,ft+at[1]*b/2]],Pa-.005,Pa+.001,(ct,vt)=>q((ct-rt)*X[0]+(vt-ft)*X[1],.3+((ct-rt)*at[0]+(vt-ft)*at[1])/g))},w=(j,X,at,rt)=>{x([at+j*m*.8,X*(i-l*.55)],[-j,0],[0,1]),x([j*(o-l*.55),rt+X*m*.8],[0,-X],[1,0])};for(const j of[-1,1])for(const X of[-1,1])w(j,X,j*(o-l),X*(i-l));for(const j of v)for(const X of[-1,1])j==="h"?x([X*(o-l*.5),f*.5+g*.6],[-X,0],[0,1]):x([f*.5+g*.6,X*(i-l*.5)],[0,-X],[1,0]);const E=8e-4,S=j=>j[Math.floor(e()*j.length)],_=()=>(e()-.5)*.12,y=[[-1,1],[1,1],[-1,-1],[1,-1]];for(let j=y.length-1;j>0;j-=1){const X=Math.floor(e()*(j+1));[y[j],y[X]]=[y[X],y[j]]}const A=j=>[j[0]*(o-l)*(.42+e()*.12),j[1]*(i-l)*(.42+e()*.12)],M=(j,X)=>Math.min(X,Math.max(.07,a*j));{const[j,X]=A(y[0]);io(c,j,X,mr-E,M(.2,.15),tn.colourman,_())}{const[j,X]=A(y[1]);io(c,j,X,mr-E,M(.17,.13),S([tn.dealer,tn.loan,tn.packer]),_())}{const[j,X]=A(y[2]);io(c,j,X,mr-E,M(.3,.26),S([tn.chalkNumber,tn.chalkCross]),_())}const T=Pa-E,R=S([tn.exhibition,tn.packer,tn.loan]),L=Math.min(o*.9,l*.92/R.aspect);io(c,(e()-.5)*(o-L)*.8,i-l/2,T,L,R,_()*.5);const U=e()<.5?-1:1;io(c,U*(o-l/2),(e()-.3)*i*.7,T,l*.8,tn.customs,e()*6.28),io(c,(e()-.5)*o*.5,-(i-l/2),T,l*.5,tn.seal,e()*6.28),io(c,-U*(o-l/2),-(e()*.5)*i,T,Math.min(i*.5,l*1.9),tn.chalkCross,Math.PI/2+_()),s>.085&&io(c,(e()-.5)*o,-(i+s/2),dc-E,s*.62,tn.ticket,_());const z=[],O=.011,B=i*.42,N=o+s*.45,H=dc-.0025;for(const j of[-1,1])z.push(new ee(Math.min(.028,s*.5),.034,.0025).translate(j*N,B,dc-.00125)),z.push(new dn(O,.0017,4,7,Math.PI).applyMatrix4(new It().set(0,0,-1,0,1,0,0,0,0,-1,0,0,0,0,0,1)).translate(j*N,B,H));const G=H-O,$=.035+.05*N,Q=new zn(Array.from({length:9},(j,X)=>{const at=X/8,rt=-N+at*N*2;return new P(rt,B,G-$*(1-(2*at-1)**2))}));return z.push(new $n(Q,14,.0012,3,!1)),{reverse:c.build(),brass:z}}function mT(n,t,e,o,i){const s=Hd(i*7919+17),r=new Wv,a=n/2,l=t/2,c=Uo.strata,u=(E,S,_,y)=>{const A=Math.hypot(S[0]-E[0],S[1]-E[1]),M=c.u0+y*(c.u1-c.u0),T=M+A/8*(c.u1-c.u0);r.quad([E[0],E[1],e],[S[0],S[1],e],[S[0],S[1],o],[E[0],E[1],o],_,[M,c.v1],[T,c.v1],[T,c.v0],[M,c.v0])};u([-a,-l],[a,-l],[0,-1,0],0),u([a,-l],[a,l],[1,0,0],.4),u([a,l],[-a,l],[0,1,0],.1),u([-a,l],[-a,-l],[-1,0,0],.6),Xv(r,a,l,o,sT);const h=.075,d=o-.05;Vf(r,[a-h,l-h],[a,l],d,o,[Uo.cradle],s);const p=Math.max(2,Math.round(n/.62)-1),v=.07;for(let E=1;E<=p;E+=1){const S=-a+n*E/(p+1);Lr(r,[S,-.925],[S,l-h],v,d+.006,o,Uo.cradle,s)}const m=l*.46,g=.085,b=d-.04;for(const E of[-1,1])Lr(r,[-1.425,E*m],[a-h,E*m],g,b,d+.006,Uo.cradle,s);const x=8e-4;for(const[E,S,_]of[[-1,-1,0],[1,-1,-Math.PI/2],[1,1,Math.PI],[-1,1,Math.PI/2]])io(r,E*(a-.15/2+.004),S*(l-.15/2+.004),d-x,.15,tn.bracket,_);io(r,-a*.35,-m,b-x,.34,tn.stencil,Math.PI);const w=n/(p+1);return io(r,-a+w*(1.5+Math.floor(s()*(p-1))),l*.05,o-x,Math.min(.34,w*.7),tn.chalkTop,(s()-.5)*.2),io(r,a-w*.5,-l*.75,o-x,.13,gT(s,[tn.loan,tn.ticket]),(s()-.5)*.1),io(r,-a+w*.5,l*.72,o-x,.16,tn.customs,s()*6.28),r.build()}function gT(n,t){return t[Math.floor(n()*t.length)]}const Au=.02;function ou(n,t){return{width:n.widthMetres+t.width*2,height:n.heightMetres+t.width*2}}function ol(n,t,e){const{toWorld:o,sideways:i=!1}=e,s=e.placard??(i?"none":"beside"),r=e.lit??!i,a=nl(nu(e.variant??n.slotIndex),n.widthMetres),l=ou(n,a),c=a.bands.reduce((_,y)=>Math.max(_,y.depth),0),u=i?new It().makeRotationZ(Math.PI/2).premultiply(o):o,h=t.load(`./art/paintings/${n.file}`);h.colorSpace=te,h.anisotropy=16;const f=new wt({map:h,roughness:.7,emissiveMap:h,emissive:16777215,emissiveIntensity:.5});k3(f,n.widthMetres,n.heightMetres);const d=new lt(new le(n.widthMetres,n.heightMetres),f);d.position.z=.032,d.updateMatrix(),d.geometry.applyMatrix4(d.matrix),d.position.set(0,0,0),d.applyMatrix4(u);const p=[],v=[],m=[],g=[],b=[],x=[],w=[],E=[];if(e.back){const _=pT(n,a);E.push(_.reverse.applyMatrix4(u));for(const y of _.brass)m.push(y.applyMatrix4(u))}else w.push(new ee(n.widthMetres,n.heightMetres,.032).translate(0,0,.015).applyMatrix4(u));const S=Hv(n.widthMetres,n.heightMetres,a);for(const _ of S.gilt)p.push(_.applyMatrix4(u));for(const _ of S.scrollwork)v.push(_.applyMatrix4(u));if(r){const _=Math.max(l.width,l.height)*2.1+.7;g.push(new le(_,_).translate(0,l.height*.22,.004).applyMatrix4(u));const y=nT(l.width,l.height,c);y.group.applyMatrix4(u),b.push(y.group);for(const A of y.brass)m.push(A.applyMatrix4(u));x.push(y)}if(s!=="none"){const _=j3(n);x.push(_),s==="under"?_.mesh.position.set(0,-(l.height/2+Gf/2+.07),.008):_.mesh.position.set(l.width/2+kf/2+.1,e.placardY??0,.008),_.mesh.updateMatrix(),_.mesh.geometry.applyMatrix4(_.mesh.matrix),_.mesh.position.set(0,0,0),_.mesh.rotation.set(0,0,0),_.mesh.applyMatrix4(u),b.push(_.mesh)}return{canvas:d,extras:b,gilt:p,scrollwork:v,brass:m,backing:w,reverse:E,pool:g,outer:l,paint:f,dispose(){for(const _ of x)_.dispose();f.dispose(),h.dispose(),d.geometry.dispose()}}}const{length:$v,depth:iu,levels:qv,window:bm,door:vT}=Ot,xT=qv.dadoCapTop+.2,MT=qv.pictureRail-.3,yT={north:{along:"x",at:0,inward:1},"south-pier":{along:"x",at:iu,inward:-1},west:{along:"z",at:0,inward:1},east:{along:"z",at:$v,inward:-1}};function Tm(n,t,e){const o=n.reduce((a,l)=>a+l,0),i=(e-t-o)/(n.length+1),s=[];let r=t+i;for(const a of n)s.push(r+a/2),r+=a+i;return s}function wT(n){const e=xT+n/2,o=MT-n/2;return Math.min(Math.max(1.58,e),Math.max(o,e))}function _T(){const n=new Et,t=new ah,e=lh(),o=ch(),i=new wt({color:11570506,roughness:.38,metalness:.9,envMapIntensity:1.4}),s=new wt({color:2367514,roughness:.95}),r=(()=>{const _=document.createElement("canvas");_.width=256,_.height=256;const y=_.getContext("2d");if(!y)throw new Error("2D canvas context unavailable for the lamplight");const A=y.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);A.addColorStop(0,"rgba(255,206,150,0.92)"),A.addColorStop(.22,"rgba(255,192,132,0.5)"),A.addColorStop(.45,"rgba(226,152,92,0.17)"),A.addColorStop(.72,"rgba(180,110,60,0.04)"),A.addColorStop(1,"rgba(0,0,0,0)"),y.fillStyle=A,y.fillRect(0,0,256,256);const M=new ce(_);return M.colorSpace=te,M})(),a=new Vs({map:r,transparent:!0,blending:Tn,depthWrite:!1,opacity:.5}),l=[],c=[],u=[],h=[],f=[],d=[],p=[],v=new Map;for(const S of bo){const _=v.get(S.slot)??[];_.push(S),v.set(S.slot,_)}for(const S of v.values())S.sort((_,y)=>_.slotIndex-y.slotIndex);const m=(S,_)=>{const y=yT[S.slot],A=nl(nu(S.slotIndex),S.widthMetres),M=ou(S,A),T=wT(M.height),R=y.along==="x"?y.inward===1?0:Math.PI:y.inward===1?Math.PI/2:-Math.PI/2,L=y.along==="x"?new P(_,T,y.at+y.inward*Au):new P(y.at+y.inward*Au,T,_),U=new It().compose(L,new He().setFromAxisAngle(new P(0,1,0),R),new P(1,1,1)),z=ol(S,t,{toWorld:U,placard:S.slot==="south-pier"?"under":"beside",placardY:1.46-T});n.add(z.canvas);for(const O of z.extras)n.add(O);for(const O of z.gilt)l.push(O);for(const O of z.scrollwork)c.push(O);for(const O of z.brass)u.push(O);for(const O of z.backing)h.push(O);for(const O of z.pool)f.push(O);p.push(z.paint),d.push(z)},g=v.get("north")??[],b=g.map(S=>ou(S,nl(nu(S.slotIndex),S.widthMetres)).width);Tm(b,.9,$v-.9).forEach((S,_)=>{const y=g[_];y&&m(y,S)}),(v.get("south-pier")??[]).forEach((S,_)=>{const y=bm.centresX[_],A=bm.centresX[_+1];y===void 0||A===void 0||m(S,(y+A)/2)});for(const S of["west","east"]){const _=v.get(S)??[],y=vT.width/2+.35,A=[[.6,iu/2-y],[iu/2+y,iu-.6]];_.forEach((M,T)=>{const R=A[T];if(!R)return;const L=ou(M,nl(nu(M.slotIndex),M.widthMetres)).width,[U,z]=R;m(M,Tm([L],U,z)[0]??(U+z)/2)})}const w=(S,_)=>{if(S.length===0)return;const y=S.map(T=>T.index?T.toNonIndexed():T),A=Le(y,!1);for(const T of S)T.dispose();for(const T of y)S.includes(T)||T.dispose();if(!A){console.error("gallery: could not merge geometry — check attribute sets");return}const M=new lt(A,_);M.castShadow=!0,M.receiveShadow=!0,n.add(M)};w(l,e),w(c,o.material),w(u,i),w(h,s);const E=n.children.length;w(f,a);for(let S=E;S<n.children.length;S+=1){const _=n.children[S];_&&(_.renderOrder=1,_ instanceof lt&&(_.castShadow=!1,_.receiveShadow=!1))}return{group:n,dispose(){e.dispose(),o.dispose(),i.dispose(),s.dispose(),a.dispose(),r.dispose();for(const S of d)S.dispose();n.traverse(S=>{S instanceof lt&&S.geometry.dispose()})}}}class $d extends Xs{constructor(t){super(t)}load(t,e,o,i){const s=this,r=new kd(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},o,i)}parse(t){function e(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const p=[115,111,108,105,100];for(let v=0;v<5;v++)if(o(p,u,v))return!1;return!0}function o(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function i(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,d,p,v=!1,m,g,b,x,w;for(let T=0;T<70;T++)u.getUint32(T,!1)==1129270351&&u.getUint8(T+4)==82&&u.getUint8(T+5)==61&&(v=!0,m=new Float32Array(h*3*3),g=u.getUint8(T+6)/255,b=u.getUint8(T+7)/255,x=u.getUint8(T+8)/255,w=u.getUint8(T+9)/255);const E=84,S=12*4+2,_=new $t,y=new Float32Array(h*3*3),A=new Float32Array(h*3*3),M=new bt;for(let T=0;T<h;T++){const R=E+T*S,L=u.getFloat32(R,!0),U=u.getFloat32(R+4,!0),z=u.getFloat32(R+8,!0);if(v){const O=u.getUint16(R+48,!0);O&32768?(f=g,d=b,p=x):(f=(O&31)/31,d=(O>>5&31)/31,p=(O>>10&31)/31)}for(let O=1;O<=3;O++){const B=R+O*12,N=T*3*3+(O-1)*3;y[N]=u.getFloat32(B,!0),y[N+1]=u.getFloat32(B+4,!0),y[N+2]=u.getFloat32(B+8,!0),A[N]=L,A[N+1]=U,A[N+2]=z,v&&(M.setRGB(f,d,p,te),m[N]=M.r,m[N+1]=M.g,m[N+2]=M.b)}}return _.setAttribute("position",new qt(y,3)),_.setAttribute("normal",new qt(A,3)),v&&(_.setAttribute("color",new qt(m,3)),_.hasColors=!0,_.alpha=w),_}function s(c){const u=new $t,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let p=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),g=new RegExp("normal"+v+v+v,"g"),b=[],x=[],w=[],E=new P;let S,_=0,y=0,A=0;for(;(S=h.exec(c))!==null;){y=A;const M=S[0],T=(S=d.exec(M))!==null?S[1]:"";for(w.push(T);(S=f.exec(M))!==null;){let U=0,z=0;const O=S[0];for(;(S=g.exec(O))!==null;)E.x=parseFloat(S[1]),E.y=parseFloat(S[2]),E.z=parseFloat(S[3]),z++;for(;(S=m.exec(O))!==null;)b.push(parseFloat(S[1]),parseFloat(S[2]),parseFloat(S[3])),x.push(E.x,E.y,E.z),U++,A++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const R=y,L=A-y;u.userData.groupNames=w,u.addGroup(R,L,_),_++}return u.setAttribute("position",new Dt(b,3)),u.setAttribute("normal",new Dt(x,3)),u}function r(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(t);return e(l)?i(l):s(r(t))}}const Yv=[.07,.3,.5,.68,.8,.9],ST=.12,bT=9.81,TT=.25,s0=.74,Em=1.3,ET=1/30,AT=1.5,RT=.34;function Am(n,t,e,o,i){const s=[];for(let d=0;d<n.length;d+=3)Math.abs(n[d+1]-t)<=e&&s.push({x:n[d],z:n[d+2],angle:0});if(s.length<3)return;let r=0,a=0;for(const d of s)r+=d.x,a+=d.z;r/=s.length,a/=s.length;for(const d of s)d.angle=Math.atan2(d.z-a,d.x-r);s.sort((d,p)=>d.angle-p.angle);const l=Math.max(.004,e*1.6),c=d=>Math.sin(d*12.9898)*43758.5453%1,u=s.map((d,p)=>({x:r+(d.x-r)*.45,z:a+(d.z-a)*.45,y:t+c(p)*l})),h=t+c(s.length)*l*.6,f=(d,p,v,m,g,b,x,w,E)=>{const S=o>0?[m,g,b]:[x,w,E],_=o>0?[x,w,E]:[m,g,b];i.position.push(d,p,v,S[0],S[1],S[2],_[0],_[1],_[2]);for(let y=0;y<3;y+=1)i.normal.push(0,o,0)};for(let d=0;d<s.length;d+=1){const p=s[d],v=s[(d+1)%s.length],m=u[d],g=u[(d+1)%s.length];f(p.x,t,p.z,v.x,t,v.z,g.x,g.y,g.z),f(p.x,t,p.z,g.x,g.y,g.z,m.x,m.y,m.z),f(r,h,a,m.x,m.y,m.z,g.x,g.y,g.z)}}function PT(n,t){const e=n.index?n.toNonIndexed():n,o=e.getAttribute("position"),i=e.getAttribute("normal"),s=t.concat([1/0]).map(()=>({position:[],normal:[],surfaceVerts:0}));for(let l=0;l<o.count;l+=3){const c=(o.getY(l)+o.getY(l+1)+o.getY(l+2))/3;let u=0;for(;u<t.length&&c>t[u];)u+=1;const h=s[u];for(let f=0;f<3;f+=1)h.position.push(o.getX(l+f),o.getY(l+f),o.getZ(l+f)),i&&h.normal.push(i.getX(l+f),i.getY(l+f),i.getZ(l+f))}e!==n&&e.dispose();const r=t.length>1?t[1]-t[0]:.1,a=Math.max(.012,r*.06);for(let l=0;l<s.length;l+=1){const c=s[l];if(c.position.length===0)continue;const u=c.position.slice();c.surfaceVerts=u.length/3,l>0&&Am(u,t[l-1],a,-1,c),l<t.length&&Am(u,t[l],a,1,c)}return s.filter(l=>l.position.length>0).map(l=>{const c=new $t;c.setAttribute("position",new Dt(l.position,3)),l.normal.length>0&&c.setAttribute("normal",new Dt(l.normal,3));const u=l.position.length/3;return c.addGroup(0,l.surfaceVerts,0),u>l.surfaceVerts&&c.addGroup(l.surfaceVerts,u-l.surfaceVerts,1),c})}function CT(n,t,e,o){n.updateMatrixWorld(!0);const i=n.geometry.clone().applyMatrix4(n.matrixWorld),s=new Ln().setFromBufferAttribute(i.getAttribute("position")),r=s.min.y,a=s.max.y-r,l=Yv.map(E=>r+E*a),c=new Et;c.visible=!1;const u=[],h=[t,e],f=e.clone();f.side=on;for(const E of PT(i,l)){E.computeBoundingBox();const S=E.boundingBox.getCenter(new P);E.translate(-S.x,-S.y,-S.z),E.computeBoundingBox();const _=new lt(E,h);_.castShadow=!0,_.position.copy(S);const y=new lt(E,f);_.add(y),c.add(_),u.push({mesh:_,origin:S.clone(),box:E.boundingBox.clone(),velocity:new P,spin:new P,asleep:!0})}i.dispose();let d=null,p=1;const v=new P,m=new P,g=new Gs,b=new He,x=(E,S)=>E>=o.minX&&E<=o.maxX&&S>=o.minZ&&S<=o.maxZ?o.top:0,w=E=>{let S=1/0;const{min:_,max:y}=E.box;for(let A=0;A<8;A+=1)v.set(A&1?y.x:_.x,A&2?y.y:_.y,A&4?y.z:_.z).applyQuaternion(E.mesh.quaternion),S=Math.min(S,E.mesh.position.y+v.y);return S};return{group:c,count:u.length,burst(E,S){c.visible=!0,b.setFromRotationMatrix(E);for(const _ of u){_.mesh.position.copy(_.origin).applyMatrix4(E),_.mesh.quaternion.copy(b),m.subVectors(_.mesh.position,S);const y=Math.max(m.length(),.12);m.divideScalar(y);const M=.55/(.25+_.box.getBoundingSphere(g).radius),T=2.6/(.5+y)*M;_.velocity.set(m.x*T+(Math.random()-.5)*Em,Math.abs(m.y)*T*.5+.7,m.z*T+(Math.random()-.5)*Em);const R=5*M;_.spin.set((Math.random()-.5)*R,(Math.random()-.5)*R*.6,(Math.random()-.5)*R),_.asleep=!1}},reassemble(E){d||(d=u.map((T,R)=>{const L=Math.sin((R+1)*91.7)*43758.5453,U=L-Math.floor(L);return{at:T.mesh.position.clone(),turn:T.mesh.quaternion.clone(),far:T.mesh.position.distanceTo(T.origin),axis:new P(U-.5,.6,.5-U*.7).normalize(),twist:(.9+U*1.4)*Math.PI,seed:U}}),p=Math.max(.001,...d.map(T=>T.far))),c.visible=!0;const S=new He,_=new He,y=u.length,A=Math.min(1,Math.max(0,E/.14)),M=A*A*(3-2*A);u.forEach((T,R)=>{const L=d[R],z=.16+(y>1?R/(y-1):0)*.34,O=Math.min(.92,z+.42),B=Math.min(1,Math.max(0,(E-z)/(O-z))),N=B<.5?4*B*B*B:1-Math.pow(-2*B+2,3)/2,H=Math.sin(E*190+L.seed*40)*.012*M*(1-N),G=new P(L.at.x+H,L.at.y+(.3+L.seed*.25)*M,L.at.z-H),$=Math.max(G.y,T.origin.y)+.5+.35*(L.far/p),Q=new P((G.x+T.origin.x)/2+(G.x-T.origin.x)*.25,$,(G.z+T.origin.z)/2+(G.z-T.origin.z)*.25),j=1-N;T.mesh.position.set(j*j*G.x+2*j*N*Q.x+N*N*T.origin.x,j*j*G.y+2*j*N*Q.y+N*N*T.origin.y,j*j*G.z+2*j*N*Q.z+N*N*T.origin.z),B>.88&&B<1&&(T.mesh.position.y-=Math.sin((B-.88)/.12*Math.PI)*.012),_.setFromAxisAngle(L.axis,L.twist*j*j*M+H*3),T.mesh.quaternion.slerpQuaternions(L.turn,S,N).multiply(_),T.asleep=!0})},update(E,S){if(!c.visible)return;const _=Math.min(E,ET);for(const y of u){if(y.asleep&&S&&S.speed>.6){m.set(y.mesh.position.x-S.x,0,y.mesh.position.z-S.z);const T=m.length(),R=y.box.getBoundingSphere(g).radius,L=y.mesh.position.y-R;if(T<R+RT&&T>1e-4&&S.feet<L+R*2){m.divideScalar(T);const U=AT*Math.min(S.speed/2.8,1);y.velocity.set(m.x*U,.8+Math.random()*.5,m.z*U),y.spin.set((Math.random()-.5)*6,(Math.random()-.5)*4,(Math.random()-.5)*6),y.asleep=!1}}if(y.asleep)continue;y.velocity.y-=bT*_,y.velocity.multiplyScalar(1-TT*_),y.mesh.position.addScaledVector(y.velocity,_),b.setFromAxisAngle(m.copy(y.spin).normalize(),y.spin.length()*_),y.spin.lengthSq()>1e-6&&y.mesh.quaternion.premultiply(b);const A=x(y.mesh.position.x,y.mesh.position.z),M=w(y);M<A&&(y.mesh.position.y+=A-M,y.velocity.y<0&&(y.velocity.y*=-.22),y.velocity.x*=s0,y.velocity.z*=s0,y.spin.multiplyScalar(s0),y.velocity.length()<ST&&y.spin.length()<.4&&(y.velocity.set(0,0,0),y.spin.set(0,0,0),y.asleep=!0))}},settled(){return c.visible&&u.every(E=>E.asleep)},dispose(){f.dispose();for(const E of u)E.mesh.geometry.dispose()}}}const Ms=2600,Wf=5.5,IT=.9,LT=.35,DT=`
attribute float aSeed;
attribute float aScale;
varying float vFade;
uniform float uAge;
uniform float uSize;

void main() {
  // Each mote starts at its own moment, so the cloud blooms rather than
  // appearing whole.
  float t = clamp((uAge - aSeed * 0.35) / ${Wf.toFixed(1)}, 0.0, 1.0);
  vFade = (1.0 - t) * smoothstep(0.0, 0.06, t);

  vec4 view = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * view;
  // Grows as it expands and thins, the way a real cloud does, and shrinks
  // with distance so it sits in the world rather than on the screen.
  gl_PointSize = uSize * aScale * (0.5 + t * 1.4) / max(-view.z, 0.5);
}
`,NT=`
precision highp float;
varying float vFade;
uniform vec3 uColour;

void main() {
  // A soft round splat. Square dust is the giveaway in every cheap
  // particle system ever shipped.
  vec2 from = gl_PointCoord - 0.5;
  float d = 1.0 - clamp(length(from) * 2.0, 0.0, 1.0);
  float body = pow(d, 1.6);
  if (body < 0.01) discard;
  // Each mote is nearly transparent. Density does the work, not opacity —
  // a cloud is thousands of almost-invisible things, and anything you can
  // pick out individually is a bead.
  gl_FragColor = vec4(uColour, body * vFade * 0.13);
}
`;function UT(){const n=new Et;n.visible=!1;const t=new Float32Array(Ms*3),e=new Float32Array(Ms*3),o=new Float32Array(Ms),i=new Float32Array(Ms);for(let c=0;c<Ms;c+=1)o[c]=Math.random(),i[c]=.35+Math.pow(Math.random(),3)*2.2;const s=new $t;s.setAttribute("position",new qt(t,3)),s.setAttribute("aSeed",new qt(o,1)),s.setAttribute("aScale",new qt(i,1));const r={uAge:{value:0},uSize:{value:42},uColour:{value:new bt(14208440)}},a=new us(s,new Se({vertexShader:DT,fragmentShader:NT,uniforms:r,transparent:!0,depthWrite:!1,blending:Os}));a.frustumCulled=!1,n.add(a);let l=Wf+1;return{group:n,burst(c){l=0,n.visible=!0;for(let u=0;u<Ms;u+=1){const h=Math.random()*Math.PI*2,f=Math.pow(Math.random(),2)*4.2+.3,d=Math.pow(Math.random(),2.2)*1.7;t[u*3]=c.x+Math.cos(h)*.25*Math.random(),t[u*3+1]=c.y+Math.random()*.4,t[u*3+2]=c.z+Math.sin(h)*.25*Math.random(),e[u*3]=Math.cos(h)*f,e[u*3+1]=d,e[u*3+2]=Math.sin(h)*f}s.getAttribute("position").needsUpdate=!0},update(c){if(l>Wf){n.visible&&(n.visible=!1);return}l+=c,r.uAge.value=l;const u=Math.max(0,1-IT*c);for(let h=0;h<Ms;h+=1){const f=h*3;e[f]*=u,e[f+2]*=u,e[f+1]=e[f+1]*u-LT*c,t[f]+=e[f]*c,t[f+1]=Math.max(.02,t[f+1]+e[f+1]*c),t[f+2]+=e[f+2]*c}s.getAttribute("position").needsUpdate=!0},dispose(){s.dispose(),a.material.dispose()}}}const FT=5.6,r0=.36,OT=8.4,Er=2.2,Va=.7,Zv=`
vec3 iridescent(float t) {
  return vec3(0.58, 0.55, 0.62)
       + vec3(0.42, 0.40, 0.38) * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * t
                                   + vec3(0.02, 0.34, 0.63)));
}
vec3 lit(float t, float lift) {
  vec3 c = iridescent(t);
  return c + (vec3(1.0) - c) * lift;
}
/**
 * The same turn of hues, pale: mother-of-pearl rather than a spectrum.
 * At full strength the palette is every colour a stage light has, and
 * against the red of the gallery it read as one.
 */
vec3 pearl(float t) {
  return vec3(0.76, 0.71, 0.78)
       + vec3(0.24, 0.24, 0.21) * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * t
                                   + vec3(0.02, 0.34, 0.63)));
}
float soulHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float soulNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(soulHash(i), soulHash(i + vec3(1.0, 0.0, 0.0)), f.x),
        mix(soulHash(i + vec3(0.0, 1.0, 0.0)), soulHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(soulHash(i + vec3(0.0, 0.0, 1.0)), soulHash(i + vec3(1.0, 0.0, 1.0)), f.x),
        mix(soulHash(i + vec3(0.0, 1.0, 1.0)), soulHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}
`,zT=`
uniform vec3 uAnchor;
uniform vec2 uSize;
varying vec2 vMetres;
void main() {
  vec3 toEye = cameraPosition - uAnchor;
  vec3 side = normalize(vec3(toEye.z, 0.0, -toEye.x) + vec3(1e-5, 0.0, 0.0));
  vec2 m = vec2(position.x * uSize.x, (position.y + 0.5) * uSize.y);
  vMetres = vec2(m.x, m.y - ${Va.toFixed(2)});
  gl_Position = projectionMatrix * viewMatrix * vec4(uAnchor + side * m.x + vec3(0.0, m.y, 0.0), 1.0);
}
`,BT=`
uniform float uTime;
uniform float uPresence;
uniform float uStretch;
uniform float uGone;
uniform float uSeed;
uniform float uWide;
uniform float uGain;
uniform float uSlow;
varying vec2 vMetres;

${Zv}

float flow(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i += 1) {
    sum += amp * soulNoise(vec3(p, uSeed));
    p = turn * p * 2.03 + vec2(1.7, 9.2);
    amp *= 0.5;
  }
  return sum;
}

void main() {
  float s = vMetres.x;
  float hr = vMetres.y;
  float body = ${Er.toFixed(2)} * uStretch;
  float hn = hr / body;

  // Cheaply first: nothing to draw well outside the widest it can be.
  if (abs(s) > uWide * 0.95 || hn < -0.35 || hn > 1.7) discard;

  float t = uTime * 0.16 * uSlow;
  vec2 p = vec2(s * 1.5, hr * 0.85 - t * 1.6) + uSeed * 3.1;
  vec2 q = vec2(flow(p + vec2(0.0, -t)), flow(p + vec2(5.2, 1.3) + t * 0.6));
  vec2 r = vec2(flow(p + 2.6 * q + vec2(1.7, 9.2) - vec2(0.0, t * 1.2)),
                flow(p + 2.6 * q + vec2(8.3, 2.8) + vec2(t * 0.5, 0.0)));
  float f = flow(p + 3.0 * r);

  // Where it is: a tall soft flame of a thing, bent by its own currents,
  // more so the higher it goes.
  float lean = (r.x - 0.5) * (0.2 + 0.8 * clamp(hn, 0.0, 1.4)) * 0.45;
  float x = s - lean;
  float width = uWide * mix(0.5, 0.28, smoothstep(0.1, 1.3, hn))
              * mix(0.55, 1.0, smoothstep(-0.25, 0.3, hn));
  // Its edge is the flow's, not a line: wider where the current swells.
  float across = exp(-x * x / (width * width) * 1.8) * (0.55 + 0.7 * f);
  // Its foot comes apart as it climbs, and its crown was always wisps.
  float foot = smoothstep(uGone * 1.45 - 0.3, uGone * 1.45 + 0.3, hn + (f - 0.5) * 0.45);
  float crown = 1.0 - smoothstep(0.8, 1.55, hn + (f - 0.5) * 0.6);
  float env = across * foot * crown;
  if (env < 0.003) discard;

  float fold = 1.0 - abs(2.0 * flow(p * 1.6 + 3.4 * r + 7.0) - 1.0);
  float silk = pow(fold, 4.0) * 0.6;
  float density = env * (0.18 + 1.25 * f * f);

  float hue = f * 0.6 + r.y * 0.5 + hn * 0.3 - uTime * 0.02 + uSeed * 0.3;
  vec3 colour = pearl(hue);
  // And a heart: a soft warmth low in the body of it, breathing, which
  // is what the eye rests on while everything else moves.
  float heart = exp(-(x * x * 5.0 + pow((hn - 0.34) * 2.2, 2.0)))
              * (0.8 + 0.2 * sin(uTime * 0.9)) * foot;
  // A breath of light round all of it, so it has a body and not only
  // currents: what the eye reads as volume.
  float halo = exp(-x * x / (width * width) * 0.5) * foot * crown * 0.06;
  vec3 light = colour * (density * 0.85 + silk * env * 0.7 + halo)
             + vec3(1.0, 0.94, 0.86) * (pow(density, 2.4) * 0.1 + heart * 0.2);
  gl_FragColor = vec4(light * uPresence * uGain, 1.0);
}
`,kT=`
uniform float uSize;
varying vec2 vUv;
void main() {
  vUv = position.xy;
  vec4 centre = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  centre.xy += position.xy * uSize;
  gl_Position = projectionMatrix * centre;
}
`,GT=`
uniform float uLevel;
uniform float uTime;
varying vec2 vUv;

${Zv}

void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  float glow = 0.05 / (r * r + 0.05) * (1.0 - smoothstep(0.3, 1.0, r));
  vec3 colour = mix(vec3(1.0, 0.96, 0.9), lit(r * 0.8 + uTime * 0.02, 0.35), smoothstep(0.05, 0.7, r));
  gl_FragColor = vec4(colour * glow * uLevel, 1.0);
}
`;function gr(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function Rm(n,t,e,o){const i=new Se({vertexShader:n,fragmentShader:t,uniforms:e,transparent:!0,depthWrite:!1,blending:Tn,side:we});return i.customProgramCacheKey=()=>o,i}function HT(n){const t=new Et,e={value:0},o={value:0},i={value:1},s={value:0},r={value:new P(n.x,n.y-Er/2-Va,n.z)},a={value:new st(5.4,Er*1.8+Va)},l=[{seed:.37,wide:2,gain:.6,slow:1,order:5},{seed:4.61,wide:3,gain:.34,slow:.7,order:4}].map(v=>{const m=Rm(zT,BT,{uTime:e,uPresence:o,uStretch:i,uGone:s,uAnchor:r,uSize:a,uSeed:{value:v.seed},uWide:{value:v.wide},uGain:{value:v.gain},uSlow:{value:v.slow}},"soul-veil"),g=new lt(new le(1,1),m);return g.frustumCulled=!1,g.renderOrder=v.order,t.add(g),g}),c={value:0},u=Rm(kT,GT,{uLevel:c,uTime:e,uSize:{value:3}},"soul-gather"),h=new lt(new le(2,2),u);h.position.set(n.x,n.y+OT-1.15,n.z),h.frustumCulled=!1,h.renderOrder=6,t.add(h);const f=new Wo(16774890,0,9,1.25);f.position.set(n.x,n.y,n.z),t.add(f);let d=n.y-Er/2;const p=()=>{o.value=0,c.value=0,f.intensity=0;for(const v of l)v.visible=!1};return p(),{group:t,attach(v){v.updateMatrixWorld(!0);const m=new Ln().setFromObject(v);m.isEmpty()||(d=m.min.y)},show(v,m){if(v<=0){p();return}const g=Math.min(1,v),b=gr(g/r0),x=gr((g-r0)/(1-r0));e.value=m,o.value=b*(.4+.6*gr(x/.25))*(1-gr((x-.86)/.14)),i.value=1+x*.9,s.value=gr((x-.45)/.55);const w=Math.pow(x,1.25)*FT;r.value.set(n.x,d+w-Va,n.z),a.value.y=Er*i.value*1.75+Va;for(const E of l)E.visible=o.value>.002;c.value=gr((x-.5)/.5)*1.1,f.position.set(n.x,d+w+Er*.5,n.z),f.intensity=5.5*b*(1-.7*x)},hide:p,dispose(){for(const v of l)v.material.dispose(),v.geometry.dispose();u.dispose(),h.geometry.dispose(),f.dispose()}}}const os=(n,t,e)=>n<t?t:n>e?e:n,ko=(n,t,e,o)=>t+(n-t)*Math.exp(-e*o),{lantern:Ru,levels:VT}=Ot,qe=(Ru.surround.minX+Ru.surround.maxX)/2,Ye=(Ru.surround.minZ+Ru.surround.maxZ)/2,Fn=1.2,en=.9,Al=2,Pm="./models/statue.stl",WT=Math.PI/2;function Cm(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}const XT=.055,$T=3*9.81/(2*Al),Im=.9,qT=Math.PI/5,YT=.78,ZT=1,pc=4.5,KT=1/30,Lm=.16,Dm=1.25,jT=.16,mc=1.5,JT=1.5,Nm=1.6,QT=5;function tE(n,t,e,o,i,s,r){const a=new wt({color:15394265,roughness:.42,metalness:0,envMapIntensity:1.1});return a.onBeforeCompile=l=>{l.uniforms.uRadiance=n,l.uniforms.uSoulGlow=t,l.uniforms.uSoulTime=e,l.uniforms.uSeams=o,l.uniforms.uSeamShow=i,l.uniforms.uSeamGlow=s,l.uniforms.uDead=r,l.uniforms.uSoulCentre={value:new P(qe,en+1.15,Ye)},l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uRadiance;
        uniform float uSoulGlow;
        uniform float uSoulTime;
        uniform vec3 uSoulCentre;
        uniform float uSeams[6];
        uniform float uSeamShow;
        uniform float uSeamGlow;
        uniform float uDead;
        varying vec3 vViewPosition_sss;
        varying vec3 vSoulWorldPosition;
        float kintsugiHash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float kintsugiNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(kintsugiHash(i), kintsugiHash(i + vec2(1.0, 0.0)), f.x),
                     mix(kintsugiHash(i + vec2(0.0, 1.0)), kintsugiHash(i + vec2(1.0, 1.0)), f.x), f.y);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        /**
         * The seams, and what she is once she is only stone.
         *
         * A break is not a level line. Each cut height is torn by noise
         * round the figure, at two scales, so the gold wanders the way a
         * real fracture does — and it is thin, a few millimetres, the
         * width of the lacquer a restorer would lay in it.
         */
        float kSeam = 0.0;
        {
          vec2 round_ = vSoulWorldPosition.xz;
          float tear = (kintsugiNoise(round_ * 11.0) - 0.5) * 0.05
                     + (kintsugiNoise(round_ * 37.0 + 3.1) - 0.5) * 0.014;
          for (int i = 0; i < 6; i++) {
            float d = abs(vSoulWorldPosition.y - uSeams[i] + tear);
            kSeam = max(kSeam, 1.0 - smoothstep(0.0025, 0.0095, d));
          }
          kSeam *= uSeamShow;
        }
        /**
         * And the stone, left behind — from the feet up.
         *
         * The light does not go out of her all at once; it is drawn up
         * and out through the crown, so what goes grey is everything
         * below a front that climbs the figure, torn a little so it is
         * not a level line, with the last of the light burning along it.
         * Everything above the front is still lit marble until it passes.
         */
        float kUp = clamp((vSoulWorldPosition.y - ${en.toFixed(3)}) / ${Al.toFixed(3)}, 0.0, 1.0);
        float kFront = uDead * 1.3 - 0.15
          + (kintsugiNoise(vSoulWorldPosition.xz * 9.0 + kUp * 5.0) - 0.5) * 0.07;
        float kAlive = step(0.0001, uDead);
        float kDead = smoothstep(0.0, 0.1, kFront - kUp) * kAlive;
        float kEdge = exp(-pow((kFront - kUp) / 0.035, 2.0)) * kAlive
          * (1.0 - smoothstep(0.9, 1.0, uDead));
        {
          float grey = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(grey) * vec3(0.60, 0.61, 0.64), kDead);
        }
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.64, 0.27), kSeam);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.9, kDead);
        roughnessFactor = mix(roughnessFactor, 0.26, kSeam);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 1.0, kSeam);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // Thin at the edges, thick face on: light gets through where the
          // silhouette turns away, which is where marble glows.
          //
          // Pushed well past what stone does, because she is not meant to
          // read as stone. A softer exponent spreads the light off the
          // rim and across the form, and the constant underneath lifts
          // the whole figure so she is lit from within rather than
          // outlined. Nearly white, barely warm: against Pompeian red
          // walls a cool glow turns lilac, and once the room goes to
          // emergency she has to stay the one clean thing in it.
          //
          // The constant term is small on purpose. Lifting the whole
          // surface uniformly flattens her — every fold of drapery gets
          // the same light, the modelling goes, and what is left is a
          // white shape with a bright edge: a silhouette of radiance
          // rather than something radiant. The rim carries the glow; the
          // form has to come from light actually falling on her.
          float facing = abs(dot(normalize(-vViewPosition), normalize(normal)));
          float thin = pow(1.0 - facing, 1.8);
          //
          // The multiplier looks timid and is not. Close up almost every
          // part of her is seen at a grazing angle, so the rim term is at
          // its maximum across the whole figure at once — at 1.35 she
          // clipped to white and took half the screen with her. Most of
          // what reads as radiance at a distance comes from the bloom and
          // the aura anyway; this only has to give them something to work
          // with.
          totalEmissiveRadiance += vec3(1.0, 0.98, 0.94) * (thin * 0.62 + 0.03) * uRadiance * (1.0 - kDead);
          // The last of it, along the front as it climbs.
          totalEmissiveRadiance += vec3(1.0, 0.9, 0.74) * kEdge * 1.6;
          // And the gold, hot while she closes and cooling after.
          totalEmissiveRadiance += vec3(1.0, 0.6, 0.2) * kSeam * uSeamGlow * 3.0;

          // Before the light leaves, it is visible under the marble itself.
          // Broad overlapping currents have no threshold and therefore no
          // vein, spot or other drawable border: only colour moving through
          // stone and strengthening toward the figure's centre.
          vec3 soulDelta = vSoulWorldPosition - uSoulCentre;
          float soulEnvelope = exp(-(
            soulDelta.x * soulDelta.x * 2.4
            + soulDelta.y * soulDelta.y * 0.72
            + soulDelta.z * soulDelta.z * 2.4
          ));
          float soulFlowA = 0.5 + 0.5 * sin(
            soulDelta.y * 4.1 + soulDelta.x * 3.2 + uSoulTime * 0.67
          );
          float soulFlowB = 0.5 + 0.5 * sin(
            soulDelta.y * 2.3 - soulDelta.z * 4.4 - uSoulTime * 0.43 + soulFlowA
          );
          float soulFlow = 0.24 + soulFlowA * 0.38 + soulFlowB * 0.38;
          vec3 soulViolet = vec3(0.48, 0.30, 1.04);
          vec3 soulGold = vec3(1.12, 0.72, 0.26);
          vec3 soulColour = mix(soulViolet, soulGold, soulFlowB);
          soulColour = mix(soulColour, vec3(1.08, 1.04, 0.97), soulEnvelope * 0.58);
          totalEmissiveRadiance += soulColour * soulEnvelope * soulFlow * uSoulGlow * 0.54 * (1.0 - kDead);
        }`),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
      varying vec3 vViewPosition_sss;
      varying vec3 vSoulWorldPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vSoulWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`).replace("#include <fog_vertex>",`#include <fog_vertex>
      vViewPosition_sss = vec3(0.0);`)},a.customProgramCacheKey=()=>"marble-sss-soul-seep-kintsugi-drain",a}function eE(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(!e)throw new Error("2D canvas context unavailable for the aura");const o=256/2,i=e.createRadialGradient(o,o,0,o,o,o);i.addColorStop(0,"rgba(255, 248, 234, 0.42)"),i.addColorStop(.14,"rgba(255, 243, 222, 0.22)"),i.addColorStop(.34,"rgba(255, 236, 206, 0.10)"),i.addColorStop(.62,"rgba(255, 230, 196, 0.025)"),i.addColorStop(1,"rgba(255, 228, 192, 0)"),e.globalCompositeOperation="lighter",e.fillStyle=i,e.fillRect(0,0,256,256);const s=new ce(t);return s.colorSpace=te,s}function nE(n){const t=new Et,e=(o,i,s,r)=>{const a=new lt(new ee(o,i,s),n);a.position.set(qe,r,Ye),a.castShadow=!0,a.receiveShadow=!0,t.add(a)};return e(Fn+.16,.1,Fn+.16,.05),e(Fn+.06,.07,Fn+.06,.135),e(Fn,en-.33,Fn,.17+(en-.33)/2),e(Fn+.08,.08,Fn+.08,en-.12),e(Fn+.17,.08,Fn+.17,en-.04),t}function oE(n){n.updateMatrixWorld(!0);const t=new Ln().setFromObject(n).getSize(new P);if(t.y<1e-6)return;n.scale.setScalar(Al/t.y),n.updateMatrixWorld(!0);const e=new Ln().setFromObject(n),o=e.getCenter(new P);n.position.x+=qe-o.x,n.position.z+=Ye-o.z,n.position.y+=en-e.min.y,n.updateMatrixWorld(!0)}function iE(){if(typeof window>"u")return!1;const n=new URLSearchParams(window.location.search);return n.has("lite")||n.has("fast")}function sE(){const n=new Et,t=new wt({color:14275267,roughness:.68}),e={value:1},o={value:0},i={value:0},s={value:[-9,-9,-9,-9,-9,-9]},r={value:0},a={value:0},l={value:0};let c=1;const u=tE(e,o,i,s,r,a,l),h=new Wo(16774372,0,5.5,1);h.position.set(qe,en+1.15,Ye),n.add(h);const f=eE(),d=new Fd({map:f,blending:Tn,depthWrite:!1,transparent:!0}),p=new Cv(d);p.position.set(qe,en+1,Ye),p.scale.set(4.2,4.6,1),n.add(p);const v=HT({x:qe,y:en+1.15,z:Ye});n.add(v.group),n.add(nE(t));const m={top:en+Al,minX:qe,maxX:qe,minZ:Ye,maxZ:Ye},g=new wt({color:16052712,roughness:.92,metalness:0}),b=UT();n.add(b.group);const x=new Et;x.matrixAutoUpdate=!1;let w=null,E=null,S=0,_=0,y=en,A=0,M=0,T=!1,R=!1,L=!1,U=0,z=-1,O=null,B=0;const N=[],H=new P(0,0,1),G=new P(qe,en,Ye),$=new P,Q=new He,j=new It,X=new It,at=new It,rt=()=>(Q.setFromAxisAngle(H,S),X.makeTranslation(G.x+$.x*M,y,G.z+$.z*M),at.makeTranslation(-G.x,-G.y,-G.z),j.makeRotationFromQuaternion(Q).premultiply(X).multiply(at));new $d().load(Pm,et=>{et.rotateX(-Math.PI/2),et.computeVertexNormals();const q=new lt(et,u);q.rotation.y=WT,q.castShadow=!0,q.receiveShadow=!0,oE(q),x.add(q),n.add(x),w=q,E=iE()?null:CT(q,u,g,{minX:qe-(Fn+.17)/2,maxX:qe+(Fn+.17)/2,minZ:Ye-(Fn+.17)/2,maxZ:Ye+(Fn+.17)/2,top:en}),E&&n.add(E.group);const ct=new Ln().setFromObject(q),vt=ct.max.y-ct.min.y;s.value=Yv.map(nt=>ct.min.y+nt*vt),v.attach(q);const V=new Ln().setFromObject(q),I=.82,D=(V.max.x-V.min.x)/2*I,tt=(V.max.z-V.min.z)/2*I;m.minX=qe-D,m.maxX=qe+D,m.minZ=Ye-tt,m.maxZ=Ye+tt,m.top=V.max.y},void 0,()=>{console.warn(`gallery: no statue at ${Pm}; the plinth stands empty`)});const ft=Fn/2+.12;return{group:n,obstacles:[{top:en,minX:qe-ft,maxX:qe+ft,minZ:Ye-ft,maxZ:Ye+ft},m],update(et,q){if(R)return;E==null||E.update(et,q),b.update(et),L&&(c=ko(c,.07,2.6,et)),h.intensity=c*mc;const ct=Math.hypot(q.x-qe,q.z-Ye),vt=Math.min(1,Math.max(0,(ct-Nm)/(QT-Nm)));if(d.opacity=c*vt,e.value=c*(.22+.78*vt),p.material.rotation=B,B+=et*.035,p.visible=d.opacity>.02,T||!w)return;if(_===0){const I=q.feet>=en-.05;$.set(qe-q.x,0,Ye-q.z);const D=$.length(),tt=I&&q.speed>=ZT&&D<=YT&&D>1e-4;tt&&($.divideScalar(D),H.set(0,1,0).cross($).normalize()),U=tt?Math.min(pc,U+et):Math.max(0,U-et*.33);const nt=Math.min(1,U/pc);if(U>0){const Z=.34*Math.sqrt(nt)+.66*nt*nt;S=jT*Z+(tt?Math.sin(U*26)*.006*nt:0)+(tt?Math.sin(U*61)*.0025*nt*nt:0),x.matrix.copy(rt())}else S>0&&(S=Math.max(0,S-et*.9),x.matrix.copy(rt()));if(!tt||U<pc||O!=null&&O())return;_=Im}const V=Math.min(et,KT);if(z<0&&S>=Lm&&(z=0),z>=0&&z<Dm){z+=V;const I=z/Dm;S=Lm+Math.sin(z*31)*.019*I+Math.sin(z*7.3)*.026*I*I,x.matrix.copy(rt());return}if(_+=$T*Math.sin(S)*V,S+=_*V,S>qT&&(A-=9.81*V,y+=A*V,M+=JT*V),x.matrix.copy(rt()),y<=0){T=!0,y=0,x.matrix.copy(rt()),x.visible=!1;const I=new P(G.x+$.x*M,0,G.z+$.z*M);E==null||E.burst(x.matrix,I),b.burst(I),L=!0;for(const D of N)D();m.top=0}},waitForVoice(et){O=et},leaning(){return T||_!==0?0:Math.min(1,U/pc)},push(){T||_!==0||($.set(0,0,1),H.set(0,1,0).cross($).normalize(),_=Im)},onShatter(et){N.push(et)},onTeeter(et){},reassemble(et){R=!0,E&&(E.reassemble(et),E.group.visible=et<.94,E.group.traverse(ct=>{ct.isMesh&&(ct.castShadow=!1)}));const q=Math.min(1,Math.max(0,(et-.25)/.5))*2.4;E&&E.group.traverse(ct=>{const vt=ct;if(!vt.isMesh)return;const V=Array.isArray(vt.material)?vt.material:[vt.material];for(const I of V){if(I===u)continue;const D=I;D.emissive.setRGB(1,.58,.18),D.emissiveIntensity=q}}),r.value=et>.94?1:0,w&&(w.visible=et>.94),x.visible=et>.94,x.matrix.identity(),c=et,e.value=c*.34,d.opacity=c*.11,p.visible=d.opacity>.02,h.position.set(qe,en+2.35,Ye+2),h.intensity=c*mc*1.15},soul(et,q){const ct=Math.min(1,Math.max(0,et)),vt=Cm(ct/.32),V=Cm((ct-.36)/.3);o.value=vt*(1-V),i.value=q,d.opacity*=1-V,p.visible=d.opacity>.02,v.show(et,q)},kintsugi(et){a.value=et},mortal(et){l.value=Math.min(1,Math.max(0,et)),h.intensity=c*mc*1.15*(1-.85*l.value)},restore(){v.hide(),r.value=0,a.value=0,l.value=0,E&&(E.group.visible=!1),w&&(w.visible=!0),x.visible=!0,x.matrix.identity(),h.position.set(qe,en+1.15,Ye),h.intensity=mc,S=0,_=0,A=0,M=0,T=!1,L=!1,e.value=1,o.value=0,i.value=0,c=1,R=!0},shattered(){return T&&((E==null?void 0:E.settled())??!0)},dispose(){g.dispose(),b.dispose(),h.dispose(),v.dispose(),d.dispose(),f.dispose(),E==null||E.dispose(),t.dispose(),u.dispose(),n.traverse(et=>{et instanceof lt&&et.geometry.dispose()})}}}const On={x:qe,z:Ye,top:en+Al,ceiling:VT.ceiling},{length:rE,depth:aE}=Ot,su={length:2.3,width:.62,height:.46},No={bottom:.37,seam:.44,swell:su.height-.44,corner:.06},lE=.6,wi={height:.95,base:.095,hookOut:.05,hookY:.856},cE=.018;function Um(n,t,e){const o=new lt(new ee(...t),n);return o.position.set(...e),o.castShadow=!0,o.receiveShadow=!0,o}function ke(n,t,e){n.add(new lt(e,t))}function aa(n,t){return new an(n.map(([e,o])=>new st(e,o)),t)}function vr(n,t,e){const o=new ln;return o.moveTo(-n+e,-t),o.lineTo(n-e,-t),o.absarc(n-e,-t+e,e,-Math.PI/2,0,!1),o.lineTo(n,t-e),o.absarc(n-e,t-e,e,0,Math.PI/2,!1),o.lineTo(-n+e,t),o.absarc(-n+e,t-e,e,Math.PI/2,Math.PI,!1),o.lineTo(-n,-t+e),o.absarc(-n+e,-t+e,e,Math.PI,Math.PI*1.5,!1),o}function uE(n,t,e,o,i){const s=Math.abs(n)-(e-i),r=Math.abs(t)-(o-i);return i-Math.hypot(Math.max(s,0),Math.max(r,0))-Math.min(Math.max(s,r),0)}function hE(n,t,e,o){const i=o.x-e.x,s=o.y-e.y,r=Eo.clamp(((n-e.x)*i+(t-e.y)*s)/(i*i+s*s),0,1);return Math.hypot(n-(e.x+i*r),t-(e.y+s*r))}class fE extends Ao{constructor(t,e){super(),this.path=t,this.y=e}getPoint(t,e=new P){const o=this.path.getPointAt(t);return e.set(o.x,this.y,-o.y)}}function dE(n,t,e,o,i){const s=(l,c)=>{const h=1-(1-Math.min(Math.max(uE(l,c,n,t,e),0)/.07,1))**2;let f=0;for(const p of o)f=Math.max(f,Math.exp(-((l-p.x)**2+(c-p.y)**2)/.0022));let d=0;for(const[p,v]of i)d=Math.max(d,Math.exp(-((hE(l,c,p,v)/.017)**2)));return No.swell*h*(1-.82*f)*(1-.35*d)},r=new le(n*2,t*2,140,38).rotateX(-Math.PI/2),a=r.getAttribute("position");for(let l=0;l<a.count;l+=1){let c=a.getX(l),u=a.getZ(l);const h=Math.abs(c)-(n-e),f=Math.abs(u)-(t-e),d=Math.hypot(h,f);h>0&&f>0&&d>e&&(c=Math.sign(c)*(n-e+h*e/d),u=Math.sign(u)*(t-e+f*e/d)),a.setXYZ(l,c,s(c,u),u)}return r.computeVertexNormals(),{geometry:r,heightAt:s}}function Fm(n,t,e,o,i,s){const r=su.length/2,a=su.width/2,l=No.corner,c=vr(r,a,l),u=new It().makeTranslation(i,0,s),h=.24,f=.14,d=[],p=[];for(let R=-3;R<=3;R+=1)for(const L of[-1,1]){const U=new st(R*h,L*f);d.push(U),p.push([U,new st(R*h,L*a)])}for(let R=-4;R<=3;R+=1){const L=new st((R+.5)*h,0);d.push(L);for(const U of[0,1])if(!(Math.abs(R+U)>3))for(const z of[-1,1])p.push([L,new st((R+U)*h,z*f)])}const v=3.5*h;p.push([new st(-v,0),new st(-r,0)]),p.push([new st(v,0),new st(r,0)]);const m=dE(r,a,l,d,p);ke(n,t,m.geometry.translate(0,No.seam,0).applyMatrix4(u));for(const R of d)ke(n,t,new Xe(.012,8,4).scale(1,.45,1).translate(R.x,No.seam+m.heightAt(R.x,R.y)+.002,R.y).applyMatrix4(u));ke(n,t,new bn(c,{depth:No.seam-No.bottom,bevelEnabled:!1,curveSegments:6}).rotateX(-Math.PI/2).translate(0,No.bottom,0).applyMatrix4(u));const g=vr(r+.002,a+.002,l+.002);for(const R of[No.seam,No.bottom])ke(n,t,new $n(new fE(g,R),180,.0065,4,!0).applyMatrix4(u));const b=c.getSpacedPoints(Math.round(4*(r+a)/.07));for(const R of b.slice(1))ke(n,o,new Xe(.0062,6,4).translate(R.x,No.bottom+.017,-R.y).applyMatrix4(u));const x=No.bottom,w=vr(r-.02,a-.02,.02);w.holes.push(vr(r-.05,a-.05,.005)),ke(n,e,new bn(w,{depth:.058,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:4}).rotateX(-Math.PI/2).translate(0,x-.064,0).applyMatrix4(u));const E=vr(r-.014,a-.014,.024);E.holes.push(vr(r-.05,a-.05,.005)),ke(n,e,new bn(E,{depth:.004,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2,curveSegments:4}).rotateX(-Math.PI/2).translate(0,x-.078,0).applyMatrix4(u));const S=x-.06,_=aa([[.02,.03],[.021,.06],[.025,.16],[.028,.22],[.031,.244],[.036,.25],[.036,.26],[.029,.267],[.032,.282],[.032,S]],12),y=aa([[0,0],[.022,0],[.0235,.004],[.0225,.028],[.0255,.031],[.024,.035],[.02,.036]],12),A=r-.055,M=a-.055;for(const R of[-1,1])for(const L of[-1,1])ke(n,e,_.clone().translate(i+R*A,0,s+L*M)),ke(n,o,y.clone().translate(i+R*A,0,s+L*M));_.dispose(),y.dispose();const T=.095;for(const R of[-1,1])ke(n,e,new ie(.011,.011,M*2,8).rotateX(Math.PI/2).translate(i+R*A,T,s));return ke(n,e,new ie(.012,.012,A*2,8).rotateZ(Math.PI/2).translate(i,T,s)),{top:su.height,minX:i-r,maxX:i+r,minZ:s-a,maxZ:s+a}}function pE(n,t,e,o){ke(n,t,aa([[0,0],[.092,0],[wi.base,.004],[wi.base,.009],[.091,.013],[.082,.018],[.065,.03],[.045,.045],[.032,.058],[.028,.066],[.03,.07],[.03,.076],[.024,.08]],24).translate(e,0,o)),ke(n,t,aa([[.024,.08],[.028,.088],[.028,.094],[.021,.1],[.0195,.11],[.0185,.8],[.022,.818],[.028,.828],[.028,.838],[.024,.845],[.03,.856],[.034,.878],[.037,.888],[.037,.895],[.02,.9],[.012,.905],[.011,.91]],16).translate(e,0,o)),ke(n,t,new Xe(.026,14,10).translate(e,wi.height-.025,o))}function mE(n,t,e,o,i){const s=i.clone().sub(o).setY(0).normalize(),r=o.clone().addScaledVector(s,wi.hookOut).setY(wi.hookY),a=i.clone().addScaledVector(s,-.05).setY(wi.hookY),l=14,c=.13,u=[];for(let v=0;v<=l;v+=1){const m=v/l,g=r.clone().lerp(a,m);g.y-=c*4*m*(1-m),u.push(g)}const h=new zn(u);ke(n,t,new $n(h,30,cE,8,!1));const f=aa([[0,0],[.006,0],[.009,.005],[.012,.012],[.018,.034],[.021,.046],[.0235,.05],[.021,.056],[0,.056]],12),d=new P(0,1,0),p=Math.atan2(-s.z,s.x);for(const[v,m,g]of[[0,o,1],[1,i,-1]]){const b=v===0?r:a,x=h.getTangentAt(v).multiplyScalar(v===0?1:-1);ke(n,e,f.clone().applyQuaternion(new He().setFromUnitVectors(d,x)).translate(b.x,b.y,b.z));const w=m.clone().addScaledVector(s,g*.045);ke(n,e,new dn(.01,.0028,6,12).rotateX(Math.PI/2).translate(w.x,.878,w.z));const E=m.clone().addScaledVector(s,g*wi.hookOut);ke(n,e,new dn(.0115,.0022,6,14).rotateY(p).translate(E.x,.867,E.z))}f.dispose()}function gE(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");if(!e)throw new Error("furniture: no 2D canvas for the gauge");const o=512/2,i="Georgia, 'Times New Roman', serif",s=d=>Eo.degToRad(-135+d*2.7),r=(d,p)=>[o+Math.sin(d)*p,o-Math.cos(d)*p];e.fillStyle="#efe7d3",e.fillRect(0,0,512,512);const a=(d,p,v)=>{e.strokeStyle=v,e.lineWidth=22,e.beginPath(),e.arc(o,o,o*.66,s(d)-Math.PI/2,s(p)-Math.PI/2),e.stroke()};a(0,40,"#d9b56a"),a(40,60,"#6f9a62"),a(60,100,"#7f9fb8"),e.strokeStyle="#1d1a16",e.fillStyle="#1d1a16";for(let d=0;d<=100;d+=2){const p=s(d),v=d%10===0,[m,g]=r(p,o*(v?.74:.79)),[b,x]=r(p,o*.88);e.lineWidth=v?4:2,e.beginPath(),e.moveTo(m,g),e.lineTo(b,x),e.stroke()}e.lineWidth=3,e.beginPath(),e.arc(o,o,o*.88,s(0)-Math.PI/2,s(100)-Math.PI/2),e.stroke(),e.textAlign="center",e.textBaseline="middle",e.font=`bold 34px ${i}`;for(let d=0;d<=100;d+=10){const[p,v]=r(s(d),o*.52);e.fillText(String(d),p,v)}e.font=`italic 30px ${i}`;const[l,c]=r(s(18),o*.3);e.fillText("dry",l,c);const[u,h]=r(s(82),o*.3);e.fillText("damp",u,h),e.font=`bold 26px ${i}`,e.fillText("HYGROMETER",o,o*1.42),e.font=`28px ${i}`,e.fillText("% R.H.",o,o*1.6),e.lineWidth=6,e.strokeStyle="#8a7a5c",e.beginPath(),e.arc(o,o,o-3,0,Math.PI*2),e.stroke();const f=new ce(t);return f.colorSpace=te,f.anisotropy=8,f}function a0(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(o=>{if(!(o instanceof lt))return;const i=o.material,s=o.geometry.clone().applyMatrix4(o.matrixWorld),r=t.get(i)??[];r.push(s.index?s.toNonIndexed():s),t.set(i,r),o.geometry.dispose()});const e=new Et;for(const[o,i]of t){const s=Le(i,!1);for(const a of i)a.dispose();if(!s){console.error("gallery: could not merge furniture — check attribute sets");continue}const r=new lt(s,o);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e}function vE(n){const t=new Et,e=[],o=new wt({color:4861730,roughness:.46}),i=new wt({color:2891028,roughness:.42}),s=new wt({color:12160830,roughness:.32,metalness:.92,envMapIntensity:1.6}),r=new wt({color:7017504,roughness:.95}),a=gE(),l=new wt({map:a,roughness:.5});e.push(Fm(t,o,i,s,n.x-3.6,n.z)),e.push(Fm(t,o,i,s,n.x+3.6,n.z));const c=lE+.62,u=[],h=new Et,f=[];[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([T,R],L)=>{const U=n.x+T*c,z=n.z+R*c,O=new Et;pE(O,s,0,0);const B=a0(O);B.position.set(U,0,z),h.add(B),u.push(new P(U,0,z));const N={top:wi.height,minX:U-.1,maxX:U+.1,minZ:z-.1,maxZ:z+.1};e.push(N),f.push({mesh:B,out:new P(T,0,R).normalize(),block:N,delay:L*.13})});const p=new Et;for(let T=0;T<u.length;T+=1)mE(p,r,s,u[T],u[(T+1)%u.length]);const v=a0(p);h.add(v);const m=.16;for(const T of[.13,aE-.13])for(let R=2.5;R<rE-2;R+=3.4){const L=Um(s,[.44,m,.03],[R,.42,T]);t.add(L);for(let U=0;U<5;U+=1)t.add(Um(i,[.4,.012,.008],[R,.36+U*.028,T+(T<1?.02:-.02)]))}const g=new P(1.15,1.5,.012),b=new It().makeRotationX(Math.PI/2).setPosition(g);ke(t,s,aa([[0,0],[.073,0],[.075,.003],[.075,.024],[.078,.026],[.078,.031],[.072,.0345],[.066,.032],[.064,.027],[0,.027]],32).applyMatrix4(b)),ke(t,l,new bl(.0642,40).translate(g.x,g.y,g.z+.028));const x=new ln;x.moveTo(-.0028,-.013),x.lineTo(.0028,-.013),x.lineTo(.0016,0),x.lineTo(4e-4,.052),x.lineTo(-4e-4,.052),x.lineTo(-.0016,0),x.closePath(),ke(t,i,new bn(x,{depth:8e-4,bevelEnabled:!1}).rotateZ(-Eo.degToRad(.02*270)).translate(g.x,g.y,g.z+.0295)),ke(t,s,new ie(.0045,.005,.004,12).rotateX(Math.PI/2).translate(g.x,g.y,g.z+.031));const w=a0(t);w.add(h);let E=-1;const S=new P,_=new P(0,1,0),y=1.48,A=.5,M=()=>{for(const T of f){const R=Math.max(0,E-T.delay),L=Math.min(1,R/A),U=L>=1?Math.exp(-(R-A)*9)*Math.sin((R-A)*26)*.05:0,z=E<0?0:y*L*L-Math.abs(U);S.copy(_).cross(T.out).normalize(),T.mesh.quaternion.setFromAxisAngle(S,z)}};return{group:w,obstacles:e,knockDown(){if(!(E>=0)){E=0,v.visible=!1;for(const T of f)T.block.top=0}},standUp(){E=-1,v.visible=!0;for(const T of f)T.block.top=wi.height;M()},update(T){E<0||E>2||(E+=T,M())},dispose(){for(const T of[o,i,s,r,l])T.dispose();a.dispose(),w.traverse(T=>{T instanceof lt&&T.geometry.dispose()})}}}const Om=Ot.floor.module,xE=`
varying vec3 vSeepWorld;`,ME=`
uniform float uReach;
uniform float uTime;
uniform vec2 uOrigin;
varying vec3 vSeepWorld;
float seepHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float seepNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(seepHash(i), seepHash(i + vec2(1.0, 0.0)), f.x),
             mix(seepHash(i + vec2(0.0, 1.0)), seepHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float seepFlow(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i += 1) {
    sum += amp * seepNoise(p);
    p = mat2(0.8, 0.6, -0.6, 0.8) * p * 2.1 + vec2(3.1, 1.7);
    amp *= 0.5;
  }
  return sum;
}`,yE=`
  vec2 fromBreak = vSeepWorld.xz - uOrigin;
  float r = length(fromBreak);
  float ang = atan(fromBreak.y, fromBreak.x);
  vec2 warp = vec2(seepFlow(vSeepWorld.xz * 0.35 + uTime * 0.05), seepFlow(vSeepWorld.xz * 0.35 - 7.3 - uTime * 0.04));
  float lobes = seepFlow(vec2(ang * 2.2, uReach * 0.15) + warp * 1.4);
  float front = uReach * (0.7 + 0.55 * lobes);
  float body = 1.0 - smoothstep(front - 0.18, front + 0.02, r);
  vec2 cell = abs(fract(vSeepWorld.xz / ${Om.toFixed(2)}) - 0.5);
  float seamDist = (0.5 - max(cell.x, cell.y)) * ${Om.toFixed(2)};
  float seam = 1.0 - smoothstep(0.006, 0.03, seamDist);
  float runs = seam * (1.0 - smoothstep(front, front + 1.5 * (0.5 + warp.x), r)) * step(0.05, uReach);
  float ink = max(body, runs);
  float edge = exp(-pow((r - front) / 0.12, 2.0)) * step(0.05, uReach);
`;function wE(n){const t=new Et,e={uReach:{value:0},uTime:{value:0},uOrigin:{value:new st(n.x,n.z)}},o=new wt({color:262661,roughness:.06,metalness:0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>${xE}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vSeepWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>${ME}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${yE}
        if (ink < 0.01) discard;
        diffuseColor.a = ink;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          /**
           * An oil-slick across it, because black on a black floor is
           * nothing at all.
           *
           * Under the emergency grade the gallery floor is already
           * black, and a black glaze spreading over it could only be
           * found by its reflections. So the ink carries a sheen of its
           * own, the way a film of oil does: slow swirls of crimson,
           * magenta and violet drifting through it, faint — the darkness
           * is still dark — and a brighter line of the same colours
           * along its front, which is what the eye follows across the
           * floor. Reds, because the grade drains everything else.
           */
          float film = seepFlow(vSeepWorld.xz * 0.9 + warp * 2.4 + vec2(uTime * 0.04, -uTime * 0.03));
          float bands = 0.5 + 0.5 * sin(film * 18.0 + uTime * 0.35);
          vec3 oil = mix(vec3(0.7, 0.04, 0.12), vec3(0.55, 0.06, 0.7), smoothstep(0.35, 0.65, film));
          oil = mix(oil, vec3(0.95, 0.25, 0.1), pow(bands, 6.0) * 0.5);
          totalEmissiveRadiance += oil * ink * (0.05 + 0.1 * pow(bands, 3.0));
          vec3 sheen = mix(vec3(0.75, 0.1, 0.5), vec3(1.0, 0.22, 0.08), warp.y);
          totalEmissiveRadiance += sheen * edge * (0.9 + 0.5 * sin(uTime * 1.3 + ang * 5.0));
        }`)},o.customProgramCacheKey=()=>"seep";const{length:i,depth:s}=Ot,r=new lt(new le(i,s),o);return r.rotation.x=-Math.PI/2,r.position.set(i/2,.004,s/2),r.renderOrder=1,t.add(r),{group:t,set(a,l){e.uReach.value=a,e.uTime.value=l},dispose(){o.dispose(),r.geometry.dispose()}}}const{length:Qn,depth:Mo,lantern:Pu,levels:Kv}=Ot,ne=Kv.ceiling+3.05,Ui=1.05,Oo=(Pu.surround.minX+Pu.surround.maxX)/2,Ki=(Pu.surround.minZ+Pu.surround.maxZ)/2,xr=1.8,zm=(()=>{const n=[],e=xr*2/26;n.push({minX:0,maxX:Oo-xr,minZ:0,maxZ:Mo}),n.push({minX:Oo+xr,maxX:Qn,minZ:0,maxZ:Mo});for(let o=0;o<26;o+=1){const i=Oo-xr+o*e,s=i+e,r=Math.min(Math.abs(i-Oo),Math.abs(s-Oo)),a=Math.sqrt(Math.max(0,xr*xr-r*r));n.push({minX:i,maxX:s,minZ:0,maxZ:Ki-a}),n.push({minX:i,maxX:s,minZ:Ki+a,maxZ:Mo})}return n})(),l0=2.35;function gc(n,t,e,o,i,s,r){const a=new lt(new ee(t-n,s-i,o-e),r);return a.position.set((n+t)/2,(i+s)/2,(e+o)/2),a.castShadow=!0,a.receiveShadow=!0,a}function _E(){const n=new Et,t=[],e=new wt({color:5461596,roughness:.62,metalness:.35}),o=new wt({color:10262154,roughness:.9}),i=new wt({color:7034167,roughness:.85}),s=new wt({color:2762532,roughness:.5,metalness:.8}),r=(S,_,y,A)=>{for(const M of zm){const T=Math.max(S,M.minX),R=Math.min(_,M.maxX);R-T<1e-4||n.add(gc(T,R,M.minZ,M.maxZ,y,A,e))}},l=Math.round(Qn/2.5);for(let S=0;S<l;S+=1){const _=S*Qn/l,y=(S+1)*Qn/l;r(_+.02,y-.02,ne-.25,ne),S>0&&r(_-.05,_+.05,ne,ne+.07)}t.push({minX:0,maxX:Qn,minZ:0,maxZ:Mo,top:ne,bottom:ne-.3});const c=.85;for(const[S,_]of[[c/2,c/2],[Qn-c/2,c/2],[c/2,Mo-c/2],[Qn-c/2,Mo-c/2]])n.add(gc(S-c/2,S+c/2,_-c/2,_+c/2,ne,ne+Ui+.25,o)),t.push({minX:S-c/2,maxX:S+c/2,minZ:_-c/2,maxZ:_+c/2,top:ne+Ui+.25,bottom:ne});const u=[[0,0],[.075,0],[.075,.06],[.055,.1],[.042,.2],[.058,.34],[.05,.5],[.032,.66],[.038,.8],[.062,.92],[.062,1],[0,1]],h=new an(u.map(([S,_])=>new st(S,_*(Ui-.22))),10),f=[{from:[c,.28],to:[Qn-c,.28]},{from:[c,Mo-.28],to:[Qn-c,Mo-.28]},{from:[.28,c],to:[.28,Mo-c]},{from:[Qn-.28,c],to:[Qn-.28,Mo-c]}],d=[],p=new It;for(const S of f){const _=Math.hypot(S.to[0]-S.from[0],S.to[1]-S.from[1]),y=Math.max(2,Math.round(_/.42));for(let L=0;L<=y;L+=1){const U=L/y;d.push(p.clone().makeTranslation(S.from[0]+(S.to[0]-S.from[0])*U,ne,S.from[1]+(S.to[1]-S.from[1])*U))}const[A,M]=S.from,[T,R]=S.to;n.add(gc(Math.min(A,T)-.13,Math.max(A,T)+.13,Math.min(M,R)-.13,Math.max(M,R)+.13,ne,ne+.14,o)),n.add(gc(Math.min(A,T)-.16,Math.max(A,T)+.16,Math.min(M,R)-.16,Math.max(M,R)+.16,ne+Ui-.22,ne+Ui,o))}const v=new Go(h,o,d.length);v.castShadow=!0,d.forEach((S,_)=>v.setMatrixAt(_,S.premultiply(new It().makeTranslation(0,.14,0)))),n.add(v);for(const S of f)t.push({minX:Math.min(S.from[0],S.to[0])-.16,maxX:Math.max(S.from[0],S.to[0])+.16,minZ:Math.min(S.from[1],S.to[1])-.16,maxZ:Math.max(S.from[1],S.to[1])+.16,top:ne+Ui,bottom:ne});const m=new lt(new ie(l0+.22,l0+.28,3.05,40,1,!0),o);m.material.side=we,m.position.set(Oo,Kv.ceiling+3.05/2,Ki),m.castShadow=!0,n.add(m);const g=new lt(new rh(2.12,l0+.5,44),e);g.rotation.x=-Math.PI/2,g.position.set(Oo,ne-.04,Ki),g.receiveShadow=!0,n.add(g);const b=new lt(new ie(2.12,2.12,.22,44,1,!0),e);b.material.side=we,b.position.set(Oo,ne+.07,Ki),n.add(b);const x=new lt(new ie(2.12,2.12,.18,44,1,!0),o);x.material.side=we,x.position.set(Oo,ne+.09,Ki),n.add(x),t.length=0;const w=ne-.35;for(const S of zm)t.push({...S,top:ne,bottom:w});for(const[S,_]of[[c/2,c/2],[Qn-c/2,c/2],[c/2,Mo-c/2],[Qn-c/2,Mo-c/2]])t.push({minX:S-c/2,maxX:S+c/2,minZ:_-c/2,maxZ:_+c/2,top:ne+Ui+.25,bottom:ne});for(const S of f)t.push({minX:Math.min(S.from[0],S.to[0])-.16,maxX:Math.max(S.from[0],S.to[0])+.16,minZ:Math.min(S.from[1],S.to[1])-.16,maxZ:Math.max(S.from[1],S.to[1])+.16,top:ne+Ui,bottom:ne});const E=(S,_,y,A,M,T)=>{const R=new Et,L=new lt(new ee(y,A,M),i);L.position.y=A/2+.09,L.castShadow=!0,R.add(L);for(const O of[-M/2+.14,M/2-.14]){const B=new lt(new ee(y,.09,.16),i);B.position.set(0,.045,O),R.add(B)}for(const O of[-y/2+.2,0,y/2-.2]){const B=new lt(new ee(.09,A-.1,.03),i);B.position.set(O,A/2+.09,M/2+.015),R.add(B);const N=B.clone();N.position.z=-M/2-.015,R.add(N)}for(const O of[-1,1]){const B=new lt(new ee(.05,.16,.3),s);B.position.set(O*y/2,A-.06,0),R.add(B)}R.position.set(S,ne,_),R.rotation.y=T,n.add(R);const U=(Math.abs(Math.cos(T))*y+Math.abs(Math.sin(T))*M)/2,z=(Math.abs(Math.sin(T))*y+Math.abs(Math.cos(T))*M)/2;t.push({minX:S-U,maxX:S+U,minZ:_-z,maxZ:_+z,top:ne+A+.09,bottom:ne})};return E(Oo+.9,Ki-2.9,1.6,.72,1,.1),E(Oo+2.6,Ki-2.2,1.2,1.31,1.2,-.16),{group:n,obstacles:t,dispose(){e.dispose(),o.dispose(),i.dispose(),s.dispose(),h.dispose(),n.traverse(S=>{S instanceof lt&&S.geometry.dispose()})}}}const{window:wo}=Ot;function SE(n,t=0){const e=wo.width/2,o=new ei;return o.moveTo(n-e,t+wo.sill),o.lineTo(n-e,t+wo.springing),o.absarc(n,t+wo.springing,e,Math.PI,0,!0),o.lineTo(n+e,t+wo.sill),o.closePath(),o}function bE(n,t=0,e){const o=new Et,i=wo.width/2,s=t+wo.sill,r=t+wo.springing,a=(g,b,x)=>{const w=new lt(new ee(...b),g);return w.position.set(...x),w.castShadow=!0,w.receiveShadow=!0,o.add(w),w},l=new ln;l.moveTo(-i,s),l.lineTo(i,s),l.lineTo(i,r),l.absarc(0,r,i,0,Math.PI,!1),l.closePath();const c=new Ws(l),u=c.attributes.position,h=r+i,f=new Float32Array(u.count*2);for(let g=0;g<u.count;g+=1)f[g*2]=(u.getX(g)+i)/wo.width,f[g*2+1]=(u.getY(g)-s)/(h-s);c.setAttribute("uv",new qt(f,2));const d=new lt(c,e??n.glazing);d.position.z=-.12,o.add(d);const p=.05,v=-.11;for(const g of[-i/3,i/3])a(n.frame,[p,r-s,p*1.4],[g,(s+r)/2,v]);const m=4;for(let g=1;g<m;g+=1)a(n.frame,[wo.width,p,p*1.4],[0,s+(r-s)*g/m,v]);a(n.frame,[wo.width,p*1.7,p*1.6],[0,r,v]);for(const g of[Math.PI/4,Math.PI/2,3*Math.PI/4]){const b=a(n.frame,[p,i,p*1.4],[0,0,0]);b.position.set(Math.cos(g)*(i/2),r+Math.sin(g)*(i/2),v),b.rotation.z=g-Math.PI/2}return a(n.stone,[wo.width+Ot.window.width*.12,.09,.3],[0,s-.045,.14]),{group:o,dispose(){o.traverse(g=>{g instanceof lt&&g.geometry.dispose()})}}}const TE=`
varying vec2 vPane;
varying vec3 vView;
void main() {
  vPane = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vView = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,EE=`
uniform float uLevel;
uniform vec3 uTint;
uniform vec2 uPanes;
varying vec2 vPane;
varying vec3 vView;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.7, 289.3))) * 43758.5453);
}

void main() {
  // Which pane, and where inside it.
  vec2 grid = vPane * uPanes;
  vec2 cell = floor(grid);
  vec2 f = fract(grid);
  float pick = hash(cell);

  // No two lights alike: a little darker or lighter, a little greener or
  // pinker, the way a wall of old glass is never one colour.
  // Thin, so what is outside comes through it: the glass is a tint and a
  // bevel on the sky, not a lit panel in front of it.
  float body = 0.16 + pick * 0.22;
  vec3 tint = uTint * mix(vec3(0.88, 0.96, 1.06), vec3(1.12, 0.94, 0.86), hash(cell + 7.3));

  // The bright cut edge. Sharpest right at the lead and gone a centimetre
  // in, which is the shape of light bending through a bevel.
  vec2 edge = min(f, 1.0 - f);
  float bevel = 1.0 - smoothstep(0.0, 0.16, min(edge.x, edge.y));
  bevel = pow(bevel, 1.7);

  // Waviness. Cylinder glass sags as it cools and the sag runs down the
  // sheet, so the ripple is vertical and drawn out.
  float ripple = sin(vPane.y * 74.0 + pick * 6.28) * 0.5 + 0.5;
  ripple = mix(0.82, 1.18, ripple);

  // And the sheen, sliding as the player climbs past it.
  float slide = vView.y * 1.6 + vView.x * 0.7;
  float sheen = smoothstep(0.55, 1.0, sin(vPane.y * 3.1 - slide * 2.2 + pick) * 0.5 + 0.5);
  // Grazing angles catch far more, which is why a window across the room
  // is a mirror and the one beside you is not.
  float graze = pow(1.0 - abs(vView.z), 2.6);

  vec3 lit = tint * body * ripple;
  lit += tint * bevel * 1.5;
  lit += vec3(1.0, 0.86, 0.78) * sheen * (0.25 + graze * 0.9);
  lit += vec3(1.0, 0.9, 0.84) * graze * 0.32;

  // Scaled to what it was tuned to look like when the picture clipped at
  // one. With headroom its bevels and sheen were two and three times over
  // and every window in the room above bloomed like a lamp.
  gl_FragColor = vec4(lit * uLevel * 0.58, 1.0);
}
`;function AE(n,t){const e={uLevel:{value:0},uTint:{value:t.clone()},uPanes:{value:n.clone()}},o=new Se({vertexShader:TE,fragmentShader:EE,uniforms:e,transparent:!0,blending:Tn,depthWrite:!1,side:we});return o.customProgramCacheKey=()=>"crystal",{material:o,setLevel(i){e.uLevel.value=i},dispose(){o.dispose()}}}const{length:qr,depth:Yr,levels:Je,window:il}=Ot,Pe=ne,wn=Je.ceiling,fn=7,Cu=Pe+wn*fn,sl=.25,RE=[{along:"x",span:qr,at:0,inward:1},{along:"x",span:qr,at:Yr,inward:-1},{along:"z",span:Yr,at:0,inward:1},{along:"z",span:Yr,at:qr,inward:-1}];function $o(n,t,e,o,i,s=0,r=t.span){const a=o-e,l=r-s,c=sl+i,u=t.at+t.inward*(i-sl)/2,h=(s+r)/2,f=e+a/2;return t.along==="x"?Ko(n,[l,a,c],[h,f,u]):Ko(n,[c,a,l],[u,f,h])}function qd(n,t){return t?il.centresX.map((e,o)=>o<il.centresX.length-1?(e+il.centresX[o+1])/2:null).filter(e=>e!==null):[n*.25,n*.5,n*.75]}const Bm=1.06;function PE(n,t,e,o){const i=new Et,s=.78,r=.16,a=o+Je.dadoCapTop,l=o+Je.pictureRailTop;return i.add($o(n.plaster,t,a,l,r,e-s/2,e+s/2)),i.add($o(n.gilt,t,l-.26,l,r+.14,e-s/2-.09,e+s/2+.09)),i.add($o(n.marble,t,a,a+.18,r+.1,e-s/2-.06,e+s/2+.06)),i}function CE(n,t,e,o,i){const s=new ln;s.moveTo(0,e),s.lineTo(t.span,e),s.lineTo(t.span,o),s.lineTo(0,o),s.closePath(),s.holes.push(...i);const r=new bn(s,{depth:sl,bevelEnabled:!1}),a=new lt(r,n);return t.along==="x"?(a.position.set(0,0,t.at-(t.inward>0?sl:0)),t.inward<0&&(a.position.z=t.at)):(a.rotation.y=-Math.PI/2,a.position.set(t.at+(t.inward>0?0:sl),0,0)),a.receiveShadow=!0,a}function IE(n){const t=new Et,e=[],o=AE(new st(3,4),new bt(16757914));for(let d=0;d<fn;d+=1){const p=Pe+d*wn;for(const v of RE){const m=v.along==="x"&&v.inward<0;if(t.add($o(n.marble,v,p,p+Je.skirtingTop,.02)),t.add($o(n.marble,v,p+Je.skirtingTop,p+Je.dadoTop,0)),t.add($o(n.marble,v,p+Je.dadoTop,p+Je.dadoCapTop,.045)),m){const g=il.centresX.map(b=>SE(b,p));t.add(CE(n.wallField,v,p+Je.dadoCapTop,p+Je.ceiling,g));for(const b of il.centresX){const x=bE(n,p,o.material);x.group.position.set(b,0,v.at),x.group.rotation.y=Math.PI,t.add(x.group),e.push(x)}}else t.add($o(n.wallField,v,p+Je.dadoCapTop,p+Je.ceiling,0));t.add($o(n.gilt,v,p+Je.pictureRail,p+Je.pictureRailTop,.055)),t.add($o(n.plaster,v,p+Je.corniceBottom-.06,p+Je.corniceBottom,.1)),t.add($o(n.plaster,v,p+Je.corniceBottom,p+Je.ceiling,.19));for(const g of qd(v.span,m))t.add(PE(n,v,g,p))}}const i=new bt(10467026),s=new bt(16773590),r=3,a=[];for(let d=0;d<r*2;d+=1){const p=new Wo(i.clone(),0,30,1.45);a.push(p),t.add(p)}const l=new Xr(4865362,2365472,0);l.position.set(qr/2,Cu,Yr/2),t.add(l);const c=[[qr*.3,Yr*.44],[qr*.7,Yr*.56]];let u=0;const h=d=>{const p=Math.round((d-Pe)/wn);for(let v=0;v<r;v+=1){const m=Math.min(fn-1,Math.max(0,p+v-1)),g=Pe+m*wn,b=m/(fn-1);for(let x=0;x<2;x+=1){const w=a[v*2+x],[E,S]=c[x];w.position.set(E,g+Je.pictureRail+.4,S),w.color.copy(i).lerp(s,b*b),w.intensity=f*u*(1-.86*b*b)}}},f=37;return{group:t,setLit(d){u=d;for(const p of a)p.intensity=f*d;l.intensity=2.5*d,o.setLevel(d)},follow:h,dispose(){for(const d of e)d.dispose();o.dispose();for(const d of a)d.dispose();l.dispose(),t.traverse(d=>{d instanceof lt&&d.geometry.dispose()})}}}const Iu={along:.6,out:.6,deep:.95},Zo=2048,jv=[[0,0,768,570],[776,0,768,570],[0,578,768,570],[776,578,768,570]],Jv=[0,1152,896,896],Xf=[[904,1152,1024,88],[904,1244,1024,88],[904,1336,1024,88]],Qv=[904,1428,1024,40],$i=[904,1472,1024,40],Lu=[904,1516,1024,524],t2=[1936,1152,104,104],$f=[[1552,8,240,300],[1800,8,240,300]],Ue=Iu.along,Ne=.575,LE=.019,vn=.075,kn=-.88;function e2(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function qf(n,[t,e,o,i],s,r="#d8bd8c"){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip(),n.fillStyle=r,n.fillRect(t,e,o,i);for(let a=0;a<26;a+=1){const l=e+s()*i,c=6+s()*22,u=(1+s()*2.5)/o,h=s()*6.28;n.strokeStyle=s()<.55?`rgba(150, 105, 55, ${.04+s()*.06})`:`rgba(240, 215, 170, ${.05+s()*.07})`,n.lineWidth=8+s()*34,n.beginPath();for(let f=-10;f<=o+10;f+=16){const d=l+Math.sin(f*u*6.28+h)*c+Math.sin(f*.021+h*2)*4;f===-10?n.moveTo(t+f,d):n.lineTo(t+f,d)}n.stroke()}for(let a=0;a<Math.round(i/3.2);a+=1){const l=e+s()*i,c=2+s()*9,u=(.8+s()*2)/o,h=s()*6.28;n.strokeStyle=`rgba(125, 88, 45, ${.06+s()*.12})`,n.lineWidth=.6+s()*1.3,n.beginPath();const f=s()*o*.6-o*.1,d=f+o*(.3+s()*.9);for(let p=f;p<=d;p+=12){const v=l+Math.sin(p*u*6.28+h)*c;p===f?n.moveTo(t+p,v):n.lineTo(t+p,v)}n.stroke()}for(let a=0;a<2;a+=1){const l=t+40+s()*(o-80),c=e+30+s()*(i-60),u=22+s()*16,h=7+s()*4;n.beginPath(),n.moveTo(l-u,c),n.quadraticCurveTo(l,c-h*2,l+u,c),n.quadraticCurveTo(l,c+h*2,l-u,c),n.fillStyle="rgba(236, 212, 164, 0.8)",n.fill(),n.strokeStyle="rgba(110, 75, 40, 0.45)",n.lineWidth=1,n.stroke()}for(let a=0;a<5;a+=1)n.fillStyle=`rgba(95, 62, 30, ${.3+s()*.3})`,n.beginPath(),n.ellipse(t+s()*o,e+s()*i,1.5+s()*2.5,1+s()*1.5,0,0,Math.PI*2),n.fill();n.restore()}function n2(n,[t,e,o,i],s,r=2){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip();const a=.93+s()*.1;n.fillStyle=`rgb(${Math.round(206*a)}, ${Math.round(158*a)}, ${Math.round(96*a)})`,n.fillRect(t,e,o,i);for(let l=0;l<Math.round(i/3);l+=1){const c=e+s()*i,u=(s()-.5)*10;n.strokeStyle=`rgba(140, 90, 40, ${.1+s()*.22})`,n.lineWidth=.7+s()*1.8,n.beginPath(),n.moveTo(t-4,c),n.bezierCurveTo(t+o*.33,c+u,t+o*.66,c-u,t+o+4,c+u*.5),n.stroke()}for(let l=0;l<r;l+=1){const c=t+60+s()*(o-120),u=e+i*(.3+s()*.4);for(let h=5;h>=1;h-=1)n.fillStyle=`rgba(${100-h*6}, ${62-h*4}, 28, ${.18+(5-h)*.12})`,n.beginPath(),n.ellipse(c,u,h*3.2,h*1.7,0,0,Math.PI*2),n.fill()}for(const l of[e,e+i-7]){const c=n.createLinearGradient(0,l,0,l+7),u=l===e;c.addColorStop(u?0:1,"rgba(238, 204, 150, 0.75)"),c.addColorStop(u?1:0,"rgba(238, 204, 150, 0)"),n.fillStyle=c,n.fillRect(t,l,o,7)}for(let l=0;l<18;l+=1){n.fillStyle=`rgba(80, 52, 26, ${.2+s()*.35})`;const c=s()<.5;n.fillRect(t+s()*o,c?e+s()*5:e+i-5+s()*5,2+s()*7,1+s()*2)}n.restore()}function DE(n,[t,e,o,i]){n.fillStyle="#b8864c",n.fillRect(t,e,o,i),n.strokeStyle="rgba(110, 70, 32, 0.45)";for(let s=6;s<o*1.4;s+=5+s%3)n.lineWidth=1.2,n.beginPath(),n.arc(t-o*.3,e+i*1.25,s,0,Math.PI*2),n.stroke()}function NE(n,[t,e,o,i],s){for(let a=0;a<7;a+=1){const l=e+a*i/7;n.fillStyle=a%2===0?"#e0c592":"#bf9a62",n.fillRect(t,l,o,i/7),n.fillStyle="rgba(95, 64, 30, 0.55)",n.fillRect(t,l,o,1)}for(let a=0;a<20;a+=1)n.fillStyle="rgba(70, 45, 20, 0.5)",n.fillRect(t+s()*o,e+Math.floor(s()*7)*(i/7)+1,4+s()*18,i/7-2)}function UE(n,[t,e,o,i]){n.fillStyle="#c9a56a",n.fillRect(t,e,o,i),n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip();const s=120;for(let r=-3;r<o/(s/3)+3;r+=1){const a=t+r*s/3;n.strokeStyle="rgba(96, 70, 34, 0.85)",n.lineWidth=5,n.beginPath(),n.moveTo(a,e+i),n.lineTo(a+s,e),n.stroke(),n.strokeStyle="rgba(240, 214, 160, 0.55)",n.lineWidth=4,n.beginPath(),n.moveTo(a+18,e+i),n.lineTo(a+18+s,e),n.stroke()}n.strokeStyle="rgba(235, 205, 150, 0.35)",n.lineWidth=.8;for(let r=0;r<400;r+=1){const a=t+r*97%o,l=e+r*13%i;n.beginPath(),n.moveTo(a,l),n.lineTo(a+6,l-2),n.stroke()}n.restore()}function km(n,[t,e,o,i],s,r){n.save(),n.beginPath(),n.rect(t,e,o,i),n.clip();const a=n.createLinearGradient(0,e+i*.7,0,e+i);a.addColorStop(0,"rgba(70, 52, 34, 0)"),a.addColorStop(1,"rgba(70, 52, 34, 0.3)"),n.fillStyle=a,n.fillRect(t,e,o,i);for(let l=0;l<26;l+=1){n.strokeStyle=s()<.5?`rgba(80, 58, 36, ${.08+s()*.12})`:`rgba(245, 225, 190, ${.1+s()*.15})`,n.lineWidth=.8+s()*1.6;const c=t+s()*o,u=e+i*(.5+s()*.5);n.beginPath(),n.moveTo(c,u),n.lineTo(c+(s()-.5)*70,u+(s()-.5)*10),n.stroke()}for(let l=0;l<9;l+=1){const c=n.createRadialGradient(0,0,0,0,0,1);c.addColorStop(0,"rgba(90, 64, 38, 0.13)"),c.addColorStop(1,"rgba(90, 64, 38, 0)"),n.save(),n.translate(t+s()*o,e+s()*i),n.scale(20+s()*60,12+s()*30),n.fillStyle=c,n.beginPath(),n.arc(0,0,1,0,Math.PI*2),n.fill(),n.restore()}if(r)for(const l of[.3,.7])for(let c=0;c<4;c+=1){const u=n.createRadialGradient(0,0,0,0,0,1);u.addColorStop(0,"rgba(70, 50, 32, 0.16)"),u.addColorStop(1,"rgba(70, 50, 32, 0)"),n.save(),n.translate(t+o*l+(s()-.5)*40,e+i*(.26+s()*.2)),n.scale(18+s()*14,24+s()*16),n.fillStyle=u,n.beginPath(),n.arc(0,0,1,0,Math.PI*2),n.fill(),n.restore()}n.restore()}const FE='"DIN Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';function xn(n,t,e,o,i,s=i*.08){n.font=`bold ${i}px ${FE}`,n.textAlign="left",n.textBaseline="alphabetic";const r=[...t].map(u=>n.measureText(u).width),a=r.reduce((u,h)=>u+h,0)+s*(t.length-1);let l=e-a/2;const c=i*.72;[...t].forEach((u,h)=>{const f=r[h];if(n.globalCompositeOperation="source-over",n.fillText(u,l,o),"OQD0CG".includes(u)){n.globalCompositeOperation="destination-out";const d=Math.max(2,i*.065),p=l+f*(u==="D"?.4:.5)-d/2;n.fillRect(p,o-c-2,d,c*.3),n.fillRect(p,o-c*.26,d,c*.3+2)}l+=f+s}),n.globalCompositeOperation="source-over"}function Du(n,t,e,o,i){const s=o*.42,r=i*.36;n.beginPath(),n.moveTo(t,e),n.lineTo(t+i/2,e+s),n.lineTo(t+r/2,e+s),n.lineTo(t+r/2,e+o),n.lineTo(t-r/2,e+o),n.lineTo(t-r/2,e+s),n.lineTo(t-i/2,e+s),n.closePath(),n.fill(),n.globalCompositeOperation="destination-out",n.fillRect(t-i,e+s,i*2,Math.max(2,o*.035)),n.globalCompositeOperation="source-over"}function Ar(n,t,e,o){n.lineWidth=o*.045,n.strokeRect(t,e,o,o),Du(n,t+o*.33,e+o*.12,o*.6,o*.28),Du(n,t+o*.67,e+o*.12,o*.6,o*.28),n.fillRect(t+o*.14,e+o*.78,o*.72,o*.07)}function c0(n,t,e,o){n.lineWidth=o*.045,n.strokeRect(t,e,o,o);const i=t+o/2;n.beginPath(),n.moveTo(i-o*.2,e+o*.14),n.lineTo(i+o*.2,e+o*.14),n.bezierCurveTo(i+o*.22,e+o*.42,i+o*.08,e+o*.52,i+o*.03,e+o*.54),n.lineTo(i+o*.03,e+o*.78),n.lineTo(i+o*.16,e+o*.84),n.lineTo(i-o*.16,e+o*.84),n.lineTo(i-o*.03,e+o*.78),n.lineTo(i-o*.03,e+o*.54),n.bezierCurveTo(i-o*.08,e+o*.52,i-o*.22,e+o*.42,i-o*.2,e+o*.14),n.closePath(),n.fill(),n.globalCompositeOperation="destination-out",n.lineWidth=o*.03,n.beginPath(),n.moveTo(i-o*.05,e+o*.14),n.lineTo(i+o*.03,e+o*.25),n.lineTo(i-o*.04,e+o*.31),n.lineTo(i+o*.05,e+o*.42),n.stroke(),n.globalCompositeOperation="source-over"}function OE(n,t,e,o){n.lineWidth=o*.045,n.strokeRect(t,e,o,o);const i=t+o/2,s=e+o*.36,r=o*.32;n.beginPath(),n.moveTo(i-r,s+r*.62),n.bezierCurveTo(i-r,s-r*.2,i+r,s-r*.2,i+r,s+r*.62);for(let a=3;a>=0;a-=1){const l=i-r+(a+1)*(r/2),c=i-r+a*(r/2);n.quadraticCurveTo((l+c)/2,s+r*.4,c,s+r*.62)}n.closePath(),n.fill(),n.lineWidth=o*.05,n.beginPath(),n.moveTo(i,s+r*.5),n.lineTo(i,e+o*.8),n.arc(i-o*.07,e+o*.8,o*.07,0,Math.PI,!1),n.stroke(),n.lineWidth=o*.035;for(const[a,l]of[[-.3,.1],[-.1,.06],[.1,.1],[.3,.06],[-.2,.2],[.2,.2]])n.beginPath(),n.moveTo(t+o*(.5+a),e+o*(l+.02)),n.lineTo(t+o*(.5+a-.03),e+o*(l+.1)),n.stroke()}function o2(n,[t,e,o,i],s,r){const a=document.createElement("canvas");a.width=o,a.height=i;const l=a.getContext("2d");l.fillStyle="#000",l.strokeStyle="#000",r(l),l.globalCompositeOperation="destination-out";for(let c=0;c<2200;c+=1)l.globalAlpha=.25+s()*.75,l.fillRect(s()*o,s()*i,.8+s()*2.4,.8+s()*2.4);for(let c=0;c<7;c+=1){const u=l.createRadialGradient(0,0,0,0,0,1);u.addColorStop(0,"rgba(0,0,0,0.45)"),u.addColorStop(1,"rgba(0,0,0,0)"),l.save(),l.globalAlpha=1,l.translate(s()*o,s()*i),l.scale(30+s()*70,20+s()*40),l.fillStyle=u,l.beginPath(),l.arc(0,0,1,0,Math.PI*2),l.fill(),l.restore()}l.globalAlpha=1,l.globalCompositeOperation="source-in",l.fillStyle="#2e2620",l.fillRect(0,0,o,i),n.save(),n.globalCompositeOperation="multiply",n.filter="blur(3px)",n.globalAlpha=.22,n.drawImage(a,t,e),n.filter="blur(0.6px)",n.globalAlpha=.92,n.drawImage(a,t,e),n.restore()}const zE=[n=>{Ar(n,76,72,96),Ar(n,596,72,96),xn(n,"FRAGILE",384,190,128,10),xn(n,"HANDLE WITH CARE",384,250,44,5),c0(n,80,318,104),c0(n,200,318,104),xn(n,"WORKS OF ART",196,492,36,5)},n=>{Du(n,110,78,230,76),Du(n,658,78,230,76),xn(n,"THIS WAY UP",384,372,76,7),OE(n,196,404,96),xn(n,"KEEP DRY",420,480,56,6)},n=>{n.lineWidth=5,n.strokeRect(78,74,340,132),xn(n,"LOAN No.",248,118,36,5),xn(n,"L 1896 / 042",248,186,66,5),xn(n,"CRATE",572,118,36,6),xn(n,"3 OF 7",572,186,66,6),xn(n,"DESTINATION",204,262,30,5),xn(n,"EAST WING",204,326,66,5),xn(n,"STORE 4",204,392,66,5),c0(n,90,420,84),Ar(n,190,420,84)},n=>{Ar(n,70,80,110),Ar(n,588,80,110),xn(n,"DO NOT TILT",384,360,70,7),xn(n,"GROSS 94 KG   NETT 61 KG",384,410,32,4),xn(n,"OPEN LID ONLY",384,470,44,6)}];function BE(n,t,e){const[o,i,s,r]=t;qf(n,t,e,"#d5b986");const a=s/(Ue*2),l=Math.round(vn*a),c=document.createElement("canvas");c.width=s,c.height=l;const u=c.getContext("2d"),h=(m,g,b)=>{n2(u,[0,0,s,l],e,1),n.save(),n.translate(m,g),b&&n.rotate(Math.PI/2),n.drawImage(c,0,b?-l:0),n.restore()},f=i+r/2-l/2;n.fillStyle="rgba(60, 40, 20, 0.35)",n.fillRect(o+l,i+l,s-2*l,5),n.fillRect(o+l,f+l,s-2*l,5),n.fillRect(o+l,i+l,5,r-2*l),o2(n,t,e,m=>{xn(m,"TOP",s*.32,r*.36,118,12),xn(m,"CRATE 3",s*.66,r*.8,84,8),Ar(m,s*.62,r*.16,110)}),h(o,f,!1),h(o,i,!0),h(o+s-l,i,!0),h(o,i,!1),h(o,i+r-l,!1),n.fillStyle="rgba(60, 38, 18, 0.7)";for(const m of[o,o+s-l])for(const g of[i+l,i+r-l-1.5])n.fillRect(m,g,l,1.5);for(const m of[o+l,o+s-l-1.5])n.fillRect(m,f,1.5,l);n.fillStyle="rgba(60, 38, 18, 0.45)";for(const m of[i+l,f-1,f+l,i+r-l-1])n.fillRect(o+l,m,s-2*l,1);for(const m of[o+l,o+s-l-1])n.fillRect(m,i+l,1,r-2*l);const d=(m,g)=>{const b=n.createRadialGradient(m-2,g-2,1,m,g,9);b.addColorStop(0,"#f0ece2"),b.addColorStop(.6,"#a9a49a"),b.addColorStop(1,"#5e5850"),n.fillStyle=b,n.beginPath(),n.arc(m,g,9,0,Math.PI*2),n.fill(),n.fillStyle="#8d877d",n.beginPath(),n.arc(m,g,5.2,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(40, 36, 32, 0.9)",n.lineWidth=1.6;const x=e()*Math.PI;for(const w of[0,Math.PI/2])n.beginPath(),n.moveTo(m+Math.cos(x+w)*4.2,g+Math.sin(x+w)*4.2),n.lineTo(m-Math.cos(x+w)*4.2,g-Math.sin(x+w)*4.2),n.stroke();e()<.2&&(n.fillStyle="rgba(120, 60, 25, 0.25)",n.beginPath(),n.arc(m+1,g+3,11,0,Math.PI*2),n.fill())},p=.13*a,v=l/2;for(let m=l*.9;m<=s-l*.9;m+=p)d(o+m,i+v),d(o+m,i+r-v),d(o+v,i+m),d(o+s-v,i+m);for(let m=l*2.2;m<=s-l*2.2;m+=p*1.6)d(o+m,f+v);for(const[m,g]of[[o+l,i+l],[o+s-l,i+l],[o+l,i+r-l],[o+s-l,i+r-l],[o+l,f+l],[o+s-l,f]]){const b=n.createRadialGradient(m,g,0,m,g,90);b.addColorStop(0,"rgba(80, 64, 44, 0.28)"),b.addColorStop(1,"rgba(80, 64, 44, 0)"),n.fillStyle=b,n.fillRect(m-90,g-90,180,180)}for(let m=0;m<40;m+=1){n.strokeStyle=e()<.5?`rgba(90, 64, 38, ${.1+e()*.1})`:`rgba(248, 230, 196, ${.1+e()*.15})`,n.lineWidth=.8+e()*1.5;const g=o+e()*s,b=i+e()*r;n.beginPath(),n.moveTo(g,b),n.lineTo(g+(e()-.5)*80,b+(e()-.5)*30),n.stroke()}}function kE(n,[t,e,o,i],s,r){n.save(),n.translate(t,e),n.fillStyle="#ebe2c9",n.fillRect(0,0,o,i);const a=n.createLinearGradient(0,0,o,i);a.addColorStop(0,"rgba(160, 120, 60, 0.12)"),a.addColorStop(.5,"rgba(160, 120, 60, 0)"),a.addColorStop(1,"rgba(160, 120, 60, 0.2)"),n.fillStyle=a,n.fillRect(0,0,o,i),n.fillStyle="#2d2a28",n.fillRect(12,12,o-24,34),n.fillStyle="#ebe2c9",n.font='bold 17px "Helvetica Neue", Arial, sans-serif',n.textAlign="center",n.letterSpacing="3px",n.fillText("CONSIGNMENT",o/2,35),n.letterSpacing="0px";const l=s===0?[["FROM","Store 2"],["TO","East Wing"],["OBJECT","Marble head"],["LOAN No.","L1896/042"],["CRATE","3 of 7"],["DATE","14 · iii"]]:[["FROM","Studio"],["TO","Store 4"],["OBJECT","Oil on canvas"],["LOAN No.","L1902/117"],["CRATE","5 of 7"],["DATE","2 · iv"]];n.textAlign="left",l.forEach(([c,u],h)=>{const f=62+h*34;n.strokeStyle="#48423b",n.lineWidth=1,n.strokeRect(12,f,o-24,30),n.fillStyle="#48423b",n.font='bold 10px "Helvetica Neue", Arial, sans-serif',n.fillText(c,17,f+12),n.fillStyle="#1f2a55",n.font=`${20+r()*3}px "Bradley Hand", "Segoe Print", "Comic Sans MS", cursive`,n.save(),n.translate(78,f+24),n.rotate((r()-.5)*.06),n.fillText(u,0,0),n.restore()}),n.strokeStyle="#48423b",n.lineWidth=2,n.strokeRect(16,i-40,18,18),n.fillStyle="#48423b",n.font='bold 13px "Helvetica Neue", Arial, sans-serif',n.fillText("FRAGILE",40,i-25),n.strokeStyle="#1f2a55",n.lineWidth=2.6,n.beginPath(),n.moveTo(18,i-32),n.lineTo(25,i-22),n.lineTo(38,i-46),n.stroke(),n.lineWidth=1.8,n.beginPath(),n.moveTo(128,i-26);for(let c=0;c<9;c+=1)n.quadraticCurveTo(136+c*10,i-44+r()*12,140+c*10,i-24-r()*6);n.stroke(),n.fillStyle="rgba(190, 140, 70, 0.42)";for(const[c,u]of[[-6,-.7],[o-38,.7]])n.save(),n.translate(c+22,14),n.rotate(u),n.fillRect(-26,-9,52,18),n.restore();for(let c=0;c<6;c+=1)n.fillStyle=`rgba(110, 85, 50, ${.05+r()*.06})`,n.beginPath(),n.ellipse(r()*o,r()*i,10+r()*30,6+r()*14,r()*3,0,Math.PI*2),n.fill();n.strokeStyle="rgba(255, 255, 255, 0.35)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,i*.58),n.lineTo(o,i*.52),n.stroke(),n.strokeStyle="rgba(120, 100, 70, 0.2)",n.beginPath(),n.moveTo(0,i*.58+1.5),n.lineTo(o,i*.52+1.5),n.stroke(),n.restore()}function GE(){const n=document.createElement("canvas");n.width=Zo,n.height=Zo;const t=n.getContext("2d"),e=e2(334462);t.fillStyle="#c9a877",t.fillRect(0,0,Zo,Zo),jv.forEach((r,a)=>{qf(t,r,e),km(t,r,e,a%2===1),o2(t,r,e,zE[a])}),BE(t,Jv,e),Xf.forEach(r=>n2(t,r,e)),NE(t,Qv,e),UE(t,$i),qf(t,Lu,e,"#c3a576"),km(t,Lu,e,!1),DE(t,t2),$f.forEach((r,a)=>kE(t,r,a,e));const o=t.getImageData(0,0,Zo,Zo),i=o.data;for(let r=0;r<i.length;r+=4){const a=(e()-.5)*14;i[r]=Math.max(0,Math.min(255,i[r]+a)),i[r+1]=Math.max(0,Math.min(255,i[r+1]+a)),i[r+2]=Math.max(0,Math.min(255,i[r+2]+a*.8))}t.putImageData(o,0,0);const s=new ce(n);return s.colorSpace=te,s.anisotropy=8,s}let Gm=null;function HE(){return Gm??(Gm=new wt({map:GE(),roughness:.82,metalness:0})),Gm}const VE=["px","nx","py","ny","pz","nz"];class WE{constructor(){ho(this,"position",[]);ho(this,"normal",[]);ho(this,"uv",[]);ho(this,"index",[])}quad(t,e,o=[0,0,1,1],i=0){const[s,r,,a]=t,l=new P().subVectors(r,s).cross(new P().subVectors(a,s)).normalize(),[c,u,h,f]=o,d=(m,g)=>[(e[0]+m*e[2])/Zo,1-(e[1]+(1-g)*e[3])/Zo],p=[d(c,u),d(h,u),d(h,f),d(c,f)],v=this.position.length/3;t.forEach((m,g)=>{this.position.push(m.x,m.y,m.z),this.normal.push(l.x,l.y,l.z);const[b,x]=p[(g+i)%4];this.uv.push(b,x)}),this.index.push(v,v+1,v+2,v,v+2,v+3)}add(t,e){const o=t.getAttribute("position"),i=t.getAttribute("normal"),s=t.getAttribute("uv"),r=this.position.length/3;for(let l=0;l<o.count;l+=1)this.position.push(o.getX(l),o.getY(l),o.getZ(l)),this.normal.push(i.getX(l),i.getY(l),i.getZ(l)),this.uv.push((e[0]+s.getX(l)*e[2])/Zo,1-(e[1]+(1-s.getY(l))*e[3])/Zo);const a=t.index;if(a)for(let l=0;l<a.count;l+=1)this.index.push(r+a.getX(l));else for(let l=0;l<o.count;l+=1)this.index.push(r+l);t.dispose()}build(){const t=new $t;return t.setAttribute("position",new Dt(this.position,3)),t.setAttribute("normal",new Dt(this.normal,3)),t.setAttribute("uv",new Dt(this.uv,2)),t.setIndex(this.index),t.computeBoundingSphere(),t}}function Dr(n,t,e){const o=(u,h,f)=>new P(u,h,f),[i,s,r,a,l,c]=[t.x,t.y,t.z,e.x,e.y,e.z];switch(n){case"pz":return[o(i,s,c),o(a,s,c),o(a,l,c),o(i,l,c)];case"nz":return[o(a,s,r),o(i,s,r),o(i,l,r),o(a,l,r)];case"px":return[o(a,s,c),o(a,s,r),o(a,l,r),o(a,l,c)];case"nx":return[o(i,s,r),o(i,s,c),o(i,l,c),o(i,l,r)];case"py":return[o(i,l,c),o(a,l,c),o(a,l,r),o(i,l,r)];case"ny":return[o(i,s,r),o(a,s,r),o(a,s,c),o(i,s,c)]}}function xo(n,t,e,o,i,s=[]){const r=new P(...e),a=new P(...o),l=new P().subVectors(a,r),c=i==="x"?l.x:i==="y"?l.y:l.z,u=Xf[Math.floor(t()*Xf.length)];for(const h of VE){if(s.includes(h))continue;const f=h[1];if(f===i){const x=t()*.5;n.quad(Dr(h,r,a),t2,[x,x,x+.5,x+.5]);continue}const d=f==="x"?i==="y"?l.z:l.y:f==="y"?i==="x"?l.z:l.x:i==="x"?l.y:l.x,p=i==="y"||i==="z"&&f==="y"?1:0,v=Math.min(1,c/1.2),m=t()*(1-v),g=Math.min(.95,d/.095),b=d<.03?t()<.5?0:1-g:t()*(1-g);n.quad(Dr(h,r,a),u,[m,b,m+v,b+g],p)}}function XE(n,t,e,o){const l=e+o*.042*.5;xo(n,t,[Math.min(e,e+o*.042),-.25,-.2],[Math.max(e,e+o*.042),-.17,.2],"z",[o>0?"nx":"px"]);const c=.115+t()*.02,u=(t()-.5)*.02,h=[[-.13,-.25+.004],[-.13-.006,-.25-c*.35],[-.13*.72,-.25-c*.82],[u,-.25-c],[.13*.72,-.25-c*.82],[.13+.006,-.25-c*.35],[.13,-.25+.004]].map(([f,d],p,v)=>new P(l+o*(.004+Math.sin(p/(v.length-1)*Math.PI)*.012),d,f));n.add(new $n(new zn(h,!1,"centripetal"),36,.012,7,!1),$i);for(const f of[-.13,.13]){const d=new Xe(1,9,6);d.scale(.021,.017,.021),d.rotateY(t()*Math.PI),d.translate(l,-.17+.012,f),n.add(d,[$i[0],$i[1],160,$i[3]]);const p=new ie(.009,.006,.05,6,1,!1);p.rotateZ(Math.PI/2-.3),p.rotateY(f>0?.4:-.4),p.translate(l+o*.028,-.17+.02,f),n.add(p,[$i[0]+200,$i[1],60,$i[3]])}}function $E(n=0){const t=e2(15482+n*7919),e=new WE,o=(x,w,E)=>new P(x,w,E),i=Ne+LE;e.quad([o(-Ue,0,Ue),o(Ue,0,Ue),o(Ue,0,-Ue),o(-Ue,0,-Ue)],Jv,[0,0,1,1],Math.floor(t()*4));for(const x of["px","nx","pz","nz"]){const w=t()*.2;e.quad(Dr(x,o(-Ue,-.027,-Ue),o(Ue,0,Ue)),Qv,[w,0,w+.8,1])}e.quad(Dr("ny",o(-Ue,-.027,-Ue),o(Ue,0,Ue)),Lu);const s=t()<.5,r=t()<.5,a={pz:s?2:0,nz:s?0:2,px:r?3:1,nx:r?1:3};for(const x of["pz","nz","px","nx"])e.quad(Dr(x,o(-Ne,kn,-Ne),o(Ne,-.027,Ne)),jv[a[x]]);e.quad(Dr("ny",o(-Ne,kn,-Ne),o(Ne,kn,Ne)),Lu);for(const x of[1,-1]){const w=x>0?Ne:-i,E=x>0?i:-Ne,S=[x>0?"nz":"pz"];xo(e,t,[-i,kn,w],[-i+vn,-.027,E],"y",S),xo(e,t,[i-vn,kn,w],[i,-.027,E],"y",S),xo(e,t,[-i+vn,-.027-vn,w],[i-vn,-.027,E],"x",[...S,"px","nx"]),xo(e,t,[-i+vn,kn,w],[i-vn,kn+vn,E],"x",[...S,"px","nx"])}for(const x of[1,-1]){const w=x>0?Ne:-i,E=x>0?i:-Ne,S=[x>0?"nx":"px"];xo(e,t,[w,kn,-Ne],[E,-.027,-Ne+vn],"y",[...S,"nz"]),xo(e,t,[w,kn,Ne-vn],[E,-.027,Ne],"y",[...S,"pz"]),xo(e,t,[w,-.027-vn,-Ne+vn],[E,-.027,Ne-vn],"z",[...S,"pz","nz"]),xo(e,t,[w,kn,-Ne+vn],[E,kn+vn,Ne-vn],"z",[...S,"pz","nz"]),XE(e,t,x*Ne,x)}const l=.12;for(const x of[1,-1])for(const w of[1,-1]){const E=[x*Ue,x*(Ue-l)].sort((_,y)=>_-y),S=[w*Ue,w*(Ue-l)].sort((_,y)=>_-y);xo(e,t,[E[0],-.027-.11,S[0]],[E[1],-.027,S[1]],"y",["py"]),xo(e,t,[E[0],kn,S[0]],[E[1],kn+.11,S[1]],"y")}for(const x of[1,-1])xo(e,t,[-Ue,-.95,x*.38-.045],[Ue,kn,x*.38+.045],"x",["py"]);const c=$f[Math.floor(t()*$f.length)],u=.3+(t()-.5)*.06,h=-.6+(t()-.5)*.08,f=(t()-.5)*.14,d=.075,p=.094,v=(x,w)=>o(u+x*Math.cos(f)-w*Math.sin(f),h+x*Math.sin(f)+w*Math.cos(f),Ne+.002);e.quad([v(-d,-p),v(d,-p),v(d,p),v(-d,p)],c);const m=e.build(),g=new lt(m,HE());g.name="crate",g.castShadow=!0,g.receiveShadow=!0;const b=new Et;return b.add(g),{group:b,dispose(){m.dispose()}}}const pi={along:.62,out:.62},vc=.075,xc=.5,Ns=.21,Hm=2.4,Fi=.36,Vm=24;let Nr=null,Yf=0;function qE(){return Nr??(Nr=new wt({color:16777215,vertexColors:!0,roughness:.62,metalness:0,side:we})),Yf+=1,Nr}function no(n,t){const e=n.index?n.toNonIndexed():n;e!==n&&n.dispose();const o=e.getAttribute("position").count,i=new Float32Array(o*3);for(let s=0;s<o;s+=1)i[s*3]=t*.93,i[s*3+1]=t*.9,i[s*3+2]=t*.85;return e.setAttribute("color",new qt(i,3)),e.getAttribute("uv")&&e.deleteAttribute("uv"),e}function YE(){const n=h=>Ns*(1-h/(Math.PI*2*Hm*1.2)),e=Math.PI*2*(Hm-1),o=[],i=[];for(let h=0;h<=120;h+=1){const f=h/120*e,d=n(f),p=n(f+Math.PI*2)+.004;o.push(new st(Math.sin(f)*d,Math.cos(f)*d)),i.unshift(new st(Math.sin(f)*p,Math.cos(f)*p))}const s=new ln([...o,...i]),r=.1,a=new bn(s,{depth:r,bevelEnabled:!0,bevelThickness:.012,bevelSize:.008,bevelSegments:2,curveSegments:1});a.translate(0,0,-r/2);const l=new ie(Ns*.98,Ns*.98,r*.7,40).rotateX(Math.PI/2),c=new Xe(Ns*.17,16,10,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).scale(1,1,.6).translate(0,0,r/2+.004),u=c.clone().rotateY(Math.PI);return[no(a,.97),no(l,.7),no(c,.95),no(u,.95)]}function ZE(n=0){const t=new Et,e=qE(),o=[],i=y=>{const A=Math.sin((n+1)*12.9898+y*78.233)*43758.5453;return A-Math.floor(A)};o.push(no(new ee(pi.along*2,vc,pi.out*2).translate(0,-vc/2,0),1)),o.push(no(new ee(pi.along*2-.05,.03,pi.out*2-.05).translate(0,-vc-.015,0),.8));for(const y of[-1,1]){const A=[];for(let M=0;M<=24;M+=1){const T=M/24,R=-.57+T*(pi.out-.05)*2,L=1-.3*Math.exp(-Math.pow((T-.5)/.12,2)),U=1+.06*Math.pow(Math.abs(T-.5)*2,4);A.push(new st(Ns*.96*L*U,R))}o.push(no(new an(A,36).rotateX(Math.PI/2).translate(y*xc,-.28,0),.9)),o.push(no(new dn(Ns*.7,.02,8,32).translate(y*xc,-.28,0),.84))}for(const y of[-1,1])o.push(no(new ee(xc*2,.09,.05).translate(0,-vc-.075,y*(pi.out-.05)),.92));for(const y of[-1,1])for(const A of[-1,1])for(const M of YE())o.push(M.rotateY(A>0?0:Math.PI).scale(y,1,1).translate(y*xc,-.28,A*(pi.out-.02)));const s=-.28-Ns*.2,r=new an([new st(Fi*.96,s-.13),new st(Fi*1.08,s-.09),new st(Fi*1.18,s-.04),new st(Fi*1.2,s)],48);o.push(no(r,.72));const a=16;for(let y=0;y<a;y+=1){const A=y/a*Math.PI*2,M=Fi*1.12,T=new Xe(.036,10,8).scale(1,1.45,.62).rotateY(-A).translate(Math.sin(A)*M,s-.06,Math.cos(A)*M);o.push(no(T,.98));const R=new Tl(.012,.07,4).rotateX(Math.PI).rotateY(-A-Math.PI/a).translate(Math.sin(A+Math.PI/a)*(M+.01),s-.065,Math.cos(A+Math.PI/a)*(M+.01));o.push(no(R,.85))}const l=s-.15;o.push(no(new dn(Fi*1.01,.02,8,48).rotateX(Math.PI/2).translate(0,l,0),.9));const c=l-.02,u=-.95,h=Vm*6,f=10,d=[],p=y=>{const A=Math.sin(y*3+i(1)*6)*.06+Math.sin(y*7+i(2)*6)*.035+Math.sin(y*17+i(3)*6)*.015;return u+.1+A},v=(y,A)=>{const M=y/(Math.PI*2)*Vm%1,T=Math.pow(Math.sin(M*Math.PI),.6),R=Fi*(1-.045*T);return new P(Math.sin(y)*R,A,Math.cos(y)*R)},m=[];for(let y=0;y<=f;y+=1){const A=[];for(let M=0;M<=h;M+=1){const T=M/h*Math.PI*2,R=p(T),L=c+(R-c)*(y/f);A.push(v(T,L))}m.push(A)}const g=[];for(let y=0;y<f;y+=1)for(let A=0;A<h;A+=1){const M=m[y][A],T=m[y][A+1],R=m[y+1][A+1],L=m[y+1][A];d.push(M.x,M.y,M.z,L.x,L.y,L.z,R.x,R.y,R.z,M.x,M.y,M.z,R.x,R.y,R.z,T.x,T.y,T.z);for(const U of[M,L,R,M,R,T]){const z=1-Math.hypot(U.x,U.z)/Fi;g.push(.96-z*5.5)}}const b=m[f],x=new P(0,u+.08,0);for(let y=0;y<h;y+=1){const A=b[y],M=b[y+1];d.push(x.x,x.y,x.z,A.x,A.y,A.z,M.x,M.y,M.z),g.push(.66,.7,.7)}const w=new $t;w.setAttribute("position",new Dt(d,3));const E=new Float32Array(g.length*3);g.forEach((y,A)=>{E[A*3]=y*.93,E[A*3+1]=y*.9,E[A*3+2]=y*.85}),w.setAttribute("color",new qt(E,3)),w.computeVertexNormals(),o.push(w);const S=Le(o.map(y=>(y.getAttribute("normal")||y.computeVertexNormals(),y)),!1);for(const y of o)y.dispose();if(!S)throw new Error("capital: could not merge");const _=new lt(S,e);return _.castShadow=!0,_.receiveShadow=!0,t.add(_),{group:t,dispose(){S.dispose(),Yf-=1,Yf===0&&(Nr==null||Nr.dispose(),Nr=null)}}}const Zf={along:1.2,out:.3,deep:.45},Ur=Zf.deep/2,KE=.42,Kf=3.2,u0=.022,h0=.53,f0=2.4,Mc=-1.1,jE=.218,JE=.06,QE=.74,ys=.13,Ds=-.86,Oi=-.4,Zr=1.16,jf=.15,Gn=.1,i2=.1,yc=36,so=.875,vi=.9375,jo=.05,ru=.13,is=.3,Jf=2048,Qf=768;function Yd(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const au=[{name:"CADMIUM RED DEEP",code:"PR108",series:4,number:"097",tint:10230300,swatch:"#b3262a",chemistry:"Cadmium sulphoselenide"},{name:"YELLOW OCHRE",code:"PY43",series:1,number:"744",tint:12089892,swatch:"#c8923a",chemistry:"Natural hydrated iron oxide"},{name:"FRENCH ULTRAMARINE",code:"PB29",series:1,number:"263",tint:2241919,swatch:"#2e4ba0",chemistry:"Complex sodium aluminium silicate"},{name:"CADMIUM YELLOW",code:"PY35",series:4,number:"108",tint:14723858,swatch:"#f0bd1c",chemistry:"Cadmium zinc sulphide"},{name:"VIRIDIAN",code:"PG18",series:3,number:"692",tint:1663054,swatch:"#23806a",chemistry:"Hydrated chromium oxide"},{name:"BURNT SIENNA",code:"PBr7",series:1,number:"074",tint:8336407,swatch:"#9a4522",chemistry:"Calcined natural iron oxide"}];function s2(){const n=Yd(8117),t=[];for(let e=0;e<16;e+=1){const o=is+.03+n()*(so-is-.12),i=n(),s=(n()-.5)*.12,r=.12+n()*.22,a=[];for(let l=0;l<=6;l+=1){const c=l/6-.5;a.push([o+s*c*2+(n()-.5)*.006,i+c*r+(n()-.5)*.01])}t.push({points:a,width:.6+n()*.8})}for(const e of[.23,.27,.72,.77,.4,.61]){const o=[],i=ru+n()*.04,s=is+.02+n()*.08;for(let r=0;r<=8;r+=1)o.push([i+(s-i)*(r/8),e+(n()-.5)*.02]);t.push({points:o,width:.5+n()*.6})}return t}function Wm(n,t,e,o){const i=Math.cos(o),s=Math.sin(o);return[n*Math.sign(i)*Math.abs(i)**(2/e),t*Math.sign(s)*Math.abs(s)**(2/e)]}function rl(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function t5(){const n=[],e=u=>jE-(u-Math.PI/2)/(Math.PI*2)*JE,o=Math.PI/2+QE*Math.PI*2,i=30,s=[];let r=0;for(let u=0;u<=i;u+=1){const h=o-u/i*(o-Math.PI/2),f=e(h),d=Mc+f*Math.cos(h),p=-.24+f*Math.sin(h);if(u>0){const v=s[u-1];r+=Math.hypot(d-v.x,p-v.y)}s.push({x:d,y:p,ux:Math.cos(h),uy:Math.sin(h),d:r})}const a=r;for(const u of s){const h=u.d<ys?1-rl((u.d-ys*.8)/(ys*.2)):0,f=u.d<ys?u.d/ys*jo:jo+(u.d-ys)/(a-ys)*(ru-jo);n.push({cx:u.x,cy:u.y+0,ux:u.ux,uy:u.uy,W:h0*(1-h*.015),H:u0*(1+h*.45),n:f0,u:f})}const l=[];for(let u=Mc+.06;u<Ds;u+=.08)l.push(u);for(let u=0;u<=14;u+=1)l.push(Ds+(Oi-Ds)*(u/14));const c=22;for(let u=1;u<=c;u+=1)l.push(Oi+(Zr-Oi)*(u/c));for(const u of l){const h=rl((u-Ds)/(Oi-Ds)),f=1-(1-h)**1.6,d=u0+(Ur-u0)*f,p=Math.exp(-(((u-.15)/.35)**2)),v=rl((u-.6)/.5),m=(h0+(KE-h0)*h)*(1-p*.035*h+v*.02),g=f0+(Kf-f0)*h,b=u<Oi?ru+(u-Mc)/(Oi-Mc)*(is-ru):is+(u-Oi)/(Zr-Oi)*(so-.005-is);n.push({cx:u,cy:-d,ux:0,uy:1,W:m,H:d,n:g,u:b})}return n}const e5=[{x:.05,theta:Math.PI/2+.25,r:.2,depth:.014},{x:.55,theta:Math.PI/2-.35,r:.16,depth:.012},{x:-.25,theta:Math.PI/2-.1,r:.22,depth:.01},{x:.2,theta:.1,r:.18,depth:.05},{x:.25,theta:Math.PI-.1,r:.2,depth:.055},{x:-.1,theta:-Math.PI/2+.2,r:.24,depth:.04},{x:.75,theta:-Math.PI/2-.4,r:.18,depth:.035},{x:.8,theta:.3,r:.14,depth:.03}];function Xm(n,t,e){const o=n[0].length-1,i=[],s=[],r=[];n.forEach((f,d)=>{f.forEach((p,v)=>{i.push(p.x,p.y,p.z),s.push(t[d],e[0]+(e[1]-e[0])*(v/o))})});const a=(f,d)=>f*(o+1)+d;for(let f=0;f<n.length-1;f+=1)for(let d=0;d<o;d+=1)r.push(a(f,d),a(f+1,d),a(f+1,d+1),a(f,d),a(f+1,d+1),a(f,d+1));const l=new $t;l.setAttribute("position",new Dt(i,3)),l.setAttribute("uv",new Dt(s,2)),l.setIndex(r),l.computeVertexNormals();const c=l.getAttribute("normal"),u=new P,h=new P;for(let f=0;f<n.length;f+=1)u.fromBufferAttribute(c,a(f,0)),h.fromBufferAttribute(c,a(f,o)),u.add(h).normalize(),c.setXYZ(a(f,0),u.x,u.y,u.z),c.setXYZ(a(f,o),u.x,u.y,u.z);return l}function $m(n,t,e,o,i=0,s=1){const r=new an(n.map(([l,c])=>new st(c,l)),t);r.rotateZ(-Math.PI/2);const a=r.getAttribute("uv");for(let l=0;l<a.count;l+=1)a.setXY(l,e+(o-e)*a.getY(l),i+(s-i)*a.getX(l));return r}function n5(){const n=t5(),t=[],e=[],o=Yd(41),i=Array.from({length:30},()=>({x:-.5+o()*1.6,t:o()*Math.PI*2,a:.004+o()*.006}));for(const S of n){const _=[];for(let y=0;y<=yc;y+=1){const A=-Math.PI/2+y/yc*Math.PI*2;let[M,T]=Wm(S.W,S.H,S.n,A);if(S.uy===1&&S.cx>Ds){const R=rl((S.cx-Ds)/.4)*(1-rl((S.cx-Zr+.12)/.12));let L=0;const U=2.3;for(const B of e5){let N=Math.abs(A-B.theta)%(Math.PI*2);N>Math.PI&&(N=Math.PI*2-N);const H=Math.hypot(S.cx-B.x,N*U/(Math.PI*2));L+=B.depth*Math.exp(-((H/B.r)**2))}for(const B of i){let N=Math.abs(A-B.t)%(Math.PI*2);N>Math.PI&&(N=Math.PI*2-N);const H=Math.hypot(S.cx-B.x,N*U/(Math.PI*2));L+=B.a*Math.exp(-((H/.12)**2))}const z=Math.hypot(M,T),O=1-L*R/Math.max(z,.05);M*=O,T*=O}_.push(new P(S.cx+S.ux*T,S.cy+S.uy*T,M))}t.push(_),e.push(S.u)}const s=[[.04,.01],[.13,.024],[.28,.045],[.46,.07],[.64,.095],[.8,.118],[.92,.136],[1,.15]],r=n[n.length-1],a=[],l=[],c=t[t.length-1];a.push(c),l.push(so+.002);for(const[S,_]of s){const y=r.W+(Gn-r.W)*S,A=Ur+(Gn-Ur)*S,M=Kf+(2-Kf)*S,T=[];for(let R=0;R<=yc;R+=1){const L=-Math.PI/2+R/yc*Math.PI*2,[U,z]=Wm(y,A,M,L);T.push(new P(Zr+_*(jf/.15),-Ur+z,U))}a.push(T),l.push(so+.002+S*.055)}const u=Xm(t,e,[0,1]),h=Xm(a,l,[0,1]),f=Zr+jf,d=[[f-.01,Gn+.004],[f+.006,Gn]];for(let S=0;S<4;S+=1){const _=f+.014+S*.02;d.push([_,Gn],[_+.007,Gn+.011],[_+.012,Gn+.011],[_+.019,Gn])}const p=f+i2;d.push([p-.004,Gn],[p,Gn-.008],[p-.002,Gn-.02],[p-.03,Gn-.022]);const v=$m(d,28,so+.06,vi-.004);v.translate(0,-Ur,0);const m=.125,g=.19,b=[[0,.001],[.004,m*.55],[.01,m*.9],[.022,m],[g-.012,m],[g-.002,m-.006],[g,m-.018],[g-.006,m-.026],[.03,m-.028],[.028,.001]],x=$m(b,40,vi+.004,.996),w=x.getAttribute("position");for(let S=0;S<w.count;S+=1){const _=w.getX(S),y=w.getY(S),A=w.getZ(S);if(Math.hypot(y,A)>m-.004&&_>.02&&_<g-.008){const T=Math.atan2(A,y),R=1-.035*Math.max(0,Math.cos(T*20))**2;w.setXYZ(S,_,y*R,A*R)}}x.computeVertexNormals(),x.rotateY(-.35),x.translate(f+.02,-.45+m,Gn+m+.06);const E=Le([u,h,v,x],!1);for(const S of[u,h,v,x])S.dispose();return E}function o5(){const n=Zr+jf+i2,t=-Ur,e=-.45,o=.056,i=new zn([new P(n-.05,t,0),new P(n+.02,t-.004,0),new P(n+.085,t-.035,-.01),new P(n+.12,t-.1,-.03),new P(n+.105,e+o*.85+.01,-.08),new P(n+.03,e+o*.8,-.14),new P(n-.055,e+o*.8,-.1),new P(n-.045,e+o*1.3,-.02),new P(n+.02,e+o*1.9,-.03)],!1,"centripetal",.5),s=64,r=12,a=new $n(i,s,o,r,!1),l=a.getAttribute("position"),c=new P;for(let f=0;f<=s;f+=1){const d=f/s;i.getPointAt(d,c);const p=d>.8?Math.sqrt(Math.max(0,1-((d-.8)/.2)**1.4)):1,v=(1-d*.18)*p;for(let m=0;m<=r;m+=1){const g=f*(r+1)+m,b=d>.4?.8:1;l.setXYZ(g,c.x+(l.getX(g)-c.x)*v,c.y+(l.getY(g)-c.y)*v*b,c.z+(l.getZ(g)-c.z)*v)}}a.computeVertexNormals();const u=new dn(Gn-.03,.022,8,24);u.rotateY(Math.PI/2),u.translate(n-.002,t,0);const h=Le([a.toNonIndexed(),u.toNonIndexed()],!1);return a.dispose(),u.dispose(),h}function i5(n,t){const e=document.createElement("canvas");e.width=Jf,e.height=Qf;const o=e.getContext("2d"),i=Yd(t*7919+13),s=Jf,r=Qf,a="#ede6d4",l="#2a2622",c="#a8874a",u=_=>_*s,h=_=>(1-_)*r;o.fillStyle=a,o.fillRect(0,0,u(so),r);const f=(_,y)=>{o.fillStyle="#b6b9bb",o.fillRect(_,0,y-_,r);for(let A=0;A<1400;A+=1)o.fillStyle=`rgba(${i()<.5?"90, 94, 98":"235, 238, 240"}, ${.05+i()*.08})`,o.fillRect(_+i()*(y-_),i()*r,1+i()*8,1)};f(0,u(jo)),f(u(so),u(vi));for(let _=4;_<u(jo)-4;_+=7)o.fillStyle="rgba(70, 72, 76, 0.35)",o.fillRect(_,0,2,r),o.fillStyle="rgba(245, 247, 250, 0.35)",o.fillRect(_+2,0,2,r);o.fillStyle="#e8e2d4",o.fillRect(u(vi),0,s-u(vi),r);for(let _=0;_<300;_+=1)o.fillStyle=`rgba(110, 96, 80, ${.03+i()*.05})`,o.fillRect(u(vi)+i()*(s-u(vi)),i()*r,2+i()*6,2+i()*6);for(let _=0;_<12e3;_+=1)o.fillStyle=`rgba(${i()<.5?"120, 100, 70":"255, 252, 240"}, ${.03+i()*.05})`,o.fillRect(u(jo)+i()*(u(so)-u(jo)),i()*r,1+i()*2,1+i()*2);const d=(_,y,A,M,T,R,L,U="center")=>{o.font=M,o.letterSpacing=`${R}px`,o.fillStyle=T,o.textAlign=U,o.textBaseline="middle";const z=o.measureText(_).width;o.save(),o.translate(y,A),z>L&&o.scale(L/z,1),o.fillText(_,0,0),o.restore()},p=(_,y)=>{o.fillStyle=n.swatch,o.fillRect(u(_),0,u(y)-u(_),r),o.fillStyle=c,o.fillRect(u(_)-6,0,3,r),o.fillRect(u(y)+3,0,3,r)};p(.07,.115);const v=u(is)+20,m=.745,g=.835,b=u(m)-26,x=(v+b)/2,w=b-v,E=(_,y)=>{const A=h(_);o.save(),o.translate(x,A),y&&o.rotate(Math.PI);const M=w/2,T=r*.17;o.strokeStyle=l,o.lineWidth=3,o.strokeRect(-M,-T,M*2,T*2),o.lineWidth=1.2,o.strokeRect(-M+8,-T+8,M*2-16,T*2-16),o.beginPath(),o.arc(-M+58,-T+50,30,0,Math.PI*2),o.fillStyle=l,o.fill(),o.beginPath(),o.arc(-M+58,-T+50,24,0,Math.PI*2),o.strokeStyle=a,o.lineWidth=1.5,o.stroke(),d("A&V",-M+58,-T+51,'bold 20px Georgia, "Times New Roman", serif',a,0,40),d("ASHDOWN & VESEY",-M+104,-T+42,'bold 30px Georgia, "Times New Roman", serif',l,6,M,"left"),d("ARTISTS' COLOURMEN  ·  LONDON  ·  EST. 1791",-M+104,-T+72,'italic 19px Georgia, "Times New Roman", serif',"#4a443c",2,M,"left"),d("ARTISTS' OIL COLOUR",M-30,-T+50,'bold 22px "Helvetica Neue", Arial, sans-serif',l,5,M*.7,"right"),o.fillStyle=c,o.fillRect(-M+24,-T+94,M*2-48,3),d(n.name,0,8,'bold 92px Georgia, "Times New Roman", serif',l,3,M*2-70),o.fillStyle=c,o.fillRect(-M+24,T-72,M*2-48,1.5),d(`SERIES ${n.series}   ·   No. ${n.number}   ·   ${n.code}   ·   PERMANENCE A`,0,T-46,'italic 24px Georgia, "Times New Roman", serif',"#3b3731",3,M*2-80),d(`${n.chemistry.toUpperCase()} IN REFINED LINSEED OIL   ·   LIGHTFAST I   ·   NET 200 ML`,0,T-20,'15px "Helvetica Neue", Arial, sans-serif',"#4a443c",3,M*2-80),o.restore()};E(.5,!1),E(0,!0),E(1,!0);for(const _ of[.25,.75]){const y=h(_);o.fillStyle=c,o.fillRect(v-10,y-22,w+20,1.5),o.fillRect(v-10,y+22,w+20,1.5),d("ASHDOWN & VESEY  ·  ARTISTS' OIL COLOUR  ·  "+n.name+"  ·  MADE IN ENGLAND",x,y+1,'17px "Helvetica Neue", Arial, sans-serif',"#4a443c",4,w)}p(m,g);for(const _ of[.5,0,1])o.save(),o.translate((u(m)+u(g))/2,h(_)),_!==.5&&o.rotate(Math.PI),d(n.number,0,0,'bold 54px Georgia, "Times New Roman", serif',"rgba(250, 244, 228, 0.92)",2,u(g)-u(m)-20),o.restore();o.fillStyle=c,o.fillRect(u(so)-22,0,3,r),o.fillRect(u(is)-30,0,2,r);for(const _ of s2())o.strokeStyle="rgba(160, 164, 168, 0.85)",o.lineWidth=_.width,o.lineJoin="round",o.beginPath(),_.points.forEach(([y,A],M)=>M===0?o.moveTo(u(y),h(A)):o.lineTo(u(y),h(A))),o.stroke(),o.strokeStyle="rgba(90, 80, 64, 0.18)",o.lineWidth=_.width+5,o.stroke();for(let _=0;_<60;_+=1){const y=i()<.5?jo+i()*.2:so-i()*.12;o.fillStyle=`rgba(118, 94, 60, ${.03+i()*.05})`,o.beginPath(),o.ellipse(u(y),i()*r,10+i()*50,6+i()*30,i()*Math.PI,0,Math.PI*2),o.fill()}for(let _=0;_<5;_+=1){const y=u(so-.01-i()*.07),A=i()*r,M=o.createRadialGradient(y,A,2,y,A,34);M.addColorStop(0,`${n.swatch}cc`),M.addColorStop(1,`${n.swatch}00`),o.fillStyle=M,o.beginPath(),o.ellipse(y,A,34,22,i()*Math.PI,0,Math.PI*2),o.fill()}const S=new ce(e);return S.colorSpace=te,S.anisotropy=8,S}function s5(){const n=Jf/2,t=Qf/2,e=document.createElement("canvas");e.width=n,e.height=t;const o=e.getContext("2d"),i=l=>l*n,s=l=>(1-l)*t,r=(l,c,u,h)=>{o.fillStyle=`rgb(128, ${Math.round(u*255)}, ${Math.round(h*255)})`,o.fillRect(l,0,c-l,t)};r(0,i(so),.34,.04),r(0,i(jo),.4,.85),r(i(so),i(vi),.32,.85),r(i(vi),n,.45,0);for(let l=2;l<i(jo)-2;l+=3.5)o.fillStyle="rgb(70, 110, 215)",o.fillRect(l,0,1.2,t),o.fillStyle="rgb(200, 100, 215)",o.fillRect(l+1.4,0,1.2,t);for(const l of s2()){const c=()=>{o.beginPath(),l.points.forEach(([u,h],f)=>f===0?o.moveTo(i(u),s(h)):o.lineTo(i(u),s(h)))};o.lineJoin="round",o.lineCap="round",c(),o.strokeStyle="rgba(190, 90, 10, 0.5)",o.lineWidth=l.width*3+3,o.stroke(),c(),o.strokeStyle="rgba(40, 70, 190, 0.9)",o.lineWidth=l.width*.8+.6,o.stroke()}const a=new ce(e);return a.anisotropy=8,a}let d0=null,wc=null;const qm=new Map;function r5(n){const t=qm.get(n);if(t)return t;const e=au[n];wc??(wc=s5());const o={tube:new wt({map:i5(e,n),roughness:1,roughnessMap:wc,metalness:.72,metalnessMap:wc,bumpMap:wc,bumpScale:.9}),paint:new wt({color:e.tint,roughness:.2,metalness:0})};return qm.set(n,o),o}function a5(n=0){d0??(d0={tube:n5(),ooze:o5()});const t=(Math.floor(n)%au.length+au.length)%au.length,e=r5(t),o=new Et,i=new lt(d0.tube,e.tube);i.name="tube",i.castShadow=!0,i.receiveShadow=!0,o.add(i);const s=new lt(d0.ooze,e.paint);return s.name="paint",s.castShadow=!0,s.receiveShadow=!0,o.add(s),{group:o,dispose(){}}}const Fr={along:.62,out:.46},p0=[5904924,2046508,1779269,9067036,3811914,2762274,7227950],Ym=["NORTHERN MASTERS","THE COMPLETE ETCHINGS","CATALOGUE RAISONNÉ · II","ON COLOUR","THE GRAND TOUR","DRAWINGS OF THE SALON","A HISTORY OF THE FRESCO","STILL LIFE","THE ANTIQUE","LIGHT & SHADE","MARBLE","THE ACADEMY"],Qe=1024,al=6,Fo=96;let Or=null,zr=null,Kr=null,td=0;function l5(){const n=document.createElement("canvas");n.width=Qe,n.height=Qe;const t=n.getContext("2d");t.clearRect(0,0,Qe,Qe);const e="#e6c46a";for(let c=0;c<al;c+=1){const u=c*Fo;t.fillStyle=e;for(const h of[70,86,Qe-96,Qe-80])t.fillRect(h,u+10,6,Fo-20);t.font=`600 ${Math.round(Fo*.36)}px 'Cormorant Garamond', Georgia, serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(Ym[c*5%Ym.length],Qe/2,u+Fo/2+2),t.beginPath(),t.arc(Qe-150,u+Fo/2,Fo*.16,0,Math.PI*2),t.lineWidth=3,t.strokeStyle=e,t.stroke()}const o=al*Fo+16,i=Qe-o-16;t.strokeStyle=e,t.lineWidth=5,t.strokeRect(40,o+8,Qe-80,i-16),t.lineWidth=2,t.strokeRect(56,o+24,Qe-112,i-48),t.fillStyle=e,t.font="600 44px 'Cormorant Garamond', Georgia, serif",t.textAlign="center",t.fillText("THE PERMANENT COLLECTION",Qe/2,o+76),t.font="italic 400 28px 'Cormorant Garamond', Georgia, serif",t.fillText("Paintings, Drawings & Sculpture",Qe/2,o+116);const s=Qe/2-150,r=o+140,a=t.createLinearGradient(0,r,0,r+150);a.addColorStop(0,"#d9b98a"),a.addColorStop(1,"#8a6b48"),t.fillStyle=a,t.fillRect(s,r,300,150),t.fillStyle="#4a3a2a",t.beginPath(),t.moveTo(s,r+150),t.bezierCurveTo(s+80,r+70,s+150,r+120,s+210,r+80),t.bezierCurveTo(s+250,r+60,s+280,r+90,s+300,r+85),t.lineTo(s+300,r+150),t.fill(),t.fillStyle="#2e2a22",t.fillRect(s+60,r+60,10,60),t.beginPath(),t.arc(s+65,r+55,26,0,Math.PI*2),t.fill(),t.strokeStyle="#f2ead8",t.lineWidth=6,t.strokeRect(s-3,r-3,306,156);const l=new ce(n);return l.colorSpace=te,l.anisotropy=8,l}function c5(){const n=document.createElement("canvas");n.width=64,n.height=512;const t=n.getContext("2d");t.fillStyle="#ece3cf",t.fillRect(0,0,64,512);for(let o=0;o<512;o+=2){const i=Math.sin(o*12.9898)*43758.5453,s=200+Math.floor((i-Math.floor(i))*30);t.fillStyle=`rgb(${s}, ${s-10}, ${s-28})`,t.fillRect(0,o,64,1)}const e=new ce(n);return e.colorSpace=te,e.wrapS=We,e.wrapT=We,e}function u5(){return Kr||(Or=l5(),zr=c5(),Kr={cloth:new wt({color:16777215,vertexColors:!0,roughness:.86}),paper:new wt({map:zr,roughness:.92,vertexColors:!0}),print:new wt({map:Or,transparent:!0,alphaTest:.4,roughness:.4,metalness:.5,polygonOffset:!0,polygonOffsetFactor:-2})}),td+=1,Kr}function Ca(n,t){const e=n.getAttribute("position").count,o=new Float32Array(e*3);for(let i=0;i<e;i+=1)o[i*3]=t.r,o[i*3+1]=t.g,o[i*3+2]=t.b;return n.setAttribute("color",new qt(o,3)),n}function Zm(n,t,e,o,i){const s=n.getAttribute("uv");for(let r=0;r<s.count;r+=1)s.setXY(r,(t+s.getX(r)*o)/Qe,1-(e+(1-s.getY(r))*i)/Qe);return n}function h5(n=0){const t=new Et,e=u5(),o=[],i=[],s=[],r=f=>{const d=Math.sin((n+1)*12.9898+f*78.233)*43758.5453;return d-Math.floor(d)},a=5,l=.022;let c=0;for(let f=0;f<a;f+=1){const d=f===0,p=Fr.along*2*(d?1:1+.05+r(f*3)*.1),v=Fr.out*2*(d?1:1+.04+r(f*3+1)*.12),m=.1+r(f*3+2)*.05,g=d?0:(r(f*7)-.5)*.28,b=d?0:(r(f*11)-.5)*.12,x=d?0:(r(f*13)-.5)*.1,w=new bt(p0[(f+Math.floor(r(99)*p0.length))%p0.length]),E=r(f*17)<.5?-1:1,S=new It().makeRotationY(g).setPosition(b,c-m/2,x),_=m-l*2;for(const z of[1,-1])o.push(Ca(new ee(p,l,v).translate(0,z*(m/2-l/2),0),w).applyMatrix4(S));const y=.018,A=new ee(p-y,_,v-y*2).translate(-E*y/2,0,0),M=A.getAttribute("uv");for(let z=0;z<M.count;z+=1)M.setY(z,M.getY(z)*_*30);const T=f===2;i.push(Ca(A,T?new bt(1,.82,.45):new bt(1,1,1)).applyMatrix4(S));const R=new ie(m/2,m/2,v,16,1,!0,0,Math.PI).rotateX(Math.PI/2).rotateZ(-E*Math.PI/2+Math.PI/2).scale(.35,1,1).translate(E*p/2,0,0);o.push(Ca(R,w).applyMatrix4(S));const L=new ie(m/2+.001,m/2+.001,v*.96,16,1,!0,0,Math.PI).rotateX(Math.PI/2).rotateZ(-E*Math.PI/2+Math.PI/2).scale(.35,1,1).translate(E*(p/2+5e-4),0,0),U=L.getAttribute("uv");for(let z=0;z<U.count;z+=1){const O=U.getX(z),B=U.getY(z);U.setXY(z,E>0?1-B:B,E>0?O:1-O)}if(s.push(Zm(L,0,(f+n)%al*Fo,Qe,Fo).applyMatrix4(S)),f===1){const z=new le(.028,.34).translate(0,-.17,0).rotateX(.18).translate(p*.12,-m/2+l,v/2+.003);o.push(Ca(z,new bt(.62,.08,.1)).applyMatrix4(S))}c-=m}const u=new le(Fr.along*2*.86,Fr.out*2*.82).rotateX(-Math.PI/2).translate(0,.0012,0);s.push(Zm(u,24,al*Fo+8,Qe-48,Qe-al*Fo-16));const h=[];for(const[f,d]of[[o,e.cloth],[i,e.paper],[s,e.print]]){const p=f.map(g=>g.index?g.toNonIndexed():g);for(const g of p)g.getAttribute("color")||Ca(g,new bt(1,1,1));const v=Le(p,!1);for(const g of f)g.dispose();if(!v)throw new Error("books: could not merge");const m=new lt(v,d);m.castShadow=!0,m.receiveShadow=!0,t.add(m),h.push(m)}return{group:t,dispose(){for(const f of h)f.geometry.dispose();if(td-=1,td===0&&Kr){for(const f of Object.values(Kr))f.dispose();Or==null||Or.dispose(),zr==null||zr.dispose(),Kr=null,Or=null,zr=null}}}}const Km={along:.5,out:.5},_c=.76,f5=.03,ae=1024,d5=["IMP · CAES · AVRELIANVS · MAXIMVS · AVG · P · M · TR · P","DIVVS · SEVERINVS · PIVS · FELIX · AVG · COS · III","IMP · VALERIANVS · CONSTANS · P · F · AVG · S · C"];let ws=null,m0=0;function p5(){const n=document.createElement("canvas");n.width=ae,n.height=ae;const t=n.getContext("2d"),e=ae/2;t.fillStyle="#000",t.fillRect(0,0,ae,ae),t.fillStyle="#2a2a2a",t.beginPath(),t.arc(e,e,e*.95,0,Math.PI*2),t.fill(),t.strokeStyle="#8a8a8a",t.lineWidth=ae*.035,t.beginPath(),t.arc(e,e,e*.94,0,Math.PI*2),t.stroke(),t.fillStyle="#9a9a9a";const o=96;for(let u=0;u<o;u+=1){const h=u/o*Math.PI*2;t.beginPath(),t.arc(e+Math.cos(h)*e*.88,e+Math.sin(h)*e*.88,ae*.009,0,Math.PI*2),t.fill()}t.fillStyle="#b0b0b0",t.font=`700 ${Math.round(ae*.052)}px 'Cormorant Garamond', Georgia, serif`,t.textAlign="center",t.textBaseline="middle";const i=d5[0],s=Math.PI*1.55,r=Math.PI*.72;for(let u=0;u<i.length;u+=1){const h=r+u/(i.length-1)*s;t.save(),t.translate(e+Math.cos(h)*e*.77,e+Math.sin(h)*e*.77),t.rotate(h+Math.PI/2),t.fillText(i[u],0,0),t.restore()}t.save(),t.translate(e-ae*.03,e+ae*.02);const a=ae/1024*1.42;t.scale(a,a),t.fillStyle="#6a6a6a",t.beginPath(),t.moveTo(-60,120),t.bezierCurveTo(-40,200,-140,250,-230,270),t.bezierCurveTo(-120,300,60,300,150,270),t.bezierCurveTo(90,240,60,190,70,120),t.closePath(),t.fill(),t.fillStyle="#7a7a7a",t.beginPath(),t.moveTo(-40,60),t.bezierCurveTo(-50,110,-40,150,-30,200),t.lineTo(80,200),t.bezierCurveTo(70,150,80,110,90,70),t.closePath(),t.fill(),t.fillStyle="#a8a8a8",t.beginPath(),t.moveTo(-150,-40),t.bezierCurveTo(-170,-170,-40,-250,60,-210),t.bezierCurveTo(110,-190,135,-150,140,-110),t.bezierCurveTo(145,-95,142,-85,150,-70),t.lineTo(188,-8),t.bezierCurveTo(190,2,176,8,160,9),t.bezierCurveTo(168,20,172,30,160,40),t.bezierCurveTo(170,50,166,62,150,70),t.bezierCurveTo(152,95,132,112,100,114),t.bezierCurveTo(80,116,70,100,60,90),t.bezierCurveTo(10,110,-80,100,-120,50),t.closePath(),t.fill(),t.fillStyle="#c2c2c2",t.beginPath(),t.ellipse(75,-10,55,62,-.2,0,Math.PI*2),t.fill(),t.fillStyle="#6a6a6a",t.beginPath(),t.ellipse(104,-84,18,8,-.15,0,Math.PI*2),t.fill(),t.strokeStyle="#707070",t.lineWidth=7,t.lineCap="round",t.beginPath(),t.moveTo(142,26),t.lineTo(166,24),t.stroke(),t.beginPath(),t.arc(160,-8,9,Math.PI*.2,Math.PI*1.1),t.stroke(),t.strokeStyle="#c8c8c8",t.lineWidth=12,t.beginPath(),t.moveTo(78,-104),t.quadraticCurveTo(110,-118,138,-104),t.stroke(),t.strokeStyle="#cacaca",t.lineWidth=10,t.beginPath(),t.ellipse(-12,8,22,32,.2,0,Math.PI*2),t.stroke();for(let u=0;u<30;u+=1){const h=Math.sin(u*12.9898)*43758.5453,f=Math.sin(u*78.233)*24634.6345,d=-140+(h-Math.floor(h))*170,p=-190+(f-Math.floor(f))*200;if(d>30&&p>-130||Math.hypot(d- -10,p-8)<45)continue;const v=14+(h*7-Math.floor(h*7))*7;t.fillStyle="#c0c0c0",t.beginPath(),t.arc(d,p,v,0,Math.PI*2),t.fill(),t.fillStyle="#8c8c8c",t.beginPath(),t.arc(d+2,p+2,v*.35,0,Math.PI*2),t.fill()}t.fillStyle="#e0e0e0";for(let u=0;u<13;u+=1){const h=u/12,f=Math.PI*(.92+h*.95),d=Math.cos(f)*150-10,p=Math.sin(f)*140-70;for(const v of[-1,1])t.save(),t.translate(d,p),t.rotate(f+Math.PI+v*.5),t.beginPath(),t.ellipse(0,-20,9,24,0,0,Math.PI*2),t.fill(),t.restore()}t.strokeStyle="#c8c8c8",t.lineWidth=11;for(const u of[0,24])t.beginPath(),t.moveTo(-150,-30),t.bezierCurveTo(-195,20+u,-185,80+u,-225,130+u),t.stroke();t.restore();const l=document.createElement("canvas");l.width=ae,l.height=ae;const c=l.getContext("2d");return c.filter=`blur(${Math.round(ae*.0032)}px)`,c.drawImage(n,0,0),l}function m5(){const n=p5(),t=n.getContext("2d").getImageData(0,0,ae,ae).data,e=new Float32Array(ae*ae);for(let c=0;c<ae*ae;c+=1)e[c]=t[c*4]/255;const o=document.createElement("canvas");o.width=ae,o.height=ae;const i=o.getContext("2d"),s=i.createImageData(ae,ae);for(let c=0;c<ae;c+=1)for(let u=0;u<ae;u+=1){const h=c*ae+u,f=e[h],d=Math.sin(u*.0131+c*.0047)*.5+Math.sin(u*-.0063+c*.0158+1.7)*.35+Math.sin((u+c)*.0231+4.1)*.15,p=Math.max(0,Math.min(1,(.2-f)/.12)),v=Math.max(0,Math.min(1,d*2.2-.7)),m=Math.max(p,v*.7),g=Math.max(0,Math.min(1,(f-.5)*2.6)),b=150*(1-m)+62*m+80*g,x=96*(1-m)+132*m+64*g,w=52*(1-m)+110*m+34*g;s.data[h*4]=Math.min(255,b),s.data[h*4+1]=Math.min(255,x),s.data[h*4+2]=Math.min(255,w),s.data[h*4+3]=255}i.putImageData(s,0,0);const r=new ce(n),a=new ce(o);a.colorSpace=te,a.anisotropy=8;const l=new wt({map:a,bumpMap:r,bumpScale:3,metalness:.45,roughness:.5});return{height:e,bump:r,colour:a,material:l}}function g5(n,t,e){const o=Math.min(ae-1,Math.max(0,Math.round(t*(ae-1)))),i=Math.min(ae-1,Math.max(0,Math.round((1-e)*(ae-1))));return n[i*ae+o]}function v5(n=0){ws??(ws=m5()),m0+=1;const{height:t,material:e}=ws,o=new Et,i=E=>{const S=Math.sin((n+1)*12.9898+E*78.233)*43758.5453;return S-Math.floor(S)},s=E=>_c*(1+Math.sin(E*2+i(1)*6)*.025+Math.sin(E*5+i(2)*6)*.012-Math.max(0,Math.sin(E*1+i(3)*6)-.96)*1.5),r=48,a=128,l=[],c=[],u=[];let h=-1/0;const f=(E,S)=>{const _=S/a*Math.PI*2,y=E/r*s(_)*.985,A=Math.cos(_)*y,M=Math.sin(_)*y,T=.5+A/(_c*2),R=.5-M/(_c*2),U=(1-(y/_c)**2)*.012+g5(t,T,R)*f5;return[A,U,M,T,R]};for(let E=0;E<=r;E+=1)for(let S=0;S<a;S+=1){const[_,y,A,M,T]=f(E,S);l.push(_,y,A),c.push(M,T),h=Math.max(h,y)}for(let E=0;E<r;E+=1)for(let S=0;S<a;S+=1){const _=E*a+S,y=E*a+(S+1)%a,A=(E+1)*a+S,M=(E+1)*a+(S+1)%a;u.push(_,y,A,y,M,A)}const d=r*a,p=l.length/3,v=[[.995,-.005],[1.01,-.03],[1.015,-.12*.5],[1,-.12+.02],[.97,-.12]];for(const[E,S]of v)for(let _=0;_<a;_+=1){const y=_/a*Math.PI*2,A=s(y)*E;l.push(Math.cos(y)*A,S,Math.sin(y)*A),c.push(.5+Math.cos(y)*.49,.5-Math.sin(y)*.49)}const m=(E,S)=>{for(let _=0;_<a;_+=1){const y=E+_,A=E+(_+1)%a,M=S+_,T=S+(_+1)%a;u.push(y,A,M,A,T,M)}};m(d,p);for(let E=0;E<v.length-1;E+=1)m(p+E*a,p+(E+1)*a);const g=l.length/3;l.push(0,-.12,0),c.push(.5,.5);const b=p+(v.length-1)*a;for(let E=0;E<a;E+=1)u.push(g,b+E,b+(E+1)%a);const x=new $t;x.setAttribute("position",new Dt(l,3)),x.setAttribute("uv",new Dt(c,2)),x.setIndex(u),x.translate(0,-h,0),x.computeVertexNormals();const w=new lt(x,e);return w.castShadow=!0,w.receiveShadow=!0,w.rotation.y=i(4)*Math.PI*2,o.add(w),{group:o,dispose(){x.dispose(),m0-=1,m0===0&&ws&&(ws.material.dispose(),ws.bump.dispose(),ws.colour.dispose(),ws=null)}}}const Xo=.5,Mr=.7,Nu=.035,g0=3.5;function zs(n){return n.index?n.toNonIndexed():n}function jm(n,t){const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Ia(n,t,e,o=1){const i=new ln,s=72,r=.02+t*.12,a=.015+t*.08,l=jm(e,1)*Math.PI*2,c=jm(e,2)*Math.PI*2;for(let h=0;h<=s;h+=1){const f=h/s*Math.PI*2,d=n*(1+r*Math.sin(2*f+l)+a*Math.sin(3*f+c)),p=Math.cos(f)*d*o,v=Math.sin(f)*d;h===0?i.moveTo(p,v):i.lineTo(p,v)}const u=new bn(i,{depth:Nu,bevelEnabled:!0,bevelThickness:.005,bevelSize:.006,bevelSegments:1,curveSegments:1});return u.rotateX(-Math.PI/2),u.translate(0,-Nu-.005,0),zs(u)}function v0(n,t){const e=new zn(n,!1,"centripetal");return zs(new $n(e,Math.max(12,n.length*10),t,6,!1))}function x0(n,t){return zs(new dn(t,t*.28,5,12).translate(n.x,n.y,n.z))}function Jm(n,t,e){return[-1,1].map(o=>zs(new Xe(.016,8,3,0,Math.PI*2,0,Math.PI/2).scale(1,.45,1).translate(n+o*e*.07,.001,t)))}function x5(n){const{radius:t,period:e,phase:o,wire:i}=n,s=new Et;s.name="mobile";const r=new wt({color:789517,roughness:.42,metalness:.55}),a=R=>new wt({color:R,roughness:.58,metalness:.05}),l=a(11805467),c=a(15262420),u=a(1315860),h=a(14722069),f=a(1917322),d=[r,l,c,u,h,f],p=(R,L)=>{const U=Le(R,!1);for(const O of R)O.dispose();const z=new lt(U,L);return z.castShadow=!0,z.receiveShadow=!0,z},v=new Et;s.add(v);const m=t-Mr*.55,g=t-Mr-.04,b=.46,x=v0([new P(m,-Nu-.02,0),new P(g,-.03,0),new P(t*.45,b*.72,0),new P(0,b,0),new P(-t*.45,b*.72,0),new P(-g,-.03,0),new P(-m,-Nu-.02,0)],.016),w=x0(new P(0,b+.05,0),.035),E=zs(new ie(.006,.006,g0-b-.08,5).translate(0,(g0+b+.08)/2,0));v.add(p([x,w,E,...Jm(t-Mr*.7,0,1),...Jm(-(t-Mr*.7),0,1)],r)),v.add(p([Ia(Mr,.25,1).translate(t,0,0)],l)),v.add(p([Ia(Mr*.99,.3,2).translate(-t,0,0)],c));const S=new Et;S.position.y=g0,s.add(S);const _=.86,y=.46;S.add(p([v0([new P(-1.18,-.16,0),new P(-1.18*.55,.02,0),new P(0,.08,0),new P(_*.6,.03,0),new P(_,-.05,0)],.011),x0(new P(0,.12,0),.026),zs(new ie(.005,.005,y,5).translate(_,-.05-y/2,0)),zs(new ie(.006,.006,i,5).translate(0,.15+i/2,0))],r));const A=(R,L)=>R.rotateX(Math.PI/2-.25).rotateY(L);S.add(p([A(Ia(.42,1.2,3,1.35),.4).translate(-1.18-.34,-.3,0)],u));const M=new Et;M.position.set(_,-.05-y,0),S.add(M),M.add(p([v0([new P(-.62,-.1,0),new P(-.3,.02,0),new P(0,.05,0),new P(.42,-.02,0),new P(.52,-.08,0)],.009),x0(new P(0,.06,0),.02)],r)),M.add(p([A(Ia(.28,1.4,4,1.25),-.3).translate(-.62-.22,-.2,0)],h)),M.add(p([A(Ia(.2,1,5,1.4),.9).translate(.52+.16,-.16,0)],f));const T=R=>{const L=o-Math.PI*2*R/e;v.rotation.y=-L,S.rotation.y=R*(Math.PI*2)/23+1.1,M.rotation.y=-R*(Math.PI*2)/9.5};return T(0),{group:s,update:T,dispose(){s.traverse(R=>{R instanceof lt&&R.geometry.dispose()});for(const R of d)R.dispose()}}}const Wa={flipped:{along:.62,out:.86},fresco:{along:1.5,out:1},palette:{along:1.02,out:.66},brush:{along:.4,out:1.15},pencil:{along:1.375,out:.17},tin:{along:.72,out:.72},figure:{along:.92,out:.34},tread:{along:1.32,out:1.32},chandelier:{along:.86,out:.86},foam:{along:.75,out:.75},crate:{along:Iu.along,out:Iu.out},capital:{along:pi.along,out:pi.out},tube:{along:Zf.along,out:Zf.out},books:{along:Fr.along,out:Fr.out},coin:{along:Km.along,out:Km.out},leaf:{along:Xo,out:Xo}};function La(n){switch(n){case"tin":return 1.15;case"crate":return Iu.deep;case"capital":return .75;case"books":return .55;default:return .45}}const M5=["chandelier","leaf"],Ee=2.15,Qi=Ot.length-Ee*2,xl=Ot.depth-Ee*2,la=(Qi+xl)*2;function Qm(n){let t=n%la;return t<0&&(t+=la),t<Qi?{x:Ee+t,z:Ee,facing:{x:0,z:-1}}:(t-=Qi,t<xl?{x:Ot.length-Ee,z:Ee+t,facing:{x:1,z:0}}:(t-=xl,t<Qi?{x:Ot.length-Ee-t,z:Ot.depth-Ee,facing:{x:0,z:1}}:(t-=Qi,{x:Ee,z:Ot.depth-Ee-t,facing:{x:-1,z:0}})))}const y5=jt.jump.speed*jt.jump.speed/(2*jt.jump.gravity),w5=y5-.12;function _5(n,t){if(n!=="flipped")return Wa[n];const e=bo[t%bo.length];return{along:e.widthMetres/2+.1,out:e.heightMetres/2+.1}}function Sc(n,t,e){const{along:o,out:i}=_5(n,t);if(M5.includes(n))return{halfX:o,halfZ:o};const s=e.z!==0;return{halfX:s?o:i,halfZ:s?i:o}}function tg(n,t){const e=Math.max(0,Math.abs(n.x-t.x)-n.halfX-t.halfX),o=Math.max(0,Math.abs(n.z-t.z)-n.halfZ-t.halfZ);return Math.hypot(e,o)}function eg(n,t){const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function ng(n,t){const e=eg(t,3),o=eg(t,7);switch(n){case"hop":return{gap:1.3+e*.35,rise:.8+o*.12};case"long":return{gap:1.95+e*.25,rise:.12+o*.2};case"sprint":return{gap:2.95+e*.3,rise:-.15+o*.25}}}const zi=["palette","crate","flipped","tin","books","figure","capital","pencil","tube","flipped","coin","palette","brush","crate","tin","books","flipped","figure","capital","coin","pencil","tube","palette"];class S5{constructor(t){ho(this,"steps",[]);ho(this,"loop",0);ho(this,"walked",0);ho(this,"paintings",0);this.start=t}get last(){return this.steps[this.steps.length-1]}up(t){return Math.min(1,Math.max(0,(t-Pe)/(Cu-Pe)))}art(t){return t!=="flipped"?0:(this.paintings+=1,(this.paintings*7+3)%bo.length)}put(t,e,o,i,s,r={}){const a=this.art(t),l={x:e,z:o,top:i,facing:s,kind:t,...Sc(t,a,s),up:this.up(i),run:r.run??!1,leap:r.leap??!1,crossing:r.crossing??!1,...t==="flipped"?{art:a}:{},...r.bounce?{bounce:r.bounce}:{},...r.ride?{ride:!0}:{},...r.around?{around:r.around}:{}};return this.steps.push(l),l}neo(t,e,o,i,s){const r=this.last,{facing:a}=r,l={x:-a.z,z:a.x},c={x:-a.x,z:-a.z},u=_=>Math.abs(l.x)*_.halfX+Math.abs(l.z)*_.halfZ,h=_=>Math.abs(c.x)*_.halfX+Math.abs(c.z)*_.halfZ,f=(_,y)=>({x:r.x+l.x*_+c.x*(y-Ee),z:r.z+l.z*_+c.z*(y-Ee)}),d=Sc(e,0,a),p=u(r)+og+bc/2,v=p+bc/2+og+u(d),m=Ee+Math.max(h(r),h(d))+o,g=f(p-bc/2,ig),b=f(p+bc/2,m),x=m-ig,w=r.top+T5;r2.push({kind:t,minX:Math.min(g.x,b.x),maxX:Math.max(g.x,b.x),minZ:Math.min(g.z,b.z),maxZ:Math.max(g.z,b.z),top:w,bottom:w-x*(t==="canvas"?E5:A5),facing:a,along:l});const E=f(v,Ee),S=this.put(e,E.x,E.z,r.top+i,a,{run:s,leap:!0,around:f(p,m+b5)});return this.loop+=v,S}mobile(t,e,o,i){const r=this.last.top+i,a=Ot.depth/2;Uu={x:t,z:a,top:r,radius:e,period:o,phase:0},this.put("leaf",t,a-e,r,{x:0,z:-1},{leap:!0,crossing:!0}),this.put("leaf",t,a+e,r,{x:0,z:1},{crossing:!0,ride:!0})}wall(t,e,o={}){const i=this.steps.length,s=ng(e,i),r=Math.min(w5,o.rise??s.rise),a=Sc(t,0,o.across?{z:0}:{z:1}),l=Math.min(a.halfX,a.halfZ)<.3,c=o.gap??(l&&e==="hop"?Math.min(s.gap,1.4):s.gap),u=t==="flipped"?((this.paintings+1)*7+3)%bo.length:0,h=m=>o.across?{x:m.z,z:m.x}:m,f=this.last;let d=this.loop,p=1/0;for(let m=this.loop+.1;m<this.loop+10;m+=.02){const g=Qm(m),b=Sc(t,u,h(g.facing)),x=tg(f,{x:g.x,z:g.z,...b})-c;if(x>=0&&x<.12){d=m;break}x>-.1&&Math.abs(x)<p&&(p=Math.abs(x),d=m)}this.loop=d;const v=Qm(d);return this.put(t,v.x,v.z,f.top+r,h(v.facing),{run:e==="sprint",leap:e!=="hop"})}loose(t="hop"){const e={...this.wall("flipped",t),loose:!0};return this.steps[this.steps.length-1]=e,e}walkTo(t,e=()=>"hop"){let o=0;for(;this.loop<t-2.2&&o<40;){const i=zi[(this.walked*5+this.start)%zi.length];this.walked+=1;const s=e(this.walked),r=i===this.last.kind?zi[(this.walked*5+this.start+1)%zi.length]:i,a=this.loop,l=this.last,c=this.wall(r,s);Math.abs(tg(l,c)-ng(s,this.steps.length-1).gap)>.3&&r!=="tin"&&(this.steps.pop(),r==="flipped"&&(this.paintings-=1),this.loop=a,this.wall(l.kind==="tin"?"palette":"tin",s)),o+=1}}climbTo(t,e){let o=0;for(;this.loop<t-2.2&&o<40;){const i=Math.max(1,(t-this.loop)/3.1),s=(e-this.last.top)/i,r=this.last,a=s<=.6&&!r.run?"sprint":s>.72||r.run?"hop":"long",l=zi[(this.walked*5+this.start)%zi.length];this.walked+=1;const c=u=>u===this.last.kind?zi[(this.walked*5+this.start+1)%zi.length]:u;this.wall(c(l),a),o+=1}}resume(t){this.loop=t}}const og=.5,bc=.16,ig=.2,b5=.35,T5=3.3,E5=1.39,A5=1.2,r2=[];let Uu=null,a2=null,qo=null;const R5=.92,sg=.46;function P5(n,t,e,o,i){const s=n.last,r=Math.atan2(s.z-e,s.x-t),a=Math.min(i,Math.PI*1.88),l=Math.max(5,Math.round(a/R5)),c=a/l;qo={cx:t,cz:e,inner:Math.max(.95,o-1.05),outer:o+1.05,startAngle:r-c*.5,turn:c,rise:sg,base:s.top,treads:l};for(let u=1;u<=l;u+=1){const h=r+c*(u-1);n.put("tread",t+Math.cos(h)*o,e+Math.sin(h)*o,s.top+sg*u,{x:Math.cos(h),z:Math.sin(h)})}}const C5=9.5,I5=56.2,L5=4,D5=2.4,N5=1.1,U5=3.25,F5=1.05,O5=1.55,z5=11,_s=(n,t)=>t*la+(n-Ee),B5=(n,t)=>t*la+Qi+(n-Ee),M0=(n,t)=>t*la+Qi*2+xl+(Ot.depth-Ee-n),Ss=(n,t)=>t*la+Qi+xl+(Ot.length-Ee-n);function k5(){const n=new S5(0);n.put("palette",14.6,Ee,Pe+2.05,{x:0,z:-1}),n.resume(_s(14.6,0)),n.wall("tin","hop",{gap:1.2}),n.walkTo(Ss(11.5,0),g=>g===5?"long":"hop"),n.wall("fresco","hop"),n.wall("tin","sprint"),n.walkTo(M0(5.2,0)),n.wall("fresco","hop"),n.wall("palette","sprint");const t=n.wall("brush","hop"),e=n.put("chandelier",t.x,Ot.depth/2,t.top+.3,{x:0,z:-1},{leap:!0,crossing:!0});n.put("palette",e.x-.3,Ot.depth-Ee,e.top+.45,{x:0,z:1},{leap:!0,crossing:!0}),n.resume(Ss(e.x-.3,1)),n.walkTo(_s(1.4,2));const o=n.wall("fresco","hop"),i=n.put("foam",o.x+o.halfX+1+Wa.foam.along,Ee,o.top-2.4,{x:0,z:-1},{bounce:9.2}),s=n.put("flipped",0,Ee,i.top+3.5,{x:0,z:-1});n.steps[n.steps.length-1]={...s,x:i.x+i.halfX+1.35+s.halfX},n.resume(_s(n.last.x,2));const r=n.wall("fresco","hop");n.put("fresco",r.x,Ot.depth-Ee-.35,r.top-1.45,{x:0,z:1},{run:!0,leap:!0}),n.resume(Ss(n.last.x,2)),n.walkTo(Ss(10.6,2)),n.neo("canvas","capital",.6,.2,!1),n.walkTo(B5(3.6,3));const a=n.wall("brush","hop");let l=a;const c=4.72,u=a.x-a.halfX-3-Wa.chandelier.along;for(let g=0;g<2;g+=1)l=n.put("chandelier",u-c*g,Ot.depth/2,l.top+.08,{x:1,z:0},{run:!0,leap:!0,crossing:!0});n.put("fresco",l.x-l.halfX-3-Wa.fresco.out,Ot.depth/2,l.top+.2,{x:-1,z:0},{run:!0,leap:!0,crossing:!0}),n.resume(M0(Ot.depth/2-1.5,3)),n.walkTo(_s(13.9,4),g=>g%4===0?"long":"hop");const h=n.wall("tube","hop");n.mobile(Math.min(16.6,Math.max(15.6,h.x+.4)),O5,z5,.3);const f=n.put("capital",n.last.x,Ot.depth-Ee,n.last.top+.55,{x:0,z:1});n.resume(Ss(f.x,4)),n.walkTo(M0(9.4,4),g=>g%4===0?"long":"hop"),n.wall(n.last.kind==="tin"?"palette":"tin","hop"),P5(n,7.4,Ot.depth/2,1.85,Math.PI*1.58);const d=n.last;n.put("figure",d.x-.9,Ot.depth-Ee+.1,d.top+.6,{x:0,z:1}),n.resume(Ss(n.last.x,4)),n.loose(),n.loose(),n.walkTo(_s(9.5,5),g=>g%3===0?"sprint":"hop");for(let g=0;g<3;g+=1)n.wall("pencil","hop",{across:!0,gap:1.25});n.climbTo(Ss(13.2,5),I5),n.wall("fresco","hop"),n.neo("tapestry","tin",1.15,.15,!0),n.walkTo(_s(2.6,6)),n.walkTo(_s(15.6,6),g=>g%2===0?"sprint":"hop");const p=n.last,v=n.put("fresco",Ot.length-Ee-Wa.fresco.along+.25,Ot.depth/2-.3,p.top+.7,{x:0,z:1});return a2={x:v.x-v.halfX-D5,z:v.z,sill:v.top+N5,lintel:v.top+U5,half:F5,rail:.3,depth:.18},n.steps}const Fu=k5();Fu.length;function lu(){return Fu}function rg(){return qo?{x:qo.cx,z:qo.cz,base:qo.base+qo.rise,height:qo.rise*(qo.treads-1)}:null}function G5(){return qo?{...qo,landing:.5}:null}function H5(){return Fu[Fu.length-1]}function V5(){const n=H5();return{x:n.x-n.halfX-C5,z:n.z,top:n.top+L5}}const ed=V5(),ss=ed.top,In={x:ed.x,z:ed.z};function W5(){return r2}function X5(){return Uu}function Zd(){return a2}function ag(n){if(!Uu)return[];const{x:t,z:e,top:o,radius:i,period:s,phase:r}=Uu,a=r-Math.PI*2*n/s;return[0,1].map(l=>({x:t+Math.cos(a+Math.PI*l)*i,z:e+Math.sin(a+Math.PI*l)*i,top:o}))}const _o=50.8,_i=53.2,{length:nd,depth:od}=Ot;function $5(n){const t=(c,u,h)=>{const f=Math.min(1,Math.max(0,(h-c)/(u-c)));return f*f*(3-2*f)},e=t(_o-1.2,_o+.8,n)*(1-t(_i-.6,_i+1.4,n)),o=t(_i,_i+2,n),a=((c,u,h)=>[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h])([.36,.28,.24],[.52,.42,.43],e);return{density:e*.1+o*.005,colour:a}}function q5(n){const t=(i,s,r)=>{const a=Math.min(1,Math.max(0,(r-i)/(s-i)));return a*a*(3-2*a)},e=t(Pe+2,_o-5,n),o=t(_o-.5,_i+.5,n);return{density:.03*e*(1-o),falloff:7,colour:[.42,.045,.05]}}function Y5(n=256){const t=new Uint8Array(n*n*4),e=(s,r)=>{const a=new Float32Array(s*s);for(let l=0;l<a.length;l+=1){const c=Math.sin((l+1)*12.9898+r*78.233)*43758.5453;a[l]=c-Math.floor(c)}return(l,c)=>{const u=l/n*s,h=c/n*s,f=Math.floor(u),d=Math.floor(h),p=u-f,v=h-d,m=p*p*(3-2*p),g=v*v*(3-2*v),b=(E,S)=>a[S%s*s+E%s],x=b(f,d)+(b(f+1,d)-b(f,d))*m,w=b(f,d+1)+(b(f+1,d+1)-b(f,d+1))*m;return x+(w-x)*g}},o=[e(4,1),e(8,2),e(16,3),e(32,4),e(64,5)];for(let s=0;s<n;s+=1)for(let r=0;r<n;r+=1){let a=0,l=.5,c=0;for(const f of o)a+=f(r,s)*l,c+=l,l*=.5;const u=Math.round(a/c*255),h=(s*n+r)*4;t[h]=u,t[h+1]=u,t[h+2]=u,t[h+3]=255}const i=new oh(t,n,n,lo);return i.wrapS=We,i.wrapT=We,i.magFilter=Ge,i.minFilter=Qo,i.generateMipmaps=!0,i.needsUpdate=!0,i}const Z5=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,K5=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uLevel;
uniform float uFrac;
uniform vec2 uLight;
varying vec3 vWorld;
void main() {
  vec2 p = vWorld.xz;
  float a = texture2D(uNoise, p * 0.045 + vec2(uTime * 0.004, uTime * 0.0025) + uFrac * 0.07).r;
  float b = texture2D(uNoise, p * 0.11 - vec2(uTime * 0.006, -uTime * 0.004) + a * 0.25).r;
  float field = a * 0.7 + b * 0.45;
  // Denser towards the middle of the layer's thickness, thinner at both
  // faces, and the top face lumpy: only the tall billows get that high.
  float need = mix(0.42, 0.78, uFrac) - (1.0 - abs(uFrac - 0.35) * 1.6) * 0.1;
  float body = smoothstep(need, need + 0.16, field);
  // Thinner against the walls, so the layer does not end in a hard line
  // along the plaster.
  float inside = smoothstep(0.0, 1.4, p.x) * smoothstep(0.0, 1.4, ${nd.toFixed(1)} - p.x)
               * smoothstep(0.0, 1.2, p.y) * smoothstep(0.0, 1.2, ${od.toFixed(1)} - p.y);
  float alpha = body * inside * mix(0.5, 0.7, uFrac) * uLevel;
  if (alpha < 0.004) discard;

  vec3 under = vec3(0.19, 0.075, 0.09);
  vec3 over = vec3(0.98, 0.86, 0.72);
  vec3 colour = mix(under, over, smoothstep(0.1, 1.0, uFrac));
  // The light at the top of the room, nearest over its own spot.
  float nearLight = exp(-dot(p - uLight, p - uLight) * 0.02);
  colour += vec3(0.5, 0.42, 0.3) * nearLight * uFrac;
  // Edges thinner and brighter, the way a lit cloud's rim is.
  colour += vec3(0.3, 0.26, 0.24) * (1.0 - body) * uFrac;
  // And the red, underneath, from what is below.
  colour += vec3(0.28, 0.02, 0.02) * (1.0 - uFrac) * (1.0 - uFrac);
  gl_FragColor = vec4(colour, alpha);
}
`,lg=`
uniform float uTime;
uniform vec3 uEye;
uniform vec3 uBox;
uniform float uPixels;
uniform float uRise;
attribute float aSeed;
varying float vSeed;
varying float vFade;
void main() {
  // Each point lives in a box that travels with the eye and wraps, so
  // there are always some near and none are ever made or lost.
  vec3 p = position * uBox;
  p.y += uTime * uRise * (0.6 + aSeed * 0.8);
  p.x += sin(uTime * 0.3 + aSeed * 40.0) * 0.6;
  p.z += cos(uTime * 0.23 + aSeed * 23.0) * 0.6;
  vec3 world = uEye + mod(p - uEye + uBox * 0.5, uBox) - uBox * 0.5;
  vec4 view = viewMatrix * vec4(world, 1.0);
  gl_Position = projectionMatrix * view;
  float far = length(world - uEye);
  vFade = 1.0 - smoothstep(uBox.x * 0.25, uBox.x * 0.5, far);
  vSeed = aSeed;
  gl_PointSize = clamp((0.02 + aSeed * 0.03) * uPixels / -view.z, 1.0, 9.0);
}
`,j5=`
uniform float uAmount;
varying float vSeed;
varying float vFade;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  // A flake, not a dot: squashed and turned.
  float turn = vSeed * 6.28;
  vec2 r = mat2(cos(turn), -sin(turn), sin(turn), cos(turn)) * c;
  float d = length(r * vec2(1.0, 2.2));
  if (d > 0.5) discard;
  // Pale, the way ash is: grey flakes are what show against a dark room.
  gl_FragColor = vec4(vec3(0.42, 0.37, 0.36), (1.0 - d * 2.0) * 0.75 * uAmount * vFade);
}
`,J5=`
uniform float uAmount;
uniform float uLight;
uniform float uTime;
varying float vSeed;
varying float vFade;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c) * 4.0;
  if (d > 1.0) discard;
  float flicker = 0.6 + 0.4 * sin(uTime * (4.0 + vSeed * 7.0) + vSeed * 50.0);
  // Red coals below the cloud, pale gold motes above it.
  vec3 ember = vec3(1.0, 0.28, 0.08) * flicker;
  vec3 mote = vec3(1.0, 0.92, 0.78) * (0.7 + 0.3 * flicker);
  vec3 colour = mix(ember, mote, uLight);
  gl_FragColor = vec4(colour * exp(-d * 3.0) * vFade * max(uAmount, uLight) * 1.6, 1.0);
}
`;function Q5(){const n=new Et,t=Y5(),e={value:0},o={value:0},i=14,s=[];for(let z=0;z<i;z+=1){const O=z/(i-1),B=new Se({vertexShader:Z5,fragmentShader:K5,uniforms:{uNoise:{value:t},uTime:o,uLevel:e,uFrac:{value:O},uLight:{value:new st(In.x,In.z)}},transparent:!0,depthWrite:!1,side:we});B.customProgramCacheKey=()=>"cloud-slice",s.push(B);const N=new lt(new le(nd-.1,od-.1),B);N.rotation.x=-Math.PI/2,N.position.set(nd/2,_o+(_i-_o)*O,od/2),N.renderOrder=3,n.add(N)}const r=128,a=document.createElement("canvas");a.width=r,a.height=r;const l=a.getContext("2d"),c=l.createImageData(r,r),u=(z,O,B,N)=>{const H=(ct,vt)=>{const V=Math.sin((ct%B+vt%B*57+N*131)*12.9898)*43758.5453;return V-Math.floor(V)},G=z/r*B,$=O/r*B,Q=Math.floor(G),j=Math.floor($),X=G-Q,at=$-j,rt=X*X*(3-2*X),ft=at*at*(3-2*at),et=H(Q,j)+(H(Q+1,j)-H(Q,j))*rt,q=H(Q,j+1)+(H(Q+1,j+1)-H(Q,j+1))*rt;return et+(q-et)*ft};for(let z=0;z<r;z+=1)for(let O=0;O<r;O+=1){const B=(O-r/2)/(r/2),N=(z-r/2)/(r/2),H=Math.hypot(B,N<0?N:N*1.5),G=u(O,z,4,1)*.5+u(O,z,8,2)*.3+u(O,z,16,3)*.2,$=Math.max(0,1-H*(.75+G*.7)),Q=Math.min(1,Math.pow($,1.3)*1.8),j=.72+.28*Math.max(0,-N)+G*.1,X=(z*r+O)*4;c.data[X]=Math.min(255,255*j),c.data[X+1]=Math.min(255,250*j),c.data[X+2]=Math.min(255,252*j),c.data[X+3]=Math.round(Q*235)}l.putImageData(c,0,0);const h=new ce(a);h.colorSpace=te;const f=[],d=[];[{x:5.2,z:5,tall:5.5},{x:14.6,z:4.6,tall:4.2},{x:8.4,z:6.8,tall:3.2},{x:16.8,z:6.6,tall:3.6},{x:3.4,z:6.2,tall:2.6}].forEach((z,O)=>{const B=7+Math.round(z.tall*1.4);for(let N=0;N<B;N+=1){const H=N/Math.max(1,B-1),G=at=>{const rt=Math.sin((O*31+N)*at)*43758.5453;return rt-Math.floor(rt)},$=new Fd({map:h,color:new bt(.62,.46,.5).lerp(new bt(1,.93,.8),Math.pow(H,.7)),transparent:!0,depthWrite:!1,fog:!1,opacity:0});d.push($);const Q=new Cv($),j=(3.6+G(1.7)*2)*(1.15-H*.4);Q.scale.set(j,j,1);const X=new P(z.x+(G(2.3)-.5)*1.8*(1-H*.5),_i-.6+H*z.tall,z.z+(G(3.1)-.5)*1.2);if(Math.hypot(X.x-In.x,X.y-ss,X.z-In.z)<6){$.dispose(),d.pop();continue}Q.position.copy(X),Q.renderOrder=4,n.add(Q),f.push({sprite:Q,from:X,rate:.05+G(4.7)*.05})}});const v=900,m=new $t,g=new Float32Array(v*3),b=new Float32Array(v);for(let z=0;z<v;z+=1){const O=B=>{const N=Math.sin((z+1)*12.9898+B*78.233)*43758.5453;return N-Math.floor(N)};g[z*3]=O(1),g[z*3+1]=O(2),g[z*3+2]=O(3),b[z]=O(4)}m.setAttribute("position",new qt(g,3)),m.setAttribute("aSeed",new qt(b,1));const x={value:new P},w={value:new P(22,16,13)},E={value:900},S={value:0},_={value:0},y={value:0},A=new Se({vertexShader:lg,fragmentShader:j5,uniforms:{uTime:o,uEye:x,uBox:w,uPixels:E,uRise:{value:.35},uAmount:S},transparent:!0,depthWrite:!1}),M=new Se({vertexShader:lg,fragmentShader:J5,uniforms:{uTime:o,uEye:x,uBox:w,uPixels:E,uRise:{value:.5},uAmount:_,uLight:y},transparent:!0,depthWrite:!1,blending:Tn}),T=new us(m,A);T.frustumCulled=!1,n.add(T);const R=Math.floor(v/8),L=new $t;L.setAttribute("position",new qt(g.slice(0,R*3),3)),L.setAttribute("aSeed",new qt(b.slice(0,R),1));const U=new us(L,M);return U.frustumCulled=!1,n.add(U),{group:n,setLevel(z){e.value=z,n.visible=z>0},update(z,O,B){if(e.value<=0)return;o.value=z,x.value.copy(O),E.value=B;const N=($,Q,j)=>{const X=Math.min(1,Math.max(0,(j-$)/(Q-$)));return X*X*(3-2*X)},H=N(Pe+8,_o-6,O.y),G=N(_o,_i+1.5,O.y);S.value=H*(1-G)*e.value,_.value=H*(1-G)*e.value,y.value=G*e.value;for(const $ of f){const Q=Math.sin(z*$.rate+$.from.x)*.9;$.sprite.position.set($.from.x+Q,$.from.y,$.from.z+Math.cos(z*$.rate*.7)*.4),$.sprite.material.opacity=N(_o-10,_o-2,O.y)*e.value}},dispose(){t.dispose(),h.dispose();for(const z of[...s,...d,A,M])z.dispose();m.dispose(),L.dispose(),n.traverse(z=>{z instanceof lt&&z.geometry.dispose()})}}}const tA=.49,bs=.075,yr={x:.42,z:Ot.depth-1.5},eA=3*9.81/(2*tA),nA=1.6,oA=1/30,cg=new P(1,0,0),iA=.54,l2=32;function sA(n){const t=n.map(o=>o.index?o.toNonIndexed():o),e=Le(t,!1);for(const o of n)o.dispose();for(const o of t)o.dispose();if(!e)throw new Error("extinguisher: could not merge — check attribute sets");return e}function Tc(n,t=l2){return new an(n.map(([e,o])=>new st(e,o)),t)}function Ec(n,t,e,o,i,s=16){return new ie(n,n,e-t,s).rotateZ(-Math.PI/2).translate((t+e)/2,o,i)}function ug(n,t,e,o,i,s=16){return new ie(n,n,Math.abs(e-t),s).rotateX(Math.PI/2).translate(o,i,(t+e)/2)}function hg(n,t){const e=new ln(n.map(([i,s])=>new st(i,s))),o=.0012;return new bn(e,{depth:t-o*2,bevelEnabled:!0,bevelThickness:o,bevelSize:o,bevelSegments:1}).rotateY(-Math.PI/2).translate(t/2-o,0,0)}function fg(n,t,e){const o=n.getAttribute("uv");for(let i=0;i<o.count;i+=1)o.setXY(i,t,e);return n}function dg(n,t,e,o,i){const s=n.getAttribute("uv");for(let r=0;r<s.count;r+=1)s.setXY(r,t+s.getX(r)*(o-t),e+s.getY(r)*(i-e));return n}const Cn=1024,Ou=880,id=Cn-Ou,pg=[.95,.05];function rA(n,t){const e=document.createElement("canvas");e.width=Cn,e.height=Cn;const o=e.getContext("2d");if(!o)throw new Error("extinguisher: no 2D canvas for the label");o.fillStyle="#a8190f",o.fillRect(0,0,Cn,Cn);const i=Cn*t/n;o.save(),o.scale(1,Ou/i);const s="'Helvetica Neue', Helvetica, Arial, sans-serif",r=Cn/2;o.fillStyle="#f1ece0",o.fillRect(28,0,Cn-56,i),o.fillStyle="#e3cf9b",o.fillRect(28,0,Cn-56,i*.15),o.fillStyle="#1b1712",o.textAlign="center",o.textBaseline="middle",o.font=`bold ${Math.round(i*.1)}px ${s}`,o.fillText("FOAM",r,i*.078),o.fillStyle="#b3180f",o.font=`bold ${Math.round(i*.095)}px ${s}`,o.fillText("FIRE",r,i*.225),o.font=`bold ${Math.round(i*.072)}px ${s}`,o.fillText("EXTINGUISHER",r,i*.31),o.fillStyle="#1b1712",o.font=`${Math.round(i*.034)}px ${s}`,o.fillText("6 LITRE  ·  STORED PRESSURE  ·  AB RATED",r,i*.375);const a=["A","B","F"],l=i*.1,c=l*.35,u=i*.41;let h=r-(a.length*l+(a.length-1)*c)/2;for(const A of a)o.fillStyle="#1b1712",o.fillRect(h,u,l,l),o.fillStyle="#f1ece0",o.fillRect(h+5,u+5,l-10,l-10),o.fillStyle="#1b1712",o.font=`bold ${Math.round(l*.62)}px ${s}`,o.fillText(A,h+l/2,u+l*.54),h+=l+c;o.fillStyle="#b3180f",o.fillRect(60,i*.545,Cn-120,6);const f=["PULL THE PIN","AIM AT THE BASE","SQUEEZE THE LEVER","SWEEP SIDE TO SIDE"],d=`bold ${Math.round(i*.04)}px ${s}`;o.font=d;const p=Math.max(...f.map(A=>o.measureText(A).width)),v=i*.075,m=r-(p+v)/2;f.forEach((A,M)=>{const T=i*(.575+M*.064);o.fillStyle="#1b1712",o.fillRect(m,T,i*.05,i*.05),o.fillStyle="#f1ece0",o.font=`bold ${Math.round(i*.038)}px ${s}`,o.textAlign="center",o.fillText(String(M+1),m+i*.025,T+i*.027),o.textAlign="left",o.fillStyle="#1b1712",o.font=d,o.fillText(A,m+v,T+i*.027)}),o.fillStyle="#5b554b",o.font=`${Math.round(i*.022)}px ${s}`,o.textAlign="center",["Operating temperature +5 °C to +60 °C  ·  Test pressure 24 bar","Keep upright. Inspect monthly; service by a competent person annually.","Recharge immediately after any use, however brief."].forEach((A,M)=>o.fillText(A,r,i*(.845+M*.035))),o.fillStyle="#b3180f",o.fillRect(28,i*.955,Cn-56,i*.045),o.restore();const b=id/2,x=b,w=Ou+b;o.fillStyle="#f4f2ea",o.beginPath(),o.arc(x,w,b,0,Math.PI*2),o.fill();const E=(A,M,T)=>{o.strokeStyle=T,o.lineWidth=b*.22,o.beginPath(),o.arc(x,w,b*.7,A,M),o.stroke()},S=A=>Math.PI*(.75+A*1.5);E(S(0),S(.42),"#c1261b"),E(S(.42),S(.7),"#2f9a3c"),E(S(.7),S(1),"#c1261b"),o.strokeStyle="#1b1712",o.lineWidth=2;for(let A=0;A<=10;A+=1){const M=S(A/10);o.beginPath(),o.moveTo(x+Math.cos(M)*b*.82,w+Math.sin(M)*b*.82),o.lineTo(x+Math.cos(M)*b*.95,w+Math.sin(M)*b*.95),o.stroke()}const _=S(.56);o.lineWidth=4,o.beginPath(),o.moveTo(x-Math.cos(_)*b*.15,w-Math.sin(_)*b*.15),o.lineTo(x+Math.cos(_)*b*.8,w+Math.sin(_)*b*.8),o.stroke(),o.fillStyle="#1b1712",o.beginPath(),o.arc(x,w,b*.09,0,Math.PI*2),o.fill(),o.fillStyle="#e9c21c",o.fillRect(Cn-110,Cn-110,110,110);const y=new ce(e);return y.colorSpace=te,y.anisotropy=8,y}function aA(){const n=new Et,t=new wt({color:11016463,roughness:.3,metalness:.05}),e=new wt({color:14474720,roughness:.16,metalness:1,envMapIntensity:1.3}),o=new wt({color:1250067,roughness:.55}),i=.345,s=[];for(let U=1;U<=9;U+=1){const z=U/9*Eo.degToRad(72);s.push([bs*Math.cos(z),i+.057*Math.sin(z)])}const r=Tc([[0,.007],[.04,.0065],[.058,.005],[.066,.0015],[.0695,0],[.073,.0015],[.075,.006],[.0756,.011],[.0748,.016],[.0737,.019],[.0745,.023],[bs,.028],[bs,i-.008],[.0754,i-.004],[bs,i],...s,[.02,.4005],[.019,.401]]),a=[];a.push(Tc([[.019,.398],[.0215,.401],[.0215,.417],[.019,.42]],12)),a.push(Tc([[.0172,.42],[.0176,.428],[.0152,.436],[.0158,.45],[.0166,.457],[.0122,.463],[0,.4645]],20)),a.push(ug(.0065,-.008,-.029,.002,.436,12)),a.push(ug(.0086,-.029,-.042,.002,.436,12)),a.push(Ec(.005,.01,.022,.447,0,10)),a.push(Ec(.0145,.0215,.0302,.447,0,20)),a.push(new dn(.0134,.0014,6,20).rotateY(Math.PI/2).translate(.0302,.447,0)),a.push(hg([[.006,.427],[.06,.4255],[.099,.419],[.106,.4225],[.104,.4285],[.06,.4355],[.006,.438]],.021)),a.push(hg([[-.016,.459],[-.009,.4685],[.012,.4735],[.05,.4715],[.097,.4605],[.105,.4645],[.1,.4695],[.05,.481],[.012,.484],[-.011,.479],[-.019,.469]],.017)),a.push(Ec(.004,-.0125,.0125,.4685,-.009,10)),a.push(Ec(.0018,-.014,.017,.4505,.021,8)),a.push(new dn(.0095,.0015,6,18).translate(.0235,.4415,.021));const l=.025,c=-.081;a.push(new ie(.0088,.0088,.013,12).translate(l,.2185,c));const u=[],h=new zn([new P(.002,.436,-.042),new P(.004,.433,-.057),new P(.012,.418,-.074),new P(.021,.39,-.085),new P(.026,.345,-.086),new P(.026,.28,-.083),new P(l,.225,c)]);u.push(new $n(h,36,.0068,8,!1)),u.push(Tc([[0,.146],[.0062,.146],[.0066,.15],[.0082,.175],[.0098,.205],[.0072,.212],[0,.212]],14).translate(l,0,c)),u.push(new dn(.0106,.0024,6,16).rotateX(Math.PI/2).translate(l,.19,c)),u.push(new ee(.012,.016,.007).translate(0,.19,-.0775).rotateY(-Math.atan2(l,-c)));const f=.13,d=.31,p=12,v=p*Math.PI*2/l2,m=.0762,g=[];g.push(dg(new ie(m,m,d-f,p,1,!0,Math.PI/2-v/2,v).translate(0,(f+d)/2,0),0,1-Ou/Cn,1,1)),g.push(dg(new bl(.0122,24).rotateY(Math.PI/2).translate(.0306,.447,0),0,0,id/Cn,id/Cn));const b=new zn([new P(.0235,.432,.021),new P(.018,.425,.026),new P(.0125,.43,.033),new P(.0125,.44,.029),new P(.02,.437,.022)]);g.push(fg(new $n(b,12,9e-4,4,!1),...pg)),g.push(fg(new ee(.0022,.011,.013).translate(.0235,.4185,.027),...pg));const x=rA(v*m,d-f),w=new wt({map:x,roughness:.42}),E=new Et;E.position.set(yr.x,0,yr.z);const S=new It().makeRotationY(iA);for(const[U,z]of[[[r],t],[a,e],[u,o],[g,w]]){const O=new lt(sA([...U]).applyMatrix4(S),z);O.castShadow=!0,O.receiveShadow=!0,E.add(O)}n.add(E);let _=0,y=0;const A=new P(0,0,1),M=new P,T=new P(0,1,0),R=new P,L=new P;return{group:n,update(U,z,O){if(_>=Math.PI/2)return;if(y===0){M.set(yr.x-z,0,yr.z-O);const N=bs+jt.capsuleRadius,H=M.length();if(H>N||H<1e-4)return;M.divideScalar(H);const G=M.dot(cg);G<0&&M.addScaledVector(cg,-G),M.lengthSq()<1e-6&&M.set(0,0,1),M.normalize(),A.copy(T).cross(M).normalize(),R.set(yr.x,0,yr.z).addScaledVector(M,bs),y=nA}const B=Math.min(U,oA);y+=eA*Math.sin(_)*B,_=Math.min(_+y*B,Math.PI/2),_>=Math.PI/2&&(y=0),E.quaternion.setFromAxisAngle(A,_),L.copy(M).multiplyScalar(-bs).applyQuaternion(E.quaternion),E.position.copy(R).add(L)},dispose(){for(const U of[t,e,o,w])U.dispose();x.dispose(),E.traverse(U=>{U instanceof lt&&U.geometry.dispose()})}}}const{length:ll,depth:Us,levels:Kd}=Ot,Xa=Kd.pictureRail+.55,zu=2.75,lA=`
precision highp float;
varying float vAlong;
varying vec3 vNormal;
varying vec3 vToEye;
uniform vec3 uColour;
uniform float uLevel;

void main() {
  // Thins with distance from the mouth, so it fades out before the floor
  // rather than ending in a line.
  float along = 1.0 - vAlong;
  float body = pow(along, 1.35);

  // What turns a cone into a beam.
  //
  // The cone is a hollow surface drawn on both sides, and shading it by
  // length alone gives every pixel the same value — which is a flat
  // triangle with a hard edge, and looked exactly like one: a paper
  // cutout taped to the wall. What is missing is thickness. A real shaft
  // is a volume, and how bright it looks depends on how much of it the
  // eye is looking through: least at the silhouette, where the line of
  // sight only grazes the surface, most through the middle, where it
  // passes the whole way across.
  //
  // The dot of the surface normal with the view direction is exactly that
  // depth, to within a constant. Near the rim it goes to zero and the
  // beam dissolves into the air instead of ending at an outline.
  float depth = abs(dot(normalize(vNormal), normalize(vToEye)));
  float thickness = pow(depth, 1.6);

  float glow = body * thickness * uLevel;
  gl_FragColor = vec4(uColour * glow, glow);
}
`,cA=`
attribute vec2 aBeam;
varying float vAlong;
varying vec3 vNormal;
varying vec3 vToEye;
void main() {
  // Carried as an attribute rather than read off the vertex position.
  // The cones are merged into one mesh, which means their world
  // translation is baked into their vertices — so position.y is seven
  // metres up the wall, not a fraction along the beam, and reading it
  // directly made every beam evaluate to nothing at all.
  vAlong = aBeam.x;
  vec4 seen = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalMatrix * normal;
  vToEye = -seen.xyz;
  gl_Position = projectionMatrix * seen;
}
`;function uA(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(!e)throw new Error("2D canvas context unavailable for the lamp pool");const o=e.createRadialGradient(128/2,128*.18,0,128/2,128*.18,128*.9);o.addColorStop(0,"rgba(255, 150, 110, 0.95)"),o.addColorStop(.16,"rgba(255, 95, 55, 0.55)"),o.addColorStop(.48,"rgba(240, 55, 30, 0.18)"),o.addColorStop(1,"rgba(200, 30, 20, 0)"),e.fillStyle=o,e.fillRect(0,0,128,128);const i=new ce(t);return i.colorSpace=te,i}function mg(){const n=[];for(const e of[4.5,10,15.5])n.push({x:e,y:Xa,z:.14,facing:0}),n.push({x:e,y:Xa,z:Us-.14,facing:Math.PI});n.push({x:.16,y:Xa,z:Us/2,facing:Math.PI/2}),n.push({x:ll-.16,y:Xa,z:Us/2,facing:-Math.PI/2});const t=8;for(let e=0;e<t;e+=1){const o=e/t*Math.PI*2+Math.PI/t;n.push({x:ll/2+Math.cos(o)*zu,y:Kd.ceiling-.5,z:Us/2+Math.sin(o)*zu,facing:-o+Math.PI/2})}return n}function hA(){const n=new Et,t=new wt({color:2829102,roughness:.55,metalness:.6}),e=new wt({color:7212296,emissive:16725016,emissiveIntensity:0,roughness:.3}),o=[],i=(x,w,E,S)=>{const _=new Wo(16720904,0,S,2);_.position.set(x,w,E),o.push(_),n.add(_)};for(let x=0;x<4;x+=1){const w=x/4*Math.PI*2+Math.PI/4;i(ll/2+Math.cos(w)*zu,Kd.ceiling-.7,Us/2+Math.sin(w)*zu,16)}for(const x of[3.4,ll-3.4])i(x,Xa-.2,Us/2,22);const s=new Xr(3147274,9180168,0);s.position.set(ll/2,1,Us/2),n.add(s);const r=new Se({vertexShader:cA,fragmentShader:lA,uniforms:{uColour:{value:new bt(16723472)},uLevel:{value:0}},transparent:!0,depthWrite:!1,blending:Tn,side:we}),a=uA(),l=new Vs({map:a,transparent:!0,blending:Tn,depthWrite:!1,opacity:0}),c=[],u=[],h=[],f=new It,d=new It;for(const x of mg()){f.makeRotationY(x.facing),d.makeTranslation(x.x,x.y,x.z),d.multiply(f);const w=new ee(.34,.2,.05);w.applyMatrix4(d),w.translate(0,0,0),c.push(w.toNonIndexed());const E=new ee(.36,.05,.16);E.applyMatrix4(d),E.translate(0,.12,0),c.push(E.toNonIndexed());const S=new Xe(.075,12,8);S.applyMatrix4(d),u.push(S.toNonIndexed());const _=new le(3.2,3.2);_.applyMatrix4(d),_.translate(0,-1.02,0),h.push(_.toNonIndexed())}const p=(x,w)=>{const E=Le(x,!1);for(const S of x)S.dispose();if(!E){console.error("gallery: could not merge emergency lamps");return}n.add(new lt(E,w))};p(c,t),p(u,e),p(h,l);const v=6.4,m=3.1,g=[];for(const x of mg()){const w=new Tl(1,1,14,1,!0).toNonIndexed();w.translate(0,-.5,0),w.scale(m,v,m);const E=w.getAttribute("position"),S=new Float32Array(E.count*2);for(let _=0;_<E.count;_+=1){const y=Math.min(1,Math.max(0,-E.getY(_)/v));S[_*2]=y}w.setAttribute("aBeam",new qt(S,2)),w.translate(x.x,x.y-.1,x.z),g.push(w)}const b=Le(g,!1);for(const x of g)x.dispose();if(b){const x=new lt(b,r);x.frustumCulled=!1,n.add(x)}return{group:n,setBrightness(x){e.emissiveIntensity=x*16,l.opacity=x;for(const w of o)w.intensity=x*34;s.intensity=(.35+.65*x)*.28,r.uniforms.uLevel.value=x*1.25},dispose(){t.dispose(),e.dispose(),l.dispose(),r.dispose(),a.dispose();for(const x of o)x.dispose();s.dispose(),n.traverse(x=>{x instanceof lt&&x.geometry.dispose()})}}}const{window:y0,length:Br,levels:fA}=Ot,gg=Ot.depth+8.7,dA=1.12;function pA(){const n=y0.centresX.map(i=>({from:i-y0.width/2,to:i+y0.width/2})).sort((i,s)=>i.from-s.from),t=[];let e=0;const o=(i,s)=>{s-i<.02||t.push({minX:i,maxX:s,minZ:Ot.depth-.35,maxZ:Ot.depth+.35,top:fA.ceiling})};for(const i of n)o(e,i.from),e=i.to;return o(e,Br),t}function mA(){return{minX:Br/2-(Br+14)/2,maxX:Br/2+(Br+14)/2,minZ:gg-.39,maxZ:gg+.39,top:dA}}const gA={minX:0,maxX:Br,minZ:0,maxZ:Ot.depth},vg=.9,vA=2.3;function xA(n){const t=Math.min(1,Math.max(0,n));return vg+(vA-vg)*t*t}function MA(n){const t=n-Math.floor(n),e=Math.exp(-((t/.075)**2)),o=.62*Math.exp(-(((t-.24)/.07)**2)),i=Math.exp(-(((t-1)/.075)**2));return Math.min(1,e+o+i)}const xg=2.2,Mg=2.6,yA=13,wA=[{radius:2.9,width:.08,dashes:7,tiltX:1.18,tiltZ:.31,spin:.21},{radius:3.35,width:.055,dashes:11,tiltX:-.52,tiltZ:1.02,spin:-.14},{radius:3.8,width:.11,dashes:5,tiltX:.21,tiltZ:-.66,spin:.09}],yg=12,wg=6,_A=560,SA=1400,hh=`
float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
        mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
        mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}

float turbulence(vec3 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 3; i += 1) {
    sum += amp * noise(p);
    p *= 2.03;
    amp *= 0.5;
  }
  return sum * 1.14;
}

vec3 iridescent(float t) {
  return vec3(0.58, 0.55, 0.62)
       + vec3(0.42, 0.40, 0.38) * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * t
                                   + vec3(0.02, 0.34, 0.63)));
}

/** The palette carried towards white, which is the difference between light and paint. */
vec3 lit(float t, float lift) {
  vec3 c = iridescent(t);
  return c + (vec3(1.0) - c) * lift;
}
`,bA=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,TA=`
uniform float uTime;
uniform float uLevel;
uniform float uBeat;
uniform float uNear;
uniform vec3 uCentre;
uniform float uRadius;
varying vec3 vWorld;

${hh}

void main() {
  vec3 rd = normalize(vWorld - cameraPosition);
  vec3 oc = cameraPosition - uCentre;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - uRadius * uRadius;
  float h = b * b - c;
  if (h <= 0.0) discard;
  h = sqrt(h);
  float t0 = max(-b - h, 0.0);
  float t1 = -b + h;
  if (t1 <= t0) discard;

  const int STEPS = 20;
  float stride = (t1 - t0) / float(STEPS);
  // Dithered start, so the slices of the march do not show as rings.
  float jitter = hash(vec3(gl_FragCoord.xy, fract(uTime)));
  vec3 sum = vec3(0.0);
  float swell = 1.0 + 0.10 * uBeat * uNear;

  for (int i = 0; i < STEPS; i += 1) {
    vec3 p = (cameraPosition + rd * (t0 + stride * (float(i) + jitter)) - uCentre) / uRadius;
    p /= swell;
    float r = length(p);
    if (r > 1.0) continue;

    // Turn the sample about the vertical by more near the middle.
    float angle = uTime * (0.10 + 0.55 * (1.0 - r));
    float ca = cos(angle);
    float sa = sin(angle);
    vec3 q = vec3(ca * p.x - sa * p.z, p.y, sa * p.x + ca * p.z);

    vec3 w = q * 2.1 + vec3(0.0, uTime * 0.07, 0.0);
    float warp = turbulence(w * 0.8 + vec3(3.1, 0.0, uTime * 0.05));
    float n = turbulence(w + warp * 1.9);

    float edge = pow(max(0.0, 1.0 - r), 1.35);
    float currents = smoothstep(0.42, 0.82, n);
    float heart = exp(-r * r * 60.0);

    vec3 colour = lit(n * 1.6 + r * 0.9 + uTime * 0.035, 0.02 + 0.10 * currents);
    sum += colour * edge * (0.10 + 2.4 * currents * currents)
         + vec3(1.0, 0.94, 0.86) * heart * (9.0 + 12.0 * uBeat * uNear);
  }

  vec3 light = sum * stride / uRadius * 1.9 * uLevel;
  gl_FragColor = vec4(light, 1.0);
}
`,EA=`
uniform float uSize;
varying vec2 vUv;
varying float vDepth;
void main() {
  vUv = position.xy;
  vec4 centre = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vDepth = -centre.z;
  centre.xy += position.xy * uSize;
  gl_Position = projectionMatrix * centre;
}
`,AA=`
uniform float uTime;
uniform float uLevel;
uniform float uBeat;
uniform float uNear;
varying vec2 vUv;
varying float vDepth;

${hh}

void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  vec2 dir = vUv / max(r, 1e-4);

  float rays = turbulence(vec3(dir * 3.4, uTime * 0.11));
  rays = mix(rays, turbulence(vec3(dir * 9.0, uTime * 0.07 + 4.0)), 0.35);
  rays = pow(clamp(rays * 1.45 - 0.15, 0.0, 1.0), 3.2);

  float fall = 1.0 - smoothstep(0.35, 1.0, r);
  float glow = 0.022 / (r * r + 0.018);
  float streaks = rays * (0.9 / (r * 7.0 + 0.35)) * fall;

  vec3 colour = mix(vec3(1.0, 0.93, 0.84),
                    lit(r * 1.3 + dot(dir, vec2(0.21, 0.37)) + uTime * 0.03, 0.25),
                    smoothstep(0.03, 0.45, r));

  // Close to, the glare would cover everything with the same flat wash,
  // so it gives way — to a fifth, not to nothing.
  float close = mix(0.22, 1.0, smoothstep(4.0, 14.0, vDepth));
  float strength = (glow * fall + streaks) * uLevel * close * 1.5
                 * (1.0 + 1.2 * uBeat * uNear);
  gl_FragColor = vec4(colour * strength, 1.0);
}
`,RA=`
varying vec2 vLocal;
void main() {
  vLocal = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,PA=`
uniform float uTime;
uniform float uLevel;
uniform float uRadius;
uniform float uWidth;
uniform float uDashes;
uniform float uSeed;
uniform float uFlow;
uniform float uBeat;
varying vec2 vLocal;

${hh}

void main() {
  float across = (length(vLocal) - uRadius) / uWidth;
  float line = exp(-across * across * 5.5);
  float angle = atan(vLocal.y, vLocal.x);
  float turn = angle / 6.2831853;

  float dash = pow(0.5 + 0.5 * sin(angle * uDashes - uFlow), 8.0);
  float ticks = step(0.94, fract(turn * 96.0)) * smoothstep(0.1, 0.5, across) * 0.6;
  float shimmer = 0.75 + 0.25 * noise(vec3(turn * 40.0, uTime * 0.8, uSeed));

  float strength = (line * (0.28 + 1.9 * dash) * shimmer + ticks * line * 2.0)
                 * uLevel * (1.0 + 0.8 * uBeat);
  vec3 colour = lit(turn + uSeed + uTime * 0.04, 0.35 + 0.4 * dash);
  gl_FragColor = vec4(colour * strength, 1.0);
}
`,CA=`
uniform float uTime;
uniform float uLevel;
uniform float uPull;
uniform float uPixels;
attribute vec4 aSeed;
varying float vAlpha;
varying float vHue;

void main() {
  float life = fract(uTime * (0.018 + 0.03 * aSeed.w) * uPull + aSeed.z);
  float radius = mix(${(xg*3.4).toFixed(2)}, ${(xg*.95).toFixed(2)}, life * life) * (0.75 + 0.5 * aSeed.x);
  float angle = aSeed.z * 6.2831853 + uTime * (0.5 + aSeed.w) * 3.0 / radius * uPull;

  // Orbit in a plane tilted by the seed.
  float tilt = (aSeed.y - 0.5) * 2.4;
  float node = aSeed.x * 6.2831853;
  vec3 p = vec3(cos(angle) * radius, 0.0, sin(angle) * radius);
  p = vec3(p.x, p.z * sin(tilt), p.z * cos(tilt));
  p = vec3(cos(node) * p.x - sin(node) * p.z, p.y, sin(node) * p.x + cos(node) * p.z);

  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  float twinkle = 0.6 + 0.4 * sin(uTime * (2.0 + 5.0 * aSeed.y) + aSeed.z * 40.0);
  gl_PointSize = clamp((0.035 + 0.05 * aSeed.w) * uPixels / -view.z, 1.0, 18.0);
  vAlpha = smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.85, 1.0, life)) * twinkle * uLevel;
  vHue = aSeed.x + aSeed.y * 0.5;
}
`,IA=`
uniform float uTime;
uniform float uLevel;
uniform float uPixels;
uniform float uEye;
uniform vec3 uSpan;
uniform vec2 uAxis;
uniform vec3 uOrigin;
attribute vec4 aSeed;
varying float vAlpha;
varying float vHue;

void main() {
  float height = uSpan.y;
  float along = fract(aSeed.z + uTime * (0.0045 + 0.006 * aSeed.w));
  float y = along * height;

  vec2 spread = vec2(aSeed.x * uSpan.x, aSeed.y * uSpan.z);
  // Drawn in towards the light's axis over the top third, and turning
  // round it as they go, so the column narrows into a vortex.
  float gather = smoothstep(0.55, 1.0, along);
  float swirl = gather * 2.6 + uTime * 0.1 * gather;
  vec2 centred = spread - uAxis;
  centred = mat2(cos(swirl), -sin(swirl), sin(swirl), cos(swirl)) * centred;
  vec2 plan = uAxis + centred * mix(1.0, 0.12, gather * gather);
  // A slow lateral drift, so they wander rather than travel on rails.
  plan += vec2(sin(uTime * 0.21 + aSeed.w * 30.0), cos(uTime * 0.17 + aSeed.x * 30.0)) * 0.35;

  vec4 view = viewMatrix * vec4(uOrigin + vec3(plan.x, y, plan.y), 1.0);
  gl_Position = projectionMatrix * view;
  gl_PointSize = clamp((0.05 + 0.07 * aSeed.w) * uPixels / -view.z, 1.5, 9.0);

  float twinkle = 0.55 + 0.45 * sin(uTime * (1.3 + 3.0 * aSeed.y) + aSeed.x * 50.0);
  // In at the bottom, out into the light at the top, and thinned where
  // the climber is so nothing drifts through the middle of their face.
  float ends = smoothstep(0.0, 0.08, along) * (1.0 - smoothstep(0.93, 1.0, along));
  float near = smoothstep(0.6, 3.0, -view.z);
  vAlpha = ends * near * twinkle * uLevel * mix(0.6, 1.4, along);
  vHue = along * 0.6 + aSeed.x;
}
`,_g=`
varying float vAlpha;
varying float vHue;

${hh}

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c) * 4.0;
  if (d > 1.0) discard;
  float soft = exp(-d * 3.5);
  gl_FragColor = vec4(lit(vHue, 0.55) * soft * vAlpha * 2.2, 1.0);
}
`;function Da(n,t,e,o,i=bi){const s=new Se({vertexShader:n,fragmentShader:t,uniforms:e,transparent:!0,depthWrite:!1,blending:Tn,side:i});return s.customProgramCacheKey=()=>o,s}function Sg(n,t){const e=new $t,o=new Float32Array(n*4),i=new Float32Array(n*3);for(let s=0;s<n*4;s+=1){const r=Math.sin((s+1)*12.9898+t*78.233)*43758.5453;o[s]=r-Math.floor(r)}return e.setAttribute("aSeed",new qt(o,4)),e.setAttribute("position",new qt(i,3)),e}function LA(){const n=new Et;n.position.set(In.x,ss,In.z);const t={uTime:{value:0},uLevel:{value:0},uNear:{value:0},uBeat:{value:0}},e=Da(bA,TA,{...t,uCentre:{value:new P(In.x,ss,In.z)},uRadius:{value:Mg}},"beacon-body",on),o=new lt(new Xe(Mg*1.08,40,28),e);o.frustumCulled=!1,n.add(o);const i=Da(EA,AA,{...t,uSize:{value:yA}},"beacon-corona",we),s=new lt(new le(2,2),i);s.frustumCulled=!1,s.renderOrder=2,n.add(s);const r=wA.map((S,_)=>{const y=new Et;y.rotation.set(S.tiltX,0,S.tiltZ);const A=Da(RA,PA,{uTime:t.uTime,uLevel:t.uLevel,uBeat:t.uBeat,uRadius:{value:S.radius},uWidth:{value:S.width},uDashes:{value:S.dashes},uSeed:{value:_*.31},uFlow:{value:0}},"beacon-ring",we),M=new lt(new rh(S.radius-S.width*2,S.radius+S.width*2,256,1),A);return M.frustumCulled=!1,M.renderOrder=1,y.add(M),n.add(y),{...S,pivot:y,mesh:M,material:A,angle:0,flow:0}}),a={value:900},l={value:1},c=Da(CA,_g,{uTime:t.uTime,uLevel:t.uLevel,uPull:l,uPixels:a},"beacon-orbit"),u=new us(Sg(_A,1),c);u.frustumCulled=!1,n.add(u);const h={value:0},f=Da(IA,_g,{uTime:t.uTime,uLevel:t.uLevel,uPixels:a,uEye:h,uSpan:{value:new P(Ot.length-2.4,ss-Pe,Ot.depth-2.4)},uAxis:{value:new st(In.x-1.2,In.z-1.2)},uOrigin:{value:new P(1.2,Pe,1.2)}},"beacon-rise"),d=new us(Sg(SA,2),f);d.frustumCulled=!1,n.add(d);const p=new Wo(14676223,0,58,1.5);p.position.set(0,-1.4,0),n.add(p);const v=new Wo(16767400,0,34,1.7);v.position.set(0,-4.5,0),n.add(v);let m=0,g=0,b=0,x=0,w=1,E=0;return{group:n,setLevel(S){m=S,t.uLevel.value=S,p.intensity=yg*S,v.intensity=wg*S},setNearness(S,_,y){g=Math.min(1,Math.max(0,S)),b=g>0?MA(y):0,t.uNear.value=g,t.uBeat.value=b},follow(S){h.value=S},rapture(S,_){w=S,E=_},update(S){if(m<=0)return;const _=Math.max(0,Math.min(.1,S-x));x=S,t.uTime.value=S,a.value=900;const y=1+26*g*g+9*E;r.forEach((A,M)=>{A.angle+=_*A.spin*y,A.flow+=_*(1.6+M*.5)*y,A.mesh.rotation.z=A.angle,A.material.uniforms.uFlow.value=A.flow,A.pivot.scale.setScalar((1-.22*g)*(1+.55*E))}),l.value=1+5*g+3*E,t.uLevel.value=m*w,p.intensity=yg*m*w*(1+2.6*b*g),v.intensity=wg*m*w*(1+3.4*b*g)},dispose(){p.dispose(),v.dispose();for(const S of[o,s])S.geometry.dispose(),S.material.dispose();for(const S of r)S.mesh.geometry.dispose(),S.material.dispose();for(const S of[u,d])S.geometry.dispose(),S.material.dispose()}}}const eo={x:In.x,y:ss,z:In.z},{length:Na,depth:Ua}=Ot,bg=90,Tg=128,DA=[[1,.35,9,.115,.62],[-.7,1,6.3,.078,.55],[.55,-1,3.1,.036,.48],[-1,-.4,1.9,.019,.4]],NA=1.6,UA=DA.map(([n,t,e,o,i])=>{const s=Math.hypot(n,t);return`floodWave(p, vec2(${(n/s).toFixed(4)}, ${(t/s).toFixed(4)}), ${e.toFixed(3)}, ${o.toFixed(4)}, ${i.toFixed(3)}, t, floodOffset, tangent, binormal);`}).join(`
  `),FA=`
void floodWave(
  vec2 p, vec2 dir, float wavelength, float amplitude, float steepness,
  float t, inout vec3 offset, inout vec3 tangent, inout vec3 binormal
) {
  float k = 6.28318530718 / wavelength;
  // Deep-water dispersion: long waves travel faster than short ones, so
  // the train separates over time instead of marching in step.
  float c = sqrt(9.81 / k);
  float f = k * (dot(dir, p) - c * t);
  float steep = steepness * amplitude * 10.0;
  float a = steep / k;

  offset.x += dir.x * a * cos(f);
  offset.y += amplitude * sin(f);
  offset.z += dir.y * a * cos(f);

  tangent.x += -dir.x * dir.x * steep * sin(f);
  tangent.y += dir.x * (amplitude * k) * cos(f);
  tangent.z += -dir.x * dir.y * steep * sin(f);

  binormal.x += -dir.x * dir.y * steep * sin(f);
  binormal.y += dir.y * (amplitude * k) * cos(f);
  binormal.z += -dir.y * dir.y * steep * sin(f);
}
`,OA=`
float floodHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float floodNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(floodHash(i), floodHash(i + vec2(1.0, 0.0)), u.x),
    mix(floodHash(i + vec2(0.0, 1.0)), floodHash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float floodFbm(vec2 p) {
  float sum = 0.0;
  float weight = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += floodNoise(p) * weight;
    p = p * 2.07 + 3.1;
    weight *= 0.5;
  }
  return sum;
}
`;function zA(){const n=new Et;n.visible=!1;const t=new Mn(1024,1024,{minFilter:Ge,magFilter:Ge,type:ao,depthBuffer:!0}),e={uTime:{value:0},uDeep:{value:new bt(656648)},uSheen:{value:new bt(16767424)},uFoam:{value:new bt(4860454)},uMirror:{value:t.texture},uMirrorStrength:{value:.92},uBeaconView:{value:new P},uGlint:{value:0},uShaft:{value:new fe(Na/2,Ua/2,Na/2,Ua/2)},uEye:{value:new P},uDebug:{value:0},uSwell:{value:0},uMirrorMatrix:{value:new It}},o=new wt({color:328458,roughness:.075,metalness:0,envMapIntensity:.5,side:we});o.onBeforeCompile=w=>{Object.assign(w.uniforms,e),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform float uSwell;
        uniform mat4 uMirrorMatrix;
        varying vec3 vFloodWorld;
        varying vec4 vFloodMirror;
        ${FA}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec3 floodOffset = vec3(0.0);
        {
          vec3 tangent = vec3(1.0, 0.0, 0.0);
          vec3 binormal = vec3(0.0, 0.0, 1.0);
          vec2 p = (modelMatrix * vec4(position, 1.0)).xz;
          float t = uTime;
          ${UA}
          // Flattened right off as the surface comes level with a floor.
          //
          // The waves are twelve centimetres peak to trough, so while the
          // flood is passing the floor its crests stand above it and its
          // troughs cut below — the plane and the floor interpenetrate
          // along a ragged line and the whole thing tears. Damping the
          // swell to nothing over the last metre means it arrives flat,
          // as a sheet of water spreading across a floor actually does,
          // and swells only once there is depth under it.
          floodOffset *= uSwell;
          objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), normalize(cross(binormal, tangent)), uSwell));
        }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        // The plane's geometry is laid flat rather than the mesh being
        // turned, so the model matrix is a pure translation and a world
        // displacement is also a local one. Rotating the mesh instead
        // would mean inverting the model matrix here, which GLSL ES 1
        // cannot do.
        transformed += floodOffset;
        vFloodWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vFloodMirror = uMirrorMatrix * vec4(vFloodWorld, 1.0);`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime;
        uniform sampler2D uMirror;
        uniform float uMirrorStrength;
        uniform vec3 uBeaconView;
        uniform float uGlint;
        uniform vec3 uFoam;
        uniform vec4 uShaft;
        uniform int uDebug;
        varying vec3 vFloodWorld;
        varying vec4 vFloodMirror;
        ${OA}`).replace("#include <opaque_fragment>",`
        {
          /**
           * Seen from underneath, it is nothing at all.
           *
           * The surface is two-sided on purpose — one-sided it vanishes
           * the moment the eye passes it and the player watches the lit
           * room carry on overhead while drowning in it. Two-sided it is
           * a lid, which is right. What was wrong is that the lid was
           * being *shaded*: the same reflection, fresnel and foam that
           * belong to the top of the water were computed for the
           * underside, so once the head went under, the bottom of the
           * frame filled with a red wash of the emergency lighting
           * bouncing off it. Reported as still being able to see the
           * windows once you are below the darkness — that is what it
           * was, the room arriving through the one surface that is meant
           * to be the end of the room.
           *
           * Under a hundred metres of something that is not water there
           * is no light and nothing to reflect it, so the underside is
           * simply black and the shading below is skipped entirely.
           */
          if (!gl_FrontFacing) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
          }
          vec3 nrm = normalize(normal);
          vec3 toEye = normalize(vViewPosition);

          vec2 mirrorUv = vFloodMirror.xy / max(vFloodMirror.w, 1e-4);
          mirrorUv += nrm.xz * 0.05;
          vec3 mirrored = texture2D(uMirror, mirrorUv).rgb * uMirrorStrength;

          // Almost everything you see in black water at a grazing angle is
          // reflected, and almost none of it looking straight down.
          float facing = clamp(dot(nrm, toEye), 0.0, 1.0);
          float fresnel = 0.02 + 0.98 * pow(1.0 - facing, 5.0);
          outgoingLight = mix(outgoingLight, mirrored + outgoingLight * 0.35, fresnel);

          /**
           * And the light at the top, in it.
           *
           * Above the old roof the reflection pass is off — it costs a
           * second draw of the whole room for a few pixels at a grazing
           * angle — and the water went back to being a black floor. But
           * the one thing worth seeing in it from up there is the thing
           * the player is climbing towards, and that one thing needs no
           * pass: it is a point. Reflect the view ray off the waves and
           * ask how nearly it points at the light, and the answer is a
           * streak of the orb broken up by the swell, far below, in the
           * black — the light seen in the dark it is taking you out of.
           */
          if (uGlint > 0.0) {
            vec3 bounced = reflect(-toEye, nrm);
            vec3 toLight = normalize(uBeaconView + vViewPosition);
            float aligned = max(0.0, dot(bounced, toLight));
            float hue = floodFbm(vFloodWorld.xz * 0.35 + uTime * 0.05);
            vec3 tint = vec3(0.58, 0.55, 0.62) + vec3(0.42, 0.40, 0.38)
              * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * hue + vec3(0.02, 0.34, 0.63)));
            outgoingLight += (vec3(1.0, 0.95, 0.88) * pow(aligned, 900.0) * 6.0
                           + tint * pow(aligned, 60.0) * 0.9) * uGlint * (0.3 + fresnel);
          }

          // Foam where it meets the shaft.
          //
          // Taken from the shaft's own cross-section rather than from
          // scene depth: reading depth would mean a pre-pass or sampling
          // the buffer being written, and the shaft is ours to build, so
          // its walls are simply known. Then torn up by noise, because a
          // clean offset from a rectangle reads as a rectangle.
          vec2 fromCentre = abs(vFloodWorld.xz - uShaft.zw);
          float toWall = min(uShaft.x - fromCentre.x, uShaft.y - fromCentre.y);
          float ragged = floodFbm(vFloodWorld.xz * 0.9 + vec2(uTime * 0.11, -uTime * 0.07));
          float edge = toWall + (ragged - 0.5) * 0.9;
          // A band, and on both sides. One-sided, it was full strength
          // everywhere past the wall — and the surface is ninety metres
          // across against a room of twenty, so seven eighths of it lay
          // outside and the flood came out as a flat white sheet.
          float scum = smoothstep(0.85, 0.10, edge) * smoothstep(-0.9, -0.15, edge);
          outgoingLight = mix(outgoingLight, uFoam, scum * scum * 0.8);

          if (uDebug == 1) { gl_FragColor = vec4(fract(mirrorUv), 0.0, 1.0); return; }
          if (uDebug == 2) { gl_FragColor = vec4(mirrored, 1.0); return; }
          if (uDebug == 3) { gl_FragColor = vec4(vec3(fresnel), 1.0); return; }
        }
        #include <opaque_fragment>`)},o.customProgramCacheKey=()=>"flood-glint";const i=new le(bg,bg,Tg,Tg);i.rotateX(-Math.PI/2);const s=new lt(i,o);s.position.set(Na/2,0,Ua/2),s.frustumCulled=!1,n.add(s);const r=new lt(new le(700,700,48,48),o);r.geometry.rotateX(-Math.PI/2),r.position.set(Na/2,-.04,Ua/2),r.frustumCulled=!1,r.renderOrder=-1,n.add(r);const a=400,l=new wt({color:328458,roughness:1,metalness:0,side:we}),c=new lt(new ee(700,a,700),l);c.frustumCulled=!1,c.renderOrder=-2,n.add(c);const u=new yn,h=new It,f=new It().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),d=new P,p=new Zi,v=new fe,m=new fe,g=new P(0,1,0),b=new P,x=.004;return{group:n,mirror:t.texture,debug(w){e.uDebug.value=w},setHeight(w){s.position.y=w,r.position.y=w-.04,c.position.set(Na/2,w-a/2-.08,Ua/2),n.visible=w>-1.2,e.uSwell.value=Math.min(1,Math.max(0,w/1.1))},update(w){e.uTime.value=w*NA},reflect(w,E,S){if(!n.visible)return;const _=s.position.y;if(S.getWorldPosition(d),e.uEye.value.copy(d),S.updateMatrixWorld(),e.uBeaconView.value.set(eo.x,eo.y,eo.z).applyMatrix4(S.matrixWorldInverse),e.uGlint.value=d.y>ne+2?1:0,d.y>ne+2){e.uMirrorStrength.value=0;return}const y=d.y-_,A=.92*(1-Math.min(1,Math.max(0,(y-9)/7)));if(e.uMirrorStrength.value=A,A<=.001)return;if(h.makeTranslation(0,2*_,0).multiply(new It().makeScale(1,-1,1)),u.copy(S),u.matrixAutoUpdate=!1,u.matrixWorld.copy(h).multiply(S.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(S.projectionMatrix),Math.abs(y)>.05){p.setFromNormalAndCoplanarPoint(g,b.set(0,_,0)),p.applyMatrix4(u.matrixWorldInverse),v.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const R=u.projectionMatrix.elements;m.set((Math.sign(v.x)+R[8])/R[0],(Math.sign(v.y)+R[9])/R[5],-1,(1+R[10])/R[14]),v.multiplyScalar(2/v.dot(m)),R[2]=v.x,R[6]=v.y,R[10]=v.z+1-x,R[14]=v.w}u.projectionMatrixInverse.copy(u.projectionMatrix).invert(),e.uMirrorMatrix.value.copy(f).multiply(u.projectionMatrix).multiply(u.matrixWorldInverse),n.visible=!1;const M=w.getRenderTarget(),T=w.getContext();T.frontFace(T.CW),w.setRenderTarget(t),w.clear(),w.render(E,u),w.setRenderTarget(M),T.frontFace(T.CCW),n.visible=!0},dispose(){s.geometry.dispose(),s.material.dispose(),r.geometry.dispose(),c.geometry.dispose(),l.dispose(),t.dispose()}}}const{length:Bi,depth:ui,window:Ts,levels:c2,door:Eg}=Ot,u2=.55,sd=.3,mo=sd+u2,wr=c2.dadoCapTop,ki=c2.corniceBottom;function w0(n,t,e,o){const i=new ln;i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,t),i.lineTo(0,t),i.closePath(),i.holes.push(...e);const s=new bn(i,{depth:u2,bevelEnabled:!1}),r=new lt(s,o);return r.castShadow=!1,r.receiveShadow=!1,r}function BA(n,t,e,o){const i=t/2,s=new ei;return s.moveTo(n-i,e),s.lineTo(n-i,o),s.absarc(n,o,i,Math.PI,0,!0),s.lineTo(n+i,e),s.closePath(),s}function kA(n,t,e,o){const i=new ei,s=t/2;return i.moveTo(n-s,e),i.lineTo(n+s,e),i.lineTo(n+s,o),i.lineTo(n-s,o),i.closePath(),i}function GA(){const n=new Et,t=new wt({color:11050118,roughness:.88}),e=new wt({color:9405553,roughness:.95}),o=new wt({color:12103064,roughness:.8}),i=ne,s=Ts.centresX.map(f=>BA(f,Ts.width,Ts.sill,Ts.springing)),r=w0(Bi,i,s,t);r.position.set(0,0,ui+sd),n.add(r);const a=w0(Bi,i,[],t);a.position.set(0,0,-mo),n.add(a);for(const f of[-sd,Bi+mo]){const d=w0(ui,i,[kA(ui/2,Eg.width,0,Eg.height)],t);d.rotation.y=-Math.PI/2,d.position.set(f,0,0),n.add(d)}const l=(f,d,p,v)=>{const m=Bi+(mo+p)*2,g=ui+(mo+p)*2,b=Bi/2,x=ui/2;for(const[w,E,S,_]of[[b,-mo-p/2,m,p],[b,ui+mo+p/2,m,p],[-mo-p/2,x,p,g],[Bi+mo+p/2,x,p,g]]){const y=new lt(new ee(S,d-f,_),v);y.position.set(w,(f+d)/2,E),y.castShadow=!1,y.receiveShadow=!1,n.add(y)}},c=4;for(let f=0;f<c;f+=1){const d=f/c*wr,p=(f+1)/c*wr-.03;l(d,p,.14,e)}l(wr,wr+.22,.2,o);const u=(f,d,p,v)=>{const m=new lt(new ee(p,ki-wr,v),t);m.position.set(f,(wr+ki)/2,d),m.castShadow=!1,n.add(m);const g=new lt(new ee(p+.22,.26,v+.22),o);g.position.set(f,ki-.13,d),n.add(g)},h=[.55,...Ts.centresX.map((f,d)=>d<Ts.centresX.length-1?(f+Ts.centresX[d+1])/2:null).filter(f=>f!==null),Bi-.55];for(const f of h)u(f,ui+mo+.16,.9,.32),u(f,-mo-.16,.9,.32);for(const f of[ui*.22,ui*.78])u(-mo-.16,f,.32,.9),u(Bi+mo+.16,f,.32,.9);return l(ki,ki+.2,.34,o),l(ki+.2,ki+.62,.62,o),l(ki+.62,i,.34,t),{group:n,dispose(){t.dispose(),e.dispose(),o.dispose(),n.traverse(f=>{f instanceof lt&&f.geometry.dispose()})}}}function HA(n,t){const e=[];for(let o=0;o<(n+1)*(n+1);o+=1){const i=Math.sin(o*12.9898+t*78.233)*43758.5453;e.push(i-Math.floor(i))}return e}function h2(n,t,e){const o=HA(t,e),i=(s,r)=>o[r%(t+1)*(t+1)+s%(t+1)];return(s,r)=>{const a=s/n*t,l=r/n*t,c=Math.floor(a),u=Math.floor(l),h=a-c,f=l-u,d=h*h*(3-2*h),p=f*f*(3-2*f);return(i(c,u)*(1-d)+i(c+1,u)*d)*(1-p)+(i(c,u+1)*(1-d)+i(c+1,u+1)*d)*p}}function cl(n,t,e){const o=[];let i=4;for(let s=0;s<e;s+=1)o.push(h2(n,i,t+s*7.13)),i*=2;return(s,r)=>{let a=0,l=.5,c=0;for(const u of o)a+=u(s,r)*l,c+=l,l*=.5;return a/c}}function jr(n,t,e){const o=document.createElement("canvas");o.width=n,o.height=n;const i=o.getContext("2d"),s=i.createImageData(n,n);for(let a=0;a<n*n;a+=1)t(a%n,Math.floor(a/n),s.data,a*4);i.putImageData(s,0,0);const r=new ce(o);return r.wrapS=We,r.wrapT=We,r.anisotropy=8,r.colorSpace=e?te:nn,r}function VA(n=512,t=2.7){const e=cl(n,t,5),o=cl(n,t+31,4),i=cl(n,t+57,3),s=(c,u)=>{const h=Math.sin((c/n*1.4+u/n*2.1+e(c,u)*2.7)*Math.PI*2.6);return Math.pow(Math.max(0,1-Math.abs(h)),6.5)},r=jr(n,(c,u,h,f)=>{const d=s(c,u),p=o(c,u),v=.855-d*.26-p*.075,m=.832-d*.24-p*.085,g=.786-d*.2-p*.095;h[f]=Math.round(255*v),h[f+1]=Math.round(255*m),h[f+2]=Math.round(255*g),h[f+3]=255},!0),a=jr(n,(c,u,h,f)=>{const d=i(c,u),v=.78-Math.pow(Math.max(0,d-.32)/.68,.7)*.56+s(c,u)*.14,m=Math.round(255*Math.min(1,Math.max(0,v)));h[f]=m,h[f+1]=m,h[f+2]=m,h[f+3]=255},!1),l=jr(n,(c,u,h,f)=>{const d=Math.round(255*(o(c,u)*.6+s(c,u)*.4));h[f]=d,h[f+1]=d,h[f+2]=d,h[f+3]=255},!1);return{colour:r,rough:a,bump:l,dispose(){r.dispose(),a.dispose(),l.dispose()}}}function WA(n=512,t=11.3){const e=cl(n,t,5),o=h2(n,6,t+19),i=cl(n,t+41,3),s=(c,u)=>{const h=Math.abs(i(c,u)-.5);return Math.pow(Math.max(0,1-h*16),3)},r=jr(n,(c,u,h,f)=>{const d=s(c,u),p=.9+(e(c,u)-.5)*.05-d*.42;h[f]=Math.round(255*p*1),h[f+1]=Math.round(255*p*.975),h[f+2]=Math.round(255*p*.93),h[f+3]=255},!0),a=jr(n,(c,u,h,f)=>{const d=.88+s(c,u)*.1+(o(c,u)-.5)*.07,p=Math.round(255*Math.min(1,Math.max(0,d)));h[f]=p,h[f+1]=p,h[f+2]=p,h[f+3]=255},!1),l=jr(n,(c,u,h,f)=>{const d=e(c,u)*.62+o(c,u)*.38-s(c,u)*.7,p=Math.round(255*Math.min(1,Math.max(0,d)));h[f]=p,h[f+1]=p,h[f+2]=p,h[f+3]=255},!1);return{colour:r,rough:a,bump:l,dispose(){r.dispose(),a.dispose(),l.dispose()}}}let Ag=null,Rg=null;function XA(){return Ag??(Ag=VA()),Ag}function $A(){return Rg??(Rg=WA()),Rg}const Pg="./models/statue.stl";function qA(){const n=XA(),t=new wt({map:n.colour,roughnessMap:n.rough,roughness:1,bumpMap:n.bump,bumpScale:.006,metalness:0,envMapIntensity:1.1});return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float rim = pow(1.0 - clamp(dot(normalize(vNormal),
                       normalize(vViewPosition)), 0.0, 1.0), 2.6);
         totalEmissiveRadiance += vec3(0.44, 0.40, 0.35) * rim * 0.42;`)},t.customProgramCacheKey=()=>"figure-marble",t}function f2(n=qA()){const t=new Et,e=[];let o=null;const i=(r,a,l,c,u)=>{const h=new lt(a,n);h.castShadow=!0,h.receiveShadow=!0;const f=new Ln().setFromObject(h).getSize(new P);f.y>1e-6&&h.scale.setScalar(l/f.y),h.updateMatrixWorld(!0);const d=new Ln().setFromObject(h);h.position.y-=d.min.y,h.position.x-=(d.min.x+d.max.x)/2,h.position.z-=(d.min.z+d.max.z)/2,r.rotation.y=c,r.position.copy(u),r.add(h)},s=new Promise(r=>{new $d().load(Pg,a=>{a.rotateX(-Math.PI/2),a.computeVertexNormals(),o=a;for(const l of e)i(l.holder,a,l.tall,l.bearing,l.at);r()},void 0,()=>{console.warn(`gallery: no figure at ${Pg}`),r()})});return{group:t,ready:s,place(r,a,l){const c=new Et;return t.add(c),o?i(c,o,r,a,l):e.push({tall:r,bearing:a,at:l,holder:c}),c},dispose(){o==null||o.dispose(),n.dispose()}}}const _0=2800/4568,rd=.036;function YA(n,t){if(_0>t){const e=t/_0;n.repeat.set(e,1),n.offset.set((1-e)/2,0)}else{const e=_0/t;n.repeat.set(1,e),n.offset.set(0,(1-e)/2)}}function d2(n,t,e,o,i=0,s=!1){const r=new Et,a=s?e*.024:e*.028,l=s?e*.046:e*.055,c=s?a+l:0;e-=c*2,o-=c*2;const u=t.clone();if(u.needsUpdate=!0,YA(u,e/o),i>0){const E=[.015,.145,.495,.665,.855];u.repeat.multiplyScalar(.72);const _=E[i%E.length];u.offset.y=Math.min(_,Math.max(0,1-u.repeat.y)),u.offset.x=Math.max(0,1-u.repeat.x)*(i*7.13%1)}const h=new wt({map:u,emissiveMap:u,emissive:16777215,emissiveIntensity:.26,roughness:.95}),f=$A();h.roughnessMap=f.rough,h.roughness=1,h.bumpMap=f.bump,h.bumpScale=.02;for(const E of[f.rough,f.bump])E.repeat.set(Math.max(1,e*.55),Math.max(1,o*.55));const d=new lt(new le(e,o),h);d.position.z=.014,r.add(d);const p=[],v=[],m=(E,S,_,y,A,M)=>{const T=new ee(E,S,M).translate(_,y,M/2);(A===n.gilt?p:v).push(T)},g=s?rd-.006:.075;m(e+a*2,a,0,o/2+a/2,n.gilt,g),m(e+a*2,a,0,-o/2-a/2,n.gilt,g),m(a,o+a*2,-e/2-a/2,0,n.gilt,g),m(a,o+a*2,e/2+a/2,0,n.gilt,g);const b=s?rd:.13,x=e/2+a+l/2,w=o/2+a+l/2;if(m(e+(a+l)*2,l,0,w,n.plaster,b),m(e+(a+l)*2,l,0,-w,n.plaster,b),m(l,o+a*2,-x,0,n.plaster,b),m(l,o+a*2,x,0,n.plaster,b),!s){const E=l*.7,S=x+l/2+E/2,_=w+l/2+E/2;m(e+(a+l+E)*2,E,0,_,n.plaster,.065),m(e+(a+l+E)*2,E,0,-_,n.plaster,.065),m(E,o+(a+l)*2,-S,0,n.plaster,.065),m(E,o+(a+l)*2,S,0,n.plaster,.065)}return{group:r,paint:h,gilt:p,plaster:v,dispose(){h.dispose(),u.dispose(),r.traverse(E=>{E instanceof lt&&E.geometry.dispose()})}}}const ZA=.012,KA=.012,jA=.014,JA=[[1.25,0],[1.22,-.42],[1.04,-.75],[.62,-.89],[.04,-.92],[-.56,-.915],[-1.05,-.83],[-1.22,-.47],[-1.265,-.02],[-1.22,.42],[-1.07,.74],[-.86,.855],[-.7,.8],[-.55,.725],[-.4,.75],[-.25,.85],[.2,.855],[.68,.915],[1.08,.82],[1.23,.44]],Fa={x:-.8,z:.36,rx:.105,rz:.135,tilt:.35},cu=[{name:"titanium white",hex:15855074,x:-.95,z:-.44,size:.11,form:"coil"},{name:"cadmium yellow",hex:15773696,x:-.7,z:-.62,size:.085,form:"coil"},{name:"yellow ochre",hex:12551209,x:-.42,z:-.69,size:.08,form:"worm"},{name:"cadmium red",hex:12854810,x:-.14,z:-.72,size:.085,form:"coil"},{name:"alizarin crimson",hex:6032411,x:.14,z:-.72,size:.078,form:"worm"},{name:"burnt sienna",hex:7615002,x:.42,z:-.69,size:.082,form:"coil"},{name:"viridian",hex:874054,x:.68,z:-.6,size:.078,form:"worm"},{name:"ultramarine",hex:1778552,x:.92,z:-.44,size:.085,form:"coil"},{name:"ivory black",hex:1315601,x:1.04,z:-.17,size:.076,form:"worm"}],Fe=15855074,uu=15773696,ul=12551209,ad=12854810,Cg=6032411,Rr=7615002,hu=874054,Ps=1778552,Ig=1315601,QA=[{x:-.25,z:-.26,rx:.15,rz:.11,h:.036,from:[Fe,Ps,Rr],share:.22,turn:.4},{x:.27,z:-.34,rx:.13,rz:.1,h:.034,from:[Fe,ad,ul],share:.2,turn:2.1},{x:.66,z:-.02,rx:.12,rz:.09,h:.03,from:[uu,hu,ul],share:.42,turn:4}];function jd(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function rs(n,t){const e=(h,f)=>{const d=Math.sin(h*127.1+f*311.7)*43758.5453;return d-Math.floor(d)},o=Math.floor(n),i=Math.floor(t),s=n-o,r=t-i,a=s*s*(3-2*s),l=r*r*(3-2*r),c=e(o,i)+(e(o+1,i)-e(o,i))*a,u=e(o,i+1)+(e(o+1,i+1)-e(o,i+1))*a;return c+(u-c)*l}function t4(n,t){const e=n/2.5,o=t/1.8,s=new zn(JA.map(([a,l])=>new P(a*e,0,l*o)),!0,"centripetal").getSpacedPoints(150).slice(0,-1).map(a=>new st(a.x,a.z)),r=new ih(Fa.x*e,Fa.z*o,Fa.rx*e,Fa.rz*o,0,Math.PI*2,!1,Fa.tilt).getPoints(40).slice(0,-1);return{edge:s,hole:r}}function p2(n,t){const{edge:e,hole:o}=t4(n,t),i=new ln(e.map(s=>new st(s.x,-s.y)));return i.holes.push(new ei(o.map(s=>new st(s.x,-s.y)))),i}function m2(n,t,e,o=0){const i=n.getAttribute("position"),s=new Float32Array(i.count*2);for(let r=0;r<i.count;r+=1)s[r*2]=i.getX(r)/t+.5,s[r*2+1]=.5-i.getZ(r)/e+i.getY(r)*o;n.setAttribute("uv",new qt(s,2))}function e4(n,t){const e=new bn(p2(n,t),{depth:ZA,bevelEnabled:!0,bevelThickness:KA,bevelSize:jA,bevelSegments:5,curveSegments:1});e.rotateX(-Math.PI/2),e.translate(0,-.024,0);const o=e.groups[0],i=e.getAttribute("position"),s=(c,u)=>{const h=new $t;return h.setAttribute("position",new qt(i.array.slice(c*3,(c+u)*3),3)),h},r=s(o.start,o.count);r.computeVertexNormals();const a=El(s(o.start+o.count,i.count-o.count),1e-5);a.computeVertexNormals(),e.dispose();const l=Le([r,a.toNonIndexed()],!1);return r.dispose(),a.dispose(),m2(l,n,t,2.5),l}function n4(){const e=document.createElement("canvas");e.width=1024,e.height=768;const o=e.getContext("2d"),i=jd(11);o.fillStyle="#d6b58c",o.fillRect(0,0,1024,768);for(let l=0;l<6;l+=1){const c=i()*768,u=o.createLinearGradient(0,c-90,0,c+90),h=i()<.5?"176, 128, 84":"226, 196, 150";u.addColorStop(0,`rgba(${h}, 0)`),u.addColorStop(.5,`rgba(${h}, ${.12+i()*.12})`),u.addColorStop(1,`rgba(${h}, 0)`),o.fillStyle=u,o.fillRect(0,c-90,1024,180)}for(let l=0;l<300;l+=1){const c=i()*768,u=i()<.16;o.strokeStyle=u?`rgba(122, 82, 46, ${.14+i()*.18})`:`rgba(160, 118, 72, ${.05+i()*.09})`,o.lineWidth=u?1.1+i()*1.6:.6+i()*.8;const h=i()*10;o.beginPath(),o.moveTo(-10,c);for(let f=0;f<=1044;f+=32)o.lineTo(f,c+Math.sin(f*.006+h)*6+Math.sin(f*.0021+h*2)*12);o.stroke()}for(let l=0;l<2600;l+=1){const c=i()*1024,u=i()*768;o.fillStyle=`rgba(150, 92, 56, ${.1+i()*.2})`,o.beginPath(),o.ellipse(c,u,1.5+i()*4.5,.5+i()*.8,0,0,Math.PI*2),o.fill()}const s=o.createRadialGradient(1024/2,768/2,768*.3,1024/2,768/2,1024*.62);s.addColorStop(0,"rgba(84, 52, 26, 0)"),s.addColorStop(1,"rgba(84, 52, 26, 0.3)"),o.fillStyle=s,o.fillRect(0,0,1024,768);const r=o.createRadialGradient(1024*.55,768*.5,10,1024*.55,768*.5,1024*.34);r.addColorStop(0,"rgba(120, 76, 30, 0.2)"),r.addColorStop(1,"rgba(120, 76, 30, 0)"),o.fillStyle=r,o.fillRect(0,0,1024,768);const a=new ce(e);return a.colorSpace=te,a.anisotropy=8,a}function g2(n,t,e){const o=(i,s)=>Math.pow(Math.max(i,.003),1-e)*Math.pow(Math.max(s,.003),e);return new bt(o(n.r,t.r),o(n.g,t.g),o(n.b,t.b))}function jn(n,t){const e=n.clone().convertLinearToSRGB();return`rgba(${Math.round(e.r*255)}, ${Math.round(e.g*255)}, ${Math.round(e.b*255)}, ${t})`}function o4(n,t){const i=document.createElement("canvas");i.width=1024,i.height=768;const s=i.getContext("2d"),r=jd(29);s.setTransform(1024/n,0,0,768/t,1024/2,768/2);const a=n/1024,l=n/2.5,c=t/1.8,u=m=>new bt(m),h=(m,g,b)=>g2(u(m),u(g),b),f=[7169110,8022604,5595226,6967384,5922672];for(let m=0;m<40;m+=1){const g=((r()-.5)*1.6+.12)*l,b=((r()-.5)*1+.04)*c,x=(.06+r()*.16)*l,w=s.createRadialGradient(g,b,0,g,b,x),E=u(f[m%f.length]);w.addColorStop(0,jn(E,.14+r()*.12)),w.addColorStop(1,jn(E,0)),s.fillStyle=w,s.beginPath(),s.ellipse(g,b,x*1.6,x,r()*Math.PI,0,Math.PI*2),s.fill()}const d=(m,g,b,x,w,E)=>{const _=[m[0]*l,m[1]*c],y=[g[0]*l,g[1]*c],A=x*l,M=y[0]-_[0],T=y[1]-_[1],R=Math.hypot(M,T),L=[];for(let rt=0;rt<=28;rt+=1){const ft=rt/28,et=Math.sin(ft*Math.PI)*b*l;L.push(new st(_[0]+M*ft-T/R*et,_[1]+T*ft+M/R*et))}const U=L.map((rt,ft)=>{const et=L[Math.max(0,ft-1)],q=L[Math.min(28,ft+1)],ct=new st().subVectors(q,et).normalize();return new st(-ct.y,ct.x)}),z=r()*100,O=(rt,ft)=>{const et=(.9+rs(rt*.18+z,1.7)*.22)*(1+(rs(rt*.7+z,ft*3)-.5)*.18),q=L[rt],ct=U[rt];return[q.x+ct.x*ft*A*.5*et,q.y+ct.y*ft*A*.5*et]},B=(rt,ft,et,q,ct=0)=>{s.strokeStyle=ft,s.lineWidth=et,s.lineCap="round",s.beginPath();let vt=!1;for(let V=ct;V<=28;V+=1){const I=!q||rs(rt*7+z,V*.3)>.42,[D,tt]=O(V,rt);I&&!vt?s.moveTo(D,tt):I&&s.lineTo(D,tt),vt=I}s.stroke()},N=s.createLinearGradient(_[0],_[1],y[0],y[1]);N.addColorStop(0,jn(w,.95)),N.addColorStop(.55,jn(w.clone().lerp(E,.5),.9)),N.addColorStop(1,jn(E,.7)),s.fillStyle=N,s.beginPath();for(let rt=0;rt<=28;rt+=1){const[ft,et]=O(rt,-1);rt===0?s.moveTo(ft,et):s.lineTo(ft,et)}for(let rt=28;rt>=0;rt-=1){const[ft,et]=O(rt,1);s.lineTo(ft,et)}s.closePath(),s.fill();for(let rt=0;rt<14;rt+=1){const ft=(r()*2-1)*.85,q=r()<.5?w.clone().lerp(u(Fe),.35):w.clone().lerp(E,.5).multiplyScalar(.7);B(ft,jn(q,.18+r()*.2),a*(.8+r()*1.6),!0)}s.globalCompositeOperation="destination-out";for(let rt=0;rt<9;rt+=1)B((r()*2-1)*.8,`rgba(0, 0, 0, ${.3+r()*.4})`,a*(1+r()*2.5),!0,Math.floor(28*(.25+r()*.5)));s.globalCompositeOperation="source-over";const H=L[0],G=new st(M/R,T/R);s.fillStyle=jn(w,.95),s.beginPath(),s.ellipse(H.x+G.x*A*.08,H.y+G.y*A*.08,A*.22,A*.5,Math.atan2(G.y,G.x),0,Math.PI*2),s.fill(),B(-.98,jn(w.clone().multiplyScalar(.62),.9),a*2.6,!1),B(-.9,jn(w.clone().lerp(u(Fe),.5),.4),a*1.2,!1),B(.98,jn(E.clone().multiplyScalar(.66),.75),a*2,!1);const[$,Q]=O(28,-1),[j,X]=O(28,1),at=L[28];s.strokeStyle=jn(E.clone().multiplyScalar(.7),.95),s.lineWidth=a*5,s.beginPath(),s.moveTo($,Q),s.quadraticCurveTo(at.x+M/R*A*.14,at.y+T/R*A*.14,j,X),s.stroke(),s.strokeStyle=jn(E.clone().lerp(u(Fe),.5),.5),s.lineWidth=a*1.4,s.stroke()};for(const[m,g]of cu.entries()){if(m===1||m===5||m===8)continue;const b=new st(.15-g.x,.1-g.z).normalize(),x=.36+r()*.1;d([g.x+b.x*.12,g.z+b.y*.12],[g.x+b.x*x,g.z+b.y*x],(r()-.5)*.06,.08+r()*.02,u(g.hex),h(g.hex,Fe,g.hex===Fe?0:.45))}const p=[[[-.52,-.3],[-.12,-.02],.05,.17,h(Fe,Ps,.3),h(Fe,Ps,.14)],[[0,-.42],[.4,-.16],.06,.16,h(Fe,ad,.26),h(Fe,ul,.36)],[[-.42,.16],[-.02,.32],-.04,.15,h(Ps,Rr,.45).lerp(u(Fe),.4),h(Fe,Cg,.3)],[[.1,.02],[.46,.34],-.05,.14,h(Fe,Cg,.38),h(Fe,ad,.2)],[[.42,-.3],[.82,-.08],.05,.15,h(uu,hu,.45),h(uu,ul,.4)],[[.58,.42],[.92,.14],.04,.13,h(hu,Fe,.5),h(uu,hu,.6)],[[-.2,.47],[.3,.55],.03,.13,h(Rr,Ps,.5),h(Rr,Fe,.35)],[[-.06,-.12],[.3,.1],.03,.12,h(Fe,ul,.3),h(Fe,Rr,.2)],[[.3,.3],[.7,.46],-.03,.12,h(Fe,Ig,.3),h(Fe,Ps,.25).lerp(u(Ig),.2)],[[-.3,.02],[.02,.2],.03,.11,h(Fe,Ps,.2),h(Fe,Rr,.25)]];for(const m of p)d(...m);for(let m=0;m<26;m+=1){const g=cu[Math.floor(r()*cu.length)];s.fillStyle=jn(u(g.hex),.85),s.beginPath(),s.ellipse((g.x+(r()-.5)*.5)*l,(g.z+.1+r()*.3)*c,a*(1.2+r()*2),a*(.8+r()*1.5),r()*Math.PI,0,Math.PI*2),s.fill()}const v=new ce(i);return v.colorSpace=te,v.anisotropy=8,v}const i4=.7,Lg=.0015;function fu(n,t,e=[]){n.deleteAttribute("uv"),n.deleteAttribute("normal");const o=El(n,1e-5);n.dispose();const i=o.getAttribute("position"),s=new Int8Array(i.count).fill(-1),r=new P,a=new P;e.forEach((u,h)=>{for(let f=0;f<i.count;f+=1){r.fromBufferAttribute(i,f);const d=a.subVectors(r,u.at).dot(u.n);d>0&&(r.addScaledVector(u.n,-d),i.setXYZ(f,r.x,r.y,r.z),s[f]=h)}});for(let u=0;u<i.count;u+=1)i.getY(u)<Lg&&i.setY(u,Lg);o.computeVertexNormals();const l=o.getAttribute("normal");for(let u=0;u<i.count;u+=1){const h=s[u];h>=0&&l.setXYZ(u,e[h].n.x,e[h].n.y,e[h].n.z)}const c=new Float32Array(i.count*3);for(let u=0;u<i.count;u+=1){const h=t(i.getX(u),i.getY(u),i.getZ(u));c[u*3]=h.r,c[u*3+1]=h.g,c[u*3+2]=h.b}return o.setAttribute("color",new qt(c,3)),o}function Dg(n,t,e,o){const i=new zn(n,!1,"centripetal"),s=60,r=10,a=new $n(i,s,1,r,!1),l=a.getAttribute("position"),c=new P;for(let u=0;u<=s;u+=1){const h=u/s;i.getPointAt(h,c);const f=Math.min(1,h/.05);let d=t*Math.sqrt(1-(1-f)*(1-f));h>1-e&&(d*=Math.pow(1-(h-(1-e))/e,.9)),d*=1+Math.sin(h*19+o)*.06+Math.sin(h*43+o*2)*.035;for(let p=0;p<=r;p+=1){const v=u*(r+1)+p;l.setXYZ(v,c.x+(l.getX(v)-c.x)*d,c.y+(l.getY(v)-c.y)*d*i4,c.z+(l.getZ(v)-c.z)*d)}}return a}function s4(n,t,e,o,i){const s=1.25+n()*.3,r=n()<.5?1:-1,a=n()*Math.PI*2,l=[],c=Math.ceil(s*10);for(let h=0;h<=c;h+=1){const f=h/c,d=a+r*f*s*Math.PI*2,p=o*(1-.82*f)*(1+Math.sin(d*2+a)*.12);l.push(new P(t+Math.cos(d)*p,i*(.5+1.15*f),e+Math.sin(d)*p))}const u=n()*Math.PI*2;return l.push(new P(t+Math.cos(u)*o*.1,i*2.25,e+Math.sin(u)*o*.1)),l.push(new P(t+Math.cos(u)*o*.36,i*2.6,e+Math.sin(u)*o*.36)),l}function r4(n,t,e,o,i){const s=n()*Math.PI*2,r=Math.cos(s),a=Math.sin(s),l=n()*Math.PI,c=[];for(let u=0;u<=8;u+=1){const h=u/8,f=(h-.5)*o*2.2,d=Math.sin(h*Math.PI*1.7+l)*o*.5;c.push(new P(t+r*f-a*d,i*.55,e+a*f+r*d))}return c.push(new P(t+r*o*.55+a*o*.1,i*1.35,e+a*o*.55-r*o*.1)),c.push(new P(t+r*o*.1,i*1.7,e+a*o*.1)),c.push(new P(t-r*o*.12+a*o*.12,i*2.35,e-a*o*.12-r*o*.12)),c}function v2(n,t,e,o,i,s){const r=new Xe(1,30,10,0,Math.PI*2,0,Math.PI/2),a=r.getAttribute("position");for(let l=0;l<a.count;l+=1){const c=a.getX(l),u=a.getY(l),h=a.getZ(l),f=1+(rs(c*2.5+s,h*2.5)-.5)*.3,d=.8+rs(c*3+s,h*3+7)*.45;a.setXYZ(l,n+c*e*f,u*i*d,t+h*o*f)}return r}function a4(n,t,e,o){const i=n.x*t,s=n.z*e,r=n.rx*t,a=n.rz*e,l=new P(Math.cos(n.turn)*.16,1,Math.sin(n.turn)*.16).normalize(),c=new P(Math.cos(n.turn+2.2),.5,Math.sin(n.turn+2.2)).normalize(),u=[{n:l,at:new P(i,n.h*.7,s)},{n:c,at:new P(i+c.x*r*.45,n.h*.35,s+c.z*a*.45)}],[h,f,d]=n.from.map(v=>new bt(v)),p=g2(h,f,n.share);return fu(v2(i,s,r,a,n.h,o),(v,m,g)=>{const b=rs((v-i)*26+(g-s)*9+o,m*50+(g-s)*14),x=p.clone();return b>.66?x.lerp(h,Math.min(1,(b-.66)*3)):b<.3&&x.lerp(f,Math.min(1,(.3-b)*2.4)),rs((v-i)*14+40,(g-s)*14)>.78&&x.lerp(d,.6),x},u)}function l4(n,t){const e=jd(5),o=n/2.5,i=t/1.8,s=[];for(const[a,l]of cu.entries()){const c=l.size*o,u=(l.name==="titanium white"?.032:.028)*o,h=l.x*o,f=l.z*i,d=new bt(l.hex),p=(v,m,g)=>d.clone().multiplyScalar(.93+rs(v*40+a,g*40+m*20)*.14);l.form==="coil"?(s.push(fu(Dg(s4(e,h,f,c,u),u,.2,a*1.9),p)),s.push(fu(v2(h,f,c*.95,c*.95,u*1.5,a*7),p))):s.push(fu(Dg(r4(e,h,f,c,u),u,.22,a*1.9),p))}QA.forEach((a,l)=>s.push(a4(a,o,i,20+l*13)));const r=Le(s,!1);for(const a of s)a.dispose();return r}const Ng=new Map;function c4(n,t){const e=`${n}x${t}`,o=Ng.get(e);if(o)return o;const i=e4(n,t),s=new Ws(p2(n,t),1);s.rotateX(-Math.PI/2),m2(s,n,t);const r=n4(),a={board:i,decal:s,paint:l4(n,t),wood:new wt({map:r,roughness:.58,metalness:0}),mixed:new wt({map:o4(n,t),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,roughness:.45,metalness:0}),oil:new wt({vertexColors:!0,roughness:.16,metalness:0})};return Ng.set(e,a),a}function u4(n=2.5,t=1.8){const{board:e,decal:o,paint:i,wood:s,mixed:r,oil:a}=c4(n,t),l=new Et,c=new lt(e,s);c.name="wood",c.castShadow=!0,c.receiveShadow=!0,l.add(c);const u=new lt(o,r);u.name="mixing",u.receiveShadow=!0,u.renderOrder=1,l.add(u);const h=new lt(i,a);return h.name="paint",h.castShadow=!0,h.receiveShadow=!0,l.add(h),{group:l,halfLong:n/2,halfWide:t/2,dispose(){}}}const ld=2.3,x2=ld/2,M2=.8,as=-x2,Cs=-.03,hl=.33,Jr=Cs+.05,fh=hl-.03,Jd=x2-fh,Ug=.118,h4=as+.215,f4=.062,d4=as+.12;function Qd(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function dh(n,t,e){const o=Math.min(1,Math.max(0,(e-n)/(t-n)));return o*o*(3-2*o)}function y2(n){const t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)}const Oa=[[-1,.315],[-.82,.31],[-.6,.292],[-.38,.296],[-.18,.316],[-.05,.33],[Jr,.335]],Ac=-1;function Fg(n){for(let t=0;t<Oa.length-1;t+=1){const[e,o]=Oa[t],[i,s]=Oa[t+1];if(n<=i)return o+(s-o)*dh(e,i,n)}return Oa[Oa.length-1][1]}function p4(n){return 1+.26*dh(-.7,0,n)}function m4(){const t=Ug/2-.001,e=new ln,o=[];for(let f=0;f<=24;f+=1){const d=Jr+(Ac-Jr)*(f/24);o.push([d,Fg(d)-.032])}const i=Ac-as-.032,s=Fg(Ac)-.032;e.moveTo(o[0][0],o[0][1]);for(const[f,d]of o.slice(1))e.lineTo(f,d);for(let f=1;f<18;f+=1){const d=f/18*Math.PI;e.lineTo(Ac-i*Math.sin(d),s*Math.cos(d))}for(const[f,d]of[...o].reverse())e.lineTo(f,-d);const r=new ei;r.absarc(h4,0,f4,0,Math.PI*2,!0),e.holes.push(r);const a=new bn(e,{depth:.002,bevelEnabled:!0,bevelThickness:t,bevelSize:.032,bevelSegments:4,curveSegments:20,steps:1});a.rotateX(Math.PI/2),a.translate(0,-t,0);const l=a.getAttribute("position"),c=a.getAttribute("uv"),u=Jr-as;for(let f=0;f<l.count;f+=1){const d=l.getX(f),p=l.getY(f),v=l.getZ(f),m=p>-Ug/2;l.setY(f,p*p4(d));const g=v/M2+.5;c.setXY(f,(d-as)/u,m?.5+.5*g:.5*g)}a.deleteAttribute("normal");const h=El(a);return a.dispose(),h.computeVertexNormals(),h}const S0=1024,Og=1024;function zg(n,t){const e=n==="colour",o=t/S0,i=document.createElement("canvas");i.width=t,i.height=t/2;const s=i.getContext("2d");s.scale(o,o);const r=S0,a=Og/2,l=Qd(19);s.fillStyle=e?"#d9b68b":"rgb(128, 118, 0)",s.fillRect(0,0,r,a);for(let g=0;g<260;g+=1){const b=l()*a,x=l()<.16,w=x?.12+l()*.2:.04+l()*.08;s.strokeStyle=e?x?`rgba(128, 84, 46, ${w})`:`rgba(160, 118, 72, ${w})`:`rgba(${x?70:110}, ${x?140:124}, 0, ${w*2.2})`,s.lineWidth=x?1.2+l()*2:.6+l()*1.2;const E=l()*10,S=2+l()*7;s.beginPath(),s.moveTo(-10,b);for(let _=0;_<=r+40;_+=40)s.lineTo(_,b+Math.sin(_*.006+E)*S+Math.sin(_*.021+E*2)*1.5);s.stroke()}for(let g=0;g<900;g+=1){const b=l()*r,x=l()*a,w=3+l()*9;s.fillStyle=e?`rgba(110, 72, 40, ${.1+l()*.18})`:"rgba(80, 128, 0, 0.5)",s.fillRect(b,x,w,1)}const c=s.createLinearGradient(0,0,r,0);c.addColorStop(.25,e?"rgba(90, 58, 30, 0)":"rgba(128, 118, 0, 0)"),c.addColorStop(.55,e?"rgba(90, 58, 30, 0.12)":"rgba(128, 100, 0, 0.5)"),c.addColorStop(.85,e?"rgba(90, 58, 30, 0)":"rgba(128, 118, 0, 0)"),s.fillStyle=c,s.fillRect(0,0,r,a);const u=(d4-as)/(Jr-as)*r,h=g=>u+Math.sin(g*.021)*3+Math.sin(g*.083+1)*1.5;s.beginPath(),s.moveTo(0,0);for(let g=0;g<=a;g+=8)s.lineTo(h(g),g);s.lineTo(0,a),s.closePath(),s.fillStyle=e?"#141211":"rgb(150, 52, 0)",s.fill(),s.strokeStyle=e?"rgba(70, 64, 60, 0.9)":"rgb(210, 40, 0)",s.lineWidth=5,s.beginPath();for(let g=0;g<=a;g+=8)g===0?s.moveTo(h(g)-2,g):s.lineTo(h(g)-2,g);s.stroke();const f=document.createElement("canvas");f.width=t,f.height=t;const d=f.getContext("2d");d.drawImage(i,0,0),d.drawImage(i,0,t/2);const p=M2/(Og/2),v=(Jr-as)/S0;d.save(),d.scale(o,o),d.translate(r*.42,a/2),d.scale(p/v,-1),d.textBaseline="middle",d.textAlign="left",d.fillStyle=e?"rgba(52, 30, 14, 0.88)":"rgb(40, 190, 0)",e&&(d.shadowColor="rgba(52, 30, 14, 0.6)",d.shadowBlur=3),d.font='bold 70px Georgia, "Times New Roman", serif',d.fillText("100",0,0);const m=d.measureText("100").width;return d.font='600 26px Georgia, "Times New Roman", serif',d.fillText("WREN & HOLLIS",m+22,-15),d.fillText("PURE BRISTLE",m+22,17),d.restore(),f}const g4=.006,Bg={wide:.382,bottom:-.182},Rc={wide:.347,bottom:-.158},b0=.007,Pc=.002;function T0(n){const t=dh(.04,.22,n);let e=Rc.wide+(Bg.wide-Rc.wide)*t,o=g4-.003*(1-t),i=Rc.bottom+(Bg.bottom-Rc.bottom)*t,s=0;for(const r of[.46,.54])s+=.008*Math.exp(-(((n-r)/.012)**2));return s-=.004*Math.exp(-(((n-.015)/.02)**2)),s-=.003*Math.exp(-(((n-.975)/.02)**2)),e-=s,o-=s,i+=s,{wide:e,top:o,bottom:i}}function E0(n,t,e,o){const i=(t-e)/2,s=(t+e)/2,r=Math.max(0,n-i),a=[],l=(c,u)=>{a.push([u*r+Math.cos(c)*i,s+Math.sin(c)*i])};for(const c of[0,30,60])l(Eo.degToRad(c),1);for(let c=0;c<=4;c+=1){const u=r*(1-2*c/4);a.push([u,t+o*(1-(u/(r||1))**2)])}for(const c of[120,150,180,210,240])l(Eo.degToRad(c),-1);for(let c=0;c<=4;c+=1){const u=-r*(1-2*c/4);a.push([u,e-o*(1-(u/(r||1))**2)])}for(const c of[300,330])l(Eo.degToRad(c),1);return a}function kg(n){const t=n[0].points.length,e=[],o=[];for(const s of n)for(const[r,a]of s.points)e.push(s.x,a,r);for(let s=0;s<n.length-1;s+=1)for(let r=0;r<t;r+=1){const a=(r+1)%t,l=s*t+r,c=s*t+a,u=(s+1)*t+r,h=(s+1)*t+a;o.push(l,h,c,l,u,h)}const i=new $t;return i.setAttribute("position",new Dt(e,3)),i.setIndex(o),i.computeVertexNormals(),i}function Gg(n,t,e,o){const r=[[0,.006],[.00945,.00528],[.016800000000000002,.0033000000000000004],[.021,.0007199999999999999],[.022680000000000002,-.004]].map(([l,c])=>new st(l,c)),a=new an(r.reverse(),10);return a.deleteAttribute("uv"),o&&a.rotateX(Math.PI),a.translate(n,t,e),a}function v4(){const t=[0,.01,.02,.03,.05,.08,.12,.16,.2,.25,.3,.36,.42,.44,.45,.46,.47,.48,.5,.52,.53,.54,.55,.56,.58,.66,.76,.86,.93,.955,.975,.99,1].map(u=>{const h=T0(u);return{x:Cs+u*(hl-Cs),points:E0(h.wide,h.top,h.bottom,Pc)}}),e=kg(t),o=(u,h)=>{const f=T0(u),d=Cs+u*(hl-Cs),p={x:d,points:E0(f.wide,f.top,f.bottom,Pc)},v={x:d-h*.002,points:E0(f.wide-b0,f.top-b0,f.bottom+b0,Pc)};return kg(h===1?[p,v]:[v,p])},i=[e,o(1,1),o(0,-1)],s=.3,r=T0(s),a=Cs+s*(hl-Cs),l=r.wide-(r.top-r.bottom)/2;for(const u of[-.2,.2]){const h=Pc*(1-(u/l)**2);i.push(Gg(a,r.top+h,u,!1)),i.push(Gg(a,r.bottom-h,u,!0))}const c=Le(i);for(const u of i)u.dispose();return c}function w2(n){const t=.365+.03*(1-(1-n)**2),e=Math.max(0,1-n**2.2)**.9,o=.006*Math.sin(Math.PI*Math.min(1,n/.35));return{wide:t,half:.083*e+o*e,top:-.005-.025*n*n}}const Fs=11;function _2(n){const t=(n+1)/2*Fs,e=Math.min(Fs-1,Math.floor(t)),o=t-e,i=Math.abs(o-.5)*2,s=Math.max(0,(Math.abs(n)-.8)/.2);return .032*i**1.6+.035*y2(e)+.07*s*s}function x4(n){const t=(n+1)/2*Fs,e=t-Math.floor(t);return Math.abs(e-.5)*2}function M4(){const n=[],t=Eo.degToRad,e=44;for(const f of[0,30,60])n.push({kind:"arc",angle:t(f),side:1});for(let f=0;f<e;f+=1)n.push({kind:"face",z:1-2*f/(e-1),up:!0});for(const f of[120,150,180,210,240])n.push({kind:"arc",angle:t(f),side:-1});for(let f=0;f<e;f+=1)n.push({kind:"face",z:-1+2*f/(e-1),up:!1});for(const f of[300,330])n.push({kind:"arc",angle:t(f),side:1});const o=[0,.05,.12,.22,.34,.46,.58,.68,.77,.85,.91,.955,.985,1],i=n.length,s=[],r=[],a=[],l=n.map(f=>Jd-_2(f.kind==="face"?f.z:f.side));for(const f of o){const d=w2(f),p=Math.min(d.half*.95,d.wide),v=d.wide-p,m=d.top-d.half,g=d.top-2*d.half,b=dh(.55,1,f);for(let x=0;x<i;x+=1){const w=n[x],E=fh+f*l[x];let S,_;if(w.kind==="arc")S=w.side*v+Math.cos(w.angle)*p,_=m+Math.sin(w.angle)*p;else{S=w.z*v;const y=Math.min(.01,d.half*.45)*x4(w.z)**3*b;_=w.up?d.top-y:g+y}s.push(E,_,S),r.push(f,.5+.5*S/d.wide)}}for(let f=0;f<o.length-1;f+=1)for(let d=0;d<i;d+=1){const p=(d+1)%i,v=f*i+d,m=(f+1)*i+d;a.push(v,(f+1)*i+p,f*i+p,v,m,(f+1)*i+p)}const c=new $t;c.setAttribute("position",new Dt(s,3)),c.setAttribute("uv",new Dt(r,2)),c.setIndex(a),c.computeVertexNormals();const u=[c,...y4()],h=Le(u);for(const f of u)f.dispose();return h}function y4(){const n=[],t=Qd(29),e=[[.62,1,0,.26,.2],[.74,-1,0,.22,-.25],[.83,1,0,.16,.35],[.55,.35,1,.18,.3],[.7,-.5,1,.15,.45],[.93,.2,2,.1,.12],[.93,-.72,2,.08,-.2],[.94,.62,2,.07,.25]];for(const[o,i,s,r,a]of e){const l=w2(o),c=fh+o*(Jd-_2(i)),u=i*(s===0?l.wide-.01:l.wide*.9),h=s===1?l.top-2*l.half+.004:l.top-l.half,f=new P(c,h,u),d=new P(1,s===1?-.22-t()*.12:(t()-.6)*.15,s===0?i*(.12+t()*.08):a*.4).normalize(),p=f.clone().addScaledVector(d,r);n.push(w4(f,p,.0045,.0015,o))}return n}function w4(n,t,e,o,i){const s=t.clone().sub(n).normalize(),r=new P(0,1,0).cross(s).normalize(),a=s.clone().cross(r).normalize(),l=[],c=[],u=[];for(const[f,d,p]of[[n,e,i],[t,o,Math.min(1,i+.1)]])for(let v=0;v<3;v+=1){const m=v/3*Math.PI*2,g=f.clone().addScaledVector(r,Math.cos(m)*d).addScaledVector(a,Math.sin(m)*d);l.push(g.x,g.y,g.z),c.push(p,.5)}for(let f=0;f<3;f+=1){const d=(f+1)%3;u.push(f,d,3+d,f,3+d,3+f)}const h=new $t;return h.setAttribute("position",new Dt(l,3)),h.setAttribute("uv",new Dt(c,2)),h.setIndex(u),h.computeVertexNormals(),h}const Hg=1024,Vg=512,_4=(hl-fh)/Jd;function Wg(n){const t=n==="colour",e=document.createElement("canvas");e.width=Hg,e.height=Vg;const o=e.getContext("2d"),i=Qd(41),s=Hg,r=Vg;o.fillStyle=t?"#c9b186":"rgb(128, 180, 0)",o.fillRect(0,0,s,r);for(let h=0;h<2600;h+=1){const f=i()*r,d=i()*s*.6,p=s*(.3+i()*.7),v=i();o.strokeStyle=t?v<.45?`rgba(236, 222, 190, ${.18+i()*.3})`:v<.85?`rgba(150, 124, 86, ${.14+i()*.26})`:`rgba(96, 78, 56, ${.2+i()*.3})`:`rgba(${v<.45?175:v<.85?95:60}, ${170+i()*30}, 0, ${.4+i()*.4})`,o.lineWidth=.7+i()*1.3,o.beginPath(),o.moveTo(d,f),o.lineTo(d+p,f+(i()-.5)*3),o.stroke()}for(let h=1;h<Fs;h+=1){const f=(1-h/Fs)*r,d=o.createLinearGradient(s*.55,0,s,0);d.addColorStop(0,t?"rgba(40, 30, 20, 0)":"rgba(30, 180, 0, 0)"),d.addColorStop(1,t?"rgba(40, 30, 20, 0.55)":"rgba(30, 180, 0, 0.9)"),o.fillStyle=d,o.fillRect(s*.55,f-3,s*.45,6)}const a=_4*s-4,l=h=>s*(.14+.02*Math.sin(h*.05)+.015*Math.sin(h*.19+2));for(let h=0;h<r;h+=2)o.fillStyle=t?"#4e5a74":"rgb(110, 232, 0)",o.fillRect(a,h,l(h)-a+i()*14,2);for(let h=0;h<700;h+=1){const f=i()*r,d=a+i()*(l(f)-a),p=i()<.4;o.fillStyle=t?p?`rgba(214, 206, 188, ${.35+i()*.4})`:`rgba(30, 40, 66, ${.3+i()*.3})`:`rgba(${p?170:70}, 240, 0, 0.8)`,o.fillRect(d,f,2+i()*10,1+i()*2.5)}const c=[];for(let h=0;h<=r;h+=3)c.push((i()-.5)*10);const u=h=>{const f=Math.min(Fs-1,Math.floor(h/r*Fs));return s*(.79-.045*y2(f+7))+9*Math.sin(h*.031+1.3)+6*Math.sin(h*.077+.4)+4*Math.sin(h*.19)+c[Math.floor(h/3)]};for(let h=0;h<r;h+=1){const f=u(h);if(t){const d=o.createLinearGradient(f,0,s,0);d.addColorStop(0,"#2a52b0"),d.addColorStop(.4,"#1d43a0"),d.addColorStop(1,"#16398e"),o.fillStyle=d}else o.fillStyle="rgb(150, 30, 0)";o.fillRect(f,h,s-f,1)}for(let h=0;h<90;h+=1){const f=i()*r,d=u(f),p=20+i()*110;o.strokeStyle=t?`rgba(36, 72, 170, ${.4+i()*.4})`:"rgba(146, 50, 0, 0.9)",o.lineWidth=1+i()*2,o.beginPath(),o.moveTo(d+4,f),o.lineTo(d-p,f+(i()-.5)*2),o.stroke()}for(let h=0;h<140;h+=1){const f=i()*r,d=u(f)+i()*(s-u(f));o.strokeStyle=t?i()<.4?`rgba(92, 132, 222, ${.08+i()*.14})`:`rgba(10, 26, 80, ${.12+i()*.2})`:`rgba(${142+i()*20}, ${24+i()*18}, 0, 0.6)`,o.lineWidth=1+i()*3,o.beginPath(),o.moveTo(d,f),o.lineTo(d+30+i()*90,f+(i()-.5)*3),o.stroke()}return e}function Cc(n,t){const e=new ce(n);return e.colorSpace=t?te:nn,e.anisotropy=8,e}let cd=0,yo=null;function S4(){if(cd+=1,yo)return yo;const n=Cc(zg("surface",512),!1),t=Cc(Wg("surface"),!1);return yo={handle:m4(),ferrule:v4(),hair:M4(),wood:new wt({map:Cc(zg("colour",1024),!0),bumpMap:n,roughnessMap:n,bumpScale:1.4,roughness:1,metalness:0}),steel:new wt({color:12566716,roughness:.3,metalness:.92}),bristle:new wt({map:Cc(Wg("colour"),!0),bumpMap:t,roughnessMap:t,bumpScale:2,roughness:1,metalness:0,side:we})},yo}function b4(){var n,t;if(cd-=1,!(cd>0||!yo)){yo.handle.dispose(),yo.ferrule.dispose(),yo.hair.dispose();for(const e of[yo.wood,yo.bristle])(n=e.map)==null||n.dispose(),(t=e.roughnessMap)==null||t.dispose(),e.dispose();yo.steel.dispose(),yo=null}}function T4(n=ld){const t=S4(),e=new Et,o=new Et;o.scale.setScalar(n/ld),e.add(o);for(const[s,r]of[[t.handle,t.wood],[t.ferrule,t.steel],[t.hair,t.bristle]]){const a=new lt(s,r);a.castShadow=!0,a.receiveShadow=!0,o.add(a)}let i=!1;return{group:e,reach:n/2,dispose(){i||(i=!0,b4())}}}const Ml=Eo.degToRad(14),xi=Math.tan(Ml),du=Math.sin(Ml),Ic=Math.cos(Ml),S2=.0538,b2=.14,T2=.3,E2=.1,E4=2.3,A4=1.15;function Rl(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Pl(n){const t=n*b2,e=(n-t)/Math.cos(Math.PI/6),o=h=>{const f=h*Math.PI/3;return[Math.cos(f)*e,Math.sin(f)*e]},i=[];for(let h=0;h<6;h+=1){const f=Math.PI/6+h*Math.PI/3,d=Math.cos(f),p=Math.sin(f),[v,m]=o(h),[g,b]=o(h+1);for(let x=0;x<6;x+=1){const w=x/6;i.push({p:v+(g-v)*w+d*t,q:m+(b-m)*w+p*t,np:d,nq:p})}for(let x=0;x<3;x+=1){const w=f+x/3*(Math.PI/3);i.push({p:g+Math.cos(w)*t,q:b+Math.sin(w)*t,np:Math.cos(w),nq:Math.sin(w)})}}i.push({...i[0]});const s=[0];for(let h=1;h<i.length;h+=1)s.push(s[h-1]+Math.hypot(i[h].p-i[h-1].p,i[h].q-i[h-1].q));const r=s[6],a=s[s.length-1],l=h=>h<=6?.5*(s[h]/r):.5+.5*((s[h]-r)/(a-r)),c=i.map((h,f)=>({...h,v:l(f)})),u=[];for(let h=0;h<6;h+=1)u.push([l(9*h+6),l(9*h+9)]);return{columns:c,arcs:u}}function Cl(n){const t=n*S2,e=-n/2,o=e+t*A4,i=o+t*E4,s=n/2+t*E2*(1/du-1),r=s-t/xi;return{a:t,x0:e,xf0:o,xf1:i,apex:s,paintEnd:r}}function R4(){const{a:n,xf1:t,paintEnd:e}=Cl(1/S2),o=(e-t)/1024;return 2*(n-n*b2)*Math.tan(Math.PI/6)/128/o}function A2(n,t){const e=document.createElement("canvas");e.width=n,e.height=t;const o=e.getContext("2d"),i=R4(),s=[{text:"HB",font:'bold 76px Georgia, "Times New Roman", serif',gap:158},{text:"CALDERWICK",font:'bold 72px Georgia, "Times New Roman", serif',gap:54},{text:"No. 1874",font:'italic 600 48px Georgia, "Times New Roman", serif',gap:0}];let r=0;for(const h of s)o.font=h.font,r+=o.measureText(h.text).width+h.gap;const a=n*.8/i,l=Math.min(1,a/r);o.save(),o.translate(n*.06,t*.75),o.scale(i*l,l),o.fillStyle="#fff",o.textBaseline="middle";let c=0;for(const h of s)if(o.font=h.font,o.fillText(h.text,c,3),c+=o.measureText(h.text).width+h.gap,h.text==="HB"){const f=c-h.gap/2-14;o.beginPath(),o.moveTo(f,0),o.lineTo(f+14,-14),o.lineTo(f+28,0),o.lineTo(f+14,14),o.closePath(),o.fill()}o.restore();const u=Rl(71);o.globalCompositeOperation="destination-out";for(let h=0;h<260;h+=1)o.fillStyle=`rgba(0,0,0,${.5+u()*.5})`,o.beginPath(),o.arc(u()*n,t*.5+u()*t*.5,.6+u()*1.6,0,Math.PI*2),o.fill();return e}function R2(n,t){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const o=e.getContext("2d");return o.drawImage(n,0,0),o.globalCompositeOperation="source-in",o.fillStyle=t,o.fillRect(0,0,e.width,e.height),e}const Jo=1024,Hn=256;function Xg(n,t=0){const e=new bt().setHex(n,Vo);return e.lerp(new bt(1,1,1),t),`#${e.getHexString(Vo)}`}function P4(n){const t=document.createElement("canvas");t.width=Jo,t.height=Hn;const e=t.getContext("2d");e.fillStyle=Xg(n),e.fillRect(0,0,Jo,Hn);const o=Rl(n);for(let a=0;a<90;a+=1){e.strokeStyle=o()<.5?`rgba(255,255,255,${.012+o()*.02})`:`rgba(0,0,0,${.012+o()*.025})`,e.lineWidth=.6+o()*2.4;const l=o()*Hn;e.beginPath(),e.moveTo(0,l),e.lineTo(Jo,l+(o()-.5)*2),e.stroke()}const{arcs:i}=Pl(1);e.fillStyle=Xg(n,.22);for(const[a,l]of i){const c=(1-l)*Hn;e.fillRect(0,c-.5,Jo,(l-a)*Hn+1)}const s=e.createLinearGradient(0,Hn*.55,0,Hn*.95);s.addColorStop(0,"#e6c56c"),s.addColorStop(.45,"#a67e2c"),s.addColorStop(1,"#d6b05a"),e.drawImage(R2(A2(Jo,Hn),s),0,0);const r=new ce(t);return r.colorSpace=te,r.anisotropy=8,r}function C4(){const n=document.createElement("canvas");n.width=Jo,n.height=Hn;const t=n.getContext("2d");t.fillStyle="rgb(128, 110, 0)",t.fillRect(0,0,Jo,Hn);const e=Rl(5);for(let s=0;s<70;s+=1){t.strokeStyle=`rgba(${120+e()*16}, ${96+e()*30}, 0, 0.5)`,t.lineWidth=.6+e()*2;const r=e()*Hn;t.beginPath(),t.moveTo(0,r),t.lineTo(Jo,r),t.stroke()}const{arcs:o}=Pl(1);t.fillStyle="rgb(128, 88, 0)";for(const[s,r]of o)t.fillRect(0,(1-r)*Hn-.5,Jo,(r-s)*Hn+1);t.drawImage(R2(A2(Jo,Hn),"rgb(92, 66, 210)"),0,0);const i=new ce(n);return i.colorSpace=nn,i.anisotropy=8,i}const _r=512,Lc=256;function I4(){const{columns:n}=Pl(1),t=Math.max(...n.map(e=>Math.hypot(e.p,e.q)))/xi;return T2/xi/t}function L4(n){const t=document.createElement("canvas");t.width=_r,t.height=Lc;const e=t.getContext("2d"),o=n==="colour",i=(1-I4())*Lc,s=Rl(11);e.fillStyle=o?"#d6a576":"rgb(128, 200, 0)",e.fillRect(0,0,_r,i);for(let r=0;r<150;r+=1){const a=s()*_r,l=s()<.3,c=l?.12+s()*.18:.05+s()*.08;e.strokeStyle=o?l?`rgba(150, 92, 52, ${c})`:`rgba(240, 206, 160, ${c})`:`rgba(${l?70:170}, ${l?215:190}, 0, ${c*2})`,e.lineWidth=.6+s()*(l?2.2:1.4),e.beginPath(),e.moveTo(a,0),e.bezierCurveTo(a+(s()-.5)*8,i*.3,a+(s()-.5)*8,i*.7,a,i),e.stroke()}if(o){const r=e.createLinearGradient(0,i-40,0,i);r.addColorStop(0,"rgba(70, 64, 60, 0)"),r.addColorStop(1,"rgba(70, 64, 60, 0.45)"),e.fillStyle=r,e.fillRect(0,i-40,_r,40)}e.fillStyle=o?"#2e2e33":"rgb(128, 92, 140)",e.fillRect(0,i,_r,Lc-i);for(let r=0;r<70;r+=1){const a=s()*_r;e.strokeStyle=o?`rgba(120, 122, 132, ${.08+s()*.16})`:`rgba(128, ${60+s()*40}, 170, 0.6)`,e.lineWidth=.5+s()*1.5,e.beginPath(),e.moveTo(a,i),e.lineTo(a+(s()-.5)*4,Lc),e.stroke()}return t}function $g(n){const t=new ce(L4(n));return t.colorSpace=n==="colour"?te:nn,t.anisotropy=4,t}function P2(n,t,e,o){const i=new $t;return i.setAttribute("position",new Dt(n,3)),i.setAttribute("normal",new Dt(t,3)),i.setAttribute("uv",new Dt(e,2)),i.setIndex(o),i}function D4(n){const{a:t,xf1:e,apex:o,paintEnd:i}=Cl(n),{columns:s}=Pl(t),r=s.length,a=[],l=[],c=[],u=[];for(const f of s)a.push(e,-t+f.q,f.p),l.push(0,f.nq,f.np),c.push(0,f.v);for(const f of s){const d=o-Math.hypot(f.p,f.q)/xi;a.push(d,-t+f.q,f.p),l.push(0,f.nq,f.np),c.push((d-e)/(i-e),f.v)}for(let f=0;f<r-1;f+=1)u.push(f,r+f+1,f+1,f,r+f,r+f+1);const h=a.length/3;a.push(e,-t,0),l.push(-1,0,0),c.push(.002,.75);for(const f of s)a.push(e,-t+f.q,f.p),l.push(-1,0,0),c.push(.002,.75);for(let f=0;f<r-1;f+=1)u.push(h,h+1+f,h+2+f);return P2(a,l,c,u)}function N4(n){const{a:t,apex:e}=Cl(n),{columns:o}=Pl(t),i=o.length,s=t*E2,r=t*T2/xi,a=s*Ic*Ic/du,l=e-s/du,c=o.map(m=>Math.hypot(m.p,m.q)),u=Math.max(...c)/xi,h=[],f=[],d=[],p=[],v=[{cone:!0,s:m=>c[m]/xi},{cone:!0,s:m=>c[m]/xi*.55+r*.45},{cone:!0,s:()=>r},{cone:!0,s:()=>(r+a)/2},{cone:!0,s:()=>a},{cone:!1,theta:(Math.PI/2-Ml)*.62},{cone:!1,theta:(Math.PI/2-Ml)*.28},{cone:!1,theta:0}];for(const m of v)for(let g=0;g<i;g+=1){const b=o[g],x=b.p/c[g],w=b.q/c[g];let E,S;if(m.cone){const _=m.s(g);E=e-_,S=_*xi,f.push(du,Ic*w,Ic*x)}else E=l+s*Math.cos(m.theta),S=s*Math.sin(m.theta),f.push(Math.cos(m.theta),Math.sin(m.theta)*w,Math.sin(m.theta)*x);h.push(E,-t+w*S,x*S),d.push(g/(i-1),(e-E)/u)}for(let m=0;m<v.length-1;m+=1)for(let g=0;g<i-1;g+=1){const b=m*i+g,x=(m+1)*i+g;p.push(b,x+1,b+1,b,x,x+1)}return P2(h,f,d,p)}const U4=[[-.05,.9],[0,.97],[.012,1.07],[.03,1.1],[.05,1.075],[.07,1.05],[.12,1.05],[.14,1.03],[.165,1.08],[.19,1.03],[.215,1.08],[.24,1.03],[.265,1.08],[.29,1.03],[.31,1.05],[.69,1.05],[.71,1.03],[.735,1.08],[.76,1.03],[.785,1.08],[.81,1.03],[.835,1.08],[.86,1.03],[.88,1.05],[.93,1.05],[.95,1.075],[.97,1.1],[.988,1.07],[1,.97],[1.05,.9]];function C2(n,t,e){const o=new an(n,t);return o.rotateZ(-Math.PI/2),o.translate(0,e,0),o}function F4(n){const{a:t,xf0:e,xf1:o}=Cl(n),i=U4.map(([r,a])=>new st(a*t,e+r*(o-e))),s=C2(i,24,-t);return s.deleteAttribute("uv"),s}function O4(n){const{a:t,x0:e,xf0:o}=Cl(n),i=.93*t,r=[[0,0],[.3,.027],[.58,.095],[.8,.2],[.93,.35],[.985,.54],[1,.75]].map(([m,g])=>new st(m*i,e+g*t));r.push(new st(i,o+.3*t));let a=C2(r,20,-t);a.deleteAttribute("uv"),a.deleteAttribute("normal"),a=El(a);const l={p:Math.cos(-2.2),q:Math.sin(-2.2)},c=.95*t,u=.42*t,h=a.getAttribute("position"),f=[],d=new bt(14256252),p=new bt(9271155),v=Rl(3);for(let m=0;m<h.count;m+=1){const g=h.getX(m),b=h.getY(m)+t,x=h.getZ(m),w=Math.max(0,1-(g-e)/c),E=.5+.5*((x*l.p+b*l.q)/i);h.setX(m,g+u*w*E);const S=Math.min(1,w*w*(.55+.45*E)*1.25+v()*.08),_=d.clone().lerp(p,S);f.push(_.r,_.g,_.b)}return a.setAttribute("color",new Dt(f,3)),a.computeVertexNormals(),a}let ud=0;const Bu=new Map,ku=new Map;let ts=null,Ji=null,kr=null,Gr=null;function z4(n){let t=Bu.get(n);return t||(t={barrel:D4(n),cone:N4(n),ferrule:F4(n),eraser:O4(n)},Bu.set(n,t)),t}function B4(n){let t=ku.get(n);return t||(ts??(ts=C4()),t=new Bd({map:P4(n),roughnessMap:ts,metalnessMap:ts,bumpMap:ts,bumpScale:1.2,roughness:1,metalness:1,clearcoat:.65,clearcoatRoughness:.16}),ku.set(n,t)),t}function k4(){if(!Ji){const n=$g("surface");Ji=new wt({map:$g("colour"),roughnessMap:n,metalnessMap:n,bumpMap:n,bumpScale:.8,roughness:1,metalness:1})}return kr??(kr=new wt({color:13215312,roughness:.3,metalness:.95})),Gr??(Gr=new wt({vertexColors:!0,roughness:.9,metalness:0})),{wood:Ji,metal:kr,rubber:Gr}}function G4(){var n,t,e;if(ud-=1,!(ud>0)){for(const o of Bu.values())o.barrel.dispose(),o.cone.dispose(),o.ferrule.dispose(),o.eraser.dispose();Bu.clear();for(const o of ku.values())(n=o.map)==null||n.dispose(),o.dispose();ku.clear(),ts==null||ts.dispose(),ts=null,Ji&&((t=Ji.map)==null||t.dispose(),(e=Ji.roughnessMap)==null||e.dispose(),Ji.dispose(),Ji=null),kr==null||kr.dispose(),kr=null,Gr==null||Gr.dispose(),Gr=null}}function H4(n=2.75,t=13148458){ud+=1;const e=z4(n),{wood:o,metal:i,rubber:s}=k4(),r=new Et,a=[[e.barrel,B4(t)],[e.cone,o],[e.ferrule,i],[e.eraser,s]];for(const[c,u]of a){const h=new lt(c,u);h.castShadow=!0,h.receiveShadow=!0,r.add(h)}let l=!1;return{group:r,reach:n/2,dispose(){l||(l=!0,G4())}}}const I2=1.15,L2=.12,V4={3100550:{name:"ULTRAMARINE BLUE",number:"34",series:"SERIES 2"},9189924:{name:"RED OXIDE",number:"12",series:"SERIES 1"}},W4=.2,hd=.365,D2=.25,Gu=1.004,Hu=.877;function X4(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ls(n,t){const e=(h,f)=>{const d=Math.sin(h*127.1+f*311.7)*43758.5453;return d-Math.floor(d)},o=Math.floor(n),i=Math.floor(t),s=n-o,r=t-i,a=s*s*(3-2*s),l=r*r*(3-2*r),c=e(o,i)+(e(o+1,i)-e(o,i))*a,u=e(o,i+1)+(e(o+1,i+1)-e(o,i+1))*a;return c+(u-c)*l}function Dc(n,t){return ls(n,t)*.55+ls(n*2.1+17,t*2.1+5)*.3+ls(n*4.3+3,t*4.3+29)*.15}function N2(n,t,e){const o=[],i=r=>-t+r*e;o.push([0,i(.034)],[.26,i(.034)],[.285,i(.026)],[.31,i(.034)],[.56,i(.034)],[.585,i(.026)],[.61,i(.034)],[.9,i(.034)],[.94,i(.028)],[.965,i(.01)],[.985,i(.001)],[1,i(0)],[1.016,i(.006)],[1.026,i(.02)],[1.028,i(.036)],[1.02,i(.05)],[1.004,i(.058)],[1,i(.066)],[1,i(.08)]);const s=r=>{o.push([1,r-.045*e],[1,r-.032*e],[1.007,r-.018*e],[1.012,r],[1.007,r+.018*e],[1,r+.032*e],[1,r+.045*e])};return s(-t+W4*e),s(-.31*e),o.push([1,-.1*e],[1,-.09*e],[1.01,-.08*e],[1.026,-.066*e],[1.035,-.046*e],[1.034,-.026*e],[1.026,-.01*e],[1.012,-.002*e],[.998,0],[.985,-.004*e],[.978,-.014*e],[.975,-.03*e],[.972,-.046*e],[.965,-.058*e],[.952,-.066*e],[.935,-.068*e],[.918,-.066*e],[.907,-.058*e],[.902,-.046*e],[.9,-.03*e],[.899,-.016*e],[.896,-.008*e],[.889,-.006*e],[.882,-.01*e],[.878,-.02*e],[Hu,-.034*e],[Hu,-.2*e]),o.map(([r,a])=>new st(r*n,a))}function qg(n,t,e,o){const i=N2(n,t,e).filter(r=>r.x>=n*.999&&r.y>-t+.07*e&&r.y<-.09*e);let s=n;for(let r=0;r<i.length-1;r+=1){const a=i[r],l=i[r+1];o>=a.y&&o<=l.y&&l.y>a.y&&(s=a.x+(l.x-a.x)*(o-a.y)/(l.y-a.y))}return o<=-hd*e&&o>=-t+D2*e&&(s=Math.max(s,n*Gu)),s}function $a(n,t,e){const o=[],i=[],s=[];for(let l=0;l<=n;l+=1)for(let c=0;c<=t;c+=1){const u=e(l/n,c/t);o.push(u.x,u.y,u.z),i.push(Vu,Vu)}const r=(l,c)=>l*(t+1)+c;for(let l=0;l<n;l+=1)for(let c=0;c<t;c+=1)s.push(r(l,c),r(l+1,c),r(l+1,c+1),r(l,c),r(l+1,c+1),r(l,c+1));const a=new $t;return a.setAttribute("position",new Dt(o,3)),a.setAttribute("uv",new Dt(i,2)),a.setIndex(s),a.computeVertexNormals(),a}function Hr(n,t,e){return new P(n*Math.cos(e),t,n*Math.sin(e))}const Vu=.02;function $4(){const t=new Uint8Array(1048576);for(let o=0;o<512;o+=1)for(let i=0;i<512;i+=1){const s=(i+.5)/512*2-1,r=(o+.5)/512*2-1,a=Math.hypot(s,r),l=(o*512+i)*4;let c=.5,u=.1;if(a<1){const h=Dc(s*3+3,r*3+8)*.62+a*a*a*a*.55,f=Math.min(1,Math.max(0,(h-.6)/.025)),d=Dc(s*4+11,r*4+2),p=1-Math.abs(Dc(s*9+d*3,r*9-d*2)*2-1),v=1-Math.abs(Dc(s*26+d*5,r*26+40)*2-1);c=.5+Math.sin(a*34+Math.atan2(r,s)*2+d*6)*.025*(1-f)+f*(.14+p**3*.26+v**3*.08),u=.1+f*(.2+p*.14)}t[l]=Math.round(c*255),t[l+1]=Math.round(u*255),t[l+2]=0,t[l+3]=255}const e=new oh(t,512,512,lo);return e.wrapS=Bo,e.wrapT=Bo,e.magFilter=Ge,e.minFilter=Qo,e.generateMipmaps=!0,e.needsUpdate=!0,e}function q4(n){const o=document.createElement("canvas");o.width=2048,o.height=384;const i=o.getContext("2d"),s=X4(n&65535),r=V4[n]??{name:"OIL COLOUR",number:String(n%97),series:"SERIES 1"},a=`#${new bt(n).getHexString()}`,l="#1e2127",c="#efe6cc";i.fillStyle="#e6dcc0",i.fillRect(0,0,2048,384);for(let p=0;p<9e3;p+=1)i.fillStyle=`rgba(${s()<.5?"120, 100, 70":"255, 250, 235"}, ${.04+s()*.06})`,i.fillRect(s()*2048,s()*384,1+s()*2,1+s()*2);const u=i.createLinearGradient(0,0,0,384);u.addColorStop(0,"rgba(150, 110, 50, 0.22)"),u.addColorStop(.22,"rgba(150, 110, 50, 0)"),u.addColorStop(.78,"rgba(150, 110, 50, 0)"),u.addColorStop(1,"rgba(150, 110, 50, 0.26)"),i.fillStyle=u,i.fillRect(0,0,2048,384);const h=(p,v,m,g,b,x,w)=>{i.font=g,i.letterSpacing=`${x}px`,i.fillStyle=b,i.textAlign="center",i.textBaseline="alphabetic";const E=i.measureText(p).width;i.save(),i.translate(v,m),E>w&&i.scale(w/E,1),i.fillText(p,0,0),i.restore()};for(let p=0;p<2;p+=1){const v=p*1024,m=v+2048/4;i.fillStyle=l,i.fillRect(v,0,2048/2,70),i.fillRect(v,368,2048/2,16),h("ARTISTS' OIL COLOUR",m,47,'bold 34px Georgia, "Times New Roman", serif',c,9,900),i.fillStyle="#a8874a",i.fillRect(v+40,80,2048/2-80,3),i.fillRect(v+40,87,2048/2-80,1.5),h(r.name,m,186,'bold 100px Georgia, "Times New Roman", serif',l,2,660),h(`No. ${r.number}   ·   ${r.series}`,m,232,'italic 30px Georgia, "Times New Roman", serif',"#3b3a36",2,900),i.fillStyle=a,i.fillRect(v+150,256,2048/2-300,60),h("PERMANENCE A  ·  LIGHTFAST I  ·  PURE LINSEED OIL",m,294,'bold 21px "Helvetica Neue", Arial, sans-serif',c,3,2048/2-340),h("NET 5 LITRES          STIR WELL BEFORE USE",m,350,'20px "Helvetica Neue", Arial, sans-serif',"#3b3a36",2,2048/2-300)}i.fillStyle="rgba(80, 60, 30, 0.35)",i.fillRect(0,0,3,384);for(let p=0;p<70;p+=1){const v=s()*2048,m=384*(.35+Math.pow(s(),.6)*.65);i.fillStyle=`rgba(118, 90, 48, ${.03+s()*.05})`,i.beginPath(),i.ellipse(v,m,10+s()*50,6+s()*22,s()*Math.PI,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(255, 250, 235, 0.35)";for(let p=0;p<40;p+=1){i.lineWidth=.6+s();const v=s()*2048,m=s()*384;i.beginPath(),i.moveTo(v,m),i.lineTo(v+(s()-.5)*60,m+(s()-.5)*16),i.stroke()}const f=i.createRadialGradient(2048*.7,384*.55,4,2048*.7,384*.55,70);f.addColorStop(0,a),f.addColorStop(1,`${a}00`),i.globalAlpha=.55,i.fillStyle=f,i.beginPath(),i.ellipse(2048*.7,384*.55,80,36,-.4,0,Math.PI*2),i.fill(),i.globalAlpha=1;const d=new ce(o);return d.colorSpace=te,d.anisotropy=8,d}function Y4(n,t,e){const o=[new an(N2(n,t,e),80)],i=-.18*e;for(const u of[0,Math.PI]){const h=new ie(.075*e,.075*e,.014*e,24);h.rotateZ(Math.PI/2),h.scale(1,1.25,1),h.translate(n+.006*e,i,0);const f=new Xe(.03*e,16,10);f.scale(.6,1,1),f.translate(n+.016*e,i,0),h.rotateY(u),f.rotateY(u),o.push(h,f)}const s=.013*e,r=n+.07*e,a=Math.acos((n*Gu+s+.002*e)/r),l=[new P(n+.012*e,i,0),new P(r-.015*e,i,0)];for(let u=0;u<=24;u+=1){const h=.1+u/24*(Math.PI-.2);l.push(new P(r*Math.cos(h),i-r*Math.sin(h)*Math.sin(a),r*Math.sin(h)*Math.cos(a)))}l.push(new P(-(r-.015*e),i,0),new P(-(n+.012*e),i,0)),o.push(new $n(new zn(l,!1,"centripetal"),90,s,8,!1));const c=Le(o,!1);for(const u of o)u.dispose();return c}const U2=[[.95,-.052],[.968,-.045],[.976,-.028],[.981,-.012],[.992,-.002],[1.005,-.001],[1.02,-.007],[1.031,-.02],[1.035,-.04],[1.031,-.058],[1.018,-.074],[1.004,-.088],[1,-.1]];function F2(n){const t=[0];for(let o=1;o<n.length;o+=1)t.push(t[o-1]+n[o].distanceTo(n[o-1]));return{total:t[t.length-1],sample(o){let i=1;for(;i<n.length-1&&t[i]<o;)i+=1;const s=n[i-1],r=n[i],a=(o-t[i-1])/Math.max(1e-6,t[i]-t[i-1]),l=new st().subVectors(r,s).normalize();return{p:new st().lerpVectors(s,r,a),n:new st(-l.y,l.x)}}}}function Z4(n,t,e,o,i,s,r){const a=U2.map(([_,y])=>new st(_*n,y*e));for(let _=-.12*e;_>-i;_-=.015)a.push(new st(qg(n,t,e,_),_));a.push(new st(qg(n,t,e,-i),-i));const{total:l,sample:c}=F2(a),u=Math.max(16,Math.ceil(l/.018)),h=6,f=_=>{const y=Math.max(0,1-_/(.16*e)),A=1-Math.min(1,_/l)*.3,M=Math.max(0,(_-(l-.12))/.12);return s*(1+y*.8)*A*(1+M*M*.4)*(1+(ls(_*7+r,3.3)-.5)*.5)},d=_=>o+(ls(_*2.2+r,1.1)-.5)*.07*Math.min(1,_/.3)/n,p=$a(u,h,(_,y)=>{const A=_*l,{p:M,n:T}=c(A),R=f(A),L=R*.28+.002,U=d(A),z=y*Math.PI,O=Math.sin(z)*L-.003*e,B=Math.cos(z)*R,N=M.x+T.x*O;return Hr(N,M.y+T.y*O,U).add(new P(-Math.sin(U),0,Math.cos(U)).multiplyScalar(B))}),v=c(l),m=f(l)*1.25,g=d(l),b=new Xe(1,14,10),x=new P(Math.cos(g),0,Math.sin(g)),w=new P(Math.sin(g),0,-Math.cos(g)),E=new It().makeBasis(w.clone().multiplyScalar(m),new P(0,m*1.2,0),x.clone().multiplyScalar(m*.62));E.setPosition(Hr(v.p.x+m*.62-.006*e,v.p.y-m*.35,g)),b.applyMatrix4(E);const S=b.getAttribute("uv");for(let _=0;_<S.count;_+=1)S.setXY(_,Vu,Vu);return[p,b]}function K4(n,t,e){const o=[],i=n*Hu-.004*e,s=-L2,r=.07*e,a=[0,.2,.4,.55,.68,.78,.86,.91,.95,.975,.99,1],l=$a(96,a.length-1,(v,m)=>{const g=i*a[Math.round(m*(a.length-1))],b=Math.max(0,(g-(i-r))/r);return Hr(g,s+b*b*.02*e,v*Math.PI*2)}),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let v=0;v<c.count;v+=1)u.setXY(v,.5+c.getX(v)/i*.5,.5-c.getZ(v)/i*.5);o.push(l);const h={from:3.55,to:4.65};o.push($a(120,4,(v,m)=>{const g=v*Math.PI*2,b=n*(.901+m*.073),x=Math.abs(m-.5)*2,E=(-.052+(g>h.from-.3&&g<h.to+.3?Math.sin((g-(h.from-.3))/(h.to-h.from+.6)*Math.PI):0)*.016+x*x*.007+(ls(g*6,2)-.5)*.006)*e;return Hr(b,E,g)})),o.push($a(120,3,(v,m)=>{const g=v*Math.PI*2,b=(-.036-ls(g*5,7)*.02)*e,x=s-.02*e;return Hr(n*Hu-.003*e,x+(b-x)*m,g)}));const f=F2(U2.map(([v,m])=>new st(v*n,m*e)));o.push($a(72,10,(v,m)=>{const g=h.from-.08+v*(h.to-h.from+.16),b=Math.pow(Math.sin(v*Math.PI),.35),x=f.total*(.62+ls(g*9,4.2)*.38)*b,w=m*f.total,{p:E,n:S}=f.sample(w),_=w<=x?(.008*b+.002)*e*(1-Math.pow(w/Math.max(x,.001),6))-.002*e:-.004*e;return Hr(E.x+S.x*_,E.y+S.y*_,g)})),[[3.6,.56,.022],[3.74,1.14,.03],[3.86,.3,.016],[4,.74,.026],[4.2,.95,.021],[4.33,.22,.018],[4.5,.62,.024],[4.6,.36,.014],[.85,.24,.013],[2.55,.44,.015],[5.55,.33,.014]].forEach(([v,m,g],b)=>o.push(...Z4(n,t,e,v,m*e,g*e,b*7.3)));const p=Le(o,!1);for(const v of o)v.dispose();return p}const Yg=new Map,Zg=new Map;let Kg=null,A0=null;function j4(n,t){const e=`${n}x${t}`,o=Yg.get(e);if(o)return o;const i=n/.78,s=t-(hd+D2)*i,r=new ie(n*Gu,n*Gu,s,96,1,!0);r.translate(0,-hd*i-s/2,0);const a={steel:Y4(n,t,i),paint:K4(n,t,i),label:r};return Yg.set(e,a),a}function J4(n){Kg??(Kg=new wt({color:12830408,metalness:.72,roughness:.3})),A0??(A0=$4());let t=Zg.get(n);return t||(t={label:new wt({map:q4(n),roughness:.78,metalness:0}),paint:new wt({color:n,roughness:1,roughnessMap:A0,bumpMap:A0,bumpScale:.6,metalness:0})},Zg.set(n,t)),{steel:Kg,...t}}function Q4(n=.78,t=I2,e=3100550){const o=new Et,{steel:i,paint:s,label:r}=j4(n,t),a=J4(e),l=new lt(i,a.steel);l.name="steel",l.castShadow=!0,l.receiveShadow=!0,o.add(l);const c=new lt(r,a.label);c.name="label",c.receiveShadow=!0,o.add(c);const u=new lt(s,a.paint);return u.name="paint",u.receiveShadow=!0,o.add(u),{group:o,radius:n,dispose(){}}}function O2(){return new wt({color:12432806,roughness:.82,metalness:0})}function tR(n,t,e,o=.17){const i=new Et,s=O2(),r=e*.58,a=new ln;a.absarc(0,0,n,-r,r,!1),a.absarc(0,0,t,r,-r,!0),a.closePath();const l=new bn(a,{depth:o,bevelEnabled:!0,bevelSize:.022,bevelThickness:.018,bevelSegments:2,curveSegments:14});l.rotateX(-Math.PI/2),l.translate(0,-o,0);const c=(n+t)/2,u=l.getAttribute("position");for(let f=0;f<u.count;f+=1){const d=u.getY(f);if(d<-.001)continue;const p=u.getX(f),v=u.getZ(f),m=Math.hypot(p,v),g=Math.min(1,Math.abs(m-c)/((t-n)*.5)),b=Math.min(1,Math.abs(Math.atan2(v,p))/r),x=(1-g*g)*(1-b*b*b);u.setY(f,d-x*.021)}u.needsUpdate=!0,l.computeVertexNormals();const h=new lt(l,s);return h.castShadow=!0,h.receiveShadow=!0,i.add(h),{group:i,dispose(){s.dispose(),l.dispose()}}}function eR(n,t){const e=new Et,o=O2(),i=[o],s=[];for(let f=0;f<=10;f+=1){const d=f/10,p=1+Math.sin(d*Math.PI)*.035;s.push(new st(n*p,d*t))}const r=new lt(new an(s,40),o);r.castShadow=!0,r.receiveShadow=!0,e.add(r);const a=20,l=new ie(n*.055,n*.055,t*.98,6,1),c=new Go(l,o,a);c.castShadow=!0;const u=new Ie;for(let f=0;f<a;f+=1){const d=f/a*Math.PI*2;u.position.set(Math.cos(d)*n*.995,t/2,Math.sin(d)*n*.995),u.rotation.set(0,0,0),u.updateMatrix(),c.setMatrixAt(f,u.matrix)}c.instanceMatrix.needsUpdate=!0,e.add(c);const h=new an([[1,0],[1.26,0],[1.3,.05],[1.26,.1],[1.12,.13],[1.06,.2],[1,.24]].map(([f,d])=>new st(f*n,d)),36);for(const[f,d]of[[0,1],[t,-1]]){const p=new lt(h,o);p.position.y=f,p.scale.y=d,p.castShadow=!0,e.add(p)}return{group:e,dispose(){for(const f of i)f.dispose();r.geometry.dispose(),l.dispose(),h.dispose()}}}const Wu=1.25,qa=1.16,Do=72,hn=2.6,fd=hn+.2,Xu=8,nR=[{phase:Math.PI/Xu,reach:1.46,cup:0,candle:.25,thick:.034,scroll:!0,path:[[.1,-.85],[.32,-.93],[.66,-.9],[.98,-.77],[1.24,-.55],[1.4,-.3],[1.46,-.08],[1.46,0]]},{phase:Math.PI/Xu,reach:1.79,cup:-.34,candle:.22,thick:.03,scroll:!1,path:[[.17,-.99],[.48,-1.08],[.95,-1.1],[1.38,-.98],[1.66,-.72],[1.78,-.46],[1.79,-.34]]}];function jg(n){const t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)}function qi(n,t,e){const o=n.length,i=new Float32Array(o*t*3);for(let a=0;a<o;a+=1){const l=n[Math.max(0,a-1)],c=n[Math.min(o-1,a+1)],u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h)||1,[d,p]=n[a];for(let v=0;v<t;v+=1){const m=v/t*Math.PI*2,g=e?e(a,m):0,b=d+h/f*g,x=p-u/f*g;i.set([Math.sin(m)*b,x,Math.cos(m)*b],(a*t+v)*3)}}const s=[];for(let a=0;a<o-1;a+=1)for(let l=0;l<t;l+=1){const c=a*t+l,u=a*t+(l+1)%t,h=u+t,f=c+t;s.push(c,u,f,h,f,u)}const r=new $t;return r.setAttribute("position",new qt(i,3)),r.setIndex(s),r.computeVertexNormals(),r}function Pr(n,t,e,o,i=!1){const s=n.computeFrenetFrames(t,i),r=i?t:t+1,a=new Float32Array(r*e*3),l=new P;for(let h=0;h<r;h+=1){const f=h/t;n.getPointAt(f,l);const d=s.normals[h],p=s.binormals[h],v=o(f);for(let m=0;m<e;m+=1){const g=m/e*Math.PI*2,b=Math.cos(g)*v,x=Math.sin(g)*v;a.set([l.x+b*d.x+x*p.x,l.y+b*d.y+x*p.y,l.z+b*d.z+x*p.z],(h*e+m)*3)}}const c=[];for(let h=0;h<t;h+=1){const f=(h+1)%r;for(let d=0;d<e;d+=1){const p=h*e+d,v=f*e+d,m=f*e+(d+1)%e,g=h*e+(d+1)%e;c.push(p,g,v,v,g,m)}}const u=new $t;return u.setAttribute("position",new qt(a,3)),u.setIndex(c),u.computeVertexNormals(),u}function Jg(n,t,e,o=3){return Pr(new Nv(n,t),1,o,()=>e)}function R0(n,t,e,o,i){const s=new Float32Array(o*i*3);for(let l=0;l<o;l+=1){const c=l/o*Math.PI*2,u=Math.cos(c)*n,h=Math.sin(c)*t,f=Math.cos(c)/n,d=Math.sin(c)/t,p=Math.hypot(f,d);for(let v=0;v<i;v+=1){const m=v/i*Math.PI*2+Math.PI/i,g=Math.cos(m)*e;s.set([u+f/p*g,h+d/p*g,Math.sin(m)*e],(l*i+v)*3)}}const r=[];for(let l=0;l<o;l+=1){const c=(l+1)%o;for(let u=0;u<i;u+=1){const h=l*i+u,f=c*i+u,d=c*i+(u+1)%i,p=l*i+(u+1)%i;r.push(h,f,p,f,d,p)}}const a=new $t;return a.setAttribute("position",new qt(s,3)),a.setIndex(r),a.computeVertexNormals(),a}class Qg extends Ao{constructor(t,e){super(),this.radius=t,this.y=e}getPoint(t,e=new P){const o=t*Math.PI*2;return e.set(Math.cos(o)*this.radius,this.y,Math.sin(o)*this.radius)}}function P0(n,t,e){const o=t.clone().normalize(),i=e.clone().addScaledVector(o,-e.dot(o)).normalize(),s=new P().crossVectors(i,o);return new It().makeBasis(o,s,i).setPosition(n)}function t1(n){const t=n*.3,e=[];for(let i=0;i<8;i+=1){const s=i/8*Math.PI*2,r=(i+1)/8*Math.PI*2,a=[Math.cos(s)*n,Math.sin(s)*n,0],l=[Math.cos(r)*n,Math.sin(r)*n,0];e.push(0,0,t,...a,...l),e.push(0,0,-t,...l,...a)}const o=new $t;return o.setAttribute("position",new Dt(e,3)),o.computeVertexNormals(),o}function e1(n){const t=n/.12,e=qi([[0,-.12*t],[.019*t,-.096*t],[.03*t,-.064*t],[.023*t,-.03*t],[.009*t,-.008*t],[0,0]],8);e.scale(1,1,.55);const o=e.toNonIndexed();e.dispose();const i=o.getAttribute("position"),s=[],r=new P,a=new P,l=new P;for(let u=0;u<i.count;u+=3)r.fromBufferAttribute(i,u),a.fromBufferAttribute(i,u+1),l.fromBufferAttribute(i,u+2),!(a.clone().sub(r).cross(l.clone().sub(r)).lengthSq()<1e-14)&&s.push(r.x,r.y,r.z,a.x,a.y,a.z,l.x,l.y,l.z);o.dispose();const c=new $t;return c.setAttribute("position",new Dt(s,3)),c.computeVertexNormals(),c}function Nc(n,t,e,o=.25){const i=n.getAttribute("position"),s=n.getAttribute("normal"),r=new Float32Array(i.count),a=new P,l=new P,c=new P;for(let u=0;u<i.count;u+=1){a.fromBufferAttribute(i,u),l.fromBufferAttribute(s,u);let h=0;for(const f of t){c.subVectors(f,a);const d=Math.max(c.length(),1e-4),p=Math.max(0,(l.dot(c)/d+o)/(1+o));h+=p/(1+(d/e)**2)}r[u]=h}n.setAttribute("lit",new qt(r,1))}function z2(n){for(const t of Object.keys(n.attributes))t!=="position"&&t!=="normal"&&t!=="lit"&&n.deleteAttribute(t);return n}function Uc(n){const t=Le(n.map(z2),!1);for(const e of n)e.dispose();return t}const yl={uTime:{value:0},uFlicker:{value:1}};function Fc(n,t,e=""){const o={value:t};return n.onBeforeCompile=i=>{i.uniforms.uGlow=o,i.uniforms.uFlicker=yl.uFlicker,i.uniforms.uTime=yl.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float lit;
varying float vLit;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLit = lit;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGlow;
uniform float uFlicker;
uniform float uTime;
varying float vLit;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlow * vLit * uFlicker;
${e}`)},n.customProgramCacheKey=()=>`candlelit${e.length}`,n}const oR=`
  vec3 cell = floor(normal * 4.0 + 0.5);
  float facet = fract(sin(dot(cell, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
  float hue = fract(sin(dot(cell, vec3(39.346, 11.135, 83.155))) * 24634.6345);
  vec3 prism = 0.55 + 0.45 * cos(6.2831 * (hue + vec3(0.0, 0.33, 0.67)));
  totalEmissiveRadiance += mix(vec3(1.0, 0.94, 0.86), prism, 0.5) * pow(facet, 4.0) * 1.5;
  float glint = smoothstep(0.93, 0.99, facet) * (0.6 + 0.4 * sin(uTime * 2.3 + hue * 60.0));
  totalEmissiveRadiance += vec3(1.0, 0.9, 0.76) * glint * 3.0;
  float rim = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 3.0);
  totalEmissiveRadiance += vec3(0.6, 0.68, 0.82) * rim * 0.35;
`,iR=`
uniform float uTime;
attribute vec2 corner;
attribute vec2 spark;
varying vec2 vCorner;
varying float vKind;
varying float vPulse;
#include <fog_pars_vertex>

void main() {
  float t = uTime * 1.0 + spark.x * 37.0;
  // Never quite still, and never two alike.
  float pulse = 1.0 + 0.10 * sin(t * 9.1) + 0.06 * sin(t * 15.7 + 1.3) + 0.04 * sin(t * 23.3 + spark.x * 5.0);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  // Standing up in the world, facing the camera round that axis, and
  // foreshortened to a round spot of light when seen from straight above
  // — which is what a flame looks like from there.
  vec3 up = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float stand = length(up.xy);
  vec2 axis = stand > 1e-3 ? up.xy / stand : vec2(0.0, 1.0);
  vec2 across = vec2(axis.y, -axis.x);

  if (spark.y < 0.5) {
    float wide = 0.021;
    float tall = 0.078 * pulse;
    float lean = 0.004 * sin(t * 6.3) * max(corner.y, 0.0);
    mvPosition.xy += across * (corner.x * wide + lean) + axis * corner.y * mix(wide, tall, stand);
  } else {
    float r = 0.15 * (0.94 + 0.06 * pulse);
    mvPosition.xy += (across * corner.x + axis * corner.y) * r;
  }
  vCorner = corner;
  vKind = spark.y;
  vPulse = pulse;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,sR=`
varying vec2 vCorner;
varying float vKind;
varying float vPulse;
#include <fog_pars_fragment>

void main() {
  vec3 colour;
  if (vKind < 0.5) {
    // A teardrop: round at the root, drawn to a point at the tip.
    float y = vCorner.y;
    float root = 0.22;
    float half_ = y < root
      ? sqrt(max(0.0, 1.0 - pow((root - y) / 0.47, 2.0)))
      : pow(max(0.0, 1.0 - (y - root) / (1.0 - root)), 0.75);
    float d = abs(vCorner.x) / max(half_, 1e-3);
    float body = smoothstep(1.0, 0.45, d);
    float core = smoothstep(0.75, 0.0, d) * smoothstep(0.8, 0.15, y) * smoothstep(-0.25, 0.05, y);
    colour = mix(vec3(1.0, 0.36, 0.07), vec3(1.0, 0.84, 0.52), core) * body * (2.6 + 6.0 * core);
    // And the blue at the root, where the wax vapour has not caught yet.
    colour += vec3(0.08, 0.14, 0.55) * smoothstep(0.08, -0.2, y) * body;
    colour *= vPulse;
  } else {
    // The air round it.
    float r2 = dot(vCorner, vCorner);
    colour = vec3(1.0, 0.5, 0.18) * exp(-r2 * 5.0) * (1.0 - smoothstep(0.6, 1.0, r2)) * 0.32 * vPulse;
  }
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
    // Added light fades to nothing in fog, not to the fog's colour.
    colour *= 1.0 - fogFactor;
  #endif
  gl_FragColor = vec4(colour, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function rR(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d"),o=1024/2,i=o/qa,s=(l,c,u)=>{e.strokeStyle=u,e.lineWidth=c*i,e.beginPath(),e.arc(o,o,l*i,0,Math.PI*2),e.stroke()},r=(l,c)=>[o+Math.cos(c)*l*i,o+Math.sin(c)*l*i];e.fillStyle="#c4c4c4",e.fillRect(0,0,1024,1024);for(let l=0;l<16;l+=1){const c=l/16*Math.PI*2;e.save(),e.translate(...r(.09,c)),e.rotate(c);const u=e.createRadialGradient(0,0,0,0,0,.07*i);u.addColorStop(0,"#ffffff"),u.addColorStop(1,"#9a9a9a"),e.fillStyle=u,e.beginPath(),e.ellipse(0,0,.075*i,.024*i,0,0,Math.PI*2),e.fill(),e.strokeStyle="#3a3a3a",e.lineWidth=.004*i,e.stroke(),e.restore()}e.fillStyle="#f2f2f2",e.beginPath(),e.arc(o,o,.035*i,0,Math.PI*2),e.fill(),s(.035,.006,"#3a3a3a"),s(.185,.008,"#2e2e2e");for(let l=0;l<36;l+=1){const[c,u]=r(.212,l/36*Math.PI*2),h=e.createRadialGradient(c-.004*i,u-.004*i,0,c,u,.016*i);h.addColorStop(0,"#ffffff"),h.addColorStop(1,"#6a6a6a"),e.fillStyle=h,e.beginPath(),e.arc(c,u,.014*i,0,Math.PI*2),e.fill()}s(.238,.008,"#2e2e2e");for(let l=0;l<24;l+=1){const c=l/24*Math.PI*2;e.save(),e.translate(o,o),e.rotate(c);const u=e.createLinearGradient(0,-.05*i,0,.05*i);u.addColorStop(0,"#8c8c8c"),u.addColorStop(.5,"#ffffff"),u.addColorStop(1,"#8c8c8c"),e.fillStyle=u,e.beginPath(),e.moveTo(.26*i,0),e.quadraticCurveTo(.42*i,-.075*i,.66*i,-.05*i),e.quadraticCurveTo(.72*i,0,.66*i,.05*i),e.quadraticCurveTo(.42*i,.075*i,.26*i,0),e.fill(),e.strokeStyle="#353535",e.lineWidth=.004*i,e.stroke(),e.rotate(Math.PI/24),e.beginPath(),e.moveTo(.44*i,0),e.lineTo(.7*i,0),e.lineWidth=.006*i,e.stroke(),e.restore()}s(.735,.01,"#2a2a2a");for(const l of[0,Math.PI]){e.beginPath();for(let c=0;c<=720;c+=1){const u=c/720*Math.PI*2,[h,f]=r(.785+.028*Math.sin(u*36+l),u);c===0?e.moveTo(h,f):e.lineTo(h,f)}e.strokeStyle="#303030",e.lineWidth=.007*i,e.stroke()}s(.835,.01,"#2a2a2a");for(let l=0;l<44;l+=1){const c=l/44*Math.PI*2;e.save(),e.translate(...r(.955,c)),e.rotate(c);const u=e.createRadialGradient(0,0,0,0,0,.07*i);u.addColorStop(0,"#ffffff"),u.addColorStop(1,"#8a8a8a"),e.fillStyle=u,e.beginPath(),e.ellipse(0,0,.078*i,.047*i,0,0,Math.PI*2),e.fill(),e.strokeStyle="#303030",e.lineWidth=.006*i,e.stroke(),e.rotate(Math.PI/44),e.beginPath(),e.moveTo(.89*i,0),e.lineTo(1.03*i,0),e.stroke(),e.restore()}s(1.055,.012,"#2a2a2a"),s(1.115,.006,"#3a3a3a");const a=new ce(t);return a.colorSpace=te,a.anisotropy=8,a}let n1=null;function aR(){const n=[],t=[],e=[],o=[],i=new P(0,1,0),s=[[.2,-.736],[.235,-.725],[.275,-.7],[.29,-.672],[.285,-.648],[.33,-.632],[.46,-.6],[.62,-.55],[.78,-.49],[.92,-.43],[1.04,-.375],[1.12,-.335],[1.16,-.31]];n.push(qi(s,Do,(q,ct)=>q<5||q>11?0:.036*Math.sin((q-5)/6*Math.PI)*(.5+.5*Math.cos(ct*18))));const r=[[1.16,-.31],[1.215,-.285],[1.235,-.245],[1.242,-.2],[1.232,-.155],[1.212,-.122],[1.203,-.1],[1.232,-.086],[Wu,-.05],[1.243,-.017],[1.215,0],[qa,0]];n.push(qi(r,Do,(q,ct)=>q<1||q>5?0:.022*Math.sin((q-1)/4*Math.PI)*(.5+.5*Math.cos(ct*24)))),n.push(qi([[0,-1.86],[.012,-1.82],[.03,-1.76],[.04,-1.71],[.032,-1.675],[.05,-1.64],[.085,-1.6],[.1,-1.55],[.09,-1.5],[.055,-1.465],[.045,-1.42],[.06,-1.35],[.095,-1.28],[.12,-1.24],[.11,-1.21],[.07,-1.18],[.08,-1.12],[.13,-1.07],[.19,-1.01],[.195,-.98],[.16,-.94],[.11,-.91],[.1,-.87],[.13,-.83],[.2,-.79],[.25,-.765],[.23,-.74]],16));const a=()=>qi([[0,0],[.085,.022],[.088,.032],[.042,.032],[.036,.085],[.043,.092],[0,.092]],8),l=[];nR.forEach((q,ct)=>{for(let vt=0;vt<Xu;vt+=1){const V=q.phase+vt/Xu*Math.PI*2,I=new It().makeRotationY(V),D=new P(1,0,0).applyMatrix4(I),tt=new P().crossVectors(i,D),nt=Pr(new zn(q.path.map(([ut,mt])=>new P(ut,mt,0))),14,6,ut=>q.thick*(1-.5*ut));if(nt.applyMatrix4(I),n.push(nt),q.scroll){const ut=[[.8,-.46],[.93,-.5],[1.03,-.56],[1.075,-.64],[1.062,-.7],[1.025,-.728],[.99,-.716],[.982,-.686],[1.004,-.672],[1.022,-.688]].map(([W,xt])=>new P(W,xt,0)),mt=Pr(new zn(ut),11,4,W=>.019*(1-.55*W));mt.applyMatrix4(I),n.push(mt)}const Z=new P(q.reach,q.cup,0).applyMatrix4(I),pt=a();pt.translate(Z.x,Z.y,Z.z),n.push(pt),l.push({at:Z,out:D,tangent:tt,tier:ct});const Y=q.candle-.045*jg(vt+ct*11),F=qi([[.027,.07],[.027,.07+Y-.012],[.024,.07+Y],[.01,.066+Y],[0,.068+Y]],8);F.translate(Z.x,Z.y,Z.z);const C=F.getAttribute("position"),K=new Float32Array(C.count);for(let ut=0;ut<C.count;ut+=1){const mt=Z.y+.07+Y-C.getY(ut);K[ut]=Math.exp(-mt/.05)*(mt<.004?1.3:1)}F.setAttribute("lit",new qt(K,1)),e.push(F),o.push(new P(Z.x,Z.y+.075+Y,Z.z))}});const c=t1(.034),u=t1(.022),h=e1(.12),f=e1(.2),d=(q,ct)=>{t.push(q.clone().applyMatrix4(ct))},p=(q,ct)=>{n.push(Jg(q,ct,.0028))},v=(q,ct,vt,V=.018)=>{const I=q.clone().add(new P(0,-V,0));p(q,I),d(vt,P0(I,new P().crossVectors(i,ct),ct))},m=(q,ct,vt,V,I)=>{const D=q.getLength(),tt=Math.max(1,Math.floor(D/V)),nt=(D-tt*V)/2,Z=[];let pt=q.getPointAt(0);for(let Y=0;Y<tt;Y+=1){const F=(nt+(Y+.5)*V)/D,C=q.getPointAt(F),K=q.getTangentAt(F),ut=P0(C,K,I(C));d(ct,ut);const mt=C.clone().addScaledVector(K,-vt),W=C.clone().addScaledVector(K,vt);p(pt,mt),pt=W,Z.push(C)}return p(pt,q.getPointAt(1)),Z},g=q=>new P(q.x,0,q.z).normalize(),b=l.filter(q=>q.tier===0);b.forEach((q,ct)=>{const vt=b[(ct+1)%b.length],V=q.at.clone().addScaledVector(q.tangent,.075).add(new P(0,.012,0)),I=vt.at.clone().addScaledVector(vt.tangent,-.075).add(new P(0,.012,0)),D=V.clone().lerp(I,.5).add(new P(0,-.58,0)),tt=new bu(V,D,I),nt=m(tt,c,.034,.104,g),Z=nt[Math.floor(nt.length/2)];v(Z.clone().add(new P(0,-.034,0)),g(Z),h,.016)});for(const q of l){const ct=q.at.clone().addScaledVector(q.out,.08).add(new P(0,.014,0));v(ct,q.out,h)}const x=.36,w=-1.22;n.push(Pr(new Qg(x,w),36,4,()=>.012,!0));for(let q=0;q<6;q+=1){const ct=q/6*Math.PI*2;n.push(Jg(new P(Math.cos(ct)*.1,w,Math.sin(ct)*.1),new P(Math.cos(ct)*x,w,Math.sin(ct)*x),.007,4))}for(let q=0;q<10;q+=1){const ct=(q+.5)/10*Math.PI*2,vt=new P(Math.cos(ct),0,Math.sin(ct));m(new bu(vt.clone().multiplyScalar(x).setY(w),vt.clone().multiplyScalar(.44).setY(w-.3),vt.clone().multiplyScalar(.06).setY(w-.44)),u,.022,.066,()=>vt)}v(new P(0,-1.86,0),new P(0,0,1),f,.02);for(const q of[c,u,h,f])q.dispose();const E=Uc(n);Nc(E,o,.34,.5);const S=Uc(t);Nc(S,o,.34);const _=Uc(e),y=[0,.3,.6,.85,1.02,qa],A=[],M=[];for(const q of y)for(let ct=0;ct<Do;ct+=1){const vt=ct/Do*Math.PI*2,V=Math.sin(vt)*q,I=Math.cos(vt)*q;A.push(V,0,I),M.push(.5+V/(2*qa),.5-I/(2*qa))}const T=[];for(let q=0;q<y.length-1;q+=1)for(let ct=0;ct<Do;ct+=1){const vt=q*Do+ct,V=q*Do+(ct+1)%Do;T.push(vt,V+Do,V,vt,vt+Do,V+Do)}const R=new $t;R.setAttribute("position",new Dt(A,3)),R.setAttribute("uv",new Dt(M,2)),R.setIndex(T),R.computeVertexNormals(),Nc(R,o,.3);const L=[],U=[],z=[],O=[];o.forEach((q,ct)=>{const vt=jg(ct*3.7+1),V=[[0,-.25,0],[1,-1,.035]];for(const[I,D,tt]of V){const nt=L.length/3;for(const[Z,pt]of[[-1,D],[1,D],[1,1],[-1,1]])L.push(q.x,q.y+tt,q.z),U.push(Z,pt),z.push(vt,I);O.push(nt,nt+1,nt+2,nt,nt+2,nt+3)}});const B=new $t;B.setAttribute("position",new Dt(L,3)),B.setAttribute("corner",new Dt(U,2)),B.setAttribute("spark",new Dt(z,2)),B.setIndex(O),B.computeBoundingSphere(),B.boundingSphere.radius+=.2;const N=[],H=.42;N.push(Pr(new Qg(H,hn),48,5,()=>.024,!0)),N.push(qi([[0,hn-.16],[.03,hn-.15],[.07,hn-.1],[.095,hn-.04],[.09,hn+.02],[.06,hn+.08],[.035,hn+.13],[.04,hn+.16],[.02,hn+.18],[0,hn+.18]],14));for(let q=0;q<8;q+=1){const ct=Math.PI/4+q/8*Math.PI*2,vt=new P(Math.cos(ct),0,Math.sin(ct)),V=q%2===0?1:.7,I=qi([[0,-.03],[.022,-.02],[.026,0],[.016,.022],[.006,.05],[0,.056]],8);if(I.scale(V,V,V),I.translate(vt.x*H,hn,vt.z*H),N.push(I),q%2===1)continue;N.push(Pr(new zn([vt.clone().multiplyScalar(.07).setY(hn+.06),vt.clone().multiplyScalar(.24).setY(hn+.13),vt.clone().multiplyScalar(H-.01).setY(hn)]),8,5,tt=>.016*(1-.3*tt)));const D=R0(.022,.03,.007,10,4);D.applyMatrix4(P0(vt.clone().multiplyScalar(Wu-.012).setY(.018),vt,new P().crossVectors(i,vt))),N.push(D)}const G=R0(.03,.045,.011,12,4);G.translate(0,hn+.2,0),N.push(G);const $=Uc(N);Nc($,[],1);const Q=z2(R0(lR,B2,k2,8,4));Q.setAttribute("lit",new qt(new Float32Array(Q.getAttribute("position").count),1));const j=Fc(new wt({color:11570506,roughness:.3,metalness:.9,envMapIntensity:1.5}),new bt(1,.5,.18).multiplyScalar(.7)),X=rR(),at=Fc(new wt({color:13806690,map:X,bumpMap:X,bumpScale:2.2,roughness:.36,metalness:.88,envMapIntensity:1.5}),new bt(1,.5,.18).multiplyScalar(.7)),rt=Fc(new wt({color:15853520,roughness:.62}),new bt(1,.55,.22).multiplyScalar(1.6)),ft=Fc(new wt({color:6055544,roughness:.04,metalness:.7,envMapIntensity:3.5,emissive:658708,flatShading:!0}),new bt(1,.72,.42).multiplyScalar(.6),oR),et=new Se({vertexShader:iR,fragmentShader:sR,uniforms:Mv.merge([Rt.fog,{}]),transparent:!0,depthWrite:!1,blending:Tn,fog:!0});return et.uniforms.uTime=yl.uTime,et.customProgramCacheKey=()=>"chandelier-flame",{brass:j,plate:at,wax:rt,glass:ft,flame:et,body:E,floor:R,candles:_,crystal:S,flames:B,crown:$,link:Q}}const lR=.024,B2=.068,k2=.011,cR=2*B2-2*k2;function o1(n,t,e,o){const i=new P().subVectors(t,n),s=i.length(),r=cR*e,a=Math.max(1,Math.round(s/r)),l=new He().setFromUnitVectors(new P(0,1,0),i.clone().normalize()),c=new He().setFromAxisAngle(new P(0,1,0),Math.PI/2),u=new P(e,e,e);for(let h=0;h<a;h+=1){const f=n.clone().addScaledVector(i,(h+.5)/a),d=h%2===0?l.clone():l.clone().multiply(c);o.push(new It().compose(f,d,u))}}function uR(n={}){n1??(n1=aR());const t=n1,e=new Et,o=new lt(t.body,t.brass);o.name="brass",o.castShadow=!0,o.receiveShadow=!0,e.add(o);const i=new lt(t.floor,t.plate);i.name="floor",i.receiveShadow=!0,e.add(i);const s=new lt(t.candles,t.wax);s.name="wax",e.add(s);const r=new lt(t.crystal,t.glass);r.name="glass",e.add(r);const a=new lt(t.flames,t.flame);a.name="flames",e.add(a);let l=null;const c=n.chain??0;if(c>0){const u=new lt(t.crown,t.brass);u.name="crown",u.castShadow=!0,e.add(u);const h=[];for(let f=0;f<4;f+=1){const d=Math.PI/4+f/4*Math.PI*2,p=new P(Math.cos(d),0,Math.sin(d));o1(p.clone().multiplyScalar(Wu-.012).setY(.045),p.clone().multiplyScalar(.42).setY(hn+.03),1,h)}o1(new P(0,fd+.03,0),new P(0,fd+c,0),1.3,h),l=new Go(t.link,t.brass,h.length),h.forEach((f,d)=>l.setMatrixAt(d,f)),l.name="chain",l.computeBoundingSphere(),e.add(l)}return{group:e,reach:Wu,update(u){yl.uTime.value=u,yl.uFlicker.value=1+.07*Math.sin(u*8.3)+.04*Math.sin(u*13.1+1.7)},dispose(){l==null||l.dispose()}}}const i1=.155,za=.15,hR=.032;function fR(n=1.5,t=1.5,e=.62,o=0){const i=new Et,s=new wt({color:16777215,roughness:.98,metalness:0,vertexColors:!0}),r=new wt({color:3095114,roughness:.72,metalness:.1}),a=Math.round(n/za*4),l=Math.round(e/i1)*6,c=new ee(n,e,t,a,l,a),u=c.getAttribute("position"),h=new Float32Array(u.count*3),f=(b,x)=>{const w=Math.sin(b*12.9898+x*78.233+o*3.7)*43758.5453;return w-Math.floor(w)-.5},d=Math.max(1,Math.round(e/i1));for(let b=0;b<u.count;b+=1){const x=u.getX(b),w=u.getY(b),E=u.getZ(b),S=.5-w/e,_=1+Math.sin(S*Math.PI)*.07,y=Math.min(1,Math.hypot(x/(n/2),E/(t/2))),A=w>e/2-1e-4,M=A?(1-y*y)*-.045*e:0,T=1-Math.pow(y,6),R=A?hR*T*(.5+.5*Math.cos(x/za*Math.PI*2)*Math.cos(E/za*Math.PI*2)):0,L=(e/2-w)/(e/d),U=Math.abs(L-Math.round(L)),z=!A&&w>-e/2+1e-4&&Math.round(L)>0&&Math.round(L)<d?1-Math.min(1,U*14):0,O=1-z*.022;u.setXYZ(b,x*_*O+f(x,E)*.01,w+M+R+f(E,w)*.006,E*_*O+f(w,x)*.01);const B=Math.min(d-1,Math.floor(Math.max(0,L))),N=.86+(Math.sin((B+1)*91.7+o)*43758.5453%1+1)%1*.1,H=A?.95-(.5-.5*Math.cos(x/za*Math.PI*2)*Math.cos(E/za*Math.PI*2))*.14:N*(1-z*.35);h[b*3]=H*.99,h[b*3+1]=H*.97,h[b*3+2]=H*.92}u.needsUpdate=!0,c.setAttribute("color",new qt(h,3)),c.computeVertexNormals(),c.translate(0,e/2,0);const p=new Et;p.position.y=-e,i.add(p);const v=new lt(c,s);v.castShadow=!0,v.receiveShadow=!0,p.add(v);for(const b of[-.22,.24]){const x=new lt(new ee(n*1.03,e*.9,.045),r);x.position.set(0,e/2,t*b),p.add(x)}let m=0,g=0;return{group:i,press(b){g-=3.2*Math.min(1,Math.max(.2,b))},update(b){if(Math.abs(m)<1e-4&&Math.abs(g)<1e-4)return;const x=Math.min(b,1/30);g+=(-m*420-g*14)*x,m+=g*x;const w=Math.max(-.35,Math.min(.2,m));p.scale.set(1-w*.35,1+w,1-w*.35)},dispose(){s.dispose(),r.dispose(),c.dispose();for(const b of p.children)b instanceof lt&&b.geometry.dispose()}}}const dR=.045;function G2(n,t){const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function pR(n,t){const o=Math.round(1024*n),i=document.createElement("canvas");i.width=1024,i.height=o;const s=i.getContext("2d");let r=t*1e3;const a=()=>(r+=1,G2(r,3.7)),l=Math.round(o*(1-dR)),c=Math.round(1024*.075),u=s.createLinearGradient(0,0,1024*.3,l);u.addColorStop(0,"#16283a"),u.addColorStop(.55,"#1b3136"),u.addColorStop(1,"#172a2e"),s.fillStyle=u,s.fillRect(0,0,1024,l);const h=["#e9dcbc","#c8705c","#d9ad4a","#9cb8cf","#f2ead6","#b85a6a"],f=["#56743c","#6e8a44","#3f5a33"],d=(y,A,M)=>{s.strokeStyle=f[Math.floor(a()*f.length)],s.lineWidth=Math.max(1,M*.18),s.beginPath(),s.moveTo(y,A+M*1.4),s.quadraticCurveTo(y+(a()-.5)*M,A+M*.6,y,A),s.stroke(),s.fillStyle=s.strokeStyle;for(const L of[-1,1])s.beginPath(),s.ellipse(y+L*M*.45,A+M*.9,M*.42,M*.16,L*.7,0,Math.PI*2),s.fill();const T=4+Math.floor(a()*3),R=h[Math.floor(a()*h.length)];s.fillStyle=R;for(let L=0;L<T;L+=1){const U=L/T*Math.PI*2+a();s.beginPath(),s.ellipse(y+Math.cos(U)*M*.42,A+Math.sin(U)*M*.42,M*.34,M*.22,U,0,Math.PI*2),s.fill()}s.fillStyle=a()<.5?"#e0b64a":"#7a2e24",s.beginPath(),s.arc(y,A,M*.2,0,Math.PI*2),s.fill()};for(let y=0;y<1100;y+=1){const A=c+a()*(1024-c*2),M=c+a()*(l-c*2);Math.abs(A-1024/2)<1024*.05&&M>l*.45||d(A,M,5+a()*7)}const p=1024/2,v=l-c-30,m=l*.2;s.strokeStyle="#5b4630",s.lineCap="round",s.lineWidth=26,s.beginPath(),s.moveTo(p,v),s.bezierCurveTo(p-14,v-200,p+16,m+260,p,m+60),s.stroke(),s.strokeStyle="#8a7048",s.lineWidth=7,s.beginPath(),s.moveTo(p+6,v),s.bezierCurveTo(p-6,v-200,p+20,m+260,p+4,m+60),s.stroke();const g=[],b=[];for(let y=0;y<7;y+=1){const A=v-140-y*((v-m-200)/7);for(const M of[-1,1]){const T=(330-y*26)*(.85+a()*.3),R=p+M*T*.55,L=A-60-a()*30,U=p+M*T,z=A-10+a()*30;s.strokeStyle="#5b4630",s.lineWidth=11-y,s.beginPath(),s.moveTo(p,A),s.bezierCurveTo(R,L,U,L-20,U-M*20,z),s.stroke();for(let O=0;O<7;O+=1){const B=.2+O*.12;b.push([p+(U-p)*B+(a()-.5)*30,A+(L-A)*Math.sin(B*Math.PI)*.8-a()*20,M])}g.push([U-M*20,z+18])}}for(const[y,A,M]of b)s.fillStyle=f[Math.floor(a()*f.length)],s.beginPath(),s.ellipse(y,A,20,8,M*(.5+a()*.6),0,Math.PI*2),s.fill(),s.strokeStyle="rgba(20,30,15,0.5)",s.lineWidth=1.5,s.beginPath(),s.moveTo(y-14,A),s.lineTo(y+14,A),s.stroke();for(const[y,A]of g)s.fillStyle="#9c2c24",s.beginPath(),s.arc(y,A,17,0,Math.PI*2),s.fill(),s.fillStyle="#c8543e",s.beginPath(),s.arc(y-5,A-5,8,0,Math.PI*2),s.fill(),s.fillStyle="#d9ad4a",s.beginPath(),s.moveTo(y-7,A-15),s.lineTo(y,A-25),s.lineTo(y+7,A-15),s.fill();const x=(y,A,M,T)=>{s.save(),s.translate(y,A),s.scale(M,1),s.fillStyle=T,s.beginPath(),s.ellipse(0,0,34,20,-.15,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(28,-18,13,0,Math.PI*2),s.fill(),s.beginPath(),s.moveTo(-26,-4),s.lineTo(-70,-22),s.lineTo(-62,6),s.fill(),s.fillStyle="#d9ad4a",s.beginPath(),s.moveTo(40,-20),s.lineTo(54,-16),s.lineTo(40,-13),s.fill(),s.fillStyle="#f2ead6",s.beginPath(),s.arc(31,-21,3,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255,240,210,0.55)",s.lineWidth=2;for(let R=0;R<4;R+=1)s.beginPath(),s.arc(-4+R*6,2,16-R*2,Math.PI*.15,Math.PI*.85),s.stroke();s.restore()};x(p-150,m+190,1,"#e9dcbc"),x(p+150,m+170,-1,"#9cb8cf");const w=(y,A,M)=>{s.save(),s.translate(y,A),s.scale(M,1),s.fillStyle="#d8cbb0",s.beginPath(),s.ellipse(0,0,30,20,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(26,-14,14,11,.3,0,Math.PI*2),s.fill();for(const T of[0,9])s.beginPath(),s.ellipse(24+T,-38,5,17,.2+T*.02,0,Math.PI*2),s.fill();s.fillStyle="#3a2a20",s.beginPath(),s.arc(32,-16,2.5,0,Math.PI*2),s.fill(),s.restore()};w(p-210,v+4,1),w(p+230,v-10,-1),s.fillStyle="#6e2420",s.fillRect(0,0,1024,c),s.fillRect(0,l-c,1024,c),s.fillRect(0,0,c,l),s.fillRect(1024-c,0,c,l);const E=(y,A,M)=>{s.strokeStyle=A,s.lineWidth=M,s.strokeRect(y,y,1024-y*2,l-y*2)};E(5,"#d9c08a",4),E(c-4,"#d9c08a",4),E(c+2,"#1a1410",3);const S=(y,A,M,T)=>{const R=Math.hypot(M-y,T-A),L=(M-y)/R,U=(T-A)/R,z=Math.round(R/150);s.strokeStyle="#c9ae72",s.lineWidth=4,s.beginPath();for(let O=0;O<=200;O+=1){const B=O/200,N=Math.sin(B*z*Math.PI*2)*c*.26,H=y+L*R*B-U*N,G=A+U*R*B+L*N;O===0?s.moveTo(H,G):s.lineTo(H,G)}s.stroke();for(let O=0;O<z*2;O+=1){const B=(O+.5)/(z*2),N=O%2===0?1:-1,H=y+L*R*B-U*N*c*.22,G=A+U*R*B+L*N*c*.22;s.fillStyle=O%4===0?"#e9dcbc":"#86a052",s.beginPath(),s.ellipse(H,G,10,5,Math.atan2(U,L)+N*.8,0,Math.PI*2),s.fill()}},_=c/2;S(_,_,1024-_,_),S(1024-_,_,1024-_,l-_),S(1024-_,l-_,_,l-_),S(_,l-_,_,_),s.globalCompositeOperation="multiply";for(let y=0;y<l;y+=3)s.fillStyle=`rgba(0,0,0,${.1+a()*.06})`,s.fillRect(0,y,1024,1);for(let y=0;y<1024;y+=5)s.fillStyle="rgba(0,0,0,0.05)",s.fillRect(y,0,1,l);for(let y=0;y<60;y+=1){const A=a()*1024,M=a()*l,T=60+a()*180,R=s.createRadialGradient(A,M,0,A,M,T);R.addColorStop(0,`rgba(${150+a()*60},${130+a()*50},${110+a()*40},0.35)`),R.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=R,s.fillRect(A-T,M-T,T*2,T*2)}s.globalCompositeOperation="source-over";for(let y=0;y<40;y+=1){const A=a()*1024,M=a()*l,T=80+a()*200,R=s.createRadialGradient(A,M,0,A,M,T);R.addColorStop(0,"rgba(220,205,175,0.07)"),R.addColorStop(1,"rgba(220,205,175,0)"),s.fillStyle=R,s.fillRect(A-T,M-T,T*2,T*2)}s.clearRect(0,l,1024,o-l);for(let y=2;y<1024;y+=4){const A=(o-l)*(.72+a()*.26);s.strokeStyle=a()<.5?"#cbb58a":"#b39c70",s.lineWidth=2.4,s.beginPath(),s.moveTo(y,l),s.lineTo(y+(a()-.5)*3,l+A),s.stroke()}for(let y=8;y<1024;y+=16)s.fillStyle="#9c8558",s.fillRect(y-5,l+3,10,6);return i}function mR(n,t,e){const o=new Et;o.name="tapestry";const i=new ce(pR(t/n,e));i.colorSpace=te,i.anisotropy=8;const s={value:0},r=new wt({map:i,roughness:.97,side:we,alphaTest:.5,emissiveMap:i,emissive:16777215,emissiveIntensity:.22});r.onBeforeCompile=v=>{v.uniforms.uTime=s,v.uniforms.uDrop={value:t},v.vertexShader=`uniform float uTime;
uniform float uDrop;
${v.vertexShader}`.replace("#include <begin_vertex>",`#include <begin_vertex>
      // Stirred by the air of the shaft: nothing at the pole, most at the hem.
      float hang = clamp(-position.y / uDrop, 0.0, 1.0);
      transformed.z += (sin(uTime * 0.55 + position.x * 0.9) * 0.018
                      + sin(uTime * 0.31 + position.y * 1.7) * 0.012) * hang;`),v.fragmentShader=v.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      // The back of it: the same picture backwards, duller, and furred
      // with the ends of the threads.
      if (!gl_FrontFacing) {
        float grey = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
        diffuseColor.rgb = mix(vec3(grey), diffuseColor.rgb, 0.5) * 0.62;
      }`)},r.customProgramCacheKey=()=>"tapestry-wool";const a=new le(n,t,64,56);a.translate(0,-t/2,0);const l=a.getAttribute("position"),c=G2(e,9)*Math.PI*2;for(let v=0;v<l.count;v+=1){const m=l.getX(v),g=l.getY(v),b=Math.min(1,-g/t*4),x=Math.sin(m/n*Math.PI*2*3.5+c)*.03+Math.sin(m/n*Math.PI*2*9+c*2)*.008;l.setZ(v,x*(.3+.7*b))}a.computeVertexNormals();const u=new lt(a,r);u.castShadow=!0,u.receiveShadow=!0,o.add(u);const h=new wt({color:3876632,roughness:.6}),f=new wt({color:11570506,roughness:.35,metalness:.9}),d=new lt(new ie(.042,.042,n+.36,12).rotateZ(Math.PI/2).translate(0,.05,0),h);o.add(d);const p=new lt(new ie(.058,.058,n,14,1,!0).rotateZ(Math.PI/2).translate(0,.05,0),new wt({color:5906203,roughness:.95}));o.add(p);for(const v of[-1,1]){const m=new lt(new Xe(.07,14,10),f);m.position.set(v*(n/2+.24),.05,0),o.add(m);const g=new lt(new Tl(.035,.1,10).rotateZ(-v*Math.PI/2),f);g.position.set(v*(n/2+.33),.05,0),o.add(g)}return{group:o,update(v){s.value=v},dispose(){i.dispose(),r.dispose(),h.dispose(),f.dispose(),o.traverse(v=>{v instanceof lt&&(v.geometry.dispose(),v.material!==r&&v.material!==h&&v.material!==f&&v.material.dispose())})}}}const C0=.026,H2=.072,V2=.011,gR=2*H2-2*V2;let s1=null;function vR(){return s1??(s1=new dn(1,V2/C0,4,10).scale(C0,H2,C0)),s1}function Ya(n,t,e,o){const i=new P().subVectors(t,n),s=Math.max(1,Math.round(i.length()/(gR*e))),r=new He().setFromUnitVectors(new P(0,1,0),i.clone().normalize()),a=new He().setFromAxisAngle(new P(0,1,0),Math.PI/2),l=new P(e,e,e),c=new Go(vR(),o,s);for(let u=0;u<s;u+=1){const h=n.clone().addScaledVector(i,(u+.5)/s),f=u%2===0?r.clone():r.clone().multiply(a);c.setMatrixAt(u,new It().compose(h,f,l))}return c.computeBoundingSphere(),c}function xR(n,t){return{...n,width:n.width*t,depth:n.depth*t,bands:n.bands.map(e=>({inner:e.inner*t,out:e.out*t,depth:e.depth*t})),sightAt:n.sightAt*t,backAt:n.backAt*t,friezeDepth:n.friezeDepth*t,ornamentBand:{inner:n.ornamentBand.inner*t,out:n.ornamentBand.out*t,height:n.ornamentBand.height*t}}}function MR(n,t,e,o){const i=new Et;i.name="threshold";const s=nl(0,n),r=xR(s,e/s.width),a=lh(),l=ch(),c=[a,l.material],u=[],h=[];for(const g of[0,Math.PI]){const b=Hv(n,t,r),x=new It().makeRotationY(g);for(const w of b.gilt)u.push(w.applyMatrix4(x));for(const w of b.scrollwork)h.push(w.applyMatrix4(x))}const f=g=>{const b=Le(g.map(x=>x.index?x.toNonIndexed():x),!1);for(const x of g)x.dispose();return b},d=new lt(f(u),a),p=new lt(f(h),l.material);for(const g of[d,p])g.castShadow=!0,g.receiveShadow=!0,i.add(g);const v=new wt({color:13214284,roughness:.3,metalness:.92}),m=t/2+e*.8;for(const g of[-1,1]){const b=g*(n/2+e*.5);i.add(Ya(new P(b,m,0),new P(b*.8,m+o,0),1.25,v))}return{group:i,flare(g){const b=Math.max(0,g);for(const x of c)x.emissive.setRGB(1,.78,.42),x.emissiveIntensity=b*2.2},dispose(){a.dispose(),l.dispose(),v.dispose(),d.geometry.dispose(),p.geometry.dispose()}}}function hi(n){return n.facing.z!==0?n.facing.z>0?Math.PI:0:n.facing.x>0?-Math.PI/2:Math.PI/2}function yR(n){return Math.atan2(-n.facing.z,n.facing.x)}const I0=.78,wR=.92,_R=9;function SR(n,t){const e=new Et,o=[],i=new ah,s=new wt({color:9072712,roughness:.88}),r=new wt({color:3025446,roughness:.55,metalness:.6}),a=new wt({color:13148206,roughness:.35,metalness:.8,emissive:16766073,emissiveIntensity:.42}),l=lh(),c=ch(),u=new wt({color:11570506,roughness:.38,metalness:.9}),h=new wt({color:2367514,roughness:.95}),f=new wt({color:3881528,roughness:.45,metalness:.85}),d=new wt({color:11047275,roughness:.92}),p=[],v=[],m=[],g=[],b=dT(),x=[],w=[],E=[],S=[],_=[],y=[],A=[],M=[],T=[],R=[],L=[],U=[],z=f2();e.add(z.group);const O=(D,tt,nt,Z,pt=!1)=>{const Y=bo[Z%bo.length],F=D.facing.z!==0,[C,K,ut]=tt,mt=new It().compose(new P(D.x+(F?C:D.facing.x*ut),D.top+K,D.z+(F?D.facing.z*ut:C)),new He().setFromEuler(new Xn(pt?-Math.PI/2:0,hi(D),0,"YXZ")),new P(1,1,1)),W=ol(Y,i,{toWorld:mt,sideways:nt,variant:Z,placard:"none",lit:!1,back:pt});e.add(W.canvas);for(const xt of W.extras)e.add(xt);p.push(...W.gilt),v.push(...W.scrollwork),m.push(...W.brass),g.push(...W.backing),x.push(...W.reverse),E.push(W)},B=[],N=(D,tt,nt)=>{const Z=bo[nt%bo.length],pt=D.facing.z!==0,Y=new Et;Y.position.set(D.x,D.top,D.z),tt.add(Y);const F=new It().compose(new P(pt?0:D.facing.x*.06,-.09,pt?D.facing.z*.06:0),new He().setFromEuler(new Xn(-Math.PI/2,hi(D),0,"YXZ")),new P(1,1,1)),C=ol(Z,i,{toWorld:F,variant:nt,placard:"none",lit:!1,back:!0});Y.add(C.canvas);for(const W of C.extras)Y.add(W);const K=(W,xt)=>{if(W.length===0)return;const yt=Le(W.map(Ft=>Ft.index?Ft.toNonIndexed():Ft),!1);for(const Ft of W)Ft.dispose();if(!yt)return;const St=new lt(yt,xt);St.castShadow=!0,Y.add(St)};K(C.gilt,l),K(C.scrollwork,c.material),K(C.brass,u),K(C.backing,h),K(C.reverse,b.material),E.push(C);const ut=new P(0,2.3,0);for(const[W,xt]of[[-1,-1],[1,-1],[1,1],[-1,1]])Y.add(Ya(new P(W*D.halfX*.9,.02,xt*D.halfZ*.9),ut,.8,f));Y.add(Ya(ut,new P(0,14,0),1.1,f));const mt={minX:D.x-D.halfX,maxX:D.x+D.halfX,minZ:D.z-D.halfZ,maxZ:D.z+D.halfZ,top:D.top,bottom:D.top-La(D.kind),carry:{x:0,y:0,z:0}};return o.push(mt),{step:D,group:Y,box:mt,state:"hung",since:0,sink:0}},H=[];let G=null;const $=[];lu().forEach((D,tt)=>{const nt=new Et;switch(e.add(nt),$.push({group:nt,top:D.top}),D.kind){case"flipped":{if(D.loose){B.push(N(D,nt,D.art??tt*3));break}O(D,[0,-.09,.06],!1,D.art??tt*3,!0);break}case"fresco":{const Y=d2(n,t,3,2,tt*2+3,!0),F=new It().compose(new P(D.x,D.top-rd,D.z),new He().setFromEuler(new Xn(-Math.PI/2,hi(D),0,"YXZ")),new P(1,1,1));Y.group.applyMatrix4(F),nt.add(Y.group);for(const C of Y.gilt)p.push(C.applyMatrix4(F));for(const C of Y.plaster)w.push(C.applyMatrix4(F));x.push(mT(3,2,0,-.045,tt).applyMatrix4(F)),_.push(Y);break}case"crate":case"capital":case"tube":case"books":case"coin":{const Z=(D.kind==="crate"?$E:D.kind==="capital"?ZE:D.kind==="tube"?a5:D.kind==="books"?h5:v5)(tt);Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=hi(D),nt.add(Z.group),L.push(Z);break}case"palette":{const Z=u4();Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=hi(D)+.22,nt.add(Z.group),y.push(Z);break}case"brush":{const Z=T4(2.3);Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=yR(D)+Math.PI,nt.add(Z.group),A.push(Z);break}case"pencil":{const Z=H4(2.75,tt%3===0?13148458:tt%3===1?10235690:3103356);Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=hi(D),nt.add(Z.group),M.push(Z);break}case"foam":{const Z=fR(D.halfX*2,D.halfZ*2,.62,tt);Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=hi(D),nt.add(Z.group),R.push(Z),U.push({bale:Z,x:D.x,z:D.z});break}case"tread":{const Z=rg(),pt=Z?Math.atan2(D.z-Z.z,D.x-Z.x):0,Y=Z?Math.hypot(D.x-Z.x,D.z-Z.z):2.6,F=Math.max(I0*.98,Y-D.halfX),C=tR(F,Y+D.halfX,wR);C.group.position.set(Z?Z.x:D.x,D.top,Z?Z.z:D.z),C.group.rotation.y=-pt,nt.add(C.group),H.push(C);break}case"tin":{const Z=Q4(.78,I2,tt%2===0?3100550:9189924),pt=D.halfX,Y=Math.max(.16,pt-.24),F=D.top-La(D.kind),C=(K,ut,mt,W)=>{o.push({minX:D.x+K,maxX:D.x+ut,minZ:D.z+mt,maxZ:D.z+W,top:D.top,bottom:F})};C(-pt,pt,-pt,-Y),C(-pt,pt,Y,pt),C(-pt,-Y,-Y,Y),C(Y,pt,-Y,Y),o.push({minX:D.x-Y,maxX:D.x+Y,minZ:D.z-Y,maxZ:D.z+Y,top:D.top-L2,bottom:F}),Z.group.position.set(D.x,D.top,D.z),Z.group.rotation.y=hi(D)+tt,nt.add(Z.group),T.push(Z);break}case"figure":{const Z=new Et;Z.add(z.place(1.95,0,new P(0,0,0))),Z.rotation.set(0,hi(D),-Math.PI/2+.06,"YXZ"),Z.position.set(D.x,D.top,D.z),nt.add(Z),z.ready.then(()=>{const pt=new Ln().setFromObject(Z);pt.isEmpty()||(Z.position.y+=D.top-pt.max.y)});break}case"leaf":break;case"chandelier":{const pt=Math.hypot(D.x-In.x,D.top-ss,D.z-In.z)>_R?Math.max(0,Math.min(9,Cu-D.top-fd)):0,Y=uR({chain:pt});Y.group.position.set(D.x,D.top,D.z),nt.add(Y.group),S.push(Y);break}}D.kind==="tread"||D.kind==="tin"||D.kind==="leaf"||D.loose||o.push({minX:D.x-D.halfX,maxX:D.x+D.halfX,minZ:D.z-D.halfZ,maxZ:D.z+D.halfZ,top:D.top,bottom:D.top-La(D.kind),...D.bounce?{bounce:D.bounce}:{}})});const Q=[],j=D=>{const tt=new P(-D.facing.x,0,-D.facing.z),nt=new P(0,1,0),Z=new P().crossVectors(tt,nt),pt=D.facing.z!==0?D.maxZ-D.minZ:D.maxX-D.minX,Y=D.top-D.bottom;return{toWorld:new It().makeBasis(tt,nt,Z).setPosition((D.minX+D.maxX)/2,(D.top+D.bottom)/2,(D.minZ+D.maxZ)/2),wide:pt,tall:Y}};W5().forEach((D,tt)=>{const nt=new Et;e.add(nt),$.push({group:nt,top:(D.top+D.bottom)/2});const{toWorld:Z,wide:pt,tall:Y}=j(D),F=new P(-pt/2+.15,Y/2+3.6,0).applyMatrix4(Z);nt.add(Ya(F,F.clone().setY(F.y+5),1.1,f));const C=(K,ut)=>{const mt=new P(K,ut,0).applyMatrix4(Z);nt.add(Ya(mt,F,1.1,f))};if(D.kind==="canvas"){const K=Y/pt,ut=[...bo].sort((xt,yt)=>Math.abs(xt.heightMetres/xt.widthMetres-K)-Math.abs(yt.heightMetres/yt.widthMetres-K))[0],mt=.16,W=ol({...ut,widthMetres:pt-mt*2,heightMetres:Y-mt*2},i,{toWorld:Z.clone().multiply(new It().makeTranslation(0,0,-.035)),variant:tt*5+2,placard:"none",lit:!1,back:!0});nt.add(W.canvas);for(const xt of W.extras)nt.add(xt);p.push(...W.gilt),v.push(...W.scrollwork),m.push(...W.brass),g.push(...W.backing),x.push(...W.reverse),E.push(W);for(const xt of[-.32,.32])C(xt*pt,Y/2)}else{const K=pt-.35,ut=mR(K,Y,tt+3);ut.group.applyMatrix4(Z.clone().multiply(new It().makeTranslation(.1,Y/2,0))),nt.add(ut.group),Q.push(ut);for(const mt of[-1,1])C(.1+mt*(K/2+.1),Y/2+.05)}o.push({minX:D.minX,maxX:D.maxX,minZ:D.minZ,maxZ:D.maxZ,top:D.top,bottom:D.bottom})});const X=X5();let at=null;const rt=[];let ft=null;if(X){at=x5({radius:X.radius,period:X.period,phase:X.phase,wire:9}),at.group.position.set(X.x,X.top,X.z);const D=new Et;D.add(at.group),e.add(D),$.push({group:D,top:X.top});for(const tt of ag(0)){const nt={minX:tt.x-Xo,maxX:tt.x+Xo,minZ:tt.z-Xo,maxZ:tt.z+Xo,top:tt.top,bottom:tt.top-La("leaf"),carry:{x:0,y:0,z:0}};rt.push(nt),o.push(nt)}}const et=Zd();let q=null;if(et){const D=et.half*2,tt=et.lintel-et.sill;q=MR(D,tt,et.rail,Math.max(1,Cu+1-et.lintel-et.rail)),q.group.position.set(et.x,(et.sill+et.lintel)/2,et.z),q.group.rotation.y=Math.PI/2,e.add(q.group);const nt=et.x-et.depth/2,Z=et.x+et.depth/2,pt=et.z-et.half,Y=et.z+et.half,F=[{minX:nt,maxX:Z,minZ:pt-et.rail,maxZ:Y+et.rail,top:et.sill,bottom:et.sill-et.rail},{minX:nt,maxX:Z,minZ:pt-et.rail,maxZ:Y+et.rail,top:et.lintel+et.rail,bottom:et.lintel},{minX:nt,maxX:Z,minZ:pt-et.rail,maxZ:pt,top:et.lintel+et.rail,bottom:et.sill-et.rail},{minX:nt,maxX:Z,minZ:Y,maxZ:Y+et.rail,top:et.lintel+et.rail,bottom:et.sill-et.rail}];o.push(...F)}const ct=1,vt=(D,tt,nt)=>{const{step:Z,box:pt}=D,Y=tt-D.since;let F=D.sink,C=0;if(D.state==="hung")F=0,nt&&Math.abs(nt.feet-pt.top)<.06&&Math.abs(nt.x-Z.x)<=Z.halfX+.12&&Math.abs(nt.z-Z.z)<=Z.halfZ+.12&&(D.state="giving",D.since=tt);else if(D.state==="giving")F=-.1*(1-Math.exp(-Y/.04)),C=.012*Math.sin(Y*70)*Math.exp(-Y*4)+.005*Math.sin(Y*41)*(Y/ct),Y>=ct&&(D.state="falling",D.since=tt);else if(D.state==="falling")F=-.1-.5*10.5*Y*Y,F<=-4&&(D.state="gone",D.since=tt,D.group.visible=!1);else if(D.state==="gone")F=-4,Y>=3&&(D.state="hauling",D.since=tt,D.group.visible=!0);else{const ut=Math.min(1,Y/2.4);F=-4*(1-ut*ut*(3-2*ut)),ut>=1&&(D.state="hung",F=0)}D.group.position.y=Z.top+F+C;const K=D.state==="hung"||D.state==="giving";pt.carry.y=K?F-D.sink:0,pt.top=K?Z.top+F:-1e3,pt.bottom=pt.top-La(Z.kind),D.sink=F},V=(D,tt)=>{if(D.length===0)return;const nt=D.map(Y=>Y.index?Y.toNonIndexed():Y),Z=Le(nt,!1);for(const Y of D)Y.dispose();if(!Z)return;const pt=new lt(Z,tt);pt.castShadow=!0,pt.receiveShadow=!0,e.add(pt)};V(p,l),V(v,c.material),V(m,u),V(g,h),V(x,b.material),V(w,n.plaster);const I=rg();if(I){G=eR(I0,I.height+2.4),G.group.position.set(I.x,I.base-1.2,I.z),e.add(G.group);const D=I.base-.35,tt=I0/Math.SQRT2;o.push({minX:I.x-tt,maxX:I.x+tt,minZ:I.z-tt,maxZ:I.z+tt,top:D,bottom:D-.5,bounce:19.5})}return{group:e,obstacles:o,follow(D){for(const tt of $)tt.group.visible=Math.abs(tt.top-D)<wn*2},update(D,tt,nt){var Z;for(const pt of B)vt(pt,D,nt);(Z=S[0])==null||Z.update(D);for(const pt of R)pt.update(tt);for(const pt of Q)pt.update(D);if(at){at.update(D);const pt=ag(D);rt.forEach((Y,F)=>{const C=pt[F],K={x:(Y.minX+Y.maxX)/2,z:(Y.minZ+Y.maxZ)/2},ut=ft!==null&&D-ft<.25;Y.carry.x=ut?C.x-K.x:0,Y.carry.z=ut?C.z-K.z:0,Y.minX=C.x-Xo,Y.maxX=C.x+Xo,Y.minZ=C.z-Xo,Y.maxZ=C.z+Xo}),ft=D}},flare(D){q==null||q.flare(D)},leaves:()=>rt,press(D,tt,nt){let Z=null,pt=2.5;for(const Y of U){const F=Math.hypot(Y.x-D,Y.z-tt);F<pt&&(pt=F,Z=Y.bale)}Z==null||Z.press(nt)},ready:z.ready,dispose(){s.dispose(),r.dispose(),a.dispose(),l.dispose(),c.material.dispose(),u.dispose(),h.dispose(),b.dispose(),d.dispose(),z.dispose();for(const D of E)D.dispose();for(const D of S)D.dispose();for(const D of R)D.dispose();for(const D of L)D.dispose();for(const D of _)D.dispose();for(const D of y)D.dispose();for(const D of A)D.dispose();for(const D of M)D.dispose();for(const D of T)D.dispose();for(const D of H)D.dispose();for(const D of Q)D.dispose();at==null||at.dispose(),q==null||q.dispose(),f.dispose(),G==null||G.dispose(),e.traverse(D=>{D instanceof lt&&D.geometry.dispose()})}}}const dd=11,$u={reach:2.5,out:.15},qu={reach:.52,out:.22};function Oc(n,t){const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}const W2=`
vec3 iridescent(float t) {
  return vec3(0.58, 0.55, 0.62)
       + vec3(0.42, 0.40, 0.38) * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * t + vec3(0.02, 0.34, 0.63)));
}
vec3 lit(float t, float lift) {
  vec3 c = iridescent(t);
  return c + (vec3(1.0) - c) * lift;
}
`,X2=`
float opened(float ring) {
  float u = clamp((uUnfold * ${(dd+3).toFixed(1)} - ring) / 3.0, 0.0, 1.0);
  return u * u * (3.0 - 2.0 * u);
}
`,bR=`
uniform float uTime;
uniform float uUnfold;
uniform float uPixels;
attribute vec4 aSeed;
attribute float aRing;
varying float vAlpha;
varying float vHue;
varying float vAngle;
varying float vFlap;
${X2}

void main() {
  float open = opened(aRing);
  float reach = (${$u.reach.toFixed(2)} + aRing * ${qu.reach.toFixed(2)}) * mix(0.3, 1.0, open)
              + (aSeed.y - 0.5) * 0.22;
  float fore = ${$u.out.toFixed(2)} + aRing * ${qu.out.toFixed(2)} + (aSeed.w - 0.5) * 0.18;
  float spin = (mod(aRing, 2.0) < 0.5 ? 1.0 : -1.0) * (0.16 + 0.025 * aRing);
  float a = aSeed.x * 6.2831853 + uTime * spin;
  vec3 p = vec3(cos(a) * reach, sin(a) * reach, fore);
  vec3 along = vec3(-sin(a), cos(a), 0.0) * sign(spin);

  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  // Which way the ring runs on screen, so the wings lie along it.
  vec4 ahead = projectionMatrix * (modelViewMatrix * vec4(p + along * 0.05, 1.0));
  vec2 dir = ahead.xy / ahead.w - gl_Position.xy / gl_Position.w;
  vAngle = atan(dir.y, dir.x);
  // Most of the crowd is small; one in ten is near enough a figure to
  // see its wings.
  float figure = step(0.9, aSeed.z);
  gl_PointSize = clamp((0.075 + 0.05 * aSeed.z + 0.16 * figure) * uPixels / -view.z, 1.0, 72.0);
  vFlap = sin(uTime * (7.0 + 5.0 * aSeed.z) + aSeed.x * 40.0);
  float twinkle = 0.7 + 0.3 * sin(uTime * (1.3 + 2.0 * aSeed.w) + aSeed.y * 30.0);
  // And a swell running round each ring, as a sound runs round a choir.
  twinkle *= 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.7 + aRing);
  // Thinned where it would be in the eye itself.
  vAlpha = open * twinkle * smoothstep(0.25, 1.2, -view.z);
  vHue = aRing * 0.07 + aSeed.z * 0.25 + uTime * 0.03;
}
`,TR=`
varying float vAlpha;
varying float vHue;
varying float vAngle;
varying float vFlap;
${W2}

float lobe(vec2 p, vec2 at, float tilt, vec2 size) {
  vec2 q = p - at;
  float c = cos(tilt);
  float s = sin(tilt);
  q = vec2(c * q.x + s * q.y, -s * q.x + c * q.y) / size;
  return exp(-dot(q, q) * 2.2);
}

void main() {
  vec2 p = gl_PointCoord - 0.5;
  p.y = -p.y;
  float c = cos(-vAngle);
  float s = sin(-vAngle);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  // A body, and two wings swept back from it and lifting on the beat.
  float lift = 0.55 + 0.35 * vFlap;
  float wings = lobe(p, vec2(-0.06, 0.1), lift, vec2(0.16, 0.05))
              + lobe(p, vec2(-0.06, -0.1), -lift, vec2(0.16, 0.05));
  float body = exp(-dot(p, p) * 90.0);
  // Kept inside the sprite, so a large one is a figure and not a tile.
  float light = (body * 1.6 + wings * 0.55) * smoothstep(0.5, 0.3, length(p));
  if (light < 0.01) discard;
  vec3 colour = mix(lit(vHue, 0.7), vec3(1.0, 0.93, 0.8), 0.35);
  gl_FragColor = vec4(colour * light * vAlpha * 2.3, 1.0);
}
`,ER=`
uniform float uTime;
uniform float uUnfold;
attribute float aRing;
attribute float aAcross;
varying float vAcross;
varying float vAlpha;
varying float vAround;
varying float vRing;
${X2}

void main() {
  float open = opened(aRing);
  vec3 p = position;
  p.xy *= mix(0.3, 1.0, open);
  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  vAcross = aAcross;
  vAround = atan(position.y, position.x);
  vRing = aRing;
  vAlpha = open * smoothstep(0.3, 2.0, -view.z);
}
`,AR=`
uniform float uTime;
varying float vAcross;
varying float vAlpha;
varying float vAround;
varying float vRing;
${W2}

void main() {
  float line = exp(-vAcross * vAcross * 3.0) * 0.6 + exp(-vAcross * vAcross * 18.0) * 0.8;
  float spin = mod(vRing, 2.0) < 0.5 ? 1.0 : -1.0;
  // Brighter where the crowd is thickest, drifting round with it.
  float crowd = 0.55 + 0.45 * sin(vAround * (5.0 + vRing) - uTime * spin * 0.8);
  vec3 colour = lit(vRing * 0.07 + vAround * 0.08 + uTime * 0.02, 0.5);
  gl_FragColor = vec4(colour * line * crowd * vAlpha * 0.38, 1.0);
}
`;function RR(n){const t=new Et;t.name="host",t.position.copy(n),t.visible=!1;const e=new P,o=new P(0,0,1),i={uTime:{value:0},uUnfold:{value:0},uPixels:{value:900}},s=[],r=[];for(let b=0;b<dd;b+=1){const x=220+b*60;for(let w=0;w<x;w+=1){const E=b*1e3+w;s.push((w+Oc(E,1)*.6)/x,Oc(E,2),Oc(E,3),Oc(E,4)),r.push(b)}}const a=new $t;a.setAttribute("position",new qt(new Float32Array(r.length*3),3)),a.setAttribute("aSeed",new qt(new Float32Array(s),4)),a.setAttribute("aRing",new qt(new Float32Array(r),1));const l=new Se({vertexShader:bR,fragmentShader:TR,uniforms:i,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tn});l.customProgramCacheKey=()=>"host-motes";const c=new us(a,l);c.frustumCulled=!1,t.add(c);const u=160,h=[],f=[],d=[],p=[];for(let b=0;b<dd;b+=1){const x=$u.reach+b*qu.reach,w=$u.out+b*qu.out,E=.22+b*.02,S=h.length/3;for(let _=0;_<=u;_+=1){const y=_/u*Math.PI*2;for(const A of[-1,1]){const M=x+A*E;h.push(Math.cos(y)*M,Math.sin(y)*M,w),f.push(A),d.push(b)}}for(let _=0;_<u;_+=1){const y=S+_*2;p.push(y,y+1,y+2,y+1,y+3,y+2)}}const v=new $t;v.setAttribute("position",new qt(new Float32Array(h),3)),v.setAttribute("aAcross",new qt(new Float32Array(f),1)),v.setAttribute("aRing",new qt(new Float32Array(d),1)),v.setIndex(p);const m=new Se({vertexShader:ER,fragmentShader:AR,uniforms:i,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tn,side:we});m.customProgramCacheKey=()=>"host-bands";const g=new lt(v,m);return g.frustumCulled=!1,t.add(g),{group:t,set(b,x,w,E){t.visible=b>0,e.subVectors(E,n),e.lengthSq()>1e-6&&t.quaternion.setFromUnitVectors(o,e.normalize()),i.uUnfold.value=b,i.uTime.value=x,i.uPixels.value=w},dispose(){a.dispose(),v.dispose(),l.dispose(),m.dispose()}}}const zc=360;function Ba(n,t){const e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}const PR=`
uniform float uTime;
uniform vec3 uFrom;
uniform vec3 uTo;
attribute vec4 aSeed;
attribute vec4 aHome;
varying vec2 vUv;
varying float vAlpha;
varying float vHue;

mat3 turn(float yaw, float pitch, float roll) {
  float cy = cos(yaw), sy = sin(yaw);
  float cp = cos(pitch), sp = sin(pitch);
  float cr = cos(roll), sr = sin(roll);
  mat3 y = mat3(cy, 0.0, -sy, 0.0, 1.0, 0.0, sy, 0.0, cy);
  mat3 p = mat3(1.0, 0.0, 0.0, 0.0, cp, sp, 0.0, -sp, cp);
  mat3 r = mat3(cr, sr, 0.0, -sr, cr, 0.0, 0.0, 0.0, 1.0);
  return y * p * r;
}

void main() {
  vUv = uv;
  float drop = 9.0;
  // Falling, and back to the top of the column when through it.
  float fall = mod(aHome.w + uTime * (0.22 + 0.16 * aSeed.x), drop);
  vec3 line = mix(uFrom, uTo, aHome.x);
  vec3 home = line + vec3(aHome.y, 3.5 - fall, aHome.z);
  // The rock of a falling feather: side to side, and turning as it goes.
  float rock = sin(uTime * (1.1 + 0.9 * aSeed.y) + aSeed.z * 20.0);
  home.x += rock * 0.28 * cos(aSeed.w * 6.28);
  home.z += rock * 0.28 * sin(aSeed.w * 6.28);
  mat3 m = turn(aSeed.w * 6.28 + uTime * (0.2 + 0.4 * aSeed.y), 1.25 + rock * 0.35, rock * 0.5);
  vec3 p = home + m * (position * (0.8 + 0.5 * aSeed.z));
  vec4 view = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * view;
  // Not in the eye, and not at the ends of the column.
  float ends = smoothstep(0.0, 1.0, fall) * (1.0 - smoothstep(drop - 1.0, drop, fall));
  vAlpha = ends * smoothstep(0.35, 1.1, -view.z);
  vHue = aSeed.x + aSeed.z * 0.4;
}
`,CR=`
uniform float uLevel;
uniform float uTime;
varying vec2 vUv;
varying float vAlpha;
varying float vHue;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec3 iridescent(float t) {
  return vec3(0.58, 0.55, 0.62)
       + vec3(0.42, 0.40, 0.38) * cos(6.28318 * (vec3(1.0, 0.97, 0.92) * t + vec3(0.02, 0.34, 0.63)));
}

void main() {
  float along = vUv.y;
  float across = (vUv.x - 0.5) * 2.0;
  // The vane: widest a third of the way up, tapering to the tip, the
  // two sides not quite equal, the way a flight feather is.
  float side = across < 0.0 ? 0.82 : 1.0;
  float wide = side * sin(3.14159 * pow(along, 0.72)) * (1.0 - 0.25 * along);
  // Barbs: fine grooves raked back from the quill, and the edge frayed.
  float barbs = 0.72 + 0.28 * sin((along * 70.0 - abs(across) * 16.0));
  float fray = hash(vec2(floor(along * 90.0), step(0.0, across)));
  float edge = wide * (0.9 + 0.1 * fray);
  float vane = smoothstep(edge, edge - 0.12, abs(across));
  // The quill, and the down at the root.
  float quill = smoothstep(0.06, 0.0, abs(across)) * smoothstep(0.0, 0.08, along);
  float down = (1.0 - smoothstep(0.0, 0.2, along)) * smoothstep(0.9, 0.2, abs(across))
             * (0.35 + 0.65 * hash(vUv * 40.0));
  float shape = max(max(vane * barbs, quill), down * 0.7);
  if (shape < 0.03) discard;
  vec3 warm = vec3(1.0, 0.96, 0.88);
  vec3 sheen = iridescent(vHue + along * 0.4 + uTime * 0.05);
  vec3 colour = mix(warm, sheen, 0.35 * smoothstep(0.3, 0.95, abs(across) / max(wide, 0.05)));
  gl_FragColor = vec4(colour * 1.6, shape * vAlpha * uLevel * 0.9);
}
`;function IR(n,t){const e=new Et;e.name="feathers",e.visible=!1;const o=new le(.15,.5);o.translate(0,.25,0);const i=new d3;i.index=o.index,i.setAttribute("position",o.getAttribute("position")),i.setAttribute("uv",o.getAttribute("uv"));const s=new Float32Array(zc*4),r=new Float32Array(zc*4);for(let u=0;u<zc;u+=1){for(let d=0;d<4;d+=1)s[u*4+d]=Ba(u,d+1);const h=Ba(u,7)*Math.PI*2,f=.45+Math.sqrt(Ba(u,8))*2.9;r[u*4]=Ba(u,9)*1.15-.1,r[u*4+1]=Math.cos(h)*f,r[u*4+2]=Math.sin(h)*f,r[u*4+3]=Ba(u,10)*9}i.setAttribute("aSeed",new Su(s,4)),i.setAttribute("aHome",new Su(r,4)),i.instanceCount=zc;const a={uTime:{value:0},uLevel:{value:0},uFrom:{value:n.clone()},uTo:{value:t.clone()}},l=new Se({vertexShader:PR,fragmentShader:CR,uniforms:a,transparent:!0,depthWrite:!1,side:we});l.customProgramCacheKey=()=>"feathers";const c=new lt(i,l);return c.frustumCulled=!1,e.add(c),{group:e,set(u,h){e.visible=u>0,a.uLevel.value=u,a.uTime.value=h},dispose(){o.dispose(),i.dispose(),l.dispose()}}}function LR(n){return new zn([new P(0,.02,.04),new P(0,-.1,.16),new P(0,-.04,.3),new P(0,.12,n)])}function DR(){const n=new Et,t=new wt({color:11570506,roughness:.36,metalness:.9,envMapIntensity:1.4}),e=new wt({color:15853261,roughness:.86}),o=new Vs({color:16760929,transparent:!0,opacity:.95,depthWrite:!1,blending:Tn}),i=new lt(new an([[0,0],[.085,0],[.092,.012],[.07,.026],[.048,.03],[.052,.052],[.03,.066],[0,.07]].map(([a,l])=>new st(a,l)),16),t);i.rotation.x=Math.PI/2,n.add(i);const s=[];for(const a of[-1,1]){const c=new lt(new $n(LR(.19),14,.013,6,!1),t);c.rotation.y=a*.55,c.castShadow=!0,n.add(c);const u=new P(Math.sin(a*.55)*.19,.12,Math.cos(a*.55)*.19),h=new lt(new an([[0,0],[.026,.004],[.028,.016],[.058,.026],[.062,.034],[.032,.038],[.028,.062],[0,.062]].map(([v,m])=>new st(v,m)),12),t);h.position.copy(u),n.add(h);const f=.16+a*.03,d=new lt(new ie(.019,.021,f,10),e);d.position.set(u.x,u.y+.062+f/2,u.z),n.add(d);const p=new Et;for(const v of[0,Math.PI/2]){const m=new ln;m.moveTo(0,0),m.quadraticCurveTo(.018,.016,.01,.042),m.quadraticCurveTo(.004,.058,0,.066),m.quadraticCurveTo(-.004,.058,-.01,.042),m.quadraticCurveTo(-.018,.016,0,0);const g=new lt(new Ws(m),o);g.rotation.y=v,p.add(g)}p.position.set(u.x,u.y+.062+f,u.z),n.add(p),s.push(p)}const r=new Wo(16757852,0,4.2,1.9);return r.position.set(0,.24,.2),n.add(r),{group:n,flames:s,light:r,dispose(){t.dispose(),e.dispose(),o.dispose(),n.traverse(a=>{a instanceof lt&&a.geometry.dispose()})}}}const{length:L0,depth:D0,levels:Qr,window:pu}=Ot,NR=`
  float fit = uFit;
  float decay = uDecay;
  vec3 kTorn = vec3(0.0);
  float kEmber = 0.0;
  if (fit > 0.001 || decay > 0.001) {
    float t = uTime;
    vec2 uvNow = vMapUv;
    // Square in metres rather than in uv, so the runs are the same width
    // on a tall canvas as on a wide one.
    vec2 metric = vec2(1.0, uAspect);

    // The paint moving, very slightly: heat haze, not a signal failing.
    vec2 drift = vec2(
      sin(uvNow.y * 9.0 * uAspect + t * 0.7 + sin(uvNow.x * 5.0 + t * 0.4)),
      sin(uvNow.x * 8.0 - t * 0.55 + sin(uvNow.y * 6.0 * uAspect - t * 0.3))
    );
    uvNow += drift * (0.0025 * decay + 0.006 * fit);
    vec3 paint = texture2D(map, uvNow).rgb;

    // Its colour going out of it, towards the red the room has gone.
    float weight = dot(paint, vec3(0.32, 0.55, 0.13));
    vec3 drained = vec3(weight * 1.25 + 0.015, weight * 0.2, weight * 0.19);
    vec3 torn = mix(paint, drained, clamp(decay * 0.78 + fit * 0.3, 0.0, 0.94));

    /**
     * The runs.
     *
     * Fourteen lanes across the canvas, each with its own place in the
     * lane, its own width and its own length, and a lane only weeps once
     * the picture is far enough gone. A run is thickest where it leaves
     * the frame and thins as it goes, and ends in a heavier bead — the
     * shape of anything liquid running down a vertical face.
     */
    float lanes = 14.0;
    float lane = floor(uvNow.x * lanes);
    float h1 = fract(sin(lane * 12.9898 + 3.1) * 43758.5453);
    float h2 = fract(sin(lane * 78.233 + 1.7) * 24634.6345);
    float h3 = fract(sin(lane * 45.164 + 7.3) * 19349.1234);
    float weeps = step(h3, decay * 1.1 - 0.05);
    float reach = decay * (0.18 + 0.72 * h1) * (0.93 + 0.07 * sin(t * 0.21 + h2 * 6.28)) + fit * 0.08;
    float down = 1.0 - vMapUv.y;
    // Not ruled: a run wanders a little as it goes down the canvas.
    float wander = sin(down * 23.0 * uAspect + h2 * 6.28) * 0.07 + sin(down * 51.0 * uAspect + h1 * 3.1) * 0.03;
    float wide = 0.11 + 0.17 * h1;
    float across = (fract(uvNow.x * lanes) - (0.3 + 0.4 * h2) - wander) / wide;
    float taper = mix(1.0, 0.4, clamp(down / max(reach, 0.001), 0.0, 1.0));
    float run = (1.0 - smoothstep(taper * 0.6, taper, abs(across))) * step(down, reach);
    // The bead, round in metres: its radius a little over the run's
    // half-width, measured across in lane units and down in the same.
    float radius = wide * 0.75;
    vec2 bead = vec2(across * wide, (down - reach + radius / lanes * 0.6) * uAspect * lanes);
    float head = 1.0 - smoothstep(radius * 0.6, radius, length(bead));
    float weep = clamp(max(run, head * step(0.02, reach)) * weeps, 0.0, 1.0);
    // And where it has come from: the top of the canvas soaked dark.
    float soaked = decay * smoothstep(0.82, 1.0, vMapUv.y) * 0.7;
    torn = mix(torn, vec3(0.03, 0.002, 0.006), max(weep * 0.94, soaked));
    kEmber = head * weeps * step(0.02, reach);

    /**
     * The face.
     *
     * Three versions of this were too faint to see and one was too
     * clear — a cartoon skull stamped on a painting. What is frightening
     * is *nearly* seeing one, so the features only bias where the
     * painting goes dark, broken up by the canvas's own noise so it never
     * resolves into an outline. It no longer flashes: it comes up out of
     * the dark over a couple of seconds, stays, and goes back in.
     *
     * Built in a space that is square in metres rather than in uv.
     */
    float show = smoothstep(0.08, 0.85, fit);
    vec2 f = (vMapUv - vec2(0.5, 0.56)) * metric;

    // Sockets. Wide, soft, and unequal — a face that is symmetrical to
    // the pixel is a mask, and a mask is a prop.
    float hollow = 0.0;
    for (float side = -1.0; side <= 1.0; side += 2.0) {
      vec2 e = (f - vec2(side * 0.17, 0.10 + side * 0.012)) / vec2(0.15, 0.115);
      hollow += (1.0 - smoothstep(0.0, 1.25, length(e))) * (side < 0.0 ? 1.0 : 0.86);
    }
    float brow = 0.0;
    for (float side = -1.0; side <= 1.0; side += 2.0) {
      vec2 b = (f - vec2(side * 0.175, 0.25)) / vec2(0.17, 0.075);
      brow += (1.0 - smoothstep(0.2, 1.2, length(b))) * 0.7;
    }
    vec2 m = (f - vec2(0.0, -0.15)) / vec2(0.30, 0.105);
    float mouth = (1.0 - smoothstep(0.15, 1.15, length(vec2(m.x, m.y + m.x * m.x * 0.5)))) * 0.8;
    float grain = 0.55 + 0.75 * (1.0 - weight)
      + 0.30 * fract(sin(dot(floor(vMapUv * 220.0), vec2(12.99, 78.23))) * 43758.5);
    float dark = clamp((hollow * 1.15 + brow * 0.5 + mouth * 0.6) * show * grain, 0.0, 0.92);
    torn = mix(torn, vec3(0.04, 0.003, 0.01), dark);

    diffuseColor.rgb = torn;
    kTorn = torn;
  }
`,UR=`
  if (fit > 0.001 || decay > 0.001) {
    totalEmissiveRadiance = kTorn * emissive * mix(1.0, 0.38, decay) * (1.0 + fit * 0.4);
    totalEmissiveRadiance += vec3(0.55, 0.03, 0.02) * kEmber * (0.25 + 0.5 * decay);
  }
`;function r1(n,t,e=1,o=0){const i={value:0};return n.onBeforeCompile=s=>{s.uniforms.uFit=i,s.uniforms.uTime=t,s.uniforms.uAspect={value:e},s.uniforms.uDecay={value:o},s.fragmentShader=s.fragmentShader.replace("void main() {",`uniform float uFit;
uniform float uTime;
uniform float uAspect;
uniform float uDecay;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
${NR}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${UR}`)},n.customProgramCacheKey=()=>"corruptible-weeping",n.userData.fit=i,i}const a1=5.5;function l1(n){return Math.min(1,Math.max(0,(n/(fn-1)-.08)/.72))}const wl=[{along:"x",span:L0,at:0,inward:1},{along:"x",span:L0,at:D0,inward:-1},{along:"z",span:D0,at:0,inward:1},{along:"z",span:D0,at:L0,inward:-1}];function $2(n,t=!1){const e=n.along==="x"&&n.inward===-1,o=qd(n.span,e).map(r=>({from:r-Bm/2,to:r+Bm/2}));if(e&&!t)for(const r of pu.centresX)o.push({from:r-pu.width/2-.2,to:r+pu.width/2+.2});o.sort((r,a)=>r.from-a.from);const i=[];let s=.55;for(const r of o)r.from>s&&i.push({from:s,to:r.from}),s=Math.max(s,r.to);return n.span-.55>s&&i.push({from:s,to:n.span-.55}),i}function FR(n,t,e){const o=$2(n).filter(s=>s.to-s.from>=t+.2);if(o.length===0)return null;const i=o[e%o.length];return(i.from+i.to)/2}function OR(){const n=[];for(let t=0;t<fn;t+=1){const e=Pe+t*wn;for(const o of wl){const i=o.along==="x"&&o.inward===-1,s=e+(i?pu.crown+.35:Qr.pictureRail+.35),r=e+Qr.corniceBottom-.3,a=r-s;if(a<1)continue;const l=$2(o,!0);for(let c=t%2;c+1<l.length;c+=3){const u=l[c],h=l[c+1],f=h.to-u.from-.3;f<2.4||n.push({wall:o,along:(u.from+h.to)/2,y:(s+r)/2,wide:f,high:a,storey:t,crop:t*3+c+1})}}}return n}function zR(){const n=[];for(let t=0;t<fn;t+=1){const e=Pe+t*wn;for(let o=0;o<wl.length;o+=1){const i=wl[o],s=(t+o)%4,r=i.span>15?s===0?2:3:s===2?1:2;for(let a=0;a<r;a+=1){const l=bo[(t*5+o*3+a)%bo.length],c=FR(i,l.widthMetres+.45,t+a);if(c===null)continue;const u=Qr.pictureRail-Qr.dadoCapTop-l.heightMetres-.5,h=e+Qr.dadoCapTop+.25+l.heightMetres/2+Math.max(0,u)*((t*7+a*3)%5/4);n.push({wall:i,art:l,along:c,y:h,storey:t,variant:t+a})}}}return n}function BR(n,t,e={}){const o=e.placards??!0,i=new Et,s=new ah,r=[],a=[],l=[],c=[],u=3,h=[],f=[];for(let y=0;y<u;y+=1){const A=new Wo(16757852,0,4.2,1.9);h.push(A),i.add(A)}const d=[],p={value:0},v=lh(),m=ch(),g=new wt({color:11570506,roughness:.38,metalness:.9,envMapIntensity:1.4}),b=new wt({color:2367514,roughness:.95}),x=[];for(let y=0;y<fn;y+=1){const A=new Et;i.add(A),x.push({group:A,gilt:[],scroll:[],brass:[],backing:[],plaster:[]})}const w=y=>x[Math.min(fn-1,Math.max(0,y))],E=(y,A,M)=>{const T=y.along==="x"?y.inward===1?0:Math.PI:y.inward===1?Math.PI/2:-Math.PI/2,R=y.along==="x"?new P(A,M,y.at+y.inward*Au):new P(y.at+y.inward*Au,M,A);return new It().compose(R,new He().setFromAxisAngle(new P(0,1,0),T),new P(1,1,1))};for(const y of zR()){const A=ol(y.art,s,{toWorld:E(y.wall,y.along,y.y),variant:y.variant,placard:o?"beside":"none",placardY:-(y.art.heightMetres/2)+.2}),M=w(y.storey);M.group.add(A.canvas);for(const T of A.extras)M.group.add(T);M.gilt.push(...A.gilt),M.scroll.push(...A.scrollwork),M.brass.push(...A.brass),M.backing.push(...A.backing),r.push(A),d.push({fit:r1(A.paint,p,y.art.heightMetres/y.art.widthMetres,l1(y.storey)),up:y.storey/(fn-1),wait:2+Math.random()*(16-11*(y.storey/(fn-1))),left:0})}for(let y=0;y<fn;y+=1){const A=Pe+y*wn;for(const M of[wl[0],wl[1]]){const T=qd(M.span,M.inward===-1)[y%2===0?0:3]??M.span/2,R=DR();R.group.applyMatrix4(E(M,T,A+Qr.dadoCapTop+1.55)),w(y).group.add(R.group),R.light.visible=!1,R.group.updateMatrixWorld(!0),c.push(R.light.getWorldPosition(new P)),l.push(R)}}for(const y of OR()){const A=d2(n,t,y.wide,y.high,y.crop),M=E(y.wall,y.along,y.y);A.group.applyMatrix4(M);const T=w(y.storey);T.group.add(A.group);for(const R of A.gilt)T.gilt.push(R.applyMatrix4(M));for(const R of A.plaster)T.plaster.push(R.applyMatrix4(M));a.push(A),d.push({fit:r1(A.paint,p,y.high/y.wide,l1(y.storey)),up:y.storey/(fn-1),wait:5+Math.random()*(20-14*(y.storey/(fn-1))),left:0})}const S=(y,A,M)=>{if(A.length===0)return;const T=A.map(U=>U.index?U.toNonIndexed():U),R=Le(T,!1);for(const U of A)U.dispose();if(!R)return;const L=new lt(R,M);L.castShadow=!0,L.receiveShadow=!0,y.add(L)};for(const y of x)S(y.group,y.gilt,v),S(y.group,y.scroll,m.material),S(y.group,y.brass,g),S(y.group,y.backing,b),S(y.group,y.plaster,n.plaster);let _=0;return{group:i,setLevel(y){_=y},follow(y){x.forEach((A,M)=>{const T=Pe+M*wn+wn/2;A.group.visible=Math.abs(T-y)<wn*2});for(const A of l)A.group.visible=Math.abs(A.group.position.y-y)<wn*4;f.length=0;for(let A=0;A<h.length;A+=1){let M=-1,T=1/0;for(let L=0;L<c.length;L+=1){const U=Math.abs(c[L].y-y);U<T&&!f.includes(L)&&(T=U,M=L)}const R=h[A];M<0||(f.push(M),R.position.copy(c[M]),R.intensity=1.5*_)}},update(y,A){if(!(_<=0)){p.value=y,l.forEach((M,T)=>{if(!M.group.visible)return;const R=1+Math.sin(y*11.3+T*2.1)*.13+Math.sin(y*27.7+T*5.3)*.06;for(const L of M.flames)L.scale.set(1,R,1)});for(const M of d)if(M.left>0){M.left-=A;const T=1-M.left/a1,R=Math.min(1,T/.32),L=Math.min(1,(1-T)/.48),U=Math.min(R*R*(3-2*R),L*L*(3-2*L));M.fit.value=_*U,M.left<=0&&(M.fit.value=0,M.wait=4+Math.random()*(20-13*M.up))}else M.wait-=A,M.wait<=0&&(M.left=a1)}},dispose(){for(const y of r)y.dispose();for(const y of a)y.dispose();for(const y of l)y.dispose();v.dispose(),m.material.dispose(),g.dispose(),b.dispose(),i.traverse(y=>{y instanceof lt&&y.geometry.dispose()})}}}const{length:c1,depth:u1,window:N0}=Ot,kR=`
varying vec2 vSpot;
void main() {
  vSpot = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,GR=`
uniform float uTime;
uniform float uLevel;
uniform float uSeed;
uniform float uUp;
varying vec2 vSpot;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 34.5);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float drift(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i += 1) {
    sum += amp * noise(p);
    // Stretched sideways, because cloud at this hour is drawn out along
    // the wind and a round cloud reads as smoke.
    p = vec2(p.x * 2.3, p.y * 1.7) + 1.7;
    amp *= 0.5;
  }
  return sum;
}

void main() {
  float up = vSpot.y;

  // Three bands. Scarlet at the bottom where the sun is, crimson through
  // the middle, and a dark violet-red overhead — the evening's amber,
  // rose and cold blue, each pushed round the wheel into red.
  vec3 low = vec3(1.00, 0.22, 0.09);
  vec3 mid = vec3(0.62, 0.06, 0.11);
  vec3 high = vec3(0.13, 0.02, 0.09);
  /**
   * And it does not stay that evening all the way up.
   *
   * Every storey used to look out on the same red dusk, so seven storeys
   * of climbing had nothing outside to measure themselves against. Now
   * the sky goes through a night as you rise — the red drains out of it,
   * it darkens to violet and the stars come — and near the top it is
   * beginning to be morning: pale gold at the horizon, rose, a cold clear
   * lavender overhead. The light at the top of the room is the dawn the
   * windows have been waiting for.
   */
  float night = smoothstep(0.15, 0.55, uUp) * (1.0 - smoothstep(0.62, 0.95, uUp));
  float dawn = smoothstep(0.62, 1.0, uUp);
  low = mix(low, vec3(0.34, 0.05, 0.07), night);
  mid = mix(mid, vec3(0.14, 0.03, 0.12), night);
  high = mix(high, vec3(0.03, 0.02, 0.07), night);
  low = mix(low, vec3(1.0, 0.70, 0.40), dawn);
  mid = mix(mid, vec3(0.78, 0.44, 0.52), dawn);
  high = mix(high, vec3(0.30, 0.31, 0.56), dawn);
  vec3 sky = mix(low, mid, smoothstep(0.0, 0.42, up));
  sky = mix(sky, high, smoothstep(0.34, 0.95, up));

  // The source, low and to one side, and everything is brightest near it.
  // In the same place from every storey: it moved with each one, which is
  // seven suns rather than one.
  vec2 sun = vec2(0.36, 0.06 - night * 0.08);
  float near = 1.0 - smoothstep(0.0, 0.85, length((vSpot - sun) * vec2(1.0, 1.9)));
  sky += mix(vec3(1.0, 0.36, 0.12), vec3(1.0, 0.86, 0.66), dawn) * pow(near, 2.4) * 1.5 * (1.0 - night * 0.8);

  // Stars, while it is night, where the sky is darkest.
  vec2 cell = floor(vSpot * vec2(180.0, 90.0));
  float star = step(0.9965, hash(cell + uSeed)) * smoothstep(0.35, 0.9, up);
  float twinkle = 0.6 + 0.4 * sin(uTime * 2.3 + hash(cell) * 40.0);
  sky += vec3(0.95, 0.9, 1.0) * star * twinkle * night * 1.6;

  // Cloud, drawn out sideways and moving slowly across.
  float cloud = drift(vec2(vSpot.x * 2.6 + uTime * 0.008 + uSeed, vSpot.y * 4.4));
  // Dark where it is thick, and catching the source underneath where it
  // is thin — which is the whole reason a sunset has structure.
  sky = mix(sky, sky * 0.34, smoothstep(0.52, 0.86, cloud) * 0.8);
  sky += vec3(1.0, 0.42, 0.2) * pow(near, 1.6) * smoothstep(0.5, 0.28, cloud) * 0.5;

  gl_FragColor = vec4(sky * uLevel, 1.0);
}
`;function HR(){const n=new Et,t={uTime:{value:0},uLevel:{value:0}},e=[],o=[];for(let s=0;s<fn;s+=1){const r=Pe+s*wn,a=new Se({vertexShader:kR,fragmentShader:GR,uniforms:{uTime:t.uTime,uLevel:t.uLevel,uSeed:{value:s*2.7},uUp:{value:s/(fn-1)}},depthWrite:!1});a.customProgramCacheKey=()=>"beyond",e.push(a);const l=new lt(new le(c1*1.4,wn),a);l.position.set(c1/2,r+wn*.5,u1+2.6),l.rotation.y=Math.PI,n.add(l)}for(const s of N0.centresX){const r=new Wo(16726552,0,10,2.1);r.position.set(s,Pe+N0.sill+.5,u1-.55),o.push(r),n.add(r)}let i=0;return{group:n,setLevel(s){i=s,t.uLevel.value=s;for(const r of o)r.intensity=16*s},update(s){t.uTime.value=s},follow(s){const r=Math.min(fn-1,Math.max(0,Math.round((s-Pe)/wn))),a=Pe+r*wn+N0.sill+.5,l=r/(fn-1),c=new bt(16726552),u=new bt(16763024),h=Math.min(1,Math.max(0,(l-.15)/.4))*(1-Math.min(1,Math.max(0,(l-.62)/.33)));for(const f of o)f.position.y=a,f.color.copy(c).lerp(u,Math.min(1,Math.max(0,(l-.62)/.38))),f.intensity=i*16*(1-.7*h)},dispose(){for(const s of e)s.dispose();for(const s of o)s.dispose();n.traverse(s=>{s instanceof lt&&s.geometry.dispose()})}}}const h1=4.2,Bc=.85,f1=78;function d1(n){const t=Math.min(1,Math.max(0,n));return t*t*t}function VR(n){const t=Math.max(0,n),e=(t-Bc)/(h1-Bc),o=d1(e)*f1,i=d1(e)*Math.PI*3.1,s=Math.min(1,Math.max(0,e*1.6))*.42,r=Math.min(1,Math.max(0,t/Bc)),a=t<Bc?Math.sin(t*61)*.035*r*r:0;return{height:o,spin:i,tilt:s,shudder:a,gone:o>f1*.92,done:t>=h1}}const pd=1;function U0(n){return n.traverse(t=>t.layers.enable(pd)),n}function WR(n){const{length:t,depth:e}=Ot,o=new P(33,7.5,29),i=new P(3,.2,1),s=new $r(16747578,2.6);s.position.copy(o),s.target.position.copy(i),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.near=4,s.shadow.camera.far=80,s.shadow.camera.left=-16,s.shadow.camera.right=16,s.shadow.camera.top=14,s.shadow.camera.bottom=-14,s.shadow.bias=-7e-4,s.shadow.normalBias=.05,n.add(s,s.target);const r=new Xr(3820920,1380361,.4);n.add(r);const a=new Wo(11058396,5,20,2.2);a.position.set(t/2,7.2,e/2),n.add(a);const l=new Xr(657157,14257998,.3);l.position.set(t/2,.4,e/2),n.add(l);const c=new $r(16738904,0);c.position.set(t/2-.3*45,.3*45,e/2+.905*45),c.target.position.set(t/2,1.2,e/2),n.add(c,c.target);const u=2.1,h=new P(-.3,.3,.905).normalize(),f=new P(t/2,5.5,e/2),d=new $r(12571391,0);d.position.copy(f).addScaledVector(h,70),d.target.position.copy(f),d.layers.set(pd),n.add(d,d.target);const p=5.2,v=new Xr(6584479,1051412,0);v.layers.set(pd),n.add(v);const m=1.1,g=.42,b=i.clone().sub(o).normalize(),x=s.intensity,w=r.intensity,E=a.intensity,S=l.intensity;let _=1;return{sun:s,sunDirection:b,setEnvironmentAlbedo(y){_=y},setDaylight(y){s.intensity=x*y,r.intensity=w*(.2+.8*y),a.intensity=E*(.06+.94*y),l.intensity=S*y,c.intensity=u*(1-y),n.environmentIntensity=(.085+.915*y)*_,d.intensity=p*g*(1-y),v.intensity=m*g*(1-y)},setLeaving(y){d.intensity=Math.max(d.intensity,p*y),v.intensity=Math.max(v.intensity,m*y),y>0&&(n.environmentIntensity=Math.max(n.environmentIntensity,.5*y))},dispose(){n.remove(s,s.target,c,c.target,r,a,l),n.remove(d,d.target,v),d.dispose(),v.dispose(),s.dispose(),c.dispose(),r.dispose(),a.dispose(),l.dispose()}}}const _e=512;function kc(n,t,e){const o=Math.sin(n*127.1+t*311.7+e*74.7)*43758.5453;return o-Math.floor(o)}function XR(n,t,e){const o=Math.floor(n),i=Math.floor(t),s=n-o,r=t-i,a=s*s*(3-2*s),l=r*r*(3-2*r),c=kc(o,i,e),u=kc(o+1,i,e),h=kc(o,i+1,e),f=kc(o+1,i+1,e);return c+(u-c)*a+(h-c+(c-u-h+f)*a)*l}function ka(n,t,e,o){let i=0,s=.5,r=1;for(let a=0;a<o;a+=1)i+=XR(n*r,t*r,e+a)*s,r*=2.07,s*=.5;return i}function $R(n=1){const t=()=>{const x=document.createElement("canvas");x.width=_e,x.height=_e;const w=x.getContext("2d");if(!w)throw new Error("2D canvas context unavailable for the stone");return[x,w]},[e,o]=t(),[i,s]=t(),[r,a]=t(),l=o.createImageData(_e,_e),c=a.createImageData(_e,_e),u=new Float32Array(_e*_e),h=new Float32Array(_e*_e);for(let x=0;x<_e;x+=1)for(let w=0;w<_e;w+=1){const E=w/_e,S=x/_e,_=x*_e+w,y=ka(E*4.5,S*4.5,11,4),A=ka(E*26,S*26,37,3),M=Math.max(0,ka(E*30,S*30,91,2)-.66)*1.7;let T=y*.55+A*.3-M*.5;const R=Math.max(0,1-Math.abs(S-.5)*5);T-=R*.06*(.5+A);const L=Math.max(0,.44-T)*2.4,U=Math.pow(Math.max(0,Math.abs(S-.5)*2-.55),1.4),z=ka(E*7.5,S*7.5,53,4),O=Math.max(0,Math.min(1,(z*.95+L*.8+U*.55-.585)*4.2));h[_]=O,T+=O*.05;const B=ka(E*11,S*11,71,3),N=Math.max(0,Math.min(1,(B-.63)*4))*(1-O)*.7;u[_]=T+N*.012;const H=.4+y*.32+A*.15-M*.22;let G=138*H+24,$=134*H+24,Q=120*H+21;const j=Math.min(1,O*1.6+L*.3);G*=1-j*.42,$*=1-j*.36,Q*=1-j*.34,G=G*(1-N)+(150*H+42)*N,$=$*(1-N)+(154*H+46)*N,Q=Q*(1-N)+(132*H+38)*N;const X=.5+z*.55,at=30*X,rt=46*X,ft=22*X,et=_*4;l.data[et]=G*(1-O)+at*O,l.data[et+1]=$*(1-O)+rt*O,l.data[et+2]=Q*(1-O)+ft*O,l.data[et+3]=255;const q=.94-R*.34+O*.04-M*.1-j*.22+N*.05;c.data[et]=c.data[et+1]=c.data[et+2]=Math.max(0,Math.min(1,q))*255,c.data[et+3]=255}const f=s.createImageData(_e,_e),d=(x,w)=>u[(w%_e+_e)%_e*_e+(x%_e+_e)%_e],p=5.2;for(let x=0;x<_e;x+=1)for(let w=0;w<_e;w+=1){const E=d(w-1,x-1)+2*d(w-1,x)+d(w-1,x+1)-d(w+1,x-1)-2*d(w+1,x)-d(w+1,x+1),S=d(w-1,x-1)+2*d(w,x-1)+d(w+1,x-1)-d(w-1,x+1)-2*d(w,x+1)-d(w+1,x+1),_=E*p,y=S*p,A=Math.hypot(_,y,1),M=(x*_e+w)*4;f.data[M]=(_/A*.5+.5)*255,f.data[M+1]=(y/A*.5+.5)*255,f.data[M+2]=(1/A*.5+.5)*255,f.data[M+3]=255}o.putImageData(l,0,0),a.putImageData(c,0,0),s.putImageData(f,0,0);const v=(x,w)=>{const E=new ce(x);return E.wrapS=We,E.wrapT=We,E.repeat.set(n,n),E.colorSpace=w?te:nn,E.anisotropy=8,E},m=v(e,!0),g=v(i,!1),b=v(r,!1);return{colour:m,normal:g,roughness:b,dispose(){m.dispose(),g.dispose(),b.dispose()}}}const{lantern:Yu}=Ot,Gi=(Yu.surround.minX+Yu.surround.maxX)/2,Hi=(Yu.surround.minZ+Yu.surround.maxZ)/2,q2=.4,Za=1.76,Y2=(q2+Za)/2,Ka=0,ja=.195,Vi=Math.floor((ne-.2-Ka)/ja),Yi=.28/Y2,p1=Math.PI/2,Gc=.135,m1=.035/Y2,g1=Math.PI-5*Yi,v1=2.6,qR=.042,Hc=.62,YR=2.4;function x1(n){if(n<=0)return 0;if(n>=1)return 1;const t=1.9,e=n-1;return 1+(t+1)*e*e*e+t*e*e}function ZR(n){const t=new Et;t.visible=!1;const e=$R(1),o=new wt({map:e.colour,normalMap:e.normal,roughnessMap:e.roughness,roughness:1,metalness:0});o.normalScale.set(1.15,1.15);const i=[];for(let V=0;V<Vi;V+=1){const I=g1+V*Yi,D=Ka+(V+1)*ja;i.push({angle:I,target:D,clock:-V*qR})}const s=(V,I)=>new st(Math.cos(I)*V,-Math.sin(I)*V),r=new ln,a=.19,l=0,c=Yi+m1,u=5;r.moveTo(...s(a,l).toArray());for(let V=1;V<=u;V+=1)r.lineTo(...s(a,l+(c-l)*(V/u)).toArray());for(let V=0;V<=u;V+=1)r.lineTo(...s(Za,c-(c-l)*(V/u)).toArray());r.closePath();const h=new bn(r,{depth:Gc,bevelEnabled:!0,bevelThickness:.022,bevelSize:.02,bevelSegments:3});h.rotateX(-Math.PI/2),h.translate(0,-Gc,0);const f=new Go(h,o,Vi);f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1,t.add(f);const d=new ln,p=p1+m1;d.moveTo(...s(a,l).toArray());const v=14;for(let V=1;V<=v;V+=1)d.lineTo(...s(a,p*V/v).toArray());for(let V=0;V<=v;V+=1)d.lineTo(...s(Za,p-p*V/v).toArray());d.closePath();const m=new bn(d,{depth:Gc,bevelEnabled:!0,bevelThickness:.022,bevelSize:.02,bevelSegments:3});m.rotateX(-Math.PI/2),m.translate(0,-Gc,0);const g=new lt(m,o);g.castShadow=!0,g.receiveShadow=!0,g.visible=!1,t.add(g);const b=Vi,x=.94,w=Za-.11,E=[],S=(V,I,D)=>{const tt=new ee(V,I,V);tt.translate(0,D+I/2,0),E.push(tt.toNonIndexed())};S(.145,.085,0),S(.105,.735,.085),S(.15,.075,.82);const _=Le(E,!1);for(const V of E)V.dispose();if(!_)throw new Error("gallery: could not merge the balusters");const y=_.getAttribute("uv");for(let V=0;V<y.count;V+=1)y.setXY(V,y.getX(V)*.16,y.getY(V)*.16);const A=new Go(_,o,b);A.castShadow=!0,A.frustumCulled=!1,t.add(A);const M=2*w*Math.sin(Yi/2),T=Math.hypot(M,ja),R=new ie(.032,.032,T*1.12,10,1),L=new Go(R,n,Vi);L.castShadow=!0,L.frustumCulled=!1,t.add(L);const U=[],z=ne-Ka+.35;U.push(new st(0,0)),U.push(new st(.3,0)),U.push(new st(.3,.05)),U.push(new st(.255,.1)),U.push(new st(.245,.17));for(let V=0;V<=8;V+=1){const I=V/8,D=.225-.055*I+.018*Math.sin(I*Math.PI);U.push(new st(D,.17+I*(z-.42)))}U.push(new st(.205,z-.22)),U.push(new st(.245,z-.16)),U.push(new st(.245,z-.06)),U.push(new st(.2,z)),U.push(new st(0,z));const O=new an(U,20),B=O.getAttribute("uv"),N=2*Math.PI*.225;for(let V=0;V<B.count;V+=1)B.setXY(V,B.getX(V)*N,B.getY(V)*z);const H=new lt(O,o);H.castShadow=!0,H.receiveShadow=!0,t.add(H);const G=new It,$=new He,Q=new P,j=new P(1,1,1),X=new P,at=new He,rt=new P,ft=new P(0,1,0),et=new He;let q=!1,ct=0;const vt=()=>{for(let tt=0;tt<Vi;tt+=1){const nt=i[tt],Z=Math.max(0,nt.clock)/Hc,pt=Z>=1,Y=x1(Z),F=nt.target-v1*(1-Y),C=(1-Y)*YR,K=nt.angle-C,ut=pt?0:(1-Z)*.2,mt=Math.sin(tt*3.7+nt.clock*26)*ut;X.set(Math.cos(K),0,Math.sin(K)).normalize(),$.setFromAxisAngle(X,mt),$.multiply(et.setFromAxisAngle(ft,-K)),Q.set(Gi,F,Hi),G.compose(Q,$,j),f.setMatrixAt(tt,G),pt&&tt+1>ct&&(ct=tt+1);const W=K+Yi/2;Q.set(Gi+Math.cos(W)*w,F,Hi+Math.sin(W)*w),G.compose(Q,$,j),A.setMatrixAt(tt,G);const xt=W+Yi;rt.set(Math.cos(xt)*w-Math.cos(W)*w,ja,Math.sin(xt)*w-Math.sin(W)*w).normalize(),at.setFromUnitVectors(ft,rt),Q.set(Gi+Math.cos(W)*w+rt.x*M*.5,F+x+rt.y*M*.5,Hi+Math.sin(W)*w+rt.z*M*.5),G.compose(Q,at,j),L.setMatrixAt(tt,G)}const V=i[Vi-1];g.visible=ct>=Vi,g.visible&&(g.position.set(Gi,V.target,Hi),g.quaternion.setFromAxisAngle(ft,-(V.angle+Yi))),f.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,L.instanceMatrix.needsUpdate=!0;const I=i[0],D=x1(Math.max(0,I.clock)/Hc);H.position.set(Gi,Ka-v1*(1-D),Hi)};return vt(),{group:t,obstacles:[{minX:Gi-.3,maxX:Gi+.3,minZ:Hi-.3,maxZ:Hi+.3,top:ne+.35}],helix(){return ct<=0?null:{cx:Gi,cz:Hi,inner:q2,outer:Za,startAngle:g1,turn:Yi,rise:ja,base:Ka,treads:ct,landing:ct>=Vi?p1:0}},erupt(){q||(q=!0,t.visible=!0)},update(V){if(!q)return;let I=!1;for(const D of i)D.clock<Hc&&(D.clock+=V,I=!0);I&&vt()},risen(){return q&&i.every(V=>V.clock>=Hc)},dispose(){o.dispose(),e.dispose(),f.geometry.dispose(),A.geometry.dispose(),L.geometry.dispose(),H.geometry.dispose()}}}const{length:ca,depth:ph,levels:_n,window:Te,door:je}=Ot,Zu=.25,KR={along:"x",span:ca,at:0,inward:1},Es={along:"x",span:ca,at:ph,inward:-1},jR={along:"z",span:ph,at:0,inward:1},JR={along:"z",span:ph,at:ca,inward:-1},Mi={overhang:.26,depth:.3,thickness:.09,standoff:.14};function To(n,t,e,o,i,s=0,r=t.span){const a=o-e,l=r-s,c=Zu+i,u=t.at+t.inward*(i-Zu)/2,h=(s+r)/2,f=e+a/2;return t.along==="x"?Ko(n,[l,a,c],[h,f,u]):Ko(n,[c,a,l],[u,f,h])}function Ku(n,t,e=0,o=t.span){return[To(n.marble,t,0,_n.skirtingTop,.02,e,o),To(n.marble,t,_n.skirtingTop,_n.dadoTop,0,e,o),To(n.marble,t,_n.dadoTop,_n.dadoCapTop,.045,e,o)]}function tp(n,t){return[To(n.plaster,t,_n.corniceBottom,_n.ceiling,.19),To(n.plaster,t,_n.corniceBottom-.06,_n.corniceBottom,.1)]}function QR(n,t){const e=new Et;return e.add(...Ku(n,t)),e.add(To(n.wallField,t,_n.dadoTop,_n.ceiling,0)),e.add(To(n.gilt,t,_n.pictureRail,_n.pictureRailTop,.055)),e.add(...tp(n,t)),e}function tP(n){const t=Te.width/2,e=new ei;return e.moveTo(n-t,Te.sill),e.lineTo(n-t,Te.springing),e.absarc(n,Te.springing,t,Math.PI,0,!0),e.lineTo(n+t,Te.sill),e.closePath(),e}function eP(n,t,e){const o=t/2,i=new ei;return i.moveTo(n-o,0),i.lineTo(n+o,0),i.lineTo(n+o,e),i.lineTo(n-o,e),i.closePath(),i}function Z2(n,t,e){const o=new bn(e,{depth:Zu,bevelEnabled:!1}),i=new lt(o,n);return i.castShadow=!0,i.receiveShadow=!0,t.along==="x"?(i.rotation.y=t.inward===1?Math.PI:0,i.position.set(t.inward===1?ca:0,0,t.at)):(i.rotation.y=t.inward===1?-Math.PI/2:Math.PI/2,i.position.set(t.at,0,t.inward===1?0:ph)),i}function K2(n,t,e,o){const i=new ln;return i.moveTo(n,e),i.lineTo(t,e),i.lineTo(t,o),i.lineTo(n,o),i.closePath(),i}function nP(n){const t=new Et,e=Te.crown+.2;t.add(...Ku(n,Es));const o=K2(0,ca,_n.dadoTop,e);for(const s of Te.centresX)o.holes.push(tP(s));t.add(Z2(n.wallField,Es,o)),t.add(To(n.wallField,Es,e-.05,_n.ceiling,0)),t.add(...tp(n,Es));const i=Es.at+.12;for(const s of Te.centresX){const r=Te.width/2,a=new ln;a.moveTo(s-r,Te.sill),a.lineTo(s+r,Te.sill),a.lineTo(s+r,Te.springing),a.absarc(s,Te.springing,r,0,Math.PI,!1),a.closePath();const l=new lt(new Ws(a),n.glazing);l.rotation.y=Math.PI,l.position.set(ca,0,i),t.add(l);const c=.05,u=Es.at+.11,h=n.frame;for(const d of[-r/3,r/3])t.add(Ko(h,[c,Te.springing-Te.sill,c*1.4],[s+d,(Te.sill+Te.springing)/2,u]));const f=4;for(let d=1;d<f;d+=1){const p=Te.sill+(Te.springing-Te.sill)*d/f;t.add(Ko(h,[Te.width,c,c*1.4],[s,p,u]))}t.add(Ko(h,[Te.width,c*1.7,c*1.6],[s,Te.springing,u]));for(const d of[Math.PI/4,Math.PI/2,3*Math.PI/4]){const p=Ko(h,[c,r,c*1.4],[0,0,0]);p.position.set(s+Math.cos(d)*(r/2),Te.springing+Math.sin(d)*(r/2),u),p.rotation.z=d-Math.PI/2,t.add(p)}t.add(Ko(n.stone,[Te.width+Mi.overhang,Mi.thickness,Mi.depth],[s,Te.sill-Mi.thickness/2,Es.at-Mi.standoff]))}return t}function M1(n,t,e){const o=new Et,i=t.span/2,s=je.height+.28,r=.14,a=i-je.width/2-r,l=i+je.width/2+r;o.add(...Ku(n,t,0,a)),o.add(...Ku(n,t,l,t.span));const c=K2(0,t.span,_n.dadoTop,s);c.holes.push(eP(i,je.width+r*2,je.height+r)),o.add(Z2(n.wallField,t,c)),o.add(To(n.wallField,t,s-.05,_n.ceiling,0)),o.add(...tp(n,t)),o.add(To(n.stone,t,0,je.height+r,.06,i-je.width/2-r,i-je.width/2)),o.add(To(n.stone,t,0,je.height+r,.06,i+je.width/2,i+je.width/2+r)),o.add(To(n.stone,t,je.height,je.height+r,.06,i-je.width/2-r,i+je.width/2+r));const u=new lt(new le(je.width,je.height),e),h=t.at-t.inward*(Zu+.02);return t.along==="z"?(u.rotation.y=t.inward===1?Math.PI/2:-Math.PI/2,u.position.set(h,je.height/2,i)):(u.rotation.y=t.inward===1?0:Math.PI,u.position.set(i,je.height/2,h)),o.add(u),o}function oP(){const n=new Et,{length:t,depth:e,floor:o}=Ot,i=S3((t-o.borderWidth*2)/2,(e-o.borderWidth*2)/2),s=new wt({color:1709588,roughness:1}),r=new wt({color:3023130,roughness:.7}),a=new ah().load("./art/ceiling-fresco.jpg",G=>{G.colorSpace=te,G.anisotropy=8});a.colorSpace=te;const l=L3();n.add(U0(l.group)),n.add(T3(i)),n.add(A3(i,a));const c=R3(i);n.add(c.group),n.add(QR(i,KR)),n.add(nP(i)),n.add(M1(i,jR,s)),n.add(M1(i,JR,r)),gm(n),n.add(U0(GA().group));const u=_T();n.add(u.group);const h=sE();n.add(h.group);const f=vE(On);n.add(f.group);const d=wE(On);n.add(d.group);const p=Q5();n.add(p.group);const v=new P,m=aA();n.add(m.group);const g=hA();n.add(g.group);const b=zA();n.add(b.group);const x=ZR(i.gilt);n.add(x.group);const w=_E();n.add(U0(w.group));const E=IE(i),S=SR(i,a);E.group.add(S.group),gm(E.group);const _=LA();E.group.add(_.group);const y=new P(In.x,ss,In.z),A=Zd(),M=A?new P(A.x,A.sill+2.2,A.z):y.clone().add(new P(6,-1.5,0)),T=RR(y);E.group.add(T.group);const R=IR(M,y);E.group.add(R.group);const L=BR(i,a);E.group.add(L.group);const U=HR();E.group.add(U.group);const z=[];n.updateMatrixWorld(!0);for(const G of n.children)G!==E.group&&G.traverse($=>{$ instanceof ks&&$.matrixWorld.elements[13]<Pe&&z.push($)});let O=!1;E.group.visible=!1,E.setLit(0),n.add(E.group);const B=c.chapel.position.clone(),N={...gA},H=Ot.window.centresX.map(G=>({top:Ot.window.sill,minX:G-(Ot.window.width+Mi.overhang)/2,maxX:G+(Ot.window.width+Mi.overhang)/2,minZ:e-Mi.standoff-Mi.depth/2,maxZ:e}));return{group:n,bounds:N,obstacles:[...w.obstacles,...S.obstacles,...h.obstacles,...H,...f.obstacles,...pA(),mA(),...x.obstacles],stairHelix:()=>x.helix(),helixAt(G,$,Q){const j=G5();if(j){const at=Math.hypot(G-j.cx,$-j.cz),rt=j.base+j.treads*j.rise;if(at>j.inner-.35&&at<j.outer+.35&&Q>j.base-1.6&&Q<rt+2)return j}const X=x.helix();if(X){const at=Math.hypot(G-X.cx,$-X.cz),rt=X.base+X.treads*X.rise;if(at>X.inner-.7&&at<X.outer+.7&&Q>X.base-2&&Q<rt+2.5)return X}return null},stairRisen:()=>x.risen(),update(G,$,Q){l.update(G),E.group.visible&&(_.update(G),S.update(G,$,Q),L.update(G,$),U.update(G),v.set(Q.x,Q.feet+jt.eyeHeight,Q.z),p.update(G,v,window.innerHeight)),b.update(G),x.update($),f.update($),m.update($,Q.x,Q.z),h.update($,Q)},shattered:()=>h.shattered(),onShatter:G=>h.onShatter(G),push:()=>h.push(),soul(G,$){h.soul(G,$)},reassemble(G){h.reassemble(G)},kintsugi(G){h.kintsugi(G)},mortal(G){h.mortal(G)},restoreRoom(){O=!0;for(const G of z)G.visible=!0;O=!1,x.group.visible=!1,f.standUp(),p.setLevel(0),b.group.visible=!1,E.group.visible=!1,c.chapel.visible=!0,c.chapel.position.copy(B),c.chapel.rotation.set(0,0,0)},leaning:()=>h.leaning(),onTeeter:G=>h.onTeeter(G),waitForVoice:G=>h.waitForVoice(G),setEmergency:G=>g.setBrightness(G),setThreat(G){b.setHeight(G)},setSeep(G,$){d.set(G,$)},pressBale(G,$,Q){S.press(G,$,Q)},flareThreshold(G){S.flare(G)},setRapture(G,$,Q,j,X){_.rapture(G,$),T.set($,j,window.innerHeight,X??y),R.set(Q,j)},leaves:()=>S.leaves(),reflectFlood(G,$,Q){b.reflect(G,$,Q)},setDeparture(G){const $=VR(G);c.chapel.position.set(B.x+$.shudder,B.y+$.height,B.z+$.shudder*.6),c.chapel.rotation.set($.tilt,$.spin,$.tilt*.4,"YXZ"),c.chapel.visible=!$.gone;const Q=Math.min(1,Math.max(0,(G-.85)/1.6));E.group.visible=Q>0,E.setLit(Q),_.setLevel(Q),L.setLevel(Q),U.setLevel(Q),p.setLevel(Q)},dimTheGallery(G){if(G!==O){O=G;for(const $ of z)$.visible=!G}},warmUp(G,$,Q){const j=[];if(E.group.traverse(q=>{if(!(q instanceof lt))return;const ct=q.material;if(Array.isArray(ct))return;const vt=ct.map;vt&&j.push(vt)}),j.length===0||j.some(q=>!q.image))return!1;const X=E.group.visible,at=[];E.group.visible=!0,E.group.traverse(q=>{q instanceof ks||q.visible||(at.push(q),q.visible=!0)}),G.compile($,Q);for(const q of j)G.initTexture(q);const rt=[];E.group.traverse(q=>{q.frustumCulled&&(rt.push(q),q.frustumCulled=!1)});const ft=new Mn(4,4),et=G.getRenderTarget();G.setRenderTarget(ft),G.render($,Q);for(const q of z)q.visible=!1;G.compile($,Q),G.render($,Q);for(const q of z)q.visible=!O;G.setRenderTarget(et),ft.dispose();for(const q of rt)q.frustumCulled=!0;for(const q of at)q.visible=!1;return E.group.visible=X,!0},setBeaconNearness(G,$,Q){E.group.visible&&_.setNearness(G,$,Q)},followClimber(G){E.group.visible&&(E.follow(G),S.follow(G),U.follow(G),L.follow(G),_.follow(G))},openTheWay(){x.erupt(),f.knockDown()},dispose(){l.dispose(),u.dispose(),h.dispose(),f.dispose(),d.dispose(),p.dispose(),T.dispose(),R.dispose(),m.dispose(),g.dispose(),b.dispose(),x.dispose(),a.dispose(),i.dispose(),s.dispose(),r.dispose(),n.traverse(G=>{G instanceof lt&&G.geometry.dispose()})}}}const md=["KeyW","ArrowUp"],iP=["KeyS","ArrowDown"],sP=["KeyA","ArrowLeft"],rP=["KeyD","ArrowRight"],aP=["ShiftLeft","ShiftRight"],lP=["Space"],ju=(n,t)=>t.some(e=>n.has(e)),y1=(n,t,e)=>(ju(n,t)?1:0)-(ju(n,e)?1:0);function cP(n,t=!1){const e=y1(n,md,iP);return{forward:e,strafe:y1(n,rP,sP),slow:ju(n,aP),sprint:t&&e>0,jump:ju(n,lP)}}function uP(n){const t=new Set;let e=0,o=0,i=-1/0,s=-1/0,r=1/0,a=!1;const l=d=>{if(md.includes(d.code)&&!t.has(d.code)){const p=performance.now()/1e3;p-s<jt.doubleTap&&r<jt.tapHeldFor&&(a=!0),i=p}t.add(d.code)},c=d=>{if(md.includes(d.code)){const p=performance.now()/1e3;r=p-i,s=p,a=!1}t.delete(d.code)},u=d=>{document.pointerLockElement===n&&(e+=d.movementX*jt.lookSensitivity,o+=d.movementY*jt.lookSensitivity)},h=()=>{t.clear(),a=!1,r=1/0},f=()=>{document.pointerLockElement!==n&&h()};return window.addEventListener("keydown",l),window.addEventListener("keyup",c),window.addEventListener("mousemove",u),window.addEventListener("blur",h),document.addEventListener("pointerlockchange",f),{moveInput:()=>cP(t,a),consumeLookDelta(){const d={x:e,y:o};return e=0,o=0,d},isLocked:()=>document.pointerLockElement===n,requestLock(){try{const d=n.requestPointerLock();d instanceof Promise&&d.catch(()=>{})}catch{}},dispose(){window.removeEventListener("keydown",l),window.removeEventListener("keyup",c),window.removeEventListener("mousemove",u),window.removeEventListener("blur",h),document.removeEventListener("pointerlockchange",f)}}}const _l=.12,gd=.52,j2=1.95;function mh(n,t,e,o){return n>=e.minX-o&&n<=e.maxX+o&&t>=e.minZ-o&&t<=e.maxZ+o}function w1(n,t,e,o){return{x:os(n,o.minX+e,o.maxX-e),z:os(t,o.minZ+e,o.maxZ-e)}}function hP(n,t,e,o){const i=o.minX-e,s=o.maxX+e,r=o.minZ-e,a=o.maxZ+e;if(n<=i||n>=s||t<=r||t>=a)return{x:n,z:t};const l=n-i,c=s-n,u=t-r,h=a-t,f=Math.min(l,c,u,h);return f===l?{x:i,z:t}:f===c?{x:s,z:t}:f===u?{x:n,z:r}:{x:n,z:a}}function F0(n,t,e,o,i,s=0){let r=w1(n,t,e,o);for(const a of i)a.top<=s+gd||a.bottom!==void 0&&s+j2<=a.bottom||(r=hP(r.x,r.z,e,a));return w1(r.x,r.z,e,o)}function fP(n,t,e,o,i=0){let s=0;for(const r of o)r.top<=s||r.top>e+i||mh(n,t,r,_l)&&(s=r.top);return s}function J2(n,t,e,o,i=0){let s=0,r=0;for(const a of o)a.top<=s||a.top>e+i||mh(n,t,a,_l)&&(s=a.top,r=a.bounce??0);return r}function dP(n,t,e,o,i=0){let s=0,r=null;for(const a of o)a.top<=s||a.top>e+i||mh(n,t,a,_l)&&(s=a.top,r=a);return r}function pP(n,t,e,o,i,s){const r=e*2;let a=null;for(const l of s)l.top<=o+1e-4||l.top>o+i||a&&l.top>=a.top||mh(n,t,l,r)&&(a=l);return a}function mP(n,t,e){return{x:os(n,Math.min(e.minX+.01,e.maxX),Math.max(e.maxX-.01,e.minX)),z:os(t,Math.min(e.minZ+.01,e.maxZ),Math.max(e.maxZ-.01,e.minZ))}}function vd(n,t,e,o,i=0){if(o.treads<=0)return null;const s=n-o.cx,r=t-o.cz,a=Math.hypot(s,r);if(a<o.inner-_l||a>o.outer+_l)return null;const l=Math.PI*2/o.turn;let c=(Math.atan2(r,s)-o.startAngle)/o.turn;c=(c%l+l)%l;const u=o.landing/o.turn;let h=null;for(let f=c;f<=o.treads+u;f+=l){const d=Math.min(Math.floor(f),o.treads-1),p=o.base+(d+1)*o.rise;p<=e+i&&(h===null||p>h)&&(h=p)}return h}const gP=.2;function _1(n,t,e,o,i=0){if(o.treads<=0)return!1;const s=Math.hypot(n-o.cx,t-o.cz);if(s<o.inner||s>o.outer)return!1;const r=Math.PI*2/o.turn;let a=(Math.atan2(t-o.cz,n-o.cx)-o.startAngle)/o.turn;a=(a%r+r)%r;const l=o.landing/o.turn;for(let c=a;c<=o.treads+l;c+=r){const u=Math.min(Math.floor(c),o.treads-1),h=o.base+(u+1)*o.rise;if(h>e+i&&h-gP<e+j2)return!0}return!1}function O0(n,t,e,o=0){const i=Math.hypot(n-e.cx,t-e.cz);return i>=e.inner-o&&i<=e.outer+o}function vP(n,t,e,o){const i=n-o.cx,s=t-o.cz,r=Math.hypot(i,s);if(r<1e-6)return{x:n,z:t};const a=o.inner+e*.55,l=o.outer-e*.55;if(a>=l){const u=(o.inner+o.outer)/2;return{x:o.cx+i/r*u,z:o.cz+s/r*u}}const c=Math.min(l,Math.max(a,r));return c===r?{x:n,z:t}:{x:o.cx+i/r*c,z:o.cz+s/r*c}}function xP(n,t){const e=Math.hypot(n.forward,n.strafe);if(e===0)return{vx:0,vz:0};const o=n.slow?jt.slowSpeed:n.sprint?jt.sprintSpeed:jt.walkSpeed,i=n.forward/e,s=n.strafe/e,r=Math.sin(t),a=Math.cos(t);return{vx:(-r*i+a*s)*o,vz:(-a*i-r*s)*o}}function MP(n,t,e){return{vx:ko(n.vx,t.vx,jt.accelLambda,e),vz:ko(n.vz,t.vz,jt.accelLambda,e)}}function yP(n,t){const e=os(t/jt.walkSpeed,0,1);if(e===0)return{y:0,roll:0};const o=n*jt.bob.cyclesPerMetre*Math.PI*2;return{y:Math.sin(o*2)*jt.bob.amplitude*e,roll:Math.sin(o)*jt.bob.rollAmplitude*e}}const wP=4.2,S1=2.4;function _P(n,t,e,o,i){let s=Ot.spawn.x,r=Ot.spawn.z,a=Ot.spawn.yaw,l=0,c={vx:0,vz:0},u=0,h=0,f=0,d=0,p=!1,v=!1,m=!1,g=0;const b={x:0,z:0,y:0},x={x:0,z:0,y:0};let w=o,E=0,S=0,_=0,y=0,A=0,M={give:0,rise:0,ground:0,wasAirborne:!1,height:0},T=0,R=!1,L=null,U=0,z=jt.fovDegrees;const O=()=>{const B=Math.hypot(c.vx,c.vz),N=yP(u,B),H=E*E,G=Math.sin(U*47.3)*H*.055,$=Math.sin(U*31.7+1.3)*H*.045,Q=Math.sin(U*23.1+2.1)*H*.035;n.position.set(s+$*.1,jt.eyeHeight+f+(p?0:N.y)+G*.12,r),n.rotation.set(l+G,a+$,N.roll+h+Q,"YXZ")};return O(),{camera:n,update(B){const N=t.consumeLookDelta();a-=N.x,l=os(l-N.y,-jt.pitchLimit,jt.pitchLimit);const H=B>0?N.x/B:0,G=os(H*jt.lean.perTurnRate,-.045,jt.lean.max);h=ko(h,G,jt.lean.lambda,B),U+=B,E=ko(E,0,2.6,B);const $=t.moveInput();y=p?Math.max(0,y-B):jt.jump.coyote,A=$.jump?jt.jump.buffer:Math.max(0,A-B),A>0&&(!p||y>0)&&d<=0&&(d=jt.jump.speed,v=!0,y=0,p=!0,A=0),c=MP(c,xP($,a),B);const Q=jt.fovDegrees+($.sprint?4.5:0);Math.abs(z-Q)>.01&&(z=ko(z,Q,6,B),n.fov=z,n.updateProjectionMatrix());const j=(i==null?void 0:i(s,r,f))??null,X=j?j.base+j.treads*j.rise:0;if(p&&j&&!R&&f>j.base+.05&&f<X-1.2&&O0(s,r,j,jt.capsuleRadius*2)&&(c={vx:c.vx*.22,vz:c.vz*.22}),Math.hypot(S,_)>.01){const Y=Math.max(0,1-wP*B);S*=Y,_*=Y}else S=0,_=0;const rt=p||L==null?void 0:L.carry;rt&&L&&Math.abs(L.top-f)<gd&&(f=L.top);const ft=s,et=r,q=F0(s+(c.vx+S)*B+((rt==null?void 0:rt.x)??0),r+(c.vz+_)*B+((rt==null?void 0:rt.z)??0),jt.capsuleRadius,e,o,f);u+=Math.hypot(q.x-s,q.z-r),s=q.x,r=q.z;const ct=f;if(p||d>0?(d-=jt.jump.gravity*B,f+=d*B):d=0,v&&d<=0&&!m){const Y=pP(s,r,jt.capsuleRadius,f,jt.jump.mantleReach,o);if(Y){const F=mP(s,r,Y);b.x=s,b.z=r,b.y=f,x.x=F.x,x.z=F.z,x.y=Y.top,w=o.filter(C=>C!==Y),m=!0,g=0,d=0,v=!1}}if(m){g=Math.min(1,g+B/jt.jump.mantleSeconds);const Y=1-(1-g)*(1-g);f=b.y+(x.y-b.y)*Y;const F=x.x-s,C=x.z-r,K=Math.hypot(F,C),ut=Math.min(K,S1*B),mt=K>1e-4?F/K*ut:0,W=K>1e-4?C/K*ut:0;let xt=c.vx*B+mt,yt=c.vz*B+W;const St=Math.hypot(xt,yt),Ft=Math.max(Math.hypot(c.vx,c.vz),S1)*B;St>Ft&&St>1e-6&&(xt*=Ft/St,yt*=Ft/St);const _t=F0(s+xt,r+yt,jt.capsuleRadius,e,w,f);u+=Math.hypot(_t.x-s,_t.z-r),s=_t.x,r=_t.z,p=g<1,g>=1&&(m=!1,w=o),O();return}const vt=(i==null?void 0:i(s,r,ct))??null,V=p?0:gd,I=vt?vt.base+vt.treads*vt.rise:0;if(vt&&ct>I-.25&&!O0(s,r,vt,-.3)&&(R=!0),vt!==null&&ct>vt.base+.05&&ct<I-1.2&&!R&&vt&&O0(s,r,vt,jt.capsuleRadius*2)){const Y=vP(s,r,jt.capsuleRadius,vt);s=Y.x,r=Y.z}vt&&_1(s,r,ct,vt,V)&&!_1(ft,et,ct,vt,V)&&(u-=Math.hypot(s-ft,r-et),s=ft,r=et);const tt=vt?vd(s,r,ct,vt,V):null,nt=fP(s,r,ct,o,V),Z=Math.max(nt,tt??0),pt=f<=Z&&nt>=Z-1e-4?J2(s,r,ct,o,V):0;if(f<=Z&&(M={give:pt,rise:d,ground:Z,wasAirborne:p,height:f}),pt>0){d=Math.min(pt+Math.abs(d)*.1,pt*1.1),T+=1,f=Z+.01,p=!0,v=!0,y=0,O();return}f<=Z?(tt!==null&&Z===tt&&(R=!1),f=!p&&Z>f+.012&&!rt?ko(f,Z,jt.stepLambda,B):Z,d=0,p=!1,v=!1,L=nt>=Z-1e-4?dP(s,r,ct,o,V):null):(p=!0,L=null),O()},look(B,N){a+=B,l=os(l+N,-jt.pitchLimit,jt.pitchLimit),O()},moveTo(B,N){const H=F0(B,N,jt.capsuleRadius,e,o,f);s=H.x,r=H.z,O()},position:()=>({x:s,z:r}),speed:()=>Math.hypot(c.vx,c.vz),distanceWalked:()=>u,airborne:()=>p,feet:()=>f,lift(B){f=B,d=0,p=!1,R=!0},heading:()=>a,lastLanding:()=>({...M}),bounces:()=>T,shake:B=>{E=Math.max(E,B)},shove(B,N,H){const G=s-B,$=r-N,Q=Math.hypot(G,$);Q<1e-4||(S=G/Q*H,_=$/Q*H,p||(d=jt.jump.speed*.42,p=!0))}}}const SP=.1,bP=1;function TP(n){let t=0,e=!1,o=0,i=1/60;const s=r=>{if(!e)return;const a=Math.min((r-o)/1e3,SP);if(o=r,a>0){i=ko(i,a,bP,a);try{n(a)}catch(l){e=!1,console.error("gallery: frame step failed, loop stopped",l);return}}t=requestAnimationFrame(s)};return{start(){e||(e=!0,o=performance.now(),t=requestAnimationFrame(s))},stop(){e=!1,cancelAnimationFrame(t)},fps:()=>1/i}}const{window:Vc,length:EP,depth:AP,levels:RP}=Ot,Wc=2,PP=52,CP=.16,IP=.6,LP=`
precision highp float;

varying vec2 vUv;

uniform sampler2D tDepth;
uniform mat4 uInverseProjection;
uniform mat4 uCameraMatrix;
uniform vec3 uCameraPosition;
uniform vec3 uForward;
uniform float uNear;
uniform float uFar;

uniform vec3 uToSun;
uniform vec3 uSunColour;
uniform float uDensity;
uniform float uScattering;
uniform float uTime;
uniform int uSteps;

uniform float uCentres[5];

const float WALL_Z = ${AP.toFixed(3)};
const float SILL = ${Vc.sill.toFixed(3)};
const float SPRINGING = ${Vc.springing.toFixed(3)};
const float CROWN = ${Vc.crown.toFixed(3)};
const float HALF = ${(Vc.width/2).toFixed(3)};
const float ROOM_X = ${EP.toFixed(3)};
const float CEILING = ${RP.ceiling.toFixed(3)};

float linearDepth(float fragDepth) {
  float z = fragDepth * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

/** Does the ray from p toward the sun escape through a window? */
bool seesSun(vec3 p) {
  float t = (WALL_Z - p.z) / uToSun.z;
  if (t < 0.0) return false;

  vec3 hit = p + uToSun * t;
  // Cheapest rejections first: most samples in the room fail here, and
  // never reach the per-window loop at all.
  if (hit.y < SILL || hit.y > CROWN) return false;
  if (hit.x < 0.0 || hit.x > ROOM_X) return false;

  for (int i = 0; i < 5; i++) {
    float dx = hit.x - uCentres[i];
    if (abs(dx) > HALF) continue;

    if (hit.y > SPRINGING) {
      float dy = hit.y - SPRINGING;
      if (dx * dx + dy * dy > HALF * HALF) continue;
    }

    // Glazing bars occlude too, which is what gives a real shaft its
    // pane pattern rather than a clean edge.
    float bar = 0.028;
    if (abs(abs(dx) - HALF / 3.0) < bar) return false;
    if (hit.y < SPRINGING) {
      float pane = (SPRINGING - SILL) / 4.0;
      float band = mod(hit.y - SILL, pane);
      if (min(band, pane - band) < bar) return false;
    }
    if (abs(hit.y - SPRINGING) < bar * 1.6) return false;

    return true;
  }
  return false;
}

/** Henyey-Greenstein: forward-scattering, so looking toward the sun glows. */
float phase(float cosAngle, float g) {
  float gg = g * g;
  return (1.0 - gg) / (4.0 * 3.14159265 * pow(1.0 + gg - 2.0 * g * cosAngle, 1.5));
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  float fragDepth = texture2D(tDepth, vUv).x;

  vec4 clip = vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
  vec4 viewSpace = uInverseProjection * clip;
  viewSpace /= viewSpace.w;
  vec3 direction = normalize((uCameraMatrix * vec4(viewSpace.xyz, 0.0)).xyz);

  float distance = fragDepth >= 1.0
    ? uFar
    : linearDepth(fragDepth) / max(dot(direction, uForward), 0.001);
  distance = min(distance, 30.0);

  float steps = float(uSteps);
  float stepLength = distance / steps;
  float jitter = hash(gl_FragCoord.xy + uTime);
  vec3 position = uCameraPosition + direction * stepLength * jitter;
  vec3 stride = direction * stepLength;

  float accumulated = 0.0;

  for (int i = 0; i < 96; i++) {
    if (i >= uSteps) break;

    bool inside =
      position.x > 0.0 && position.x < ROOM_X &&
      position.z > 0.0 && position.z < WALL_Z &&
      position.y > 0.0 && position.y < CEILING;

    if (inside && seesSun(position)) {
      // Thicker low down, the way dust and haze actually settle.
      float height = 1.0 - smoothstep(0.0, CEILING, position.y) * 0.55;
      accumulated += stepLength * uDensity * height;
    }
    position += stride;
  }

  vec3 shaft = uSunColour * accumulated * phase(dot(direction, uToSun), uScattering);
  gl_FragColor = vec4(shaft, 1.0);
}
`,DP=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,NP=`
precision highp float;

varying vec2 vUv;

uniform sampler2D tDepth;
uniform mat4 uInverseProjection;
uniform vec2 uResolution;
uniform float uNear;
uniform float uFar;
uniform float uRadius;
uniform float uStrength;
uniform float uBias;

const int SAMPLES = 12;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

/** Rebuild the view-space position a pixel's depth implies. */
vec3 viewPosition(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  vec4 clip = vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  vec4 view = uInverseProjection * clip;
  return view.xyz / view.w;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  float depth = texture2D(tDepth, vUv).x;
  // Nothing behind everything can be occluded by anything.
  if (depth >= 1.0) {
    gl_FragColor = vec4(1.0);
    return;
  }

  vec3 origin = viewPosition(vUv);
  vec2 texel = 1.0 / uResolution;
  // Cross derivatives of the reconstructed position give the surface
  // this pixel sits on, without ever storing a normal.
  vec3 normal = normalize(cross(
    viewPosition(vUv + vec2(texel.x, 0.0)) - origin,
    viewPosition(vUv + vec2(0.0, texel.y)) - origin
  ));

  float linear = linearDepth(depth);
  // Constant in world terms, so a corner does not lose its shadow as you
  // walk toward it.
  float radius = uRadius / max(linear, 0.4);
  float rotation = hash(gl_FragCoord.xy) * 6.2831853;

  float occlusion = 0.0;
  for (int i = 0; i < SAMPLES; i++) {
    float t = (float(i) + 0.5) / float(SAMPLES);
    float angle = rotation + t * 6.2831853 * 3.0;
    // Corrected for aspect, so the sample disc stays round rather than
    // stretching with the window.
    vec2 offset = vec2(cos(angle), sin(angle)) * radius * sqrt(t)
                * vec2(uResolution.y / uResolution.x, 1.0);

    vec3 sampled = viewPosition(vUv + offset);
    vec3 toward = sampled - origin;
    float distance = length(toward);
    if (distance < 0.0001) continue;

    // Only geometry in front of this surface occludes it, and only while
    // it is close enough for the light it blocks to matter.
    float facing = max(0.0, dot(normal, toward / distance) - uBias);
    float falloff = 1.0 / (1.0 + distance * distance * 2.0);
    occlusion += facing * falloff;
  }

  occlusion = clamp(1.0 - (occlusion / float(SAMPLES)) * uStrength, 0.0, 1.0);
  gl_FragColor = vec4(vec3(occlusion), 1.0);
}
`,UP=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tAo;
uniform vec2 uResolution;

void main() {
  vec2 texel = 1.0 / uResolution;
  float sum = 0.0;
  for (int x = -2; x <= 2; x++) {
    for (int y = -2; y <= 2; y++) {
      sum += texture2D(tAo, vUv + vec2(float(x), float(y)) * texel).r;
    }
  }
  gl_FragColor = vec4(vec3(sum / 25.0), 1.0);
}
`,FP=n=>`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tVolume;
uniform sampler2D tAo;
uniform float uAoAmount;
uniform sampler2D tDepth;
uniform mat4 uInverseProjection;
uniform mat4 uCameraMatrix;
uniform vec2 uMist;
uniform vec3 uMistColour;

${n}

/**
 * A mist that lies thickest below the eye.
 *
 * Exponential in height, measured from wherever the eye is: thin across
 * the shaft and thickening fast with every metre looked down, so the
 * ledges beside you are clear and the drop beneath you glows. Integrated
 * along each pixel's own ray from the depth buffer, which is why it is
 * done here and not in the materials — it reaches everything in the
 * frame, the windows and the light shows included.
 */
vec3 mist(vec3 colour, vec2 uv) {
  if (uMist.x <= 0.0) return colour;
  float d = texture2D(tDepth, uv).x;
  vec4 clip = vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  vec4 view = uInverseProjection * clip;
  vec3 at = view.xyz / view.w;
  float dist = min(length(at), 90.0);
  vec3 dir = mat3(uCameraMatrix) * normalize(at);
  float k = -dir.y * dist / uMist.y;
  float along = abs(k) < 1e-3 ? 1.0 : (exp(min(k, 12.0)) - 1.0) / k;
  float fog = 1.0 - exp(-uMist.x * dist * along);
  return mix(colour, uMistColour, fog);
}

void main() {
  vec4 sampled = texture2D(tScene, vUv);
  vec3 scene = sampled.rgb;
  vec3 shaft = texture2D(tVolume, vUv).rgb;

  // Sky pixels mark themselves with zero alpha and are passed through
  // untouched — no occlusion, no grade. Ambient occlusion on a sky is
  // meaningless, and grading it turns a burning horizon into grey.
  if (sampled.a < 0.5) {
    gl_FragColor = vec4(glorify(swallow(mist(scene + shaft, vUv), vUv), vUv), 1.0);
    return;
  }

  float ao = mix(1.0, texture2D(tAo, vUv).r, uAoAmount);
  // Graded here rather than at the very end, so the bloom that follows
  // spreads the emergency light too. Red lamps that do not bleed into the
  // air around them look like red paint.
  gl_FragColor = vec4(glorify(applyGrade(mist(scene * ao + shaft, vUv), vUv), vUv), 1.0);
}
`,OP=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tImage;
uniform vec2 uResolution;

const float SPAN_MAX = 8.0;
const float REDUCE_MUL = 1.0 / 8.0;
const float REDUCE_MIN = 1.0 / 128.0;

float luma(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec2 texel = 1.0 / uResolution;

  float lNW = luma(texture2D(tImage, vUv + vec2(-1.0, -1.0) * texel).rgb);
  float lNE = luma(texture2D(tImage, vUv + vec2( 1.0, -1.0) * texel).rgb);
  float lSW = luma(texture2D(tImage, vUv + vec2(-1.0,  1.0) * texel).rgb);
  float lSE = luma(texture2D(tImage, vUv + vec2( 1.0,  1.0) * texel).rgb);
  vec3 middle = texture2D(tImage, vUv).rgb;
  float lM = luma(middle);

  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));

  // The direction across the edge, from the corner luminances.
  vec2 dir = vec2(
    -((lNW + lNE) - (lSW + lSE)),
     ((lNW + lSW) - (lNE + lSE))
  );

  float reduce = max((lNW + lNE + lSW + lSE) * 0.25 * REDUCE_MUL, REDUCE_MIN);
  float scale = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
  dir = clamp(dir * scale, vec2(-SPAN_MAX), vec2(SPAN_MAX)) * texel;

  vec3 near = 0.5 * (
    texture2D(tImage, vUv + dir * (1.0 / 3.0 - 0.5)).rgb +
    texture2D(tImage, vUv + dir * (2.0 / 3.0 - 0.5)).rgb
  );
  vec3 far = near * 0.5 + 0.25 * (
    texture2D(tImage, vUv + dir * -0.5).rgb +
    texture2D(tImage, vUv + dir * 0.5).rgb
  );

  // The wider tap is better on long edges but overshoots on detail, so
  // fall back to the narrow one wherever it strays outside the
  // neighbourhood it came from.
  float lFar = luma(far);
  gl_FragColor = vec4((lFar < lMin || lFar > lMax) ? near : far, 1.0);
}
`,zP=`
uniform float uGrade;
uniform float uGradeVignette;
/** 1 at the instant of the break, falling to 0. Swallows the screen. */
uniform float uBlackout;
/** How far the world is pulled down at full alarm. */
uniform float uDim;
/**
 * A stop on the whole image, 1 for the game.
 *
 * The scene is drawn into an offscreen target, and three only tone maps
 * when it draws to the canvas — so the renderer's own toneMappingExposure
 * never touches a single pixel the player sees. That was worth finding: the
 * ending was raised by nearly three stops with no effect whatever on the
 * picture, which is not something you can reason your way to from the
 * lighting numbers, all of which were correct.
 *
 * So the exposure lives here, where the image actually is. Outside the
 * grade rather than inside it, because it is not part of the emergency's
 * look — the grade is bypassed entirely once uGrade reaches zero, and the
 * one shot that needs a different exposure is the one with no grade left
 * on it at all.
 */
uniform float uExposure;
uniform float uGlory;

/** How much colour the dark takes out of everything not emitting. */
const float DRAIN = 0.72;

/**
 * The exposure and the blackout, which apply to everything on screen.
 *
 * Split out so the sky can have them without the grade. The sky skipped
 * this whole function, and with it the blackout — so going under, with
 * the eye tipped back towards the surface, the night outside came through
 * the black as a red horizon in the middle of the drowning.
 */
vec3 swallow(vec3 colour, vec2 uv) {
  vec2 fromCentre = uv - 0.5;
  colour *= uExposure;

  // The blackout stands outside the grade. It fires on the frame she
  // lands, before the world has begun to change, so gating it on the
  // grade would swallow it at the one moment it matters.
  vec3 swallowed = colour;
  if (uBlackout > 0.0) {
    float fromEdge = smoothstep(0.0, 0.75, 1.0 - dot(fromCentre, fromCentre) * 4.0);
    /**
     * The centre lags the edges while the dark is closing — and stops
     * lagging once it has closed.
     *
     * This held the lag at a constant 0.55, so at a full blackout the
     * middle of the frame kept 1.35 - 0.55 = 0.80 of the image: a
     * fifth of the picture, for ever, right where the player is looking.
     * A fifth of a plaster wall is nothing and nobody noticed. A fifth
     * of a window with an evening behind it is still a window, which is
     * exactly how it was reported — you go under the darkness and the
     * windows are still there.
     *
     * So the vignette is now a property of the *closing* rather than of
     * the closed state. It still arrives from the edges, and when it has
     * arrived there is nothing left.
     */
    float lag = 0.55 * (1.0 - smoothstep(0.55, 1.0, uBlackout));
    float take = clamp(uBlackout * 1.35 - fromEdge * lag, 0.0, 1.0);
    swallowed = mix(colour, vec3(0.0), take);
  }
  return swallowed;
}

vec3 applyGrade(vec3 colour, vec2 uv) {
  vec2 fromCentre = uv - 0.5;
  colour = swallow(colour, uv);
  if (uGrade <= 0.0) return colour;

  float luma = dot(colour, vec3(0.299, 0.587, 0.114));

  // What the alarm does to the image, and — just as important — what it
  // no longer does.
  //
  // Every earlier version of this replaced each pixel's colour with a
  // tint scaled by its luminance. That is a red filter. It cannot be
  // anything else however carefully it is tuned, because it treats a wall
  // and the sky behind a window identically and there is no lamp
  // anywhere in the arithmetic — and, fatally, it destroyed the colour of
  // the red lamps too, so adding real ones changed nothing at all.
  //
  // So the grade no longer paints. It takes the daylight out of what is
  // left and pulls the level down, which is what a room looks like when
  // its lights have gone off. Everything red in the picture is red
  // because something in the room is emitting red.
  // Colour and level are protected separately, because they are two
  // different questions and answering them together got both wrong.
  //
  // Colour is protected wherever the pixel is genuinely red — where its
  // red channel runs well ahead of the other two. That is the emergency's
  // own light, whether it is the lens of a lamp or a wall the lamp is
  // falling on, and draining it was the whole reason adding real red
  // lights changed nothing: the room was fitted with them precisely so it
  // would stop looking like a filter, and then the grade took the red
  // back out. It cannot be decided by luminance either. Red weighs 0.299,
  // so a saturated red pixel must be nearly twice over-range before it
  // registers as bright at all.
  //
  // Level is protected only where the pixel is genuinely over-range: the
  // lens itself, the core of a beam. Protecting level by redness as well
  // meant every wall within a few metres of a fitting was passed through
  // undimmed and blew out to a flat sheet of neon — which is the filter
  // look again, arrived at from the opposite direction.
  float redness = clamp((colour.r - max(colour.g, colour.b)) * 1.7, 0.0, 1.0);
  float blown = smoothstep(0.72, 1.15, luma);
  vec3 graded = mix(colour, vec3(luma), DRAIN * (1.0 - redness)) * mix(uDim, 1.0, blown);

  graded = mix(colour, graded, uGrade);

  // Corners pulled down, so the light reads as coming from fittings in
  // the room rather than from everywhere.
  float vignette = 1.0 - dot(fromCentre, fromCentre) * uGradeVignette * uGrade;
  return graded * vignette;
}
`,BP=`
vec3 glorify(vec3 colour, vec2 uv) {
  if (uGlory <= 0.0) return colour;
  // How far away this pixel's surface is, from the depth, as the mist does.
  float d = texture2D(tDepth, uv).x;
  vec4 view = uInverseProjection * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  float dist = min(length(view.xyz / view.w), 120.0);
  // Warmed rather than drained: the red goes to gold, the rest keeps its colour.
  float luma = dot(colour, vec3(0.299, 0.587, 0.114));
  float redness = clamp((colour.r - max(colour.g, colour.b)) * 1.5, 0.0, 1.0);
  vec3 gold = luma * vec3(1.3, 1.08, 0.74);
  vec3 warm = mix(colour, gold, uGlory * (0.35 + 0.55 * redness));
  // And the room going into the light: the far of it first, then the near,
  // until there is nothing between the eye and it.
  // Slowly, and never over what is itself alight — the light, the host
  // round it and the feathers stay above the haze until the white.
  float haze = (1.0 - exp(-uGlory * uGlory * uGlory * dist * 0.075))
             * (1.0 - 0.75 * smoothstep(0.9, 2.6, luma));
  return mix(warm, vec3(1.0, 0.93, 0.8) * 1.35, haze * 0.9);
}`,kP=.4,Q2=.74,GP=1.5,HP=1.15,VP=.62,WP=.85,go=4,XP=2,$P=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tImage;
uniform float uThreshold;

void main() {
  vec3 colour = texture2D(tImage, vUv).rgb;
  float luma = dot(colour, vec3(0.299, 0.587, 0.114));
  // Soft knee rather than a hard cut: a step function makes the glow's
  // outline crawl as the camera moves, because pixels flick across the
  // threshold one frame to the next.
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  gl_FragColor = vec4(colour * keep, 1.0);
}
`,qP=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tImage;
uniform vec2 uResolution;
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture2D(tImage, vUv).rgb * 0.227027;

  vec2 a = texel * 1.3846153846;
  vec2 b = texel * 3.2307692308;
  sum += (texture2D(tImage, vUv + a).rgb + texture2D(tImage, vUv - a).rgb) * 0.3162162162;
  sum += (texture2D(tImage, vUv + b).rgb + texture2D(tImage, vUv - b).rgb) * 0.0702702703;

  gl_FragColor = vec4(sum, 1.0);
}
`,YP=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tImage;
uniform sampler2D tBloom;
uniform float uStrength;

/** Where the shoulder starts. Everything below it is untouched. */
const float KNEE = 0.72;

void main() {
  vec3 base = texture2D(tImage, vUv).rgb;
  vec3 glow = texture2D(tBloom, vUv).rgb;
  // Added, not screened. Light falling on the air in front of a bright
  // object is more light arriving at the eye, and addition is what more
  // light arriving is.
  vec3 light = base + glow * uStrength;

  float peak = max(max(light.r, light.g), light.b);
  float over = max(0.0, peak - KNEE);
  float rolled = peak <= KNEE
    ? peak
    : KNEE + (1.0 - KNEE) * (1.0 - exp(-over / (1.0 - KNEE)));
  vec3 kept = light * (rolled / max(peak, 1e-5));
  kept = mix(kept, vec3(rolled), smoothstep(0.0, 3.0, over) * 0.6);

  gl_FragColor = vec4(clamp(kept, 0.0, 1.0), 1.0);
}
`,{window:ZP}=Ot,Pn=2,KP=.85,tx=.9,jP=.1,JP=.035;function re(n,t){return Math.max(1,Math.floor(n/t))}function QP(n,t,e,o,i){const s=n.getDrawingBufferSize(new st),r=new Nd(s.x,s.y);r.type=cs;const a=ao,l=new Mn(s.x,s.y,{depthTexture:r,depthBuffer:!0,type:a}),c=H=>(H.texture.minFilter=Ge,H.texture.magFilter=Ge,H),u=c(new Mn(re(s.x,Wc),re(s.y,Wc),{depthBuffer:!1,type:ao})),h={depthBuffer:!1,type:Ho},f=c(new Mn(re(s.x,Pn),re(s.y,Pn),h)),d=c(new Mn(re(s.x,Pn),re(s.y,Pn),h)),p=c(new Mn(s.x,s.y,{depthBuffer:!1,type:a})),v={depthBuffer:!1,type:a},m=c(new Mn(re(s.x,go),re(s.y,go),v)),g=c(new Mn(re(s.x,go),re(s.y,go),v)),b=c(new Mn(s.x,s.y,{depthBuffer:!1,type:Ho})),x=(H,G)=>new Se({vertexShader:DP,fragmentShader:H,depthTest:!1,depthWrite:!1,uniforms:G}),w=x(LP,{tDepth:{value:r},uInverseProjection:{value:new It},uCameraMatrix:{value:new It},uCameraPosition:{value:new P},uForward:{value:new P(0,0,-1)},uNear:{value:e.near},uFar:{value:e.far},uToSun:{value:o.clone()},uSunColour:{value:i.clone()},uDensity:{value:CP},uScattering:{value:IP},uTime:{value:0},uSteps:{value:PP},uCentres:{value:Float32Array.from(ZP.centresX)}}),E=x(NP,{tDepth:{value:r},uInverseProjection:{value:new It},uResolution:{value:new st(re(s.x,Pn),re(s.y,Pn))},uNear:{value:e.near},uFar:{value:e.far},uRadius:{value:jP},uStrength:{value:KP},uBias:{value:JP}}),S=x(UP,{tAo:{value:f.texture},uResolution:{value:new st(re(s.x,Pn),re(s.y,Pn))}}),_=x(FP(zP+BP),{tScene:{value:l.texture},tVolume:{value:u.texture},tAo:{value:d.texture},uAoAmount:{value:tx},uGrade:{value:0},uGradeVignette:{value:kP},uBlackout:{value:0},uDim:{value:Q2},uExposure:{value:1},uGlory:{value:0},tDepth:{value:r},uInverseProjection:{value:new It},uCameraMatrix:{value:new It},uMist:{value:new st(0,8)},uMistColour:{value:new bt}}),y=x($P,{tImage:{value:p.texture},uThreshold:{value:VP}}),A=new st(re(s.x,go),re(s.y,go)),M=x(qP,{tImage:{value:m.texture},uResolution:{value:A},uDirection:{value:new st(1,0)}}),T=x(YP,{tImage:{value:p.texture},tBloom:{value:g.texture},uStrength:{value:WP}}),R=x(OP,{tImage:{value:b.texture},uResolution:{value:new st(s.x,s.y)}}),L=new le(2,2),U=new th(-1,1,1,-1,0,1),z=new Sl,O=new lt(L,w);O.frustumCulled=!1,z.add(O);const B=(H,G)=>{O.material=H,n.setRenderTarget(G),n.render(z,U)},N=new P;return{setMist(H,G,$){_.uniforms.uMist.value.set(H,G),_.uniforms.uMistColour.value.copy($)},setGrade(H){_.uniforms.uGrade.value=H},setBlackout(H){_.uniforms.uBlackout.value=H},setDim(H){_.uniforms.uDim.value=H},setExposure(H){_.uniforms.uExposure.value=H},setAo(H){_.uniforms.uAoAmount.value=H},setGlory(H){_.uniforms.uGlory.value=H},render(H){n.setRenderTarget(l),n.clear(),n.render(t,e),e.getWorldDirection(N);const G=w.uniforms;G.uInverseProjection.value=e.projectionMatrixInverse,G.uCameraMatrix.value=e.matrixWorld,G.uCameraPosition.value=e.position,G.uForward.value=N,G.uNear.value=e.near,G.uFar.value=e.far,G.uTime.value=H,E.uniforms.uInverseProjection.value=e.projectionMatrixInverse,_.uniforms.uInverseProjection.value=e.projectionMatrixInverse,_.uniforms.uCameraMatrix.value=e.matrixWorld,E.uniforms.uNear.value=e.near,E.uniforms.uFar.value=e.far,B(E,f),B(S,d),B(w,u),B(_,p),B(y,m);for(let $=0;$<XP;$+=1)M.uniforms.tImage.value=m.texture,M.uniforms.uDirection.value.set(1,0),B(M,g),M.uniforms.tImage.value=g.texture,M.uniforms.uDirection.value.set(0,1),B(M,m);T.uniforms.tBloom.value=m.texture,B(T,b),B(R,null)},resize(H,G){const $=n.getPixelRatio(),Q=Math.max(1,Math.floor(H*$)),j=Math.max(1,Math.floor(G*$));l.setSize(Q,j),p.setSize(Q,j),b.setSize(Q,j),m.setSize(re(Q,go),re(j,go)),g.setSize(re(Q,go),re(j,go)),M.uniforms.uResolution.value.set(re(Q,go),re(j,go)),u.setSize(re(Q,Wc),re(j,Wc)),f.setSize(re(Q,Pn),re(j,Pn)),d.setSize(re(Q,Pn),re(j,Pn)),E.uniforms.uResolution.value.set(re(Q,Pn),re(j,Pn)),S.uniforms.uResolution.value.set(re(Q,Pn),re(j,Pn)),R.uniforms.uResolution.value.set(Q,j)},dispose(){for(const H of[l,u,f,d,p,m,g,b])H.dispose();for(const H of[w,E,S,_,y,M,T,R])H.dispose();r.dispose(),L.dispose()}}}const tC=1,eC=128,nC=.55,z0={x:Ot.length/2-5,y:1.9,z:Ot.depth/2};function oC(n,t){const e=new Sv(eC,{type:ao}),o=new wv(.1,60,e);o.position.set(z0.x,z0.y,z0.z);const i=new wu(n);let s=null;return{capture(){const r=n.toneMapping,a=n.toneMappingExposure;n.toneMapping=Si,n.toneMappingExposure=1;const l=t.environmentIntensity;t.environmentIntensity=1;for(let c=0;c<tC;c+=1){o.update(n,t);const u=i.fromCubemap(e.texture).texture;s==null||s.dispose(),s=u,t.environment=u}n.toneMapping=r,n.toneMappingExposure=a,t.environmentIntensity=l},dispose(){s==null||s.dispose(),e.dispose(),i.dispose()}}}class iC extends l3{constructor(t){super(t),this.type=ao}parse(t){const r=function(y,A){switch(y){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(A||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(A||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(A||""))}},u=`
`,h=function(y,A,M){A=A||1024;let R=y.pos,L=-1,U=0,z="",O=String.fromCharCode.apply(null,new Uint16Array(y.subarray(R,R+128)));for(;0>(L=O.indexOf(u))&&U<A&&R<y.byteLength;)z+=O,U+=O.length,R+=128,O+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(R,R+128)));return-1<L?(y.pos+=U+L+1,z+O.slice(0,L)):!1},f=function(y){const A=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,O;for((y.pos>=y.byteLength||!(z=h(y)))&&r(1,"no header found"),(O=z.match(A))||r(3,"bad initial token"),U.valid|=1,U.programtype=O[1],U.string+=z+`
`;z=h(y),z!==!1;){if(U.string+=z+`
`,z.charAt(0)==="#"){U.comments+=z+`
`;continue}if((O=z.match(M))&&(U.gamma=parseFloat(O[1])),(O=z.match(T))&&(U.exposure=parseFloat(O[1])),(O=z.match(R))&&(U.valid|=2,U.format=O[1]),(O=z.match(L))&&(U.valid|=4,U.height=parseInt(O[1],10),U.width=parseInt(O[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||r(3,"missing format specifier"),U.valid&4||r(3,"missing image size specifier"),U},d=function(y,A,M){const T=A;if(T<8||T>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);T!==(y[2]<<8|y[3])&&r(3,"wrong scanline width");const R=new Uint8Array(4*A*M);R.length||r(4,"unable to allocate buffer space");let L=0,U=0;const z=4*T,O=new Uint8Array(4),B=new Uint8Array(z);let N=M;for(;N>0&&U<y.byteLength;){U+4>y.byteLength&&r(1),O[0]=y[U++],O[1]=y[U++],O[2]=y[U++],O[3]=y[U++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=T)&&r(3,"bad rgbe scanline format");let H=0,G;for(;H<z&&U<y.byteLength;){G=y[U++];const Q=G>128;if(Q&&(G-=128),(G===0||H+G>z)&&r(3,"bad scanline data"),Q){const j=y[U++];for(let X=0;X<G;X++)B[H++]=j}else B.set(y.subarray(U,U+G),H),H+=G,U+=G}const $=T;for(let Q=0;Q<$;Q++){let j=0;R[L]=B[Q+j],j+=T,R[L+1]=B[Q+j],j+=T,R[L+2]=B[Q+j],j+=T,R[L+3]=B[Q+j],L+=4}N--}return R},p=function(y,A,M,T){const R=y[A+3],L=Math.pow(2,R-128)/255;M[T+0]=y[A+0]*L,M[T+1]=y[A+1]*L,M[T+2]=y[A+2]*L,M[T+3]=1},v=function(y,A,M,T){const R=y[A+3],L=Math.pow(2,R-128)/255;M[T+0]=kl.toHalfFloat(Math.min(y[A+0]*L,65504)),M[T+1]=kl.toHalfFloat(Math.min(y[A+1]*L,65504)),M[T+2]=kl.toHalfFloat(Math.min(y[A+2]*L,65504)),M[T+3]=kl.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const g=f(m),b=g.width,x=g.height,w=d(m.subarray(m.pos),b,x);let E,S,_;switch(this.type){case ro:_=w.length/4;const y=new Float32Array(_*4);for(let M=0;M<_;M++)p(w,M*4,y,M*4);E=y,S=ro;break;case ao:_=w.length/4;const A=new Uint16Array(_*4);for(let M=0;M<_;M++)v(w,M*4,A,M*4);E=A,S=ao;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:x,data:E,header:g.string,gamma:g.gamma,exposure:g.exposure,type:S}}setDataType(t){return this.type=t,this}load(t,e,o,i){function s(r,a){switch(r.type){case ro:case ao:r.colorSpace=Vo,r.minFilter=Ge,r.magFilter=Ge,r.generateMipmaps=!1,r.flipY=!0;break}e&&e(r,a)}return super.load(t,s,o,i)}}const sC="./env/sky_sunset.hdr";async function rC(n,t){const e=new wu(n);e.compileEquirectangularShader();const o=await new iC().loadAsync(sC);o.mapping=gu;const i=e.fromEquirectangular(o).texture;return t.background=o,t.environment=i,t.environmentIntensity=.2,t.backgroundIntensity=.55,e.dispose(),{dispose(){o.dispose(),i.dispose(),t.background=null,t.environment=null}}}const aC=`
varying vec3 vDirection;
void main() {
  vDirection = normalize(position);
  // Translation dropped from the view matrix, so the dome is nailed to
  // the camera and cannot be walked out of.
  //
  // Do not call this "fixed". That is a reserved word in GLSL ES, and it
  // failed the vertex shader to compile — silently, because a material
  // whose program will not link simply draws nothing. The sky was black
  // for days, and every change made to it in that time was a change to a
  // shader the driver had already thrown away. Check the console.
  mat4 turnOnly = mat4(mat3(viewMatrix));
  gl_Position = (projectionMatrix * turnOnly * vec4(position, 1.0)).xyww;
}
`,lC=`
precision highp float;
varying vec3 vDirection;

uniform float uPresence;
uniform float uTime;
uniform vec3 uHigh;
uniform vec3 uLow;
uniform vec3 uBleed;
uniform vec3 uMoonDir;
uniform vec3 uMoon;
uniform vec3 uMoonGlow;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p, int octaves) {
  float sum = 0.0;
  float weight = 0.5;
  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    sum += noise(p) * weight;
    p = p * 2.03 + 7.31;
    weight *= 0.5;
  }
  return sum;
}

/**
 * Cloud, as a deck rather than as a texture on a dome.
 *
 * Dividing the horizontal direction by the vertical is the intersection
 * of the view ray with a plane overhead, so the pattern runs away to
 * infinity as the ray flattens. That perspective is what makes a deck
 * read as something with extent above the world instead of a pattern
 * painted on a sphere, and no amount of detail substitutes for it.
 *
 * The sample point is then displaced by a second noise field before the
 * first is read. Plain fbm gives soft round blobs — the cotton-wool look
 * that says "procedural" immediately. Warping the domain shears those
 * blobs into torn, filamented shapes, which is most of what separates
 * cloud from noise.
 */
float clouds(vec3 dir, float t) {
  float up = max(abs(dir.y), 0.035);
  vec2 p = dir.xz / up * 1.7;
  // Drifting, and slowly deforming as it drifts, so it is weather rather
  // than a texture being scrolled.
  p += vec2(t * 0.010, t * 0.004);
  vec2 warp = vec2(
    fbm(p * 0.45 + vec2(0.0, t * 0.006), 3),
    fbm(p * 0.45 + vec2(4.7, -t * 0.005), 3)
  );
  float body = fbm(p * 0.8 + warp * 2.4, 5);
  // Coverage: a hard-ish threshold leaves open sky between the masses.
  // Solid overcast has no shape to it.
  return smoothstep(0.46, 0.78, body);
}

void main() {
  vec3 dir = normalize(vDirection);
  float up = clamp(dir.y, -1.0, 1.0);

  // Dark above, burning below. Pow rather than a linear ramp so the
  // colour stays out of the upper sky and then arrives all at once near
  // the horizon, the way a glow from the ground actually behaves.
  float low = pow(clamp(1.0 - up, 0.0, 1.0) * 0.5, 2.6);
  vec3 sky = mix(uHigh, uLow, low);

  // Stars, in the part of the sky the fire has not reached.
  //
  // Cheap and worth far more than they cost: a graded wash reads as a
  // backdrop, and the moment there are points of light at a fixed
  // distance behind everything, it reads as sky. Cut off well above the
  // horizon, where the glow would drown them anyway.
  vec2 grid = dir.xz / max(up, 0.05) * 30.0;
  vec2 cell = floor(grid);
  float star = hash(cell);
  if (star > 0.982 && up > 0.10) {
    vec2 within = fract(grid) - 0.5 - (vec2(hash(cell + 3.1), hash(cell + 7.7)) - 0.5) * 0.6;
    float point = smoothstep(0.16, 0.0, length(within));
    // Scintillation, each on its own clock.
    float twinkle = 0.55 + 0.45 * sin(uTime * (1.1 + star * 6.0) + star * 90.0);
    sky += vec3(0.85, 0.80, 1.0) * point * twinkle * smoothstep(0.10, 0.42, up) * 0.55;
  }

  // A low band along the horizon, and no more than that.
  //
  // This used to be the brightest thing in the sky by a distance, and it
  // flattened everything: a uniform red wash from the horizon to halfway
  // up, with no direction to it and nothing to say where the light was
  // coming from. A sky reads as *lit* when one part of it is plainly the
  // source and the rest falls away from that. Here the source is the
  // moon, so the horizon is turned right down and left as what it should
  // have been all along — the last of the daylight, or something burning
  // a long way off.
  float band = exp(-abs(up - 0.04) * 9.0) * 0.28 + exp(-abs(up + 0.02) * 24.0) * 0.14;
  sky += uBleed * band;

  float cover = clouds(dir, uTime);
  // Cloud thins away to nothing right at the horizon, where the depth of
  // air between you and it turns everything to haze.
  cover *= smoothstep(0.0, 0.10, up) * smoothstep(1.0, 0.55, up);

  // The moon. Big, low, and a body rather than a lamp.
  //
  // Drawn into the sky's own shading rather than hung in front of it as
  // an object. As an object it fought the horizon for attention, sat
  // behind cypresses, and had its colour taken by the grade; here nothing
  // can occlude it, nothing can repaint it, and its glow and the
  // horizon's bleed are plainly the same light.
  float toMoon = dot(dir, normalize(uMoonDir));
  float disc = smoothstep(0.9918, 0.9934, toMoon);

  // Maria, so it has a face. Sampled off the direction, so they stay put
  // as the player turns.
  vec3 across = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 down = cross(across, normalize(uMoonDir));
  vec2 face = vec2(dot(dir, across), dot(dir, down));
  float mottle = 0.62 + 0.38 * fbm(face * 46.0 + 40.0, 4);
  // Limb darkening: a disc of flat colour is a sticker, and the fall-off
  // towards the edge is the only cue that says sphere.
  float limb = 0.45 + 0.55 * sqrt(max(0.0, 1.0 - pow(clamp((1.0 - toMoon) / 0.0082, 0.0, 1.0), 2.0)));

  // The moon's air, which is what actually lights this sky.
  //
  // Three falloffs from the same point, over three very different
  // angular scales: a tight aureole hard against the disc, a wide corona,
  // and a very broad lift that carries a long way across. That last one
  // is the important one and was missing — without it the sky has no
  // gradient of its own and the moon is a sticker on a flat red field.
  // With it, the sky is brightest around the moon and falls away in
  // every direction, which is the whole of what "moonlit" looks like.
  float near = max(toMoon, 0.0);
  float aureole = pow(near, 1400.0) * 0.45;
  float corona = pow(near, 90.0) * 0.22;
  float wash = pow(near, 5.0) * 0.24 + pow(near, 1.8) * 0.055;
  sky += uMoonGlow * (aureole + corona + wash);

  vec3 body = uMoon * mottle * limb;
  sky = mix(sky, body, disc);

  // Cloud last, so it crosses the moon instead of sitting behind it —
  // the one moment in the sky where the deck reads as unambiguously
  // nearer than everything else.
  //
  // Lit from the moon rather than uniformly dark: the cloud near it takes
  // a hard rim and the thin parts go translucent, which is the single
  // most convincing thing a moonlit sky does. Away from it they fall back
  // to near-black with only the horizon under them.
  float underlit = exp(-abs(up - 0.03) * 5.0);
  vec3 dark = mix(vec3(0.014, 0.006, 0.018), uBleed * 0.30, underlit);
  vec3 lit = uMoonGlow * (pow(near, 14.0) * 0.95 + pow(near, 2.4) * 0.20);
  sky = mix(sky, dark + lit, cover * 0.92);

  // Alpha zero marks this pixel as sky.
  //
  // Everything else in the scene writes one, so the composite pass can
  // tell them apart and leave the sky alone. It has to: the grade drains
  // the colour out of the room and pulls it down, which is exactly right
  // for a daylight-lit interior pretending to be night and exactly wrong
  // for a sky that already *is* night. Ungated, it took a burning horizon
  // and returned dark grey.
  gl_FragColor = vec4(sky * uPresence, 0.0);
}
`;function cC(){const n={uPresence:{value:0},uTime:{value:0},uHigh:{value:new bt(.02,.008,.034)},uLow:{value:new bt(.46,.02,.075)},uBleed:{value:new bt(1.3,.055,.175)},uMoonDir:{value:new P(-.3,.3,.91).normalize()},uMoon:{value:new bt(2.55,.2,.22)},uMoonGlow:{value:new bt(.95,.085,.13)}},t=new lt(new Xe(1,32,24),new Se({vertexShader:aC,fragmentShader:lC,uniforms:n,side:on,depthWrite:!1,depthTest:!0,toneMapped:!1}));return t.renderOrder=-1e3,t.frustumCulled=!1,t.visible=!1,{mesh:t,setPresence(e){n.uPresence.value=e,t.visible=e>.01},update(e){n.uTime.value=e},dispose(){t.geometry.dispose(),t.material.dispose()}}}const be=new P(0,0,-.5),Ga=.74,b1=2.5,uC=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ep=`
float entryHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float entryNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(entryHash(i), entryHash(i + vec2(1.0, 0.0)), f.x),
             mix(entryHash(i + vec2(0.0, 1.0)), entryHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float entryFlow(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i += 1) {
    sum += amp * entryNoise(p);
    p = mat2(0.8, 0.6, -0.6, 0.8) * p * 2.07 + vec2(3.1, 1.7);
    amp *= 0.5;
  }
  return sum;
}
`,hC=`
uniform float uTime;
varying vec3 vDir;
${ep}
void main() {
  float up = vDir.y;
  vec3 above = vec3(0.028, 0.024, 0.052);
  vec3 level = vec3(0.03, 0.018, 0.022);
  vec3 colour = mix(level, above, smoothstep(0.0, 0.8, up));
  // A haze that is barely there, drifting, so the dark has depth.
  vec2 p = vec2(atan(vDir.z, vDir.x) * 1.6, up * 2.2);
  float haze = entryFlow(p * 1.4 + vec2(uTime * 0.012, -uTime * 0.02));
  colour += vec3(0.035, 0.026, 0.05) * haze * haze * smoothstep(-0.1, 0.5, up);
  // The light above her, glimpsed as a brightening straight overhead.
  colour += vec3(0.16, 0.15, 0.2) * pow(max(up, 0.0), 12.0);
  gl_FragColor = vec4(colour, 1.0);
}
`,fC=`
varying vec3 vLocal;
varying vec3 vNormalW;
varying vec3 vToEye;
void main() {
  vLocal = position;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vToEye = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,dC=`
uniform float uTime;
uniform float uHeight;
varying vec3 vLocal;
varying vec3 vNormalW;
varying vec3 vToEye;
${ep}
void main() {
  float h = vLocal.y / uHeight + 0.5;
  // Seen through its middle rather than along its edge: the rim of a
  // cylinder of haze is where there is least of it to look through.
  float through = pow(abs(dot(normalize(vNormalW), normalize(vToEye))), 1.6);
  float fall = smoothstep(0.02, 0.35, h) * (0.35 + 0.65 * h);
  float drift = entryFlow(vec2(atan(vLocal.z, vLocal.x) * 1.3, h * 5.0 + uTime * 0.08));
  float glow = through * fall * (0.45 + 0.8 * drift);
  gl_FragColor = vec4(vec3(0.62, 0.62, 0.74) * glow * 0.4, 1.0);
}
`,pC=`
varying vec3 vWorld;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,mC=`
uniform float uTime;
uniform vec3 uAt;
varying vec3 vWorld;
${ep}
void main() {
  vec2 d = vWorld.xz - uAt.xz;
  float r = length(d);
  vec2 warp = vec2(entryFlow(vWorld.xz * 0.45 + uTime * 0.03), entryFlow(vWorld.xz * 0.45 - 4.1 - uTime * 0.025));
  float film = entryFlow(vWorld.xz * 0.8 + warp * 2.2 + vec2(uTime * 0.02, -uTime * 0.015));
  float bands = 0.5 + 0.5 * sin(film * 16.0 + uTime * 0.25);
  vec3 oil = mix(vec3(0.5, 0.03, 0.09), vec3(0.34, 0.05, 0.5), smoothstep(0.35, 0.65, film));
  vec3 colour = oil * (0.02 + 0.05 * pow(bands, 3.0));
  // The light from above, lying on the surface round her.
  float pool = exp(-r * r * 0.9);
  colour += vec3(0.5, 0.5, 0.6) * pool * 0.08 * (0.8 + 0.4 * warp.x);
  // Clear enough near her to see her in it; closing to black further out.
  float alpha = mix(0.5, 1.0, smoothstep(0.8, 5.0, r));
  // And into the dark at the horizon with no seam: the same colour the
  // void has at its level, reached well before the edge of the disc.
  colour = mix(colour, vec3(0.03, 0.018, 0.022), smoothstep(7.0, 26.0, r));
  gl_FragColor = vec4(colour, alpha);
}
`;function gC(){const n=new Sl;n.background=new bt(197124);const t=new yn(38,1,.1,80),e=[],o={value:0},i=new Se({vertexShader:uC,fragmentShader:hC,uniforms:{uTime:o},side:on,depthWrite:!1});e.push(i),n.add(new lt(new Xe(40,48,24),i));const s=new wt({color:6446168,roughness:.5});e.push(s);const r=new Et,a=(B,N,H)=>{const G=new lt(new ee(B,N,B),s);G.position.set(0,H+N/2,0),G.castShadow=!0,G.receiveShadow=!0,r.add(G)};a(1.42,.08,0),a(1.34,.05,.08),a(1.16,Ga-.25,.13),a(1.3,.05,Ga-.12),a(1.38,.07,Ga-.07),r.position.copy(be),n.add(r);const l=new Bd({color:14999251,roughness:.42,metalness:0,clearcoat:.3,clearcoatRoughness:.5});e.push(l);const c=f2(l);n.add(c.group);const u=c.place(b1,Math.PI*1.18,new P(be.x,Ga,be.z));u.traverse(B=>{B instanceof lt&&(B.castShadow=!0,B.receiveShadow=!0)});const h=new wt({color:10130572,roughness:.6});e.push(h);const f=c.place(b1,Math.PI*1.18,new P(be.x,-Ga,be.z));f.scale.y*=-1;const d=r.clone();d.scale.y=-1,d.traverse(B=>{B instanceof lt&&(B.material=h)}),n.add(d),c.ready.then(()=>{let B=null;u.traverse(N=>{N instanceof lt&&(B=El(N.geometry,1e-4),B.computeVertexNormals(),N.geometry=B)}),f.traverse(N=>{N instanceof lt&&(B&&(N.geometry=B),N.material=h)})});const p=new Se({vertexShader:pC,fragmentShader:mC,uniforms:{uTime:o,uAt:{value:be}},transparent:!0,depthWrite:!1});e.push(p);const v=new lt(new bl(30,64),p);v.rotation.x=-Math.PI/2,v.renderOrder=1,n.add(v);const m=new am(15789311,230,30,.26,.75,1.3);m.position.set(be.x+2,9,be.z+3.4),m.target.position.set(be.x,1.6,be.z),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.bias=-1e-4,m.shadow.normalBias=.035,n.add(m,m.target);const g=new am(14473471,150,20,.2,.9,1.2);g.position.set(be.x,11,be.z-.2),g.target.position.set(be.x,2.5,be.z),n.add(g,g.target);const b=new $r(16748648,1.1);b.position.set(be.x-2.5,1.2,be.z-6),b.target.position.set(be.x,1.6,be.z),n.add(b,b.target),n.add(new Xr(2762808,656390,.35));const x=11,w=new Se({vertexShader:fC,fragmentShader:dC,uniforms:{uTime:o,uHeight:{value:x}},transparent:!0,depthWrite:!1,blending:Tn,side:we});e.push(w);const E=new lt(new ie(.75,1.25,x,40,1,!0),w);E.position.set(be.x,x/2+.2,be.z),n.add(E);const S=260,_=new $t,y=new Float32Array(S*3),A=new Float32Array(S),M=(B,N)=>{const H=Math.sin((B+1)*12.9898+N*78.233)*43758.5453;return H-Math.floor(H)};for(let B=0;B<S;B+=1){const N=M(B,1)*Math.PI*2,H=Math.sqrt(M(B,2))*1.15;y[B*3]=be.x+Math.cos(N)*H,y[B*3+1]=.3+M(B,3)*7.5,y[B*3+2]=be.z+Math.sin(N)*H,A[B]=.05+M(B,4)*.12}_.setAttribute("position",new qt(y,3));const T=document.createElement("canvas");T.width=32,T.height=32;const R=T.getContext("2d"),L=R.createRadialGradient(16,16,0,16,16,16);L.addColorStop(0,"rgba(250, 248, 255, 1)"),L.addColorStop(.35,"rgba(240, 238, 255, 0.5)"),L.addColorStop(1,"rgba(236, 232, 255, 0)"),R.fillStyle=L,R.fillRect(0,0,32,32);const U=new ce(T);e.push(U);const z=new Iv({color:15921407,size:.035,map:U,transparent:!0,opacity:.75,depthWrite:!1,blending:Tn,sizeAttenuation:!0});e.push(z),n.add(new us(_,z));let O=0;return{scene:n,camera:t,ready:c.ready,update(B){o.value=B;const N=Math.min(.1,Math.max(0,B-O));O=B;const H=B*.07;t.position.set(be.x+Math.sin(H)*1.3,1.45+Math.sin(H*.8)*.12,be.z+7.4+Math.cos(H*.6)*.3),t.lookAt(be.x,1.72,be.z);const G=_.getAttribute("position");for(let $=0;$<S;$+=1){let Q=G.getY($)+A[$]*N;Q>8&&(Q=.3),G.setY($,Q)}G.needsUpdate=!0},resize(B,N){t.aspect=B/Math.max(1,N),t.updateProjectionMatrix()},dispose(){c.dispose();for(const B of e)B.dispose();n.traverse(B=>{(B instanceof lt||B instanceof us)&&B.geometry.dispose()})}}}function vC(n,t){return new Promise(e=>{const o=document.createElement("div");o.id="entry-gate";const i=document.createElement("div");i.className="shade";const s=document.createElement("h1");s.className="title",s.setAttribute("aria-label","Gallery"),[..."GALLERY"].forEach((m,g)=>{const b=document.createElement("span");b.textContent=m,b.style.setProperty("--i",String(g)),b.setAttribute("aria-hidden","true"),s.append(b)});const r=document.createElement("div");r.className="plate";const a=document.createElement("p");a.textContent="WASD to walk · Double-tap W to run · Space to jump · Mouse to look · Esc to release";const l=document.createElement("p");l.className="enter",l.textContent="Click to enter",r.append(a,l),o.append(i,s,r),n.append(o);const c=t.veil.style.display;t.veil.style.display="none";const u=gC();let h=!0;const f=performance.now(),d=()=>{u.resize(window.innerWidth,window.innerHeight)};d(),window.addEventListener("resize",d);const p=()=>{h&&(u.update((performance.now()-f)/1e3),t.renderer.render(u.scene,u.camera),requestAnimationFrame(p))};requestAnimationFrame(p);const v=()=>{h=!1,o.removeEventListener("click",v),window.removeEventListener("resize",d),o.remove(),u.dispose(),t.veil.style.display=c,e()};o.addEventListener("click",v)})}const xC=343;function MC(){const{length:n,depth:t,levels:e}=Ot,o=e.ceiling,i=n*t*o,s=2*(n*t+n*o+t*o);return Math.min(4.5,.161*i/(s*.09))}function yC(n,t){const e=n.sampleRate,o=Math.floor(e*t),i=n.createBuffer(2,o,e),{length:s,depth:r,levels:a}=Ot,l=[r,a.ceiling*2,s/2,r*1.7,s];for(let c=0;c<2;c+=1){const u=i.getChannelData(c);for(let h=0;h<o;h+=1){const f=h/o,d=c===0?2.6:2.75;u[h]=(Math.random()*2-1)*Math.pow(1-f,d)*.55}l.forEach((h,f)=>{const d=Math.floor(h/xC*e)+c*37;d<o&&(u[d]=(u[d]??0)+(f%2===0?.9:-.75)/(1+f*.5))})}return i}function wC(){const n=window.AudioContext??window.webkitAudioContext;if(!n)return console.warn("gallery: no Web Audio; the room will be silent"),null;const t=new n;t.state==="suspended"&&t.resume().catch(()=>{});const e=t.createGain();e.gain.value=.85,e.connect(t.destination);const o=t.createConvolver();o.buffer=yC(t,MC());const i=t.createGain();i.gain.value=.62,o.connect(i).connect(e);const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2e4,s.Q.value=1e-4,s.connect(e),s.connect(o);const r=t.createGain();r.connect(s);const a=t.createGain();return a.connect(e),{context:t,bus:r,music:a,setSubmerged(l){const c=Math.min(1,Math.max(0,l)),u=2e4*Math.pow(320/2e4,c);s.frequency.setTargetAtTime(u,t.currentTime,.05),s.Q.setTargetAtTime(1e-4+c*1.1,t.currentTime,.05)},setVolume(l){e.gain.setTargetAtTime(l,t.currentTime,.1)},dispose(){r.disconnect(),a.disconnect(),s.disconnect(),o.disconnect(),i.disconnect(),e.disconnect(),t.close()}}}const _C=110,Xc=[0,-4,-7,-2],SC=[[0,7,12,16,19],[0,7,12,14,21],[0,7,12,15,19],[0,5,12,17,21]],bC=5,T1=21;function TC(n){const t=(n%Xc.length+Xc.length)%Xc.length;return{rootHz:_C*Math.pow(2,Xc[t]/12),intervals:SC[t]}}function E1(n,t){const e=TC(n),o=e.intervals[t%e.intervals.length];return e.rootHz*Math.pow(2,o/12)}const EC=[-7,4,-3,9,-11],AC=[.16,.12,.1,.075,.055];function RC(n,t){const e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=1500,e.Q.value=.3,e.connect(t);const o=n.createGain();o.gain.value=0,o.connect(e),o.gain.setTargetAtTime(.16,n.currentTime,6);const i=[],s=[],r=[];for(let l=0;l<bC;l+=1){const c=n.createOscillator();c.type=l<2?"sine":"triangle",c.frequency.value=E1(0,l),c.detune.value=EC[l]??0;const u=n.createGain(),h=AC[l]??.08;u.gain.value=h*.66,c.connect(u).connect(o),c.start(),i.push(c);const f=n.createOscillator();f.frequency.value=.021+l*.013;const d=n.createGain();d.gain.value=h*.34,f.connect(d).connect(u.gain),f.start(),s.push(f),r.push(d);const p=n.createOscillator();p.frequency.value=.03+l*.017;const v=n.createGain();v.gain.value=3.5+l,p.connect(v).connect(c.detune),p.start(),s.push(p),r.push(v)}let a=-1;return{update(l){const c=Math.floor(l/T1);if(c===a)return;a=c;const u=T1*.45;i.forEach((h,f)=>{h.frequency.setTargetAtTime(E1(c,f),n.currentTime,u/3)})},dispose(){for(const l of i)l.stop(),l.disconnect();for(const l of s)l.stop(),l.disconnect();for(const l of r)l.disconnect();o.disconnect(),e.disconnect()}}}const Sr=.92;function PC(n,t){const e=Math.floor(n.sampleRate*.16),o=n.createBuffer(1,e,n.sampleRate),i=o.getChannelData(0);for(let u=0;u<e;u+=1)i[u]=(Math.random()*2-1)*Math.pow(1-u/e,3);const s=n.createGain();s.gain.value=.3,s.connect(t);let r=Sr,a=!0;const l=u=>{const h=n.currentTime,f=n.createBufferSource();f.buffer=o,f.playbackRate.value=(a?1:.93)*(.94+Math.random()*.12);const d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=(a?2100:1850)*(.9+Math.random()*.2),d.Q.value=1.1;const p=n.createGain();p.gain.setValueAtTime(0,h),p.gain.linearRampToValueAtTime(u*.5,h+.004),p.gain.exponentialRampToValueAtTime(1e-4,h+.13),f.connect(d).connect(p).connect(s),f.start(h),f.stop(h+.2);const v=n.createOscillator();v.type="sine",v.frequency.setValueAtTime(148+Math.random()*22,h),v.frequency.exponentialRampToValueAtTime(64,h+.08);const m=n.createGain();m.gain.setValueAtTime(0,h),m.gain.linearRampToValueAtTime(u*.22,h+.006),m.gain.exponentialRampToValueAtTime(1e-4,h+.1),v.connect(m).connect(s),v.start(h),v.stop(h+.15),a=!a};let c=!1;return{update(u,h,f){if(u<r-Sr&&(r=u+Sr),f){c=!0,r=Math.max(r,u+Sr*.5);return}if(c){c=!1,l(1.15),r=u+Sr;return}for(;u>=r;)l(Math.min(1,.42+h*.28)),r+=Sr},dispose(){s.disconnect()}}}const CC=52,ex=3,IC=16,B0=IC*ex;function nx(n){return 440*Math.pow(2,(n-69)/12)}const LC=[[45,64,69],[45,64,69],[41,60,69],[41,60,69],[48,64,67],[48,64,67],[43,62,71],[43,62,71],[45,64,69],[45,64,69],[50,65,69],[50,65,69],[41,60,65],[43,62,67],[45,64,69],[45,64,69]],DC=[[0,76,4],[4,72,2],[6,74,3],[9,72,3],[12,79,4],[16,76,2],[18,74,3],[21,71,3],[24,76,3],[27,81,3],[30,79,2],[32,77,1],[33,74,3],[36,72,3],[39,74,3],[42,76,4],[46,69,2]];function NC(){const n=[];LC.forEach((t,e)=>{const o=e*ex,[i,s,r]=t;n.push({at:o,midi:i,beats:2.9,level:.5}),n.push({at:o+1,midi:s,beats:1.6,level:.26}),n.push({at:o+2,midi:r,beats:1.6,level:.22})});for(const[t,e,o]of DC)n.push({at:t,midi:e,beats:o,level:.62});return n.sort((t,e)=>t.at-e.at)}const UC=NC();function FC(n,t){return UC.filter(e=>e.at>=n&&e.at<t)}const OC=1.5,zC=[{ratio:1,level:1,decay:1},{ratio:2.01,level:.3,decay:.55},{ratio:3.04,level:.11,decay:.3}];function BC(n,t){const e=n.createGain();e.gain.value=0,e.connect(t),e.gain.setTargetAtTime(.17,n.currentTime+4,7);const o=60/CC;let i=0;const s=(r,a)=>{const l=nx(r.midi),c=Math.max(1.4,r.beats*o*1.6);for(const u of zC){const h=n.createOscillator();h.type="sine",h.frequency.value=l*u.ratio;const f=n.createGain(),d=r.level*u.level,p=c*u.decay;f.gain.setValueAtTime(0,a),f.gain.linearRampToValueAtTime(d,a+.01),f.gain.exponentialRampToValueAtTime(1e-4,a+p),h.connect(f).connect(e),h.start(a),h.stop(a+p+.05)}};return{update(r){const a=r/o,l=a+OC;if(l<=i)return;const c=Math.max(i,a);for(let u=c;u<l;){const f=Math.floor(u/B0)*B0,d=Math.min(l,f+B0);for(const p of FC(u-f,d-f)){const v=f+p.at;s(p,n.currentTime+(v-a)*o)}u=d}i=l},dispose(){e.disconnect()}}}const kC=14,A1=1.4;function GC(n,t){const e=Math.floor(n.sampleRate*1.2),o=n.createBuffer(1,e,n.sampleRate),i=o.getChannelData(0);for(let l=0;l<e;l+=1)i[l]=Math.random()*2-1;const s=n.createGain();s.gain.value=.9,s.connect(t);const r=(l,c,u,h,f,d)=>{const p=n.createBufferSource();p.buffer=o,p.playbackRate.value=.85+Math.random()*.3;const v=n.createBiquadFilter();v.type=u,v.frequency.value=h,v.Q.value=f;const m=n.createGain();m.gain.setValueAtTime(0,l),m.gain.linearRampToValueAtTime(c,l+.004),m.gain.exponentialRampToValueAtTime(1e-4,l+d),p.connect(v).connect(m).connect(s),p.start(l),p.stop(l+d+.05)},a=(l,c,u,h,f)=>{const d=n.createOscillator();d.type="sine",d.frequency.setValueAtTime(c,l),d.frequency.exponentialRampToValueAtTime(u,l+f*.8);const p=n.createGain();p.gain.setValueAtTime(0,l),p.gain.linearRampToValueAtTime(h,l+.006),p.gain.exponentialRampToValueAtTime(1e-4,l+f),d.connect(p).connect(s),d.start(l),d.stop(l+f+.05)};return{shatter(){const l=n.currentTime+.01;a(l,110,34,.85,.65),r(l,.55,"lowpass",260,.9,.4),r(l+.004,.7,"bandpass",2600,3.5,.22),r(l+.01,.45,"highpass",4200,.7,.16);for(let c=0;c<kC;c+=1){const u=Math.pow(Math.random(),1.8)*A1,h=.16*(1-u/A1)*(.4+Math.random()*.6);r(l+.08+u,h,"bandpass",1400+Math.random()*2600,2.2,.1),Math.random()<.35&&a(l+.08+u,90,45,h*.6,.12)}},dispose(){s.disconnect()}}}const R1=22,P1={x:On.x,y:2.35,z:On.z+4},ox="You ascended. Becoming unchained from the physical transcends freedom. The purest expression of the soul. Art.",HC="Break free from the constraints that entrap you. Break free from language, structured thought. Break free from pain and others. Break free from progress. Lose what you have built, lose that fear. You are a stranger to your mind. Be.";function Jn(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}const VC=2.6,k0=4.4,C1=7.2,WC=10,I1=21,XC=26,$C=1.4;function G0(n){const t=Math.max(0,n),e=1.1*Jn(t/9.5)-1.7*Jn((t-10)/3.8)+2.1*Jn((t-13.8)/9),o=Jn((t-.6)/k0),i=.6+k0+1.2,s=Math.min(1,Math.max(0,(t-i)/(R1-i))),r=s**2.4*qC,a=Math.min(1,s*1.35),l=r+Jn((t-13.4)/3.8)*3.9,c=Jn(t/VC),u=Jn((t-C1)/1.4),h=Jn((t-(C1+WC))/3.2),f=Jn((t-I1)/1.8),d=h>0&&h<1?Math.sin(h*Math.PI)**2*$C:0,p=.6+k0*.859,v=Jn((a-.37)/.22),m=t<p?0:(1.8*Math.exp(-(t-p)/1.6)+.14)*(1-.9*v),g=Jn(t/R1)*.62,b=60-6*Jn(t/9.5)+10*Jn((t-10)/3.5);return{mending:o,approach:e,lift:r,focus:l,daylight:c,words:u,white:h,flaring:d,soul:a,release:f,seams:m,grey:v,orbit:g,fov:b,done:t>=I1+XC}}const qC=6.6,H0={x:On.x,y:Ot.levels.dadoTop+1.35,z:On.z},L1=["gallery","approach","plinth","push"],oo=[{act:"approach",text:"Hm. You came all the way over here, then."},{act:"approach",text:"She's the centrepiece. Two hundred years old, give or take."},{act:"approach",text:"You can stand closer. Nobody's watching."},{act:"approach",text:"There. Close enough to touch her. Not that you would."},{act:"approach",text:"No, go on. I want to see what you think happens."},{act:"plinth",text:"Oh. You actually climbed up."},{act:"plinth",text:"She's pushing back. Hm. That seems unnecessarily personal."},{act:"push",text:"Right. Easy—"},{act:"push",text:"Wait. She's moving."},{act:"push",text:"Don't let go now."}],ix=.05,YC=[ix,.45,.84],ZC="Hm. Well. That was the finest thing in the building.",KC="That noise... that isn't the alarm. Go. Up, now.",jC=2.4,JC="That isn't water. I don't know what it is. Keep moving.",QC=1.1,tI=20,eI=1.6,nI=8,oI={gallery:22,approach:5,plinth:3.2,push:.4};function iI(n,t,e){return t>ix?"push":e?"plinth":n<=sx?"approach":"gallery"}const sx=3;function sI(n){const t=n.act==="gallery"?tI:eI;if(n.elapsed<t||n.since<oI[n.act]||n.act==="gallery"&&n.roamed<nI)return null;for(let e=0;e<oo.length;e+=1)if(oo[e].act===n.act&&!n.said.has(e))return e;return null}function rI(){const n=[];for(let t=0;t<oo.length;t+=1)oo[t].act==="push"&&n.push(t);return n}const aI=.45,V0=3.4,lI=2.4,cI=n=>`./voice/${String(n).padStart(2,"0")}.mp3`;function D1(n,t){const e=document.createElement("p");e.className="caption",e.setAttribute("aria-live","polite"),document.body.append(e);const o="speechSynthesis"in window?window.speechSynthesis:null,i=new Set;let s=999,r=0,a=!1,l=!1,c=!1,u=0,h=-1,f=null,d="gallery",p=0,v=0;const m=rI(),g=["Ava (Premium)","Zoe (Premium)","Serena (Premium)","Jamie (Premium)","Evan (Enhanced)","Nathan (Enhanced)","Joelle (Enhanced)","Premium","Enhanced","Google UK English Female","Google UK English Male","Google US English","Microsoft Sonia","Microsoft Libby","Microsoft Ryan","Serena","Arthur","Martha","Daniel","Samantha","Karen","Moira"],b=/bahh|bells|boing|bubbles|cellos|jester|organ|superstar|trinoids|whisper|wobble|zarvox|bad news|good news|albert|fred|junior|ralph|grandma|grandpa|rocko|sandy|shelley|flo|eddy|reed/i,x=()=>{if(!o||f)return;const A=o.getVoices();if(A.length!==0){for(const M of g){const T=A.find(R=>R.name.includes(M)&&!b.test(R.name));if(T){f=T;return}}f=A.find(M=>M.lang.startsWith("en")&&!b.test(M.name))??A[0]??null}};x(),o&&o.addEventListener("voiceschanged",x);const w=new Map;n&&(async()=>{for(let A=0;A<=oo.length+4;A+=1)try{const M=await fetch(cI(A));if(!M.ok)continue;w.set(A,await n.decodeAudioData(await M.arrayBuffer()))}catch{}})();let E=null;const S=()=>{if(o==null||o.cancel(),E){E.onended=null;try{E.stop()}catch{}E=null}c=!1,u=0},_=A=>{const M=w.get(A);if(!M||!n||!t)return!1;const T=n.createBufferSource();T.buffer=M;const R=n.createGain();return R.gain.value=.9,T.connect(R).connect(t),c=!0,u=M.duration+.4,E=T,T.onended=()=>{E===T&&(E=null),c=!1,u=0},T.start(),r=Math.max(V0,M.duration+.6),!0},y=(A,M,T=!1)=>{if(T||(e.textContent=A,e.style.opacity="1",r=V0),_(M)||!o||w.has(M))return;x();const R=new SpeechSynthesisUtterance(A);f&&(R.voice=f),R.rate=.88,R.pitch=.96,R.volume=.95,c=!0,u=A.length*.085+.5,R.onend=()=>{c=!1,u=0},R.onerror=()=>{c=!1,u=0},o.speak(R),r=Math.max(V0,A.length*.075)};return{update(A,M,T,R,L,U){s+=A,u>0&&(u-=A,u<=0&&(c=!1)),h>0&&(h-=A,h<=0&&!c?(h=-1,y(KC,oo.length+1)):h<=0&&(h=.15)),r>0&&(r-=A,e.style.opacity=String(Math.min(1,r/aI)),r<=0&&(e.textContent=""));const z=iI(T,L,R);v=z==="approach"?v+A:0;const O=z==="approach"&&v<lI?d:z;if(L1.indexOf(O)>L1.indexOf(d)&&(d=O,s=999,p=U),a||c||d==="approach"&&T>sx)return;if(d==="push"){for(let H=0;H<m.length;H+=1){const G=m[H];if(!i.has(G)){if(L<(YC[H]??1))break;i.add(G),s=0,p=U,y(oo[G].text,G);return}}return}const B={act:d,elapsed:M,since:s,roamed:U-p,said:i},N=sI(B);N!==null&&(i.add(N),s=0,p=U,y(oo[N].text,N))},urge(){!a&&!c&&(s=999)},name(){l||c||(l=!0,y(JC,oo.length+3))},lastWords(){i.has(oo.length+4)||(i.add(oo.length+4),S(),y(ox,oo.length+4,!0))},pending(){return d!=="push"?!1:m.some(A=>!i.has(A))},finish(){a||(a=!0,s=0,S(),y(ZC,oo.length),h=jC)},dispose(){S(),o==null||o.removeEventListener("voiceschanged",x),e.remove()}}}const fi=3.4,$c=5.6,uI=1.15,hI=.62;function Wi(n,t,e){const o=Math.min(1,Math.max(0,(n-t)/(e-t)));return o*o*(3-2*o)}function fI(n,t=0){const e=Math.max(0,n),o=Wi(e,0,.32),i=1-Wi(e,fi*.45,fi),s=hI*i,r=Math.max(0,Math.sin(e*6.1+Math.sin(e*1.6)*.9-.6))**1.5,a=s*(.28+.72*r),l=.95*Wi(e,fi,fi+.45)+uI*Math.max(0,e-fi)*(.4+.6*Wi(e,fi,$c)),c=Math.max(0,(t-a)*o+l),u=(m,g,b)=>Math.sin(e*m)*.55+Math.sin(e*g)*.31+Math.sin(e*b)*.14,h=Wi(e,fi,$c+.6),f=u(9.1,5.7,13.3)*.09*i+.3*r*i+.62*h,d=u(7.7,4.3,11.9)*.07*i+.34*Wi(e,fi+.3,$c+1.2),p=u(6.1,3.7,10.1)*.1*i+.22*Wi(e,fi,$c+1.5),v=Wi(c-t,.02,.34);return{depth:c,pitch:f,roll:d,yaw:p,struggle:i,muffle:v}}const dI=7.5,pI=2.5,mI={phase:"calm",since:0};function gI(n,t,e){const o=n.since+e,i=s=>({phase:s,since:0});switch(n.phase){case"calm":return t.shattered?i("alarm"):{phase:"calm",since:o};case"alarm":return t.caught?i("lost"):o>=dI?i("escape"):{phase:"alarm",since:o};case"escape":return t.atSummit?i("ascending"):t.caught?i("lost"):{phase:"escape",since:o};case"ascending":return t.ascentComplete?i("ascended"):{phase:"ascending",since:o};case"ascended":return{phase:"ascended",since:o};case"lost":return o>=pI?i("calm"):{phase:"lost",since:o}}}function rx(n){return n==="alarm"||n==="escape"||n==="lost"}function N1(n){return n==="escape"}const vI={grade:0,alarm:0,lamps:0,music:!0},xI=.3,MI=.26,yI=.3,wI=3/GP,_I=2.2,SI=2.8;function bI(n){return n==="ascending"||n==="ascended"?{grade:0,alarm:0,lamps:0}:rx(n)?{grade:1,alarm:1,lamps:1}:{grade:0,alarm:0,lamps:0}}function TI(n,t,e){const o=bI(t),i=ko(n.grade,o.grade,wI,e),s=ko(n.alarm,o.alarm,_I,e),r=ko(n.lamps,o.lamps,SI,e);return{grade:i,alarm:s,lamps:r,music:!rx(t)}}function EI(n,t){return n.lamps*ax(t,MI)}function AI(n,t,e,o=1){return 1+(e*ax(t,yI*o)-1)*n.grade}function ax(n,t){return 1-t*(.5-.5*Math.cos(n*xI*Math.PI*2))}const RI=-1.5,PI=.1424,CI=.0028,II=12,U1=16,F1=3,O1=n=>1/(1+Math.exp(-n));function LI(n){return II*(O1((n-U1)/F1)-O1(-U1/F1))}function z1(n){const t=Math.max(0,n);return RI+PI*t+.5*CI*t*t+LI(t)}function DI(n,t){return n<=t}const W0=784,NI=554,UI=.42,B1=.012;function FI(n,t){const e=n.createGain();e.gain.value=0,e.connect(t);const o=n.createOscillator();o.type="square",o.frequency.value=W0;const i=n.createBiquadFilter();i.type="lowpass",i.frequency.value=2400,i.Q.value=.7;const s=n.createOscillator();s.type="square",s.frequency.value=W0*1.006;const r=n.createGain();r.gain.value=.4;const a=n.createGain();a.gain.value=.09,o.connect(i),s.connect(r).connect(i),i.connect(a).connect(e),o.start(),s.start();let l=!1,c=1,u=null,h=!0;const f=()=>{const d=n.currentTime;h=!h;const p=h?W0:NI;o.frequency.setTargetAtTime(p,d,B1),s.frequency.setTargetAtTime(p*1.006,d,B1),e.gain.cancelScheduledValues(d),e.gain.setTargetAtTime(c*.35,d,.006),e.gain.setTargetAtTime(c,d+.03,.05)};return{start(){l||(l=!0,f(),u=window.setInterval(f,UI*1e3))},stop(){l&&(l=!1,u!==null&&window.clearInterval(u),u=null,e.gain.cancelScheduledValues(n.currentTime),e.gain.setTargetAtTime(0,n.currentTime,.15))},setLevel(d){c=Math.max(0,Math.min(1,d)),l&&e.gain.setTargetAtTime(c,n.currentTime,.08)},dispose(){u!==null&&window.clearInterval(u),o.stop(),s.stop(),e.disconnect()}}}const OI=138,zI=60/OI,X0=zI/4,BI=.35,xd=[0,null,12,7,null,10,12,null,0,null,15,12,null,10,7,null],qc=[xd,[3,null,15,10,null,12,15,null,3,null,17,15,null,14,10,null],[0,null,12,null,null,10,null,null,0,null,15,null,null,10,null,null],[0,null,null,7,null,null,12,null,null,null,15,null,12,null,7,null]],k1=[0,0,-5,0,3,3,-2,-2,-4,3],$0=38;function kI(n,t){const e=n.createGain();e.gain.value=0,e.connect(t);const o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=700,o.Q.value=1.6,o.connect(e);let i=0,s=0,r=0,a=!1;const l=(u,h,f,d,p)=>{const v=n.createOscillator();v.type=p,v.frequency.value=nx(h);const m=n.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),u+.008),m.gain.exponentialRampToValueAtTime(1e-4,u+d),v.connect(m),m.connect(o),v.start(u),v.stop(u+d+.05)},c=(u,h,f)=>{const d=f?.06:.3,p=Math.floor(n.sampleRate*d),v=n.createBuffer(1,p,n.sampleRate),m=v.getChannelData(0);for(let w=0;w<p;w+=1)m[w]=(Math.random()*2-1)*(1-w/p)**(f?6:2.2);const g=n.createBufferSource();g.buffer=v;const b=n.createBiquadFilter();b.type=f?"highpass":"lowpass",b.frequency.value=f?5200:190,b.Q.value=.7;const x=n.createGain();x.gain.value=h,g.connect(b),b.connect(x),x.connect(e),g.start(u)};return{setDrive(u){i=Math.min(1,Math.max(0,u));const h=n.currentTime;!a&&i>0&&(a=!0,r=h+.06,s=0),e.gain.setTargetAtTime(.3+.36*i,h,.8),o.frequency.setTargetAtTime(620+2900*i*i,h,.9)},update(){if(!a)return;const u=n.currentTime+BI;let h=0;for(;r+s*X0<u&&h<64;){h+=1;const f=r+s*X0,d=s%xd.length;s+=1;const p=Math.floor(s/xd.length)-1,v=qc[(p%qc.length+qc.length)%qc.length][d];if(v!=null&&(l(f,$0+12+v,.09+.07*i,.34,"sawtooth"),i>.55&&l(f,$0+24+v,.035*i,.22,"triangle")),d%2===0&&i>.12){const m=k1[Math.floor(s/2)%k1.length];l(f,$0+m,.16+.12*i,.42,"square")}d%4===0&&c(f,.16+.14*i,!1),d%2===1&&i>.4&&c(f,.05*i,!0),i>.3&&p%5===4&&d===11&&c(f+X0*.5,.12+.1*i,!1)}},stop(){a=!1,e.gain.setTargetAtTime(0,n.currentTime,.5)},dispose(){e.disconnect()}}}const GI={gallery:"./music/gallery.mp3",ascension:"./music/ascension.mp3",darkness:"./music/darkness.mp3"},G1=["ascension","darkness"],HI={gallery:1.2,ascension:2.6,darkness:4.2},VI=2.2,WI={gallery:.38,ascension:1,darkness:1};function XI(n,t){const e=new m3,o=new Map,i=new Map;let s="none",r=!1,a=!1;const l=c=>{if(a||i.has(c))return;const u=o.get(c);if(!u)return;const h=n.createGain();h.gain.value=0,h.connect(t);const f=n.createBufferSource();f.buffer=u,f.loop=!1,f.connect(h),f.start(),i.set(c,{gain:h,source:f});const d=n.currentTime,p=HI[c];h.gain.cancelScheduledValues(d),h.gain.setValueAtTime(0,d);const v=96,m=new Float32Array(v);for(let g=0;g<v;g+=1)m[g]=WI[c]*(g/(v-1))**3;h.gain.setValueCurveAtTime(m,d,p)};for(const[c,u]of Object.entries(GI))e.load(u,h=>{o.set(c,h),s===c&&l(c)},void 0,()=>{});return{setRoom(c){if(!(a||r||c===s)){s=c,G1.includes(c)&&(r=!0),c!=="none"&&l(c);for(const[u,h]of i){if(u===c||G1.includes(u))continue;const f=n.currentTime,d=h.gain.gain.value;h.gain.gain.cancelScheduledValues(f),h.gain.gain.setValueAtTime(d,f),h.gain.gain.setTargetAtTime(0,f,VI/3)}}},playing:()=>i.has("gallery")&&s==="gallery",duration:c=>{var u;return((u=o.get(c))==null?void 0:u.duration)??null},dispose(){a=!0;for(const c of i.values()){try{c.source.stop()}catch{}c.source.disconnect(),c.gain.disconnect()}i.clear()}}}const $I="./models/statue.stl",H1=2,qI=.15,YI=38,Un={from:9.5,clear:20.5,chainsFrom:13,chainsTight:23,colourFrom:17,colourTo:26,shatter:27.5,gone:35.5},V1=.38,Md=n=>Math.min(1,Math.max(0,n)),br=(n,t,e)=>{const o=Md((n-t)/(e-t));return o*o*(3-2*o)},ZI=n=>{const t=Math.sin(n*12.9898)*43758.5453;return t-Math.floor(t)};function KI(n=96){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d");if(!e)return"";const o=e.createImageData(n,n);for(let i=0;i<n*n;i+=1){const s=Math.round(ZI(i+1)*255);o.data[i*4]=s,o.data[i*4+1]=s,o.data[i*4+2]=s,o.data[i*4+3]=255}return e.putImageData(o,0,0),t.toDataURL()}function W1(n,t,e,o,i){const s=new Et,r=.034,a=.0105,l=r*1.58,c=Math.max(2,Math.round((t-n)/l)),u=new dn(r,a,6,12),h=Math.cos(e),f=Math.sin(e);for(let d=0;d<c;d+=1){const p=n+d*l,v=new Ie,m=((p-n)/Math.max(.001,t-n))**2*.13;v.position.set(h*p,o-m,f*p),v.rotation.y=-e+Math.PI/2;const g=new lt(u,i);d%2&&(g.rotation.x=Math.PI/2),v.add(g),s.add(v)}return s}function X1(n,t){const e=new Et,o=.034,i=.0105,s=Math.max(14,Math.round(Math.PI*2*n/(o*1.58))),r=new dn(o,i,6,12);for(let a=0;a<s;a+=1){const l=a/s*Math.PI*2,c=new Ie;c.position.set(Math.cos(l)*n,0,Math.sin(l)*n),c.rotation.y=-l;const u=new lt(r,t);a%2&&(u.rotation.x=Math.PI/2),c.add(u),e.add(c)}return e}function jI(){const n=document.createElement("div");n.className="drowned-vision";const t=document.createElement("canvas");n.append(t);const e=document.createElement("div");e.className="drowned-vision-grain";const o=KI();o&&(e.style.backgroundImage=`url(${o})`),n.append(e);let i;try{i=new Ud({canvas:t,alpha:!0,antialias:!0})}catch{return null}i.setClearColor(0,0);const s=new Sl,r={value:.9},a={value:.9},l={value:0},c=(N,H=r)=>{var Q;const G=N.onBeforeCompile,$=(Q=N.customProgramCacheKey)==null?void 0:Q.bind(N);N.onBeforeCompile=(j,X)=>{G==null||G.call(N,j,X),j.uniforms.uGrain=H,j.uniforms.uRoll=l,j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uGrain;
          uniform float uRoll;
          float visionNoise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
          }`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
          {
            // Two samples at different scales: one fine and one coarse, so
            // it reads as emulsion rather than as television static.
            vec2 at = gl_FragCoord.xy;
            float fine = visionNoise(floor(at) + uRoll);
            float coarse = visionNoise(floor(at * 0.34) - uRoll * 0.7);
            float n = mix(fine, coarse, 0.42) - 0.5;
            // Multiplicative, so it darkens and lifts the surface rather
            // than laying a grey film over it.
            /**
             * 3.4, up from 2.3.
             *
             * With the floor at 0.22 the settled statue carried a grain
             * of about a quarter of a stop — arithmetically present and,
             * on a screen, not there. Reported as her not being grainy
             * any more, which was fair: an effect nobody can see is an
             * effect that has been removed. The floor is up as well, so
             * she now finishes the card visibly on film.
             */
            gl_FragColor.rgb *= 1.0 + n * uGrain * 3.4;
            // Tonal only. There was a line here that ate the alpha on
            // half the pixels to make the silhouette uncertain, and what
            // it actually did was punch holes straight through her — she
            // read as already shattered from the moment she appeared.
            // Grain darkens and lifts a surface; it does not perforate it.
          }`)},N.customProgramCacheKey=()=>`${$?$():""}+grain`,N.transparent=!0},u=new yn(34,1,.1,60),h=new f3(2759963,.6),f=new $r(16767156,0);f.position.set(.6,4.2,1.4);const d=new $r(8369919,0);d.position.set(-2.4,-.6,-2.2);const p=new Wo(16734754,0,12,2);p.position.set(1.4,-1.2,1),s.add(h,f,d,p);const v=new Et;s.add(v);const m={uBurst:{value:0},uCentre:{value:new P(0,0,0)},uEdge:{value:0},uEdgeTime:{value:0}},g=new wt({color:723208,roughness:.66,metalness:0,transparent:!0,opacity:1});g.onBeforeCompile=N=>{N.uniforms.uBurst=m.uBurst,N.uniforms.uCentre=m.uCentre,N.uniforms.uEdge=m.uEdge,N.uniforms.uEdgeTime=m.uEdgeTime,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aCentre;
        uniform float uBurst;
        uniform vec3 uCentre;
        varying float vFlung;
        varying float vEdgeUp;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec3 shardAxis = vec3(0.0, 1.0, 0.0);
        float shardTurn = 0.0;
        vec3 shardPush = vec3(0.0);
        vFlung = 0.0;
        if (uBurst > 0.0001) {
          float h1 = fract(sin(dot(aCentre, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
          float h2 = fract(sin(dot(aCentre, vec3(93.989, 11.135, 57.412))) * 24634.6345);
          float h3 = fract(sin(dot(aCentre, vec3(45.164, 23.117, 88.021))) * 19349.1234);
          shardAxis = normalize(vec3(h1, h2, h3) - 0.5 + 0.0011);
          shardTurn = uBurst * (1.3 + h1 * 4.4);
          vec3 away = aCentre - uCentre;
          float far = length(away) + 0.0001;
          // Outward, faster the further out it already was, plus a little
          // lift so the whole thing does not read as a flat ring.
          shardPush = (away / far) * uBurst * (0.5 + h2 * 1.25)
                    + vec3(0.0, uBurst * (h3 - 0.3) * 0.55, 0.0);
          vFlung = uBurst * (0.5 + h2);
          float c = cos(shardTurn);
          float s = sin(shardTurn);
          objectNormal = objectNormal * c
            + cross(shardAxis, objectNormal) * s
            + shardAxis * dot(shardAxis, objectNormal) * (1.0 - c);
        }`).replace("#include <begin_vertex>",`#include <begin_vertex>
        if (uBurst > 0.0001) {
          vec3 rel = position - aCentre;
          float c = cos(shardTurn);
          float s = sin(shardTurn);
          vec3 spun = rel * c + cross(shardAxis, rel) * s
            + shardAxis * dot(shardAxis, rel) * (1.0 - c);
          transformed = aCentre + spun + shardPush;
        }
        vEdgeUp = position.y;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uEdge;
        uniform float uEdgeTime;
        varying float vFlung;
        varying float vEdgeUp;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float edgeFacing = abs(dot(normalize(-vViewPosition), normalize(normal)));
          // Softly, and never quite nothing face on: a hard rim leaves
          // everything the camera looks straight down onto — the crown,
          // the shoulders — as black holes in a grey ghost.
          float edgeRim = 0.1 + 0.9 * pow(1.0 - edgeFacing, 1.5);
          float edgeDrift = 0.5 + 0.5 * sin(vEdgeUp * 3.1 - uEdgeTime * 0.55);
          vec3 edgeColour = mix(vec3(0.58, 0.36, 1.0), vec3(0.24, 0.78, 0.8), edgeDrift);
          totalEmissiveRadiance += edgeColour * edgeRim * uEdge;
        }`).replace("#include <opaque_fragment>",`
        #include <opaque_fragment>
        gl_FragColor.a *= clamp(1.0 - vFlung * 0.42, 0.0, 1.0);`)},g.customProgramCacheKey=()=>"vision-shatter-edge",c(g);const b=[0,1,2].map(()=>new wt({color:1316636,roughness:.34,metalness:.72,transparent:!0,opacity:0})),x={value:0},w={value:0};for(const N of b)N.emissive=new bt(16722452),N.onBeforeCompile=H=>{H.uniforms.uChainTime=x,H.uniforms.uChainHeat=w,H.vertexShader=H.vertexShader.replace("#include <common>",`#include <common>
          varying vec3 vChainAt;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vChainAt = (modelMatrix * vec4(transformed, 1.0)).xyz;`),H.fragmentShader=H.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uChainTime;
          uniform float uChainHeat;
          varying vec3 vChainAt;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          {
            float round_ = atan(vChainAt.z, vChainAt.x);
            float out_ = length(vChainAt.xz);
            float pulse = pow(0.5 + 0.5 * sin(round_ * 5.0 + out_ * 7.0 - uChainTime * 1.8), 4.0);
            totalEmissiveRadiance = emissive * (0.1 + 1.5 * pulse) * uChainHeat;
          }`)},N.customProgramCacheKey=()=>"vision-chain";for(const N of b)c(N,a);const E=.78,S=[{grow:1.055,of:.34},{grow:1.115,of:.16}],_=b.map(()=>S.map(()=>new Vs({color:new bt(.55,.07,.04),transparent:!0,opacity:0,depthWrite:!1,blending:Tn,side:on}))),y=[],A=[],M=[{y:-.6,r:.42,turn:.19},{y:-.04,r:.38,turn:-.26},{y:.56,r:.32,turn:.15}],T=2.6,R=[];M.forEach((N,H)=>{const G=X1(N.r,b[H]);G.position.y=N.y,G.visible=!1,v.add(G),y.push(G),S.forEach(($,Q)=>{const j=X1(N.r,_[H][Q]);j.position.y=N.y,j.visible=!1,v.add(j),R.push({group:j,of:G,grow:$.grow,ring:H})});for(let $=0;$<3;$+=1){const Q=$/3*Math.PI*2+H*.71,j=W1(N.r,T,Q,N.y,b[H]);j.visible=!1,v.add(j),A.push({group:j,ring:H}),S.forEach((X,at)=>{const rt=W1(N.r,T,Q,N.y,_[H][at]);rt.visible=!1,v.add(rt),R.push({group:rt,of:j,grow:X.grow,ring:H})})}});let L=null,U=!1;new $d().load($I,N=>{if(U)return;N.rotateX(-Math.PI/2);const H=N.index?N.toNonIndexed():N;H.computeVertexNormals(),H.computeBoundingBox();const G=H.boundingBox,$=G.max.y-G.min.y,Q=H1/($||1);H.translate(-(G.min.x+G.max.x)/2,-(G.min.y+G.max.y)/2,-(G.min.z+G.max.z)/2),H.scale(Q,Q,Q);const j=H.getAttribute("position"),X=new Float32Array(j.count*3),at=H1*qI;for(let rt=0;rt<j.count;rt+=3){let ft=0,et=0,q=0;for(let I=0;I<3;I+=1)ft+=j.getX(rt+I),et+=j.getY(rt+I),q+=j.getZ(rt+I);const ct=(Math.floor(ft/3/at)+.5)*at,vt=(Math.floor(et/3/at)+.5)*at,V=(Math.floor(q/3/at)+.5)*at;for(let I=0;I<3;I+=1)X[(rt+I)*3]=ct,X[(rt+I)*3+1]=vt,X[(rt+I)*3+2]=V}H.setAttribute("aCentre",new qt(X,3)),L=new lt(H,g),v.add(L)},void 0,()=>{});const z=()=>{const N=Math.max(2,window.innerWidth),H=Math.max(2,window.innerHeight);i.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.setSize(N,H,!1),u.aspect=N/H,u.updateProjectionMatrix(),t.style.width=`${N}px`,t.style.height=`${H}px`};z(),window.addEventListener("resize",z);let O=0,B=-1;return{element:n,update(N,H){if(U)return;const G=br(N,Un.from,Un.from+1.6);if(G<=0){n.style.opacity="0";return}const $=br(N,Un.from,Un.clear),Q=br(N,Un.colourFrom,Un.colourTo),j=br(N,Un.chainsFrom,Un.chainsTight),X=br(N,Un.shatter,Un.shatter+3.6),at=br(N,Un.gone-3,Un.gone);n.style.opacity=String(G*(1-at));const rt=Eo.degToRad(84-26*$);O+=H*(.075+.05*Q);const ft=4.6-.6*$;u.position.set(Math.cos(O)*Math.cos(rt)*ft,Math.sin(rt)*ft,Math.sin(O)*Math.cos(rt)*ft),u.lookAt(0,0,0),g.color.setRGB(.045+.8*Q,.038+.72*Q,.034+.62*Q),m.uEdge.value=1.2*Math.pow(1-Q,1.5),m.uEdgeTime.value=N,f.intensity=.18+3.1*$*(.4+.6*Q),d.intensity=2.8-1.1*$,p.intensity=2.2*Q,h.intensity=.22+.6*Q;for(let ct=0;ct<y.length;ct+=1){const vt=y[ct],V=M[ct],I=Md((j-ct*.13)/(1-ct*.13));vt.visible=I>.001,vt.scale.setScalar(1.7-.7*I),vt.rotation.y+=H*V.turn*(1.6-I);const D=b[ct];D.opacity=I*(1-X),_[ct].forEach((nt,Z)=>{nt.opacity=I*(1-X)*S[Z].of});const tt=Md((I-.25)/.75);for(const nt of A)nt.ring===ct&&(nt.group.visible=tt>.001,nt.group.scale.setScalar(1.7-.7*I),nt.group.rotation.y=vt.rotation.y);D.color.setRGB(.05+.08*Q,.045+.07*Q,.05+.08*Q),X>0&&vt.scale.setScalar(2.5-1.5*I+X*1.1)}m.uBurst.value=X*1.25,x.value=N,w.value=(.35+.65*Q)*(1-X),g.opacity=1-at,X>0&&B<0&&(B=N),r.value=.95-(.95-V1)*$,a.value=Math.max(E,r.value),l.value=Math.floor(N*24)%977,e.style.opacity="0";const et=Math.floor(N*14)%96;e.style.backgroundPosition=`${et}px ${et*7%96}px`;const q=(1-$*(1-V1*.9))*7;t.style.filter=`blur(${q.toFixed(2)}px) saturate(${(.55+.45*Q).toFixed(2)}) contrast(${(1.55-.3*$).toFixed(2)}) brightness(${(.72+.4*$).toFixed(2)})`;for(const ct of R)ct.group.visible=ct.of.visible,ct.group.visible&&(ct.group.position.copy(ct.of.position),ct.group.rotation.copy(ct.of.rotation),ct.group.scale.copy(ct.of.scale).multiplyScalar(ct.grow));i.render(s,u)},burst:()=>B>=0,dispose(){U=!0,window.removeEventListener("resize",z),L==null||L.geometry.dispose(),g.dispose();for(const N of b)N.dispose();for(const N of[...y,...A.map(H=>H.group)])N.traverse(H=>{H instanceof lt&&H.geometry.dispose()});i.dispose(),n.remove()}}}const JI=`
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,QI=`
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform float uIn;
uniform float uGone;
uniform float uBurst;
uniform float uRed;
uniform float uSurface;
uniform float uSink;
uniform float uPeriod[6];
uniform float uOffset[6];
uniform float uDecay[6];
uniform float uTide[6];
uniform vec2 uAt[6];
uniform vec3 uColour[6];

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

// Four octaves, each turned against the last so no grain lines up.
float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i += 1) {
    sum += amp * noise(p);
    p = turn * p * 2.02 + vec2(1.7, 9.2);
    amp *= 0.5;
  }
  return sum;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float t = uTime;
  // Going down: for the first seconds the whole field streams upward
  // past the eye, slowing as the body stops falling.
  uv.y -= uSink;

  // The current: the field is read at a point that is itself carried by
  // another field, twice over.
  vec2 q = vec2(fbm(uv * 1.3 + vec2(0.0, t * 0.035)),
                fbm(uv * 1.3 + vec2(5.2, 1.3) - t * 0.03));
  vec2 r = vec2(fbm(uv * 1.7 + 3.2 * q + vec2(1.7, 9.2) + t * 0.045),
                fbm(uv * 1.7 + 3.2 * q + vec2(8.3, 2.8) - t * 0.038));
  float ink = fbm(uv * 2.1 + 3.6 * r);

  // Folds of light where the flow doubles back on itself.
  float fold = 1.0 - abs(2.0 * fbm(uv * 3.4 + 4.0 * r + t * 0.02) - 1.0);
  float veins = pow(fold, 7.0);

  vec3 bed = mix(vec3(0.20, 0.02, 0.03), vec3(0.15, 0.04, 0.28), smoothstep(0.25, 0.8, q.x));
  bed = mix(bed, vec3(0.02, 0.12, 0.14), smoothstep(0.55, 0.95, r.y) * 0.55);
  // Deep where the ink is thick, and the folds lit in the bed's own hue
  // carried warmer, so the light is of the water rather than laid on it.
  vec3 colour = bed * (0.1 + 1.6 * ink * ink * ink)
              + mix(vec3(0.95, 0.38, 0.16), vec3(0.62, 0.34, 1.0), q.y) * veins * 0.34;

  // The flashes, seen through the water: bent by the current, shaped by
  // the ink, each sending a ring out through the field.
  vec2 seen = uv + (r - 0.5) * 0.38;
  for (int i = 0; i < 6; i += 1) {
    float since = mod(t - uOffset[i], uPeriod[i]);
    float alive = step(uOffset[i], t);
    float sharp = (1.0 - exp(-since * 22.0)) * exp(-since * uDecay[i]);
    float tide = pow(sin(3.14159 * since / uPeriod[i]), 2.0);
    float swell = alive * mix(sharp, tide, uTide[i]);
    vec2 at = uAt[i] + 0.1 * vec2(sin(t * 0.11 + float(i) * 2.1), cos(t * 0.09 + float(i) * 1.3));
    float d = length(seen - at);
    float body = exp(-d * d * 5.0) * (0.12 + 1.9 * ink * ink * ink + veins * 1.5);
    float ring = exp(-pow((d - since * 0.5) * 6.5, 2.0)) * exp(-since * 1.4)
               * alive * (1.0 - uTide[i]) * (0.25 + veins * 2.4);
    colour += uColour[i] * (swell * body + ring);
  }

  // Her breaking: one ring of white through the whole field.
  if (uBurst > 0.0) {
    float d = length(seen);
    float ring = exp(-pow((d - uBurst * 0.85) * 7.0, 2.0)) * exp(-uBurst * 1.3);
    colour += vec3(1.0, 0.94, 0.88) * (ring * (0.7 + veins * 2.2)
            + exp(-uBurst * 3.2) * 0.9 * exp(-d * d * 2.4));
  }

  colour *= 1.0 - 0.5 * dot(uv, uv);
  colour *= uIn;

  /**
   * And above it all, at first, the surface.
   *
   * The room's emergency lamps are still flashing on the far side of the
   * water, and from underneath they are the only light there is: red,
   * from overhead, broken up by the same folds as everything else, each
   * flash a little further away than the last. The surface itself is a
   * bright wavering line going up out of the frame as the body goes
   * down. Not held back by the card's own arrival — this is what the card
   * arrives *from*.
   */
  vec2 screen = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float overhead = smoothstep(-0.6, 0.55, screen.y + (r.x - 0.5) * 0.3);
  float surfaceAt = 0.2 + (1.0 - uSurface) * 0.55;
  float ripple = (fbm(vec2(screen.x * 3.0, t * 0.8)) - 0.5) * 0.08;
  float line = exp(-pow((screen.y - surfaceAt - ripple) * 22.0, 2.0)) * uSurface;
  vec3 red = vec3(1.0, 0.1, 0.05);
  colour += red * uRed * (overhead * overhead * (0.25 + veins * 2.2 + ink * 0.6)
          + exp(-dot(screen - vec2(0.0, surfaceAt), screen - vec2(0.0, surfaceAt)) * 3.0) * 0.5);
  colour += mix(red, vec3(1.0, 0.55, 0.45), 0.4) * line * (0.35 + uRed * 1.4);
  colour *= 1.0 - uGone;
  colour = colour / (1.0 + colour * 0.9);
  gl_FragColor = vec4(colour, 1.0);
}
`,Tr=[{colour:16730664,period:3.7,offset:.4,decay:2.4,tide:!1,at:[-.05,-.06]},{colour:16750648,period:5.3,offset:1.9,decay:1.3,tide:!1,at:[.22,.1]},{colour:11032319,period:8.9,offset:2.6,decay:.6,tide:!0,at:[-.4,.14]},{colour:15613100,period:6.7,offset:4.3,decay:1.2,tide:!1,at:[.42,-.26]},{colour:2674888,period:11.3,offset:.9,decay:.5,tide:!0,at:[.3,.36]},{colour:16765024,period:9.1,offset:5.7,decay:2,tide:!1,at:[-.18,-.4]}],tL=[[.3,1.9],[1.05,1.5],[1.85,1.1],[2.75,.7],[3.8,.4]];function eL(n){let t=0;for(const[e,o]of tL){const i=n-e;i<0||(t+=o*(1-Math.exp(-i*30))*Math.exp(-i*2.6))}return t}function nL(){const n=document.createElement("canvas");n.className="drowned-undertow";let t;try{t=new Ud({canvas:n,antialias:!1,alpha:!1})}catch{return null}const e=.5,o=new st,i=()=>{t.setPixelRatio(e),t.setSize(window.innerWidth,window.innerHeight,!1),t.getDrawingBufferSize(o)};i(),window.addEventListener("resize",i);const s=new Se({vertexShader:JI,fragmentShader:QI,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uResolution:{value:o},uIn:{value:0},uGone:{value:0},uBurst:{value:0},uRed:{value:0},uSurface:{value:0},uSink:{value:0},uPeriod:{value:Tr.map(c=>c.period)},uOffset:{value:Tr.map(c=>c.offset)},uDecay:{value:Tr.map(c=>c.decay)},uTide:{value:Tr.map(c=>c.tide?1:0)},uAt:{value:Tr.map(c=>new st(...c.at))},uColour:{value:Tr.map(c=>new bt(c.colour))}}}),r=new Sl,a=new lt(new le(2,2),s);a.frustumCulled=!1,r.add(a);const l=new th(-1,1,1,-1,0,1);return{element:n,update(c,u,h,f){s.uniforms.uTime.value=c,s.uniforms.uRed.value=eL(c),s.uniforms.uSurface.value=1-Math.min(1,c/3.2),s.uniforms.uSink.value=.55*(1-Math.exp(-c/1.4)),s.uniforms.uIn.value=u,s.uniforms.uGone.value=h,s.uniforms.uBurst.value=f,t.render(r,l)},dispose(){window.removeEventListener("resize",i),s.dispose(),a.geometry.dispose(),t.dispose()}}}const oL="You are the product of the physical, your soul is chained",iL="The darkness took you.";function sL(n){const t=document.createElement("div");t.className="drowned";const e=nL();e&&t.append(e.element);for(const p of["grain","vignette"]){const v=document.createElement("div");v.className=`drowned-${p}`,t.append(v)}const o=jI();o&&t.append(o.element);const i=document.createElement("div");i.className="drowned-type";const s=document.createElement("p");s.className="drowned-took",s.textContent=iL,i.append(s);const r=document.createElement("p");r.className="drowned-line";const a=oL.split(" ");a.forEach((p,v)=>{const m=document.createElement("span");m.className=v===a.length-1?"word last":"word",m.textContent=p,m.style.setProperty("--i",String(v));const g=document.createElement("span");g.className="ink",g.textContent=p,g.setAttribute("aria-hidden","true"),m.append(g),r.append(m),v<a.length-1&&r.append(document.createTextNode(" "))}),i.append(r),t.append(i);const l=document.createElement("p");l.className="drowned-skip",l.textContent="Click to begin again",t.append(l),document.body.append(t),requestAnimationFrame(()=>{t.classList.add("lit")});const c=9;let u=!1,h=0;const f=p=>{u||h<c||p instanceof KeyboardEvent&&p.repeat||(u=!0,n())};t.addEventListener("pointerdown",f),window.addEventListener("keydown",f);let d=!1;return{element:t,update(p,v){h=p,l.style.opacity=p>=c?"":"0",o==null||o.update(p,v),!d&&p>=Un.shatter&&(d=!0,t.classList.add("bursting"),window.setTimeout(()=>t.classList.remove("bursting"),1400));const m=Math.min(1,Math.max(0,(p-Un.shatter-.9)/3.2));m>0&&t.style.setProperty("--gone",String(m)),e==null||e.update(p,Math.min(1,p/2.4),m,Math.max(0,p-Un.shatter))},close(){t.classList.add("closing")},dispose(){window.removeEventListener("keydown",f),o==null||o.dispose(),e==null||e.dispose(),t.remove()}}}const rL=7.8,mi=6.4;function to(n){const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)}function aL(n,t){const e=Math.max(0,n),o=.75;return o+(t-o)*Math.exp(-e/.7)+(3.2-o)*to((e-(mi-2.3))/2.3)}function $1(n,t){const e=Math.max(0,Math.min(mi,n)),o=240,i=e/o;let s=0;for(let r=0;r<o;r+=1)s+=aL((r+.5)*i,t)*i;return s}function Yc(n){const t=Math.max(0,n),e=to(t/2.1),o=Math.sin(t*.85)*.035*to(t/1.2)*(1-to((t-mi+1)/1.5)),i=70+14*to(t/(mi*.7))-10*to((t-mi+1.2)/1.6),s=1-.74*to(t/.7),r=to((t-.25)/3.2),a=to((t-.1)/1.1)*(1-to((t-mi)/1)),l=to((t-.4)/5.4),c=t<.12?t/.12:Math.exp(-(t-.12)/1.3),u=1+1.8*to((t-1.5)/(mi-1.5)),h=to((t-(mi-1))/2);return{look:e,roll:o,fov:i,time:s,unfold:r,feathers:a,glory:l,gilt:c,radiance:u,white:h,done:t>=rL}}const q1=1.8,lL=3.2,q0=new bt(525322),Y1=new bt,Z1=1.4,cL=12.4,uL=15,hL=.85,fL=1.95;async function dL(n,t){const e=x3(n),o=oP();e.scene.add(o.group);const i=WR(e.scene),s=new URLSearchParams(window.location.search).has("lite"),r=s?null:QP(e.renderer,e.scene,e.camera,i.sunDirection.clone().negate(),new bt(16756848));let a=s;s?e.scene.background=new bt(2764605):rC(e.renderer,e.scene).catch(()=>{e.scene.background=new bt(2764605)}).finally(()=>{a=!0});const l=uP(n),c=_P(e.camera,l,o.bounds,o.obstacles,(W,xt,yt)=>o.helixAt(W,xt,yt)),u=2.2;e.renderer.info.autoReset=!1,e.renderer.shadowMap.autoUpdate=!1,e.renderer.shadowMap.needsUpdate=!0;let h=null,f=null,d=null,p=null;const v=s?null:oC(e.renderer,e.scene);let m=!1,g=!1;const b=document.createElement("div");b.className="veil",document.body.append(b);let x=s;s&&b.remove();const w={shattered:!1,atSummit:!1,caught:!1,ascentComplete:!1};let E=mI,S=vI,_=0,y=0,A=0,M=0,T=!1,R=null,L=!1,U=null,z=null,O=!1,B=0,N=null,H=null,G=-1;const $=3.3;let Q=0,j=-1,X=0,at=null,rt=0,ft=D1();o.waitForVoice(()=>ft.pending());let et=1,q=1;const ct=cC();e.scene.add(ct.mesh);let vt=null;o.onTeeter(()=>{et=Math.min(et,.42),c.shake(.28)}),o.onShatter(()=>{M=1,et=.1,c.shake(1),ft.finish()});let V=null,I=null,D=null,tt=0,nt=0,Z=0,pt=0,Y=null,F=null;const C={x:0,z:0,feet:0};let K=0;const ut=TP(W=>{et=Math.min(1,et+W/1.35);const xt=W*et*q;tt+=xt,nt+=W,K+=1,e.renderer.info.reset(),E.phase==="alarm"||E.phase==="escape"||E.phase==="lost"?A+=xt:A=0;const yt=uL*Math.pow(Math.min(1,Math.max(0,(A-Z1)/cL)),.85),St=z1(_),Ft=E.phase==="ascending"||E.phase==="ascended";let _t=0;if(Ft){B+=xt;const kt=G0(B);if(!O){o.restoreRoom(),O=!0,F==null||F.remove(),F=null,Y=null,r==null||r.setGlory(0),o.setRapture(1,0,0,0),o.flareThreshold(0),N=document.createElement("div"),N.className="veil contact",document.body.append(N);const ve=N;window.setTimeout(()=>{ve.remove(),N===ve&&(N=null)},2600)}o.reassemble(kt.mending),o.soul(kt.soul,tt),o.kintsugi(kt.seams),o.mortal(kt.grey);const Ke=P1.z-On.z-kt.approach;if(e.camera.position.set(On.x-Math.sin(kt.orbit)*Ke,P1.y+kt.lift,On.z+Math.cos(kt.orbit)*Ke),e.camera.fov!==kt.fov&&(e.camera.fov=kt.fov,e.camera.updateProjectionMatrix()),e.camera.lookAt(H0.x,H0.y+kt.focus,H0.z),e.camera.rotation.z=0,r==null||r.setGrade(1-kt.daylight),r==null||r.setDim(1),r==null||r.setAo(0),r==null||r.setExposure(1+.6*kt.daylight),o.dimTheGallery(!1),kt.words>0&&ft.lastWords(),kt.words>0&&!z&&(z=document.createElement("div"),z.className="last-words",document.body.append(z)),z){const ve=kt.release>0;if(z.dataset.saying!==(ve?"release":"words")){z.dataset.saying=ve?"release":"words",z.textContent="";const xe=(ve?HC:ox).split(" ");xe.forEach((Bn,En)=>{const cn=document.createElement("span");cn.textContent=Bn,cn.style.setProperty("--i",String(En)),z.append(cn),En<xe.length-1&&z.append(document.createTextNode(" "))})}z.classList.toggle("over-white",ve)}if(z&&(z.style.opacity=String(kt.release>0?kt.release:kt.words*(1-kt.white))),kt.white>0&&!U&&(U=document.createElement("div"),U.className="veil ascended",document.body.append(U)),U){U.style.opacity=String(kt.white);const ve=new P(On.x,Ot.levels.ceiling+1.1,On.z).project(e.camera);ve.z<1&&(U.style.setProperty("--fx",`${(ve.x*.5+.5)*100}%`),U.style.setProperty("--fy",`${(.5-ve.y*.5)*100}%`)),U.style.setProperty("--flaring",String(kt.flaring)),U.classList.toggle("released",kt.release>0)}kt.done&&E.phase==="ascending"&&(L=!0)}else if(E.phase==="lost"){H||(H={x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,yaw:c.heading(),pitch:e.camera.rotation.x});const kt=fI(E.since,Math.max(0,H.y-St));h==null||h.setSubmerged(kt.muffle),Q=kt.muffle,e.camera.position.set(H.x,H.y-kt.depth,H.z);const Ke=Math.min(1,E.since/1),ve=H.pitch*(1-Ke*Ke);e.camera.rotation.set(ve+kt.pitch*Ke,H.yaw+kt.yaw,kt.roll,"YXZ")}else if(Y){Y.seconds+=W;const kt=Yc(Y.seconds),Ke=Math.min(1,$1(Y.seconds,Y.arriving)/Y.whole),ve=Y.path.getPointAt(Ke);e.camera.position.copy(ve);const xe=new P(eo.x-ve.x,eo.y+.35-ve.y,eo.z-ve.z);xe.length()>1.2&&(Y.facing={yaw:Math.atan2(-xe.x,-xe.z),pitch:Math.atan2(xe.y,Math.hypot(xe.x,xe.z))});let Bn=Y.facing.yaw-Y.yaw;if(Bn=Math.atan2(Math.sin(Bn),Math.cos(Bn)),e.camera.rotation.set(Y.pitch+(Y.facing.pitch-Y.pitch)*kt.look,Y.yaw+Bn*kt.look,kt.roll,"YXZ"),Math.abs(e.camera.fov-kt.fov)>.01&&(e.camera.fov=kt.fov,e.camera.updateProjectionMatrix()),o.setRapture(kt.radiance,kt.unfold,kt.feathers,Y.seconds,e.camera.position),o.flareThreshold(kt.gilt),r==null||r.setGlory(kt.glory),kt.white>0&&!F&&(F=document.createElement("div"),F.className="veil rapture",document.body.append(F)),F){F.style.opacity=String(kt.white);const En=new P(eo.x,eo.y,eo.z).project(e.camera);En.z<1&&(F.style.setProperty("--fx",`${(En.x*.5+.5)*100}%`),F.style.setProperty("--fy",`${(.5-En.y*.5)*100}%`))}}else c.update(xt);Ft||o.update(tt,xt,{...c.position(),feet:c.feet(),speed:c.speed()}),M>0&&(M=Math.max(0,M-xt/HP)),r==null||r.setBlackout(Ft?0:M);const At=c.position();if(E.phase==="calm"?_=0:N1(E.phase)&&(_+=xt),o.setThreat(St),o.setSeep(yt,tt),c.bounces()!==y){y=c.bounces();const kt=c.position();o.pressBale(kt.x,kt.z,1)}E.phase==="alarm"&&E.since>Z1+QC&&ft.name();const Bt=lu()[lu().length-1],Xt=!Y&&E.phase==="escape"&&!c.airborne()&&Math.abs(c.feet()-Bt.top)<.05&&Math.abs(At.x-Bt.x)<=Bt.halfX+.15&&Math.abs(At.z-Bt.z)<=Bt.halfZ+.15,Ut=Xt?1-(At.x-(Bt.x-Bt.halfX))/(Bt.halfX*2):0,Kt=Xt?.25+.55*Math.min(1,Math.max(0,Ut)):0;pt+=(Kt-pt)*Math.min(1,W*3),Z+=W*xA(pt),o.setBeaconNearness(Y?0:pt,0,Z);const Wt=Zd();if(!Y&&Wt&&E.phase==="escape"&&c.airborne()&&C.x>Wt.x&&At.x<=Wt.x&&Math.abs(At.z-Wt.z)<Wt.half&&c.feet()>Wt.sill-.6&&c.feet()<Wt.lintel){const kt=Math.max(1e-4,xt),Ke=new P(At.x-C.x,c.feet()-C.feet,At.z-C.z).divideScalar(kt),ve=e.camera.position.clone(),xe=new P(eo.x,eo.y,eo.z),Bn=xe.clone().sub(ve).setY(0).normalize(),En=ve.distanceTo(xe),cn=new zd(ve,ve.clone().addScaledVector(Ke.clone().normalize(),En*.32),xe.clone().addScaledVector(Bn,-En*.3).add(new P(0,-1.1,0)),xe);cn.arcLengthDivisions=240;const fs=Math.max(2,Ke.length());Y={seconds:0,path:cn,arriving:fs,whole:$1(mi,fs),yaw:e.camera.rotation.y,pitch:e.camera.rotation.x,facing:{yaw:e.camera.rotation.y,pitch:e.camera.rotation.x}}}C.x=At.x,C.z=At.z,C.feet=c.feet();const de=Y?Yc(Y.seconds).time:1;q+=(de-q)*Math.min(1,W*(de<q?12:3.5));const J=Y!==null&&Yc(Y.seconds).done,Pt=Y?Yc(Y.seconds).glory:0,gt=G>=0;gt?E={phase:"lost",since:E.since+xt}:E=gI(E,{...w,shattered:o.shattered(),atSummit:J,ascentComplete:L,caught:N1(E.phase)&&!Y&&DI(c.feet(),St)},xt);const Mt=c.position();Math.hypot(Mt.x-On.x,Mt.z-On.z)<1.15&&c.feet()>.82&&!c.airborne()&&(T=!0);const Ct=o.leaning();Ct>0&&c.shake(XT*(.35+Ct)),gt||ft.update(xt,tt,Math.hypot(Mt.x-On.x,Mt.z-On.z),T,Ct,c.distanceWalked()),S=TI(S,E.phase,xt);const oe=(e.camera.position.y-Pe)/(ss-Pe),Ce=Math.min(1,Math.max(0,(e.camera.position.y-(_o-2))/(_i+2-(_o-2)))),pn=1-.72*Ce*Ce*(3-2*Ce);Ft||r==null||r.setGrade(S.grade*pn*(1-Pt)),R===null&&E.phase==="escape"&&c.feet()>6&&(R=0),R!==null&&!Ft&&(R+=xt,o.setDeparture(R),o.dimTheGallery(R>2.45)),o.followClimber(e.camera.position.y);const se=(e.camera.position.y-Pe*.45)/(Pe*.55),mn=1-Math.min(1,Math.max(0,se)),Ro=S.lamps+(EI(S,tt)-S.lamps)*mn;o.setEmergency(Ft?1-G0(B).daylight:Ro*(1-Pt)),Ft||(r==null||r.setDim(1-(1-AI(S,tt,Q2,mn))*pn),r==null||r.setAo(tx));const $s=Ft?1-G0(B).daylight:S.grade;i.setDaylight(1-$s),i.setLeaving(_t),ct.setPresence($s),ct.update(tt);const fa=$s>.35;if(fa&&e.scene.background!==null?(vt=e.scene.background,e.scene.background=null):!fa&&vt&&e.scene.background===null&&(e.scene.background=vt),E.phase!=="calm"&&o.openTheWay(),E.phase==="lost"&&G<0&&(G=performance.now(),document.exitPointerLock(),ft.dispose()),G>=0&&j<0&&E.since>=$){const kt=(D==null?void 0:D.duration("darkness"))??null;X=Math.max(YI,(kt??0)+1.5),j=performance.now(),at=sL(()=>{X=Math.min(X,rt+q1),at==null||at.close()})}if(j>=0){const kt=rt;if(rt=(performance.now()-j)/1e3,at==null||at.update(rt,Math.max(0,rt-kt)),rt>=X-q1&&(at==null||at.close()),rt>=X){ut.stop(),window.location.reload();return}}const ni=e.camera.position.y>Pe-1.5&&!Ft;D==null||D.setRoom(E.phase==="lost"?"darkness":Ft||Y?"ascension":S.music?"gallery":"none");const hs=!(D!=null&&D.playing());if(!hs&&(f||d)&&(f==null||f.dispose(),f=null,d==null||d.dispose(),d=null),gt?(V==null||V.stop(),I==null||I.stop()):S.music?(hs&&(f==null||f.update(tt)),hs&&(d==null||d.update(tt)),V==null||V.stop(),I==null||I.stop()):Y?(V==null||V.stop(),I==null||I.stop()):ni?(V==null||V.stop(),I==null||I.setDrive(.12+.88*Math.min(1,Math.max(0,oe))),I==null||I.update()):(I==null||I.stop(),V==null||V.start(),V==null||V.setLevel(S.alarm)),p==null||p.update(c.distanceWalked(),c.speed(),c.airborne()),tt<u||!a?e.renderer.shadowMap.needsUpdate=!0:v&&!m?(m=!0,v.capture(),i.setEnvironmentAlbedo(nC)):!g&&E.phase==="calm"&&(g=o.warmUp(e.renderer,e.scene,e.camera)),e.scene.fog instanceof nh){const kt=Ft?0:Math.min(1,Math.max(0,(St-e.camera.position.y)/hL)),Ke=E.phase==="lost"?Q:0,ve=Math.max(kt,Ke),xe=Ft?{density:0,colour:[0,0,0]}:$5(e.camera.position.y),Bn=fL*ve*ve;e.scene.fog.density=Math.max(Bn,xe.density);const En=xe.density>0?Math.min(1,Bn/Math.max(xe.density,1e-6)):1;e.scene.fog.color.setRGB(xe.colour[0]+(q0.r-xe.colour[0])*En,xe.colour[1]+(q0.g-xe.colour[1])*En,xe.colour[2]+(q0.b-xe.colour[2])*En);const cn=Ft||E.phase==="lost"?null:q5(e.camera.position.y);Y1.setRGB(...(cn==null?void 0:cn.colour)??[0,0,0]),r==null||r.setMist(((cn==null?void 0:cn.density)??0)*(1-Pt),(cn==null?void 0:cn.falloff)??8,Y1);const fs=Ft?0:Math.max(Math.min(1,Math.max(0,(St-e.camera.position.y)/.55)),Ke);fs>0&&(M=Math.max(M,fs))}rt>lL||(o.reflectFlood(e.renderer,e.scene,e.camera),r?r.render(tt):e.render()),e.adapt(W)&&(r==null||r.resize(window.innerWidth,window.innerHeight)),!x&&a&&(m||!v)&&(x=!0,b.style.opacity="0",window.setTimeout(()=>b.remove(),1200))}),mt=()=>{e.resize(window.innerWidth,window.innerHeight),r==null||r.resize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",mt),mt(),n.addEventListener("webglcontextlost",W=>{W.preventDefault(),ut.stop(),f==null||f.dispose(),d==null||d.dispose(),p==null||p.dispose(),V==null||V.dispose(),ft.dispose(),D==null||D.dispose(),h==null||h.dispose(),t.textContent="The graphics context was lost. Reload the page to return to the gallery."}),n.addEventListener("click",()=>{l.isLocked()||l.requestLock()}),Object.defineProperty(window,"__gallery",{value:{fps:()=>ut.fps(),position:()=>c.position(),feet:()=>c.feet(),phase:()=>E.phase,since:()=>E.since,threat:()=>z1(_),timeScale:()=>et,approach:()=>q,project:(W,xt,yt)=>{e.camera.updateMatrixWorld();const St=new P(W,xt,yt).project(e.camera);return{x:St.x,y:St.y,z:St.z}},eye:()=>({x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,pitch:e.camera.rotation.x,yaw:e.camera.rotation.y}),ready:()=>a,warmed:()=>g,pixelRatio:()=>e.pixelRatio(),exposure:()=>e.renderer.toneMappingExposure,beacon:()=>({...eo}),frames:()=>K,scene:()=>e.scene,renderer:()=>e.renderer,post:()=>r,calls:()=>e.renderer.info.render.calls,triangles:()=>e.renderer.info.render.triangles,airborne:()=>c.airborne(),lastLanding:()=>c.lastLanding(),route:()=>lu(),leaves:()=>o.leaves().map(W=>({x:(W.minX+W.maxX)/2,z:(W.minZ+W.maxZ)/2,half:(W.maxX-W.minX)/2,top:W.top})),helix:(W,xt,yt)=>o.helixAt(W,yt,xt),obstacles:()=>o.obstacles.map(W=>({minX:W.minX,maxX:W.maxX,minZ:W.minZ,maxZ:W.maxZ,top:W.top,bottom:W.bottom??null})),bounceAt:(W,xt,yt)=>J2(W,yt,xt,o.obstacles,0),floorOfHelix:(W,xt,yt)=>{const St=o.helixAt(W,yt,xt);return St?vd(W,yt,xt,St,0):null},depart:()=>{R===null&&(R=0)},look:(W,xt)=>c.look(W,xt),moveTo:(W,xt)=>c.moveTo(W,xt),lift:W=>c.lift(W),push:()=>o.push(),talking:()=>ft.pending(),stairAgrees:()=>{if(!o.stairRisen())return null;const W=o.stairHelix();if(!W)return null;const xt=[];if(o.group.traverse(Kt=>{Kt instanceof Go&&Kt.geometry.type==="ExtrudeGeometry"&&xt.push(Kt)}),xt.length===0)return null;const yt=new g3,St=new P(0,-1,0),Ft=new P,_t=(W.inner+W.outer)/2,At=.78,Bt=Math.PI*2/W.turn;let Xt=0,Ut=0;for(let Kt=0;Kt<64;Kt+=1){const Wt=W.startAngle+Kt/64*Math.PI*4+.13;Ft.set(W.cx+Math.cos(Wt)*_t,40,W.cz+Math.sin(Wt)*_t);const J=((Math.atan2(Ft.z-W.cz,Ft.x-W.cx)-W.startAngle)/W.turn%Bt+Bt)%Bt,Pt=J+Math.floor((W.treads-J)/Bt)*Bt;if(Pt-Math.floor(Pt)>At)continue;const gt=vd(Ft.x,Ft.z,40,W,0);yt.set(Ft,St);const Mt=yt.intersectObjects(xt,!1)[0];if(gt===null||!Mt)return 1/0;Ut+=1,Xt=Math.max(Xt,Math.abs(gt-Mt.point.y))}return Ut<16?1/0:Xt}},configurable:!0}),await vC(document.body,{renderer:e.renderer,veil:b}),l.requestLock();try{const W=wC();if(W){h=W,f=RC(W.context,W.bus),d=BC(W.context,W.bus),p=PC(W.context,W.bus);const xt=GC(W.context,W.bus);o.onShatter(()=>xt.shatter()),V=FI(W.context,W.bus),I=kI(W.context,W.bus),D=XI(W.context,W.music),ft.dispose(),ft=D1(W.context,W.bus),o.waitForVoice(()=>ft.pending())}}catch(W){console.warn("gallery: audio unavailable",W)}ut.start()}const lx=document.getElementById("view"),mu=document.getElementById("ui");if(!(lx instanceof HTMLCanvasElement)||!(mu instanceof HTMLElement))throw new Error("Expected a #view canvas and a #ui container in index.html");document.createElement("canvas").getContext("webgl2")?dL(lx,mu).catch(n=>{mu.textContent="The gallery failed to start. Reload the page to try again.",console.error(n)}):mu.textContent="This gallery needs WebGL2, which this browser does not provide.";
