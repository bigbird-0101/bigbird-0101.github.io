(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{236:function(t,e,a){},237:function(t,e,a){},238:function(t,e,a){},239:function(t,e,a){},240:function(t,e,a){"use strict";function n(){var t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"];return t[Math.floor(Math.random()*t.length)]}a.d(e,"a",(function(){return n}))},243:function(t,e,a){"use strict";a(245),a(20),a(146),a(21),a(25);var n=a(45),r={props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},filters:{formatDateValue:function(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));var e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),r=Number(t.substr(17,2));return e>0||a>0||r>0?Object(n.d)(t):Object(n.d)(t,"yyyy-MM-dd")}},methods:{goTags:function(t){this.$router.push({path:"/tags/".concat(t,"/")})}}},o=(a(247),a(3)),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?a("i",{staticClass:"iconfont reco-account"},[a("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?a("i",{staticClass:"iconfont reco-date"},[a("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?a("i",{staticClass:"iconfont reco-eye"},[a("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?a("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return a("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag==e},on:{click:function(a){return t.goTags(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,"4687a95a",null);e.a=s.exports},245:function(t,e,a){var n=a(0),r=a(246);n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},246:function(t,e,a){"use strict";var n=a(17),r=a(32),o=a(11),s=a(26),i=a(19),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,h=s("lastIndexOf"),d=i("indexOf",{ACCESSORS:!0,1:0}),f=u||!h||!d;t.exports=f?function(t){if(u)return l.apply(this,arguments)||0;var e=n(this),a=o(e.length),s=a-1;for(arguments.length>1&&(s=c(s,r(arguments[1]))),s<0&&(s=a+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:l},247:function(t,e,a){"use strict";var n=a(236);a.n(n).a},248:function(t,e,a){"use strict";var n=a(237);a.n(n).a},249:function(t,e,a){"use strict";var n=a(238);a.n(n).a},250:function(t,e,a){"use strict";a(145);e.a={methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},252:function(t,e,a){},253:function(t,e,a){},254:function(t,e,a){"use strict";a(20);var n={components:{PageInfo:a(243).a},props:["item","currentPage","currentTag"]},r=(a(248),a(3)),o={components:{NoteAbstractItem:Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-item"},[t.item.frontmatter.sticky?a("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),a("div",{staticClass:"title"},[t.item.frontmatter.keys?a("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),a("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),a("hr",{staticClass:"hr"}),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"975fccd8",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData:function(){var t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},s=(a(249),Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(e){return a("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"495336d0",null));e.a=s.exports},255:function(t,e,a){"use strict";var n=a(239);a.n(n).a},257:function(t,e,a){"use strict";a(144);var n=a(24),r=a(240),o={props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:"全部",path:"/tag/"}].concat(Object(n.a)(this.$tags.list))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getOneColor:r.a}},s=(a(255),a(3)),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,n){return a("span",{key:n,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"55d28cd6",null);e.a=i.exports},277:function(t,e,a){},278:function(t,e,a){},279:function(t,e,a){},280:function(t,e,a){},281:function(t,e,a){},282:function(t,e,a){"use strict";var n=a(252);a.n(n).a},283:function(t,e,a){"use strict";var n=a(253);a.n(n).a},320:function(t,e,a){"use strict";var n=a(277);a.n(n).a},321:function(t,e,a){t.exports=a.p+"assets/img/home-bg.7b267d7c.jpg"},322:function(t,e,a){"use strict";var n=a(278);a.n(n).a},323:function(t,e,a){"use strict";var n=a(279);a.n(n).a},324:function(t,e,a){"use strict";var n=a(280);a.n(n).a},325:function(t,e,a){"use strict";var n=a(281);a.n(n).a},330:function(t,e,a){"use strict";a.r(e);var n=a(288),r=a(242),o=a(241),s={mixins:[o.a],components:{NavLink:n.a,ModuleTransition:r.a},computed:{actionLink:function(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(a(320),a(3)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&!1!==t.$frontmatter.isShowTitleInHome?a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v(t._s(t.$description||"Welcome to your vuePress-theme-reco site"))])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?a("p",{staticClass:"huawei"},[a("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("\n           华为，为中华而为之！\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.4"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=(a(18),a(34),a(58)),u=a(257),h=(a(33),a(259)),d=a.n(h),f=a(240),p={data:function(){return{popupWindowStyle:{}}},computed:{dataAddColor:function(){var t=this.$themeConfig.friendLink;return t&&t.length>0?t=t.map((function(t){return Object(l.a)({},t,{color:Object(f.a)()})})):[]}},methods:{getMd5:function(t){return d()(t)},showDetail:function(t){var e=this,a=t.target,n=a.querySelector(".popup-window-wrapper"),r=a.querySelector(".popup-window");n.style.display="block";var o=a.clientWidth,s=r.clientWidth,i=r.clientHeight;this.popupWindowStyle={left:(o-s)/2+"px",top:-i+"px"},this.$nextTick((function(){e._adjustPosition(a.querySelector(".popup-window"))}))},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl:function(t){var e=t.logo,a=t.email;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):"//1.gravatar.com/avatar/".concat(this.getMd5(a||""),"?s=50&amp;d=mm&amp;r=x")},_adjustPosition:function(t){var e=document.body.offsetWidth,a=t.getBoundingClientRect(),n=e-(a.x+a.width);if(n<0){var r=t.offsetLeft;this.popupWindowStyle=Object(l.a)({},this.popupWindowStyle,{left:r+n+"px"})}}}},m=(a(322),Object(i.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,n){return a("div",{key:n,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"5cf3d21f",null).exports),g=a(254),v=a(250),_=a(294),C={mixins:[v.a,o.a],components:{NoteAbstract:g.a,TagList:u.a,FriendLink:m,ModuleTransition:r.a,PersonalInfo:_.a},data:function(){return{recoShow:!1,currentPage:1,tags:[]}},computed:{actionLink:function(){var t=this.$frontmatter;return{link:t.actionLink,text:t.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},bgImageStyle:function(){var t={height:"350px",textAlign:"center",overflow:"hidden"},e=this.$frontmatter.bgImageStyle;return e?Object(l.a)({},t,{},e):t},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.recoShow=!0,this._setPage(this._getStoragePage())},methods:{getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,a=e.home,n=e.date;return!(1==a||void 0===n)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){this.$router.push({path:t.path})},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:f.a}},w=(a(323),Object(i.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-blog"},[n("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[n("div",{staticClass:"mask",style:{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):a(321))+") center/cover no-repeat"}}),t._v(" "),n("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?n("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.04"}},[!1!==t.$frontmatter.isShowTitleInHome?n("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.08"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v("\n        "+t._s(t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")])]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?n("p",{staticClass:"huawei"},[n("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("   华为，为中华而为之！\n      ")]):t._e()])],1),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.24"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[n("div",{staticClass:"blog-list"},[n("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),n("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),n("div",{staticClass:"info-wrapper"},[n("PersonalInfo"),t._v(" "),n("h4",[n("i",{staticClass:"iconfont reco-category"}),t._v(" 分类")]),t._v(" "),n("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,a){return n("li",{key:a,staticClass:"category-item"},[n("router-link",{attrs:{to:e.path}},[n("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),n("hr"),t._v(" "),0!==t.$tags.list.length?n("h4",[n("i",{staticClass:"iconfont reco-tag"}),t._v(" 标签")]):t._e(),t._v(" "),n("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?n("h4",[n("i",{staticClass:"iconfont reco-friend"}),t._v(" 友链")]):t._e(),t._v(" "),n("FriendLink")],1)])]),t._v(" "),n("ModuleTransition",{attrs:{delay:"0.36"}},[n("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$=(a(21),a(25),a(243)),y=a(45);function b(t,e,a){var n=[];!function t(e,a){for(var n=0,r=e.length;n<r;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var r=0;r<n.length;r++){var o=n[r];if("page"===o.type&&o.path===decodeURIComponent(t.path))return n[r+a]}}var S={mixins:[o.a],components:{PageInfo:$.a,ModuleTransition:r.a},props:["sidebarItems"],data:function(){return{isHasKey:!0}},computed:{showAccessNumber:function(){return"valine"===this.$themeConfig.commentsSolution},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$frontmatter.prev;return!1===a?void 0:a?Object(y.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,-1))},next:function(){var t,e,a=this.$frontmatter.next;return!1===a?void 0:a?Object(y.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,a=t.editLinks,n=t.docsDir,r=void 0===n?"":n,o=t.docsBranch,s=void 0===o?"master":o,i=t.docsRepo,c=void 0===i?e:i;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,r,s,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,n,r){return/bitbucket.org/.test(t)?(y.k.test(e)?e:t).replace(y.b,"")+"/src"+"/".concat(n,"/")+(a?a.replace(y.b,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default"):(y.k.test(e)?e:"https://github.com/".concat(e)).replace(y.b,"")+"/edit"+"/".concat(n,"/")+(a?a.replace(y.b,"")+"/":"")+r}}},k=(a(324),Object(i.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("ModuleTransition",[t._t("top")],2),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-title"},[a("h1",[t._v(t._s(t.$page.title))]),t._v(" "),a("hr"),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.40"}},[t._t("bottom")],2)],1)}),[],!1,null,null,null).exports),x=(a(46),{computed:{year:function(){return(new Date).getFullYear()}}}),T=(a(325),Object(i.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[t._m(0),t._v(" "),t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s(t.year)+"\n    ")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[a("i",{staticClass:"iconfont reco-eye"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"iconfont reco-theme"}),this._v(" "),e("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[this._v("VuePress-theme-reco")])])}],!1,null,"70654804",null).exports),I={components:{HomeBlog:w,Home:c,Page:k,Common:a(256).a,Footer:T},computed:{sidebarItems:function(){return Object(y.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},M=(a(282),a(283),Object(i.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Common",[t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)],1)}),[],!1,null,null,null));e.default=M.exports}}]);