(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[8592],{8225:(t,e,r)=>{"use strict";r.d(e,{c:()=>o});var n=r(3150),s=r(2954),i=r(9461);const o=(t,e)=>{let r,o;const a=(t,n,s)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,n);i&&e(i)?i!==r&&(u(),c(i,s)):u()},c=(t,e)=>{r=t,o||(o=r);const s=r;(0,n.c)(()=>s.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!r)return;const e=r;(0,n.c)(()=>e.classList.remove("ion-activated")),t&&o!==r&&r.click(),r=void 0};return(0,i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{u(!0),(0,s.h)(),o=void 0}})}},7330:(t,e,r)=>{"use strict";r.d(e,{a:()=>s,d:()=>i});var n=r(2377);const s=async(t,e,r,s,i)=>{if(t)return t.attachViewToDom(e,r,i,s);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r;return s&&s.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),await new Promise(t=>(0,n.c)(o,t)),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:(t,e,r)=>{"use strict";r.d(e,{a:()=>i,b:()=>o,c:()=>s,d:()=>c,h:()=>a});const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:r})},notification(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{n.selection()},i=()=>{n.selectionStart()},o=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=t=>{n.impact(t)}},6575:(t,e,r)=>{"use strict";r.d(e,{s:()=>n});const n=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!o()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,c.forEach(t=>{const r=e.querySelectorAll(t);for(let n=r.length-1;n>=0;n--){const t=r[n];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const o=i(t);for(let e=0;e<o.length;e++)s(o[e])}});const n=i(e);for(let t=0;t<n.length;t++)s(n[t]);const a=document.createElement("div");a.appendChild(e);const u=a.querySelector("div");return null!==u?u.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},s=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let r=t.attributes.length-1;r>=0;r--){const e=t.attributes.item(r),n=e.name;if(!a.includes(n.toLowerCase())){t.removeAttribute(n);continue}const s=e.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(n)}const e=i(t);for(let r=0;r<e.length;r++)s(e[r])},i=t=>null!=t.children?t.children:t.childNodes,o=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},408:(t,e,r)=>{"use strict";r.d(e,{S:()=>n});const n={bubbles:{dur:1e3,circles:9,fn:(t,e,r)=>{const n=t*e/r-t+"ms",s=2*Math.PI*e/r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,r)=>{const n=e/r,s=t*n-t+"ms",i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/r-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/r-t+"ms"}})}}},1269:(t,e,r)=>{"use strict";r.d(e,{c:()=>s,g:()=>i,h:()=>n,o:()=>a});const n=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,r,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,r,n)}return!1}},5642:(t,e,r)=>{"use strict";r.d(e,{K:()=>o});var n=r(8583),s=r(2859),i=r(8720);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.ez,s.Pc]]}),t})()},3646:(t,e,r)=>{"use strict";r.d(e,{G:()=>l});var n=r(8720),s=r(2859),i=r(430),o=r(4673),a=r(8583);function c(t,e){1&t&&n._UZ(0,"ion-back-button",8)}function u(t,e){1&t&&n._UZ(0,"ion-button",9)}let l=(()=>{class t{constructor(t,e,r){this.menuController=t,this.router=e,this.databaseService=r,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(t=>this.dataUser=t),this.imgUser=this.dataUser.img,this.imgHeader=this.dataUser.themeUser?"../../../assets/logos/Otium_Transparet_No Shadow.png":"../../../assets/logos/logo_XL.png"}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s._q),n.Y36(i.F0),n.Y36(o.k))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",1),n.YNc(3,c,1,0,"ion-back-button",2),n.YNc(4,u,1,0,"ion-button",3),n.qZA(),n._UZ(5,"ion-img",4),n.TgZ(6,"ion-buttons",5),n.TgZ(7,"ion-avatar",6),n.NdJ("click",function(){return e.openMenu()}),n._UZ(8,"img",7),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Q6J("ngIf",e.arrow),n.xp6(1),n.Q6J("ngIf",!e.arrow),n.xp6(1),n.s9C("src",e.imgHeader),n.xp6(3),n.s9C("src",e.imgUser,n.LSH))},directives:[s.Gu,s.sr,s.Sm,a.O5,s.Xz,s.BJ,s.oU,s.cs,s.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},6811:(t,e,r)=>{"use strict";r.d(e,{_:()=>a});var n=r(8720),s=r(2859),i=r(8583);function o(t,e){if(1&t&&(n.TgZ(0,"p"),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.xp6(1),n.hij("",t.line," ")}}let a=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}salirSinArgumentos(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.IN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-restaurant-menu-modal"]],inputs:{modalInfo:"modalInfo"},decls:13,vars:3,consts:[[1,"ion-padding"],[1,"center-content"],[1,"ion-card"],["alt","",3,"src"],[4,"ngFor","ngForOf"],["color","primary","expand","block","fill","outline",1,"ion-button",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-content",0),n.TgZ(1,"div",1),n.TgZ(2,"ion-card",2),n._UZ(3,"img",3),n.TgZ(4,"ion-card-header"),n.TgZ(5,"ion-card-subtitle"),n._uU(6,"One of our specialties"),n.qZA(),n.TgZ(7,"ion-card-title"),n._uU(8),n.qZA(),n.qZA(),n.TgZ(9,"ion-card-content"),n.YNc(10,o,2,1,"p",4),n.qZA(),n.qZA(),n.TgZ(11,"ion-button",5),n.NdJ("click",function(){return e.salirSinArgumentos()}),n._uU(12,"Return"),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.MGl("src","",e.modalInfo.img," ",n.LSH),n.xp6(5),n.hij("",e.modalInfo.name," "),n.xp6(2),n.Q6J("ngForOf",e.modalInfo.description))},directives:[s.W2,s.PM,s.Zi,s.tO,s.gZ,s.FN,i.sg,s.YG],styles:[".center-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center}.ion-card[_ngcontent-%COMP%]{margin:0}.ion-button[_ngcontent-%COMP%]{margin-top:20px}.center-text[_ngcontent-%COMP%]{text-align:center;border:2px solid red}"]}),t})()},4474:(t,e,r)=>{"use strict";r.d(e,{D:()=>l});var n=r(6215);class s{constructor(t="",e="",r=""){this.typeShow=t,this.iconSrc=e,this.bkgColor=r}}class i{constructor(t=0,e=0){this.totalPrice=t,this.totalAmount=e}}var o=r(8720),a=r(1841),c=r(4673),u=r(5620);let l=(()=>{class t{constructor(t,e,r){this.http=t,this.databaseService=e,this.commonService=r,this.drink=new s("drink","/assets/icon/food/forkandknife.png","medium"),this.food=new s("food","/assets/icon/drink/bottle-water.png","warning"),this.foodOrDrink=new n.X(new s),this.currentFoodOrDrink=this.foodOrDrink.asObservable(),this.cartData=new n.X(new i),this.currendCartData=this.cartData.asObservable(),this.arrRestaurantMenuData=new n.X([]),this.currentArrRestaurantMenuData=this.arrRestaurantMenuData.asObservable(),this.arrRestaurantMenuCategory=new n.X([]),this.currentArrRestaurantMenuCategory=this.arrRestaurantMenuCategory.asObservable(),this.restaurantData=new n.X(""),this.currentRestaurantData=this.restaurantData.asObservable()}selectedFoodOrDrink(t){this.foodOrDrink.next(t)}updateCartData(t){this.cartData.next(t)}updateArrRestaurantMenuData(t){this.arrRestaurantMenuData.next(t)}updateArrRestaurantMenuCategory(t){this.arrRestaurantMenuCategory.next(t)}updateRestaurantData(t){this.restaurantData.next(t)}getRestaurantMenu(t,e){return this.databaseService.getById(t,e)}sortArray(t){t.sort((t,e)=>t.idProduct===e.idProduct?0:t.idProduct<e.idProduct?-1:t.idProduct>e.idProduct?1:void 0)}getRestaurantCategories(t,e){return this.databaseService.getById(t,e)}getRestaurantData(t,e){return this.databaseService.getById(t,e)}showErrorRestaurantNotExist(){this.commonService.errorAlert("Sorry","The restaurant entered does not exist. Please try again","","OK")}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.eN),o.LFG(c.k),o.LFG(u.v))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4491:(t,e,r)=>{"use strict";r.d(e,{D:()=>o});var n=r(4762),s=r(8720),i=r(1628);let o=(()=>{class t{constructor(t){this.storage=t,this._storage=null,this._otiumOrders=[],this.init()}get getOtiumOrders(){return[...this._otiumOrders]}init(){return(0,n.mG)(this,void 0,void 0,function*(){const t=yield this.storage.create();this._storage=t,this.loadOrders()})}saveOrder(t,e){return(0,n.mG)(this,void 0,void 0,function*(){this._otiumOrders=[e,...this._otiumOrders],this._storage.set(t,this._otiumOrders)})}loadOrders(){return(0,n.mG)(this,void 0,void 0,function*(){try{const t=yield this._storage.get("otium_orders");this._otiumOrders=t||[]}catch(t){}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(i.K))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4961:(t,e,r)=>{"use strict";r.d(e,{f:()=>o});var n=r(4762),s=r(8720),i=r(1628);let o=(()=>{class t{constructor(t){this.storage=t,this._storageUsers=null,this._userData=[],this.init()}get getUser(){return null===this._userData?void 0:this._userData[0]}init(){return(0,n.mG)(this,void 0,void 0,function*(){const t=yield this.storage.create();this._storageUsers=t,this.loadUser()})}saveUser(t){return(0,n.mG)(this,void 0,void 0,function*(){this._userData=[t],this._storageUsers.set("user",this._userData)})}saveUserImage(t){return(0,n.mG)(this,void 0,void 0,function*(){this._userData[0].img=t,this._storageUsers.set("user",this._userData)})}saveUserTheme(t){return(0,n.mG)(this,void 0,void 0,function*(){this._userData[0].themeUser=t,this._storageUsers.set("user",this._userData)})}loadUser(){return(0,n.mG)(this,void 0,void 0,function*(){try{const t=yield this._storageUsers.get("user");this._userData=t}catch(t){}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(i.K))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);