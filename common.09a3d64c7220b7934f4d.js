(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[8592],{7658:(t,e,n)=>{"use strict";n.d(e,{c:()=>s});var r=n(5133),i=n(6887),o=n(4366);const s=(t,e)=>{let n,s;const c=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(l(),a(o,i)):l()},a=(t,e)=>{n=t,s||(s=n);const i=n;(0,r.c)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,r.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,i.a),onMove:t=>c(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),s=void 0}})}},4369:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,d:()=>o});var r=n(5392);const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),await new Promise(t=>(0,r.c)(s,t)),s},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},6887:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,b:()=>s,c:()=>i,d:()=>a,h:()=>c});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},8085:(t,e,n)=>{"use strict";n.d(e,{s:()=>r});const r=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=o(t);for(let e=0;e<s.length;e++)i(s[e])}});const r=o(e);for(let t=0;t<r.length;t++)i(r[t]);const c=document.createElement("div");c.appendChild(e);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!c.includes(r.toLowerCase())){t.removeAttribute(r);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=o(t);for(let n=0;n<e.length;n++)i(e[n])},o=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},977:(t,e,n)=>{"use strict";n.d(e,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},9046:(t,e,n)=>{"use strict";n.d(e,{c:()=>i,g:()=>o,h:()=>r,o:()=>c});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},9258:(t,e,n)=>{"use strict";n.d(e,{K:()=>s});var r=n(6274),i=n(8620),o=n(7272);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,i.Pc]]}),t})()},3883:(t,e,n)=>{"use strict";n.d(e,{G:()=>d});var r=n(7272),i=n(8620),o=n(8895),s=n(2149),c=n(6274);function a(t,e){1&t&&r._UZ(0,"ion-back-button",8)}function l(t,e){1&t&&r._UZ(0,"ion-button",9)}let d=(()=>{class t{constructor(t,e,n){this.menuController=t,this.router=e,this.databaseService=n,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(t=>this.dataUser=t),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i._q),r.Y36(o.F0),r.Y36(s.k))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r.YNc(3,a,1,0,"ion-back-button",2),r.YNc(4,l,1,0,"ion-button",3),r.qZA(),r._UZ(5,"ion-img",4),r.TgZ(6,"ion-buttons",5),r.TgZ(7,"ion-avatar",6),r.NdJ("click",function(){return e.openMenu()}),r._UZ(8,"img",7),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Q6J("ngIf",e.arrow),r.xp6(1),r.Q6J("ngIf",!e.arrow),r.xp6(1),r.s9C("src",e.imgHeader),r.xp6(3),r.s9C("src",e.imgUser,r.LSH))},directives:[i.Gu,i.sr,i.Sm,c.O5,i.Xz,i.BJ,i.oU,i.cs,i.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},630:(t,e,n)=>{"use strict";n.d(e,{t:()=>Z});var r=n(7272),i=n(8620),o=n(5136),s=n(6880),c=n(6274);function a(t,e){if(1&t&&(r.TgZ(0,"ion-card",7),r._UZ(1,"ion-img",8),r.TgZ(2,"ion-card-header",9),r.TgZ(3,"ion-card-title",10),r.TgZ(4,"strong"),r._uU(5),r.qZA(),r.qZA(),r.TgZ(6,"ion-card-subtitle"),r._uU(7),r.ALo(8,"date"),r.qZA(),r.TgZ(9,"ion-card-subtitle"),r._uU(10),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.s9C("src",t.order.imgRestaurant),r.xp6(4),r.Oqu(t.order.nameRestaurant),r.xp6(2),r.Oqu(r.xi3(8,4,t.commonService.dateFirestoreToDate(t.order.dateOrder),"medium")),r.xp6(3),r.hij("Order: ",t.order.idOrder,"")}}function l(t,e){if(1&t&&(r.TgZ(0,"ion-button",11),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij("Table ",t.order.idTable,"")}}function d(t,e){1&t&&(r.TgZ(0,"h2"),r._uU(1," Nothing in the order"),r.qZA())}function u(t,e){if(1&t&&(r.TgZ(0,"ion-row",17),r.TgZ(1,"p"),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(2),r.Oqu(t.name)}}function g(t,e){if(1&t&&(r.TgZ(0,"ion-row"),r.TgZ(1,"p"),r.TgZ(2,"strong"),r._uU(3),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(3),r.Oqu(t.allergyOrPreference)}}function m(t,e){if(1&t&&(r.TgZ(0,"ion-row",14),r._UZ(1,"ion-col",15),r.TgZ(2,"ion-col",15),r.TgZ(3,"h4"),r._uU(4),r.qZA(),r.qZA(),r.TgZ(5,"ion-col",16),r.TgZ(6,"ion-row",17),r.TgZ(7,"ion-text",18),r.TgZ(8,"h5"),r._uU(9),r.qZA(),r.qZA(),r.qZA(),r.YNc(10,u,3,1,"ion-row",19),r.YNc(11,g,4,1,"ion-row",5),r.qZA(),r.TgZ(12,"ion-col",20),r.TgZ(13,"ion-row"),r.TgZ(14,"ion-col",21),r.TgZ(15,"ion-text",22),r.TgZ(16,"h3",23),r._uU(17),r.ALo(18,"number"),r.qZA(),r.qZA(),r.qZA(),r._UZ(19,"ion-col",24),r.qZA(),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(4),r.hij("",t.amount," x"),r.xp6(5),r.Oqu(t.nameProduct),r.xp6(1),r.Q6J("ngForOf",t.extras),r.xp6(1),r.Q6J("ngIf",null!==t.allergyOrPreference||""!==t.allergyOrPreference),r.xp6(6),r.hij("",r.xi3(18,5,t.price,"1.2-2"),"\u20ac")}}function p(t,e){if(1&t&&(r.TgZ(0,"ion-grid"),r.YNc(1,m,20,8,"ion-row",13),r.qZA()),2&t){const t=r.oxw(2);r.xp6(1),r.Q6J("ngForOf",t.order.orderLines)}}function h(t,e){if(1&t&&(r.TgZ(0,"ion-card-content",12),r.YNc(1,d,2,0,"h2",5),r.YNc(2,p,2,1,"ion-grid",5),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",0===t.order.orderLines.length),r.xp6(1),r.Q6J("ngIf",t.order.orderLines.length>0)}}function f(t,e){if(1&t&&(r.TgZ(0,"ion-toolbar"),r.TgZ(1,"ion-card",7),r.TgZ(2,"ion-text",25),r.TgZ(3,"h2"),r._uU(4),r.ALo(5,"number"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(4),r.hij("Total: ",r.xi3(5,1,t.order.totalPrice,"1.2-2"),"\u20ac")}}let Z=(()=>{class t{constructor(t,e,n){this.modalCtrl=t,this.dataService=e,this.commonService=n}ngOnInit(){this.dataService.currentRestaurantData.subscribe(t=>this.restaurantData=t),this.dataService.currentOrder.subscribe(t=>{this.orderService=t,""!==t&&this.loadOrderFromDatabase(this.orderService.path,this.orderService.idOrder)})}loadOrderFromDatabase(t,e){this.dataService.getRestaurantOrder(t,e).then(t=>t.subscribe(t=>{this.order=t,console.log("DATOS DEL PEDIDO hardcodeado -> ",this.order)}))}salirSinArgumentos(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.IN),r.Y36(o.D),r.Y36(s.v))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-orders-details-modal"]],decls:13,vars:4,consts:[["mode","md",4,"ngIf"],["mode","md",1,"ion-padding"],["expand","block","shape","round","color","primary",4,"ngIf"],[2,"text-align","center","padding-top","1.25rem"],["scroll-x","true",4,"ngIf"],[4,"ngIf"],["color","primary","expand","block","fill","outline",1,"ion-button",3,"click"],["mode","md"],[1,"img-logo",3,"src"],[1,"ion-text-center"],[1,"margin-bottom"],["expand","block","shape","round","color","primary"],["scroll-x","true"],["class","ion-margin-bottom",4,"ngFor","ngForOf"],[1,"ion-margin-bottom"],["size","1.5",1,"center-content"],["size","6",1,"center-content"],["size","12"],["color","primary"],["size","12",4,"ngFor","ngForOf"],["size","3",1,"center-content"],["size","8",1,"center-content"],["color","primary",1,"ion-text-right"],[2,"font-size","16px"],["size","4",1,"center-content"],["color","primary",1,"ion-text-center"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-content"),r.YNc(1,a,11,7,"ion-card",0),r.TgZ(2,"ion-card",1),r.TgZ(3,"ion-card-header"),r.YNc(4,l,2,1,"ion-button",2),r.TgZ(5,"div",3),r.TgZ(6,"ion-title"),r._uU(7,"Detail"),r.qZA(),r.qZA(),r.qZA(),r.YNc(8,h,3,2,"ion-card-content",4),r.qZA(),r.qZA(),r.TgZ(9,"ion-footer"),r.YNc(10,f,6,4,"ion-toolbar",5),r.TgZ(11,"ion-button",6),r.NdJ("click",function(){return e.salirSinArgumentos()}),r._uU(12,"Return"),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngIf",void 0!==e.order),r.xp6(3),r.Q6J("ngIf",void 0!==e.order),r.xp6(4),r.Q6J("ngIf",void 0!==e.order),r.xp6(2),r.Q6J("ngIf",void 0!==e.order))},directives:[i.W2,c.O5,i.PM,i.Zi,i.wd,i.fr,i.YG,i.Xz,i.gZ,i.tO,i.FN,i.jY,c.sg,i.Nd,i.wI,i.yW,i.sr],pipes:[c.uU,c.JJ],styles:[".center-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:space-around;justify-content:center}.flex-button[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}ion-card-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}ion-icon[_ngcontent-%COMP%]{height:1.875rem;width:1.875rem;margin-left:.5rem}ion-grid[_ngcontent-%COMP%]{--ion-grid-padding:0px}ion-col[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.img-logo[_ngcontent-%COMP%]{height:90px;width:90px;margin:20px auto 0}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:.625rem}"]}),t})()},4396:(t,e,n)=>{"use strict";n.d(e,{_:()=>c});var r=n(7272),i=n(8620),o=n(6274);function s(t,e){if(1&t&&(r.TgZ(0,"p"),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij("",t.line," ")}}let c=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}salirSinArgumentos(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.IN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-restaurant-menu-modal"]],inputs:{modalInfo:"modalInfo"},decls:13,vars:3,consts:[[1,"ion-padding"],[1,"center-content"],[1,"ion-card"],["alt","",3,"src"],[4,"ngFor","ngForOf"],["color","primary","expand","block","fill","outline",1,"ion-button",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-content",0),r.TgZ(1,"div",1),r.TgZ(2,"ion-card",2),r._UZ(3,"img",3),r.TgZ(4,"ion-card-header"),r.TgZ(5,"ion-card-subtitle"),r._uU(6,"One of our specialties"),r.qZA(),r.TgZ(7,"ion-card-title"),r._uU(8),r.qZA(),r.qZA(),r.TgZ(9,"ion-card-content"),r.YNc(10,s,2,1,"p",4),r.qZA(),r.qZA(),r.TgZ(11,"ion-button",5),r.NdJ("click",function(){return e.salirSinArgumentos()}),r._uU(12,"Return"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.MGl("src","",e.modalInfo.img," ",r.LSH),r.xp6(5),r.hij("",e.modalInfo.name," "),r.xp6(2),r.Q6J("ngForOf",e.modalInfo.description))},directives:[i.W2,i.PM,i.Zi,i.tO,i.gZ,i.FN,o.sg,i.YG],styles:[".center-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center}.ion-card[_ngcontent-%COMP%]{margin:0}.ion-button[_ngcontent-%COMP%]{margin-top:20px}.center-text[_ngcontent-%COMP%]{text-align:center;border:2px solid red}"]}),t})()},7611:(t,e,n)=>{"use strict";n.d(e,{f:()=>s});var r=n(1855),i=n(7272),o=n(2604);let s=(()=>{class t{constructor(t){this.storage=t,this._storageUsers=null,this._userData=[],this.init()}get getUser(){return null===this._userData?void 0:this._userData[0]}init(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.storage.create();this._storageUsers=t,this.loadUser()})}saveUser(t){return(0,r.mG)(this,void 0,void 0,function*(){this._userData=[t],this._storageUsers.set("user",this._userData)})}saveUserImage(t){return(0,r.mG)(this,void 0,void 0,function*(){this._userData[0].img=t,this._storageUsers.set("user",this._userData)})}saveUserTheme(t){return(0,r.mG)(this,void 0,void 0,function*(){this._userData[0].themeUser=t,this._storageUsers.set("user",this._userData)})}loadUser(){return(0,r.mG)(this,void 0,void 0,function*(){try{const t=yield this._storageUsers.get("user");this._userData=t}catch(t){}})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o.K))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);