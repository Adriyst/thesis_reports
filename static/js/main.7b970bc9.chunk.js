(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/self_image.a1ee48dc.jpg"},31:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),c=a.n(r),o=a(7),s=a(2),l=Object(s.a)(),m=a(12),u=a.n(m),d=a(30),p=a(26),h=a.n(p).a.create({baseURL:"https://adriyst.github.io/report_endpoint/data.json"}),f=a(6),E=(a(9),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=function(e){var t=document.getElementById("sem_".concat(e));null!=t&&(t.style.visibility="hidden"===t.style.visibility?"":"hidden")};Object(n.useEffect)((function(){!function(){var e,t;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(h.get(""));case 2:e=a.sent,t=e.data,console.log(e),r(t);case 6:case"end":return a.stop()}}))}()}),[]);return i.a.createElement("div",{className:"reportlist mainsite"},i.a.createElement("h2",null,"Reports for"),a.map((function(e){return i.a.createElement("div",{key:e.num,style:{width:"75%"}},i.a.createElement("h3",{onClick:function(){return c(e.num)}},"Semester #",e.num),i.a.createElement("div",{style:{visibility:"hidden",width:"80%"},id:"sem_".concat(e.num)},e.sprints.map((function(e){return i.a.createElement("div",null,i.a.createElement(f.a,{key:e.id,to:{pathname:"/report/".concat(e.id),state:{name:e.text}}},e.start," - ",e.end),i.a.createElement("br",null))}))))})),i.a.createElement("div",{style:{marginTop:"3%"}},i.a.createElement("h3",{onClick:function(){return c(2)}},"Semester #2"),i.a.createElement("div",{style:{visibility:"hidden",width:"80%"},id:"sem_2"},i.a.createElement("a",{href:"https://adriyst.github.io/report_endpoint/august.pdf"},"August"))))}),y=function(e){var t=e.location;return i.a.createElement("div",{className:"reportelement"},i.a.createElement("div",{style:{width:"100%"},dangerouslySetInnerHTML:{__html:t.state.name}}),i.a.createElement(f.a,{className:"backbutton",to:"/"},"Back"))},b=function(){return i.a.createElement("div",{className:"menuoptions mainsite"},i.a.createElement(f.a,{to:"/",className:"menubutton"},"Reports"),i.a.createElement(f.a,{to:"/about",className:"menubutton"},"About"))},v=a(29),g=a.n(v),w=function(){return i.a.createElement("div",{className:"about_window"},i.a.createElement("div",{className:"image_and_name"},i.a.createElement("img",{src:g.a,alt:"Adrian Tysnes",className:"portrait"})),i.a.createElement("div",{className:"text_about_self"},i.a.createElement("p",null,"My name is Adrian Tysnes, and I am a 20-something year old master student at the language technology group at the department of informatics at the University of Oslo."),i.a.createElement("p",null,"I am mostly keeping this blog to structure my thoughts and ideas about my thesis, but would of course appreciate input. I hope to add some option to provide input in form of a comment section at a certain point, for the fun of implementing it if nothing else."),i.a.createElement("p",null,"Feel free to contact me at adrian@tysn.es")))},_=function(){return i.a.createElement("div",{className:"mainwindow"},i.a.createElement(o.b,{history:l},i.a.createElement(b,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",exact:!0,component:E}),i.a.createElement(o.a,{path:"/report/:id",exact:!0,component:y}),i.a.createElement(o.a,{path:"/about",exact:!0,component:w}))))};c.a.render(i.a.createElement(_,null),document.getElementById("root"))},9:function(e,t,a){}},[[31,1,2]]]);
//# sourceMappingURL=main.7b970bc9.chunk.js.map