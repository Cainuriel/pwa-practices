(self.webpackChunknoticias=self.webpackChunknoticias||[]).push([[3998],{3998:(t,n,i)=>{"use strict";i.r(n),i.d(n,{Tab1PageModule:()=>g});var e=i(4683),o=i(6274),s=i(4988),a=i(9370),c=i(3722),r=i(7272),l=i(7424),u=i(4929);const p=[{path:"",component:(()=>{class t{constructor(t){this.NoticiasService=t,this.noticias=[]}ngOnInit(){this.loadNews()}loadData(t){this.loadNews(t)}loadNews(t){this.NoticiasService.getTopHeadLines().subscribe(n=>{if(console.log("respuesta: ",n),0===n.articles.length)return t.target.disabled=!0,void t.target.complete();this.noticias.push(...n.articles),t&&t.target.complete()})}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(l.D))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-tab1"]],decls:8,vars:2,consts:[[1,"ion-no-border",3,"translucent"],["color","dark"],[3,"noticias"],["threshold","150px","position","bottom",3,"ionInfinite"],["loadingSpinner","crescent","loadingText","Cargando noticias..."]],template:function(t,n){1&t&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar",1),r.TgZ(2,"ion-title"),r._uU(3," Favoritos "),r.qZA(),r.qZA(),r.qZA(),r.TgZ(4,"ion-content",1),r._UZ(5,"app-noticias",2),r.TgZ(6,"ion-infinite-scroll",3),r.NdJ("ionInfinite",function(t){return n.loadData(t)}),r._UZ(7,"ion-infinite-scroll-content",4),r.qZA(),r.qZA()),2&t&&(r.Q6J("translucent",!0),r.xp6(5),r.Q6J("noticias",n.noticias))},directives:[e.Gu,e.sr,e.wd,e.W2,u.a,e.ju,e.MB],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),t})();var f=i(9258);let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[e.Pc,o.ez,s.u5,a.e,d,f.K]]}),t})()}}]);