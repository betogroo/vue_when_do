<template>
    <div>
        <span 
            @click="searchItem"
            class="material-icons mr-2">search</span>
        </div>
</template>

<script>

export default {
    name: 'NavSearch',
    methods:{
        searchItem(){
            this.$emit('searchItem')
        }
    }
}
</script>

<style>

</style>