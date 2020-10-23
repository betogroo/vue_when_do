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
            <button 
                @click.prevent="addTask(task)"
                class="btn btn-primary"><span class="material-icons">done</span>
            </button>
        </form>
  </div>
</template>

<script>
import NavAdd from '@/components/Nav/NavAdd'
import { mapActions } from 'vuex'
export default {
    name: 'AddTask',
    components: { NavAdd },
    data(){
        return{
            task: { checked: false}
        }
    },
    computed:{
        tasks(){
            return this.$store.state.tasks
        }
    },
    methods:{
        ...mapActions(['ActionChangeNavbarMode']),
        changeNavbarMode(mode){
            this.ActionChangeNavbarMode(mode)
        },
        addTask(task, more){
            this.$store.dispatch('ActionAddTask', task)
            this.task = {checked:false}
                if (!more) {
                    this.$router.push({name: 'Home'})
                }
            
        }
    },
    beforeMount(){
        this.changeNavbarMode('Add')
    }
}
</script>

<style lang="scss" scoped>
    .task-options{
        border-bottom: 2px solid black;
        background-color: white;
        height: 75px;
    }
    .form-control{
        border: none;
        padding-top: 0;
        padding-bottom: 0;
        min-height: calc(1em + 0.5rem + 1px);
    }
</style>