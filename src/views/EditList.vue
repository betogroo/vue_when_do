<template>
  <div>
        <Navbar 
            title="Editar Lista"
            toggleIcon="close"
            @toggleAction="$router.back()"
            :payload="actualList"
            :items="itemsMenu"
            @editTaskList="editTaskList"
            @deleteTaskList="deleteTaskList"
            @move='move'
        />
      
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DA LISTA</label>
            <input 
                type="text" class="form-control m-1" id="listName" v-model="actualList.name">
            <hr class="m-0 p-0">
        </form>
            <div class="card m-auto">
                <div class="card-title p-2">
                   <label class="form-label" for="list name">COR DA LISTA</label>
                </div>
                <div class="card-body w-75 m-auto">
                    <ul class=" d-flex flex-wrap list-unstyled justify-content-around">
                <li 
                    v-for="(color) in (colors)" :key="`option_${color}`"
                    class="text-reset">
                        <input type="radio" class="btn-check" :value="color"  :id="`option_${color}`" v-model="actualList.color">
                        <label class="btn btn-danger" :for="`option_${color}`" :style="`background-color: ${color};`"></label>
                </li>
            </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <input  class="input-color" type="color" name="" id="input-color" v-model="actualList.color">
                     
                </div>
            </div>
 
                 
            </div>
           
  </div>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import { mapState } from 'vuex'
export default {
    name: 'AddTask',
    components: { Navbar },
    data(){
        return{
            itemsMenu:[
                {icon: 'redo', action: 'move'},
                {icon: 'delete', action: 'deleteTaskList'},
                {icon: 'check', action: 'editTaskList'}
            ],
            colors: 
               [
                    "#33cc33",
                    "#ff66cc", 
                    "#ff4d4d", 
                    "#e6e6ff", 
                    "#000000", 
                    "#9999ff", 
                    "#ff6600", 
                    "#ff66aa",
                    "#347ddb",
                    '#ff1aff',
                    '#006666',
                    '#ccff33'
               ],
            color: ''
        }
    },
    computed:{
        ...mapState(['actualList'])
    },
    methods:{
       editTaskList(taskList){
           this.$store.dispatch('ActionEditTaskList', taskList)
           this.$router.push({name: 'EditLists'})
       },
       async deleteTaskList(taskList){
           await this.$store.dispatch('ActionDeleteTaskList', taskList)
           await this.$store.dispatch('ActionDeleteTasks', taskList)
           this.$router.push({name: 'EditLists'})
       },
        move(list){
            alert(`Vai mover a lista ${list.name}`)
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