(this["webpackJsonpconsume-weather-and-shazam"]=this["webpackJsonpconsume-weather-and-shazam"]||[]).push([[0],{128:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),n=c(38),r=c.n(n),s=c(155),o=c(56),l=c(3),d=c(153),u=c(142),j=c(157),b=c(143),h=c(144),p=c(145),m=c(42),O=c.n(m),x=c.p+"static/media/block.64d85bbf.png",f=c(4),g=Object(a.createContext)({loading:!1,weather:{}}),v=function(e){var t=e.children,c=Object(d.a)(),i=Object(a.useState)(),n=Object(l.a)(i,2),r=n[0],s=n[1],o=Object(a.useState)(!1),m=Object(l.a)(o,2),v=m[0],y=m[1],S=Object(a.useState)(!1),w=Object(l.a)(S,2),z=w[0],C=w[1],E=function(e,t){return c({title:e,description:t,status:"error",duration:5e3,isClosable:!0,variant:"top-accent",position:"top-right"})},W=function(e){var t,c;y(!0),(t=e.coords.latitude,c=e.coords.longitude,O.a.get("http://api.openweathermap.org/data/2.5/weather",{params:{lat:t,lon:c,appid:"8738e03effc040bc075baa2cea0debdb",lang:"pt",units:"metric"}})).then((function(e){return s(e.data)})).catch((function(e){return E("Error getting Weather",e.message)})).finally((function(){return y(!1)})),C(!0)};if(Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition(W,(function(){return E("Error getting location","Voc\xea precisa habilitar sua localiza\xe7\xe3o")}))}),[]),!z)return Object(f.jsxs)(u.a,{my:8,flexDirection:"column",children:[Object(f.jsx)(j.a,{src:x,height:"100px"}),Object(f.jsx)(b.a,{fontSize:"2xl",mt:4,children:"Voc\xea precisa habilitar sua localiza\xe7\xe3o"}),Object(f.jsxs)(h.a,{children:["Em seguida"," ",Object(f.jsx)(p.a,{href:"/",colorScheme:"blue",color:"blue.600",fontWeight:"semibold",textDecoration:"underline",children:"atualize a pagina"})]})]});var B={loading:v,weather:r,submitSearchByCity:function(e){e&&(y(!0),function(e){return O.a.get("http://api.openweathermap.org/data/2.5/weather",{params:{q:e,appid:"8738e03effc040bc075baa2cea0debdb",lang:"pt",units:"metric"}})}(e).then((function(e){s(e.data)})).catch((function(e){return E("Error getting Weather",e.message)})).finally((function(){return y(!1)})))}};return Object(f.jsx)(g.Provider,{value:B,children:t})},y=c(148),S=c(85),w=c(159),z=c(45),C=c(151),E=c(160),W=c(156),B=c(88),T=function(){return Object(a.useContext)(g)},M=c(158);var R=function(){return Object(f.jsx)(u.a,{my:8,width:"full",children:Object(f.jsx)(M.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})},k=function(e){var t=e.local,c=e.description,a=e.temperature;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(w.a,{spacing:4,children:[Object(f.jsx)(h.a,{fontSize:"xl",children:"Clima na localiza\xe7\xe3o:"}),Object(f.jsxs)(b.a,{fontSize:"2xl",children:[t,"(",c,")"]})]}),Object(f.jsxs)(w.a,{spacing:4,children:[Object(f.jsx)(h.a,{fontSize:"lg",children:"Temperatura atual:"}),Object(f.jsxs)(b.a,{fontSize:"lg",children:[a,"\xb0"]})]})]})},P=function(){var e=Object(B.a)(),t=e.register,c=e.handleSubmit,i=e.setValue,n=T(),r=n.loading,s=n.weather,o=n.submitSearchByCity;return Object(a.useEffect)((function(){(null===s||void 0===s?void 0:s.name)&&i("city",null===s||void 0===s?void 0:s.name)}),[s]),Object(f.jsx)(u.a,{my:8,children:Object(f.jsxs)(y.a,{width:"full",px:8,children:[!!r&&Object(f.jsx)(R,{}),!r&&!!s&&Object(f.jsx)(k,{temperature:s.main.temp,local:s.name,description:s.weather[0].description}),Object(f.jsx)(y.a,{mt:8,children:Object(f.jsx)("form",{onSubmit:c((function(e){return o(e.city)})),children:Object(f.jsxs)(w.a,{spacing:4,alignItems:"end",children:[Object(f.jsxs)(z.a,{id:"city",isRequired:!0,children:[Object(f.jsx)(C.a,{htmlFor:"city",children:"Buscar por cidade:"}),Object(f.jsx)(E.a,Object(S.a)({id:"city",type:"text",placeholder:"Digite o nome de uma cidade"},t("city",{required:!0})))]}),Object(f.jsx)(W.a,{type:"submit",colorScheme:"blue",isLoading:r,children:"Buscar"})]})})})]})})},q=c(154),D=c(161),I=c(152),V=Object(a.createContext)({loading:!1,playlist:[]}),A=function(e){var t=e.children,c=Object(d.a)(),i=Object(a.useState)([]),n=Object(l.a)(i,2),r=n[0],s=n[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1],h={loading:j,playlist:r,getMusicByTemperature:function(e){if(e){b(!0);var t,a={method:"GET",url:"https://shazam-core.p.rapidapi.com/v1/charts/genre-world",params:{genre_code:(t=e,t<16?"ALTERNATIVE":t<24&&t>16?"COUNTRY":t<32&&t>24?"POP":"ROCK"),limit:"10"},headers:{"x-rapidapi-host":"shazam-core.p.rapidapi.com","x-rapidapi-key":"23c098e44cmsh1744e6261cb7efep1c74a3jsn5bb6a8169eb2"}};O.a.request(a).then((function(e){s(e.data)})).catch((function(e){var t,a;t="Error getting Musics",a=e.message,c({title:t,description:a,status:"error",duration:5e3,isClosable:!0,variant:"top-accent",position:"top-right"})})).finally((function(){return b(!1)}))}}};return Object(f.jsx)(V.Provider,{value:h,children:t})},F=function(){return Object(a.useContext)(V)};var _=function(){var e=F(),t=e.playlist,c=e.loading,i=e.getMusicByTemperature,n=T().weather;return Object(a.useEffect)((function(){var e,t;(null===n||void 0===n||null===(e=n.main)||void 0===e?void 0:e.temp)&&i(null===n||void 0===n||null===(t=n.main)||void 0===t?void 0:t.temp)}),[n]),Object(f.jsxs)(q.e,{isFitted:!0,variant:"enclosed",children:[Object(f.jsxs)(q.b,{mb:"1em",children:[Object(f.jsx)(q.a,{_focus:{outline:"none"},fontWeight:"semibold",children:"Musicas Recomendadas"}),Object(f.jsx)(q.a,{_focus:{outline:"none"},fontWeight:"semibold",children:"Musicas Salvas"})]}),Object(f.jsxs)(q.d,{children:[Object(f.jsx)(q.c,{children:Object(f.jsxs)(D.a,{columns:3,spacing:10,children:[!!c&&Object(f.jsx)(R,{}),!c&&t.map((function(e){return Object(f.jsxs)(u.a,{p:2,maxWidth:"sm",flexDirection:"column",borderColor:"gray.100",borderWidth:"1px",borderRadius:"md",children:[Object(f.jsx)(j.a,{src:e.images.coverart,height:"250px"}),Object(f.jsx)(I.a,{children:Object(f.jsxs)(w.b,{mt:4,maxWidth:"250px",width:"250px",alignItems:"baseline",as:p.a,href:e.url,children:[Object(f.jsx)(b.a,{as:"h4",fontSize:"lg",children:e.title}),Object(f.jsxs)(h.a,{children:["Autor:"," ",e.subtitle]})]})})]},e.id)}))]})}),Object(f.jsx)(q.c,{children:Object(f.jsx)("p",{children:"two!"})})]})]})},J=function(){return Object(f.jsxs)(y.a,{children:[Object(f.jsx)(P,{}),Object(f.jsx)(_,{})]})};var L=function(){return Object(f.jsx)(s.a,{resetCSS:!0,theme:o.theme,children:Object(f.jsx)(v,{children:Object(f.jsx)(A,{children:Object(f.jsx)(J,{})})})})};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.37fbedd1.chunk.js.map