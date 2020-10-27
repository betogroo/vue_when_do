<template>
  <div>
      <NavAdd
        :task="task" :more="more"
        @add-task="addTask"
      />
      <div class="task-options"></div>
        <form @submit.prevent="addTask(task)">
            <input 
                v-model="task.title"
                type="text" class="form-control m-1" id="formGroupExampleInput" placeholder="Título">
            <hr>
            <input 
                v-model="task.notes"
                type="text" class="form-control m-1" id="formGroupExampleInput2" placeholder="Notas">
        </form>
  </div>
</template>

<script>
import NavAdd from '@/components/Nav/NavAdd'
export default {
    name: 'AddTask',
    components: { NavAdd },
    data(){
        return{
            task: { checked: false},
            more: ''
        }
    },
    computed:{
        tasks(){
            return this.$store.state.tasks
        }
    },
    methods:{
        addTask(task, more){
            this.$store.dispatch('ActionAddTask', task)
            this.task = {checked:false}
                if (!more) {
                    this.$router.push({name: 'Home'})
                }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-control{
        border: none;
        padding-top: 0;
        padding-bottom: 0;
        min-height: calc(1em + 0.5rem + 1px);
    }
</style>