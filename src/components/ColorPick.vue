<template>
   <div class="card m-auto">
                <div class="card-title p-2">
                   <label class="form-label" for="list name">COR DA LISTA</label>
                </div>
                <div class="card-body m-auto">
                    <ul class=" d-flex flex-wrap list-unstyled justify-content-around">
                <li 
                    v-for="(color) in (colors)" :key="`option_${color}`"
                    class="text-reset">
                        <input type="radio" class="btn-check" :value="color"  :id="`option_${color}`" v-model="item.color">
                        <label class="btn btn-danger" :for="`option_${color}`" :style="`background-color: ${color};`"></label>
                </li>
            </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <input  class="input-color" type="color" name="" id="input-color" v-model="item.color">
                     
                </div>
            </div>
            </div>
</template>

<script>
export default {
    data(){
        return{
            colors: 
               [
                    "#33cc33",
                    "#ff66cc", 
                    "#ff4d4d", 
                    "#babaca", 
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
    props:{ item: Object}
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
    .card, .card-body{
        border: none;
        width: 75%;
        max-width: 400px;
    }
</style>