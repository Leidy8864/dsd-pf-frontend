"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[890],{4890:(P,g,c)=>{c.r(g),c.d(g,{PublicRoutingModule:()=>C});var l=c(6019),s=c(1509),e=c(3556),d=c(8003),u=c(7537);let p=(()=>{class t{constructor(){this.desc="",this.type="text",this.placeholder="",this.ekeypress=new e.vpe,this.ekeyup=new e.vpe,this.echange=new e.vpe,this.value="",this.isNumber=!1,this.onChange=n=>{},this.onTouched=()=>{}}get getType(){return"number"==this.type||"decimal"==this.type?(this.isNumber=!0,"text"):this.type}keyUpEvent(n){this.ekeyup.emit(n)}keyPressEvent(n){this.isNumber&&!this.numberValidation(n.key)&&n.preventDefault()}pasteEvent(n){this.isNumber&&!this.numberValidation(n.clipboardData.getData("text"))&&n.preventDefault()}numberValidation(n){if(""==n)return!1;switch(this.type.toLowerCase()){case"number":case"decimal":if(!/^\d*$/.test(n))return!1}return!0}updateChanges(n){this.echange.emit(n),this.onChange(this.value)}writeValue(n){this.value=n,this.updateChanges(n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["e-textarea"]],inputs:{desc:"desc",type:"type",placeholder:"placeholder"},outputs:{ekeypress:"ekeypress",ekeyup:"ekeyup",echange:"echange"},features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}])],decls:4,vars:3,consts:[[3,"placeholder","keypress","keyup","paste","ngModelChange"]],template:function(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e.TgZ(2,"textarea",0),e.NdJ("keypress",function(r){return o.keyPressEvent(r)})("keyup",function(r){return o.keyUpEvent(r)})("paste",function(r){return o.pasteEvent(r)})("ngModelChange",function(r){return o.updateChanges(r)}),e._uU(3),e.qZA()),2&n&&(e.xp6(1),e.Oqu(o.desc),e.xp6(1),e.Q6J("placeholder",o.placeholder),e.xp6(1),e.Oqu(o.value))},styles:['[_nghost-%COMP%]{position:relative;display:grid;border-radius:.25rem;overflow:hidden}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{padding:0;position:absolute;-webkit-user-select:none;user-select:none;font-size:.7rem;left:.5rem;color:#0091ff}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{font-family:"roboto";background-color:#e6f4ff;min-height:6rem;resize:vertical;font-size:.9rem;width:100%;padding:1rem .5rem .5rem;border:none;color:#4a5863}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:#78add6;opacity:1}[_nghost-%COMP%]:before{content:"";position:absolute;display:block;bottom:0;width:0;transition:width .5s;border-bottom:solid .15rem #0091ff}[_nghost-%COMP%]:focus-within:before{width:100%}']}),t})();var h=c(2637);const m=["navbar"],_=[{path:"",component:(()=>{class t{constructor(n){this.router=n,this.scroll=!1}ngOnInit(){}onScroll(n){n.target.scrollTop>30?this.navbar.nativeElement.classList.add("scroll"):this.navbar.nativeElement.classList.remove("scroll")}redirect(){this.router.navigate(["auth"]),console.log("asd")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-public"]],viewQuery:function(n,o){if(1&n&&e.Gf(m,5),2&n){let a;e.iGM(a=e.CRH())&&(o.navbar=a.first)}},hostBindings:function(n,o){1&n&&e.NdJ("scroll",function(r){return o.onScroll(r)})},decls:73,vars:0,consts:[[1,"navbar"],["navbar",""],[1,"menu-action"],[1,"logo"],["src","assets/images/logo.png","alt",""],["href","#Inicio"],["href","#Nosotros"],["href","#Servicio"],["href","#Contacto"],[1,"login",3,"click"],["id","Inicio",1,"container"],[1,"slider"],["src","https://www.clinicainternacional.com.pe/uploads/0-banner-mesa-prona-copia.jpg","alt",""],[1,"data"],[3,"click"],["id","Nosotros",1,"container"],[1,"content"],[1,"title-01"],[1,"subtitle-01"],[1,"us-image"],["src","https://cdn.wallpapersafari.com/86/83/MZpzVU.jpg","alt",""],["id","Servicio",1,"container"],[1,"servicios"],[1,"item"],[1,"servicio-img"],["src","https://psicologiaymundo.com/wp-content/uploads/2020/12/concentrated-doctor-working-with-virtual-screen-1.jpg","alt",""],["src","https://hospitalmedicalcenter.mx/wp-content/uploads/2021/03/medicinageneral.jpg","alt",""],["src","https://www.clinicasanpablo.co/fotospages/mac_hospitalizacion_1549490077.jpg","alt",""],["id","Contacto",1,"container","contact"],["src","https://sumblex.com/wp-content/uploads/2020/08/Contactanos.png","alt",""],[1,"contact-form"],["desc","Nombre","placeholder","Ingrese su nombre."],["desc","Email","placeholder","Ingrese su email."],["desc","Mensaje","placeholder","Ingrese su mensaje."],["desc","Enviar",2,"justify-self","right"],[1,"container"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0,1),e._UZ(2,"div",2),e.TgZ(3,"nav"),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.TgZ(6,"ul"),e.TgZ(7,"a",5),e._uU(8,"Inicio"),e.qZA(),e.TgZ(9,"a",6),e._uU(10,"Nosotros"),e.qZA(),e.TgZ(11,"a",7),e._uU(12,"Servicio"),e.qZA(),e.TgZ(13,"a",8),e._uU(14,"Contacto"),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.NdJ("click",function(){return o.redirect()}),e._uU(16," Iniciar sesion "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",10),e.TgZ(18,"div",11),e._UZ(19,"img",12),e.TgZ(20,"div",13),e.TgZ(21,"h1"),e._uU(22,"Cuidamos lo m\xe1s importante, tu salud."),e.qZA(),e.TgZ(23,"button",14),e.NdJ("click",function(){return o.redirect()}),e._uU(24,"Registrar Cita"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",15),e.TgZ(26,"div",16),e.TgZ(27,"h1",17),e._uU(28,"Nosotros"),e.qZA(),e.TgZ(29,"p",18),e._uU(30," La cl\xednica Buena Salud, es una instituci\xf3n privada del sector de salud concebida como una Cl\xednica de servicios profesionales m\xe9dicos con m\xe1s de 10 a\xf1os de experiencia en el cuidado y bienestar de pacientes adultos y ni\xf1os. Esto permite una administraci\xf3n descentralizada con una adecuada coordinaci\xf3n, la que favorece el trabajo en equipos interdisciplinarios y el desarrollo de las distintas especialidades de la salud. Se definen \xe1reas seg\xfan complejidad de la atenci\xf3n requerida y tambi\xe9n se establecen algunos servicios de especialidades, que por su complejidad requieren de espacios/zonas y profesionales de alta capacitaci\xf3n. "),e.qZA(),e.TgZ(31,"div",19),e._UZ(32,"img",20),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",21),e.TgZ(34,"div",16),e.TgZ(35,"h1",17),e._uU(36,"Servicios"),e.qZA(),e.TgZ(37,"div",22),e.TgZ(38,"div",23),e.TgZ(39,"div",24),e._UZ(40,"img",25),e.qZA(),e.TgZ(41,"h3"),e._uU(42,"Especialidades"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Te brindamos atencion de primer nivel en todas nuestras especvialidades."),e.qZA(),e.qZA(),e.TgZ(45,"div",23),e.TgZ(46,"div",24),e._UZ(47,"img",26),e.qZA(),e.TgZ(48,"h3"),e._uU(49,"Medicina General"),e.qZA(),e.TgZ(50,"p"),e._uU(51,"Se trata de una evaluaci\xf3n general y atenci\xf3n para el diagn\xf3stico oportuno de las enfermedades."),e.qZA(),e.qZA(),e.TgZ(52,"div",23),e.TgZ(53,"div"),e._UZ(54,"img",27),e.qZA(),e.TgZ(55,"h3"),e._uU(56,"Hospitalizaci\xf3n."),e.qZA(),e.TgZ(57,"p"),e._uU(58,"Tenemos espacios especializados y equipados para tu pronta recuperacion."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(59,"div",28),e.TgZ(60,"div",16),e.TgZ(61,"h1",17),e._uU(62,"Contactanos"),e.qZA(),e.TgZ(63,"div",3),e._UZ(64,"img",29),e.qZA(),e.TgZ(65,"div",30),e._UZ(66,"e-input",31),e._UZ(67,"e-input",32),e._UZ(68,"e-textarea",33),e._UZ(69,"e-button",34),e.qZA(),e.qZA(),e.qZA(),e.TgZ(70,"footer",35),e.TgZ(71,"p"),e._uU(72,"2021"),e.qZA(),e.qZA())},directives:[d.W,p,h.m],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,400;1,500&display=swap";[_nghost-%COMP%]{background-color:#f3f6ff;font-family:"roboto","Segoe UI",Tahoma,Geneva,Verdana,sans-serif;position:fixed;width:100%;height:100%;overflow-y:auto;overflow-x:hidden;scroll-behavior:smooth}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;display:grid;justify-content:center;height:4rem;background:#0000;transition:background .2s;z-index:10}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > .menu-action[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]{width:90vw;max-width:1200px;display:grid;grid-template-columns:auto auto auto;justify-content:space-between}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);list-style:none}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 1rem;transition:background-color .2s;color:#5e5e61;text-decoration:none;cursor:pointer}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:#0001}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > .login[_ngcontent-%COMP%], [_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] > .login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%] > .navbar[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;height:4rem}[_nghost-%COMP%] > .navbar.scroll[_ngcontent-%COMP%]{background-color:#fefeff;box-shadow:.5rem 0 .5rem #0005}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;display:grid;justify-content:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%]{width:100vw;height:30rem;position:relative;display:flex;justify-content:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%]:after{position:absolute;bottom:0;content:"";display:block;width:100%;height:2rem;background:linear-gradient(#002e85,#0051e8)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > .data[_ngcontent-%COMP%]{position:absolute;top:0;display:grid;align-content:center;justify-items:center;grid-gap:1rem;gap:1rem;max-width:1200px;width:100%;height:100%}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > .data[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{max-width:1100px;font-size:3rem;padding:0 3rem;color:#0091ff;text-shadow:-.2rem .2rem .3rem #003a66}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > .data[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{max-width:1100px;padding:0 3rem;font-size:1.2rem;color:#0147c9}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > .data[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{background-color:#0051e8;color:#e0ebff;height:3rem;padding:0 1.5rem;border-radius:2rem;font-size:1.2rem;transition:background .2s,color .2s;cursor:pointer}[_nghost-%COMP%]   .container[_ngcontent-%COMP%] > .slider[_ngcontent-%COMP%] > .data[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{background-color:#e0ebff;color:#0051e8}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;width:90vw;max-width:1200px;padding:4rem 0;grid-gap:2rem;gap:2rem;color:#6a6a72}[_nghost-%COMP%]   .title-01[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .subtitle-01[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .us-image[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .us-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:30rem;object-fit:cover}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]{align-self:center;background-color:#0051e8;color:#e0ebff;height:2.5rem;padding:0 1rem;border-radius:2rem;transition:background .2s,color .2s;cursor:pointer}[_nghost-%COMP%]   .login[_ngcontent-%COMP%]:hover{background-color:#e0ebff;color:#0051e8}[_nghost-%COMP%]   .servicios[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:2rem;gap:2rem}[_nghost-%COMP%]   .servicios[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem;gap:.5rem}[_nghost-%COMP%]   .servicios[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:15rem}[_nghost-%COMP%]   .servicios[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]{background-color:#0043c0}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;gap:1rem}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{grid-column:1/-1;color:#bed5ff;margin-bottom:2rem}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:15rem;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;width:100%;height:100%}[_nghost-%COMP%]   .contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]{display:grid;grid-gap:1rem;gap:1rem}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{height:3rem;align-items:center;color:#6f96e4;background-color:#00215f}@media (max-width: 650px){.slider[_ngcontent-%COMP%]{height:45rem!important}}']}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,s.Bz.forChild(_)],s.Bz]}),t})()}}]);