<template>
    <div>
        <span 
            @click="moveItem(item)"
            class="material-icons mr-2">redo</span>
        </div>
</template>

<script>

export default {
    name: 'NavMove',
    props:{
        item: Object
    },
    methods:{
        moveItem(item){
            this.$emit('moveItem', item)
        }
    }
}
</script>

<style>

</style>