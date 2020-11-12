<template>
  <div>
    <DeleteModal 
        title="Tarefa"
        @deleteCurrentItem="deleteTask"
        :item="currentTask"
    />
    <Navbar
            :title="actualList.name"
            toggleIcon = "close"
            @toggleAction="$router.back()"
            :item="currentTask"
            @deleteItem="deleteTask"
            @saveItem="saveTask"
    />
   
        <TaskOptions
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
import DeleteModal from '@/components/DeleteModal.vue'
import TaskOptions from '@/components/TaskOptions.vue'
import { mapState } from 'vuex'

export default {
    name: 'Task',
    components: {
        Navbar, TaskOptions, DeleteModal
    },
    computed: {
    ...mapState(['currentTask', 'actualList'])
    },
    methods: {
       check(task){
            this.$store.dispatch('ActionCheck', task)
        },
       togglePriority(task){
            this.$store.dispatch('ActionTogglePriority', task)
        },
        deleteTask(){
            this.$store.dispatch('ActionDeleteTask', this.currentTask)
            this.$router.push({name: 'Home'})
        },
        saveTask(task){
            this.$store.dispatch('ActionEditTask', task)
            this.$router.push({name: 'Home'})
            
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