(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[997],{9258:(e,t,r)=>{"use strict";r.d(t,{K:()=>s});var n=r(6274),o=r(4683),i=r(7272);let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[n.ez,o.Pc]]}),e})()},3883:(e,t,r)=>{"use strict";r.d(t,{G:()=>a});var n=r(7272),o=r(4683),i=r(3722),s=r(7611);let a=(()=>{class e{constructor(e,t,r){this.menuController=e,this.router=t,this.userservice=r,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser=""}get loadData(){return this.userservice.getUser}ngOnInit(){let e=document.getElementById("returnarrow");console.log("this.router.url",this.router.url),"/welcome"===this.router.url&&e.remove(),setTimeout(()=>{this.dataUser=this.loadData,this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o._q),n.Y36(i.F0),n.Y36(s.f))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:8,vars:2,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary","id","returnarrow"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n._UZ(4,"ion-img",3),n.TgZ(5,"ion-buttons",4),n.TgZ(6,"ion-avatar",5),n.NdJ("click",function(){return t.openMenu()}),n._UZ(7,"img",6),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(4),n.s9C("src",t.imgHeader),n.xp6(3),n.s9C("src",t.imgUser,n.LSH))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.Xz,o.BJ],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),e})()},997:(e,t,r)=>{"use strict";r.r(t),r.d(t,{OrderPlacedPageModule:()=>Z});var n=r(6274),o=r(4988),i=r(4683),s=r(3722),a=r(7272),c=r(3883);const d=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-order-placed"]],decls:40,vars:0,consts:[["mode","md",1,"flex-container"],["mode","md",1,"ion-padding"],["expand","block","shape","round","color","primary"],[2,"text-align","center","padding-top","1.25rem"],[1,"property-flex"],["color","danger"],["mode","md"],["color","primary",1,"ion-text-center"],["id","total-price-order"],[1,"flex-button"],["expand","block","shape","round","color","primary","size","large"],[1,"ion-text-center","ion-padding"]],template:function(e,t){1&e&&(a._UZ(0,"app-header"),a.TgZ(1,"ion-content",0),a.TgZ(2,"ion-card",1),a.TgZ(3,"ion-card-header"),a.TgZ(4,"ion-button",2),a._uU(5,"Table 7"),a.qZA(),a.TgZ(6,"div",3),a.TgZ(7,"ion-title"),a.TgZ(8,"strong"),a._uU(9,"Your order has been confirmed"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"ion-card-content"),a.TgZ(11,"div",4),a.TgZ(12,"h1"),a._uU(13,"Order number:"),a.qZA(),a.TgZ(14,"h1"),a.TgZ(15,"strong"),a._uU(16,"AAA657"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",4),a.TgZ(18,"h1"),a._uU(19,"Order status:"),a.qZA(),a.TgZ(20,"ion-text",5),a.TgZ(21,"h1"),a._uU(22,"In preparation"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(23,"div",4),a.TgZ(24,"h1"),a._uU(25,"Estimated time:"),a.qZA(),a.TgZ(26,"h1"),a._uU(27," 15 min"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(28,"ion-footer"),a.TgZ(29,"ion-toolbar"),a.TgZ(30,"ion-card",6),a.TgZ(31,"ion-text",7),a.TgZ(32,"h2",8),a._uU(33,"XX.XX\u20ac"),a.qZA(),a.qZA(),a.TgZ(34,"ion-card-content",9),a.TgZ(35,"div"),a.TgZ(36,"ion-button",10),a._uU(37," SEE DETAIL "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(38,"ion-card-subtitle",11),a._uU(39,"After confirmming there is no posibility to cancel or change the order"),a.qZA(),a.qZA(),a.qZA(),a.qZA())},directives:[c.G,i.W2,i.PM,i.Zi,i.YG,i.wd,i.FN,i.yW,i.fr,i.sr,i.tO],styles:[".property-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:1.875rem}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),e})();var u=r(9258);let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,o.u5,i.Pc,g,u.K]]}),e})()}}]);