(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{1071:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar",{attrs:{title:"Configurações",toggleIcon:"arrow_back"},on:{toggleAction:function(t){return e.$router.back()}}}),a("div",{staticClass:"config"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("Geral")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between align-items-center",on:{click:e.toggleConfirmDelete}},[e._m(0),a("span",{staticClass:"material-icons md-48",class:e.config.confirmDelete?"text-primary":"text-muted"},[e._v(e._s(e.config.confirmDelete?"toggle_on":"toggle_off"))])])])])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"config-title font-weight-bolder"},[e._v("Confirme o Apagar")]),a("div",{staticClass:"config-text text-muted"},[e._v("Mostrar uma janela de confirmação de deletação.")])])}],s=a("5530"),r=a("fb80"),o=a("2f62"),c={name:"Config",components:{Navbar:r["a"]},methods:{toggleConfirmDelete:function(){this.$store.dispatch("ActionToggleConfirmDelete")}},computed:Object(s["a"])({},Object(o["d"])(["config"]))},l=c,m=a("2877"),v=Object(m["a"])(l,n,i,!1,null,"e30f41b2",null);t["default"]=v.exports},1543:function(e,t,a){},c5e1:function(e,t,a){"use strict";var n=a("1543"),i=a.n(n);i.a},fb80:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navbar bg-primary text-light fixed-top"},[a("div",{staticClass:"container-fluid d-flex p-0"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"navbar-toggler"},[a("span",{staticClass:"material-icons",on:{click:e.toggleAction}},[e._v(e._s(e.toggleIcon))])]),e.$route.meta.navSearchForm?[a("NavSearchForm")]:[a("span",{staticClass:"navbar-brand mb-0 mr-auto ml-2 h1"},[e._v(e._s(e.title)+" ")])]],2),a("div",{staticClass:"d-flex align-items-center navbar-toggler"},[e.$route.meta.navSaveMore?a("NavSaveMore",{attrs:{item:e.item},on:{saveItem:e.saveItem}}):e._e(),e.$route.meta.navMove?a("NavMove",{attrs:{item:e.item},on:{moveItem:e.moveItem}}):e._e(),e.$route.meta.navDelete?a("NavDelete",{on:{deleteItem:e.deleteItem}}):e._e(),e.$route.meta.navSave?a("NavSave",{attrs:{item:e.item},on:{saveItem:e.saveItem}}):e._e(),e.$route.meta.navAdd?a("NavAdd",{on:{addItem:e.addItem}}):e._e(),e.$route.meta.navSearch?a("NavSearch",{on:{searchItem:e.searchItem}}):e._e(),e.$route.meta.navMic?a("NavMic"):e._e(),e.$route.meta.navOptions?a("NavOptions"):e._e()],1)])])])},i=[],s=a("5530"),r=a("2f62"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"dropleft"},[a("span",{staticClass:"material-icons",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"}},[e._v("more_vert")]),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#orderModal"}},[e._v("Ordenar")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Demarcar Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Excluir Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Esconder Tarefas Concluídas")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Enviar")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v("Forçar Sincronização")])])])])])}],l={name:"NavOptions"},m=l,v=a("2877"),d=Object(v["a"])(m,o,c,!1,null,null,null),u=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.config.confirmDelete?a("span",{staticClass:"material-icons mr-2",attrs:{"data-toggle":"modal","data-target":"#confirmDeleteModal"}},[e._v("delete ")]):a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.deleteItem()}}},[e._v("delete")])])},p=[],h={name:"NavDelete",computed:Object(s["a"])({},Object(r["d"])(["config"])),methods:{deleteItem:function(){this.$emit("deleteItem")}}},_=h,g=Object(v["a"])(_,f,p,!1,null,null,null),b=g.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.moveItem(e.item)}}},[e._v("redo")])])},I=[],$={name:"NavMove",props:{item:Object},methods:{moveItem:function(e){this.$emit("moveItem",e)}}},N=$,O=Object(v["a"])(N,C,I,!1,null,null,null),x=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.saveItem(e.item,!0)}}},[e._v("done_all")])])},S=[],w={name:"NavSaveMore",props:{item:Object},methods:{saveItem:function(e,t){this.$emit("saveItem",e,t)}}},E=w,M=Object(v["a"])(E,j,S,!1,null,null,null),k=M.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.saveItem(e.item,!1)}}},[e._v("done")])])},D=[],A={name:"NavSave",props:{item:Object},methods:{saveItem:function(e,t){this.$emit("saveItem",e,t)}}},F=A,T=Object(v["a"])(F,y,D,!1,null,null,null),z=T.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.addItem()}}},[e._v("add")])])},P=[],q={name:"NavAdd",methods:{addItem:function(){this.$emit("addItem")}}},G=q,J=Object(v["a"])(G,B,P,!1,null,null,null),H=J.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:e.searchItem}},[e._v("search")])])},L=[],Q={name:"NavSearch",methods:{searchItem:function(){this.$emit("searchItem")}}},R=Q,U=Object(v["a"])(R,K,L,!1,null,null,null),V=U.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("span",{staticClass:"material-icons"},[e._v(" search ")]),a("div",{staticClass:"d-flex align-items-center align-items-center"},[a("input",{staticClass:"form-control form-control-sm m-1",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"Procurar Tarefas"}}),a("span",{staticClass:"material-icons mr-2",on:{click:e.voiceSearch}},[e._v("keyboard_voice ")])])])])},X=[],Y={name:"NavSearchForm",methods:{voiceSearch:function(){alert("Pesquisa por voz indisponível neste aparelho.")}}},Z=Y,ee=Object(v["a"])(Z,W,X,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"material-icons mr-2",on:{click:function(t){return e.voiceSearch()}}},[e._v("keyboard_voice")])])},ne=[],ie={name:"NavMic",methods:{voiceSearch:function(){alert("Pesquisa por voz")}}},se=ie,re=Object(v["a"])(se,ae,ne,!1,null,null,null),oe=re.exports,ce={name:"Navbar",components:{NavOptions:u,NavDelete:b,NavMic:oe,NavMove:x,NavSaveMore:k,NavSave:z,NavAdd:H,NavSearch:V,NavSearchForm:te},props:{title:String,toggleIcon:String,items:Array,payload:Object,item:Object,option:Boolean},computed:Object(s["a"])({},Object(r["d"])(["sidebarOpen","config"])),methods:{toggleAction:function(e){this.$emit("toggleAction",e)},deleteItem:function(){this.$emit("deleteItem")},saveItem:function(e,t){this.$emit("saveItem",e,t)},addItem:function(){this.$emit("addItem")},moveItem:function(e){this.$emit("moveItem",e)},searchItem:function(){this.$emit("searchItem")}}},le=ce,me=(a("c5e1"),Object(v["a"])(le,n,i,!1,null,"36a71090",null));t["a"]=me.exports}}]);
//# sourceMappingURL=config.922d7c1b.js.map