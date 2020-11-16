<template>
  <div>
    <SelectItemModal
        title="Selecione a Lista"
        :items="taskList"
        @setItem="moveTask"
    />
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
import SelectItemModal from '@/components/SelectItemModal.vue'
import TaskOptions from '@/components/TaskOptions.vue'
import { mapState } from 'vuex'

export default {
    name: 'Task',
    components: {
        Navbar, TaskOptions, DeleteModal, SelectItemModal
    },
    computed: {
    ...mapState(['currentTask', 'actualList', 'taskList'])
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
        },
        moveTask(taskList){
            this.$store.dispatch('ActionMoveTask', taskList).then(() =>{
                this.$router.push({name: 'Home'})
            })
            
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