<template>
  <div>
    <NavHome />
    <div class="tasks">
       <Tasks
      @check="check"
      :items="checked"
    />
    <div 
    v-if="unchecked.length > 0"
      class="done-title d-flex align-items-center">
        <div class="ml-2">CONCLUÍDO {{unchecked.length}}</div>
    </div>
    <Tasks
      @check="check"
      :items="unchecked"
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
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    NavHome, Tasks
  },
  methods: {
    ...mapActions(['ActionCheck', 'ActionChangeNavbarMode']),
   check(task){
     this.ActionCheck(task)
    },
    addTask(){
      this.$router.push('AddTask')
    },
    changeNavbarMode(mode){
      this.ActionChangeNavbarMode(mode)
    }
  },
  computed :{
   ...mapState(['tasks']),
    ...mapGetters(['checked', 'unchecked'])
  },
  beforeMount(){
    this.changeNavbarMode('Home')
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
