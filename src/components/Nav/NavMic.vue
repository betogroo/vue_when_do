<template>
    <div>
        <span 
            @click="voiceSearch()"
            class="material-icons mr-2">keyboard_voice</span>
        </div>
</template>

<script>

export default {
    name: 'NavMic',
    methods:{
        voiceSearch(){
            alert('Pesquisa por voz')
        }
    }
}
</script>

<style>

</style>