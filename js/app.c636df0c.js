(function(){"use strict";var __webpack_modules__={3700:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={name:"CalculatorComp",data(){return{isActive:!1,decimalAdded:!1,display:"",prevOps:0,calculatorValue:"",n:"",isResult:!1,btnArr:[{number:"7",is_active:!1},{number:"8",is_active:!1},{number:"9",is_active:!1},{number:"+",is_active:!1},{number:"4",is_active:!1},{number:"5",is_active:!1},{number:"6",is_active:!1},{number:"-",is_active:!1},{number:"1",is_active:!1},{number:"2",is_active:!1},{number:"3",is_active:!1},{number:"*",is_active:!1},{number:"0",is_active:!1},{number:".",is_active:!1},{number:"%",is_active:!1},{number:"/",is_active:!1},{number:"=",is_active:!1},{number:"C",is_active:!1}],previousCalculatorValue:"",operator:""}},methods:{action(n,index){this.btnArr.some((e=>e.is_active=!1)),this.btnArr[index].is_active=!0,isNaN(n)&&"."!==n||(this.isResult?(this.calculatorValue=n,this.isResult=!1):this.calculatorValue+=n+""),0==this.decimalAdded&&(0!=this.prevOps?this.display="0.":this.display+=".",this.decimalAdded=!0),"C"===n&&(this.calculatorValue=""),"%"===n&&(this.calculatorValue=this.calculatorValue/100+""),["+","-","*","/"].includes(n)&&(this.operator=n,this.previousCalculatorValue=this.calculatorValue,this.calculatorValue=""),"="===n&&(this.calculatorValue=eval(this.previousCalculatorValue+this.operator+this.calculatorValue),this.previousCalculatorValue="",this.operator=null,this.isResult=!0),console.log(this.calculatorValue)}}}},9799:function(e,r,t){var _=t(9242),a=t(3396);function u(e,r,t,_,u,i){const c=(0,a.up)("CalculatorComp"),n=(0,a.up)("ProductComp"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a.Wm)(n),(0,a.Wm)(o)],64)}var i=t(7139);const c=e=>((0,a.dD)("data-v-eb245526"),e=e(),(0,a.Cn)(),e),n={class:"navbar"},o=c((()=>(0,a._)("p",{class:"item-menu"}," Calculator ",-1))),s=c((()=>(0,a._)("p",{class:"item-menu"}," ProductComp ",-1))),l=c((()=>(0,a._)("h1",{class:"header"},"Calculator",-1))),p={class:"output"},b={class:"outputCalc"},v={class:"btn"},d=["onClick"];function m(e,r,t,_,u,c){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[(0,a.Wm)(m,{class:"link",to:"/"},{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(m,{class:"link",to:"/ProductComp"},{default:(0,a.w5)((()=>[s])),_:1})]),l,(0,a._)("div",p,[(0,a._)("div",b,(0,i.zw)(u.calculatorValue||u.operator||0),1)]),(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.btnArr,((e,r)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["button",{operator:["C","+","-","*","/","%","="].includes(e.number),active:e.is_active}]),key:r},[(0,a._)("div",{class:"btn",onClick:t=>c.action(e.number,r)},(0,i.zw)(e.number),9,d)],2)))),128))])],64)}var w=t(3700),h=t(89);const f=(0,h.Z)(w.Z,[["render",m],["__scopeId","data-v-eb245526"]]);var k=f;const C={class:"services"},q=(0,a._)("h1",null,"Product",-1),g=[q];function V(e,r,t,_,u,i){return(0,a.wg)(),(0,a.iD)("div",C,g)}var O={name:"ProductComp",data(){return{msg:"Product page"}}};const y=(0,h.Z)(O,[["render",V]]);var x=y,P={name:"App",components:{CalculatorComp:k,ProductComp:x}};const A=(0,h.Z)(P,[["render",u]]);var j=A,D=t(2483);const W=[{path:"/",component:k},{path:"/ProductComp",component:x}],Z=(0,D.p7)({history:(0,D.PO)(),routes:W});var R=Z;const H=(0,_.ri)(j);H.use(R),H.mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(r,t,_,a){if(!t){var u=1/0;for(o=0;o<e.length;o++){t=e[o][0],_=e[o][1],a=e[o][2];for(var i=!0,c=0;c<t.length;c++)(!1&a||u>=a)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[c])}))?t.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(o--,1);var n=_();void 0!==n&&(r=n)}}return r}a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[t,_,a]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,t){var _,a,u=t[0],i=t[1],c=t[2],n=0;if(u.some((function(r){return 0!==e[r]}))){for(_ in i)__webpack_require__.o(i,_)&&(__webpack_require__.m[_]=i[_]);if(c)var o=c(__webpack_require__)}for(r&&r(t);n<u.length;n++)a=u[n],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(o)},t=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(9799)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.c636df0c.js.map