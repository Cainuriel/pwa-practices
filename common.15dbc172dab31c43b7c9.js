(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[8592],{8225:(t,e,n)=>{"use strict";n.d(e,{c:()=>s});var r=n(3150),i=n(2954),o=n(9461);const s=(t,e)=>{let n,s;const a=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(l(),c(o,i)):l()},c=(t,e)=>{n=t,s||(s=n);const i=n;(0,r.c)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,r.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,i.a),onMove:t=>a(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),s=void 0}})}},7330:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,d:()=>o});var r=n(2377);const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),await new Promise(t=>(0,r.c)(s,t)),s},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,b:()=>s,c:()=>i,d:()=>c,h:()=>a});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},6575:(t,e,n)=>{"use strict";n.d(e,{s:()=>r});const r=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=o(t);for(let e=0;e<s.length;e++)i(s[e])}});const r=o(e);for(let t=0;t<r.length;t++)i(r[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=o(t);for(let n=0;n<e.length;n++)i(e[n])},o=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},408:(t,e,n)=>{"use strict";n.d(e,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},1269:(t,e,n)=>{"use strict";n.d(e,{c:()=>i,g:()=>o,h:()=>r,o:()=>a});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},5642:(t,e,n)=>{"use strict";n.d(e,{K:()=>s});var r=n(8583),i=n(2859),o=n(8720);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,i.Pc]]}),t})()},3646:(t,e,n)=>{"use strict";n.d(e,{G:()=>u});var r=n(8720),i=n(2859),o=n(430),s=n(4961),a=n(8583);function c(t,e){1&t&&r._UZ(0,"ion-back-button",8)}function l(t,e){1&t&&r._UZ(0,"ion-button",9)}let u=(()=>{class t{constructor(t,e,n){this.menuController=t,this.router=e,this.userservice=n,this.arrow=!0,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser="../../../assets/img/userDefault.png"}get loadData(){return this.userservice.getUser}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),setTimeout(()=>{this.dataUser=this.loadData,void 0!==this.dataUser&&this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i._q),r.Y36(o.F0),r.Y36(s.f))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r.YNc(3,c,1,0,"ion-back-button",2),r.YNc(4,l,1,0,"ion-button",3),r.qZA(),r._UZ(5,"ion-img",4),r.TgZ(6,"ion-buttons",5),r.TgZ(7,"ion-avatar",6),r.NdJ("click",function(){return e.openMenu()}),r._UZ(8,"img",7),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Q6J("ngIf",e.arrow),r.xp6(1),r.Q6J("ngIf",!e.arrow),r.xp6(1),r.s9C("src",e.imgHeader),r.xp6(3),r.s9C("src",e.imgUser,r.LSH))},directives:[i.Gu,i.sr,i.Sm,a.O5,i.Xz,i.BJ,i.oU,i.cs,i.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},6811:(t,e,n)=>{"use strict";n.d(e,{_:()=>a});var r=n(8720),i=n(2859),o=n(8583);function s(t,e){if(1&t&&(r.TgZ(0,"p"),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij("",t.line," ")}}let a=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}salirSinArgumentos(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.IN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-restaurant-menu-modal"]],inputs:{modalInfo:"modalInfo"},decls:13,vars:3,consts:[[1,"ion-padding"],[1,"center-content"],[1,"ion-card"],["alt","",3,"src"],[4,"ngFor","ngForOf"],["color","primary","expand","block","fill","outline",1,"ion-button",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-content",0),r.TgZ(1,"div",1),r.TgZ(2,"ion-card",2),r._UZ(3,"img",3),r.TgZ(4,"ion-card-header"),r.TgZ(5,"ion-card-subtitle"),r._uU(6,"One of our specialties"),r.qZA(),r.TgZ(7,"ion-card-title"),r._uU(8),r.qZA(),r.qZA(),r.TgZ(9,"ion-card-content"),r.YNc(10,s,2,1,"p",4),r.qZA(),r.qZA(),r.TgZ(11,"ion-button",5),r.NdJ("click",function(){return e.salirSinArgumentos()}),r._uU(12,"Return"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.MGl("src","",e.modalInfo.img," ",r.LSH),r.xp6(5),r.hij("",e.modalInfo.name," "),r.xp6(2),r.Q6J("ngForOf",e.modalInfo.description))},directives:[i.W2,i.PM,i.Zi,i.tO,i.gZ,i.FN,o.sg,i.YG],styles:[".center-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center}.ion-card[_ngcontent-%COMP%]{margin:0}.ion-button[_ngcontent-%COMP%]{margin-top:20px}.center-text[_ngcontent-%COMP%]{text-align:center;border:2px solid red}"]}),t})()},4474:(t,e,n)=>{"use strict";n.d(e,{D:()=>c});var r=n(6215);class i{constructor(t="",e="",n=""){this.typeShow=t,this.iconSrc=e,this.bkgColor=n}}class o{constructor(t=0,e=0){this.totalPrice=t,this.totalAmount=e}}var s=n(8720),a=n(1841);let c=(()=>{class t{constructor(t){this.http=t,this.drink=new i("drink","/assets/icon/food/forkandknife.png","medium"),this.food=new i("food","/assets/icon/drink/bottle-water.png","warning"),this.foodOrDrink=new r.X(new i),this.currentFoodOrDrink=this.foodOrDrink.asObservable(),this.cartData=new r.X(new o),this.currendCartData=this.cartData.asObservable()}selectedFoodOrDrink(t){this.foodOrDrink.next(t)}updateCartData(t){this.cartData.next(t)}getRestaurantMenu(){return this.http.get("/assets/data/restaurant-menu.json")}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(a.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4491:(t,e,n)=>{"use strict";n.d(e,{D:()=>s});var r=n(4762),i=n(8720),o=n(1628);let s=(()=>{class t{constructor(t){this.storage=t,this._storage=null,this._otiumOrders=[],this.init()}get getOtiumOrders(){return[...this._otiumOrders]}init(){return(0,r.mG)(this,void 0,void 0,function*(){const t=yield this.storage.create();this._storage=t,this.loadOrders()})}saveOrder(t,e){return(0,r.mG)(this,void 0,void 0,function*(){this._otiumOrders=[e,...this._otiumOrders],this._storage.set(t,this._otiumOrders)})}loadOrders(){return(0,r.mG)(this,void 0,void 0,function*(){try{const t=yield this._storage.get("otium_orders");this._otiumOrders=t||[]}catch(t){}})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o.K))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);