(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[9795],{9258:(t,e,n)=>{"use strict";n.d(e,{K:()=>a});var r=n(6274),o=n(8620),i=n(7272);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,o.Pc]]}),t})()},3883:(t,e,n)=>{"use strict";n.d(e,{G:()=>l});var r=n(7272),o=n(8620),i=n(8895),a=n(2149),s=n(6274);function c(t,e){1&t&&r._UZ(0,"ion-back-button",8)}function u(t,e){1&t&&r._UZ(0,"ion-button",9)}let l=(()=>{class t{constructor(t,e,n){this.menuController=t,this.router=e,this.databaseService=n,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(t=>this.dataUser=t),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o._q),r.Y36(i.F0),r.Y36(a.k))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r.YNc(3,c,1,0,"ion-back-button",2),r.YNc(4,u,1,0,"ion-button",3),r.qZA(),r._UZ(5,"ion-img",4),r.TgZ(6,"ion-buttons",5),r.TgZ(7,"ion-avatar",6),r.NdJ("click",function(){return e.openMenu()}),r._UZ(8,"img",7),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Q6J("ngIf",e.arrow),r.xp6(1),r.Q6J("ngIf",!e.arrow),r.xp6(1),r.s9C("src",e.imgHeader),r.xp6(3),r.s9C("src",e.imgUser,r.LSH))},directives:[o.Gu,o.sr,o.Sm,s.O5,o.Xz,o.BJ,o.oU,o.cs,o.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},9795:(t,e,n)=>{"use strict";n.r(e),n.d(e,{QrPageModule:()=>m});var r=n(6274),o=n(4988),i=n(8620),a=n(8895),s=n(7272),c=n(9847),u=n(5136),l=n(3883),d=n(5156);const p=[{path:"",component:(()=>{class t{constructor(t,e,n){this.barcodeScanner=t,this.dataService=e,this.router=n,this.otiumOrder="otium-order",this.inputRestaurant="",this.inputTable="",this.disabledButton=!0}ngOnInit(){this.dataService.currentQrData.subscribe(t=>this.qrData=t),localStorage.removeItem(this.otiumOrder),this.dataService.updateOrder(void 0)}scannQr(){this.barcodeScanner.scan().then(t=>{console.log("Barcode data OTIUM",t.text),this.dataService.updateQrData(JSON.parse(t.text)),console.log("OTIUM this.QrData restaurant y table->",this.qrData.restaurant,this.qrData.table)}).catch(t=>{console.log("Error",t)})}restaurantFromInput(){this.dataService.updateQrData({restaurant:this.inputRestaurant,table:this.inputTable})}verifyInputsToEnableButton(){setTimeout(()=>{this.disabledButton=3!==this.inputTable.length||3!==this.inputRestaurant.length},100)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.m),s.Y36(u.D),s.Y36(a.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-qr"]],decls:29,vars:4,consts:[[3,"qrData"],[1,"div-content"],[1,"input-content"],["fixed",""],["size","12"],["mode","ios",3,"click"],[1,"ion-text-center"],["color","primary",1,"ion-align-self-center"],[1,"center-img"],["src","../../../assets/img/scan-qr-removebg.png","alt","mapa de google"],["size","12",1,"ion-text-center","margin-top"],["size","6"],["type","text","placeholder","Write restaurant",1,"corners",3,"ngModel","ionInput","ngModelChange"],["type","text","placeholder","Write table",1,"corners",3,"ngModel","ionInput","ngModelChange"],["expand","block","shape","round",1,"corners","margin-top",3,"disabled","click"]],template:function(t,e){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"ion-content"),s._UZ(2,"app-load-restaurant-data",0),s.TgZ(3,"div",1),s.TgZ(4,"div",2),s.TgZ(5,"ion-grid",3),s.TgZ(6,"ion-row"),s.TgZ(7,"ion-col",4),s.TgZ(8,"ion-card",5),s.NdJ("click",function(){return e.scannQr()}),s.TgZ(9,"ion-card-content"),s.TgZ(10,"div",6),s.TgZ(11,"ion-text",7),s.TgZ(12,"h1"),s._uU(13,"Touch and scan the table"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div",8),s._UZ(15,"img",9),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(16,"ion-row"),s.TgZ(17,"ion-col",10),s.TgZ(18,"ion-text"),s._uU(19,"Problems with the scan?"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(20,"ion-row"),s.TgZ(21,"ion-col",11),s.TgZ(22,"ion-input",12),s.NdJ("ionInput",function(){return e.verifyInputsToEnableButton()})("ngModelChange",function(t){return e.inputRestaurant=t}),s.qZA(),s.qZA(),s.TgZ(23,"ion-col",11),s.TgZ(24,"ion-input",13),s.NdJ("ionInput",function(){return e.verifyInputsToEnableButton()})("ngModelChange",function(t){return e.inputTable=t}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(25,"ion-row"),s.TgZ(26,"ion-col",4),s.TgZ(27,"ion-button",14),s.NdJ("click",function(){return e.restaurantFromInput()}),s._uU(28," Send "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("qrData",e.qrData),s.xp6(20),s.Q6J("ngModel",e.inputRestaurant),s.xp6(2),s.Q6J("ngModel",e.inputTable),s.xp6(3),s.Q6J("disabled",e.disabledButton))},directives:[l.G,i.W2,d.y,i.jY,i.Nd,i.wI,i.PM,i.FN,i.yW,i.pK,i.j9,o.JJ,o.On,i.YG],styles:[".div-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:90vh;padding-left:1.875rem;padding-right:1.875rem}.corners[_ngcontent-%COMP%]{border-radius:25px;border:2px solid var(--ion-color-tertiary);text-align:center;--placeholder-font-weight:12px!important}.input-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}ion-card[_ngcontent-%COMP%]{border:1px solid #3c0080;box-shadow:3px 3px 8px #3c0080;border-radius:2.5rem}.center-img[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-bottom:1.25rem}.margin-top[_ngcontent-%COMP%]{margin-top:20px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),t})();var h=n(9258);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,o.u5,i.Pc,g,h.K]]}),t})()}}]);