"use strict";(self["webpackChunknvs_v5"]=self["webpackChunknvs_v5"]||[]).push([[8766],{8852:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=i(4568),s=i(7179),d=i(3385),l=i(5223),o=i(6072),n=i(4437),m=i(6035),A=i(9841),r=i(7345),c=i(9789),u=i(6904),h=i(5057),T=i(92),O=i(5294),I=i(6883),E=i(5234),p=i(5251),N=i(5838),b=i(2370),C=function(){var e=this,t=e._self._c;return"true"===e.logado?t("div",[t("Transition",[e.showPost?t(a.Z,{staticStyle:{position:"absolute","z-index":"10"},attrs:{id:"successPostAlert",dismissible:"",prominent:"",type:"success"}},[t("strong",[e._v(e._s(e.frasesMotivacionais[e.fraseAleatoria]))]),e._v(" Pedido cadastrado com sucesso! ")]):e._e(),e.showUpdate?t(a.Z,{staticStyle:{position:"absolute top: 10px left: 10px"},attrs:{id:"successUpdateAlert",dismissible:"",prominent:"",type:"success"}},[t("strong",[e._v(e._s(e.frasesMotivacionais[e.fraseAleatoria]))]),e._v(" Pedido atualizado com sucesso! ")]):e._e(),e.showError?t(a.Z,{staticStyle:{position:"absolute","z-index":"10",width:"80vw"},attrs:{id:"errorAlert",dismissible:"",prominent:"",type:"error"}},[t("strong",[e._v("Erro desconhecido!")]),e._v(" A página será atualizada. ")]):e._e()],1),t(A.Z,{attrs:{headers:e.headers,items:e.licences,search:e.search,"footer-props":{itemsPerPageOptions:[10,30,50]},"sort-by":"ID","sort-desc":""},scopedSlots:e._u([{key:"item.STATUS",fn:function({item:i}){return[t(I.Z,{staticClass:"d-flex mt-3 pt-0 mb-3 pb-0 text-subtitle-1 font-weight-medium",attrs:{id:"status",items:e.statuses2,rounded:"",light:"","background-color":e.getColor(i.STATUS),name:"data[STATUS]","hide-details":"true"},on:{change:function(t){return e.saveStatus(i)}},model:{value:i.STATUS,callback:function(t){e.$set(i,"STATUS",t)},expression:"item.STATUS"}})]}},{key:"top",fn:function(){return[t(N.Z,{attrs:{flat:""}},[t(b.qW,{staticClass:"d-none d-sm-flex font-weight-bold text-sm-h5"},[e._v(" Lançamentos ")]),t(E.Z),t(p.Z,{attrs:{color:"blue","append-icon":"mdi-magnify",label:"Procurar","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(E.Z),t(c.Z,{attrs:{id:"new item section","max-width":"95vw"},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(s.Z,e._g(e._b({staticClass:"mb-2 ms-md-0 ms-5",attrs:{id:"newItemBtn",color:"blue",dark:"",sm:"small"},on:{click:function(t){e.greaterId(),e.disabledField(),e.setTimeNow(),e.maskCheckbox(),e.setComercial()},focus:function(t){e.showCloneBtn=!1},mouseover:function(t){e.checkboxNF=!1}}},"v-btn",a,!1),i),[e._v(" Novo Lançamento ")])]}}],null,!1,76651877),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(d.Z,{attrs:{id:"item card"}},[t(u.Z,{ref:"form",staticClass:"form",attrs:{id:"sheetdb-form",method:"POST",action:"https://sheetdb.io/api/v1/afxq0nl1f0gvg"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.EB,[t("span",{staticClass:"text-h4 text-md-h3"},[e._v(e._s(e.formTitle))])]),t(l.ZB,[t(m.Z,[t(O.Z,[t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:e.editedItem.MÊS,expression:"editedItem.MÊS"}],attrs:{id:"MÊS",type:"text",name:"data[MÊS]"},domProps:{value:e.editedItem.MÊS},on:{input:function(t){t.target.composing||e.$set(e.editedItem,"MÊS",t.target.value)}}}),t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:e.editedItem.ID,expression:"editedItem.ID"}],attrs:{id:"ID",type:"text",name:"data[ID]"},domProps:{value:e.editedItem.ID},on:{input:function(t){t.target.composing||e.$set(e.editedItem,"ID",t.target.value)}}}),t(n.Z,{attrs:{cols:"12",sm:"3",md:"4"}},[t(p.Z,{staticClass:"grey-label",attrs:{color:"blue",outlined:"",rules:[()=>!!e.editedItem.EMPRESA||"Campo Obrigatório"],required:"",disabled:e.isDisabled,autofocus:"",name:"data[EMPRESA]",label:"Empresa"},on:{keyup:function(t){e.editedItem.EMPRESA=e.editedItem.EMPRESA.toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.substring(1))).join(" ")}},model:{value:e.editedItem.EMPRESA,callback:function(t){e.$set(e.editedItem,"EMPRESA",t)},expression:"editedItem.EMPRESA"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(p.Z,{staticClass:"grey-label",attrs:{id:"solicitante",color:"blue",outlined:"",name:"data[SOLICITANTE]",label:"Solicitante"},on:{keyup:function(t){e.editedItem.SOLICITANTE=e.editedItem.SOLICITANTE.toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.substring(1))).join(" ")}},model:{value:e.editedItem.SOLICITANTE,callback:function(t){e.$set(e.editedItem,"SOLICITANTE",t)},expression:"editedItem.SOLICITANTE"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"2"}},[t(o.Z,{staticClass:"ma-0 pa-0",attrs:{value:"TAXA",label:"Taxa",height:"15px"},model:{value:e.editedItem.SOLICITANTE,callback:function(t){e.$set(e.editedItem,"SOLICITANTE",t)},expression:"editedItem.SOLICITANTE"}}),t(o.Z,{staticClass:"ma-0 pa-0",attrs:{value:"Não Saiu Nada",label:"Não Saiu Nada",height:"15px"},model:{value:e.editedItem.SOLICITANTE,callback:function(t){e.$set(e.editedItem,"SOLICITANTE",t)},expression:"editedItem.SOLICITANTE"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(I.Z,{ref:"comercial",staticClass:"grey-label",attrs:{color:"blue",items:e.salepersons,rules:[()=>!!e.editedItem.COMERCIAL||"Campo Obrigatório"],required:"",disabled:e.isDisabled,readonly:"","prepend-icon":"mdi-account-outline",name:"data[COMERCIAL]",label:"Comercial",placeholder:"Selecione",outlined:""},model:{value:e.editedItem.COMERCIAL,callback:function(t){e.$set(e.editedItem,"COMERCIAL",t)},expression:"editedItem.COMERCIAL"}})],1)],1),t(O.Z,[t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(T.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"grey-label mb-0 pb-0",attrs:{id:"data[DATA]",color:"blue",name:"data[DATA]",label:"Lançamento da Taxa",disabled:e.isDisabled,readonly:"","hide-details":"true",outlined:"","prepend-icon":"mdi-calendar-month"},model:{value:e.editedItem.DATA,callback:function(t){e.$set(e.editedItem,"DATA",t)},expression:"editedItem.DATA"}},"v-text-field",a,!1),i))]}}],null,!1,1176421264)}),t(o.Z,{staticClass:"mb-1 pb-0",attrs:{label:"Veículo Não Emplacado",disabled:e.isDisabled,"prepend-icon":"mdi-none","hide-details":"auto"},on:{click:function(t){return e.maskCheckbox()},blur:function(t){return e.maskCheckbox()}},model:{value:e.checkboxNF,callback:function(t){e.checkboxNF=t},expression:"checkboxNF"}}),t(p.Z,{directives:[{name:"mask",rawName:"v-mask",value:e.plateMask,expression:"plateMask"}],staticClass:"grey-label mt-0 pt-0",attrs:{id:"placa",color:"blue",type:"text",outlined:"",rules:[()=>e.checkboxNF?e.editedItem.PLACA.length>=4||"NF incompleta":e.editedItem.PLACA.length>=8||"Placa Incompleta"],required:"","prepend-icon":"mdi-truck-outline",name:"data[PLACA]",label:"Placa",onkeyup:"this.value = this.value.toUpperCase()"},model:{value:e.editedItem.PLACA,callback:function(t){e.$set(e.editedItem,"PLACA",t)},expression:"editedItem.PLACA"}}),t(I.Z,{ref:"estado",staticClass:"grey-label",attrs:{id:"estado",color:"blue",items:e.states,rules:[()=>!!e.editedItem.ESTADO||"Campo Obrigatório"],required:"",disabled:e.isDisabled,"prepend-icon":"mdi-map-marker-outline",name:"data[ESTADO]",label:"Estado",placeholder:"Selecione",outlined:""},model:{value:e.editedItem.ESTADO,callback:function(t){e.$set(e.editedItem,"ESTADO",t)},expression:"editedItem.ESTADO"}}),t(I.Z,{staticClass:"grey-label",attrs:{id:"status",color:"blue",items:"ADMIN"===e.profile?e.statusesAdmin:e.statuses,rules:[()=>!!e.editedItem.STATUS||"Campo Obrigatório"],required:"","prepend-icon":e.getIcon(e.editedItem.STATUS),solo:"",rounded:"",light:"","background-color":e.getColor(e.editedItem.STATUS),name:"data[STATUS]",label:"Status",placeholder:"Selecione"},model:{value:e.editedItem.STATUS,callback:function(t){e.$set(e.editedItem,"STATUS",t)},expression:"editedItem.STATUS"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(I.Z,{staticClass:"grey-label",attrs:{color:"blue",items:e.banks,outlined:"",rules:e.rulesBANCO,required:"",disabled:e.bancoDisabled,"prepend-icon":"mdi-bank",name:"data[BANCO]",label:"Banco"},on:{change:function(t){return e.clientePagouRules()}},model:{value:e.editedItem.BANCO,callback:function(t){e.$set(e.editedItem,"BANCO",t)},expression:"editedItem.BANCO"}}),t(T.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"N/A"===e.editedItem.DATAPAGAMENTOTAXA?"N/A":"##/##/####",expression:"editedItem.DATAPAGAMENTOTAXA === 'N/A' ? 'N/A' : '##/##/####'"}],staticClass:"grey-label",attrs:{id:"dataPgTaxa",color:"blue",outlined:"",rules:e.rulesDATAPAGAMENTO,required:"",disabled:e.taxDateDisabled,"prepend-icon":"mdi-calendar-month",name:"data[DATAPAGAMENTOTAXA]",label:"Data Pagamento Taxa"},on:{blur:function(t){e.data=e.parseDate(e.editedItem.DATAPAGAMENTOTAXA)},change:function(t){"null"===e.tempPagamentoTaxa?e.editedItem.DATAPAGAMENTOTAXA=null:e.tempPagamentoTaxa=e.parseDate(e.editedItem.DATAPAGAMENTOTAXA)},click:function(t){"null"===e.tempPagamentoTaxa?e.editedItem.DATAPAGAMENTOTAXA=null:e.tempPagamentoTaxa=e.parseDate(e.editedItem.DATAPAGAMENTOTAXA)}},model:{value:e.editedItem.DATAPAGAMENTOTAXA,callback:function(t){e.$set(e.editedItem,"DATAPAGAMENTOTAXA",t)},expression:"editedItem.DATAPAGAMENTOTAXA"}},"v-text-field",a,!1),i))]}}],null,!1,3392492914)},[t(r.Z,{attrs:{"no-title":"",locale:"pt-BR"},model:{value:e.tempPagamentoTaxa,callback:function(t){e.tempPagamentoTaxa=t},expression:"tempPagamentoTaxa"}})],1),t(p.Z,{staticClass:"grey-label",attrs:{id:"custoTaxa",color:"blue",outlined:"",rules:e.rulesCUSTOTAXA,required:"",disabled:e.custoTaxaDisabled,"prepend-icon":"mdi-currency-usd",name:"data[CUSTOTAXA]",label:"Custo",oninput:"this.value = this.value.replace(/[^0-9,]/g, '').replace(/(\\..*)\\./g, '$1')"},model:{value:e.editedItem.CUSTOTAXA,callback:function(t){e.$set(e.editedItem,"CUSTOTAXA",t)},expression:"editedItem.CUSTOTAXA"}}),t(p.Z,{staticClass:"grey-label",attrs:{id:"numTaxa",color:"blue",outlined:"",rules:e.rulesNUMTAXA,required:"",disabled:e.numTaxaDisabled,"prepend-icon":"mdi-numeric",name:"data[NUMTAXA]",label:"Nº Taxa",oninput:"this.value = this.value.replace(/[^0-9/]/g, '')"},model:{value:e.editedItem.NUMTAXA,callback:function(t){e.$set(e.editedItem,"NUMTAXA",t)},expression:"editedItem.NUMTAXA"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(T.Z,{attrs:{"min-width":"auto","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"grey-label",attrs:{id:"emissaoAET",color:"blue",outlined:"",disabled:e.emissaoAetDisabled,"prepend-icon":"mdi-calendar-check",rules:[()=>10===e.editedItem.EMISSÃO.length||!e.editedItem.EMISSÃO.length||"Data Inválida"],required:"",name:"data[EMISSÃO]",label:"Emissão AET"},on:{blur:function(t){e.data=e.parseDate(e.editedItem.EMISSÃO)},change:function(t){"null"===e.tempEmissao?e.editedItem.EMISSÃO=null:e.tempEmissao=e.parseDate(e.editedItem.EMISSÃO)},click:function(t){"null"===e.tempEmissao?e.editedItem.EMISSÃO=null:e.tempEmissao=e.parseDate(e.editedItem.EMISSÃO)}},model:{value:e.editedItem.EMISSÃO,callback:function(t){e.$set(e.editedItem,"EMISSÃO",t)},expression:"editedItem.EMISSÃO"}},"v-text-field",a,!1),i))]}}],null,!1,2116157080)},[t(r.Z,{attrs:{"no-title":"",locale:"pt-BR"},model:{value:e.tempEmissao,callback:function(t){e.tempEmissao=t},expression:"tempEmissao"}})],1),t(T.Z,{attrs:{"min-width":"auto","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"grey-label",attrs:{id:"vencimentoAET",color:"blue",outlined:"",disabled:e.vencimentoAetDisabled,rules:[()=>10===e.editedItem.VENCIMENTO.length||!e.editedItem.VENCIMENTO.length||"Data Inválida"],required:"","prepend-icon":"mdi-calendar-alert",name:"data[VENCIMENTO]",label:"Vencimento AET"},on:{blur:function(t){e.data=e.parseDate(e.editedItem.VENCIMENTO)},change:function(t){"null"===e.tempVencimento?e.editedItem.VENCIMENTO=null:e.tempVencimento=e.parseDate(e.editedItem.VENCIMENTO)},click:function(t){"null"===e.tempVencimento?e.editedItem.VENCIMENTO=null:e.tempVencimento=e.parseDate(e.editedItem.VENCIMENTO)}},model:{value:e.editedItem.VENCIMENTO,callback:function(t){e.$set(e.editedItem,"VENCIMENTO",t)},expression:"editedItem.VENCIMENTO"}},"v-text-field",a,!1),i))]}}],null,!1,2022365232)},[t(r.Z,{attrs:{"no-title":"",locale:"pt-BR"},model:{value:e.tempVencimento,callback:function(t){e.tempVencimento=t},expression:"tempVencimento"}})],1),t(p.Z,{staticClass:"grey-label",attrs:{id:"AET",color:"blue",outlined:"",disabled:e.numAetDisabled,"prepend-icon":"mdi-numeric",name:"data[AET]",label:"Nº AET",oninput:"this.value = this.value.replace(/[^0-9/]/g, '')"},model:{value:e.editedItem.AET,callback:function(t){e.$set(e.editedItem,"AET",t)},expression:"editedItem.AET"}}),t(p.Z,{staticClass:"grey-label",attrs:{id:"valorCobrado",color:"blue",rules:e.rulesVALORCOBRADO,required:"",outlined:"","prepend-icon":"mdi-cash",name:"data[VALORCOBRADO]",label:"Valor Cobrado",oninput:"this.value = this.value.replace(/[^0-9,]/g, '')"},model:{value:e.editedItem.VALORCOBRADO,callback:function(t){e.$set(e.editedItem,"VALORCOBRADO",t)},expression:"editedItem.VALORCOBRADO"}})],1),t(n.Z,{attrs:{cols:"12",sm:"3",md:"3"}},[t(T.Z,{attrs:{"offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"grey-label",attrs:{id:"vencimentoBoleto",color:"blue",rules:[()=>10===e.editedItem.VENCIMENTOBOLETO.length||!e.editedItem.VENCIMENTOBOLETO.length||"Data Inválida"],required:"","prepend-icon":"mdi-calendar-clock",name:"data[VENCIMENTOBOLETO]",label:"Vencimento Boleto",outlined:""},on:{blur:function(t){e.data=e.parseDate(e.editedItem.VENCIMENTOBOLETO)},change:function(t){"null"===e.tempVencimentoBoleto?e.editedItem.VENCIMENTOBOLETO=null:e.tempVencimentoBoleto=e.parseDate(e.editedItem.VENCIMENTOBOLETO)},click:function(t){"null"===e.tempVencimentoBoleto?e.editedItem.VENCIMENTOBOLETO=null:e.tempVencimentoBoleto=e.parseDate(e.editedItem.VENCIMENTOBOLETO)}},model:{value:e.editedItem.VENCIMENTOBOLETO,callback:function(t){e.$set(e.editedItem,"VENCIMENTOBOLETO",t)},expression:"editedItem.VENCIMENTOBOLETO"}},"v-text-field",a,!1),i))]}}],null,!1,3962376741)},[t(r.Z,{attrs:{"no-title":"",locale:"pt-BR"},model:{value:e.tempVencimentoBoleto,callback:function(t){e.tempVencimentoBoleto=t},expression:"tempVencimentoBoleto"}})],1),t(T.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(p.Z,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"grey-label",attrs:{id:"dataPgBoleto",color:"blue",outlined:"",disabled:e.pagamentoBoletoDisabled,rules:e.rulesPAGAMENTOBOLETO,required:"","prepend-icon":"mdi-calendar-check",name:"data[PAGAMENTOBOLETO]",label:"Data Pagamento Boleto"},on:{blur:function(t){e.data=e.parseDate(e.editedItem.PAGAMENTOBOLETO)},change:function(t){"null"===e.tempPagamentoBoleto?e.editedItem.PAGAMENTOBOLETO=null:e.tempPagamentoBoleto=e.parseDate(e.editedItem.PAGAMENTOBOLETO)},click:function(t){"null"===e.tempPagamentoBoleto?e.editedItem.PAGAMENTOBOLETO=null:e.tempPagamentoBoleto=e.parseDate(e.editedItem.PAGAMENTOBOLETO)}},model:{value:e.editedItem.PAGAMENTOBOLETO,callback:function(t){e.$set(e.editedItem,"PAGAMENTOBOLETO",t)},expression:"editedItem.PAGAMENTOBOLETO"}},"v-text-field",a,!1),i))]}}],null,!1,3876697508)},[t(r.Z,{attrs:{"no-title":"",locale:"pt-BR"},model:{value:e.tempPagamentoBoleto,callback:function(t){e.tempPagamentoBoleto=t},expression:"tempPagamentoBoleto"}})],1),t(p.Z,{staticClass:"grey-label",attrs:{id:"valorBoleto",color:"blue",outlined:"","prepend-icon":"mdi-cash-multiple",name:"data[VALORBOLETO]",label:"Valor Boleto",oninput:"this.value = this.value.replace(/[^0-9,]/g, '')"},model:{value:e.editedItem.VALORBOLETO,callback:function(t){e.$set(e.editedItem,"VALORBOLETO",t)},expression:"editedItem.VALORBOLETO"}}),t(p.Z,{staticClass:"grey-label",attrs:{id:"numBoleto",color:"blue",outlined:"","prepend-icon":"mdi-numeric",name:"data[NUMBOLETO]",label:"Nº Boleto",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},model:{value:e.editedItem.NUMBOLETO,callback:function(t){e.$set(e.editedItem,"NUMBOLETO",t)},expression:"editedItem.NUMBOLETO"}})],1)],1),t(O.Z,[t(n.Z,{attrs:{cols:"12",sm:"6",md:"6"}},[t(p.Z,{staticClass:"grey-label",attrs:{color:"blue",outlined:"","prepend-icon":"mdi-message-text",name:"data[OBSERVAÇÃO]",label:"Observações"},model:{value:e.editedItem.OBSERVAÇÃO,callback:function(t){e.$set(e.editedItem,"OBSERVAÇÃO",t)},expression:"editedItem.OBSERVAÇÃO"}})],1),t(n.Z,[t(p.Z,{staticClass:"grey-label",attrs:{id:"saldo",color:"blue",outlined:"","prepend-icon":"mdi-cash",name:"data[SALDO]",label:"Saldo",oninput:"this.value = this.value.replace(/[^0-9,]/g, '')"},model:{value:e.editedItem.SALDO,callback:function(t){e.$set(e.editedItem,"SALDO",t)},expression:"editedItem.SALDO"}})],1)],1)],1)],1),t(l.h7,[t(s.Z,{directives:[{name:"show",rawName:"v-show",value:e.showCloneBtn,expression:"showCloneBtn"}],attrs:{color:"blue darken-3",text:""},on:{click:e.clone}},[e._v(" Clonar ")]),t(E.Z),t(s.Z,{attrs:{color:"red darken-2",text:"",autofocus:""},on:{click:e.close}},[e._v(" Cancelar ")]),t(s.Z,{attrs:{color:"blue darken-3",text:"",disabled:!e.valid},on:{click:e.save}},[e._v(" Salvar ")])],1)],1)],1)],1),t(c.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogSave,callback:function(t){e.dialogSave=t},expression:"dialogSave"}},[t(d.Z,[t(l.EB,{staticClass:"text-h6"},[t("p",[e._v("Você está prestes a alterar um lançamento")])]),t(l.ZB,[t("p",[e._v(" Tem certeza que a alteração desses dados não causará nenhum problema futuro? ")])]),t(l.h7,[t(E.Z),t(s.Z,{attrs:{color:"red darken-2",text:"",autofocus:""},on:{click:e.closeDialogSave}},[e._v(" Cancelar ")]),t(s.Z,{attrs:{color:"blue darken-3",text:""},on:{click:e.editItemConfirm}},[e._v(" Sim ")]),t(E.Z)],1)],1)],1),t(c.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(d.Z,[t(l.EB,{staticClass:"text-h5"},[e._v(" Tem certeza que excluir esse lançamento não causará nenhum problema futuro? ")]),t(l.h7,[t(E.Z),t(s.Z,{attrs:{color:"red darken-2",text:"",autofocus:""},on:{click:e.closeDelete}},[e._v(" Cancelar ")]),t(s.Z,{attrs:{color:"blue darken-3",text:""},on:{click:e.deleteItemConfirm}},[e._v(" Sim ")]),t(E.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[t(h.Z,{staticClass:"mr-2",attrs:{id:"editBtn",small:""},on:{click:function(t){e.editItem(i),e.parseMonetary(),e.disabledField(),e.showCloneBtn=!0,e.maskCheckbox()}}},[e._v(" mdi-pencil ")]),t(h.Z,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(s.Z,{attrs:{color:"blue",dark:""},on:{click:e.fetchLicences}},[e._v(" Carregar Lista ")])]},proxy:!0}],null,!0)})],1):e._e()},S=[],D=(i(560),i(5121)),v={name:"TestFinancialControl",filters:{currencyBRL(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}},data:()=>({id:null,repeated:!1,valid:!0,checkboxNF:!1,dialog:!1,dialogSave:!1,dialogDelete:!1,showUpdate:!1,showPost:!1,showError:!1,showCloneBtn:!0,isDisabled:!1,taxDateDisabled:!1,bancoDisabled:!1,custoTaxaDisabled:!1,numTaxaDisabled:!1,emissaoAetDisabled:!1,pagamentoBoletoDisabled:!1,vencimentoAetDisabled:!1,numAetDisabled:!1,logado:window.sessionStorage.logado,user:window.sessionStorage.user,profile:window.sessionStorage.profile,plateMask:"AAA-#X##",search:"",form:"",now:"",monthInWords:"",tempDate:"",tempPagamentoTaxa:"",tempEmissao:"",tempVencimento:"",tempVencimentoBoleto:"",tempPagamentoBoleto:"",solicitante:"",fraseAleatoria:"",frasesMotivacionais:["Você é incrível!","Você está cada vez melhor!","Muito bom! Parabéns!"],salepersons:["N/A","Jéssica","Ludimila","Gabriely","Nathanaely","Mateus","Brayan","Edilar"],banks:["Banco do Brasil","Bradesco","Sicredi","Sicredi Nvs","Cliente Pagou"],states:[{value:"FEDERAL",text:"FEDERAL"},{value:"BA",text:"Bahia"},{value:"GO",text:"Goiás"},{value:"MG",text:"Minas Gerais"},{value:"MS",text:"Mato Grosso do Sul"},{value:"PE",text:"Pernambuco"},{value:"PR",text:"Paraná"},{value:"RJ",text:"Rio de Janiero"},{value:"RS",text:"Rio Grande do Sul"},{value:"SC",text:"Santa Catarina"},{value:"SP",text:"São Paulo"},{value:"TO",text:"Tocantins"},{value:"AC",text:"Acre"},{value:"AL",text:"Alagoas"},{value:"AM",text:"Amazonas"},{value:"AP",text:"Amapá"},{value:"CE",text:"Ceará"},{value:"DF",text:"Distrito Federal"},{value:"ES",text:"Espirito Santo"},{value:"MA",text:"Maranhão"},{value:"MT",text:"Mato Grosso"},{value:"PA",text:"Pará"},{value:"PB",text:"Paraíba"},{value:"PI",text:"Piauí"},{value:"RN",text:"Rio Grande do Norte"},{value:"RO",text:"Rondônia"},{value:"RR",text:"Roraima"},{value:"SE",text:"Sergipe"}],statuses:[{value:"A VENCER",text:"A Vencer"},{value:"TAXA PAGA",text:"Taxa Paga"},{value:"CONFERIR",text:"Conferir"},{value:"PAGO",text:"Pago",disabled:!0},{value:"A COBRAR",text:"A Cobrar"},{value:"VENCIDO",text:"Vencido"},{value:"RENEGOCIADO",text:"Renegociado"},{value:"NÃO COBRAR",text:"Não Cobrar"},{value:"A DEPOSITAR",text:"A Depositar"},{value:"ACERTO",text:"Acerto"}],statuses2:[{value:"A VENCER",text:"A Vencer"},{value:"TAXA PAGA",text:"Taxa Paga"},{value:"CONFERIR",text:"Conferir"},{value:"PAGO",text:"Pago",disabled:!0},{value:"A COBRAR",text:"A Cobrar"},{value:"VENCIDO",text:"Vencido"},{value:"RENEGOCIADO",text:"Renegociado"},{value:"NÃO COBRAR",text:"Não Cobrar"},{value:"A DEPOSITAR",text:"A Depositar"},{value:"ACERTO",text:"Acerto"}],statusesAdmin:[{value:"A VENCER",text:"A Vencer"},{value:"TAXA PAGA",text:"Taxa Paga"},{value:"CONFERIR",text:"Conferir"},{value:"PAGO",text:"Pago"},{value:"A COBRAR",text:"A Cobrar"},{value:"VENCIDO",text:"Vencido"},{value:"RENEGOCIADO",text:"Renegociado"},{value:"NÃO COBRAR",text:"Não Cobrar"},{value:"A DEPOSITAR",text:"A Depositar"},{value:"ACERTO",text:"Acerto"}],headers:[{text:"AET",value:"AET",align:" d-none"},{text:"Número do Boleto",value:"NUMBOLETO",align:" d-none"},{text:"ID",value:"ID",align:" d-none"},{text:"Empresa",value:"EMPRESA"},{text:"Placa",value:"PLACA"},{text:"UF",value:"ESTADO"},{text:"Status",value:"STATUS"},{text:"Pagamento Boleto",value:"PAGAMENTOBOLETO"},{text:"Valor Cobrado",value:"VALORCOBRADO"},{text:"Edição",value:"actions",sortable:!1}],licences:[],editedIndex:-1,editedItem:{ID:"","MÊS":"",DATA:"",EMPRESA:"",SOLICITANTE:"",PAGAMENTOBOLETO:"",COMERCIAL:"",PLACA:"",ESTADO:"",STATUS:"",DATAPAGAMENTOTAXA:"",BANCO:"",CUSTOTAXA:"",NUMTAXA:"","EMISSÃO":"",VENCIMENTO:"",AET:"",VALORCOBRADO:"",VENCIMENTOBOLETO:"",VALORBOLETO:"",NUMBOLETO:"",SALDO:"","OBSERVAÇÃO":""},defaultItem:{ID:"","MÊS":"",DATA:"",EMPRESA:"",SOLICITANTE:"",PAGAMENTOBOLETO:"",COMERCIAL:"",PLACA:"",ESTADO:"",STATUS:"",DATAPAGAMENTOTAXA:"",BANCO:"",CUSTOTAXA:"",NUMTAXA:"","EMISSÃO":"",VENCIMENTO:"",AET:"",VALORCOBRADO:"",VENCIMENTOBOLETO:"",VALORBOLETO:"",NUMBOLETO:"",SALDO:"","OBSERVAÇÃO":""}}),computed:{formTitle(){return-1===this.editedIndex?"Novo Lançamento":`Editar Lançamento - ID ${this.editedItem.ID}`},rulesDATAPAGAMENTO(){const e=[],t=!!this.editedItem.DATAPAGAMENTOTAXA||"FEDERAL"===this.editedItem.ESTADO||this.editedItem.EMPRESA.includes("Budel")||"Não Saiu Nada"===this.editedItem.SOLICITANTE||"Cliente Pagou"===this.editedItem.BANCO||"Campo Obrigatório";return e.push(t),e},rulesBANCO(){const e=[],t=!!this.editedItem.BANCO||"FEDERAL"===this.editedItem.ESTADO||this.editedItem.EMPRESA.includes("Budel")||"Não Saiu Nada"===this.editedItem.SOLICITANTE||"Campo Obrigatório";return e.push(t),e},rulesCUSTOTAXA(){const e=[],t=!!this.editedItem.CUSTOTAXA||"FEDERAL"===this.editedItem.ESTADO||this.editedItem.EMPRESA.includes("Budel")||"Não Saiu Nada"===this.editedItem.SOLICITANTE||"Campo Obrigatório";return e.push(t),e},rulesNUMTAXA(){const e=[],t=!!this.editedItem.NUMTAXA||"FEDERAL"===this.editedItem.ESTADO||"TO"===this.editedItem.ESTADO||"MS"===this.editedItem.ESTADO||"PA"===this.editedItem.ESTADO||this.editedItem.EMPRESA.includes("Budel")||"Não Saiu Nada"===this.editedItem.SOLICITANTE||"Campo Obrigatório";return e.push(t),e},rulesVALORCOBRADO(){const e=[],t=!this.editedItem.VALORCOBRADO||parseFloat(this.editedItem.CUSTOTAXA)<=parseFloat(this.editedItem.VALORCOBRADO)||"NÃO COBRAR"===this.editedItem.STATUS||"ACERTO"===this.editedItem.STATUS||"Valor Inferior à Taxa";return e.push(t),e},rulesPAGAMENTOBOLETO(){const e=[],t=!!this.editedItem.PAGAMENTOBOLETO||"PAGO"!==this.editedItem.STATUS||"Campo Obrigatório";return e.push(t),e}},watch:{dialog(e){return e||this.close(),this.editedItem.PLACA.includes("NF-")?(this.checkboxNF=!0,this.plateMask="?NF-#################"):(this.checkboxNF=!1,this.plateMask="AAA-#X##")},dialogSave(e){e||this.closeDialogSave()},dialogDelete(e){e||this.closeDelete()},tempPagamentoTaxa(){"N/A"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.editedItem.DATAPAGAMENTOTAXA=this.formatDate(this.tempPagamentoTaxa))},tempEmissao(){this.editedItem.EMISSÃO=this.formatDate(this.tempEmissao)},tempVencimento(){this.editedItem.VENCIMENTO=this.formatDate(this.tempVencimento)},tempVencimentoBoleto(){this.editedItem.VENCIMENTOBOLETO=this.formatDate(this.tempVencimentoBoleto)},tempPagamentoBoleto(){this.editedItem.PAGAMENTOBOLETO=this.formatDate(this.tempPagamentoBoleto)}},created(){this.fetchLicences(),this.randomPhrase(),this.maskCheckbox()},methods:{statusRules(){var e=new Date,t=e.getDate(),i=e.getMonth()+1,a=e.getFullYear();i<10&&(i="0"+i),t<10&&(t="0"+t);var s=a+""+i+t,d=this.editedItem.VENCIMENTOBOLETO;const[l,o,n]=d.split("/");var m=`${n}${o.padStart(2,"0")}${l.padStart(2,"0")}`;console.log("today: "+s),console.log("venc boleto: "+m),m<s&&(this.editedItem.STATUS="VENCIDO")},clientePagouRules(){"Cliente Pagou"===this.editedItem.BANCO&&(this.editedItem.CUSTOTAXA="0",this.editedItem.NUMTAXA="0")},maskCheckbox(){!0===this.checkboxNF?this.plateMask="NF-##############":this.plateMask="AAA-#X##"},disabledField(){this.editedIndex>-1&&(this.isDisabled=!0,this.editedItem.VENCIMENTO&&"null"!==this.editedItem.VENCIMENTO&&(this.vencimentoAetDisabled=!0),this.editedItem.EMISSÃO&&"null"!==this.editedItem.EMISSÃO&&(this.emissaoAetDisabled=!0),this.editedItem.PAGAMENTOBOLETO&&"null"!==this.editedItem.PAGAMENTOBOLETO&&(this.pagamentoBoletoDisabled=!0),this.editedItem.AET&&"null"!==this.editedItem.AET&&(this.numAetDisabled=!0)),"FEDERAL"===this.editedItem.ESTADO&&(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),this.editedItem.EMPRESA.includes("Budel")&&(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),"Não Saiu Nada"===this.editedItem.SOLICITANTE&&(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),"FEDERAL"!==this.editedItem.ESTADO&&(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),this.editedItem.EMPRESA.includes("Budel")||(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),"Não Saiu Nada"!==this.editedItem.SOLICITANTE&&(this.editedItem.DATAPAGAMENTOTAXA&&"null"!==this.editedItem.DATAPAGAMENTOTAXA&&(this.taxDateDisabled=!0),this.editedItem.BANCO&&"null"!==this.editedItem.BANCO&&(this.bancoDisabled=!0),this.editedItem.CUSTOTAXA&&"null"!==this.editedItem.CUSTOTAXA&&(this.custoTaxaDisabled=!0),this.editedItem.NUMTAXA&&"null"!==this.editedItem.NUMTAXA&&(this.numTaxaDisabled=!0),this.editedItem.DATAPAGAMENTOTAXA||(this.taxDateDisabled=!1),this.editedItem.BANCO||(this.bancoDisabled=!1),this.editedItem.CUSTOTAXA||(this.custoTaxaDisabled=!1),this.editedItem.NUMTAXA||(this.numTaxaDisabled=!1)),-1===this.editedIndex&&(this.isDisabled=!1,this.vencimentoAetDisabled=!1,this.emissaoAetDisabled=!1,this.pagamentoBoletoDisabled=!1,this.numAetDisabled=!1)},randomPhrase(){return this.fraseAleatoria=Math.floor(Math.random()*this.frasesMotivacionais.length)},setTimeNow(){var e=new Date,t=e.getDate(),i=e.getMonth()+1,a=e.getFullYear();i<10&&(i="0"+i),t<10&&(t="0"+t),this.now=t+"/"+i+"/"+a;const s=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"];this.monthInWords=s[e.getMonth()],-1===this.editedIndex&&(this.editedItem.DATA=this.now,this.editedItem.MÊS=this.monthInWords)},setComercial(){-1===this.editedIndex&&(this.editedItem.COMERCIAL=this.user)},formatDate(e){if(!e)return null;const[t,i,a]=e.split("-");return`${a}/${i}/${t}`},parseDate(e){if(!e)return null;const[t,i,a]=e.split("/");return`${a}-${i.padStart(2,"0")}-${t.padStart(2,"0")}`},parseMonetary(){this.editedItem.CUSTOTAXA=this.editedItem.CUSTOTAXA.replace("R$ ",""),this.editedItem.VALORCOBRADO=this.editedItem.VALORCOBRADO.replace("R$ ",""),this.editedItem.VALORBOLETO=this.editedItem.VALORBOLETO.replace("R$ ",""),this.editedItem.SALDO=this.editedItem.SALDO.replace("R$ ","")},getColor(e){return"PAGO"===e?"blue lighten-4":"A VENCER"===e?"green lighten-4":"TAXA PAGA"===e?"purple lighten-4":"A COBRAR"===e?"red lighten-4":"CONFERIR"===e?"orange lighten-4":"VENCIDO"===e||"NÃO COBRAR"===e||"ACERTO"===e?"red lighten-4":"RENEGOCIADO"===e?"yellow lighten-4":""===e?"":"grey lighten-2"},getIcon(e){return"PAGO"===e?"mdi-check-all blue--text":"A VENCER"===e||"A DEPOSITAR"===e?"mdi-cash-clock":"TAXA PAGA"===e?"mdi-check":"A COBRAR"===e?"mdi-clock-alert-outline":"CONFERIR"===e?"mdi-email-alert-outline":"VENCIDO"===e?"mdi-alert red--text":"NÃO COBRAR"===e||"ACERTO"===e?"mdi-cash-remove red--text":"RENEGOCIADO"===e?"mdi-clock-alert-outline red--text":"mdi-list-status"},fetchLicences(){return fetch("https://sheetdb.io/api/v1/afxq0nl1f0gvg").then((e=>e.json())).then((e=>{this.licences=e}))},greaterId(){return D.Z.get("https://sheetdb.io/api/v1/afxq0nl1f0gvg").then((e=>{this.id=e.data.length+1;for(let t=0;t<e.data.length;t++)Number(this.id)===Number(e.data[t].ID)?this.repeated=!0:this.repeated=!1;console.log("id: "+this.id),console.log("repeated: "+this.repeated),-1===this.editedIndex&&(!0===this.repeated?alert("ID duplicado. Favor contatar suporte e suspender novos lançamentos até que a correção seja confirmada."):this.editedItem.ID=this.id)}))},editItem(e){this.editedIndex=this.licences.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.licences.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},editItemConfirm(){this.editedIndex>-1?(D.Z.put(`https://sheetdb.io/api/v1/afxq0nl1f0gvg/ID/${this.editedItem.ID}`,{data:{SOLICITANTE:`${this.editedItem.SOLICITANTE}`,PLACA:`${this.editedItem.PLACA}`,NUMTAXA:`${this.editedItem.NUMTAXA}`,CUSTOTAXA:`${this.editedItem.CUSTOTAXA}`,DATAPAGAMENTOTAXA:`${this.editedItem.DATAPAGAMENTOTAXA}`,BANCO:`${this.editedItem.BANCO}`,AET:`${this.editedItem.AET}`,"EMISSÃO":`${this.editedItem.EMISSÃO}`,VENCIMENTO:`${this.editedItem.VENCIMENTO}`,VALORCOBRADO:`${this.editedItem.VALORCOBRADO}`,SALDO:`${this.editedItem.SALDO}`,STATUS:`${this.editedItem.STATUS}`,NUMBOLETO:`${this.editedItem.NUMBOLETO}`,VALORBOLETO:`${this.editedItem.VALORBOLETO}`,VENCIMENTOBOLETO:`${this.editedItem.VENCIMENTOBOLETO}`,PAGAMENTOBOLETO:`${this.editedItem.PAGAMENTOBOLETO}`,"OBSERVAÇÃO":`${this.editedItem.OBSERVAÇÃO}`}}).then((e=>{200===e.status||201===e.status?(this.showUpdate=!this.showUpdate,this.fetchLicences(),setTimeout((()=>{this.showUpdate=!this.showUpdate}),1500)):(this.showError=!this.showError,setTimeout((()=>{this.showError=!this.showError,window.location.reload()}),1500))})),this.dialogSave=!1,setTimeout((()=>{this.close()}),200)):this.save()},deleteItemConfirm(){this.licences.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDialogSave(){this.dialogSave=!1},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},validateField(){this.$refs.form.validate()},clone(){this.editedIndex>-1?(this.tempEmpresa=this.editedItem.EMPRESA,this.tempSolicitante=this.editedItem.SOLICITANTE,this.tempPgBoleto=this.editedItem.PAGAMENTOBOLETO,this.tempComercial=this.editedItem.COMERCIAL,this.tempPlaca=this.editedItem.PLACA,this.tempEstado=this.editedItem.ESTADO,this.tempStatus=this.editedItem.STATUS,this.tempDataPgTaxa=this.editedItem.DATAPAGAMENTOTAXA,this.tempBanco=this.editedItem.BANCO,this.tempCusto=this.editedItem.CUSTOTAXA,this.tempTaxa=this.editedItem.NUMTAXA,this.tempDataEmissao=this.editedItem.EMISSÃO,this.tempDataVencimento=this.editedItem.VENCIMENTO,this.tempAET=this.editedItem.AET,this.tempCobrado=this.editedItem.VALORCOBRADO,this.tempVencimentoBoleto=this.editedItem.VENCIMENTOBOLETO,this.tempBoleto=this.editedItem.VALORBOLETO,this.tempNumBoleto=this.editedItem.NUMBOLETO,this.tempSaldo=this.editedItem.SALDO,this.tempObs=this.editedItem.OBSERVAÇÃO,setTimeout((()=>{this.close()}),300),setTimeout((()=>{document.getElementById("newItemBtn").click()}),300),setTimeout((()=>{this.editedItem.EMPRESA=this.tempEmpresa,this.editedItem.SOLICITANTE=this.tempSolicitante,this.editedItem.PAGAMENTOBOLETO=this.tempPgBoleto,this.editedItem.COMERCIAL=this.tempComercial,this.editedItem.PLACA=this.tempPlaca,this.editedItem.ESTADO=this.tempEstado,this.editedItem.STATUS=this.tempStatus,this.editedItem.DATAPAGAMENTOTAXA=this.tempDataPgTaxa,this.editedItem.BANCO=this.tempBanco,this.editedItem.CUSTOTAXA=this.tempCusto,this.editedItem.NUMTAXA=this.tempTaxa,this.editedItem.EMISSÃO=this.tempDataEmissao,this.editedItem.VENCIMENTO=this.tempDataVencimento,this.editedItem.AET=this.tempAET,this.editedItem.VALORCOBRADO=this.tempCobrado,this.editedItem.VENCIMENTOBOLETO=this.tempVencimentoBoleto,this.editedItem.VALORBOLETO=this.tempBoleto,this.editedItem.NUMBOLETO=this.tempNumBoleto,this.editedItem.SALDO=this.tempSaldo,this.editedItem.OBSERVAÇÃO=this.tempObs}),300)):this.showCloneBtn=!1},saveStatus(e){this.editedIndex=this.licences.indexOf(e),D.Z.put(`https://sheetdb.io/api/v1/afxq0nl1f0gvg/ID/${this.editedIndex+1}`,{data:{STATUS:`${e.STATUS}`}}).then((e=>{200===e.status||201===e.status?(this.showUpdate=!this.showUpdate,this.fetchLicences(),setTimeout((()=>{this.showUpdate=!this.showUpdate}),1500)):429===e.status?(alert("O limite de solicitações foi excedido! 10.000 licenças foram lançadas esse mês! Entre em contato com o suporte para liberar mais espaço."),window.location.reload()):401===e.status||403===e.status||404===e.status?(alert("Erro de servidor. Entre em contato com o suporte."),window.location.reload()):(this.showError=!this.showError,setTimeout((()=>{this.showError=!this.showError,window.location.reload()}),1500))})),this.close()},save(){var e=document.getElementById("sheetdb-form");this.editedIndex>-1?this.dialogSave=!0:(this.id||alert("lançamento sem ID. Favor contatar suporte antes de prosseguir."),fetch(e.action,{method:"POST",body:new FormData(e)}).then((e=>{200===e.status||201===e.status?(this.showPost=!this.showPost,this.fetchLicences(),setTimeout((()=>{this.showPost=!this.showPost}),1500)):429===e.status?(alert("O limite de solicitações foi excedido! 10.000 licenças foram lançadas esse mês! Entre em contato com o suporte para liberar mais espaço."),window.location.reload()):401!==e.status&&403!==e.status||(alert("Erro de servidor. Entre em contato com o suporte."),window.location.reload())})),this.close())}}},x=v,M=i(1001),B=(0,M.Z)(x,C,S,!1,null,null,null),g=B.exports},2370:function(e,t,i){i.d(t,{qW:function(){return d}});var a=i(5838),s=i(1050);const d=(0,s.Ji)("v-toolbar__title"),l=(0,s.Ji)("v-toolbar__items");a.Z}}]);
//# sourceMappingURL=views-TestFinancialControl.4f19e0a0.js.map