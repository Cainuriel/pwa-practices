(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[7837],{9258:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});var o=n(6274),r=n(8620),a=n(7272);let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,r.Pc]]}),e})()},3883:(e,t,n)=>{"use strict";n.d(t,{G:()=>c});var o=n(7272),r=n(8620),a=n(8895),i=n(2149),s=n(6274);function u(e,t){1&e&&o._UZ(0,"ion-back-button",8)}function l(e,t){1&e&&o._UZ(0,"ion-button",9)}let c=(()=>{class e{constructor(e,t,n){this.menuController=e,this.router=t,this.databaseService=n,this.arrow=!0}ngOnInit(){"/welcome"!==this.router.url&&"/order-placed"!==this.router.url||(this.arrow=!1),this.databaseService.observableUser.subscribe(e=>this.dataUser=e),this.imgUser=this.dataUser.img,this.pageIconRestaurant="/select"===this.router.url||"/restaurant-menu"===this.router.url||"/pedido"===this.router.url||"/pago"===this.router.url||"/order-placed"===this.router.url||"/detail"===this.router.url,this.dataUser.themeUser&&!this.pageIconRestaurant?this.imgHeader="../../../assets/logos/Otium_Transparet_No Shadow.png":this.pageIconRestaurant||(this.imgHeader="../../../assets/logos/logo_XL.png")}openMenu(){this.menuController.open("header")}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r._q),o.Y36(a.F0),o.Y36(i.k))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-header"]],inputs:{imgHeader:"imgHeader",imgUser:"imgUser"},decls:9,vars:4,consts:[["mode","md"],["slot","start"],["defaultHref","/","color","primary",4,"ngIf"],["style","width: 48px; margin: 0;",4,"ngIf"],[1,"img-otium",3,"src"],["slot","end"],[3,"click"],[1,"avatar",3,"src"],["defaultHref","/","color","primary"],[2,"width","48px","margin","0"]],template:function(e,t){1&e&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-buttons",1),o.YNc(3,u,1,0,"ion-back-button",2),o.YNc(4,l,1,0,"ion-button",3),o.qZA(),o._UZ(5,"ion-img",4),o.TgZ(6,"ion-buttons",5),o.TgZ(7,"ion-avatar",6),o.NdJ("click",function(){return t.openMenu()}),o._UZ(8,"img",7),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(3),o.Q6J("ngIf",t.arrow),o.xp6(1),o.Q6J("ngIf",!t.arrow),o.xp6(1),o.s9C("src",t.imgHeader),o.xp6(3),o.s9C("src",t.imgUser,o.LSH))},directives:[r.Gu,r.sr,r.Sm,s.O5,r.Xz,r.BJ,r.oU,r.cs,r.YG],styles:[".img-otium[_ngcontent-%COMP%]{height:50px;margin:5px auto}.avatar[_ngcontent-%COMP%]{width:72%;height:72%;margin-top:10px;margin-right:18px}"]}),e})()},7837:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UpdatePageModule:()=>f});var o=n(6274),r=n(4988),a=n(8620),i=n(8895),s=n(1855),u=n(7272),l=n(2149),c=n(4422),g=n(3883);function d(e,t){1&e&&(u.TgZ(0,"ion-label",16),u._uU(1,"* No valid email"),u.qZA())}function p(e,t){1&e&&(u.TgZ(0,"ion-label",17),u._uU(1,"* correct number phone"),u.qZA())}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,o,a){this.fb=e,this.database=t,this.authUserService=n,this.toastController=o,this.router=a,this.usuario=this.fb.group({name:[""],secondName:[""],email:["",[r.kI.email]],phone:[""],birth:[""]})}ngOnInit(){console.log("ngOninit"),this.database.observableUser.subscribe(e=>this.userData=e)}guardarDatos(){return(0,s.mG)(this,void 0,void 0,function*(){this.userData.name=this.usuario.controls.name.value,this.userData.secondName=this.usuario.controls.secondName.value,this.userData.email=this.usuario.controls.email.value,this.userData.birth=this.usuario.controls.birth.value,this.userData.phone=this.usuario.controls.phone.value,this.userData.updated_at=new Date,this.saveData()})}saveData(){return(0,s.mG)(this,void 0,void 0,function*(){this.database.changeDataUser(this.userData),yield this.database.update("usuarios",this.userData.id,this.userData),this.router.navigate(["/personal"])})}errorToast(e){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:1e4})).present()})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(r.qu),u.Y36(l.k),u.Y36(c.C),u.Y36(a.yF),u.Y36(i.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-update"]],decls:32,vars:9,consts:[["translucent","","no-border",""],[3,"imgUser"],["mode","md"],[1,"ion-text-center"],[1,"content"],[1,"form",3,"formGroup","ngSubmit"],[1,"ion-label"],["formControlName","name",1,"ion-input",3,"ngModel","ngModelChange"],["formControlName","secondName",1,"ion-input",3,"ngModel","ngModelChange"],["formControlName","email",1,"ion-input",3,"ngModel","ngModelChange"],["color","danger",4,"ngIf"],["type","tel","formControlName","phone",1,"ion-input",3,"ngModel","ngModelChange"],["class","ion-label","color","danger",4,"ngIf"],["display-format","DD.MM.YYYY","formControlName","birth",1,"ion-input",3,"ngModel","ngModelChange"],[1,"center-class"],["type","submit","expand","block","shape","round","size","large"],["color","danger"],["color","danger",1,"ion-label"]],template:function(e,t){1&e&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-header"),u._UZ(3,"app-header",1),u.qZA(),u.qZA(),u.qZA(),u.TgZ(4,"ion-content"),u.TgZ(5,"div"),u.TgZ(6,"ion-card",2),u.TgZ(7,"ion-card-header"),u.TgZ(8,"h1",3),u._uU(9,"Update"),u.qZA(),u.qZA(),u.TgZ(10,"ion-card-content",4),u.TgZ(11,"form",5),u.NdJ("ngSubmit",function(){return t.guardarDatos()}),u.TgZ(12,"ion-label",6),u._uU(13,"Name:"),u.qZA(),u.TgZ(14,"ion-input",7),u.NdJ("ngModelChange",function(e){return t.userData.name=e}),u.qZA(),u.TgZ(15,"ion-label",6),u._uU(16,"Second Name:"),u.qZA(),u.TgZ(17,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.userData.secondName=e}),u.qZA(),u.TgZ(18,"ion-label"),u._uU(19,"Email:"),u.qZA(),u.TgZ(20,"ion-input",9),u.NdJ("ngModelChange",function(e){return t.userData.email=e}),u.qZA(),u.YNc(21,d,2,0,"ion-label",10),u.TgZ(22,"ion-label",6),u._uU(23,"Phone: "),u.qZA(),u.TgZ(24,"ion-input",11),u.NdJ("ngModelChange",function(e){return t.userData.phone=e}),u.qZA(),u.YNc(25,p,2,0,"ion-label",12),u.TgZ(26,"ion-label",6),u._uU(27,"Birth: "),u.qZA(),u.TgZ(28,"ion-datetime",13),u.NdJ("ngModelChange",function(e){return t.userData.birth=e}),u.qZA(),u.TgZ(29,"div",14),u.TgZ(30,"ion-button",15),u._uU(31,"Update"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(3),u.Q6J("imgUser",t.userData.img),u.xp6(8),u.Q6J("formGroup",t.usuario),u.xp6(3),u.Q6J("ngModel",t.userData.name),u.xp6(3),u.Q6J("ngModel",t.userData.secondName),u.xp6(3),u.Q6J("ngModel",t.userData.email),u.xp6(1),u.Q6J("ngIf",(null==t.usuario.controls.email.errors?null:t.usuario.controls.email.errors.email)&&(t.usuario.touched||t.usuario.dirty)),u.xp6(3),u.Q6J("ngModel",t.userData.phone),u.xp6(1),u.Q6J("ngIf",(null==t.usuario.controls.phone.errors?null:t.usuario.controls.phone.errors.pattern)&&(t.usuario.touched||t.usuario.dirty)),u.xp6(3),u.Q6J("ngModel",t.userData.birth))},directives:[a.Gu,a.sr,g.G,a.W2,a.PM,a.Zi,a.FN,r._Y,r.JL,r.sg,a.Q$,a.pK,a.j9,r.JJ,r.u,o.O5,a.x4,a.QI,a.YG],styles:[".center-class[_ngcontent-%COMP%]{margin:26px auto}.form[_ngcontent-%COMP%]{margin:0 auto;width:90%}.ion-input[_ngcontent-%COMP%]{--padding-start:20px;border-radius:25px;border:2px solid var(--ion-color-login-input-border);margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]{max-width:100vh;display:flex;flex-direction:column;margin:0 auto;justify-content:space-around}.img-otium[_ngcontent-%COMP%]{width:250px;margin:10px auto}.div-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.eye-icon[_ngcontent-%COMP%]{width:1.875rem;height:1.875rem;margin-left:.625rem;color:var(--ion-color-login-input-border)}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),e})();var Z=n(9258);let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.ez,r.u5,a.Pc,m,Z.K,r.UX]]}),e})()}}]);