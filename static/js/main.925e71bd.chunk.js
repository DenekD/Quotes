(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{100:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},105:function(e,t,n){e.exports={container:"UserProfile_container__9t3AY"}},106:function(e,t,n){e.exports={list:"ContactPage_list__3oCQU"}},107:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV",active:"Footer_active__2AMVE"}},113:function(e,t,n){},14:function(e,t,n){e.exports={container:"AddNewQuote_container__2XOXJ",acordeon:"AddNewQuote_acordeon__v0CZe",icon:"AddNewQuote_icon__9u0RC",open:"AddNewQuote_open__3XiF6",closed:"AddNewQuote_closed__2XHq9",acordeonContainer:"AddNewQuote_acordeonContainer__2LEfr",submit:"AddNewQuote_submit__1kgi0",form:"AddNewQuote_form__X4X-M",quote:"AddNewQuote_quote__flP5-",error:"AddNewQuote_error__1CR3o",autor:"AddNewQuote_autor__1Ti2T",invalid:"AddNewQuote_invalid__iarCB",slideEnter:"AddNewQuote_slideEnter__3zkmc",slideEnterActive:"AddNewQuote_slideEnterActive__2BPzB",slideExit:"AddNewQuote_slideExit__1k030",slideExitActive:"AddNewQuote_slideExitActive__2T4s4"}},18:function(e,t,n){e.exports={container:"BurgerMenu_container__3TNTV",menu:"BurgerMenu_menu__29vDv",whoIsLogged:"BurgerMenu_whoIsLogged__3X9B_",overlay:"BurgerMenu_overlay__YdjoS",activeLink:"BurgerMenu_activeLink__29P7m",slideEnter:"BurgerMenu_slideEnter__1CX9F",slideEnterActive:"BurgerMenu_slideEnterActive__1vG9J",slideExitActive:"BurgerMenu_slideExitActive__1P3x4",fadeEnter:"BurgerMenu_fadeEnter__POTxZ",fadeEnterActive:"BurgerMenu_fadeEnterActive__wjOKD",fadeExit:"BurgerMenu_fadeExit__d6XPH",fadeExitActive:"BurgerMenu_fadeExitActive__17V_1"}},20:function(e,t,n){e.exports={container:"Quote_container__1Il-M",quote:"Quote_quote__1xSut",quoteHeader:"Quote_quoteHeader__20DAo",quoteFooter:"Quote_quoteFooter__2YaVm",deleteBtn:"Quote_deleteBtn__1V1Np",vote:"Quote_vote__1ggQz",votedUp:"Quote_votedUp__232zt",votedDown:"Quote_votedDown__3V6aF",notVoted:"Quote_notVoted__2Rfvf",button:"Quote_button__zU-gY",commentsIcon:"Quote_commentsIcon__3Do7n",otroBlockquote:"Quote_otroBlockquote__3VL4u"}},22:function(e,t,n){e.exports={overlay:"Modal_overlay__2YsFC",card:"Modal_card__HiY5k",modalBtn:"Modal_modalBtn__3s82e",modalHeader:"Modal_modalHeader__2IRfV",cross1:"Modal_cross1__2Kpur",cross2:"Modal_cross2__2OXFh",modalContent:"Modal_modalContent__3z-j8",slideEnter:"Modal_slideEnter__3-9yZ",slideEnterActive:"Modal_slideEnterActive__wXowh",slideExit:"Modal_slideExit__13l5P",slideExitActive:"Modal_slideExitActive__s21-z"}},220:function(e,t,n){"use strict";n.r(t);var o,s=n(1),i=n.n(s),c=n(32),a=n.n(c),r=(n(113),n(9)),u=n(2),d=n(8),l=n(0),m=i.a.createContext({token:"",isLoggedIn:!1,userId:"",userName:"",userEmail:"",login:function(e,t){},logout:function(){}}),j=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},b=function(e){var t,n,i,c,a=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("userId"),n=localStorage.getItem("userName"),o=localStorage.getItem("userEmail"),s=localStorage.getItem("expirationTime"),i=j(s);return i<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),null):{token:e,userId:t,userName:n,userEmail:o,duration:i}}();a&&(t=a.token,n=a.userId,i=a.userName,c=a.userEmail);var r=Object(s.useState)(t),u=Object(d.a)(r,2),b=u[0],x=u[1],f=Object(s.useState)(n),O=Object(d.a)(f,2),_=O[0],h=O[1],p=Object(s.useState)(i),v=Object(d.a)(p,2),g=v[0],N=v[1],w=Object(s.useState)(c),k=Object(d.a)(w,2),q=k[0],A=k[1],C=!!b,E=Object(s.useCallback)((function(){x(null),h(null),N(null),A(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),o&&clearTimeout(o)}),[]);Object(s.useEffect)((function(){a&&(o=setTimeout(E,a.duration))}),[a,E]);var y={token:b,isLoggedIn:C,userId:_,userName:g,userEmail:q,login:function(e,t,n,s,i){x(e),h(t),N(s),A(i),localStorage.setItem("token",e),localStorage.setItem("userId",t),localStorage.setItem("expirationTime",n),localStorage.setItem("userName",s),localStorage.setItem("userEmail",i);var c=j(n);o=setTimeout(E,c)},logout:E};return Object(l.jsx)(m.Provider,{value:y,children:e.children})},x=m,f=n(40),O=Object(f.b)({name:"ui",initialState:{isBurgerMenuOpen:!1,isModalOpen:!0,isDarkMode:!1,notification:{isNotificationOpen:!1,message:"",status:"",title:""}},reducers:{toggleBurgerMenu:function(e){e.isBurgerMenuOpen=!e.isBurgerMenuOpen},closeModal:function(e){e.isModalOpen=!1},openNotification:function(e,t){e.notification={isNotificationOpen:!0,message:t.payload.message,status:t.payload.status,title:t.payload.title}},closeNotification:function(e){e.notification={isNotificationOpen:!1,message:e.notification.message,status:e.notification.status,title:e.notification.title}},toggleDarkMode:function(e){e.isDarkMode=!e.isDarkMode}}}),_=O.actions,h=O,p=n(34),v=n.n(p),g=function(){var e=Object(u.c)((function(e){return e.ui.isBurgerMenuOpen})),t=Object(u.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:v.a.burger,onClick:function(){t(_.toggleBurgerMenu())},children:[Object(l.jsx)("i",{className:e?v.a.open:v.a.closed}),Object(l.jsx)("i",{className:e?v.a.open:v.a.closed}),Object(l.jsx)("i",{className:e?v.a.open:v.a.closed})]})})},N=n(56),w=n.n(N),k=function(e){var t=e.displaySpot,n=Object(s.useContext)(x).isLoggedIn;return Object(l.jsx)(s.Fragment,{children:Object(l.jsx)(r.b,{to:"/profile",children:Object(l.jsxs)("div",{className:w.a.container,children:[Object(l.jsx)("div",{className:w.a.image,children:Object(l.jsx)("i",{class:"fas fa-user"})}),t&&n&&Object(l.jsx)("span",{className:w.a.spot})]})})})},q=n(57),A=n.n(q),C=function(){var e=Object(s.useContext)(x),t=e.isLoggedIn,n=Object(u.b)();return console.log(e.userEmail),Object(l.jsxs)("header",{className:A.a.header,children:[Object(l.jsxs)("div",{className:A.a.burgerAndTitle,children:[Object(l.jsx)(g,{}),Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("h1",{children:"Quotes"})})]}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:A.a.nav,children:[Object(l.jsx)("li",{children:Object(l.jsx)(k,{displaySpot:!0})}),t&&Object(l.jsx)("li",{children:Object(l.jsxs)("p",{children:[" ",e.userEmail]})}),!t&&Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/login",children:Object(l.jsx)("p",{children:"Login/Sign In"})})}),t&&Object(l.jsx)("li",{children:Object(l.jsx)("p",{onClick:function(){e.logout(),n(_.openNotification({isNotificationOpen:!0,title:"logout succesful",message:"wylogowa\u0142e\u015b si\u0119 poprawnie",status:"success"})),setTimeout((function(){n(_.closeNotification())}),4e3)},children:"Logout"})})]})})]})},E=n(100),y=n.n(E),I=function(){return Object(l.jsx)("div",{className:y.a.spinner})},S=n(20),z=n.n(S),M=n(5),L=n(101),Q=Object(f.b)({name:"quotes",initialState:{quotesChanged:!1,commentsChanged:!1,quotesAreLoading:!1,commentsAreLoading:!1,isSortAscending:!1,quotes:[],comments:[]},reducers:{quotesAreLoading:function(e,t){console.log("quotes loading..."),e.quotesIsLoading=!0},quotesAreDownload:function(e,t){console.log("quotes download..."),e.quotesIsLoading=!1},addQuote:function(e,t){e.quotesChanged=!0;var n=t.payload;e.quotes.push({author:n.author,text:n.text,id:Object(L.v4)(),date:Date.now(),commentsAmount:0,userId:n.userId,userName:n.userName,vote:0,votedUpUsers:[""],votedDownUsers:[""]})},replaceQuotes:function(e,t){e.quotes=t.payload.quotes},replaceComments:function(e,t){e.comments=t.payload.comments},deleteQuote:function(e,t){e.quotesChanged=!0;var n=t.payload;e.quotes=e.quotes.filter((function(e){return e.id!==n})),e.comments=e.comments.filter((function(e){return e.id!==n}))},voteForQuote:function(e,t){e.quotesChanged=!0;var n=t.payload.id,o=t.payload.value,s=t.payload.userId,i=e.quotes.findIndex((function(e){return e.id===n})),c=e.quotes[i].votedUpUsers.some((function(e){return e===s})),a=e.quotes[i].votedDownUsers.some((function(e){return e===s}));return o&&c?(e.quotes[i].vote-=1,void(e.quotes[i].votedUpUsers=e.quotes[i].votedUpUsers.filter((function(e){return e!==s})))):!o&&a?(e.quotes[i].vote+=1,void(e.quotes[i].votedDownUsers=e.quotes[i].votedDownUsers.filter((function(e){return e!==s})))):o&&a?(e.quotes[i].vote+=2,e.quotes[i].votedDownUsers=e.quotes[i].votedDownUsers.filter((function(e){return e!==s})),void e.quotes[i].votedUpUsers.push(s)):!o&&c?(e.quotes[i].vote-=2,e.quotes[i].votedUpUsers=e.quotes[i].votedUpUsers.filter((function(e){return e!==s})),void e.quotes[i].votedDownUsers.push(s)):void(o?(e.quotes[i].vote+=1,e.quotes[i].votedUpUsers.push(s),console.log("plus pierwszy ")):(e.quotes[i].vote-=1,e.quotes[i].votedDownUsers.push(s),console.log("minus pierwszy")))},sortQuotes:function(e){e.quotes.sort((function(t,n){return e.isSortAscending?t.vote>n.vote?1:-1:t.vote<n.vote?1:-1}))},setSortingMethod:function(e,t){e.isSortAscending=t.payload},addComment:function(e,t){e.commentsChanged=!0,e.quotesChanged=!0;var n={text:t.payload.text,date:(new Date).toLocaleDateString(),author:"",userId:t.payload.userId,userName:t.payload.userName},o=e.comments.findIndex((function(e){return e.id===t.payload.id})),s=e.quotes.findIndex((function(e){return e.id===t.payload.id}));-1===o?(e.comments=[].concat(Object(M.a)(e.comments),[{id:t.payload.id,comments:[n]}]),e.quotes[s].commentsAmount=1):(void 0===e.comments[o].comments&&(e.comments[o].comments=[]),e.comments[o].comments.push(n),e.quotes[s].commentsAmount=e.comments[o].comments.length)},deletecomment:function(e,t){e.commentsChanged=!0;var n=t.payload.id,o=t.payload.index,s=e.quotes.findIndex((function(e){return e.id===t.payload.id})),i=e.comments.findIndex((function(e){return e.id===n}));e.comments[i].comments=e.comments[i].comments.filter((function(e,t){return t!==o})),e.quotes[s].commentsAmount=e.comments[i].comments.length},editComment:function(e,t){e.commentsChanged=!0;var n=t.payload.id,o=t.payload.index,s=t.payload.editedText,i=e.comments.findIndex((function(e){return e.id===n}));e.comments[i].comments[o].text=s}}}),B=Q.actions,P=Q,T=function(e){var t=Object(u.b)(),n=Object(s.useContext)(x),o=Object(u.c)((function(t){return t.quotes.quotes[e.index]})),i=n.userId===o.userId,c=o.votedUpUsers.some((function(e){return e===n.userId})),a=o.votedDownUsers.some((function(e){return e===n.userId})),d=function(e){t(B.voteForQuote({id:o.id,value:e,userId:n.userId})),t(B.sortQuotes())};return Object(l.jsx)("div",{className:z.a.container,children:Object(l.jsxs)("div",{className:z.a.quote,children:[Object(l.jsx)("div",{className:z.a.quoteHeader,children:Object(l.jsxs)("p",{children:["doda\u0142: ",o.userName]})}),Object(l.jsx)(r.b,{to:"quote/".concat(o.id),children:Object(l.jsxs)("blockquote",{className:z.a.otroBlockquote,children:[o.text,Object(l.jsx)("span",{children:o.author})]})}),Object(l.jsxs)("div",{className:z.a.quoteFooter,children:[n.isLoggedIn&&Object(l.jsxs)("div",{className:z.a.vote,children:[Object(l.jsx)("button",{onClick:function(){return d(!0)},className:c?z.a.votedUp:z.a.notVoted,children:Object(l.jsx)("i",{className:"fas fa-arrow-up"})}),Object(l.jsx)("p",{children:o.vote}),Object(l.jsx)("button",{onClick:function(){return d(!1)},className:a?z.a.votedDown:z.a.notVoted,children:Object(l.jsx)("i",{className:"fas fa-arrow-down"})})]}),!n.isLoggedIn&&Object(l.jsxs)("div",{className:z.a.vote,onClick:function(){t(_.openNotification({isNotificationOpen:!0,message:"Tylko zalogowani u\u017cytkownicy mog\u0105 g\u0142osowa\u0107",title:"Musisz si\u0119 zalogowac ",status:"info"})),setTimeout((function(){t(_.closeNotification())}),4e3)},children:[Object(l.jsx)("button",{onClick:function(){return d(!0)},className:z.a.notVoted,disabled:!0,children:Object(l.jsx)("i",{className:"fas fa-arrow-up"})}),Object(l.jsx)("p",{children:o.vote}),Object(l.jsx)("button",{onClick:function(){return d(!1)},className:z.a.notVoted,disabled:!0,children:Object(l.jsx)("i",{className:"fas fa-arrow-down"})})]}),Object(l.jsx)(r.b,{to:"quote/".concat(o.id),children:Object(l.jsxs)("div",{className:z.a.commentsIcon,children:[Object(l.jsx)("i",{className:"far fa-comment-alt"}),Object(l.jsxs)("p",{children:[o.commentsAmount," Comments"]})]})}),i&&Object(l.jsxs)("button",{onClick:function(){t(B.deleteQuote(o.id)),t(_.openNotification({isNotificationOpen:!0,message:"Cytat zosta\u0142 pomyslnie usuniety",title:"Cytat zosta\u0142 pomyslnie usuniety ",status:"success"})),setTimeout((function(){t(_.closeNotification())}),4e3)},className:z.a.deleteBtn,children:[Object(l.jsx)("i",{class:"fas fa-trash-alt"}),Object(l.jsx)("p",{children:" usu\u0144 cytat"})]})]})]})})},D=n(58),U=n.n(D),F=function(){var e=Object(u.c)((function(e){return e.quotes.quotes})),t=Object(u.c)((function(e){return e.quotes.quotesIsLoading})),n=Object(u.b)(),o=function(e){n(B.setSortingMethod(e)),n(B.sortQuotes())},i=e.map((function(e,t){return Object(l.jsx)("li",{className:U.a.quote,children:Object(l.jsx)(T,{index:t})},e.id)}));return Object(l.jsxs)(s.Fragment,{children:[t&&Object(l.jsx)(I,{}),!t&&Object(l.jsxs)("ul",{className:U.a.list,children:[Object(l.jsxs)("div",{className:U.a.sortButtons,children:[Object(l.jsx)("button",{onClick:function(){return o(!0)},children:Object(l.jsx)("i",{class:"fas fa-sort-amount-up-alt"})}),Object(l.jsx)("button",{onClick:function(){return o(!1)},children:Object(l.jsx)("i",{class:"fas fa-sort-amount-down"})})]}),i]})]})},H=n(10),V=n(221),Z=n(19),J=n(26),Y=n(16),X=n(14),R=n.n(X),K=Y.a().shape({autor:Y.b().required(),quote:Y.b().required("No quote provided.").min(8,"quote is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"quote can only contain Latin letters.")}),W=function(e){var t,n,o=Object(s.useState)(!1),i=Object(d.a)(o,2),c=i[0],a=i[1],r=Object(u.b)(),m=Object(s.useContext)(x),j=Object(Z.d)({resolver:Object(J.a)(K)}),b=j.register,f=j.handleSubmit,O=j.reset,h=j.formState.errors;return Object(l.jsxs)("section",{className:R.a.container,children:[Object(l.jsxs)("div",{className:R.a.acordeon,onClick:function(){a((function(e){return!e}))},children:["Dodaj nowy cytat",Object(l.jsx)("span",{className:R.a.icon,children:Object(l.jsx)("i",{className:c?R.a.open:R.a.closed})})]}),Object(l.jsx)(V.a,{in:c,timeout:500,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:R.a.slideEnter,enterActive:R.a.slideEnterActive,exit:R.a.slideExit,exitActive:R.a.slideExitActive},children:Object(l.jsxs)("div",{className:R.a.acordeonContainer,children:[Object(l.jsx)("h2",{children:"Wpisz imi\u0119 autora i cytat kt\xf3ry chcesz doda\u0107"}),Object(l.jsxs)("form",{onSubmit:f((function(e){var t=e.autor,n=e.quote;r(B.addQuote({text:n,user:m.userName,author:t,userId:m.userId,userName:m.userName})),O(),r(B.sortQuotes()),a(!1),r(_.openNotification({isNotificationOpen:!0,message:"Cytat zosta\u0142 dodany",title:"Cytat zosta\u0142 dodany",status:"success"})),setTimeout((function(){r(_.closeNotification())}),4e3)})),className:R.a.form,children:[Object(l.jsxs)("div",{className:R.a.autor,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author: "}),Object(l.jsx)("input",Object(H.a)(Object(H.a)({},b("autor")),{},{type:"text",id:"author",className:h.autor&&R.a.invalid})),Object(l.jsx)("p",{className:R.a.error,children:null===(t=h.autor)||void 0===t?void 0:t.message})]}),Object(l.jsxs)("div",{className:R.a.quote,children:[Object(l.jsx)("label",{htmlFor:"quote",children:"Cytat: "}),Object(l.jsx)("textarea",Object(H.a)(Object(H.a)({},b("quote")),{},{type:"text",id:"quote",className:h.quote&&R.a.invalid})),Object(l.jsx)("p",{className:R.a.error,children:null===(n=h.quote)||void 0===n?void 0:n.message})]}),Object(l.jsx)("button",{className:R.a.submit,children:"dodaj cytat"})]})]})})]})},G=n(11),$=n(25),ee=n.n($),te=Y.a().shape({email:Y.b().email().required(),password:Y.b().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),ne=function(){var e,t,n=Object(s.useState)(!0),o=Object(d.a)(n,2),i=o[0],c=o[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),m=r[0],j=r[1],b=Object(G.g)(),f=Object(u.b)(),O=Object(s.useContext)(x),h=Object(Z.d)({resolver:Object(J.a)(te)}),p=h.register,v=h.handleSubmit,g=h.formState.errors,N=function(){c((function(e){return!e}))};return Object(l.jsxs)("section",{className:ee.a.container,children:[Object(l.jsxs)("section",{className:ee.a.header,children:[Object(l.jsx)("h1",{children:i?"Login":"Sign Up"}),i&&Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"jeste\u015b tutaj nowy? "}),Object(l.jsx)("span",{onClick:N,children:" Zarejestruj si\u0119"})]}),!i&&Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Jeste\u015b ju\u017c jednym z nas? "}),Object(l.jsx)("span",{onClick:N,children:" Zaloguj si\u0119"})]})]}),Object(l.jsxs)("form",{onSubmit:v((function(e){var t,n=e.email,o=e.password;j(!0),t=i?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To",fetch(t,{method:"POST",body:JSON.stringify({email:n,password:o,returnSecureToken:!0}),headers:{"Content-Type":" application/json"}}).then((function(e){return j(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication failed";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*e.expiresIn),n=e.email.substring(0,e.email.lastIndexOf("@")),o=e.email;O.login(e.idToken,e.localId,t.toISOString(),n,o),b.replace("/"),f(_.openNotification({isNotificationOpen:!0,title:"".concat(i?"Login":"SignIn"," Successful"),message:"".concat(i?"zalogowa\u0142e\u015b":"zarejestrowa\u0142e\u015b"," si\u0119 jako ").concat(o),status:"success"})),setTimeout((function(){f(_.closeNotification())}),4e3)})).catch((function(e){f(_.openNotification({isNotificationOpen:!0,icationOpen:!0,title:"".concat(i?"Login":"SignIn"," Failed"),message:"".concat(e),status:"error"})),setTimeout((function(){f(_.closeNotification())}),4e3)}))})),className:ee.a.form,children:[Object(l.jsxs)("div",{className:ee.a.email,children:[Object(l.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(l.jsx)("input",Object(H.a)(Object(H.a)({},p("email")),{},{type:"email",id:"email",required:!0,className:g.email&&ee.a.invalid})),Object(l.jsx)("p",{className:ee.a.error,children:null===(e=g.email)||void 0===e?void 0:e.message})]}),Object(l.jsxs)("div",{className:ee.a.password,children:[Object(l.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(l.jsx)("input",Object(H.a)(Object(H.a)({},p("password")),{},{type:"password",id:"password",required:!0,className:g.password&&ee.a.invalid})),Object(l.jsx)("p",{className:ee.a.error,children:null===(t=g.password)||void 0===t?void 0:t.message})]}),Object(l.jsxs)("div",{children:[!m&&Object(l.jsx)("button",{className:ee.a.submit,children:i?"Zaloguj si\u0119":"Zarejestruj si\u0119"}),m&&Object(l.jsx)("p",{children:"sending request... "})]})]})]})},oe=n(38),se=n.n(oe),ie=Y.a().shape({newPassword:Y.b().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),ce=function(){var e,t=Object(s.useContext)(x),n=Object(G.g)(),o=Object(Z.d)({resolver:Object(J.a)(ie)}),i=o.register,c=o.handleSubmit,a=o.formState.errors;return Object(l.jsxs)("form",{onSubmit:c((function(e){var o=e.newPassword;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCcQn6nzjLMzAdbJkC462HyFgAYzd508To",{method:"POST",body:JSON.stringify({idToken:t.token,password:o,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(e){n.replace("/")})).catch((function(e){return console.log(e)}))})),className:se.a.form,children:[Object(l.jsx)("h2",{children:" Tu mo\u017cesz zmieni\u0107 swoje has\u0142o"}),Object(l.jsx)("label",{htmlFor:"newPassword",className:se.a.title,children:"Wpisz nowe has\u0142o:"}),Object(l.jsx)("input",Object(H.a)(Object(H.a)({},i("newPassword")),{},{placeholder:"new password",type:"password",id:"newPassword",name:"newPassword",className:se.a.input&&se.a.invalid})),Object(l.jsx)("p",{className:se.a.error,children:null===(e=a.newPassword)||void 0===e?void 0:e.message}),Object(l.jsx)("button",{type:"submit",className:se.a.submit,children:"Change Password"})]})},ae=n(105),re=n.n(ae),ue=function(){return Object(l.jsx)("section",{className:re.a.container,children:Object(l.jsx)(ce,{})})},de=n(59),le=n.n(de),me=function(){var e=Object(u.c)((function(e){return e.ui.isDarkMode})),t=Object(u.b)();return Object(l.jsxs)("button",{onClick:function(){t(_.toggleDarkMode())},className:"".concat(le.a.Button," ").concat(e?le.a.dark:le.a.light),children:[Object(l.jsx)("i",{class:"fas fa-sun"}),Object(l.jsx)("i",{class:"fas fa-moon"})]})},je=n(18),be=n.n(je),xe=function(e){var t=Object(u.c)((function(e){return e.ui.isBurgerMenuOpen})),n=Object(u.b)(),o=Object(s.useContext)(x),i=o.isLoggedIn,c=function(){n(_.toggleBurgerMenu())};return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(V.a,{in:t,timeout:700,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:be.a.slideEnter,enterActive:be.a.slideEnterActive,exit:be.a.slideExit,exitActive:be.a.slideExitActive},children:Object(l.jsxs)("section",{className:be.a.container,children:[i&&Object(l.jsxs)("div",{className:be.a.whoIsLogged,children:[Object(l.jsx)("p",{children:"zalogowany jako"}),Object(l.jsx)("p",{children:o.userEmail})]}),Object(l.jsxs)("ul",{className:be.a.menu,children:[Object(l.jsx)(r.c,{exact:!0,activeClassName:be.a.activeLink,to:"/",children:Object(l.jsx)("li",{onClick:c,children:"strona g\u0142\xf3wna"})}),!i&&Object(l.jsx)(r.c,{exact:!0,activeClassName:be.a.activeLink,to:"/login",children:Object(l.jsx)("li",{onClick:c,children:"zaloguj si\u0119"})}),i&&Object(l.jsx)(r.c,{exact:!0,activeClassName:be.a.activeLink,to:"/profile",children:Object(l.jsx)("li",{onClick:c,children:"tw\xf3j profil"})}),i&&Object(l.jsx)("span",{children:Object(l.jsx)("li",{onClick:function(){n(_.toggleBurgerMenu()),o.logout(),n(_.openNotification({isNotificationOpen:!0,title:"logout succesful",message:"wylogowa\u0142e\u015b si\u0119 poprawnie",status:"success"})),setTimeout((function(){n(_.closeNotification())}),4e3)},children:"wyloguj"})}),Object(l.jsx)(r.c,{exact:!0,activeClassName:be.a.activeLink,to:"/contact",children:Object(l.jsx)("li",{onClick:c,children:"About me"})}),Object(l.jsx)(me,{})]})]})}),Object(l.jsx)(V.a,{in:t,timeout:700,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:be.a.fadeEnter,enterActive:be.a.fadeEnterActive,exit:be.a.fadeExit,exitActive:be.a.fadeExitActive},children:Object(l.jsx)("div",{className:be.a.overlay,onClick:c})})]})},fe=n(22),Oe=n.n(fe),_e=function(){var e=Object(u.c)((function(e){return e.ui.isModalOpen})),t=Object(u.b)(),n=function(){t(_.closeModal())};return Object(l.jsx)(V.a,{in:e,timeout:400,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:Oe.a.slideEnter,enterActive:Oe.a.slideEnterActive,exit:Oe.a.slideExit,exitActive:Oe.a.slideExitActive},children:Object(l.jsxs)("div",{className:Oe.a.modal,children:[Object(l.jsx)("div",{className:Oe.a.overlay,onClick:n}),Object(l.jsxs)("div",{className:Oe.a.card,children:[Object(l.jsxs)("div",{className:Oe.a.modalHeader,children:[Object(l.jsx)("p",{children:"jakis tekst"}),Object(l.jsx)("button",{className:Oe.a.modalBtn,onClick:n,children:Object(l.jsx)("div",{className:Oe.a.cross1,children:Object(l.jsx)("div",{className:Oe.a.cross2})})})]}),Object(l.jsxs)("div",{className:Oe.a.modalContent,children:[Object(l.jsxs)("p",{children:["Aby w pe\u0142ni skorzysta\u0107 z tej strony za\u0142\xf3z konto albo skorzystaj z"," "]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"email: test@test.com"}),Object(l.jsx)("p",{children:"password: password123"})]})]})]})})},he=n(3),pe=n.n(he),ve=n(12),ge=n(60),Ne=n.n(ge),we=Y.a().shape({comment:Y.b().required("No comment provided.").min(3,"quote is too short - should be at least 3 chars minimum.").matches(/[a-zA-Z]/,"quote can only contain Latin letters.")}),ke=function(e){var t,n=Object(Z.d)({resolver:Object(J.a)(we)}),o=n.register,s=n.handleSubmit,i=n.reset,c=n.formState.errors;return Object(l.jsxs)("form",{onSubmit:s((function(t){var n=t.comment;e.editForm(n),i()})),className:Ne.a.form,children:[Object(l.jsx)("label",{htmlFor:"comment",className:Ne.a.label,children:"wpisz nowy komentarz"}),Object(l.jsx)("textarea",Object(H.a)(Object(H.a)({},o("comment")),{},{id:"comment",rows:"5"})),c.comment&&Object(l.jsx)("p",{className:Ne.a.error,children:null===(t=c.comment)||void 0===t?void 0:t.message}),Object(l.jsx)("button",{children:"zmie\u0144 komentarz"})]})},qe=n(28),Ae=n.n(qe),Ce=function(e){var t=Object(u.b)(),n=Object(s.useState)(!1),o=Object(d.a)(n,2),i=o[0],c=o[1],a=Object(s.useContext)(x).userId===e.userId,r=function(){c((function(e){return!i}))};return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsxs)("div",{className:Ae.a.commentHeader,children:[Object(l.jsx)(k,{displaySpot:!1}),Object(l.jsx)("p",{children:e.userName}),Object(l.jsxs)("p",{children:[" ",e.date]})]}),Object(l.jsxs)("div",{className:Ae.a.mainComment,children:[Object(l.jsx)("p",{children:e.commentText}),a&&Object(l.jsxs)("button",{onClick:function(){t(B.deletecomment({id:e.id,index:e.index})),t(_.openNotification({isNotificationOpen:!0,title:"comment successfully removed",message:"komentarz zosta\u0142 usuni\u0119ty ",status:"success"})),setTimeout((function(){t(_.closeNotification())}),4e3)},className:Ae.a.btn,children:["usu\u0144 komentarz"," "]}),a&&Object(l.jsx)("button",{onClick:r,className:Ae.a.btn,children:i?"zako\u0144cz edycje":"edytuj"}),Object(l.jsx)(V.a,{in:i,timeout:500,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:Ae.a.slideEnter,enterActive:Ae.a.slideEnterActive,exit:Ae.a.slideExit,exitActive:Ae.a.slideExitActive},children:Object(l.jsx)(ke,{editForm:function(n){t(B.editComment({id:e.id,index:e.index,editedText:n})),t(_.openNotification({isNotificationOpen:!0,title:"comment succesfully edited",message:"komentarz zosta\u0142  zmieniony",status:"success"})),setTimeout((function(){t(_.closeNotification())}),4e3),r()}})})]})]})},Ee=n(41),ye=n.n(Ee),Ie=Y.a().shape({comment:Y.b().required("No comment provided.").min(3,"quote is too short - should be at least 3 chars minimum.").matches(/[a-zA-Z]/,"quote can only contain Latin letters.")}),Se=function(e){var t,n=Object(u.b)(),o=Object(s.useContext)(x),i=Object(Z.d)({resolver:Object(J.a)(Ie)}),c=i.register,a=i.handleSubmit,r=i.reset,d=i.formState.errors;return Object(l.jsxs)("form",{onSubmit:a((function(t){var s=t.comment;n(B.addComment({id:e.id,text:s,userId:o.userId,userName:o.userName})),r(),n(_.openNotification({isNotificationOpen:!0,message:"Komentarz zosta\u0142 dodany",title:"Komentarz zosta\u0142 dodany",status:"success"})),setTimeout((function(){n(_.closeNotification())}),4e3)})),className:ye.a.form,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Komentarze"}),Object(l.jsxs)("div",{className:ye.a.commentBox,children:[Object(l.jsx)("textarea",Object(H.a)(Object(H.a)({},c("comment")),{},{id:"comment",rows:"5",className:d.comment&&ye.a.invalid})),d.comment&&Object(l.jsx)("p",{className:ye.a.error,children:null===(t=d.comment)||void 0===t?void 0:t.message}),Object(l.jsx)("button",{className:ye.a.btn,children:"Add Comment"})]})]})},ze=n(29),Me=n.n(ze),Le=function(e){var t=Object(s.useState)(!0),n=Object(d.a)(t,2),o=n[0],i=n[1],c=Object(s.useContext)(x),a=Object(u.c)((function(e){return e.quotes.comments})),r=a.findIndex((function(t){return t.id===e.id})),m=Object(l.jsx)("p",{children:" brak komentarzy "});return r>=0&&void 0!==a[r].comments&&(m=a[r].comments.map((function(t,n){return Object(l.jsx)("li",{className:Me.a.comment,children:Object(l.jsx)(Ce,{commentText:t.text,date:t.date,userId:t.userId,userName:t.userName,index:n,id:e.id})},n)}))),Object(l.jsx)(s.Fragment,{children:Object(l.jsxs)("div",{className:Me.a.container,children:[c.isLoggedIn&&Object(l.jsx)(Se,{id:e.id}),Object(l.jsx)("button",{onClick:function(){i((function(e){return!e}))},className:Me.a.btnShowComments,children:o?"zwi\u0144 komentarze":"pokarz komentarze"}),Object(l.jsx)(V.a,{in:o,timeout:400,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:Me.a.slideEnter,enterActive:Me.a.slideEnterActive,exit:Me.a.slideExit,exitActive:Me.a.slideExitActive},children:Object(l.jsx)("div",{className:Me.a.list,children:m})})]})})},Qe=n(74),Be=n.n(Qe),Pe=function(){var e=Object(u.b)(),t=Object(G.h)().id;Object(s.useEffect)((function(){e(function(){var e=Object(ve.a)(pe.a.mark((function e(t){var n,o;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(ve.a)(pe.a.mark((function e(){var t,n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-573dd-default-rtdb.firebaseio.com/comments.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("fetch cart data faild");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:return o=e.sent,e.next=7,t(B.replaceComments({comments:o||[]}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var n=Object(u.c)((function(e){return e.quotes.quotes})).filter((function(e){return e.id===t}))[0]||{};return Object(l.jsx)(s.Fragment,{children:Object(l.jsxs)("div",{className:Be.a.mainQuote,children:[Object(l.jsxs)("blockquote",{className:Be.a.otroBlockquote,children:[n.text,Object(l.jsx)("span",{children:n.author})]}),Object(l.jsx)(Le,{id:n.id})]})})},Te=n(106),De=n.n(Te),Ue=function(){return Object(l.jsx)(s.Fragment,{children:Object(l.jsxs)("ul",{className:De.a.list,children:[Object(l.jsx)("h1",{children:"About me"}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/DenekD",children:Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fab fa-github"})})}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/tomasz.denkiewicz.1/",children:Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fab fa-facebook"})})}),Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/tomasz-denkiewicz-70700276/",children:Object(l.jsx)("li",{children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})})]})})},Fe=n(24),He=n.n(Fe),Ve=function(e){var t=Object(u.c)((function(e){return e.ui.notification})),n=Object(u.b)(),o="";"error"===t.status&&(o=He.a.error),"success"===t.status&&(o=He.a.success),"info"===t.status&&(o=He.a.info);var s="".concat(He.a.notification," ").concat(o);return Object(l.jsx)(V.a,{in:t.isNotificationOpen,timeout:700,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:He.a.slideEnter,enterActive:He.a.slideEnterActive,exit:He.a.slideExit,exitActive:He.a.slideExitActive},children:Object(l.jsxs)("section",{className:s,onClick:function(){n(_.closeNotification())},children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{children:"i"}),Object(l.jsxs)("div",{className:He.a.content,children:[Object(l.jsx)("h2",{children:t.title}),Object(l.jsx)("p",{children:t.message})]}),Object(l.jsx)("div",{className:He.a.cross1,children:Object(l.jsx)("div",{className:He.a.cross2})})]})})},Ze=n(107),Je=n.n(Ze),Ye=function(){var e=Object(s.useContext)(x).isLoggedIn;return Object(l.jsxs)("div",{className:Je.a.footer,children:[Object(l.jsx)(r.c,{to:"/",children:Object(l.jsx)("p",{children:"strona g\u0142\xf3wna"})}),e?Object(l.jsx)(r.c,{to:"/profile",children:Object(l.jsx)("p",{children:"profile"})}):Object(l.jsx)(r.c,{to:"/login",children:Object(l.jsx)("p",{children:"login"})}),Object(l.jsx)(r.c,{to:"/contact",children:Object(l.jsx)("p",{children:"kontakt"})})]})},Xe=n(61),Re=n.n(Xe),Ke=!0;var We=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.quotes.quotes})),n=Object(u.c)((function(e){return e.quotes.comments})),o=Object(u.c)((function(e){return e.quotes.quotesChanged})),i=Object(u.c)((function(e){return e.quotes.commentsChanged})),c=Object(u.c)((function(e){return e.ui.isDarkMode})),a=Object(s.useContext)(x);return Object(s.useEffect)((function(){Ke?Ke=!1:(o&&e(function(e){return function(){var t=Object(ve.a)(pe.a.mark((function t(n){var o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(){var t=Object(ve.a)(pe.a.mark((function t(){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://quotes-573dd-default-rtdb.firebaseio.com/quotes.json",{method:"PUT",body:JSON.stringify(Object(H.a)({},e))});case 2:if(t.sent.ok){t.next=5;break}throw new Error("send quotes data faild");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,o();case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}(t)),i&&e(function(e){return function(){var t=Object(ve.a)(pe.a.mark((function t(n){var o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(){var t=Object(ve.a)(pe.a.mark((function t(){return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://quotes-573dd-default-rtdb.firebaseio.com/comments.json",{method:"PUT",body:JSON.stringify(Object(H.a)({},e))});case 2:if(t.sent.ok){t.next=5;break}throw new Error("send quotes data faild");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,o();case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}(n)))}),[e,t,o,n,i]),Object(s.useEffect)((function(){e(function(){var e=Object(ve.a)(pe.a.mark((function e(t){var n,o;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(ve.a)(pe.a.mark((function e(){var t,n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-573dd-default-rtdb.firebaseio.com/quotes.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("fetch cart data faild");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,t(B.quotesAreLoading()),e.next=5,n();case 5:o=e.sent,t(B.replaceQuotes({quotes:o||[]})),t(B.quotesAreDownload()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(l.jsxs)("div",{className:" ".concat(c?Re.a.darkMode:Re.a.lightMode),children:[Object(l.jsx)(_e,{}),Object(l.jsx)(C,{}),Object(l.jsx)(xe,{}),Object(l.jsx)(Ve,{}),Object(l.jsx)(s.Suspense,{fallback:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(I,{})}),children:Object(l.jsxs)("div",{className:Re.a.container,children:[Object(l.jsxs)(G.d,{children:[Object(l.jsxs)(G.b,{path:"/",exact:!0,children:[a.isLoggedIn&&Object(l.jsx)(W,{}),Object(l.jsx)(F,{})]}),Object(l.jsx)(G.b,{path:"/login",exact:!0,children:Object(l.jsx)(ne,{})}),Object(l.jsx)(G.b,{path:"/contact",exact:!0,children:Object(l.jsx)(Ue,{})}),Object(l.jsx)(G.b,{path:"/quote/:id",children:Object(l.jsx)(Pe,{})}),Object(l.jsxs)(G.b,{path:"/profile",children:[a.isLoggedIn&&Object(l.jsx)(ue,{}),!a.isLoggedIn&&Object(l.jsx)(G.a,{to:"/login"})]}),Object(l.jsx)(G.b,{path:"*",children:Object(l.jsx)(G.a,{to:"/"})})]}),Object(l.jsx)(Ye,{})]})})]})},Ge=Object(f.a)({reducer:{quotes:P.reducer,ui:h.reducer}});a.a.render(Object(l.jsx)(b,{children:Object(l.jsx)(r.a,{basename:"/Quotes",children:Object(l.jsx)(u.a,{store:Ge,children:Object(l.jsx)(We,{})})})}),document.getElementById("root"))},24:function(e,t,n){e.exports={notification:"Notification_notification__3D5S5",content:"Notification_content__3ONXd",cross1:"Notification_cross1__rRc6B",cross2:"Notification_cross2__3q8rU",error:"Notification_error__2ILHS",success:"Notification_success__3Ww1I",info:"Notification_info__lVgUO",slideEnter:"Notification_slideEnter__a0ECl",slideEnterActive:"Notification_slideEnterActive__QVAbW",slideExit:"Notification_slideExit__WzarA",slideExitActive:"Notification_slideExitActive__x1Z7v"}},25:function(e,t,n){e.exports={container:"AuthPage_container__gk6CT",header:"AuthPage_header__17Y90",submit:"AuthPage_submit__2LPnX",form:"AuthPage_form__2P5hi",error:"AuthPage_error__1o-Lm",email:"AuthPage_email__3PPlu",password:"AuthPage_password__1cxrM",invalid:"AuthPage_invalid__1Qn19"}},28:function(e,t,n){e.exports={commentHeader:"Comment_commentHeader__2wdMR",mainComment:"Comment_mainComment__3lLk9",btn:"Comment_btn__7MqPY",slideEnter:"Comment_slideEnter__3ZN0v",slideEnterActive:"Comment_slideEnterActive__msRzN",slideExit:"Comment_slideExit__15rro",slideExitActive:"Comment_slideExitActive__ptrxq"}},29:function(e,t,n){e.exports={container:"CommentList_container__ys7K2",list:"CommentList_list__2RPx-",comment:"CommentList_comment__2R3OL",btnShowComments:"CommentList_btnShowComments__Dutl8",slideEnter:"CommentList_slideEnter__4u1Ep",slideEnterActive:"CommentList_slideEnterActive__30PmO",slideExit:"CommentList_slideExit__1SrRE",slideExitActive:"CommentList_slideExitActive__18ku2"}},34:function(e,t,n){e.exports={burger:"Hamburger_burger__2zCA8",open:"Hamburger_open__2JqG-",closed:"Hamburger_closed__1d26Z"}},38:function(e,t,n){e.exports={form:"ProfileForm_form__2xGgc",invalid:"ProfileForm_invalid__2awvW",error:"ProfileForm_error__2Tzt5",submit:"ProfileForm_submit__35C9W"}},41:function(e,t,n){e.exports={form:"AddComment_form__KzC3N",commentBox:"AddComment_commentBox__l7HIE",btn:"AddComment_btn__1rxr9",invalid:"AddComment_invalid__1Dq4L",error:"AddComment_error__DHGaN"}},56:function(e,t,n){e.exports={container:"UserImage_container__2c-bz",image:"UserImage_image__1OYO1",spot:"UserImage_spot__fBuig"}},57:function(e,t,n){e.exports={header:"Navbar_header__73qvs",burgerAndTitle:"Navbar_burgerAndTitle__2jsrk",nav:"Navbar_nav__2imOE",cog:"Navbar_cog__2on84"}},58:function(e,t,n){e.exports={quote:"MainContent_quote__1QBdt",list:"MainContent_list__2B8nR",sortButtons:"MainContent_sortButtons__28WFK"}},59:function(e,t,n){e.exports={Button:"DarkModeButton_Button__uJABp",light:"DarkModeButton_light__1yKZo",dark:"DarkModeButton_dark__WPe0S"}},60:function(e,t,n){e.exports={form:"CommentEditForm_form__3146M",error:"CommentEditForm_error__3y5zL"}},61:function(e,t,n){e.exports={container:"App_container__1MQN3",darkMode:"App_darkMode__2TPkn",lightMode:"App_lightMode__2ijaz"}},74:function(e,t,n){e.exports={mainQuote:"QuotePage_mainQuote__3-P3J",otroBlockquote:"QuotePage_otroBlockquote__3uVOh"}}},[[220,1,2]]]);
//# sourceMappingURL=main.925e71bd.chunk.js.map