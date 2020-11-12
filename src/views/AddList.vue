<template>
  <div>
        <Navbar 
            title="Adicionar Lista"
            toggleIcon="close"
            @toggleAction="$router.back()"
            @saveItem="addTaskList"
            :item="taskList"
        />
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DA LISTA</label>
            <input 
                type="text" class="form-control m-1" id="listName" v-model="taskList.name">
            <hr class="m-0 p-0">
        </form>
        <ColorPick
            :item="taskList"

        />
  
           
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import ColorPick from '@/components/ColorPick'
import { mapActions } from 'vuex'
export default {
    name: 'AddTask',
    components: { Navbar, ColorPick },
    data(){
        return{
            taskList: {name:'', color:'#000000'},
        }
    },
    methods:{
        ...mapActions(['ActionAddTaskList']),
        addTaskList(taskList){
            this.$store.dispatch('ActionAddTaskList', taskList)
            this.$router.push({name: 'EditLists'})
        }
    }
   
}
</script>

<style lang="scss" scoped>

 
   .form-label {
        color: rgb(16, 180, 209)
    }
    .form-control{
        border: none;
        padding-top: 0;
        padding-bottom: 0;
        min-height: calc(1em + 0.5rem + 1px);
    }
    hr{
        color:  rgb(29, 58, 226);
    }
</style>