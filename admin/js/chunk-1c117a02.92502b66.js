(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c117a02"],{"0d6d":function(e,t,i){"use strict";var n=i("6c66"),o=i.n(n);o.a},1231:function(e,t,i){},"53eb":function(e,t,i){"use strict";var n=i("afb1"),o=i.n(n);o.a},"6c66":function(e,t,i){},"72d1":function(e,t,i){"use strict";i.d(t,"h",(function(){return o})),i.d(t,"l",(function(){return c})),i.d(t,"k",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"j",(function(){return s})),i.d(t,"i",(function(){return d})),i.d(t,"r",(function(){return l})),i.d(t,"n",(function(){return u})),i.d(t,"p",(function(){return h})),i.d(t,"o",(function(){return v})),i.d(t,"q",(function(){return f})),i.d(t,"m",(function(){return p})),i.d(t,"a",(function(){return m})),i.d(t,"e",(function(){return g})),i.d(t,"d",(function(){return k})),i.d(t,"f",(function(){return y})),i.d(t,"c",(function(){return w})),i.d(t,"g",(function(){return C}));var n=i("b775");function o(e){return Object(n["a"])({url:"/coco/device/status",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/coco/package/order/user/order/list",method:"post",data:e})}function a(e){return Object(n["a"])({url:"/coco/package/order/detail",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/coco/package/order/user/order/query",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/coco/core/device/snapshot",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/coco/core/device/remote",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/coco/core/device/restart",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/coco/core/device/gohome",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/coco/core/device/ipswitch",method:"post",data:e})}function v(e){return Object(n["a"])({url:"/coco/core/device/ipproxyclose",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/coco/core/device/reset",method:"post",data:e})}function p(e){return Object(n["a"])({url:"/coco/core/device/batch/newphone",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/coco/device/group/set",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/coco/core/device/virtual/camera",method:"post",data:e})}function k(e){return Object(n["a"])({url:"/coco/core/device/replace",method:"post",data:e})}function y(e){return Object(n["a"])({url:"/coco/core/ip/areas",method:"post",data:e})}function w(e){return Object(n["a"])({url:"/coco/device/remarks/set",method:"post",data:e})}function C(e){return Object(n["a"])({url:"/coco/core/batch/snap/shot",method:"post",data:e})}},8087:function(e,t,i){"use strict";var n=i("1231"),o=i.n(n);o.a},afb1:function(e,t,i){},b11a:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"header-container"},[i("el-page-header",{attrs:{content:e.$route.meta.title},on:{back:e.goBack}}),i("el-button",{staticClass:"snapshot",attrs:{size:"mini"},on:{click:e.getSnapshotClick}},[e._v("一键截屏")])],1),e.isLive?i("div",{staticClass:"live-container"},[i("span",[e._v("RTMP服务器地址填写："),i("span",{staticStyle:{color:"#409EFF"}},[e._v("rtmp://"+e._s(e.rtmpUrl))]),e._v("，流名称/密钥填："),i("span",{staticStyle:{color:"#409EFF"}},[e._v(e._s(e.keyUrl))])])]):i("div",{staticClass:"live-container"},[i("span",[e._v("同步云机数不要超过30台，否则很有可能发生卡顿情况。同步过程中发生部分云机画面延迟时，可直接操作云机。")])]),i("div",{staticClass:"device-container"},[i("div",{staticClass:"device-main"},[e.deviceMain.id&&e.isLive?i("device",{ref:"deviceMain",attrs:{width:e.mainWidth,device:e.deviceMain},on:{orientationChange:function(t){return e.handleDeviceMainOrientationChange(t)}}}):e._e(),e.deviceMain.id&&!e.isLive?i("device",{ref:"deviceMain",attrs:{width:e.mainWidth,device:e.deviceMain},on:{input:function(t){return e.handleDeviceMainInputEvent(t)},goBack:e.handleDeviceMainGoBack,goHome:e.handleDeviceMainGoHome,openRecent:e.handleDeviceMainOpenRecent,volumeUp:e.handleDeviceMainVolumeUp,volumeDown:e.handleDeviceMainVolumeDown,orientationChange:function(t){return e.handleDeviceMainOrientationChange(t)}}}):e._e()],1),i("div",{staticClass:"device-followers",style:{"grid-template-columns":"repeat(auto-fill, "+e.followerWidth+"px)"}},e._l(e.deviceFollowers,(function(t){return i("device",{key:t.id,ref:"followers",refInFor:!0,attrs:{width:e.followerWidth,follower:!0,device:t}})})),1)])])},o=[],c=(i("99af"),i("4160"),i("d81d"),i("fb6a"),i("b0c0"),i("ac1f"),i("466d"),i("5319"),i("159b"),i("2909")),a=i("5530"),r=i("2f62"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"device"},[i("div",{staticClass:"window"},[i("div",{staticClass:"header",class:[e.follower?"follower":""],style:{width:e.deviceWidth+"px"}},[i("span",{staticClass:"id"},[e._v(e._s(e.device.id))])]),i("div",{staticClass:"body",style:{width:e.deviceWidth+"px",height:e.deviceHeight+"px"}},[e.deviceMessage?i("div",{staticClass:"message"},[e._v(e._s(e.deviceMessage))]):e._e(),i("div",{ref:"target",style:{width:e.deviceWidth+"px",height:e.deviceHeight+"px"}})]),i("div",{staticClass:"footer",class:[e.follower?"follower":""],style:{width:e.deviceWidth+"px"}},[i("el-tooltip",{staticClass:"tooltip",staticStyle:{"font-size":"5px"},attrs:{effect:"dark",content:"返回键",placement:"top-start"}},[i("div",{staticClass:"return",on:{click:e.returnClick}})]),i("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"主页键",placement:"top"}},[i("div",{staticClass:"home",on:{click:e.homeClick}})]),i("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"任务键",placement:"top"}},[i("div",{staticClass:"recent",on:{click:e.recentClick}})]),i("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"音量+",placement:"top"}},[i("div",{staticClass:"vol-up",on:{click:e.volUpClick}})]),i("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"音量-",placement:"top"}},[i("div",{staticClass:"vol-down",on:{click:e.volDownClick}})]),i("el-tooltip",{staticClass:"tooltip",attrs:{effect:"dark",content:"切换横竖屏",placement:"top-end"}},[i("div",{staticClass:"toogle-orientation",on:{click:e.toogleOrientationClick}})])],1)])])},d=[],l=(i("a9e3"),{name:"Device",props:{device:{type:Object,required:!0},width:{type:Number,default:720},follower:{type:Boolean,default:!1}},data:function(){return{player:null,deviceWidth:720,deviceHeight:1280,deviceMessage:""}},beforeMount:function(){this.deviceWidth=this.width+2,this.deviceHeight=Math.floor(16*this.deviceWidth/9)},mounted:function(){var e=this;LongeneClient.LoggingControl.setLogLevel("info");var t=this.$refs["target"];this.follower?this.player=LongeneClient.createAppPlayer(t,{keyboard:!0,orientation:"portrait",mediaType:"image",imageFrameRate:1,imageFrameRateMode:"cfr",imageWidth:640,imageHeight:360}):(this.player=LongeneClient.createAppPlayer(t,{keyboard:!0,inputEventListen:!0,orientation:"portrait"}),this.player.on("inputevent",(function(t){e.$emit("input",t)})));var i=this.device,n=i.ip,o=i.port,c=i.token,a=i.domain;this.player.open({ip:n,port:o,token:c,domain:a}),this.player.on("error",(function(t){t&&t.message&&t.code&&(e.deviceMessage=t.message+"("+t.code+")")})),this.deviceMessage="正在连接中...",this.player.on("statechange",(function(){"playing"==e.player.state&&(e.deviceMessage="")}))},beforeDestroy:function(){this.player.close()},computed:{},methods:{computeDeviceSize:function(){var e=this,t=document.documentElement.clientWidth,i=document.documentElement.clientHeight;if(this.deviceWidth=Math.floor(.25*t),this.deviceHeight=Math.floor(16*this.deviceWidth/9),this.deviceHeight>i&&(this.deviceHeight=Math.floor(.8*i),this.deviceWidth=Math.floor(9*this.deviceHeight/16)),this.player){var n=this.player.orientation;if("landscape"==n){var o=this.deviceWidth;this.deviceWidth=1.5*this.deviceHeight,this.deviceHeight=1.5*o}setTimeout((function(){e.player.updateInterface()}),50)}},returnClick:function(){this.player&&(this.player.emitBack(),this.$emit("goBack"))},homeClick:function(){this.player&&(this.player.emitHome(),this.$emit("goHome"))},recentClick:function(){this.player&&(this.player.openRecent(),this.$emit("openRecent"))},volUpClick:function(){this.player&&(this.player.emitVolumeUp(),this.$emit("volumeUp"))},volDownClick:function(){this.player&&(this.player.emitVolumeDown(),this.$emit("volumeDown"))},toogleOrientationClick:function(e){var t=this;if(this.player){var i=this.deviceWidth;this.deviceWidth=this.deviceHeight,this.deviceHeight=i;var n=n||this.player.orientation;"portrait"==n?(this.player.setOrientation("landscape"),this.$emit("orientationChange","landscape")):(this.player.setOrientation("portrait"),this.$emit("orientationChange","portrait")),setTimeout((function(){t.player.updateInterface()}),0)}},sendInputEvent:function(e){this.player&&this.player.onInputEvent(e)}}}),u=l,h=(i("53eb"),i("2877")),v=Object(h["a"])(u,s,d,!1,null,"6815134e",null),f=v.exports,p=i("72d1"),m=i("c4e3"),g=i.n(m),k=i("21a6"),y={name:"Sync",components:{Device:f},computed:Object(a["a"])({},Object(r["b"])(["token"]),{deviceMainId:function(){return this.$route.query.device?this.$route.query.device[0]:null},deviceFollowersIds:function(){return this.$route.query.device?this.$route.query.device.slice(1):[]},isLive:function(){return"Live"===this.$route.name},liveUrl:function(){return this.isLive?this.$route.query.url:""},rtmpUrl:function(){return this.liveUrl.match(/^.+video/g)[0]},keyUrl:function(){return this.liveUrl.match(/[^/]+$/g)[0]}}),data:function(){return{mainWidth:260,followerWidth:130,deviceMain:{id:0,ip:"",port:0,token:"",domain:""},deviceFollowers:[],snapshotLoding:!1}},beforeMount:function(){var e=this,t=document.documentElement.clientWidth;this.mainWidth=Math.floor(.2*t),this.followerWidth=Math.floor(this.mainWidth/2),this.deviceMainId&&Object(p["i"])({token:this.token,deviceId:this.deviceMainId}).then((function(t){var i=t.data;e.deviceMain.id=e.deviceMainId,e.deviceMain.ip=i.deviceip,e.deviceMain.port=i.deviceport,e.deviceMain.token=i.tokens,e.deviceMain.domain=i.domainname})),this.deviceFollowersIds.length>0&&this.deviceFollowersIds.forEach((function(t){Object(p["i"])({token:e.token,deviceId:t}).then((function(i){var n=i.data,o=n.deviceip,c=n.deviceport,a=n.tokens,r=n.domainname;e.deviceFollowers.push({id:t,ip:o,port:c,token:a,domain:r})}))}))},mounted:function(){},methods:{goBack:function(){this.$router.push("/user/preview")},handleDeviceMainInputEvent:function(e){var t=this.$refs["followers"];t&&t.length>0&&t.forEach((function(t){t.sendInputEvent(e)}))},handleDeviceMainGoBack:function(){var e=this.$refs["followers"];e&&e.length>0&&e.forEach((function(e){e.returnClick()}))},handleDeviceMainGoHome:function(){var e=this.$refs["followers"];e&&e.length>0&&e.forEach((function(e){e.homeClick()}))},handleDeviceMainOpenRecent:function(){var e=this.$refs["followers"];e&&e.length>0&&e.forEach((function(e){e.recentClick()}))},handleDeviceMainVolumeUp:function(){var e=this.$refs["followers"];e&&e.length>0&&e.forEach((function(e){e.volUpClick()}))},handleDeviceMainVolumeDown:function(){var e=this.$refs["followers"];e&&e.length>0&&e.forEach((function(e){e.volDownClick()}))},handleDeviceMainOrientationChange:function(e){var t=this.$refs["followers"];t&&t.length>0&&(t.forEach((function(t){t.toogleOrientationClick(e)})),this.followerWidth=t[0].deviceWidth)},getSnapshotClick:function(){var e=this;if(this.$refs["deviceMain"]&&this.$refs["followers"]&&!this.snapshotLoding){this.$message.success("正在进行屏幕截图，请稍后..."),this.snapshotLoding=!0;var t=[this.$refs["deviceMain"]].concat(Object(c["a"])(this.$refs["followers"]));Object(p["g"])({deviceIdList:t.map((function(e){return e.device.id}))}).then((function(i){var n=new g.a,o=n.folder("云机屏幕截图");t.forEach((function(e){var t=e.player;if(t&&"playing"===t.state){var i=t.mediaElement;if(i instanceof HTMLCanvasElement)o.file("".concat(e.device.id,".png"),i.toDataURL().replace(/^data:image\/(png|jpg);base64,/,""),{base64:!0});else{var n=document.createElement("canvas");n.width=1280,n.height=720;var c=n.getContext("2d");c.drawImage(i,0,0,1280,720),o.file("".concat(e.device.id,".png"),n.toDataURL().replace(/^data:image\/(png|jpg);base64,/,""),{base64:!0})}}})),n.generateAsync({type:"blob"}).then((function(e){Object(k["saveAs"])(e,"云机截屏.zip")})),e.snapshotLoding=!1})).catch((function(t){e.snapshotLoding=!1}))}}}},w=y,C=(i("0d6d"),i("8087"),Object(h["a"])(w,n,o,!1,null,"8cec066e",null));t["default"]=C.exports}}]);