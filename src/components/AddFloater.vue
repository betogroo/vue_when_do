<template>
  <div
        v-if="openModal===true"
        data-toggle="modal" data-target="#SelectListModal"
        class="add-task">
        <span class="material-icons md-48 text-primary">
            add_circle
        </span>
   </div>
  <div
        v-else
        @click="addItem"
         class="add-task">
        <span class="material-icons md-48 text-primary">
            add_circle
        </span>
   </div>
</template>

<script>
export default {
    name:'AddFloater',
    props:{
        openModal: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        addItem(){
            this.$emit('addItem')
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-task{
    margin: 20px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>