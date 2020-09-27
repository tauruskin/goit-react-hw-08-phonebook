(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(20),r=a.n(n),c=a(30),u=a(22),o=a.n(u),s=a(3);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var i=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){o.a.defaults.headers.common.Authorization=""},b={register:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(s.a.registerRequest()),t.prev=1,t.next=4,o.a.post("/users/signup",e);case 4:n=t.sent,i(n.data.token),a(s.a.registerSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(s.a.registerError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(s.a.loginRequest()),t.prev=1,t.next=4,o.a.post("/users/login",e);case 4:n=t.sent,i(n.data.token),a(s.a.loginSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a(s.a.loginError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logoutRequest()),e.prev=1,e.next=4,o.a.post("/users/logout");case 4:l(),t(s.a.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(s.a.logoutError(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a(),c=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return i(c),t(s.a.getCurrentUserRequest()),e.prev=5,e.next=8,o.a.get("/users/current");case 8:u=e.sent,t(s.a.getCurrentUserSuccess(u.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(s.a.getCurrentUserError(e.t0));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,a){return e.apply(this,arguments)}}()}},g={isAuthenticated:function(e){return e.auth.token},getUserEmail:function(e){return e.auth.user.email}};a(28)},27:function(e,t,a){"use strict";var n=a(2),r=Object(n.b)("@contact/getRequest"),c=Object(n.b)("@contact/getSuccess"),u=Object(n.b)("@contact/getError"),o=Object(n.b)("@contact/addRequest"),s=Object(n.b)("@contact/addSuccess"),i=Object(n.b)("@contact/addError"),l=Object(n.b)("@contact/deleteRequest"),b=Object(n.b)("@contact/deleteSuccess"),g=Object(n.b)("@contact/deleteError"),d=Object(n.b)("@contact/filter",(function(e){return{payload:e.target.value}}));t.a={getContactsRequest:r,getContactsSuccess:c,getContactsError:u,addContactRequest:o,addContactSuccess:s,addContactError:i,deleteContactRequest:l,deleteContactSuccess:b,deleteContactError:g,handleFilter:d}},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n,r,c,u=a(8),o=a(6),s=a(2),i=a(57),l=a.n(i),b=a(3),g={name:null,email:null},d=Object(s.c)(g,(n={},Object(u.a)(n,b.a.registerSuccess,(function(e,t){return t.payload.user})),Object(u.a)(n,b.a.loginSuccess,(function(e,t){return t.payload.user})),Object(u.a)(n,b.a.logoutSuccess,(function(){return g})),Object(u.a)(n,b.a.getCurrentUserSuccess,(function(e,t){return t.payload})),n)),p=Object(s.c)(null,(r={},Object(u.a)(r,b.a.registerSuccess,(function(e,t){return t.payload.token})),Object(u.a)(r,b.a.loginSuccess,(function(e,t){return t.payload.token})),Object(u.a)(r,b.a.logoutSuccess,(function(){return null})),r)),f=Object(s.c)(null,(c={},Object(u.a)(c,b.a.registerError,(function(e,t){return t.payload})),Object(u.a)(c,b.a.loginError,(function(e,t){return t.payload})),Object(u.a)(c,b.a.logoutError,(function(e,t){return t.payload})),Object(u.a)(c,b.a.getCurrentUserError,(function(e,t){return t.payload})),c)),m={key:"auth",storage:l.a,whiteList:["token"]};t.b=Object(o.c)({user:d,token:p,error:f})},3:function(e,t,a){"use strict";var n=a(2),r=Object(n.b)("@auth/registerRequest"),c=Object(n.b)("@auth/registerSuccess"),u=Object(n.b)("@auth/registerError"),o=Object(n.b)("@auth/loginRequest"),s=Object(n.b)("@auth/loginSuccess"),i=Object(n.b)("@auth/loginError"),l=Object(n.b)("@auth/logoutRequest"),b=Object(n.b)("@auth/logoutSuccess"),g=Object(n.b)("@auth/logoutError"),d=Object(n.b)("@auth/getCurrentUserRequest"),p=Object(n.b)("@auth/getCurrentUserSuccess"),f=Object(n.b)("@auth/getCurrentUserError");t.a={registerRequest:r,loginRequest:o,logoutRequest:l,getCurrentUserRequest:d,registerError:u,loginError:i,logoutError:g,getCurrentUserError:f,registerSuccess:c,loginSuccess:s,logoutSuccess:b,getCurrentUserSuccess:p}},44:function(e,t,a){"use strict";var n,r=a(8),c=a(61),u=a(6),o=a(2),s=a(27),i=Object(o.c)([],(n={},Object(r.a)(n,s.a.getContactsSuccess,(function(e,t){return t.payload})),Object(r.a)(n,s.a.addContactSuccess,(function(e,t){var a=t.payload;return[].concat(Object(c.a)(e),[a])})),Object(r.a)(n,s.a.deleteContactSuccess,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),n)),l=Object(o.c)("",Object(r.a)({},s.a.handleFilter,(function(e,t){return t.payload})));t.a=Object(u.c)({items:i,filter:l})},63:function(e,t,a){e.exports=a(97)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),u=a.n(c),o=a(13),s=a(56),i=a(2),l=a(21),b=a(44),g=a(28),d=Object(i.a)({reducer:{contacts:b.a,auth:Object(l.g)(g.a,g.b)},devTools:!1,middleware:Object(i.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.e,l.b,l.c,l.d]}})}),p=Object(l.h)(d),f=a(40),m=a(41),h=a(43),O=a(42),j=a(5),v=a(18),E=[{path:"/",label:"Home",exact:!0,component:Object(n.lazy)((function(){return a.e(7).then(a.bind(null,125))})),private:!1,restricted:!1},{path:"/register",label:"Register",exact:!0,component:Object(n.lazy)((function(){return a.e(5).then(a.bind(null,126))})),private:!1,restricted:!0},{path:"/login",label:"Login",exact:!0,component:Object(n.lazy)((function(){return a.e(4).then(a.bind(null,127))})),private:!1,restricted:!0},{path:"/contacts",label:"Contacts",exact:!0,component:Object(n.lazy)((function(){return Promise.all([a.e(6),a.e(3)]).then(a.bind(null,128))})),private:!0,restricted:!1}],k=a(16),C=a(35),y=Object(o.b)((function(e){return{isAuthenticated:k.b.isAuthenticated(e)}}))((function(e){var t=e.component,a=e.isAuthenticated,n=Object(C.a)(e,["component","isAuthenticated"]);return r.a.createElement(j.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(j.a,{to:"/login"})}}))})),S=Object(o.b)((function(e){return{isAuthenticated:k.b.isAuthenticated(e)}}))((function(e){var t=e.component,a=e.isAuthenticated,n=e.restricted,c=Object(C.a)(e,["component","isAuthenticated","restricted"]);return r.a.createElement(j.b,Object.assign({},c,{render:function(e){return a&&n?r.a.createElement(j.a,{to:"/contacts"}):r.a.createElement(t,e)}}))})),R=a(112),x=a(111),U=(a(93),Object(o.b)((function(e){return{email:k.b.getUserEmail(e),avatar:"https://img1.freepng.ru/20180203/vhw/kisspng-anonymous-icon-v-for-vendetta-png-transparent-image-5a75f48a0b24f0.4091240015176797540457.jpg"}}),{onLogout:k.a.logOut})((function(e){var t=e.avatar,a=e.email,n=e.onLogout;return r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("div",{className:"account-avatar"},r.a.createElement("img",{className:"avatar avatar--hover",src:t,alt:"User avatar",width:"44",height:"44"})),r.a.createElement("span",{className:"account-title"},a),r.a.createElement("button",{className:"logout-btn",type:"button",onClick:n},"Logout"))}))),q=(a(94),Object(o.b)((function(e){return{isAuthenticated:k.b.isAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return r.a.createElement("div",{className:"header"},r.a.createElement(R.a,{position:"static"},r.a.createElement(x.a,{className:"app_header"},r.a.createElement(v.b,{exact:!0,to:"/",className:"navigation-link",activeClassName:"navigation-link-active"},"Home"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/contacts",className:"navigation-link",activeClassName:"navigation-link-active"},"Contacts")," ",r.a.createElement(U,null)," "):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/login",className:"navigation-link",activeClassName:"navigation-link-active"},"Login"),r.a.createElement(v.b,{to:"/register",className:"navigation-link",activeClassName:"navigation-link-active"},"Registration")))))}))),w=(a(95),function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(q,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("h1",null,"Loading...")},r.a.createElement(j.d,null,E.map((function(e){return e.private?r.a.createElement(y,Object.assign({key:e.label},e)):r.a.createElement(S,Object.assign({key:e.label},e,{restricted:e.restricted}))})))))}}]),a}(n.Component)),A=Object(o.b)(null,{onGetCurrentUser:k.a.getCurrentUser})(w);a(96);u.a.render(r.a.createElement(o.a,{store:d},r.a.createElement(s.a,{loading:null,persistor:p},r.a.createElement(A,null))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e1b32adf.chunk.js.map