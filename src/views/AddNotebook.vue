<template>
  <div>
        <Navbar 
            title="Adicionar Caderno"
            toggleIcon="close"
            @toggleAction="$router.back()"
            @saveItem="addNotebook"
            :item="notebook"
        />
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DO CADERNO</label>
            <input 
                type="text" class="form-control m-1" id="listName" v-model="notebook.name">
            <hr class="m-0 p-0">
        </form>
           
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import { mapActions } from 'vuex'
export default {
    name: 'AddTask',
    components: { Navbar },
    data(){
        return{
            notebook: {name:''}
        }
    },
    methods:{
        ...mapActions(['ActionAddNotebook']),
        addNotebook(notebook){
            this.$store.dispatch('ActionAddNotebook', notebook)
            this.$router.push({name: 'Notebooks'})
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