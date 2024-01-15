"use strict";(self["webpackChunknvs_v5"]=self["webpackChunknvs_v5"]||[]).push([[965],{5139:function(t,e,s){s.d(e,{Z:function(){return c}});var i,o,n=s(3296),a=s(1908),r={name:"AppBarItem",render(t){return t(n.Z,{scopedSlots:{default:({hover:e})=>t(a.Z,{attrs:this.$attrs,class:{"black--text":!e,"white--text blue elevation-12":e},props:{activeClass:"",dark:e,link:!0,...this.$attrs}},this.$slots.default)}})}},l=r,h=s(1001),d=(0,h.Z)(l,i,o,!1,null,null,null),c=d.exports},4155:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=s(5132),o=s(7179),n=s(5057),a=s(248),r=s(8421),l=s(92),h=s(3432),d=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({attrs:s,on:a}){return[e(o.Z,t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),a),["CUSTOMER"!=t.profile&&0!=t.allExpired.length?e(i.Z,{attrs:{bordered:"",color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[e("span",[t._v(t._s(t.allExpired.length))])]},proxy:!0}],null,!0)},[e(h.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(n.Z,t._g({},s),[t._v(" mdi-clock ")])]}}],null,!0)},[t._v(" AETs vencidas ")])],1):"CUSTOMER"===t.profile&&0!=t.customerExpired.length?e(i.Z,{attrs:{bordered:"",color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[e("span",[t._v(t._s(t.customerExpired.length))])]},proxy:!0}],null,!0)},[e(h.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(n.Z,t._g({},s),[t._v(" mdi-clock ")])]}}],null,!0)},[t._v(" AETs vencidas ")])],1):e(h.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(n.Z,t._g({},s),[t._v(" mdi-clock ")])]}}],null,!0)},[t._v(" AETs vencidas ")])],1)]}}])},["CUSTOMER"!=t.profile&&0!=t.allExpired.length?e(a.Z,{attrs:{flat:"",nav:"",dense:""}},t._l(t.allExpired,(function(s,i){return e("app-bar-item",{key:i,attrs:{disabled:""}},[e(r.km,[e(r.V9,[t._v(t._s(s))])],1)],1)})),1):"CUSTOMER"===t.profile&&0!=t.customerExpired.length?e(a.Z,{attrs:{flat:"",nav:"",dense:""}},t._l(t.customerExpired,(function(s,i){return e("app-bar-item",{key:i,attrs:{disabled:""}},[t._v(" "+t._s(s)+" ")])})),1):e(a.Z,{attrs:{disabled:""}},[e("app-bar-item",[t._v("Não há licenças expiradas")])],1)],1)},c=[],u=(s(560),s(5139)),p={name:"ExpiredallExpications",components:{AppBarItem:u.Z},data:()=>({customerExpired:[],allExpired:[]}),computed:{profile(){return window.sessionStorage.profile},razaoSocial(){return window.sessionStorage.razaosocial}},created(){this.fetchExpired()},methods:{fetchExpired(){return fetch("https://sheetdb.io/api/v1/afxq0nl1f0gvg").then((t=>t.json())).then((t=>{let e=t.filter((t=>"VENCIDA"===t.STATUSAET)),s=t.filter((t=>t.EMPRESA===this.razaoSocial&&"VENCIDA"===t.STATUSAET));e.forEach((t=>this.allExpired.push(t.EMPRESA+" - Licença ID "+t.ID+" vencida"))),s.forEach((t=>this.customerExpired.push("AET "+t.AET+" - Vencida")))}))}}},f=p,v=s(1001),g=(0,v.Z)(f,d,c,!1,null,null,null),m=g.exports},5132:function(t,e,s){s.d(e,{Z:function(){return c}});s(560);var i=s(5057),o=s(8914),n=s(3276),a=s(6470),r=s(3599),l=s(8386),h=s(4987),d=s(1050),c=(0,h.Z)(o.Z,(0,l.d)(["left","bottom"]),n.Z,a.Z,r.Z).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,d.kb)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const t=(0,d.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(i.Z,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],s=[(0,d.z9)(this)],{"aria-atomic":i,"aria-label":o,"aria-live":n,role:a,title:r,...l}=this.$attrs;return this.inline&&this.left?s.unshift(e):s.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},s)}})},3296:function(t,e,s){var i=s(4019),o=s(6470),n=s(4987),a=s(6596);e.Z=(0,n.Z)(i.Z,o.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,a.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,a.Kd)("v-hover should only contain a single element",this),t)}})},248:function(t,e,s){s.d(e,{Z:function(){return o}});s(560);var i=s(9868),o=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},3432:function(t,e,s){s.d(e,{Z:function(){return c}});var i=s(5840),o=s(8914),n=s(4019),a=s(2524),r=s(7482),l=s(1050),h=s(6596),d=s(4987),c=(0,d.Z)(o.Z,n.Z,a.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||s?o=i+t.width/2-e.width/2:(this.left||this.right)&&(o=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=s+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),!1===this.attach&&(i+=this.pageYOffset),`${this.calcYOverflow(i)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,l.kb)(this.maxWidth),minWidth:(0,l.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,l.sp)(this,"activator",!0)&&(0,h.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=i.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},3599:function(t,e,s){var i=s(144);e.Z=i.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=965.700730e0.js.map