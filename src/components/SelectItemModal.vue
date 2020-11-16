<template>
  <div class="modal fade" id="SelectListModal" tabindex="-1" aria-labelledby="SelectListModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{title}}</h5>
            </div>
                <div class="modal-body">
                    <div 
                    v-for=" item in items" :key="item.id"
                    class="form-check">
                        <input 
                            @click="setItem(item)" data-dismiss="modal"
                            class="form-check-input" type="radio" name="taskList" :id="item.name" >
                        <label class="form-check-label" for="flexRadioDefault1">{{item.name}}</label>
                    </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'SelectItemModal',
    props: { 
        title: String,
        items: Array},
    methods:{
        setItem(item){
            this.$emit('setItem', item)

        }
    }
}
</script>

<style>

</style>