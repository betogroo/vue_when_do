<template>
  <div>
     <DeleteModal
          title="Tarefa" 
          @deleteCurrentItem="deleteCurrentTask"
          @resetCurrentItem="resetCurrentTask"
          :item="currentTask"
        />
      <SelectItemModal 
        :items="taskList"
        @setItem="setTaskList"
      />
      <Backdrop
        v-if="sidebarOpen"
        />
        <Sidebar 
        />
   
    <Navbar
      title="Todas as Tarefas"
      toggleIcon = "menu"
      @toggleAction="toggleSidebar"
      @searchItem="searchTask"
    />
    <CollapseTasks
      title="SEM DATA"
      taskList="unchecked" 
      @check="check"
      @deleteTask="deleteTask"
      :taskItems="unchecked"
    />
    <CollapseTasks
      title="FINALIZADOS"
      taskList="checked" 
      @check="check"
      @deleteTask="deleteTask"
      :taskItems="checked"
    />
   <AddFloater 
      @addItem="addTask"
      :openModal="true"
    />
  </div>

</template>

<script>


import CollapseTasks from '@/components/CollapseTasks'
import SelectItemModal from '@/components/SelectItemModal'
import DeleteModal from '@/components/DeleteModal'
import AddFloater from '@/components/AddFloater'
import Navbar from '@/components/Nav/Navbar'
import Backdrop from '@/components/Nav/Backdrop'
import Sidebar from '@/components/Sidebar/Sidebar'
import {mapActions,  mapGetters, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar, Backdrop, Sidebar, CollapseTasks, SelectItemModal, DeleteModal, AddFloater
  },
  methods: {
    ...mapActions(['ActionCheck', 'ActionToggleSidebar']),
    toggleSidebar(){
      this.ActionToggleSidebar()
    },
   check(task){
     this.ActionCheck(task)
    },
    addTask(){
      this.$router.push('AddTask')
    },
    deleteTask(task){
      this.$store.dispatch('ActionDeleteTask', task)
    },
    deleteCurrentTask(task){
      this.$store.dispatch('ActionDeleteTask', task)
      this.resetCurrentTask()
    },
    resetCurrentTask(){
      this.$store.dispatch('ActionSetCurrentTask', {})
    },
    searchTask(){
      this.$router.push({name: 'SearchTask'})
    },
    setTaskList(item){
      this.$store.dispatch('ActionSetActualList', item)
      this.$router.push({name: 'AddTask'})
    }
  },
  computed :{
    ...mapState(['tasks', 'currentTask', 'actualList', 'sidebarOpen']),
    ...mapGetters(['checked', 'unchecked', 'taskList']),
    checked(){
      return this.$store.getters['checked'](null)
    },
    unchecked(){
      return this.$store.getters['unchecked'](null)
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .form-check{
    margin: 1rem !important;
  }
  .done-title{
    //padding: 0.15rem !important;
    background-color: lightgray;
    text-decoration: none;
    color: gray
  }
  .add-task{
    margin: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>
