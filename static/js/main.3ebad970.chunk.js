(this["webpackJsonpgigaturnip-frontend"]=this["webpackJsonpgigaturnip-frontend"]||[]).push([[0],{290:function(e){e.exports=JSON.parse('{"properties":{"label":{"type":"string","title":"Label"}},"type":"object"}')},295:function(e){e.exports=JSON.parse('{"type":"object","title":"Stage options","description":"Describe the stage you want.","properties":{"name":{"title":"Stage name","type":"string","description":"Example: Violation description form"},"description":{"title":"Stage description","type":"string","description":"Example: Form that describes an election violation","default":""},"allow_multiple_files":{"type":"boolean","title":"Allow multiple files","default":false},"is_creatable":{"type":"boolean","title":"Task is creatable","default":false},"copy_input":{"type":"boolean","title":"Copy input","default":false},"library":{"title":"Library","type":"string","default":""},"displayed_prev_stages":{"items":{"type":"string","title":"Stage"},"title":"Background Stages","type":"array"}},"dependencies":{},"required":["name"]}')},322:function(e,t,n){},504:function(e,t,n){},558:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),o=(n(322),n(23)),s=n(18),l=n.n(s),u=n(38),d=n(30),j=n(11),b=n(50),p=n(28),f=n(77);f.a.initializeApp({apiKey:"AIzaSyCXiwOUNsbzKH7sbSAZrqA9f7VOeCMdUOQ",authDomain:"gigaturnip-b6b5b.firebaseapp.com",projectId:"gigaturnip-b6b5b",storageBucket:"gigaturnip-b6b5b.appspot.com",messagingSenderId:"414429242328",appId:"1:414429242328:web:a4685f5ac6895ea767c8ad",measurementId:"G-Y8JTEJMTET"});var h=new f.a.auth.GoogleAuthProvider;f.a.firestore().settings({ignoreUndefinedProperties:!0});var O=function(){return h.setCustomParameters({prompt:"select_account"}),f.a.auth().signInWithPopup(h)},g=function(){return f.a.auth().signOut().then((function(){return localStorage.removeItem("token")})).then((function(){return window.location.reload(!1)}))},m=f.a,x=n(597),v=n(626),y=n(600),S=n(5),w=Object(x.a)((function(e){return Object(v.a)({root:{background:"#FFF",borderColor:"#000",borderWidth:"1px",borderStyle:"solid",borderRadius:"3px",fontSize:"12px",width:"150px",textAlign:"center",padding:10}})})),C=function(e){var t=e.data,n=e.style,a=w();return Object(S.jsxs)(y.a,{className:a.root,style:n,children:[Object(S.jsx)("div",{children:t.label}),Object(S.jsx)(b.b,{type:"target",position:b.c.Top,style:{borderRadius:"100%"}}),Object(S.jsx)(b.b,{type:"source",position:b.c.Bottom,style:{borderRadius:"100%"}})]})},k={borderColor:"#0041d0"},I=function(e){var t=e.data;return Object(S.jsx)(C,{data:t,style:k})},N={borderColor:"#32CD32"},_=function(e){var t=e.data;return Object(S.jsx)(C,{data:t,style:N})},E=n(56),T=n(290),D=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(j.a)(i,2),s=r[0],l=r[1];Object(a.useEffect)((function(){s&&s.label&&""!==s.label?c(!0):c(!1)}),[s]);var u=function(e,t,n){console.log(t,n);var a=JSON.stringify(Object(o.a)(Object(o.a)({},s),{},{type:n}));e.dataTransfer.setData("application/reactflow",a),e.dataTransfer.effectAllowed="move"},d=function(){l(void 0)};return Object(S.jsxs)("aside",{children:[Object(S.jsx)("div",{className:"description",children:"You can drag these nodes to the pane on the right."}),Object(S.jsx)("div",{style:{marginRight:5},children:Object(S.jsx)(E.a,{schema:T,formData:s,onChange:function(e){return l(e.formData)},children:" "})}),Object(S.jsx)("div",{draggable:!1,style:{color:"red",display:"flex",justifyContent:"center",alignItems:"center",padding:10},children:!n&&"Enter Label to drag the node"}),Object(S.jsx)("div",{className:"dndnode stage",onDragEnd:d,onDragStart:function(e){return u(e,s?s.label:"","STAGE")},draggable:n,children:"Stage Node"}),Object(S.jsx)("div",{className:"dndnode logic",onDragEnd:d,onDragStart:function(e){return u(e,s?s.label:"","LOGIC")},draggable:n,children:"Logic Node"})]})},A=(n(504),n(291)),P="api/v1/campaigns/",B="api/v1/chains/",G="api/v1/taskstages/",L="api/v1/conditionalstages/",J="api/v1/tasks/",F=n.n(A).a.create({baseURL:"https://journal-bb5e3.uc.r.appspot.com/"});F.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="JWT "+t),e}),(function(e){return Promise.reject(e)}));var R=F,W=function(){var e=Object(a.useRef)(null),t=Object(p.f)(),n=Object(p.g)(),c=n.chainId,i=(n.campaignId,Object(a.useState)(null)),r=Object(j.a)(i,2),s=r[0],f=r[1],h=Object(a.useState)([]),O=Object(j.a)(h,2),g=O[0],m=O[1];Object(a.useEffect)((function(){Promise.all([R.get(G),R.get(L)]).then((function(e){var t=e[0].data,n=e[1].data;t.forEach((function(e){return e.type="STAGE"})),n.forEach((function(e){return e.type="LOGIC"}));var a=[].concat(Object(d.a)(t),Object(d.a)(n)).filter((function(e){return e.chain==c})),i=a.map((function(e){return{id:e.id.toString(),position:{x:parseFloat(e.x_pos),y:parseFloat(e.y_pos)},data:{label:e.name},type:e.type}}));return m(i),a})).then((function(e){e.forEach((function(e){e.in_stages.length>0&&e.in_stages.forEach((function(t){var n={source:t.toString(),target:e.id.toString(),id:"".concat(t,"-").concat(e.id),arrowHeadType:"arrow"};m((function(e){return Object(b.e)(n,e)}))}))}))}))}),[]);var x=function(e){return g.filter((function(t){return t.id==e})).pop()},v=function(e){return"STAGE"==e.type?G:"LOGIC"==e.type?L:void 0},y=function(){var e=Object(u.a)(l.a.mark((function e(t,n,a,c){var i,r,o,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=v(t))){e.next=6;break}return e.next=4,R.get(i+t.id+"/").then((function(e){return"in"===a?e.data.in_stages:"out"===a?e.data.out_stages:void 0})).catch((function(e){}));case 4:(r=e.sent)&&(o=r.map((function(e){return e.toString()})),s=[],"create"===c&&(s=[n].concat(Object(d.a)(o))),"delete"===c&&(s=o.filter((function(e){return e!==n}))),u=void 0,"in"===a&&(u={in_stages:s}),"out"===a&&(u={out_stages:s}),u&&(console.log(u),R.patch(i+t.id+"/",u)));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(o.a)(Object(o.a)({},t),{},{arrowHeadType:"arrow"}),a=x(n.target),c=x(n.source),i=n.target,r=n.source,m((function(e){return Object(b.e)(n,e)})),a&&y(a,r,"in","create"),c&&y(c,i,"out","create");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=x(t),c=x(n),a&&y(a,n,"in","delete"),c&&y(c,t,"out","delete");case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(l.a.mark((function t(n){var a,c,i,r,o,u,d,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.current.getBoundingClientRect(),c=n.dataTransfer.getData("application/reactflow"),i=s.project({x:n.clientX-a.left,y:n.clientY-a.top}),r=JSON.parse(c),o=r.label,u=r.type,t.next=9,E({type:u,position:i,label:o});case 9:d=t.sent,j={id:d,type:u,position:i,data:{label:o}},m((function(e){return e.concat(j)}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(e){var t={x_pos:e.position.x,y_pos:e.position.y},n=v(e);n&&R.patch(n+e.id+"/",t)},E=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={name:t.label,x_pos:t.position.x,y_pos:t.position.y,chain:parseInt(c),out_stages:[]},!(a=v(t))){e.next=7;break}return e.next=5,R.post(a,n);case 5:return i=e.sent,e.abrupt("return",i.data.id.toString());case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,n){console.log(n);var a=t.location.pathname;n.id&&("LOGIC"===n.type&&t.push("".concat(a,"/createlogic/").concat(n.id)),"STAGE"===n.type&&t.push("".concat(a,"/actions/").concat(n.id)),"default"===n.type&&(n.target||n.source)&&console.log("edge"))},A={LOGIC:I,STAGE:_};return Object(S.jsx)("div",{className:"dndflow",children:Object(S.jsxs)(b.d,{children:[Object(S.jsx)("div",{className:"reactflow-wrapper",ref:e,children:Object(S.jsx)(b.f,{nodeTypes:A,elements:g,onConnect:w,onElementsRemove:function(e){m((function(t){return function(e,t){var n=e.map((function(e){return e.id}));return t.filter((function(e){var t=e;if(n.includes(e.id)||n.includes(t.target)||n.includes(t.source)){if(e.hasOwnProperty("source")&&e.hasOwnProperty("target")){var a=e.target,c=e.source;C(a,c)}else{var i=v(e);i&&R.delete(i+e.id+"/")}return!1}return!0}))}(e,t)}))},onNodeDoubleClick:T,onEdgeDoubleClick:T,onLoad:function(e){return f(e)},onDrop:k,onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},onNodeDragStop:function(e,t){N(t)},style:{width:"100%",height:700},children:Object(S.jsx)(b.a,{})})}),Object(S.jsx)(D,{})]})})},U=n(6),z=n(302),V=n(295),q=n(602),Y=n(603),X=n(90),H=n(625),M=function(e){var t=e.schema;return Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{className:"form-label",children:null===t||void 0===t?void 0:t.title}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"file"})]})},$=function(e){var t,n,c=e.jsonSchema,i=e.uiSchema,r=e.formResponses,s=e.onJsonChange,l=e.onUiChange,u=null!==(t=JSON.parse(c))&&void 0!==t?t:{},d=null!==(n=JSON.parse(i))&&void 0!==n?n:{},b=JSON.stringify(Object(o.a)(Object(o.a)({},r),{},{json_schema:u,ui_schema:d})),p=Object(a.useState)(!1),f=Object(j.a)(p,2),h=f[0],O=f[1],g=Object(a.useState)(""),m=Object(j.a)(g,2),x=m[0],v=m[1],y=Object(a.useState)(""),w=Object(j.a)(y,2),C=w[0],k=w[1],I={customfile:M};Object(a.useEffect)((function(){v(c),k(i)}),[]);return Object(S.jsxs)("div",{style:{width:"70%",minWidth:"400px",margin:"0 auto",display:"block",padding:10},children:[Object(S.jsx)(E.a,{schema:u,uiSchema:d,widgets:I,onSubmit:function(e){return console.log(e.formData)}}),Object(S.jsx)("br",{}),Object(S.jsx)(q.a,{checked:h,onChange:function(e){O(e.target.checked)},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),h&&Object(S.jsx)(Y.a,{color:"primary",variant:"contained",onClick:function(){console.log(x),console.log(C),s(x),l(C)},children:"Save Schemas"}),h&&Object(S.jsx)(X.a,{variant:"h6",color:"error",children:"\u041e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e: \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u044e \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u043d\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(S.jsx)(H.a,{id:"outlined-multiline-static",label:"JSON",multiline:!0,fullWidth:!0,defaultValue:"Default Value",variant:"outlined",InputProps:{readOnly:!h},value:x,onChange:function(e){v(e.target.value)},style:{marginTop:15,marginBottom:15}}),Object(S.jsx)(H.a,{id:"outlined-multiline-static",label:"UI",multiline:!0,fullWidth:!0,defaultValue:"Default Value",variant:"outlined",InputProps:{readOnly:!h},value:C,onChange:function(e){k(e.target.value)},style:{marginTop:15,marginBottom:30}}),Object(S.jsx)("br",{}),Object(S.jsx)(Y.a,{onClick:function(){navigator.clipboard.writeText(b).then((function(){return console.log("success")})).catch((function(e){return alert(e)}))},variant:"contained",color:"primary",style:{marginBottom:15},children:"Copy FUL STAGE to Clipboard"}),Object(S.jsx)(H.a,{id:"outlined-multiline-static",label:"FULL STAGE",multiline:!0,fullWidth:!0,defaultValue:"Default Value",variant:"outlined",InputProps:{readOnly:!0},value:b})]})},K={file:{displayName:"File",matchIf:[{types:["string"],widget:"customfile"}],defaultDataSchema:{},defaultUiSchema:{"ui:widget":"customfile"},type:"string"}},Q=(n(285),n(560)),Z=n(296),ee=n.n(Z),te=n(297),ne=n.n(te),ae=["id","json_schema","ui_schema"],ce=function(){var e=Object(p.g)(),t=e.id,n=(e.chainId,Object(a.useState)("")),c=Object(j.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(""),l=Object(j.a)(s,2),u=l[0],d=l[1],b=Object(a.useState)(V),f=Object(j.a)(b,2),h=f[0],O=(f[1],Object(a.useState)({})),g=Object(j.a)(O,2),m=g[0],x=g[1],v=Object(a.useState)(!1),y=Object(j.a)(v,2),w=y[0],C=y[1],k=Object(a.useState)([]),I=Object(j.a)(k,2),N=(I[0],I[1],Object(a.useState)(!0)),_=Object(j.a)(N,2),T=(_[0],_[1],Object(a.useState)([])),D=Object(j.a)(T,2),A=(D[0],D[1],Object(a.useState)([])),P=Object(j.a)(A,2),B=(P[0],P[1],Object(a.useState)([])),L=Object(j.a)(B,2);L[0],L[1];Object(a.useEffect)((function(){t&&R.get(G+t+"/").then((function(e){return e.data})).then((function(e){e.id;var t=e.json_schema,n=e.ui_schema,a=Object(U.a)(e,ae),c=JSON.stringify(t),i=JSON.stringify(n);r(c),d(i),x(a)}))}),[t]);return Object(S.jsxs)("div",{children:[Object(S.jsx)(Q.a,{style:{float:"right"},onClick:function(){C((function(e){return!e}))},children:w?Object(S.jsx)(ne.a,{fontSize:"large"}):Object(S.jsx)(ee.a,{fontSize:"large"})}),w?Object(S.jsx)($,{jsonSchema:i,uiSchema:u,formResponses:m,onJsonChange:function(e){r(e)},onUiChange:function(e){d(e)}}):Object(S.jsxs)("div",{children:[Object(S.jsx)(z.a,{schema:i,uischema:u,onChange:function(e,t){r(e),d(t)},mods:{customFormInputs:Object(o.a)({},K)}}),Object(S.jsx)("div",{style:{width:"70%",minWidth:"400px",margin:"0 auto",display:"block",padding:10},children:Object(S.jsx)(E.a,{schema:h,formData:m,onChange:function(e){return x(e.formData)},onSubmit:function(){var e=null,n=null;i&&u&&(e=JSON.parse(i),n=JSON.parse(u));var a=Object(o.a)(Object(o.a)({},m),{},{json_schema:e,ui_schema:n});R.patch(G+t+"/",a).then((function(e){return alert("Saved")})).catch((function(e){return alert(e)}))}})})]})]})},ie=n(13),re=n(608),oe=n(624),se=n(192),le=n(102),ue=n.n(le),de=n(134),je=n.n(de),be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(se.B)(e),a=Object(se.G)(n,"",e,t),c=function(e,t){return function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[""];return Object.keys(n).forEach((function(i){if("object"===typeof n[i]){var r=c.map((function(e){return"".concat(e,".").concat(i)}));n[i].__rjsf_additionalProperties&&""!==n[i].$name?a.push(n[i].$name):e(n[i],a,r)}else"$name"===i&&""!==n[i]&&c.forEach((function(e){e=e.replace(/^\./,"");var n=ue()(t,e);("object"!==typeof n||je()(n))&&a.push(e)}))})),a}(e)},i=c(a,t);return i},pe=function(){var e=Object(p.g)().id,t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),b=s[0],f=s[1],h=Object(a.useState)({}),O=Object(j.a)(h,2),g=O[0],m=O[1],x=Object(a.useState)({logic_array:{items:{"ui:order":["field","condition","value"]}},"ui:order":["logic_array"]}),v=Object(j.a)(x,2),y=(v[0],v[1],Object(a.useState)({})),w=Object(j.a)(y,2),C=w[0],k=w[1],I=Object(a.useState)(),N=Object(j.a)(I,2),_=N[0],T=N[1],D=Object(a.useState)(!1),A=Object(j.a)(D,2),P=A[0],B=A[1];Object(a.useEffect)((function(){R.get(L+e+"/").then((function(e){return e.data})).then((function(e){k(e.conditions),B(e.pingpong),console.log("PING PONG",e.pingpong)}))}),[e]),Object(a.useEffect)((function(){var t=function(t){if(t){var n=R.get(G+t+"/").then((function(e){return e.data}));return n||R.get(L+t+"/").then((function(e){return e.data}))}return R.get(L+e+"/").then((function(e){return e.data}))},n=function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map(function(){var e=Object(u.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:return a=e.sent,e.abrupt("return",Object(ie.a)({},n,a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e&&function(){var e=Object(u.a)(l.a.mark((function e(){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(a=e.sent,c=void 0,!(c=P?a.out_stages:a.in_stages)){e.next=10;break}return e.next=8,n(c);case 8:r=e.sent,Promise.all(r).then((function(e){Object.keys(e).length>0&&(T(e),i(!0))}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,P]),Object(a.useEffect)((function(){if(_&&_.length>0){var e=_.map((function(e){var t,n=Object.values(e)[0],a=(n.ui_schema,n.json_schema),c=null!==(t=a.dependencies)&&void 0!==t?t:{},i=Object.values(c),r=be(a);if(i.length>0){var s=i.map((function(e){return function(e){var t=null;return e.hasOwnProperty("oneOf")&&(t=e.oneOf),e.hasOwnProperty("allOf")&&(t=e.allOf),t?t.map((function(e){var t=Object(o.a)({type:"object"},e);return be(t)})).flat():[]}(e)})).flat();r=Array.from(new Set([].concat(Object(d.a)(b),Object(d.a)(s))))}return console.log(n),console.log("Fields",b),r})).flat();f(e)}}),[P,_]),Object(a.useEffect)((function(){m({items:{type:"object",title:"Logic",properties:{field:{enum:b,title:"Field",type:"string"},condition:{enum:["==","!=",">","<",">=","<=","ARRAY-CONTAINS","ARRAY-CONTAINS-NOT"],title:"Condition",type:"string"},value:{title:"Value",type:"string"}},dependencies:{},required:[]},title:"Logic Array",type:"array",dependencies:{},required:[]})}),[b]);return Object(S.jsx)("div",{style:{width:"70%",minWidth:"400px",margin:"0 auto",display:"block",padding:10},children:c?Object(S.jsxs)("div",{children:[Object(S.jsx)(re.a,{control:Object(S.jsx)(oe.a,{checked:P,onChange:function(e){B(e.target.checked)},name:"PingPong",color:"primary"}),label:"Ping Pong"}),Object(S.jsx)(E.a,{schema:g,formData:C,onChange:function(e){return k(e.formData)},onSubmit:function(){var t={conditions:C,pingpong:P};console.log(C),R.patch(L+e+"/",t).then((function(e){return alert("Saved")})).catch((function(e){return alert(e)}))}})]}):Object(S.jsx)("p",{children:"No node connection or end_ui detected. Connect to one or check if form has fields."})})},fe=(Object(x.a)((function(e){return Object(v.a)({formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)}})})),function(){var e=Object(p.g)(),t=e.id,n=e.chainId,a=Object(p.f)(),c=function(){var e=Object(u.a)(l.a.mark((function e(){var c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.location.pathname.split("/actions")[0],e.next=3,R.post("api/v1/cases/",{chain:n}).then((function(e){return e.data}));case 3:return i=e.sent,console.log(i),e.next=7,R.post(J,{case:i.id,stage:t}).then((function(e){return e.data}));case 7:r=e.sent,console.log(r),a.push("".concat(c,"/task/").concat(r.id));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)(y.a,{children:Object(S.jsxs)(y.a,{container:!0,justify:"center",style:{background:"#7FB3D5"},component:"div",children:[Object(S.jsx)(y.a,{item:!0,style:{margin:20},children:Object(S.jsx)(Y.a,{onClick:function(){var e=a.location.pathname.split("/actions")[0];console.log(e),a.push("".concat(e,"/createstage/").concat(t))},children:"Create Form"})}),Object(S.jsx)(y.a,{item:!0,style:{margin:20},children:Object(S.jsx)(Y.a,{onClick:c,children:"Create Task (for test)"})})]})})}),he=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),r=Object(j.a)(i,2),o=r[0],s=r[1],d=Object(a.useState)({}),b=Object(j.a)(d,2),f=b[0],h=b[1],O=Object(p.g)().id;Object(a.useEffect)((function(){O&&function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get(J+O).then((function(e){return e.data}));case 2:return t=e.sent,e.next=5,a=t.stage,R.get(G+a).then((function(e){return e.data}));case 5:n=e.sent,console.log(t,n),h(t.responses),c(n.json_schema),s(n.ui_schema);case 10:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}()()}),[O]);return Object(S.jsx)("div",{style:{width:"70%",minWidth:"400px",margin:"0 auto",display:"block",padding:10},children:Object(S.jsx)(E.a,{schema:n,uiSchema:o,formData:f,onChange:function(e){return h(e.formData)},onSubmit:function(){console.log(f);var e={responses:f};R.patch(J+O,e)}})})},Oe=n(7),ge=n(44),me=n(613),xe=n(300),ve=n.n(xe),ye=n(299),Se=n.n(ye),we=n(301),Ce=n.n(we),ke=n(298),Ie=n.n(ke),Ne=n(609),_e=n(610),Ee=n(611),Te=n(606),De=n(623),Ae=n(612),Pe=n(628),Be=n(607),Ge=n(561),Le=n(614),Je=n(615),Fe=c.a.createContext(),Re=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(j.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){m.auth().onAuthStateChanged((function(e){e&&(r(e),e.getIdToken(!0).then((function(e){localStorage.setItem("token",e)})))})),m.auth().onIdTokenChanged((function(e){e&&e.getIdToken(!1).then((function(e){localStorage.setItem("token",e)}))}))}),[]),Object(S.jsx)(Fe.Provider,{value:{currentUser:i},children:t})},We=240,Ue=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:We,width:"calc(100% - ".concat(We,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:We,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:We,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ie.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1},title:{flexGrow:1},formControl:{margin:e.spacing(1),alignItems:"center"},selectEmpty:{marginTop:e.spacing(2)},select:{},selectIcon:{fill:"white",top:"calc(50% - 14px)"}})})),ze=function(e){var t,n,c=Ue(),i=Object(ge.a)(),r=Object(p.f)(),o=Object(p.g)().campaignId,s=Object(a.useContext)(Fe).currentUser,l=e.children,u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],f=d[1],h=Object(a.useState)(o),m=Object(j.a)(h,2),x=m[0],v=m[1],w=Object(a.useState)([]),C=Object(j.a)(w,2),k=C[0],I=C[1];console.log("CURRENT CAMPAIGN",o),Object(a.useEffect)((function(){R.get(P).then((function(e){return e.data})).then((function(e){console.log(e),I(e)}))}),[]);return Object(S.jsxs)("div",{className:c.root,children:[Object(S.jsx)(Ne.a,{}),Object(S.jsx)(_e.a,{position:"fixed",className:Object(Oe.a)(c.appBar,Object(ie.a)({},c.appBarShift,b)),children:Object(S.jsxs)(Ee.a,{children:[Object(S.jsx)(Q.a,{color:"inherit","aria-label":"open drawer",onClick:function(){f(!0)},edge:"start",className:Object(Oe.a)(c.menuButton,Object(ie.a)({},c.hide,b)),children:Object(S.jsx)(Ie.a,{})}),Object(S.jsx)(X.a,{variant:"h6",noWrap:!0,style:{cursor:"pointer"},onClick:function(){r.push("/")},children:"GigaTurnip Admin"}),Object(S.jsx)(y.a,{className:c.title}),Object(S.jsx)(Te.a,{className:c.formControl,size:"small",children:Object(S.jsx)(De.a,{className:c.select,autoWidth:!0,labelId:"campaign-select-label",id:"campaign-select-label",value:x,onChange:function(e){var t=e.target.value;console.log(t),v(t),r.push("/campaign/".concat(t))},label:"Campaign",disableUnderline:!0,style:{color:"white"},inputProps:{classes:{icon:c.selectIcon}},children:k.map((function(e){return Object(S.jsx)(Ae.a,{value:e.id,children:e.name},"".concat(e.name,"_").concat(e.id))}))})}),s?Object(S.jsx)(Y.a,{onClick:g,color:"inherit",children:"Log out"}):Object(S.jsx)(Y.a,{onClick:O,color:"inherit",children:"Login"})]})}),Object(S.jsxs)(Pe.a,{variant:"permanent",className:Object(Oe.a)(c.drawer,(t={},Object(ie.a)(t,c.drawerOpen,b),Object(ie.a)(t,c.drawerClose,!b),t)),classes:{paper:Object(Oe.a)((n={},Object(ie.a)(n,c.drawerOpen,b),Object(ie.a)(n,c.drawerClose,!b),n))},children:[Object(S.jsx)("div",{className:c.toolbar,children:Object(S.jsx)(Q.a,{onClick:function(){f(!1)},children:"rtl"===i.direction?Object(S.jsx)(Se.a,{}):Object(S.jsx)(ve.a,{})})}),Object(S.jsx)(me.a,{}),Object(S.jsx)(Be.a,{children:Object(S.jsxs)(Ge.a,{button:!0,onClick:function(){return e="chain",void r.push("/campaign/".concat(o,"/").concat(e));var e},children:[Object(S.jsx)(Le.a,{children:Object(S.jsx)(Ce.a,{})}),Object(S.jsx)(Je.a,{primary:"Chains"})]})})]}),Object(S.jsxs)("main",{className:c.content,children:[Object(S.jsx)("div",{className:c.toolbar}),l]})]})},Ve=n(40),qe=n(616),Ye=n(618),Xe=n(617),He=Object(x.a)({root:{width:300},extra:{marginBottom:15}}),Me=function(e){var t=He(),n=e.chain,a=n.id,c=n.campaign,i=n.name,r=n.description,o=Object(p.f)();return Object(S.jsxs)(qe.a,{className:t.root,children:[Object(S.jsxs)(Xe.a,{children:[Object(S.jsx)(X.a,{variant:"h5",component:"h2",gutterBottom:!0,children:i}),Object(S.jsxs)(X.a,{className:t.extra,variant:"subtitle2",color:"textSecondary",children:["ID: ",a," Campaign: ",c]}),Object(S.jsx)(X.a,{variant:"body1",component:"p",children:r||Object(S.jsx)("br",{})})]}),Object(S.jsx)(Ye.a,{children:Object(S.jsx)(Y.a,{size:"small",onClick:function(){o.push("".concat(o.location.pathname,"/").concat(a))},children:"Open"})})]})},$e=n(145),Ke=n.n($e),Qe=n(620),Ze=n(619),et=n(149),tt=n(621),nt=n(622),at=Object(x.a)({avatar:{backgroundColor:et.a[100],color:et.a[600]}}),ct=function(e){at();var t=Object(p.g)().campaignId,n=e.onClose,c=e.onSave,i=e.open,r=Object(a.useState)(""),o=Object(j.a)(r,2),s=o[0],l=o[1],u=Object(a.useState)(""),d=Object(j.a)(u,2),b=d[0],f=d[1],h=Object(a.useState)(t),O=Object(j.a)(h,2),g=O[0],m=(O[1],function(){n()});return Object(S.jsxs)(Ze.a,{onClose:m,"aria-labelledby":"simple-dialog-title",open:i,children:[Object(S.jsx)(Qe.a,{children:"Add Chain"}),Object(S.jsx)(tt.a,{children:Object(S.jsxs)(y.a,{container:!0,justify:"center",children:[Object(S.jsx)(y.a,{container:!0,item:!0,children:Object(S.jsx)(H.a,{fullWidth:!0,label:"Name",onChange:function(e){var t=e.target.value;l(t||"")}})}),Object(S.jsx)(y.a,{container:!0,item:!0,children:Object(S.jsx)(H.a,{fullWidth:!0,label:"Description",multiline:!0,rows:4,onChange:function(e){var t=e.target.value;f(t||"")}})})]})}),Object(S.jsxs)(nt.a,{children:[Object(S.jsx)(Y.a,{onClick:function(){if(s&&g){var e=parseInt(g);c({name:s,description:b,campaign:e})}},children:"Save"}),Object(S.jsx)(Y.a,{onClick:m,children:"Close"})]})]})},it=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=r[0],s=r[1],l=Object(p.g)().campaignId;Object(a.useEffect)((function(){R.get(B).then((function(e){return e.data})).then((function(e){console.log(e);var t=e.filter((function(e){var t;return(null===(t=e.campaign)||void 0===t?void 0:t.toString())==l}));c(t)}))}),[]);var u=function(e){console.log(e),R.post(B,e).then((function(e){console.log(e),window.location.reload(!1)}))};return Object(S.jsxs)(y.a,{container:!0,justify:"center",children:[Object(S.jsx)(ct,{open:o,onSave:function(e){s(!1),u(e)},onClose:function(){s(!1)}}),Object(S.jsx)(y.a,{container:!0,style:{padding:20},children:Object(S.jsx)(Y.a,{variant:"contained",color:"primary",startIcon:Object(S.jsx)(Ke.a,{}),onClick:function(){s(!0)},children:"Add Chain"})}),n.map((function(e){return Object(S.jsx)(y.a,{item:!0,style:{padding:10},children:Object(S.jsx)(Me,{chain:e},e.id)})}))]})},rt=Object(x.a)({root:{width:300},extra:{marginBottom:15}}),ot=function(e){var t=rt(),n=e.chain,a=n.id,c=n.name,i=n.description,r=Object(p.f)();return Object(S.jsxs)(qe.a,{className:t.root,children:[Object(S.jsxs)(Xe.a,{children:[Object(S.jsx)(X.a,{variant:"h5",component:"h2",gutterBottom:!0,children:c}),Object(S.jsxs)(X.a,{className:t.extra,variant:"subtitle2",color:"textSecondary",children:["ID: ",a]}),Object(S.jsx)(X.a,{variant:"body1",component:"p",children:i||Object(S.jsx)("br",{})})]}),Object(S.jsx)(Ye.a,{children:Object(S.jsx)(Y.a,{size:"small",onClick:function(){r.push("/campaign/".concat(a))},children:"Open"})})]})},st=Object(x.a)({avatar:{backgroundColor:et.a[100],color:et.a[600]}}),lt=function(e){st();var t=e.onClose,n=e.onSave,c=e.open,i=Object(a.useState)(""),r=Object(j.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)(""),u=Object(j.a)(l,2),d=u[0],b=u[1],p=Object(a.useState)(),f=Object(j.a)(p,2),h=f[0],O=(f[1],function(){t()});return Object(S.jsxs)(Ze.a,{onClose:O,"aria-labelledby":"simple-dialog-title",open:c,children:[Object(S.jsx)(Qe.a,{children:"Add Chain"}),Object(S.jsx)(tt.a,{children:Object(S.jsxs)(y.a,{container:!0,justify:"center",children:[Object(S.jsx)(y.a,{container:!0,item:!0,children:Object(S.jsx)(H.a,{fullWidth:!0,label:"Name",onChange:function(e){var t=e.target.value;s(t||"")}})}),Object(S.jsx)(y.a,{container:!0,item:!0,children:Object(S.jsx)(H.a,{fullWidth:!0,label:"Description",multiline:!0,rows:4,onChange:function(e){var t=e.target.value;b(t||"")}})})]})}),Object(S.jsxs)(nt.a,{children:[Object(S.jsx)(Y.a,{onClick:function(){o?n({name:o,description:d,campaign:h}):alert("error: No name")},children:"Save"}),Object(S.jsx)(Y.a,{onClick:O,children:"Close"})]})]})},ut=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){R.get(P).then((function(e){return e.data})).then((function(e){console.log(e),c(e)}))}),[]);var l=function(e){R.post(P,e).then((function(e){console.log(e),window.location.reload(!1)}))};return Object(S.jsxs)(y.a,{container:!0,justify:"center",children:[Object(S.jsx)(lt,{open:o,onSave:function(e){s(!1),l(e)},onClose:function(){s(!1)}}),Object(S.jsx)(y.a,{container:!0,style:{padding:20},children:Object(S.jsx)(Y.a,{variant:"contained",color:"primary",startIcon:Object(S.jsx)(Ke.a,{}),onClick:function(){s(!0)},children:"Add Campaign"})}),n.map((function(e){return Object(S.jsx)(y.a,{item:!0,style:{padding:10},children:Object(S.jsx)(ot,{chain:e},e.id)})}))]})},dt=240,jt=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:dt,width:"calc(100% - ".concat(dt,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:dt,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:dt,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ie.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1},title:{flexGrow:1}})})),bt=function(e){var t=jt(),n=(Object(ge.a)(),c.a.useState(!1)),i=Object(j.a)(n,2),r=i[0],o=(i[1],e.children),s=Object(a.useContext)(Fe).currentUser,l=(Object(p.f)(),Object(p.g)().campaignId);console.log(l);return Object(S.jsxs)("div",{className:t.root,children:[Object(S.jsx)(Ne.a,{}),Object(S.jsx)(_e.a,{position:"fixed",className:Object(Oe.a)(t.appBar,Object(ie.a)({},t.appBarShift,r)),children:Object(S.jsxs)(Ee.a,{children:[Object(S.jsx)(X.a,{className:t.title,variant:"h6",noWrap:!0,children:"GigaTurnip Admin"}),s?Object(S.jsx)(Y.a,{onClick:g,color:"inherit",children:"Log out"}):Object(S.jsx)(Y.a,{onClick:O,color:"inherit",children:"Login"})]})}),Object(S.jsxs)("main",{className:t.content,children:[Object(S.jsx)("div",{className:t.toolbar}),o]})]})},pt=function(){Object(a.useContext)(Fe).currentUser;return Object(S.jsx)("div",{children:Object(S.jsx)(Ve.a,{children:Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{path:"/campaign/:campaignId",children:Object(S.jsxs)(ze,{children:[Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain/:chainId/createstage/:id",children:Object(S.jsx)(ce,{})}),Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain/:chainId/createlogic/:id",children:Object(S.jsx)(pe,{})}),Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain/:chainId/task/:id",children:Object(S.jsx)(he,{})}),Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain/:chainId/actions/:id",children:Object(S.jsx)(fe,{})}),Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain",children:Object(S.jsx)(it,{})}),Object(S.jsx)(p.a,{exact:!0,path:"/campaign/:campaignId/chain/:chainId",children:Object(S.jsx)(W,{})})]})}),Object(S.jsx)(p.a,{path:"/",children:Object(S.jsx)(bt,{children:Object(S.jsx)(ut,{})})})]})})})},ft=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,629)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(S.jsx)(Re,{children:Object(S.jsx)(pt,{})}),document.getElementById("root")),ft()}},[[558,1,2]]]);
//# sourceMappingURL=main.3ebad970.chunk.js.map