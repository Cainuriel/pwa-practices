(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[4174],{4174:(o,e,n)=>{"use strict";n.r(e),n.d(e,{RegisterPageModule:()=>f});var r=n(8583),i=n(665),t=n(7823),s=n(1348),a=n(8720),u=n(4961),l=n(3646);function d(o,e){1&o&&(a.TgZ(0,"ion-label",19),a._uU(1,"* No valid email"),a.qZA())}function c(o,e){1&o&&(a.TgZ(0,"ion-label",20),a._uU(1,"* correct number phone"),a.qZA())}function p(o,e){1&o&&(a.TgZ(0,"ion-label",20),a._uU(1,"* numbers and capital letters"),a.qZA())}function g(o,e){1&o&&(a.TgZ(0,"ion-label",20),a._uU(1,"* Password and Confirm Password fields should match"),a.qZA())}const m=[{path:"",component:(()=>{class o{constructor(o,e){this.fb=o,this.userService=e,this.imgUser="../../../assets/img/userDefault.png",this.usuario=this.fb.group({name:["",i.kI.required],secondName:["",i.kI.required],email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.required,i.kI.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]],confirmPassword:["",i.kI.required],phone:["",[i.kI.required]],birth:["",[i.kI.required]],img:"../../../assets/img/userDefault.png",isLoged:!1}),this.hiddenPassword=!0,this.passwordNotMatch=!0}ngOnInit(){}seePassword(){this.hiddenPassword=!this.hiddenPassword}guardarDatos(){console.log(this.usuario.value),this.userService.saveUser(this.usuario.value)}passwordMatch(){let o=this.usuario.controls.password.value,e=this.usuario.controls.confirmPassword.value;console.log("el password ",o),console.log("confirm password ",e),this.passwordNotMatch=o===e}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(i.qu),a.Y36(u.f))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-register"]],decls:44,vars:11,consts:[[3,"imgUser"],[1,"content"],["mode","md"],[1,"ion-text-center"],[1,"form",3,"formGroup","ngSubmit"],[1,"ion-label"],["formControlName","name",1,"ion-input"],["formControlName","secondName",1,"ion-input"],["formControlName","email",1,"ion-input"],["color","danger",4,"ngIf"],["type","tel","formControlName","phone",1,"ion-input"],["class","ion-label","color","danger",4,"ngIf"],["display-format","DD.MM.YYYY","formControlName","birth",1,"ion-input"],[1,"div-flex"],["formControlName","password",1,"ion-input","password",3,"type","change"],["slot","end",1,"eye-icon",3,"name","click"],["formControlName","confirmPassword",1,"ion-input","password",3,"type","change"],[1,"center-class"],["type","submit","expand","block","shape","round","size","large","routerLink","/log-in",3,"disabled"],["color","danger"],["color","danger",1,"ion-label"]],template:function(o,e){1&o&&(a.TgZ(0,"ion-header"),a._UZ(1,"app-header",0),a.qZA(),a.TgZ(2,"ion-content"),a.TgZ(3,"div",1),a.TgZ(4,"ion-card",2),a.TgZ(5,"ion-card-header"),a.TgZ(6,"h1",3),a._uU(7,"Register"),a.qZA(),a.qZA(),a.TgZ(8,"ion-card-content"),a.TgZ(9,"form",4),a.NdJ("ngSubmit",function(){return e.guardarDatos()}),a.TgZ(10,"ion-label",5),a._uU(11,"Name:"),a.qZA(),a._UZ(12,"ion-input",6),a.TgZ(13,"ion-label",5),a._uU(14,"Second Name:"),a.qZA(),a._UZ(15,"ion-input",7),a.TgZ(16,"ion-label"),a._uU(17,"Email:"),a.qZA(),a._UZ(18,"ion-input",8),a.YNc(19,d,2,0,"ion-label",9),a.TgZ(20,"ion-label",5),a._uU(21,"Phone: "),a.qZA(),a._UZ(22,"ion-input",10),a.YNc(23,c,2,0,"ion-label",11),a.TgZ(24,"ion-label",5),a._uU(25,"Birth: "),a.qZA(),a._UZ(26,"ion-datetime",12),a.TgZ(27,"ion-label",5),a._uU(28,"Password:"),a.qZA(),a.TgZ(29,"div",13),a.TgZ(30,"ion-input",14),a.NdJ("change",function(){return e.passwordMatch()}),a.qZA(),a.TgZ(31,"ion-icon",15),a.NdJ("click",function(){return e.seePassword()}),a.qZA(),a.qZA(),a.YNc(32,p,2,0,"ion-label",11),a.TgZ(33,"ion-label",5),a._uU(34,"Confirm Password: "),a.qZA(),a.TgZ(35,"div",13),a.TgZ(36,"ion-input",16),a.NdJ("change",function(){return e.passwordMatch()}),a.qZA(),a.TgZ(37,"ion-icon",15),a.NdJ("click",function(){return e.seePassword()}),a.qZA(),a.qZA(),a.YNc(38,g,2,0,"ion-label",11),a.TgZ(39,"div",17),a.TgZ(40,"ion-button",18),a._uU(41,"Create Account"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(42,"ion-card-subtitle",3),a._uU(43,"All fields Required"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(1),a.Q6J("imgUser",e.imgUser),a.xp6(8),a.Q6J("formGroup",e.usuario),a.xp6(10),a.Q6J("ngIf",(null==e.usuario.controls.email.errors?null:e.usuario.controls.email.errors.email)&&(e.usuario.touched||e.usuario.dirty)),a.xp6(4),a.Q6J("ngIf",(null==e.usuario.controls.phone.errors?null:e.usuario.controls.phone.errors.pattern)&&(e.usuario.touched||e.usuario.dirty)),a.xp6(7),a.Q6J("type",e.hiddenPassword?"password":"text"),a.xp6(1),a.Q6J("name",e.hiddenPassword?"eye-off":"eye"),a.xp6(1),a.Q6J("ngIf",(null==e.usuario.controls.password.errors?null:e.usuario.controls.password.errors.pattern)&&(e.usuario.touched||e.usuario.dirty)),a.xp6(4),a.Q6J("type",e.hiddenPassword?"password":"text"),a.xp6(1),a.Q6J("name",e.hiddenPassword?"eye-off":"eye"),a.xp6(1),a.Q6J("ngIf",!e.passwordNotMatch&&(e.usuario.dirty||e.usuario.touched)),a.xp6(2),a.Q6J("disabled",!e.usuario.valid))},directives:[t.Gu,l.G,t.W2,t.PM,t.Zi,t.FN,i._Y,i.JL,i.sg,t.Q$,t.pK,t.j9,i.JJ,i.u,r.O5,t.x4,t.QI,t.gu,t.YG,t.YI,s.rH,t.tO],styles:[".center-class[_ngcontent-%COMP%]{margin:26px auto}.form[_ngcontent-%COMP%]{margin:0 auto;width:90%}.password[_ngcontent-%COMP%]{margin-top:15px}.ion-input[_ngcontent-%COMP%]{--padding-start:20px;border-radius:25px;border:2px solid var(--ion-color-login-input-border);margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]{max-width:100vh;display:flex;flex-direction:column;margin:0 auto;justify-content:space-around}.img-otium[_ngcontent-%COMP%]{width:250px;margin:10px auto}.div-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.eye-icon[_ngcontent-%COMP%]{width:1.875rem;height:1.875rem;margin-left:.625rem;color:var(--ion-color-login-input-border)}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),o})();var h=n(5642);let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[r.ez,i.u5,t.Pc,Z,h.K,i.UX]]}),o})()}}]);