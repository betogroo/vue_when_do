(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["alltasks~donetasks~editlist~home~task"],{"03db":function(e,t,a){},1543:function(e,t,a){},"6c5d":function(e,t,a){"use strict";var n=a("03db"),s=a.n(n);s.a},c5e1:function(e,t,a){"use strict";var n=a("1543"),s=a.n(n);s.a},ec05:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"confirmDeleteModal",tabindex:"-1","aria-labelledby":"confirmDeleteModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"confirmDeleteModalLabel"}},[e._v("Excluir "+e._s(e.title)+"?")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:e.resetCurrentItem}})]),a("div",{staticClass:"modal-body"},[e._v(" Tem certeza que deseja excluir esta "+e._s(e.title.toLowerCase())+"? ")]),a("div",{staticClass:"modal-footer d-flex justify-content-around p-0"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmDelete,expression:"confirmDelete"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexCheckDefault"},domProps:{checked:Array.isArray(e.confirmDelete)?e._i(e.confirmDelete,null)>-1:e.confirmDelete},on:{change:function(t){var a=e.confirmDelete,n=t.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);n.checked?r<0&&(e.confirmDelete=a.concat([i])):r>-1&&(e.confirmDelete=a.slice(0,r).concat(a.slice(r+1)))}else e.confirmDelete=s}}}),e._m(0)]),a("div",[a("button",{staticClass:"btn btn-warning btn-sm mr-1",attrs:{type:"button","data-dismiss":"modal"},on:{click:e.resetCurrentItem}},[e._v(" Cancelar ")]),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.deleteCurrentItem(e.item)}}},[e._v(" Excluir ")])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[a("small",[e._v("Não pergunte novamente")])])}],i={name:"DeleteModal",data:function(){return{confirmDelete:!1}},props:{title:String,item:Object},methods:{deleteCurrentItem:function(e){this.confirmDelete&&this.$store.dispatch("ActionToggleConfirmDelete"),this.$emit("deleteCurrentItem",e)},resetCurrentItem:function(){this.$emit("resetCurrentItem")}}},r=i,l=(a("6c5d"),a("2877")),o=Object(l["a"])(r,n,s,!1,null,"7df9a512",null);t["a"]=o.exports},fb80:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navbar bg-primary text-light fixed-top"},[a("div",{staticClass:"container-fluid d-flex p-0"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"navbar-toggler"},[a("span",{staticClass:"material-icons",on:{click:e.toggleAction}},[e._v(e._s(e.toggleIcon))])]),e.$route.meta.navSearchForm?[a("NavSearchForm")]:[a("span",{staticClass:"navbar-brand mb-0 mr-auto ml-2 h1"},[e._v(e._s(e.title)+" ")])]],2),a("div",{staticClass:"d-flex align-items-center navbar-toggler"},[e.$route.meta.navSaveMore?a("NavSaveMore",{attrs:{item:e.item},on:{saveItem:e.saveItem}}):e._e(),e.$route.meta.navMove?a("NavMove",{attrs:{item:e.item},on:{moveItem:e.moveItem}}):e._e(),e.$route.meta.navDelete?a("NavDelete",{on:{deleteItem:e.deleteItem}}):e._e(),e.$route.meta.navSave?a("NavSave",{attrs:{item:e.item},on:{saveItem:e.saveItem}}):e._e(),e.$route.meta.navAdd?a("NavAdd",{on:{addItem:e.addItem}}):e._e(),e.$route.meta.navSearch?a("NavSearch",{on:{searchItem:e.searchItem}}):e._e(),e.$route.meta.navMic?a("NavMic"):e._e(),e.$route.meta.navOptions?a("NavOptions"):e._e()],1)])])])},s=[],i=a("5530"),r=a("2f62"),l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"dropleft"},[a("span",{staticClass:"material-icons",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"}},[e._v("more_vert")]),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#orderModal"}},[e._v("Ordenar")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Demarcar Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Excluir Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Esconder Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Enviar")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Forçar Sincronização")])])])])])}],c={name:"NavOptions"},m=c,d=a("2877"),u=Object(d["a"])(m,l,o,!1,null,null,null),v=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.config.confirmDelete?a("span",{staticClass:"material-icons mr-2",attrs:{"data-toggle":"modal","data-target":"#confirmDeleteModal"}},[e._v("delete ")]):a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.deleteItem()}}},[e._v("delete")])])},h=[],p={name:"NavDelete",computed:Object(i["a"])({},Object(r["d"])(["config"])),methods:{deleteItem:function(){this.$emit("deleteItem")}}},_=p,b=Object(d["a"])(_,f,h,!1,null,null,null),C=b.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.moveItem(e.item)}}},[e._v("redo")])])},g=[],$={name:"NavMove",props:{item:Object},methods:{moveItem:function(e){this.$emit("moveItem",e)}}},x=$,N=Object(d["a"])(x,I,g,!1,null,null,null),k=N.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.saveItem(e.item,!0)}}},[e._v("done_all")])])},D=[],j={name:"NavSaveMore",props:{item:Object},methods:{saveItem:function(e,t){this.$emit("saveItem",e,t)}}},S=j,w=Object(d["a"])(S,O,D,!1,null,null,null),y=w.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.saveItem(e.item,!1)}}},[e._v("done")])])},E=[],A={name:"NavSave",props:{item:Object},methods:{saveItem:function(e,t){this.$emit("saveItem",e,t)}}},T=A,F=Object(d["a"])(T,M,E,!1,null,null,null),z=F.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.addItem()}}},[e._v("add")])])},q=[],B={name:"NavAdd",methods:{addItem:function(){this.$emit("addItem")}}},L=B,J=Object(d["a"])(L,P,q,!1,null,null,null),G=J.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:e.searchItem}},[e._v("search")])])},K=[],Q={name:"NavSearch",methods:{searchItem:function(){this.$emit("searchItem")}}},R=Q,U=Object(d["a"])(R,H,K,!1,null,null,null),V=U.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("span",{staticClass:"material-icons"},[e._v(" search ")]),a("div",{staticClass:"d-flex align-items-center align-items-center"},[a("input",{staticClass:"form-control form-control-sm m-1",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"Procurar Tarefas"}}),a("span",{staticClass:"material-icons mr-2",on:{click:e.voiceSearch}},[e._v("keyboard_voice ")])])])])},X=[],Y={name:"NavSearchForm",methods:{voiceSearch:function(){alert("Pesquisa por voz indisponível neste aparelho.")}}},Z=Y,ee=Object(d["a"])(Z,W,X,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.voiceSearch()}}},[e._v("keyboard_voice")])])},ne=[],se={name:"NavMic",methods:{voiceSearch:function(){alert("Pesquisa por voz")}}},ie=se,re=Object(d["a"])(ie,ae,ne,!1,null,null,null),le=re.exports,oe={name:"Navbar",components:{NavOptions:v,NavDelete:C,NavMic:le,NavMove:k,NavSaveMore:y,NavSave:z,NavAdd:G,NavSearch:V,NavSearchForm:te},props:{title:String,toggleIcon:String,items:Array,payload:Object,item:Object,option:Boolean},computed:Object(i["a"])({},Object(r["d"])(["sidebarOpen","config"])),methods:{toggleAction:function(e){this.$emit("toggleAction",e)},deleteItem:function(){this.$emit("deleteItem")},saveItem:function(e,t){this.$emit("saveItem",e,t)},addItem:function(){this.$emit("addItem")},moveItem:function(e){this.$emit("moveItem",e)},searchItem:function(){this.$emit("searchItem")}}},ce=oe,me=(a("c5e1"),Object(d["a"])(ce,n,s,!1,null,"36a71090",null));t["a"]=me.exports}}]);
//# sourceMappingURL=alltasks~donetasks~editlist~home~task.10f40e6b.js.map