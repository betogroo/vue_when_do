<template>
  <div>
      <NavAddList
      />
        <form class="mx-2">
            <label class="form-label" for="list name">NOME DA LISTA</label>
            <input 
                type="text" class="form-control m-1" id="listName">
            <hr class="m-0 p-0">
        </form>
            <div class="card m-auto">
                <div class="card-title p-2">
                   <label class="form-label" for="list name">COR DA LISTA</label>
                </div>
                <div class="card-body w-75 m-auto">
                    <ul class=" d-flex flex-wrap list-unstyled justify-content-around">
                <li 
                    @click="selectColor(color)"
                    v-for="(color) in (colors)" :key="color"
                    :style="`background-color: ${color};`"
                    class="text-reset">
                </li>
            </ul>
                </div>
            </div>
  </div>
</template>

<script>
import NavAddList from '@/components/Nav/NavAddList'
export default {
    name: 'AddTask',
    data(){
        return{
            colors: ['#33cc33', '#ff66cc', '#ff4d4d', '#4d94ff', '#000000', '#9999ff', '#ff6600', '#737373','#c3c388','#4dffdb'],
            color:''
        }
    },
    components: { NavAddList },
    methods:{
        selectColor(color){
            alert(color)
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
    li {
        display: block;
        width: 30px;
        height: 30px;
        background: olive;
        margin: 0.15rem;
        padding: 1rem;
        border: 3px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
    }
    .card{
        border: none
    }
</style>