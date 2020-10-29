<template>
  <div>
    <NavHome />
    <div class="tasks">
       <Tasks
       @deleteTask="deleteTask"
      @check="check"
      :items="unchecked"
      :listColor= this.actualList.color
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
import NavHome from '@/components/Nav/NavHome'
import {mapActions,  mapGetters, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    NavHome, Tasks
  },
  methods: {
    ...mapActions(['ActionCheck']),
   check(task){
     this.ActionCheck(task)
    },
    addTask(){
      this.$router.push('AddTask')
    },
    deleteTask(task){
      this.$store.dispatch('ActionDeleteTask', task)
    }
  },
  computed :{
    ...mapState(['tasks', 'actualList']),
    ...mapGetters(['checked', 'unchecked']),
    checked(){
      return this.$store.getters['checked'](parseInt(this.actualList.id))
    },
    unchecked(){
      return this.$store.getters['unchecked'](parseInt(this.actualList.id))
    }
    
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
  .add-task{
    margin: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>
