(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[6421],{6421:(e,n,t)=>{"use strict";t.r(n),t.d(n,{LogInPageModule:()=>h});var o=t(8583),i=t(665),a=t(2859),s=t(430),r=t(4762),g=t(8720),l=t(4961),c=t(7376);function u(e,n){if(1&e&&(g.TgZ(0,"ion-select-option",22),g._uU(1),g.qZA()),2&e){const e=n.$implicit;g.s9C("value",e.abbreviation),g.xp6(1),g.Oqu(e.name)}}const d=function(e){return{"background-image":e}},p=[{path:"",component:(()=>{class e{constructor(e,n,t,o,a){this.router=e,this.toastCtrl=n,this.userservice=t,this.alertController=o,this.database=a,this.selectedLanguage="en",this.languages=[{name:"English",abbreviation:"en",imagesrc:"/assets/icon/languages/en.png"},{name:"Espa\xf1ol",abbreviation:"es",imagesrc:"/assets/icon/languages/es.png"},{name:"Deutsche",abbreviation:"de",imagesrc:"/assets/icon/languages/de.png"},{name:"Fran\xe7aise",abbreviation:"fr",imagesrc:"/assets/icon/languages/fr.png"},{name:"Italian",abbreviation:"it",imagesrc:"/assets/icon/languages/it.png"},{name:"Portugu\xeas",abbreviation:"pt",imagesrc:"/assets/icon/languages/pt.png"}],this.email="",this.password="",this.listaDeUsuarios=[],this.formulario=new i.cw({email:new i.NI,password:new i.NI})}get loadData(){return this.userservice.getUser}ngOnInit(){this.database.getAll("usuarios").then(e=>{e.subscribe(e=>{e.map(e=>{let n=e.payload.doc.data();n.id=e.payload.doc.id,this.listaDeUsuarios=[...this.listaDeUsuarios,n]}),console.log("Lista de usuarios: ",this.listaDeUsuarios)})}),setTimeout(()=>{this.dataUser=this.loadData,console.log("como esta esto.. ",this.dataUser)},1e3)}onSubmit(){return(0,r.mG)(this,void 0,void 0,function*(){if(this.formulario.valid){if(void 0===this.dataUser)return this.presentAlert();this.email===this.dataUser.email&&this.password===this.dataUser.password?(console.log("datos correctos.. "),this.dataUser.isLoged=!0,yield this.userservice.saveUser(this.dataUser),this.router.navigate(["/welcome"])):(console.log("datos incorrectos.. "),this.presentAlert())}else(yield this.toastCtrl.create({message:"Please fill in email and password",duration:2e3})).present()})}loadLanguages(){setTimeout(()=>{const e=document.getElementsByClassName("alert-radio-label");for(let n=0;n<e.length;n++){const t=e[n];t.innerHTML=t.innerHTML.concat("<img src="+this.languages[n].imagesrc+' style="width:30px; position:absolute; right:30px;"/>'),t.style.fontSize="22px"}},200)}presentAlert(){return(0,r.mG)(this,void 0,void 0,function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Sorry",subHeader:"Data incorrect in one o more fields",message:"Please try again",buttons:["OK"]});yield e.present()})}}return e.\u0275fac=function(n){return new(n||e)(g.Y36(s.F0),g.Y36(a.yF),g.Y36(l.f),g.Y36(a.Br),g.Y36(c.k))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-log-in"]],decls:42,vars:8,consts:[[1,"ion-no-border"],[1,"ion-padding"],[1,"ion-item-none-underline"],[2,"display","none"],["slot","end",1,"ion-select",3,"ngStyle","ngModel","click","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"content"],["src","/assets/logos/logo_XL.png",1,"img-otium"],[1,"form",3,"formGroup","ngSubmit"],[1,"email"],[1,"ion-label"],["type","email","placeholder","Email","required","","formControlName","email",1,"ion-input",3,"ngModel","ngModelChange"],[1,"password"],["type","password","placeholder","Password","required","","formControlName","password",1,"ion-input",3,"ngModel","ngModelChange"],["href","",1,"a"],["type","submit","expand","block",1,"ion-button"],[1,"account_block"],["routerLink","/register",1,"a"],["routerLink","/welcome"],["src","assets/img/fingerprint.png",1,"img-fingerprint"],["routerLink","/welcome",1,"a","center"],[1,"ion-no-border","footer_block"],[3,"value"]],template:function(e,n){1&e&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar",1),g.TgZ(2,"ion-item",2),g.TgZ(3,"ion-label",3),g._uU(4,"Select language"),g.qZA(),g.TgZ(5,"ion-select",4),g.NdJ("click",function(){return n.loadLanguages()})("ngModelChange",function(e){return n.selectedLanguage=e}),g.YNc(6,u,2,2,"ion-select-option",5),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(7,"ion-content",1),g.TgZ(8,"div",6),g._UZ(9,"ion-img",7),g.TgZ(10,"form",8),g.NdJ("ngSubmit",function(){return n.onSubmit()}),g.TgZ(11,"div",9),g.TgZ(12,"ion-label",10),g.TgZ(13,"strong"),g._uU(14,"E - mail:"),g.qZA(),g.qZA(),g.TgZ(15,"ion-input",11),g.NdJ("ngModelChange",function(e){return n.email=e}),g.qZA(),g.qZA(),g.TgZ(16,"div",12),g.TgZ(17,"ion-label",10),g.TgZ(18,"strong"),g._uU(19,"Password:"),g.qZA(),g.qZA(),g.TgZ(20,"ion-input",13),g.NdJ("ngModelChange",function(e){return n.password=e}),g.qZA(),g.qZA(),g.TgZ(21,"a",14),g.TgZ(22,"i"),g._uU(23,"Forgot password?"),g.qZA(),g.qZA(),g.TgZ(24,"ion-button",15),g._uU(25," Log in "),g.qZA(),g.TgZ(26,"div",16),g.TgZ(27,"a",17),g._uU(28,"Need an account?"),g.qZA(),g.TgZ(29,"a",17),g._uU(30,"Sign in"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(31,"a",18),g._UZ(32,"ion-img",19),g.qZA(),g.TgZ(33,"a",20),g._uU(34,"Continue without account"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(35,"ion-footer",21),g.TgZ(36,"a",14),g._uU(37,"Terms of use"),g.qZA(),g.TgZ(38,"a",14),g._uU(39,"Privacy policy"),g.qZA(),g.TgZ(40,"a",14),g._uU(41,"Contact us"),g.qZA(),g.qZA()),2&e&&(g.xp6(5),g.Q6J("ngStyle",g.VKq(6,d,"url(assets/icon/languages/"+n.selectedLanguage+".png)"))("ngModel",n.selectedLanguage),g.xp6(1),g.Q6J("ngForOf",n.languages),g.xp6(4),g.Q6J("formGroup",n.formulario),g.xp6(5),g.Q6J("ngModel",n.email),g.xp6(5),g.Q6J("ngModel",n.password))},directives:[a.Gu,a.sr,a.Ie,a.Q$,a.t9,a.QI,o.PC,i.JJ,i.On,o.sg,a.W2,a.Xz,i._Y,i.JL,i.sg,a.pK,a.j9,i.Q7,i.u,a.YG,s.yS,a.YI,a.fr,a.n0],styles:[".ion-select[_ngcontent-%COMP%]{width:150px;padding-right:10px;border-radius:15px;border:2px solid var(--ion-color-login-font);margin-bottom:0!important;background-repeat:no-repeat;background-position:5% 50%;background-size:32px;margin:0;text-align:end}.ion-item-none-underline[_ngcontent-%COMP%]{--border-width:0px 0px!important;--border-color:#0000}ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0}.form[_ngcontent-%COMP%]{margin:0 auto;width:90%}.password[_ngcontent-%COMP%]{margin-top:15px}.ion-input[_ngcontent-%COMP%]{--padding-start:20px;border-radius:25px;border:2px solid var(--ion-color-login-input-border);margin-top:10px;margin-bottom:10px}.a[_ngcontent-%COMP%], .ion-label[_ngcontent-%COMP%]{color:var(--ion-color-login-font)}.a[_ngcontent-%COMP%]{text-decoration:none;display:block}.ion-button[_ngcontent-%COMP%]{--border-radius:15px;--background:var(--ion-color-login-background-button);height:60px;width:200px;margin:30px auto 0}.account_block[_ngcontent-%COMP%]{max-width:240px;margin:8px auto 0}.account_block[_ngcontent-%COMP%], .footer_block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.footer_block[_ngcontent-%COMP%]{max-width:500px;margin:10px auto}.content[_ngcontent-%COMP%]{max-width:500px;display:flex;flex-direction:column;height:100%;margin:0 auto;justify-content:space-around}.img-otium[_ngcontent-%COMP%]{width:250px;margin:10px auto}.img-fingerprint[_ngcontent-%COMP%]{width:70px;margin:10px auto}.center[_ngcontent-%COMP%]{margin:0 auto}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[s.Bz.forChild(p)],s.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[o.ez,i.u5,a.Pc,m,i.UX]]}),e})()}}]);