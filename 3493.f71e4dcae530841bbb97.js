(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[3493],{5302:(t,e,n)=>{"use strict";n.d(e,{U:()=>c});var r=n(7272),o=n(4683),i=n(6274);function a(t,e){if(1&t&&r._UZ(0,"img",6),2&t){const t=r.oxw().$implicit;r.MGl("src","",t.icon," ",r.LSH),r.MGl("alt","",t.btnName," ")}}function s(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"ion-slide"),r.TgZ(1,"ion-button",3),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().btnFilterCategory(e.idCategory)}),r.TgZ(2,"div",4),r.YNc(3,a,1,2,"img",5),r._uU(4),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(1),r.MGl("id","btnCategory",t.idCategory,""),r.xp6(2),r.Q6J("ngIf",t.icon),r.xp6(1),r.hij(" ",t.btnName," ")}}let c=(()=>{class t{constructor(){this.categoryOnMenu=[],this.idCategoryItemEvent=new r.vpe,this.idCategoryShow=null,this.slideOptsButton={slidesPerView:2.5,breakpoints:{375:{slidesPerView:3.4},640:{slidesPerView:6.1}}},this.idCategoryItemEvent=new r.vpe}ngOnInit(){}btnFilterCategory(t){this.idCategoryItemEvent.emit(t),console.log("CATEGORY EN CHILD:",t),this.btnDeleteClassSelected(),this.btnAddClassSelected(t)}btnDeleteClassSelected(){document.querySelectorAll(".category-selected").forEach(t=>{t.classList.remove("category-selected"),t.setAttribute("fill","outline")})}btnAddClassSelected(t){if(0===t)document.querySelectorAll(".btnCategory0").forEach(t=>{t.classList.add("category-selected"),t.setAttribute("fill","solid")});else{console.log("btnCategory"+t);const e=document.getElementById("btnCategory"+t);e.classList.add("category-selected"),e.setAttribute("fill","solid")}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-card-categorias"]],inputs:{categoryOnMenu:"categoryOnMenu"},outputs:{idCategoryItemEvent:"idCategoryItemEvent"},decls:5,vars:2,consts:[[1,"button-slides",3,"options"],["mode","ios","color","primary","expand","block","fill","solid",1,"btnCategory0","ion-button","category-selected",3,"click"],[4,"ngFor","ngForOf"],["mode","ios","color","primary","expand","block","fill","outline",1,"ion-button",3,"id","click"],[1,"ion-button-content"],[3,"src","alt",4,"ngIf"],[3,"src","alt"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-slides",0),r.TgZ(1,"ion-slide"),r.TgZ(2,"ion-button",1),r.NdJ("click",function(){return e.btnFilterCategory(0)}),r._uU(3,"All"),r.qZA(),r.qZA(),r.YNc(4,s,5,3,"ion-slide",2),r.qZA()),2&t&&(r.Q6J("options",e.slideOptsButton),r.xp6(4),r.Q6J("ngForOf",e.categoryOnMenu))},directives:[o.Hr,o.A$,o.YG,i.sg,i.O5],styles:[".button-slides[_ngcontent-%COMP%]{margin-top:1%;margin-bottom:1%}.ion-button[_ngcontent-%COMP%]{width:6.25rem!important;height:3.75rem!important}.ion-button-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.ion-button-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem}@media screen and (min-width: 411px) and (max-width: 640px){.ion-button[_ngcontent-%COMP%]{font-size:1.0625rem;width:7.5rem!important;height:4.5rem!important}.ion-button-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:3rem}}"]}),t})()},3449:(t,e,n)=>{"use strict";n.d(e,{L:()=>p});var r=n(1855),o=n(7272),i=n(4396),a=n(1486),s=n(4683),c=n(5897),d=n(6274);function l(t,e){if(1&t&&(o.TgZ(0,"p",18),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.Oqu(t.line)}}function u(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",19),o.TgZ(1,"ion-label"),o._uU(2),o.qZA(),o.TgZ(3,"ion-toggle",20),o.NdJ("ionChange",function(e){o.CHM(t);const n=o.oxw().$implicit;return o.oxw().onChangeAmount(n,e)})("ionChange",function(e){return o.CHM(t),o.oxw(2).getIdExtraActivatedNow(e)}),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,n=o.oxw().$implicit,r=o.oxw();o.xp6(2),o.AsE(" ",t.name," + ",t.price,"\u20ac "),o.xp6(1),o.MT6("ion-toggle ",r.extra,"-prod_",n.idProduct,""),o.cQ8("id","prod_",n.idProduct,"-",r.extra,"_",t.idExtra,"")}}function g(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"ion-slide"),o.TgZ(1,"div",2),o.TgZ(2,"div",3),o.TgZ(3,"div"),o.TgZ(4,"img",4),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().mostrarModal(e)}),o.qZA(),o.TgZ(5,"ion-icon",5),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().mostrarModal(e)}),o.qZA(),o.TgZ(6,"ion-icon",6),o.NdJ("click",function(e){return o.CHM(t),o.oxw().toggleFavourite(e)}),o.qZA(),o.qZA(),o.TgZ(7,"div",7),o.TgZ(8,"div",8),o.TgZ(9,"h6"),o.TgZ(10,"strong"),o._uU(11),o.qZA(),o.qZA(),o.TgZ(12,"div",9),o.YNc(13,l,2,1,"p",10),o.qZA(),o.qZA(),o.TgZ(14,"div"),o.YNc(15,u,4,9,"div",11),o.qZA(),o.TgZ(16,"div"),o.TgZ(17,"ion-label",12),o._uU(18," Let us know any allergy or preference "),o.qZA(),o._UZ(19,"input",13),o.qZA(),o.TgZ(20,"div",14),o.TgZ(21,"h3",15),o._uU(22),o.qZA(),o.TgZ(23,"input",16),o.NdJ("change",function(e){const n=o.CHM(t).$implicit;return o.oxw().onChangeAmount(n,e)}),o.qZA(),o.TgZ(24,"ion-button",17),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().addToCart(e)}),o._uU(25,"ADD TO CART"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit,n=o.oxw();o.xp6(3),o.Gre("item-card__top-up-",t.img.slice(-3),""),o.xp6(1),o.Gre("img-card-",t.img.slice(-3),""),o.s9C("src",t.img,o.LSH),o.s9C("alt",t.name),o.xp6(2),o.hYB("id","prod_",t.idProduct,"-",n.favourite,""),o.xp6(5),o.Oqu(t.name),o.xp6(2),o.Q6J("ngForOf",t.description),o.xp6(2),o.Q6J("ngForOf",t.extras),o.xp6(4),o.hYB("id","prod_",t.idProduct,"-",n.inputPreferences,""),o.xp6(2),o.hYB("id","prod_",t.idProduct,"-",n.cardProductPrice,""),o.xp6(1),o.hij("",t.price,"\u20ac"),o.xp6(1),o.hYB("id","prod_",t.idProduct,"-",n.inputAmount,""),o.xp6(1),o.s9C("id",t.name)}}let p=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.dataService=e,this.idCategoryFilter=0,this.slideOptsCard={slidesPerView:1.1,breakpoints:{410:{slidesPerView:1.1},640:{slidesPerView:1.7,spaceBetween:20}}},this.extraChecked="extra-checked",this.inputAmount="input_amount",this.extra="extra",this.cardProductPrice="card_product_price",this.inputPreferences="input_preferences",this.otiumOrder="otium-order",this.favourite="favourite",this.arrOrderLine=[],this.arrProductsFavourite=[],this.totalProductsInOrder=new o.vpe,this.totalPrice=new o.vpe,this.categoryOnMenu=new o.vpe}ngOnInit(){this.restaurantMenuData=this.dataService.getRestaurantMenu(),this.restaurantMenuCategory=this.dataService.getRestaurantMenuCategory(),this.restaurantMenuData.subscribe(t=>{this.arrRestaurantMenuData=t,this.loadMenuData(this.typeShow),this.restaurantMenuCategory.subscribe(t=>{this.arrRestaurantMenuCategory=t,this.loadCategoryOfMenu()})}),this.loadOrderFromLocalStorage(),this.showTotalPriceInCart(),this.getTotalProductsInOrder()}ngOnChanges(t){console.log("CHANGES -> ",t),console.log("CHANGE ID CATEGORY FILTER",this.idCategoryFilter),setTimeout(()=>{this.loadMenuData(this.typeShow,this.idCategoryFilter)},500)}loadOrderFromLocalStorage(){this.otiumOrderIsEmpty()||(this.arrOrderLine=JSON.parse(localStorage.getItem(this.otiumOrder)))}mostrarModal(t){return(0,r.mG)(this,void 0,void 0,function*(){const e=t,n=yield this.modalCtrl.create({component:i._,cssClass:"my-custom-class",componentProps:{modalInfo:e}});yield n.present()})}getIdExtraActivatedNow(t){!0===t.detail.checked?this.addClassExtraChecked(t.target.id):this.deleteClassExtraChecked(t.target.id)}addClassExtraChecked(t){document.getElementById(t).classList.add(this.extraChecked)}deleteClassExtraChecked(t){document.getElementById(t).classList.remove(this.extraChecked)}onChangeAmount(t,e){console.log("event ->",e),setTimeout(()=>{document.getElementById(`prod_${t.idProduct}-${this.cardProductPrice}`).innerText=this.getPriceProductWithExtras(t).toString()+"\u20ac"},100)}getPriceProductWithExtras(t){const e=this.getUnitPrice(t)*this.getProductAmount(t.idProduct);return console.log("Total -> ",e),e}getUnitPrice(t){return t.price+this.getPriceOfExtrasActive(t)}getProductAmount(t){const e=document.getElementById(`prod_${t}-${this.inputAmount}`).value;return parseInt(e,10)}getPriceOfExtrasActive(t){let e=0;const n=this.getIdExtrasActive(t);return 0===n.length?0:(t.extras.forEach(t=>n.forEach(n=>{t.idExtra===parseInt(n,10)&&(e+=t.price),console.log("price -> ",e)})),e)}getIdExtrasActive(t){const e=document.querySelectorAll(`.${this.extra}-prod_${t.idProduct}`),n=[];return e.forEach(t=>{t.className.includes(this.extraChecked)&&n.push(t.id.slice(-2).replace("_",""))}),console.log("idExtrasActive -> ",n),n}addToCart(t){this.arrOrderLine.length=0;const e=new a.H(1,this.arrOrderLine.length,t.idProduct,this.getTextToCodeExtrasAndAllergy(t),t.name,this.getExtrasActive(t),this.getTextInputAllergyAndPreferences(t.idProduct),this.getProductAmount(t.idProduct),this.getPriceProductWithExtras(t),this.getUnitPrice(t));this.otiumOrderIsEmpty()?(this.arrOrderLine.push(e),localStorage.setItem(this.otiumOrder,JSON.stringify(this.arrOrderLine))):(this.arrOrderLine=JSON.parse(localStorage.getItem(this.otiumOrder)),e.idLine=this.arrOrderLine.length,this.isSameProductJoinAmountAndPrice(this.arrOrderLine,e)||this.arrOrderLine.push(e),localStorage.removeItem(this.otiumOrder),localStorage.setItem(this.otiumOrder,JSON.stringify(this.arrOrderLine))),console.log("ARRAY ORDER LINE -> ",this.arrOrderLine),this.showTotalPriceInCart(),this.getTotalProductsInOrder()}getTextToCodeExtrasAndAllergy(t){return[t.idProduct,this.getIdExtrasActive(t).join("-"),this.getTextInputAllergyAndPreferences(t.idProduct).replace(/ /gi,"-")].join("-")}getExtrasActive(t){var e;const n=[],r=this.getIdExtrasActive(t);return(null===(e=t.extras)||void 0===e?void 0:e.length)>0&&t.extras.forEach(t=>{r.forEach(e=>{t.idExtra===parseInt(e,10)&&n.push(t)})}),n}getTextInputAllergyAndPreferences(t){return document.getElementById(`prod_${t}-${this.inputPreferences}`).value}otiumOrderIsEmpty(){return null===localStorage.getItem(this.otiumOrder)}isSameProductJoinAmountAndPrice(t,e){const n=this.isAlreadyInOrder(t,e);return-1!==n&&(t[n].amount+=e.amount,t[n].price+=e.price,!0)}showTotalPriceInCart(){this.totalPrice.emit(this.getTotalPrice())}isAlreadyInOrder(t,e){return t.findIndex(t=>t.codeExtrasAndAllergy===e.codeExtrasAndAllergy)}getTotalPrice(){let t=0;return this.arrOrderLine.forEach(e=>{t+=e.price}),console.log("TOTAL PRICE -> ",t),t}loadMenuData(t,e=0){this.arrRestaurantMenuDataShow=this.arrRestaurantMenuData.filter(0===e?e=>e.type===t:n=>n.type===t&&n.idCategory===e)}loadCategoryOfMenu(){console.log("ARRAY DATA: ->>>",this.arrRestaurantMenuData),console.log("ARRAY CATEGORY: ->>>",this.arrRestaurantMenuCategory);let t=[];this.arrRestaurantMenuData.forEach(e=>{t.push(this.arrRestaurantMenuCategory.find(t=>t.idCategory===e.idCategory))}),t=Array.from(new Set(t)),t=t.filter(t=>t.type===this.typeShow),console.log("CATEGORY ON MENU -> ",this.categoryOnMenu),this.categoryOnMenu.emit(t)}getTotalProductsInOrder(){let t=0;this.arrOrderLine.forEach(e=>{t+=e.amount}),this.totalProductsInOrder.emit(t)}toggleFavourite(t){this.toggleFavouriteProductArr(t),this.toggleFavouriteIcon(t)}toggleFavouriteProductArr(t){const e=this.arrProductsFavourite.findIndex(e=>e===t.target.id);-1===e?this.arrProductsFavourite.push(t.target.id):this.arrProductsFavourite.splice(e,1),console.log("FAVOURITES -> ",this.arrProductsFavourite)}toggleFavouriteIcon(t){const e=document.getElementById(t.target.id),n=e.getAttribute("name");e.setAttribute("name","heart-outline"===n?"heart":"heart-outline")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.IN),o.Y36(c.D))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-card-productos"]],inputs:{typeShow:"typeShow",idCategoryFilter:"idCategoryFilter"},outputs:{totalProductsInOrder:"totalProductsInOrder",totalPrice:"totalPrice",categoryOnMenu:"categoryOnMenu"},features:[o.TTD],decls:2,vars:2,consts:[[1,"item-slides",3,"options"],[4,"ngFor","ngForOf"],[1,"slide-content"],[1,"item-card"],[3,"src","alt","click"],["name","search-circle-outline",1,"icon-zoom",3,"click"],["color","danger","name","heart-outline",1,"icon-favourite",3,"id","click"],[1,"card-content"],[1,"text-product"],[1,"text-description"],["class","text-description-p",4,"ngFor","ngForOf"],["class","center-extras",4,"ngFor","ngForOf"],[1,"smaller-font"],["type","text","placeholder","Input field",1,"ion-input",3,"id"],[1,"amount-and-add"],[3,"id"],["type","number","min","1","value","1",1,"input_amount",3,"id","change"],["expand","block","shape","round",1,"item-button-add",3,"id","click"],[1,"text-description-p"],[1,"center-extras"],[3,"id","ionChange"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-slides",0),o.YNc(1,g,26,21,"ion-slide",1),o.qZA()),2&t&&(o.Q6J("options",e.slideOptsCard),o.xp6(1),o.Q6J("ngForOf",e.arrRestaurantMenuDataShow))},directives:[s.Hr,d.sg,s.A$,s.gu,s.Q$,s.YG,s.ho,s.w],styles:[".item-slides[_ngcontent-%COMP%]{height:77%!important;margin:0 0 2% 4%}.slide-content[_ngcontent-%COMP%]{height:100%}.item-card[_ngcontent-%COMP%]{margin:0 auto;width:95%}.card-content[_ngcontent-%COMP%], .item-card[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.card-content[_ngcontent-%COMP%]{padding:0 8% 8%;border:2px solid var(--ion-color-primary);border-top:none;border-radius:0 0 1.5625rem 0;justify-content:space-between}.item-card__top-up-jpg[_ngcontent-%COMP%]{position:relative}.item-card__top-up-png[_ngcontent-%COMP%]{position:relative;border-radius:1.5625rem 0 0 0;border:2px solid var(--ion-color-primary);border-bottom:none}.img-card-jpg[_ngcontent-%COMP%]{width:100%}.img-card-jpg[_ngcontent-%COMP%], .img-card-png[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;max-height:11rem;border-radius:1.5625rem 0 0 0}.img-card-png[_ngcontent-%COMP%]{margin-left:1.25rem;margin-top:.625rem}.icon-zoom[_ngcontent-%COMP%]{position:absolute;bottom:.3125rem;left:.3125rem;background-color:#fff;border-radius:.9375rem}.icon-favourite[_ngcontent-%COMP%]{font-size:1.75rem;position:absolute;top:.9375rem;right:.9375rem}.text-product[_ngcontent-%COMP%]{text-align:left}.text-description[_ngcontent-%COMP%]{margin-top:2%;margin-left:4%;margin-bottom:.625rem}.text-description-p[_ngcontent-%COMP%]{margin:0}.center-extras[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.ion-toggle[_ngcontent-%COMP%]{height:1.5625rem;padding:1% 0}.smaller-font[_ngcontent-%COMP%]{font-size:smaller}.ion-input[_ngcontent-%COMP%]{padding-left:1.25rem;border-radius:.9375rem;border:2px solid var(--ion-color-login-input-border);margin-top:.3125rem;margin-bottom:.625rem;width:100%}.amount-and-add[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.input_amount[_ngcontent-%COMP%]{--padding-start:5px;border:2px solid var(--ion-color-login-input-border);width:35px;height:27.3px}.item-button-add[_ngcontent-%COMP%]{width:130px}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (max-width: 376px){.slide-content[_ngcontent-%COMP%]{height:95%}.card-content[_ngcontent-%COMP%]{padding:0 8% 4%}.item-card[_ngcontent-%COMP%]{height:95%;width:84%}.center-extras[_ngcontent-%COMP%], .text-product[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:14px}h3[_ngcontent-%COMP%]{font-size:18px}.ion-input[_ngcontent-%COMP%], .smaller-font[_ngcontent-%COMP%]{font-size:13px}.item-button-add[_ngcontent-%COMP%]{height:30px}}"]}),t})()},5207:(t,e,n)=>{"use strict";n.d(e,{q:()=>d});var r=n(7272),o=n(3722),i=n(6274),a=n(4683);function s(t,e){if(1&t&&(r.TgZ(0,"ion-badge",18),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.Oqu(t.totalProductsInOrder)}}function c(t,e){if(1&t&&(r.TgZ(0,"h3",19),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij("",t.totalPrice,"\u20ac")}}let d=(()=>{class t{constructor(t){this.router=t,this.route="",this.iconSrc="",this.bkgColor="",this.totalProductsInOrder=0,this.totalPrice=0}ngOnInit(){}goToRoute(){this.router.navigate([this.route])}goToOrder(){this.router.navigate(["/pedido"])}orderFood(){this.router.navigate(["/restaurant-menu-food"])}orderDrink(){this.router.navigate(["/restaurant-menu-drink"])}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.F0))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-cart-and-total"]],inputs:{route:"route",iconSrc:"iconSrc",bkgColor:"bkgColor",totalProductsInOrder:"totalProductsInOrder",totalPrice:"totalPrice"},decls:22,vars:4,consts:[[1,"content-down"],[1,"content-down-flex"],[1,"cart"],["class","cart__text","color","primary","mode","ios",4,"ngIf"],["name","cart-outline",1,"cart__cart","icon-cart"],["id","total-price",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["side","start"],[1,"ion-fab__button",3,"click"],["fixed",""],["size","3",1,"ion-fab__col-ion-img"],["src","/assets/icon/pay-eurocoin.png"],["size","6",1,"ion-fab__col-label"],["size","3"],["side","top"],[3,"color","click"],[1,"icon-size",3,"src"],["color","primary","mode","ios",1,"cart__text"],["id","total-price"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.YNc(3,s,2,1,"ion-badge",3),r._UZ(4,"ion-icon",4),r.qZA(),r.YNc(5,c,2,1,"h3",5),r.qZA(),r.qZA(),r.TgZ(6,"ion-fab",6),r.TgZ(7,"ion-fab-button"),r._UZ(8,"ion-icon",7),r.qZA(),r.TgZ(9,"ion-fab-list",8),r.TgZ(10,"ion-button",9),r.NdJ("click",function(){return e.goToOrder()}),r.TgZ(11,"ion-grid",10),r.TgZ(12,"ion-row"),r.TgZ(13,"ion-col",11),r._UZ(14,"ion-img",12),r.qZA(),r.TgZ(15,"ion-col",13),r.TgZ(16,"ion-label"),r._uU(17,"PAGAR"),r.qZA(),r.qZA(),r._UZ(18,"ion-col",14),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(19,"ion-fab-list",15),r.TgZ(20,"ion-fab-button",16),r.NdJ("click",function(){return e.goToRoute()}),r._UZ(21,"ion-img",17),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Q6J("ngIf",e.totalProductsInOrder>0),r.xp6(2),r.Q6J("ngIf",e.totalPrice>0),r.xp6(15),r.Q6J("color",e.bkgColor),r.xp6(1),r.Q6J("src",e.iconSrc))},directives:[i.O5,a.gu,a.IJ,a.W4,a.zq,a.YG,a.jY,a.Nd,a.wI,a.Xz,a.Q$,a.yp],styles:[".content-down[_ngcontent-%COMP%]{position:absolute;top:92%;left:1.25rem;width:18.75rem}.content-down-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.cart[_ngcontent-%COMP%]{position:relative;height:3.125rem;background-color:red}.cart__text[_ngcontent-%COMP%]{position:absolute;top:-.0625rem;left:1.6875rem}.cart__cart[_ngcontent-%COMP%]{position:absolute;top:4px;left:1%}.icon-cart[_ngcontent-%COMP%]{width:40px!important;height:40px!important}.ion-fab__button[_ngcontent-%COMP%]{width:12.5rem;height:3.125rem;--border-radius:2.1875rem}.ion-fab__col-ion-img[_ngcontent-%COMP%]{padding:0}.ion-fab__col-label[_ngcontent-%COMP%]{margin:auto}.icon-size[_ngcontent-%COMP%]{width:30px!important;height:30px!important}"]}),t})()},9258:(t,e,n)=>{"use strict";n.d(e,{K:()=>a});var r=n(6274),o=n(4683),i=n(7272);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,o.Pc]]}),t})()},3883:(t,e,n)=>{"use strict";n.d(e,{G:()=>s});var r=n(7272),o=n(4683),i=n(3722),a=n(7611);let s=(()=>{class t{constructor(t,e,n){this.menuController=t,this.router=e,this.userservice=n,this.imgHeader="../../../assets/logos/logo_XL.png",this.imgUser=""}get loadData(){return this.userservice.getUser}ngOnInit(){let t=document.getElementById("returnarrow");console.log("this.router.url",this.router.url),"/welcome"===this.router.url&&t.remove(),setTimeout(()=>{this.dataUser=this.loadData,this.dataUser.isLoged&&(this.imgUser=this.dataUser.img)},1500)}openMenu(){this.menuController.open("header")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o._q),r.Y36(i.F0),r.Y36(a.f))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:8,vars:2,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary","id","returnarrow"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r._UZ(3,"ion-back-button",2),r.qZA(),r._UZ(4,"ion-img",3),r.TgZ(5,"ion-buttons",4),r.TgZ(6,"ion-avatar",5),r.NdJ("click",function(){return e.openMenu()}),r._UZ(7,"img",6),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(4),r.s9C("src",e.imgHeader),r.xp6(3),r.s9C("src",e.imgUser,r.LSH))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.Xz,o.BJ],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),t})()},1486:(t,e,n)=>{"use strict";n.d(e,{H:()=>r});class r{constructor(t,e,n,r,o,i,a,s,c,d){this.idOrder=t,this.idLine=e,this.idProduct=n,this.nameProduct=o,this.codeExtrasAndAllergy=r,this.extras=i,this.allergyOrPreference=a,this.amount=s,this.price=c,this.unitPrice=d}}},4396:(t,e,n)=>{"use strict";n.d(e,{_:()=>s});var r=n(7272),o=n(4683),i=n(6274);function a(t,e){if(1&t&&(r.TgZ(0,"p"),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij("",t.line," ")}}let s=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}salirSinArgumentos(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.IN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-restaurant-menu-modal"]],inputs:{modalInfo:"modalInfo"},decls:13,vars:3,consts:[[1,"ion-padding"],[1,"center-content"],[1,"ion-card"],["alt","",3,"src"],[4,"ngFor","ngForOf"],["color","primary","expand","block","fill","outline",1,"ion-button",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"ion-content",0),r.TgZ(1,"div",1),r.TgZ(2,"ion-card",2),r._UZ(3,"img",3),r.TgZ(4,"ion-card-header"),r.TgZ(5,"ion-card-subtitle"),r._uU(6,"One of our specialties"),r.qZA(),r.TgZ(7,"ion-card-title"),r._uU(8),r.qZA(),r.qZA(),r.TgZ(9,"ion-card-content"),r.YNc(10,a,2,1,"p",4),r.qZA(),r.qZA(),r.TgZ(11,"ion-button",5),r.NdJ("click",function(){return e.salirSinArgumentos()}),r._uU(12,"Return"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.MGl("src","",e.modalInfo.img," ",r.LSH),r.xp6(5),r.hij("",e.modalInfo.name," "),r.xp6(2),r.Q6J("ngForOf",e.modalInfo.description))},directives:[o.W2,o.PM,o.Zi,o.tO,o.gZ,o.FN,i.sg,o.YG],styles:[".center-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center}.ion-card[_ngcontent-%COMP%]{margin:0}.ion-button[_ngcontent-%COMP%]{margin-top:20px}.center-text[_ngcontent-%COMP%]{text-align:center;border:2px solid red}"]}),t})()},5897:(t,e,n)=>{"use strict";n.d(e,{D:()=>i});var r=n(7272),o=n(1887);let i=(()=>{class t{constructor(t){this.http=t}getRestaurantMenu(){return this.http.get("/assets/data/restaurant-menu.json")}getRestaurantMenuCategory(){return this.http.get("/assets/data/restaurant-menu-categories.json")}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);