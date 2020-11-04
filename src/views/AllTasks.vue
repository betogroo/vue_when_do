<template>
  <div>
      <Backdrop
        v-if="sidebarOpen"
        />
        <Sidebar 
        />
   
    <Navbar
      :navOptions="true"
      :title="actualList.name"
      toggleIcon = "menu"
      @toggleAction="toggleSidebar"
      :items="itemsMenu"
      @search="search"
    />
    <div class="done-title d-flex align-items-center">
      <span class="material-icons">
chevron_right
</span>
        <div class="ml-2">SEM DATA {{unchecked.length}}</div>
    </div>
   
    <div class="tasks">
       <Tasks
       @deleteTask="deleteTask"
      @check="check"
      :items="unchecked"
      :listColor= this.actualList.color
    />
<div class="done-title d-flex align-items-center">
<span class="material-icons">
chevron_right
</span>
        <div class="ml-2">CONCLUÍDAS {{checked.length}}</div>
    </div>
  <Tasks
       @deleteTask="deleteTask"
      @check="check"
      :items="checked"
      :listColor= this.actualList.color
    />
    </div>
   <div 
    @click="addTask"
    class="add-task">
     <span class="material-icons md-48 text-primary">
        control_point
      </span>
   </div>
  </div>

</template>

<script>

import Tasks from '@/components/Tasks'
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
    Navbar, Tasks, Backdrop, Sidebar
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
    color: gray
  }
  .add-task{
    margin: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>
