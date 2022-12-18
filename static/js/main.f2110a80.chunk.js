(this["webpackJsonpweather-search"]=this["webpackJsonpweather-search"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);n(152);var a,r=n(0),o=n.n(r),c=n(120),i=n.n(c),l=n(60),s=n(131),d=n(14);!function(e){e.HOME="/weather-search",e.WEATHER_PAGE="/weather-search/weather"}(a||(a={}));var u,j=a,p=n(12),m=n(16),h=n(262),b=n(8),O=n(259),y=n(246),f=n(18),x=n(253),v=n(252),E=n(267),w=n(1),S=function(e){var t=e.apiUrl,n=e.iconCode,a=e.width,r=e.altText,o=e.qualityParam;return Object(w.jsx)("img",{loading:"lazy",width:null!==a&&void 0!==a?a:20,src:"".concat(t).concat(null===n||void 0===n?void 0:n.toLowerCase()).concat(o||"",".png"),srcSet:"".concat(t).concat(null===n||void 0===n?void 0:n.toLowerCase()).concat(o||"",".png 2x"),alt:null!==r&&void 0!==r?r:"icon image",style:{padding:"3px"}})},R="flag icon",C=function(e){var t=e.iconCode,n=e.width,a=e.countryName,r=a?"".concat(a," ").concat(R):R;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsx)(S,{iconCode:t,width:null!==n&&void 0!==n?n:20,apiUrl:"https://flagcdn.com/w40/",altText:r}):null})},A=function(e){var t=e.id,n=e.labelText,a=e.setCity,r=e.options.map((function(e){var t=e.country,n=e.state?"".concat(e.name," (").concat(e.state,")"):"".concat(e.name);return Object(f.a)({optionName:n,groupName:t},e)}));r.sort((function(e,t){return-t.groupName.toLocaleUpperCase().localeCompare(e.groupName.toLocaleUpperCase())}));return Object(w.jsx)(x.a,{id:t,options:r,groupBy:function(e){return e.groupName},getOptionLabel:function(e){return e.optionName},isOptionEqualToValue:function(e,t){return t&&e.id===t.id},sx:{width:400},autoHighlight:!0,renderInput:function(e){return Object(w.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{label:n,required:!0}))},renderOption:function(e,t){return Object(w.jsx)(E.a,{title:"".concat(t.coord.lat,"; ").concat(t.coord.lon),placement:"right-start",arrow:!0,describeChild:!0,children:Object(w.jsxs)(h.a,Object(f.a)(Object(f.a)({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[Object(w.jsx)(C,{iconCode:t.country,countryName:t.country}),t.optionName]}))},t.id)},onChange:function(e,t){t&&a(t.id)}})},g=n(91),T=function(e){var t=g,n=Object(r.useState)(),a=Object(b.a)(n,2),o=a[0],c=a[1],i=e.addCard,l=function(){var e=Object(m.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&i(o);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(h.a,{style:{padding:"20px"},children:Object(w.jsxs)(y.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(w.jsx)(A,{id:"city-input",options:t,labelText:"Input city name",setCity:c}),Object(w.jsx)(O.a,{variant:"contained",size:"large",onClick:l,children:"GO"})]})})},U=n(264),_=n(260),D=n(268),L=n(269),N=n(263),k=n(129),G=n.n(k),I=n(130),M=n.n(I),F=function(){return Object(w.jsx)("span",{children:"\u2103"})},H=function(e){var t=e.cellName,n=e.cellValue,a=e.unit,r=e.specialSymbol;return Object(w.jsx)(w.Fragment,{children:void 0===n?null:Object(w.jsxs)(h.a,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(w.jsx)(U.a,{component:"span",color:"text.secondary",style:{padding:5,width:"60%",textAlign:"start",boxSizing:"border-box",alignSelf:"center"},children:t}),Object(w.jsxs)(U.a,{component:"span",style:{padding:5,width:"40%",textAlign:"start",boxSizing:"border-box",alignSelf:"center"},children:[Object(w.jsx)(U.a,{component:"span",style:{padding:5},children:n}),Object(w.jsx)(U.a,{component:"span",style:{padding:5},children:null!==a&&void 0!==a?a:r})]})]})})},P="weather icon",W=function(e){var t=e.weatherIcon,n=e.weatherName,a=n?"".concat(n," ").concat(P):P;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsx)(S,{iconCode:t,width:100,apiUrl:"http://openweathermap.org/img/wn/",altText:a,qualityParam:"@2x"}):null})},V=n(255),B=n(92),Q=n.n(B),z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,height:"75%",width:"75%"},q=function(e){var t=e.open,n=e.handleClose,a=e.children;return Object(w.jsx)(V.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(w.jsxs)(h.a,{sx:z,children:[Object(w.jsx)(h.a,{style:{display:"flex",justifyContent:"right"},children:Object(w.jsx)(E.a,{title:"Close",describeChild:!0,followCursor:!0,children:Object(w.jsx)(N.a,{"aria-label":"delete",size:"small",onClick:n,children:Object(w.jsx)(Q.a,{})})})}),Object(w.jsx)(h.a,{children:a})]})})},K=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n,a,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(J(t));case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw r=e.sent,new Error(null===(a=r.error)||void 0===a?void 0:a.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return new Request(Y(e),{method:e.type})},Y=function(e){var t=e.query?"?".concat(new URLSearchParams(Object.assign(e.query)).toString()):"";return"".concat(e.apiUrl).concat(e.endpoint).concat(t)};!function(e){e.GET="GET"}(u||(u={}));var X=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)(Object(f.a)({},t),{},{type:u.GET}),e.next=3,Z(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$="/weather",ee="/forecast",te=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n,a,r,o,c=arguments;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"metric",a=c.length>2&&void 0!==c[2]?c[2]:"en",r=$,e.next=5,X({apiUrl:"https://api.openweathermap.org/data/2.5",endpoint:r,query:{id:t,units:n,lang:a,appid:"0d4d08ec6988265ef419919b2cb72625"}});case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t,n){var a,r,o,c,i=arguments;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:"metric",r=i.length>3&&void 0!==i[3]?i[3]:"en",o=ee,e.next=5,X({apiUrl:"https://api.openweathermap.org/data/2.5",endpoint:o,query:{id:t,units:a,lang:r,cnt:n,appid:"0d4d08ec6988265ef419919b2cb72625"}});case 5:return c=e.sent,e.abrupt("return",c.list);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 8,e.next=3,ne(t,8);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){return e<0&&0===Number(e.toFixed(0))?"0":e.toFixed(0)},ce=n(65),ie=n.n(ce);ie()().format();var le,se,de=function(){return ie()().valueOf()};!function(e){e.windSpeed="meter/sec",e.windGust="meter/sec",e.temperature="Celsius"}(le||(le={})),function(e){e.windSpeed="miles/hour",e.windGust="miles/hour",e.temperature="Fahrenheit"}(se||(se={}));var ue,je=n(250),pe=n(247),me=n(126),he=n(248),be=n(249),Oe=n(127),ye=(n(174),function(e){return e.value>=0?"green":"blue"}),fe=function(e){return"".concat(e.value.toFixed(0)," \xb0C")},xe=function(e){var t=e.data;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsx)(h.a,{style:{height:"fit-context",overflow:"visible"},children:Object(w.jsxs)(je.a,{style:{height:"fit-context",width:"100%",overflow:"visible"},children:[Object(w.jsx)(pe.a,{children:Object(w.jsx)(me.a,{type:"line",data:t,color:ye,field:"temp",categoryField:"time",highField:"fit-context",autoFit:!0,margin:10,style:"normal",noteTextField:"time",children:Object(w.jsx)(he.a,{color:"black",position:"left",content:fe})})}),Object(w.jsx)(be.a,{children:Object(w.jsx)(Oe.a,{title:{text:"Time",color:"LightGray"},baseUnit:"hours",visible:!0,labels:{rotation:60,color:"LightGray"},line:{color:"LightGray",visible:!0}})})]})}):null})},ve=le,Ee=function(e){var t,n,a,r,o,c,i,l,s,d,u,j,p,m,b,O,y,f,x,v,E,S,R,A,g,T,_=e.card,D=_.weather?oe(null===(t=_.weather)||void 0===t?void 0:t.main.temp):void 0,L=_.weather?oe(null===(n=_.weather)||void 0===n?void 0:n.main.feels_like):void 0,N=_.weather?oe(null===(a=_.weather)||void 0===a?void 0:a.main.temp_min):void 0,k=_.weather?oe(null===(r=_.weather)||void 0===r?void 0:r.main.temp_max):void 0,G=null===(o=_.forecast)||void 0===o?void 0:o.map((function(e){return{time:(t=e.dt,ie.a.unix(t).format("HH:mm")),temp:e.main.temp};var t}));return Object(w.jsxs)(h.a,{children:[Object(w.jsxs)(h.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:[Object(w.jsx)(C,{iconCode:_.city.country,countryName:_.city.country,width:40}),Object(w.jsx)(U.a,{variant:"h6",style:{padding:"2px"},children:_.city.name})]}),Object(w.jsxs)(h.a,{style:{overflowY:"auto",maxHeight:"65vh",marginTop:"15px"},children:[Object(w.jsx)(U.a,{id:"modal-modal-title",component:"span",variant:"h6",children:"Tomorrow temperature forecast"}),Object(w.jsx)(h.a,{children:Object(w.jsx)(xe,{data:G})}),Object(w.jsx)(U.a,{id:"modal-modal-title",component:"span",variant:"h6",children:"Detailed weather data"}),Object(w.jsxs)(U.a,{id:"modal-modal-description",component:"span",sx:{mt:2},children:[Object(w.jsx)(H,{cellName:"Temperature",cellValue:D,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Feels like",cellValue:L,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Temperature min",cellValue:N,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Temperature max",cellValue:k,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Atmospheric pressure",cellValue:null===(c=_.weather)||void 0===c?void 0:c.main.pressure,unit:"hPa"}),Object(w.jsx)(H,{cellName:"Atmospheric pressure on the sea level",cellValue:null===(i=_.weather)||void 0===i?void 0:i.main.sea_level,unit:"hPa"}),Object(w.jsx)(H,{cellName:"Atmospheric pressure on the ground level",cellValue:null===(l=_.weather)||void 0===l?void 0:l.main.grnd_level,unit:"hPa"}),Object(w.jsx)(H,{cellName:"Humidity",cellValue:null===(s=_.weather)||void 0===s?void 0:s.main.humidity,unit:"%"}),Object(w.jsx)(H,{cellName:"Visibility",cellValue:null===(d=_.weather)||void 0===d?void 0:d.visibility,unit:"m"}),Object(w.jsx)(H,{cellName:"Cloudiness",cellValue:null===(u=_.weather)||void 0===u||null===(j=u.clouds)||void 0===j?void 0:j.all,unit:"%"}),Object(w.jsx)(H,{cellName:"Wind speed",cellValue:null===(p=_.weather)||void 0===p||null===(m=p.wind)||void 0===m?void 0:m.speed,unit:ve.windSpeed}),Object(w.jsx)(H,{cellName:"Wind direction",cellValue:null===(b=_.weather)||void 0===b||null===(O=b.wind)||void 0===O?void 0:O.speed,unit:"degrees"}),Object(w.jsx)(H,{cellName:"Wind gust",cellValue:null===(y=_.weather)||void 0===y||null===(f=y.wind)||void 0===f?void 0:f.speed,unit:ve.windGust}),Object(w.jsx)(H,{cellName:"Rain volume for the last 1 hour",cellValue:null===(x=_.weather)||void 0===x||null===(v=x.rain)||void 0===v?void 0:v["1h"],unit:"mm"}),Object(w.jsx)(H,{cellName:"Rain volume for the last 3 hours",cellValue:null===(E=_.weather)||void 0===E||null===(S=E.rain)||void 0===S?void 0:S["3h"],unit:"mm"}),Object(w.jsx)(H,{cellName:"Snow volume for the last 1 hour",cellValue:null===(R=_.weather)||void 0===R||null===(A=R.snow)||void 0===A?void 0:A["3h"],unit:"mm"}),Object(w.jsx)(H,{cellName:"Snow volume for the last 3 hours",cellValue:null===(g=_.weather)||void 0===g||null===(T=g.snow)||void 0===T?void 0:T["3h"],unit:"mm"})]})]})]})},we=l.b,Se=n(257),Re=n(128),Ce=n.n(Re),Ae=sessionStorage,ge="The card not found",Te=function(e){Ae.getItem(e.id)||Ae.setItem(e.id,JSON.stringify({id:e.id,city:Object(f.a)({},e.city),createdAt:e.createdAt,updatedAt:e.updatedAt}))},Ue=function(e){return!!Ae.getItem(e)},_e=function(e){if(!Ue(e))throw new Error(ge);Ae.removeItem(e)},De=function(){if(Le())throw new Error("The storage is empty");return Object.entries(Ae).reduce((function(e,t){var n,a=Object(b.a)(t,2),r=a[0],o=a[1];return n=r,Ce()(n,4)&&e.push(JSON.parse(o)),e}),[])},Le=function(){return 0===Ae.length},Ne=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g.find((function(e){return e.id===t}))){e.next=4;break}throw new Error("The city not Found");case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(m.a)(Object(p.a)().mark((function e(t){var n,a,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Se.a)(),e.next=3,Ne(t);case 3:return a=e.sent,r=de(),e.abrupt("return",{id:n,city:a,createdAt:r,updatedAt:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(e,t){return!!e.find((function(e){return e.city.id===t}))};!function(e){e.LOADING_SET="LOADING/SET",e.COLLAPSE_ERROR="ERROR/COLLAPSE",e.COLLAPSE_NOTIFICATION="NOTIFICATION/COLLAPSE",e.CARDS_GET_REQUEST="CARDS/GET/REQUEST",e.CARDS_GET_SUCCESS="CARDS/GET/SUCCESS",e.CARDS_GET_ERROR="CARDS/GET/ERROR",e.CARD_ADD_REQUEST="CARD/ADD/REQUEST",e.CARD_ADD_SUCCESS="CARD/ADD/SUCCESS",e.CARD_ADD_ERROR="CARD/ADD/ERROR",e.CARD_DELETE_REQUEST="CARD/DELETE/REQUEST",e.CARD_DELETE_SUCCESS="CARD/DELETE/SUCCESS",e.CARD_DELETE_ERROR="CARD/DELETE/ERROR",e.WEATHER_GET_REQUEST="WEATHER/GET/REQUEST",e.WEATHER_GET_SUCCESS="WEATHER/GET/SUCCESS",e.WEATHER_GET_ERROR="WEATHER/GET/ERROR",e.WEATHER_FORECAST_GET_REQUEST="WEATHER/FORECAST/GET/REQUEST",e.WEATHER_FORECAST_GET_SUCCESS="WEATHER/FORECAST/GET/SUCCESS",e.WEATHER_FORECAST_GET_ERROR="WEATHER/FORECAST/GET/ERROR"}(ue||(ue={}));var Ie,Me=ue,Fe=function(e){return{type:Me.CARD_ADD_REQUEST,payload:{cityId:e}}},He=function(e,t){return{type:Me.CARD_ADD_SUCCESS,payload:{card:e,notification:t}}},Pe=function(e){return{type:Me.CARD_ADD_ERROR,payload:{errorMessage:e}}},We=function(e){return{type:Me.CARD_DELETE_REQUEST,payload:{cardId:e}}},Ve=function(e,t){return{type:Me.CARD_DELETE_SUCCESS,payload:{cardId:e,notification:t}}},Be=function(e){return{type:Me.WEATHER_GET_REQUEST,payload:{cityId:e}}},Qe=function(e,t,n){return{type:Me.WEATHER_GET_SUCCESS,payload:{weather:e,cityId:t,notification:n}}},ze=function(e){return{type:Me.WEATHER_FORECAST_GET_REQUEST,payload:{cityId:e}}},qe=function(e,t){return{type:Me.WEATHER_FORECAST_GET_SUCCESS,payload:{cityId:t,forecast:e}}},Ke=function(e,t){return function(){var n=Object(m.a)(Object(p.a)().mark((function n(a){var r,o;return Object(p.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!Ge(e,t)){n.next=3;break}throw new Error("A card with this city has been already created");case 3:return a(Fe(t)),n.next=6,ke(t);case 6:return r=n.sent,n.next=9,ae(t);case 9:r.weather=n.sent,Te(r),a(He(r," A new card was added")),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),o=n.t0,a(Pe(o.message));case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},Je=function(e){return function(){var t=Object(m.a)(Object(p.a)().mark((function t(n){return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n(We(e)),_e(e),n(Ve(e,"The card was deleted"))}catch(r){n((a=r.message,{type:Me.CARD_DELETE_ERROR,payload:{errorMessage:a}}))}case 1:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},Ye=function(){return function(e){e({type:Me.COLLAPSE_ERROR,payload:{}})}},Xe=function(){return function(e){e({type:Me.COLLAPSE_NOTIFICATION,payload:{}})}},Ze=function(e){return function(){var t=Object(m.a)(Object(p.a)().mark((function t(n){var a,r;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Be(e)),t.next=4,ae(e);case 4:a=t.sent,n(Qe(a,e,"Weather was updated")),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0,n(Pe(r.message));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},$e=function(e){return function(){var t=Object(m.a)(Object(p.a)().mark((function t(n){var a,r;return Object(p.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(ze(e)),t.next=4,re(e);case 4:a=t.sent,n(qe(a,e)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0,n((o=r.message,{type:Me.WEATHER_FORECAST_GET_ERROR,payload:{errorMessage:o}}));case 12:case"end":return t.stop()}var o}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},et=function(e){var t,n,a,o,c,i,l,s,d=e.card,u=Object(r.useState)(!1),j=Object(b.a)(u,2),O=j[0],y=j[1],f=we(),x=function(){var e=Object(m.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete card of ".concat(d.city.name," city from your collection?"))){e.next=4;break}return e.next=4,f(Je(d.id));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(Ze(d.city.id));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,f($e(d.city.id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=d.weather?oe(null===(t=d.weather)||void 0===t?void 0:t.main.temp):void 0,A=d.weather?oe(null===(n=d.weather)||void 0===n?void 0:n.main.feels_like):void 0,g=d.weather?oe(null===(a=d.weather)||void 0===a?void 0:a.main.temp_min):void 0,T=d.weather?oe(null===(o=d.weather)||void 0===o?void 0:o.main.temp_max):void 0;return Object(w.jsx)(h.a,{sx:{maxWidth:500,width:300,margin:"10px",padding:"10px"},children:Object(w.jsx)(D.a,{variant:"outlined",children:Object(w.jsxs)(L.a,{style:{paddingBottom:"5px"},children:[Object(w.jsxs)(h.a,{style:{display:"flex",justifyContent:"right"},children:[Object(w.jsx)(E.a,{title:"Delete card",describeChild:!0,followCursor:!0,children:Object(w.jsx)(N.a,{"aria-label":"delete",size:"small",onClick:x,children:Object(w.jsx)(G.a,{})})}),Object(w.jsx)(E.a,{title:"Update weather. Last updated ".concat((s=d.updatedAt,ie()(s).fromNow())),describeChild:!0,followCursor:!0,children:Object(w.jsx)(N.a,{"aria-label":"update",size:"small",onClick:v,children:Object(w.jsx)(M.a,{})})})]}),Object(w.jsxs)(h.a,{onClick:S,style:{cursor:"pointer"},children:[Object(w.jsxs)(h.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:[Object(w.jsx)(C,{iconCode:d.city.country,countryName:d.city.country,width:40}),Object(w.jsx)(U.a,{variant:"h6",style:{padding:"2px"},children:d.city.name})]}),Object(w.jsx)(h.a,{style:{paddingInlineEnd:5},children:Object(w.jsxs)(h.a,{style:{display:"flex",flexDirection:"row",alignItems:"end",textAlign:"right",width:"100%"},children:[Object(w.jsx)(W,{weatherIcon:null===(c=d.weather)||void 0===c?void 0:c.weather[0].icon,weatherName:null===(i=d.weather)||void 0===i?void 0:i.weather[0].main}),Object(w.jsxs)(h.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(w.jsx)(U.a,{sx:{mb:1.5},color:"text.secondary",children:null===(l=d.weather)||void 0===l?void 0:l.weather[0].description}),Object(w.jsxs)(U.a,{sx:{mb:1.5},variant:"h4",children:[Object(w.jsx)(U.a,{component:"span",sx:{mb:1.5},variant:"h4",children:R}),Object(w.jsx)(F,{})]})]})]})}),Object(w.jsx)(H,{cellName:"Feels like",cellValue:A,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Temperature min",cellValue:g,specialSymbol:Object(w.jsx)(F,{})}),Object(w.jsx)(H,{cellName:"Temperature max",cellValue:T,specialSymbol:Object(w.jsx)(F,{})})]}),Object(w.jsx)(q,{open:O,handleClose:function(){return y(!1)},children:Object(w.jsx)(Ee,{card:d})})]})})})},tt=function(e){var t=e.cards;return Object(w.jsx)(h.a,{sx:{padding:4},style:{display:"flex",minHeight:"min-content"},children:0===t.length?Object(w.jsx)(h.a,{style:{width:"100%"},minHeight:"80vh",children:Object(w.jsx)(U.a,{component:"div",style:{textAlign:"center"},children:"No cards yet. Add new city to own collection!"})}):Object(w.jsx)(_.a,{container:!0,spacing:1,minHeight:"80vh",style:{overflowY:"auto",flex:"1 1 auto",height:"80vh"},children:t.map((function(e){return Object(w.jsx)(et,{card:e},e.id)}))})})},nt=l.c,at={cards:Le()?[]:De(),errorMessage:null,notificationMessage:null},rt=n(265),ot=n(256),ct=n(266);!function(e){e.Error="error",e.Success="success",e.Info="info",e.Warning="warning"}(Ie||(Ie={}));var it=function(e){var t=e.type,n=e.message,a=e.isShown,r=e.onCollapse;return Object(w.jsx)(h.a,{sx:{width:"100%",display:"flex",justifyContent:"right"},children:Object(w.jsx)(rt.a,{in:a,children:Object(w.jsxs)(ot.a,{severity:t,action:Object(w.jsx)(N.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){r()},children:Object(w.jsx)(Q.a,{fontSize:"inherit"})}),children:[Object(w.jsx)(ct.a,{children:t.toUpperCase()}),n]})})})},lt=function(){var e=nt((function(e){var t;return null!==(t=e.weatherSearcherReducer)&&void 0!==t?t:at}));Object(r.useEffect)((function(){0!==e.cards.length&&e.cards.forEach(function(){var e=Object(m.a)(Object(p.a)().mark((function e(n){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Ze(n.city.id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=we(),n=function(){var n=Object(m.a)(Object(p.a)().mark((function n(a){return Object(p.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(Ke(e.cards,a));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,{addCard:n}),Object(w.jsx)(tt,{cards:e.cards}),Object(w.jsxs)(h.a,{sx:{marginBlockEnd:1,padding:1,position:"absolute",right:"10px",bottom:"10px"},children:[Object(w.jsx)(it,{isShown:!!e.errorMessage,onCollapse:function(){t(Ye())},type:Ie.Error,message:e.errorMessage}),Object(w.jsx)(it,{isShown:!!e.notificationMessage,onCollapse:function(){t(Xe())},type:Ie.Success,message:e.notificationMessage})]})]})};n(181);var st=function(){return Object(w.jsx)(s.a,{children:Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{path:j.HOME,element:Object(w.jsx)(lt,{})}),Object(w.jsx)(d.a,{path:j.WEATHER_PAGE,element:Object(w.jsx)(lt,{})})]})})},dt=n(132),ut=n(36),jt=n(17),pt=function(){var e,t,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case Me.CARD_ADD_SUCCESS:return Object(f.a)(Object(f.a)({},a),{},{errorMessage:null,cards:[].concat(Object(jt.a)(a.cards),[r.payload.card]),notificationMessage:r.payload.notification});case Me.CARD_DELETE_SUCCESS:return Object(f.a)(Object(f.a)({},a),{},{errorMessage:null,notificationMessage:r.payload.notification,cards:null===(e=a.cards)||void 0===e?void 0:e.filter((function(e){return e.id!==r.payload.cardId}))});case Me.WEATHER_GET_SUCCESS:return Object(f.a)(Object(f.a)({},a),{},{notificationMessage:r.payload.notification,cards:null===(t=a.cards)||void 0===t?void 0:t.map((function(e){return e.city.id===r.payload.cityId?Object(f.a)(Object(f.a)({},e),{},{weather:r.payload.weather,updatedAt:de()}):e}))});case Me.WEATHER_FORECAST_GET_SUCCESS:return Object(f.a)(Object(f.a)({},a),{},{cards:null===(n=a.cards)||void 0===n?void 0:n.map((function(e){return e.city.id===r.payload.cityId?Object(f.a)(Object(f.a)({},e),{},{forecast:r.payload.forecast}):e}))});case Me.CARD_ADD_ERROR:case Me.CARD_DELETE_ERROR:case Me.WEATHER_FORECAST_GET_ERROR:return Object(f.a)(Object(f.a)({},a),{},{errorMessage:r.payload.errorMessage,notificationMessage:null});case Me.COLLAPSE_ERROR:return Object(f.a)(Object(f.a)({},a),{},{errorMessage:null});case Me.COLLAPSE_NOTIFICATION:return Object(f.a)(Object(f.a)({},a),{},{notificationMessage:null});default:return a}},mt=Object(ut.b)({weatherSearcherReducer:pt}),ht=Object(dt.a)({reducer:mt});n(182);i.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(l.a,{store:ht,children:Object(w.jsx)(st,{})})}))},91:function(e){e.exports=JSON.parse('[{"id":261772,"name":"\xcdos","state":"","country":"GR","coord":{"lon":25.283331,"lat":36.73333}},{"id":616743,"name":"Druzhkivka","state":"","country":"UA","coord":{"lon":37.552589,"lat":48.630131}},{"id":709930,"name":"Dnipro","state":"","country":"UA","coord":{"lon":34.98333,"lat":48.450001}},{"id":709932,"name":"Kamianske","state":"","country":"UA","coord":{"lon":34.6021,"lat":48.511341}},{"id":709940,"name":"Dnipryany","state":"","country":"UA","coord":{"lon":33.272881,"lat":46.746311}},{"id":709954,"name":"Dniprovka","state":"","country":"UA","coord":{"lon":34.61805,"lat":47.429451}},{"id":709983,"name":"Dmytrivka","state":"","country":"UA","coord":{"lon":32.71645,"lat":48.796902}},{"id":710007,"name":"Dmytrivka","state":"","country":"UA","coord":{"lon":38.936611,"lat":47.936111}},{"id":710033,"name":"Dmytrivka","state":"","country":"UA","coord":{"lon":28.986389,"lat":45.971668}},{"id":710129,"name":"Derazhnya","state":"","country":"UA","coord":{"lon":27.433821,"lat":49.269199}},{"id":710141,"name":"Denisovka","state":"","country":"UA","coord":{"lon":34.22234,"lat":44.92186}},{"id":710189,"name":"Demidovka","state":"","country":"UA","coord":{"lon":30.25,"lat":47.766666}},{"id":1006984,"name":"East London","state":"","country":"ZA","coord":{"lon":27.911619,"lat":-33.015289}},{"id":2643734,"name":"Londonderry County Borough","state":"","country":"GB","coord":{"lon":-7.30917,"lat":54.997211}},{"id":2643736,"name":"Derry","state":"","country":"GB","coord":{"lon":-7.30934,"lat":54.9981}},{"id":2643737,"name":"City of Derry","state":"","country":"GB","coord":{"lon":-7.25,"lat":55}},{"id":2643741,"name":"City of London","state":"","country":"GB","coord":{"lon":-0.09184,"lat":51.512791}},{"id":2643743,"name":"London","state":"","country":"GB","coord":{"lon":-0.12574,"lat":51.50853}},{"id":2643745,"name":"Londesborough","state":"","country":"GB","coord":{"lon":-0.68333,"lat":53.883331}},{"id":2643773,"name":"Loftus","state":"","country":"GB","coord":{"lon":-0.89459,"lat":54.555431}},{"id":2643776,"name":"Lofthouse","state":"","country":"GB","coord":{"lon":-1.49697,"lat":53.729469}},{"id":2648110,"name":"Greater London","state":"","country":"GB","coord":{"lon":-0.16667,"lat":51.5}},{"id":2648113,"name":"Great Eccleston","state":"","country":"GB","coord":{"lon":-2.87026,"lat":53.853149}},{"id":3489741,"name":"Little London","state":"","country":"JM","coord":{"lon":-78.216408,"lat":18.248301}},{"id":4030939,"name":"London Village","state":"","country":"KI","coord":{"lon":-157.475021,"lat":1.98487}},{"id":4119617,"name":"London","state":"AR","country":"US","coord":{"lon":-93.25296,"lat":35.328972}},{"id":4298960,"name":"London","state":"KY","country":"US","coord":{"lon":-84.08326,"lat":37.128979}},{"id":4299275,"name":"Louisa","state":"KY","country":"US","coord":{"lon":-82.60321,"lat":38.11425}},{"id":4299276,"name":"Louisville","state":"KY","country":"US","coord":{"lon":-85.759407,"lat":38.254238}},{"id":4361094,"name":"Londontowne","state":"MD","country":"US","coord":{"lon":-76.549408,"lat":38.933449}},{"id":4400423,"name":"New London","state":"MO","country":"US","coord":{"lon":-91.400978,"lat":39.58532}},{"id":4400427,"name":"New Madrid","state":"MO","country":"US","coord":{"lon":-89.527847,"lat":36.586449}},{"id":4400648,"name":"Nixa","state":"MO","country":"US","coord":{"lon":-93.29435,"lat":37.043388}},{"id":4400673,"name":"Noel","state":"MO","country":"US","coord":{"lon":-94.485222,"lat":36.545631}},{"id":4517009,"name":"London","state":"OH","country":"US","coord":{"lon":-83.44825,"lat":39.886452}},{"id":4517140,"name":"Loveland","state":"OH","country":"US","coord":{"lon":-84.263832,"lat":39.268951}},{"id":4868768,"name":"New London","state":"IA","country":"US","coord":{"lon":-91.399597,"lat":40.926979}},{"id":5056033,"name":"London","state":"MO","country":"US","coord":{"lon":-95.234978,"lat":40.445}},{"id":703446,"name":"Kyiv Oblast","state":"","country":"UA","coord":{"lon":30.5,"lat":50.25}},{"id":703448,"name":"Kyiv","state":"","country":"UA","coord":{"lon":30.516666,"lat":50.433334}},{"id":699761,"name":"Nove-Misto","state":"","country":"UA","coord":{"lon":29.828131,"lat":48.981129}},{"id":699777,"name":"Nova Vodolaha","state":"","country":"UA","coord":{"lon":35.870781,"lat":49.718498}},{"id":699802,"name":"Nova Praha","state":"","country":"UA","coord":{"lon":32.902729,"lat":48.568211}},{"id":699811,"name":"Nova Odesa","state":"","country":"UA","coord":{"lon":31.785061,"lat":47.307781}},{"id":698740,"name":"Odessa","state":"","country":"UA","coord":{"lon":30.732622,"lat":46.477474}},{"id":3456138,"name":"Nova Odessa","state":"","country":"BR","coord":{"lon":-47.29583,"lat":-22.7775}},{"id":4166787,"name":"Odessa","state":"FL","country":"US","coord":{"lon":-82.591759,"lat":28.193899}},{"id":4401659,"name":"Odessa","state":"MO","country":"US","coord":{"lon":-93.95356,"lat":38.999168}},{"id":4998583,"name":"Lake Odessa","state":"MI","country":"US","coord":{"lon":-85.138344,"lat":42.78476}},{"id":5527554,"name":"Odessa","state":"TX","country":"US","coord":{"lon":-102.367638,"lat":31.84568}},{"id":5533366,"name":"West Odessa","state":"TX","country":"US","coord":{"lon":-102.498756,"lat":31.84235}},{"id":2968815,"name":"Paris","state":"","country":"FR","coord":{"lon":2.3486,"lat":48.853401}},{"id":2994540,"name":"Paris 20 M\xe9nilmontant","state":"","country":"FR","coord":{"lon":2.3984,"lat":48.864601}},{"id":2999139,"name":"Le Touquet-Paris-Plage","state":"","country":"FR","coord":{"lon":1.58571,"lat":50.524319}},{"id":3490145,"name":"Parish of Hanover","state":"","country":"JM","coord":{"lon":-78.133331,"lat":18.41667}},{"id":4125402,"name":"Paris","state":"AR","country":"US","coord":{"lon":-93.729919,"lat":35.29203}},{"id":4246659,"name":"Paris","state":"IL","country":"US","coord":{"lon":-87.696136,"lat":39.611149}},{"id":4303602,"name":"Paris","state":"KY","country":"US","coord":{"lon":-84.252991,"lat":38.209801}},{"id":4402452,"name":"Paris","state":"MO","country":"US","coord":{"lon":-92.001282,"lat":39.480869}},{"id":4519642,"name":"New Paris","state":"OH","country":"US","coord":{"lon":-84.793289,"lat":39.856991}},{"id":4647963,"name":"Paris","state":"TN","country":"US","coord":{"lon":-88.326714,"lat":36.301998}},{"id":4717560,"name":"Paris","state":"TX","country":"US","coord":{"lon":-95.555511,"lat":33.660938}},{"id":4924135,"name":"New Paris","state":"IN","country":"US","coord":{"lon":-85.828049,"lat":41.500332}},{"id":4974617,"name":"Paris","state":"ME","country":"US","coord":{"lon":-70.500618,"lat":44.259789}},{"id":4979220,"name":"South Paris","state":"ME","country":"US","coord":{"lon":-70.51339,"lat":44.223679}},{"id":4982671,"name":"West Paris","state":"ME","country":"US","coord":{"lon":-70.573952,"lat":44.32423}},{"id":6618607,"name":"Paris 01","state":"","country":"FR","coord":{"lon":2.3417,"lat":48.8592}},{"id":6618620,"name":"Paris 14","state":"","country":"FR","coord":{"lon":2.3264,"lat":48.833099}},{"id":6618626,"name":"Paris 20","state":"","country":"FR","coord":{"lon":2.3984,"lat":48.864601}},{"id":702550,"name":"Lviv","state":"","country":"UA","coord":{"lon":24.023239,"lat":49.838261}},{"id":706483,"name":"Kharkiv","state":"","country":"UA","coord":{"lon":36.25,"lat":50}},{"id":689558,"name":"Vinnytsia","state":"","country":"UA","coord":{"lon":28.48097,"lat":49.23278}},{"id":702569,"name":"Lutsk","state":"","country":"UA","coord":{"lon":25.34244,"lat":50.759319}},{"id":692194,"name":"Sumy","state":"","country":"UA","coord":{"lon":34.800289,"lat":50.9216}},{"id":706448,"name":"Kherson","state":"","country":"UA","coord":{"lon":32.617802,"lat":46.655811}},{"id":687700,"name":"Zaporizhia","state":"","country":"UA","coord":{"lon":35.183331,"lat":47.816669}},{"id":4925561,"name":"Rome City","state":"IN","country":"US","coord":{"lon":-85.376648,"lat":41.496159}}]')}},[[183,1,2]]]);
//# sourceMappingURL=main.f2110a80.chunk.js.map