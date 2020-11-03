<template>
  <div>
        <Navbar 
            title="Adicionar Caderno"
            toggleIcon="close"
            @toggleAction="$router.back()"
            :items="itemsMenu"
            @addNotebook="addNotebook"
            :payload="notebook"
        />
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DO CASDERNO</label>
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
            itemsMenu:[
              {icon: 'check', action:'addTaskList'}  
            ],
            notebook: {name:''}
        }
    },
    methods:{
        ...mapActions(['ActionAddTaskList']),
        addNoebook(notebook){
            this.$store.dispatch('ActionAddNotebook', notebook)
            this.$router.push({name: 'Notebooks'})
        }
    }
   
}
</script>

<style lang="scss" scoped>
input[type=color]{
  color: white;
  margin: 5px;
  border: 1px solid black;
  border-radius: 30%;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 40px;
  /*input[type=color] double the scale and clip the offset*/
  -webkit-transform: scale(2);
  transform: scale(2);
  -webkit-clip-path: inset(25%);
  clip-path: inset(25%);
}
  
input[type=color]:before{
  content: 'Escolha outra cor';
  font-size:.5em;
  width:50%;height:50%;
  left:25%;top:35%;
  text-align:center;
  position:absolute;
  }
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
    .btn-danger{
        display: block;
        width: 30px;
        height: 30px;
        padding: 1rem;
        margin: .6rem;
        border: 1px solid black;
        border-radius: 30%;
    }
    /* li {
        display: block;
        width: 30px;
        height: 30px;
        background: olive;
        margin: 0.15rem;
        padding: 1rem;
        border: 3px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
    } */
    .card{
        border: none;
        max-width: 600px;
    }
</style>