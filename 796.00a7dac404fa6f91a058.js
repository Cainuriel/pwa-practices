(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[796],{9258:(t,e,r)=>{"use strict";r.d(e,{K:()=>n});var s=r(6274),o=r(8620),i=r(7272);let n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.ez,o.Pc]]}),t})()},3883:(t,e,r)=>{"use strict";r.d(e,{G:()=>p});var s=r(7272),o=r(8620),i=r(8895),n=r(2149),a=r(6274);function c(t,e){1&t&&s._UZ(0,"ion-back-button",8)}function u(t,e){1&t&&s._UZ(0,"ion-button",9)}let p=(()=>{class t{constructor(t,e,r){this.menuController=t,this.router=e,this.databaseService=r,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(t=>this.dataUser=t),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(o._q),s.Y36(i.F0),s.Y36(n.k))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",1),s.YNc(3,c,1,0,"ion-back-button",2),s.YNc(4,u,1,0,"ion-button",3),s.qZA(),s._UZ(5,"ion-img",4),s.TgZ(6,"ion-buttons",5),s.TgZ(7,"ion-avatar",6),s.NdJ("click",function(){return e.openMenu()}),s._UZ(8,"img",7),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(3),s.Q6J("ngIf",e.arrow),s.xp6(1),s.Q6J("ngIf",!e.arrow),s.xp6(1),s.s9C("src",e.imgHeader),s.xp6(3),s.s9C("src",e.imgUser,s.LSH))},directives:[o.Gu,o.sr,o.Sm,a.O5,o.Xz,o.BJ,o.oU,o.cs,o.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},796:(t,e,r)=>{"use strict";r.r(e),r.d(e,{FavoritosPageModule:()=>h});var s=r(6274),o=r(4988),i=r(8620),n=r(8895),a=r(7272),c=r(2149),u=r(3883);const p=[{path:"",component:(()=>{class t{constructor(t){this.userservice=t,this.nofavorites="../../../assets/img/nofavorites.png"}ngOnInit(){this.userservice.observableUser.subscribe(t=>this.dataUser=t)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.k))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-favoritos"]],decls:8,vars:2,consts:[["translucent","","no-border",""],[3,"imgUser"],[1,"ion-text-center"],[3,"src"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-header"),a._UZ(3,"app-header",1),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"ion-content"),a.TgZ(5,"h1",2),a._uU(6,"No favorite products in this business"),a.qZA(),a._UZ(7,"ion-img",3),a.qZA()),2&t&&(a.xp6(3),a.Q6J("imgUser",e.dataUser.img),a.xp6(4),a.Q6J("src",e.nofavorites))},directives:[i.Gu,i.sr,u.G,i.W2,i.Xz],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.Bz.forChild(p)],n.Bz]}),t})();var l=r(9258);let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[l.K,s.ez,o.u5,i.Pc,g,l.K]]}),t})()}}]);