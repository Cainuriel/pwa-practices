(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[6794],{9237:(e,t,n)=>{"use strict";n.d(t,{oK:()=>i,GW:()=>r,dk:()=>o});var i=(()=>(function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(i||(i={})),i))(),r=(()=>(function(e){e.Rear="REAR",e.Front="FRONT"}(r||(r={})),r))(),o=(()=>(function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(o||(o={})),o))()},8107:(e,t,n)=>{"use strict";n.d(t,{xz:()=>r,Uw:()=>s,fo:()=>a}),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var i=(()=>(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(i||(i={})),i))();class r extends Error{constructor(e,t){super(e),this.message=e,this.code=t}}const o=(e=>e.Capacitor=(e=>{var t,n,o,a,s;const d=e.CapacitorCustomPlatform||null,l=e.Capacitor||{},c=l.Plugins=l.Plugins||{},u=e.CapacitorPlatforms,g=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==d?d.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e)),p=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==g()),m=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(e=>{const t=v.get(e);return!!(null==t?void 0:t.platforms.has(g()))||!!h(e)}),h=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.getPluginHeader)||(e=>{var t;return null===(t=l.PluginHeaders)||void 0===t?void 0:t.find(t=>t.name===e)}),v=new Map,f=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.registerPlugin)||((e,t={})=>{const n=v.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const o=g(),a=h(e);let s;const u=n=>{let c;const u=(...u)=>{const g=(async()=>(!s&&o in t?s=s="function"==typeof t[o]?await t[o]():t[o]:null!==d&&!s&&"web"in t&&(s=s="function"==typeof t.web?await t.web():t.web),s))().then(t=>{const s=((t,n)=>{var s,d;if(!a){if(t)return null===(d=t[n])||void 0===d?void 0:d.bind(t);throw new r(`"${e}" plugin is not implemented on ${o}`,i.Unimplemented)}{const i=null==a?void 0:a.methods.find(e=>n===e.name);if(i)return"promise"===i.rtype?t=>l.nativePromise(e,n.toString(),t):(t,i)=>l.nativeCallback(e,n.toString(),t,i);if(t)return null===(s=t[n])||void 0===s?void 0:s.bind(t)}})(t,n);if(s){const e=s(...u);return c=null==e?void 0:e.remove,e}throw new r(`"${e}.${n}()" is not implemented on ${o}`,i.Unimplemented)});return"addListener"===n&&(g.remove=async()=>c()),g};return u.toString=()=>`${n.toString()}() { [capacitor code] }`,Object.defineProperty(u,"name",{value:n,writable:!1,configurable:!1}),u},p=u("addListener"),m=u("removeListener"),f=(e,t)=>{const n=p({eventName:e},t),i=async()=>{const i=await n;m({eventName:e,callbackId:i},t)},r=new Promise(e=>n.then(()=>e({remove:i})));return r.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},r},w=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return a?f:p;case"removeListener":return m;default:return u(t)}}});return c[e]=w,v.set(e,{name:e,proxy:w,platforms:new Set([...Object.keys(t),...a?[o]:[]])}),w});return l.convertFileSrc||(l.convertFileSrc=e=>e),l.getPlatform=g,l.handleError=t=>e.console.error(t),l.isNativePlatform=p,l.isPluginAvailable=m,l.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),l.registerPlugin=f,l.Exception=r,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),a=o.registerPlugin;class s{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n);const i=async()=>this.removeListener(e,t),r=Promise.resolve({remove:i});return Object.defineProperty(r,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()}}),r}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new o.Exception(e,i.Unimplemented)}unavailable(e="not available"){return new o.Exception(e,i.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}},9258:(e,t,n)=>{"use strict";n.d(t,{K:()=>a});var i=n(6274),r=n(8620),o=n(7272);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez,r.Pc]]}),e})()},3883:(e,t,n)=>{"use strict";n.d(t,{G:()=>c});var i=n(7272),r=n(8620),o=n(8895),a=n(2149),s=n(6274);function d(e,t){1&e&&i._UZ(0,"ion-back-button",8)}function l(e,t){1&e&&i._UZ(0,"ion-button",9)}let c=(()=>{class e{constructor(e,t,n){this.menuController=e,this.router=t,this.databaseService=n,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(e=>this.dataUser=e),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(r._q),i.Y36(o.F0),i.Y36(a.k))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(e,t){1&e&&(i.TgZ(0,"ion-header",0),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-buttons",1),i.YNc(3,d,1,0,"ion-back-button",2),i.YNc(4,l,1,0,"ion-button",3),i.qZA(),i._UZ(5,"ion-img",4),i.TgZ(6,"ion-buttons",5),i.TgZ(7,"ion-avatar",6),i.NdJ("click",function(){return t.openMenu()}),i._UZ(8,"img",7),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(3),i.Q6J("ngIf",t.arrow),i.xp6(1),i.Q6J("ngIf",!t.arrow),i.xp6(1),i.s9C("src",t.imgHeader),i.xp6(3),i.s9C("src",t.imgUser,i.LSH))},directives:[r.Gu,r.sr,r.Sm,s.O5,r.Xz,r.BJ,r.oU,r.cs,r.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),e})()},6794:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PersonalPageModule:()=>Z});var i=n(6274),r=n(4988),o=n(8620),a=n(8895),s=n(1855),d=n(8107),l=n(9237);const c=(0,d.fo)("Camera",{web:()=>n.e(9716).then(n.bind(n,9716)).then(e=>new e.CameraWeb)});var u=n(7272),g=n(2149),p=n(4422),m=n(3883);function h(e,t){if(1&e&&(u.TgZ(0,"h3",16),u._uU(1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.AsE("",e.dataUser.name," ",e.dataUser.secondName,"")}}function v(e,t){if(1&e&&(u.TgZ(0,"h5",12),u._uU(1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.hij("Tel: ",e.dataUser.phone,"")}}const f=[{path:"",component:(()=>{class e{constructor(e,t){this.userservice=e,this.authUserService=t}ngOnInit(){this.userservice.observableUser.subscribe(e=>this.dataUser=e)}camara(){return(0,s.mG)(this,void 0,void 0,function*(){const e=yield c.getPhoto({quality:90,allowEditing:!1,resultType:l.dk.Base64,saveToGallery:!0,width:160,height:160});e&&this.saveImage(e)})}saveImage(e){return(0,s.mG)(this,void 0,void 0,function*(){this.dataUser.img="data:image/png;base64,"+e.base64String,this.userservice.changeDataUser(this.dataUser),yield this.userservice.update("usuarios",this.dataUser.id,this.dataUser)})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(g.k),u.Y36(p.C))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-personal"]],decls:33,vars:8,consts:[["translucent","","no-border",""],[3,"imgUser"],[1,"ion-padding"],["size","6"],[1,"avatar"],[3,"src"],["expand","block","shape","round",1,"btc-edit",3,"click"],["slot","end","name","camera"],[1,"ion-padding","ion-text-center",2,"margin-top","50px"],["size","12"],["style","margin: 20px;","class","name",4,"ngIf"],["style","margin: 20px;","class","data",4,"ngIf"],[1,"data",2,"margin","20px"],["expand","block","shape","round","color","primary","routerLink","/update",2,"margin","20px"],["expand","block","shape","round","color","tertiary","routerLink","/credit-card",2,"margin","20px"],["expand","block","shape","round","color","secondary",2,"margin","20px"],[1,"name",2,"margin","20px"]],template:function(e,t){1&e&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-header"),u._UZ(3,"app-header",1),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"ion-content"),u.TgZ(5,"ion-grid",2),u.TgZ(6,"ion-row"),u.TgZ(7,"ion-col",3),u.TgZ(8,"div",4),u.TgZ(9,"ion-avatar"),u._UZ(10,"img",5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"ion-col",3),u.TgZ(12,"ion-button",6),u.NdJ("click",function(){return t.camara()}),u._uU(13," Update Image "),u._UZ(14,"ion-icon",7),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"ion-grid",8),u.TgZ(16,"ion-row"),u.TgZ(17,"ion-col",9),u.TgZ(18,"div"),u.YNc(19,h,2,2,"h3",10),u.YNc(20,v,2,1,"h5",11),u.TgZ(21,"h5",12),u._uU(22),u.ALo(23,"date"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(24,"ion-col",9),u.TgZ(25,"ion-button",13),u._uU(26,"Edit personal data"),u.qZA(),u.qZA(),u.TgZ(27,"ion-col",9),u.TgZ(28,"ion-button",14),u._uU(29,"Credit Card Data"),u.qZA(),u.qZA(),u.TgZ(30,"ion-col",9),u.TgZ(31,"ion-button",15),u._uU(32,"Metamask account"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(3),u.Q6J("imgUser",t.dataUser.img),u.xp6(7),u.s9C("src",t.dataUser.img,u.LSH),u.xp6(9),u.Q6J("ngIf",void 0!==t.dataUser),u.xp6(1),u.Q6J("ngIf",void 0!==t.dataUser),u.xp6(2),u.hij("Birth: ",u.xi3(23,5,t.dataUser.birth,"d-M-yyyy "),""))},directives:[o.Gu,o.sr,m.G,o.W2,o.jY,o.Nd,o.wI,o.BJ,o.YG,o.gu,i.O5,o.YI,a.rH],pipes:[i.uU],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background:url(gradient-background.77a6e207c519df4705d8.jpg) no-repeat top center/cover fixed,#fff;height:100vh}.avatar[_ngcontent-%COMP%]{width:160px;height:160px}img[_ngcontent-%COMP%]{display:block;border-radius:50%;bottom:calc(-1*(80px + 4px));border:8px solid #9dc912;background-color:#fff;max-width:100%;max-height:100%}.btc-edit[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute}.btc-edit[_ngcontent-%COMP%]{top:200px;--background:#cf920d}.card-body[_ngcontent-%COMP%]{position:relative;padding:30px;height:calc(100vh \u2013 (200px + 56px));overflow:hidden}.name[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:var(--ion-color-primary)}.data[_ngcontent-%COMP%]{font-size:90%;color:var(--ion-color-secondary);text-transform:uppercase;margin:0 auto}']}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),e})();var b=n(9258);let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,r.u5,o.Pc,w,b.K]]}),e})()}}]);