<template>
    <div>
        
  <ul class="list-group list-group-flush">
      <li
        v-for="item in items" :key="'task_'+ item.id"
        :style="`border-left: 5px solid ${taskColor(item)}`"
        class="list-group-item d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
            <span @click="check(item)" class="material-icons-outlined">{{item.checked ? 'check_box' : 'check_box_outline_blank'}}</span>
            <span
                @click="viewTask(item)" 
                class="ml-2"
                :class="{'text-danger': item.priority, 'text-decoration-line-through text-muted': item.checked}">
                    {{item.title}}
            </span>
            </div>
        <div>
            <span
                v-if="!config.confirmDelete"
                @click="deleteTask(item)"
                class="material-icons">delete
            </span>
            <span
                v-else
                @click.prevent="setCurrentTask(item)"
                data-toggle="modal" data-target="#confirmDeleteModal"
                class="material-icons">delete
            </span>
        </div>
      </li>
    </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Tasks',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['taskList', 'config'])
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
        setCurrentTask(item){
            this.$store.dispatch('ActionSetCurrentTask', item)
        },
        taskColor(i){
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
    .list-group-item{
        padding: 0.1rem, 0.5rem!important;
    }
</style>