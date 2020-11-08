<template>
  <div>
  <SelectListModal />
      <Backdrop
        v-if="sidebarOpen"
        />
        <Sidebar 
        />
   
    <Navbar
      :navOptions="true"
      title="Todas as Tarefas"
      toggleIcon = "menu"
      @toggleAction="toggleSidebar"
      :items="itemsMenu"
      @search="search"
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
import SelectListModal from '@/components/SelectListModal'
import Navbar from '@/components/Nav/Navbar'
import Backdrop from '@/components/Nav/Backdrop'
import Sidebar from '@/components/Sidebar/Sidebar'
import {mapActions,  mapGetters, mapState} from 'vuex'
export default {
  name: 'Home',
data(){
  return{
    itemsMenu:[
      {icon: 'search', action:'search'}
    ]
  }
},
  components: {
    Navbar, Backdrop, Sidebar, CollapseTasks, SelectListModal
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
    search(){
      this.$router.push({name: 'SearchTask'})
    },
    procurar(){
      alert('Procurar por vózes')
    }
  },
  computed :{
    ...mapState(['tasks', 'actualList', 'sidebarOpen']),
    ...mapGetters(['checked', 'unchecked']),
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
