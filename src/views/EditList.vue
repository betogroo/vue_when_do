<template>
  <div>
        <SelectItemModal
        title="Selecione o Caderno"
        :items="notebooks"
        @setItem="moveTaskList"
    />
      <DeleteModal 
        title="Lista"
        @deleteCurrentItem="deleteTaskList"
        :item="actualList"
    />
        <Navbar 
            title="Editar Lista"
            toggleIcon="close"
            @toggleAction="$router.back()"
            :item="actualList"
            @moveItem="moveTaskList"
            @deleteItem="deleteTaskList"
            @saveItem="editTaskList"
           
            
        />
      
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DA LISTA</label>
            <input 
                type="text" class="form-control m-1" id="listName" v-model="actualList.name">
            <hr class="m-0 p-0">
        </form>
            

            <ColorPick
                :item="actualList"
            />
           
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import DeleteModal from '@/components/DeleteModal'
import SelectItemModal from '@/components/SelectItemModal'
import ColorPick from '@/components/ColorPick'
import { mapState } from 'vuex'
export default {
    name: 'AddTask',
    components: { Navbar, DeleteModal, ColorPick, SelectItemModal },
    computed:{
        ...mapState(['actualList', 'notebooks'])
    },
    methods:{
       editTaskList(taskList){
           this.$store.dispatch('ActionEditTaskList', taskList)
           this.$router.push({name: 'EditLists'})
       },
       deleteTaskList(){
           this.$store.dispatch('ActionDeleteTaskList', this.actualList)
           this.$store.dispatch('ActionDeleteTasks', this.actualList)
           this.$router.push({name: 'EditLists'})
       },
        moveTaskList(taskList){
            this.$store.dispatch('ActionMoveTaskList', taskList).then(()=>{
                this.$router.push({name: 'EditLists'})
            })
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