<template>
  <ul class="list-group list-group-flush">
      <li
        :style="`border-left: 5px solid ${list.color};`"
        v-for="item in items" :key="item.id"
        class="list-group-item d-flex align-items-center">
        <span @click="check(item)" class="material-icons">{{item.icon}}</span>
        <span
            @click="viewTask(item)" 
            class="ml-2" 
            :class="{checked: item.checked}">
                {{item.title}} - {{item.idList}}
        </span>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'Tasks',
    data(){
        return{
            list:{color: 'purple'}
        }
    },
    props: {
        items: Array
    },
    methods: {
        check(item){
            this.$emit('check', item)
        },
        viewTask(task){
            this.$router.push({name: 'Task', params:{id: task.id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .checked{
        color: lightgray;
        text-decoration: line-through;
    }
</style>