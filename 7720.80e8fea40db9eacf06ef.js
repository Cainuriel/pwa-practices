(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[7720],{4021:(e,n,t)=>{"use strict";t.d(n,{oK:()=>i,GW:()=>o,dk:()=>r});var i=(()=>(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(i||(i={})),i))(),o=(()=>(function(e){e.Rear="REAR",e.Front="FRONT"}(o||(o={})),o))(),r=(()=>(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(r||(r={})),r))()},8384:(e,n,t)=>{"use strict";t.d(n,{xz:()=>o,Uw:()=>a,fo:()=>s}),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var i=(()=>(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(i||(i={})),i))();class o extends Error{constructor(e,n){super(e),this.message=e,this.code=n}}const r=(e=>e.Capacitor=(e=>{var n,t,r,s,a;const d=e.CapacitorCustomPlatform||null,l=e.Capacitor||{},c=l.Plugins=l.Plugins||{},u=e.CapacitorPlatforms,g=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.getPlatform)||(()=>null!==d?d.name:(e=>{var n,t;return(null==e?void 0:e.androidBridge)?"android":(null===(t=null===(n=null==e?void 0:e.webkit)||void 0===n?void 0:n.messageHandlers)||void 0===t?void 0:t.bridge)?"ios":"web"})(e)),p=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==g()),m=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||(e=>{const n=h.get(e);return!!(null==n?void 0:n.platforms.has(g()))||!!v(e)}),v=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(e=>{var n;return null===(n=l.PluginHeaders)||void 0===n?void 0:n.find(n=>n.name===e)}),h=new Map,f=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((e,n={})=>{const t=h.get(e);if(t)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),t.proxy;const r=g(),s=v(e);let a;const u=t=>{let c;const u=(...u)=>{const g=(async()=>(!a&&r in n?a=a="function"==typeof n[r]?await n[r]():n[r]:null!==d&&!a&&"web"in n&&(a=a="function"==typeof n.web?await n.web():n.web),a))().then(n=>{const a=((n,t)=>{var a,d;if(!s){if(n)return null===(d=n[t])||void 0===d?void 0:d.bind(n);throw new o(`"${e}" plugin is not implemented on ${r}`,i.Unimplemented)}{const i=null==s?void 0:s.methods.find(e=>t===e.name);if(i)return"promise"===i.rtype?n=>l.nativePromise(e,t.toString(),n):(n,i)=>l.nativeCallback(e,t.toString(),n,i);if(n)return null===(a=n[t])||void 0===a?void 0:a.bind(n)}})(n,t);if(a){const e=a(...u);return c=null==e?void 0:e.remove,e}throw new o(`"${e}.${t}()" is not implemented on ${r}`,i.Unimplemented)});return"addListener"===t&&(g.remove=async()=>c()),g};return u.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(u,"name",{value:t,writable:!1,configurable:!1}),u},p=u("addListener"),m=u("removeListener"),f=(e,n)=>{const t=p({eventName:e},n),i=async()=>{const i=await t;m({eventName:e,callbackId:i},n)},o=new Promise(e=>t.then(()=>e({remove:i})));return o.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},o},w=new Proxy({},{get(e,n){switch(n){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return s?f:p;case"removeListener":return m;default:return u(n)}}});return c[e]=w,h.set(e,{name:e,proxy:w,platforms:new Set([...Object.keys(n),...s?[r]:[]])}),w});return l.convertFileSrc||(l.convertFileSrc=e=>e),l.getPlatform=g,l.handleError=n=>e.console.error(n),l.isNativePlatform=p,l.isPluginAvailable=m,l.pluginMethodNoop=(e,n,t)=>Promise.reject(`${t} does not have an implementation of "${n}".`),l.registerPlugin=f,l.Exception=o,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),s=r.registerPlugin;class a{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const t=this.windowListeners[e];t&&!t.registered&&this.addWindowListener(t);const i=async()=>this.removeListener(e,n),o=Promise.resolve({remove:i});return Object.defineProperty(o,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()}}),o}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n){const t=this.listeners[e];t&&t.forEach(e=>e(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:e=>{this.notifyListeners(n,e)}}}unimplemented(e="not implemented"){return new r.Exception(e,i.Unimplemented)}unavailable(e="not available"){return new r.Exception(e,i.Unavailable)}async removeListener(e,n){const t=this.listeners[e];if(!t)return;const i=t.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},7720:(e,n,t)=>{"use strict";t.r(n),t.d(n,{PersonalPageModule:()=>b});var i=t(8583),o=t(665),r=t(7823),s=t(1348),a=t(4762),d=t(8384),l=t(4021);const c=(0,d.fo)("Camera",{web:()=>t.e(4028).then(t.bind(t,4028)).then(e=>new e.CameraWeb)});var u=t(8720),g=t(4961),p=t(3646);function m(e,n){if(1&e&&(u.TgZ(0,"h3",16),u._uU(1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.AsE("",e.user.name," ",e.user.secondName,"")}}function v(e,n){if(1&e&&(u.TgZ(0,"h5",12),u._uU(1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.hij("Tel: ",e.user.phone,"")}}const h=[{path:"",component:(()=>{class e{constructor(e){this.userservice=e,this.tempImg="../../../assets/img/userDefault.png"}get dataUser(){return this.userservice.getUser}ngOnInit(){void 0!==this.dataUser&&setTimeout(()=>{this.user=this.dataUser,this.dateUser=new Date(this.user.birth),this.tempImg=this.dataUser.img},1500)}camara(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield c.getPhoto({quality:90,allowEditing:!1,resultType:l.dk.Base64,saveToGallery:!0,width:160,height:160});e&&this.saveImage(e)})}saveImage(e){return(0,a.mG)(this,void 0,void 0,function*(){this.tempImg="data:image/png;base64,"+e.base64String,yield this.userservice.saveUserImage(this.tempImg)})}}return e.\u0275fac=function(n){return new(n||e)(u.Y36(g.f))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-personal"]],decls:33,vars:8,consts:[["translucent","","no-border",""],[3,"imgUser"],[1,"ion-padding"],["size","6"],[1,"avatar"],[3,"src"],["expand","block","shape","round",1,"btc-edit",3,"click"],["slot","end","name","camera"],[1,"ion-padding","ion-text-center",2,"margin-top","50px"],["size","12"],["style","margin: 20px;","class","name",4,"ngIf"],["style","margin: 20px;","class","data",4,"ngIf"],[1,"data",2,"margin","20px"],["expand","block","shape","round","color","tertiary",2,"margin","20px"],["expand","block","shape","round","color","secondary",2,"margin","20px"],["expand","block","shape","round","color","primary",2,"margin","20px"],[1,"name",2,"margin","20px"]],template:function(e,n){1&e&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-header"),u._UZ(3,"app-header",1),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"ion-content"),u.TgZ(5,"ion-grid",2),u.TgZ(6,"ion-row"),u.TgZ(7,"ion-col",3),u.TgZ(8,"div",4),u.TgZ(9,"ion-avatar"),u._UZ(10,"img",5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"ion-col",3),u.TgZ(12,"ion-button",6),u.NdJ("click",function(){return n.camara()}),u._uU(13," Update Image "),u._UZ(14,"ion-icon",7),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"ion-grid",8),u.TgZ(16,"ion-row"),u.TgZ(17,"ion-col",9),u.TgZ(18,"div"),u.YNc(19,m,2,2,"h3",10),u.YNc(20,v,2,1,"h5",11),u.TgZ(21,"h5",12),u._uU(22),u.ALo(23,"date"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"ion-col",9),u.TgZ(25,"ion-button",13),u._uU(26,"Credit Card Data"),u.qZA(),u.qZA(),u.TgZ(27,"ion-col",9),u.TgZ(28,"ion-button",14),u._uU(29,"Metamask account"),u.qZA(),u.qZA(),u.TgZ(30,"ion-col",9),u.TgZ(31,"ion-button",15),u._uU(32,"Edit personal data"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(3),u.Q6J("imgUser",n.tempImg),u.xp6(7),u.s9C("src",n.tempImg,u.LSH),u.xp6(9),u.Q6J("ngIf",void 0!==n.user),u.xp6(1),u.Q6J("ngIf",void 0!==n.user),u.xp6(2),u.hij("Birth: ",u.xi3(23,5,n.dateUser,"d-M-yyyy "),""))},directives:[r.Gu,r.sr,p.G,r.W2,r.jY,r.Nd,r.wI,r.BJ,r.YG,r.gu,i.O5],pipes:[i.uU],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background:url(gradient-background.77a6e207c519df4705d8.jpg) no-repeat top center/cover fixed,#fff;height:100vh}.avatar[_ngcontent-%COMP%]{width:160px;height:160px}img[_ngcontent-%COMP%]{display:block;border-radius:50%;bottom:calc(-1*(80px + 4px));border:8px solid #9dc912;background-color:#fff;max-width:100%;max-height:100%}.btc-edit[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute}.btc-edit[_ngcontent-%COMP%]{top:200px;--background:#cf920d}.card-body[_ngcontent-%COMP%]{position:relative;padding:30px;height:calc(100vh \u2013 (200px + 56px));overflow:hidden}.name[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:var(--ion-color-primary)}.data[_ngcontent-%COMP%]{font-size:90%;color:var(--ion-color-secondary);text-transform:uppercase;margin:0 auto}']}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),e})();var w=t(5642);let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,o.u5,r.Pc,f,w.K]]}),e})()}}]);