(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15f140d2"],{"2b34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article_detail"},[a("PlaceHolder",{attrs:{loading:!t.article_data&&!t.not_found,error:t.not_found,error_title:"文章未找到",error_text:"输入了错误的地址或者文章已被移动"}}),t.article_data?a("BlogArticleTitle",{attrs:{article_data:t.article_data}}):t._e(),t.article_data?a("div",{staticClass:"content"},[t.article_data.content?a("ArticleMainSection",{attrs:{article_data:t.article_data}}):t._e()],1):t._e(),t.article_data?a("div",{staticClass:"content"},[t.article_data.children&&t.article_data.children.length>0?a("div",{staticClass:"section article_children_section"},[a("h3",{staticClass:"section_title"},[t._v(t._s(t.$Text("章节目录")))]),t._l(t.article_data.children,(function(e){return a("div",{key:e.post_no,staticClass:"article_children_item_box"},[a("router-link",{staticClass:"article_children_item",attrs:{to:"/blog/articles/"+e.article_id}},[a("span",{staticClass:"article_children_item_title"},[t._v(t._s(e.title))])])],1)}))],2):t._e(),t.article_data.content?a("div",{staticClass:"section article_copyright_section"},[a("h3",{staticClass:"section_title"},[t._v(t._s(t.$Text("Copyright")))]),t._m(0),a("p",[t._v("部分内容源自互联网、书本和课堂，仅供交流学习，未用于任何商业用途。如果它们侵犯了您的权益，请与我们联系，我们将立即删除它们。")]),a("p",[t._v("Copyright © 2020-2023 Kloudy All Rights Reserved.")])]):t._e(),a("CommunityPost",{attrs:{post_id:"blog/articles/"+t.article_data.article_id}})],1):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("本文遵循"),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank"}},[t._v("署名-非商业性使用-禁止演绎 4.0 国际(CC BY-NC-ND 4.0)")]),t._v("标准")])}],c=(a("d3b7"),a("3ca3"),a("ddb0"),{components:{BlogArticleTitle:function(){return a.e("chunk-4f6304a1").then(a.bind(null,"c395"))},ArticleMainSection:function(){return a.e("chunk-10a14807").then(a.bind(null,"21d7"))},CommunityPost:function(){return a.e("chunk-2b23dcb8").then(a.bind(null,"e419"))},PlaceHolder:function(){return a.e("chunk-cc07f37e").then(a.bind(null,"a71f"))}},props:["article_id"],data:function(){return{not_found:!1,article_data:null}},mounted:function(){},beforeDestroy:function(){},watch:{article_id:{immediate:!0,handler:function(t){this.article_data=null,this.not_found=!1,this.get_article_request(t)}}},methods:{get_article_request:function(t){var e=this;this.$axios.get("/blog/get_article_detail.php",{params:{article_id:t}}).then((function(t){var a=t.data;"success"==a.status?(e.article_data=a.data,document.title=e.article_data.title+" - Kloudy Shape"):e.not_found=!0}))}}}),l=c,r=(a("7fa9"),a("2877")),s=Object(r["a"])(l,i,n,!1,null,null,null);e["default"]=s.exports},"7fa9":function(t,e,a){"use strict";a("f51c")},f51c:function(t,e,a){}}]);