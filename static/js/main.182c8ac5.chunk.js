(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e){e.exports={Home:"Home",Profile:"Profile",Favorite:"Favorite",Settings:"Settings",DisplayLanguage:"Display language"}},158:function(e){e.exports={Home:"Strona g\u0142\xf3wna",Profile:"Profil",Favorite:"Ulubione",Settings:"Ustawienia",DisplayLanguage:"Preferowany j\u0119zyk"}},5375:function(e,t,n){e.exports=n(5573)},5380:function(e,t,n){},5573:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=(n(5380),n(28)),l=n(31),s=n(34),u=n(32),p=n(35),m=n(5576),d=n(5578),f=n(5575),g=n(55),h=n(47),v=n.n(h),b=n(67),w=n(39),y=n(135),E=n.n(y),O=new function e(){var t=this;Object(c.a)(this,e),this.getRandomUsers=Object(b.a)(v.a.mark(function e(){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(t.baseUrl).then(function(e){return e.data}).catch(function(e){return console.log(e),[]});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)})),this.baseUrl="https://randomuser.me/api/?results=50"},j=n(48),k=n.n(j),x=n(136),C=n.n(x),S=n(137),N=n(53),F=n.n(N),D=n(54),R=n.n(D),A=n(33);var L=Object(A.withStyles)(function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),paper:{margin:"20px"}}})(function(e){var t=e.data,n=e.addfavourite,a=e.classes;return t.map(function(e,t){var o=e.favourite?"red":"gray",i="female"===e.gender?"\u2640\ufe0f":"\u2642\ufe0f";return r.a.createElement(F.a,{key:t,className:a.paper},r.a.createElement(R.a,{variant:"h5"},e.name.first," ",e.name.last," "),r.a.createElement("p",null," ",i),r.a.createElement("p",null," ",e.phone),r.a.createElement("p",null," ",e.email),r.a.createElement("p",null," ",e.location.street,", ",e.location.postcode," ",e.location.city),r.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",outline:"none"},onClick:function(){n(t)}},r.a.createElement("span",{role:"img","aria-label":"heart",style:{color:o,fontSize:"24px"}},"\u2764")))})}),P=n(160),I=n(139),U=n.n(I),B=function(e){return function(t){var n=t.loading,a=Object(P.a)(t,["loading"]),o=n?.5:1;return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:{opacity:o}},r.a.createElement(e,a)),n&&r.a.createElement("div",{style:{display:"inline-block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(U.a,{color:"secondary"})))}},M=B(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,render:!1,dataCopy:null,loading:!0},n.addfavourite=function(e){var t=n.state.data[e].favourite,a=C()(n.state,{data:Object(w.a)({},e,{favourite:{$set:!t}})});n.setState(a)},n.handleFilter=k.a.debounce(function(e){var t=k.a.filter(n.state.data,function(t){return t.name.first.indexOf(e)>-1});0===e.length&&(t=n.state.dataCopy),n.setState({data:t})},300),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getRandomUsers();case 2:(t=e.sent).results.map(function(e){return e.favourite=!1}),this.setState({data:t.results,render:!0,dataCopy:t.results,loading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,n=e.render;return r.a.createElement("div",{style:{textAlign:"center"}},n&&r.a.createElement(L,{data:t,addfavourite:this.addfavourite}))}}]),t}(a.Component)),T=n(144),W=n.n(T),H=n(69),z=n.n(H),G=n(145),J=n.n(G),K=n(64),$=n.n(K),V=n(143),q=n.n(V),Q=n(46),X=[{value:"en",text:"English"},{value:"pl",text:"Polski"}],Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={language:e.i18n.languages[0].substring(0,2)||"en"},X.find(function(e){return e.value===n.state.language})||(n.state.language="en"),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.t,o=t.i18n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:n.form,onSubmit:function(t){var n;t.preventDefault(),n=e.state.language,o.changeLanguage(n),e.setState({language:n})}},r.a.createElement(q.a,{className:n.formControl},r.a.createElement(R.a,{variant:"h6",gutterBottom:!0},a("DisplayLanguage")),r.a.createElement(W.a,{value:this.state.language,onChange:function(t){e.setState({language:t.target.value})},input:r.a.createElement($.a,{name:"language-input",id:"language"}),name:"language"},X.map(function(e,t){return r.a.createElement(z.a,{value:e.value,key:t},e.text)})),r.a.createElement("div",{className:n.wrapper},r.a.createElement(J.a,{type:"submit",variant:"contained",color:"primary",className:n.submit},"OK")))))}}]),t}(a.Component),Z=Object(A.withStyles)(function(e){return{submit:{marginTop:3*e.spacing.unit},wrapper:{margin:e.spacing.unit,position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center",padding:"3vh"},formControl:{width:"100%"}}})(Y),_=Object(Q.b)()(Z),ee=function(){return r.a.createElement("h1",null,"Test")},te=[{path:"/",sidebarName:"Home",navbarName:"Home",icon:g.c,component:M},{path:"/profile",sidebarName:"Profile",navbarName:"Profile",icon:g.a,component:ee},{path:"/favorite",sidebarName:"Favorite",navbarName:"Favorite",icon:g.b,component:ee},{path:"/settings",sidebarName:"Settings",navbarName:"Settings",icon:g.d,component:_}],ne=n(152),ae=n.n(ne),re=n(153),oe=n.n(re),ie=n(154),ce=n.n(ie),le=n(90),se=n.n(le),ue=n(66),pe=n.n(ue),me=n(146),de=n.n(me),fe=n(148),ge=n.n(fe),he=n(149),ve=n.n(he),be=n(65),we=n.n(be),ye=n(5574),Ee=n(5577),Oe=n(89),je=n.n(Oe),ke=n(147),xe=n.n(ke),Ce=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.toogleMenu=function(){n.setState(function(e){return{open:!e.open}})},n.activeRoute=function(e){return n.props.location.pathname.indexOf(e)>-1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.t;return r.a.createElement("div",null,r.a.createElement(we.a,{onClick:function(){e.toogleMenu()}}),r.a.createElement(de.a,{open:this.state.open,onClose:function(){e.toogleMenu()},onOpen:function(){e.toogleMenu()}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){e.toogleMenu()},onKeyDown:function(){e.toogleMenu()},style:{marginTop:"25px"}},r.a.createElement(je.a,null,te.map(function(e,n){var a="Settings"===e.navbarName;return r.a.createElement("div",{key:n},a&&r.a.createElement(xe.a,null),r.a.createElement(ye.a,{to:e.path,style:{textDecoration:"none"}},r.a.createElement(z.a,null,r.a.createElement(ge.a,{children:r.a.createElement(e.icon,null)}),r.a.createElement(ve.a,{primary:t(e.sidebarName)}))))})))))}}]),t}(r.a.Component),Se=Object(Q.b)()(Object(Ee.a)(Object(A.withStyles)({list:{width:250}})(Ce))),Ne=n(38);var Fe=Object(A.withStyles)(function(e){return{root:{width:"100%",display:"flex",flexDirection:"column"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},search:Object(w.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ne.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ne.fade)(e.palette.common.white,.25)},width:"80%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(w.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})(function(e){var t=e.classes,n=e.handleFilter;return r.a.createElement("div",{className:t.root},r.a.createElement(ae.a,{position:"static"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,{className:t.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(Se,null)),r.a.createElement("div",{style:{flexGrow:10}}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(pe.a,null)),r.a.createElement(se.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){return n(e.target.value)},to:"/search"})),r.a.createElement("div",{className:t.grow}))))});var De=function(){return r.a.createElement("h1",null,"NotFound")},Re=B(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,render:!1,dataCopy:null,loading:!0},n.handleFilter=k.a.debounce(function(e){var t=k.a.filter(n.state.data,function(t){return t.name.first.indexOf(e)>-1});0===e.length&&(t=n.state.dataCopy),n.setState({data:t})},300),n.handleData=function(e){console.log(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,{handleFilter:this.handleFilter}),r.a.createElement(d.a,{basename:"/contacts-app"},te.map(function(e,t){return r.a.createElement(f.a,{exact:!0,path:e.path,component:e.component,key:t})}),r.a.createElement(f.a,{path:"*",exact:!0,component:De})))))}}]),t}(a.Component)),Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Pe=n(159),Ie=n(155),Ue=n.n(Ie),Be=n(156),Me=n.n(Be),Te=n(157),We=n(158);(function(){var e={en:{translation:Te},pl:{translation:We}};Pe.a.use(Me.a).use(Ue.a).use(Q.a).init({resources:e,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},react:{wait:!0}})})(),i.a.render(r.a.createElement(Re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/contacts-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/contacts-app","/service-worker.js");Ae?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Le(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Le(t,e)})}}()}},[[5375,2,1]]]);
//# sourceMappingURL=main.182c8ac5.chunk.js.map