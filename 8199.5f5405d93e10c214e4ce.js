(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[8199],{9258:(r,t,e)=>{"use strict";e.d(t,{K:()=>i});var n=e(6274),o=e(8620),s=e(7272);let i=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[n.ez,o.Pc]]}),r})()},3883:(r,t,e)=>{"use strict";e.d(t,{G:()=>d});var n=e(7272),o=e(8620),s=e(8895),i=e(2149),a=e(6274);function c(r,t){1&r&&n._UZ(0,"ion-back-button",8)}function u(r,t){1&r&&n._UZ(0,"ion-button",9)}let d=(()=>{class r{constructor(r,t,e){this.menuController=r,this.router=t,this.databaseService=e,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(r=>this.dataUser=r),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(o._q),n.Y36(s.F0),n.Y36(i.k))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(r,t){1&r&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"ion-buttons",1),n.YNc(3,c,1,0,"ion-back-button",2),n.YNc(4,u,1,0,"ion-button",3),n.qZA(),n._UZ(5,"ion-img",4),n.TgZ(6,"ion-buttons",5),n.TgZ(7,"ion-avatar",6),n.NdJ("click",function(){return t.openMenu()}),n._UZ(8,"img",7),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&r&&(n.xp6(3),n.Q6J("ngIf",t.arrow),n.xp6(1),n.Q6J("ngIf",!t.arrow),n.xp6(1),n.s9C("src",t.imgHeader),n.xp6(3),n.s9C("src",t.imgUser,n.LSH))},directives:[o.Gu,o.sr,o.Sm,a.O5,o.Xz,o.BJ,o.oU,o.cs,o.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),r})()},8199:(r,t,e)=>{"use strict";e.r(t),e.d(t,{OrdersRestaurantsPageModule:()=>U});var n=e(6274),o=e(4988),s=e(8620),i=e(8895),a=e(7272),c=e(2149),u=e(5136),d=e(6880),g=e(3883);function l(r,t){1&r&&(a.TgZ(0,"ion-card-title",11),a._uU(1," Has orders from today"),a.qZA())}function p(r,t){if(1&r&&(a.TgZ(0,"ion-card-subtitle"),a._uU(1," Date last order: "),a._UZ(2,"br"),a._uU(3),a.ALo(4,"date"),a.qZA()),2&r){const r=a.oxw().$implicit,t=a.oxw(2);a.xp6(3),a.hij(" ",a.xi3(4,1,t.commonService.dateFirestoreToDate(r.dateLastOrder),"d MMM y h:mm:ss a")," ")}}function m(r,t){if(1&r){const r=a.EpF();a.TgZ(0,"ion-item"),a.TgZ(1,"ion-grid",5),a.NdJ("click",function(){const t=a.CHM(r).$implicit;return a.oxw(2).loadOrdersFromRestaurant(t.path)}),a.TgZ(2,"ion-row"),a.TgZ(3,"ion-col",6),a._UZ(4,"ion-img",7),a.qZA(),a.TgZ(5,"ion-col",8),a.TgZ(6,"ion-card-header",9),a.TgZ(7,"ion-card-title"),a._uU(8),a.qZA(),a.YNc(9,l,2,0,"ion-card-title",10),a.YNc(10,p,5,4,"ion-card-subtitle",2),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&r){const r=t.$implicit,e=a.oxw(2);a.xp6(4),a.s9C("src",r.restaurant.img),a.xp6(4),a.Oqu(r.restaurant.name),a.xp6(1),a.Q6J("ngIf",void 0!==r.dateLastOrder&&e.commonService.orderFromToday(r.dateLastOrder)),a.xp6(1),a.Q6J("ngIf",void 0!==r.dateLastOrder)}}function h(r,t){if(1&r&&(a.TgZ(0,"ion-card"),a.YNc(1,m,11,4,"ion-item",4),a.qZA()),2&r){const r=a.oxw();a.xp6(1),a.Q6J("ngForOf",r.restaurantsFromOrdersUsers.array)}}function f(r,t){1&r&&(a.TgZ(0,"ion-text",0),a.TgZ(1,"h1",12),a._uU(2,"You have not yet placed an order"),a.qZA(),a.qZA())}const Z=[{path:"",component:(()=>{class r{constructor(r,t,e,n){this.databaseService=r,this.dataService=t,this.router=e,this.commonService=n,this.restaurantsFromOrdersUsers={array:[]}}ngOnInit(){this.databaseService.observableUser.subscribe(r=>this.dataUser=r),this.dataService.currentArrRestaurantsFromOrdersUsers.subscribe(r=>this.restaurantsFromOrdersUsers=r),console.log("this.restaurantsFromOrdersUsers -> ",this.restaurantsFromOrdersUsers)}loadOrdersFromRestaurant(r){this.dataService.updateOrderPath(r),console.log("path -> ",r),this.router.navigate(["/orders"])}}return r.\u0275fac=function(t){return new(t||r)(a.Y36(c.k),a.Y36(u.D),a.Y36(i.F0),a.Y36(d.v))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-orders-restaurants"]],decls:7,vars:2,consts:[["color","primary"],[1,"flex-center"],[4,"ngIf"],["color","primary",4,"ngIf"],[4,"ngFor","ngForOf"],["fixed","",3,"click"],["size","2",1,"ion-margin"],[1,"img-logo",3,"src"],["size","8",1,"flex-center"],[1,"ion-no-padding","margin"],["color","danger",4,"ngIf"],["color","danger"],[1,"ion-margin-horizontal"]],template:function(r,t){1&r&&(a._UZ(0,"app-header"),a.TgZ(1,"ion-content"),a.TgZ(2,"ion-text",0),a.TgZ(3,"h1",1),a._uU(4,"Restaurants visited"),a.qZA(),a.qZA(),a.YNc(5,h,2,1,"ion-card",2),a.YNc(6,f,3,0,"ion-text",3),a.qZA()),2&r&&(a.xp6(5),a.Q6J("ngIf",0!==t.restaurantsFromOrdersUsers.array.length),a.xp6(1),a.Q6J("ngIf",0===t.restaurantsFromOrdersUsers.array.length))},directives:[g.G,s.W2,s.yW,n.O5,s.PM,n.sg,s.Ie,s.jY,s.Nd,s.wI,s.Xz,s.Zi,s.gZ,s.tO],pipes:[n.uU],styles:[".img-logo[_ngcontent-%COMP%]{height:48px;display:block}.flex-center[_ngcontent-%COMP%]{justify-content:center}.flex-align-center[_ngcontent-%COMP%], .flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}ion-row[_ngcontent-%COMP%]{--ion-grid-padding:0px}ion-col[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.height-100[_ngcontent-%COMP%]{height:100px}"]}),r})()}];let x=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[i.Bz.forChild(Z)],i.Bz]}),r})();var O=e(9258);let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[n.ez,o.u5,s.Pc,x,O.K]]}),r})()}}]);