<template>
  <div>
      <NavSearch
      />
     
  </div>
</template>

<script>
import NavSearch from '@/components/Nav/NavSearch'
export default {
    name: 'AddTask',
    components: { NavSearch },
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