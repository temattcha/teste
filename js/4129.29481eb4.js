"use strict";(self["webpackChunknvs_v5"]=self["webpackChunknvs_v5"]||[]).push([[4129],{5139:function(t,e,s){s.d(e,{Z:function(){return h}});var i,n,o=s(3296),r=s(1908),a={name:"AppBarItem",render(t){return t(o.Z,{scopedSlots:{default:({hover:e})=>t(r.Z,{attrs:this.$attrs,class:{"black--text":!e,"white--text blue elevation-12":e},props:{activeClass:"",dark:e,link:!0,...this.$attrs}},this.$slots.default)}})}},l=a,d=s(1001),u=(0,d.Z)(l,i,n,!1,null,null,null),h=u.exports},84:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=s(7179),n=s(4192),o=s(5057),r=s(248),a=s(8421),l=s(92),d=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({attrs:s,on:n}){return[e(i.Z,t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),n),[e(o.Z,[t._v(" mdi-account ")])],1)]}}])},[e(r.Z,{attrs:{tile:!1,flat:"",nav:""}},[t._l(t.profile,(function(s,i){return[s.divider?e(n.Z,{key:`divider-${i}`,staticClass:"mb-2 mt-2"}):e("app-bar-item",{key:`item-${i}`,attrs:{to:s.to}},[e(a.V9,{domProps:{textContent:t._s(s.title)}})],1)]}))],2)],1)},u=[],h=s(5139),v={name:"DefaultAccount",components:{AppBarItem:h.Z},data:()=>({profile:[{title:"Perfil",to:"/profile/"},{title:"Configurações"},{divider:!0},{title:"Sair",icon:"mdi-power",to:"/"}]})},c=v,p=s(1001),f=(0,p.Z)(c,d,u,!1,null,null,null),m=f.exports},4192:function(t,e,s){s.d(e,{Z:function(){return n}});var i=s(3276),n=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},3296:function(t,e,s){var i=s(4019),n=s(6470),o=s(4987),r=s(6596);e.Z=(0,o.Z)(i.Z,n.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,r.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,r.Kd)("v-hover should only contain a single element",this),t)}})},248:function(t,e,s){s.d(e,{Z:function(){return n}});s(560);var i=s(9868),n=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})}}]);
//# sourceMappingURL=4129.29481eb4.js.map