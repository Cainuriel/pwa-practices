(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[9365],{9258:(t,e,n)=>{"use strict";n.d(e,{K:()=>a});var o=n(6274),r=n(4683),i=n(7272);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,r.Pc]]}),t})()},3883:(t,e,n)=>{"use strict";n.d(e,{G:()=>s});var o=n(7272),r=n(4683),i=n(3722),a=n(7611);let s=(()=>{class t{constructor(t,e,n){this.menuController=t,this.router=e,this.userservice=n,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser=""}get loadData(){return this.userservice.getUser}ngOnInit(){let t=document.getElementById("returnarrow");console.log("this.router.url",this.router.url),"/welcome"===this.router.url&&t.remove(),setTimeout(()=>{this.dataUser=this.loadData,this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r._q),o.Y36(i.F0),o.Y36(a.f))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:8,vars:2,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary","id","returnarrow"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o._UZ(4,"ion-img",3),o.TgZ(5,"ion-buttons",4),o.TgZ(6,"ion-avatar",5),o.NdJ("click",function(){return e.openMenu()}),o._UZ(7,"img",6),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.s9C("src",e.imgHeader),o.xp6(3),o.s9C("src",e.imgUser,o.LSH))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.Xz,r.BJ],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},9365:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SharePageModule:()=>m});var o=n(6274),r=n(4988),i=n(4683),a=n(3722),s=n(1855),c=n(7272),l=n(3724),g=n(3883);const u=[{path:"",component:(()=>{class t{constructor(t,e,n){this.socialSharing=t,this.actionSheetcontroller=e,this.platform=n,this.imgUser="../../../assets/img/userDefault.png"}ngOnInit(){}click(){return(0,s.mG)(this,void 0,void 0,function*(){console.log("action sheet");const t=yield this.actionSheetcontroller.create({header:"Select the way to share",buttons:[{text:"Share",icon:"share-outline",handler:()=>this.onShareDocument()},{text:"Cancel",icon:"close-outline",role:"cancel"}]});yield t.present()})}onShareDocument(){console.log("Compartiremos la URL de la aplicacion"),this.platform.is("cordova")||this.platform.is("capacitor")?this.socialSharing.share("I am testing FBApp from Otium Technologies. If you also want to try it, go to the following link","Url de la aplicacion",null,"https://rewards.otium.info/static/media/logo_otium.40fe3167.png"):navigator.share&&navigator.share({title:"FBAPP, Otium App",text:"I am testing FBApp from Otium Technologies. If you also want to try it, go to the following link",url:"Url de la aplicacion"}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(l.e),c.Y36(i.BX),c.Y36(i.t4))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-share"]],decls:23,vars:2,consts:[[3,"translucent"],[3,"imgUser"],[1,"div-content"],[1,"ion-padding","ion-text-center","div-share"],[1,"div-share"],[1,"ion-padding","ion-text-center"],["href",""],["block","","color","primary",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header",0),c._UZ(1,"app-header",1),c.qZA(),c.TgZ(2,"ion-content"),c.TgZ(3,"div",2),c.TgZ(4,"div",3),c.TgZ(5,"ion-card",4),c.TgZ(6,"ion-card-content"),c._uU(7," Share on networks that you are testing FBApp! "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"div",5),c.TgZ(9,"h1"),c._uU(10," And earn Otiums for it!"),c.qZA(),c.TgZ(11,"p"),c.TgZ(12,"a",6),c._uU(13,"Read more"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"div",3),c.TgZ(15,"ion-card",4),c.TgZ(16,"ion-card-content"),c._uU(17," I am testing FBApp from Otium Technologies. If you also want to try it, go to the following link: "),c.TgZ(18,"a",6),c._uU(19,"FBApp"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"div",5),c.TgZ(21,"ion-button",7),c.NdJ("click",function(){return e.click()}),c._uU(22," Share "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.Q6J("translucent",!0),c.xp6(1),c.Q6J("imgUser",e.imgUser))},directives:[i.Gu,g.G,i.W2,i.PM,i.FN,i.YG],styles:["ion-img[_ngcontent-%COMP%]{margin-top:2rem;height:25vh!important}.div-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:70vh}ion-content[_ngcontent-%COMP%]{--background:url(Share2.3a2e7bb17db2148e7c25.jpg) no-repeat center}ion-item[_ngcontent-%COMP%]{--background:#fff0}.div-share[_ngcontent-%COMP%]{padding:1rem;margin:1rem 2.5rem}.div-message[_ngcontent-%COMP%], .div-share[_ngcontent-%COMP%]{background:#ffffff8a;border:1px solid #3c0080;box-shadow:3px 3px 8px #3c0080;border-radius:2.5rem}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),t})();var d=n(9258);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.ez,r.u5,i.Pc,h,d.K]]}),t})()}}]);