(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),l=(a(31),a(4)),c=a(6),d=a(7),m=function(e){return localStorage.setItem("calendarState",JSON.stringify(e)),e},s=function(e,t){switch(t.type){case"CHANGE_CALENDAR_MODE":return m(function(e,t){return Object(l.a)({},e,{calendarMode:t.payload.calendarMode})}(e,t));case"ADD_TASK":return m(function(e,t){var a=t.payload.task,n=a.title,i=a.time,r=a.day;return Object(l.a)({},e,{tasks:[].concat(Object(d.a)(e.tasks),[{title:n,time:i,day:r}]),selectedTimestamp:0})}(e,t));case"SET_SELECTED_DAY":return m(function(e,t){return Object(l.a)({},e,{selectedDayMini:t.payload.timestamp})}(e,t));case"TOGGLE_MODAL":return m(function(e,t){return Object(l.a)({},e,{selectedTimestamp:t.payload.timestamp,showModal:t.payload.showModal,currentDayIndex:t.payload.currentDayIndex})}(e,t));case"NEXT_MONTH":return m(function(e,t){var a,n=t.payload&&t.payload.mini?"currentDateMin":"currentDate";if(11===new Date(e[n]).getMonth()){var i=new Date(e[n]).getFullYear()+1;a=Object(l.a)({},e,Object(c.a)({},n,new Date(i,0).getTime()))}else a=Object(l.a)({},e,Object(c.a)({},n,new Date(new Date(e[n]).getFullYear(),new Date(e[n]).getMonth()+1).getTime()));return a}(e,t));case"PREV_MONTH":return m(function(e,t){var a=t.payload&&t.payload.mini?"currentDateMin":"currentDate";return 0===new Date(e[a]).getMonth()?Object(l.a)({},e,Object(c.a)({},a,new Date(new Date(e[a]).getFullYear()-1,11).getTime())):Object(l.a)({},e,Object(c.a)({},a,new Date(new Date(e[a]).getFullYear(),new Date(e[a]).getMonth()-1).getTime()))}(e,t));case"PREV_YEAR":return m(function(e,t){return Object(l.a)({},e,{currentDate:new Date(new Date(e.currentDate).getFullYear()-1,new Date(e.currentDate).getMonth()).getTime()})}(e));case"NEXT_YEAR":return m(function(e,t){return Object(l.a)({},e,{currentDate:new Date(new Date(e.currentDate).getFullYear()+1,new Date(e.currentDate).getMonth()).getTime()})}(e));default:return e}},u={currentDate:(new Date).getTime(),selectedTimestamp:0,currentDateMin:(new Date).getTime(),currentDayIdMin:0,selectedDayMini:(new Date).getTime(),calendarMode:"",tasks:[],showModal:!1,currentDayIndex:0},p=localStorage.getItem("calendarState"),f=Object(l.a)({},p?JSON.parse(p):u),g=i.a.createContext(null),h=function(){var e=i.a.useContext(g);if(!e)throw new Error("useCalendar must be used within a CalendarProvider");return e},y=function(e){var t=e.children,a=i.a.useReducer(s,f);return i.a.createElement(g.Provider,{value:a},t)},b=a(2),w=a(24),x=a(1),E=x.a.button.withConfig({displayName:"Button__Btn",componentId:"sc-4cbwxq-0"})(["width:","px;height:","px;border-radius:",";margin:0.25em;background-color:"," !important;"],function(e){return e.size},function(e){return e.size},function(e){return e.size?"50%":""},function(e){return e.bg}),v=function(e){var t=e.ariaLabel,a=e.children,n=e.className,r=void 0===n?"is-link":n,o=e.onClick,l=(e.size,e.type),c=void 0===l?"button":l,d=Object(w.a)(e,["ariaLabel","children","className","onClick","size","type"]),m="button"===c?function(e){e.stopPropagation(),o&&o(e)}:void 0;return i.a.createElement(E,Object.assign({bg:e.bg,"aria-label":t,className:"button ".concat(r),onClick:m,type:c},d),a)},D=x.a.label.withConfig({displayName:"Input__InputContainer",componentId:"sc-12ctgbx-0"})(["display:flex;flex-direction:column;"]),_=x.a.small.withConfig({displayName:"Input__InputDescription",componentId:"sc-12ctgbx-1"})(["color:gray;"]),C=function(e){var t=e.label,a=e.placeholder,n=e.type,r=e.required,o=e.value,l=e.setTitle,c=e.handleEnter;return i.a.createElement(D,null,i.a.createElement(_,null,t),i.a.createElement("input",{className:"input",placeholder:a,type:n,"aria-required":r,onClick:function(e){e.target.focus()},value:o,onChange:function(e){var t=e.target;l(t.value)},onKeyDown:c}))},N=function(e,t){if("Enter"===e.key)return t(e)},k=a(8),O=x.a.a.withConfig({displayName:"Select__SelectedOption",componentId:"sc-1ayqu2c-0"})(["border-radius:4px;&:hover{background-color:#fafafa !important;}&:focus{background-color:#fafafa !important;}&:focus-within{background-color:#fafafa !important;}"]),j=x.a.div.withConfig({displayName:"Select__OptionList",componentId:"sc-1ayqu2c-1"})(["background-color:#fafafa !important;"]),I=x.a.a.withConfig({displayName:"Select__OptionItem",componentId:"sc-1ayqu2c-2"})(["&:hover{background-color:#fafafa !important;}"]),M=x.a.div.withConfig({displayName:"Select__SelectContainer",componentId:"sc-1ayqu2c-3"})(["@media (max-width:768px){height:40px !important;overflow:hidden;&:hover{height:115px !important;}&:hover div{position:absolute;}&:active{height:115px !important;}&:active div{position:absolute;}}"]),T=function(e){var t=e.defaultValue,a=e.options,r=e.handleChange,o=Object(n.useState)(!1),l=Object(b.a)(o,2),c=l[0],d=l[1],m=Object(n.useState)(t),s=Object(b.a)(m,2),u=s[0],p=s[1],f=function(e){var t=e.target;p(t.innerText)};Object(n.useEffect)(function(){r(u)},[u]);var g=function(){return d(!c)};return i.a.createElement(M,{className:"navbar-item has-dropdown is-hoverable",onClick:function(){return g()},tabIndex:0,onKeyPress:function(e){return N(e,g)}},i.a.createElement(O,{className:"navbar-link"},u),i.a.createElement(j,{className:"navbar-dropdown"},a.map(function(e){return i.a.createElement(I,{className:"navbar-item",key:k(),onClick:f,onKeyPress:function(e){return N(e,f)},tabIndex:0},e)})))},S=a(16),A=a(17),L=x.a.div.withConfig({displayName:"TimePicker__TimePickerContainer",componentId:"xt3s80-0"})(["display:flex;max-width:80px;"]),Y=x.a.div.withConfig({displayName:"TimePicker__TimePickerValue",componentId:"xt3s80-1"})(["padding:0.5em;display:flex;p{margin:0;}"]),P=x.a.div.withConfig({displayName:"TimePicker__ControlsContainer",componentId:"xt3s80-2"})(["display:inline-grid;zoom:0.7;button{margin:0;padding:4px 8px;}"]),z=Object(x.a)(S.a).withConfig({displayName:"TimePicker__PlusIcon",componentId:"xt3s80-3"})(["height:15px;"]),H=Object(x.a)(A.a).withConfig({displayName:"TimePicker__MinusIcon",componentId:"xt3s80-4"})(["height:15px;"]),F=function(e){var t=e.date,a=e.handleChange,r=Object(n.useState)(t),o=Object(b.a)(r,2),l=o[0],c=o[1],d=l.toTimeString().split(":"),m=Object(b.a)(d,2),s=m[0],u=m[1],p=function(e){var t=5*e*6e4;c(new Date(l.getTime()+t))};return Object(n.useEffect)(function(){a&&a(l)},[l,a]),i.a.createElement(L,null,i.a.createElement(Y,null,i.a.createElement("p",null,s,":",u)),i.a.createElement(P,null,i.a.createElement(v,{ariaLabel:"Add 5 minutes",onClick:function(){return p(1)},type:"button"},i.a.createElement(z,null)),i.a.createElement(v,{type:"button",ariaLabel:"substract 5 minutes",onClick:function(){return p(-1)}},i.a.createElement(H,null))))},R=a(8),B=x.a.li.withConfig({displayName:"TaskList__Task",componentId:"sc-1vibhrt-0"})(["list-style-type:none;border-radius:6px;color:white;padding:0.5em;width:100%;"]),G=x.a.ul.withConfig({displayName:"TaskList__Container",componentId:"sc-1vibhrt-1"})(["position:absolute;padding:0.5em;margin:0;top:0;width:100%;display:contents;"]),q=function(e){var t=e.tasks;return i.a.createElement(G,null,t.map(function(e){return i.a.createElement(B,{className:"tag is-link",key:R()},e.title)}))},V=x.a.div.withConfig({displayName:"DayBox__DayBoxContainer",componentId:"sc-1uyohp0-0"})(["padding:0.5em;position:relative;margin:0 !important;width:100%;background-color:#fafafa !important;"," @media (max-width:768px){padding:0.5rem !important;}"],function(e){return!e.mini&&"box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);"}),K=x.a.div.withConfig({displayName:"DayBox__DayContent",componentId:"sc-1uyohp0-1"})(["display:flex;flex-direction:column;align-items:center;"]),J=x.a.p.withConfig({displayName:"DayBox__DateContainer",componentId:"sc-1uyohp0-2"})(["color:",";background-color:",";margin:0 !important;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%;display:flex;flex-direction:column;"],function(e){var t=e.today,a=e.selectedDay;return t?"white":a?"#185abc":"#000"},function(e){var t=e.today,a=e.selectedDay;return t?"#1967d2":a?"#aecbfa":"#fafafa"}),W=function(e){var t=e.day,a=t.timestamp,n=t.disabled,r=e.day,o=e.index,l=e.mini,c=e.weekDay,d=h(),m=Object(b.a)(d,2),s=m[0],u=s.tasks,p=s.selectedDayMini,f=m[1],g=n?{}:{tabIndex:0},y=u.filter(function(e){return e.day.timestamp===a}),w=(new Date).setHours(0,0,0,0),x=function(){n||f(l?{type:"SET_SELECTED_DAY",payload:{timestamp:a}}:{type:"TOGGLE_MODAL",payload:{timestamp:a,showModal:!0,currentDayIndex:o}})};return i.a.createElement(V,Object.assign({mini:l,onClick:x,onKeyPress:function(e){return N(e,x)},"aria-disabled":n},g),i.a.createElement("article",{className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement(K,{className:"content"},!l&&c,i.a.createElement(J,{today:r.timestamp===w,selectedDay:p===r.timestamp,"aria-label":n?"":new Date(a).toDateString(),className:l?"hover-date":""},n?a:new Date(a).getDate()),!l&&i.a.createElement(q,{tasks:y})))))},X=a(8),$=x.a.div.withConfig({displayName:"Month__MonthContainer",componentId:"vscahv-0"})(["display:grid;grid-template-columns:repeat(7,1fr);width:100%;height:100%;@media (max-width:768px){margin:0;}"]),Q=function(e){var t=e.mini,a=h(),n=Object(b.a)(a,1)[0],r=e.currentDate||n.currentDate,o=function(e){var t=e.getFullYear(),a=e.getMonth(),n=new Date(t,a).getMonth(),i=new Date(t,n+1,0).getDate();return Array(i).fill(1).map(function(e,a){return{timestamp:new Date(t,n,a+1).getTime(),disabled:!1}})}(new Date(r)),l=o.slice(0,1),c=Object(b.a)(l,1)[0].timestamp,m=o.slice(-1),s=Object(b.a)(m,1)[0].timestamp,u=Array(new Date(c).getDay()).fill({value:"x",disabled:!0}),p=Array(6-new Date(s).getDay()).fill({value:"x",disabled:!0}),f=[].concat(Object(d.a)(u),Object(d.a)(o),Object(d.a)(p)),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return i.a.createElement($,null,f.map(function(e,a){return i.a.createElement(W,{day:e,key:X(),index:a,mini:t,weekDay:g[a]})}))},U=a(8),Z={display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},ee=function(e){var t=e.mini;return i.a.createElement("div",{style:Z},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(function(e){return i.a.createElement("div",{key:U()},t?e[0]:e)}))},te=a(8),ae=x.a.div.withConfig({displayName:"Year__YearContainer",componentId:"h4rx1g-0"})(["display:grid;grid-template-columns:repeat(4,1fr);zoom:0.8;padding-bottom:5em;padding-left:7em;padding-top:1em;height:100%;"]),ne=x.a.p.withConfig({displayName:"Year__MonthTitle",componentId:"h4rx1g-1"})(["width:100%;padding-left:1.5em;"]),ie=x.a.div.withConfig({displayName:"Year__MonthCalendar",componentId:"h4rx1g-2"})(["width:320px;"]),re=function(){var e=h(),t=Object(b.a)(e,1)[0],a=new Date(t.currentDate).getFullYear(),n=Array(12).fill(1).map(function(e,t){return new Date(a,t)});return i.a.createElement(ae,null,n.map(function(e){return i.a.createElement(ie,{key:te()},i.a.createElement(ne,null,e.toDateString().split(" ")[1]),i.a.createElement(ee,{mini:!0}),i.a.createElement(Q,{currentDate:e.getTime(),mini:!0}))}))},oe=x.a.div.withConfig({displayName:"Calendar__CalendarContainer",componentId:"sc-1kgb4u1-0"})(["display:flex;width:100%;flex-direction:column;height:100%;"]),le=function(){var e=h(),t=Object(b.a)(e,1)[0].calendarMode;return i.a.createElement(oe,null,"Month"===t?i.a.createElement(i.a.Fragment,null,i.a.createElement(Q,{mini:!1}),i.a.createElement(ke,null)):i.a.createElement(re,null))},ce=a(18),de=a(19),me=x.a.div.withConfig({displayName:"MonthSelector__MonthSelectorContainer",componentId:"sc-1rko71-0"})(["display:flex;justify-content:center;align-items:center;button{background-color:transparent !important;}svg{color:#000;}.btn--link{width:60px;height:60px;border-radius:50%;display:flex;justify-content:center;align-items:center;}.btn--link:hover{background-color:rgba(119,136,153,0.2);}"]),se=x.a.div.withConfig({displayName:"MonthSelector__SelectedMonthContainer",componentId:"sc-1rko71-1"})(["min-width:100px;text-align:center;"]),ue=Object(x.a)(ce.a).withConfig({displayName:"MonthSelector__NavigateNextIcon",componentId:"sc-1rko71-2"})(["height:30px;font-weight:bold;"]),pe=Object(x.a)(de.a).withConfig({displayName:"MonthSelector__NavigateBeforeIcon",componentId:"sc-1rko71-3"})(["height:30px;font-weight:bold;"]),fe=Object(x.b)(function(e){var t=e.mini,a=e.onlyYear,n=h(),r=Object(b.a)(n,2),o=r[0],l=r[1],c=t?o.currentDateMin:o.currentDate,d=new Date(c).toDateString().split(" "),m=d[1],s=d[3],u=a?"PREV_YEAR":"PREV_MONTH",p=a?"NEXT_YEAR":"NEXT_MONTH";return i.a.createElement(me,{style:{zoom:t?.7:1}},i.a.createElement(v,{ariaLabel:"Previus month",size:50,onClick:function(){return l&&l({type:u,payload:{mini:t}})}},i.a.createElement(pe,null)),i.a.createElement(v,{size:50,ariaLabel:"Next month",onClick:function(){return l&&l({type:p,payload:{mini:t}})}},i.a.createElement(ue,null)),i.a.createElement(se,{"arial-label":"testing",tabIndex:0},"".concat(a?"":m+" - ").concat(s)))}),ge=x.a.div.withConfig({displayName:"MiniCalendar__MiniCalendarContainer",componentId:"sc-1lzbm83-0"})(["min-width:300px;zoom:0.8;"]),he=function(){return i.a.createElement(ge,null,i.a.createElement(fe,{mini:!0}),i.a.createElement(ee,{mini:!0}),i.a.createElement(Q,{mini:!0}))},ye=a(20),be=Object(x.a)(ye.a).withConfig({displayName:"Header__CalendarIcon",componentId:"xr9ok1-0"})(["height:40px;color:#3866d0;margin-right:0.5em;@media (max-width:768px){margin-right:0;}"]),we=x.a.div.withConfig({displayName:"Header__HeaderTitle",componentId:"xr9ok1-1"})(["display:inline-flex;justify-content:center;align-items:center;"]),xe=x.a.h2.withConfig({displayName:"Header__Title",componentId:"xr9ok1-2"})(["margin:0;font-family:sans-serif;display:flex;justify-content:center;align-items:center;@media (max-width:768px){display:none;}"]),Ee=x.a.nav.withConfig({displayName:"Header__NavBar",componentId:"xr9ok1-3"})(["box-shadow:0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);margin-bottom:'1em';background-color:#fafafa !important;display:flex;align-items:center !important;justify-content:center;padding-left:0.5em;max-height:55px;@media (max-width:768px){padding-left:0;.button{padding:0;}.navbar-item{padding:0.3em;}}"]),ve=Object(x.b)(function(e){var t=h(),a=Object(b.a)(t,2),n=a[0],r=a[1],o=n.calendarMode;return i.a.createElement(Ee,{className:"navbar"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(we,null,i.a.createElement(be,null),i.a.createElement(xe,null,"Calendar"))),i.a.createElement(fe,{onlyYear:"Year"===o,mini:!1}),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement(T,{defaultValue:o||"Month",options:["Month","Year"],handleChange:function(e){r({type:"CHANGE_CALENDAR_MODE",payload:{calendarMode:e}})}}))))}),De=a(21),_e=Object(x.a)(De.a).withConfig({displayName:"Modal__CloseIcon",componentId:"sc-1le6yfi-0"})(["height:15px;"]),Ce=x.a.form.withConfig({displayName:"Modal__ModalContainer",componentId:"sc-1le6yfi-1"})(["min-height:250px;min-width:200px;position:fixed;background-color:#fafafa !important;z-index:3;border:0.5px solid #fafafa !important;"]),Ne=x.a.div.withConfig({displayName:"Modal__TaskName",componentId:"sc-1le6yfi-2"})(["display:flex;justify-content:space-between;button{background-color:transparent !important;}"]),ke=function(){var e=h(),t=Object(b.a)(e,2),a=t[0],r=a.selectedTimestamp,o=a.currentDayIndex,l=a.showModal,c=t[1],d=Object(n.useState)(!1),m=Object(b.a)(d,2),s=m[0],u=m[1],p=Object(n.useState)(new Date),f=Object(b.a)(p,2),g=f[0],y=f[1],w=Object(n.useState)(""),x=Object(b.a)(w,2),E=x[0],D=x[1],_=function(){c({type:"TOGGLE_MODAL",payload:""})};return l?i.a.createElement(Ce,{className:"box",onClick:function(e){e.stopPropagation()},onSubmit:function(e){e.preventDefault(),console.log(e),console.log(E),E&&(c({type:"ADD_TASK",payload:{task:{title:E,time:g,day:{timestamp:r,disabled:!1}}}}),D(""),c({type:"TOGGLE_MODAL",payload:{timestamp:r,showModal:!1,currentDayIndex:o}}))}},i.a.createElement(Ne,null,i.a.createElement("h4",null,E),i.a.createElement(v,{ariaLabel:"close",onClick:_,type:"button"},i.a.createElement(_e,null))),i.a.createElement("p",null,new Date(r).toDateString()),i.a.createElement(C,{label:"Add title",placeholder:"Do important stuff",type:"text",setTitle:D,value:E}),i.a.createElement(v,{type:"button",ariaLabel:"Add an hour",onClick:function(){return u(!s)}},"Add an hour"),s&&i.a.createElement(F,{date:g,handleChange:y}),i.a.createElement("div",null,i.a.createElement(v,{ariaLabel:"Save button",type:"submit"},"Save"),i.a.createElement(v,{type:"button",ariaLabel:"Cancel button",className:"is-light",onClick:_},"cancel"))):null},Oe=(a(39),x.a.div.withConfig({displayName:"App__Container",componentId:"gaczt-0"})(["display:flex;justify-content:center;width:100%;height:100%;@media (max-width:768px){padding:0;}"])),je=x.a.div.withConfig({displayName:"App__LeftSide",componentId:"gaczt-1"})(["display:flex;align-items:baseline;height:100%;"]),Ie=x.a.div.withConfig({displayName:"App__AppContainer",componentId:"gaczt-2"})(["height:100vh;display:flex;flex-direction:column;overflow:hidden;background-color:#fafafa;"]),Me=function(){return i.a.createElement(y,null,i.a.createElement(Ie,null,i.a.createElement(ve,null),i.a.createElement(Oe,null,i.a.createElement(je,{className:"is-hidden-mobile"},i.a.createElement(he,null)),i.a.createElement(le,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.e412facd.chunk.js.map