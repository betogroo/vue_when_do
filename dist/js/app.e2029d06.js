(function(t){function e(e){for(var a,n,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);k&&k(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},n={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({about:"about",addlist:"addlist",addnotebook:"addnotebook",addtask:"addtask",akktasksk:"akktasksk",editlist:"editlist",editlists:"editlists",notebooks:"notebooks",searchtask:"searchtask",task:"task"}[t]||t)+"."+{about:"1a2e7e07",addlist:"e0d5a984",addnotebook:"f169e2d4",addtask:"7598c2cd",akktasksk:"e6a72353",editlist:"f8961262",editlists:"646113f8",notebooks:"6630abdc",searchtask:"0b1cf684",task:"8d1f04b7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(t){var e=[],i={addlist:1,addnotebook:1,addtask:1,akktasksk:1,editlist:1,notebooks:1,searchtask:1,task:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var a="css/"+({about:"about",addlist:"addlist",addnotebook:"addnotebook",addtask:"addtask",akktasksk:"akktasksk",editlist:"editlist",editlists:"editlists",notebooks:"notebooks",searchtask:"searchtask",task:"task"}[t]||t)+"."+{about:"31d6cfe0",addlist:"bf4d07e8",addnotebook:"008fdd7a",addtask:"1ced1eff",akktasksk:"5d51299d",editlist:"da38434a",editlists:"31d6cfe0",notebooks:"a3f46d50",searchtask:"d56233e9",task:"f204b2e5"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===a||d===s)return e()}var k=document.createElement("link");k.rel="stylesheet",k.type="text/css",k.onload=e,k.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],k.parentNode.removeChild(k),i(o)},k.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(k)})).then((function(){n[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(k);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,i[1](u)}s[t]=void 0}};var k=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var k=d;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0079":function(t,e,i){"use strict";var a=i("6bc9"),n=i.n(a);n.a},"16c6":function(t,e,i){},"3e9b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"sidebar",class:{"sidebar-open":t.sidebarOpen}},[i("div",{staticClass:"siderbar-header d-flex bg-primary bg-gradient"},[i("div",{staticClass:"d-flex align-items-center"},[t._m(0),i("div",{staticClass:"text-light ml-2"},[i("small",[t._v("Conta do Google Tasks")]),i("br"),i("small",[t._v(t._s(t.loggedUser.email))])])]),i("div",{staticClass:"align-self-end justify-content-end ml-auto pr-2"},[i("span",{staticClass:"material-icons-outlined",on:{click:t.toggleSidebarAcounts}},[t._v(" "+t._s(t.sidebarAcountsOpen?"arrow_drop_up":"arrow_drop_down")+" ")])])]),t.sidebarAcountsOpen?[i("ul",{staticClass:"list-group list-group-flush mt-2"},[i("li",{staticClass:"list-group-item active d-flex align-items-center"},[i("span",{staticClass:"material-icons md-dark"},[t._v("person")]),i("div",[t._v(" "+t._s(t.loggedUser.email)+" ")])]),t._m(1)]),i("hr"),t._m(2)]:[i("ul",{staticClass:"list-group list-group-flush mt-2"},[i("li",{staticClass:"list-group-item d-flex align-items-center",on:{click:t.goToAllTasks}},[i("span",{staticClass:"material-icons"},[t._v("event")]),i("div",{staticClass:"p-1"},[t._v("Todas as Tarefas")]),i("div",{staticClass:"text-muted ml-auto"},[t._v(t._s(t.countChecked(null))+"/"+t._s(t.countUnchecked(null)))])]),i("li",{staticClass:"list-group-item d-flex align-items-center"},[i("span",{staticClass:"material-icons"},[t._v("check_circle")]),i("div",{staticClass:"p-1"},[t._v("Tarefas Finalizadas")]),i("div",{staticClass:"text-muted ml-auto"},[t._v(t._s(t.countChecked(null)))])])]),i("hr"),i("div",{staticClass:"task-list"},[i("ul",{staticClass:"list-group list-group-flush mr-2"},t._l(t.taskList,(function(e){return i("li",{key:e.id,staticClass:"list-group-item d-flex align-items-center",style:"border-right: 5px solid "+e.color+";",on:{click:function(i){return t.goToList(e)}}},[i("span",{staticClass:"material-icons"},[t._v("menu")]),i("div",{staticClass:"p-1"},[t._v(t._s(e.name))]),i("small",{staticClass:"ml-auto text-sm text-black-50"},[t._v(t._s(t.countChecked(e.id))+"/"+t._s(t.countUnchecked(e.id)))])])})),0)]),i("hr"),i("ul",{staticClass:"list-group list-group-flush mr-2"},[i("li",{staticClass:"list-group-item d-flex align-items-center",on:{click:t.editLists}},[i("span",{staticClass:"material-icons"},[t._v("edit")]),i("div",{staticClass:"p-1"},[t._v("Editar Listas")])]),i("li",{staticClass:"list-group-item d-flex align-items-center",on:{click:t.editNotebook}},[i("span",{staticClass:"material-icons"},[t._v("folder")]),i("div",{staticClass:"p-1"},[t._v("Gerenciar Cadernos")])]),i("hr"),t._m(3),t._m(4),t._m(5)])]],2)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{staticClass:"material-icons md-48 ml-3"},[t._v(" account_circle ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"d-flex list-group-item align-items-center"},[i("span",{staticClass:"material-icons md-dark"},[t._v("person")]),t._v(" Conta Local ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"d-flex list-group-item align-items-center"},[i("span",{staticClass:"material-icons md-dark"},[t._v("add")]),t._v(" Adicionar Conta ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-group-item d-flex align-items-center"},[i("span",{staticClass:"material-icons"},[t._v("lock_open")]),i("div",{staticClass:"p-1"},[t._v("Atualiza para pró")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-group-item d-flex align-items-center"},[i("span",{staticClass:"material-icons"},[t._v("settings")]),i("div",{staticClass:"p-1"},[t._v("Configurações")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-group-item d-flex align-items-center"},[i("span",{staticClass:"material-icons"},[t._v("help_outline")]),i("div",{staticClass:"p-1"},[t._v("Ajuda e Suporte")])])}],s=(i("b0c0"),i("5530")),o=i("2f62"),r={name:"Sidebar",data:function(){return{sidebarAcountsOpen:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(o["d"])(["actualList","sidebarOpen","loggedUser"])),Object(o["c"])(["taskList","checked","unchecked"])),methods:{countChecked:function(t){return this.checked(t).length},countUnchecked:function(t){return this.unchecked(t).length},goToList:function(t){var e=this;this.toggleSidebar(),this.$store.dispatch("ActionSetActualList",t),"Home"!=this.$route.name&&setTimeout((function(){e.$router.push({name:"Home"})}),500)},goToAllTasks:function(){var t=this;this.toggleSidebar(),"AllTasks"!=this.$route.name&&setTimeout((function(){t.$router.push({name:"AllTasks"})}),500)},editLists:function(){var t=this;this.toggleSidebar(),setTimeout((function(){t.$router.push({name:"EditLists"})}),500)},editNotebook:function(){var t=this;this.toggleSidebar(),setTimeout((function(){t.$router.push({name:"Notebooks"})}),500)},toggleSidebarAcounts:function(){this.sidebarAcountsOpen=!this.sidebarAcountsOpen},back:function(){this.$router.go(1)},toggleSidebar:function(){this.$store.dispatch("ActionToggleSidebar")}}},c=r,l=(i("0079"),i("2877")),d=Object(l["a"])(c,a,n,!1,null,"35578e38",null);e["a"]=d.exports},"4e9e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"backdrop",on:{click:t.toggleSidebar}})},n=[],s={methods:{toggleSidebar:function(){this.$store.dispatch("ActionToggleSidebar")}}},o=s,r=(i("7c31"),i("2877")),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("OrderModal"),i("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-body"},[i("h6",{staticClass:"font-weight-bold"},[t._v("Ordenar por")]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"orderRadio",id:"orderRAdioOrder"}}),i("label",{staticClass:"form-check-label",attrs:{for:"orderaAdio"}},[t._v("Ordem")])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"orderRadio",id:"orderRAdioTerm"}}),i("label",{staticClass:"form-check-label",attrs:{for:"orderRadio"}},[t._v("Prazo")])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"orderRadio",id:"orderRAdioproority"}}),i("label",{staticClass:"form-check-label",attrs:{for:"orderRadio"}},[t._v("Urgente")])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"orderRadio",id:"orderRAdioAlphabrtic"}}),i("label",{staticClass:"form-check-label",attrs:{for:"orderRadio"}},[t._v("Alfabético")])])])])])])}],c={name:"OrderModal"},l=c,d=i("2877"),u=Object(d["a"])(l,o,r,!1,null,null,null),k=u.exports,f={name:"App",components:{OrderModal:k}},m=f,p=(i("5c0b"),Object(d["a"])(m,n,s,!1,null,null,null)),h=p.exports,b=(i("d3b7"),i("8c4f")),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.sidebarOpen?i("Backdrop"):t._e(),i("Sidebar"),i("Navbar",{attrs:{navOptions:!0,title:t.actualList.name,toggleIcon:"menu",items:t.itemsMenu},on:{toggleAction:t.toggleSidebar,search:t.search}}),i("HeaderBar"),i("div",{staticClass:"tasks"},[i("Tasks",{attrs:{items:t.unchecked},on:{deleteTask:t.deleteTask,check:t.check}}),t.checked.length>0?i("div",{staticClass:"done-title d-flex align-items-center"},[i("div",{staticClass:"ml-2"},[t._v("CONCLUÍDO "+t._s(t.checked.length))])]):t._e(),i("Tasks",{attrs:{items:t.checked},on:{deleteTask:t.deleteTask,check:t.check}})],1),i("div",{staticClass:"add-task",on:{click:t.addTask}},[i("span",{staticClass:"material-icons md-48 text-primary"},[t._v(" control_point ")])])],1)},_=[],g=i("5530"),C=i("8d91"),A=i("fb80"),T=i("4e9e"),x=i("3e9b"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head-bar d-flex justify-content-end text-primary cursor-pointer",attrs:{"data-toggle":"modal","data-target":"#orderModal"}},[i("div",{staticClass:"mr-2"},[t._v("Ordernar por: ")]),i("div",{staticClass:"mx-2"},[i("div",{staticClass:"dropdown-toggle"},[t._v("Nome")])])])}],O={},j=O,w=(i("7653"),Object(d["a"])(j,y,L,!1,null,null,null)),S=w.exports,$=i("2f62"),E={name:"Home",data:function(){return{itemsMenu:[{icon:"search",action:"search"}]}},components:{Navbar:A["a"],Tasks:C["a"],Backdrop:T["a"],Sidebar:x["a"],HeaderBar:S},methods:Object(g["a"])(Object(g["a"])({},Object($["b"])(["ActionCheck","ActionToggleSidebar"])),{},{toggleSidebar:function(){this.ActionToggleSidebar()},check:function(t){this.ActionCheck(t)},addTask:function(){this.$router.push("AddTask")},deleteTask:function(t){this.$store.dispatch("ActionDeleteTask",t)},search:function(){this.$router.push({name:"SearchTask"})},procurar:function(){alert("Procurar por vózes")}}),computed:Object(g["a"])(Object(g["a"])(Object(g["a"])({},Object($["d"])(["tasks","actualList","sidebarOpen"])),Object($["c"])(["checked","unchecked"])),{},{checked:function(){return this.$store.getters["checked"](parseInt(this.actualList.id))},unchecked:function(){return this.$store.getters["unchecked"](parseInt(this.actualList.id))}})},N=E,P=(i("8189"),Object(d["a"])(N,v,_,!1,null,"30f011bd",null)),M=P.exports;a["a"].use(b["a"]);var q=[{path:"/",name:"Home",component:M},{path:"/addtask",name:"AddTask",component:function(){return i.e("addtask").then(i.bind(null,"9ee2"))}},{path:"/alltasks",name:"AllTasks",component:function(){return i.e("akktasksk").then(i.bind(null,"e23b"))}},{path:"/addlist",name:"AddList",component:function(){return i.e("addlist").then(i.bind(null,"7431"))}},{path:"/addnotebook",name:"AddNotebook",component:function(){return i.e("addnotebook").then(i.bind(null,"7158"))}},{path:"/editlist",name:"EditList",component:function(){return i.e("editlist").then(i.bind(null,"c461"))}},{path:"/task/:id",name:"Task",component:function(){return i.e("task").then(i.bind(null,"1d21"))}},{path:"/searchtask",name:"SearchTask",component:function(){return i.e("searchtask").then(i.bind(null,"b3c2"))}},{path:"/editlists",name:"EditLists",component:function(){return i.e("editlists").then(i.bind(null,"c059"))}},{path:"/notebooks",name:"Notebooks",component:function(){return i.e("notebooks").then(i.bind(null,"04d1"))}},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],I=new b["a"]({routes:q}),B=I;i("4de4"),i("7db0"),i("c740"),i("a434"),i("b0c0");a["a"].use($["a"]);var D=new $["a"].Store({state:{loggedUser:{name:"Gerardo Soletra Maestrano",email:"gerardo@ggmail.com"},actualList:{id:"1",idNotebook:1,name:"Mercado",color:"#000000"},currentNotebook:{id:1,name:"Pessoal"},notebooks:[{id:1,name:"Pessoal"},{id:2,name:"Trabalho"},{id:3,name:"Freelance"}],taskList:[{id:1,idNotebook:1,name:"Mercado",color:"#000000"},{id:2,idNotebook:2,name:"Trabalho",color:"#8600b3"},{id:3,idNotebook:1,name:"Coisas Casa",color:"#70db70"},{id:4,idNotebook:1,name:"Lazer",color:"#997a00"},{id:5,idNotebook:3,name:"Concursos",color:"#babaca"}],tasks:[{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Maçã",id:1603473327910,icon:"check_box_outline_blank"},{idList:1,checked:!0,priority:!1,note:"Aqui vai a nota",title:"Banana",id:1603473332177,icon:"check_box"},{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Manga",id:1603473336494,icon:"check_box_outline_blank"},{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Pera",id:1603412327910,icon:"check_box_outline_blank"},{idList:1,checked:!0,priority:!1,note:"Aqui vai a nota",title:"Uva",id:1603473332327,icon:"check_box"},{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Melancia",id:1656473336494,icon:"check_box_outline_blank"},{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Abóbora",id:1603476327910,icon:"check_box_outline_blank"},{idList:1,checked:!0,priority:!1,note:"Aqui vai a nota",title:"leite",id:1603473892177,icon:"check_box"},{idList:1,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Pão",id:1603473337894,icon:"check_box_outline_blank"},{idList:2,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Movimentações",id:1606789342139,icon:"check_box_outline_blank"},{idList:2,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Capturas",id:1603234346271,icon:"check_box_outline_blank"},{idList:3,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Pintar parede",id:1603476342139,icon:"check_box_outline_blank"},{idList:3,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Colocar Quadros",id:1603472346271,icon:"check_box_outline_blank"},{idList:4,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Praia",id:1603234340121,icon:"check_box_outline_blank"},{idList:4,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Casa de Campo",id:1641776342139,icon:"check_box_outline_blank"},{idList:4,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Andar de Bug",id:1603465746271,icon:"check_box_outline_blank"},{idList:5,checked:!1,priority:!1,note:"Aqui vai a nota",title:"Analisar Edital",id:0xe953ab1cabf,icon:"check_box_outline_blank"}],sidebarOpen:!1},mutations:{toggleSidebar:function(t){t.sidebarOpen=!t.sidebarOpen},deleteTaskList:function(t,e){var i=t.taskList.findIndex((function(t){return t.id===e.id}));t.taskList.splice(i,1)},editTaskList:function(t,e){var i=t.taskList.findIndex((function(t){return t.id===e.id}));t.taskList[i]={name:e.name,color:e.color,test:i}},editTask:function(t,e){var i=t.tasks.findIndex((function(t){return t.id===e.id})),n=e.title,s=e.note;a["a"].set(t.tasks,i,Object(g["a"])(Object(g["a"])({},t.tasks[i]),{},{title:n,note:s}))},addNotebook:function(t,e){t.notebooks.push(e)},addTaskList:function(t,e){t.taskList.push(e),t.actualList=t.taskList[t.taskList.length-1]},deleteTasks:function(t,e){var i=t.tasks.findIndex((function(t){return t.idList===e.id}));while(i>=0)t.tasks.splice(i,1),i=t.tasks.findIndex((function(t){return t.idList===e.id}))},deleteTask:function(t,e){var i=t.tasks.findIndex((function(t){return t.id===e.id}));t.tasks.splice(i,1)},addTask:function(t,e){t.tasks.push(e)},check:function(t,e){var i=t.tasks.findIndex((function(t){return t.id===e.id})),n=!t.tasks[i].checked,s=n?"check_box":"check_box_outline_blank";a["a"].set(t.tasks,i,Object(g["a"])(Object(g["a"])({},t.tasks[i]),{},{checked:n,icon:s}))},togglePriority:function(t,e){var i=t.tasks.findIndex((function(t){return t.id===e.id})),n=!t.tasks[i].priority;a["a"].set(t.tasks,i,Object(g["a"])(Object(g["a"])({},t.tasks[i]),{},{priority:n}))},setActualList:function(t,e){t.actualList=t.taskList.find((function(t){return t.id===e.id}))},setActualTask:function(t,e){t.actualTask=t.tasks.find((function(t){return t.id===e.id}))},setCurrentNotebook:function(t,e){t.currentNotebook=t.notebooks.find((function(t){return t.id===e.id}))}},actions:{ActionToggleSidebar:function(t){var e=t.commit;e("toggleSidebar")},ActionDeleteTaskList:function(t,e){var i=t.commit;i("deleteTaskList",e)},ActionEditTaskList:function(t,e){var i=t.commit;i("editTaskList",e)},ActionDeleteTasks:function(t,e){var i=t.commit;i("deleteTasks",e)},ActionDeleteTask:function(t,e){var i=t.commit;i("deleteTask",e)},ActionEditTask:function(t,e){var i=t.commit;i("editTask",e)},ActionAddTaskList:function(t,e){var i=t.commit,a=t.state;return new Promise((function(){setTimeout((function(){e.idNotebook=parseInt(a.currentNotebook.id),e.id=Date.now(),i("addTaskList",e)}),300)}))},ActionAddTask:function(t,e){var i=t.commit,a=t.state;return new Promise((function(){setTimeout((function(){e.idList=parseInt(a.actualList.id),e.id=Date.now(),e.icon="check_box_outline_blank",i("addTask",e)}),300)}))},ActionAddNotebook:function(t,e){var i=t.commit;return new Promise((function(){setTimeout((function(){e.id=Date.now(),i("addNotebook",e)}),300)}))},ActionCheck:function(t,e){var i=t.commit;i("check",e)},ActionTogglePriority:function(t,e){var i=t.commit;i("togglePriority",e)},ActionSetActualList:function(t,e){var i=t.commit;i("setActualList",e)},ActionSetActualTask:function(t,e){var i=t.commit;i("setActualTask",e)},ActionSetCurrentNotebook:function(t,e){var i=t.commit;i("setCurrentNotebook",e)}},getters:{checked:function(t){return function(e){return null!=e?t.tasks.filter((function(t){return!0===t.checked&&t.idList===e})):t.tasks.filter((function(t){return!0===t.checked}))}},unchecked:function(t){return function(e){return null!=e?t.tasks.filter((function(t){return!1===t.checked&&t.idList===e})):t.tasks.filter((function(t){return!1===t.checked}))}},currentTask:function(t){return function(e){var i=t.tasks.findIndex((function(t){return t.id==e}));return t.tasks[i]}},taskList:function(t){return t.taskList.filter((function(e){return e.idNotebook===parseInt(t.currentNotebook.id)}))}},modules:{}});i("7e7d"),i("4989");a["a"].config.productionTip=!1,new a["a"]({router:B,store:D,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("9c0c"),n=i.n(a);n.a},"687e":function(t,e,i){},"6bc9":function(t,e,i){},"739b":function(t,e,i){},7653:function(t,e,i){"use strict";var a=i("16c6"),n=i.n(a);n.a},"77d6":function(t,e,i){"use strict";var a=i("739b"),n=i.n(a);n.a},"7c31":function(t,e,i){"use strict";var a=i("687e"),n=i.n(a);n.a},"7e7d":function(t,e,i){},8189:function(t,e,i){"use strict";var a=i("c2ae"),n=i.n(a);n.a},"8d91":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list-group list-group-flush"},t._l(t.items,(function(e){return i("li",{key:"task_"+e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center",style:"border-left: 5px solid "+t.cor(e)},[i("div",{staticClass:"d-flex align-items-center"},[i("span",{staticClass:"material-icons-outlined",on:{click:function(i){return t.check(e)}}},[t._v(t._s(e.icon))]),i("span",{staticClass:"ml-2",class:{"text-danger":e.priority,"text-decoration-line-through text-muted":e.checked},on:{click:function(i){return t.viewTask(e)}}},[t._v(" "+t._s(e.title)+" ")])]),i("div",[i("span",{staticClass:"material-icons",on:{click:function(i){return t.deleteTask(e)}}},[t._v("delete")])])])})),0)},n=[],s=(i("7db0"),i("5530")),o=i("2f62"),r={name:"Tasks",data:function(){return{list:{color:"purple"}}},computed:Object(s["a"])({},Object(o["d"])(["taskList"])),props:{items:Array},methods:{check:function(t){this.$emit("check",t)},viewTask:function(t){this.$store.dispatch("ActionSetActualTask",t),this.$router.push({name:"Task",params:{id:t.id}})},deleteTask:function(t){this.$emit("deleteTask",t)},cor:function(t){return this.taskList.find((function(e){return e.id===t.idList})).color}}},c=r,l=(i("77d6"),i("2877")),d=Object(l["a"])(c,a,n,!1,null,"6a4b68fb",null);e["a"]=d.exports},"9c0c":function(t,e,i){},c2ae:function(t,e,i){},fb80:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar bg-primary text-light fixed-top"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"navbar-toggler"},[i("span",{staticClass:"material-icons",on:{click:t.toggleAction}},[t._v(t._s(t.toggleIcon))])]),i("span",{staticClass:"navbar-brand mb-0 mr-auto ml-2 h1"},[t._v(t._s(t.title))]),i("div",{staticClass:"d-flex justify-content-between"},[t._l(t.items,(function(e,a){return i("span",{key:"menu_"+a,staticClass:"material-icons mr-2",on:{click:function(i){return t.$emit(e.action,t.payload,e.addMore)}}},[t._v(t._s(e.icon))])})),t.navOptions?i("NavOptions"):t._e()],2)])])])},n=[],s=i("5530"),o=i("2f62"),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropleft"},[i("span",{staticClass:"material-icons",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("more_vert")]),i("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#orderModal"}},[t._v("Ordenar")])]),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Demarcar Tarefas Concluídas")])]),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Excluir Tarefas Concluídas")])]),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Esconder Tarefas Concluídas")])]),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Enviar")])]),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Forçar Sincronização")])])])])}],l={name:"NavOptions"},d=l,u=i("2877"),k=Object(u["a"])(d,r,c,!1,null,null,null),f=k.exports,m={name:"Navbar",components:{NavOptions:f},props:{title:String,toggleIcon:String,items:Array,navOptions:{type:Boolean,default:!1},payload:Object,option:Boolean},computed:Object(s["a"])({},Object(o["d"])(["sidebarOpen"])),methods:{toggleAction:function(t,e){this.$emit("toggleAction",t,e)}}},p=m,h=Object(u["a"])(p,a,n,!1,null,"68673fef",null);e["a"]=h.exports}});
//# sourceMappingURL=app.e2029d06.js.map