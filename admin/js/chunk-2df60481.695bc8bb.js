(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df60481"],{1989:function(e,t,n){},2822:function(e,t,n){"use strict";var i=n("c899"),o=n.n(i);o.a},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},o=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(e,t,n){var i=s(),o=e-i,u=20,c=0;t="undefined"===typeof t?500:t;var l=function e(){c+=u;var s=Math.easeInOutQuad(c,i,o,t);a(s),c<t?r(e):n&&"function"===typeof n&&n()};l()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&u(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},l=c,d=(n("d887"),n("2877")),p=Object(d["a"])(l,i,o,!1,null,"0b2719bc",null);t["a"]=p.exports},"4d44":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var i=n("b775");function o(e){return Object(i["a"])({url:"/coco/business/individual/manager/list",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/coco/user/summary/list",method:"post",data:e})}function a(){return Object(i["a"])({url:"/coco/staff/operation/reason/list",method:"get"})}function s(e){return Object(i["a"])({url:"/coco/staff/operation/generate/code",method:"post",data:e})}function u(){return Object(i["a"])({url:"/coco/staff/operation/list",method:"get"})}function c(e){return Object(i["a"])({url:"/coco/staff/operation/delete/token",method:"get",params:e})}},7156:function(e,t,n){var i=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var r,a;return o&&"function"==typeof(r=t.constructor)&&r!==n&&i(a=r.prototype)&&a!==n.prototype&&o(e,a),e}},"7e25":function(e,t,n){},"8ebf":function(e,t,n){"use strict";var i=n("7e25"),o=n.n(i);o.a},a9e3:function(e,t,n){"use strict";var i=n("83ab"),o=n("da84"),r=n("94ca"),a=n("6eeb"),s=n("5135"),u=n("c6b6"),c=n("7156"),l=n("c04e"),d=n("d039"),p=n("7c73"),f=n("241c").f,h=n("06cf").f,m=n("9bf2").f,g=n("58a8").trim,w="Number",b=o[w],y=b.prototype,v=u(p(y))==w,L=function(e){var t,n,i,o,r,a,s,u,c=l(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+c}for(r=c.slice(2),a=r.length,s=0;s<a;s++)if(u=r.charCodeAt(s),u<48||u>o)return NaN;return parseInt(r,i)}return+c};if(r(w,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(v?d((function(){y.valueOf.call(n)})):u(n)!=w)?c(new b(L(t)),n,k):L(t)},S=i?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)s(b,_=S[N])&&!s(k,_)&&m(k,_,h(b,_));k.prototype=y,y.constructor=k,a(o,w,k)}},c899:function(e,t,n){},d887:function(e,t,n){"use strict";var i=n("1989"),o=n.n(i);o.a},e43c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-dialog",{attrs:{visible:e.orderDialogVisible,"close-on-click-modal":!1,title:"购买多开窗口服务",width:"450px"},on:{"update:visible":function(t){e.orderDialogVisible=t}}},[n("el-form",{ref:"orderForm",attrs:{model:e.orderForm,"label-width":"80px",size:"small"}},[n("el-form-item",{attrs:{label:"分发用户"}},[n("el-autocomplete",{attrs:{"popper-class":"user-autocomplete","fetch-suggestions":e.queryUserSearch,clearable:"","value-key":"userPhone",placeholder:"用户手机号"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("div",{staticClass:"phone"},[e._v(e._s(i.userPhone))]),n("span",{staticClass:"nick"},[e._v(e._s(i.userNick))])]}}]),model:{value:e.orderForm.phoneNum,callback:function(t){e.$set(e.orderForm,"phoneNum",t)},expression:"orderForm.phoneNum"}})],1),n("el-form-item",{attrs:{label:"订购时长"}},[n("el-radio-group",{model:{value:e.orderForm.days,callback:function(t){e.$set(e.orderForm,"days",t)},expression:"orderForm.days"}},[n("el-radio-button",{attrs:{label:1}},[e._v("1天"+e._s(e.getPriceWithDays(1))+"元")]),n("el-radio-button",{attrs:{label:7}},[e._v("7天"+e._s(e.getPriceWithDays(7))+"元")]),n("el-radio-button",{attrs:{label:30}},[e._v("30天"+e._s(e.getPriceWithDays(30))+"元")])],1)],1),n("el-form-item",{attrs:{label:"订购数量"}},[n("el-input-number",{attrs:{"controls-position":"right",min:1,max:1e3,step:1,"step-strictly":""},model:{value:e.orderForm.num,callback:function(t){e.$set(e.orderForm,"num",t)},expression:"orderForm.num"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("span",{staticStyle:{float:"left","font-size":"14px","line-height":"32px"}},[e._v("现有河马币："),n("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.hemaCoins))])]),n("span",{staticStyle:{"margin-left":"5px",float:"left","font-size":"14px","line-height":"32px"}},[e._v("支付价格："),n("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.currentPrice))])]),n("el-button",{attrs:{type:"primary",loading:e.orderApplyLoding,size:"small"},on:{click:e.handleOrderSubmit}},[e._v(e._s(e.orderApplyLoding?"支付中":"确定购买")+" ")])],1)],1),n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:e.handleOrderButtonClick}},[n("i",{staticClass:"el-icon-document-copy"}),e._v(" 购买多开窗口服务 ")]),n("div",{staticStyle:{float:"right"}},[n("el-autocomplete",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{"popper-class":"user-autocomplete","fetch-suggestions":e.queryUserSearch,clearable:"","value-key":"userPhone",placeholder:"用户手机号",size:"small"},on:{clear:e.handleWindowListFilter,select:e.handleWindowListFilter},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("div",{staticClass:"phone"},[e._v(e._s(i.userPhone))]),n("span",{staticClass:"nick"},[e._v(e._s(i.userNick))])]}}]),model:{value:e.windowListQuery.userPhone,callback:function(t){e.$set(e.windowListQuery,"userPhone",t)},expression:"windowListQuery.userPhone"}}),n("el-button",{staticClass:"filter-item",attrs:{size:"small"},on:{click:e.handleWindowListFilter}},[e._v(" 搜索 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.windowListLoading,expression:"windowListLoading"}],staticStyle:{"max-width":"750px"},attrs:{data:e.windowList,border:"","highlight-current-row":"",size:"small"}},[n("el-table-column",{attrs:{label:"ID",prop:"id",width:"65",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.id))])]}}])}),n("el-table-column",{attrs:{label:"购买个数",width:"85",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.windows))])]}}])}),n("el-table-column",{attrs:{label:"订购时长",width:"125",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.applyDays)+" 天")])]}}])}),n("el-table-column",{attrs:{label:"到期时间",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.expireTime))])]}}])}),n("el-table-column",{attrs:{label:"所属用户","min-width":"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(e.getUserName(i.userPhone)))])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.windowListTotal>0,expression:"windowListTotal > 0"}],attrs:{total:e.windowListTotal,page:e.windowListQuery.page,limit:e.windowListQuery.pageSize},on:{"update:page":function(t){return e.$set(e.windowListQuery,"page",t)},"update:limit":function(t){return e.$set(e.windowListQuery,"pageSize",t)},pagination:e.getWindowList}})],1)},o=[],r=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("c975"),n("b0c0"),n("159b"),n("5530")),a=n("2f62"),s=n("f8b7"),u=n("333d"),c=n("4d44"),l=n("c24f"),d={name:"MultiWindow",components:{Pagination:u["a"]},data:function(){var e=[{id:0,status:"全部"},{id:1,status:"已发放"},{id:2,status:"未发放"}];return{windowListQuery:{allocationStatus:0,userPhone:"",page:1,pageSize:20},windowListTotal:0,windowListLoading:!1,windowList:[],userList:[],allocationStatusList:e,orderForm:{days:1,num:1,phoneNum:""},orderApplyLoding:!1,orderDialogVisible:!1,orderInfoList:[]}},computed:Object(r["a"])({},Object(a["b"])(["token","hemaCoins"]),{userPhoneMap:function(){var e={};return this.userList.forEach((function(t){e[t.userPhone]={phone:t.userPhone,name:t.userNick}})),e},currentPrice:function(){var e=0,t=this.orderForm,n=t.days,i=t.num,o=this.orderInfoList.find((function(e){return e.packageDays===n}));return o&&(e=o.packagePrice),e*i}}),mounted:function(){this.getOrderInfoList(),this.getUserList(),this.getWindowList()},methods:{getOrderInfoList:function(){var e=this;Object(s["j"])().then((function(t){e.orderInfoList=t.data.filter((function(e){return 15===e.businessId}))}))},getPriceWithDays:function(e){var t=this.orderInfoList.find((function(t){return t.packageDays===e}));return t?t.packagePrice:"*"},getUserName:function(e){if(""===e)return"";var t=this.userPhoneMap[e];return void 0===t?"未知用户":"".concat(t.phone,"(").concat(t.name,")")},handleOrderSubmit:function(){var e=this,t=this.orderForm,n=t.days,i=t.num,o=t.phoneNum,r=this.token;o?this.orderApplyLoding||(this.orderApplyLoding=!0,Object(s["u"])({token:r,applyNum:i,days:n,userPhone:o}).then((function(t){e.$message.success("订购成功！"),e.orderApplyLoding=!1,e.orderDialogVisible=!1,e.getWindowList()})).catch((function(){e.orderApplyLoding=!1}))):this.$message.warning("请填写要分发用户的手机号")},handleOrderButtonClick:function(){this.orderDialogVisible=!0,this.$store.dispatch("user/getManagerCoins")},handleWindowListFilter:function(){this.getWindowList()},getUserList:function(){var e=this,t=this.token;Object(l["c"])({token:t,page:1,pageSize:1e4}).then((function(t){var n=t.list;e.userList=n}))},getWindowList:function(){var e=this;this.windowListLoading=!0;var t=this.token;Object(c["d"])(Object(r["a"])({token:t,businessId:15},this.windowListQuery)).then((function(t){e.windowListLoading=!1,e.windowListTotal=t.total,e.windowList=t.list})).catch((function(){e.windowListLoading=!1}))},queryUserSearch:function(e,t){var n=this.userList,i=e?n.filter(this.createUserFilter(e)):n;t(i)},createUserFilter:function(e){return function(t){return 0===t.userPhone.toLowerCase().indexOf(e.toLowerCase())}}}},p=d,f=(n("2822"),n("8ebf"),n("2877")),h=Object(f["a"])(p,i,o,!1,null,"ca64cdba",null);t["default"]=h.exports}}]);