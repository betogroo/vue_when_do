<template>
  <div>
        <Navbar 
            :title="actualList.name"
            toggleIcon="close"
            @toggleAction="$router.back()"
            @addTask="addTask"
            :items="itemsMenu"
            :navOptions="true"
            :payload="task"
        />
      <div class="task-options"></div>
        <form @submit.prevent="addTask(task, option)">
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
import Navbar from '@/components/Nav/Navbar'
import { mapState } from 'vuex'
export default {
    name: 'AddTask',
    components: { Navbar },
    data(){
        return{
            itemsMenu:[
                {icon: 'done_all', action: 'addTask', addMore: true},
                {icon: 'done', action: 'addTask'}
            ],
            task: { checked: false}
        }
    },
    computed:{
        ...mapState(['actualList']),
        tasks(){
            return this.$store.state.tasks
        }
    },
    methods:{
        addTask(task, option){
            this.$store.dispatch('ActionAddTask', task, option)
            this.task = {checked:false}
            if (!option) {
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