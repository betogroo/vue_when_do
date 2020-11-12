<template>
   
<div>
    <div class="d-flex align-items-center">
        <span class="material-icons">
            search
        </span>
        <input 
            v-model="search"
            type="text" class="form-control form-control-sm m-1" id="formGroupExampleInput" placeholder="Procurar Tarefas">
        </div>
        <div class="d-flex justify-content-between">
            <span
                @click="voiceSearch"
                class="material-icons mr-2">keyboard_voice</span>
            </div>
    </div>
        
</template>

<script>

export default {
    name: 'NavSearch'
}
</script>

<style>

</style>