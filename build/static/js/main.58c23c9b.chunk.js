(this.webpackJsonpflow=this.webpackJsonpflow||[]).push([[0],{18:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(27),A=a.n(i),j=(a(34),a(4)),n=a(9),l=a(0),r=function(e){var t=e.passUp,a=Object(s.useState)(""),c=Object(j.a)(a,2),i=c[0],A=c[1],r=Object(s.useState)(""),m=Object(j.a)(r,2),o=m[0],d=m[1],b=Object(s.useState)(""),x=Object(j.a)(b,2),h=x[0],O=x[1],g=Object(s.useState)(""),u=Object(j.a)(g,2),Q=u[0],E=u[1],B=Object(s.useState)(""),p=Object(j.a)(B,2),w=p[0],f=p[1],I=Object(s.useState)(""),C=Object(j.a)(I,2),Y=C[0],M=C[1],v=Object(s.useState)(!1),N=Object(j.a)(v,2),R=N[0],S=N[1];Object(s.useEffect)((function(){w&&""===Y||w!==Y||i&&o&&h&&""===Q?S(!1):w&&""!==Y&&w===Y&&i&&o&&h&&""!==Q&&S(!0)}),[Y]),Object(s.useEffect)((function(){window.localStorage.setItem("firstname",i),window.localStorage.setItem("lastname",o),window.localStorage.setItem("username",h),window.localStorage.setItem("useremail",Q),window.localStorage.setItem("password",w),window.localStorage.setItem("confirmedpassword",Y)}));return Object(l.jsxs)("div",{className:"sign-up",children:[Object(l.jsxs)("div",{className:"welcome-area",children:[Object(l.jsx)("i",{className:"fab fa-connectdevelop"}),Object(l.jsx)("h1",{children:"Welcome to Floww"}),Object(l.jsx)("p",{children:"Where we build meaningful connections"})]}),Object(l.jsx)("div",{className:"sign-up-area",children:Object(l.jsxs)("form",{action:"",onSubmit:function(e){if(e.preventDefault(),""===i)alert("Please fill in all fields");if(""===o)alert("Please fill in all fields");if(""===h)alert("Please fill in all fields");w===Y?w.length<3?alert("Password is too short"):t({userFirstName:i,userLastName:o,userName:h,userEmail:Q,userPassword:w,confirmedPassword:Y}):alert("Passwords don't match")},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){A(e.target.value)},placeholder:"First Name"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){d(e.target.value)},placeholder:"Last name"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",value:h,onChange:function(e){O(e.target.value)},placeholder:"UserName"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"email",value:Q,onChange:function(e){E(e.target.value)},placeholder:"Email"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"password",value:w,onChange:function(e){f(e.target.value)},placeholder:"Password"})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"password",value:Y,onChange:function(e){M(e.target.value)},placeholder:"Confrim Password"})}),Object(l.jsx)("div",{className:"btn",children:R?Object(l.jsx)(n.b,{to:"/home",children:Object(l.jsx)("button",{className:"submit-btn",children:"Submit"})}):Object(l.jsx)("button",{className:"submit-btn",children:"Submit"})})]})})]})},m=a(2);a(41);var o=function(){return Object(l.jsx)("div",{className:"header-container",children:Object(l.jsxs)("header",{className:"container",children:[Object(l.jsxs)("div",{className:"logo-container",children:[Object(l.jsx)("i",{className:"fab fa-connectdevelop"}),Object(l.jsx)("h1",{children:"Floww"})]}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(n.b,{style:{textDecoration:"none"},to:"/home",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)("li",{children:"Search"}),Object(l.jsx)(n.b,{style:{textDecoration:"none"},to:"/profile",children:Object(l.jsx)("li",{children:"Profile"})})]})}),Object(l.jsxs)("div",{className:"burger",children:[Object(l.jsx)("div",{className:"line"}),Object(l.jsx)("div",{className:"line"}),Object(l.jsx)("div",{className:"line"})]})]})})};a(18);var d=function(){return Object(l.jsxs)("div",{className:"home-component sidebar-component",children:[Object(l.jsx)("i",{className:"fas fa-home"}),Object(l.jsx)("h1",{children:"Home"})]})};var b=function(){return Object(l.jsxs)("div",{className:"topic-component sidebar-component",children:[Object(l.jsx)("i",{className:"far fa-comment-dots"}),Object(l.jsx)("h1",{children:"Topics"})]})};var x=function(){return Object(l.jsxs)("div",{className:"notification-component sidebar-component",children:[Object(l.jsx)("i",{className:"fas fa-bell"}),Object(l.jsx)("h1",{children:"Notifications"})]})};var h=function(){return Object(l.jsxs)("div",{className:"sidebar-component inbox-component",children:[Object(l.jsx)("i",{className:"fas fa-inbox"}),Object(l.jsx)("h1",{children:"Inbox"})]})};var O=function(){return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsx)(x,{}),Object(l.jsx)(h,{})]})};a(42);var g=function(e){var t=e.item;return Object(l.jsxs)("div",{className:"feed-item",children:[Object(l.jsxs)("div",{className:"userpfp-and-username",children:[Object(l.jsx)("img",{className:"pfp",src:t.pfp,alt:"e"}),Object(l.jsx)("h1",{children:t.name})]}),Object(l.jsx)("div",{className:"time-posted",children:Object(l.jsxs)("p",{children:["at: ",t.time]})}),Object(l.jsxs)("div",{className:"f-img-and-txt",children:[Object(l.jsx)("div",{className:"feed-text",children:Object(l.jsx)("p",{children:t.text})}),""!==t.img?Object(l.jsx)("div",{className:"feed-image",children:Object(l.jsx)("img",{className:"feed-image fd-img",src:t.img,alt:""})}):""]}),Object(l.jsxs)("div",{className:"like-and-share",children:[Object(l.jsx)("i",{class:"fas fa-comment"}),Object(l.jsx)("i",{class:"fas fa-share"}),Object(l.jsx)("i",{class:"fas fa-thumbs-up"})]})]})},u=a.p+"static/media/man2.c14cb4e7.png",Q=a.p+"static/media/news.0f85666f.jpg",E=a.p+"static/media/woman3.37a2b354.jpg",B=a.p+"static/media/man3.56582d11.jpg";a(43);var p=function(){return Object(l.jsxs)("div",{className:"recommended-component",children:[Object(l.jsxs)("div",{className:"rec-item",children:[Object(l.jsx)("div",{className:"rec-item-img",children:Object(l.jsx)("img",{src:u,alt:""})}),Object(l.jsxs)("div",{className:"rec-item-text",children:[Object(l.jsx)("h1",{children:"John Anderson"}),Object(l.jsx)("p",{children:"@johnandy"})]})]}),Object(l.jsxs)("div",{className:"rec-item",children:[Object(l.jsx)("div",{className:"rec-item-img",children:Object(l.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})}),Object(l.jsxs)("div",{className:"rec-item-text",children:[Object(l.jsx)("h1",{children:"Patrice Harewood"}),Object(l.jsx)("p",{children:"@patriceee"})]})]}),Object(l.jsxs)("div",{className:"rec-item",children:[Object(l.jsx)("div",{className:"rec-item-img",children:Object(l.jsx)("img",{src:Q,alt:""})}),Object(l.jsxs)("div",{className:"rec-item-text",children:[Object(l.jsx)("h1",{children:"Channel 3 News"}),Object(l.jsx)("p",{children:"@channel3news"})]})]}),Object(l.jsxs)("div",{className:"rec-item",children:[Object(l.jsx)("div",{className:"rec-item-img",children:Object(l.jsx)("img",{src:B,alt:""})}),Object(l.jsxs)("div",{className:"rec-item-text",children:[Object(l.jsx)("h1",{children:"Jimmy Newton"}),Object(l.jsx)("p",{children:"@jimmyn"})]})]}),Object(l.jsxs)("div",{className:"rec-item",children:[Object(l.jsx)("div",{className:"rec-item-img",children:Object(l.jsx)("img",{src:E,alt:""})}),Object(l.jsxs)("div",{className:"rec-item-text",children:[Object(l.jsx)("h1",{children:"Hannah Jones"}),Object(l.jsx)("p",{children:"@hannnah"})]})]})]})},w=a.p+"static/media/woman1.fb213515.jpg",f=a.p+"static/media/man1.db996349.jpg",I=a.p+"static/media/cat1.638ef39a.jpg",C=a.p+"static/media/cat2.4bf8efeb.jpg",Y=a.p+"static/media/lake.f0933389.jpg",M=a.p+"static/media/dog.3182cd24.png";var v=function(){var e=Object(s.useState)([{id:1,pfp:w,name:"Sharon Webb",text:"veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",img:"",time:"4:24PM"},{id:2,pfp:f,name:"Wilson Smith",text:"Having a relaxing weekend by the lakehouse!",img:Y,time:"9:00AM"},{id:3,pfp:I,name:"bee",text:"New BTS album is everything right now",img:"",time:"2:23AM"},{id:4,pfp:C,name:"Zabz",text:"When will bee shut up about bts?",img:M,time:"2:24AM"}]),t=Object(j.a)(e,2),a=t[0];return t[1],Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"main container",children:[Object(l.jsx)("div",{className:"main-sidebar",children:Object(l.jsx)(O,{})}),Object(l.jsx)("div",{className:"main-feed",children:a.map((function(e){return Object(l.jsx)(g,{item:e},e.id)}))}),Object(l.jsx)("div",{className:"recommended",children:Object(l.jsx)(p,{})})]})]})};a(44);var N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"profile",children:[Object(l.jsxs)("div",{className:"name",children:["Name: ",Object(l.jsxs)("span",{className:"user-name",children:[localStorage.getItem("firstname")," ",localStorage.getItem("lastname")]})]}),Object(l.jsxs)("div",{className:"username",children:["Username: ",Object(l.jsx)("span",{className:"username",children:localStorage.getItem("username")})]}),Object(l.jsxs)("div",{className:"email",children:["Email Adress: ",Object(l.jsx)("span",{className:"user-email"}),localStorage.getItem("useremail")]})]})]})};a(45);var R=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(""),A=Object(j.a)(i,2),o=A[0],d=A[1],b=Object(s.useState)(""),x=Object(j.a)(b,2),h=x[0],O=x[1],g=Object(s.useState)(""),u=Object(j.a)(g,2),Q=u[0],E=u[1],B=Object(s.useState)(""),p=Object(j.a)(B,2),w=(p[0],p[1]),f=Object(s.useState)(""),I=Object(j.a)(f,2);return I[0],I[1],Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(m.a,{path:"/",exact:!0,children:Object(l.jsx)(r,{passUp:function(e){c(e.userFirstName),console.log(a),d(e.userLastName),O(e.userName),E(e.userEmail),w(e.userPassword)}})}),Object(l.jsx)(m.a,{path:"/home",children:Object(l.jsx)(v,{})}),Object(l.jsx)(m.a,{path:"/profile",children:Object(l.jsx)(N,{name:a+o,username:h,email:Q})})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,A=t.getTTFB;a(e),s(e),c(e),i(e),A(e)}))};A.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.58c23c9b.chunk.js.map