(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/self_image.a1ee48dc.jpg"},31:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=a(7),s=a(2),l=Object(s.a)(),m=a(12),u=a.n(m),d=a(30),p=a(26),f=a.n(p).a.create({baseURL:"https://adriyst.github.io/report_endpoint/data.json"}),h=a(6),E=(a(9),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){!function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(f.get(""));case 2:e=a.sent,t=e.data,console.log(e),c(t);case 6:case"end":return a.stop()}}))}()}),[]);return r.a.createElement("div",{className:"reportlist mainsite"},r.a.createElement("h2",null,"Reports for"),a.map((function(e){return r.a.createElement("div",{key:e.num,style:{width:"75%"}},r.a.createElement("h3",{onClick:function(){return function(e){var t=document.getElementById("sem_".concat(e));null!=t&&(t.style.visibility="hidden"===t.style.visibility?"":"hidden")}(e.num)}},"Semester #",e.num),r.a.createElement("div",{style:{visibility:"hidden",width:"80%"},id:"sem_".concat(e.num)},e.sprints.map((function(e){return r.a.createElement(h.a,{key:e.id,to:{pathname:"/report/".concat(e.id),state:{name:e.text}}},e.start," - ",e.end)})),r.a.createElement("br",null)))})))}),y=function(e){var t=e.location;return r.a.createElement("div",{className:"reportelement"},r.a.createElement("div",{style:{width:"100%"},dangerouslySetInnerHTML:{__html:t.state.name}}),r.a.createElement(h.a,{className:"backbutton",to:"/"},"Back"))},b=function(){return r.a.createElement("div",{className:"menuoptions mainsite"},r.a.createElement(h.a,{to:"/",className:"menubutton"},"Reports"),r.a.createElement(h.a,{to:"/about",className:"menubutton"},"About"))},v=a(29),g=a.n(v),w=function(){return r.a.createElement("div",{className:"about_window"},r.a.createElement("div",{className:"image_and_name"},r.a.createElement("img",{src:g.a,alt:"Adrian Tysnes",className:"portrait"})),r.a.createElement("div",{className:"text_about_self"},r.a.createElement("p",null,"My name is Adrian Tysnes, and I am a 20-something year old master student at the language technology group at the department of informatics at the University of Oslo."),r.a.createElement("p",null,"I am mostly keeping this blog to structure my thoughts and ideas about my thesis, but would of course appreciate input. I hope to add some option to provide input in form of a comment section at a certain point, for the fun of implementing it if nothing else."),r.a.createElement("p",null,"Feel free to contact me at adrian@tysn.es")))},N=function(){return r.a.createElement("div",{className:"mainwindow"},r.a.createElement(i.b,{history:l},r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:E}),r.a.createElement(i.a,{path:"/report/:id",exact:!0,component:y}),r.a.createElement(i.a,{path:"/about",exact:!0,component:w}))))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){}},[[31,1,2]]]);
//# sourceMappingURL=main.7827ddff.chunk.js.map