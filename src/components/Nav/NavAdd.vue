<template>
    <div>
        <span 
            @click="addItem()"
            class="material-icons mr-2">add</span>
        </div>
</template>

<script>

export default {
    name: 'NavMic',
    methods:{
        addItem(){
            alert('Pesquisa por voz')
        }
    }
}
</script>

<style>

</style>