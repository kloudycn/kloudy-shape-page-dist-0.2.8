(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-646f645e"],{"5e3a":function(t,n,i){},"9e5e":function(t,n,i){"use strict";i("5e3a")},e57a:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"link_item"},[i("a",{staticClass:"link_item_main section",class:{disabled:!t.is_enabled,hover:t.is_enabled},attrs:{href:t.link_content.link_url,target:"_blank",onclick:"javascript: return "+t.is_enabled}},[i("div",{staticClass:"link_item_bg_box"},[t.link_content.icon?i("div",{staticClass:"link_item_bg",style:{"background-image":"url("+t.link_content.icon.replaceAll(" ","%20")+")"}}):t._e()]),i("div",{staticClass:"link_item_icon_box"},[t.link_content.icon&&!t.img_error?i("div",{staticClass:"link_item_icon_back"}):t._e(),t.link_content.icon&&!t.img_error?i("div",{staticClass:"link_icon_img_box"},[i("img",{staticClass:"link_icon_img",attrs:{src:t.link_content.icon},on:{error:function(n){t.img_error=!0}}})]):i("div",{staticClass:"link_icon_img_text_box"},[i("p",{staticClass:"link_icon_img_text"},[t._v(t._s(t.link_content.title?t.link_content.title.slice(0,1):" "))])])]),i("div",{staticClass:"link_item_text_box"},[t.link_content.title?i("h3",{staticClass:"link_title"},[t._v(t._s(t.link_content.title))]):t._e(),t.link_content.descr?i("p",{staticClass:"link_descr"},[t._v(t._s(t.link_content.descr))]):t._e(),t.link_content.link_url?i("p",{staticClass:"link_url"},[t._v(t._s(t.link_content.link_url))]):t._e()])]),t.editing?i("div",{staticClass:"link_item_edit_row"},[i("ButtonI",{attrs:{type:"no_text",icon:"edit"},nativeOn:{click:function(n){return t.edit()}}})],1):t._e()])},l=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),{components:{ButtonI:function(){return i.e("chunk-753cb75b").then(i.bind(null,"1e80"))}},props:["link_content","editing"],data:function(){return{img_error:!1}},computed:{is_enabled:function(){return"1"!=this.link_content.disabled&&!!this.link_content.link_url}},methods:{edit:function(){this.$emit("edit_event",this.link_content)}}}),_=s,c=(i("9e5e"),i("2877")),o=Object(c["a"])(_,e,l,!1,null,null,null);n["default"]=o.exports}}]);