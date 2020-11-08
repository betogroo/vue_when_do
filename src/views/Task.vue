<template>
  <div>
    <Navbar
        :title="currentTask.title"
        toggleIcon = "close"
        @toggleAction="$router.back()"
        :items="itemsMenu"
        :payload="currentTask"
        @deleteTask="deleteTask"
        @editTask="editTask"
        @move="move"
    />
   
        <TaskOptions
            mode="edit"
            :currentTask="currentTask"
            @check="check"
            @togglePriority="togglePriority"
        />
        <input type="text" class="form-control m-1 text-dark" id="taskName" v-model="currentTask.title">
            <hr class="m-1 p-0">
        <input type="text" class="form-control m-1" id="taskNotes" v-model="currentTask.note" placeholder="Notas">
 


  </div>
</template>

<script>

import Navbar from '@/components/Nav/Navbar.vue'
import TaskOptions from '@/components/TaskOptions.vue'
import { mapState } from 'vuex'

export default {
    name: 'Task',
    components: {
        Navbar, TaskOptions
    },
    data(){
        return{
            itemsMenu:[
        {icon: 'redo', action:'move'},
        {icon: 'delete', action:'deleteTask'},
        {icon: 'check', action:'editTask'}
        ]
        }
    },
    computed: {
    ...mapState(['actualTask']),
    currentTask(){
        return this.$store.getters['currentTask'](parseInt(this.$route.params.id))
    }
    },
    methods: {
       check(task){
            this.$store.dispatch('ActionCheck', task)
        },
       togglePriority(task){
            this.$store.dispatch('ActionTogglePriority', task)
        },
        deleteTask(task){
            this.$store.dispatch('ActionDeleteTask', task)
            this.$router.push({name: 'Home'})
        },
        editTask(task){
            this.$store.dispatch('ActionEditTask', task)
            this.$router.push({name: 'Home'})
        },
        move(task){
            alert(`Vai mover a tarefa:${task.title}` )
        }
    }

}
</script>

<style lang="scss" scoped>
    .task-options{
        height: 65px;
    }
    .form-control{
        border: 0;

    }
</style>