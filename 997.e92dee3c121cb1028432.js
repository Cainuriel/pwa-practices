(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[997],{997:(e,r,o)=>{"use strict";o.r(r),o.d(r,{OrderPlacedPageModule:()=>v});var t=o(6274),n=o(4988),i=o(8620),d=o(8895),a=o(1855),c=o(630),s=o(7272),Z=o(5136),u=o(6880),g=o(3883);function p(e,r){if(1&e&&(s.TgZ(0,"ion-button",13),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Table ",e.order.idTable,"")}}function l(e,r){if(1&e&&(s.TgZ(0,"h1"),s.TgZ(1,"strong"),s._uU(2),s.ALo(3,"date"),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Oqu(s.xi3(3,1,e.commonService.dateFirestoreToDate(e.order.dateOrder),"medium"))}}function h(e,r){if(1&e&&(s.TgZ(0,"h1"),s.TgZ(1,"strong"),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Oqu(e.order.idOrder)}}function m(e,r){if(1&e&&(s.TgZ(0,"h1"),s.TgZ(1,"strong"),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Oqu(e.order.state)}}function A(e,r){if(1&e&&(s.TgZ(0,"h1"),s.TgZ(1,"strong"),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Oqu(e.order.estimatedPreparationTime)}}function f(e,r){if(1&e&&(s.TgZ(0,"h2",14),s._uU(1),s.ALo(2,"number"),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Total: ",s.xi3(2,1,e.order.totalPrice,"1.2-2"),"\u20ac")}}const T=[{path:"",component:(()=>{class e{constructor(e,r,o){this.dataService=e,this.modalCtrl=r,this.commonService=o}ngOnInit(){this.dataService.currentRestaurantData.subscribe(e=>this.restaurantData=e),this.dataService.currentOrder.subscribe(e=>{this.orderService=e,""!==e&&this.loadOrderFromDatabase(this.orderService.path,this.orderService.idOrder)})}loadOrderFromDatabase(e,r){console.log("ORDER PLACED VALOR DE ORDERservice -> ",this.orderService),this.dataService.getRestaurantOrder(e,r).then(e=>e.subscribe(e=>{this.order=e,console.log("DATOS DEL PEDIDO ACTUAL -> ",this.order)}))}mostrarModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.modalCtrl.create({component:c.t});yield e.present()})}}return e.\u0275fac=function(r){return new(r||e)(s.Y36(Z.D),s.Y36(i.IN),s.Y36(u.v))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-order-placed"]],decls:35,vars:7,consts:[[3,"imgHeader"],["mode","md",1,"flex-container"],["mode","md",1,"ion-padding"],["expand","block","shape","round","color","primary",4,"ngIf"],[2,"text-align","center","padding-top","1.25rem"],[4,"ngIf"],[1,"ion-margin-top"],["color","danger"],["mode","md"],["color","primary",1,"ion-text-center"],["id","total-price-order",4,"ngIf"],[1,"flex-button"],["expand","block","shape","round","color","primary","size","large",3,"click"],["expand","block","shape","round","color","primary"],["id","total-price-order"]],template:function(e,r){1&e&&(s.TgZ(0,"ion-header"),s._UZ(1,"app-header",0),s.qZA(),s.TgZ(2,"ion-content",1),s.TgZ(3,"ion-card",2),s.TgZ(4,"ion-card-header"),s.YNc(5,p,2,1,"ion-button",3),s.TgZ(6,"div",4),s.TgZ(7,"ion-title"),s.TgZ(8,"strong"),s._uU(9,"Your order has been confirmed"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"ion-card-content"),s.YNc(11,l,4,4,"h1",5),s.TgZ(12,"div",6),s.TgZ(13,"h1"),s._uU(14,"Order number:"),s.qZA(),s.YNc(15,h,3,1,"h1",5),s.qZA(),s.TgZ(16,"div",6),s.TgZ(17,"h1"),s._uU(18,"Order status:"),s.qZA(),s.TgZ(19,"ion-text",7),s.YNc(20,m,3,1,"h1",5),s._UZ(21,"h1"),s.qZA(),s.qZA(),s.TgZ(22,"div",6),s.TgZ(23,"h1"),s._uU(24,"Estimated time:"),s.qZA(),s.YNc(25,A,3,1,"h1",5),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(26,"ion-footer"),s.TgZ(27,"ion-toolbar"),s.TgZ(28,"ion-card",8),s.TgZ(29,"ion-text",9),s.YNc(30,f,3,4,"h2",10),s.qZA(),s.TgZ(31,"ion-card-content",11),s.TgZ(32,"div"),s.TgZ(33,"ion-button",12),s.NdJ("click",function(){return r.mostrarModal()}),s._uU(34," SEE DETAIL "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("imgHeader",r.restaurantData.img),s.xp6(4),s.Q6J("ngIf",void 0!==r.order),s.xp6(6),s.Q6J("ngIf",void 0!==r.order),s.xp6(4),s.Q6J("ngIf",void 0!==r.order),s.xp6(5),s.Q6J("ngIf",void 0!==r.order),s.xp6(5),s.Q6J("ngIf",void 0!==r.order),s.xp6(5),s.Q6J("ngIf",void 0!==r.order))},directives:[i.Gu,g.G,i.W2,i.PM,i.Zi,t.O5,i.wd,i.FN,i.yW,i.fr,i.sr,i.YG],pipes:[t.uU,t.JJ],styles:[".property-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:1.875rem}"]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[d.Bz.forChild(T)],d.Bz]}),e})();var x=o(9258);let v=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[t.ez,n.u5,i.Pc,q,x.K]]}),e})()}}]);