(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[5336],{5336:(t,e,r)=>{"use strict";r.r(e),r.d(e,{RestaurantMenuPageModule:()=>T});var n=r(9258),i=r(6274),o=r(4988),a=r(8620),c=r(8895),s=r(7272),d=r(5136),l=r(2149),u=r(3883);function g(t,e){if(1&t&&s._UZ(0,"img",6),2&t){const t=s.oxw().$implicit;s.MGl("src","",t.icon," ",s.LSH),s.MGl("alt","",t.btnName," ")}}function p(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-slide"),s.TgZ(1,"ion-button",3),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().btnFilterCategory(e.idCategory)}),s.TgZ(2,"div",4),s.YNc(3,g,1,2,"img",5),s._uU(4),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(1),s.MGl("id","btnCategory",t.idCategory,""),s.xp6(2),s.Q6J("ngIf",t.icon),s.xp6(1),s.hij(" ",t.btnName," ")}}let h=(()=>{class t{constructor(){this.categoryOnMenu=[],this.idCategoryItemEvent=new s.vpe,this.idCategoryShow=null,this.slideOptsButton={slidesPerView:2.5,breakpoints:{375:{slidesPerView:3.4},640:{slidesPerView:6.1}}},this.idCategoryItemEvent=new s.vpe,this.showAllProducts=0}ngOnChanges(t){"typeShow"in t==1&&this.btnFilterCategory(this.showAllProducts)}btnFilterCategory(t){this.idCategoryItemEvent.emit(t),console.log("CATEGORY EN CHILD:",t),this.btnDeleteClassSelected(),this.btnAddClassSelected(t)}btnDeleteClassSelected(){document.querySelectorAll(".category-selected").forEach(t=>{t.classList.remove("category-selected"),t.setAttribute("fill","outline")})}btnAddClassSelected(t){if(0===t)document.querySelectorAll(".btnCategory0").forEach(t=>{t.classList.add("category-selected"),t.setAttribute("fill","solid")});else{console.log("btnCategory"+t);const e=document.getElementById("btnCategory"+t);e.classList.add("category-selected"),e.setAttribute("fill","solid")}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-card-categorias"]],inputs:{typeShow:"typeShow",categoryOnMenu:"categoryOnMenu"},outputs:{idCategoryItemEvent:"idCategoryItemEvent"},features:[s.TTD],decls:5,vars:2,consts:[[1,"button-slides",3,"options"],["mode","ios","color","primary","expand","block","fill","solid",1,"btnCategory0","ion-button","category-selected",3,"click"],[4,"ngFor","ngForOf"],["mode","ios","color","primary","expand","block","fill","outline",1,"ion-button",3,"id","click"],[1,"ion-button-content"],[3,"src","alt",4,"ngIf"],[3,"src","alt"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-slides",0),s.TgZ(1,"ion-slide"),s.TgZ(2,"ion-button",1),s.NdJ("click",function(){return e.btnFilterCategory(0)}),s._uU(3,"All"),s.qZA(),s.qZA(),s.YNc(4,p,5,3,"ion-slide",2),s.qZA()),2&t&&(s.Q6J("options",e.slideOptsButton),s.xp6(4),s.Q6J("ngForOf",e.categoryOnMenu))},directives:[a.Hr,a.A$,a.YG,i.sg,i.O5],styles:[".button-slides[_ngcontent-%COMP%]{margin-top:1%;margin-bottom:1%}.ion-button[_ngcontent-%COMP%]{width:6.25rem!important;height:3.75rem!important}.ion-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.ion-button-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem}@media screen and (min-width: 411px) and (max-width: 640px){.ion-button[_ngcontent-%COMP%]{font-size:1.0625rem;width:7.5rem!important;height:4.5rem!important}.ion-button-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:3rem}}"]}),t})();var m=r(1855),f=r(4396);class O{constructor(t,e,r,n,i,o,a,c,s,d){this.idLine=t,this.idProduct=e,this.type=r,this.nameProduct=i,this.codeExtrasAndAllergy=n,this.extras=o,this.allergyOrPreference=a,this.amount=c,this.price=s,this.unitPrice=d}}var C=r(7611);function P(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",22),s.TgZ(1,"ion-toggle",23),s.NdJ("ionChange",function(e){s.CHM(t);const r=s.oxw().$implicit,n=s.oxw();return[n.onChangeAmount(r,e),n.getIdExtraActivatedNow(e)]}),s.qZA(),s.TgZ(2,"ion-label"),s._uU(3),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,r=s.oxw().$implicit,n=s.oxw();s.xp6(1),s.MT6("ion-toggle ",n.extra,"-prod_",r.idProduct,""),s.cQ8("id","prod_",r.idProduct,"-",n.extra,"_",t.idExtra,""),s.xp6(2),s.AsE(" ",t.name," + ",t.price,"\u20ac ")}}function A(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"ion-slide"),s.TgZ(1,"div",2),s.TgZ(2,"div",3),s.TgZ(3,"div"),s.TgZ(4,"img",4),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().mostrarModal(e)}),s.qZA(),s.TgZ(5,"ion-icon",5),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().mostrarModal(e)}),s.qZA(),s.TgZ(6,"ion-icon",6),s.NdJ("click",function(e){return s.CHM(t),s.oxw().toggleFavourite(e)}),s.qZA(),s.qZA(),s.TgZ(7,"div",7),s.TgZ(8,"div",8),s.TgZ(9,"ion-grid",9),s.TgZ(10,"ion-row"),s.TgZ(11,"ion-col",10),s.TgZ(12,"h6"),s.TgZ(13,"strong"),s._uU(14),s.qZA(),s.qZA(),s.qZA(),s._UZ(15,"ion-col",11),s.TgZ(16,"ion-col",12),s.TgZ(17,"h6",13),s._uU(18),s.ALo(19,"number"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(20,"div"),s.YNc(21,P,4,9,"div",14),s.qZA(),s.TgZ(22,"div"),s.TgZ(23,"ion-label",15),s._uU(24," Let us know any allergy or preference "),s.qZA(),s._UZ(25,"ion-input",16),s.qZA(),s.TgZ(26,"div",17),s.TgZ(27,"ion-icon",18),s.NdJ("click",function(){const e=s.CHM(t).$implicit,r=s.oxw();return r.onClickAdd("prod_"+e.idProduct+"-"+r.inputAmount)}),s.qZA(),s._UZ(28,"ion-input",19),s.TgZ(29,"ion-icon",20),s.NdJ("click",function(){const e=s.CHM(t).$implicit,r=s.oxw();return r.onClickSubtract("prod_"+e.idProduct+"-"+r.inputAmount)}),s.qZA(),s.TgZ(30,"ion-button",21),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().addToCart(e)}),s._uU(31,"ADD TO CART"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,r=s.oxw();s.xp6(3),s.Gre("item-card__top-up-",t.img.slice(-3),""),s.xp6(1),s.Gre("img-card-",t.img.slice(-3),""),s.s9C("src",t.img,s.LSH),s.s9C("alt",t.name),s.xp6(2),s.hYB("id","prod_",t.idProduct,"-",r.favourite,""),s.xp6(8),s.Oqu(t.name),s.xp6(3),s.hYB("id","prod_",t.idProduct,"-",r.cardProductPrice,""),s.xp6(1),s.hij("",s.xi3(19,20,t.price,"1.2-2"),"\u20ac"),s.xp6(3),s.Q6J("ngForOf",t.extras),s.xp6(4),s.hYB("id","prod_",t.idProduct,"-",r.inputPreferences,""),s.xp6(3),s.hYB("id","prod_",t.idProduct,"-",r.inputAmount,""),s.xp6(2),s.s9C("id",t.name)}}let x=(()=>{class t{constructor(t,e,r){this.modalCtrl=t,this.dataService=e,this.userservice=r,this.idCategoryFilter=0,this.slideOptsCard={slidesPerView:1.1,breakpoints:{410:{slidesPerView:1.1},640:{slidesPerView:1.7,spaceBetween:20}}},this.extraChecked="extra-checked",this.inputAmount="input_amount",this.extra="extra",this.cardProductPrice="card_product_price",this.inputPreferences="input_preferences",this.otiumOrder="otium-order",this.favourite="favourite",this.arrOrderLine=[],this.arrProductsFavourite=[],this.totalProductsInOrder=new s.vpe,this.totalPrice=new s.vpe,this.categoryOnMenu=new s.vpe,this.initialized=!1}ngOnInit(){this.initialized=!0,this.dataService.currentFoodOrDrink.subscribe(t=>this.foodOrDrink=t),this.dataService.currendCartData.subscribe(t=>this.cartData=t),this.dataService.currentArrRestaurantMenuData.subscribe(t=>this.arrRestaurantMenuData=t),this.dataService.currentArrRestaurantMenuCategory.subscribe(t=>this.arrRestaurantMenuCategory=t),console.log("RESTAURANT MENU CARD PRODUCTOS -> ",this.arrRestaurantMenuData),console.log("RESTAURANT MENU CARD CATEGORIAS",this.arrRestaurantMenuCategory),this.loadMenuData(this.foodOrDrink.typeShow),this.loadCategoryOfMenu(),this.loadOrderFromLocalStorage(),this.showTotalPriceInCart(),this.updateViewPriceAndAmount()}ngOnChanges(t){this.initialized&&(console.log(`CART DATA - price -> ${this.cartData.totalPrice} total amount -> ${this.cartData.totalAmount}`),this.totalPrice.emit(this.cartData.totalPrice),this.totalProductsInOrder.emit(this.cartData.totalAmount)),setTimeout(()=>{this.loadMenuData(this.typeShow,this.idCategoryFilter),this.loadCategoryOfMenu()},500)}loadOrderFromLocalStorage(){this.otiumOrderIsEmpty()||(this.arrOrderLine=JSON.parse(localStorage.getItem(this.otiumOrder)))}mostrarModal(t){return(0,m.mG)(this,void 0,void 0,function*(){const e=t,r=yield this.modalCtrl.create({component:f._,cssClass:"my-custom-class",componentProps:{modalInfo:e}});yield r.present()})}getIdExtraActivatedNow(t){!0===t.detail.checked?this.addClassExtraChecked(t.target.id):this.deleteClassExtraChecked(t.target.id)}addClassExtraChecked(t){document.getElementById(t).classList.add(this.extraChecked)}deleteClassExtraChecked(t){document.getElementById(t).classList.remove(this.extraChecked)}onChangeAmount(t,e){console.log("event ->",e),setTimeout(()=>{document.getElementById(`prod_${t.idProduct}-${this.cardProductPrice}`).innerText=Number(this.getUnitPrice(t)).toFixed(2)+"\u20ac"},100)}getPriceProductsWithExtras(t){const e=this.getUnitPrice(t)*this.getProductAmount(t.idProduct);return console.log("Total -> ",e),e}getUnitPrice(t){return t.price+this.getPriceOfExtrasActive(t)}getProductAmount(t){const e=document.getElementById(`prod_${t}-${this.inputAmount}`).value;return parseInt(e,10)}getPriceOfExtrasActive(t){let e=0;const r=this.getIdExtrasActive(t);return 0===r.length?0:(t.extras.forEach(t=>r.forEach(r=>{t.idExtra===parseInt(r,10)&&(e+=t.price),console.log("price -> ",e)})),e)}getIdExtrasActive(t){const e=document.querySelectorAll(`.${this.extra}-prod_${t.idProduct}`),r=[];return e.forEach(t=>{t.className.includes(this.extraChecked)&&r.push(t.id.slice(-2).replace("_",""))}),r}onClickAdd(t){const e=document.getElementById(t);e.value=(parseInt(e.value,10)+1).toString()}onClickSubtract(t){const e=document.getElementById(t);parseInt(e.value,10)>1&&(e.value=(parseInt(e.value,10)-1).toString())}addToCart(t){this.arrOrderLine.length=0;const e=new O(this.arrOrderLine.length,t.idProduct,t.type,this.getTextToCodeExtrasAndAllergy(t),t.name,this.getExtrasActive(t),this.getTextInputAllergyAndPreferences(t.idProduct),this.getProductAmount(t.idProduct),this.getPriceProductsWithExtras(t),this.getUnitPrice(t));this.otiumOrderIsEmpty()?(this.arrOrderLine.push(e),localStorage.setItem(this.otiumOrder,JSON.stringify(this.arrOrderLine))):(this.arrOrderLine=JSON.parse(localStorage.getItem(this.otiumOrder)),e.idLine=this.arrOrderLine.length,this.isSameProductJoinAmountAndPrice(this.arrOrderLine,e)||this.arrOrderLine.push(e),localStorage.removeItem(this.otiumOrder),localStorage.setItem(this.otiumOrder,JSON.stringify(this.arrOrderLine))),console.log("ARRAY ORDER LINE -> ",this.arrOrderLine),this.updateViewPriceAndAmount()}updateViewPriceAndAmount(){this.cartData.totalPrice=this.getTotalPrice(),this.cartData.totalAmount=this.getTotalProductsInOrder(),this.dataService.updateCartData(this.cartData)}getTextToCodeExtrasAndAllergy(t){return[t.idProduct,this.getIdExtrasActive(t).join("-"),this.getTextInputAllergyAndPreferences(t.idProduct).replace(/ /gi,"-")].join("-")}getExtrasActive(t){var e;const r=[],n=this.getIdExtrasActive(t);return(null===(e=t.extras)||void 0===e?void 0:e.length)>0&&t.extras.forEach(t=>{n.forEach(e=>{t.idExtra===parseInt(e,10)&&r.push(t)})}),r}getTextInputAllergyAndPreferences(t){return document.getElementById(`prod_${t}-${this.inputPreferences}`).value}otiumOrderIsEmpty(){return null===localStorage.getItem(this.otiumOrder)}isSameProductJoinAmountAndPrice(t,e){const r=this.isAlreadyInOrder(t,e);return-1!==r&&(t[r].amount+=e.amount,t[r].price+=e.price,!0)}showTotalPriceInCart(){this.totalPrice.emit(this.getTotalPrice())}isAlreadyInOrder(t,e){return t.findIndex(t=>t.codeExtrasAndAllergy===e.codeExtrasAndAllergy)}getTotalPrice(){let t=0;return this.arrOrderLine.forEach(e=>{t+=e.price}),t}loadMenuData(t,e=0){this.arrRestaurantMenuDataShow=this.arrRestaurantMenuData.filter(0===e?e=>e.type===t:r=>r.type===t&&r.idCategory===e)}loadCategoryOfMenu(){let t=[];this.arrRestaurantMenuData.forEach(e=>{t.push(this.arrRestaurantMenuCategory.find(t=>t.idCategory===e.idCategory))}),t=Array.from(new Set(t)),t=t.filter(t=>t.type===this.foodOrDrink.typeShow),this.categoryOnMenu.emit(t)}getTotalProductsInOrder(){let t=0;return this.arrOrderLine.forEach(e=>{t+=e.amount}),this.totalProductsInOrder.emit(t),t}toggleFavourite(t){this.toggleFavouriteProductArr(t),this.toggleFavouriteIcon(t)}toggleFavouriteProductArr(t){const e=this.arrProductsFavourite.findIndex(e=>e===t.target.id);-1===e?this.arrProductsFavourite.push(t.target.id):this.arrProductsFavourite.splice(e,1),console.log("FAVOURITES -> ",this.arrProductsFavourite)}toggleFavouriteIcon(t){const e=document.getElementById(t.target.id),r=e.getAttribute("name");e.setAttribute("name","heart-outline"===r?"heart":"heart-outline")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a.IN),s.Y36(d.D),s.Y36(C.f))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-card-productos"]],inputs:{typeShow:"typeShow",idCategoryFilter:"idCategoryFilter"},outputs:{totalProductsInOrder:"totalProductsInOrder",totalPrice:"totalPrice",categoryOnMenu:"categoryOnMenu"},features:[s.TTD],decls:2,vars:2,consts:[[1,"item-slides",3,"options"],[4,"ngFor","ngForOf"],[1,"slide-content"],[1,"item-card"],[3,"src","alt","click"],["name","search-circle-outline",1,"icon-zoom",3,"click"],["color","danger","name","heart-outline",1,"icon-favourite",3,"id","click"],[1,"card-content"],[1,"text-product"],["fixed","",1,"ion-no-padding"],["size","9"],["size","0.5"],["size","2.5",1,"ion-text-right","ion-no-padding"],[3,"id"],["class","center-extras",4,"ngFor","ngForOf"],[1,"smaller-font"],["type","text","placeholder","Write your preferences",1,"ion-input",3,"id"],[1,"amount-and-add"],["name","add-circle-outline","color","success",1,"ion-icon",3,"click"],["type","number","min","1","step","1","value","1",1,"input_amount",3,"id"],["name","remove-circle-outline","color","danger",1,"ion-icon","margin-right",3,"click"],["expand","block","shape","round",1,"item-button-add",3,"id","click"],[1,"center-extras"],[3,"id","ionChange"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-slides",0),s.YNc(1,A,32,23,"ion-slide",1),s.qZA()),2&t&&(s.Q6J("options",e.slideOptsCard),s.xp6(1),s.Q6J("ngForOf",e.arrRestaurantMenuDataShow))},directives:[a.Hr,i.sg,a.A$,a.gu,a.jY,a.Nd,a.wI,a.Q$,a.pK,a.j9,a.as,a.YG,a.ho,a.w],pipes:[i.JJ],styles:[".item-slides[_ngcontent-%COMP%]{height:77%!important;margin:0 0 2% 4%}.slide-content[_ngcontent-%COMP%]{height:100%}.item-card[_ngcontent-%COMP%]{margin:0 auto;width:105%}.card-content[_ngcontent-%COMP%], .item-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.card-content[_ngcontent-%COMP%]{padding:0 8% 8%;border:2px solid var(--ion-color-primary);border-top:none;border-radius:0 0 1.5625rem 0;justify-content:space-between}.item-card__top-up-jpg[_ngcontent-%COMP%]{position:relative}.item-card__top-up-png[_ngcontent-%COMP%]{position:relative;border-radius:1.5625rem 0 0 0;border:2px solid var(--ion-color-primary);border-bottom:none;min-width:330px}.img-card-jpg[_ngcontent-%COMP%]{width:100%}.img-card-jpg[_ngcontent-%COMP%], .img-card-png[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;max-height:11rem;border-radius:1.5625rem 0 0 0}.img-card-png[_ngcontent-%COMP%]{margin-left:1.25rem;margin-top:.625rem}.icon-zoom[_ngcontent-%COMP%]{position:absolute;bottom:.3125rem;left:.3125rem;background-color:#fff;border-radius:.9375rem}.icon-favourite[_ngcontent-%COMP%]{font-size:1.75rem;position:absolute;top:.9375rem;right:.9375rem}.text-product[_ngcontent-%COMP%]{text-align:left}.text-description[_ngcontent-%COMP%]{margin-top:2%;margin-left:4%;margin-bottom:.625rem}.text-description-p[_ngcontent-%COMP%]{margin:0}.center-extras[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.ion-toggle[_ngcontent-%COMP%]{height:1.5625rem;padding:1% 0;margin-bottom:.5rem}.smaller-font[_ngcontent-%COMP%]{font-size:smaller}.ion-input[_ngcontent-%COMP%]{border-radius:1.5625rem;border:2px solid var(--ion-color-login-input-border);margin-top:.625rem;margin-bottom:.625rem;width:100%}.amount-and-add[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.input_amount[_ngcontent-%COMP%]{--padding-start:5px;border-bottom:2px solid var(--ion-color-login-input-border);width:35px;height:27.3px}.margin-right[_ngcontent-%COMP%]{margin-right:1.25rem}.item-button-add[_ngcontent-%COMP%]{width:130px}.ion-icon[_ngcontent-%COMP%]{height:1.875rem;width:1.875rem}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (max-width: 376px){.slide-content[_ngcontent-%COMP%]{height:95%}.card-content[_ngcontent-%COMP%]{padding:0 8% 4%}.item-card[_ngcontent-%COMP%]{height:95%;width:80vw}.item-card__top-up-png[_ngcontent-%COMP%]{min-width:270px}.center-extras[_ngcontent-%COMP%], .text-product[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:14px}h3[_ngcontent-%COMP%]{font-size:18px}.ion-input[_ngcontent-%COMP%], .smaller-font[_ngcontent-%COMP%]{font-size:13px}.item-button-add[_ngcontent-%COMP%]{height:30px}}"]}),t})();function y(t,e){if(1&t&&(s.TgZ(0,"ion-badge",18),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.cartData.totalAmount)}}function b(t,e){if(1&t&&(s.TgZ(0,"h3",19),s._uU(1),s.ALo(2,"number"),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.hij("",s.xi3(2,1,t.cartData.totalPrice,"1.2-2"),"\u20ac")}}function _(t,e){1&t&&(s.TgZ(0,"h3",19),s._uU(1,"0\u20ac"),s.qZA())}let Z=(()=>{class t{constructor(t,e){this.router=t,this.dataService=e,this.iconSrc="",this.bkgColor=""}ngOnInit(){this.dataService.currentFoodOrDrink.subscribe(t=>this.foodOrDrink=t),this.dataService.currendCartData.subscribe(t=>this.cartData=t)}goToOrder(){this.router.navigate(["/pedido"])}toggleFoodOrDrink(){this.dataService.selectedFoodOrDrink(this.foodOrDrink===this.dataService.drink?this.dataService.food:this.dataService.drink)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.F0),s.Y36(d.D))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-cart-and-total"]],inputs:{iconSrc:"iconSrc",bkgColor:"bkgColor"},decls:26,vars:5,consts:[["fixed","",1,"ion-no-padding","ion-margin-top"],["size","1"],["size","3"],["class","cart__text","color","primary","mode","ios",4,"ngIf"],["name","cart-outline",1,"cart__cart","icon-cart"],["size","5",1,"ion-text-center"],["class","margin-none",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["side","start"],[1,"ion-fab__button",3,"click"],["fixed",""],["size","3",1,"ion-fab__col-ion-img"],["src","/assets/icon/pay-eurocoin.png"],["size","6",1,"ion-fab__col-label"],["side","top"],[3,"color","click"],[1,"icon-size",3,"src"],["color","primary","mode","ios",1,"cart__text"],[1,"margin-none"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-grid",0),s.TgZ(1,"ion-row"),s._UZ(2,"ion-col",1),s.TgZ(3,"ion-col",2),s.YNc(4,y,2,1,"ion-badge",3),s._UZ(5,"ion-icon",4),s.qZA(),s.TgZ(6,"ion-col",5),s.YNc(7,b,3,4,"h3",6),s.YNc(8,_,2,0,"h3",6),s.qZA(),s._UZ(9,"ion-col",2),s.qZA(),s.qZA(),s.TgZ(10,"ion-fab",7),s.TgZ(11,"ion-fab-button"),s._UZ(12,"ion-icon",8),s.qZA(),s.TgZ(13,"ion-fab-list",9),s.TgZ(14,"ion-button",10),s.NdJ("click",function(){return e.goToOrder()}),s.TgZ(15,"ion-grid",11),s.TgZ(16,"ion-row"),s.TgZ(17,"ion-col",12),s._UZ(18,"ion-img",13),s.qZA(),s.TgZ(19,"ion-col",14),s.TgZ(20,"ion-label"),s._uU(21,"PAY"),s.qZA(),s.qZA(),s._UZ(22,"ion-col",2),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(23,"ion-fab-list",15),s.TgZ(24,"ion-fab-button",16),s.NdJ("click",function(){return e.toggleFoodOrDrink()}),s._UZ(25,"ion-img",17),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("ngIf",e.cartData.totalAmount>0),s.xp6(3),s.Q6J("ngIf",e.cartData.totalPrice>0),s.xp6(1),s.Q6J("ngIf",e.cartData.totalPrice<=0),s.xp6(16),s.Q6J("color",e.bkgColor),s.xp6(1),s.Q6J("src",e.iconSrc))},directives:[a.jY,a.Nd,a.wI,i.O5,a.gu,a.IJ,a.W4,a.zq,a.YG,a.Xz,a.Q$,a.yp],pipes:[i.JJ],styles:[".cart[_ngcontent-%COMP%]{position:relative;height:3.125rem;background-color:red}.cart__text[_ngcontent-%COMP%]{position:absolute;top:-.0625rem;left:1.6875rem}.cart__cart[_ngcontent-%COMP%]{position:absolute;top:4px;left:1%}.icon-cart[_ngcontent-%COMP%]{width:40px!important;height:40px!important}.ion-fab__button[_ngcontent-%COMP%]{width:12.5rem;height:3.125rem;--border-radius:2.1875rem}.ion-fab__col-ion-img[_ngcontent-%COMP%]{padding:0}.ion-fab__col-label[_ngcontent-%COMP%]{margin:auto}.icon-size[_ngcontent-%COMP%]{width:30px!important;height:30px!important}.margin-none[_ngcontent-%COMP%]{margin:0}"]}),t})();const M=[{path:"",component:(()=>{class t{constructor(t,e){this.dataService=t,this.databaseService=e,this.categoryOnMenu=[]}ngOnInit(){this.dataService.currentFoodOrDrink.subscribe(t=>this.foodOrDrink=t),this.dataService.currendCartData.subscribe(t=>this.cartData=t),this.dataService.currentRestaurantData.subscribe(t=>this.restaurantData=t)}ngOnDestroy(){}getCategoryOnMenu(t){this.categoryOnMenu=t}getIdCategoryFilter(t){this.idCategoryFilter=t}getTotalProductsInOrder(t){this.totalProductsInOrder=t}getTotalPrice(t){this.totalPrice=t}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(d.D),s.Y36(l.k))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-restaurant-menu"]],decls:6,vars:7,consts:[[3,"imgHeader"],[3,"typeShow","categoryOnMenu","idCategoryItemEvent"],[3,"typeShow","idCategoryFilter","categoryOnMenu","totalProductsInOrder","totalPrice"],[3,"iconSrc","bkgColor"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s._UZ(1,"app-header",0),s.qZA(),s.TgZ(2,"ion-content"),s.TgZ(3,"app-card-categorias",1),s.NdJ("idCategoryItemEvent",function(t){return e.getIdCategoryFilter(t)}),s.qZA(),s.TgZ(4,"app-card-productos",2),s.NdJ("categoryOnMenu",function(t){return e.getCategoryOnMenu(t)})("totalProductsInOrder",function(t){return e.getTotalProductsInOrder(t)})("totalPrice",function(t){return e.getTotalPrice(t)}),s.qZA(),s._UZ(5,"app-cart-and-total",3),s.qZA()),2&t&&(s.xp6(1),s.Q6J("imgHeader",e.restaurantData.img),s.xp6(2),s.Q6J("typeShow",e.foodOrDrink.typeShow)("categoryOnMenu",e.categoryOnMenu),s.xp6(1),s.Q6J("typeShow",e.foodOrDrink.typeShow)("idCategoryFilter",e.idCategoryFilter),s.xp6(1),s.Q6J("iconSrc",e.foodOrDrink.iconSrc)("bkgColor",e.foodOrDrink.bkgColor))},directives:[a.Gu,u.G,a.W2,h,x,Z],styles:[""]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(M)],c.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,o.u5,a.Pc,v,n.K]]}),t})()}}]);