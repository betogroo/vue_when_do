<template>
  <div>
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
    <div class="d-flex align-items-end">
      <div>Add</div>
    </div>
   
  </div>
</template>

<script>

import Tasks from '@/components/Tasks'
export default {
  name: 'Home',
  data(){
    return{
      tasks: [
        {
        title: 'Montar Monitor',
        checked: false,
        id: 1,
        icon: 'check_box_outline_blank'
      },
        {
        title: 'Montar suporte',
        checked: false,
        id: 2,
        icon:'check_box_outline_blank'
      },
        {
        title: 'Arrumar tomada',
        checked: false,
        id: 4,
        icon:'check_box_outline_blank'
      },
        {
        title: 'Arrumar tomada',
        checked: false,
        id: 6,
        icon:'check_box_outline_blank'
      },
        {
        title: 'Arrumar tomada',
        checked: false,
        id: 8,
        icon:'check_box_outline_blank'
      }
    ]
    }
  },
  components: {
    Tasks
  },
  methods: {
   check(task){
      const i = this.tasks.findIndex(item => item.id === task.id)
      const checked = !this.tasks[i].checked
      const icon = checked ? 'done' : 'check_box_outline_blank'
      this.$set(this.tasks, i, {  ...this.tasks[i], checked, icon })
      console.log(this.tasks)
    },
      edit(task){
      alert(`Abrir uma janela para editar a task número ${task.id}`)
    }
  },
  computed :{
    checked(){
      return this.tasks.filter(item => item.checked === false)
    },    
    unchecked(){
      return this.tasks.filter(item => item.checked === true)
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
</style>
