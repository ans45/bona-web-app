(this["webpackJsonpbona-web-app"]=this["webpackJsonpbona-web-app"]||[]).push([[5],{572:function(t,e,a){"use strict";a.r(e),a.d(e,"HomePage",(function(){return R}));var n=a(233),i=a(526),r=a.n(i),o=a(527),u=a(566),c=a(571),l=a(568),m=a(564),s=a(569),p=a(560),d=a(515),b=a(567),f=a(528),x=a(0),E=a.n(x),v=a(520),g=a(573),h=Object(p.a)((function(t){return{buttons:{textAlign:"center"},button:{marginRight:t.spacing(1),borderRadius:99999,padding:"".concat(t.spacing(1),"px ").concat(t.spacing(8),"px"),textTransform:"none",fontWeight:t.typography.fontWeightBold,"&:last-child":{marginRight:0}}}}));function y(t){var e=t.children,a=t.onSubmit,n=Object(x.useState)(0),i=Object(f.a)(n,2),r=i[0],o=i[1],u=Object(x.useState)({}),c=Object(f.a)(u,2),l=c[0],m=c[1],s=x.Children.count(e),p=x.Children.toArray(e)[r],d=0===r,b=r===s-1,y=function(t,e,a,n){return function(i){a(Math.min(t+1,e-1)),n(i)}}(r,s,o,m),j=function(t,e){return function(){return e(Math.max(t-1,0))}}(r,o),w=function(t){return function(e){return t.props.validate(e)}}(p),O=function(t,e,a){return function(n){if(t)return e(n);a(n)}}(b,a,y),B=h();return E.a.createElement(v.b,{initialValues:l,validate:w,onSubmit:O},(function(t){var e=t.handleSubmit,a=t.submitting;return E.a.createElement("form",{onSubmit:e},p,E.a.createElement("div",{className:B.buttons},!d&&p.props.previousButtonText&&E.a.createElement(g.a,{variant:"contained","data-testid":"wizard-previous",type:"button",onClick:j,className:B.button},p.props.previousButtonText),!b&&E.a.createElement(g.a,{variant:"contained",color:"primary","data-testid":"wizard-next",type:"submit",className:B.button},p.props.nextButtonText),b&&E.a.createElement(g.a,{variant:"contained",color:"primary","data-testid":"wizard-submit",type:"submit",disabled:a,className:B.button},p.props.submitButtonText)))}))}var j=function(t){var e=t.children;return E.a.createElement(E.a.Fragment,null,e)};j.defaultProps={nextButtonText:"Next",submitButtonText:"Submit"};var w=a(563),O=a(565),B=Object(x.memo)((function(t){return E.a.createElement(w.a,{position:"static"},E.a.createElement(O.a,null,E.a.createElement(u.a,{component:"h1",variant:"h6","data-testid":"site-title"},"Bona")))})),S=a(111),T=function(t){return new Promise((function(e){return setTimeout(e,t)}))},N=function(){var t=Object(o.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(300);case 2:window.alert(JSON.stringify(e,null,2));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){return t?void 0:"Required"},q=Object(p.a)((function(t){return{containerRoot:Object(n.a)({flexGrow:1},t.breakpoints.up("md"),{padding:"180px 0"}),formContainer:Object(n.a)({padding:"70px 20px"},t.breakpoints.up("md"),{padding:"50px 70px"}),page2:{textAlign:"center"}}}));function R(){var t=q(),e=Object(d.a)(),a=Object(b.a)(e.breakpoints.up("md"));return E.a.createElement(E.a.Fragment,null,E.a.createElement(S.a,null,E.a.createElement("title",null,"Home Page"),E.a.createElement("meta",{name:"description",content:"A Boilerplate application homepage"})),E.a.createElement(B,null),E.a.createElement(l.a,{className:t.containerRoot,container:!0,direction:"row",justify:"center"},E.a.createElement(l.a,{item:!0,xs:12,md:6},E.a.createElement(m.a,{className:t.formContainer,elevation:a?2:0},E.a.createElement(y,{initialValues:{},onSubmit:N},E.a.createElement(j,{validate:function(){},nextButtonText:"Start my journey!"},E.a.createElement(c.a,{component:"svg",css:{display:"block",height:120,width:120},mx:"auto",mb:a?4:3},E.a.createElement("circle",{cx:"60",cy:"60",r:"60",fill:"#F3F3F3"})),E.a.createElement(c.a,{mb:a?4:3},E.a.createElement(u.a,{component:"h2",variant:"h5"},"Let\u2019s start on your guardianship journey!")),E.a.createElement(c.a,{mb:a?4:3},E.a.createElement(u.a,{variant:"body1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),E.a.createElement(c.a,{mb:a?4:8},E.a.createElement(u.a,{variant:"body1"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),E.a.createElement(j,{validate:function(){},submitButtonText:"Submit"},E.a.createElement(c.a,{className:t.page2,mb:4},E.a.createElement(c.a,{mb:a?4:3},E.a.createElement(u.a,{component:"h2",variant:"h5"},"Question one is lorem ipsum dolor ipsum?")),E.a.createElement(v.a,{name:"input",component:s.a,type:"text",label:"User Input",validate:k,variant:"outlined"}))))))))}}}]);