(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task"],{"1d21":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DeleteModal",{attrs:{title:"Tarefa",item:t.currentTask},on:{deleteCurrentItem:t.deleteTask}}),r("Navbar",{attrs:{title:t.actualList.name,toggleIcon:"close",item:t.currentTask},on:{toggleAction:function(e){return t.$router.back()},deleteItem:t.deleteTask,saveItem:t.saveTask,moveItem:t.moveTask}}),r("TaskOptions",{attrs:{currentTask:t.currentTask},on:{check:t.check,togglePriority:t.togglePriority}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.title,expression:"currentTask.title"}],staticClass:"form-control m-1 text-dark",attrs:{type:"text",id:"taskName"},domProps:{value:t.currentTask.title},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"title",e.target.value)}}}),r("hr",{staticClass:"m-1 p-0"}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTask.note,expression:"currentTask.note"}],staticClass:"form-control m-1",attrs:{type:"text",id:"taskNotes",placeholder:"Notas"},domProps:{value:t.currentTask.note},on:{input:function(e){e.target.composing||t.$set(t.currentTask,"note",e.target.value)}}})],1)},s=[],i=r("5530"),n=r("fb80"),o=r("ec05"),c=r("fa96"),u=r("2f62"),l={name:"Task",components:{Navbar:n["a"],TaskOptions:c["a"],DeleteModal:o["a"]},computed:Object(i["a"])({},Object(u["d"])(["currentTask","actualList"])),methods:{check:function(t){this.$store.dispatch("ActionCheck",t)},togglePriority:function(t){this.$store.dispatch("ActionTogglePriority",t)},deleteTask:function(){this.$store.dispatch("ActionDeleteTask",this.currentTask),this.$router.push({name:"Home"})},saveTask:function(t){this.$store.dispatch("ActionEditTask",t),this.$router.push({name:"Home"})},moveTask:function(t){alert("Vai mover a tarefa ".concat(t.title))}}},k=l,m=(r("a2f3"),r("2877")),d=Object(m["a"])(k,a,s,!1,null,"b45ef6f6",null);e["default"]=d.exports},6473:function(t,e,r){"use strict";var a=r("f365"),s=r.n(a);s.a},a2f3:function(t,e,r){"use strict";var a=r("e727"),s=r.n(a);s.a},e727:function(t,e,r){},f365:function(t,e,r){},fa96:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"task-options d-flex justify-content-between align-items-center"},["Task"===t.$route.name?r("div",[r("span",{staticClass:"material-icons-outlined mr-1",on:{click:function(e){return t.check(t.currentTask)}}},[t._v(t._s(t.currentTask.checked?"check_box":"check_box_outline_blank")+" ")]),r("span",{staticClass:"material-icons ml-1",class:{"text-danger":t.currentTask.priority},on:{click:function(e){return t.togglePriority(t.currentTask)}}},[t._v("error_outline")])]):t._e(),"AddTask"===t.$route.name?r("div",[r("span",{staticClass:"material-icons-outlined mr-1  text-muted"},[t._v("check_box_outline_blank ")]),r("span",{staticClass:"material-icons ml-1",class:{"text-danger":t.priority},on:{click:function(e){return t.togglePriority(t.priority)}}},[t._v("error_outline")])]):t._e(),r("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v("Prazo, Lembrete Repetir")])])},s=[],i=(r("b0c0"),{name:"TaskOptions",data:function(){return{priority:!1}},props:{currentTask:Object},methods:{check:function(t){this.$emit("check",t),t.checked=!t.checked,this.$store.dispatch("ActionSetCurrentTask",t)},togglePriority:function(t){"Task"===this.$route.name&&(this.$emit("togglePriority",t),t.priority=!t.priority,this.$store.dispatch("ActionSetCurrentTask",t)),"AddTask"===this.$route.name&&(this.priority=!t,this.$emit("togglePriority",this.priority))}}}),n=i,o=(r("6473"),r("2877")),c=Object(o["a"])(n,a,s,!1,null,"2dba5304",null);e["a"]=c.exports}}]);
//# sourceMappingURL=task.eb53f8ba.js.map