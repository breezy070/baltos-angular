import './polyfills.server.mjs';
import{B as M,F as P,I as S,a as p,b as u,c as y,d as w,e,f as t,g as r,h as a,i as o,j as f,k as m,l as g,m as d,t as h,v as C,w as v,x as b,y as O}from"./chunk-IFPKOKAK.mjs";var T=["mySidebar"],j=["myOverlay"],Q=["img01"],R=["modal01"],I=["main"],L=["bodyx"],k=(()=>{let s=class s{constructor(c){this.renderer=c,this.status=!1}w3_open(){this.status=!this.status,document.body.style.overflow="hidden",console.log("clicked")}w3_close(){this.status=!this.status,document.body.style.overflow="visible",console.log("clicked")}onClick(c){this.renderer.setProperty(this.img01.nativeElement,"src","https://www.w3schools.com/w3images/natureboy.jpg"),console.table(this.img01),this.renderer.setStyle(this.modal01.nativeElement,"display","block")}};s.\u0275fac=function(l){return new(l||s)(y(u))},s.\u0275cmp=p({type:s,selectors:[["app-root"]],viewQuery:function(l,n){if(l&1&&(g(T,5),g(j,5),g(Q,5),g(R,5),g(I,5),g(L,5)),l&2){let i;m(i=d())&&(n.mySideBar=i.first),m(i=d())&&(n.myOverlay=i.first),m(i=d())&&(n.img01=i.first),m(i=d())&&(n.modal01=i.first),m(i=d())&&(n.main=i.first),m(i=d())&&(n.body=i.first)}},standalone:!0,features:[f],decls:57,vars:1,consts:[["id","mySidebar",1,"w3-sidebar","w3-bar-block","w3-white","w3-text-grey","w3-collapse","w3-top","w3-center",2,"z-index","3","width","100%","height","100%","font-weight","bold","display","block","overflow-y","hidden",3,"ngClass"],["mySidebar",""],[1,"w3-padding-64","w3-center"],["href","javascript:void(0)",1,"w3-bar-item","w3-button","w3-padding","w3-hide-large",3,"click"],["href","#about",1,"w3-bar-item","w3-button",3,"click"],["href","#contact",1,"w3-bar-item","w3-button",3,"click"],["href","#gallery",1,"w3-bar-item","w3-button",3,"click"],[1,"w3-top","w3-white","w3-xlarge","w3-padding-16",2,"position","relative"],[1,"w3-left","w3-padding"],[1,"hide-li"],["href","#about"],["href","#contact"],["href","#gallery"],["href","javascript:void(0)",1,"w3-right","w3-button","w3-white","hide-burger-li",3,"click"],["id","myOverlay",1,"w3-overlay","w3-hide-large","w3-animate-opacity",2,"cursor","pointer",3,"click"],["myOverlay",""],["id","main",1,"w3-main"],["main",""],[1,"container",2,"margin","0 auto"],["id","gallery",1,"gallery-grid"],[1,"gallery__item","gallery__item--1"],["src","../assets/img01.jpg","alt","Image 1",1,"gallery__img"],[1,"gallery__item","gallery__item--2"],["src","../assets/img08.jpg","alt","Image 2",1,"gallery__img"],[1,"gallery__item","gallery__item--3"],["src","../assets/img03.jpg","alt","Image 3",1,"gallery__img"],[1,"gallery__item","gallery__item--4"],["src","../assets/img04.jpg","alt","Image 4",1,"gallery__img"],[1,"gallery__item","gallery__item--5"],["src","../assets/img02.jpg","alt","Image 5",1,"gallery__img"],[1,"gallery__item","gallery__item--8"],["src","../assets/img03.jpg","alt","Image 8",1,"gallery__img"],[1,"gallery__item","gallery__item--6"],["src","../assets/img06.jpg","alt","Image 6",1,"gallery__img"],[1,"gallery__item","gallery__item--7"],["src","../assets/img05.jpg","alt","Image 7",1,"gallery__img"],[1,""],[1,"w3-row-padding"],[1,"w3-third"]],template:function(l,n){l&1&&(e(0,"nav",0,1),r(2,"br"),e(3,"h3",2)(4,"b"),o(5,"BALTOS"),t()(),e(6,"a",3),a("click",function(){return n.w3_close()}),o(7,"CLOSE"),t(),e(8,"a",4),a("click",function(){return n.w3_close()}),o(9,"ABOUT ME"),t(),e(10,"a",5),a("click",function(){return n.w3_close()}),o(11,"CONTACT"),t(),e(12,"a",6),a("click",function(){return n.w3_close()}),o(13,"GALLERY"),t()(),e(14,"header",7)(15,"h1",8),o(16,"BALTOS"),t(),e(17,"ul",9)(18,"li")(19,"a",10),o(20,"ABOUT ME"),t()(),e(21,"li")(22,"a",11),o(23,"CONTACT"),t()(),e(24,"li")(25,"a",12),o(26,"GALLERY"),t()()(),e(27,"a",13),a("click",function(){return n.w3_open()}),o(28,"\u2630"),t()(),e(29,"div",14,15),a("click",function(){return n.w3_close()}),t(),e(31,"div",16,17)(33,"div",18)(34,"div",19)(35,"figure",20),r(36,"img",21),t(),e(37,"figure",22),r(38,"img",23),t(),e(39,"figure",24),r(40,"img",25),t(),e(41,"figure",26),r(42,"img",27),t(),e(43,"figure",28),r(44,"img",29),t(),e(45,"figure",30),r(46,"img",31),t(),e(47,"figure",32),r(48,"img",33),t(),e(49,"figure",34),r(50,"img",35),t()()()(),e(51,"footer",36)(52,"div",37),r(53,"div",38)(54,"div",38)(55,"div",38),t()(),r(56,"router-outlet")),l&2&&w("ngClass",n.status?"visible":"hidden")},dependencies:[v,C,P],styles:['nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#000}nav[_ngcontent-%COMP%]{transition:all .5s ease;visibility:hidden}header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1em;align-items:center}footer[_ngcontent-%COMP%]{background-color:#9e9e9e;height:200px;position:relative;bottom:0;margin-top:2em}@media (min-width: 993px){.hide-burger-li[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 993px){.hide-li[_ngcontent-%COMP%]{display:none!important}}ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;list-style:none;gap:1em;padding:0;margin:0}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:link{text-decoration:none;cursor:pointer}.visible[_ngcontent-%COMP%]{visibility:visible;opacity:1}.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.w3-row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.w3-third[_ngcontent-%COMP%]{display:flex}.grid-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;width:100%;height:100%;background-color:#fff}.image-cover[_ngcontent-%COMP%]{background-image:url("./media/img08-T2MLMZFE.jpg");background-size:cover;background-position:10px 25px;width:100%;height:100vh;margin-left:1em;margin-right:1em}.image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:100%}.grid-container[_ngcontent-%COMP%] > .image[_ngcontent-%COMP%]{width:50%;padding:1em}figure[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]{width:100%;margin:1rem auto}.gallery-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:auto;grid-gap:15px;position:relative}.gallery__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;aspect-ratio:1/1}.gallery__item--1[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:1;grid-row-end:2}.gallery__item--text-1[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:5;grid-row-start:1;grid-row-end:1}.gallery__item--2[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:7;grid-row-start:1;grid-row-end:2;aspect-ratio:1/1;position:absolute;bottom:0}.gallery__item--text-2[_ngcontent-%COMP%]{grid-column-start:8;grid-column-end:8;grid-row-start:2;grid-row-end:2}.gallery__item--3[_ngcontent-%COMP%]{grid-column-start:3;grid-column-end:5;grid-row-start:2;grid-row-end:2;aspect-ratio:1/1}.gallery__item--text-3[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:1;grid-row-start:3;grid-row-end:3}.gallery__item--4[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:9;grid-row-start:2;grid-row-end:2}.gallery__item--5[_ngcontent-%COMP%]{grid-column-start:5;grid-column-end:7;grid-row-start:3;grid-row-end:3}.gallery__item--8[_ngcontent-%COMP%]{grid-column-start:7;grid-column-end:9;grid-row-start:3;grid-row-end:3}.gallery__item--6[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:5;grid-row-start:3;grid-row-end:3}.gallery__item--7[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:9;grid-row-start:4;grid-row-end:4;height:50%}']});let _=s;return _})();var x=[];var E={providers:[S(x),O()]};var q={providers:[M()]},A=h(E,q);var B=()=>b(k,A),ie=B;export{ie as a};