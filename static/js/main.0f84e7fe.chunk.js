(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(4),o=c(5),r=c(8),d=c(7),l=c(1),i=c.n(l),u=c(6),b=c.n(u),h=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedProduct:"Jam"},e.handleSelectProduct=function(t){e.setState({selectedProduct:t})},e.handleRemoveProduct=function(){e.setState({selectedProduct:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedProduct;return Object(h.jsxs)("main",{className:"section container",children:[Object(h.jsxs)("h1",{className:"title",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleRemoveProduct})]}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(c){var n=c===t;return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":n}),children:[Object(h.jsx)("td",{children:n?Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",onClick:e.handleRemoveProduct,className:"button is-info",children:"-"}):Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleSelectProduct(c)},children:"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);a.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0f84e7fe.chunk.js.map