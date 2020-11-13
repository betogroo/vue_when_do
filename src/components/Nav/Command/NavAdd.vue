<template>
    <div>
        <span 
            @click="addItem()"
            class="material-icons mr-2">add</span>
        </div>
</template>

<script>

export default {
    name: 'NavAdd',
    methods:{
        addItem(){
            this.$emit('addItem')
        }
    }
}
</script>

<style>

</style>