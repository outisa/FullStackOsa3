(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=t(14),l=t(2),i=function(e){var n=e.person,t=e.removeContact;return r.a.createElement("li",{key:n.id},n.name,"  ",n.number,r.a.createElement("button",{onClick:t},"delete"))},f=t(3),m=t.n(f),d="/api/persons",s=function(){return m.a.get(d).then(function(e){return e.data})},b=function(e){return m.a.post(d,e).then(function(e){return e.data})},p=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then(function(e){return e.data})},v=function(e){return m.a.delete("".concat(d,"/").concat(e))};t(37);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}var g=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:e.filterData,onChange:e.handleFilter})))},w=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNewName})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNewNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},O=function(e){return r.a.createElement("ul",null,e.rows)},E=function(e){var n=e.errorMessage,t=e.message;return null===n&null===t?(console.log("??"),null):null===t?r.a.createElement("div",{className:"error"},n):null===n?r.a.createElement("div",{className:"added"},t):void 0},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(null),f=Object(l.a)(c,2),m=f[0],d=f[1],j=Object(a.useState)(null),y=Object(l.a)(j,2),N=y[0],S=y[1],P=Object(a.useState)(""),k=Object(l.a)(P,2),C=k[0],D=k[1],A=Object(a.useState)(""),F=Object(l.a)(A,2),I=F[0],J=F[1],L=Object(a.useState)(""),M=Object(l.a)(L,2),x=M[0],B=M[1],T=Object(a.useState)(!0),q=Object(l.a)(T,2),z=q[0],G=q[1];Object(a.useEffect)(function(){console.log("effect"),s().then(function(e){console.log("promise fulfilled"),o(e)})},[]);var H=function(e){S("".concat(e)),Q()},K=function(e){d("".concat(e)),Q()},Q=function(){setTimeout(function(){S(null),d(null)},3e3),D(""),J("")},R=z?t:t.filter(function(e){return e.name.toLowerCase().includes(x.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{errorMessage:m,message:N}),r.a.createElement(g,{filterData:x,handleFilter:function(e){B(e.target.value),console.log(e.target.value),""!==e.target.value&&!0===z?G(!z):""===e.target.value&&G(z)}}),r.a.createElement("h2",null,"Add a new contact"),r.a.createElement(w,{addName:function(e){e.preventDefault();var n=t.find(function(e){return e.name===C});if(console.log(n),"undefined"!==typeof n&&n.name===C){if(window.confirm("".concat(C," is already added to phonebook, replace the old number with a new one?"))){var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(t,!0).forEach(function(n){Object(u.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},t.find(function(e){return e.id===n.id}),{number:I});p(n.id,a).then(function(e){H("Number changed for ".concat(C)),o(t.map(function(t){return t.id!==n.id?t:e}))}).catch(function(e){K("Information of ".concat(n.name," has already been removed from server.")),o(t.filter(function(e){return e.id!==n.id}))})}}else b({name:C,number:I}).then(function(e){H("Added ".concat(C)),o(t.concat(e))}).catch(function(e){console.log(e.data),K("Name or number is missing")})},newName:C,handleNewName:function(e){console.log(e.target.value),D(e.target.value)},newNumber:I,handleNewNumber:function(e){console.log(e.target.value),J(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(O,{rows:R.map(function(e){return r.a.createElement(i,{key:e.id,person:e,removeContact:function(){return function(e){var n=t.find(function(n){return n.id===e});console.log(n),window.confirm("Delete ".concat(n.name," ? "))&&v(n.id).then(function(e){H("".concat(n.name," was deleted from server.")),console.log(e.data),o(t.filter(function(e){return e.id!==n.id}))}).catch(function(e){K("".concat(n.name," has already been removed from server.")),o(t.filter(function(e){return e.id!==n.id}))})}(e.id)}})})}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4405c2d4.chunk.js.map