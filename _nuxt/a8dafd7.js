(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{333:function(t,n,e){},336:function(t,n,e){"use strict";e(333)},337:function(t,n,e){"use strict";e.r(n);var l={props:{icon:{type:String,default:null},text:{type:String,default:null},height:{type:String,default:null},color:{type:String,default:null}},data:function(){return{}},methods:{}},c=(e(336),e(11)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"chip",style:"--color: "+(t.color?t.color:"#566687")},[t.icon?e("SIcon",{staticClass:"chip-icon",attrs:{name:t.icon||"sell"}}):t._e(),e("span",{staticClass:"chip-text"},[t._v(t._s(t.text))])],1)}),[],!1,null,"588c23c0",null);n.default=component.exports;installComponents(component,{SIcon:e(227).default})},346:function(t,n,e){},356:function(t,n,e){"use strict";e(346)},376:function(t,n,e){"use strict";e.r(n);var l={props:{labels:{type:Array,default:function(){return[]}}}},c=(e(356),e(11)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"label-clouds"},t._l(t.labels,(function(label,i){return e("SChip",{key:i,staticClass:"label-item",attrs:{text:label.name,icon:"sell",color:"#"+label.color},on:{click:function(n){return t.onItemClick(label)}}})})),1)}),[],!1,null,"b74704ce",null);n.default=component.exports;installComponents(component,{SChip:e(337).default})}}]);