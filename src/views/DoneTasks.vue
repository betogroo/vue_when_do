<template>
  <div>
    <DeleteModal
          title="Tarefa" 
          @deleteCurrentItem="deleteCurrentTask"
          @resetCurrentItem="resetCurrentTask"
          :item="currentTask"
        />
      <SelectListModal />
      <Backdrop
        v-if="sidebarOpen"
        />
        <Sidebar 
        />
   
    <Navbar
      :navOptions="true"
      title="Tarefas Finalizadas"
      toggleIcon = "menu"
      @toggleAction="toggleSidebar"
      :items="itemsMenu"
      @search="search"
    />
    
   <CollapseTasks v-for="item in checked" :key="item.list.id"
      :title="item.list.name"
      :taskList="`checked_${item.list.id}`" 
      @check="check"
      @deleteTask="deleteTask"
      :taskItems="item.task"
    />    
   <div 
    data-toggle="modal" data-target="#SelectListModal"
    class="add-task">
     <span class="material-icons md-48 text-primary">
        control_point
      </span>
   </div>
  </div>

</template>

<script>

import CollapseTasks from '@/components/CollapseTasks'
import Navbar from '@/components/Nav/Navbar'
import SelectListModal from '@/components/SelectListModal'
import DeleteModal from '@/components/DeleteModal'
import Backdrop from '@/components/Nav/Backdrop'
import Sidebar from '@/components/Sidebar/Sidebar'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
data(){
  return{
    collapseUncheckedIcon: true,
    collapseCheckedIcon: true,
    itemsMenu:[
      {icon: 'search', action:'search'}
    ]
  }
},
  components: {
    Navbar, Backdrop, Sidebar, SelectListModal, CollapseTasks, DeleteModal
  },
  methods: {
    ...mapActions(['ActionCheck', 'ActionToggleSidebar']),
    toggleSidebar(){
      this.ActionToggleSidebar()
    },
    toggleCollapseUnchecked(){
      this.collapseUncheckedIcon = !this.collapseUncheckedIcon
    },
    toggleCollapseChecked(){
      this.collapseCheckedIcon = !this.collapseCheckedIcon
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
    search(){
      this.$router.push({name: 'SearchTask'})
    },
    procurar(){
      alert('Procurar por vózes')
    }
  },
  computed :{
    ...mapState(['tasks', 'currentTask', 'actualList', 'sidebarOpen', 'taskList']),
    checked(){
      return this.taskList.map( item =>{
        return{
          list: {id: item.id, name: item.name},
          task: this.$store.getters['checked'](item.id)
        }
      }).filter(item =>item.task.length > 0)
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
