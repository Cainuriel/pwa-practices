(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[4341],{4341:(t,e,i)=>{"use strict";i.r(e),i.d(e,{PagoPageModule:()=>Z});var r=i(8583),n=i(665),o=i(2859),a=i(430),s=(()=>(function(t){t.creditCard="CreditCard",t.paypal="Paypal",t.bitcoin="Bitcoin",t.otium="Otium"}(s||(s={})),s))(),c=(()=>(function(t){t.received="Received",t.inPreparation="In preparation",t.prepared="Prepared",t.served="Served"}(c||(c={})),c))();class l{constructor(t,e,i,r,n,o){this.idOrder=t,this.idTable=e,this.orderLines=i,this.totalPrice=r,this.dateOrder=new Date,this.state=c.received,this.paymentMethod=n,this.estimatedPreparationTime="Pending review",this.tip=o}}var p=i(8720),d=i(4491),u=i(3646);const g=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.storageOrdersService=e,this.otiumOrder="otium-order",this.otiumOrders="otium_orders",this.arrOrderLine=[],this.initialbalance=0,this.finalbalance=this.initialbalance,this.percentToGet=10,this.inputTip=0}ngOnInit(){this.loadOrderFromLocalStorage(),this.showTotalPriceInCart()}sumTip(){console.log("inputTip ",this.inputTip),this.finalbalance=Number((this.initialbalance+this.inputTip).toFixed(2)),this.tip=this.inputTip}percentage(){this.inputTip=Number((this.percentToGet/100*this.initialbalance).toFixed(2))}loadOrderFromLocalStorage(){this.otiumOrderIsEmpty()||(this.arrOrderLine=JSON.parse(localStorage.getItem(this.otiumOrder)))}otiumOrderIsEmpty(){return null===localStorage.getItem(this.otiumOrder)}showTotalPriceInCart(){this.arrOrderLine.length>0&&(this.initialbalance=this.getTotalPrice(),this.finalbalance=this.initialbalance)}getTotalPrice(){let t=0;return this.arrOrderLine.forEach(e=>{t+=e.price}),console.log("TOTAL PRICE -> ",t),t}goToOrderPlaced(){this.router.navigate(["/order-placed"])}saveOrder(){this.storageOrdersService.saveOrder(this.otiumOrders,this.createNewOrder()),localStorage.removeItem(this.otiumOrder)}createNewOrder(){const t=this.storageOrdersService.getOtiumOrders.length+1;return console.log("ID ORDER -> ",t),new l(t,7,this.arrOrderLine,this.finalbalance,s.otium,this.tip)}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(a.F0),p.Y36(d.D))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-pago"]],decls:49,vars:9,consts:[["imgHeader","assets/logos-empresas/starbucks-coffee.png"],["fullscreen","",1,"ion-padding"],["color","success","expand","block","fill","solid","size","large","shape","round",1,"cartbutton","ion-padding"],["slot","start","name","cart-outline"],["color","primary"],[1,"ion-text-center"],["mode","md"],["value","visa"],["src","../../../assets/icon/visa.png",1,"visa"],["src","../../../assets/icon/mastercard.png",1,"mastercard"],["color","primary",1,"creditcardText"],["slot","start","value","visa"],["slot","start","value","paypal"],["slot","start","value","crypto"],["slot","start","value","otiums"],["color","warning"],[1,"info-Otium"],[1,"text-center"],[1,"tip"],["shape","round",3,"click"],["placeholder","Give a tip?","type","number","name","inputTip",1,"ion-text-center",3,"ngModel","ngModelChange"],["shape","round","type","submit",3,"click"],["color","primary","shape","round","expand","block","fill","solid","size","large",1,"payButton",3,"click"]],template:function(t,e){1&t&&(p.TgZ(0,"ion-header"),p._UZ(1,"app-header",0),p.qZA(),p.TgZ(2,"ion-content",1),p.TgZ(3,"ion-button",2),p._UZ(4,"ion-icon",3),p.TgZ(5,"h3"),p._uU(6),p.ALo(7,"number"),p.qZA(),p.qZA(),p.TgZ(8,"ion-card"),p.TgZ(9,"ion-card-header"),p.TgZ(10,"ion-card-title",4),p.TgZ(11,"h1",5),p._uU(12,"PAYMENT METHODS"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(13,"ion-card-content"),p.TgZ(14,"ion-list",6),p.TgZ(15,"ion-radio-group",7),p.TgZ(16,"ion-item"),p._UZ(17,"img",8),p._UZ(18,"img",9),p.TgZ(19,"ion-label",10),p._uU(20," CREDIT CARDS"),p.qZA(),p._UZ(21,"ion-radio",11),p.qZA(),p.TgZ(22,"ion-item"),p.TgZ(23,"ion-label",4),p._uU(24,"PAYPAL"),p.qZA(),p._UZ(25,"ion-radio",12),p.qZA(),p.TgZ(26,"ion-item"),p.TgZ(27,"ion-label",4),p._uU(28,"BITCOIN"),p.qZA(),p._UZ(29,"ion-radio",13),p.qZA(),p.TgZ(30,"ion-item"),p.TgZ(31,"ion-label",4),p._uU(32,"OTIUM"),p.qZA(),p._UZ(33,"ion-radio",14),p.TgZ(34,"ion-text",15),p.TgZ(35,"h5",16),p._uU(36,"GET 3% BACK"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(37,"ion-item",17),p.TgZ(38,"ion-title",4),p._uU(39,"TIP"),p.qZA(),p.qZA(),p.TgZ(40,"div",18),p.TgZ(41,"ion-button",19),p.NdJ("click",function(){return e.percentage()}),p._uU(42," 10% "),p.qZA(),p.TgZ(43,"ion-input",20),p.NdJ("ngModelChange",function(t){return e.inputTip=t}),p.qZA(),p.TgZ(44,"ion-button",21),p.NdJ("click",function(){return e.sumTip()}),p._uU(45," Add "),p.qZA(),p.qZA(),p.TgZ(46,"ion-button",22),p.NdJ("click",function(){return e.goToOrderPlaced()})("click",function(){return e.saveOrder()}),p._uU(47),p.ALo(48,"number"),p.qZA(),p.qZA()),2&t&&(p.xp6(6),p.Oqu(p.xi3(7,3,e.initialbalance,"1.2-2")),p.xp6(37),p.Q6J("ngModel",e.inputTip),p.xp6(4),p.hij(" PAY ",p.xi3(48,6,e.finalbalance,"1.2-2")," \u20ac\n"))},directives:[o.Gu,u.G,o.W2,o.YG,o.gu,o.PM,o.Zi,o.gZ,o.FN,o.q_,o.se,o.QI,o.Ie,o.Q$,o.B7,o.U5,o.yW,o.wd,o.pK,o.as,n.JJ,n.On],pipes:[r.JJ],styles:[".text-center[_ngcontent-%COMP%]{margin:1em;text-align:center;color:var(--ion-color-primary)}.info-Otium[_ngcontent-%COMP%]{margin-right:60px}.visa[_ngcontent-%COMP%]{height:48px}.mastercard[_ngcontent-%COMP%]{margin-top:15px;height:48px}.creditcardText[_ngcontent-%COMP%]{margin-top:35px}ion-input[_ngcontent-%COMP%]{border:3px solid var(--ion-color-medium);width:150px!important;color:var(--ion-color-primary);--placeholder-color:var(--ion-color-tertiary)}.payButton[_ngcontent-%COMP%], .tip[_ngcontent-%COMP%]{margin:60px;display:flex;justify-content:space-around}.tip[_ngcontent-%COMP%]{margin:30px}.cartbutton[_ngcontent-%COMP%]{height:6rem!important}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[a.Bz.forChild(g)],a.Bz]}),t})();var m=i(5642);let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[r.ez,n.u5,o.Pc,h,m.K]]}),t})()}}]);