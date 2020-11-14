<template>
  <div> <SortModal />
        <DeleteModal
          title="Tarefa" 
          @deleteCurrentItem="deleteCurrentTask"
          @resetCurrentItem="resetCurrentTask"
          :item="currentTask"
        />
      <Backdrop
        v-if="sidebarOpen"
        />
        <Sidebar 
        />
    <Navbar
        :title="actualList.name"
        toggleIcon = "menu"
        @toggleAction="toggleSidebar"
        @searchItem="searchTask"
    />
   <HeaderBar />
    <div class="tasks">
       <Tasks
       @deleteTask="deleteTask"
      @check="check"
      :items="unchecked"
    />
    <div 
    v-if="checked.length > 0"
      class="done-title d-flex align-items-center">
        <div class="ml-2">CONCLUÍDO {{checked.length}}</div>
    </div>
    <Tasks
      @deleteTask="deleteTask"
      @check="check"
      :items="checked"
    />
    </div>
   <AddFloater
      @addItem="addTask"
      :openModal="false"
  />
  </div>

</template>

<script>

import Tasks from '@/components/Tasks'
import SortModal from '@/components/SortModal'
import Navbar from '@/components/Nav/Navbar'
import Backdrop from '@/components/Nav/Backdrop'
import Sidebar from '@/components/Sidebar/Sidebar'
import DeleteModal from '@/components/DeleteModal'
import HeaderBar from '@/components/HeaderBar'
import AddFloater from '@/components/AddFloater'
import axios from 'axios'
import {mapActions,  mapGetters, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar, Tasks, Backdrop, Sidebar, HeaderBar, DeleteModal, SortModal, AddFloater
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
    procurar(){
      alert('Procurar por vózes')
    }
  },
  computed :{
    ...mapState(['tasks', 'currentTask', 'actualList', 'sidebarOpen', 'config']),
    ...mapGetters(['checked', 'unchecked']),
    checked(){
      return this.$store.getters['checked'](parseInt(this.actualList.id))
    },
    unchecked(){
      return this.$store.getters['unchecked'](parseInt(this.actualList.id))
    }
  },
  created(){
    axios({
      url: 'https://server-when-do.herokuapp.com',
      method: 'post',
      data: {
        query: `
          {
            notebooks {
              id
              name
            }
            tasklists{
              id
              name
            }
            checked: 
                tasks (checked: true) {
                  id
                  title
                  note
                  checked
                  priority
                }
            unchecked: 
                tasks (checked: false) {
                  id
                  title
                  note
                  checked
                  priority
                }
          }
        `
      } 
    }).then(res =>{
        console.log(res.data.data)
      })
  }
}
</script>

<style lang="scss" scoped>
  .form-check{
    margin: 1rem !important;
  }
  .done-title{
    padding: 0.15rem !important;
    background-color: lightgray;
    color: gray
  }
  
</style>
