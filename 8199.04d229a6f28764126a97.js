(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[8199],{8199:(r,e,t)=>{"use strict";t.r(e),t.d(e,{OrdersRestaurantsPageModule:()=>Z});var n=t(6274),s=t(4988),o=t(8620),i=t(8895),a=t(7272),c=t(2149),g=t(5136),d=t(3883);function u(r,e){if(1&r){const r=a.EpF();a.TgZ(0,"ion-item"),a.TgZ(1,"ion-grid",5),a.NdJ("click",function(){const e=a.CHM(r).$implicit;return a.oxw(2).loadOrdersFromRestaurant(e.path)}),a.TgZ(2,"ion-row"),a.TgZ(3,"ion-col",6),a._UZ(4,"ion-img",7),a.qZA(),a.TgZ(5,"ion-col",8),a.TgZ(6,"ion-card-header",9),a.TgZ(7,"ion-card-title"),a._uU(8),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&r){const r=e.$implicit;a.xp6(4),a.s9C("src",r.restaurant.img),a.xp6(4),a.Oqu(r.restaurant.name)}}function l(r,e){if(1&r&&(a.TgZ(0,"ion-card"),a.YNc(1,u,9,2,"ion-item",4),a.qZA()),2&r){const r=a.oxw();a.xp6(1),a.Q6J("ngForOf",r.restaurantsFromOrdersUsers.array)}}function p(r,e){1&r&&(a.TgZ(0,"ion-text",0),a.TgZ(1,"h1",10),a._uU(2,"You have not yet placed an order"),a.qZA(),a.qZA())}const h=[{path:"",component:(()=>{class r{constructor(r,e,t){this.databaseService=r,this.dataService=e,this.router=t,this.restaurantsFromOrdersUsers={array:[]}}ngOnInit(){this.databaseService.observableUser.subscribe(r=>this.dataUser=r),this.dataService.currentArrRestaurantsFromOrdersUsers.subscribe(r=>this.restaurantsFromOrdersUsers=r),console.log("this.restaurantsFromOrdersUsers -> ",this.restaurantsFromOrdersUsers)}loadOrdersFromRestaurant(r){this.dataService.updateOrderPath(r),console.log("path -> ",r),this.router.navigate(["/orders"])}}return r.\u0275fac=function(e){return new(e||r)(a.Y36(c.k),a.Y36(g.D),a.Y36(i.F0))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-orders-restaurants"]],decls:7,vars:2,consts:[["color","primary"],[1,"flex-center"],[4,"ngIf"],["color","primary",4,"ngIf"],[4,"ngFor","ngForOf"],["fixed","",3,"click"],["size","2",1,"ion-margin"],[1,"img-logo",3,"src"],["size","8",1,"flex-center"],[1,"ion-no-padding","margin"],[1,"ion-margin-horizontal"]],template:function(r,e){1&r&&(a._UZ(0,"app-header"),a.TgZ(1,"ion-content"),a.TgZ(2,"ion-text",0),a.TgZ(3,"h1",1),a._uU(4,"Restaurants visited"),a.qZA(),a.qZA(),a.YNc(5,l,2,1,"ion-card",2),a.YNc(6,p,3,0,"ion-text",3),a.qZA()),2&r&&(a.xp6(5),a.Q6J("ngIf",0!==e.restaurantsFromOrdersUsers.array.length),a.xp6(1),a.Q6J("ngIf",0===e.restaurantsFromOrdersUsers.array.length))},directives:[d.G,o.W2,o.yW,n.O5,o.PM,n.sg,o.Ie,o.jY,o.Nd,o.wI,o.Xz,o.Zi,o.gZ],styles:[".img-logo[_ngcontent-%COMP%]{height:48px;display:block}.flex-center[_ngcontent-%COMP%]{justify-content:center}.flex-align-center[_ngcontent-%COMP%], .flex-center[_ngcontent-%COMP%]{display:flex;align-items:center}ion-row[_ngcontent-%COMP%]{--ion-grid-padding:0px}ion-col[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.height-100[_ngcontent-%COMP%]{height:100px}"]}),r})()}];let m=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),r})();var f=t(9258);let Z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[n.ez,s.u5,o.Pc,m,f.K]]}),r})()}}]);