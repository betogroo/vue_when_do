<template>
  <div class="modal fade" id="SelectListModal" tabindex="-1" aria-labelledby="SelectListModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-body">

                <div 
                v-for=" item in taskList" :key="item.id"
                class="form-check">
                    <input 
                        @click="setTaskList(item)" data-dismiss="modal"
                        class="form-check-input" type="radio" name="taskList" :id="item.name" >
                    <label class="form-check-label" for="flexRadioDefault1">{{item.name}}</label>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SelectListModal',
    data(){
        return{
            select: ''
        }
    },
    computed:{
        ...mapState(['taskList'])
    },
    methods:{
        setTaskList(item){
            this.$store.dispatch('ActionSetActualList', item)
            this.$router.push({name: 'AddTask'})
        }
    }
}
</script>

<style>

</style>