(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[1691],{9258:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});var r=n(6274),o=n(4683),s=n(7272);let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,o.Pc]]}),e})()},3883:(e,t,n)=>{"use strict";n.d(t,{G:()=>a});var r=n(7272),o=n(4683),s=n(3722),i=n(7611);let a=(()=>{class e{constructor(e,t,n){this.menuController=e,this.router=t,this.userservice=n,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser=""}get loadData(){return this.userservice.getUser}ngOnInit(){let e=document.getElementById("returnarrow");console.log("this.router.url",this.router.url),"/welcome"===this.router.url&&e.remove(),setTimeout(()=>{this.dataUser=this.loadData,this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(o._q),r.Y36(s.F0),r.Y36(i.f))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:8,vars:2,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary","id","returnarrow"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"]],template:function(e,t){1&e&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r._UZ(3,"ion-back-button",2),r.qZA(),r._UZ(4,"ion-img",3),r.TgZ(5,"ion-buttons",4),r.TgZ(6,"ion-avatar",5),r.NdJ("click",function(){return t.openMenu()}),r._UZ(7,"img",6),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(4),r.s9C("src",t.imgHeader),r.xp6(3),r.s9C("src",t.imgUser,r.LSH))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.Xz,o.BJ],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),e})()},1691:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HomePageModule:()=>p});var r=n(6274),o=n(4683),s=n(4988),i=n(3722),a=n(7272),c=n(3883);const g=[{path:"",component:(()=>{class e{constructor(){this.imgUser="../../../assets/img/userDefault.png"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-home"]],decls:15,vars:2,consts:[[3,"imgUser"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-header"),a._UZ(2,"app-header",0),a.qZA(),a.qZA(),a.TgZ(3,"ion-content",1),a.TgZ(4,"ion-header",2),a.TgZ(5,"ion-toolbar"),a.TgZ(6,"ion-title",3),a._uU(7,"Blank"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"div",4),a.TgZ(9,"strong"),a._uU(10,"Ready to create an app?"),a.qZA(),a.TgZ(11,"p"),a._uU(12,"Start with Ionic "),a.TgZ(13,"a",5),a._uU(14,"UI Components"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(2),a.Q6J("imgUser",t.imgUser),a.xp6(1),a.Q6J("fullscreen",!0))},directives:[o.Gu,c.G,o.W2,o.sr,o.wd],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(g)],i.Bz]}),e})();var l=n(9258);let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.ez,s.u5,o.Pc,u,l.K]]}),e})()}}]);