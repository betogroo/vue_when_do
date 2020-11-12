<template>
    <div>
        <span 
            @click="moveItem"
            class="material-icons mr-2">redo</span>
        </div>
</template>

<script>

export default {
    name: 'NavMove',
    methods:{
        moveItem(){
            alert('Vai mover o item para outro item')
        }
    }
}
</script>

<style>

</style>