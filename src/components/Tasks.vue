<template>
  <ul class="list-group list-group-flush">
      <li
        v-for="item in items" :key="item.id"
        class="list-group-item d-flex align-items-center">
        <span
         @click="check(item)"
        class="material-icons">{{item.icon}}</span>
        <span  class="ml-2" :class="{checked: item.checked}">{{item.title}}</span>
      </li>
    </ul>
</template>

<script>
export default {
    name: 'Tasks',
    props: {
        items: Array
    },
    methods: {
        check(item){
            this.$emit('check', item)
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