(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task"],{"1d21":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("NavTask",{attrs:{task:t.currentTask},on:{editTask:t.editTask,deleteTask:t.deleteTask}}),s("div",{staticClass:"task-options d-flex justify-content-between align-items-center"},[s("div",[s("span",{staticClass:"material-icons mr-1",on:{click:function(e){return t.check(t.currentTask)}}},[t._v(t._s(t.currentTask.icon))]),s("span",{staticClass:"material-icons ml-1",class:{"text-danger":t.currentTask.priority},on:{click:function(e){return t.togglePriority(t.currentTask)}}},[t._v("error_outline")])]),s("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v("Prazo, Lembrete Repetir")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.title,expression:"currentTask.title"}],staticClass:"form-control m-1 text-dark",attrs:{type:"text",id:"taskName"},domProps:{value:t.currentTask.title},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"title",e.target.value)}}}),s("hr",{staticClass:"m-1 p-0"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.note,expression:"currentTask.note"}],staticClass:"form-control m-1",attrs:{type:"text",id:"taskNotes",placeholder:"Notas"},domProps:{value:t.currentTask.note},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"note",e.target.value)}}})],1)},n=[],i=s("5530"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar bg-primary text-light"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar-toggler"},[s("span",{staticClass:"material-icons",on:{click:t.back}},[t._v("close")])]),s("span",{staticClass:"navbar-brand mb-0 mr-auto ml-2 h1"},[t._v("Editar Lista")]),s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"material-icons mr-2"},[t._v("redo")]),s("span",{staticClass:"material-icons mr-2",on:{click:function(e){return t.deleteTask(t.task)}}},[t._v("delete")]),s("span",{staticClass:"material-icons",on:{click:function(e){return t.editTask(t.task)}}},[t._v("check")])])])])])},c=[],o={name:"NavAddList",props:{task:Object},methods:{back:function(){this.$router.go(-1)},deleteTask:function(t){this.$emit("deleteTask",t)},editTask:function(t){this.$emit("editTask",t),console.log(t)}}},l=o,u=s("2877"),d=Object(u["a"])(l,r,c,!1,null,"48377fb3",null),k=d.exports,m=s("2f62"),p={name:"Task",components:{NavTask:k},computed:Object(i["a"])(Object(i["a"])({},Object(m["d"])(["actualTask"])),{},{currentTask:function(){return this.$store.getters["currentTask"](parseInt(this.$route.params.id))}}),methods:{check:function(t){this.$store.dispatch("ActionCheck",t)},togglePriority:function(t){this.$store.dispatch("ActionTogglePriority",t)},deleteTask:function(t){this.$store.dispatch("ActionDeleteTask",t),this.$router.push({name:"Home"})},editTask:function(t){this.$store.dispatch("ActionEditTask",t),this.$router.push({name:"Home"})}}},v=p,T=(s("b39f"),Object(u["a"])(v,a,n,!1,null,null,null));e["default"]=T.exports},"934e":function(t,e,s){},b39f:function(t,e,s){"use strict";var a=s("934e"),n=s.n(a);n.a}}]);
//# sourceMappingURL=task.ea92033b.js.map