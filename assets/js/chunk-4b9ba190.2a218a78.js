(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b9ba190"],{"122b":function(t,n,e){"use strict";e("960f")},"6ff1":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content",attrs:{id:"movies_home"}},[e("Title",{attrs:{title:"Movies",parent:{title:"Archive",link:"/archive"},intro:"静下来慢慢感受着，流淌的故事"}}),e("div",{ref:"movie_item_container",staticClass:"movie_item_container"},t._l(t.movies,(function(t){return e("MovieItem",{key:t.movie_no,attrs:{movie:t}})})),1),e("div",{staticClass:"section movie_pagination blur_part"},[e("Pagination",{attrs:{count:t.movies_count,capacity:"36"},model:{value:t.page,callback:function(n){t.page=n},expression:"page"}}),e("p",{staticClass:"movie_pagination_count"},[t._v(t._s(t.movies_count)+" 影视")])],1),e("CommunityPost",{attrs:{post_id:"archive/movies"}})],1)},o=[],c=(e("d3b7"),e("3ca3"),e("ddb0"),{components:{Rate:function(){return e.e("chunk-0fb085ab").then(e.bind(null,"236f"))},FormRadios:function(){return e.e("chunk-e8330ade").then(e.bind(null,"82b2"))},Title:function(){return e.e("chunk-2feab92c").then(e.bind(null,"5f3a"))},MovieItem:function(){return e.e("chunk-4e0c71cd").then(e.bind(null,"2507"))},Pagination:function(){return e.e("chunk-33c81e26").then(e.bind(null,"3092"))},CommunityPost:function(){return e.e("chunk-2b23dcb8").then(e.bind(null,"e419"))}},data:function(){return{movies:[],movies_count:null,page:1,last_scrollTop:0}},mounted:function(){this.get_count(),this.get_all()},beforeDestroy:function(){},beforeRouteLeave:function(t,n,e){this.last_scrollTop=document.getElementById("app_view").scrollTop,e()},beforeRouteEnter:function(t,n,e){e((function(t){t.$nextTick((function(){document.getElementById("app_view").scrollTo({top:t.last_scrollTop})}))}))},watch:{page:function(){this.get_all({scroll:!0})}},methods:{get_count:function(){var t=this;this.$axios.get("/archive/get_movies_count.php").then((function(n){var e=n.data;t.movies_count=e.data}))},get_all:function(t){var n=this;this.$axios.get("/archive/get_all_movies.php",{params:{page:this.page}}).then((function(e){var i=e.data;n.movies=null,n.$nextTick((function(){n.movies=i.data,t&&t.scroll&&n.$nextTick((function(){n.$App.scroll_to_immediate(n.$refs.movie_item_container)}))}))}))}}}),a=c,s=(e("122b"),e("2877")),u=Object(s["a"])(a,i,o,!1,null,null,null);n["default"]=u.exports},"960f":function(t,n,e){}}]);