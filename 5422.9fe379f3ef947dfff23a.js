(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[5422],{9258:(e,t,n)=>{"use strict";n.d(t,{K:()=>s});var r=n(6274),o=n(4683),i=n(7272);let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.ez,o.Pc]]}),e})()},3883:(e,t,n)=>{"use strict";n.d(t,{G:()=>a});var r=n(7272),o=n(4683),i=n(3722),s=n(7611);let a=(()=>{class e{constructor(e,t,n){this.menuController=e,this.router=t,this.userservice=n,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser=""}get loadData(){return this.userservice.getUser}ngOnInit(){let e=document.getElementById("returnarrow");console.log("this.router.url",this.router.url),"/welcome"===this.router.url&&e.remove(),setTimeout(()=>{this.dataUser=this.loadData,this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o._q),r.Y36(i.F0),r.Y36(s.f))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:8,vars:2,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary","id","returnarrow"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"]],template:function(e,t){1&e&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r._UZ(3,"ion-back-button",2),r.qZA(),r._UZ(4,"ion-img",3),r.TgZ(5,"ion-buttons",4),r.TgZ(6,"ion-avatar",5),r.NdJ("click",function(){return t.openMenu()}),r._UZ(7,"img",6),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(4),r.s9C("src",t.imgHeader),r.xp6(3),r.s9C("src",t.imgUser,r.LSH))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.Xz,o.BJ],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),e})()},5422:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EarnPageModule:()=>p});var r=n(6274),o=n(4988),i=n(4683),s=n(3722),a=n(7272),c=n(3883);const g=[{path:"",component:(()=>{class e{constructor(){this.imgUser="../../../assets/img/userDefault.png"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-earn"]],decls:24,vars:1,consts:[[3,"imgUser"],["mode","ios"],["color","primary",1,"ion-text-center"],[1,"welcome-cards"],[1,"staking"],[1,"ion-text-center","ion-card"],["color","primary"],[1,"text-color"],["expand","block","shape","round","color","primary"],[1,"recommend"],[1,"ion-padding","text-color"],[1,"ion-input"],["expand","block","size","large","color","primary","shape","round","type","submit"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a._UZ(1,"app-header",0),a.qZA(),a.TgZ(2,"ion-content",1),a.TgZ(3,"ion-text",2),a.TgZ(4,"h1"),a._uU(5,"Earn Otiums"),a.qZA(),a.qZA(),a.TgZ(6,"div",3),a.TgZ(7,"ion-card",4),a.TgZ(8,"ion-card-content",5),a.TgZ(9,"ion-card-title",6),a._uU(10,"Staking Plan"),a.qZA(),a.TgZ(11,"ion-card-subtitle",7),a._uU(12," Up to 5% per year!"),a.qZA(),a.TgZ(13,"ion-button",8),a._uU(14," Enter Otiums "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"ion-card",9),a.TgZ(16,"ion-card-content",5),a.TgZ(17,"ion-card-title",6),a._uU(18,"Recommending the App"),a.qZA(),a.TgZ(19,"ion-card-subtitle",10),a._uU(20,"Email or Phone:"),a.qZA(),a._UZ(21,"ion-input",11),a.TgZ(22,"ion-button",12),a._uU(23," Send "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(1),a.Q6J("imgUser",t.imgUser))},directives:[i.Gu,c.G,i.W2,i.yW,i.PM,i.FN,i.gZ,i.tO,i.YG,i.pK,i.j9],styles:[".welcome-cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;height:80vh}ion-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;margin:1.5rem}ion-card[_ngcontent-%COMP%]{border:1px solid #3c0080;box-shadow:3px 3px 8px #3c0080;border-radius:2.5rem;margin:1rem 2.5rem}.staking[_ngcontent-%COMP%]{background:hsla(0,28%,93%,.541);background-size:180px}.recommend[_ngcontent-%COMP%]{background:hsla(0,28%,93%,.541);background-size:120px}ion-content[_ngcontent-%COMP%]{--background:linear-gradient(90deg,#fff0,#fff),url(Otium_Transparet_No\\ Shadow.3e3627a6cd9df9ecb54b.png) no-repeat}.ion-input[_ngcontent-%COMP%]{--padding-start:20px;border-radius:25px;border:2px solid var(--ion-color-login-input-border);margin-top:10px;margin-bottom:10px}.text-color[_ngcontent-%COMP%]{color:#000}.ion-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:33vh}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),e})();var d=n(9258);let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.ez,o.u5,i.Pc,u,d.K]]}),e})()}}]);