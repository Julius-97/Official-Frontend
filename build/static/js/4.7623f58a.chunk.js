(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{56:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(57);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},57:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},58:function(e,t,a){"use strict";var n=a(23);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return c}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},l=function(){return{type:"EMAIL"}},c=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,l=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var l=a.value;"REQUIRE"===l.type&&(r=r&&e.trim().length>0),"MINLENGTH"===l.type&&(r=r&&e.trim().length>=l.val),"MAXLENGTH"===l.type&&(r=r&&e.trim().length<=l.val),"MIN"===l.type&&(r=r&&+e>=l.val),"MAX"===l.type&&(r=r&&+e<=l.val),"EMAIL"===l.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){i.e(c)}finally{i.f()}return r}},59:function(e,t,a){"use strict";var n=a(6),r=a(56),i=a(0),l=a.n(i),c=a(58),u=(a(60),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),r=a[0],c=a[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){c({type:"TOUCH"})},v="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:r.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:m,value:r.value});return l.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&l.a.createElement("p",null,e.errorText))}},60:function(e,t,a){},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(6),r=a(57),i=a(56),l=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(l.useReducer)(c,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(l.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(l.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},62:function(e,t,a){"use strict";var n=a(6),r=a(0),i=a.n(r),l=a(20);a(63);t.a=function(e){var t=Object(r.useRef)(),a=Object(r.useState)(),c=Object(n.a)(a,2),u=c[0],o=c[1],s=Object(r.useState)(),p=Object(n.a)(s,2),d=p[0],f=p[1],m=Object(r.useState)(!1),v=Object(n.a)(m,2),b=v[0],O=v[1];Object(r.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(u)}}),[u]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:t,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=b;t.target.files&&1===t.target.files.length?(a=t.target.files[0],o(a),O(!0),n=!0):(O(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("label",{htmlFor:"preview"},e.label),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview",id:"preview"},d&&i.a.createElement("img",{src:d,alt:"Preview"}),!d&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(l.a,{type:"button",onClick:function(){t.current.click()}},"PICK IMAGE")),!b&&i.a.createElement("p",null,e.error))}},63:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(56),r=a(11),i=a.n(r),l=a(12),c=a(6),u=a(0),o=a.n(u),s=a(20),p=a(59),d=a(15),f=a(21),m=a(13),v=a(61),b=a(22),O=a(14),j=a(62),y=a(58);a(68);t.default=function(){var e=Object(u.useContext)(O.a),t=Object(u.useState)(!0),a=Object(c.a)(t,2),r=a[0],E=a[1],h=Object(b.a)(),g=h.isLoading,w=h.error,I=h.sendRequest,T=h.clearError,V=Object(v.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(c.a)(V,3),P=N[0],S=N[1],k=N[2],x=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,l,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!r){t.next=13;break}return t.prev=2,t.next=5,I("".concat("https://your-app-personal-project.herokuapp.com/api","/users/login"),"POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:n=t.sent,e.login(n.userId,n.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(l=new FormData).append("email",P.inputs.email.value),l.append("name",P.inputs.name.value),l.append("password",P.inputs.password.value),l.append("image",P.inputs.image.value),t.next=21,I("".concat("https://your-app-personal-project.herokuapp.com/api","/users/signup"),"POST",l);case 21:c=t.sent,e.login(c.userId,c.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{error:w,onClear:T}),o.a.createElement(d.a,{className:"authentication"},g&&o.a.createElement(m.a,{asOverlay:!0}),o.a.createElement("hr",null),r?o.a.createElement("h2",null,"Login"):o.a.createElement("h2",null,"Sign Up"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:x},!r&&o.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(y.c)()],errorText:"Please enter a name",onInput:S}),!r&&o.a.createElement(j.a,{id:"image",center:"center",onInput:S,label:"User Photo",errorText:"Please provide an image"}),o.a.createElement(p.a,{id:"email",element:"input",type:"email",label:"Email address",placeholder:"example@example.com",validators:[Object(y.c)(),Object(y.a)()],errorText:"Email address provided is not valid!",onInput:S}),o.a.createElement(p.a,{id:"password",element:"input",type:"password",label:"Password",placeholder:"******",validators:[Object(y.c)(),Object(y.b)(5)],errorText:"Password provided is not long enough! (at least 5 characters)",onInput:S}),o.a.createElement(s.a,{type:"submit",disabled:!P.isValid},r?"LOGIN":"SIGN UP")),o.a.createElement(s.a,{inverse:!0,onClick:function(){r?k(Object(n.a)(Object(n.a)({},P.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):k(Object(n.a)(Object(n.a)({},P.inputs),{},{name:void 0,image:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),E((function(e){return!e}))}},"SWITCH TO ",r?"SIGN UP":"LOGIN")))}}}]);
//# sourceMappingURL=4.7623f58a.chunk.js.map