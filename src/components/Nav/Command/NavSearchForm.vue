<template>
   
<div>
    <div class="d-flex align-items-center justify-content-between">
        <span class="material-icons">
            search
        </span>
        <div class="d-flex align-items-center align-items-center">
            <input 
                type="text" class="form-control form-control-sm m-1" id="formGroupExampleInput" placeholder="Procurar Tarefas">
           
                <span
                    @click="voiceSearch"
                    class="material-icons mr-2">keyboard_voice
                </span>
        </div>
        </div>
        
    </div>
        
</template>

<script>

export default {
    name: 'NavSearchForm',
    methods:{
        voiceSearch(){
            alert('Pesquisa por voz indisponível neste aparelho.')
        }
    }
}
</script>

<style>

</style>