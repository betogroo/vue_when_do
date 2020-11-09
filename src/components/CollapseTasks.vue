<template>
  <div>
      <a @click.prevent="toggleCollapse()" class="done-title d-flex align-items-center dropright" data-toggle="collapse" :href="`#${taskList}`">
        <span class="material-icons">{{collapseIcon ? 'chevron_right': 'expand_more'}}</span>
        <div class="ml-2">{{title}}</div>
    </a>
       <Tasks
        class="collapse"
        :id="taskList"
        @deleteTask="deleteTask"
        @check="check"
        :items="taskItems"
    />
  </div>
</template>

<script>
import Tasks from '@/components/Tasks'
export default {
    name: 'CollapseTasks',
    components: { Tasks },
    data(){
      return{
        collapseIcon: true,
      }
    },
    props:{
      title: String,
      taskList: String,
      taskItems: Array
    },
    methods:{
      toggleCollapse(){
      this.collapseIcon = !this.collapseIcon
      },
      check(item){
            this.$emit('check', item)
      },
      deleteTask(item){
            this.$emit('deleteTask', item)
      },
    }
}
</script>

<style lang="scss" scoped>
  .done-title{
    padding-top: 0.20rem !important;
    padding-bottom: 0.20rem !important;
    margin-bottom: 0.10rem !important;
    background-color: lightgray;
    text-decoration: none;
    color: gray
  }
</style>