(function(e){function t(t){for(var o,r,u=t[0],c=t[1],b=t[2],y=0,i=[];y<u.length;y++)r=u[y],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&i.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(i.length)i.shift()();return l.push.apply(l,b||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(o=!1)}o&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},l=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/book-of-war/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var s=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},8783:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t){var n=Object(o["O"])("router-view");return Object(o["F"])(),Object(o["k"])(n)}const l={};l.render=a;var r=l,u=n("6c02"),c=(n("b0c0"),n("d3b7"),n("ddb0"),Object(o["hb"])("data-v-411b1698"));Object(o["I"])("data-v-411b1698");var b={class:"home"},s=Object(o["o"])("h2",null,"内容替换",-1),y={class:"contentBox"},i={class:"arrowBox"},d=Object(o["n"])("生成key "),m={class:"keysBox"},p={key:0},f={key:1,class:"noConent"},h={class:"tools"},S=Object(o["o"])("dt",null,"边界符号：",-1),O=Object(o["o"])("dt",null,"边界符重复次数：",-1),g=Object(o["n"])("替换"),j={class:"example"},v={class:"dialog-footer"},R=Object(o["n"])("取 消"),k=Object(o["n"])("拷贝到剪切板");Object(o["G"])();var x,B,C=c((function(e,t,n,a,l,r){var u,x,B=Object(o["O"])("el-button"),C=Object(o["O"])("el-input"),w=Object(o["O"])("el-option"),M=Object(o["O"])("el-select"),V=Object(o["O"])("el-dialog");return Object(o["F"])(),Object(o["k"])("div",b,[s,Object(o["o"])("div",y,[Object(o["eb"])(Object(o["o"])("textarea",{class:"content","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t}),onInput:t[2]||(t[2]=function(){return e.onContentChange&&e.onContentChange.apply(e,arguments)}),placeholder:e.example},null,40,["placeholder"]),[[o["Z"],e.content]]),Object(o["o"])("div",i,[Object(o["o"])(B,{icon:"el-icon-arrow-right",round:"",size:"mini",disabled:""}),d]),Object(o["o"])("div",m,[null!==(u=e.replaceData)&&void 0!==u&&u.length?(Object(o["F"])(),Object(o["k"])("ul",p,[(Object(o["F"])(!0),Object(o["k"])(o["b"],null,Object(o["M"])(e.replaceData,(function(e,t){return Object(o["F"])(),Object(o["k"])("li",{key:t,class:"keyItem"},[Object(o["o"])("span",null,Object(o["S"])(e.key),1),Object(o["o"])(C,{type:"text",size:"medium",modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t},placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])})),128))])):(Object(o["F"])(),Object(o["k"])("div",f," 请先在内容区域输入需要替换的文本内容，识别成功后，将自动生成key关键词 "))])]),Object(o["o"])("div",h,[Object(o["o"])("dl",null,[S,Object(o["o"])("dd",null,[Object(o["o"])(M,{modelValue:e.curBoundarySymbol,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.curBoundarySymbol=t}),placeholder:"请选择",onChange:e.onChangeSymbol},{default:c((function(){return[(Object(o["F"])(!0),Object(o["k"])(o["b"],null,Object(o["M"])(e.boundarySymbols,(function(e){return Object(o["F"])(),Object(o["k"])(w,{key:e.name,label:e.rules.symbolL+"key"+e.rules.symbolR,value:e.name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])])]),Object(o["o"])("dl",null,[O,Object(o["o"])("dd",null,[Object(o["o"])(M,{modelValue:e.boundarySymbolRepeat,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.boundarySymbolRepeat=t}),placeholder:"请选择",onChange:e.onChangeSymbolRepeat},{default:c((function(){return[(Object(o["F"])(),Object(o["k"])(o["b"],null,Object(o["M"])(5,(function(e){return Object(o["o"])(w,{key:e,label:e,value:e},null,8,["label","value"])})),64))]})),_:1},8,["modelValue","onChange"])])]),Object(o["o"])(B,{type:"primary",onClick:e.handelReplace,disabled:!(null!==(x=e.keys)&&void 0!==x&&x.length)},{default:c((function(){return[g]})),_:1},8,["onClick","disabled"])]),Object(o["eb"])(Object(o["o"])("div",j,[Object(o["o"])("p",null,Object(o["S"])(e.example),1)],512),[[o["ab"],0]]),Object(o["o"])(V,{title:"提示",modelValue:e.centerDialogVisible,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.centerDialogVisible=t}),width:"30%","destroy-on-close":"",center:""},{footer:c((function(){return[Object(o["o"])("span",v,[Object(o["o"])(B,{onClick:t[5]||(t[5]=function(t){return e.centerDialogVisible=!1})},{default:c((function(){return[R]})),_:1}),Object(o["o"])(B,{type:"primary",onClick:e.copyToClipboard},{default:c((function(){return[k]})),_:1},8,["onClick"])])]})),default:c((function(){return[Object(o["o"])("span",null,Object(o["S"])(e.result),1)]})),_:1},8,["modelValue"])])})),w=n("5530"),M=n("1da1"),V=(n("96cf"),n("159b"),n("15fd")),D=n("d4ec"),E=(n("4d63"),n("ac1f"),n("25f0"),n("1276"),n("a9e3"),n("d81d"),n("99af"),n("466d"),n("4de4"),n("a630"),n("3ca3"),n("6062"),n("5319"),n("a15b"),["cur"]);(function(e){e[e["{}"]=1]="{}",e[e["[]"]=2]="[]",e[e["()"]=3]="()",e[e["（）"]=4]="（）",e[e["<>"]=5]="<>",e[e["《》"]=6]="《》",e[e["【】"]=7]="【】",e[e["/"]=8]="/",e[e["&"]=9]="&"})(x||(x={})),function(e){e[e["single"]=1]="single",e[e["double"]=2]="double"}(B||(B={}));x["{}"];var _=function e(t){var n=this;Object(D["a"])(this,e),this.baseMatchRoule=".",this.excludeMatchRoulesStr="",this.boundarySymbolRepeat=2,this.defaultBoundarySymbols=[],this.curBoundarySymbol=this.defaultBoundarySymbols[0],this.keys=null,this.example="",this.isChangeContent=!1,this.defaultSymbolsBase=[],this.regFun=function(e){return new RegExp(n.curBoundarySymbol.rules.regL+e+n.curBoundarySymbol.rules.regR,"g")},this.init=function(){n.excludeMatchRoulesGen(),n.defaultSymbolsBaseGen(),n.defaultBoundarySymbolsGen(),n.curBoundarySymbol=n.defaultBoundarySymbols[0],n.boundarySymbolMacth(),n.genExample(),n.genKeys()},this.setContent=function(e){n.content=n.result=e,n.isChangeContent=!0,n.genKeys()},this.setBoundarySymbolRepeat=function(e){n.boundarySymbolRepeat=e,n.defaultBoundarySymbolsGen(),n.boundarySymbolMacth(),n.genExample(),n.genKeys()},this.setBoundarySymbol=function(e){n.boundarySymbol=e,n.boundarySymbolMacth(),n.genExample(),n.genKeys()},this.defaultSymbolsBaseGen=function(){var e=[],t=[],o=[];for(var a in x)if(isNaN(a)){var l=a.split("");t.push({cur:a,left:l[0],right:2===l.length?l[1]:l[0]})}else e.push(Number(a));o=t.map((function(e,t){var n=Object(w["a"])(Object(w["a"])({},e),{},{name:x[e.cur],type:e.left===e.right?B["single"]:B["double"]}),o=(n.cur,Object(V["a"])(n,E));return o})),n.defaultSymbolsBase=o},this.defaultBoundarySymbolsGen=function(){n.defaultBoundarySymbols=[],n.defaultSymbolsBase.forEach((function(e){n.defaultBoundarySymbols.push({name:e.name,rules:{type:e.type,like:"".concat(n.baseMatchRoule,"[^\\").concat(e.left,"\\").concat(e.right).concat(n.excludeMatchRoulesStr,"]*"),ruleL:"(?<=\\".concat(e.left,"{").concat(n.boundarySymbolRepeat,"})"),ruleR:"(?=\\".concat(e.right,"{").concat(n.boundarySymbolRepeat,"})"),symbolL:n.genRepeatSymbolStr(e.left),symbolR:n.genRepeatSymbolStr(e.right),regL:"\\".concat(e.left,"{").concat(n.boundarySymbolRepeat,"}"),regR:"\\".concat(e.right,"{").concat(n.boundarySymbolRepeat,"}")}})}))},this.boundarySymbolMacth=function(){var e=!1;n.defaultBoundarySymbols.forEach((function(t){if(t.name===n.boundarySymbol)return n.curBoundarySymbol=t,void(e=!0)})),e||n.boundarySymbolGen()},this.boundarySymbolGen=function(){"string"===typeof n.boundarySymbol?n.boundarySymbol:n.boundarySymbol=n.boundarySymbol.toString(),n.curBoundarySymbol={name:n.boundarySymbol,rules:{type:B["single"],like:"".concat(n.baseMatchRoule,"[^\\").concat(n.boundarySymbol).concat(n.excludeMatchRoulesStr,"]*"),ruleL:"(?<=\\".concat(n.boundarySymbol,"{").concat(n.boundarySymbolRepeat,"})"),ruleR:"(?=\\".concat(n.boundarySymbol,"{").concat(n.boundarySymbolRepeat,"})"),symbolL:n.genRepeatSymbolStr(n.boundarySymbol),symbolR:n.genRepeatSymbolStr(n.boundarySymbol),regL:"\\".concat(n.boundarySymbol,"{").concat(n.boundarySymbolRepeat,"}"),regR:"\\".concat(n.boundarySymbol,"{").concat(n.boundarySymbolRepeat,"}")}}},this.excludeMatchRoulesGen=function(){n.excludeMatchRoules.length&&n.excludeMatchRoules.forEach((function(e){n.excludeMatchRoulesStr+="\\"+e}))},this.genKeys=function(){var e=n.content.match(new RegExp(n.curBoundarySymbol.rules.ruleL+n.curBoundarySymbol.rules.like+n.curBoundarySymbol.rules.ruleR,"g"));if(n.curBoundarySymbol.rules.type===B["single"]){var t=null===e||void 0===e?void 0:e.filter((function(e,t){return t%2===0}));n.keys=t||null}else n.keys=e},this.getKeys=function(){return n.keys},this.genResult=function(e){return n.replaceData=e,n.keys&&e&&Array.from(new Set(n.keys)).forEach((function(e){var t,o;null!==(t=n.replaceData)&&void 0!==t&&t.hasOwnProperty(e)&&n.replaceData[e]&&(n.result=n.result.replace(n.regFun(e),null===(o=n.replaceData)||void 0===o?void 0:o[e]))})),n.result},this.setKeyValue=function(e,t){Array.from(new Set(n.keys)).forEach((function(e){e===e&&(n.result=n.result.replace(n.regFun(e),t))}))},this.genRepeatSymbolStr=function(e){for(var t=[e],o=1;o<n.boundarySymbolRepeat;o++)t.push(e);return t.join("")},this.genExample=function(){var e=n.curBoundarySymbol.rules.symbolL,t=n.curBoundarySymbol.rules.symbolR,o="示例：我叫".concat(e,"name").concat(t,"，性别").concat(e,"gender").concat(t,"，今天").concat(e,"age").concat(t,"岁，来自").concat(e,"address").concat(t,"，目前工作是").concat(e,"work").concat(t);n.example=o,n.isChangeContent||(n.content=n.result=o)},this.getExample=function(){return n.example};var o=t.content,a=t.boundarySymbolRepeat,l=void 0===a?2:a,r=t.boundarySymbol,u=void 0===r?x["{}"]:r,c=t.excludeMatchRoules,b=void 0===c?[]:c,s=t.replaceData,y=void 0===s?null:s;this.result=this.content=o,this.boundarySymbolRepeat=l,this.boundarySymbol=u,this.excludeMatchRoules=b,this.replaceData=y,this.init()},F=n("7864"),G=n("e6a9"),L=n.n(G),K=Object(o["p"])({name:"Home",setup:function(){var e=L()(),t=e.toClipboard,n=null,a=Object(o["J"])({content:"",result:"",keys:null,replaceData:[],example:"",curBoundarySymbol:x["{}"],boundarySymbolRepeat:2,centerDialogVisible:!1,boundarySymbols:[]}),l=Object(o["J"])({content:a.content,curBoundarySymbol:a.curBoundarySymbol,boundarySymbolRepeat:a.boundarySymbolRepeat}),r=function(e){n||i(),n&&(n.setContent(a.content),y())},u=function(e){if(n||i(),n){n.setBoundarySymbol(a.curBoundarySymbol);var t=a.example;a.example=n.getExample(),a.content===t&&(a.content=a.example),y()}},c=function(e){if(n||i(),n){n.setBoundarySymbolRepeat(a.boundarySymbolRepeat),a.boundarySymbols=n.defaultBoundarySymbols;var t=a.example;a.example=n.getExample(),a.content===t&&(a.content=a.example),y()}},b=function(){if(n||i(),n){var e={};a.replaceData.forEach((function(t){e[t.key]=t.value})),a.result=n.genResult(e),a.centerDialogVisible=!0}},s=function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(a.result);case 3:F["a"].success({message:"复制成功",type:"success"}),a.centerDialogVisible=!1,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),F["a"].error({message:e.t0,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){n&&(a.keys=n.getKeys()),a.replaceData=[],a.keys&&a.keys.forEach((function(e){a.replaceData.push({key:e,value:""})}))},i=function(){n=new _(Object(w["a"])({},l)),a.example=n.getExample()};return Object(o["C"])((function(){i(),n&&(a.boundarySymbols=n.defaultBoundarySymbols,a.content=a.example=n.getExample(),y(),n.defaultSymbolsBaseGen())})),Object(w["a"])(Object(w["a"])({},Object(o["V"])(a)),{},{onContentChange:r,handelReplace:b,copyToClipboard:s,onChangeSymbol:u,onChangeSymbolRepeat:c})}});n("f659");K.render=C,K.__scopeId="data-v-411b1698";var P=K,U=[{path:"/",name:"Home",component:P}],I=Object(u["a"])({history:Object(u["b"])("/book-of-war/"),routes:U}),J=I,T=n("5502"),N=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}});n("7dd6");Object(o["j"])(r).use(N).use(J).use(F["b"]).mount("#app")},f659:function(e,t,n){"use strict";n("8783")}});
//# sourceMappingURL=app.ccdc0c46.js.map