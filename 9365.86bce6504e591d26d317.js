(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[9365],{9258:(t,e,r)=>{"use strict";r.d(e,{K:()=>a});var o=r(6274),n=r(8620),i=r(7272);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,n.Pc]]}),t})()},3883:(t,e,r)=>{"use strict";r.d(e,{G:()=>u});var o=r(7272),n=r(8620),i=r(8895),a=r(2149),s=r(6274);function c(t,e){1&t&&o._UZ(0,"ion-back-button",8)}function l(t,e){1&t&&o._UZ(0,"ion-button",9)}let u=(()=>{class t{constructor(t,e,r){this.menuController=t,this.router=e,this.databaseService=r,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(t=>this.dataUser=t),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(n._q),o.Y36(i.F0),o.Y36(a.k))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-buttons",1),o.YNc(3,c,1,0,"ion-back-button",2),o.YNc(4,l,1,0,"ion-button",3),o.qZA(),o._UZ(5,"ion-img",4),o.TgZ(6,"ion-buttons",5),o.TgZ(7,"ion-avatar",6),o.NdJ("click",function(){return e.openMenu()}),o._UZ(8,"img",7),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Q6J("ngIf",e.arrow),o.xp6(1),o.Q6J("ngIf",!e.arrow),o.xp6(1),o.s9C("src",e.imgHeader),o.xp6(3),o.s9C("src",e.imgUser,o.LSH))},directives:[n.Gu,n.sr,n.Sm,s.O5,n.Xz,n.BJ,n.oU,n.cs,n.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},9365:(t,e,r)=>{"use strict";r.r(e),r.d(e,{SharePageModule:()=>d});var o=r(6274),n=r(4988),i=r(8620),a=r(8895),s=r(1855),c=r(7272),l=r(129),u=r(3883);const h=[{path:"",component:(()=>{class t{constructor(t,e,r){this.socialSharing=t,this.actionSheetcontroller=e,this.platform=r,this.imgUser="../../../assets/img/userDefault.png"}ngOnInit(){}click(){return(0,s.mG)(this,void 0,void 0,function*(){console.log("action sheet");const t=yield this.actionSheetcontroller.create({header:"Select the way to share",buttons:[{text:"Share",icon:"share-outline",handler:()=>this.onShareDocument()},{text:"Cancel",icon:"close-outline",role:"cancel"}]});yield t.present()})}onShareDocument(){console.log("Compartiremos la URL de la aplicacion"),this.platform.is("cordova")||this.platform.is("capacitor")?this.socialSharing.share("I am testing FBApp from Otium Technologies. If you also want to try it, go to the following link","https://pwa-practices.netlify.app/",null,"https://rewards.otium.info/static/media/logo_otium.40fe3167.png"):navigator.share&&navigator.share({title:"FBAPP, Otium App",text:"I am testing FBApp from Otium Technologies. If you also want to try it, go to the following link",url:"https://pwa-practices.netlify.app/"}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(l.e),c.Y36(i.BX),c.Y36(i.t4))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-share"]],decls:19,vars:2,consts:[[3,"translucent"],[3,"imgUser"],[1,"div-content"],[1,"ion-padding","ion-text-center","div-share"],["href",""],["expand","block","color","primary",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header",0),c._UZ(1,"app-header",1),c.qZA(),c.TgZ(2,"ion-content"),c.TgZ(3,"div",2),c.TgZ(4,"div",3),c.TgZ(5,"h3"),c._uU(6,"Share on networks that you are testing FBApp and earn Otiums for it!"),c.qZA(),c.TgZ(7,"h3"),c.TgZ(8,"a",4),c._uU(9,"Read more"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(10,"div",3),c.TgZ(11,"h3"),c._uU(12,"I am testing FBApp from Otium Technologies."),c.qZA(),c.TgZ(13,"h3"),c._uU(14,"If you also want to try it, go to the following link: "),c.TgZ(15,"a",4),c._uU(16,"FBApp"),c.qZA(),c.qZA(),c.TgZ(17,"ion-button",5),c.NdJ("click",function(){return e.click()}),c._uU(18," Share "),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.Q6J("translucent",!0),c.xp6(1),c.Q6J("imgUser",e.imgUser))},directives:[i.Gu,u.G,i.W2,i.YG],styles:[".div-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:90vh}ion-content[_ngcontent-%COMP%]{--background:url(Share2.3a2e7bb17db2148e7c25.jpg) no-repeat center}a[_ngcontent-%COMP%]{text-decoration:none}.div-share[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:30vh;background:#ffffff8a;border:1px solid #3c0080;box-shadow:3px 3px 8px #3c0080;border-radius:2.5rem;margin:1rem 2.5rem}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),t})();var g=r(9258);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,n.u5,i.Pc,p,g.K]]}),t})()}}]);