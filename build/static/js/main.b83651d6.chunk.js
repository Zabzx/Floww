(this.webpackJsonpflow=this.webpackJsonpflow||[]).push([[0],{23:function(e,t,s){},41:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},53:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(19),n=s.n(i),A=(s(41),s(16)),j=s(2),l=s(9),r=s(0),m=function(e){var t=e.passUp,s=Object(a.useState)(""),c=Object(j.a)(s,2),i=c[0],n=c[1],A=Object(a.useState)(""),m=Object(j.a)(A,2),o=m[0],d=m[1],b=Object(a.useState)(""),x=Object(j.a)(b,2),h=x[0],O=x[1],u=Object(a.useState)(""),p=Object(j.a)(u,2),g=p[0],f=p[1],Q=Object(a.useState)(""),E=Object(j.a)(Q,2),B=E[0],w=E[1],C=Object(a.useState)(""),I=Object(j.a)(C,2),N=I[0],v=I[1],Y=Object(a.useState)(!1),M=Object(j.a)(Y,2),R=M[0],S=M[1];Object(a.useEffect)((function(){B&&""===N||B.length<3||B!==N||i&&o&&h&&""===g?S(!1):B&&""!==N&&B===N&&i&&o&&h&&""!==g&&S(!0)})),Object(a.useEffect)((function(){window.localStorage.setItem("firstname",i),window.localStorage.setItem("lastname",o),window.localStorage.setItem("username",h),window.localStorage.setItem("useremail",g),window.localStorage.setItem("password",B),window.localStorage.setItem("confirmedpassword",N)}));return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsxs)("div",{className:"welcome-area",children:[Object(r.jsx)("i",{className:"fab fa-connectdevelop"}),Object(r.jsx)("h1",{children:"Welcome to Floww"}),Object(r.jsx)("p",{children:"Where we build meaningful connections"})]}),Object(r.jsx)("div",{className:"sign-up-area",children:Object(r.jsxs)("form",{action:"",onSubmit:function(e){if(e.preventDefault(),""===i)alert("Please fill in all fields");if(""===o)alert("Please fill in all fields");if(""===h)alert("Please fill in all fields");B===N?B.length<3?alert("Password is too short"):t({userFirstName:i,userLastName:o,userName:h,userEmail:g,userPassword:B,confirmedPassword:N}):alert("Passwords don't match")},children:[Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){n(e.target.value)},placeholder:"First Name"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:o,onChange:function(e){d(e.target.value)},placeholder:"Last name"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:h,onChange:function(e){O(e.target.value)},placeholder:"UserName"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"email",value:g,onChange:function(e){f(e.target.value)},placeholder:"Email"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"password",value:B,onChange:function(e){w(e.target.value)},placeholder:"Password"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"password",value:N,onChange:function(e){v(e.target.value)},placeholder:"Confrim Password"})}),Object(r.jsx)("div",{className:"btn",children:R?Object(r.jsx)(l.b,{to:"/home",children:Object(r.jsx)("button",{className:"submit-btn",children:"Sign Up"})}):Object(r.jsx)("button",{className:"submit-btn",children:"Sign Up"})})]})})]})},o=s(3),d=(s(48),s(49),s.p+"static/media/user.a9136072.jpg");var b=function(e){var t=e.passUp,s=e.userPfp,c=e.hasPfp,i=Object(a.useState)(""),n=Object(j.a)(i,2),A=n[0],l=n[1];return Object(r.jsxs)("div",{className:"post",children:[Object(r.jsxs)("div",{className:"post-container",children:[c?Object(r.jsx)("img",{src:s[0].data_url,alt:"",className:"user-img"}):Object(r.jsx)("img",{src:d,className:"user-img"}),Object(r.jsx)("div",{className:"input-div",children:Object(r.jsx)("input",{className:"post-input",type:"text",placeholder:"What's on your mind?",onChange:function(e){return l(e.target.value)}})})]}),Object(r.jsxs)("div",{className:"posting-options",children:[Object(r.jsx)("i",{className:"upload-img fas fa-images"}),Object(r.jsx)("button",{className:"post-btn",onClick:function(){t(c?{id:Math.floor(100*Math.random()),name:localStorage.getItem("username"),text:A,pfp:s[0].data_url,time:"Now",img:"",likes:0}:{id:Math.floor(100*Math.random()),name:localStorage.getItem("username"),text:A,pfp:d,time:"Now",img:"",likes:0})},children:"Post"})]})]})};var x=function(){return Object(r.jsx)("div",{className:"header-container",children:Object(r.jsxs)("header",{className:"container",children:[Object(r.jsxs)("div",{className:"logo-container",children:[Object(r.jsx)("i",{className:"fab fa-connectdevelop"}),Object(r.jsx)("h1",{children:"Floww"})]}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"nav-links",children:[Object(r.jsx)(l.b,{style:{textDecoration:"none"},to:"/home",children:Object(r.jsx)("li",{children:"Home"})}),Object(r.jsx)(l.b,{style:{textDecoration:"none"},to:"/profile",children:Object(r.jsx)("li",{children:"Profile"})})]})}),Object(r.jsxs)("div",{className:"burger",children:[Object(r.jsx)("div",{className:"line"}),Object(r.jsx)("div",{className:"line"}),Object(r.jsx)("div",{className:"line"})]})]})})};s(23);var h=function(){return Object(r.jsxs)("div",{className:"home-component sidebar-component",children:[Object(r.jsx)("i",{className:"fas fa-home"}),Object(r.jsx)("h1",{children:"Home"})]})};var O=function(){return Object(r.jsxs)("div",{className:"topic-component sidebar-component",children:[Object(r.jsx)("i",{className:"far fa-comment-dots"}),Object(r.jsx)("h1",{children:"Topics"})]})};var u=function(){return Object(r.jsxs)("div",{className:"notification-component sidebar-component",children:[Object(r.jsx)("i",{className:"fas fa-bell"}),Object(r.jsx)("h1",{children:"Notifications"})]})};var p=function(){return Object(r.jsxs)("div",{className:"sidebar-component inbox-component",children:[Object(r.jsx)("i",{className:"fas fa-inbox"}),Object(r.jsx)("h1",{children:"Inbox"})]})};var g=function(){return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)(h,{}),Object(r.jsx)(O,{}),Object(r.jsx)(u,{}),Object(r.jsx)(p,{})]})};s(50);var f=function(e){var t=e.item,s=e.passupItem,c=Object(a.useState)(t.likes),i=Object(j.a)(c,2),n=i[0],A=i[1],l=Object(a.useState)(!1),m=Object(j.a)(l,2),o=m[0],d=m[1];return Object(r.jsxs)("div",{className:"feed-item",children:[Object(r.jsxs)("div",{className:"userpfp-and-username",children:[Object(r.jsx)("img",{className:"pfp",src:t.pfp,alt:""}),Object(r.jsx)("h1",{children:t.name})]}),Object(r.jsx)("div",{className:"time-posted",children:Object(r.jsxs)("p",{children:["at: ",t.time]})}),Object(r.jsxs)("div",{className:"f-img-and-txt",children:[Object(r.jsx)("div",{className:"feed-text",children:Object(r.jsx)("p",{children:t.text})}),""!==t.img?Object(r.jsx)("div",{className:"feed-image",children:Object(r.jsx)("img",{className:"feed-image fd-img",src:t.img,alt:""})}):""]}),Object(r.jsxs)("div",{className:"like-and-share",children:[Object(r.jsx)("i",{className:"fas fa-comment"}),Object(r.jsx)("i",{className:"fas fa-share"}),Object(r.jsxs)("div",{className:"likes",onClick:function(){A(n+1),n>=t.likes+1&&A(t.likes+1),d(!o),o&&A(t.likes),s(t)},children:[Object(r.jsx)("p",{className:"likes-value",children:n}),o?Object(r.jsx)("i",{style:{color:"#3EDC95"},className:"fas fa-thumbs-up"}):Object(r.jsx)("i",{className:"fas fa-thumbs-up"})]})]})]})},Q=s.p+"static/media/man2.c14cb4e7.png",E=s.p+"static/media/news.0f85666f.jpg",B=s.p+"static/media/woman3.37a2b354.jpg",w=s.p+"static/media/man3.56582d11.jpg";s(51);var C=function(){return Object(r.jsxs)("div",{className:"recommended-component",children:[Object(r.jsx)("div",{className:"rec-h1",children:"You might like.."}),Object(r.jsxs)("div",{className:"rec-item",children:[Object(r.jsx)("div",{className:"rec-item-img",children:Object(r.jsx)("img",{src:Q,alt:""})}),Object(r.jsxs)("div",{className:"rec-item-text",children:[Object(r.jsx)("h1",{children:"John Anderson"}),Object(r.jsx)("p",{children:"@johnandy"})]})]}),Object(r.jsxs)("div",{className:"rec-item",children:[Object(r.jsx)("div",{className:"rec-item-img",children:Object(r.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})}),Object(r.jsxs)("div",{className:"rec-item-text",children:[Object(r.jsx)("h1",{children:"Patrice Harewood"}),Object(r.jsx)("p",{children:"@patriceee"})]})]}),Object(r.jsxs)("div",{className:"rec-item",children:[Object(r.jsx)("div",{className:"rec-item-img",children:Object(r.jsx)("img",{src:E,alt:""})}),Object(r.jsxs)("div",{className:"rec-item-text",children:[Object(r.jsx)("h1",{children:"Channel 3 News"}),Object(r.jsx)("p",{children:"@channel3news"})]})]}),Object(r.jsxs)("div",{className:"rec-item",children:[Object(r.jsx)("div",{className:"rec-item-img",children:Object(r.jsx)("img",{src:w,alt:""})}),Object(r.jsxs)("div",{className:"rec-item-text",children:[Object(r.jsx)("h1",{children:"Jimmy Newton"}),Object(r.jsx)("p",{children:"@jimmyn"})]})]}),Object(r.jsxs)("div",{className:"rec-item",children:[Object(r.jsx)("div",{className:"rec-item-img",children:Object(r.jsx)("img",{src:B,alt:""})}),Object(r.jsxs)("div",{className:"rec-item-text",children:[Object(r.jsx)("h1",{children:"Hannah Jones"}),Object(r.jsx)("p",{children:"@hannnah"})]})]})]})},I=s.p+"static/media/woman1.fb213515.jpg",N=s.p+"static/media/woman4.ca2d4a79.jpg",v=s.p+"static/media/man1.db996349.jpg",Y=s.p+"static/media/cat1.638ef39a.jpg",M=s.p+"static/media/cat2.4bf8efeb.jpg",R=s.p+"static/media/lake.f0933389.jpg",S=(s.p,s.p+"static/media/paris.191c35b0.jpg");var H=function(e){var t=e.userPfp,s=e.hasPfp,c=e.passupItem,i=Object(a.useState)([{id:1,pfp:I,name:"Sharon Webb",text:"veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",img:"",time:"4:24PM",likes:23},{id:2,pfp:v,name:"Wilson Smith",text:"Having a relaxing weekend by the lakehouse!",img:R,time:"9:00AM",likes:4},{id:3,pfp:Y,name:"bee",text:"The power went out at my place so now I'm studying and starbucks, at least the weather is nice.",img:"",time:"2:23AM",likes:2},{id:4,pfp:M,name:"Zabz",text:"Learning ReactJS, this is fun!",img:"",time:"2:24AM",likes:2},{id:5,pfp:N,name:"Kait",text:"I can't wait to visit Paris tomorrow!! \ud83d\udc96",img:S,time:"8:00AM",likes:42}]),n=Object(j.a)(i,2),l=n[0],m=n[1];return document.title="Floww | Home",Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsxs)("div",{className:"main container",children:[Object(r.jsx)("div",{className:"main-sidebar",children:Object(r.jsx)(g,{})}),Object(r.jsxs)("div",{className:"main-feed",children:[Object(r.jsx)(b,{passUp:function(e){m([e].concat(Object(A.a)(l))),console.log(e)},userPfp:t,hasPfp:s}),l.map((function(e){return Object(r.jsx)(f,{item:e,passupItem:c},e.id)}))]}),Object(r.jsx)("div",{className:"recommended",children:Object(r.jsx)(C,{})})]})]})},k=s(21),G=s(36),U=s.n(G);s(53);var D=function(e){var t=e.passUpImage,s=e.posts,i=e.liked,n=c.a.useState([]),A=Object(j.a)(n,2),l=A[0],m=A[1],o=function(){t(l)},d=Object(a.useState)(s.likes),b=Object(j.a)(d,2),h=b[0],O=b[1],u=Object(a.useState)(!1),p=Object(j.a)(u,2),g=p[0],f=p[1],Q=function(){console.log(s),O(h+1),h>=s.likes+1&&O(s.likes+1),f(!g),g&&O(s.likes)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsxs)("div",{className:"profile-section",children:[Object(r.jsx)(U.a,{multiple:!0,value:l,onChange:function(e,t){m(e)},maxNumber:1,dataURLKey:"data_url",children:function(e){var t=e.imageList,s=e.onImageUpload,a=e.onImageRemoveAll,c=e.onImageUpdate,i=e.onImageRemove,n=e.isDragging,A=e.dragProps;return Object(r.jsxs)("div",{className:"upload__image-wrapper",children:[Object(r.jsx)("h1",{children:"Add a profile picture"}),Object(r.jsx)("button",Object(k.a)(Object(k.a)({style:n?{color:"red"}:null,onClick:s},A),{},{className:"click-or-drop",children:"Click or Drop here"})),"\xa0",Object(r.jsx)("button",{className:"remove-img",onClick:a,children:"Remove all images"}),t.map((function(e,t){return Object(r.jsxs)("div",{className:"image-item",children:[Object(r.jsx)("img",{src:e.data_url,alt:"",width:"100"}),Object(r.jsxs)("div",{className:"profile-btn-flex image-item__btn-wrapper",children:[Object(r.jsx)("button",{className:"profile-btn",onClick:function(){return c(t)},children:"Update"}),Object(r.jsx)("button",{className:"profile-btn",onClick:function(){return i(t)},children:"Remove"}),Object(r.jsx)("button",{className:"profile-btn",onClick:o,children:"Save"})]})]},t)}))]})}}),Object(r.jsxs)("div",{className:"user-info",children:[Object(r.jsxs)("h1",{className:"user-info-h1",children:["Username: ",localStorage.getItem("username")]}),Object(r.jsxs)("h1",{className:"user-info-h1",children:["Your Email Adress: ",localStorage.getItem("useremail")]})]})]}),i?Object(r.jsxs)("div",{className:"likes-section container",children:[Object(r.jsx)("h1",{children:"Liked Posts"}),s.map((function(e){return Object(r.jsx)(r.Fragment,{children:e.name?Object(r.jsxs)("div",{className:"pfeed-item",children:[Object(r.jsxs)("div",{className:"userpfp-and-username",children:[Object(r.jsx)("img",{className:"pfp",src:e.pfp,alt:""}),Object(r.jsx)("h1",{children:e.name})]}),Object(r.jsx)("div",{className:"time-posted",children:Object(r.jsxs)("p",{children:["at: ",e.time]})}),Object(r.jsxs)("div",{className:"f-img-and-txt",children:[Object(r.jsx)("div",{className:"feed-text",children:Object(r.jsx)("p",{children:e.text})}),""!==e.img?Object(r.jsx)("div",{className:"feed-image",children:Object(r.jsx)("img",{className:"feed-image fd-img",src:e.img,alt:""})}):""]}),Object(r.jsxs)("div",{className:"like-and-share",children:[Object(r.jsx)("i",{className:"fas fa-comment"}),Object(r.jsx)("i",{className:"fas fa-share"}),Object(r.jsxs)("div",{className:"likes",onClick:Q,children:[Object(r.jsx)("p",{className:"likes-value",children:h}),g?Object(r.jsx)("i",{style:{color:"#3EDC95"},className:"fas fa-thumbs-up"}):Object(r.jsx)("i",{className:"fas fa-thumbs-up"})]})]})]}):""})}))]}):"No liked posts yet"]})};s(54);var K=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),n=Object(j.a)(i,2),d=n[0],b=n[1],x=Object(a.useState)(""),h=Object(j.a)(x,2),O=h[0],u=h[1],p=Object(a.useState)(""),g=Object(j.a)(p,2),f=g[0],Q=g[1],E=Object(a.useState)(""),B=Object(j.a)(E,2),w=(B[0],B[1]),C=Object(a.useState)(""),I=Object(j.a)(C,2),N=(I[0],I[1],Object(a.useState)([])),v=Object(j.a)(N,2),Y=v[0],M=v[1],R=Object(a.useState)(!1),S=Object(j.a)(R,2),k=S[0],G=S[1],U=Object(a.useState)([{}]),K=Object(j.a)(U,2),P=K[0],J=K[1],Z=Object(a.useState)(!1),y=Object(j.a)(Z,2),V=y[0],F=y[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(o.a,{path:"/",exact:!0,children:Object(r.jsx)(m,{passUp:function(e){c(e.userFirstName),console.log(s),b(e.userLastName),u(e.userName),Q(e.userEmail),w(e.userPassword)}})}),Object(r.jsx)(o.a,{path:"/home",children:Object(r.jsx)(H,{userPfp:Y,hasPfp:k,passupItem:function(e){J([e].concat(Object(A.a)(P))),F(!0)}})}),Object(r.jsx)(o.a,{path:"/profile",children:Object(r.jsx)(D,{name:s+d,username:O,email:f,passUpImage:function(e){G(!0),M(e),console.log(Y)},posts:P,liked:V})})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),P()}},[[73,1,2]]]);
//# sourceMappingURL=main.b83651d6.chunk.js.map