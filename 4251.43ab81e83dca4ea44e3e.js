(self.webpackChunkFB_App=self.webpackChunkFB_App||[]).push([[4251],{4251:(n,o,e)=>{"use strict";e.r(o),e.d(o,{LogInPageModule:()=>d});var t=e(6274),i=e(4988),a=e(4683),r=e(3722),g=e(1855),s=e(7272);function c(n,o){if(1&n&&(s.TgZ(0,"ion-select-option",21),s._uU(1),s.qZA()),2&n){const n=o.$implicit;s.s9C("value",n.abbreviation),s.xp6(1),s.Oqu(n.name)}}const l=function(n){return{"background-image":n}},u=[{path:"",component:(()=>{class n{constructor(n,o){this.router=n,this.toastCtrl=o,this.selectedLanguage="en",this.languages=[{name:"English",abbreviation:"en",imagesrc:"/assets/icon/languages/en.png"},{name:"Espa\xf1ol",abbreviation:"es",imagesrc:"/assets/icon/languages/es.png"},{name:"Deutsche",abbreviation:"de",imagesrc:"/assets/icon/languages/de.png"},{name:"Fran\xe7aise",abbreviation:"fr",imagesrc:"/assets/icon/languages/fr.png"},{name:"Italian",abbreviation:"it",imagesrc:"/assets/icon/languages/it.png"},{name:"Portugu\xeas",abbreviation:"pt",imagesrc:"/assets/icon/languages/pt.png"}],this.formulario=new i.cw({email:new i.NI,password:new i.NI})}ngOnInit(){}onSubmit(){return(0,g.mG)(this,void 0,void 0,function*(){this.formulario.valid?this.router.navigate(["/welcome"]):(yield this.toastCtrl.create({message:"Please fill in email and password",duration:2e3})).present()})}loadLanguages(){setTimeout(()=>{const n=document.getElementsByClassName("alert-radio-label");for(let o=0;o<n.length;o++){const e=n[o];e.innerHTML=e.innerHTML.concat("<img src="+this.languages[o].imagesrc+' style="width:30px; position:absolute; right:30px;"/>'),e.style.fontSize="22px"}},200)}}return n.\u0275fac=function(o){return new(o||n)(s.Y36(r.F0),s.Y36(a.yF))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-log-in"]],decls:42,vars:6,consts:[[1,"ion-no-border"],[1,"ion-padding"],[1,"ion-item-none-underline"],[2,"display","none"],["slot","end",1,"ion-select",3,"ngStyle","ngModel","click","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"content"],["src","/assets/logos/logo_XL.png",1,"img-otium"],[1,"form",3,"formGroup","ngSubmit"],[1,"email"],[1,"ion-label"],["type","email","placeholder","Email","required","","formControlName","email",1,"ion-input"],[1,"password"],["type","password","placeholder","Password","required","","formControlName","password",1,"ion-input"],["href","",1,"a"],["type","submit","expand","block",1,"ion-button"],[1,"account_block"],["routerLink","/welcome"],["src","assets/img/fingerprint.png",1,"img-fingerprint"],["routerLink","/welcome",1,"a","center"],[1,"ion-no-border","footer_block"],[3,"value"]],template:function(n,o){1&n&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar",1),s.TgZ(2,"ion-item",2),s.TgZ(3,"ion-label",3),s._uU(4,"Select language"),s.qZA(),s.TgZ(5,"ion-select",4),s.NdJ("click",function(){return o.loadLanguages()})("ngModelChange",function(n){return o.selectedLanguage=n}),s.YNc(6,c,2,2,"ion-select-option",5),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"ion-content",1),s.TgZ(8,"div",6),s._UZ(9,"ion-img",7),s.TgZ(10,"form",8),s.NdJ("ngSubmit",function(){return o.onSubmit()}),s.TgZ(11,"div",9),s.TgZ(12,"ion-label",10),s.TgZ(13,"strong"),s._uU(14,"E - mail:"),s.qZA(),s.qZA(),s._UZ(15,"ion-input",11),s.qZA(),s.TgZ(16,"div",12),s.TgZ(17,"ion-label",10),s.TgZ(18,"strong"),s._uU(19,"Password:"),s.qZA(),s.qZA(),s._UZ(20,"ion-input",13),s.qZA(),s.TgZ(21,"a",14),s.TgZ(22,"i"),s._uU(23,"Forgot password?"),s.qZA(),s.qZA(),s.TgZ(24,"ion-button",15),s._uU(25," Log in "),s.qZA(),s.TgZ(26,"div",16),s.TgZ(27,"a",14),s._uU(28,"Need an account?"),s.qZA(),s.TgZ(29,"a",14),s._uU(30,"Sign in"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(31,"a",17),s._UZ(32,"ion-img",18),s.qZA(),s.TgZ(33,"a",19),s._uU(34,"Continue without account"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(35,"ion-footer",20),s.TgZ(36,"a",14),s._uU(37,"Terms of use"),s.qZA(),s.TgZ(38,"a",14),s._uU(39,"Privacy policy"),s.qZA(),s.TgZ(40,"a",14),s._uU(41,"Contact us"),s.qZA(),s.qZA()),2&n&&(s.xp6(5),s.Q6J("ngStyle",s.VKq(4,l,"url(assets/icon/languages/"+o.selectedLanguage+".png)"))("ngModel",o.selectedLanguage),s.xp6(1),s.Q6J("ngForOf",o.languages),s.xp6(4),s.Q6J("formGroup",o.formulario))},directives:[a.Gu,a.sr,a.Ie,a.Q$,a.t9,a.QI,t.PC,i.JJ,i.On,t.sg,a.W2,a.Xz,i._Y,i.JL,i.sg,a.pK,a.j9,i.Q7,i.u,a.YG,r.yS,a.YI,a.fr,a.n0],styles:[".ion-select[_ngcontent-%COMP%]{width:150px;padding-right:10px;border-radius:15px;border:2px solid var(--ion-color-login-font);margin-bottom:0!important;background-repeat:no-repeat;background-position:5% 50%;background-size:32px;margin:0;text-align:end}.ion-item-none-underline[_ngcontent-%COMP%]{--border-width:0px 0px!important;--border-color:#0000}ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0}.form[_ngcontent-%COMP%]{margin:0 auto;width:90%}.password[_ngcontent-%COMP%]{margin-top:15px}.ion-input[_ngcontent-%COMP%]{--padding-start:20px;border-radius:25px;border:2px solid var(--ion-color-login-input-border);margin-top:10px;margin-bottom:10px}.a[_ngcontent-%COMP%], .ion-label[_ngcontent-%COMP%]{color:var(--ion-color-login-font)}.a[_ngcontent-%COMP%]{text-decoration:none;display:block}.ion-button[_ngcontent-%COMP%]{--border-radius:15px;--background:var(--ion-color-login-background-button);height:60px;width:200px;margin:30px auto 0}.account_block[_ngcontent-%COMP%]{max-width:240px;margin:8px auto 0}.account_block[_ngcontent-%COMP%], .footer_block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.footer_block[_ngcontent-%COMP%]{max-width:500px;margin:10px auto}.content[_ngcontent-%COMP%]{max-width:500px;display:flex;flex-direction:column;height:100%;margin:0 auto;justify-content:space-around}.img-otium[_ngcontent-%COMP%]{width:250px;margin:10px auto}.img-fingerprint[_ngcontent-%COMP%]{width:70px;margin:10px auto}.center[_ngcontent-%COMP%]{margin:0 auto}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[t.ez,i.u5,a.Pc,p,i.UX]]}),n})()}}]);