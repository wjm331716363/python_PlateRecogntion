(function(e){function t(t){for(var o,s,l=t[0],i=t[1],c=t[2],u=0,f=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("UploadImg")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-img"},[n("el-card",[e._v("Flask Vue 图片识别")]),n("br"),n("el-card",[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-radio",{attrs:{size:"small",label:"car",border:""},model:{value:e.recon_option,callback:function(t){e.recon_option=t},expression:"recon_option"}},[e._v("车牌识别")]),n("el-radio",{attrs:{size:"small",label:"barcode",border:""},model:{value:e.recon_option,callback:function(t){e.recon_option=t},expression:"recon_option"}},[e._v("二维码条码识别")])],1),n("el-col",{attrs:{span:6}},[n("el-upload",{staticClass:"upload-demo",attrs:{action:"/recon_pic","show-file-list":!1,data:e.postOption,"before-upload":e.onBeforeUpload}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"只能上传jpg/png文件",placement:"bottom"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onUpload}},[e._v("开始识别")])],1)],1)],1),n("br"),n("el-card",[this.file?n("h4",[e._v("图片："+e._s(this.file.name))]):n("h4",[e._v("请选择图片识别")]),e._l(e.result.text,(function(t){return n("div",{key:t},[n("p",[e._v(e._s(t))])])})),e._l(e.result.pic,(function(e){return n("div",{key:e},[n("img",{attrs:{src:"data:image/png;base64,"+e}})])}))],2)],1)},l=[],i=(n("d3b7"),n("bc3a")),c=n.n(i),p={name:"UploadImg",data:function(){return{recon_option:"car",file:null,result:{}}},computed:{postOption:function(){return{recon_option:this.recon_option}}},methods:{onBeforeUpload:function(e){return this.file=e,this.result={},this._initPromResolve()},_initPromResolve:function(){var e=this;return this.prom=new Promise((function(t){return e.promResolve=t}))},onUpload:function(){var e=this;if(this.recon_option)if(this.file){var t=this.$loading({text:"正在识别..."}),n=new FormData;n.append("recon_option",this.recon_option),n.append("image",this.file),c.a.post("/recon_pic",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){t.close(),e.result=n.data,!e.result|200!=e.result.code?e.$message({showClose:!0,message:e.result.message,type:"error"}):e.$message({showClose:!0,message:"识别成功",type:"success"})})).catch((function(n){t.close(),e.$message({showClose:!0,message:n,type:"error"})}))}else this.$message({showClose:!0,message:"请选择文件",type:"warning"});else this.$message({showClose:!0,message:"请选择识别类型",type:"warning"})}}},u=p,f=n("2877"),d=Object(f["a"])(u,s,l,!1,null,null,null),m=d.exports,h={name:"App",components:{UploadImg:m}},v=h,_=(n("034f"),Object(f["a"])(v,r,a,!1,null,null,null)),b=_.exports,g=n("5c96"),y=n.n(g);n("0fae");o["default"].use(y.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.0f8d870a.js.map