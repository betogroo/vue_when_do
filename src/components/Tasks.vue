<template>
  <ul class="list-group list-group-flush">
      <li
        v-for="item in items" :key="'task_'+ item.id"
        :style="`border-left: 5px solid ${cor(item)}`"
        class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <span @click="check(item)" class="material-icons-outlined">{{item.icon}}</span>
            <span
                @click="viewTask(item)" 
                class="ml-2"
                :class="{'text-danger': item.priority, 'text-decoration-line-through text-muted': item.checked}">
                    {{item.title}}
            </span>
            </div>
        <div>
            <span
                @click="deleteTask(item)"
                class="material-icons">delete</span>
        </div>
      </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Tasks',
    data(){
        return{
            list:{color: 'purple'},
        }
    },
    computed:{
        ...mapState(['taskList'])
    },
    props: {
        items: Array
    },
    methods: {
        check(item){
            this.$emit('check', item)
        },
        viewTask(task){
            this.$store.dispatch('ActionSetActualTask', task)
            this.$router.push({name: 'Task', params:{id: task.id}})
        },
        deleteTask(item){
            this.$emit('deleteTask', item)
        },
        cor(i){
            return this.taskList.find(item => item.id === i.idList).color
        }
    }
}
</script>

<style lang="scss" scoped>
    .checked{
        color: lightgray!important;
        text-decoration: line-through;
    }
    .priority{
        color: red;    
    }
</style>